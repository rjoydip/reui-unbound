"use client"

import { useMemo, useState } from "react"
import { Badge, type BadgeProps } from "@/components/kit/badge"
import { Gantt, type GanttColumn } from "@/components/kit/gantt/gantt"
import { GanttNav, GanttToolbar } from "@/components/kit/gantt/~gantt-nav"
import type {
  GanttEvent,
  GanttResource,
} from "@/components/kit/gantt/~gantt-types"
import { GanttView } from "@/components/kit/gantt/~gantt-view"
import { addDays, format } from "date-fns"
import {
  CheckIcon,
  ChevronDownIcon,
  ListTodoIcon,
  LockIcon,
  PlusIcon,
  RefreshCwIcon,
} from "lucide-react"

import { cn } from "cn"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const D = (offset: number) => addDays(new Date(2026, 6, 1), offset)
const PEOPLE = ["Mira Stone", "Leo Grant", "Nora Vale", "Theo Park"]
const AVATARS: Record<string, string> = {
  "Mira Stone": "MS",
  "Leo Grant": "LG",
  "Nora Vale": "NV",
  "Theo Park": "TP",
}
const initials = (name: string) => AVATARS[name] ?? name.slice(0, 2).toUpperCase()

type Status = "Done" | "In Progress" | "In Review" | "To Do"
type Meta = {
  status: Status
  assignees: string[]
  priority?: "High" | "Medium"
  updated?: string
  late?: boolean
  locked?: boolean
}
const STATUS_VARIANT: Record<Status, BadgeProps["variant"]> = {
  Done: "success-light",
  "In Progress": "primary-light",
  "In Review": "warning-light",
  "To Do": "secondary",
}
const DOT: Record<Status, string> = {
  Done: "bg-emerald-500",
  "In Progress": "bg-blue-500",
  "In Review": "bg-amber-500",
  "To Do": "border border-muted-foreground/40",
}

const META: Record<string, Meta> = {
  "login-redirect": { status: "Done", assignees: ["Mira Stone", "Leo Grant"] },
  "access-rules": { status: "In Progress", assignees: ["Leo Grant"] },
  "ios-audit": { status: "In Progress", assignees: ["Mira Stone"] },
  "android-audit": { status: "To Do", assignees: [] },
  "button-truncation": { status: "In Review", assignees: ["Nora Vale"], late: true },
  "offline-sync": { status: "To Do", assignees: ["Mira Stone", "Nora Vale"] },
  "api-key-rotation": { status: "Done", assignees: ["Theo Park"] },
  "session-replay": { status: "To Do", assignees: [] },
  "mobile-crash": { status: "In Progress", assignees: ["Mira Stone", "Nora Vale"] },
  "release-2-4": { status: "In Progress", assignees: ["Mira Stone"] },
  "data-export": { status: "In Progress", assignees: ["Mira Stone", "Leo Grant"] },
  "form-validation": { status: "To Do", assignees: ["Theo Park"] },
  "nav-focus": { status: "To Do", assignees: [] },
  "perf-audit": { status: "In Review", assignees: ["Theo Park"], late: true, locked: true },
  changelog: { status: "To Do", assignees: [] },
}

const RESOURCES: GanttResource[] = [
  {
    id: "bug-tracking",
    title: "Bug Tracking",
    children: [
      { id: "login-redirect", title: "Login redirect" },
      { id: "access-rules", title: "Access rules" },
      {
        id: "mobile-crash",
        title: "Mobile crash",
        children: [
          { id: "ios-audit", title: "iOS audit" },
          { id: "android-audit", title: "Android audit" },
          { id: "button-truncation", title: "Button truncation" },
          { id: "offline-sync", title: "Offline sync" },
          { id: "api-key-rotation", title: "API key rotation" },
          { id: "session-replay", title: "Session replay" },
        ],
      },
    ],
  },
  {
    id: "release-2-4",
    title: "Release 2.4",
    children: [
      { id: "data-export", title: "Data export" },
      { id: "form-validation", title: "Form validation" },
      { id: "nav-focus", title: "Nav focus" },
      { id: "perf-audit", title: "Perf audit" },
      { id: "changelog", title: "Changelog" },
    ],
  },
]

