import { useMemo, useState } from "react"
import { format } from "date-fns"
import { PlusIcon } from "lucide-react"
import type {
  ColumnDef,
  PaginationState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  DEFAULT_WEEK,
  TIMESHEET_PEOPLE,
  coverage,
  entriesFor,
  trackedTimeState,
  weekDays,
  weekTotal,
} from "./data"
import type { Person } from "./data"
import { DayCell, PersonCell, TotalCell, WeekNavigator } from "./parts"

const TEAMS = ["Design", "Engineering", "Delivery", "Support"]

export function WeeklyTimesheetBlock() {
  const [weekStart, setWeekStart] = useState(DEFAULT_WEEK)
  const [team, setTeam] = useState("all")
  const [tracked, setTracked] = useState("all")
  const [billing, setBilling] = useState("all")
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const days = weekDays(weekStart)

  const people = useMemo(
    () =>
      TIMESHEET_PEOPLE.filter((person) => {
        if (team !== "all" && person.team !== team) return false

        const percent = coverage(
          weekTotal(person, weekStart),
          person.targetMinutes,
        )
        const state = trackedTimeState(percent)
        if (tracked !== "all" && state !== tracked) return false

        if (billing !== "all" && person.billable !== (billing === "billable")) {
          return false
        }

        return true
      }),
    [team, tracked, billing, weekStart],
  )

  const columns = useMemo<ColumnDef<DataGridFeatures, Person>[]>(() => {
    const dayColumns: ColumnDef<DataGridFeatures, Person>[] = days.map(
      (date, index) => ({
        id: `day-${index}`,
        accessorFn: (person) =>
          entriesFor(person, weekStart)[index]?.minutes ?? 0,
        header: () => (
          <span className="whitespace-nowrap text-xs">
            {format(date, "EEE MMM d")}
          </span>
        ),
        cell: ({ row }) => (
          <DayCell entry={entriesFor(row.original, weekStart)[index]} />
        ),
        size: 106,
        enableSorting: false,
        enableHiding: false,
      }),
    )

    return [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="People" column={column} />
        ),
        cell: ({ row }) => <PersonCell person={row.original} />,
        size: 200,
        enableHiding: false,
      },
      ...dayColumns,
      {
        id: "total",
        accessorFn: (person) => weekTotal(person, weekStart),
        header: ({ column }) => (
          <DataGridColumnHeader title="Total" column={column} />
        ),
        cell: ({ row }) => (
          <TotalCell person={row.original} weekStart={weekStart} />
        ),
        size: 100,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
    ]
  }, [days, weekStart])

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: people,
    pageCount: Math.ceil(people.length / pagination.pageSize),
    getRowId: (person: Person) => person.id,
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  })

  const totalMinutes = people.reduce(
    (sum, person) => sum + weekTotal(person, weekStart),
    0,
  )

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Timesheets</h1>

      <Frame className="w-full max-w-7xl">
        <FramePanel>
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
            <div>
              <FrameTitle>Timesheets</FrameTitle>
              <FrameDescription>Weekly team timesheets</FrameDescription>
            </div>
            <Button onClick={() => toast("New entry")}>
              <PlusIcon />
              New entry
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={people.length}
            emptyMessage="No team members match these filters."
            tableLayout={{ headerBackground: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <Select value={team} onValueChange={setTeam}>
                    <SelectTrigger size="sm" className="w-40">
                      <SelectValue placeholder="People" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">People</SelectItem>
                      {TEAMS.map((entry) => (
                        <SelectItem key={entry} value={entry}>
                          {entry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={tracked} onValueChange={setTracked}>
                    <SelectTrigger size="sm" className="w-40">
                      <SelectValue placeholder="Tracked time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tracked time</SelectItem>
                      <SelectItem value="under">Under target</SelectItem>
                      <SelectItem value="on">On track</SelectItem>
                      <SelectItem value="over">Overtime</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={billing} onValueChange={setBilling}>
                    <SelectTrigger size="sm" className="w-44">
                      <SelectValue placeholder="Billable status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Billing status</SelectItem>
                      <SelectItem value="billable">Billable</SelectItem>
                      <SelectItem value="non-billable">Non-billable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <WeekNavigator weekStart={weekStart} onChange={setWeekStart} />
              </div>

              <DataGridContainer>
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <DataGridPagination
                sizes={[5, 10, 20]}
                info="{from} - {to} of {count} entries"
                rowsPerPageLabel="Rows per page"
                className={people.length === 0 ? "hidden" : undefined}
              />
            </div>
          </DataGrid>
        </FramePanel>
      </Frame>

      <div className="sr-only" aria-live="polite">
        {people.length} people, {Math.round(totalMinutes / 60)} hours tracked
        the week of {format(weekStart, "MMMM d")}
      </div>
    </div>
  )
}
