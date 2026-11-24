import { useRef, useState } from "react"
import {
  BarChart3Icon,
  CalendarDaysIcon,
  CreditCardIcon,
  FilterIcon,
  PlusIcon,
  ReceiptTextIcon,
  ShieldCheckIcon,
  WebhookIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
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
type Service = "Checkout" | "Identity" | "Webhooks" | "Analytics" | "Billing"

interface Change {
  id: string
  risk: Risk
  title: string
  service: Service
  env: "Production" | "Staging"
  window: string
  owner: string
  checksDone: number
  checksTotal: number
}

const COLUMNS = [
  { id: "intake", title: "Intake", dot: "bg-muted-foreground" },
  { id: "review", title: "Review Needed", dot: "bg-violet-500" },
  { id: "blocked", title: "Blocked", dot: "bg-destructive" },
  { id: "scheduled", title: "Scheduled", dot: "bg-muted-foreground" },
  { id: "deploying", title: "Deploying", dot: "bg-info" },
  { id: "shipped", title: "Shipped", dot: "bg-success" },
] as const

const INITIAL: Record<string, Change[]> = {
  intake: [
    { id: "REL-8429", risk: "Medium", title: "Enable saved cards for guest checkout", service: "Checkout", env: "Production", window: "Apr 30, 20:00 UTC", owner: "Nina Santos", checksDone: 1, checksTotal: 4 },
    { id: "REL-8427", risk: "Low", title: "Add resend controls to login recovery", service: "Identity", env: "Staging", window: "May 1, 16:30 UTC", owner: "Jonah Lee", checksDone: 2, checksTotal: 4 },
    { id: "REL-8425", risk: "Low", title: "Log receipt resend events for admins", service: "Billing", env: "Staging", window: "May 1, 19:00 UTC", owner: "Theo Vincent", checksDone: 1, checksTotal: 3 },
  ],
  review: [
    { id: "REL-8421", risk: "Critical", title: "Split EU checkout traffic by processor", service: "Checkout", env: "Production", window: "Apr 30, 22:00 UTC", owner: "Maya Patel", checksDone: 2, checksTotal: 5 },
    { id: "REL-8418", risk: "High", title: "Raise webhook retry ceiling for partners", service: "Webhooks", env: "Production", window: "May 1, 18:30 UTC", owner: "Omar Haddad", checksDone: 3, checksTotal: 5 },
    { id: "REL-8417", risk: "High", title: "Confirm processor failover limits", service: "Checkout", env: "Production", window: "May 1, 21:00 UTC", owner: "Priya Menon", checksDone: 2, checksTotal: 5 },
  ],
  blocked: [
    { id: "REL-8416", risk: "High", title: "Rotate signing keys for session tokens", service: "Identity", env: "Production", window: "May 2, 19:30 UTC", owner: "Priya Menon", checksDone: 2, checksTotal: 4 },
    { id: "REL-8413", risk: "Critical", title: "Rebuild analytics partitions for exports", service: "Analytics", env: "Staging", window: "May 2, 23:00 UTC", owner: "Theo Vincent", checksDone: 1, checksTotal: 5 },
  ],
  scheduled: [
    { id: "REL-8408", risk: "Medium", title: "Move invoice workers to new queues", service: "Billing", env: "Staging", window: "May 3, 21:00 UTC", owner: "Theo Vincent", checksDone: 4, checksTotal: 5 },
    { id: "REL-8405", risk: "Medium", title: "Expand partner delivery event schema", service: "Webhooks", env: "Production", window: "May 4, 17:30 UTC", owner: "Omar Haddad", checksDone: 3, checksTotal: 4 },
    { id: "REL-8402", risk: "Medium", title: "Reshard billing export queue", service: "Billing", env: "Production", window: "May 4, 23:00 UTC", owner: "Nina Santos", checksDone: 3, checksTotal: 5 },
  ],
  deploying: [
    { id: "REL-8399", risk: "High", title: "Enable processor health probes", service: "Checkout", env: "Production", window: "May 5, 18:00 UTC", owner: "Maya Patel", checksDone: 3, checksTotal: 5 },
    { id: "REL-8397", risk: "Low", title: "Backfill receipt delivery receipts", service: "Billing", env: "Production", window: "May 5, 20:00 UTC", owner: "Jonah Lee", checksDone: 4, checksTotal: 4 },
  ],
  shipped: [
    { id: "REL-8390", risk: "Low", title: "Shorten recovery code expiry copy", service: "Identity", env: "Production", window: "Apr 28, 19:00 UTC", owner: "Priya Menon", checksDone: 5, checksTotal: 5 },
    { id: "REL-8388", risk: "Medium", title: "Partition analytics event landing", service: "Analytics", env: "Production", window: "Apr 29, 17:00 UTC", owner: "Nina Santos", checksDone: 5, checksTotal: 5 },
  ],
}

const RISK = {
  Critical: { badge: "destructive-light", className: "", bar: "bg-destructive" },
  High: { badge: "warning-light", className: "", bar: "bg-warning" },
  Medium: { badge: "outline", className: "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-300", bar: "bg-violet-500" },
  Low: { badge: "outline", className: "text-muted-foreground", bar: "bg-muted-foreground" },
} as const

const RISKS: Risk[] = ["Critical", "High", "Medium", "Low"]

const SERVICE_ICON = {
  Checkout: CreditCardIcon,
  Identity: ShieldCheckIcon,
  Webhooks: WebhookIcon,
  Analytics: BarChart3Icon,
  Billing: ReceiptTextIcon,
}

const AVATAR_TONES = [
  "bg-info/15 text-info-foreground",
  "bg-success/15 text-success-foreground",
  "bg-warning/15 text-warning-foreground",
  "bg-destructive/15 text-destructive-foreground",
]

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("")
const toneFor = (name: string) => AVATAR_TONES[name.charCodeAt(0) % AVATAR_TONES.length]

const LAUNCH_WINDOWS = [
  { label: "Apr 30, 20:00 UTC", env: "Production" },
  { label: "May 1, 16:30 UTC", env: "Staging" },
  { label: "May 2, 19:30 UTC", env: "Production" },
  { label: "May 4, 23:00 UTC", env: "Production" },
]

function ProgressBar({ value, tone }: { value: number; tone: string }) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
      <div className={cn("h-full rounded-full", tone)} style={{ width: `${value}%` }} />
    </div>
  )
}

