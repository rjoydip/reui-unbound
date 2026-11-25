import { useMemo, useState } from "react"
import {
  BoxIcon, CalendarIcon, CheckCircle2Icon, ChevronDownIcon, CircleAlertIcon, CircleDotIcon, DownloadIcon,
  EllipsisIcon, FilterIcon, InfoIcon, PauseIcon, PlusIcon, SearchIcon, ShieldCheckIcon, TrendingDownIcon,
  TrendingUpIcon, TriangleAlertIcon, TruckIcon,
} from "lucide-react"
import { Cell, Pie, PieChart } from "recharts"

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { IconTile } from "@/components/kit/icon-tile"
import { Badge } from "@/components/kit/badge"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

const KPIS = [
  { kicker: "Outbound", label: "Orders Ready", metric: "Ready Volume", value: "18,797", delta: "+4.0%", note: "(+731)", up: true, icon: BoxIcon, tone: "bg-foreground text-background" },
  { kicker: "Promise", label: "Same-Day SLA", metric: "Service Level", value: "94.6%", delta: "+0.8 pts", note: "(from 93.8%)", up: true, icon: TruckIcon, tone: "bg-info text-white" },
  { kicker: "Inventory", label: "Stock Risk", metric: "Blocked SKUs", value: "34", delta: "5 fewer", note: "(since May 11)", up: true, icon: TriangleAlertIcon, tone: "bg-warning text-white" },
  { kicker: "Policy", label: "AI Autopilot", metric: "Auto Resolved", value: "70.2%", delta: "+4.6 pts", note: "(from 65.6%)", up: true, icon: ShieldCheckIcon, tone: "bg-teal-600 text-white" },
]

const ALLOCATION = {
  Week: { pct: 86, delta: "+5.8%", queued: "3,840 orders", bars: 34 },
  Month: { pct: 74, delta: "+9.2%", queued: "6 facilities", bars: 29 },
  Year: { pct: 81, delta: "+7.4%", queued: "42,800 orders", bars: 32 },
}

const FLOW = {
  Week: { total: "18.4k", rows: [["Autopilot", "9.1k", "49.5%"], ["Copilot", "5.2k", "28.3%"], ["Manual", "2.8k", "15.2%"]] },
  Month: { total: "74.2k", rows: [["Autopilot", "36.8k", "49.6%"], ["Copilot", "21.0k", "28.3%"], ["Manual", "11.3k", "15.2%"]] },
  Year: { total: "912k", rows: [["Autopilot", "451k", "49.5%"], ["Copilot", "258k", "28.3%"], ["Manual", "139k", "15.2%"]] },
} as const

const FLOW_COLORS = ["var(--color-success)", "var(--color-info)", "var(--color-warning)", "var(--muted-foreground)"]
const flowConfig = { autopilot: { label: "Autopilot", color: "var(--color-success)" }, copilot: { label: "Copilot", color: "var(--color-info)" }, manual: { label: "Manual", color: "var(--color-warning)" }, other: { label: "Other", color: "var(--muted-foreground)" } } satisfies ChartConfig

type Order = {
  id: string
  customer: string
  lane: string
  stage: string
  automation: string
  value: string
  state: "Cleared" | "Review" | "Watch"
}

const ORDERS: Order[] = [
  { id: "FUL-8841", customer: "Northstar Commerce", lane: "West / Dock B", stage: "Staged", automation: "Autopilot", value: "$18,240", state: "Cleared" },
  { id: "FUL-8837", customer: "Harbor & Pine", lane: "East / Zone 6", stage: "Repriced", automation: "Copilot", value: "$9,480", state: "Review" },
  { id: "FUL-8834", customer: "Cedarline Supply", lane: "Central / Hold", stage: "Isolated", automation: "Manual", value: "$4,120", state: "Watch" },
  { id: "FUL-8829", customer: "Atlas Provisions", lane: "South / Dock A", stage: "Picking", automation: "Autopilot", value: "$21,760", state: "Cleared" },
  { id: "FUL-8822", customer: "Lumen Goods", lane: "West / Zone 2", stage: "Split shipment", automation: "Copilot", value: "$7,850", state: "Review" },
  { id: "FUL-8818", customer: "Fieldstone Co.", lane: "North / Dock C", stage: "Awaiting stock", automation: "Manual", value: "$3,310", state: "Watch" },
  { id: "FUL-8811", customer: "Marlowe Outfitters", lane: "East / Dock D", stage: "Packed", automation: "Autopilot", value: "$12,940", state: "Cleared" },
  { id: "FUL-8806", customer: "Ridgeway Market", lane: "Central / Zone 4", stage: "Carrier hold", automation: "Copilot", value: "$6,275", state: "Review" },
]

