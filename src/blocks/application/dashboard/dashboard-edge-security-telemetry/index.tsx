"use client"

import { useState } from "react"
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  CalendarIcon,
  Download,
  Radio,
  ShieldAlert,
  Waypoints,
} from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
} from "recharts"
import { Badge } from "@/components/kit/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type Range = { label: string; days: number }

const RANGE_PRESETS: Range[] = [
  { label: "Today", days: 1 },
  { label: "Yesterday", days: 1 },
  { label: "Last 7 days", days: 7 },
  { label: "Last 30 days", days: 30 },
  { label: "Month to date", days: 10 },
  { label: "Last month", days: 31 },
  { label: "Year to date", days: 160 },
  { label: "Last year", days: 365 },
]

const METRICS = [
  { title: "Signal Risk", sub: "Threat Index", value: "Elevated", delta: "+12.5%", note: "5 cases", tone: "destructive" as const, icon: ShieldAlert, points: [6, 10, 7, 14, 12, 18, 16, 22, 19, 24] },
  { title: "Mesh Uptime", sub: "Service Health", value: "99.98%", delta: "+0.2%", note: "58 zones", tone: "success" as const, icon: Activity, points: [14, 12, 16, 15, 20, 18, 26, 24, 30, 32] },
  { title: "Edge Traffic", sub: "Scrubbed Load", value: "4.8 GB/s", delta: "-3.1%", note: "clean flow", tone: "warning" as const, icon: Waypoints, points: [16, 20, 18, 24, 22, 26, 23, 28, 26, 30] },
  { title: "Sensor Reach", sub: "Global Nodes", value: "18,420", delta: "+6.8%", note: "93 regions", tone: "success" as const, icon: Radio, points: [18, 15, 22, 19, 24, 20, 27, 23, 29, 26] },
]

const THREAT_VECTORS = [
  { vector: "Bot", blocked: 30, watched: 62 },
  { vector: "Phish", blocked: 20, watched: 82 },
  { vector: "DDoS", blocked: 55, watched: 58 },
  { vector: "Inject", blocked: 22, watched: 38 },
  { vector: "Auth", blocked: 38, watched: 45 },
  { vector: "Probe", blocked: 18, watched: 58 },
  { vector: "Exfil", blocked: 48, watched: 30 },
  { vector: "Beacon", blocked: 32, watched: 60 },
  { vector: "Day0", blocked: 14, watched: 36 },
]

const FLOW_LABELS = [
  "May 13", "May 14", "May 15", "May 16", "May 17", "May 18", "May 19",
  "May 20", "May 21", "May 22", "May 23", "May 24", "May 25", "May 26",
  "May 27", "May 28", "May 29", "May 30", "May 31", "Jun 1", "Jun 2",
  "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10",
]
const FLOW_VALUES = [
  72, 74, 70, 62, 66, 70, 71, 68, 72, 73, 70, 62, 68, 70, 71, 66, 70, 72,
  68, 62, 66, 70, 72, 68, 60, 66, 71, 69, 66,
]
const FLOW_DATA = FLOW_LABELS.map((day, i) => ({
  day,
  outbound: FLOW_VALUES[i] ?? 66,
  inbound: Math.round((FLOW_VALUES[i] ?? 66) * 0.52),
}))

const CLUSTER_LOAD = [
  22, 18, 34, 28, 16, 46, 30, 14, 26, 20, 88, 24, 32, 18, 28, 22, 38, 20,
  26, 34, 30, 18, 92, 36, 78, 30, 72, 22, 28, 34, 20, 30, 26, 38, 24, 32,
  40, 28, 34, 26,
]

const LANES = [
  { id: "00", name: "API Flood", count: "4,521", source: "Edge WAF", state: "Mitigating", tone: "destructive", progress: 92 },
  { id: "01", name: "Mail Spoof", count: "3,102", source: "Mail Relay", state: "Reviewing", tone: "warning", progress: 64 },
  { id: "02", name: "Cloud Probe", count: "1,250", source: "Cloud API", state: "Queued", tone: "info", progress: 28 },
  { id: "03", name: "Credential Fill", count: "804", source: "Auth Edge", state: "Queued", tone: "info", progress: 16 },
]

