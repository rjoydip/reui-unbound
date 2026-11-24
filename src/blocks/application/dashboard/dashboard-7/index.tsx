"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  CalendarIcon,
  ChevronDown,
  CircleDollarSign,
  Download,
  Eye,
  Filter,
  Package,
  Search,
  ShoppingCart,
  UserRoundPlus,
} from "lucide-react"
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from "recharts"

import { Badge } from "@/components/kit/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Order = {
  id: string; customer: string; channel: string; product: string; sku: string
  qty: number; unit: number; fulfillment: string; progress: number
  status: "Paid" | "In Review" | "On Hold" | "Refunded"; date: string
}

const ORDERS: Order[] = [
  { id: "RVO-8033", customer: "Alex Johnson", channel: "Partner", product: "Aero Carry Kit", sku: "AERO-30L", qty: 4, unit: 163, fulfillment: "Shipped", progress: 84, status: "Paid", date: "Aug 02, 2025" },
  { id: "RVO-8032", customer: "Mira Stone", channel: "Direct", product: "Aero Carry Kit", sku: "AERO-30L", qty: 3, unit: 163, fulfillment: "Shipped", progress: 100, status: "Paid", date: "Aug 04, 2025" },
  { id: "RVO-8088", customer: "Nora Vale", channel: "Marketplace", product: "Orbit Weekender", sku: "ORBIT-WK", qty: 1, unit: 319, fulfillment: "On Hold", progress: 28, status: "In Review", date: "Aug 03, 2025" },
  { id: "RVO-8087", customer: "Leo Grant", channel: "Partner", product: "Trail Bottle", sku: "TRAIL-BT", qty: 2, unit: 74, fulfillment: "Packing", progress: 62, status: "Paid", date: "Aug 03, 2025" },
  { id: "RVO-8086", customer: "Sana Qureshi", channel: "Direct", product: "Studio Tote", sku: "STUDIO-TT", qty: 1, unit: 214, fulfillment: "Delivered", progress: 100, status: "Paid", date: "Aug 02, 2025" },
  { id: "RVO-8085", customer: "Theo Park", channel: "Marketplace", product: "Halo Lamp", sku: "HALO-LMP", qty: 2, unit: 218, fulfillment: "Refunded", progress: 0, status: "Refunded", date: "Aug 01, 2025" },
]

const METRICS = [
  { title: "Net Revenue", sub: "8.8% above plan", value: "$128,420", delta: "+12.8%", tone: "success" as const, icon: CircleDollarSign },
  { title: "Units Moved", sub: "84% of monthly goal", value: "4,892", delta: "+9.4%", tone: "info" as const, icon: Package },
  { title: "New Buyers", sub: "188 via referral", value: "642", delta: "+18.6%", tone: "success" as const, icon: UserRoundPlus },
  { title: "Cart Recovery", sub: "risk in paid social", value: "38.4%", delta: "-2.1%", tone: "warning" as const, icon: ShoppingCart },
]

const MONTH_REVENUE = [
  { day: "Aug 01", online: 46_000, retail: 38_000, plan: 60_000 },
  { day: "Aug 02", online: 61_000, retail: 52_000, plan: 82_000 },
  { day: "Aug 03", online: 66_000, retail: 57_000, plan: 108_000 },
  { day: "Aug 04", online: 67_000, retail: 61_000, plan: 122_000 },
]

const QUARTER_REVENUE = [
  { day: "Jul 07", online: 132_000, retail: 108_000, plan: 210_000 },
  { day: "Jul 14", online: 158_000, retail: 124_000, plan: 228_000 },
  { day: "Jul 21", online: 176_000, retail: 138_000, plan: 244_000 },
  { day: "Jul 28", online: 168_000, retail: 146_000, plan: 258_000 },
  { day: "Aug 04", online: 192_000, retail: 157_000, plan: 276_000 },
  { day: "Aug 11", online: 204_000, retail: 166_000, plan: 292_000 },
  { day: "Aug 18", online: 198_000, retail: 174_000, plan: 308_000 },
  { day: "Aug 25", online: 216_000, retail: 182_000, plan: 322_000 },
  { day: "Sep 01", online: 232_000, retail: 191_000, plan: 338_000 },
]