const STATUS_VARIANT = { Cleared: "success-light", Review: "info-light", Watch: "warning-light" } as const

const RANGES = ["Today", "Last 7 days", "Last 30 days", "May 12, 2026 - Jun 10, 2026"]

function Delta({ up = true, children }: { up?: boolean; children: React.ReactNode }) {
  const Icon = up ? TrendingUpIcon : TrendingDownIcon
  return (
    <span className={cn("inline-flex items-center gap-1 text-xs", up ? "text-success" : "text-warning-foreground")}>
      <Icon className="size-3" aria-hidden />
      {children}
    </span>
  )
}

export function DashboardFulfillmentExceptionsBlock() {
  const [range, setRange] = useState(RANGES[3])
  const [shift, setShift] = useState("Today")
  const [allocationPeriod, setAllocationPeriod] = useState<"Week" | "Month" | "Year">("Week")
  const [flowPeriod, setFlowPeriod] = useState<"Week" | "Month" | "Year">("Week")
  const [query, setQuery] = useState("")
  const [states, setStates] = useState<Order["state"][]>([])
  const [selected, setSelected] = useState<string[]>([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState("5")

  const allocation = ALLOCATION[allocationPeriod]
  const flow = FLOW[flowPeriod]
  const flowRows = flow.rows.map(([name, value, pct]) => ({ name, value, pct, amount: Number(value.replace("k", "")) }))
  const flowData: { name: string; value: number }[] = flowRows.map((row) => ({ name: row.name, value: row.amount }))
  flowData.push({ name: "other", value: Math.max(0, parseFloat(flow.total) - flowRows.reduce((sum, row) => sum + row.amount, 0)) })

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ORDERS.filter((order) => {
      const matchesQuery = !q || [order.id, order.customer, order.lane, order.stage].some((v) => v.toLowerCase().includes(q))
      const matchesState = states.length === 0 || states.includes(order.state)
      return matchesQuery && matchesState
    })
  }, [query, states])

  const pageSize = Number(perPage)
  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize))
  const safePage = Math.min(page, pageCount)
  const visible = rows.slice((safePage - 1) * pageSize, safePage * pageSize)
  const allVisibleSelected = visible.length > 0 && visible.every((row) => selected.includes(row.id))
  const toggleAll = () =>
    setSelected((prev) => (allVisibleSelected ? prev.filter((id) => !visible.some((r) => r.id === id)) : [...new Set([...prev, ...visible.map((r) => r.id)])]))
  const toggleState = (state: Order["state"]) =>
    setStates((prev) => (prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]))

  return (
    <div className="min-h-svh bg-background px-4 py-6 text-foreground sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Operations</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Fulfillment</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="bg-background font-normal">
                  {range}
                  <CalendarIcon className="text-muted-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56 p-1">
                {RANGES.map((preset) => (
                  <Button
                    key={preset}
                    variant="ghost"
                    className={cn("w-full justify-start font-normal", preset === range && "bg-muted")}
                    onClick={() => setRange(preset)}
                  >
                    {preset}
                  </Button>
                ))}
              </PopoverContent>
            </Popover>
            <Button>
              <DownloadIcon />
              Export
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {KPIS.map((kpi) => {
            const Icon = kpi.icon
            return (
              <Card key={kpi.metric} className="gap-3 py-4">
                <div className="flex items-center gap-2.5 px-4">
                  <IconTile variant="solid" size="sm" className={kpi.tone}>
                    <Icon />
                  </IconTile>
                  <div className="min-w-0">
                    <p className="text-xs leading-tight text-muted-foreground">{kpi.kicker}</p>
                    <p className="truncate text-sm font-medium">{kpi.label}</p>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-xs text-muted-foreground">{kpi.metric}</p>
                  <div className="mt-0.5 flex flex-wrap items-baseline gap-x-1.5">
                    <span className="text-xl font-semibold tracking-tight">{kpi.value}</span>
                    <Delta up={kpi.up}>{kpi.delta}</Delta>
                    <span className="text-muted-foreground text-xs">{kpi.note}</span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-3 lg:grid-cols-12">
          <Card className="gap-0 py-0 lg:col-span-7">
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <h2 className="font-heading text-base font-semibold">Shift Performance</h2>
              <Select value={shift} onValueChange={setShift}>
                <SelectTrigger className="w-28 bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Today", "Week", "Month"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="px-4">
              <div className="grid grid-cols-3 gap-4 pb-4">
                {[["495", "Orders Cleared", "+5.8%"], ["91.3%", "SLA Recovery", "+2.2 pts"], ["$133.8k", "Risk Exposure", "-9.4%"]].map(([value, label, delta], i) => (
                  <div key={label}>
                    <p className="text-xl font-semibold tracking-tight">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <Delta up={i !== 2}>{delta}</Delta>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex items-center justify-between pt-3 pb-1">
                <span className="text-sm font-medium">Pipeline Progress</span>
                <span className="text-sm font-medium">76%</span>
              </div>
              <Progress value={76} className="pb-3" />
              <Separator />
              <div className="pt-3">
                <p className="text-sm font-medium">Recent Activity</p>
                <div className="mt-2 space-y-2.5">
                  {[
                    ["Released priority wave to dock B", "Cleared", CheckCircle2Icon, "text-success"],
                    ["Carrier mix repriced for zone 6", "Review", CircleDotIcon, "text-info"],
                    ["Inventory hold isolated to 3 SKUs", "Watch", CircleAlertIcon, "text-warning-foreground"],
                  ].map(([text, badge, Icon, tone]) => {
                    const ActivityIcon = Icon as typeof CheckCircle2Icon
                    return (
                      <div key={text as string} className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2 text-sm">
                          <ActivityIcon className={cn("size-4", tone as string)} aria-hidden />
                          {text as string}
                        </span>
                        <Badge variant={(badge === "Cleared" ? "success-light" : badge === "Review" ? "primary-light" : "warning-light")} radius="full" className="border-dashed">
                          {badge as string}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-4 py-4">
              <Button variant="outline" className="flex-1 bg-background"><PauseIcon /> Schedule</Button>
              <Button className="flex-1">Full Report</Button>
            </div>
          </Card>

          <div className="flex flex-col gap-3 lg:col-span-5">
            <Card className="gap-0 py-0">
              <div className="flex items-center justify-between gap-3 px-4 pt-4">
                <div className="flex items-center gap-1.5">
                  <h2 className="font-heading text-base font-semibold">Capacity Allocation</h2>
                  <InfoIcon className="size-3.5 text-muted-foreground" aria-label="Capacity allocation details" />
                </div>
                <Tabs value={allocationPeriod} onValueChange={(v) => setAllocationPeriod(v as typeof allocationPeriod)}>
                  <TabsList className="h-7">
                    {["Week", "Month", "Year"].map((option) => <TabsTrigger key={option} value={option} className="px-2 text-xs">{option}</TabsTrigger>)}
                  </TabsList>
                </Tabs>
              </div>
              <div className="px-4 pb-3">
                <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
                  <span className="text-2xl font-semibold tracking-tight">{allocation.pct}%</span>
                  <Delta>{allocation.delta}</Delta>
                  <span className="text-xs text-muted-foreground">vs labor plan</span>
                </div>
                <div className="mt-3 flex h-7 items-end gap-[3px]" aria-label={`${allocation.pct}% of labor capacity allocated`}>
                  {Array.from({ length: 40 }).map((_, i) => (
                    <span key={i} className={cn("h-7 flex-1 rounded-full", i < allocation.bars ? "bg-success" : "bg-muted")} />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Queued Orders: <span className="text-foreground font-medium">{allocation.queued}</span></p>
                  <div className="flex items-center gap-2">
                    <AvatarGroup>
                      {["AR", "TM", "LH", "IC"].map((initials) => (
                        <Avatar key={initials} size="sm"><AvatarFallback>{initials}</AvatarFallback></Avatar>
                      ))}
                      <AvatarGroupCount className="size-6 text-[10px]">+2</AvatarGroupCount>
                    </AvatarGroup>
                    <span className="text-xs text-muted-foreground">6 Members</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="gap-0 py-0">
              <div className="flex items-center justify-between gap-3 px-4 pt-4">
                <div className="flex items-center gap-1.5">
                  <h2 className="font-heading text-base font-semibold">Decision Flow</h2>
                  <InfoIcon className="size-3.5 text-muted-foreground" aria-label="Decision flow details" />
                </div>
                <Tabs value={flowPeriod} onValueChange={(v) => setFlowPeriod(v as typeof flowPeriod)}>
                  <TabsList className="h-7">
                    {["Week", "Month", "Year"].map((option) => <TabsTrigger key={option} value={option} className="px-2 text-xs">{option}</TabsTrigger>)}
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex flex-col items-center gap-3 px-4 pb-4 pt-2 sm:flex-row">
                <div className="relative size-[132px] shrink-0">
                  <ChartContainer config={flowConfig} className="aspect-square size-[132px]">
                    <PieChart accessibilityLayer>
                      <Pie data={flowData} dataKey="value" nameKey="name" innerRadius={44} outerRadius={62} startAngle={90} endAngle={-270} stroke="none" paddingAngle={2}>
                        {flowData.map((entry, index) => <Cell key={entry.name} fill={FLOW_COLORS[index]} />)}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs text-muted-foreground">Flow</span>
                    <span className="text-sm font-semibold">{flow.total}</span>
                  </div>
                </div>
                <div className="w-full flex-1 space-y-2.5">
                  {flow.rows.map(([label, value, pct], i) => (
                    <div key={label} className="flex items-center gap-2 text-sm">
                      <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: FLOW_COLORS[i] }} />
                      <span className="w-full">{label}</span>
                      <span className="font-semibold tabular-nums">{value}</span>
                      <span className="w-11 text-right text-xs text-muted-foreground tabular-nums">{pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="gap-0 py-0">
          <div className="flex flex-wrap items-start justify-between gap-3 px-4 pt-4 pb-3">
            <div>
              <h2 className="font-heading text-base font-semibold">Exception Queue</h2>
              <p className="text-xs text-muted-foreground">{rows.length} of {ORDERS.length} fulfillment records</p>
            </div>
            <Button><PlusIcon /> Add exception</Button>
          </div>
          <div className="flex flex-wrap items-center gap-2 border-y px-4 py-2">
            <InputGroup className="w-full max-w-64 bg-background">
              <InputGroupAddon><SearchIcon /></InputGroupAddon>
              <InputGroupInput
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1) }}
                placeholder="Search orders..."
                aria-label="Search orders"
              />
            </InputGroup>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-background">
                  <FilterIcon /> Status <ChevronDownIcon className="text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                <DropdownMenuLabel>Filter by state</DropdownMenuLabel>
                {(["Cleared", "Review", "Watch"] as const).map((state) => (
                  <DropdownMenuCheckboxItem key={state} checked={states.includes(state)} onCheckedChange={() => toggleState(state)}>
                    {state}
                  </DropdownMenuCheckboxItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => { setStates([]); setQuery(""); setPage(1) }}>Clear filters</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {states.length > 0 || query ? (
              <Button variant="ghost" size="sm" onClick={() => { setStates([]); setQuery(""); setPage(1) }}>Clear filters</Button>
            ) : null}
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-background"><EllipsisIcon /> Actions</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuItem>Export CSV</DropdownMenuItem>
                  <DropdownMenuItem>Assign reviewer</DropdownMenuItem>
                  <DropdownMenuItem>Escalate queue</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-9">
                  <Checkbox checked={allVisibleSelected} onCheckedChange={toggleAll} aria-label="Select all visible orders" />
                </TableHead>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Lane</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Automation</TableHead>
                <TableHead className="text-right">Value</TableHead>
                <TableHead>State</TableHead>
                <TableHead className="w-9" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {visible.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="h-24 text-center text-muted-foreground">
                    No fulfillment exceptions match your filters.
                  </TableCell>
                </TableRow>
              ) : visible.map((order) => (
                <TableRow key={order.id} data-state={selected.includes(order.id) ? "selected" : undefined}>
                  <TableCell>
                    <Checkbox
                      checked={selected.includes(order.id)}
                      onCheckedChange={() => setSelected((prev) => prev.includes(order.id) ? prev.filter((id) => id !== order.id) : [...prev, order.id])}
                      aria-label={`Select ${order.id}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className="text-muted-foreground">{order.lane}</TableCell>
                  <TableCell>{order.stage}</TableCell>
                  <TableCell className="text-muted-foreground">{order.automation}</TableCell>
                  <TableCell className="text-right tabular-nums">{order.value}</TableCell>
                  <TableCell>
                    <Badge variant={STATUS_VARIANT[order.state]} radius="full" className="border-dashed">{order.state}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-sm" aria-label={`Actions for ${order.id}`}>
                          <EllipsisIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-36">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Notify</DropdownMenuItem>
                        <DropdownMenuItem>Escalate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-2.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Rows per page</span>
              <Select value={perPage} onValueChange={(v) => { setPerPage(v); setPage(1) }}>
                <SelectTrigger size="sm" className="w-16 bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["5", "10"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span>{rows.length === 0 ? "0 - 0 of 0" : `${(safePage - 1) * pageSize + 1} - ${Math.min(safePage * pageSize, rows.length)} of ${rows.length}`}</span>
              <Button variant="outline" size="icon-sm" className="bg-background" disabled={safePage <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} aria-label="Previous page">
                <ChevronDownIcon className="rotate-90" />
              </Button>
              <Button variant="outline" size="icon-sm" className="bg-background" disabled={safePage >= pageCount} onClick={() => setPage((p) => Math.min(pageCount, p + 1))} aria-label="Next page">
                <ChevronDownIcon className="-rotate-90" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DashboardFulfillmentExceptionsBlock
