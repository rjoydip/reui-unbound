"use client"
import { useState } from "react"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  PlusIcon,
  SearchIcon,
  FilterIcon,
} from "lucide-react"
import { cn } from "cn"
import { Frame, FramePanel } from "@/components/kit/frame"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/kit/kanban"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
interface Feature {
  id: string
  title: string
  tag: string
  description: string
  metric: string
  metricNote: string
  stage: string
  percent: number
  votes: number
  trend: "up" | "down"
  trendValue: number
}
interface ColumnMeta {
  id: string
  label: string
  description: string
  dot: string
  bar: string
}
const COLUMN_LIST: ColumnMeta[] = [
  { id: "triage", label: "Triage", description: "New customer signals", dot: "bg-muted-foreground", bar: "bg-zinc-400 dark:bg-zinc-500" },
  { id: "planned", label: "Planned", description: "Queued for scope", dot: "bg-blue-500", bar: "bg-blue-500" },
  { id: "shaping", label: "Shaping", description: "Solution design", dot: "bg-cyan-500", bar: "bg-cyan-500" },
  { id: "building", label: "Building", description: "Actively in progress", dot: "bg-amber-500", bar: "bg-amber-500" },
  { id: "shipped", label: "Shipped", description: "Live for customers", dot: "bg-emerald-500", bar: "bg-emerald-500" },
  { id: "archived", label: "Archived", description: "Parked for later", dot: "bg-zinc-400", bar: "bg-zinc-400" },
]
const COLUMNS = Object.fromEntries(COLUMN_LIST.map((column) => [column.id, column]))
const TAG_TONES: Record<string, string> = {
  Intake: "border-border bg-muted/60 text-foreground",
  Workflow: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  Signals: "border-border bg-muted/60 text-foreground",
  Search: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  Platform: "border-border bg-muted/60 text-foreground",
  Reports: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  Billing: "border-border bg-muted/60 text-foreground",
  Lifecycle: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  Teams: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  API: "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300",
  Design: "border-border bg-muted/60 text-foreground",
}
const INITIAL: Record<string, Feature[]> = {
  triage: [
    { id: "f1", title: "Smart intake routing", tag: "Intake", description: "Classify incoming requests by segment, account value, and urgency.", metric: "23 accounts", metricNote: "Needs signal", stage: "Scoring", percent: 20, votes: 83, trend: "up", trendValue: 14 },
    { id: "f2", title: "Slack request capture", tag: "Workflow", description: "Turn product feedback threads into deduplicated roadmap signals.", metric: "18 teams", metricNote: "Q3 review", stage: "Reviewing", percent: 24, votes: 67, trend: "up", trendValue: 10 },
    { id: "f3", title: "Customer signal clustering", tag: "Signals", description: "Group related feedback by account segment and recent revenue motion.", metric: "12 accounts", metricNote: "Signal review", stage: "Clustering", percent: 18, votes: 52, trend: "up", trendValue: 7 },
  ],
  planned: [
    { id: "f4", title: "AI account search", tag: "Search", description: "Permission-aware search across tickets, call notes, and docs.", metric: "$72k pipeline", metricNote: "Q3 pilot", stage: "Discovery", percent: 30, votes: 142, trend: "up", trendValue: 18 },
    { id: "f5", title: "Outbound webhooks", tag: "Platform", description: "Reliable event delivery for billing, seats, and lifecycle changes.", metric: "14 accounts", metricNote: "Q3 scope", stage: "Pending scope", percent: 28, votes: 98, trend: "down", trendValue: 6 },
  ],
  shaping: [
    { id: "f6", title: "Custom report builder", tag: "Reports", description: "Saved metrics, scoped filters, and reusable executive views.", metric: "$81k ARR", metricNote: "Design review", stage: "Prototype", percent: 34, votes: 156, trend: "up", trendValue: 21 },
    { id: "f7", title: "Entitlement rules", tag: "Billing", description: "Plan-aware capability gates with account overrides and audit notes.", metric: "$63k ARR", metricNote: "Tech plan", stage: "Spec", percent: 38, votes: 132, trend: "down", trendValue: 3 },
    { id: "f8", title: "Renewal timeline view", tag: "Lifecycle", description: "Unify renewal notes, owner changes, and risk events in one history.", metric: "$49k ARR", metricNote: "Design review", stage: "Wireframe", percent: 36, votes: 118, trend: "up", trendValue: 12 },
  ],
  building: [
    { id: "f9", title: "Co-edit workspace", tag: "Teams", description: "Shared editing with presence, conflict recovery, and audit history.", metric: "$118k ARR", metricNote: "May beta", stage: "Dependency", percent: 42, votes: 234, trend: "up", trendValue: 24 },
    { id: "f10", title: "API v2 migration", tag: "API", description: "Typed REST contract, migration helpers, and staged partner rollout.", metric: "$54k ARR", metricNote: "Partner beta", stage: "At risk", percent: 36, votes: 176, trend: "down", trendValue: 11 },
  ],
  shipped: [
    { id: "f11", title: "Bulk approval rules", tag: "Workflow", description: "Approve, reassign, and route requests in a single action.", metric: "$38k ARR", metricNote: "Live", stage: "GA", percent: 100, votes: 201, trend: "up", trendValue: 4 },
    { id: "f12", title: "Audit log export", tag: "Platform", description: "Scheduled CSV and API exports for compliance reviews.", metric: "$29k ARR", metricNote: "GA", stage: "Live", percent: 100, votes: 164, trend: "up", trendValue: 2 },
  ],
  archived: [
    { id: "f13", title: "Legacy board layout", tag: "Design", description: "Deprecated column layout kept for a small set of workspaces.", metric: "6 accounts", metricNote: "Sunset", stage: "Archived", percent: 100, votes: 44, trend: "down", trendValue: 1 },
  ],
}
function FeatureCardInner({
  feature,
  bar,
  overlay,
}: {
  feature: Feature
  bar: string
  overlay?: boolean
}) {
  return (
    <FramePanel
      className={cn(
        "flex flex-col gap-2 bg-card p-3 shadow-xs",
        overlay && "shadow-lg"
      )}
    >
      <div className="flex min-w-0 items-start gap-2">
        <span className="text-[13px] leading-snug font-medium">{feature.title}</span>
        <span
          className={cn(
            "ml-auto shrink-0 rounded-md border px-1.5 py-0.5 text-[10px] font-medium",
            TAG_TONES[feature.tag] ?? TAG_TONES.Intake
          )}
        >
          {feature.tag}
        </span>
      </div>
      <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">{feature.description}</p>
      <div className="flex min-w-0 items-center gap-1.5 text-xs">
        <span className="font-semibold">{feature.metric}</span>
        <span className="text-muted-foreground/60">·</span>
        <span className="text-muted-foreground truncate">{feature.metricNote}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div className={cn("h-full rounded-full", bar)} style={{ width: `${feature.percent}%` }} />
      </div>
      <div className="flex items-center justify-between gap-2 text-[11px]">
        <span className="text-muted-foreground truncate">
          {feature.stage} <span className="opacity-60">·</span> {feature.percent}%
        </span>
        <span className="flex shrink-0 items-center gap-1.5">
          <span className="font-medium tabular-nums">{feature.votes} votes</span>
          <span
            className={cn(
              "flex items-center gap-0.5 font-medium tabular-nums",
              feature.trend === "up" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
            )}
          >
            {feature.trend === "up" ? <ArrowUpIcon className="size-3" /> : <ArrowDownIcon className="size-3" />}
            {feature.trendValue}
          </span>
        </span>
      </div>
    </FramePanel>
  )
}
export function KanbanBoard4Block() {
  const [columns, setColumns] = useState<Record<string, Feature[]>>(INITIAL)
  const [query, setQuery] = useState("")
  const [draft, setDraft] = useState("")
  const [open, setOpen] = useState(false)
  const matches = (feature: Feature) =>
    query.trim() === "" ||
    `${feature.title} ${feature.tag} ${feature.description}`.toLowerCase().includes(query.toLowerCase())
  const addFeature = () => {
    const title = draft.trim()
    if (!title) return
    const id = `f${Object.values(columns).flat().length + 20}`
    setColumns({
      ...columns,
      triage: [
        {
          id,
          title,
          tag: "Intake",
          description: "New request captured from the customer feedback queue.",
          metric: "0 accounts",
          metricNote: "Needs signal",
          stage: "Scoring",
          percent: 5,
          votes: 1,
          trend: "up",
          trendValue: 1,
        },
        ...columns.triage,
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
            <h1 className="text-xl font-semibold tracking-tight">Feature Roadmap</h1>
            <p className="text-muted-foreground mt-0.5 text-sm">Demand, impact, delivery.</p>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <FilterIcon />
                  Filters
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-64 space-y-2">
                <div className="relative">
                  <SearchIcon className="text-muted-foreground pointer-events-none absolute top-2.5 left-2 size-3.5" />
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search features"
                    className="h-8 pl-7 text-xs"
                  />
                </div>
                <p className="text-muted-foreground text-[11px]">
                  Matching cards stay in place across every stage.
                </p>
              </PopoverContent>
            </Popover>
            <Button size="sm" onClick={() => setOpen(true)}>
              <PlusIcon />
              New feature
            </Button>
          </div>
        </header>
        <div className="-mx-1 overflow-x-auto pb-4">
          <Kanban
            value={columns}
            onValueChange={setColumns}
            getItemValue={(feature) => feature.id}
            className="w-max min-w-full px-1"
          >
            <KanbanBoard className="flex w-max items-start gap-4 sm:grid-cols-none">
              {COLUMN_LIST.map((column) => {
                const meta = COLUMNS[column.id]
                const items = columns[column.id].filter(matches)
                return (
                  <KanbanColumn key={column.id} value={column.id} className="w-[290px] shrink-0">
                    <Frame spacing="sm" className="gap-2 bg-muted/40">
                      <div className="px-1 pt-1 pb-1.5">
                        <div className="flex items-center gap-2">
                          <span className={cn("size-2 rounded-full", meta.dot)} />
                          <span className="text-sm font-semibold">{meta.label}</span>
                          <span className="text-muted-foreground text-xs tabular-nums">
                            {items.length}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-0.5 text-xs">{meta.description}</p>
                      </div>
                      <KanbanColumnContent value={column.id} className="gap-2">
                        {items.map((feature) => (
                          <KanbanItem key={feature.id} value={feature.id}>
                            <KanbanItemHandle>
                              <div className="[&_[data-slot=frame-panel]]:transition-colors [&_[data-slot=frame-panel]]:hover:border-border/80">
                                <FeatureCardInner feature={feature} bar={meta.bar} />
                              </div>
                            </KanbanItemHandle>
                          </KanbanItem>
                        ))}
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                )
              })}
            </KanbanBoard>
            <KanbanOverlay>
              {({ value }) => {
                const feature = Object.values(columns).flat().find((item) => item.id === String(value))
                const owner = COLUMN_LIST.find((column) =>
                  columns[column.id].some((item) => item.id === String(value))
                )
                return feature ? (
                  <Frame spacing="sm" className="w-[290px] rotate-1 gap-2 bg-muted/40 shadow-lg">
                    <FeatureCardInner feature={feature} bar={owner?.bar ?? COLUMNS.triage.bar} overlay />
                  </Frame>
                ) : null
              }}
            </KanbanOverlay>
          </Kanban>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>New feature</DialogTitle>
          </DialogHeader>
          <Input
            autoFocus
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Feature title"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={addFeature} disabled={draft.trim() === ""}>
              Create feature
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default KanbanBoard4Block