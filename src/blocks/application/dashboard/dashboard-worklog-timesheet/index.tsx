import { useMemo, useState } from "react"
import {
  CalendarDaysIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, CopyIcon, EllipsisIcon, FlameIcon,
  FolderOpenIcon, GlobeIcon, LinkIcon, MailIcon, PlusIcon, SearchIcon, Share2Icon, StarIcon,
  TrendingDownIcon, TrendingUpIcon, UserIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

type EntryType = "Client" | "Internal" | "Support"
type Entry = { hours: number; type: EntryType } | null

type Person = {
  name: string
  role: string
  initials: string
  target: number
  entries: Entry[]
}

const DAY_TYPES: Record<EntryType, { bar: string; text: string }> = {
  Client: { bar: "bg-success", text: "text-success" },
  Internal: { bar: "bg-info", text: "text-info" },
  Support: { bar: "bg-warning", text: "text-warning-foreground" },
}

const PEOPLE: Person[] = [
  { name: "Amara Ortiz", role: "Client delivery lead", initials: "AO", target: 32, entries: [{ hours: 6.5, type: "Client" }, { hours: 5.5, type: "Internal" }, { hours: 7, type: "Client" }, { hours: 6, type: "Client" }, { hours: 4.5, type: "Client" }, null, null] },
  { name: "Theo Mercer", role: "Platform engineer", initials: "TM", target: 40, entries: [{ hours: 8, type: "Client" }, { hours: 8, type: "Client" }, { hours: 7.5, type: "Client" }, { hours: 8, type: "Client" }, { hours: 8, type: "Client" }, null, null] },
  { name: "Lena Hoffman", role: "Content systems editor", initials: "LH", target: 30, entries: [{ hours: 5, type: "Internal" }, { hours: 4.5, type: "Client" }, { hours: 5, type: "Internal" }, { hours: 3.5, type: "Client" }, { hours: 4, type: "Client" }, null, null] },
  { name: "Iris Calder", role: "Design systems lead", initials: "IC", target: 32, entries: [{ hours: 6, type: "Client" }, { hours: 6.5, type: "Client" }, { hours: 6, type: "Internal" }, { hours: 6.5, type: "Client" }, { hours: 4, type: "Client" }, null, null] },
  { name: "Samir Vale", role: "Partner success manager", initials: "SV", target: 35, entries: [{ hours: 7, type: "Support" }, { hours: 7.5, type: "Support" }, { hours: 6.5, type: "Client" }, { hours: 8, type: "Client" }, { hours: 7, type: "Support" }, null, null] },
  { name: "Maya Chen", role: "Research lead", initials: "MC", target: 34, entries: [{ hours: 6, type: "Client" }, { hours: 7, type: "Client" }, { hours: 6.5, type: "Internal" }, { hours: 7, type: "Client" }, { hours: 5, type: "Client" }, null, null] },
  { name: "Owen Blake", role: "Backend engineer", initials: "OB", target: 40, entries: [{ hours: 8, type: "Client" }, { hours: 7, type: "Internal" }, { hours: 8, type: "Client" }, { hours: 8, type: "Client" }, { hours: 7.5, type: "Client" }, null, null] },
  { name: "Ravi Menon", role: "QA lead", initials: "RM", target: 36, entries: [{ hours: 7, type: "Client" }, { hours: 6, type: "Client" }, { hours: 7.5, type: "Client" }, { hours: 6.5, type: "Internal" }, { hours: 6, type: "Client" }, null, null] },
  { name: "Tessa Ford", role: "Copywriter", initials: "TF", target: 28, entries: [{ hours: 5, type: "Internal" }, { hours: 6, type: "Client" }, { hours: 5.5, type: "Client" }, { hours: 4.5, type: "Client" }, { hours: 4, type: "Internal" }, null, null] },
  { name: "Jonah Reed", role: "Delivery analyst", initials: "JR", target: 32, entries: [{ hours: 6.5, type: "Client" }, { hours: 6, type: "Client" }, { hours: 6.5, type: "Client" }, { hours: 5.5, type: "Internal" }, { hours: 6, type: "Client" }, null, null] },
]

const SUMMARY = [
  { label: "Account", icon: CopyIcon, value: "Northstar Commerce", sub: "Enterprise rollout", footer: <FlameIcon className="size-4 text-destructive" /> },
  { label: "Workspace", icon: GlobeIcon, value: "portal.northstar.io", sub: "Requests: 124k/day", footer: <Badge variant="info-light" radius="full" className="border-dashed">Running</Badge> },
  { label: "Next Review", icon: CalendarDaysIcon, value: "Apr 3, 2026", sub: "Client steering", footer: <AvatarGroup><Avatar size="sm"><AvatarFallback>AO</AvatarFallback></Avatar><Avatar size="sm"><AvatarFallback>TM</AvatarFallback></Avatar><AvatarGroupCount className="size-6 text-[10px]">+1</AvatarGroupCount></AvatarGroup> },
  { label: "Owner", icon: UserIcon, value: "Amara Ortiz", sub: "Delivery lead", footer: <Avatar size="sm"><AvatarFallback>AO</AvatarFallback></Avatar> },
]

function formatHours(hours: number) {
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  return m === 0 ? `${h}h` : `${h}h ${m}m`
}

function totalOf(person: Person) {
  return person.entries.reduce((sum, entry) => sum + (entry?.hours ?? 0), 0)
}

function formatWeek(start: number) {
  const startDate = new Date(start)
  const endDate = new Date(start + 6 * 86400000)
  const startMonth = startDate.toLocaleString("en-US", { month: "short", timeZone: "UTC" })
  const endMonth = endDate.toLocaleString("en-US", { month: "short", timeZone: "UTC" })
  return startMonth === endMonth
    ? `${startMonth} ${startDate.getUTCDate()} - ${endDate.getUTCDate()}`
    : `${startMonth} ${startDate.getUTCDate()} - ${endMonth} ${endDate.getUTCDate()}`
}

function dayLabel(start: number, index: number) {
  return new Date(start + index * 86400000).toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" })
}

const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export function DashboardWorklogTimesheetBlock() {
  const [tab, setTab] = useState("overview")
  const [people, setPeople] = useState(PEOPLE)
  const [query, setQuery] = useState("")
  const [personFilter, setPersonFilter] = useState("all")
  const [timeFilter, setTimeFilter] = useState("all")
  const [billableFilter, setBillableFilter] = useState("all")
  const [weekStart, setWeekStart] = useState(() => Date.UTC(2026, 2, 23))
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState("5")
  const [logOpen, setLogOpen] = useState(false)
  const [log, setLog] = useState({ person: PEOPLE[0].name, day: "0", hours: "2", type: "Client" as EntryType })

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return people.filter((person) => {
      const total = totalOf(person)
      const pct = (total / person.target) * 100
      const matchesQuery = !q || `${person.name} ${person.role}`.toLowerCase().includes(q)
      const matchesPerson = personFilter === "all" || person.name === personFilter
      const matchesTime = timeFilter === "all" || (timeFilter === "under" && pct < 90) || (timeFilter === "ontrack" && pct >= 90 && pct <= 100) || (timeFilter === "over" && pct > 100)
      const matchesBillable = billableFilter === "all" || person.entries.some((entry) => entry?.type === billableFilter)
      return matchesQuery && matchesPerson && matchesTime && matchesBillable
    })
  }, [people, query, personFilter, timeFilter, billableFilter])

  const pageSize = Number(perPage)
  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize))
  const safePage = Math.min(page, pageCount)
  const visible = rows.slice((safePage - 1) * pageSize, safePage * pageSize)

  const submitLog = (event: React.FormEvent) => {
    event.preventDefault()
    const hours = Number(log.hours)
    if (!Number.isFinite(hours) || hours <= 0) return
    setPeople((prev) => prev.map((person) => person.name === log.person
      ? { ...person, entries: person.entries.map((entry, index) => index === Number(log.day) ? { hours, type: log.type } : entry) }
      : person))
    setLogOpen(false)
  }

  const worklogs = (
    <Card className="gap-0 py-0">
      <div className="flex flex-wrap items-start justify-between gap-3 px-4 pt-4 pb-3">
        <div>
          <h2 className="font-heading text-base font-semibold">Worklogs</h2>
          <p className="text-xs text-muted-foreground">Weekly client delivery hours</p>
        </div>
        <Dialog open={logOpen} onOpenChange={setLogOpen}>
          <DialogTrigger asChild><Button><PlusIcon /> New Log</Button></DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>New time log</DialogTitle>
              <DialogDescription>Add or replace a tracked day for a team member.</DialogDescription>
            </DialogHeader>
            <form onSubmit={submitLog} className="grid gap-3">
              <div className="grid gap-1.5">
                <Label>Person</Label>
                <Select value={log.person} onValueChange={(value) => setLog((prev) => ({ ...prev, person: value }))}>
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>{people.map((person) => <SelectItem key={person.name} value={person.name}>{person.name}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <Label>Day</Label>
                  <Select value={log.day} onValueChange={(value) => setLog((prev) => ({ ...prev, day: value }))}>
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>{DAY_NAMES.map((day, index) => <SelectItem key={day} value={String(index)}>{day}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="log-hours">Hours</Label>
                  <Input id="log-hours" type="number" min="0" max="12" step="0.5" value={log.hours} onChange={(e) => setLog((prev) => ({ ...prev, hours: e.target.value }))} />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label>Billable status</Label>
                <Select value={log.type} onValueChange={(value) => setLog((prev) => ({ ...prev, type: value as EntryType }))}>
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>{(Object.keys(DAY_TYPES) as EntryType[]).map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <DialogFooter><Button type="submit">Save log</Button></DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-y px-4 py-2">
        <InputGroup className="w-full max-w-52 bg-background">
          <InputGroupAddon><SearchIcon /></InputGroupAddon>
          <InputGroupInput value={query} onChange={(e) => { setQuery(e.target.value); setPage(1) }} placeholder="Search people..." aria-label="Search people" />
        </InputGroup>
        <Select value={personFilter} onValueChange={(value) => { setPersonFilter(value); setPage(1) }}>
          <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">People</SelectItem>
            {people.map((person) => <SelectItem key={person.name} value={person.name}>{person.name}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={timeFilter} onValueChange={(value) => { setTimeFilter(value); setPage(1) }}>
          <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tracked time</SelectItem>
            <SelectItem value="under">Under target</SelectItem>
            <SelectItem value="ontrack">On target</SelectItem>
            <SelectItem value="over">Over target</SelectItem>
          </SelectContent>
        </Select>
        <Select value={billableFilter} onValueChange={(value) => { setBillableFilter(value); setPage(1) }}>
          <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Billable status</SelectItem>
            {(Object.keys(DAY_TYPES) as EntryType[]).map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}
          </SelectContent>
        </Select>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="outline" size="icon-sm" className="bg-background" onClick={() => setWeekStart((start) => start - 7 * 86400000)} aria-label="Previous week"><ChevronLeftIcon /></Button>
          <span className="min-w-24 px-1 text-center text-sm font-medium">{formatWeek(weekStart)}</span>
          <Button variant="ghost" size="icon-sm" aria-label="Pick week"><CalendarDaysIcon /></Button>
          <Button variant="outline" size="icon-sm" className="bg-background" onClick={() => setWeekStart((start) => start + 7 * 86400000)} aria-label="Next week"><ChevronRightIcon /></Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-52">People</TableHead>
            {DAY_NAMES.map((_, index) => <TableHead key={index} className="text-center">{dayLabel(weekStart, index)}</TableHead>)}
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visible.length === 0 ? (
            <TableRow><TableCell colSpan={9} className="h-24 text-center text-muted-foreground">No worklogs match your filters.</TableCell></TableRow>
          ) : visible.map((person) => {
            const total = totalOf(person)
            const pct = Math.round((total / person.target) * 100)
            return (
              <TableRow key={person.name}>
                <TableCell>
                  <div className="flex items-center gap-2.5">
                    <Avatar><AvatarFallback>{person.initials}</AvatarFallback></Avatar>
                    <div className="leading-tight">
                      <div className="text-sm font-medium">{person.name}</div>
                      <div className="text-muted-foreground text-xs">{person.role}</div>
                    </div>
                  </div>
                </TableCell>
                {person.entries.map((entry, index) => (
                  <TableCell key={index} className="align-top">
                    {entry ? (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-sm font-medium">{formatHours(entry.hours)}</span>
                        <div className="bg-muted h-1 w-14 overflow-hidden rounded-full">
                          <div className={cn("h-full rounded-full", DAY_TYPES[entry.type].bar)} style={{ width: `${Math.min(100, (entry.hours / 8) * 100)}%` }} />
                        </div>
                        <span className={cn("text-xs", DAY_TYPES[entry.type].text)}>{entry.type}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-1.5 text-muted-foreground">
                        <span className="text-sm">-</span>
                        <div className="bg-muted h-1 w-14 rounded-full" />
                        <span className="text-xs">Off</span>
                      </div>
                    )}
                  </TableCell>
                ))}
                <TableCell className="text-right">
                  <div className="text-sm font-semibold">{formatHours(total)}</div>
                  <div className={cn("flex items-center justify-end gap-1 text-xs", pct >= 90 ? "text-success" : "text-warning-foreground")}>
                    {pct >= 90 ? <TrendingUpIcon className="size-3" /> : <TrendingDownIcon className="size-3" />}
                    {pct}%
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-2.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <Select value={perPage} onValueChange={(value) => { setPerPage(value); setPage(1) }}>
            <SelectTrigger size="sm" className="w-16 bg-background"><SelectValue /></SelectTrigger>
            <SelectContent>{["5", "10"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <span>{rows.length === 0 ? "0 - 0 of 0" : `${(safePage - 1) * pageSize + 1} - ${Math.min(safePage * pageSize, rows.length)} of ${rows.length}`}</span>
          <Button variant="outline" size="icon-sm" className="bg-background" disabled={safePage <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} aria-label="Previous page"><ChevronDownIcon className="rotate-90" /></Button>
          <Button variant="outline" size="icon-sm" className="bg-background" disabled={safePage >= pageCount} onClick={() => setPage((p) => Math.min(pageCount, p + 1))} aria-label="Next page"><ChevronDownIcon className="-rotate-90" /></Button>
        </div>
      </div>
    </Card>
  )

  const emptyTab = (title: string, description: string, primary: string, secondary: string) => (
    <div className="flex min-h-[420px] items-center justify-center">
      <Empty className="border-0">
        <EmptyHeader>
          <EmptyMedia>
            <span className="relative block size-16">
              <FolderOpenIcon className="text-muted-foreground/30 absolute -top-2 -left-3 size-12" strokeWidth={1.2} />
              <FolderOpenIcon className="text-muted-foreground/50 absolute -top-1 -left-1.5 size-12" strokeWidth={1.2} />
              <FolderOpenIcon className="text-foreground absolute top-0 left-0 size-12" strokeWidth={1.2} />
            </span>
          </EmptyMedia>
          <EmptyTitle className="text-lg font-semibold">{title}</EmptyTitle>
          <EmptyDescription>{description}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>{primary}</Button>
          <Button variant="outline" className="bg-background">{secondary}</Button>
        </EmptyContent>
      </Empty>
    </div>
  )

  return (
    <div className="min-h-svh bg-background px-4 py-6 text-foreground sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Delivery Board</h1>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <FolderOpenIcon className="size-4" />
              <a href="#" className="hover:text-foreground transition-colors">Accounts</a>
              <ChevronRightIcon className="size-3.5" />
              <FolderOpenIcon className="size-4" />
              <a href="#" className="hover:text-foreground transition-colors">Delivery</a>
              <ChevronRightIcon className="size-3.5" />
              <span className="text-foreground">Northstar Rollout</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" aria-label="Search board"><SearchIcon /></Button>
            <Button variant="ghost" size="icon" aria-label="Star board"><StarIcon /></Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Board actions"><EllipsisIcon /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem><Share2Icon /> Share</DropdownMenuItem>
                <DropdownMenuItem><LinkIcon /> Copy link</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><MailIcon /> Weekly digest</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab}>
          <div className="flex flex-wrap items-end justify-between gap-3 border-b">
            <TabsList variant="line" className="h-auto gap-4">
              {[["overview", "Overview"], ["worklog", "Worklog"], ["files", "Files"], ["reports", "Reports"]].map(([value, label]) => (
                <TabsTrigger key={value} value={value} className="h-8 px-0 pb-2 text-sm">{label}</TabsTrigger>
              ))}
            </TabsList>
            <div className="flex items-center gap-2 pb-2">
              <Button size="icon" className="rounded-full" aria-label="Invite collaborator"><PlusIcon /></Button>
              <AvatarGroup>
                <Avatar><AvatarFallback>AO</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>TM</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>LH</AvatarFallback></Avatar>
                <AvatarGroupCount>+6</AvatarGroupCount>
              </AvatarGroup>
            </div>
          </div>

          <TabsContent value="overview" className="mt-3 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {SUMMARY.map((card) => {
                const Icon = card.icon
                return (
                  <Card key={card.label} className="h-32 justify-between gap-2 py-4">
                    <div className="flex items-center justify-between px-4 text-sm text-muted-foreground">
                      <span>{card.label}</span>
                      <Icon className="size-4" aria-hidden />
                    </div>
                    <div className="flex items-end justify-between gap-3 px-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{card.value}</p>
                        <p className="text-muted-foreground truncate text-xs">{card.sub}</p>
                      </div>
                      {card.footer}
                    </div>
                  </Card>
                )
              })}
            </div>
            {worklogs}
          </TabsContent>
          <TabsContent value="worklog" className="mt-3">{worklogs}</TabsContent>
          <TabsContent value="files" className="mt-3">{emptyTab("No Files", "Attach files for this rollout.", "Upload Files", "Connect Drive")}</TabsContent>
          <TabsContent value="reports" className="mt-3">{emptyTab("No Reports", "Generate a report for this rollout.", "New Report", "Schedule digest")}</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default DashboardWorklogTimesheetBlock