function ChangeCardBody({ change }: { change: Change }) {
  const meta = RISK[change.risk]
  const ServiceIcon = SERVICE_ICON[change.service]
  const pct = Math.round((change.checksDone / change.checksTotal) * 100)
  return (
    <div className="flex flex-col gap-2 rounded-lg border bg-card p-3 shadow-xs">
      <div className="flex items-center justify-between gap-2">
        <span className="text-muted-foreground text-xs font-medium tabular-nums">{change.id}</span>
        <Badge variant={meta.badge} size="sm" className={meta.className}>{change.risk}</Badge>
      </div>
      <p className="line-clamp-2 text-sm leading-snug font-medium">{change.title}</p>
      <div className="flex items-center gap-1.5 text-xs">
        <ServiceIcon className="text-muted-foreground size-3.5" />
        <span className="font-medium">{change.service}</span>
        <Badge variant="outline" size="xs" className="text-muted-foreground font-normal">{change.env}</Badge>
      </div>
      <div className="flex items-center gap-1.5 text-xs">
        <CalendarDaysIcon className="text-muted-foreground size-3.5" />
        <span className="text-muted-foreground">{change.window}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Avatar size="sm" className="size-5">
          <AvatarFallback className={cn("text-[9px] font-medium", toneFor(change.owner))}>{initials(change.owner)}</AvatarFallback>
        </Avatar>
        <span className="text-xs">{change.owner}</span>
      </div>
      <div className="mt-0.5 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Checklist</span>
          <span className="font-medium tabular-nums">{change.checksDone}/{change.checksTotal} - {pct}%</span>
        </div>
        <ProgressBar value={pct} tone={meta.bar} />
      </div>
    </div>
  )
}

