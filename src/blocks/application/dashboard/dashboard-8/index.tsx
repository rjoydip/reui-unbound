"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUpDown,
  CalendarIcon,
  CreditCard,
  Download,
  Landmark,
  ListChecks,
  MoreHorizontal,
  RefreshCw,
  Scissors,
  Search,
  Shield,
  SlidersHorizontal,
  Wallet,
} from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { IconTile } from "@/components/kit/icon-tile"
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
  DropdownMenuContent,
  DropdownMenuItem,
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
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const RANGES = [
  { label: "Last 7 days", days: 7, text: "Jun 19, 2026 - Jun 25, 2026" },
  { label: "Last 14 days", days: 14, text: "Jun 12, 2026 - Jun 25, 2026" },
  { label: "Last 30 days", days: 30, text: "May 27, 2026 - Jun 25, 2026" },
  { label: "Month to date", days: 25, text: "Jun 1, 2026 - Jun 25, 2026" },
]
type Payout = {
  id: string
  source: string
  studio: string
  channel: string
  amount: number
  fee: number
  status: "Cleared" | "Pending" | "In Review" | "Flagged"
  date: string
  time: string
  age: number
}
const LEDGER: Payout[] = [
  { id: "RYL-4283", source: "Pattern Pack Drop", studio: "Mika Studio", channel: "Direct", amount: 26_480, fee: 690, status: "Pending", date: "Jun 25, 2026", time: "10:20 AM", age: 0 },
  { id: "RYL-4282", source: "Stream Royalty Batch", studio: "Wave Circuit", channel: "Stream", amount: 31_960, fee: 780, status: "Cleared", date: "Jun 25, 2026", time: "07:30 AM", age: 0 },
  { id: "RYL-4281", source: "Canvas Pack Drop", studio: "Mika Studio", channel: "Direct", amount: 82_250, fee: 1_850, status: "Cleared", date: "Jun 24, 2026", time: "03:45 PM", age: 1 },
  { id: "RYL-4280", source: "Cinema Sync Fee", studio: "Northline Media", channel: "License", amount: 64_200, fee: 2_200, status: "Pending", date: "Jun 23, 2026", time: "11:30 AM", age: 2 },
  { id: "RYL-4279", source: "Sample Pack", studio: "Wave Circuit", channel: "Stream", amount: 37_480, fee: 940, status: "Cleared", date: "Jun 22, 2026", time: "12:00 PM", age: 3 },
  { id: "RYL-4278", source: "Live Premiere Tips", studio: "Arc Room", channel: "Tips", amount: 18_840, fee: 380, status: "In Review", date: "Jun 21, 2026", time: "09:15 PM", age: 4 },
  { id: "RYL-4277", source: "Editorial License", studio: "Quiet Atlas", channel: "License", amount: 51_750, fee: 1_750, status: "Flagged", date: "Jun 19, 2026", time: "06:00 AM", age: 6 },
  { id: "RYL-4276", source: "Preset Bundle", studio: "Mika Studio", channel: "Direct", amount: 45_860, fee: 1_220, status: "Cleared", date: "Jun 18, 2026", time: "02:20 PM", age: 7 },
]
const CHANNEL_FILTER: Record<string, string> = {
  "All Channels": "All",
  "Direct Sales": "Direct",
  Licensing: "License",
  Streaming: "Stream",
  "Live Tips": "Tips",
}
const SWEEP_LANES = [
  { name: "Studio Card", note: "daily clear • today", amount: 284_650, last4: "4576", icon: CreditCard },
  { name: "Royalty Vault", note: "Friday sweep • Friday", amount: 153_980, last4: "9132", icon: Landmark },
  { name: "Collab Wallet", note: "creator split • queued", amount: 67_240, last4: "2841", icon: Wallet },
]
const statusVariant = {
  Cleared: "success-light",
  Pending: "warning-light",
  "In Review": "info-light",
  Flagged: "destructive-light",
} as const
const statusDot = {
  Cleared: "bg-success",
  Pending: "bg-warning",
  "In Review": "bg-info",
  Flagged: "bg-destructive",
} as const
const PACE_LABELS = Array.from({ length: 28 }, (_, i) =>
  new Date(Date.UTC(2026, 4, 29 + i)).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" })
)
const PACE = PACE_LABELS.map((day, i) => ({
  day,
  receipts: Math.round(64 + Math.sin(i / 2.3) * 9 + Math.sin(i / 5) * 6 + i * 0.45),
  buffer: Math.round(12 + Math.sin(i / 3.1) * 2.4 + Math.cos(i / 6) * 1.6),
}))
const paceConfig = {
  receipts: { label: "Receipts", color: "oklch(0.68 0.16 162)" },
  buffer: { label: "Buffer", color: "oklch(0.62 0.24 302)" },
}
function StatusBadge({ status }: { status: Payout["status"] }) {
  return (
    <Badge variant={statusVariant[status]}>
      <span className={`size-1.5 rounded-full ${statusDot[status]}`} />
      {status}
    </Badge>
  )
}
function money(value: number) {
  return `$${value.toLocaleString("en-US")}`
}
export function Dashboard8Block() {
  const [range, setRange] = useState(RANGES[2])
  const [rangeOpen, setRangeOpen] = useState(false)
  const [channel, setChannel] = useState("All Channels")
  const [query, setQuery] = useState("")
  const [descending, setDescending] = useState(true)
  const [status, setStatus] = useState("Ledger synced 2 minutes ago")
  const pace = PACE.slice(-range.days)
  const ledger = LEDGER.filter((entry) => {
    const channelMatch = CHANNEL_FILTER[channel] === "All" || entry.channel === CHANNEL_FILTER[channel]
    const searchMatch = `${entry.id} ${entry.source} ${entry.studio}`.toLowerCase().includes(query.toLowerCase())
    return channelMatch && searchMatch && entry.age < range.days
  }).sort((a, b) => (descending ? b.id.localeCompare(a.id) : a.id.localeCompare(b.id)))
  const announce = (message: string) => setStatus(message)
  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 p-4 sm:p-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Finance</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Payout Studio</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-2">
            <Popover open={rangeOpen} onOpenChange={setRangeOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="font-normal">
                  {range.text}
                  <CalendarIcon data-icon="inline-end" className="text-muted-foreground" aria-hidden="true" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56 p-1.5">
                {RANGES.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => {
                      setRange(option)
                      announce(`Royalty range set to ${option.label.toLowerCase()}`)
                      setRangeOpen(false)
                    }}
                    className="w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted"
                  >
                    {option.label}
                  </button>
                ))}
              </PopoverContent>
            </Popover>
            <Button onClick={() => announce("Payout export queued")}>
              <Download data-icon="inline-start" aria-hidden="true" />
              Export
            </Button>
          </div>
        </header>
        <Frame spacing="sm">
          <FramePanel className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">Creator Finance</Badge>
                  <span className="text-muted-foreground text-xs">Thursday, June 25, 2026</span>
                </div>
                <h1 className="mt-2 text-2xl font-semibold tracking-tight">Royalty Desk</h1>
                <p className="text-muted-foreground text-sm">Next payout closes at 4 PM.</p>
                <p aria-live="polite" className="text-muted-foreground mt-2 text-xs">{status}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-muted-foreground text-xs">Clear To Release</p>
                <p className="text-3xl font-semibold tracking-tight tabular-nums">$505,870</p>
                <p className="text-muted-foreground text-xs">$49,300 settling</p>
                <div className="flex items-center gap-2">
                  <Button onClick={() => announce("Split drafted for 3 sweep lanes")}>
                    <Scissors data-icon="inline-start" aria-hidden="true" />
                    Split
                  </Button>
                  <Button variant="outline" onClick={() => announce("Vault sync started")}>
                    <RefreshCw data-icon="inline-start" aria-hidden="true" />
                    Sync
                  </Button>
                </div>
              </div>
            </div>
          </FramePanel>
          <div className="grid gap-(--frame-gap) sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Live Pot", note: "claimable now", value: "$505,870", icon: Wallet },
              { label: "Buffer", note: "under review", value: "$109,520", icon: Shield },
              { label: "Sweep Lanes", note: "funds moving", value: "3", icon: Landmark },
              { label: "Moves", note: "in range", value: "16", icon: ListChecks },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <FramePanel key={stat.label} className="flex items-center justify-between gap-3 p-3.5">
                  <div>
                    <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
                      <Icon className="size-3.5" aria-hidden="true" />
                      {stat.label}
                    </p>
                    <p className="text-muted-foreground text-xs">{stat.note}</p>
                  </div>
                  <p className="text-lg font-semibold tabular-nums">{stat.value}</p>
                </FramePanel>
              )
            })}
          </div>
        </Frame>
        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <Card>
            <CardHeader>
              <CardTitle>Royalty Pace</CardTitle>
              <p className="text-muted-foreground text-sm">Receipts against buffer</p>
              <div className="ml-auto flex items-center gap-2">
                <Badge variant="success-light"><span className="size-1.5 rounded-full bg-success" />Receipts</Badge>
                <Badge variant="primary-light"><span className="size-1.5 rounded-full bg-[oklch(0.62_0.24_302)]" />Buffer</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4">
                <ChartContainer config={paceConfig} className="aspect-auto h-64 w-full">
                  <AreaChart data={pace} margin={{ top: 8, right: 0, bottom: 0, left: 0 }}>
                    <defs>
                      <pattern id="d8-receipts" width="6" height="6" patternUnits="userSpaceOnUse">
                        <rect width="6" height="6" fill="oklch(0.68 0.16 162 / 0.08)" />
                        <path d="M-1 5 L5 -1 M2 8 L8 2" stroke="var(--color-receipts)" strokeWidth="1" opacity="0.4" />
                      </pattern>
                      <pattern id="d8-buffer" width="6" height="6" patternUnits="userSpaceOnUse">
                        <rect width="6" height="6" fill="oklch(0.62 0.24 302 / 0.08)" />
                        <path d="M-1 5 L5 -1 M2 8 L8 2" stroke="var(--color-buffer)" strokeWidth="1" opacity="0.4" />
                      </pattern>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} interval={3} />
                    <YAxis hide />
                    <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                    <Area type="monotone" dataKey="receipts" name="Receipts" stroke="var(--color-receipts)" fill="url(#d8-receipts)" strokeWidth={1.5} />
                    <Area type="monotone" dataKey="buffer" name="Buffer" stroke="var(--color-buffer)" fill="url(#d8-buffer)" strokeWidth={1.5} />
                  </AreaChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Release Room</CardTitle>
              <p className="text-muted-foreground text-sm">Buffer and sweep lanes</p>
              <Badge variant="success-light" className="ml-auto">Vault Sweep</Badge>
            </CardHeader>
            <CardContent className="flex flex-col gap-0 px-0">
              <div className="px-6 pb-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Buffer drawn</span>
                    <span className="font-medium tabular-nums">50%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-1/2 rounded-full bg-foreground" />
                  </div>
                  <div className="text-muted-foreground mt-2 flex items-center justify-between text-xs">
                    <span>$112,790 held</span>
                    <span>$225,000 limit</span>
                  </div>
                  <Button variant="outline" className="mt-3 w-full" onClick={() => announce("Buffer target opened for tuning")}>
                    <SlidersHorizontal data-icon="inline-start" aria-hidden="true" />
                    Tune Buffer
                  </Button>
                </div>
              </div>
              {SWEEP_LANES.map((lane) => {
                const Icon = lane.icon
                return (
                  <div key={lane.name}>
                    <Separator />
                    <div className="flex items-center gap-3 px-6 py-3">
                      <IconTile variant="frame" size="sm">
                        <Icon aria-hidden="true" />
                      </IconTile>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">{lane.name}</p>
                        <p className="text-muted-foreground text-xs">{lane.note}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold tabular-nums">{money(lane.amount)}</p>
                        <p className="text-muted-foreground text-xs tracking-widest">•••• {lane.last4}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Recent Moves</CardTitle>
            <p className="text-muted-foreground text-sm">Moves over $10K by source</p>
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" aria-hidden="true" />
                <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search royalties" className="w-56 pl-8" aria-label="Search royalties" />
              </div>
              <Select value={channel} onValueChange={setChannel}>
                <SelectTrigger className="w-40" aria-label="Filter royalties by channel">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(CHANNEL_FILTER).map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="pl-6">
                    <button type="button" onClick={() => setDescending((value) => !value)} className="flex items-center gap-1 transition-colors hover:text-foreground">
                      Royalty ID
                      {descending ? <ArrowDown className="size-3" aria-hidden="true" /> : <ArrowUpDown className="size-3" aria-hidden="true" />}
                    </button>
                  </TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-12 pr-6"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ledger.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="pl-6 text-sm font-medium">{entry.id}</TableCell>
                    <TableCell><p className="text-sm font-medium">{entry.source}</p><p className="text-muted-foreground text-xs">{entry.studio} • {entry.channel}</p></TableCell>
                    <TableCell><p className="text-sm font-medium tabular-nums">{money(entry.amount)}</p><p className="text-muted-foreground text-xs">{money(entry.fee)} fee</p></TableCell>
                    <TableCell><StatusBadge status={entry.status} /></TableCell>
                    <TableCell><p className="text-sm">{entry.date}</p><p className="text-muted-foreground text-xs">{entry.time}</p></TableCell>
                    <TableCell className="pr-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon-sm" aria-label={`Actions for royalty ${entry.id}`}><MoreHorizontal aria-hidden="true" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => announce(`Opened ${entry.id}`)}>View</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => announce(`Receipt queued for ${entry.id}`)}>Receipt</DropdownMenuItem>
                          <DropdownMenuItem variant="destructive" onClick={() => announce(`${entry.id} flagged for review`)}>Flag</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Dashboard8Block