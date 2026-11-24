import { useState } from "react"
import {
  ActivityIcon,
  CircleHelpIcon,
  HandIcon,
  LayoutGridIcon,
  ListChecksIcon,
  LocateFixedIcon,
  MinusIcon,
  MoreHorizontalIcon,
  MousePointer2Icon,
  PieChartIcon,
  PlusIcon,
  RepeatIcon,
  TargetIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { IconTile } from "@/components/kit/icon-tile"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

type Period = "7 days" | "6 weeks" | "12 months"
type Metric = {
  id: string
  name: string
  role: "Input" | "North Star" | "KPI"
  icon: LucideIcon
  values: Record<Period, string>
  changes: Record<Period, string>
  x: number
  y: number
}

const PERIODS: Period[] = ["7 days", "6 weeks", "12 months"]

const METRICS: Metric[] = [
  { id: "checkout", name: "Checkout completion", role: "Input", icon: ActivityIcon, values: { "7 days": "68.4%", "6 weeks": "71.2%", "12 months": "74.8%" }, changes: { "7 days": "+1.2%", "6 weeks": "+2.4%", "12 months": "+5.1%" }, x: 305, y: 75 },
  { id: "optins", name: "Restock alert opt-ins", role: "Input", icon: ActivityIcon, values: { "7 days": "1,240", "6 weeks": "6,980", "12 months": "31,420" }, changes: { "7 days": "+3.1%", "6 weeks": "+8.4%", "12 months": "+18.6%" }, x: 305, y: 235 },
  { id: "discount", name: "Average discount depth", role: "Input", icon: ActivityIcon, values: { "7 days": "14.2%", "6 weeks": "13.6%", "12 months": "12.9%" }, changes: { "7 days": "-0.8%", "6 weeks": "-1.2%", "12 months": "-2.4%" }, x: 305, y: 395 },
  { id: "north-star", name: "Weekly repeat orders", role: "North Star", icon: TargetIcon, values: { "7 days": "3,912", "6 weeks": "22,408", "12 months": "168,730" }, changes: { "7 days": "+0.9%", "6 weeks": "+2.6%", "12 months": "+31.8%" }, x: 585, y: 235 },
  { id: "repeat-rate", name: "Repeat purchase rate", role: "KPI", icon: RepeatIcon, values: { "7 days": "28.4%", "6 weeks": "30.1%", "12 months": "34.6%" }, changes: { "7 days": "+2.1%", "6 weeks": "+2.8%", "12 months": "+6.2%" }, x: 1030, y: 160 },
  { id: "margin", name: "Contribution margin", role: "KPI", icon: PieChartIcon, values: { "7 days": "41.2%", "6 weeks": "40.8%", "12 months": "39.4%" }, changes: { "7 days": "+0.6%", "6 weeks": "+0.2%", "12 months": "-1.1%" }, x: 1030, y: 350 },
]

const INITIATIVES = [
  { id: "returns", name: "Free first returns", progress: 62, stat: "62%", status: "In Progress", meta: "GitHub Project • 3 open", y: 75 },
  { id: "sms", name: "SMS restock alerts", progress: 40, stat: "40%", status: "To Do", meta: "Growth Team • 5 open", y: 235 },
  { id: "loyalty", name: "Loyalty upgrade email", progress: 0, stat: "0%", status: "Blocked", meta: "Lifecycle Team • 4 open", y: 395 },
]

const LINKS = {
  drivenBy: [
    { correlation: "0.91", name: "Checkout completion", tone: "outline" },
    { correlation: "0.88", name: "Restock alert opt-ins", tone: "outline" },
    { correlation: "-0.58", name: "Average discount depth", tone: "destructive-light" },
  ],
  moves: [
    { correlation: "0.97", name: "Repeat purchase rate", tone: "outline" },
    { correlation: "0.84", name: "Contribution margin", tone: "outline" },
  ],
}

const STATUS_STYLE: Record<string, string> = {
  "In Progress": "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400",
  "To Do": "border-border bg-transparent text-muted-foreground",
  Blocked: "border-destructive/20 bg-destructive/10 text-destructive",
}

function Change({ value }: { value: string }) {
  const positive = !value.startsWith("-")
  return <span className={cn("text-xs font-medium tabular-nums", positive ? "text-success" : "text-destructive")}>{value}</span>
}

function InitiativeCard({ item, selected, onSelect }: { item: (typeof INITIATIVES)[number]; selected: boolean; onSelect: () => void }) {
  return (
    <button type="button" onClick={onSelect} style={{ left: 40, top: item.y }} className={cn("absolute w-[220px] overflow-hidden rounded-xl border bg-card text-left shadow-xs outline-none transition-shadow hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring", selected && "ring-2 ring-foreground/20")}>
      <div className="flex items-center gap-2 border-b bg-muted/40 px-2.5 py-2">
        <IconTile variant="outline" size="xs"><ListChecksIcon /></IconTile>
        <div className="min-w-0">
          <div className="truncate text-xs font-medium">{item.name}</div>
          <div className="text-[10px] text-muted-foreground">Initiative</div>
        </div>
      </div>
      <div className="space-y-1.5 px-2.5 py-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-lg font-semibold tracking-tight">{item.stat}</span>
          <Badge variant="outline" size="sm" radius="full" className={STATUS_STYLE[item.status]}>{item.status}</Badge>
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-foreground/70" style={{ width: `${item.progress}%` }} />
        </div>
        <div className="text-[10px] text-muted-foreground">{item.meta}</div>
      </div>
    </button>
  )
}

function MetricCard({ metric, period, selected, onSelect }: { metric: Metric; period: Period; selected: boolean; onSelect: () => void }) {
  const wide = metric.role === "North Star"
  return (
    <button type="button" onClick={onSelect} style={{ left: metric.x, top: metric.y }} className={cn("absolute overflow-hidden rounded-xl border bg-card text-left shadow-xs outline-none transition-shadow hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring", wide ? "w-[225px]" : metric.role === "KPI" ? "w-[190px]" : "w-[230px]", selected && "ring-2 ring-foreground/20")}>
      <div className="flex items-center gap-2 border-b bg-muted/40 px-2.5 py-2">
        <IconTile variant="outline" size="xs"><metric.icon /></IconTile>
        <div className="min-w-0 flex-1">
          <div className="truncate text-xs font-medium">{metric.name}</div>
          <div className="text-[10px] text-muted-foreground">{metric.role}</div>
        </div>
      </div>
      <div className="space-y-1 px-2.5 py-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-lg font-semibold tracking-tight tabular-nums">{metric.values[period]}</span>
          <Change value={metric.changes[period]} />
        </div>
        <div className="text-[10px] text-muted-foreground">Past {period} • {metric.id === "optins" ? "Sum" : metric.id === "north-star" ? "Sum" : "Average"}</div>
        {metric.id === "discount" && (
          <div className="flex items-center gap-1.5 pt-0.5 text-[10px] text-muted-foreground">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted"><div className="h-full w-[58%] rounded-full bg-foreground/70" /></div>58%
          </div>
        )}
      </div>
    </button>
  )
}

export function Flow4Block() {
  const [period, setPeriod] = useState<Period>("7 days")
  const [selectedId, setSelectedId] = useState("north-star")
  const [panelOpen, setPanelOpen] = useState(true)
  const [tab, setTab] = useState("settings")
  const [zoom, setZoom] = useState(100)
  const selected = METRICS.find((metric) => metric.id === selectedId)
  const selectedName = selected?.name ?? INITIATIVES.find((item) => item.id === selectedId)?.name ?? "Weekly repeat orders"
  const openNode = (id: string) => { setSelectedId(id); setPanelOpen(true) }

  return (
    <div className="flex h-svh min-h-[560px] flex-col bg-background text-foreground">
      <header className="flex h-13 shrink-0 items-center gap-2 border-b px-4">
        <nav className="flex items-center gap-1.5 text-sm">
          <span className="text-muted-foreground">Map</span>
          <span className="text-muted-foreground/60">/</span>
          <span className="font-medium">Repeat Order Growth</span>
        </nav>
        <span className="hidden items-center gap-1.5 text-xs text-muted-foreground md:flex">
          3 initiatives, 6 metrics
          <span className="text-muted-foreground/50">•</span>
          5 correlations
          <span className="text-muted-foreground/50">•</span>
          <Avatar className="size-5"><AvatarFallback className="bg-primary/15 text-[9px] text-primary">IM</AvatarFallback></Avatar>
          Ines Marchetti
        </span>
        <div className="mx-auto flex items-center rounded-lg border bg-muted/40 p-0.5">
          {PERIODS.map((option) => (
            <button key={option} type="button" onClick={() => setPeriod(option)} className={cn("rounded-md px-2.5 py-1 text-xs transition-colors", period === option ? "bg-card font-medium shadow-xs" : "text-muted-foreground hover:text-foreground")}>{option}</button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon-sm" aria-label="Help"><CircleHelpIcon /></Button>
          <Button variant="outline" size="sm"><PlusIcon data-icon="inline-start" /> Add metric</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon-sm" aria-label="Map actions"><MoreHorizontalIcon /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem><PlusIcon /> Add KPI</DropdownMenuItem>
              <DropdownMenuItem><ListChecksIcon /> Add initiative</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="font-mono text-[11px] font-normal">grw_7c2e91</DropdownMenuLabel>
              <DropdownMenuItem><RepeatIcon /> Reset map</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="relative flex-1 overflow-hidden bg-muted/20">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className={cn("absolute inset-y-0 left-0 transition-[right] duration-200", panelOpen ? "right-0 lg:right-[368px]" : "right-0")}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative shrink-0" style={{ width: 920, height: 620, transform: `scale(${zoom / 100})` }}>
              <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 920 620" fill="none" aria-hidden>
                <g stroke="var(--color-border)" strokeWidth="1.5">
                  <path d="M260 125 H305" /><path d="M260 285 H305" /><path d="M260 445 H305" />
                  <path d="M535 125 H565 V291 H585" /><path d="M535 285 H585" /><path d="M535 445 H565 V291 H585" />
                  <path d="M810 291 H960 V203 H1030" /><path d="M810 291 H960 V393 H1030" />
                </g>
                {[[262, 125], [262, 285], [262, 445], [537, 125], [537, 285], [537, 445], [812, 291]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="var(--color-muted-foreground)" />)}
              </svg>
              {[{ label: "0.91", x: 565, y: 196 }, { label: "0.88", x: 558, y: 278 }, { label: "-0.58", x: 565, y: 362 }, { label: "0.97", x: 960, y: 250 }, { label: "0.84", x: 960, y: 355 }].map((pill) => (
                <Badge key={`${pill.label}-${pill.y}`} variant={pill.label.startsWith("-") ? "destructive-light" : "outline"} size="sm" style={{ left: pill.x, top: pill.y }} className="absolute -translate-x-1/2 bg-card tabular-nums shadow-xs">{pill.label}</Badge>
              ))}
              {INITIATIVES.map((item) => <InitiativeCard key={item.id} item={item} selected={selectedId === item.id} onSelect={() => openNode(item.id)} />)}
              {METRICS.map((metric) => <MetricCard key={metric.id} metric={metric} period={period} selected={selectedId === metric.id} onSelect={() => openNode(metric.id)} />)}
            </div>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-0.5 rounded-lg border bg-card/90 p-0.5 shadow-xs backdrop-blur">
            <Button variant="ghost" size="icon-sm" aria-label="Select" className="bg-muted"><MousePointer2Icon /></Button>
            <Button variant="ghost" size="icon-sm" aria-label="Pan"><HandIcon /></Button>
            <Separator orientation="vertical" className="mx-0.5 h-4" />
            <Button variant="ghost" size="icon-sm" aria-label="Zoom out" onClick={() => setZoom((value) => Math.max(50, value - 10))}><MinusIcon /></Button>
            <Button variant="ghost" size="sm" className="w-14 font-normal tabular-nums" onClick={() => setZoom(100)}>{zoom}%</Button>
            <Button variant="ghost" size="icon-sm" aria-label="Zoom in" onClick={() => setZoom((value) => Math.min(200, value + 10))}><PlusIcon /></Button>
            <Separator orientation="vertical" className="mx-0.5 h-4" />
            <Button variant="ghost" size="icon-sm" aria-label="Zoom to fit" onClick={() => setZoom(75)}><LocateFixedIcon /></Button>
            <Button variant="ghost" size="icon-sm" aria-label="Toggle grid"><LayoutGridIcon /></Button>
          </div>
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60">React Flow</span>
        </div>

        {panelOpen && (
          <aside className="absolute inset-y-3 right-3 hidden w-[350px] flex-col overflow-hidden rounded-xl border bg-card shadow-lg lg:flex">
            <div className="flex items-center gap-2 border-b px-3 py-2.5">
              <IconTile variant="outline" size="xs"><TargetIcon /></IconTile>
              <span className="truncate text-sm font-medium">{selectedName}</span>
              <Badge variant="warning-light" size="sm" radius="full">{selectedId === "north-star" ? "North Star" : selected?.role ?? "Initiative"}</Badge>
              <Button variant="ghost" size="icon-xs" className="ml-auto" onClick={() => setPanelOpen(false)} aria-label="Close inspector"><XIcon /></Button>
            </div>
            <Tabs value={tab} onValueChange={setTab} className="flex min-h-0 flex-1 flex-col gap-0">
              <TabsList variant="line" className="mx-3 mt-2.5 w-fit gap-4">
                <TabsTrigger value="settings" className="px-0 pb-2">Settings</TabsTrigger>
                <TabsTrigger value="links" className="px-0 pb-2">Links</TabsTrigger>
              </TabsList>
              <TabsContent value="settings" className="min-h-0 flex-1 overflow-y-auto p-3.5">
                <div className="space-y-3">
                  <label className="block space-y-1 text-xs text-muted-foreground">Title<Input className="mt-1 h-8 text-sm text-foreground" defaultValue={selectedName} /></label>
                  <div className="space-y-1 text-xs text-muted-foreground">Role
                    <Select defaultValue={selectedId === "north-star" ? "north-star" : selected?.role.toLowerCase() ?? "initiative"}>
                      <SelectTrigger className="mt-1 h-8 w-full text-sm text-foreground"><TargetIcon className="text-muted-foreground" /><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="north-star">North Star</SelectItem>
                        <SelectItem value="input">Input</SelectItem>
                        <SelectItem value="kpi">KPI</SelectItem>
                        <SelectItem value="initiative">Initiative</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="mt-1 text-[10px] text-muted-foreground">Promote another metric to hand this role on.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1 text-xs text-muted-foreground">Aggregation
                      <Select defaultValue="sum"><SelectTrigger className="mt-1 h-8 w-full text-sm text-foreground"><SelectValue /></SelectTrigger>
                        <SelectContent>{["Sum", "Average", "Median", "Latest"].map((option) => <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">Unit
                      <Select defaultValue="count"><SelectTrigger className="mt-1 h-8 w-full text-sm text-foreground"><SelectValue /></SelectTrigger>
                        <SelectContent>{["Count", "Currency", "Percent", "Ratio"].map((option) => <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-muted-foreground">Better when
                    <Select defaultValue="higher"><SelectTrigger className="mt-1 h-8 w-full text-sm text-foreground"><SelectValue /></SelectTrigger>
                      <SelectContent><SelectItem value="higher">Higher is better</SelectItem><SelectItem value="lower">Lower is better</SelectItem></SelectContent>
                    </Select>
                  </div>
                  <div className="overflow-hidden rounded-lg border">
                    <div className="grid grid-cols-[1fr_92px_68px] gap-2 border-b bg-muted/40 px-2 py-1.5 text-[10px] font-medium tracking-wide text-muted-foreground uppercase"><span>Period</span><span>Value</span><span>Change %</span></div>
                    {[{ label: "Past 7 days", value: "3912", change: "0.9" }, { label: "Past 6 weeks", value: "22408", change: "2.6" }, { label: "Past 12 months", value: "168730", change: "31.8" }].map((row) => (
                      <div key={row.label} className="grid grid-cols-[1fr_92px_68px] items-center gap-2 px-2 py-1 text-[11px]">
                        <span className="text-muted-foreground">{row.label}</span>
                        <Input className="h-7 px-1.5 text-[11px] tabular-nums" defaultValue={row.value} />
                        <Input className="h-7 px-1.5 text-[11px] tabular-nums" defaultValue={row.change} />
                      </div>
                    ))}
                  </div>
                  <label className="block space-y-1 text-xs text-muted-foreground">Goal<Input className="mt-1 h-8 text-sm" placeholder="Leave empty for no goal" /></label>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">Owner <span className="flex items-center gap-1.5 text-foreground"><Avatar className="size-4"><AvatarFallback className="text-[8px]">IM</AvatarFallback></Avatar>Ines Marchetti</span></div>
                </div>
              </TabsContent>
              <TabsContent value="links" className="min-h-0 flex-1 overflow-y-auto p-3.5">
                <div className="space-y-4">
                  {[{ title: "Driven by", rows: LINKS.drivenBy }, { title: "Moves", rows: LINKS.moves }].map((group) => (
                    <div key={group.title}>
                      <div className="mb-2 flex items-center justify-between text-[11px] tracking-wide text-muted-foreground uppercase">{group.title} <CircleHelpIcon className="size-3" /></div>
                      <div className="ml-1 space-y-1.5 border-l pl-3">
                        {group.rows.map((link) => (
                          <div key={link.name} className="flex items-center gap-2">
                            <Badge variant={link.tone as "outline"} size="sm" radius="full" className="tabular-nums">{link.correlation}</Badge>
                            <Select defaultValue={link.name}>
                              <SelectTrigger className="h-8 flex-1 text-xs"><SelectValue /></SelectTrigger>
                              <SelectContent>{METRICS.map((metric) => <SelectItem key={metric.id} value={metric.name}>{metric.name}</SelectItem>)}</SelectContent>
                            </Select>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <p className="text-[10px] leading-relaxed text-muted-foreground">Correlation is typed in per link. Changes to a metric do not recalculate the score.</p>
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex gap-2 border-t p-3">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => setPanelOpen(false)}>Cancel</Button>
              <Button size="sm" className="flex-1 bg-foreground text-background hover:bg-foreground/90" onClick={() => setPanelOpen(false)}>Save metric</Button>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}

export default Flow4Block
