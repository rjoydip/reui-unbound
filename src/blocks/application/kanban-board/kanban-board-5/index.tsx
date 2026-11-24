"use client"

import { useMemo, useState } from "react"
import {
  CheckSquare2Icon,
  ChevronLeftIcon,
  Columns3Icon,
  CircleIcon,
  CircleSlashIcon,
  Clock3Icon,
  GripVerticalIcon,
  MessageSquareIcon,
  PaperclipIcon,
  PauseCircleIcon,
  PlusIcon,
  SearchIcon,
  FilterIcon,
} from "lucide-react"

import { cn } from "cn"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnHandle,
  KanbanOverlay,
} from "@/components/kit/kanban"
import { Badge } from "@/components/kit/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type Category = "Prep" | "Legal" | "Commercial" | "Finance" | "Blocked"

interface Task {
  id: string
  title: string
  category: Category
  state: string
  stateTone: "success" | "warning" | "danger"
  owner: string
  role: string
  progress: number
  attachments: number
  checklists: number
  comments: number
  due: string
}

interface ColumnMeta {
  id: string
  label: string
  icon: typeof Clock3Icon
  pill: string
  rail: string
  ring: string
}

const AVATARS: Record<string, string> = {
  "Nora Lee": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "Elena Torres": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
  "Marcus Chen": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  "Omar Haddad": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&dpr=2&q=80",
  "Priya Shah": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
  "Liam Carter": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
}

const COLUMN_LIST: ColumnMeta[] = [
  {
    id: "backlog",
    label: "Backlog",
    icon: Clock3Icon,
    pill: "border bg-background text-foreground",
    rail: "bg-muted/40 text-foreground",
    ring: "border-muted-foreground/45 text-muted-foreground",
  },
  {
    id: "planned",
    label: "Planned",
    icon: CircleIcon,
    pill: "border bg-background text-foreground",
    rail: "bg-muted/40 text-foreground",
    ring: "border-muted-foreground/45 text-muted-foreground",
  },
  {
    id: "progress",
    label: "In Progress",
    icon: CircleIcon,
    pill: "bg-sky-500 text-white",
    rail: "bg-sky-500 text-white",
    ring: "border-sky-500 text-sky-600 dark:text-sky-400",
  },
  {
    id: "paused",
    label: "Paused",
    icon: PauseCircleIcon,
    pill: "bg-amber-400 text-amber-950",
    rail: "bg-amber-400 text-amber-950",
    ring: "border-amber-500 text-amber-600 dark:text-amber-400",
  },
  {
    id: "completed",
    label: "Completed",
    icon: CheckSquare2Icon,
    pill: "bg-emerald-600 text-white",
    rail: "bg-emerald-600 text-white",
    ring: "border-emerald-600 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "cancelled",
    label: "Cancelled",
    icon: CircleSlashIcon,
    pill: "bg-muted text-muted-foreground",
    rail: "bg-muted text-muted-foreground",
    ring: "border-muted-foreground/45 text-muted-foreground",
  },
]
const COLUMNS = Object.fromEntries(COLUMN_LIST.map((column) => [column.id, column]))
const DEFAULT_COLLAPSED = ["paused", "completed", "cancelled"]

