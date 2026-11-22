import { useEffect, useMemo, useState } from "react"
import {
  CalendarPlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
  SearchIcon,
  UserPlusIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import { DataGridPagination } from "@/components/kit/data-grid/~data-grid-pagination"
import { DataGridScrollArea } from "@/components/kit/data-grid/~data-grid-scroll-area"
import { DataGridTable } from "@/components/kit/data-grid/~data-grid-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "cn"

import {
  TECHNICIANS,
  TEAMS,
  WEEK_WINDOWS,
  baseDay,
  extraKey,
  offDays,
  weekHours,
} from "./data"
import type { Technician } from "./data"
import {
  BookingDialog,
  DayCell,
  TechCell,
  TechnicianSheet,
  UtilisationCell,
} from "./parts"

export default function TechnicianCapacityBlock() {
  const [week, setWeek] = useState(0)
  const [extras, setExtras] = useState<Record<string, number>>({})
  const [search, setSearch] = useState("")
  const [team, setTeam] = useState("all")
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: false },
  ])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [selected, setSelected] = useState<string | null>(null)
  const [booking, setBooking] = useState<{
    open: boolean
    techId: string | null
  }>({ open: false, techId: null })

  const weekWindow = WEEK_WINDOWS[week]

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, team])

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    return TECHNICIANS.filter((tech) => {
      if (team !== "all" && tech.team !== team) return false
      if (query === "") return true
      return [tech.name, tech.trade, tech.team].some((field) =>
        field.toLowerCase().includes(query),
      )
    })
  }, [search, team])

  const columns = useMemo<ColumnDef<DataGridFeatures, Technician>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Technician" column={column} />
        ),
        cell: ({ row }) => (
          <TechCell tech={row.original} week={week} extras={extras} />
        ),
        size: 210,
        enableHiding: false,
      },
      ...WEEK_WINDOWS[week].days.map(
        (day, index): ColumnDef<DataGridFeatures, Technician> => ({
          id: `day-${index}`,
          accessorFn: (tech) => {
            const plan = baseDay(tech, week, index)
            return plan.state === "booked"
              ? plan.booked + (extras[extraKey(tech.id, week, index)] ?? 0)
              : 0
          },
          header: () => (
            <div className="flex flex-col items-center leading-tight">
              <span className="text-[11px] font-semibold whitespace-nowrap">
                {day.weekday} {day.date}
              </span>
              <span className="text-muted-foreground text-[10px] font-normal">
                8h cap
              </span>
            </div>
          ),
          cell: ({ row }) => (
            <DayCell
              plan={baseDay(row.original, week, index)}
              extra={extras[extraKey(row.original.id, week, index)] ?? 0}
              capacity={row.original.capacity}
              onOpen={() =>
                setBooking({ open: true, techId: row.original.id })
              }
            />
          ),
          size: 96,
          enableSorting: false,
          meta: {
            headerClassName: "text-center [&>div]:justify-center",
            cellClassName: "text-center px-1",
          },
        }),
      ),
      {
        id: "utilisation",
        accessorFn: (tech) => {
          const hours = weekHours(tech, week, extras)
          return Math.round((hours / (tech.capacity * 5)) * 100)
        },
        header: () => (
          <span className="text-xs font-semibold">Utilisation</span>
        ),
        cell: ({ row }) => (
          <UtilisationCell
            tech={row.original}
            week={week}
            extras={extras}
          />
        ),
        size: 140,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <div
            className="flex justify-end"
            onClick={(event) => event.stopPropagation()}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-muted-foreground"
                >
                  <MoreHorizontalIcon />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onSelect={() => setSelected(row.original.id)}>
                  View profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    setBooking({ open: true, techId: row.original.id })
                  }
                >
                  Add booking
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => {
                    setExtras((current) => {
                      const next = { ...current }
                      Object.keys(next)
                        .filter((key) =>
                          key.startsWith(`${row.original.id}-${week}-`),
                        )
                        .forEach((key) => delete next[key])
                      return next
                    })
                    toast("Added hours cleared", {
                      description: `${row.original.name} · ${weekWindow.label}`,
                    })
                  }}
                >
                  Clear added hours
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
        size: 44,
        enableSorting: false,
        enableHiding: false,
      },
    ],
    [week, extras, weekWindow.label],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (tech: Technician) => tech.id,
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  })

  const selectedTech =
    TECHNICIANS.find((tech) => tech.id === selected) ?? null

  const totalBooked = TECHNICIANS.reduce(
    (sum, tech) => sum + weekHours(tech, week, extras),
    0,
  )
  const overtimeCount = TECHNICIANS.filter((tech) =>
    tech.weeks[week].days.some((plan, index) => {
      const base = plan.state === "booked" ? plan.booked : 0
      return (
        base + (extras[extraKey(tech.id, week, index)] ?? 0) > tech.capacity
      )
    }),
  ).length

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Technician capacity</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Technician Capacity</FrameTitle>
                <FrameDescription>
                  {weekWindow.label} · {TECHNICIANS.length} technicians ·{" "}
                  {TEAMS.length} teams · {totalBooked}h booked
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon-sm"
                    aria-label="Previous week"
                    disabled={week === 0}
                    onClick={() => setWeek((current) => Math.max(0, current - 1))}
                  >
                    <ChevronLeftIcon />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setWeek(0)}
                  >
                    Today
                  </Button>
                  <Button
                    variant="outline"
                    size="icon-sm"
                    aria-label="Next week"
                    disabled={week === WEEK_WINDOWS.length - 1}
                    onClick={() =>
                      setWeek((current) =>
                        Math.min(WEEK_WINDOWS.length - 1, current + 1),
                      )
                    }
                  >
                    <ChevronRightIcon />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    toast("Technician invited", {
                      description: "An onboarding invite is on its way.",
                    })
                  }
                >
                  <UserPlusIcon />
                  Add Technician
                </Button>
                <Button
                  size="sm"
                  onClick={() => setBooking({ open: true, techId: null })}
                >
                  <CalendarPlusIcon />
                  Book Service
                </Button>
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No technicians match your search or team filter."
              tableLayout={{ headerBackground: true }}
              onRowClick={(tech) => setSelected(tech.id)}
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <InputGroup className="w-full sm:max-w-64">
                      <InputGroupAddon>
                        <SearchIcon />
                      </InputGroupAddon>
                      <InputGroupInput
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Technician, trade or team..."
                        aria-label="Search technicians"
                        className="text-sm"
                      />
                    </InputGroup>

                    <Select value={team} onValueChange={setTeam}>
                      <SelectTrigger size="sm" className="w-36">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All teams</SelectItem>
                        {TEAMS.map((entry) => (
                          <SelectItem key={entry} value={entry}>
                            Team {entry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-xs">
                      <span className="flex items-center gap-1">
                        <span className="bg-success size-2 rounded-sm" />
                        On track
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="bg-warning size-2 rounded-sm" />
                        Under-used
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="bg-destructive size-2 rounded-sm" />
                        Overtime
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="bg-muted-foreground/30 size-2 rounded-sm" />
                        Off / holiday
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {overtimeCount > 0 && (
                      <Badge variant="destructive-light" size="sm">
                        {overtimeCount} over capacity
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSearch("")
                        setTeam("all")
                      }}
                    >
                      Reset view
                    </Button>
                  </div>
                </div>

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>

                <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span>
                    {filtered.length} of {TECHNICIANS.length} technicians ·{" "}
                    {TECHNICIANS.reduce(
                      (sum, tech) => sum + offDays(tech, week),
                      0,
                    )}{" "}
                    days off this week
                  </span>
                  <span>Click a day cell to add hours</span>
                </div>

                <DataGridPagination
                  sizes={[10, 20]}
                  info="{from} - {to} of {count} technicians"
                  rowsPerPageLabel="Rows per page"
                  className={cn(filtered.length === 0 && "hidden")}
                />
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <TechnicianSheet
        tech={selectedTech}
        week={week}
        extras={extras}
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
        onBook={(techId) => setBooking({ open: true, techId })}
      />

      {booking.open && (
        <BookingDialog
          key={`${booking.techId ?? "any"}-${week}`}
          open={booking.open}
          week={week}
          techId={booking.techId}
          onOpenChange={(open) =>
            setBooking((current) => ({ ...current, open }))
          }
          onSave={(input) => {
            setExtras((current) => ({
              ...current,
              [extraKey(input.techId, input.week, input.day)]:
                (current[extraKey(input.techId, input.week, input.day)] ?? 0) +
                input.hours,
            }))
            const tech = TECHNICIANS.find((entry) => entry.id === input.techId)
            toast("Booking added", {
              description: `${tech?.name ?? "Technician"} · ${input.service} · ${input.hours}h`,
            })
          }}
        />
      )}
    </>
  )
}
