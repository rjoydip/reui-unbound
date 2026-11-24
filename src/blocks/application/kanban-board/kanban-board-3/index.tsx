"use client"
import { useMemo, useState } from "react"
import {
  CalendarIcon,
  CheckSquareIcon,
  CircleDollarSignIcon,
  ClockIcon,
  GitBranchIcon,
  HashIcon,
  MessageSquareIcon,
  PaperclipIcon,
  PlayIcon,
  PlusIcon,
  SearchIcon,
  FilterIcon,
  SquareIcon,
  StarIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react"
import { cn } from "cn"
import { Rating } from "@/components/kit/rating"
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
type LogoTone = "emerald" | "violet" | "blue" | "foreground" | "rose" | "amber"
interface Deal {
  id: string
  company: string
  tag: string
  tagTone: "violet" | "emerald" | "amber" | "neutral" | "solid" | "rose"
  logoTone: LogoTone
  logo: "zap" | "square" | "video" | "github" | "hash" | "circle" | "play"
  value: string
  note: string
  nextStep: string
  date: string
  owner: string
  rating: number
  attachments: number
  checklists: number
  comments: number
  timing: string
}
const AVATARS: Record<string, string> = {
  "Mara Bell": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "Lina Ortiz": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
  "Jonas Park": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
  "Theo Grant": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&dpr=2&q=80",
}
const COLUMN_LIST = [
  { id: "prospecting", label: "Prospecting", dot: "bg-muted-foreground" },
  { id: "qualification", label: "Qualification", dot: "bg-foreground" },
  { id: "meeting", label: "Meeting", dot: "bg-amber-500" },
  { id: "proposal", label: "Proposal", dot: "bg-violet-500" },
  { id: "negotiation", label: "Negotiation", dot: "bg-sky-500" },
  { id: "won", label: "Closed Won", dot: "bg-emerald-500" },
]
const INITIAL: Record<string, Deal[]> = {
  prospecting: [
    { id: "d1", company: "Supabase", tag: "Inbound", tagTone: "violet", logoTone: "emerald", logo: "zap", value: "$34,800", note: "Annual platform expansion", nextStep: "Map technical buyer", date: "May 6, 2026", owner: "Mara Bell", rating: 4, attachments: 2, checklists: 3, comments: 5, timing: "2d left" },
    { id: "d2", company: "Slack", tag: "Partner", tagTone: "solid", logoTone: "violet", logo: "hash", value: "$18,400", note: "Team workflow pilot", nextStep: "Confirm champion c...", date: "May 8, 2026", owner: "Jonas Park", rating: 4, attachments: 1, checklists: 2, comments: 3, timing: "Today" },
  ],
  qualification: [
    { id: "d3", company: "Stripe", tag: "Expansion", tagTone: "emerald", logoTone: "violet", logo: "square", value: "$52,600", note: "Usage-based billing layer", nextStep: "Validate security revi...", date: "May 9, 2026", owner: "Lina Ortiz", rating: 5, attachments: 3, checklists: 5, comments: 4, timing: "4d left" },
    { id: "d4", company: "OpenAI", tag: "Strategic", tagTone: "amber", logoTone: "foreground", logo: "circle", value: "$41,200", note: "Research workspace rollout", nextStep: "Align procurement...", date: "May 11, 2026", owner: "Theo Grant", rating: 5, attachments: 4, checklists: 4, comments: 7, timing: "1d left" },
  ],
  meeting: [
    { id: "d5", company: "Zoom", tag: "Discovery", tagTone: "violet", logoTone: "blue", logo: "video", value: "$29,600", note: "Scheduling workspace pilot", nextStep: "Run discovery call", date: "May 12, 2026", owner: "Mara Bell", rating: 4, attachments: 2, checklists: 3, comments: 4, timing: "Booked" },
    { id: "d6", company: "Google Meet", tag: "Exec", tagTone: "amber", logoTone: "emerald", logo: "video", value: "$37,900", note: "Executive alignment session", nextStep: "Prepare value map", date: "May 13, 2026", owner: "Theo Grant", rating: 4, attachments: 3, checklists: 4, comments: 5, timing: "Tomorrow" },
  ],
  proposal: [
    { id: "d7", company: "GitHub", tag: "Legal", tagTone: "neutral", logoTone: "foreground", logo: "github", value: "$86,900", note: "Enterprise source control ad...", nextStep: "Send implementatio...", date: "May 13, 2026", owner: "Mara Bell", rating: 4, attachments: 5, checklists: 6, comments: 8, timing: "Review" },
    { id: "d8", company: "Loom", tag: "Pilot", tagTone: "violet", logoTone: "violet", logo: "play", value: "$27,300", note: "Enablement content hub", nextStep: "Share success plan", date: "May 14, 2026", owner: "Jonas Park", rating: 3, attachments: 2, checklists: 3, comments: 2, timing: "2d left" },
  ],
  negotiation: [
    { id: "d9", company: "Notion", tag: "Expansion", tagTone: "emerald", logoTone: "foreground", logo: "square", value: "$64,500", note: "Workspace consolidation", nextStep: "Align rollout timeline", date: "May 18, 2026", owner: "Lina Ortiz", rating: 4, attachments: 3, checklists: 5, comments: 6, timing: "5d left" },
    { id: "d10", company: "Linear", tag: "Inbound", tagTone: "violet", logoTone: "violet", logo: "zap", value: "$22,800", note: "Issue tracking rollout", nextStep: "Confirm migration owner", date: "May 19, 2026", owner: "Mara Bell", rating: 4, attachments: 2, checklists: 2, comments: 4, timing: "6d left" },
  ],
  won: [],
}
const TAG_TONES: Record<Deal["tagTone"], string> = {
  violet: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  emerald: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  neutral: "border-border bg-muted/50 text-foreground",
  solid: "border-transparent bg-foreground text-background",
  rose: "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300",
}
const LOGO_TONES: Record<LogoTone, string> = {
  emerald: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  violet: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
  blue: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
  foreground: "bg-foreground/10 text-foreground",
  rose: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
  amber: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
}
const LOGOS = {
  zap: ZapIcon,
  square: SquareIcon,
  video: VideoIcon,
  github: GitBranchIcon,
  hash: HashIcon,
  circle: CircleDollarSignIcon,
  play: PlayIcon,
}
function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("")
}
function DealCard({ deal, overlay }: { deal: Deal; overlay?: boolean }) {
  const Logo = LOGOS[deal.logo]
  return (
    <div
      className={cn(
        "bg-card flex flex-col gap-2.5 rounded-lg border p-3.5 shadow-xs",
        overlay && "w-[284px] rotate-1 shadow-lg"
      )}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className={cn("flex size-5 shrink-0 items-center justify-center rounded", LOGO_TONES[deal.logoTone])}>
          <Logo className="size-3.5" />
        </span>
        <span className="truncate text-[13px] font-semibold">{deal.company}</span>
        <span className={cn("ml-auto shrink-0 rounded-md border px-1.5 py-0.5 text-[10px] font-medium", TAG_TONES[deal.tagTone])}>
          {deal.tag}
        </span>
      </div>
      <div className="flex min-w-0 items-center gap-2 text-[13px]">
        <CircleDollarSignIcon className="text-muted-foreground size-3.5 shrink-0" />
        <span className="shrink-0 font-semibold tabular-nums">{deal.value}</span>
        <span className="text-muted-foreground truncate">{deal.note}</span>
      </div>
      <div className="flex min-w-0 items-center gap-2 text-[13px]">
        <CalendarIcon className="text-muted-foreground size-3.5 shrink-0" />
        <span className="truncate font-medium">{deal.nextStep}</span>
        <span className="text-muted-foreground ml-auto shrink-0 text-xs">{deal.date}</span>
      </div>
      <div className="flex min-w-0 items-center gap-2">
        <Avatar className="size-5" size="sm">
          <AvatarImage src={AVATARS[deal.owner]} alt="" />
          <AvatarFallback className="text-[8px]">{initials(deal.owner)}</AvatarFallback>
        </Avatar>
        <span className="truncate text-[13px]">{deal.owner}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <StarIcon className="text-muted-foreground size-3.5 shrink-0" />
        <Rating rating={deal.rating} size="sm" className="gap-0.5" starClassName="size-3.5" />
      </div>
      <div className="mt-0.5 flex items-center gap-3 border-t pt-2.5 text-[11px]">
        <span className="text-muted-foreground flex items-center gap-1 tabular-nums">
          <PaperclipIcon className="size-3.5" />
          {deal.attachments}
        </span>
        <span className="text-muted-foreground flex items-center gap-1 tabular-nums">
          <CheckSquareIcon className="size-3.5" />
          {deal.checklists}
        </span>
        <span className="text-muted-foreground flex items-center gap-1 tabular-nums">
          <MessageSquareIcon className="size-3.5" />
          {deal.comments}
        </span>
        <span className="text-muted-foreground ml-auto flex items-center gap-1">
          <ClockIcon className="size-3.5" />
          {deal.timing}
        </span>
      </div>
    </div>
  )
}
export function KanbanBoard3Block() {
  const [columns, setColumns] = useState<Record<string, Deal[]>>(INITIAL)
  const [query, setQuery] = useState("")
  const [owners, setOwners] = useState<string[]>([])
  const [draft, setDraft] = useState("")
  const [open, setOpen] = useState(false)
  const total = useMemo(() => Object.values(columns).flat().length, [columns])
  const people = useMemo(
    () => Array.from(new Set(Object.values(columns).flat().map((deal) => deal.owner))),
    [columns]
  )
  const matches = (deal: Deal) =>
    (query.trim() === "" ||
      `${deal.company} ${deal.owner} ${deal.tag}`.toLowerCase().includes(query.toLowerCase())) &&
    (owners.length === 0 || owners.includes(deal.owner))
  const addDeal = () => {
    const company = draft.trim()
    if (!company) return
    const id = `d${total + 11}`
    setColumns({
      ...columns,
      prospecting: [
        {
          id,
          company,
          tag: "Inbound",
          tagTone: "violet",
          logoTone: "blue",
          logo: "square",
          value: "$0",
          note: "New pipeline deal",
          nextStep: "Qualify account",
          date: "May 20, 2026",
          owner: "Mara Bell",
          rating: 3,
          attachments: 0,
          checklists: 0,
          comments: 0,
          timing: "New",
        },
        ...columns.prospecting,
      ],
    })
    setDraft("")
    setOpen(false)
  }
  return (
    <div className="bg-background min-h-svh p-4">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-5">
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold tracking-tight">Sales Pipeline</h1>
              <span className="text-muted-foreground text-xs tabular-nums">{total}</span>
            </div>
            <p className="text-muted-foreground mt-0.5 text-sm">Track accounts and next steps.</p>
          </div>
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
                    placeholder="Search deals"
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
            <Button size="sm" onClick={() => setOpen(true)}>
              <PlusIcon />
              New deal
            </Button>
          </div>
        </header>
        <div className="-mx-1 overflow-x-auto pb-4">
          <Kanban
            value={columns}
            onValueChange={setColumns}
            getItemValue={(deal) => deal.id}
            className="w-max min-w-full px-1"
          >
            <KanbanBoard className="flex w-max items-start gap-5 sm:grid-cols-none">
              {COLUMN_LIST.map((column) => {
                const items = columns[column.id].filter(matches)
                return (
                  <KanbanColumn key={column.id} value={column.id} className="w-[284px] shrink-0">
                    <div className="mb-3 flex items-center gap-2 px-0.5">
                      <span className={cn("size-2 rounded-full", column.dot)} />
                      <span className="text-[13px] font-semibold">{column.label}</span>
                      <span className="text-muted-foreground text-xs tabular-nums">
                        {items.length}
                      </span>
                      <KanbanColumnHandle asChild>
                        <Button variant="ghost" size="icon-xs" className="text-muted-foreground ml-auto">
                          <span className="sr-only">Reorder {column.label}</span>
                          <svg viewBox="0 0 10 10" className="size-3" aria-hidden>
                            <circle cx="2" cy="2" r="1" fill="currentColor" />
                            <circle cx="8" cy="2" r="1" fill="currentColor" />
                            <circle cx="2" cy="5" r="1" fill="currentColor" />
                            <circle cx="8" cy="5" r="1" fill="currentColor" />
                            <circle cx="2" cy="8" r="1" fill="currentColor" />
                            <circle cx="8" cy="8" r="1" fill="currentColor" />
                          </svg>
                        </Button>
                      </KanbanColumnHandle>
                    </div>
                    <KanbanColumnContent value={column.id} className="gap-3">
                      {items.map((deal) => (
                        <KanbanItem key={deal.id} value={deal.id}>
                          <KanbanItemHandle>
                            <DealCard deal={deal} />
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
                const deal = Object.values(columns).flat().find((item) => item.id === String(value))
                return deal ? <DealCard deal={deal} overlay /> : null
              }}
            </KanbanOverlay>
          </Kanban>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>New deal</DialogTitle>
          </DialogHeader>
          <Input
            autoFocus
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Company name"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={addDeal} disabled={draft.trim() === ""}>
              Create deal
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default KanbanBoard3Block