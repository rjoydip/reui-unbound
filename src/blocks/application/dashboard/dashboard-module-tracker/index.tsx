import { useMemo, useState } from "react"
import {
  ArrowDownWideNarrowIcon,
  ArrowUpIcon,
  BoxIcon,
  ChevronDownIcon,
  EllipsisIcon,
  FileTextIcon,
  FilterIcon,
  HomeIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
  UserPlusIcon,
} from "lucide-react"
import { Area, AreaChart } from "recharts"

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/kit/badge"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "cn"

type ModuleStatus = "In Progress" | "Planned" | "Backlog"

type ModuleRecord = {
  name: string
  area: string
  owner: string
  initials: string
  domain: string
  window: string
  windowDays: number
  startDay: number
  progress: number
  tasks: string
  status: ModuleStatus
  favorite?: boolean
  draft?: boolean
}

const MODULES: ModuleRecord[] = [
  { name: "Access Matrix", area: "System", owner: "Nora Vale", initials: "NV", domain: "admin.reui.io", window: "Apr 22 - May 06", windowDays: 14, startDay: 22, progress: 42, tasks: "11/26", status: "In Progress", favorite: true },
  { name: "API Console", area: "Feature", owner: "Lena Wade", initials: "LW", domain: "api.reui.io", window: "Apr 12 - Apr 26", windowDays: 14, startDay: 12, progress: 91, tasks: "29/32", status: "In Progress", favorite: true },
  { name: "Block Library", area: "Feature", owner: "Sofia Romero", initials: "SR", domain: "blocks.reui.io", window: "Apr 24 - May 10", windowDays: 16, startDay: 24, progress: 33, tasks: "10/30", status: "Planned" },
  { name: "Data Retention", area: "System", owner: "Kenji Tan", initials: "KT", domain: "privacy.reui.io", window: "Apr 27 - May 14", windowDays: 17, startDay: 27, progress: 22, tasks: "7/32", status: "Backlog" },
  { name: "Docs Portal", area: "Area", owner: "Nina Santos", initials: "NS", domain: "docs.reui.io", window: "Apr 21 - May 05", windowDays: 14, startDay: 21, progress: 0, tasks: "2/14", status: "In Progress" },
  { name: "Help Center", area: "Area", owner: "Sofia Romero", initials: "SR", domain: "help.reui.io", window: "Apr 23 - May 11", windowDays: 18, startDay: 23, progress: 39, tasks: "9/23", status: "Planned" },
  { name: "Integration Hub", area: "Area", owner: "Kenji Tan", initials: "KT", domain: "integrations.reui.io", window: "Apr 20 - May 04", windowDays: 14, startDay: 20, progress: 58, tasks: "14/24", status: "In Progress" },
  { name: "License Billing", area: "Feature", owner: "Priya Shah", initials: "PS", domain: "billing.reui.io", window: "Apr 18 - May 02", windowDays: 15, startDay: 18, progress: 64, tasks: "16/25", status: "In Progress" },
  { name: "Webhooks", area: "System", owner: "Nora Vale", initials: "NV", domain: "hooks.reui.io", window: "Apr 19 - May 03", windowDays: 15, startDay: 19, progress: 71, tasks: "22/31", status: "In Progress" },
  { name: "Usage Analytics", area: "Area", owner: "Priya Shah", initials: "PS", domain: "usage.reui.io", window: "Apr 25 - May 12", windowDays: 18, startDay: 25, progress: 47, tasks: "8/17", status: "Planned" },
]

const SPARKS = {
  revenue: { values: [12, 14, 13, 16, 15, 18, 17, 21, 19, 18, 22, 21, 25, 24], color: "var(--color-success)" },
  signups: { values: [18, 22, 20, 25, 24, 23, 27, 26, 31, 28, 27, 30, 29, 32], color: "var(--color-info)" },
  licenses: { values: [10, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 15, 15, 16], color: "var(--color-violet-500)" },
}

