"use client"

import { useState } from "react"
import {
  CalendarDays,
  CalendarIcon,
  Check,
  Download,
  Link2,
  Mail,
  MapPin,
  MoreHorizontal,
  RotateCcw,
  ShieldCheck,
  ShieldPlus,
  TriangleAlert,
  Users,
} from "lucide-react"
import { Area, CartesianGrid, ComposedChart, XAxis, YAxis } from "recharts"

import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { IconTile } from "@/components/kit/icon-tile"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const RANGE_PRESETS = [
  { label: "Week of Jun 22", offset: 0, days: 7 },
  { label: "Week of Jun 29", offset: 7, days: 7 },
  { label: "Week of Jul 6", offset: 14, days: 7 },
  { label: "First 2 weeks", offset: 0, days: 14 },
  { label: "All 3 weeks", offset: 0, days: 21 },
]
const METRICS = [
  { label: "Open Gaps", value: "11", note: "before kickoff", delta: "-4%", good: false, icon: CalendarDays, tone: "text-warning" },
  { label: "Standby Pool", value: "24", note: "ready workers", delta: "+7", good: true, icon: Users, tone: "text-success" },
  { label: "Swap Risk", value: "8%", note: "open requests", delta: "-2%", good: false, icon: TriangleAlert, tone: "text-destructive" },
  { label: "Check Score", value: "4.8", note: "site average", delta: "+0.3", good: true, icon: ShieldPlus, tone: "text-info" },
  { label: "Crew Tenure", value: "146d", note: "rolling median", delta: "+6d", good: true, icon: Check, tone: "text-muted-foreground" },
]
type Crew = {
  name: string
  role: string
  district: string
  coverage: number
  note: string
  relief: string
  handoffs: number
  status: "Stable" | "Watch" | "Critical" | "Pending"
}
const CREWS: Crew[] = [
  { name: "Mira Stone", role: "Floor lead", district: "Harbor", coverage: 94, note: "Adds two closers", relief: "6h", handoffs: 2, status: "Stable" },
  { name: "Alex Johnson", role: "Stock lead", district: "Harbor", coverage: 91, note: "Backfill locked", relief: "7h", handoffs: 1, status: "Stable" },
  { name: "Leo Grant", role: "Dispatch owner", district: "Airport", coverage: 81, note: "Driver window tight", relief: "3h", handoffs: 5, status: "Watch" },
  { name: "Theo Park", role: "Ramp lead", district: "Airport", coverage: 89, note: "Training overlap", relief: "5h", handoffs: 3, status: "Stable" },
  { name: "Nora Vale", role: "Inventory coach", district: "Uptown", coverage: 72, note: "Cycle count open", relief: "2h", handoffs: 6, status: "Critical" },
  { name: "Sana Qureshi", role: "Route floater", district: "Uptown", coverage: 78, note: "Awaiting confirm", relief: "4h", handoffs: 4, status: "Pending" },
]
const ACTIONS = [
  { title: "3 swap approvals", note: "before 2 PM", cta: "Approve", icon: RotateCcw, tone: "text-warning" },
  { title: "6 standby invites", note: "Harbor route", cta: "Invite", icon: Mail, tone: "text-info" },
  { title: "1 lead missing", note: "Uptown close", cta: "Assign", icon: MapPin, tone: "text-destructive" },
  { title: "Timecard sync", note: "before payroll run", cta: "Sync", icon: Link2, tone: "text-success" },
  { title: "2 route gaps", note: "Airport noon", cta: "Fill", icon: CalendarDays, tone: "text-warning" },
  { title: "Break audit", note: "two sites", cta: "Check", icon: ShieldCheck, tone: "text-success" },
]
const DAY_LABELS = ["Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29", "Jun 30", "Jul 1", "Jul 2", "Jul 3", "Jul 4", "Jul 5", "Jul 6", "Jul 7", "Jul 8", "Jul 9", "Jul 10", "Jul 11", "Jul 12"]
const DEMAND = [146, 152, 149, 158, 161, 143, 138, 155, 162, 168, 171, 164, 149, 141, 158, 166, 173, 178, 170, 159, 151]
const SUPPLY = DEMAND.map((value, i) => value + 10 + ((i * 3) % 11))
const FORECAST = DEMAND.map((value, i) => value + ((i * 5) % 9))
const statusVariant = {
  Stable: "success-light",
  Watch: "warning-light",
  Critical: "destructive-light",
  Pending: "primary-light",
} as const