const INITIAL: Record<string, Task[]> = {
  backlog: [
    { id: "t1", title: "Draft renewal checklist for strategic workspace rollouts", category: "Prep", state: "Confirmed", stateTone: "success", owner: "Nora Lee", role: "Ops", progress: 61, attachments: 1, checklists: 4, comments: 2, due: "22d" },
    { id: "t2", title: "Collect admin feedback on workspace handoff notes", category: "Prep", state: "Risk", stateTone: "warning", owner: "Elena Torres", role: "Review", progress: 56, attachments: 2, checklists: 3, comments: 1, due: "20d" },
    { id: "t3", title: "Prepare checklist template for regional launch teams", category: "Prep", state: "Ready", stateTone: "success", owner: "Marcus Chen", role: "Finance", progress: 69, attachments: 1, checklists: 5, comments: 2, due: "18d" },
  ],
  planned: [
    { id: "t4", title: "Estimate migration scope for enterprise tenant groups", category: "Commercial", state: "Ready", stateTone: "success", owner: "Omar Haddad", role: "Planning", progress: 56, attachments: 2, checklists: 3, comments: 1, due: "16d" },
    { id: "t5", title: "Map reviewer roles for procurement policy updates", category: "Legal", state: "Confirmed", stateTone: "success", owner: "Priya Shah", role: "Product", progress: 61, attachments: 1, checklists: 4, comments: 3, due: "13d" },
  ],
  progress: [
    { id: "t6", title: "Connect workspace audit stream to the activity timeline", category: "Commercial", state: "Finance", stateTone: "warning", owner: "Priya Shah", role: "Product", progress: 83, attachments: 3, checklists: 6, comments: 4, due: "8d" },
    { id: "t7", title: "Tune procurement approval rules for finance reviewers", category: "Finance", state: "Risk", stateTone: "warning", owner: "Marcus Chen", role: "Finance", progress: 72, attachments: 2, checklists: 5, comments: 6, due: "5d" },
    { id: "t8", title: "Refine saved view permissions for partner workspaces", category: "Legal", state: "Ready", stateTone: "success", owner: "Liam Carter", role: "Quality", progress: 84, attachments: 2, checklists: 4, comments: 5, due: "6d" },
  ],
  paused: [
    { id: "t9", title: "Resolve missing event payload from billing connector", category: "Blocked", state: "Missing", stateTone: "danger", owner: "Omar Haddad", role: "Planning", progress: 39, attachments: 3, checklists: 2, comments: 7, due: "Hold" },
    { id: "t10", title: "Confirm legal wording for workspace retention policy", category: "Legal", state: "Risk", stateTone: "warning", owner: "Elena Torres", role: "Review", progress: 33, attachments: 2, checklists: 2, comments: 5, due: "Hold" },
  ],
  completed: [
    { id: "t11", title: "Ship saved filter presets", category: "Prep", state: "Ready", stateTone: "success", owner: "Priya Shah", role: "Product", progress: 100, attachments: 1, checklists: 5, comments: 4, due: "Done" },
    { id: "t12", title: "Publish onboarding checklist", category: "Legal", state: "Confirmed", stateTone: "success", owner: "Elena Torres", role: "Ops", progress: 100, attachments: 2, checklists: 3, comments: 1, due: "Done" },
    { id: "t13", title: "Archive duplicate renewal drafts", category: "Prep", state: "Confirmed", stateTone: "success", owner: "Liam Carter", role: "Quality", progress: 100, attachments: 1, checklists: 2, comments: 0, due: "Done" },
  ],
  cancelled: [
    { id: "t14", title: "Cancel stale workspace export job", category: "Prep", state: "Risk", stateTone: "warning", owner: "Marcus Chen", role: "Finance", progress: 0, attachments: 1, checklists: 0, comments: 2, due: "Closed" },
    { id: "t15", title: "Remove deprecated audit fields", category: "Legal", state: "Missing", stateTone: "danger", owner: "Priya Shah", role: "Product", progress: 0, attachments: 1, checklists: 1, comments: 0, due: "Closed" },
  ],
}

const CATEGORY_TONES: Record<Category, string> = {
  Prep: "border-border bg-muted/60 text-foreground",
  Legal: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Commercial: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  Finance: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Blocked: "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300",
}

const STATE_DOT: Record<Task["stateTone"], string> = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
}

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("")
}

function ProgressRing({ value, ring }: { value: number; ring: string }) {
  return (
    <span
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-full border-2 text-[10px] font-medium tabular-nums",
        ring
      )}
    >
      {value}
    </span>
  )
}