function Sparkline({ id, values, color, className }: { id: string; values: number[]; color: string; className?: string }) {
  const config = { value: { label: "Trend", color } } satisfies ChartConfig
  return (
    <ChartContainer config={config} className={cn("aspect-auto h-12 w-28 shrink-0", className)}>
      <AreaChart data={values.map((value, index) => ({ index, value }))} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id={`spark-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.28} />
            <stop offset="100%" stopColor={color} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="value" stroke={color} strokeWidth={1.5} fill={`url(#spark-${id})`} isAnimationActive={false} />
      </AreaChart>
    </ChartContainer>
  )
}

function ProgressRing({ value }: { value: number }) {
  const radius = 14
  const circumference = 2 * Math.PI * radius
  const color = value >= 70 ? "var(--color-success)" : value >= 40 ? "var(--color-warning)" : value === 0 ? "var(--muted-foreground)" : "var(--color-info)"
  return (
    <div className="relative size-9 shrink-0" aria-label={`${value}% complete`}>
      <svg viewBox="0 0 32 32" className="size-9 -rotate-90">
        <circle cx="16" cy="16" r={radius} fill="none" stroke="var(--muted)" strokeWidth="3" />
        <circle
          cx="16"
          cy="16"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - value / 100)}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-[10px] font-medium tabular-nums">{value}%</span>
    </div>
  )
}

const STATUS_META: Record<ModuleStatus, { dot: string }> = {
  "In Progress": { dot: "bg-warning" },
  Planned: { dot: "bg-info" },
  Backlog: { dot: "bg-muted-foreground" },
}

type SortKey = "Name" | "Window" | "Progress" | "Status"