export function KanbanBoard8Block() {
  const [columns, setColumns] = useState<Record<string, Change[]>>(INITIAL)
  const [query, setQuery] = useState("")
  const [risks, setRisks] = useState<Risk[]>([])
  const nextId = useRef(8430)

  const q = query.trim().toLowerCase()
  const matches = (change: Change) =>
    (risks.length === 0 || risks.includes(change.risk)) &&
    (!q || `${change.id} ${change.title} ${change.service} ${change.owner} ${change.env}`.toLowerCase().includes(q))

  const addChange = (column: string) => {
    const id = `REL-${nextId.current++}`
    setColumns((prev) => ({
      ...prev,
      [column]: [
        { id, risk: "Medium", title: "New release change", service: "Checkout", env: "Staging", window: "May 6, 18:00 UTC", owner: "Nina Santos", checksDone: 0, checksTotal: 4 },
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
          <h1 className="text-lg font-semibold tracking-tight">Release Readiness Board</h1>
          <p className="text-muted-foreground text-sm">Readiness, risk, and launch checks.</p>
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
              <Input placeholder="Search changes or owners" value={query} onChange={(event) => setQuery(event.target.value)} className="h-8" />
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
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <CalendarDaysIcon />
                Windows
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-64 gap-2 p-3">
              <p className="text-sm font-medium">Upcoming launch windows</p>
              {LAUNCH_WINDOWS.map((window) => (
                <div key={window.label} className="flex items-center justify-between gap-2 text-xs">
                  <span className="text-muted-foreground">{window.label}</span>
                  <Badge variant="outline" size="xs" className="font-normal">{window.env}</Badge>
                </div>
              ))}
            </PopoverContent>
          </Popover>
          <Button size="sm" onClick={() => addChange("intake")}>
            <PlusIcon />
            New change
          </Button>
        </div>
      </div>

      <Kanban value={columns} onValueChange={setColumns} getItemValue={(change) => change.id}>
        <KanbanBoard className="flex items-start gap-4 overflow-x-auto pb-3">
          {COLUMNS.map((column) => {
            const visible = columns[column.id].filter(matches)
            return (
              <KanbanColumn key={column.id} value={column.id} className="w-[300px] shrink-0">
                <div className="flex flex-col gap-2 rounded-xl bg-muted/25 p-2">
                  <div className="flex items-center gap-2 px-1.5 pt-1 pb-0.5">
                    <span className={cn("size-2 rounded-full", column.dot)} />
                    <span className="text-sm font-medium">{column.title}</span>
                    <span className="text-muted-foreground text-xs tabular-nums">{visible.length}</span>
                  </div>
                  <KanbanColumnContent value={column.id} className="gap-2">
                    {visible.map((change) => (
                      <KanbanItem key={change.id} value={change.id}>
                        <KanbanItemHandle className="block rounded-lg">
                          <ChangeCardBody change={change} />
                        </KanbanItemHandle>
                      </KanbanItem>
                    ))}
                  </KanbanColumnContent>
                  <Button variant="ghost" size="sm" className="text-muted-foreground justify-start font-normal" onClick={() => addChange(column.id)}>
                    <PlusIcon />
                    Add change
                  </Button>
                </div>
              </KanbanColumn>
            )
          })}
        </KanbanBoard>
        <KanbanOverlay>
          {({ value }) => {
            const change = Object.values(columns).flat().find((item) => item.id === value)
            return change ? <div className="w-[284px] rotate-2"><ChangeCardBody change={change} /></div> : null
          }}
        </KanbanOverlay>
      </Kanban>
    </div>
  )
}

export default KanbanBoard8Block