function TaskCard({ task, ring }: { task: Task; ring: string }) {
  return (
    <div className="bg-card flex flex-col gap-2 rounded-lg border p-3 shadow-xs">
      <p className="text-[13px] leading-snug font-medium">{task.title}</p>
      <div className="flex items-center gap-2">
        <span className={cn("rounded-md border px-1.5 py-0.5 text-[10px] font-medium", CATEGORY_TONES[task.category])}>
          {task.category}
        </span>
        <span className="text-muted-foreground flex items-center gap-1 text-[11px]">
          <span className={cn("size-1.5 rounded-full", STATE_DOT[task.stateTone])} />
          {task.state}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Avatar className="size-6" size="sm">
          <AvatarImage src={AVATARS[task.owner]} alt="" />
          <AvatarFallback className="text-[8px]">{initials(task.owner)}</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-xs font-medium">{task.owner}</p>
          <p className="text-muted-foreground truncate text-[10px]">{task.role}</p>
        </div>
        <span className="ml-auto">
          <ProgressRing value={task.progress} ring={ring} />
        </span>
      </div>
      <div className="text-muted-foreground mt-0.5 flex items-center gap-3 text-[11px]">
        <span className="flex items-center gap-1 tabular-nums">
          <PaperclipIcon className="size-3.5" />
          {task.attachments}
        </span>
        <span className="flex items-center gap-1 tabular-nums">
          <CheckSquare2Icon className="size-3.5" />
          {task.checklists}
        </span>
        <span className="flex items-center gap-1 tabular-nums">
          <MessageSquareIcon className="size-3.5" />
          {task.comments}
        </span>
        <span className="ml-auto flex items-center gap-1">
          <Clock3Icon className="size-3.5" />
          {task.due}
        </span>
      </div>
    </div>
  )
}