export function DashboardModuleTrackerBlock() {
  const [modules, setModules] = useState(MODULES)
  const [query, setQuery] = useState("")
  const [statuses, setStatuses] = useState<ModuleStatus[]>([])
  const [sort, setSort] = useState<SortKey>("Name")

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return modules
      .filter((m) => {
        const matchesQuery = !q || [m.name, m.owner, m.domain, m.area].some((value) => value.toLowerCase().includes(q))
        const matchesStatus = statuses.length === 0 || statuses.includes(m.status)
        return matchesQuery && matchesStatus
      })
      .toSorted((a, b) => {
        if (sort === "Window") return a.startDay - b.startDay
        if (sort === "Progress") return b.progress - a.progress
        if (sort === "Status") return a.status.localeCompare(b.status)
        return a.name.localeCompare(b.name)
      })
  }, [modules, query, statuses, sort])

  const toggleStatus = (status: ModuleStatus) =>
    setStatuses((prev) => (prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]))

  const addModule = () =>
    setModules((prev) => [
      { name: "Untitled module", area: "Area", owner: "You", initials: "YO", domain: "new.reui.io", window: "Today - +14 days", windowDays: 14, startDay: 1, progress: 0, tasks: "0/14", status: "Backlog", draft: true },
      ...prev,
    ])

  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="bg-background/95 sticky top-0 z-20 border-b backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between gap-4 px-4 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList className="gap-2 text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="flex items-center gap-1.5 text-foreground">
                  <HomeIcon className="size-4" /> Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="flex items-center gap-1.5">
                  <BoxIcon className="size-4" /> ReUI
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-2">
            <AvatarGroup>
              {["AR", "TM"].map((initials) => (
                <Avatar key={initials} size="sm"><AvatarFallback>{initials}</AvatarFallback></Avatar>
              ))}
              <AvatarGroupCount>+8</AvatarGroupCount>
            </AvatarGroup>
            <Button variant="outline" className="bg-background"><UserPlusIcon /> Invite</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Workspace menu"><EllipsisIcon /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem>Team settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="flex-row items-center justify-between gap-3 px-5 py-5">
            <div className="min-w-0">
              <p className="text-sm font-medium">Revenue</p>
              <p className="mt-7 text-xs text-muted-foreground">reui.io, 28 days</p>
              <p className="text-2xl font-semibold tracking-tight">$62.4K</p>
            </div>
            <Sparkline id="revenue" values={SPARKS.revenue.values} color={SPARKS.revenue.color} />
          </Card>
          <Card className="flex-row items-center justify-between gap-3 px-5 py-5">
            <div className="min-w-0">
              <p className="text-sm font-medium">Signups</p>
              <p className="mt-7 text-xs text-muted-foreground">Last 28 days</p>
              <p className="text-2xl font-semibold tracking-tight">4,238</p>
            </div>
            <Sparkline id="signups" values={SPARKS.signups.values} color={SPARKS.signups.color} />
          </Card>
          <Card className="flex-row items-center justify-between gap-3 px-5 py-5">
            <div className="min-w-0">
              <p className="text-sm font-medium">Active Licenses</p>
              <p className="mt-7 text-xs text-muted-foreground">ReUI Cloud, 28 days</p>
              <p className="text-2xl font-semibold tracking-tight">3,297</p>
            </div>
            <Sparkline id="licenses" values={SPARKS.licenses.values} color={SPARKS.licenses.color} />
          </Card>
        </div>

        <Card className="gap-0 py-0">
          <div className="flex flex-wrap items-center gap-2 px-4 py-3">
            <div className="flex min-w-0 items-center gap-2 text-sm">
              <span className="size-3 rounded-[3px] bg-warning" aria-hidden />
              <Breadcrumb>
                <BreadcrumbList className="gap-1.5">
                  <BreadcrumbItem><BreadcrumbLink href="#">ReUI</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage className="flex items-center gap-1.5"><BoxIcon className="size-4" /> Modules</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <InputGroup className="w-48 bg-background">
                <InputGroupAddon><SearchIcon /></InputGroupAddon>
                <InputGroupInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." aria-label="Search modules" />
              </InputGroup>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-background">
                    <ArrowDownWideNarrowIcon /> {sort} <ChevronDownIcon className="text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-40">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuRadioGroup value={sort} onValueChange={(value) => setSort(value as SortKey)}>
                    {(["Name", "Window", "Progress", "Status"] as SortKey[]).map((option) => (
                      <DropdownMenuRadioItem key={option} value={option}>{option}</DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="bg-background"><FilterIcon /> Filters</Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-52 p-3">
                  <p className="text-muted-foreground mb-2 text-xs font-medium">Status</p>
                  <div className="space-y-2.5">
                    {(["Planned", "Backlog", "In Progress"] as ModuleStatus[]).map((status) => (
                      <label key={status} className="flex cursor-pointer items-center gap-2 text-sm">
                        <Checkbox checked={statuses.includes(status)} onCheckedChange={() => toggleStatus(status)} />
                        {status}
                      </label>
                    ))}
                  </div>
                  {statuses.length > 0 ? (
                    <Button variant="ghost" size="sm" className="mt-2 w-full" onClick={() => setStatuses([])}>Clear filters</Button>
                  ) : null}
                </PopoverContent>
              </Popover>
              <Button onClick={addModule}><PlusIcon /> Add Module</Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-32">Progress</TableHead>
                <TableHead>Module <ArrowUpIcon className="ml-1 inline size-3" aria-hidden /></TableHead>
                <TableHead>Window</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-28">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">No modules match your filters.</TableCell>
                </TableRow>
              ) : rows.map((module) => {
                const meta = STATUS_META[module.status]
                return (
                  <TableRow key={module.name + module.domain}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <ProgressRing value={module.progress} />
                        <div className="leading-tight">
                          <div className="text-sm font-medium">{module.progress}% ready</div>
                          <div className="text-muted-foreground text-xs">{module.tasks} tasks</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm font-medium">
                        {module.name}
                        {module.draft ? <Badge variant="secondary" size="sm" className="ml-1.5 align-middle">Draft</Badge> : null}
                      </div>
                      <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                        <span>{module.area}</span>
                        <span aria-hidden>•</span>
                        <Avatar size="sm" className="size-4"><AvatarFallback className="text-[8px]">{module.initials}</AvatarFallback></Avatar>
                        <span>{module.owner}</span>
                        <span aria-hidden>•</span>
                        <span>{module.domain}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{module.window}</div>
                      <div className="text-muted-foreground text-xs">{module.windowDays}-day window</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" radius="full" className="gap-1.5">
                        <span className={cn("size-1.5 rounded-full", meta.dot)} />
                        {module.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-0.5">
                        <Button variant="ghost" size="icon-sm" aria-label={`Open ${module.name}`}><FileTextIcon /></Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          aria-label={`${module.favorite ? "Unfavorite" : "Favorite"} ${module.name}`}
                          onClick={() => setModules((prev) => prev.map((m) => m.name === module.name ? { ...m, favorite: !m.favorite } : m))}
                        >
                          <StarIcon className={cn(module.favorite && "fill-warning text-warning-foreground")} />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon-sm" aria-label={`More options for ${module.name}`}><MoreHorizontalIcon /></Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-40">
                            <DropdownMenuItem>Open</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">Archive</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          <div className="text-muted-foreground flex items-center justify-between border-t px-4 py-2.5 text-xs">
            <span>{rows.length} of {modules.length} modules</span>
            <span>Updated 2 minutes ago</span>
          </div>
        </Card>
      </main>
    </div>
  )
}

export default DashboardModuleTrackerBlock
