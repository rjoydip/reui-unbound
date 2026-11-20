import { useMemo, useState } from "react"
import {
  CheckCircle2Icon,
  InfoIcon,
  FunnelIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  TriangleAlertIcon,
} from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/reui-unbound/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"
import { cn } from "cn"

import {
  REQUEST_PRIORITIES,
  REQUEST_STATUSES,
  REQUESTS,
} from "./data"
import type { IntakeRequest, RequestPriority, RequestStatus } from "./data"

const STATUS_VARIANT: Record<RequestStatus, "success-light" | "warning-light" | "destructive-light"> = {
  Active: "success-light",
  Draft: "warning-light",
  Blocked: "destructive-light",
}

const PRIORITY_VARIANT: Record<RequestPriority, "destructive-light" | "warning-light" | "success-light"> = {
  High: "destructive-light",
  Medium: "warning-light",
  Low: "success-light",
}

const PRIORITY_DOT: Record<RequestPriority, string> = {
  High: "bg-destructive",
  Medium: "bg-warning",
  Low: "bg-success",
}

function Confidence({ value }: { value: number }) {
  const filled = Math.round(value / 20)
  const tone = value >= 80 ? "bg-success" : value >= 60 ? "bg-info" : value >= 50 ? "bg-warning" : "bg-destructive"
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={cn(
              "h-1.5 w-5 rounded-full",
              index < filled ? tone : "bg-muted",
            )}
          />
        ))}
      </div>
      <span className="text-sm tabular-nums">{value}%</span>
    </div>
  )
}