export function KanbanBoard5Block() {
  const [columns, setColumns] = useState<Record<string, Task[]>>(INITIAL)
  const [collapsed, setCollapsed] = useState<string[]>(DEFAULT_COLLAPSED)
  const [query, setQuery] = useState("")
  const [owners, setOwners] = useState<string[]>([])
  const [draft, setDraft] = useState("")
  const [open, setOpen] = useState(false)

  const people = useMemo(
    () => Array.from(new Set(Object.values(columns).flat().map((task) => task.owner))),
    [columns]
  )

  const matches = (task: Task) =>
    (query.trim() === "" ||
      `${task.title} ${task.owner}`.toLowerCase().includes(query.toLowerCase())) &&
    (owners.length === 0 || owners.includes(task.owner))

  const toggle = (id: string) =>
    setCollapsed((current) =>
      current.includes(id) ? current.filter((key) => key !== id) : [...current, id]
    )

  const addTask = (columnId: string, title: string) => {
    const value = title.trim()
    if (!value) return
    const id = `t${Object.values(columns).flat().length + 20}`
    setColumns({
      ...columns,
      [columnId]: [
        {
          id,
          title: value,
          category: "Prep",
          state: "Confirmed",
          stateTone: "success",
          owner: "Nora Lee",
          role: "Ops",
          progress: 0,
          attachments: 0,
          checklists: 0,
          comments: 0,
          due: "30d",
        },
        ...columns[columnId],
      ],
    })
    setCollapsed((current) => current.filter((key) => key !== columnId))
  }

  return (
    <div className="bg-background min-h-svh p-4">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-lg font-semibold">Workflow Board</h1>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <FilterIcon />
                  Filters
                  {owners.length > 0 && <Badge variant="secondary">{owners.length}</Badge>}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-60 space-y-3">
                <div className="relative">
                  <SearchIcon className="text-muted-foreground pointer-events-none absolute top-2.5 left-2 size-3.5" />
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search tasks"
                    className="h-8 pl-7 text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <p className="text-muted-foreground text-xs font-medium">Owner</p>
                  {people.map((person) => (
                    <label key={person} className="flex items-center gap-2 text-xs">
                      <Checkbox
                        checked={owners.includes(person)}
                        onCheckedChange={(checked) =>
                          setOwners(
                            checked ? [...owners, person] : owners.filter((item) => item !== person)
                          )
                        }
                      />
                      {person}
                    </label>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <Columns3Icon />
                  Columns
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-52 space-y-1.5 p-2">
                {COLUMN_LIST.map((column) => (
                  <label key={column.id} className="flex items-center gap-2 rounded px-1 py-0.5 text-xs">
                    <Checkbox
                      checked={!collapsed.includes(column.id)}
                      onCheckedChange={() => toggle(column.id)}
                    />
                    {column.label}
                    <span className="text-muted-foreground ml-auto tabular-nums">
                      {columns[column.id].length}
                    </span>
                  </label>
                ))}
              </PopoverContent>
            </Popover>
            <Button size="sm" onClick={() => setOpen(true)}>
              <PlusIcon />
              New task
            </Button>
          </div>
        </header>

        <div className="-mx-1 overflow-x-auto pb-4">
          <Kanban
            value={columns}
            onValueChange={setColumns}
            getItemValue={(task) => task.id}
            className="w-max min-w-full px-1"
          >
            <KanbanBoard className="flex w-max items-stretch gap-3 sm:grid-cols-none">
              {COLUMN_LIST.map((column) => {
                const meta = COLUMNS[column.id]
                const items = columns[column.id].filter(matches)
                const isCollapsed = collapsed.includes(column.id)
                if (isCollapsed) {
                  return (
                    <KanbanColumn key={column.id} value={column.id} className="w-10 shrink-0">
                      <KanbanColumnHandle asChild className="h-full w-full opacity-100">
                        <button
                          type="button"
                          onClick={() => toggle(column.id)}
                          aria-label={`Expand ${column.label}`}
                          className={cn(
                            "flex h-full min-h-[460px] flex-col items-center gap-2.5 rounded-xl border py-3 transition-colors hover:opacity-90",
                            meta.rail
                          )}
                        >
                          <meta.icon className="size-4 shrink-0" />
                          <span className="text-[11px] font-semibold tracking-wide uppercase [writing-mode:vertical-rl]">
                            {meta.label}
                          </span>
                          <span className="text-[10px] font-medium tabular-nums opacity-80">
                            {items.length}
                          </span>
                        </button>
                      </KanbanColumnHandle>
                    </KanbanColumn>
                  )
                }
                return (
                  <KanbanColumn
                    key={column.id}
                    value={column.id}
                    className="bg-muted/30 w-[252px] shrink-0 rounded-xl border p-2.5"
                  >
                    <div className="mb-2.5 flex items-center gap-1.5">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold tracking-wide uppercase",
                          meta.pill
                        )}
                      >
                        <meta.icon className="size-3.5" />
                        {meta.label}
                      </span>
                      <span className="bg-background rounded-md border px-1.5 py-0.5 text-[10px] font-medium tabular-nums">
                        {items.length}
                      </span>
                      <div className="ml-auto flex items-center gap-0.5">
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          aria-label={`Collapse ${column.label}`}
                          onClick={() => toggle(column.id)}
                        >
                          <ChevronLeftIcon />
                        </Button>
                        <KanbanColumnHandle asChild className="opacity-100">
                          <Button variant="ghost" size="icon-xs">
                            <GripVerticalIcon />
                          </Button>
                        </KanbanColumnHandle>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {items.map((task) => (
                        <TaskCard key={task.id} task={task} ring={meta.ring} />
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground mt-1.5 w-full"
                      onClick={() => addTask(column.id, "New workspace task")}
                    >
                      <PlusIcon />
                      Add task
                    </Button>
                  </KanbanColumn>
                )
              })}
            </KanbanBoard>
            <KanbanOverlay>{() => null}</KanbanOverlay>
          </Kanban>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>New task</DialogTitle>
          </DialogHeader>
          <Input
            autoFocus
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Task title"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                addTask("backlog", draft)
                setDraft("")
                setOpen(false)
              }}
              disabled={draft.trim() === ""}
            >
              Create task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default KanbanBoard5Block
