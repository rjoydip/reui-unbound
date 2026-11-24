import { useRef, useState } from "react"
import {
  BadgeCheckIcon,
  CalendarIcon,
  ClockIcon,
  FileCheck2Icon,
  FileTextIcon,
  FilterIcon,
  InboxIcon,
  KeyRoundIcon,
  PlusIcon,
  ShieldAlertIcon,
  StarIcon,
  UserRoundIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Rating } from "@/components/kit/rating"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/kit/kanban"
import { cn } from "cn"

type Risk = "Critical" | "High" | "Medium" | "Low"

interface Review {
  id: string
  app: string
  risk: Risk
  permission: string
  summary: string
  ago: string
  reviewer: string
  docs: [number, number, number]
  due: string
}

const COLUMNS = [
  { id: "intake", title: "Intake", icon: InboxIcon, tone: "text-info", add: "Add intake review" },
  { id: "owner", title: "Owner Review", icon: UserRoundIcon, tone: "text-violet-500", add: "Add owner review" },
  { id: "risk", title: "Risk Review", icon: ShieldAlertIcon, tone: "text-destructive", add: "Add risk review" },
  { id: "exception", title: "Exception", icon: FileCheck2Icon, tone: "text-info", add: "Add exception" },
  { id: "removal", title: "Removal", icon: KeyRoundIcon, tone: "text-warning-foreground", add: "Add removal" },
  { id: "certified", title: "Certified", icon: BadgeCheckIcon, tone: "text-success", add: "Add certification" },
] as const

const INITIAL: Record<string, Review[]> = {
  intake: [
    { id: "IAM-1021", app: "Stripe", risk: "Medium", permission: "Billing admin", summary: "Verify billing admin scope", ago: "18m ago", reviewer: "Avery Stone", docs: [2, 2, 3], due: "Today" },
    { id: "IAM-1022", app: "Support console", risk: "Low", permission: "Session replay", summary: "Confirm support console access", ago: "2h ago", reviewer: "Talia Moss", docs: [1, 2, 1], due: "2d" },
  ],
  owner: [
    { id: "IAM-1104", app: "Snowflake", risk: "Medium", permission: "Schema owner", summary: "Attest warehouse ownership", ago: "41m ago", reviewer: "Dev Iqbal", docs: [3, 2, 2], due: "1d" },
    { id: "IAM-1107", app: "Workspace admin", risk: "Low", permission: "Org settings", summary: "Review workspace admin role", ago: "Yesterday", reviewer: "Camila Reed", docs: [1, 2, 4], due: "3d" },
  ],
  risk: [
    { id: "IAM-1208", app: "GitHub Enterprise", risk: "Critical", permission: "Repository admin", summary: "Remove dormant repository owners", ago: "44d ago", reviewer: "Jonas Hart", docs: [4, 2, 7], due: "Overdue" },
    { id: "IAM-1212", app: "Workday", risk: "High", permission: "Payroll export", summary: "Validate payroll export access", ago: "6d ago", reviewer: "Freya Chen", docs: [2, 2, 5], due: "Today" },
  ],
  exception: [
    { id: "IAM-1301", app: "Okta", risk: "High", permission: "Break-glass admin", summary: "Time-box break-glass recovery", ago: "12m ago", reviewer: "Avery Stone", docs: [3, 2, 4], due: "12h" },
  ],
  removal: [
    { id: "IAM-1416", app: "Customer data platform", risk: "High", permission: "Audience admin", summary: "Queue marketing exports removal", ago: "5h ago", reviewer: "Talia Moss", docs: [2, 2, 2], due: "2d" },
  ],
  certified: [
    { id: "IAM-1394", app: "Linear", risk: "Medium", permission: "Workspace owner", summary: "Certify workspace ownership", ago: "1d ago", reviewer: "Dev Iqbal", docs: [3, 3, 1], due: "1d" },
    { id: "IAM-1391", app: "Notion", risk: "Low", permission: "Guest access", summary: "Attest guest access list", ago: "2d ago", reviewer: "Camila Reed", docs: [2, 1, 2], due: "2d" },
  ],
}

const RISK = {
  Critical: { badge: "destructive-light", className: "", dot: "bg-destructive", stars: 5 },
  High: { badge: "destructive-outline", className: "", dot: "bg-destructive", stars: 4 },
  Medium: { badge: "warning-light", className: "", dot: "bg-warning", stars: 3 },
  Low: { badge: "success-light", className: "", dot: "bg-success", stars: 2 },
} as const

const RISKS: Risk[] = ["Critical", "High", "Medium", "Low"]

const AVATAR_TONES = [
  "bg-info/15 text-info-foreground",
  "bg-success/15 text-success-foreground",
  "bg-warning/15 text-warning-foreground",
  "bg-destructive/15 text-destructive-foreground",
]

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("")
const toneFor = (name: string) => AVATAR_TONES[name.charCodeAt(0) % AVATAR_TONES.length]