const barColor = {
  Stable: "bg-success",
  Watch: "bg-warning",
  Critical: "bg-destructive",
  Pending: "bg-primary",
} as const

const currency = (value: number) => value.toLocaleString("en-US")

const demandConfig = {
  supply: { label: "Supply", color: "var(--info)" },
  forecast: { label: "Forecast", color: "var(--destructive)" },
}

function Delta({ delta, good }: { delta: string; good: boolean }) {
  return (
    <Badge variant={good ? "success-light" : "warning-light"} size="sm">
      {delta}
    </Badge>
  )
}

export function DashboardWorkforceCoverageBlock() {
  const [preset, setPreset] = useState(RANGE_PRESETS[4])
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState<Set<string>>(new Set())
  const [hideDone, setHideDone] = useState(false)

  const toggle = (title: string) =>
    setDone((current) => {
      const next = new Set(current)
      if (next.has(title)) next.delete(title)
      else next.add(title)
      return next
    })

  const rangeLabel = preset.label === "All 3 weeks" ? "Jun 22 - Jul 12" : preset.label.replace("Week of ", "")
  const sliced = DAY_LABELS.slice(preset.offset, preset.offset + preset.days).map((day, i) => ({
    day,
    supply: SUPPLY[preset.offset + i] ?? 0,
    forecast: FORECAST[preset.offset + i] ?? 0,
  }))
  const visibleActions = ACTIONS.filter((action) => !hideDone || !done.has(action.title))

  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 p-4 sm:p-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Workforce</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Coverage</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-2">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="font-normal">
                  {rangeLabel}
                  <CalendarIcon data-icon="inline-end" className="text-muted-foreground" aria-hidden="true" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56 p-1.5">
                {RANGE_PRESETS.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      setPreset(item)
                      setOpen(false)
                    }}
                    className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted"
                  >
                    {item.label}
                    {preset.label === item.label ? <Check className="size-3.5" aria-hidden="true" /> : null}
                  </button>
                ))}
              </PopoverContent>
            </Popover>
            <Button>
              <Download data-icon="inline-start" aria-hidden="true" />
              Export
            </Button>
          </div>
        </header>

        <Frame dense>
          <div className="grid grid-cols-2 gap-0 md:grid-cols-3 xl:grid-cols-5">
          {METRICS.map((metric) => {
            const Icon = metric.icon
            return (
              <FramePanel key={metric.label} className="flex flex-col gap-3 p-4">
                <div className="flex items-center gap-2">
                  <IconTile variant="soft" size="sm" className={metric.tone}>
                    <Icon aria-hidden="true" />
                  </IconTile>
                  <span className="text-sm font-medium">{metric.label}</span>
                </div>
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-2xl font-semibold tracking-tight">{metric.value}</p>
                    <p className="text-muted-foreground text-xs">{metric.note}</p>
                  </div>
                  <Delta delta={metric.delta} good={metric.good} />
                </div>
              </FramePanel>
            )
          })}
          </div>
        </Frame>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <Card>
            <CardHeader>
              <CardTitle>Coverage Review</CardTitle>
              <p className="text-muted-foreground text-sm">Crew health by district</p>
              <Badge variant="primary-light" className="ml-auto">6 crews</Badge>
            </CardHeader>
            <CardContent className="px-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="pl-6">Crew Lead</TableHead>
                    <TableHead>District</TableHead>
                    <TableHead>Coverage</TableHead>
                    <TableHead>Relief</TableHead>
                    <TableHead>Handoffs</TableHead>
                    <TableHead className="pr-6">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {CREWS.map((crew) => (
                    <TableRow key={crew.name}>
                      <TableCell className="pl-6">
                        <div className="flex items-center gap-2.5">
                          <Avatar className="size-8">
                            <AvatarFallback className="bg-muted text-[0.65rem] font-semibold">
                              {crew.name.split(" ").map((part) => part[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{crew.name}</p>
                            <p className="text-muted-foreground text-xs">{crew.role}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{crew.district}</Badge>
                      </TableCell>
                      <TableCell className="min-w-44">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold tabular-nums">{crew.coverage}%</span>
                          <span className="text-muted-foreground text-xs">{crew.note}</span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <div className={`h-full rounded-full ${barColor[crew.status]}`} style={{ width: `${crew.coverage}%` }} />
                        </div>
                      </TableCell>
                      <TableCell className="text-sm tabular-nums">{crew.relief}</TableCell>
                      <TableCell className="text-sm tabular-nums">{crew.handoffs}</TableCell>
                      <TableCell className="pr-6">
                        <Badge variant={statusVariant[crew.status]}>{crew.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Action Queue</CardTitle>
              <p className="text-muted-foreground text-sm">
                {visibleActions.filter((a) => !done.has(a.title)).length} open before cutoff
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-auto" aria-label="Action queue options">
                    <MoreHorizontal aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuLabel>Queue</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => setDone(new Set(ACTIONS.map((a) => a.title)))}>
                    <Check aria-hidden="true" /> Resolve All
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDone(new Set())}>
                    <RotateCcw aria-hidden="true" /> Reopen All
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked={hideDone} onCheckedChange={(value) => setHideDone(Boolean(value))}>
                    Hide Done
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {visibleActions.map((action) => {
                const Icon = action.icon
                const isDone = done.has(action.title)
                return (
                  <div key={action.title} className="flex items-center gap-3 rounded-lg border p-2.5">
                    <IconTile variant="soft" size="sm" className={action.tone}>
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <div className="min-w-0 flex-1">
                      <p className={`truncate text-sm font-medium ${isDone ? "text-muted-foreground line-through" : ""}`}>
                        {action.title}
                      </p>
                      <p className="text-muted-foreground text-xs">{action.note}</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => toggle(action.title)}>
                      {isDone ? "Undo" : action.cta}
                    </Button>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Demand Mix</CardTitle>
            <p className="text-muted-foreground text-sm">Supply against forecast, {rangeLabel}</p>
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 rounded-lg border px-2.5 py-1.5">
                <span className="size-2.5 rounded-full bg-info" />
                <div>
                  <p className="text-muted-foreground text-[0.65rem]">Supply</p>
                  <p className="text-xs font-medium">Scheduled + standby</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold tabular-nums">{currency(3296)}</p>
                  <Badge variant="outline" size="xs">108.3%</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border px-2.5 py-1.5">
                <span className="size-2.5 rounded-full bg-destructive" />
                <div>
                  <p className="text-muted-foreground text-[0.65rem]">Forecast</p>
                  <p className="text-xs font-medium">21 day demand</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold tabular-nums">{currency(3043)}</p>
                  <Badge variant="warning-light" size="xs">Avg 145</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border px-2.5 py-1.5">
                <span className="size-2.5 rounded-full bg-success" />
                <div>
                  <p className="text-muted-foreground text-[0.65rem]">Gap</p>
                  <p className="text-xs font-medium">Coverage surplus</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold tabular-nums text-success">+253</p>
                  <Badge variant="success-light" size="xs">+8.3%</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={demandConfig} className="aspect-auto h-52 w-full">
              <ComposedChart data={sliced} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="d6-supply" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-supply)" stopOpacity={0.32} />
                    <stop offset="100%" stopColor="var(--color-supply)" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} interval={Math.max(0, Math.floor(sliced.length / 7) - 1)} />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                <Area type="monotone" dataKey="supply" name="Supply" stroke="var(--color-supply)" fill="url(#d6-supply)" strokeWidth={2} />
                <Area type="monotone" dataKey="forecast" name="Forecast" stroke="var(--color-forecast)" fill="none" strokeWidth={2} strokeDasharray="4 4" />
              </ComposedChart>
            </ChartContainer>
            <div className="text-muted-foreground flex items-center justify-end gap-2 pt-2 text-xs">
              <span className="size-2 rounded-full bg-info" /> Supply Scheduled + standby
              <span className="ml-3 size-2 rounded-full bg-destructive" /> Forecast
              <Badge variant="outline" size="sm" className="ml-2">21 day view</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardWorkforceCoverageBlock
