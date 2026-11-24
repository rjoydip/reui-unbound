import { useState } from "react"
import { addDays, addMinutes, differenceInMinutes, format, setHours, startOfDay } from "date-fns"
import { BriefcaseIcon, CalendarDaysIcon, CheckSquareIcon, ChevronDownIcon, CircleDotIcon, MailIcon, PhoneIcon, PlusIcon, ShieldCheckIcon, Trash2Icon, UsersIcon } from "lucide-react"

import { EventCalendar, type EventCalendarRenderEventProps } from "@/components/kit/event-calendar/event-calendar"
import { EventCalendarContent } from "@/components/kit/event-calendar/~event-calendar-content"
import { EventCalendarNav, EventCalendarNavNext, EventCalendarNavPrev, EventCalendarNavToday, EventCalendarTitle, EventCalendarViewSwitcher } from "@/components/kit/event-calendar/~event-calendar-nav"
import type { CalendarEvent, EventCalendarOccurrence } from "@/components/kit/event-calendar/~event-calendar-types"
import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "cn"

const ANCHOR = new Date(2026, 0, 12)
const CATEGORIES = {
  deal: { label: "Deal Closing", color: "var(--color-orange-500)", icon: BriefcaseIcon },
  task: { label: "Task", color: "var(--color-slate-600)", icon: CheckSquareIcon },
  compliance: { label: "Compliance", color: "var(--color-violet-500)", icon: ShieldCheckIcon },
  call: { label: "Call", color: "var(--color-sky-500)", icon: PhoneIcon },
  meeting: { label: "Meeting", color: "var(--color-purple-500)", icon: UsersIcon },
  email: { label: "Email", color: "var(--color-emerald-500)", icon: MailIcon },
} as const
type Category = keyof typeof CATEGORIES
const CATS = Object.keys(CATEGORIES) as Category[]
const OWNERS = ["Mara Ellison", "Lena Brandt", "Nadia Faris", "Elin Dahl", "Arun Iyer", "Hugo Salas"]
const TONES = ["bg-orange-500/20 text-orange-700 dark:text-orange-300", "bg-sky-500/20 text-sky-700 dark:text-sky-300", "bg-violet-500/20 text-violet-700 dark:text-violet-300", "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"]
const initials = (name: string) => name.split(" ").map((part) => part[0]).join("")
const tone = (name: string) => TONES[[...name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % TONES.length]

interface DealData {
  category: Category
  owner: string
  counterparty?: string
  loanRef?: string
  workstream?: { label: string; done: number; total: number }
  attendees?: string[]
  covenant?: { clause: string; due: string; pass: number; fail: number }
}

const at = (day: number, hour: number, minute = 0) => addMinutes(setHours(addDays(startOfDay(ANCHOR), day), hour), minute)
function event(
  id: string, title: string, day: number, hour: number, minutes: number, data: DealData
): CalendarEvent<DealData> {
  const start = at(day, hour)
  return { id, title, start, end: addMinutes(start, minutes), color: CATEGORIES[data.category].color, data }
}
function allDay(id: string, title: string, day: number, data: DealData): CalendarEvent<DealData> {
  return { id, title, start: at(day, 0), end: at(day + 1, 0), allDay: true, color: CATEGORIES[data.category].color, data }
}

const COVENANT = { clause: "Clause 12.4 · Debt Service Coverage", due: "Jan 20, 2026", pass: 7, fail: 1 }
const EVENTS: CalendarEvent<DealData>[] = [
  allDay("ln-40218", "Harbour Point Logistics (Term Loan)", 0, { category: "deal", owner: "Mara Ellison", loanRef: "#LN-40218", workstream: { label: "Tasks", done: 7, total: 8 }, covenant: COVENANT }),
  allDay("data-room", "Send data room for Calder Row", 2, { category: "task", owner: "Lena Brandt", workstream: { label: "Deal Pipeline", done: 1, total: 5 } }),
  allDay("ashgrove", "Ashgrove Medical insurance certificates", 3, { category: "compliance", owner: "Nadia Faris", workstream: { label: "Deliverables", done: 4, total: 9 }, covenant: { clause: "Covenant 4.2 · Insurance", due: "Jan 22, 2026", pass: 4, fail: 5 } }),
  event("funding", "Funding Conditions Review", 0, 9, 90, { category: "compliance", owner: "Arun Iyer", workstream: { label: "Deliverables", done: 5, total: 6 }, covenant: { clause: "Clause 8.1 · Funding Conditions", due: "Jan 16, 2026", pass: 5, fail: 1 } }),
  event("intro-call", "Introductory Call", 1, 10, 60, { category: "call", owner: "Elin Dahl", counterparty: "Introductions Team" }),
  event("kestrel-call", "Kestrel Terminal Call", 1, 11, 60, { category: "call", owner: "Hugo Salas", counterparty: "Kestrel Terminal" }),
  event("cert-chase", "Certificate Chase", 2, 9, 60, { category: "email", owner: "Nadia Faris", counterparty: "Ashgrove Medical" }),
  event("watchlist", "Watchlist Prep", 3, 10, 75, { category: "task", owner: "Lena Brandt", workstream: { label: "Tasks", done: 3, total: 6 } }),
  event("calder-kickoff", "Calder Row Kickoff", 4, 9, 75, { category: "meeting", owner: "Mara Ellison", counterparty: "Calder Row Residences", attendees: ["Mara Ellison", "Lena Brandt", "Nadia Faris", "Arun Iyer"] }),
  event("closing-docs", "Closing Docs Follow Up", 4, 11, 75, { category: "email", owner: "Lena Brandt", counterparty: "Orchard Line Retail", attendees: ["Lena Brandt", "Elin Dahl", "Hugo Salas", "Mara Ellison", "Nadia Faris"] }),
  event("credit-standup", "Weekly Credit Standup", 0, 13, 60, { category: "meeting", owner: "Mara Ellison", counterparty: "Credit Team" }),
  event("portfolio", "Portfolio Review", 3, 13, 120, { category: "meeting", owner: "Arun Iyer", counterparty: "Internal", attendees: ["Arun Iyer", "Mara Ellison", "Lena Brandt", "Nadia Faris", "Hugo Salas"] }),
  event("site-visit", "Site Visit Debrief", 1, 15, 105, { category: "call", owner: "Hugo Salas", counterparty: "Kestrel Cold Storage", attendees: ["Hugo Salas", "Elin Dahl"] }),
  event("handover", "Servicing Handover", 4, 15, 105, { category: "compliance", owner: "Nadia Faris", workstream: { label: "Deliverables", done: 2, total: 4 } }),
]

function Attendees({ names }: { names: string[] }) {
  const shown = names.slice(0, 3)
  return (
    <AvatarGroup className="-space-x-1">
      {shown.map((name) => (
        <Avatar key={name} size="sm" className="size-4.5">
          <AvatarFallback className={cn("text-[0.5rem] font-semibold", tone(name))}>{initials(name)}</AvatarFallback>
        </Avatar>
      ))}
      {names.length > shown.length && <span className="text-muted-foreground ps-2 text-[0.55rem]">+{names.length - shown.length}</span>}
    </AvatarGroup>
  )
}

function ProgressBar({ done, total }: { done: number; total: number }) {
  return (
    <span className="flex w-full items-center gap-1">
      <span className="bg-foreground/15 h-1 flex-1 overflow-hidden rounded-full">
        <span className="bg-foreground/60 block h-full rounded-full" style={{ width: `${(done / total) * 100}%` }} />
      </span>
      <span className="text-muted-foreground shrink-0 text-[0.55rem] tabular-nums">{done}/{total}</span>
    </span>
  )
}

function DealChip({ occurrence, view }: EventCalendarRenderEventProps<DealData>) {
  const { event: item, start, end } = occurrence
  const data = item.data!
  const cat = CATEGORIES[data.category]
  const Icon = cat.icon
  const minutes = differenceInMinutes(end, start)
  const tag = <Badge size="xs" className="shrink-0 border-transparent text-white" style={{ backgroundColor: cat.color }}>{cat.label}</Badge>
  if (item.allDay && view !== "month") {
    return (
      <span className="flex w-full min-w-0 flex-col gap-0.5">
        {data.loanRef ? (
          <span className="truncate text-[0.6rem] font-semibold text-(--ec-event-color)">{data.loanRef}</span>
        ) : (
          <span className="text-muted-foreground flex items-center gap-1 text-[0.55rem]"><CalendarDaysIcon className="size-2.5" /> {format(start, "MMM d")}</span>
        )}
        <span className="flex min-w-0 items-start gap-1.5"><span className="line-clamp-2 flex-1 font-semibold leading-tight">{item.title}</span>{tag}</span>
        {data.workstream && (
          <span className="text-muted-foreground flex items-center gap-1 text-[0.6rem]">
            <Icon className="size-3" /><span className="truncate">{data.workstream.label}</span>
          </span>
        )}
        {data.workstream && <ProgressBar done={data.workstream.done} total={data.workstream.total} />}
      </span>
    )
  }
  if (item.allDay) {
    return <span className="flex w-full min-w-0 items-center gap-1.5"><span className="truncate font-medium">{item.title}</span><span className="ms-auto">{tag}</span></span>
  }
  if (view === "month") {
    return <span className="flex w-full min-w-0 items-center gap-1.5"><span className="truncate font-medium">{item.title}</span><span className="ms-auto">{tag}</span></span>
  }
  return (
    <span className="flex w-full min-w-0 flex-col gap-0.5">
      <span className="flex min-w-0 items-center gap-1.5">
        {minutes >= 75 && <span className="text-muted-foreground truncate text-[0.6rem]">{format(start, "h:mm a")}, {minutes} min</span>}
        <span className="ms-auto">{tag}</span>
      </span>
      <span className="truncate font-medium leading-tight">{item.title}</span>
      {(data.counterparty || data.attendees) && (
        <span className="text-muted-foreground flex min-w-0 items-center gap-1 text-[0.6rem]">
          <Icon className="size-3 shrink-0" />
          <span className="truncate">{data.counterparty}</span>
          {data.attendees && <span className="ms-auto"><Attendees names={data.attendees} /></span>}
        </span>
      )}
      {data.workstream && (
        <span className="flex min-w-0 items-center gap-1">
          <span className="text-muted-foreground truncate text-[0.6rem]">{data.workstream.label}</span>
          <span className="ms-auto w-12"><ProgressBar done={data.workstream.done} total={data.workstream.total} /></span>
        </span>
      )}
    </span>
  )
}

function DealTooltip({ occurrence }: { occurrence: EventCalendarOccurrence<DealData> }) {
  const data = occurrence.event.data!
  const covenant = data.covenant
  return (
    <div className="w-64 space-y-2">
      <div className="flex items-start justify-between gap-2">
        <span className="text-sm font-semibold leading-tight">{occurrence.event.title}</span>
        <Badge size="xs" className="shrink-0 border-transparent text-white" style={{ backgroundColor: CATEGORIES[data.category].color }}>{CATEGORIES[data.category].label}</Badge>
      </div>
      {data.counterparty && <p className="text-muted-foreground text-xs">{data.counterparty} · {data.owner}</p>}
      {covenant ? (
        <div className="rounded-md border p-2 text-xs">
          <div className="text-muted-foreground flex items-center justify-between gap-2"><span>Covenant</span><span className="text-foreground font-medium">{covenant.clause}</span></div>
          <div className="text-muted-foreground flex items-center justify-between"><span>Due</span><span>{covenant.due}</span></div>
          <div className="mt-1.5 flex items-center gap-3">
            <span className="text-emerald-600 dark:text-emerald-400">{covenant.pass} passed</span>
            <span className="text-destructive">{covenant.fail} failed</span>
          </div>
        </div>
      ) : <p className="text-muted-foreground text-xs">No covenant attached to this workstream.</p>}
    </div>
  )
}

export function EventCalendar6Block() {
  const [events, setEvents] = useState(EVENTS)
  const [cats, setCats] = useState<Set<Category>>(new Set(CATS))
  const [owners, setOwners] = useState<Set<string>>(new Set(OWNERS))
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const visible = events.filter((item) => cats.has(item.data!.category) && owners.has(item.data!.owner))
  const detail = selectedId ? events.find((item) => item.id === selectedId) : null

  const toggle = <T,>(set: Set<T>, value: T, checked: boolean) => {
    const next = new Set(set)
    if (checked) next.add(value)
    else next.delete(value)
    return next
  }
  const addNew = () => {
    const id = `deal-${events.length + 1}`
    setEvents((prev) => [...prev, event(id, "New covenant review", 0, 9, 60, { category: "compliance", owner: "Mara Ellison", counterparty: "Harbour Point Logistics" })])
    setSelectedId(id)
  }

  return (
    <div className="h-svh p-4">
      <Frame dense className="h-full min-h-0">
        <FramePanel className="flex h-full min-h-0 flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b px-4 py-2.5">
            <h2 className="text-sm font-semibold">Deal Calendar</h2>
            <Button size="sm" onClick={addNew}><PlusIcon /> New event</Button>
          </div>
          <EventCalendar<DealData>
            events={visible}
            defaultView="week"
            defaultDate={ANCHOR}
            views={["month", "week", "day", "agenda"]}
            weekStartsOn={1}
            dayStartHour={9}
            dayEndHour={17}
            interval={60}
            enableShortcuts
            interactions={{ drag: false, resize: false, selectSlot: false }}
            renderEvent={DealChip}
            renderEventTooltip={({ occurrence }) => <DealTooltip occurrence={occurrence} />}
            eventTooltip={{ side: "right" }}
            classNames={{
              monthView: "[--ec-month-bar-h:2.5rem]",
              timeGrid: "[--ec-month-bar-h:6rem]",
              eventTooltip: "w-80 max-w-none items-start rounded-lg bg-popover px-3 py-2.5 text-popover-foreground shadow-lg ring-1 ring-foreground/10 [&>span]:hidden",
            }}
            onEventClick={(occurrence) => setSelectedId(occurrence.eventId)}
            className="min-h-0 flex-1"
          >
            <EventCalendarNav className="border-b px-2 py-2">
              <TooltipProvider delayDuration={600} skipDelayDuration={300}>
              <EventCalendarNavToday />
              <EventCalendarViewSwitcher />
              <div className="flex items-center"><EventCalendarNavPrev /><EventCalendarNavNext /></div>
              <EventCalendarTitle className="ms-3" />
              <div className="grow" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1.5">Category {cats.size}<ChevronDownIcon className="size-3.5 opacity-60" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Category</DropdownMenuLabel>
                  {CATS.map((cat) => (
                    <DropdownMenuCheckboxItem key={cat} checked={cats.has(cat)} onCheckedChange={(checked) => setCats((prev) => toggle(prev, cat, Boolean(checked)))}>
                      <span className="size-2.5 rounded-full" style={{ backgroundColor: CATEGORIES[cat].color }} />
                      {CATEGORIES[cat].label}
                    </DropdownMenuCheckboxItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><PlusIcon /> New category</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1.5">Ownership {owners.size}<ChevronDownIcon className="size-3.5 opacity-60" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Ownership</DropdownMenuLabel>
                  {OWNERS.map((owner) => (
                    <DropdownMenuCheckboxItem key={owner} checked={owners.has(owner)} onCheckedChange={(checked) => setOwners((prev) => toggle(prev, owner, Boolean(checked)))}>
                      {owner}
                    </DropdownMenuCheckboxItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><PlusIcon /> Add owner</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </TooltipProvider>
            </EventCalendarNav>
            <EventCalendarContent />
          </EventCalendar>
          <Dialog open={Boolean(detail)} onOpenChange={(open) => !open && setSelectedId(null)}>
            <DialogContent className="sm:max-w-md">
              {detail && (() => {
                const data = detail.data!
                const covenant = data.covenant
                return (
                  <>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        {detail.title}
                        <Badge size="sm" className="border-transparent text-white" style={{ backgroundColor: CATEGORIES[data.category].color }}>{CATEGORIES[data.category].label}</Badge>
                      </DialogTitle>
                      <DialogDescription>
                        {detail.allDay ? "All day" : `${format(detail.start, "EEEE, MMM d")} · ${format(detail.start, "h:mm a")} - ${format(detail.end, "h:mm a")}`}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-3 text-xs">
                      <div className="text-muted-foreground flex items-center gap-2"><CircleDotIcon className="size-3.5" /> Owner · {data.owner}</div>
                      {data.counterparty && <div className="text-muted-foreground">Counterparty · {data.counterparty}</div>}
                      {data.workstream && (
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between"><span>{data.workstream.label}</span></div>
                          <ProgressBar done={data.workstream.done} total={data.workstream.total} />
                        </div>
                      )}
                      {covenant && (
                        <div className="rounded-md border p-3">
                          <div className="font-medium">{covenant.clause}</div>
                          <div className="text-muted-foreground mt-1">Due {covenant.due}</div>
                          <div className="mt-2 flex gap-3"><span className="text-emerald-600 dark:text-emerald-400">{covenant.pass} checks passed</span><span className="text-destructive">{covenant.fail} failed</span></div>
                        </div>
                      )}
                      {data.attendees && <div className="text-muted-foreground flex items-center gap-2"><Attendees names={data.attendees} /> {data.attendees.length} attendees</div>}
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => { setEvents((prev) => prev.filter((item) => item.id !== detail.id)); setSelectedId(null) }}><Trash2Icon /> Delete</Button>
                      <Button className="ms-auto" onClick={() => setSelectedId(null)}>Open deal room</Button>
                    </DialogFooter>
                  </>
                )
              })()}
            </DialogContent>
          </Dialog>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default EventCalendar6Block
