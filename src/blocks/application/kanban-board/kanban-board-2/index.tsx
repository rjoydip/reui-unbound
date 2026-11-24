"use client"

import { useMemo, useState } from "react"
import {
  AlertCircleIcon,
  ChevronsLeftIcon,
  Columns3Icon,
  CheckCircle2Icon,
  CheckSquare2Icon,
  CircleDollarSignIcon,
  CircleDotIcon,
  CircleIcon,
  Clock3Icon,
  ClockIcon,
  GripVerticalIcon,
  MessageSquareIcon,
  PaperclipIcon,
  PlusIcon,
  SearchIcon,
  FilterIcon,
  TrophyIcon,
  UserIcon,
  XCircleIcon,
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

interface WorkItem {
  id: string
  title: string
  owner: string
  value: string
  nextStep: string
  attachments: number
  checklists: number
  comments: number
  due: string
  crew: string[]
}

const AVATARS: Record<string, string> = {
  "Elena Torres": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
  "Nora Lee": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "Omar Haddad": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&dpr=2&q=80",
  "Priya Shah": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
  "Liam Carter": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
  "Marcus Chen": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
}

interface ColumnMeta {
  id: string
  label: string
  icon: typeof ClockIcon
  color: string
}

const COLUMN_LIST: ColumnMeta[] = [
  { id: "backlog", label: "Backlog", icon: Clock3Icon, color: "text-muted-foreground" },
  { id: "todo", label: "Todo", icon: CircleIcon, color: "text-sky-500" },
  { id: "progress", label: "In Progress", icon: CircleDotIcon, color: "text-amber-500" },
  { id: "blocked", label: "Blocked", icon: AlertCircleIcon, color: "text-rose-500" },
  { id: "review", label: "Reviewing", icon: ClockIcon, color: "text-violet-500" },
  { id: "done", label: "Done", icon: CheckCircle2Icon, color: "text-emerald-500" },
  { id: "closed", label: "Closed", icon: CheckCircle2Icon, color: "text-rose-400" },
  { id: "cancelled", label: "Cancelled", icon: XCircleIcon, color: "text-orange-500" },
]

const DEFAULT_COLLAPSED = ["blocked", "review", "done", "closed", "cancelled"]

const INITIAL: Record<string, WorkItem[]> = {
  backlog: [
    { id: "w1", title: "Draft partner intake workflow for multi-region teams", owner: "Elena Torres", value: "$12,800.00", nextStep: "Define approval path...", attachments: 1, checklists: 3, comments: 2, due: "24d", crew: ["Elena Torres", "Nora Lee"] },
    { id: "w2", title: "Map renewal risk signals", owner: "Omar Haddad", value: "$32,500.00", nextStep: "Choose data sources...", attachments: 2, checklists: 5, comments: 4, due: "21d", crew: ["Omar Haddad", "Nora Lee"] },
  ],
  todo: [
    { id: "w3", title: "Prepare workspace launch checklist for admins", owner: "Nora Lee", value: "$24,000.00", nextStep: "Set adoption target...", attachments: 2, checklists: 4, comments: 3, due: "18d", crew: ["Nora Lee", "Omar Haddad"] },
    { id: "w4", title: "Create account health scorecard with tiering", owner: "Priya Shah", value: "$16,900.00", nextStep: "Confirm scoring weights...", attachments: 3, checklists: 6, comments: 2, due: "14d", crew: ["Priya Shah", "Omar Haddad"] },
    { id: "w5", title: "Review procurement handoff notes for vendors", owner: "Liam Carter", value: "$9,600.00", nextStep: "Attach vendor terms...", attachments: 2, checklists: 2, comments: 1, due: "12d", crew: ["Liam Carter", "Priya Shah"] },
  ],
  progress: [
    { id: "w6", title: "Automate invoice approval queue", owner: "Omar Haddad", value: "$41,200.00", nextStep: "Connect approval rules...", attachments: 4, checklists: 7, comments: 6, due: "8d", crew: ["Omar Haddad", "Elena Torres"] },
    { id: "w7", title: "Build segment sync audit trail", owner: "Priya Shah", value: "$27,400.00", nextStep: "Log sync failures...", attachments: 2, checklists: 5, comments: 4, due: "5d", crew: ["Priya Shah", "Omar Haddad"] },
  ],
  blocked: [
    { id: "w8", title: "Resolve billing export permissions for finance", owner: "Marcus Chen", value: "$18,400.00", nextStep: "Needs security review...", attachments: 1, checklists: 2, comments: 5, due: "6d", crew: ["Marcus Chen", "Priya Shah"] },
    { id: "w9", title: "Unblock data residency exception", owner: "Elena Torres", value: "$22,700.00", nextStep: "Waiting on legal note...", attachments: 3, checklists: 1, comments: 7, due: "4d", crew: ["Elena Torres", "Omar Haddad"] },
  ],
  review: [
    { id: "w10", title: "Approve workspace billing tiers", owner: "Priya Shah", value: "$36,800.00", nextStep: "Confirm discount policy...", attachments: 2, checklists: 3, comments: 4, due: "3d", crew: ["Priya Shah", "Elena Torres"] },
    { id: "w11", title: "Validate renewal notice templates", owner: "Nora Lee", value: "$19,500.00", nextStep: "Legal wording review...", attachments: 1, checklists: 4, comments: 2, due: "2d", crew: ["Nora Lee", "Liam Carter"] },
    { id: "w12", title: "Check procurement audit export", owner: "Liam Carter", value: "$11,300.00", nextStep: "Verify retention window...", attachments: 3, checklists: 2, comments: 1, due: "1d", crew: ["Liam Carter", "Marcus Chen"] },
  ],
  done: [
    { id: "w13", title: "Ship saved filter presets", owner: "Priya Shah", value: "$15,600.00", nextStep: "Release notes ready...", attachments: 1, checklists: 5, comments: 4, due: "Done", crew: ["Priya Shah", "Nora Lee"] },
    { id: "w14", title: "Publish onboarding checklist", owner: "Elena Torres", value: "$8,400.00", nextStep: "Handoff complete...", attachments: 2, checklists: 3, comments: 1, due: "Done", crew: ["Elena Torres", "Omar Haddad"] },
  ],
  closed: [],
  cancelled: [
    { id: "w15", title: "Cancel legacy export after migration", owner: "Omar Haddad", value: "$4,200.00", nextStep: "Archive audit trail...", attachments: 1, checklists: 0, comments: 2, due: "Closed", crew: ["Omar Haddad", "Priya Shah"] },
    { id: "w16", title: "Remove sunset API keys", owner: "Priya Shah", value: "$3,100.00", nextStep: "Security sign-off...", attachments: 1, checklists: 2, comments: 0, due: "Closed", crew: ["Priya Shah", "Marcus Chen"] },
  ],
}

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("")
}

