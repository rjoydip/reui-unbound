import { useEffect, useMemo, useState } from "react"
import {
  CalendarDaysIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  Cascader,
  CascaderContent,
  CascaderList,
  CascaderPanel,
  CascaderStatus,
  CascaderTrigger,
} from "@/components/reui-unbound/cascader/cascader"
import { CascaderItems } from "@/components/reui-unbound/cascader/cascader-item"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"
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

import { DAYS, SERVICES, SITES, formatRange } from "./data"
import type { Site } from "./data"
import {
  CoverageCell,
  DayCell,
  SiteCell,
  SiteSheet,
  VisitLegend,
} from "./parts"

const STATUS_ITEMS = [
  { value: "done", label: "Done" },
  { value: "due", label: "Due" },
  { value: "missed", label: "Missed" },
  { value: "awaiting", label: "Awaiting" },
]

export default function ServiceVisitPlannerBlock() {
  const [search, setSearch] = useState("")
  const [service, setService] = useState("all")
  const [statuses, setStatuses] = useState<string[]>([])
  const [week, setWeek] = useState<number | null>(null)
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: false },
  ])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [selected, setSelected] = useState<string | null>(null)

  const days = week === null ? DAYS : DAYS.slice(week * 7, week * 7 + 7)

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, service, statuses, week])

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    return SITES.filter((site) => {
      if (service !== "all" && site.service !== service) return false
      if (statuses.length > 0) {
        const hasStatus = site.visits.some((visit) =>
          statuses.includes(visit),
        )
        if (!hasStatus) return false
      }
      if (query === "") return true
      return [site.name, site.manager, site.vendor].some((field) =>
        field.toLowerCase().includes(query),
      )
    })
  }, [search, service, statuses])

  const columns = useMemo<ColumnDef<DataGridFeatures, Site>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Kitchen" column={column} />
        ),
        cell: ({ row }) => <SiteCell site={row.original} />,
        size: 190,
        enableHiding: false,
      },
      ...DAYS.filter((day) => days.some((visible) => visible.index === day.index)).map(
        (day): ColumnDef<DataGridFeatures, Site> => ({
          id: `day-${day.index}`,
          accessorFn: (site) => site.visits[day.index] ?? "none",
          header: () => (
            <div
              className={cn(
                "flex flex-col items-center leading-tight",
                day.weekend && "text-muted-foreground",
              )}
            >
              <span className="text-[11px] font-semibold tabular-nums">
                {day.day}
              </span>
              <span className="text-muted-foreground text-[10px] font-normal">
                {day.weekday}
              </span>
            </div>
          ),
          cell: ({ row }) => (
            <DayCell
              status={row.original.visits[day.index] ?? "none"}
              label={`${row.original.name} ${day.weekday} ${day.day}`}
              onOpen={() => setSelected(row.original.id)}
            />
          ),
          size: 48,
          enableSorting: false,
          meta: {
            headerClassName: "text-center [&>div]:justify-center px-1",
            cellClassName: "text-center px-1",
          },
        }),
      ),
      {
        id: "coverage",
        accessorFn: (site) =>
          site.visits.filter((visit) => visit === "done").length,
        header: () => <span className="text-xs font-semibold">Coverage</span>,
        cell: ({ row }) => <CoverageCell site={row.original} />,
        size: 170,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [week],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (site: Site) => site.id,
    state: {
      sorting,
      pagination,
      columnPinning: { start: ["name"], end: ["coverage"] },
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  })

  const selectedSite =
    SITES.find((site) => site.id === selected) ?? null

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Service visits</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Service Visits</FrameTitle>
                <FrameDescription>
                  {formatRange(days)} · {SITES.length} kitchens ·{" "}
                  {week === null ? "3 weeks" : `week ${week + 1} of 3`}
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon-sm"
                    aria-label="Previous week"
                    onClick={() =>
                      setWeek((current) =>
                        current === null ? 0 : Math.max(0, current - 1),
                      )
                    }
                  >
                    <ChevronLeftIcon />
                  </Button>
                  <Button
                    variant={week === null ? "secondary" : "outline"}
                    size="sm"
                    onClick={() => setWeek(null)}
                  >
                    <CalendarDaysIcon />
                    3 weeks
                  </Button>
                  <Button
                    variant="outline"
                    size="icon-sm"
                    aria-label="Next week"
                    onClick={() =>
                      setWeek((current) =>
                        current === null ? 0 : Math.min(2, current + 1),
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
                    toast("Kitchen added", {
                      description: "The new kitchen starts with no visits.",
                    })
                  }
                >
                  <PlusIcon />
                  Add Kitchen
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    toast("Visit requested", {
                      description: `${filtered.length} kitchens in the current filter.`,
                    })
                  }
                >
                  <CalendarDaysIcon />
                  Book Visit
                </Button>
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No kitchens match your search or filters."
              tableLayout={{ headerBackground: true, columnsPinnable: true }}
              onRowClick={(site) => setSelected(site.id)}
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
                        placeholder="Kitchen, manager or crew..."
                        aria-label="Search kitchens"
                        className="text-sm"
                      />
                    </InputGroup>

                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger size="sm" className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All services</SelectItem>
                        {SERVICES.map((entry) => (
                          <SelectItem key={entry} value={entry}>
                            {entry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Cascader
                      multiple
                      items={STATUS_ITEMS}
                      value={statuses}
                      onValueChange={setStatuses}
                    >
                      <CascaderTrigger
                        aria-label="Filter by visit status"
                        render={<Button variant="outline" size="sm" />}
                      >
                        Status
                        {statuses.length > 0 && (
                          <Badge size="xs" variant="secondary">
                            {statuses.length}
                          </Badge>
                        )}
                        <ChevronDownIcon />
                      </CascaderTrigger>
                      <CascaderContent align="start" className="w-56">
                        <CascaderPanel>
                          <CascaderList>
                            <CascaderItems />
                          </CascaderList>
                          <CascaderStatus />
                        </CascaderPanel>
                      </CascaderContent>
                    </Cascader>

                    <div className="text-muted-foreground text-xs">
                      {filtered.length} of {SITES.length} kitchens
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearch("")
                      setService("all")
                      setStatuses([])
                    }}
                  >
                    Reset filters
                  </Button>
                </div>

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <VisitLegend />
                  <span className="text-muted-foreground text-xs">
                    Coverage counts done visits against the contract minimum
                  </span>
                </div>

                <DataGridPagination
                  sizes={[10, 20]}
                  info="{from} - {to} of {count} kitchens"
                  rowsPerPageLabel="Rows per page"
                  className={cn(filtered.length === 0 && "hidden")}
                />
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <SiteSheet
        site={selectedSite}
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      />
    </>
  )
}
