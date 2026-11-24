import { useMemo, useState } from "react"
import {
  ArrowRightIcon,
  BrainIcon,
  CalendarIcon,
  ExternalLinkIcon,
  InfoIcon,
  PhoneCallIcon,
  PlusIcon,
  SettingsIcon,
  SparklesIcon,
  WebhookIcon,
} from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { IconTile } from "@/components/kit/icon-tile"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "cn"

const secToClock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.round(seconds % 60)).padStart(2, "0")}`
const money = (value: number) => `$${value.toLocaleString("en-US", { maximumFractionDigits: 3 })}`
const credits = (value: number) => `${Math.round(value).toLocaleString("en-US")} credits`

type Metric = {
  key: string
  label: string
  value: string
  note?: string
  shape: number[]
  format: (value: number) => string
}

const METRICS: Metric[] = [
  { key: "calls", label: "Calls", value: "482,032", shape: [56000, 54500, 52800, 47800, 43457, 44200, 81036], format: (v) => Math.round(v).toLocaleString("en-US") },
  { key: "duration", label: "Avg. duration", value: "2:55", shape: [182, 180, 178, 172, 168, 171, 188], format: secToClock },
  { key: "total-cost", label: "Total cost", value: "207,732", note: "credits", shape: [24000, 23400, 22700, 20500, 18600, 19000, 34800], format: credits },
  { key: "avg-cost", label: "Avg. cost per call", value: "0.43", note: "credits", shape: [0.5, 0.49, 0.47, 0.43, 0.39, 0.4, 0.48], format: (v) => v.toFixed(2) },
  { key: "llm-cost", label: "Total LLM cost", value: "$46,342", shape: [5200, 5050, 4900, 4450, 4000, 4100, 7600], format: money },
  { key: "avg-llm", label: "Avg. LLM cost", value: "$0.096", shape: [0.11, 0.108, 0.104, 0.095, 0.087, 0.09, 0.102], format: (v) => `$${v.toFixed(3)}` },
]

const AGENTS = [
  { name: "Docs Support Agent", calls: 190241, icon: BrainIcon },
  { name: "Sales Qualifier", calls: 122540, icon: SparklesIcon },
  { name: "Billing Concierge", calls: 88310, icon: BrainIcon },
  { name: "Onboarding Guide", calls: 51208, icon: SparklesIcon },
  { name: "Support Triage", calls: 29733, icon: BrainIcon },
]

type Integration = { name: string; kind: string; status: "Live" | "Connected" | "Error" }

const INTEGRATIONS: Integration[] = [
  { name: "OpenAI", kind: "Realtime voice", status: "Live" },
  { name: "ElevenLabs", kind: "Voice synthesis", status: "Live" },
  { name: "Twilio", kind: "Telephony", status: "Connected" },
  { name: "HubSpot", kind: "CRM sync", status: "Error" },
]

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function interpolate(shape: number[], count: number) {
  if (count === 1) return [shape[shape.length - 1]]
  return Array.from({ length: count }, (_, index) => {
    const position = (index / (count - 1)) * (shape.length - 1)
    const lower = Math.floor(position)
    const upper = Math.min(shape.length - 1, lower + 1)
    const t = position - lower
    return shape[lower] + (shape[upper] - shape[lower]) * t
  })
}

function buildSeries(shape: number[], range: string, aggregation: string) {
  if (aggregation === "Hourly") {
    return interpolate(shape, 24).map((value, index) => ({ label: `${String(index).padStart(2, "0")}:00`, value }))
  }
  if (aggregation === "Weekly") {
    return interpolate(shape, 4).map((value, index) => ({ label: `Week ${index + 1}`, value }))
  }
  const count = range === "Last 7 days" ? 7 : range === "Last 14 days" ? 14 : 28
  const values = interpolate(shape, count)
  const end = Date.UTC(2026, 7, 24)
  return values.map((value, index) => {
    const date = new Date(end - (count - 1 - index) * 86400000)
    return { label: `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]}`, value }
  })
}

const STATUS_META = {
  Live: { badge: "success-light" as const, action: "Disconnect" },
  Connected: { badge: "primary-light" as const, action: "Disconnect" },
  Error: { badge: "destructive-light" as const, action: "Reconnect" },
}

export function Dashboard4Block() {
  const [range, setRange] = useState("Last 7 days")
  const [aggregation, setAggregation] = useState("Daily")
  const [agentScope, setAgentScope] = useState("all")
  const [metricKey, setMetricKey] = useState("calls")
  const [agentMetric, setAgentMetric] = useState("calls")
  const [selectedAgent, setSelectedAgent] = useState(AGENTS[0].name)
  const [integrationStatus, setIntegrationStatus] = useState<Record<string, Integration["status"]>>(
    Object.fromEntries(INTEGRATIONS.map((integration) => [integration.name, integration.status])),
  )

  const metric = METRICS.find((item) => item.key === metricKey) ?? METRICS[0]
  const chartConfig = { value: { label: metric.label, color: "var(--color-info)" } } satisfies ChartConfig
  const scopeIndex = AGENTS.findIndex((agent) => agent.name === agentScope)
  const scopeFactor = scopeIndex >= 0 ? 0.55 + scopeIndex * 0.09 : 1
  const data = useMemo(
    () => buildSeries(metric.shape.map((value) => value * scopeFactor), range, aggregation),
    [metric, range, aggregation, scopeFactor],
  )
  const values = data.map((point) => point.value)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const xInterval = Math.max(0, Math.ceil(data.length / 7) - 1)
  const maxAgentCalls = Math.max(...AGENTS.map((agent) => agent.calls))

  return (
    <div className="min-h-svh bg-background px-4 py-6 text-foreground sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-xl font-semibold tracking-tight">Overview</h1>
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
            <PhoneCallIcon className="text-info size-3.5" aria-hidden />
            Active Calls
            <span className="text-foreground font-medium tabular-nums">294</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Select value={range} onValueChange={setRange}>
            <SelectTrigger className="bg-background"><CalendarIcon className="text-muted-foreground" /><SelectValue /></SelectTrigger>
            <SelectContent>{["Last 7 days", "Last 14 days", "Last 28 days"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
          </Select>
          <Select value={aggregation} onValueChange={setAggregation}>
            <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
            <SelectContent>{["Hourly", "Daily", "Weekly"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
          </Select>
          <Select value={agentScope} onValueChange={setAgentScope}>
            <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All agents</SelectItem>
              {AGENTS.map((agent) => <SelectItem key={agent.name} value={agent.name}>{agent.name}</SelectItem>)}
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-background"><PlusIcon /> Add Filter</Button>
          <div className="ml-auto flex items-center gap-2">
            <Button><PlusIcon /> Add</Button>
            <Button variant="outline" className="bg-background"><SettingsIcon /> Configure</Button>
          </div>
        </div>

        <Card className="gap-0 py-0">
          <div className="grid grid-cols-2 border-b md:grid-cols-3 xl:grid-cols-6">
            {METRICS.map((item) => {
              const active = item.key === metricKey
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setMetricKey(item.key)}
                  className={cn(
                    "relative border-r border-b px-4 py-3 text-left transition-colors last:border-r-0 xl:border-b-0 hover:bg-muted/30",
                    active && "bg-muted/20",
                  )}
                  aria-pressed={active}
                >
                  <span className="block text-xs text-muted-foreground">{item.label}</span>
                  <span className="mt-0.5 block text-sm font-semibold">
                    {item.value}
                    {item.note ? <span className="text-muted-foreground ml-1 text-xs font-normal">{item.note}</span> : null}
                  </span>
                  {active ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground" aria-hidden /> : null}
                </button>
              )
            })}
          </div>

          <div className="p-3">
            <div className="rounded-lg border">
              <div className="flex items-center justify-between gap-3 px-4 pt-3">
                <div className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">{metric.label}</span> · {aggregation} · {agentScope === "all" ? "All agents" : agentScope}
                </div>
                <div className="text-muted-foreground flex items-center gap-2 text-xs">
                  <span>Min <span className="text-foreground font-medium tabular-nums">{metric.format(min)}</span></span>
                  <span aria-hidden>•</span>
                  <span>Max <span className="text-foreground font-medium tabular-nums">{metric.format(max)}</span></span>
                </div>
              </div>
              <ChartContainer config={chartConfig} className="aspect-auto h-[330px] w-full">
                <AreaChart data={data} margin={{ top: 20, right: 12, bottom: 8, left: 12 }}>
                  <defs>
                    <pattern id="call-hatch" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="6" stroke="var(--color-info)" strokeWidth="1" opacity="0.35" />
                    </pattern>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 4" />
                  <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={12} interval={xInterval} />
                  <YAxis hide domain={["dataMin", "dataMax"]} />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" labelKey="label" formatter={(value) => metric.format(Number(value))} />}
                  />
                  <Area type="natural" dataKey="value" stroke="var(--color-info)" strokeWidth={1.5} fill="url(#call-hatch)" isAnimationActive={false} />
                </AreaChart>
              </ChartContainer>
              <div className="flex justify-end px-4 pb-3">
                <Button variant="outline" size="sm" className="bg-background">View more <ArrowRightIcon /></Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-3 lg:grid-cols-12">
          <Card className="gap-0 py-0 lg:col-span-7">
            <div className="flex items-center justify-between gap-3 px-4 pt-4 pb-2">
              <div className="flex items-center gap-1.5">
                <h2 className="font-heading text-base font-semibold">Most Called Agents</h2>
                <InfoIcon className="size-3.5 text-muted-foreground" aria-label="Agent call volume details" />
              </div>
              <Select value={agentMetric} onValueChange={setAgentMetric}>
                <SelectTrigger size="sm" className="bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="calls">Calls</SelectItem>
                  <SelectItem value="share">Share</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-muted-foreground px-4 pb-3 text-xs">Call volume by agent</p>
            <div className="space-y-1 px-3 pb-3">
              {AGENTS.map((agent) => {
                const Icon = agent.icon
                const width = (agent.calls / maxAgentCalls) * 100
                const selected = selectedAgent === agent.name
                return (
                  <button
                    key={agent.name}
                    type="button"
                    onClick={() => setSelectedAgent(agent.name)}
                    className={cn("w-full rounded-md px-2 py-2 text-left transition-colors", selected ? "bg-info/10" : "hover:bg-muted/60")}
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <Icon className={cn("size-3.5", selected ? "text-info" : "text-muted-foreground")} aria-hidden />
                      <span className="font-medium">{agent.name}</span>
                      <span className="ml-auto tabular-nums">{agentMetric === "calls" ? agent.calls.toLocaleString() : `${width.toFixed(1)}%`}</span>
                    </span>
                    <span className="mt-1.5 block h-2.5 overflow-hidden rounded-full bg-muted">
                      <span className={cn("block h-full rounded-full", selected ? "bg-info" : "bg-info/60")} style={{ width: `${width}%` }} />
                    </span>
                  </button>
                )
              })}
            </div>
          </Card>

          <Card className="gap-0 py-0 lg:col-span-5">
            <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-3">
              <div>
                <h2 className="font-heading text-base font-semibold">Integrations</h2>
                <p className="text-muted-foreground text-xs">Connections for voice ops</p>
              </div>
              <Button variant="outline" size="sm" className="bg-background">Manage <ExternalLinkIcon /></Button>
            </div>
            <div className="divide-y border-t">
              {INTEGRATIONS.map((integration) => {
                const status = integrationStatus[integration.name]
                const meta = STATUS_META[status]
                return (
                  <div key={integration.name} className="flex items-center gap-3 px-4 py-3">
                    <IconTile variant="outline" size="sm" className="bg-background">
                      {integration.name === "OpenAI" ? <SparklesIcon /> : integration.name === "Twilio" ? <WebhookIcon /> : <BrainIcon />}
                    </IconTile>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{integration.name}</p>
                      <p className="text-muted-foreground truncate text-xs">{integration.kind}</p>
                    </div>
                    <Badge variant={meta.badge} radius="full" className="border-dashed">{status}</Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-background"
                      onClick={() => setIntegrationStatus((prev) => ({ ...prev, [integration.name]: status === "Error" ? "Connected" : "Error" }))}
                    >
                      {meta.action}
                    </Button>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard4Block
