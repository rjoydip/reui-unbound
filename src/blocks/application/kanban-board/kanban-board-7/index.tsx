import { useRef, useState } from "react"
import {
  CalendarDaysIcon,
  CircleDollarSignIcon,
  FilterIcon,
  LayersIcon,
  PlusIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { GithubDark } from "@/components/ui/svgs/githubDark"
import { GithubLight } from "@/components/ui/svgs/githubLight"
import { Dropbox } from "@/components/ui/svgs/dropbox"
import { Slack } from "@/components/ui/svgs/slack"
import { Stripe } from "@/components/ui/svgs/stripe"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Zoom } from "@/components/ui/svgs/zoom"
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

type Status = "Critical" | "Warning" | "Clear"
type Brand = "google" | "slack" | "openai" | "github" | "zoom" | "stripe" | "anthropic" | "supabase" | "dropbox" | "nvidia" | "notion" | "figma"

interface Account {
  id: string
  brand: Brand
  company: string
  status: Status
  arr: string
  renews: string
  health: number
  owner: string
  role: string
  daysLeft: number
}

const COLUMNS = [
  { id: "upcoming", title: "Upcoming", dot: "bg-info" },
  { id: "save-plan", title: "Save Plan", dot: "bg-destructive" },
  { id: "executive", title: "Executive Review", dot: "bg-warning" },
  { id: "security", title: "Security/Legal", dot: "bg-violet-500" },
  { id: "approved", title: "Approved", dot: "bg-success" },
  { id: "closed", title: "Closed", dot: "bg-muted-foreground" },
] as const

const INITIAL: Record<string, Account[]> = {
  upcoming: [
    { id: "google", brand: "google", company: "Google", status: "Warning", arr: "$184K", renews: "May 15", health: 66, owner: "Ava Morgan", role: "Strategic CSM", daysLeft: 15 },
    { id: "zoom", brand: "zoom", company: "Zoom", status: "Clear", arr: "$126K", renews: "May 21", health: 74, owner: "Eli Ramos", role: "Enterprise AM", daysLeft: 21 },
    { id: "dropbox", brand: "dropbox", company: "Dropbox", status: "Clear", arr: "$158K", renews: "Jun 3", health: 71, owner: "Priya Shah", role: "Commercial CSM", daysLeft: 34 },
  ],
  "save-plan": [
    { id: "slack", brand: "slack", company: "Slack", status: "Critical", arr: "$342K", renews: "May 6", health: 32, owner: "Nora Singh", role: "Renewals Lead", daysLeft: 6 },
    { id: "stripe", brand: "stripe", company: "Stripe", status: "Critical", arr: "$278K", renews: "May 10", health: 42, owner: "Ava Morgan", role: "Strategic CSM", daysLeft: 10 },
  ],
  executive: [
    { id: "openai", brand: "openai", company: "OpenAI", status: "Warning", arr: "$515K", renews: "May 13", health: 59, owner: "Miles Chen", role: "Global CSM", daysLeft: 13 },
    { id: "anthropic", brand: "anthropic", company: "Anthropic", status: "Warning", arr: "$228K", renews: "May 22", health: 64, owner: "Priya Shah", role: "Commercial CSM", daysLeft: 22 },
  ],
  security: [
    { id: "github", brand: "github", company: "GitHub", status: "Warning", arr: "$397K", renews: "May 8", health: 48, owner: "Eli Ramos", role: "Enterprise AM", daysLeft: 8 },
    { id: "supabase", brand: "supabase", company: "Supabase", status: "Warning", arr: "$448K", renews: "May 18", health: 57, owner: "Nora Singh", role: "Renewals Lead", daysLeft: 18 },
    { id: "nvidia", brand: "nvidia", company: "NVIDIA", status: "Clear", arr: "$302K", renews: "May 27", health: 72, owner: "Miles Chen", role: "Global CSM", daysLeft: 27 },
  ],
  approved: [],
  closed: [
    { id: "notion", brand: "notion", company: "Notion", status: "Clear", arr: "$216K", renews: "May 24", health: 81, owner: "Ava Morgan", role: "Strategic CSM", daysLeft: 24 },
    { id: "figma", brand: "figma", company: "Figma", status: "Clear", arr: "$189K", renews: "Jun 1", health: 78, owner: "Nora Singh", role: "Renewals Lead", daysLeft: 32 },
  ],
}

const STATUS = {
  Critical: { badge: "destructive-light", dot: "bg-destructive", bar: "bg-destructive" },
  Warning: { badge: "warning-light", dot: "bg-warning", bar: "bg-warning" },
  Clear: { badge: "success-light", dot: "bg-success", bar: "bg-success" },
} as const

