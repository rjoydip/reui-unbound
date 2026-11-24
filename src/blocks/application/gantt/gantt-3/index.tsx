"use client"

import { useState } from "react"
import { Badge } from "@/components/kit/badge"
import { Gantt, type GanttColumn } from "@/components/kit/gantt/gantt"
import {
  GanttNav,
  GanttNavNext,
  GanttNavPrev,
  GanttNavToday,
  GanttTitle,
  GanttToolbar,
} from "@/components/kit/gantt/~gantt-nav"
import type {
  GanttEvent,
  GanttResource,
} from "@/components/kit/gantt/~gantt-types"
import { GanttView } from "@/components/kit/gantt/~gantt-view"
import { addMinutes } from "date-fns"
import {
  BotIcon,
  CameraIcon,
  CircleDotIcon,
  FileTextIcon,
  FlagIcon,
  InboxIcon,
  ListChecksIcon,
  PlusIcon,
  Settings2Icon,
  ShieldCheckIcon,
  SparklesIcon,
  UserRoundIcon,
} from "lucide-react"

import { cn } from "cn"
import { Button } from "@/components/ui/button"
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
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"

const DAY = new Date(2026, 6, 22)
const at = (minutes: number) => addMinutes(DAY, minutes)

type StageStatus = "Succeeded" | "Running" | "Failed" | "Queued" | "Waiting"
const STATUS: Record<StageStatus, { dot: string; badge: "success-light" | "primary-light" | "destructive-light" | "secondary" | "warning-light" }> = {
  Succeeded: { dot: "bg-emerald-500", badge: "success-light" },
  Running: { dot: "bg-blue-500", badge: "primary-light" },
  Failed: { dot: "bg-rose-500", badge: "destructive-light" },
  Queued: { dot: "bg-muted-foreground/40", badge: "secondary" },
  Waiting: { dot: "bg-amber-500", badge: "warning-light" },
}
const COLOR: Record<StageStatus, string> = {
  Succeeded: "var(--color-emerald-500)",
  Running: "var(--color-blue-500)",
  Failed: "var(--color-rose-500)",
  Queued: "var(--color-slate-400)",
  Waiting: "var(--color-amber-500)",
}

type Stage = { id: string; title: string; status: StageStatus; slack: string; gate?: boolean }
type Workflow = { id: string; title: string; ref: string; progress: number | null; stages: Stage[] }

const WORKFLOWS: Workflow[] = [
  {
    id: "refund",
    title: "Refund Escalation",
    ref: "PB-31",
    progress: 60,
    stages: [
      { id: "intake", title: "Intake & Classify", status: "Succeeded", slack: "0m" },
      { id: "policy", title: "Policy Check", status: "Succeeded", slack: "0m" },
      { id: "finance", title: "Finance Approval", status: "Succeeded", slack: "0m", gate: true },
      { id: "capture", title: "Capture Refund", status: "Failed", slack: "0m" },
      { id: "notify", title: "Notify Customer", status: "Queued", slack: "Blocked" },
    ],
  },
  {
    id: "ingest",
    title: "Contract Ingest",
    ref: "PB-44",
    progress: 25,
    stages: [
      { id: "fetch", title: "Fetch Documents", status: "Succeeded", slack: "30m" },
      { id: "parse", title: "Parse Batch", status: "Running", slack: "30m" },
      { id: "summarize", title: "Summarize", status: "Queued", slack: "30m" },
      { id: "risk", title: "Risk Review", status: "Queued", slack: "30m", gate: true },
    ],
  },
  {
    id: "steward",
    title: "Data Steward Sweep",
    ref: "PB-19",
    progress: null,
    stages: [
      { id: "snapshot", title: "Snapshot", status: "Succeeded", slack: "6h" },
      { id: "dedupe", title: "Dedupe & Enrich", status: "Succeeded", slack: "6h" },
    ],
  },
]
const STAGES = WORKFLOWS.flatMap((workflow) => workflow.stages)

