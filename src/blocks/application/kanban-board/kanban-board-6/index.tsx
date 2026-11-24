import { useRef, useState } from "react"
import {
  CircleCheckIcon,
  CircleDotIcon,
  ClockIcon,
  FilterIcon,
  MessageSquareIcon,
  PlusIcon,
  TriangleAlertIcon,
  WrenchIcon,
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

type Priority = "Urgent" | "High" | "Normal" | "Low"

interface Ticket {
  id: string
  priority: Priority
  title: string
  requester: string
  company: string
  assignee: string
  sla: number | "Paused" | "Resolved"
}

const COLUMNS = [
  { id: "new", title: "New", icon: CircleDotIcon, tone: "text-info" },
  { id: "reply", title: "Needs Reply", icon: MessageSquareIcon, tone: "text-muted-foreground" },
  { id: "engineering", title: "Engineering", icon: WrenchIcon, tone: "text-violet-500" },
  { id: "waiting", title: "Waiting Customer", icon: ClockIcon, tone: "text-info" },
  { id: "risk", title: "SLA Risk", icon: TriangleAlertIcon, tone: "text-destructive" },
  { id: "resolved", title: "Resolved", icon: CircleCheckIcon, tone: "text-success" },
] as const

const INITIAL: Record<string, Ticket[]> = {
  new: [
    { id: "SUP-10482", priority: "High", title: "Export job stuck after regional data residency switch", requester: "Alicia Wong", company: "Northstar Bio", assignee: "Maya Ito", sla: 105 },
    { id: "SUP-10483", priority: "Normal", title: "SSO group mapping not applying to new finance workspaces", requester: "Jon Bell", company: "Meridian Works", assignee: "Omar Haddad", sla: 200 },
  ],
  reply: [
    { id: "SUP-10451", priority: "High", title: "Workspace audit stream missing approval events", requester: "Sofia Klein", company: "Aster Capital", assignee: "Priya Shah", sla: 52 },
    { id: "SUP-10459", priority: "Normal", title: "Billing contact cannot download April invoice bundle", requester: "Theo Martins", company: "Civic Cloud", assignee: "Marcus Chen", sla: 245 },
    { id: "SUP-10466", priority: "Low", title: "Saved view permissions differ between parent and child...", requester: "Nina Patel", company: "Harbor Grid", assignee: "Elena Torres", sla: 430 },
  ],
  engineering: [
    { id: "SUP-10392", priority: "Urgent", title: "Webhook retries duplicate seat change events", requester: "Iris Novak", company: "LedgerPoint", assignee: "Priya Shah", sla: 36 },
    { id: "SUP-10410", priority: "High", title: "EU shard search results omit recently migrated projects", requester: "Mateo Ruiz", company: "Atlas Legal", assignee: "Omar Haddad", sla: 135 },
  ],
  waiting: [
    { id: "SUP-10437", priority: "Normal", title: "Confirm SCIM token rotation window for APAC tenant", requester: "Grace Liu", company: "Quantix Bank", assignee: "Maya Ito", sla: "Paused" },
    { id: "SUP-10444", priority: "Low", title: "Approve temporary allowlist for partner sandbox", requester: "Evan Brooks", company: "Fieldstone Labs", assignee: "Elena Torres", sla: "Paused" },
  ],
  risk: [
    { id: "SUP-10472", priority: "Urgent", title: "Production admins locked out after enforced SAML cutover", requester: "Noah Grant", company: "Summit Health", assignee: "Marcus Chen", sla: 22 },
    { id: "SUP-10476", priority: "High", title: "Regional failover reports not visible to compliance team", requester: "Leah Stern", company: "BluePeak Energy", assignee: "Omar Haddad", sla: 65 },
  ],
  resolved: [
    { id: "SUP-10441", priority: "Low", title: "Password reset link expires before email delivery", requester: "Ada Park", company: "Loom Systems", assignee: "Maya Ito", sla: "Resolved" },
    { id: "SUP-10433", priority: "Normal", title: "Duplicate invoice lines after plan downgrade", requester: "Ben Ortiz", company: "Quarry Studio", assignee: "Elena Torres", sla: "Resolved" },
  ],
}

const PRIORITY = {
  Urgent: { badge: "destructive-light", dot: "bg-destructive", border: "border-destructive/40" },
  High: { badge: "warning-light", dot: "bg-warning", border: "border-warning/40" },
  Normal: { badge: "info-light", dot: "bg-info", border: "" },
  Low: { badge: "outline", dot: "bg-muted-foreground", border: "" },
} as const

const PRIORITIES: Priority[] = ["Urgent", "High", "Normal", "Low"]

const AVATAR_TONES = [
  "bg-info/15 text-info-foreground",
  "bg-success/15 text-success-foreground",
  "bg-warning/15 text-warning-foreground",
  "bg-destructive/15 text-destructive-foreground",
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

const toneFor = (name: string) => AVATAR_TONES[name.charCodeAt(0) % AVATAR_TONES.length]

function formatSla(minutes: number) {
  return minutes >= 60 ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : `${minutes}m`
}

function SlaChip({ sla }: { sla: Ticket["sla"] }) {
  if (typeof sla === "string") {
    return (
      <span className="text-muted-foreground inline-flex shrink-0 items-center gap-1 rounded-md border px-1.5 py-0.5 text-[11px]">
        <ClockIcon className="size-3" />
        {sla}
      </span>
    )
  }

  const tone =
    sla <= 45
      ? "border-destructive/30 bg-destructive/5 text-destructive"
      : sla <= 180
        ? "border-warning/30 bg-warning/5 text-warning-foreground"
        : "border-info/30 bg-info/5 text-info-foreground"

  return (
    <span className={cn("inline-flex shrink-0 items-center gap-1 rounded-md border px-1.5 py-0.5 text-[11px] font-medium tabular-nums", tone)}>
      <ClockIcon className="size-3" />
      {formatSla(sla)}
    </span>
  )
}

function TicketCardBody({ ticket }: { ticket: Ticket }) {
  const meta = PRIORITY[ticket.priority]
  return (
    <div className={cn("flex flex-col gap-2 rounded-lg border bg-card p-3 shadow-xs", meta.border)}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-muted-foreground text-[11px] font-medium tracking-wide tabular-nums">{ticket.id}</span>
        <Badge variant={meta.badge} size="sm" className="gap-1">
          <span className={cn("size-1.5 rounded-full", meta.dot)} />
          {ticket.priority}
        </Badge>
      </div>
      <p className="line-clamp-2 text-sm leading-snug font-medium">{ticket.title}</p>
      <p className="text-muted-foreground truncate text-xs">
        {ticket.requester} at {ticket.company}
      </p>
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-1.5">
          <Avatar size="sm" className="size-6">
            <AvatarFallback className={cn("text-[10px] font-medium", toneFor(ticket.assignee))}>{initials(ticket.assignee)}</AvatarFallback>
          </Avatar>
          <span className="truncate text-xs font-medium">{ticket.assignee}</span>
        </div>
        <SlaChip sla={ticket.sla} />
      </div>
    </div>
  )
}

export function KanbanBoard6Block() {
  const [columns, setColumns] = useState<Record<string, Ticket[]>>(INITIAL)
  const [query, setQuery] = useState("")
  const [priorities, setPriorities] = useState<Priority[]>([])
  const nextId = useRef(10490)

  const q = query.trim().toLowerCase()
  const matches = (ticket: Ticket) =>
    (priorities.length === 0 || priorities.includes(ticket.priority)) &&
    (!q || `${ticket.id} ${ticket.title} ${ticket.requester} ${ticket.company} ${ticket.assignee}`.toLowerCase().includes(q))

  const addTicket = (column: string) => {
    const id = `SUP-${nextId.current++}`
    setColumns((prev) => ({
      ...prev,
      [column]: [
        { id, priority: "Normal", title: "New support ticket", requester: "Unassigned", company: "Triage queue", assignee: "Maya Ito", sla: 240 },
        ...prev[column],
      ],
    }))
  }

  const togglePriority = (priority: Priority) =>
    setPriorities((prev) => (prev.includes(priority) ? prev.filter((item) => item !== priority) : [...prev, priority]))

  return (
    <div className="flex min-h-svh flex-col gap-5 bg-muted/20 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-lg font-semibold tracking-tight">Support Escalations</h1>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <FilterIcon />
                Filters
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-64 gap-3 p-3">
              <Input placeholder="Search tickets or people" value={query} onChange={(event) => setQuery(event.target.value)} className="h-8" />
              <div className="flex flex-wrap gap-1.5">
                {PRIORITIES.map((priority) => (
                  <Button
                    key={priority}
                    size="xs"
                    variant={priorities.includes(priority) ? "secondary" : "outline"}
                    onClick={() => togglePriority(priority)}
                  >
                    {priority}
                  </Button>
                ))}
              </div>
              {(query || priorities.length > 0) && (
                <Button variant="ghost" size="xs" className="justify-start text-muted-foreground" onClick={() => { setQuery(""); setPriorities([]) }}>
                  Clear filters
                </Button>
              )}
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="sm" onClick={() => addTicket("new")}>
            <PlusIcon />
            Ticket
          </Button>
        </div>
      </div>

      <Kanban value={columns} onValueChange={setColumns} getItemValue={(ticket) => ticket.id}>
        <KanbanBoard className="flex items-start gap-4 overflow-x-auto pb-3">
          {COLUMNS.map((column) => {
            const visible = columns[column.id].filter(matches)
            const Icon = column.icon
            return (
              <KanbanColumn key={column.id} value={column.id} className="w-[280px] shrink-0">
                <div className="flex flex-col rounded-xl border bg-card">
                  <div className="flex items-center gap-2 px-3 py-2.5">
                    <Icon className={cn("size-4", column.tone)} />
                    <span className="text-sm font-medium">{column.title}</span>
                    <span className="text-muted-foreground text-xs tabular-nums">{visible.length}</span>
                  </div>
                  <KanbanColumnContent value={column.id} className="gap-2 px-2 pb-2">
                    {visible.map((ticket) => (
                      <KanbanItem key={ticket.id} value={ticket.id}>
                        <KanbanItemHandle className="block rounded-lg">
                          <TicketCardBody ticket={ticket} />
                        </KanbanItemHandle>
                      </KanbanItem>
                    ))}
                  </KanbanColumnContent>
                  <Button variant="ghost" size="sm" className="text-muted-foreground mt-auto rounded-t-none border-t font-normal" onClick={() => addTicket(column.id)}>
                    <PlusIcon />
                    Add ticket
                  </Button>
                </div>
              </KanbanColumn>
            )
          })}
        </KanbanBoard>
        <KanbanOverlay>
          {({ value }) => {
            const ticket = Object.values(columns).flat().find((item) => item.id === value)
            return ticket ? <div className="w-[264px] rotate-2"><TicketCardBody ticket={ticket} /></div> : null
          }}
        </KanbanOverlay>
      </Kanban>
    </div>
  )
}

export default KanbanBoard6Block