const flowConfig = { outbound: { label: "Outbound", color: "var(--color-amber-500)" }, inbound: { label: "Inbound", color: "var(--success)" } }
const threatConfig = { blocked: { label: "Blocked", color: "oklch(0.55 0.19 258)" }, watched: { label: "Watched", color: "oklch(0.7 0.16 235)" } }

function Sparkline({ points, className }: { points: number[]; className?: string }) {
  const min = Math.min(...points)
  const max = Math.max(...points)
  const path = points
    .map((point, i) => {
      const x = (i / (points.length - 1)) * 100
      const y = 28 - ((point - min) / (max - min || 1)) * 24
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(" ")
  return (
    <svg viewBox="0 0 100 32" className={className} aria-hidden="true">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const toneClass = {
  destructive: "text-destructive",
  success: "text-success",
  warning: "text-warning",
} as const

const toneBadge = {
  destructive: "destructive-light",
  success: "success-light",
  warning: "warning-light",
} as const

function DeltaBadge({ delta, tone }: { delta: string; tone: keyof typeof toneBadge }) {
  const positive = delta.startsWith("+")
  const Arrow = positive ? ArrowUpRight : ArrowDownRight
  return (
    <Badge variant={toneBadge[tone]} size="sm">
      <Arrow aria-hidden="true" />
      {delta}
    </Badge>
  )
}

export function DashboardEdgeSecurityTelemetryBlock() {
  const [range, setRange] = useState("May 12, 2026 - Jun 10, 2026")
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 p-4 sm:p-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Security</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Telemetry</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-2">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="font-normal">
                  <span>{range}</span>
                  <CalendarIcon data-icon="inline-end" className="text-muted-foreground" aria-hidden="true" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-64 p-1.5">
                {RANGE_PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setRange(`${preset.label} - ${preset.days} day window`)
                      setOpen(false)
                    }}
                    className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted"
                  >
                    {preset.label}
                    {range.startsWith(preset.label) ? (
                      <span className="text-muted-foreground text-xs">Applied</span>
                    ) : null}
                  </button>
                ))}
                <div className="mt-1 flex justify-end border-t px-1 pt-1.5">
                  <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <Button>
              <Download data-icon="inline-start" aria-hidden="true" />
              Export
            </Button>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {METRICS.map((metric) => {
            const Icon = metric.icon
            return (
              <Card key={metric.title} className="gap-0 py-0">
                <CardContent className="relative overflow-hidden p-5">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 right-0 h-24 w-40 opacity-60 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:8px_8px]"
                  />
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="flex items-center gap-1.5 text-sm font-semibold">
                        <Icon className="size-3.5 text-muted-foreground" aria-hidden="true" />
                        {metric.title}
                      </p>
                      <p className="text-muted-foreground text-xs">{metric.sub}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p className="text-2xl font-semibold tracking-tight">{metric.value}</p>
                    <Sparkline
                      points={metric.points}
                      className={`relative h-8 w-28 ${toneClass[metric.tone]}`}
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-1.5">
                    <DeltaBadge delta={metric.delta} tone={metric.tone} />
                    <span className="text-muted-foreground text-xs">{metric.note}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Threat Vectors</CardTitle>
              <p className="text-muted-foreground text-sm">Blocked Signals</p>
              <div className="ml-auto flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[oklch(0.55_0.19_258)]" />
                  Blocked
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[oklch(0.7_0.16_235)]" />
                  Watched
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={threatConfig} className="aspect-auto h-56 w-full">
                <BarChart data={THREAT_VECTORS} margin={{ top: 8, right: 0, bottom: 0, left: 0 }} barGap={4}>
                  <defs>
                    <pattern id="d5-threat-stripes" width="6" height="6" patternUnits="userSpaceOnUse">
                      <rect width="6" height="6" fill="oklch(0.55 0.19 258 / 0.12)" />
                      <path d="M-1 5 L5 -1 M2 8 L8 2" stroke="oklch(0.55 0.19 258)" strokeWidth="1.4" opacity="0.8" />
                    </pattern>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="vector" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis hide domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                  <Bar dataKey="blocked" name="Blocked" fill="url(#d5-threat-stripes)" stroke="oklch(0.55 0.19 258)" strokeWidth={1} radius={[3, 3, 0, 0]} />
                  <Bar dataKey="watched" name="Watched" fill="var(--color-watched)" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Network Flow</CardTitle>
              <p className="text-muted-foreground text-sm">Daily API and webhooks</p>
              <Badge variant="success-light" size="sm" className="ml-auto">
                <ArrowUpRight aria-hidden="true" />
                +5.3%
              </Badge>
            </CardHeader>
            <CardContent>
              <ChartContainer config={flowConfig} className="aspect-auto h-56 w-full">
                <AreaChart data={FLOW_DATA} margin={{ top: 8, right: 0, bottom: 0, left: 0 }}>
                  <defs>
                    <pattern id="d5-flow-warm" width="6" height="6" patternUnits="userSpaceOnUse">
                      <rect width="6" height="6" fill="oklch(0.77 0.16 82 / 0.1)" />
                      <path d="M-1 5 L5 -1 M2 8 L8 2" stroke="var(--color-outbound)" strokeWidth="1" opacity="0.35" />
                    </pattern>
                    <pattern id="d5-flow-cool" width="6" height="6" patternUnits="userSpaceOnUse">
                      <rect width="6" height="6" fill="oklch(0.6 0.18 165 / 0.08)" />
                      <path d="M-1 5 L5 -1 M2 8 L8 2" stroke="var(--color-inbound)" strokeWidth="1" opacity="0.3" />
                    </pattern>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} interval={2} />
                  <YAxis hide domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                  <Area type="monotone" dataKey="outbound" stroke="var(--color-outbound)" fill="url(#d5-flow-warm)" strokeWidth={1.5} />
                  <Area type="monotone" dataKey="inbound" stroke="var(--color-inbound)" fill="url(#d5-flow-cool)" strokeWidth={1.5} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
          <Card>
            <CardHeader>
              <CardTitle>Cluster Load</CardTitle>
              <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-muted-foreground/40" />Normal</span>
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-warning" />Warm</span>
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-destructive" />Critical</span>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <Badge variant="outline">52 Nodes</Badge>
                <Badge variant="warning-light">2 Warm</Badge>
                <Badge variant="destructive-light">2 Critical</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ load: { label: "Load", color: "var(--foreground)" } }} className="aspect-auto h-44 w-full">
                <BarChart data={CLUSTER_LOAD.map((load, i) => ({ i, load }))} barCategoryGap={2}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="i" hide />
                  <YAxis hide domain={[0, 100]} />
                  <Bar dataKey="load" radius={[2, 2, 0, 0]}>
                    {CLUSTER_LOAD.map((load, i) => (
                      <Cell
                        key={i}
                        fill={load >= 86 ? "var(--destructive)" : load >= 76 ? "var(--warning)" : "var(--muted-foreground)"}
                        fillOpacity={load >= 76 ? 1 : 0.3}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Lanes</CardTitle>
              <p className="text-muted-foreground text-sm">Threat Queue</p>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {LANES.map((lane) => (
                <div key={lane.id} className="flex flex-col gap-1.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="flex items-center gap-2 text-sm font-medium">
                        <span
                          className={`size-2 rounded-full ${
                            lane.tone === "destructive" ? "bg-destructive" : lane.tone === "warning" ? "bg-warning" : "bg-info"
                          }`}
                        />
                        <span className="text-muted-foreground">[{lane.id}]</span>
                        {lane.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {lane.source} &middot; {lane.state}
                      </p>
                    </div>
                    <span className="text-sm font-semibold tabular-nums">{lane.count}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full rounded-full ${
                          lane.tone === "destructive" ? "bg-destructive" : lane.tone === "warning" ? "bg-warning" : "bg-info"
                        }`}
                        style={{ width: `${lane.progress}%` }}
                      />
                    </div>
                    <span className="text-muted-foreground w-7 text-right text-xs tabular-nums">{lane.progress}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default DashboardEdgeSecurityTelemetryBlock