const ICONS: Record<string, typeof InboxIcon> = {
  intake: UserRoundIcon,
  policy: FlagIcon,
  finance: ShieldCheckIcon,
  capture: FlagIcon,
  notify: InboxIcon,
  fetch: FileTextIcon,
  parse: BotIcon,
  summarize: CircleDotIcon,
  risk: ShieldCheckIcon,
  snapshot: CameraIcon,
  dedupe: SparklesIcon,
}

const bar = (id: string, title: string, resourceId: string, start: number, minutes: number, status: StageStatus, extra?: Partial<GanttEvent>): GanttEvent => ({
  id,
  title,
  start: at(start),
  end: at(start + minutes),
  color: COLOR[status],
  resourceId,
  allDay: false,
  ...extra,
})

const BARS: GanttEvent[] = [
  bar("intake", "Intake & Classify", "intake", 475, 25, "Succeeded", { progress: 100 }),
  bar("policy", "Policy Check", "policy", 500, 25, "Succeeded", { progress: 100, dependencies: ["intake"] }),
  bar("finance-a", "Finance Approval", "finance", 525, 35, "Succeeded", { progress: 100, dependencies: ["policy"] }),
  bar("capture-a", "Capture Refund", "capture", 560, 28, "Failed", { dependencies: ["finance-a"] }),
  bar("capture-b", "Capture Refund", "capture", 580, 28, "Failed"),
  bar("capture-c", "Capture Refund", "capture", 612, 28, "Failed"),
  bar("notify", "Notify Customer", "notify", 630, 35, "Queued", { dependencies: ["capture-c"] }),
  bar("fetch", "Fetch Documents", "fetch", 480, 25, "Succeeded", { progress: 100 }),
  bar("parse-a", "Parse Batch", "parse", 505, 50, "Running", { progress: 55, dependencies: ["fetch"], data: { shard: 1 } }),
  bar("parse-b", "Parse Batch", "parse", 512, 50, "Running", { progress: 35, data: { shard: 2 } }),
  bar("parse-c", "Parse Batch", "parse", 555, 50, "Running", { progress: 15, data: { shard: 3 } }),
  bar("summarize", "Summarize", "summarize", 590, 40, "Queued", { dependencies: ["parse-c"] }),
  bar("risk", "Risk Review", "risk", 630, 40, "Queued", { dependencies: ["summarize"] }),
  bar("snapshot", "Snapshot", "snapshot", 450, 30, "Succeeded", { progress: 100 }),
  bar("dedupe", "Dedupe & Enrich", "dedupe", 480, 130, "Succeeded", { progress: 100, dependencies: ["snapshot"] }),
]

const INITIAL_RESOURCES: GanttResource[] = WORKFLOWS.map((workflow) => ({
  id: workflow.id,
  title: workflow.title,
  children: workflow.stages.map((stage) => ({ id: stage.id, title: stage.title })),
}))

type Draft = { title: string; workflow: string; status: StageStatus }
const EMPTY_DRAFT: Draft = { title: "", workflow: "refund", status: "Queued" }