const STATUSES: Status[] = ["Critical", "Warning", "Clear"]

const BRAND_LETTER: Partial<Record<Brand, { letter: string; tone: string }>> = {
  google: { letter: "G", tone: "bg-info/10 text-info-foreground" },
  nvidia: { letter: "N", tone: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  notion: { letter: "N", tone: "bg-foreground/10 text-foreground" },
  figma: { letter: "F", tone: "bg-destructive/10 text-destructive" },
}

const AVATAR_TONES = [
  "bg-info/15 text-info-foreground",
  "bg-success/15 text-success-foreground",
  "bg-warning/15 text-warning-foreground",
  "bg-destructive/15 text-destructive-foreground",
]

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("")
const toneFor = (name: string) => AVATAR_TONES[name.charCodeAt(0) % AVATAR_TONES.length]

const OPENAI_PATH = "M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.5-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07Zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5Zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.83 2.79a4.5 4.5 0 0 1-6.15-1.64ZM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97v5.68a.77.77 0 0 0 .39.67l5.81 3.36-2.02 1.17a.08.08 0 0 1-.07 0L3.99 14a4.5 4.5 0 0 1-1.65-6.1Zm16.6 3.85-5.84-3.39 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.67Zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06L14.27 3.9a4.5 4.5 0 0 1 6.68 4.83ZM8.3 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08L8.7 5.46a.79.79 0 0 0-.39.68Zm1.1-2.36 2.6-1.5 2.61 1.5v3l-2.6 1.5-2.6-1.5Z"

function BrandMark({ brand }: { brand: Brand }) {
  switch (brand) {
    case "slack":
      return <Slack className="size-5" />
    case "stripe":
      return <Stripe className="size-5 rounded" />
    case "zoom":
      return <Zoom className="size-5" />
    case "supabase":
      return <Supabase className="size-5" />
    case "dropbox":
      return <Dropbox className="size-5 rounded" />
    case "github":
      return (
        <>
          <GithubLight className="size-5 dark:hidden" />
          <GithubDark className="hidden size-5 dark:block" />
        </>
      )
    case "openai":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
          <path d={OPENAI_PATH} />
        </svg>
      )
    case "anthropic":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
          <path d="M13.79 3h2.84L23 21h-3.77l-1.34-4.5h-6.4L10.15 21H6.38L13.79 3Zm.2 5.75L11.8 13.4h4.38l-2.19-4.65ZM2 3h2.7l5.03 11.33-1.35 3.04L2 3Z" />
        </svg>
      )
    default: {
      const mark = BRAND_LETTER[brand]!
      return (
        <span className={cn("flex size-5 items-center justify-center rounded text-[11px] font-bold", mark.tone)}>
          {mark.letter}
        </span>
      )
    }
  }
}

function HealthBar({ value, tone }: { value: number; tone: string }) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
      <div className={cn("h-full rounded-full", tone)} style={{ width: `${value}%` }} />
    </div>
  )
}

function AccountCardBody({ account }: { account: Account }) {
  const meta = STATUS[account.status]
  return (
    <Card size="sm" className="gap-2.5 p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <BrandMark brand={account.brand} />
          <span className="truncate text-sm font-medium">{account.company}</span>
        </div>
        <Badge variant={meta.badge} size="sm" className="gap-1">
          <span className={cn("size-1.5 rounded-full", meta.dot)} />
          {account.status}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2 rounded-md border bg-muted/30 px-2 py-1.5">
          <CircleDollarSignIcon className="text-muted-foreground size-4 shrink-0" />
          <div className="flex min-w-0 flex-col">
            <span className="text-muted-foreground text-[10px]">ARR</span>
            <span className="truncate text-sm font-medium tabular-nums">{account.arr}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-md border bg-muted/30 px-2 py-1.5">
          <CalendarDaysIcon className="text-muted-foreground size-4 shrink-0" />
          <div className="flex min-w-0 flex-col">
            <span className="text-muted-foreground text-[10px]">Renews</span>
            <span className="truncate text-sm font-medium">{account.renews}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Health</span>
          <span className="font-medium tabular-nums">{account.health}%</span>
        </div>
        <HealthBar value={account.health} tone={meta.bar} />
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-1.5">
          <Avatar size="sm" className="size-6">
            <AvatarFallback className={cn("text-[10px] font-medium", toneFor(account.owner))}>{initials(account.owner)}</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-medium leading-tight">{account.owner}</span>
            <span className="text-muted-foreground truncate text-xs leading-tight">{account.role}</span>
          </div>
        </div>
        <span className="text-muted-foreground shrink-0 text-xs tabular-nums">{account.daysLeft}d left</span>
      </div>
    </Card>
  )
}

