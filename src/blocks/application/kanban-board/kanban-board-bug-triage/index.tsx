"use client"
import { useState } from "react"
import {
  CalendarIcon,
  GripVerticalIcon,
  PlusIcon,
  SearchIcon,
  Share2Icon,
  FilterIcon,
} from "lucide-react"
import { cn } from "cn"
import { Badge } from "@/components/kit/badge"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/kit/kanban"
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
type Status = "Queued" | "Blocked" | "On track" | "At risk"
interface Bug {
  id: string
  title: string
  tag: string
  priority: "P0" | "P1" | "P2"
  status: Status
  owner: string
  due: string
  progress: number | null
}
const AVATARS: Record<string, string> = {
  "Nora Lee": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "Mia Hart": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
  "Kai Chen": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  "Lina Ford": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "Omar Vale": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
  "Eli Stone": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&dpr=2&q=80",
  "Rae Kim": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
  "Theo West": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  "Ari Blake": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&dpr=2&q=80",
  "Tara Quinn": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
}
const COLUMN_LIST = [
  { id: "open", label: "Open", tint: "bg-card", border: "border-border" },
  { id: "triage", label: "Triage", tint: "bg-warning/5 dark:bg-warning/10", border: "border-warning/35" },
  { id: "progress", label: "In Progress", tint: "bg-muted/40", border: "border-border" },
  { id: "needinfo", label: "Need Info", tint: "bg-rose-500/5 dark:bg-rose-500/10", border: "border-rose-500/30" },
  { id: "cannot", label: "Cannot Reproduce", tint: "bg-muted/30", border: "border-border" },
  { id: "fixed", label: "Fixed", tint: "bg-emerald-500/5 dark:bg-emerald-500/10", border: "border-emerald-500/25" },
]
const COLUMNS = Object.fromEntries(COLUMN_LIST.map((column) => [column.id, column]))
const INITIAL: Record<string, Bug[]> = {
  open: [
    { id: "BUG-421", title: "User permissions block account switching", tag: "Access", priority: "P1", status: "Queued", owner: "Nora Lee", due: "Today", progress: 12 },
    { id: "BUG-426", title: "Forms submit duplicate confirmation emails", tag: "Forms", priority: "P2", status: "At risk", owner: "Omar Vale", due: "Apr 26", progress: 26 },
  ],
  triage: [
    { id: "BUG-438", title: "Login button does not redirect from invite links", tag: "Auth", priority: "P0", status: "Blocked", owner: "Mia Hart", due: "Today", progress: 8 },
    { id: "BUG-445", title: "API integration returns incorrect totals", tag: "API", priority: "P1", status: "At risk", owner: "Eli Stone", due: "Apr 25", progress: 42 },
    { id: "BUG-449", title: "Import wizard skips validation errors", tag: "Import", priority: "P1", status: "At risk", owner: "Ari Blake", due: "Apr 26", progress: 31 },
  ],
  progress: [
    { id: "BUG-452", title: "Button text truncates when zoomed in", tag: "UI", priority: "P2", status: "On track", owner: "Kai Chen", due: "Apr 27", progress: 58 },
    { id: "BUG-459", title: "Navigation menu renders inconsistent font sizes", tag: "Nav", priority: "P2", status: "On track", owner: "Rae Kim", due: "Apr 29", progress: 66 },
  ],
  needinfo: [
    { id: "BUG-467", title: "Mobile app crashes when opening report history", tag: "Mobile", priority: "P0", status: "Blocked", owner: "Lina Ford", due: "Waiting", progress: null },
    { id: "BUG-472", title: "Data export creates broken report links", tag: "Export", priority: "P1", status: "At risk", owner: "Theo West", due: "Apr 28", progress: 34 },
    { id: "BUG-475", title: "CSV upload fails for localized number formats", tag: "CSV", priority: "P1", status: "Blocked", owner: "Tara Quinn", due: "Waiting", progress: null },
  ],
  cannot: [
    { id: "BUG-480", title: "Billing retry loop warns twice per invoice", tag: "Billing", priority: "P2", status: "Queued", owner: "Nora Lee", due: "May 2", progress: 5 },
    { id: "BUG-483", title: "Search filters ignore saved workspace scope", tag: "Search", priority: "P1", status: "At risk", owner: "Eli Stone", due: "May 3", progress: 18 },
  ],
  fixed: [
    { id: "BUG-470", title: "Sync status badge stays pending after refresh", tag: "Sync", priority: "P1", status: "On track", owner: "Kai Chen", due: "Apr 24", progress: 100 },
    { id: "BUG-476", title: "Settings drawer overlaps mobile footer", tag: "Settings", priority: "P2", status: "On track", owner: "Rae Kim", due: "Apr 24", progress: 92 },
  ],
}
const TAG_TONES: Record<string, string> = {
  Access: "border-border bg-muted/60 text-foreground",
  UI: "border-border bg-muted/60 text-foreground",
  Nav: "border-border bg-muted/60 text-foreground",
  Forms: "border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-300",
  Mobile: "border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-300",
  Billing: "border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-300",
  Auth: "border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-300",
  Export: "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  CSV: "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Import: "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  API: "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Search: "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  Sync: "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  Settings: "border-border bg-muted/60 text-foreground",
}
const STATUS_DOT: Record<Status, string> = {
  Queued: "bg-muted-foreground",
  Blocked: "bg-destructive",
  "On track": "bg-success",
  "At risk": "bg-warning",
}
function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("")
}
function ProgressRing({ value }: { value: number | null }) {
  if (value === null) {
    return (
      <span className="text-muted-foreground flex size-5 shrink-0 items-center justify-center rounded-full border border-dashed text-[10px]">
        –
      </span>
    )
  }
  const tone = value < 40 ? "text-rose-500" : value < 80 ? "text-amber-500" : "text-emerald-500"
  const circumference = 2 * Math.PI * 7.5
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 20 20" className={cn("size-5 -rotate-90", tone)} aria-hidden>
        <circle cx="10" cy="10" r="7.5" fill="none" strokeWidth="2" className="stroke-muted" />
        <circle
          cx="10"
          cy="10"
          r="7.5"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          stroke="currentColor"
          strokeDasharray={`${(value / 100) * circumference} ${circumference}`}
        />
      </svg>
      <span className="text-muted-foreground text-[11px] tabular-nums">{value}%</span>
    </div>
  )
}
function BugCard({ bug, overlay }: { bug: Bug; overlay?: boolean }) {
  return (
    <div
      className={cn(
        "bg-card flex flex-col gap-2.5 rounded-lg border p-3 shadow-xs",
        overlay && "w-[272px] rotate-1 shadow-lg"
      )}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span
          className={cn(
            "shrink-0 rounded-md border px-1.5 py-0.5 text-[10px] font-medium",
            TAG_TONES[bug.tag] ?? TAG_TONES.Access
          )}
        >
          {bug.tag}
        </span>
        <span className="text-muted-foreground truncate font-mono text-[10px]">{bug.id}</span>
        <span className="text-muted-foreground text-[10px] font-medium">{bug.priority}</span>
        <span className="bg-background/70 ml-auto inline-flex shrink-0 items-center gap-1 rounded border border-border/70 px-1.5 py-0.5 text-[10px] font-medium">
          <span className={cn("size-1.5 rounded-full", STATUS_DOT[bug.status])} />
          {bug.status}
        </span>
      </div>
      <p className="text-[13px] leading-snug font-medium">{bug.title}</p>
      <div className="text-muted-foreground flex items-center gap-3 text-[11px]">
        <span className="flex min-w-0 items-center gap-1.5">
          <Avatar className="size-5" size="sm">
            <AvatarImage src={AVATARS[bug.owner]} alt="" />
            <AvatarFallback className="text-[8px]">{initials(bug.owner)}</AvatarFallback>
          </Avatar>
          <span className="truncate">{bug.owner}</span>
        </span>
        <span className="flex shrink-0 items-center gap-1">
          <CalendarIcon className="size-3" />
          {bug.due}
        </span>
        <span className="ml-auto shrink-0">
          <ProgressRing value={bug.progress} />
        </span>
      </div>
    </div>
  )
}
export function KanbanBoardBugTriageBlock() {
  const [columns, setColumns] = useState<Record<string, Bug[]>>(INITIAL)
  const [query, setQuery] = useState("")
  const [statuses, setStatuses] = useState<Status[]>([])
  const [draft, setDraft] = useState("")
  const [open, setOpen] = useState(false)
  const matches = (bug: Bug) =>
    (query.trim() === "" ||
      `${bug.title} ${bug.id} ${bug.tag} ${bug.owner}`.toLowerCase().includes(query.toLowerCase())) &&
    (statuses.length === 0 || statuses.includes(bug.status))
  const findBug = (id: string) =>
    Object.values(columns).flat().find((bug) => bug.id === id)
  const addTask = () => {
    const title = draft.trim()
    if (!title) return
    const id = `BUG-${490 + Object.values(columns).flat().length}`
    setColumns({
      ...columns,
      open: [
        {
          id,
          title,
          tag: "Access",
          priority: "P2",
          status: "Queued",
          owner: "Nora Lee",
          due: "Today",
          progress: 0,
        },
        ...columns.open,
      ],
    })
    setDraft("")
    setOpen(false)
  }
  return (
    <div className="bg-background min-h-svh p-4">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5">
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Issue Tracking</h1>
            <p className="text-muted-foreground mt-0.5 text-sm">Track ownership, severity, and release risk.</p>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <FilterIcon />
                  Filters
                  {statuses.length > 0 && <Badge variant="secondary">{statuses.length}</Badge>}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-64 space-y-3">
                <div className="relative">
                  <SearchIcon className="text-muted-foreground pointer-events-none absolute top-2.5 left-2 size-3.5" />
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search issues"
                    className="h-8 pl-7 text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <p className="text-muted-foreground text-xs font-medium">Status</p>
                  {(["Queued", "Blocked", "On track", "At risk"] as Status[]).map((status) => (
                    <label key={status} className="flex items-center gap-2 text-xs">
                      <Checkbox
                        checked={statuses.includes(status)}
                        onCheckedChange={(checked) =>
                          setStatuses(
                            checked ? [...statuses, status] : statuses.filter((item) => item !== status)
                          )
                        }
                      />
                      <span className={cn("size-1.5 rounded-full", STATUS_DOT[status])} />
                      {status}
                    </label>
                  ))}
                </div>
                {statuses.length > 0 && (
                  <Button variant="ghost" size="sm" className="w-full" onClick={() => setStatuses([])}>
                    Clear filters
                  </Button>
                )}
              </PopoverContent>
            </Popover>
            <Button
              variant="outline"
              size="sm"
              onClick={() => void navigator.clipboard?.writeText(window.location.href)}
            >
              <Share2Icon />
              Share
            </Button>
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
            getItemValue={(bug) => bug.id}
            className="w-max min-w-full px-1"
          >
            <KanbanBoard className="flex w-max items-start gap-4 sm:grid-cols-none">
              {COLUMN_LIST.map((column, index) => {
                const meta = COLUMNS[column.id]
                const items = columns[column.id].filter(matches)
                return (
                  <KanbanColumn
                    key={column.id}
                    value={column.id}
                    className={cn("w-[272px] shrink-0 rounded-xl border p-3", meta.tint, meta.border)}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-sm font-semibold">
                        {index + 1}. {meta.label}
                      </span>
                      <span className="text-muted-foreground text-xs">{items.length}</span>
                      <KanbanColumnHandle asChild className="opacity-100">
                        <Button variant="ghost" size="icon-xs" className="ml-auto text-muted-foreground">
                          <GripVerticalIcon />
                        </Button>
                      </KanbanColumnHandle>
                    </div>
                    <KanbanColumnContent value={column.id} className="gap-2.5">
                      {items.map((bug) => (
                        <KanbanItem key={bug.id} value={bug.id} className="rounded-lg">
                          <KanbanItemHandle>
                            <BugCard bug={bug} />
                          </KanbanItemHandle>
                        </KanbanItem>
                      ))}
                    </KanbanColumnContent>
                  </KanbanColumn>
                )
              })}
            </KanbanBoard>
            <KanbanOverlay>
              {({ value }) => {
                const bug = findBug(String(value))
                return bug ? <BugCard bug={bug} overlay /> : null
              }}
            </KanbanOverlay>
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
            placeholder="Short issue title"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={addTask} disabled={draft.trim() === ""}>
              Create task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default KanbanBoardBugTriageBlock