const CHANNELS = [
  { day: "Fri", direct: 15, partners: 11, marketplace: 9 },
  { day: "Sat", direct: 14, partners: 12, marketplace: 10 },
  { day: "Sun", direct: 12, partners: 13, marketplace: 10 },
  { day: "Mon", direct: 8, partners: 13, marketplace: 12 },
]

const revenueConfig = { online: { label: "Online", color: "oklch(0.72 0.15 215)" }, retail: { label: "Retail", color: "oklch(0.62 0.24 302)" }, plan: { label: "Plan", color: "var(--muted-foreground)" } }
const channelConfig = { direct: { label: "Direct", color: "oklch(0.7 0.14 205)" }, partners: { label: "Partners", color: "oklch(0.62 0.24 302)" }, marketplace: { label: "Marketplace", color: "var(--color-amber-500)" } }
const toneBadge = { success: "success-light", info: "primary-light", warning: "warning-light" } as const
const statusVariant = { Paid: "success-light", "In Review": "primary-light", "On Hold": "warning-light", Refunded: "destructive-light" } as const
const RANGES = ["Aug 1, 2025 - Aug 4, 2025", "Last 7 days", "Month to date", "Quarter to date"]

function MiniBars({ tone }: { tone: "success" | "info" | "warning" }) {
  const heights = [8, 14, 11, 19, 15, 23, 18, 27, 22, 31, 26, 34, 30]
  return (
    <div aria-hidden="true" className={`flex h-9 items-end gap-[3px] ${tone === "success" ? "text-success" : tone === "info" ? "text-info" : "text-warning"}`}>
      {heights.map((height, i) => <span key={i} className="w-1 rounded-[1px] bg-current opacity-70" style={{ height }} />)}
    </div>
  )
}

function SortButton({ label, active, direction, onClick }: { label: string; active: boolean; direction: "asc" | "desc"; onClick: () => void }) {
  const Icon = !active ? ArrowUpDown : direction === "asc" ? ArrowUp : ArrowDown
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-1 text-left transition-colors hover:text-foreground">
      {label}
      <Icon className="size-3" aria-hidden="true" />
    </button>
  )
}

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("")
const orderTotal = (order: Order) => `$${(order.qty * order.unit).toLocaleString("en-US")}`

