import { useMemo, useState } from "react"
import {
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  Settings2Icon,
  StarIcon,
} from "lucide-react"
import type {
  ColumnDef,
  ExpandedState,
  PaginationState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/reui-unbound/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableRowExpand,
} from "@/components/reui-unbound/data-grid/data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"
import { cn } from "cn"

import {
  CHECKLIST_VARIANT,
  RELEASE_REVIEWS,
  REVIEW_STATUS_VARIANT,
  RISK_VARIANT,
} from "./data"
import type { ChecklistItem, ReleaseReview } from "./data"

function ReadinessRing({ value }: { value: number }) {
  const radius = 8
  const circumference = 2 * Math.PI * radius
  const tone = value >= 80 ? "text-success" : value >= 50 ? "text-warning" : "text-destructive"
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 20 20" className={tone}>
        <circle cx="10" cy="10" r={radius} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2.5" />
        <circle
          cx="10"
          cy="10"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - value / 100)}
          transform="rotate(-90 10 10)"
        />
      </svg>
      <span className="text-sm tabular-nums">{value}%</span>
    </div>
  )
}

function Stars({ value }: { value: number }) {
  const filled = Math.round(value)
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            className={cn(
              "size-3.5",
              index < filled
                ? "fill-warning text-warning"
                : "text-muted-foreground/35",
            )}
          />
        ))}
      </div>
      <span className="text-muted-foreground text-xs tabular-nums">
        {value.toFixed(1)}
      </span>
    </div>
  )
}