function MetaIcon({ children }: { children: React.ReactNode }) {
  return <span className="text-muted-foreground flex size-4 shrink-0 items-center justify-center [&_svg]:size-3.5">{children}</span>
}

function CountIcon({ icon: Icon, value }: { icon: typeof PaperclipIcon; value: number }) {
  return (
    <span className="text-muted-foreground flex items-center gap-1 text-[11px] tabular-nums">
      <Icon className="size-3.5" />
      {value}
    </span>
  )
}

function WorkCard({ item, overlay }: { item: WorkItem; overlay?: boolean }) {
  return (
    <div
      className={cn(
        "bg-card flex flex-col gap-2 rounded-lg border p-3 shadow-xs",
        overlay && "w-[330px] rotate-1 shadow-lg"
      )}
    >
      <div className="flex items-start gap-2">
        <MetaIcon><TrophyIcon /></MetaIcon>
        <span className="line-clamp-1 text-[13px] font-medium">{item.title}</span>
      </div>
      <div className="flex items-center gap-2">
        <MetaIcon><UserIcon /></MetaIcon>
        <Avatar className="size-4" size="sm">
          <AvatarImage src={AVATARS[item.owner]} alt="" />
          <AvatarFallback className="text-[8px]">{initials(item.owner)}</AvatarFallback>
        </Avatar>
        <span className="text-[13px]">{item.owner}</span>
      </div>
      <div className="flex items-center gap-2">
        <MetaIcon><CircleDollarSignIcon /></MetaIcon>
        <span className="text-[13px] font-semibold tabular-nums">{item.value}</span>
      </div>
      <div className="flex items-center gap-2">
        <MetaIcon><CheckSquare2Icon /></MetaIcon>
        <span className="text-muted-foreground line-clamp-1 text-xs">{item.nextStep}</span>
      </div>
      <div className="mt-0.5 flex items-center gap-2.5">
        <CountIcon icon={PaperclipIcon} value={item.attachments} />
        <CountIcon icon={CheckSquare2Icon} value={item.checklists} />
        <CountIcon icon={MessageSquareIcon} value={item.comments} />
        <div className="ml-auto flex -space-x-1.5">
          {item.crew.map((person) => (
            <Avatar key={person} className="size-5 ring-2 ring-card" size="sm">
              <AvatarImage src={AVATARS[person]} alt="" />
              <AvatarFallback className="text-[7px]">{initials(person)}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <span className="text-muted-foreground flex items-center gap-1 text-[11px]">
          <ClockIcon className="size-3.5" />
          {item.due}
        </span>
      </div>
    </div>
  )
}

export function KanbanBoard2Block() {
  const [columns, setColumns] = useState<Record<string, WorkItem[]>>(INITIAL)
  const [collapsed, setCollapsed] = useState<string[]>(DEFAULT_COLLAPSED)
  const [query, setQuery] = useState("")
  const [owners, setOwners] = useState<string[]>([])
  const [draft, setDraft] = useState("")
  const [open, setOpen] = useState(false)

  const people = useMemo(
    () => Array.from(new Set(Object.values(columns).flat().map((item) => item.owner))),
    [columns]
  )

  const matches = (item: WorkItem) =>
    (query.trim() === "" ||
      `${item.title} ${item.owner}`.toLowerCase().includes(query.toLowerCase())) &&
    (owners.length === 0 || owners.includes(item.owner))

  const toggle = (id: string) =>
    setCollapsed((current) =>
      current.includes(id) ? current.filter((key) => key !== id) : [...current, id]
    )

  const addCard = () => {
    const title = draft.trim()
    if (!title) return
    const id = `w${Object.values(columns).flat().length + 20}`
    setColumns({
      ...columns,
      backlog: [
        {
          id,
          title,
          owner: "Elena Torres",
          value: "$0.00",
          nextStep: "Set proposal value...",
          attachments: 0,
          checklists: 0,
          comments: 0,
          due: "30d",
          crew: ["Elena Torres", "Nora Lee"],
        },
        ...columns.backlog,
      ],
    })
    setCollapsed((current) => current.filter((key) => key !== "backlog"))
    setDraft("")
    setOpen(false)
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
                    placeholder="Search cards"
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
              New card
            </Button>
          </div>
        </header>

        <div className="-mx-1 overflow-x-auto pb-4">
          <Kanban
            value={columns}
            onValueChange={setColumns}
            getItemValue={(item) => item.id}
            className="w-max min-w-full px-1"
          >
            <KanbanBoard className="flex w-max items-stretch gap-3 sm:grid-cols-none">
              {COLUMN_LIST.map((column) => {
                const items = columns[column.id].filter(matches)
                const isCollapsed = collapsed.includes(column.id)
                if (isCollapsed) {
                  return (
                    <KanbanColumn key={column.id} value={column.id} className="w-11 shrink-0">
                      <KanbanColumnHandle asChild className="h-full w-full opacity-100">
                        <button
                          type="button"
                          onClick={() => toggle(column.id)}
                          aria-label={`Expand ${column.label}`}
                          className="bg-muted/30 hover:bg-muted/60 flex h-full min-h-[420px] flex-col items-center gap-2.5 rounded-xl border py-3 transition-colors"
                        >
                          <column.icon className={cn("size-4 shrink-0", column.color)} />
                          <span className="text-[11px] font-semibold tracking-wide [writing-mode:vertical-rl]">
                            {column.label}
                          </span>
                          <span className="text-muted-foreground text-[11px] tabular-nums">
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
                    className="bg-muted/20 w-[330px] shrink-0 rounded-xl border p-3"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <column.icon className={cn("size-4", column.color)} />
                      <span className="text-sm font-medium">{column.label}</span>
                      <span className="text-muted-foreground text-xs tabular-nums">
                        {items.length}
                      </span>
                      <div className="ml-auto flex items-center gap-0.5">
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          className="text-muted-foreground"
                          aria-label={`Collapse ${column.label}`}
                          onClick={() => toggle(column.id)}
                        >
                          <ChevronsLeftIcon />
                        </Button>
                        <KanbanColumnHandle asChild className="opacity-100">
                          <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
                            <GripVerticalIcon />
                          </Button>
                        </KanbanColumnHandle>
                      </div>
                    </div>
                    <KanbanColumnContent value={column.id} className="gap-2.5">
                      {items.map((item) => (
                        <KanbanItem key={item.id} value={item.id}>
                          <KanbanItemHandle>
                            <WorkCard item={item} />
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
                const item = Object.values(columns).flat().find((card) => card.id === String(value))
                return item ? <WorkCard item={item} overlay /> : null
              }}
            </KanbanOverlay>
          </Kanban>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>New card</DialogTitle>
          </DialogHeader>
          <Input
            autoFocus
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Card title"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={addCard} disabled={draft.trim() === ""}>
              Create card
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default KanbanBoard2Block