export function Dashboard7Block() {
  const [range, setRange] = useState(RANGES[0])
  const [rangeOpen, setRangeOpen] = useState(false)
  const [tab, setTab] = useState("month")
  const [channelLabel, setChannelLabel] = useState("Direct")
  const [query, setQuery] = useState("")
  const [exceptions, setExceptions] = useState(false)
  const [sort, setSort] = useState<{ key: "id" | "amount"; direction: "asc" | "desc" }>({ key: "id", direction: "desc" })
  const [selected, setSelected] = useState<Order | null>(null)

  const data = tab === "month" ? MONTH_REVENUE : QUARTER_REVENUE
  const filtered = ORDERS.filter((order) => {
    const haystack = `${order.id} ${order.customer} ${order.product} ${order.channel}`.toLowerCase()
    return haystack.includes(query.toLowerCase()) && (!exceptions || (order.status !== "Paid" && order.fulfillment !== "Delivered"))
  }).sort((a, b) => {
    const factor = sort.direction === "asc" ? 1 : -1
    return (sort.key === "amount" ? a.qty * a.unit - b.qty * b.unit : a.id.localeCompare(b.id)) * factor
  })

  const toggleSort = (key: "id" | "amount") =>
    setSort((current) => ({ key, direction: current.key === key && current.direction === "asc" ? "desc" : "asc" }))

  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 p-4 sm:p-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm"><span className="font-semibold">Retail Pulse</span><span className="text-muted-foreground"> • Monday, Aug 04, 2025 • Synced at 09:20.</span></p>
          <div className="flex items-center gap-2">
            <Popover open={rangeOpen} onOpenChange={setRangeOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="font-normal">
                  {range}
                  <CalendarIcon data-icon="inline-end" className="text-muted-foreground" aria-hidden="true" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56 p-1.5">
                {RANGES.map((label) => (
                  <button key={label} type="button" onClick={() => { setRange(label); setRangeOpen(false) }} className="w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted">{label}</button>
                ))}
              </PopoverContent>
            </Popover>
            <Button><Download data-icon="inline-start" aria-hidden="true" />Export</Button>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {METRICS.map((metric) => {
            const Icon = metric.icon
            return (
              <Card key={metric.title} className="gap-0 py-0">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-9 items-center justify-center rounded-lg border bg-muted/40"><Icon className="size-4" aria-hidden="true" /></span>
                      <div><p className="text-sm font-semibold">{metric.title}</p><p className="text-muted-foreground text-xs">{metric.sub}</p></div>
                    </div>
                    <Badge variant={toneBadge[metric.tone]} size="sm">{metric.delta}</Badge>
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <p className="text-2xl font-semibold tracking-tight">{metric.value}</p>
                    <MiniBars tone={metric.tone} />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </section>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Pace</CardTitle>
              <p className="text-muted-foreground text-sm">Daily revenue, month to date</p>
              <div className="ml-auto flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[oklch(0.72_0.15_215)]" />Online</span>
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[oklch(0.62_0.24_302)]" />Retail</span>
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-muted-foreground" />Plan</span>
                </div>
                <Tabs value={tab} onValueChange={setTab}><TabsList><TabsTrigger value="month">Month</TabsTrigger><TabsTrigger value="quarter">Quarter</TabsTrigger></TabsList></Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4">
                <div className="grid grid-cols-3 gap-4">
                  {[["Booked", "$128K"], ["Plan Gap", "+$10K"], ["Gross Profit", "$41K"]].map(([label, value], i) => (
                    <div key={label}><p className="text-muted-foreground text-xs">{label}</p><p className="text-lg font-semibold">{value}{i === 2 ? <span className="text-success ml-1 text-xs font-medium">32%</span> : null}</p></div>
                  ))}
                </div>
                <ChartContainer config={revenueConfig} className="mt-2 aspect-auto h-60 w-full">
                  <ComposedChart data={data} margin={{ top: 12, right: 0, bottom: 0, left: 0 }}>
                    <defs>
                      <linearGradient id="d7-online" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-online)" stopOpacity={0.28} /><stop offset="100%" stopColor="var(--color-online)" stopOpacity={0.04} /></linearGradient>
                      <linearGradient id="d7-retail" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-retail)" stopOpacity={0.24} /><stop offset="100%" stopColor="var(--color-retail)" stopOpacity={0.03} /></linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} interval="preserveStartEnd" />
                    <YAxis hide />
                    <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                    <Area type="monotone" dataKey="online" name="Online" stroke="var(--color-online)" fill="url(#d7-online)" strokeWidth={2} />
                    <Area type="monotone" dataKey="retail" name="Retail" stroke="var(--color-retail)" fill="url(#d7-retail)" strokeWidth={2} />
                    <Line type="monotone" dataKey="plan" name="Plan" stroke="var(--color-plan)" strokeWidth={1.5} strokeDasharray="5 4" dot={false} />
                  </ComposedChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Channel Mix</CardTitle>
              <p className="text-muted-foreground text-sm">Daily order share</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="outline" size="sm" className="ml-auto">{channelLabel}<ChevronDown data-icon="inline-end" aria-hidden="true" /></Button></DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuRadioGroup value={channelLabel} onValueChange={setChannelLabel}>
                    {["Direct", "Partners", "Marketplace", "All channels"].map((channel) => <DropdownMenuRadioItem key={channel} value={channel}>{channel}</DropdownMenuRadioItem>)}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div><p className="text-muted-foreground text-xs">Latest Orders</p><p className="text-2xl font-semibold">46</p></div>
                  <div className="text-right"><p className="text-muted-foreground text-xs">Direct Share</p><p className="text-2xl font-semibold">39%</p></div>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[oklch(0.7_0.14_205)]" />Direct</span>
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[oklch(0.62_0.24_302)]" />Partners</span>
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-amber-500" />Marketplace</span>
                </div>
                <ChartContainer config={channelConfig} className="mt-2 aspect-auto h-52 w-full">
                  <BarChart data={CHANNELS} margin={{ top: 8, right: 0, bottom: 0, left: 0 }} barCategoryGap="22%">
                    <defs><pattern id="d7-direct-hatch" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="var(--color-direct)" /><path d="M-1 5 L5 -1 M2 8 L8 2" stroke="white" strokeWidth="1" opacity="0.14" /></pattern></defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis hide />
                    <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                    <Bar dataKey="direct" name="Direct" stackId="a" fill="url(#d7-direct-hatch)" />
                    <Bar dataKey="partners" name="Partners" stackId="a" fill="var(--color-partners)" />
                    <Bar dataKey="marketplace" name="Marketplace" stackId="a" fill="var(--color-marketplace)" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Order Queue</CardTitle>
            <p className="text-muted-foreground text-sm">{filtered.length} orders from {range}</p>
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" aria-hidden="true" />
                <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search orders" className="w-56 pl-8" aria-label="Search orders" />
              </div>
              <Button variant={exceptions ? "secondary" : "outline"} size="sm" onClick={() => setExceptions((value) => !value)} aria-pressed={exceptions}><Filter data-icon="inline-start" aria-hidden="true" />Exceptions</Button>
            </div>
          </CardHeader>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="pl-6"><SortButton label="Order" active={sort.key === "id"} direction={sort.direction} onClick={() => toggleSort("id")} /></TableHead>
                  <TableHead>Customer</TableHead><TableHead>Product</TableHead><TableHead>Fulfillment</TableHead>
                  <TableHead><SortButton label="Amount" active={sort.key === "amount"} direction={sort.direction} onClick={() => toggleSort("amount")} /></TableHead>
                  <TableHead>Status</TableHead><TableHead className="w-12 pr-6"><span className="sr-only">View</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="pl-6"><p className="text-sm font-medium">{order.id}</p><p className="text-muted-foreground text-xs">{order.date}</p></TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="size-6"><AvatarFallback className="bg-muted text-[0.6rem] font-semibold">{initials(order.customer)}</AvatarFallback></Avatar>
                        <div><p className="text-sm font-medium">{order.customer}</p><p className="text-muted-foreground text-xs">{order.channel}</p></div>
                      </div>
                    </TableCell>
                    <TableCell><p className="text-sm">{order.product}</p><p className="text-muted-foreground text-xs">{order.sku}</p></TableCell>
                    <TableCell className="min-w-40">
                      <p className="text-sm">{order.fulfillment}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                          <div className={`h-full rounded-full ${order.progress === 100 ? "bg-success" : order.fulfillment === "On Hold" ? "bg-primary" : order.fulfillment === "Refunded" ? "bg-destructive" : "bg-warning"}`} style={{ width: `${order.progress}%` }} />
                        </div>
                        <span className="text-muted-foreground text-xs tabular-nums">{order.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm font-medium tabular-nums">{orderTotal(order)}</TableCell>
                    <TableCell><Badge variant={statusVariant[order.status]}>{order.status}</Badge></TableCell>
                    <TableCell className="pr-6"><Button variant="ghost" size="icon-sm" aria-label={`View ${order.id}`} onClick={() => setSelected(order)}><Eye aria-hidden="true" /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="text-muted-foreground px-6 pt-3 text-xs">Show {filtered.length} of {ORDERS.length} orders</p>
          </CardContent>
        </Card>
      </div>

      <Sheet open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent className="w-full data-[side=right]:sm:max-w-md">
          {selected ? (
            <>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">{selected.id}<Badge variant={statusVariant[selected.status]}>{selected.status}</Badge></SheetTitle>
                <SheetDescription>Placed {selected.date}</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 px-4 pb-4">
                <div className="rounded-lg border p-3">
                  <p className="mb-2 text-sm font-semibold">Customer</p>
                  <div className="flex items-center gap-2.5">
                    <Avatar className="size-8"><AvatarFallback className="bg-muted text-xs font-semibold">{initials(selected.customer)}</AvatarFallback></Avatar>
                    <div><p className="text-sm font-medium">{selected.customer}</p><p className="text-muted-foreground text-xs">{selected.channel}</p></div>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="mb-2 text-sm font-semibold">Line Item</p>
                  <dl className="flex flex-col gap-1.5 text-sm">
                    {[["Product", selected.product], ["SKU", selected.sku], ["Quantity", String(selected.qty)], ["Unit Price", `$${selected.unit}`], ["Total", orderTotal(selected)]].map(([label, value]) => (
                      <div key={label} className="flex justify-between"><dt className="text-muted-foreground">{label}</dt><dd className={label === "Total" ? "font-medium" : ""}>{value}</dd></div>
                    ))}
                  </dl>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="mb-2 text-sm font-semibold">Fulfillment</p>
                  <p className="text-sm">{selected.fulfillment}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-info" style={{ width: `${selected.progress}%` }} /></div>
                    <span className="text-muted-foreground text-xs tabular-nums">{selected.progress}%</span>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Dashboard7Block