export function ProjectIntakeBlock() {
  const [rows, setRows] = useState(REQUESTS)
  const [saved, setSaved] = useState(REQUESTS)
  const [search, setSearch] = useState("")
  const [statuses, setStatuses] = useState<RequestStatus[]>([])
  const [priorities, setPriorities] = useState<RequestPriority[]>([])
  const [editing, setEditing] = useState<string | null>(null)
  const [budget, setBudget] = useState("")

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return rows.filter((row) => {
      if (statuses.length > 0 && !statuses.includes(row.status)) return false
      if (priorities.length > 0 && !priorities.includes(row.priority)) return false
      if (!term) return true
      return [row.title, row.code, row.requester].some((value) =>
        value.toLowerCase().includes(term),
      )
    })
  }, [rows, search, statuses, priorities])

  const changeCount = rows.reduce((total, row) => {
    const previous = saved.find((entry) => entry.id === row.id)
    if (!previous) return total + Object.keys(row).filter((key) => key !== "id").length
    return (
      total +
      (Object.keys(row) as (keyof IntakeRequest)[]).filter(
        (key) => key !== "id" && row[key] !== previous[key],
      ).length
    )
  }, 0)
  const dirty = changeCount > 0

  const columns = useMemo<ColumnDef<DataGridFeatures, IntakeRequest>[]>(
    () => [
      {
        id: "request",
        accessorKey: "title",
        header: ({ column }) => <DataGridColumnHeader title="Request" column={column} />,
        cell: ({ row }) => (
          <div className="min-w-0">
            <div className="truncate font-medium">{row.original.title}</div>
            <div className="text-muted-foreground truncate text-xs">
              {row.original.code} · {row.original.requester}
            </div>
          </div>
        ),
        size: 260,
        enableHiding: false,
      },
      {
        id: "budget",
        accessorKey: "budget",
        header: ({ column }) => <DataGridColumnHeader title="Budget" column={column} />,
        cell: ({ row }) =>
          editing === row.original.id ? (
            <Input
              autoFocus
              type="number"
              className="h-7 w-28 text-sm"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              onBlur={() => {
                const value = Number(budget)
                if (Number.isFinite(value)) {
                  setRows((current) =>
                    current.map((entry) =>
                      entry.id === row.original.id ? { ...entry, budget: value } : entry,
                    ),
                  )
                }
                setEditing(null)
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") event.currentTarget.blur()
                if (event.key === "Escape") setEditing(null)
              }}
            />
          ) : (
            <button
              type="button"
              className="hover:bg-muted -mx-1 rounded px-1 text-sm tabular-nums"
              onClick={() => {
                setEditing(row.original.id)
                setBudget(String(row.original.budget))
              }}
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(row.original.budget)}
            </button>
          ),
        size: 130,
      },
      {
        id: "due",
        accessorKey: "dueDays",
        header: ({ column }) => <DataGridColumnHeader title="Due" column={column} />,
        cell: ({ row }) => (
          <span className="flex items-center gap-1.5 text-sm tabular-nums">
            {row.original.dueDays <= 8 && (
              <TriangleAlertIcon className="size-3.5 text-warning" />
            )}
            {row.original.dueDays}d
          </span>
        ),
        size: 90,
      },
      {
        id: "confidence",
        accessorKey: "confidence",
        header: ({ column }) => <DataGridColumnHeader title="Confidence" column={column} />,
        cell: ({ row }) => <Confidence value={row.original.confidence} />,
        size: 190,
      },
      {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
        cell: ({ row }) => (
          <Badge variant={STATUS_VARIANT[row.original.status]} size="sm">
            {row.original.status}
          </Badge>
        ),
        size: 105,
      },
      {
        id: "priority",
        accessorKey: "priority",
        header: ({ column }) => <DataGridColumnHeader title="Priority" column={column} />,
        cell: ({ row }) => (
          <Badge variant={PRIORITY_VARIANT[row.original.priority]} size="sm" className="gap-1.5">
            <span className={cn("size-1.5 rounded-full", PRIORITY_DOT[row.original.priority])} />
            {row.original.priority}
          </Badge>
        ),
        size: 110,
      },
      {
        id: "approved",
        accessorKey: "approved",
        header: ({ column }) => <DataGridColumnHeader title="Approved" column={column} />,
        cell: ({ row }) => (
          <Switch
            checked={row.original.approved}
            onCheckedChange={(checked) =>
              setRows((current) =>
                current.map((entry) =>
                  entry.id === row.original.id ? { ...entry, approved: checked } : entry,
                ),
              )
            }
            aria-label={`${row.original.title} approved`}
          />
        ),
        size: 90,
      },
      {
        id: "actions",
        header: () => null,
        cell: () => (
          <Button variant="ghost" size="icon-sm" aria-label="Request actions">
            <MoreHorizontalIcon />
          </Button>
        ),
        size: 40,
        enableSorting: false,
      },
    ],
    [editing, budget],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    getRowId: (row) => row.id,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Project intake</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel className="gap-0">
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3 pb-1 -mx-4 -mt-4 rounded-t-xl border-b bg-muted/50 px-4 pt-4 ">
            <div>
              <FrameTitle>Project Intake</FrameTitle>
              <FrameDescription>Edit priority, budget, and approval inline.</FrameDescription>
            </div>
            <Button
              size="sm"
              onClick={() =>
                setRows((current) => [
                  {
                    id: `r-${Date.now()}`,
                    title: "New request",
                    code: "REQ-N001",
                    requester: "Unassigned",
                    budget: 0,
                    dueDays: 14,
                    confidence: 40,
                    status: "Draft",
                    priority: "Medium",
                    approved: false,
                  },
                  ...current,
                ])
              }
            >
              <PlusIcon />
              Add request
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No requests match this view."
            tableClassNames={{ headerRow: "[&>th]:py-3" }}
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 py-1">
                <InputGroup className="w-full sm:max-w-80">
                  <InputGroupAddon>
                    <SearchIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search requests..."
                    className="text-sm"
                  />
                </InputGroup>
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        <FunnelIcon />
                        Status
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-28 p-1.5">
                      <div className="text-muted-foreground mb-1 text-[11px] font-medium">
                        Status
                      </div>
                      <div className="flex flex-col items-start gap-0.5">
                        {REQUEST_STATUSES.map((status) => (
                          <button
                            key={status}
                            type="button"
                            onClick={() =>
                              setStatuses((current) =>
                                current.includes(status)
                                  ? current.filter((entry) => entry !== status)
                                  : [...current, status],
                              )
                            }
                          >
                            <Badge variant={STATUS_VARIANT[status]} size="xs">
                              {status}
                            </Badge>
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        <SlidersHorizontalIcon />
                        Priority
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-28 p-1.5">
                      <div className="text-muted-foreground mb-1 text-[11px] font-medium">
                        Priority
                      </div>
                      <div className="flex flex-col items-start gap-0.5">
                        {REQUEST_PRIORITIES.map((priority) => (
                          <button
                            key={priority}
                            type="button"
                            onClick={() =>
                              setPriorities((current) =>
                                current.includes(priority)
                                  ? current.filter((entry) => entry !== priority)
                                  : [...current, priority],
                              )
                            }
                          >
                            <Badge
                              variant={PRIORITY_VARIANT[priority]}
                              size="xs"
                              className="gap-1.5"
                            >
                              <span
                                className={cn(
                                  "size-1.5 rounded-full",
                                  PRIORITY_DOT[priority],
                                )}
                              />
                              {priority}
                            </Badge>
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <DataGridContainer className="rounded-lg border">
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
            </div>
          </DataGrid>

          <div className="-mx-4 -mb-4 mt-3 flex flex-wrap items-center justify-between gap-2 rounded-b-xl border-t bg-muted/30 px-4 py-4">
            <span className="flex items-center gap-1.5 text-sm">
              {dirty ? (
                <>
                  <InfoIcon className="size-4" />
                  <span>
                    {changeCount} unsaved change{changeCount === 1 ? "" : "s"}
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle2Icon className="text-success-foreground size-4" />
                  <span className="text-success-foreground">All changes saved</span>
                </>
              )}
            </span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled={!dirty} onClick={() => setRows(saved)}>
                Discard
              </Button>
              <Button size="sm" onClick={() => setSaved(rows)}>
                Save changes
              </Button>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default ProjectIntakeBlock