export function KanbanBoard7Block() {
  const [columns, setColumns] = useState<Record<string, Account[]>>(INITIAL)
  const [query, setQuery] = useState("")
  const [statuses, setStatuses] = useState<Status[]>([])
  const nextId = useRef(0)

  const q = query.trim().toLowerCase()
  const matches = (account: Account) =>
    (statuses.length === 0 || statuses.includes(account.status)) &&
    (!q || `${account.company} ${account.owner} ${account.role}`.toLowerCase().includes(q))

  const addAccount = (column: string) => {
    const id = `renewal-${nextId.current++}`
    setColumns((prev) => ({
      ...prev,
      [column]: [
        { id, brand: "figma", company: "New account", status: "Warning", arr: "$120K", renews: "Jun 30", health: 50, owner: "Ava Morgan", role: "Strategic CSM", daysLeft: 30 },
        ...prev[column],
      ],
    }))
  }

  const toggleStatus = (status: Status) =>
    setStatuses((prev) => (prev.includes(status) ? prev.filter((item) => item !== status) : [...prev, status]))

  return (
    <div className="flex min-h-svh flex-col gap-5 bg-background p-4 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold tracking-tight">Renewals Risk Board</h1>
            <span className="text-muted-foreground rounded-md border bg-muted/50 px-1.5 text-xs tabular-nums">{Object.values(columns).flat().length}</span>
          </div>
          <p className="text-muted-foreground text-sm">Review renewals by risk and close window.</p>
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
              <Input placeholder="Search accounts or owners" value={query} onChange={(event) => setQuery(event.target.value)} className="h-8" />
              <div className="flex flex-wrap gap-1.5">
                {STATUSES.map((status) => (
                  <Button key={status} size="xs" variant={statuses.includes(status) ? "secondary" : "outline"} onClick={() => toggleStatus(status)}>
                    {status}
                  </Button>
                ))}
              </div>
              {(query || statuses.length > 0) && (
                <Button variant="ghost" size="xs" className="justify-start text-muted-foreground" onClick={() => { setQuery(""); setStatuses([]) }}>
                  Clear filters
                </Button>
              )}
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="sm" onClick={() => addAccount("upcoming")}>
            <PlusIcon />
            New renewal
          </Button>
        </div>
      </div>

      <Kanban value={columns} onValueChange={setColumns} getItemValue={(account) => account.id}>
        <KanbanBoard className="flex items-start gap-4 overflow-x-auto pb-3">
          {COLUMNS.map((column) => {
            const visible = columns[column.id].filter(matches)
            return (
              <KanbanColumn key={column.id} value={column.id} className="w-[290px] shrink-0">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className={cn("size-2 rounded-full", column.dot)} />
                    <span className="text-sm font-semibold">{column.title}</span>
                    <span className="text-muted-foreground text-xs tabular-nums">{visible.length}</span>
                  </div>
                  <KanbanColumnContent value={column.id} className="gap-3">
                    {visible.map((account) => (
                      <KanbanItem key={account.id} value={account.id}>
                        <KanbanItemHandle className="block rounded-xl">
                          <AccountCardBody account={account} />
                        </KanbanItemHandle>
                      </KanbanItem>
                    ))}
                    {visible.length === 0 && (
                      <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed px-4 py-8 text-center">
                        <LayersIcon className="text-muted-foreground size-5" />
                        <div className="flex flex-col gap-0.5">
                          <p className="text-sm font-medium">Nothing in this stage</p>
                          <p className="text-muted-foreground text-xs">Accounts land here after approval.</p>
                        </div>
                      </div>
                    )}
                  </KanbanColumnContent>
                  <Button variant="ghost" size="sm" className="text-muted-foreground justify-start font-normal" onClick={() => addAccount(column.id)}>
                    <PlusIcon />
                    Add renewal
                  </Button>
                </div>
              </KanbanColumn>
            )
          })}
        </KanbanBoard>
        <KanbanOverlay>
          {({ value }) => {
            const account = Object.values(columns).flat().find((item) => item.id === value)
            return account ? <div className="w-[274px] rotate-2"><AccountCardBody account={account} /></div> : null
          }}
        </KanbanOverlay>
      </Kanban>
    </div>
  )
}

export default KanbanBoard7Block
