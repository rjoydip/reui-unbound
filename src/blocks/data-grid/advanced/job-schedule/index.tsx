import { useEffect, useMemo, useState } from "react"
import {
  AlertTriangleIcon,
  CalendarClockIcon,
  ChevronDownIcon,
  CloudRainIcon,
  Columns3Icon,
  PackageSearchIcon,
  PlusIcon,
  SearchIcon,
  XIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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
import { Badge } from "@/components/kit/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import { DataGridColumnVisibility } from "@/components/kit/data-grid/~data-grid-column-visibility"
import { DataGridPagination } from "@/components/kit/data-grid/~data-grid-pagination"
import { DataGridScrollArea } from "@/components/kit/data-grid/~data-grid-scroll-area"
import { DataGridTable } from "@/components/kit/data-grid/~data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"
import { cn } from "cn"

import {
  CREWS,
  CREW_BY_ID,
  JOBS,
  STATUS_META,
  dayLabel,
  finishDay,
  replanJob,
  totalHours,
} from "./data"
import type { Job, JobStatus } from "./data"
import {
  CrewLoad,
  FinishCell,
  JobCell,
  JobStatusBadge,
  RemainingCell,
  ScheduleCell,
  ScheduleHeader,
} from "./parts"
import { JobSheet } from "./job-sheet"

const STATUSES = Object.keys(STATUS_META) as JobStatus[]
const REPLAN_REASONS = ["Rain day", "Late materials", "Inspection hold"]

export function JobScheduleBlock() {
  const [jobs, setJobs] = useState<Job[]>(JOBS)
  const [search, setSearch] = useState("")
  const [crew, setCrew] = useState("all")
  const [status, setStatus] = useState<"all" | JobStatus>("all")
  const [sorting, setSorting] = useState<SortingState>([{ id: "name", desc: false }])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
  const [sheetId, setSheetId] = useState<string | null>(null)
  const [replanId, setReplanId] = useState<string | null>(null)
  const [shift, setShift] = useState("1")
  const [reason, setReason] = useState(REPLAN_REASONS[0]!)

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return jobs.filter((job) => {
      if (crew !== "all" && job.crewId !== crew) return false
      if (status !== "all" && job.status !== status) return false
      if (query === "") return true
      const lead = CREW_BY_ID[job.crewId]!.lead
      return [job.name, job.client, job.address, lead].some((value) =>
        value.toLowerCase().includes(query),
      )
    })
  }, [jobs, search, crew, status])

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, crew, status])

  const activeJob = jobs.find((job) => job.id === sheetId) ?? null
  const replanJobTarget = jobs.find((job) => job.id === replanId) ?? null
  const lateJobs = jobs.filter((job) => job.status === "late")
  const backorders = jobs.flatMap((job) =>
    job.materials.filter((material) => material.status === "backorder"),
  )
  const maxShift = replanJobTarget
    ? Math.max(0, 19 - finishDay(replanJobTarget))
    : 0
  const newFinish =
    replanJobTarget && maxShift > 0
      ? dayLabel(finishDay(replanJob(replanJobTarget, Math.min(Number(shift), maxShift))))
      : null

  const columns = useMemo<ColumnDef<DataGridFeatures, Job>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => <DataGridColumnHeader title="Job" column={column} />,
        cell: ({ row }) => <JobCell job={row.original} />,
        size: 220,
        enableHiding: false,
      },
      {
        id: "schedule",
        header: () => <ScheduleHeader />,
        cell: ({ row }) => <ScheduleCell job={row.original} />,
        size: 640,
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: "remaining",
        accessorFn: (job) => job.slots.filter((slot) => slot.day >= 9).length,
        header: ({ column }) => <DataGridColumnHeader title="Remaining" column={column} />,
        cell: ({ row }) => <RemainingCell job={row.original} />,
        size: 135,
      },
      {
        id: "finish",
        accessorFn: (job) => finishDay(job),
        header: ({ column }) => <DataGridColumnHeader title="Finish" column={column} />,
        cell: ({ row }) => <FinishCell job={row.original} />,
        size: 125,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <div className="flex justify-end" onClick={(event) => event.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon-sm"
              className="text-muted-foreground"
              aria-label={`Replan ${row.original.name}`}
              onClick={() => openReplan(row.original)}
            >
              <CalendarClockIcon />
            </Button>
          </div>
        ),
        size: 44,
        enableSorting: false,
        enableHiding: false,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [jobs],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (job: Job) => job.id,
    state: { sorting, columnVisibility, pagination },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  function openReplan(job: Job) {
    if (job.status === "complete") {
      toast("This job is complete", {
        description: "Replanning only moves work that is still open.",
      })
      return
    }
    setSheetId(null)
    setReplanId(job.id)
    setReason(REPLAN_REASONS[0]!)
    setShift("1")
  }

  function confirmReplan() {
    if (!replanJobTarget || maxShift < 1) return
    const snapshot = jobs
    const applied = Math.min(Number(shift), maxShift)
    const updated = replanJob(replanJobTarget, applied)
    setJobs((current) => current.map((job) => (job.id === updated.id ? updated : job)))
    setReplanId(null)
    setStatus("all")
    toast(`${updated.name} moved ${applied} day${applied === 1 ? "" : "s"}`, {
      description: `${reason} · remaining work now finishes ${dayLabel(finishDay(updated))}.`,
      action: { label: "Undo", onClick: () => setJobs(snapshot) },
    })
  }

  const totalScheduled = filtered.reduce((total, job) => total + totalHours(job), 0)

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Job schedule</h1>

        <Frame className="w-full max-w-[1400px]">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Job Schedule</FrameTitle>
                <FrameDescription>
                  Oct 19 – Nov 13 · {jobs.length} jobs · {CREWS.length} crews ·{" "}
                  {totalScheduled}h scheduled
                </FrameDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setStatus("all")
                    setCrew("all")
                    setSearch("")
                    toast("Today is Fri, Oct 30", {
                      description: "The demo schedule keeps a fixed clock.",
                    })
                  }}
                >
                  Today
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    toast("Add job", { description: "New jobs are created from an accepted estimate." })
                  }
                >
                  <PlusIcon />
                  Add job
                </Button>
              </div>
            </FrameHeader>

            <div className="grid gap-2 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => setStatus("late")}
                className="bg-destructive/5 hover:bg-destructive/10 flex items-start gap-2 rounded-lg border border-destructive/20 p-3 text-left"
              >
                <AlertTriangleIcon className="text-destructive mt-0.5 size-4 shrink-0" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">
                    {lateJobs.length} jobs past due
                  </span>
                  <span className="text-muted-foreground block truncate text-xs">
                    {lateJobs.map((job) => job.name).join(", ")}
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => lateJobs[0] && openReplan(lateJobs[0])}
                className="bg-info/5 hover:bg-info/10 flex items-start gap-2 rounded-lg border border-info/20 p-3 text-left"
              >
                <CloudRainIcon className="text-info-foreground mt-0.5 size-4 shrink-0" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">Rain day to make up</span>
                  <span className="text-muted-foreground block truncate text-xs">
                    Friday lost on Doyle Kitchen · replan remaining days
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  toast("Backorders", {
                    description: `${backorders.length} materials waiting on suppliers. Earliest ETA Nov 2.`,
                  })
                }
                className="bg-warning/5 hover:bg-warning/10 flex items-start gap-2 rounded-lg border border-warning/20 p-3 text-left"
              >
                <PackageSearchIcon className="text-warning-foreground mt-0.5 size-4 shrink-0" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">
                    {backorders.length} materials backordered
                  </span>
                  <span className="text-muted-foreground block truncate text-xs">
                    {backorders[0]?.name ?? "All materials delivered"} · ETA{" "}
                    {backorders[0]?.eta ?? "—"}
                  </span>
                </span>
              </button>
            </div>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No jobs match these filters."
              tableLayout={{ headerBackground: true }}
              onRowClick={(job) => setSheetId(job.id)}
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <InputGroup className="w-full sm:max-w-56">
                      <InputGroupAddon>
                        <SearchIcon />
                      </InputGroupAddon>
                      <InputGroupInput
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Client, street or crew..."
                        aria-label="Search jobs"
                        className="text-sm"
                      />
                    </InputGroup>

                    <Select value={crew} onValueChange={setCrew}>
                      <SelectTrigger size="sm" className="w-40" aria-label="Filter by crew">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All crews</SelectItem>
                        {CREWS.map((entry) => (
                          <SelectItem key={entry.id} value={entry.id}>
                            {entry.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={status}
                      onValueChange={(value) => setStatus(value as "all" | JobStatus)}
                    >
                      <SelectTrigger size="sm" className="w-36" aria-label="Filter by status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All statuses</SelectItem>
                        {STATUSES.map((entry) => (
                          <SelectItem key={entry} value={entry}>
                            {STATUS_META[entry].label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {(search || crew !== "all" || status !== "all") && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSearch("")
                          setCrew("all")
                          setStatus("all")
                        }}
                      >
                        <XIcon />
                        Clear
                      </Button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {filtered.filter((job) => job.status === "late").length > 0 && (
                      <Badge variant="destructive-light" size="lg">
                        {filtered.filter((job) => job.status === "late").length} late
                      </Badge>
                    )}
                    <DataGridColumnVisibility
                      table={table}
                      trigger={
                        <Button variant="outline" size="sm">
                          <Columns3Icon />
                          Columns
                          <ChevronDownIcon />
                        </Button>
                      }
                    />
                  </div>
                </div>

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
                <DataGridPagination
                  sizes={[10, 20]}
                  info="{from} - {to} of {count} jobs"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />

                <CrewLoad jobs={filtered} />

                <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span>
                    {filtered.length} of {jobs.length} jobs · {totalScheduled}h in scope
                  </span>
                  <span>Today Fri, Oct 30 · chips show booked hours or a delivery tag</span>
                </div>
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <JobSheet
        job={activeJob}
        open={activeJob !== null}
        onOpenChange={(open) => {
          if (!open) setSheetId(null)
        }}
        onReplan={openReplan}
      />

      <Dialog
        open={replanJobTarget !== null}
        onOpenChange={(open) => {
          if (!open) setReplanId(null)
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Replan {replanJobTarget?.name}</DialogTitle>
            <DialogDescription>
              Completed days stay put. Remaining work moves forward from Fri, Oct 30.
            </DialogDescription>
          </DialogHeader>

          {replanJobTarget && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="replan-reason" className="text-sm font-medium">
                  Reason
                </label>
                <Select value={reason} onValueChange={setReason}>
                  <SelectTrigger id="replan-reason" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {REPLAN_REASONS.map((entry) => (
                      <SelectItem key={entry} value={entry}>
                        {entry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="replan-shift" className="text-sm font-medium">
                  Move remaining work
                </label>
                <Select value={shift} onValueChange={setShift}>
                  <SelectTrigger id="replan-shift" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3].map((days) => (
                      <SelectItem key={days} value={String(days)} disabled={days > maxShift}>
                        {days} workday{days === 1 ? "" : "s"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {maxShift === 0 && (
                  <span className="text-destructive text-xs">
                    No slack left inside the four-week window. Extend the window first.
                  </span>
                )}
              </div>

              <div className="bg-muted/25 rounded-lg border p-3 text-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">New finish</span>
                  <span className="font-medium">{newFinish ?? "—"}</span>
                </div>
                <div className="text-muted-foreground mt-1 flex items-center justify-between gap-2 text-xs">
                  <span>Current finish</span>
                  <span>{dayLabel(finishDay(replanJobTarget))}</span>
                </div>
              </div>

              <p className={cn("text-muted-foreground text-xs")}>
                The crew and the client are notified. Use Undo in the toast if
                the rain day changes again.
              </p>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setReplanId(null)}>
              Cancel
            </Button>
            <Button disabled={!replanJobTarget || maxShift < 1} onClick={confirmReplan}>
              <CalendarClockIcon />
              Move work
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default JobScheduleBlock