function buildBars(): GanttEvent[] {
  const bar = (
    resourceId: string,
    title: string,
    start: number,
    days: number,
    color: string,
    progress: number,
    dependencies?: string[]
  ): GanttEvent => ({
    id: `bar-${resourceId}`,
    title,
    start: D(start),
    end: D(start + days),
    allDay: true,
    color,
    progress,
    resourceId,
    dependencies: dependencies?.map((id) => `bar-${id}`),
  })
  return [
    bar("login-redirect", "Login redirect", 11, 3, "var(--color-blue-500)", 100),
    bar("access-rules", "Access rules", 13, 6, "var(--color-violet-500)", 45, ["login-redirect"]),
    bar("ios-audit", "iOS audit", 15, 5, "var(--color-cyan-500)", 55, ["access-rules"]),
    bar("android-audit", "Android audit", 20, 7, "var(--color-teal-500)", 20, ["ios-audit"]),
    bar("button-truncation", "Button truncation", 12, 2, "var(--color-amber-500)", 55),
    bar("offline-sync", "Offline sync", 23, 4, "var(--color-emerald-500)", 30),
    bar("api-key-rotation", "API key rotation", 11, 3, "var(--color-rose-500)", 100),
    bar("data-export", "Data export", 18, 5, "var(--color-blue-500)", 55),
    bar("form-validation", "Form validation", 23, 5, "var(--color-pink-500)", 25, ["data-export"]),
    bar("nav-focus", "Nav focus", 26, 4, "var(--color-orange-500)", 20),
    bar("perf-audit", "Perf audit", 18, 4, "var(--color-rose-400)", 40),
    bar("changelog", "Changelog", 33, 4, "var(--color-slate-400)", 0),
  ]
}

function AvatarStack({ people, className }: { people: string[]; className?: string }) {
  if (people.length === 0)
    return <span className={cn("border-muted-foreground/40 size-5 rounded-full border border-dashed", className)} />
  return (
    <span className={cn("flex -space-x-1", className)}>
      {people.slice(0, 2).map((person) => (
        <Avatar key={person} className="size-5 ring-2 ring-background" title={person}>
          <AvatarFallback className="bg-muted text-[9px] font-medium">
            {initials(person)}
          </AvatarFallback>
        </Avatar>
      ))}
    </span>
  )
}

type Draft = {
  eventId: string | null
  resourceId: string
  title: string
  status: Status
  assignees: string[]
  due: string
  priority: "High" | "Medium"
  progress: number
  isList: boolean
}