function Checklist({ review, showCards }: { review: ReleaseReview; showCards: boolean }) {
  return (
    <div className="bg-muted/10 px-4 py-3">
      <div className="text-muted-foreground mb-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-foreground font-medium">Checklist</span>
        <span>•</span>
        <span>3 of 5 items</span>
        <span>•</span>
        <span>3 open</span>
        <span>•</span>
        <span>+2 more</span>
      </div>
      {showCards && (
      <div className="grid gap-2 md:grid-cols-3">
        {review.checklist.map((item: ChecklistItem) => (
          <div key={item.id} className="bg-background rounded-lg border p-3">
            <Badge variant={CHECKLIST_VARIANT[item.state]} size="xs">
              {item.state}
            </Badge>
            <div className="mt-2 text-sm font-medium">{item.title}</div>
            <div className="text-muted-foreground mt-1 flex items-center gap-1.5 text-xs">
              <Avatar className="size-4">
                <AvatarImage src={`https://i.pravatar.cc/48?u=${item.reviewer}`} alt="" />
                <AvatarFallback className="text-[8px]">{item.reviewer[0]}</AvatarFallback>
              </Avatar>
              {item.reviewer} • {item.due}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <Stars value={item.rating} />
              <ReadinessRing value={item.readiness} />
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  )
}


function ViewSettingsPopover({
  visibility,
  onToggle,
  showCards,
  onShowCards,
}: {
  visibility: Record<string, boolean>
  onToggle: (id: string, value: boolean) => void
  showCards: boolean
  onShowCards: (value: boolean) => void
}) {
  const [direction, setDirection] = useState("Desc")
  const [includeShipped, setIncludeShipped] = useState(false)
  const [window, setWindow] = useState(false)
  const [updated, setUpdated] = useState(false)

  const columns = [
    { id: "owner", label: "Owner", checked: visibility.owner !== false, onChange: (value: boolean) => onToggle("owner", value) },
    { id: "status", label: "Status", checked: visibility.status !== false, onChange: (value: boolean) => onToggle("status", value) },
    { id: "risk", label: "Risk", checked: visibility.risk !== false, onChange: (value: boolean) => onToggle("risk", value) },
    { id: "window", label: "Window", checked: window, onChange: setWindow },
    { id: "approvals", label: "Approvals", checked: visibility.approvals !== false, onChange: (value: boolean) => onToggle("approvals", value) },
    { id: "readiness", label: "Readiness", checked: visibility.readiness !== false, onChange: (value: boolean) => onToggle("readiness", value) },
    { id: "updated", label: "Updated", checked: updated, onChange: setUpdated },
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings2Icon />
          View Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 p-0">
        <div className="border-b p-3">
          <div className="flex items-center justify-between py-1 text-sm">
            Ordering
            <Select defaultValue="risk">
              <SelectTrigger size="sm" className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="risk">risk</SelectItem>
                <SelectItem value="readiness">readiness</SelectItem>
                <SelectItem value="owner">owner</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between py-1 text-sm">
            Direction
            <div className="flex overflow-hidden rounded-md border">
              {["Asc", "Desc"].map((entry) => (
                <button
                  key={entry}
                  type="button"
                  onClick={() => setDirection(entry)}
                  className={cn(
                    "px-3 py-1 text-xs",
                    direction === entry ? "bg-muted font-medium" : "text-muted-foreground",
                  )}
                >
                  {entry}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between py-1 text-sm">
            Density
            <Select defaultValue="compact">
              <SelectTrigger size="sm" className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compact">compact</SelectItem>
                <SelectItem value="comfortable">comfortable</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="border-b p-3">
          <div className="flex items-center justify-between py-1 text-sm">
            Check cards
            <Switch checked={showCards} onCheckedChange={onShowCards} />
          </div>
          <div className="flex items-center justify-between py-1 text-sm">
            Include shipped
            <Switch checked={includeShipped} onCheckedChange={setIncludeShipped} />
          </div>
        </div>
        <div className="p-3">
          <div className="text-muted-foreground mb-2 text-xs">Columns</div>
          {columns.map((column) => (
            <div key={column.id} className="flex items-center justify-between py-1 text-sm">
              {column.label}
              <Switch checked={column.checked} onCheckedChange={column.onChange} />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function ReleaseReviewsBlock() {
  const [search, setSearch] = useState("")
  const [service, setService] = useState("All services")
  const [status, setStatus] = useState("All statuses")
  const [expanded, setExpanded] = useState<ExpandedState>({ "r-1": true })
  const [showCards, setShowCards] = useState(true)
  const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return RELEASE_REVIEWS.filter((review) => {
      if (status !== "All statuses" && review.status !== status) return false
      if (
        service !== "All services" &&
        !review.project.toLowerCase().includes(service.toLowerCase())
      ) {
        return false
      }
      if (!term) return true
      return [review.title, review.code, review.owner].some((value) =>
        value.toLowerCase().includes(term),
      )
    })
  }, [search, service, status])

  const columns = useMemo<ColumnDef<DataGridFeatures, ReleaseReview>[]>(
    () => [
      {
        id: "expand",
        header: () => null,
        cell: ({ row }) => <DataGridTableRowExpand row={row} />,
        size: 34,
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: "request",
        accessorKey: "title",
        header: ({ column }) => <DataGridColumnHeader title="Request" column={column} />,
        cell: ({ row }) => (
          <div className="min-w-0">
            <div className="truncate font-medium">{row.original.title}</div>
            <div className="text-muted-foreground truncate text-xs">
              {row.original.code} • {row.original.project}
            </div>
          </div>
        ),
        size: 310,
        enableHiding: false,
        meta: {
          headerTitle: "Request",
          expandedContent: (review: ReleaseReview) => (
            <Checklist review={review} showCards={showCards} />
          ),
        },
      },
      {
        id: "owner",
        accessorKey: "owner",
        header: ({ column }) => <DataGridColumnHeader title="Owner" column={column} />,
        cell: ({ row }) => (
          <span className="flex items-center gap-2">
            <Avatar className="size-7">
              <AvatarImage src={`https://i.pravatar.cc/96?u=${row.original.owner}`} alt="" />
              <AvatarFallback className="text-[10px]">
                {row.original.owner
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="min-w-0">
              <span className="block truncate text-sm">{row.original.owner}</span>
              <span className="text-muted-foreground block truncate text-xs">
                {row.original.role}
              </span>
            </span>
          </span>
        ),
        size: 180,
      },
      {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
        cell: ({ row }) => (
          <Badge variant={REVIEW_STATUS_VARIANT[row.original.status]} size="sm">
            {row.original.status}
          </Badge>
        ),
        size: 130,
      },
      {
        id: "risk",
        accessorKey: "risk",
        header: ({ column }) => <DataGridColumnHeader title="Risk" column={column} />,
        cell: ({ row }) => (
          <Badge variant={RISK_VARIANT[row.original.risk]} size="sm">
            {row.original.risk}
          </Badge>
        ),
        size: 105,
      },
      {
        id: "approvals",
        accessorKey: "approvals",
        header: ({ column }) => <DataGridColumnHeader title="Approvals" column={column} />,
        cell: ({ row }) => (
          <div>
            <div className="text-sm tabular-nums">
              {row.original.approvals}/{row.original.approvalsTotal}
            </div>
            <div className="text-muted-foreground text-xs">
              {row.original.pending} pending
            </div>
          </div>
        ),
        size: 105,
      },
      {
        id: "readiness",
        accessorKey: "readiness",
        header: ({ column }) => <DataGridColumnHeader title="Readiness" column={column} />,
        cell: ({ row }) => <ReadinessRing value={row.original.readiness} />,
        size: 125,
      },
      {
        id: "actions",
        header: () => null,
        cell: () => (
          <Button variant="ghost" size="icon-sm" aria-label="Review actions">
            <MoreHorizontalIcon />
          </Button>
        ),
        size: 44,
        enableSorting: false,
      },
    ],
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    getRowId: (review) => review.id,
    state: { pagination, expanded, columnVisibility },
    onPaginationChange: setPagination,
    onExpandedChange: setExpanded,
    onColumnVisibilityChange: setColumnVisibility,
    getRowCanExpand: () => true,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Release reviews</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel className="gap-0">
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3 pb-3">
            <div>
              <FrameTitle>Release Reviews</FrameTitle>
              <FrameDescription>Upcoming windows, blockers, and checks.</FrameDescription>
            </div>
            <Button size="sm">
              <PlusIcon />
              New review
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No releases match this view."
            tableClassNames={{ headerRow: "[&>th]:py-3" }}
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <InputGroup className="h-9 w-full sm:max-w-80">
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search releases..."
                      className="text-sm"
                    />
                  </InputGroup>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger size="sm" className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All services">All services</SelectItem>
                      <SelectItem value="Checkout">Checkout</SelectItem>
                      <SelectItem value="Authentication">Authentication</SelectItem>
                      <SelectItem value="Webhooks">Webhooks</SelectItem>
                      <SelectItem value="Data sync">Data sync</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger size="sm" className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All statuses">All statuses</SelectItem>
                      <SelectItem value="Needs approval">Needs approval</SelectItem>
                      <SelectItem value="Blocked">Blocked</SelectItem>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                      <SelectItem value="Ready">Ready</SelectItem>
                      <SelectItem value="Shipped">Shipped</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <ViewSettingsPopover
                  visibility={columnVisibility}
                  onToggle={(id, value) =>
                    setColumnVisibility((current) => ({ ...current, [id]: value }))
                  }
                  showCards={showCards}
                  onShowCards={setShowCards}
                />
              </div>

              <DataGridContainer className="rounded-lg border">
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <DataGridPagination
                sizes={[5, 10]}
                info="{from} - {to} of {count} reviews"
                rowsPerPageLabel="Rows per page"
                className={filtered.length === 0 ? "hidden" : undefined}
              />
            </div>
          </DataGrid>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default ReleaseReviewsBlock