function ReviewCardBody({ review }: { review: Review }) {
  const meta = RISK[review.risk]
  const overdue = review.due === "Overdue"
  return (
    <div className="flex min-h-[180px] flex-col gap-2.5 rounded-lg border bg-card p-3 shadow-xs">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className={cn("size-2 shrink-0 rounded-full", meta.dot)} />
          <span className="truncate text-sm font-medium">{review.app}</span>
        </div>
        <Badge variant={meta.badge} size="sm" className={meta.className}>{review.risk}</Badge>
      </div>

      <div className="flex items-center gap-1.5 text-xs">
        <KeyRoundIcon className="text-muted-foreground size-3.5 shrink-0" />
        <span className="font-medium">{review.id}</span>
        <span className="text-muted-foreground truncate">{review.permission}</span>
      </div>

      <div className="flex items-center gap-1.5 text-xs">
        <CalendarIcon className="text-muted-foreground size-3.5 shrink-0" />
        <span className="truncate">{review.summary}</span>
        <span className="text-muted-foreground ml-auto shrink-0 text-[11px]">{review.ago}</span>
      </div>

      <div className="flex items-center gap-1.5 text-xs">
        <UserRoundIcon className="text-muted-foreground size-3.5 shrink-0" />
        <Avatar size="sm" className="size-5">
          <AvatarFallback className={cn("text-[9px] font-medium", toneFor(review.reviewer))}>{initials(review.reviewer)}</AvatarFallback>
        </Avatar>
        <span className="truncate">{review.reviewer}</span>
      </div>

      <div className="flex items-center gap-1.5">
        <StarIcon className="text-muted-foreground size-3.5 shrink-0" />
        <Rating rating={meta.stars} size="sm" aria-label={`${meta.stars} of 5 confidence`} />
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 pt-1">
        <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
          {review.docs.map((count, index) => (
            <span key={index} className="inline-flex items-center gap-1">
              <FileTextIcon className="size-3.5" />
              <span className="tabular-nums">{count}</span>
            </span>
          ))}
        </div>
        <span className={cn("inline-flex items-center gap-1 text-xs text-muted-foreground tabular-nums", overdue && "text-destructive font-medium")}>
          <ClockIcon className="size-3.5" />
          {review.due}
        </span>
      </div>
    </div>
  )
}

export function KanbanBoard10Block() {
  const [columns, setColumns] = useState<Record<string, Review[]>>(INITIAL)
  const [query, setQuery] = useState("")
  const [risks, setRisks] = useState<Risk[]>([])
  const nextId = useRef(1420)

  const q = query.trim().toLowerCase()
  const matches = (review: Review) =>
    (risks.length === 0 || risks.includes(review.risk)) &&
    (!q || `${review.id} ${review.app} ${review.permission} ${review.summary} ${review.reviewer}`.toLowerCase().includes(q))

  const addReview = (column: string) => {
    const id = `IAM-${nextId.current++}`
    setColumns((prev) => ({
      ...prev,
      [column]: [
        { id, app: "New application", risk: "Medium", permission: "Access review", summary: "Validate requested access", ago: "Just now", reviewer: "Avery Stone", docs: [0, 0, 0], due: "3d" },
        ...prev[column],
      ],
    }))
  }

  const toggleRisk = (risk: Risk) =>
    setRisks((prev) => (prev.includes(risk) ? prev.filter((item) => item !== risk) : [...prev, risk]))

  return (
    <div className="flex min-h-svh flex-col gap-5 bg-background p-4 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold tracking-tight">Access Review</h1>
            <span className="text-muted-foreground rounded-md border bg-muted/50 px-1.5 text-xs tabular-nums">{Object.values(columns).flat().length}</span>
          </div>
          <p className="text-muted-foreground text-sm">Review access changes, risk signals, and owner attestations.</p>
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <FilterIcon />
                Filters
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-64 gap-3 p-3">
              <Input placeholder="Search requests or apps" value={query} onChange={(event) => setQuery(event.target.value)} className="h-8" />
              <div className="flex flex-wrap gap-1.5">
                {RISKS.map((risk) => (
                  <Button key={risk} size="xs" variant={risks.includes(risk) ? "secondary" : "outline"} onClick={() => toggleRisk(risk)}>
                    {risk}
                  </Button>
                ))}
              </div>
              {(query || risks.length > 0) && (
                <Button variant="ghost" size="xs" className="justify-start text-muted-foreground" onClick={() => { setQuery(""); setRisks([]) }}>
                  Clear filters
                </Button>
              )}
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="sm" onClick={() => addReview("intake")}>
            <PlusIcon />
            New review
          </Button>
        </div>
      </div>

      <Kanban value={columns} onValueChange={setColumns} getItemValue={(review) => review.id}>
        <KanbanBoard className="flex items-start gap-4 overflow-x-auto pb-3">
          {COLUMNS.map((column) => {
            const visible = columns[column.id].filter(matches)
            const Icon = column.icon
            return (
              <KanbanColumn key={column.id} value={column.id} className="w-[300px] shrink-0">
                <div className="flex flex-col rounded-xl border bg-card">
                  <div className="flex items-center gap-2 px-3 py-2.5">
                    <Icon className={cn("size-4", column.tone)} />
                    <span className="text-sm font-medium">{column.title}</span>
                    <span className="text-muted-foreground text-xs tabular-nums">{visible.length}</span>
                  </div>
                  <KanbanColumnContent value={column.id} className="gap-2 px-2 pb-2">
                    {visible.map((review) => (
                      <KanbanItem key={review.id} value={review.id}>
                        <KanbanItemHandle className="block rounded-lg">
                          <ReviewCardBody review={review} />
                        </KanbanItemHandle>
                      </KanbanItem>
                    ))}
                  </KanbanColumnContent>
                  <Button variant="ghost" size="sm" className="text-muted-foreground mt-auto rounded-t-none border-t font-normal" onClick={() => addReview(column.id)}>
                    <PlusIcon />
                    {column.add}
                  </Button>
                </div>
              </KanbanColumn>
            )
          })}
        </KanbanBoard>
        <KanbanOverlay>
          {({ value }) => {
            const review = Object.values(columns).flat().find((item) => item.id === value)
            return review ? <div className="w-[284px] rotate-2"><ReviewCardBody review={review} /></div> : null
          }}
        </KanbanOverlay>
      </Kanban>
    </div>
  )
}

export default KanbanBoard10Block