export function Gantt3Block() {
  const [events, setEvents] = useState<GanttEvent[]>(BARS)
  const [stages, setStages] = useState<Stage[]>(STAGES)
  const [resources, setResources] = useState<GanttResource[]>(INITIAL_RESOURCES)
  const stageOf = (id: string) => stages.find((stage) => stage.id === id)
  const [settings, setSettings] = useState({
    board: false,
    criticalPath: true,
    placementHints: true,
    rowSeparators: true,
    rollups: true,
    treePanel: "full",
  })
  const [visibleStatuses, setVisibleStatuses] = useState<StageStatus[]>(["Succeeded", "Running", "Failed", "Queued", "Waiting"])
  const [selected, setSelected] = useState<string[]>([])
  const [draft, setDraft] = useState<Draft | null>(null)
  const [stage, setStage] = useState<Stage | null>(null)

  const toggle = (key: keyof typeof settings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))

  const filteredResources = (() => {
    const allowed = new Set(visibleStatuses)
    return resources.flatMap((workflow) => {
      const children = (workflow.children ?? []).filter((child) => {
        const meta = stageOf(child.id)
        return !meta || allowed.has(meta.status)
      })
      return children.length ? [{ ...workflow, children }] : []
    })
  })()

  const rerun = (stageId: string) => {
    const meta = stageOf(stageId)
    if (!meta) return
    const last = events.filter((event) => event.resourceId === stageId).at(-1)
    const start = last ? last.end : at(600)
    const startMin = start.getHours() * 60 + start.getMinutes()
    setEvents((prev) => [
      ...prev,
      bar(`retry-${stageId}-${prev.length}`, meta.title, stageId, startMin + 5, 25, "Queued", { progress: 10 }),
    ])
  }

  const clear = (stageId: string) =>
    setEvents((prev) => prev.filter((event) => event.resourceId !== stageId))

  const columns: GanttColumn[] = [
      {
        id: "status",
        title: "Status",
        width: 108,
        render: ({ resource, isGroup }) => {
          const meta = isGroup ? undefined : stageOf(resource.id)
          if (!meta) return null
          return (
            <span className="flex min-w-0 items-center gap-1.5">
              <span className={cn("size-2 shrink-0 rounded-full", STATUS[meta.status].dot)} />
              <span className="text-xs">{meta.status}</span>
            </span>
          )
        },
      },
      {
        id: "slack",
        title: "Slack",
        width: 115,
        render: ({ resource, isGroup }) => {
          const meta = isGroup ? undefined : stageOf(resource.id)
          if (!meta) return null
          const checked = selected.includes(resource.id)
          return (
            <span className="flex w-full items-center justify-between gap-2">
              <span className={cn("text-xs", meta.slack === "Blocked" && "text-destructive")}>{meta.slack}</span>
              <Checkbox
                checked={checked}
                onCheckedChange={() =>
                  setSelected((prev) => (checked ? prev.filter((id) => id !== resource.id) : [...prev, resource.id]))
                }
                aria-label={`Select ${resource.title}`}
                className="size-3.5"
              />
            </span>
          )
        },
      },
      {
        id: "actions",
        title: "",
        width: 32,
        render: ({ resource, isGroup }) => {
          const meta = isGroup ? undefined : stageOf(resource.id)
          if (!meta) return null
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-xs" aria-label={`Actions for ${resource.title}`}>
                  <span className="tracking-widest">⋮</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem onSelect={() => setStage(meta)}>
                  <CircleDotIcon /> Open Stage
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => rerun(meta.id)}>
                  <Settings2Icon /> Re-run Stage
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onSelect={() => clear(meta.id)}>
                  Clear Stage
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
    ]
  const saveStage = () => {
    if (!draft) return
    const id = `stage-${Date.now()}`
    const title = draft.title.trim() || "New stage"
    const meta: Stage = { id, title, status: draft.status, slack: "0m" }
    setStages((prev) => [...prev, meta])
    setResources((prev) =>
      prev.map((workflow) =>
        workflow.id === draft.workflow
          ? { ...workflow, children: [...(workflow.children ?? []), { id, title }] }
          : workflow
      )
    )
    setEvents((prev) => [...prev, bar(`bar-${id}`, title, id, 720, 30, draft.status)])
    setDraft(null)
  }

  return (
    <div className="bg-background min-h-svh p-4">
      <Card className="h-[calc(100svh-2rem)] overflow-hidden py-0">
        <CardContent className="h-full p-0">
          <Gantt
            events={events}
            onEventsChange={setEvents}
            resources={filteredResources}
            defaultScale="day"
            defaultDate={new Date(2026, 6, 22, 10, 30)}
            initialCenter={new Date(2026, 6, 22, 10, 30)}
            interval={60}
            snapDuration={15}
            rowCheckboxes={false}
            i18n={{ labels: { resources: "Stage" } }}
            columns={columns}
            treePanel={{
              width: settings.treePanel === "full" ? 505 : 360,
              nameColumnWidth: 230,
              minWidth: 300,
            }}
            columnsMenu={
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon-xs" aria-label="Choose columns">
                    <Settings2Icon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-48 p-1">
                  <p className="text-muted-foreground px-2 py-1.5 text-xs font-medium">Columns</p>
                  {["Status", "Waits For", "Slack", "Tokens"].map((label) => (
                    <label key={label} className="hover:bg-muted flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
                      <Checkbox defaultChecked={label === "Status" || label === "Slack"} />
                      {label}
                    </label>
                  ))}
                </PopoverContent>
              </Popover>
            }
            metrics={{ unitWidths: { day: 6.6 }, laneHeight: 1.2, laneGap: 0.15, rowPadding: 0.3, minRowHeight: 2.55 }}
            classNames={{ event: "px-1" }}
            dependencyLines={settings.criticalPath}
            displayScheduleHint={settings.placementHints}
            timelineLines={settings.rowSeparators ? "both" : "vertical"}
            summaryBars={settings.rollups}
            getSummaryProgress={({ resource }) =>
              WORKFLOWS.find((workflow) => workflow.id === resource.id)?.progress ?? null
            }
            renderResourceLabel={({ resource, isGroup }) => {
              if (isGroup) {
                const workflow = WORKFLOWS.find((item) => item.id === resource.id)
                return (
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span className="min-w-0 flex-1 truncate font-medium">{resource.title}</span>
                    <span className="text-muted-foreground shrink-0 text-xs whitespace-nowrap">{workflow?.ref}</span>
                  </span>
                )
              }
              const meta = stageOf(resource.id)
              const Icon = ICONS[resource.id] ?? ListChecksIcon
              return (
                <span className="flex min-w-0 items-center gap-1.5">
                  <Icon className="text-muted-foreground size-3.5 shrink-0" />
                  <span className="truncate">{resource.title}</span>
                  {meta?.gate && (
                    <Badge variant="secondary" size="sm">Gate</Badge>
                  )}
                </span>
              )
            }}
            renderEvent={({ occurrence }) => {
              const shard = (occurrence.event.data as { shard?: number } | undefined)?.shard
              return (
                <span className="flex w-full min-w-0 items-center justify-between gap-1">
                  <span className="truncate">{occurrence.event.title}</span>
                  {shard === 3 && <span className="shrink-0 text-[10px] opacity-80">Shard 3 of 3</span>}
                </span>
              )
            }}
            onEventClick={(occurrence) => {
              const meta = stageOf(occurrence.event.resourceId ?? "")
              if (meta) setStage(meta)
            }}
            className="h-full w-full"
          >
            <div className="flex items-center gap-2 border-b pe-3">
              <GanttNav className="min-w-0 flex-1 border-b-0">
                <TooltipProvider delayDuration={600}>
                  <GanttNavToday />
                  <div className="flex items-center">
                    <GanttNavPrev />
                    <GanttNavNext />
                  </div>
                  <GanttTitle />
                  <div className="grow" />
                </TooltipProvider>
              </GanttNav>
              <GanttToolbar>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Settings2Icon />
                      Settings
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-80">
                    <Tabs defaultValue="view">
                      <TabsList className="w-full">
                        <TabsTrigger value="view" className="flex-1">View</TabsTrigger>
                        <TabsTrigger value="filters" className="flex-1">Filters</TabsTrigger>
                      </TabsList>
                      <TabsContent value="view" className="mt-3 grid gap-3">
                        <p className="text-muted-foreground text-xs font-medium">Board</p>
                        {[
                          ["board", "Board"],
                          ["criticalPath", "Critical Path"],
                          ["placementHints", "Placement Hints"],
                          ["rowSeparators", "Row Separators"],
                          ["rollups", "Playbook Rollups"],
                        ].map(([key, label]) => (
                          <label key={key} className="flex items-center justify-between text-sm">
                            {label}
                            <Switch
                              checked={Boolean(settings[key as keyof typeof settings])}
                              onCheckedChange={() => toggle(key as keyof typeof settings)}
                            />
                          </label>
                        ))}
                        <div className="border-t pt-3">
                          <p className="text-muted-foreground mb-2 text-xs font-medium">Layout</p>
                          <div className="flex items-center justify-between text-sm">
                            Tree Panel
                            <Select
                              value={settings.treePanel}
                              onValueChange={(value) => setSettings((prev) => ({ ...prev, treePanel: value }))}
                            >
                              <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="full">Full</SelectItem>
                                <SelectItem value="compact">Compact</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="filters" className="mt-3 grid gap-2">
                        <p className="text-muted-foreground text-xs font-medium">Stage status</p>
                        {(Object.keys(STATUS) as StageStatus[]).map((status) => {
                          const checked = visibleStatuses.includes(status)
                          return (
                            <label key={status} className="flex items-center gap-2 text-sm">
                              <Checkbox
                                checked={checked}
                                onCheckedChange={() =>
                                  setVisibleStatuses((prev) => (checked ? prev.filter((item) => item !== status) : [...prev, status]))
                                }
                              />
                              <span className={cn("size-2 rounded-full", STATUS[status].dot)} />
                              {status}
                            </label>
                          )
                        })}
                      </TabsContent>
                    </Tabs>
                  </PopoverContent>
                </Popover>
                <Button onClick={() => setDraft(EMPTY_DRAFT)}>
                  <PlusIcon />
                  New Stage
                </Button>
              </GanttToolbar>
            </div>
            <GanttView />
          </Gantt>
        </CardContent>
      </Card>

      <Dialog open={!!draft} onOpenChange={(open) => !open && setDraft(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New stage</DialogTitle>
            <DialogDescription>Add a stage to a playbook run. It lands on the demo day.</DialogDescription>
          </DialogHeader>
          {draft && (
            <div className="grid gap-3">
              <label className="grid gap-1.5 text-sm">
                Stage name
                <Input value={draft.title} placeholder="e.g. Send summary" onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="grid gap-1.5 text-sm">
                  Workflow
                  <Select value={draft.workflow} onValueChange={(value) => setDraft({ ...draft, workflow: value })}>
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {WORKFLOWS.map((workflow) => (
                        <SelectItem key={workflow.id} value={workflow.id}>{workflow.ref}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
                <label className="grid gap-1.5 text-sm">
                  Status
                  <Select value={draft.status} onValueChange={(value) => setDraft({ ...draft, status: value as StageStatus })}>
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {(Object.keys(STATUS) as StageStatus[]).map((status) => (
                        <SelectItem key={status} value={status}>{status}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDraft(null)}>Cancel</Button>
            <Button onClick={saveStage}>Create stage</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!stage} onOpenChange={(open) => !open && setStage(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{stage?.title}</DialogTitle>
            <DialogDescription>
              {stage && `Status ${stage.status} · Slack ${stage.slack}`}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 text-sm">
            {["Input validated", "Agent run started", "Waiting on downstream stage"].map((line, index) => (
              <div key={line} className="flex items-center justify-between border-b pb-2 last:border-b-0">
                <span>{line}</span>
                <span className="text-muted-foreground text-xs">
                  {stage ? `10:${String(12 + index * 7).padStart(2, "0")} AM` : ""}
                </span>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setStage(null)}>Close</Button>
            <Button
              onClick={() => {
                if (stage) rerun(stage.id)
                setStage(null)
              }}
            >
              Re-run stage
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Gantt3Block
