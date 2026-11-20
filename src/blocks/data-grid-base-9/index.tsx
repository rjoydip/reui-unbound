import { useMemo, useState } from "react"
import {
  ChevronDownIcon,
  Columns3Icon,
  DownloadIcon,
  FunnelIcon,
  MoreHorizontalIcon,
  PlayIcon,
  SearchIcon,
  SendIcon,
  SlidersHorizontalIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react"
import type {
  ColumnDef,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
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
import { DataGridColumnVisibility } from "@/components/reui-unbound/data-grid/data-grid-column-visibility"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/reui-unbound/data-grid/data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"
import { Filters } from "@/components/reui-unbound/filters/filters"
import {
  createFilterQuery,
  isFilterRule,
} from "@/components/reui-unbound/filters/filters-query"
import type { FilterQuery } from "@/components/reui-unbound/filters/filters-types"
import type { FilterField } from "@/components/reui-unbound/filters/filters-types"
import { cn } from "cn"

import {
  LOGS,
  STATUS_TONE,
  TRAFFIC,
  groupOf,
  replayOutcome,
  trafficByGroup,
  trafficTotals,
} from "./data"
import type { RequestLog } from "./data"
import { LogSheet } from "./log-sheet"
import { TrafficChart, type ZoomRange } from "./traffic-chart"

const logFilterFields: FilterField[] = [
  {
    id: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "2xx", label: "2xx" },
      { value: "4xx", label: "4xx" },
      { value: "5xx", label: "5xx" },
    ],
    operators: [
      { value: "is", label: "is" },
      { value: "is-not", label: "is not" },
    ],
    defaultOperator: "is",
  },
  {
    id: "method",
    label: "Method",
    type: "select",
    options: [
      { value: "GET", label: "GET" },
      { value: "POST", label: "POST" },
    ],
    operators: [
      { value: "is", label: "is" },
      { value: "is-not", label: "is not" },
    ],
    defaultOperator: "is",
  },
  {
    id: "path",
    label: "Path",
    type: "text",
  },
  {
    id: "latency",
    label: "Latency",
    type: "number",
    operators: [
      { value: "at-least", label: "is at least" },
      { value: "under", label: "is under" },
    ],
    defaultOperator: "at-least",
  },
]

function minutesAgo(log: RequestLog) {
  const match = log.time.match(/(\d{2}):(\d{2}):(\d{2})/)
  if (!match) return 0
  const seconds =
    Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3])
  return (15 * 3600 - seconds) / 60
}

function matchesLogQuery(log: RequestLog, query: FilterQuery): boolean {
  const rules = query.rules.filter(
    (node) => isFilterRule(node) && node.operator !== "",
  )

  return rules.every((rule) => {
    if (!isFilterRule(rule) || rule.value === undefined) return true
    const value = String(Array.isArray(rule.value) ? rule.value[0] : rule.value)
    const field = rule.path[0]

    let result = true
    if (field === "status") result = groupOf(log) === value
    if (field === "method") result = log.method === value
    if (field === "path")
      result = log.path.toLowerCase().includes(value.toLowerCase())
    if (field === "latency") {
      const target = Number(value)
      result =
        rule.operator === "under" ? log.latency < target : log.latency >= target
    }

    return rule.operator === "is-not" ? !result : result
  })
}

function exportLogs(logs: RequestLog[]) {
  const rows = [
    ["Time", "Status", "Method", "URL", "Latency", "Region"],
    ...logs.map((log) => [
      log.time,
      String(log.status),
      log.method,
      `${log.host}${log.path}`,
      String(log.latency),
      `${log.region.code} ${log.region.city}`,
    ]),
  ]
  const csv = rows
    .map((row) => row.map((value) => `"${value}"`).join(","))
    .join("\n")
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }))
  const link = document.createElement("a")
  link.href = url
  link.download = "requests.csv"
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
  toast("Requests exported", {
    description: `${logs.length} rows written to requests.csv.`,
  })
}

