import { useMemo, useState } from "react"
import {
  ArrowLeftRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  ClipboardListIcon,
  CopyIcon,
  FunnelIcon,
  MoreVerticalIcon,
  PlusIcon,
  SearchIcon,
  Settings2Icon,
  Trash2Icon,
  XIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
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
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"
import { cn } from "cn"
import { toast } from "sonner"

import {
  DELIVERY_TASKS,
  PRIORITY_VARIANT,
  STATUS_TONE,
} from "./data"
import type { DeliveryTask } from "./data"

const TABS = [
  { key: "all", label: "All tasks", count: 16 },
  { key: "active", label: "Active", count: 10 },
  { key: "backlog", label: "Backlog", count: 4 },
]

function TreeCell({
  task,
  hasChildren,
  expanded,
  depth,
  onToggleExpand,
  onToggleDone,
}: {
  task: DeliveryTask
  hasChildren: boolean
  expanded: boolean
  depth: number
  onToggleExpand: () => void
  onToggleDone: () => void
}) {
  return (
    <div
      className="flex items-center gap-1"
      style={{ paddingLeft: depth * 20 }}
    >
      {hasChildren ? (
        <button
          type="button"
          onClick={onToggleExpand}
          aria-label={expanded ? "Collapse task" : "Expand task"}
          className="text-muted-foreground hover:text-foreground flex size-5 items-center justify-center rounded"
        >
          {expanded ? (
            <ChevronDownIcon className="size-4" />
          ) : (
            <ChevronRightIcon className="size-4" />
          )}
        </button>
      ) : (
        <span className="w-5" />
      )}
      <button
        type="button"
        onClick={onToggleDone}
        aria-label={task.done ? "Mark incomplete" : "Mark complete"}
        className={cn(
          "flex size-4 items-center justify-center rounded-full border transition-colors",
          task.done
            ? "bg-foreground text-background border-foreground"
            : "border-muted-foreground/50 hover:border-foreground",
        )}
      >
        {task.done && <CheckIcon className="size-3" />}
      </button>
    </div>
  )
}


function FilterPopover() {
  const items = ["Task", "Assignee", "Project", "Status", "Priority"]
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <FunnelIcon />
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72 p-0">
        <div className="border-b p-2">
          <Input placeholder="Search attributes..." className="h-8" />
        </div>
        <div className="p-1">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              className="hover:bg-muted/60 flex w-full items-center rounded px-3 py-1.5 text-sm"
            >
              {item}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

function SettingsPopover({
  showSubTasks,
  onShowSubTasks,
}: {
  showSubTasks: boolean
  onShowSubTasks: (value: boolean) => void
}) {
  const [direction, setDirection] = useState("Desc")
  const [includeCompleted, setIncludeCompleted] = useState(true)
  const [doneByRecency, setDoneByRecency] = useState(true)
  const [resizable, setResizable] = useState(true)
  const [movable, setMovable] = useState(true)
  const [properties, setProperties] = useState([
    "Status",
    "Assignee",
    "Priority",
    "Project",
    "Updated",
  ])

  function toggleProperty(name: string) {
    setProperties((current) =>
      current.includes(name)
        ? current.filter((entry) => entry !== name)
        : [...current, name],
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings2Icon />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-96 p-0">
        <div className="border-b p-3">
          <div className="text-muted-foreground mb-2 text-xs">Queue</div>
          <div className="flex items-center justify-between py-1 text-sm">
            Ordering
            <Select defaultValue="Priority">
              <SelectTrigger size="sm" className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Priority">Priority</SelectItem>
                <SelectItem value="Due date">Due date</SelectItem>
                <SelectItem value="Created">Created</SelectItem>
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
          {[
            ["Include completed", includeCompleted, setIncludeCompleted],
            ["Done by recency", doneByRecency, setDoneByRecency],
            ["Show sub-tasks", showSubTasks, onShowSubTasks],
          ].map(([label, checked, setter]) => (
            <div key={String(label)} className="flex items-center justify-between py-1 text-sm">
              {String(label)}
              <Switch
                checked={checked as boolean}
                onCheckedChange={(value) => (setter as (value: boolean) => void)(value)}
              />
            </div>
          ))}
        </div>
        <div className="border-b p-3">
          <div className="text-muted-foreground mb-2 text-xs">Table</div>
          <div className="flex items-center justify-between py-1 text-sm">
            Density
            <Select defaultValue="Compact">
              <SelectTrigger size="sm" className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Compact">Compact</SelectItem>
                <SelectItem value="Comfortable">Comfortable</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between py-1 text-sm">
            Resizable columns
            <Switch checked={resizable} onCheckedChange={setResizable} />
          </div>
          <div className="flex items-center justify-between py-1 text-sm">
            Movable columns
            <Switch checked={movable} onCheckedChange={setMovable} />
          </div>
        </div>
        <div className="p-3">
          <div className="text-muted-foreground mb-2 text-xs">Display properties</div>
          <div className="flex flex-wrap gap-1.5">
            {["Status", "Assignee", "Priority", "Project", "Due date", "Estimate", "Updated"].map(
              (property) => {
                const active = properties.includes(property)
                return (
                  <button
                    key={property}
                    type="button"
                    onClick={() => toggleProperty(property)}
                    className={cn(
                      "flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs",
                      active ? "bg-muted font-medium" : "text-muted-foreground",
                    )}
                  >
                    {active && <CheckIcon className="size-3" />}
                    {property}
                  </button>
                )
              },
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function TaskDeliveryBlock() {
  const [tasks, setTasks] = useState(DELIVERY_TASKS)
  const [tab, setTab] = useState("all")
  const [search, setSearch] = useState("")
  const [expanded, setExpanded] = useState<string[]>(["t-1"])
  const [operator, setOperator] = useState("contains")
  const [draftSearch, setDraftSearch] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [newTaskOpen, setNewTaskOpen] = useState(false)
  const [showSubTasks, setShowSubTasks] = useState(true)
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const childrenOf = (id: string) => tasks.filter((task) => task.parentId === id)
  const topLevel = tasks.filter((task) => task.parentId === null)
  const filteredTop = useMemo(() => {
    const term = search.trim().toLowerCase()
    return topLevel.filter((task) => {
      if (tab === "active" && task.done) return false
      if (tab === "backlog" && task.status !== "Todo") return false
      const title = task.title.toLowerCase()
      if (operator === "is empty") return title.trim() === ""
      if (operator === "is not empty") return title.trim() !== ""
      if (!term) return true
      switch (operator) {
        case "does not contain":
          return !title.includes(term)
        case "starts with":
          return title.startsWith(term)
        case "ends with":
          return title.endsWith(term)
        case "is":
          return title === term
        case "is not":
          return title !== term
        default:
          return title.includes(term)
      }
    })
  }, [topLevel, tab, search, operator])

  const pageStart = pagination.pageIndex * pagination.pageSize
  const pageParents = filteredTop.slice(pageStart, pageStart + pagination.pageSize)
  const visibleRows = pageParents.flatMap((task) =>
    expanded.includes(task.id) && showSubTasks ? [task, ...childrenOf(task.id)] : [task],
  )

  function toggleExpanded(id: string) {
    setExpanded((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id],
    )
  }

  function setTask(id: string, patch: Partial<DeliveryTask>) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, ...patch } : task)),
    )
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, DeliveryTask>[]>(
    () => [
      {
        id: "tree",
        header: ({ column }) => (
          <div className="flex items-center gap-1.5">
            <DataGridColumnHeader title="Task" column={column} />
            <ChevronsUpDownIcon className="text-muted-foreground size-3.5" />
          </div>
        ),
        meta: { headerColSpan: 2 },
        cell: ({ row }) => (
          <TreeCell
            task={row.original}
            hasChildren={childrenOf(row.original.id).length > 0}
            expanded={expanded.includes(row.original.id)}
            depth={row.original.parentId ? 1 : 0}
            onToggleExpand={() => toggleExpanded(row.original.id)}
            onToggleDone={() => setTask(row.original.id, { done: !row.original.done })}
          />
        ),
        size: 60,
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: "task",
        accessorKey: "title",
        header: () => null,
        cell: ({ row }) => (
          <span
            className={cn(
              "block truncate text-sm",
              row.original.done && "text-muted-foreground line-through",
            )}
          >
            {row.original.title}
          </span>
        ),
        size: 380,
        enableHiding: false,
      },
      {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
        cell: ({ row }) => {
          const tone = STATUS_TONE[row.original.status]
          return (
            <Badge variant={tone.variant} size="sm" className="gap-1.5">
              <span className={cn("size-1.5 rounded-full", tone.dot)} />
              {row.original.status}
            </Badge>
          )
        },
        size: 130,
      },
      {
        id: "assignee",
        accessorKey: "assignee",
        header: ({ column }) => <DataGridColumnHeader title="Assignee" column={column} />,
        cell: ({ row }) => (
          <span className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage
                src={`https://i.pravatar.cc/96?u=${row.original.assignee}`}
                alt=""
              />
              <AvatarFallback className="text-[9px]">
                {row.original.assignee
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="truncate text-sm">{row.original.assignee}</span>
          </span>
        ),
        size: 145,
      },
      {
        id: "priority",
        accessorKey: "priority",
        header: ({ column }) => <DataGridColumnHeader title="Priority" column={column} />,
        cell: ({ row }) => (
          <Badge variant={PRIORITY_VARIANT[row.original.priority]} size="sm">
            {row.original.priority}
          </Badge>
        ),
        size: 100,
      },
      {
        id: "project",
        accessorKey: "project",
        header: ({ column }) => <DataGridColumnHeader title="Project" column={column} />,
        cell: ({ row }) => (
          <Badge variant="outline" size="sm" className="bg-background font-normal">
            {row.original.project}
          </Badge>
        ),
        size: 150,
      },
      {
        id: "actions",
        header: () => null,
        cell: () => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Task actions">
                <MoreVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Open task</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        size: 40,
        enableSorting: false,
      },
    ],
    [expanded, tasks],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: visibleRows,
    getRowId: (task) => task.id,
    state: { pagination },
    onPaginationChange: setPagination,
    manualPagination: true,
    pageCount: Math.ceil(filteredTop.length / pagination.pageSize),
  })

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Task delivery</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/50 px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Task Delivery</h2>
              <p className="text-muted-foreground text-sm">16 tasks / Sub-tasks on</p>
            </div>
            <Button size="sm" onClick={() => setNewTaskOpen(true)}>
              <PlusIcon />
              New task
            </Button>
          </div>
          <DataGrid
            table={table}
            recordCount={filteredTop.length}
            emptyMessage="No tasks match this filter."
            tableClassNames={{ headerRow: "[&>th]:py-3" }}
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1 border-b px-4 pt-2">
                {TABS.map((entry) => (
                  <button
                    key={entry.key}
                    type="button"
                    onClick={() => {
                      setTab(entry.key)
                      setPagination({ pageIndex: 0, pageSize: 5 })
                    }}
                    className={cn(
                      "-mb-px flex items-center gap-1.5 border-b-2 px-2.5 py-2 text-sm font-medium transition-colors",
                      tab === entry.key
                        ? "border-foreground text-foreground"
                        : "text-muted-foreground hover:text-foreground border-transparent",
                    )}
                  >
                    {entry.label}
                    <span className="text-muted-foreground text-xs">{entry.count}</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex h-9 min-w-60 flex-1 items-stretch overflow-hidden rounded-md border bg-background sm:max-w-[360px]">
                    <span className="flex items-center px-3 text-sm font-medium">Task</span>
                    <span className="bg-border w-px" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" className="text-muted-foreground px-3 text-sm hover:bg-muted/40">
                          {operator}
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-52 p-1">
                        {[
                          "contains",
                          "does not contain",
                          "starts with",
                          "ends with",
                          "is",
                          "is not",
                          "is empty",
                          "is not empty",
                        ].map((entry) => (
                          <DropdownMenuItem
                            key={entry}
                            className="justify-between py-1"
                            onSelect={() => setOperator(entry)}
                          >
                            {entry}
                            {operator === entry && <CheckIcon className="size-3.5" />}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="bg-border w-px" />
                    <Popover open={searchOpen} onOpenChange={setSearchOpen}>
                      <PopoverTrigger asChild>
                        <button type="button" className="text-muted-foreground min-w-32 flex-1 px-3 text-left text-sm hover:bg-muted/40">
                          {search || "Search tasks..."}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="w-[420px] p-1">
                        <div className="flex items-center gap-1 rounded-md border px-2">
                          <Input
                            autoFocus
                            value={draftSearch}
                            onChange={(event) => setDraftSearch(event.target.value)}
                            placeholder="Search tasks..."
                            className="h-9 flex-1 border-0 px-0 shadow-none focus-visible:ring-0"
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                setSearch(draftSearch)
                                setSearchOpen(false)
                              }
                              if (event.key === "Escape") setSearchOpen(false)
                            }}
                          />
                          <Button variant="ghost" size="icon-sm" aria-label="Apply search" onClick={() => { setSearch(draftSearch); setSearchOpen(false) }}>
                            <CheckIcon />
                          </Button>
                          <Button variant="ghost" size="icon-sm" aria-label="Clear search" onClick={() => { setDraftSearch(""); setSearch(""); setSearchOpen(false) }}>
                            <XIcon />
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <span className="bg-border w-px" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" aria-label="Filter actions" className="text-muted-foreground px-2 hover:bg-muted/40">
                          <MoreVerticalIcon className="size-3.5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-44">
                        <DropdownMenuItem onSelect={() => toast("Filter duplicated")}>
                          <CopyIcon />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() =>
                            setOperator((current) =>
                              current === "contains"
                                ? "does not contain"
                                : current === "does not contain"
                                  ? "contains"
                                  : current === "is"
                                    ? "is not"
                                    : current === "is not"
                                      ? "is"
                                      : current,
                            )
                          }
                        >
                          <ArrowLeftRightIcon />
                          Negate
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          variant="destructive"
                          onSelect={() => {
                            setOperator("contains")
                            setSearch("")
                            setDraftSearch("")
                          }}
                        >
                          <Trash2Icon />
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <FilterPopover />
                </div>
                <SettingsPopover showSubTasks={showSubTasks} onShowSubTasks={setShowSubTasks} />
              </div>

              <DataGridContainer className="border-x-0">
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <DataGridPagination
                sizes={[5, 10]}
                info="{from} - {to} of {count} tasks"
                rowsPerPageLabel="Rows per page"
                className={filteredTop.length === 0 ? "hidden" : "px-4 py-3"}
              />
            </div>
          </DataGrid>
        </div>
      </div>

      <Dialog open={newTaskOpen} onOpenChange={setNewTaskOpen}>
        <DialogContent className="sm:max-w-lg" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="bg-info size-2.5 rounded-full" />
              New task
            </DialogTitle>
            <DialogDescription className="text-base">
              Connect this button to your task creation flow, template picker, or
              issue composer.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" className="flex-1" onClick={() => setNewTaskOpen(false)}>
              Dismiss
            </Button>
            <Button className="flex-1" onClick={() => setNewTaskOpen(false)}>
              Dismiss
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TaskDeliveryBlock
