import { useMemo, useState } from "react"
import {
  AlignLeftIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronsUpDownIcon,
  CheckIcon,
  CheckSquareIcon,
  CopyIcon,
  ArrowLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  ClockIcon,
  Columns3Icon,
  FlagIcon,
  HashIcon,
  LayersIcon,
  ListFilterIcon,
  MoreVerticalIcon,
  PlusIcon,
  RotateCcwIcon,
  Settings2Icon,
  TargetIcon,
  TextIcon,
  Trash2Icon,
  UserIcon,
  UsersIcon,
  XIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { Column, ColumnDef } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/kit/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
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
import { toast } from "sonner"

import {
  PRIORITY_COLOR,
  RUNBOOK_TASKS,
  STATUS_VARIANT,
  TASK_PRIORITIES,
  TASK_STATUSES,
} from "./data"
import type { RunbookTask, TaskPriority, TaskStatus } from "./data"


function Assignees({ names }: { names: string[] }) {
  if (names.length === 0) {
    return <span className="text-muted-foreground text-sm">Unassigned</span>
  }
  return (
    <div className="flex flex-wrap items-center gap-1">
      {names.map((name) => (
        <span
          key={name}
          className="bg-muted/60 flex items-center gap-1 rounded-full py-0.5 pr-1 pl-0.5 text-xs"
        >
          <Avatar className="size-4">
            <AvatarImage src={`https://i.pravatar.cc/48?u=${name}`} alt="" />
            <AvatarFallback className="text-[8px]">{name[0]}</AvatarFallback>
          </Avatar>
          {name}
          <button type="button" aria-label={`Remove ${name}`} className="hover:text-foreground text-muted-foreground">
            <XIcon className="size-2.5" />
          </button>
        </span>
      ))}
    </div>
  )
}

function ColumnsPopover() {
  const [view, setView] = useState<string | null>(null)
  const groups = [
    { icon: ClipboardListIcon, label: "Task", count: 1 },
    { icon: LayersIcon, label: "Workflow", count: 2 },
    { icon: UsersIcon, label: "People", count: 1 },
    { icon: CalendarIcon, label: "Schedule", count: 1 },
    { icon: TargetIcon, label: "Effort", count: 1 },
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Columns3Icon />
          Columns
          <span className="bg-muted text-muted-foreground rounded px-1 text-[10px]">6</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 p-0">
        {view === null ? (
          <>
            <div className="border-b p-2">
              <Input placeholder="Search fields" className="h-8" />
            </div>
            <div className="p-2">
              {groups.map(({ icon: Icon, label, count }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setView(label)}
                  className="hover:bg-muted/60 flex w-full items-center gap-2 rounded px-2 py-0.5 text-xs"
                >
                  <Icon className="text-muted-foreground size-4" />
                  <span className="flex-1 text-left">{label}</span>
                  <span className="text-muted-foreground text-xs">{count}</span>
                  <ChevronRightIcon className="text-muted-foreground size-3.5" />
                </button>
              ))}
              <button
                type="button"
                className="hover:bg-muted/60 mt-1 flex w-full items-center gap-2 rounded px-2 py-0.5 text-xs"
              >
                <PlusIcon className="text-muted-foreground size-4" />
                Create New Field
                <ChevronRightIcon className="text-muted-foreground ml-auto size-3.5" />
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setView(null)}
              className="text-muted-foreground hover:text-foreground flex w-full items-center gap-1.5 border-b px-3 py-2 text-sm"
            >
              <ChevronLeftIcon className="size-4" />
              Search fields
            </button>
            <div className="p-2">
              <div className="text-muted-foreground px-2 py-0.5 text-[10px]">Basic</div>
              {[
                { icon: TextIcon, label: "Text" },
                { icon: AlignLeftIcon, label: "Long text" },
                { icon: HashIcon, label: "Number" },
                { icon: CheckSquareIcon, label: "Checkbox" },
              ].map(({ icon: Icon, label }) => (
                <button key={label} type="button" className="hover:bg-muted/60 flex w-full items-center gap-2 rounded px-2 py-0.5 text-xs">
                  <Icon className="text-muted-foreground size-4" />
                  {label}
                </button>
              ))}
              <div className="text-muted-foreground px-2 py-0.5 text-[10px]">Planning</div>
              {[
                { icon: CalendarIcon, label: "Date" },
                { icon: UserIcon, label: "Person" },
              ].map(({ icon: Icon, label }) => (
                <button key={label} type="button" className="hover:bg-muted/60 flex w-full items-center gap-2 rounded px-2 py-0.5 text-xs">
                  <Icon className="text-muted-foreground size-4" />
                  {label}
                </button>
              ))}
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}

function SettingsPopover() {
  const [columnLines, setColumnLines] = useState(true)
  const [rowStripes, setRowStripes] = useState(false)
  const [typeIcons, setTypeIcons] = useState(true)
  const [resizable, setResizable] = useState(true)
  const [movable, setMovable] = useState(true)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings2Icon />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-44 p-0.5">
        <div className="text-muted-foreground px-2 py-0.5 text-[10px]">Density</div>
        <button type="button" className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
          Comfortable <CheckIcon className="size-4" />
        </button>
        <button type="button" className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
          Compact
        </button>
        <div className="bg-border my-0.5 h-px" />
        <div className="text-muted-foreground px-2 py-0.5 text-[10px]">Appearance</div>
        <button type="button" onClick={() => setColumnLines((value) => !value)} className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
          Column lines {columnLines ? <CheckIcon className="size-4" /> : null}
        </button>
        <button type="button" onClick={() => setRowStripes((value) => !value)} className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
          Row stripes {rowStripes ? <CheckIcon className="size-4" /> : null}
        </button>
        <button type="button" onClick={() => setTypeIcons((value) => !value)} className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
          Type icons {typeIcons ? <CheckIcon className="size-4" /> : null}
        </button>
        <div className="bg-border my-0.5 h-px" />
        <div className="text-muted-foreground px-2 py-0.5 text-[10px]">Columns</div>
        <button type="button" onClick={() => setResizable((value) => !value)} className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
          Resizable columns {resizable ? <CheckIcon className="size-4" /> : null}
        </button>
        <button type="button" onClick={() => setMovable((value) => !value)} className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
          Movable columns {movable ? <CheckIcon className="size-4" /> : null}
        </button>
        <button type="button" className="hover:bg-muted/60 flex w-full items-center gap-2 rounded px-2 py-0.5 text-xs">
          <RotateCcwIcon className="size-4" />
          Reset Columns
        </button>
      </PopoverContent>
    </Popover>
  )
}


function SortHeader({
  icon: Icon,
  label,
  column,
}: {
  icon: LucideIcon
  label: string
  column: Column<DataGridFeatures, RunbookTask, unknown>
}) {
  const sorted = column.getIsSorted()
  return (
    <button
      type="button"
      onClick={column.getToggleSortingHandler()}
      className="-mx-2 flex h-8 w-full items-center gap-1.5 rounded px-2 text-sm font-normal hover:bg-muted/50"
    >
      <Icon className="text-muted-foreground size-3.5" />
      <span>{label}</span>
      {sorted === "asc" ? (
        <ChevronUpIcon className="text-muted-foreground size-3.5" />
      ) : sorted === "desc" ? (
        <ChevronDownIcon className="text-muted-foreground size-3.5" />
      ) : (
        <ChevronsUpDownIcon className="text-muted-foreground/60 size-3.5" />
      )}
    </button>
  )
}


function FilterPopover() {
  const items = [
    { icon: ClipboardListIcon, label: "Task" },
    { icon: ClockIcon, label: "Status" },
    { icon: UsersIcon, label: "Assignees", chevron: true },
    { icon: FlagIcon, label: "Priority", chevron: true },
    { icon: HashIcon, label: "Points", chevron: true },
  ]
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <ListFilterIcon />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72 p-0">
        <div className="border-b p-2">
          <Input placeholder="Search attributes..." className="h-8" />
        </div>
        <div className="p-1">
          {items.map(({ icon: Icon, label, chevron }) => (
            <button
              key={label}
              type="button"
              className="hover:bg-muted/60 flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm"
            >
              <Icon className="text-muted-foreground size-4" />
              <span className="flex-1 text-left">{label}</span>
              {chevron && <ChevronRightIcon className="text-muted-foreground size-3.5" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function TaskSpreadsheetBlock() {
  const [tasks, setTasks] = useState(RUNBOOK_TASKS)
  const [search, setSearch] = useState("")
  const [draftSearch, setDraftSearch] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [operator, setOperator] = useState("contains")
  const [pointsEdit, setPointsEdit] = useState<string | null>(null)
  const [pointsValue, setPointsValue] = useState("")
  const [newTaskOpen, setNewTaskOpen] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newNotes, setNewNotes] = useState("")
  const [newStatus, setNewStatus] = useState<TaskStatus>("Backlog")
  const [newPriority, setNewPriority] = useState<TaskPriority>("Normal")
  const [newPoints, setNewPoints] = useState("1")
  const [newDue, setNewDue] = useState("")
  const [newAssignees, setNewAssignees] = useState("")

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return tasks.filter((task) => {
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
  }, [tasks, search, operator])

  function setTask(id: string, patch: Partial<RunbookTask>) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, ...patch } : task)),
    )
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, RunbookTask>[]>(
    () => [
      {
        id: "done",
        header: () => null,
        cell: ({ row }) => (
          <button
            type="button"
            onClick={() =>
              setTask(row.original.id, {
                done: !row.original.done,
                status: !row.original.done ? "Shipped" : "In progress",
              })
            }
            className={cn(
              "flex size-4 items-center justify-center rounded-full border transition-colors",
              row.original.done
                ? "bg-foreground text-background border-foreground"
                : "border-muted-foreground/50 hover:border-foreground",
            )}
            aria-label={row.original.done ? "Mark incomplete" : "Mark complete"}
          >
            {row.original.done && <CheckIcon className="size-3" />}
          </button>
        ),
        size: 36,
        enableSorting: false,
      },
      {
        id: "task",
        accessorKey: "title",
        header: ({ column }) => (<div className="flex items-center gap-1.5">
            <ClipboardListIcon className="text-muted-foreground size-3.5" />
            <DataGridColumnHeader title="Task" column={column} />
          </div>),
        cell: ({ row }) => (
          <span
            className={cn(
              "block truncate",
              row.original.done && "text-muted-foreground line-through",
            )}
          >
            {row.original.title}
          </span>
        ),
        size: 330,
        enableHiding: false,
      },
      {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => (<div className="flex items-center gap-1.5">
            <ClockIcon className="text-muted-foreground size-3.5" />
            <DataGridColumnHeader title="Status" column={column} />
          </div>),
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button">
                <Badge variant={STATUS_VARIANT[row.original.status]} size="sm">
                  <span
                    className={cn(
                      "size-1.5 rounded-full",
                      row.original.status === "Shipped"
                        ? "bg-success"
                        : row.original.status === "Blocked"
                          ? "bg-destructive"
                          : row.original.status === "Ready"
                            ? "bg-purple-500"
                            : row.original.status === "In review"
                              ? "bg-warning"
                              : "bg-muted-foreground",
                    )}
                  />
                  {row.original.status}
                </Badge>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-36 p-1">
              {TASK_STATUSES.map((status) => (
                <DropdownMenuItem
                  key={status}
                  className="py-1"
                  onSelect={() =>
                    setTask(row.original.id, {
                      status,
                      done: status === "Shipped",
                    })
                  }
                >
                  {status}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        size: 130,
      },
      {
        id: "assignees",
        accessorKey: "assignees",
        header: ({ column }) => (<div className="flex items-center gap-1.5">
            <UsersIcon className="text-muted-foreground size-3.5" />
            <DataGridColumnHeader title="Assignees" column={column} />
          </div>),
        cell: ({ row }) => <Assignees names={row.original.assignees} />,
        size: 190,
        enableSorting: false,
      },
      {
        id: "due",
        accessorKey: "due",
        header: ({ column }) => (<div className="flex items-center gap-1.5">
            <CalendarIcon className="text-muted-foreground size-3.5" />
            <DataGridColumnHeader title="Due" column={column} />
          </div>),
        cell: ({ row }) => (
          <span
            className={cn(
              "text-sm tabular-nums",
              row.original.dueTone === "warning" && "text-warning-foreground",
              row.original.dueTone === "danger" && "text-destructive",
              row.original.dueTone === "muted" && "text-muted-foreground",
            )}
          >
            {row.original.due}
          </span>
        ),
        size: 110,
      },
      {
        id: "priority",
        accessorKey: "priority",
        header: ({ column }) => (<div className="flex items-center gap-1.5">
            <FlagIcon className="text-muted-foreground size-3.5" />
            <DataGridColumnHeader title="Priority" column={column} />
          </div>),
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" className="flex items-center gap-1.5 text-sm">
                <FlagIcon
                  className={cn("size-3.5", PRIORITY_COLOR[row.original.priority])}
                />
                <span className={PRIORITY_COLOR[row.original.priority]}>
                  {row.original.priority}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-36 p-1">
              {TASK_PRIORITIES.map((priority) => (
                <DropdownMenuItem
                  key={priority}
                  className="py-1"
                  onSelect={() => setTask(row.original.id, { priority })}
                >
                  {priority}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        size: 130,
      },
      {
        id: "points",
        accessorKey: "points",
        header: ({ column }) => (<div className="flex items-center gap-1.5">
            <HashIcon className="text-muted-foreground size-3.5" />
            <DataGridColumnHeader title="Points" column={column} />
          </div>),
        cell: ({ row }) =>
          pointsEdit === row.original.id ? (
            <Input
              autoFocus
              type="number"
              value={pointsValue}
              className="h-7 w-16 text-sm"
              onChange={(event) => setPointsValue(event.target.value)}
              onBlur={() => {
                const value = Number(pointsValue)
                if (Number.isFinite(value)) {
                  setTask(row.original.id, { points: value })
                }
                setPointsEdit(null)
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") event.currentTarget.blur()
                if (event.key === "Escape") setPointsEdit(null)
              }}
            />
          ) : (
            <button
              type="button"
              className="hover:bg-muted -mx-1 rounded px-1 text-sm tabular-nums"
              onClick={() => {
                setPointsEdit(row.original.id)
                setPointsValue(String(row.original.points))
              }}
            >
              {row.original.points} pt
            </button>
          ),
        size: 90,
      },
    ],
    [pointsEdit, pointsValue],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    getRowId: (task) => task.id,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Launch runbook</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel className="gap-0">
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3 pb-1 -mx-4 -mt-4 rounded-t-xl border-b bg-muted/50 px-4 pt-4 ">
            <div>
              <FrameTitle>Launch Runbook</FrameTitle>
              <FrameDescription>
                8 of 60 done · 218 points open ·{" "}
                <span className="text-destructive">4 blocked</span> · 11 days to launch
              </FrameDescription>
            </div>
            <Button size="sm" onClick={() => setNewTaskOpen(true)}>
              <PlusIcon />
              New Task
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No tasks match this filter."
            tableClassNames={{ headerRow: "[&>th]:py-3" }}
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 py-1">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <div className="flex h-9 w-full items-stretch overflow-hidden rounded-md border bg-background sm:max-w-[520px]">
                    <button
                      type="button"
                      className="flex items-center gap-2 px-3 text-sm font-medium"
                    >
                      <ClipboardListIcon className="text-muted-foreground size-4" />
                      Task
                    </button>
                    <div className="bg-border w-px" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="text-muted-foreground px-3 text-sm hover:bg-muted/40"
                        >
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
                    <div className="bg-border w-px" />
                    <Popover open={searchOpen} onOpenChange={setSearchOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="text-muted-foreground min-w-36 flex-1 px-3 text-left text-sm hover:bg-muted/40"
                        >
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
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            aria-label="Apply search"
                            onClick={() => {
                              setSearch(draftSearch)
                              setSearchOpen(false)
                            }}
                          >
                            <CheckIcon />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            aria-label="Clear search"
                            onClick={() => {
                              setDraftSearch("")
                              setSearch("")
                              setSearchOpen(false)
                            }}
                          >
                            <XIcon />
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <div className="bg-border w-px" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          aria-label="Filter actions"
                          className="text-muted-foreground px-2 hover:bg-muted/40"
                        >
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
                <div className="flex items-center gap-2">
                  <ColumnsPopover />
                  <SettingsPopover />
                </div>
              </div>

              <DataGridContainer className="rounded-lg border">
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>

              <div className="flex flex-wrap items-center justify-between px-1 pt-1 text-xs">
                <span className="text-muted-foreground">25 of 60 tasks</span>
                <span className="text-muted-foreground">
                  <span className="text-destructive">1 overdue</span> · 27 due this week
                </span>
              </div>
            </div>
          </DataGrid>
        </FramePanel>
      </Frame>

      <Dialog open={newTaskOpen} onOpenChange={setNewTaskOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>New Task</DialogTitle>
            <DialogDescription>Add a task to the launch runbook.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <div className="grid gap-1.5">
              <label className="text-sm font-medium" htmlFor="new-task-title">Task</label>
              <Input
                id="new-task-title"
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                placeholder="What needs to happen before launch?"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-sm font-medium" htmlFor="new-task-notes">Notes</label>
              <textarea
                id="new-task-notes"
                value={newNotes}
                onChange={(event) => setNewNotes(event.target.value)}
                placeholder="Context, links, or the acceptance check."
                className="border-input bg-background min-h-20 rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <span className="text-sm font-medium">Status</span>
                <Select value={newStatus} onValueChange={(value) => setNewStatus(value as TaskStatus)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {TASK_STATUSES.map((status) => <SelectItem key={status} value={status}>{status}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5">
                <span className="text-sm font-medium">Priority</span>
                <Select value={newPriority} onValueChange={(value) => setNewPriority(value as TaskPriority)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {TASK_PRIORITIES.map((priority) => <SelectItem key={priority} value={priority}>{priority}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5">
                <span className="text-sm font-medium">Workstream</span>
                <Select defaultValue="Product">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Product">Product</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5">
                <label className="text-sm font-medium" htmlFor="new-task-points">Points</label>
                <Input id="new-task-points" type="number" value={newPoints} onChange={(event) => setNewPoints(event.target.value)} />
              </div>
              <div className="grid gap-1.5">
                <label className="text-sm font-medium" htmlFor="new-task-due">Due Date</label>
                <Input id="new-task-due" type="date" value={newDue} onChange={(event) => setNewDue(event.target.value)} />
              </div>
              <div className="grid gap-1.5">
                <label className="text-sm font-medium" htmlFor="new-task-assignees">Assignees</label>
                <Input id="new-task-assignees" value={newAssignees} onChange={(event) => setNewAssignees(event.target.value)} placeholder="Unassigned" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setNewTaskOpen(false)}>Cancel</Button>
            <Button
              onClick={() => {
                setTasks((current) => [
                  {
                    id: `t-${Date.now()}`,
                    title: newTitle.trim() || "New task",
                    status: newStatus,
                    done: newStatus === "Shipped",
                    assignees: newAssignees.split(",").map((entry) => entry.trim()).filter(Boolean),
                    due: newDue ? newDue : "No date",
                    dueTone: newDue ? "normal" : "muted",
                    priority: newPriority,
                    points: Number(newPoints) || 1,
                  },
                  ...current,
                ])
                setNewTaskOpen(false)
                setNewTitle("")
                setNewNotes("")
                setNewAssignees("")
                setNewDue("")
              }}
            >
              Create Task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TaskSpreadsheetBlock