export function GanttProjectTimelineBlock() {
  const [events, setEvents] = useState<GanttEvent[]>(buildBars)
  const [resources, setResources] = useState<GanttResource[]>(RESOURCES)
  const [meta, setMeta] = useState(META)
  const [visibleCols, setVisibleCols] = useState<string[]>(["status", "assignees", "due"])
  const [filterPeople, setFilterPeople] = useState<string[]>([])
  const [draft, setDraft] = useState<Draft | null>(null)

  const visibleResources = useMemo(() => {
    if (filterPeople.length === 0) return resources
    const allowed = new Set(filterPeople)
    const keep = (id: string) => {
      const owners = meta[id]?.assignees ?? []
      return owners.length === 0 ? allowed.has("Unassigned") : owners.some((p) => allowed.has(p))
    }
    const filterTree = (nodes: GanttResource[]): GanttResource[] =>
      nodes.flatMap((node) => {
        if (node.children) {
          const children = filterTree(node.children)
          return children.length ? [{ ...node, children }] : []
        }
        return keep(node.id) ? [node] : []
      })
    return filterTree(resources)
  }, [filterPeople, meta, resources])

  const openTask = (eventId: string) => {
    const event = events.find((item) => item.id === eventId)
    if (!event?.resourceId) return
    const m = meta[event.resourceId]
    setDraft({
      eventId,
      resourceId: event.resourceId,
      title: event.title,
      status: m?.status ?? "To Do",
      assignees: m?.assignees ?? [],
      due: format(addDays(event.end, -1), "yyyy-MM-dd"),
      priority: m?.priority ?? "Medium",
      progress: event.progress ?? 0,
      isList: false,
    })
  }

  const newTask = (isList: boolean) => {
    const n = Date.now()
    setDraft({
      eventId: null,
      resourceId: `new-${n}`,
      title: "",
      status: "To Do",
      assignees: [],
      due: "2026-08-07",
      priority: "Medium",
      progress: 0,
      isList,
    })
  }

  const saveDraft = () => {
    if (!draft) return
    const title = draft.title.trim() || "Untitled task"
    const end = addDays(new Date(`${draft.due}T00:00:00`), 1)
    setMeta((prev) => ({
      ...prev,
      [draft.resourceId]: {
        status: draft.status,
        assignees: draft.assignees,
        priority: draft.priority,
      },
    }))
    if (draft.eventId) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === draft.eventId
            ? { ...event, title, end, progress: draft.progress }
            : event
        )
      )
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: `bar-${draft.resourceId}`,
          title,
          start: addDays(end, -3),
          end,
          allDay: true,
          color: "var(--color-blue-500)",
          progress: draft.progress,
          resourceId: draft.resourceId,
        },
      ])
      const task = { id: draft.resourceId, title }
      setResources((prev) =>
        draft.isList
          ? [...prev, { id: `group-${draft.resourceId}`, title: "New list", children: [task] }]
          : prev.map((group) =>
              group.id === "bug-tracking"
                ? { ...group, children: [...(group.children ?? []), task] }
                : group
            )
      )
    }
    setDraft(null)
  }

  const columns: GanttColumn[] = (() => {
    const all: GanttColumn[] = [
      {
        id: "status",
        title: "Status",
        width: 100,
        render: ({ resource }) => {
          const status = meta[resource.id]?.status
          if (!status) return null
          return (
            <Badge variant={STATUS_VARIANT[status]} size="sm">
              {status}
            </Badge>
          )
        },
      },
      {
        id: "assignees",
        title: "Assignee",
        width: 68,
        render: ({ resource, isGroup }) =>
          isGroup && !meta[resource.id]?.assignees?.length ? null : (
            <AvatarStack people={meta[resource.id]?.assignees ?? []} />
          ),
      },
      {
        id: "due",
        title: "Due date",
        width: 92,
        render: ({ resource, isGroup }) => {
          if (isGroup) return null
          const event = events.find((item) => item.resourceId === resource.id)
          if (!event) return null
          return (
            <span className={cn("text-xs", meta[resource.id]?.late && "text-destructive")}>
              {format(addDays(event.end, -1), "MMM d")}
            </span>
          )
        },
      },
      {
        id: "priority",
        title: "Priority",
        width: 84,
        render: ({ resource, isGroup }) => {
          const priority = isGroup ? undefined : meta[resource.id]?.priority
          return priority ? (
            <Badge
              variant={priority === "High" ? "destructive-light" : "warning-light"}
              size="sm"
            >
              {priority}
            </Badge>
          ) : null
        },
      },
      {
        id: "updated",
        title: "Updated",
        width: 84,
        render: ({ resource, isGroup }) =>
          isGroup ? null : (
            <span className="text-muted-foreground text-xs">
              {meta[resource.id]?.updated ?? "2h ago"}
            </span>
          ),
      },
      {
        id: "actions",
        title: "",
        width: 34,
        render: ({ resource, isGroup }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-xs" aria-label={`Actions for ${resource.title}`}>
                <span className="text-muted-foreground tracking-widest">···</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              {isGroup ? (
                <>
                  <DropdownMenuItem onSelect={() => newTask(false)}>
                    <PlusIcon /> Add Task
                  </DropdownMenuItem>
                  <DropdownMenuItem>Rename List</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    variant="destructive"
                    onSelect={() => {
                      const ids = new Set<string>()
                      const walk = (nodes: GanttResource[]) =>
                        nodes.forEach((node) => {
                          ids.add(node.id)
                          if (node.children) walk(node.children)
                        })
                      walk(resource.children ?? [])
                      setResources((prev) => prev.filter((group) => group.id !== resource.id))
                      setEvents((prev) => prev.filter((event) => !ids.has(event.resourceId ?? "")))
                    }}
                  >
                    Delete List
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem onSelect={() => openTask(`bar-${resource.id}`)}>
                    Edit Task
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => openTask(`bar-${resource.id}`)}>Assignee</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => openTask(`bar-${resource.id}`)}>Status</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => openTask(`bar-${resource.id}`)}>Priority</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    variant="destructive"
                    onSelect={() =>
                      setEvents((prev) => prev.filter((event) => event.resourceId !== resource.id))
                    }
                  >
                    Delete Task
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ]
    return all.filter((column) => column.id === "actions" || visibleCols.includes(column.id))
  })()

  return (
    <div className="bg-background min-h-svh p-4">
      <Card className="h-[calc(100svh-2rem)] overflow-hidden py-0">
        <CardContent className="h-full p-0">
          <Gantt
            events={events}
            onEventsChange={setEvents}
            resources={visibleResources}
            defaultScale="month"
            defaultDate={new Date(2026, 6, 20, 12)}
            initialCenter={new Date(2026, 6, 20, 12)}
            offDays
            barLabel="outside"
            rowCheckboxes={false}
            i18n={{ labels: { resources: "Name" } }}
            columns={columns}
            treePanel={{ width: 540, nameColumnWidth: 205, minWidth: 420 }}
            columnsMenu={
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon-xs" aria-label="Add or remove columns">
                    <PlusIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-52 p-1">
                  <p className="text-muted-foreground px-2 py-1.5 text-xs font-medium">Columns</p>
                  {[
                    ["status", "Status"],
                    ["assignees", "Assignee"],
                    ["due", "Due date"],
                    ["priority", "Priority"],
                    ["updated", "Updated"],
                  ].map(([id, label]) => (
                    <label
                      key={id}
                      className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm"
                    >
                      <Checkbox
                        checked={visibleCols.includes(id)}
                        onCheckedChange={(checked) =>
                          setVisibleCols((prev) =>
                            checked ? [...prev, id] : prev.filter((col) => col !== id)
                          )
                        }
                      />
                      {label}
                      {visibleCols.includes(id) && (
                        <CheckIcon className="ms-auto size-3.5" />
                      )}
                    </label>
                  ))}
                </PopoverContent>
              </Popover>
            }
            metrics={{ unitWidths: { month: 3.4 } }}
            getSummaryProgress={({ resource }) =>
              resource.id === "bug-tracking" ? null : 27
            }
            renderResourceLabel={({ resource, isGroup }) =>
              isGroup ? (
                <span className="flex min-w-0 items-center gap-1.5">
                  <ListTodoIcon className="text-muted-foreground size-3.5 shrink-0" />
                  <span className="truncate">{resource.title}</span>
                  <RefreshCwIcon className="text-muted-foreground size-3 shrink-0" />
                </span>
              ) : (
                <span className="flex min-w-0 items-center gap-2">
                  <span className={cn("size-2 shrink-0 rounded-full", DOT[meta[resource.id]?.status ?? "To Do"])} />
                  <span className="truncate">{resource.title}</span>
                  {meta[resource.id]?.locked && (
                    <LockIcon className="text-muted-foreground size-3 shrink-0" />
                  )}
                </span>
              )
            }
            onEventClick={(occurrence) => openTask(occurrence.eventId)}
            className="h-full w-full"
          >
            <div className="flex items-center gap-2 border-b pe-3">
              <GanttNav className="min-w-0 flex-1 border-b-0" />
              <GanttToolbar>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="hover:bg-muted flex h-8 items-center gap-1 rounded-full border ps-1 pe-1.5"
                      aria-label="Filter by assignee"
                    >
                      <AvatarStack people={PEOPLE.slice(0, 4)} />
                      <span className="text-muted-foreground text-xs">+1</span>
                      <ChevronDownIcon className="text-muted-foreground size-3.5" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-56 p-1">
                    <p className="text-muted-foreground px-2 py-1.5 text-xs font-medium">Assignee</p>
                    {[...PEOPLE, "Unassigned"].map((person) => {
                      const checked = filterPeople.includes(person)
                      return (
                        <label
                          key={person}
                          className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm"
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={() =>
                              setFilterPeople((prev) =>
                                checked ? prev.filter((p) => p !== person) : [...prev, person]
                              )
                            }
                          />
                          {person === "Unassigned" ? (
                            <span className="border-muted-foreground/40 size-5 rounded-full border border-dashed" />
                          ) : (
                            <Avatar className="size-5">
                              <AvatarFallback className="bg-muted text-[9px]">
                                {initials(person)}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          {person}
                        </label>
                      )
                    })}
                  </PopoverContent>
                </Popover>
                <ButtonGroup>
                  <DropdownMenu>
                    <Button onClick={() => newTask(false)}>
                      <PlusIcon />
                      Add Task
                    </Button>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" aria-label="More create options">
                        <ChevronDownIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem onSelect={() => newTask(false)}>
                        <PlusIcon /> New Task
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => newTask(true)}>
                        <ListTodoIcon /> New List
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ButtonGroup>
              </GanttToolbar>
            </div>
            <GanttView />
          </Gantt>
        </CardContent>
      </Card>

      <Dialog open={!!draft} onOpenChange={(open) => !open && setDraft(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{draft?.eventId ? "Edit task" : "New task"}</DialogTitle>
            <DialogDescription>
              Update the task, owner and schedule. Changes save locally.
            </DialogDescription>
          </DialogHeader>
          {draft && (
            <div className="grid gap-3">
              <label className="grid gap-1.5 text-sm">
                Title
                <Input
                  value={draft.title}
                  placeholder="Task title"
                  onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="grid gap-1.5 text-sm">
                  Status
                  <Select
                    value={draft.status}
                    onValueChange={(value) => setDraft({ ...draft, status: value as Status })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(["To Do", "In Progress", "In Review", "Done"] as Status[]).map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
                <label className="grid gap-1.5 text-sm">
                  Due date
                  <Input
                    type="date"
                    value={draft.due}
                    onChange={(e) => setDraft({ ...draft, due: e.target.value })}
                  />
                </label>
              </div>
              <div className="grid gap-1.5 text-sm">
                Assignee
                <div className="flex flex-wrap gap-1.5">
                  {PEOPLE.map((person) => {
                    const checked = draft.assignees.includes(person)
                    return (
                      <button
                        key={person}
                        type="button"
                        onClick={() =>
                          setDraft({
                            ...draft,
                            assignees: checked
                              ? draft.assignees.filter((p) => p !== person)
                              : [...draft.assignees, person],
                          })
                        }
                        className={cn(
                          "flex items-center gap-1.5 rounded-full border px-1.5 py-1 text-xs",
                          checked ? "border-primary/40 bg-primary/10" : "border-border"
                        )}
                      >
                        <Avatar className="size-4">
                          <AvatarFallback className="text-[8px]">{initials(person)}</AvatarFallback>
                        </Avatar>
                        {person}
                      </button>
                    )
                  })}
                </div>
              </div>
              <label className="grid gap-1.5 text-sm">
                Progress ({draft.progress}%)
                <Input
                  type="range"
                  className="accent-primary"
                  min={0}
                  max={100}
                  step={5}
                  value={draft.progress}
                  onChange={(e) => setDraft({ ...draft, progress: Number(e.target.value) })}
                />
              </label>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDraft(null)}>
              Cancel
            </Button>
            <Button onClick={saveDraft}>{draft?.eventId ? "Save task" : "Create task"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default GanttProjectTimelineBlock