export function ApiRequestLogsBlock() {
  const [logs, setLogs] = useState<RequestLog[]>(LOGS)
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState<FilterQuery>(() => createFilterQuery())
  const [windowHours, setWindowHours] = useState("24")
  const [zoom, setZoom] = useState<ZoomRange | null>(null)
  const [sorting, setSorting] = useState<SortingState>([
    { id: "time", desc: false },
  ])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [viewing, setViewing] = useState<RequestLog | null>(null)

  const buckets = useMemo(
    () =>
      TRAFFIC.filter((bucket) => bucket.minutesAgo <= Number(windowHours) * 60),
    [windowHours],
  )

  const stats = trafficTotals(buckets)
  const groups = trafficByGroup(buckets)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return logs
      .filter((log) => minutesAgo(log) <= Number(windowHours) * 60)
      .filter((log) =>
        zoom === null
          ? true
          : minutesAgo(log) >= zoom.from && minutesAgo(log) < zoom.to,
      )
      .filter((log) => matchesLogQuery(log, query))
      .filter((log) => {
        if (term === "") return true
        return [log.path, log.host, log.region.city, String(log.status)].some(
          (field) => field.toLowerCase().includes(term),
        )
      })
  }, [logs, search, query, windowHours, zoom])

  function replay(log: RequestLog) {
    const outcome = replayOutcome(log.status)
    toast(`Replay ${log.method} ${log.host}${log.path}`, {
      description: `${outcome.status} — ${outcome.message}`,
    })
  }

  function removeSelected() {
    const ids = Object.keys(rowSelection).filter((id) => rowSelection[id])
    const removed = logs.filter((log) => ids.includes(log.id))
    setLogs((current) => current.filter((log) => !ids.includes(log.id)))
    setRowSelection({})
    toast(
      `${removed.length} request${removed.length === 1 ? "" : "s"} removed`,
      {
        description: "Only the local log list changes in this demo.",
        action: {
          label: "Undo",
          onClick: () =>
            setLogs((current) => {
              const existing = new Set(current.map((log) => log.id))
              const restore = removed.filter((log) => !existing.has(log.id))
              return [...current, ...restore].sort(
                (a, b) => minutesAgo(b) - minutesAgo(a),
              )
            }),
        },
      },
    )
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, RequestLog>[]>(
    () => [
      {
        id: "select",
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        size: 32,
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: "time",
        accessorFn: (log) => minutesAgo(log),
        header: ({ column }) => (
          <DataGridColumnHeader title="Time" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-sm tabular-nums">{row.original.time}</span>
        ),
        size: 160,
        enableHiding: false,
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataGridColumnHeader title="Status" column={column} />
        ),
        cell: ({ row }) => {
          const group = groupOf(row.original)
          return (
            <span className="flex items-center gap-1.5 text-sm font-medium">
              <span
                className={cn("size-1.5 rounded-full", STATUS_TONE[group].dot)}
              />
              {row.original.status}
            </span>
          )
        },
        size: 90,
      },
      {
        accessorKey: "method",
        header: ({ column }) => (
          <DataGridColumnHeader title="Method" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-muted-foreground text-sm">
            {row.original.method}
          </span>
        ),
        size: 90,
      },
      {
        accessorKey: "path",
        header: ({ column }) => (
          <DataGridColumnHeader title="URL" column={column} />
        ),
        cell: ({ row }) => (
          <span className="block max-w-72 truncate font-mono text-xs">
            {row.original.host}
            {row.original.path}
          </span>
        ),
        size: 280,
      },
      {
        accessorKey: "latency",
        header: ({ column }) => (
          <DataGridColumnHeader title="Latency" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-sm tabular-nums">
            {row.original.latency} ms
          </span>
        ),
        size: 100,
      },
      {
        id: "region",
        accessorFn: (log) => log.region.code,
        header: ({ column }) => (
          <DataGridColumnHeader title="Region" column={column} />
        ),
        cell: ({ row }) => (
          <span className="flex items-center gap-1.5 text-sm">
            <Badge variant="outline" size="sm" className="font-mono">
              {row.original.region.code}
            </Badge>
            {row.original.region.city}
          </span>
        ),
        size: 150,
      },
      {
        id: "timing",
        accessorFn: (log) => log.latency,
        header: ({ column }) => (
          <DataGridColumnHeader title="Timing" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-1" aria-hidden>
            <div className="bg-muted h-1.5 w-16 overflow-hidden rounded-full">
              <div
                className={cn(
                  "h-full rounded-full",
                  row.original.status >= 500
                    ? "bg-destructive"
                    : row.original.status >= 400
                      ? "bg-warning"
                      : "bg-muted-foreground/60",
                )}
                style={{
                  width: `${Math.min(100, (row.original.latency / 1000) * 100)}%`,
                }}
              />
            </div>
          </div>
        ),
        size: 90,
        enableSorting: false,
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
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem onSelect={() => setViewing(row.original)}>
                  View request
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => replay(row.original)}>
                  <PlayIcon />
                  Replay
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={() => {
                    setLogs((current) =>
                      current.filter((log) => log.id !== row.original.id),
                    )
                    toast("Request removed")
                  }}
                >
                  <Trash2Icon />
                  Remove
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [logs],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (log: RequestLog) => log.id,
    state: {
      sorting,
      columnVisibility,
      pagination,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  const selected = table.getSelectedRowModel().rows.map((row) => row.original)

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">API requests</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>API Requests</FrameTitle>
                <FrameDescription>
                  3 hosts across 6 edge regions, in UTC
                </FrameDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => exportLogs(filtered)}
                  disabled={filtered.length === 0}
                >
                  <DownloadIcon />
                  Export
                </Button>
                <Button onClick={() => toast("Response test sent")}>
                  <SendIcon />
                  Send Request
                </Button>
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No requests match this window or filters."
              onRowClick={(log) => setViewing(log)}
              tableLayout={{ headerBackground: true }}
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
                        placeholder="Search requests..."
                        aria-label="Search requests"
                        className="text-sm"
                      />
                      <InputGroupAddon align="inline-end">
                        <Kbd>&#8984;K</Kbd>
                      </InputGroupAddon>
                    </InputGroup>

                    <Filters
                      fields={logFilterFields}
                      query={query}
                      onQueryChange={setQuery}
                      size="sm"
                      showClear
                      trigger={
                        <Button variant="outline" size="sm">
                          <FunnelIcon />
                          Filter
                        </Button>
                      }
                    />

                    <Select value={windowHours} onValueChange={setWindowHours}>
                      <SelectTrigger size="sm" className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">Last 6 hours</SelectItem>
                        <SelectItem value="12">Last 12 hours</SelectItem>
                        <SelectItem value="24">Last 24 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-2">
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
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label="Reset view"
                      onClick={() => {
                        setSearch("")
                        setQuery(createFilterQuery())
                        setZoom(null)
                        setSorting([{ id: "time", desc: false }])
                        setPagination({ pageIndex: 0, pageSize: 10 })
                        setRowSelection({})
                      }}
                    >
                      <SlidersHorizontalIcon />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div className="flex flex-wrap items-end gap-6">
                    <div>
                      <div className="text-muted-foreground text-xs">
                        Requests
                      </div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-xl font-semibold tabular-nums">
                          {stats.requests}
                        </span>
                        <Badge variant="success-light" size="sm">
                          &#8593; 19.6%
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">
                        Errors
                      </div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-xl font-semibold tabular-nums">
                          {stats.errorRate.toFixed(1)}%
                        </span>
                        <Badge variant="destructive-light" size="sm">
                          &#8593; 9.2 pts
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">
                        Availability
                      </div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-xl font-semibold tabular-nums">
                          {stats.availability.toFixed(2)}%
                        </span>
                        <Badge variant="destructive-light" size="sm">
                          &#8595; 4.91 pts
                        </Badge>
                      </div>
                    </div>
                    <span className="text-muted-foreground pb-1 text-xs">
                      vs prior {windowHours} hours
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pb-1 text-xs">
                    {(["2xx", "4xx", "5xx"] as const).map((group) => (
                      <span key={group} className="flex items-center gap-1.5">
                        <span
                          className={cn(
                            "size-2 rounded-full",
                            STATUS_TONE[group].dot,
                          )}
                        />
                        {group} {groups[group]}
                      </span>
                    ))}
                  </div>
                </div>

                <TrafficChart
                  buckets={buckets}
                  zoom={zoom}
                  onZoomChange={(next) => {
                    setZoom(next)
                    setPagination((current) => ({ ...current, pageIndex: 0 }))
                  }}
                />

                {selected.length > 0 && (
                  <div className="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5">
                    <div className="text-sm font-medium">
                      {selected.length} selected
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => exportLogs(selected)}
                      >
                        <DownloadIcon />
                        Export
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={removeSelected}
                      >
                        <Trash2Icon />
                        Remove
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setRowSelection({})}
                      >
                        <XIcon />
                        Clear
                      </Button>
                    </div>
                  </div>
                )}

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
                <DataGridPagination
                  sizes={[10, 20, 30]}
                  info="{from} - {to} of {count} requests"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <LogSheet
        log={viewing}
        open={viewing !== null}
        onOpenChange={(open) => {
          if (!open) setViewing(null)
        }}
        onReplay={replay}
      />
    </>
  )
}
