import { useState } from "react"
import { addMinutes, format, setHours, startOfDay } from "date-fns"
import { CalendarIcon, CalendarPlusIcon, ChevronDownIcon, CircleSlash2Icon, Clock3Icon, FilterIcon, LayoutGridIcon, PlusIcon, XIcon } from "lucide-react"
import { EventCalendar, useEventCalendarView } from "@/components/kit/event-calendar/event-calendar"
import { EventCalendarContent } from "@/components/kit/event-calendar/~event-calendar-content"
import { EventCalendarNav, EventCalendarNavNext, EventCalendarNavPrev, EventCalendarNavToday, EventCalendarTitle } from "@/components/kit/event-calendar/~event-calendar-nav"
import type { CalendarEvent, EventCalendarOccurrence } from "@/components/kit/event-calendar/~event-calendar-types"
import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "cn"
const ANCHOR = new Date(2026, 4, 14)
const at = (hour: number, minute = 0) =>
  addMinutes(setHours(startOfDay(ANCHOR), hour), minute)
const PRACTITIONERS = [
  { id: "chen", name: "Dr. Amara Chen", patients: 5, tone: "bg-rose-500/20 text-rose-700 dark:text-rose-300" },
  { id: "menon", name: "Dr. Ravi Menon", patients: 3, tone: "bg-sky-500/20 text-sky-700 dark:text-sky-300" },
  { id: "novak", name: "Dr. Elena Novak", patients: 3, tone: "bg-amber-500/20 text-amber-700 dark:text-amber-300" },
  { id: "reyes", name: "Dr. Tomas Reyes", patients: 2, tone: "bg-slate-500/20 text-slate-700 dark:text-slate-300" },
  { id: "sato", name: "Dr. Hana Sato", patients: 3, tone: "bg-violet-500/20 text-violet-700 dark:text-violet-300" },
  { id: "shah", name: "Dr. Priya Shah", patients: 2, tone: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300" },
  { id: "martins", name: "Dr. Leo Martins", patients: 1, tone: "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300" },
  { id: "wong", name: "Dr. Ada Wong", patients: 0, tone: "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300" },
  { id: "kim", name: "Dr. Noah Kim", patients: 2, tone: "bg-pink-500/20 text-pink-700 dark:text-pink-300" },
]
type Status = "completed" | "arrived" | "in-chair" | "booked" | "unpaid" | "cancelled"
const STATUS = {
  completed: { label: "Completed", color: "var(--color-emerald-500)", badge: "success-light" }, arrived: { label: "Arrived", color: "var(--color-sky-500)", badge: "info-light" },
  "in-chair": { label: "In Chair", color: "var(--color-violet-500)", badge: "primary-light" }, booked: { label: "Booked", color: "var(--color-slate-400)", badge: "outline" },
  unpaid: { label: "Unpaid", color: "var(--color-amber-500)", badge: "warning-light" }, cancelled: { label: "Cancelled", color: "var(--color-rose-500)", badge: "destructive-light" },
} as const
const STATUSES = Object.keys(STATUS) as Status[]
interface ApptData { patient: string; practitioner: string; procedure: string; status: Status; hold?: boolean }
function appt(
  id: string, resourceId: string, patient: string, hour: number, minute: number,
  mins: number, procedure: string, status: Status
): CalendarEvent<ApptData> {
  const start = at(hour, minute)
  return {
    id, title: patient, start, end: addMinutes(start, mins), resourceId,
    color: STATUS[status].color,
    data: { patient, practitioner: resourceId, procedure, status },
  }
}
function hold(id: string, resourceId: string, hour: number, minute: number, mins: number, title: string): CalendarEvent<ApptData> {
  const start = at(hour, minute)
  return {
    id, title, start, end: addMinutes(start, mins), resourceId, readOnly: true,
    color: "var(--color-slate-400)",
    data: { patient: title, practitioner: resourceId, procedure: "", status: "booked", hold: true },
  }
}
const EVENTS: CalendarEvent<ApptData>[] = [
  appt("a1", "chen", "Ifeoma Okafor", 8, 30, 45, "Scaling", "completed"),
  appt("a2", "chen", "Samir Haddad", 9, 30, 45, "Scaling", "completed"),
  appt("a3", "chen", "Elsa Lindqvist", 11, 0, 60, "Crown Fitting", "in-chair"),
  hold("h1", "chen", 12, 0, 60, "Lunch"),
  appt("a4", "chen", "Wei Ling Tan", 14, 15, 60, "Composite Filling", "booked"),
  appt("a5", "chen", "Chiara Novello", 16, 0, 60, "Extraction", "booked"),
  appt("b1", "menon", "Mateo Santos", 9, 0, 120, "Root Canal", "completed"),
  appt("b2", "menon", "Gregory Whitfield", 11, 0, 90, "Root Canal", "unpaid"),
  hold("h2", "menon", 12, 30, 90, "Lunch"),
  appt("b3", "menon", "Declan Brennan", 15, 0, 90, "Composite Filling", "booked"),
  appt("c1", "novak", "Laila Abadi", 9, 30, 45, "Scaling", "arrived"),
  appt("c2", "novak", "Chiara Novello", 10, 15, 45, "Braces Adjustment", "booked"),
  hold("h3", "novak", 11, 45, 105, "Lunch"),
  appt("c3", "novak", "Ifeoma Okafor", 14, 0, 60, "Implant Review", "booked"),
  appt("c4", "novak", "Mateo Santos", 16, 30, 45, "Braces Adjustment", "cancelled"),
  hold("h4", "reyes", 8, 0, 300, "Theatre List"),
  hold("h5", "reyes", 12, 0, 75, "Lunch"),
  appt("d1", "reyes", "Samir Haddad", 14, 0, 60, "Extraction", "booked"),
  appt("d2", "reyes", "Elsa Lindqvist", 15, 30, 60, "Extraction", "booked"),
  appt("e1", "sato", "Wei Ling Tan", 8, 0, 45, "Scaling", "completed"),
  appt("e2", "sato", "Declan Brennan", 9, 15, 45, "Whitening", "completed"),
  hold("h6", "sato", 11, 15, 60, "Lunch"),
  appt("e3", "sato", "Laila Abadi", 12, 30, 45, "Scaling", "arrived"),
  hold("h7", "sato", 15, 45, 120, "Clinic Hold"),
]
const LOGS = [
  { name: "Gregory Whitfield", tag: "Status", meta: "PT-2204 · Dr. Ravi Menon", note: "Root Canal · Marked Unpaid", time: "11:24 AM", icon: CircleSlash2Icon, tone: "bg-muted text-muted-foreground" },
  { name: "Mateo Santos", tag: "Cancelled", meta: "PT-2156 · Dr. Elena Novak", note: "Braces Adjustment · Called to cancel", time: "10:38 AM", icon: XIcon, tone: "bg-rose-500/15 text-rose-600 dark:text-rose-400" },
  { name: "Chiara Novello", tag: "Rescheduled", meta: "PT-2277 · Dr. Elena Novak", note: "Braces Adjustment · Moved to 10:45 AM", time: "9:05 AM", icon: Clock3Icon, tone: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  { name: "Wei Ling Tan", tag: "Status", meta: "PT-2231 · Dr. Hana Sato", note: "Scaling · Marked Completed", time: "8:47 AM", icon: CircleSlash2Icon, tone: "bg-muted text-muted-foreground" },
  { name: "Ifeoma Okafor", tag: "Booked", meta: "PT-2041 · Dr. Amara Chen", note: "General Checkup · Scheduled for 8:30 AM", time: "8:12 AM", icon: CalendarPlusIcon, tone: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
]
function ClinicViewToggle() {
  const { view, setView } = useEventCalendarView()
  const value = view === "week" ? "week" : "day"
  return (
    <ToggleGroup
      type="single"
      size="sm"
      value={value}
      onValueChange={(next) => next && setView(next === "week" ? "week" : "resource")}
    >
      <ToggleGroupItem value="day" className="px-2.5">Day</ToggleGroupItem>
      <ToggleGroupItem value="week" className="px-2.5">Week</ToggleGroupItem>
    </ToggleGroup>
  )
}
function ClinicChip({ occurrence }: { occurrence: EventCalendarOccurrence<ApptData> }) {
  const data = occurrence.event.data!
  if (data.hold) {
    return (
      <span className="text-muted-foreground relative flex w-full items-center justify-center gap-1.5">
        <span className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(135deg,transparent,transparent_4px,currentColor_4px,currentColor_5px)]" />
        <Clock3Icon className="relative size-3" />
        <span className="relative">{occurrence.event.title}</span>
      </span>
    )
  }
  return (
    <span className="flex w-full min-w-0 flex-col gap-0.5">
      <span className="flex min-w-0 items-center gap-1.5">
        <span className="truncate font-medium">{occurrence.event.title}</span>
        <Badge variant={STATUS[data.status].badge} size="xs" className="ms-auto shrink-0">
          {STATUS[data.status].label}
        </Badge>
      </span>
      <span className="text-muted-foreground truncate text-[0.6rem]">
        {format(occurrence.start, "h:mm a")} · {data.procedure}
      </span>
    </span>
  )
}
export function EventCalendar5Block() {
  const [events, setEvents] = useState(EVENTS)
  const [tab, setTab] = useState("calendar")
  const [chairs, setChairs] = useState<Set<string>>(new Set(PRACTITIONERS.slice(0, 5).map((item) => item.id)))
  const [statuses, setStatuses] = useState<Set<Status>>(new Set(STATUSES))
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const resources = PRACTITIONERS.filter((item) => chairs.has(item.id)).map((item) => ({ id: item.id, title: item.name }))
  const visible = events.filter((event) => event.data!.hold || statuses.has(event.data!.status))
  const booked = events.filter((event) => !event.data!.hold && event.data!.status !== "cancelled" && statuses.has(event.data!.status)).length
  const detail = selectedId ? events.find((event) => event.id === selectedId) : null
  const merge = (next: CalendarEvent<ApptData>[]) => {
    const byId = new Map(next.map((event) => [event.id, event]))
    setEvents((prev) => [
      ...prev.map((event) => byId.get(event.id) ?? event),
      ...next.filter((event) => !prev.some((item) => item.id === event.id)),
    ])
  }
  const setStatus = (id: string, status: Status) =>
    setEvents((prev) => prev.map((event) => event.id === id
      ? { ...event, data: { ...event.data!, status } } : event))
  const remove = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id))
    setSelectedId(null)
  }
  const toggleSet = <T,>(set: Set<T>, value: T, checked: boolean) => {
    const next = new Set(set)
    if (checked) next.add(value)
    else next.delete(value)
    return next
  }
  const addBooking = () => {
    const id = `booking-${events.length + 1}`
    setEvents((prev) => [...prev, appt(id, "chen", "New patient", 14, 0, 45, "Scaling", "booked")])
    setSelectedId(id)
  }
  return (
    <div className="h-svh p-4">
      <Frame dense className="h-full min-h-0">
        <FramePanel className="flex h-full min-h-0 flex-col overflow-hidden p-0">
          <Tabs value={tab} onValueChange={setTab} className="min-h-0 flex-1 gap-0">
            <div className="flex items-center justify-between border-b px-4">
              <TabsList variant="line" className="h-11">
                <TabsTrigger value="calendar" className="px-3">Calendar</TabsTrigger>
                <TabsTrigger value="log" className="px-3">Log History</TabsTrigger>
              </TabsList>
              <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                <CalendarIcon className="size-3.5" /> {booked} booked in view
              </span>
            </div>
            <TabsContent value="calendar" className="m-0 flex min-h-0 flex-1 flex-col">
              <EventCalendar<ApptData>
                events={visible}
                onEventsChange={merge}
                defaultView="resource" defaultDate={ANCHOR} views={["resource", "week"]} resources={resources}
                weekStartsOn={1}
                dayStartHour={8}
                dayEndHour={18}
                interval={60}
                slotDuration={30}
                onEventClick={(occurrence) => setSelectedId(occurrence.eventId)}
                canDropEvent={({ event, start, end }) =>
                  !events.some((other) => other.data!.hold && other.id !== event.id &&
                    other.resourceId === event.resourceId && start < other.end && end > other.start)}
                canSelectSlot={(slot) =>
                  !events.some((other) => other.data!.hold &&
                    other.resourceId === slot.resourceId && slot.start < other.end && slot.end > other.start)}
                renderEvent={(props) => <ClinicChip occurrence={props.occurrence} />}
                renderResourceHeader={({ resource }) => {
                  const item = PRACTITIONERS.find((person) => person.id === resource.id)!
                  return (
                    <div className="flex items-center gap-2 text-start">
                      <Avatar className="size-7">
                        <AvatarFallback className={cn("text-[0.6rem] font-semibold", item.tone)}>
                          {item.name.replace("Dr. ", "").split(" ").map((part) => part[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <div className="truncate text-xs font-semibold">{item.name}</div>
                        <div className="text-muted-foreground text-[0.65rem] font-normal">{item.patients} patients</div>
                      </div>
                    </div>
                  )
                }}
                className="min-h-0 flex-1 [--ec-resource-col-min:11rem]"
              >
                <EventCalendarNav className="border-b px-2 py-2">
                  <TooltipProvider delayDuration={600} skipDelayDuration={300}>
                  <EventCalendarNavToday />
                  <div className="flex items-center"><EventCalendarNavPrev /><EventCalendarNavNext /></div>
                  <EventCalendarTitle className="ms-3" />
                  <div className="grow" />
                  <ClinicViewToggle />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-1.5">
                        <LayoutGridIcon /> {chairs.size} of {PRACTITIONERS.length} Chairs
                        <ChevronDownIcon className="size-3.5 opacity-60" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>Chairs</DropdownMenuLabel>
                      {PRACTITIONERS.map((item) => (
                        <DropdownMenuCheckboxItem
                          key={item.id}
                          checked={chairs.has(item.id)}
                          onCheckedChange={(checked) => {
                            if (!checked && chairs.size === 1) return
                            setChairs((prev) => toggleSet(prev, item.id, Boolean(checked)))
                          }}
                        >
                          {item.name}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-1.5">
                        <FilterIcon /> Filters {statuses.size}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>Status</DropdownMenuLabel>
                      {STATUSES.map((status) => (
                        <DropdownMenuCheckboxItem
                          key={status}
                          checked={statuses.has(status)}
                          onCheckedChange={(checked) => setStatuses((prev) => toggleSet(prev, status, Boolean(checked)))}
                        >
                          <span className="size-2 rounded-full" style={{ backgroundColor: STATUS[status].color }} />
                          {STATUS[status].label}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button size="sm" onClick={addBooking}><PlusIcon /> New Booking</Button>
                  </TooltipProvider>
                </EventCalendarNav>
                <EventCalendarContent />
              </EventCalendar>
            </TabsContent>
            <TabsContent value="log" className="m-0 flex min-h-0 flex-1 flex-col">
              <div className="flex flex-wrap items-center gap-2 border-b px-4 py-3">
                <span className="text-sm font-semibold">Recent Actions <span className="text-muted-foreground font-normal">· 5 actions</span></span>
                <div className="ms-auto flex items-center gap-1.5">
                  {["Booked 1", "Rescheduled 1", "Status 2", "Cancelled 1"].map((label) => (
                    <Button key={label} variant="outline" size="sm" className="h-7 px-2 text-[0.65rem]">{label}</Button>
                  ))}
                </div>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto">
                {LOGS.map((log) => {
                  const Icon = log.icon
                  return (
                    <div key={log.name + log.time} className="flex items-start gap-3 border-b px-4 py-4 last:border-b-0">
                      <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-md", log.tone)}>
                        <Icon className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold">{log.name}</span>
                          <Badge variant={log.tag === "Cancelled" ? "destructive-light" : log.tag === "Rescheduled" ? "warning-light" : log.tag === "Booked" ? "primary-light" : "outline"} size="sm">{log.tag}</Badge>
                        </div>
                        <div className="text-muted-foreground mt-0.5 text-xs">{log.meta}</div>
                        <div className="text-muted-foreground text-xs">{log.note}</div>
                      </div>
                      <span className="text-muted-foreground shrink-0 text-xs tabular-nums">{log.time}</span>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
          <Dialog open={Boolean(detail)} onOpenChange={(open) => !open && setSelectedId(null)}>
            <DialogContent className="sm:max-w-sm">
              {detail && (() => {
                const data = detail.data!
                return (
                  <>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        {detail.title}
                        {!data.hold && <Badge variant={STATUS[data.status].badge} size="sm">{STATUS[data.status].label}</Badge>}
                      </DialogTitle>
                      <DialogDescription>
                        {data.hold
                          ? "Holds reject drops and new bookings. Move the hold first to book over it."
                          : `${format(detail.start, "EEEE, MMM d")} · ${format(detail.start, "h:mm a")} - ${format(detail.end, "h:mm a")}`}
                      </DialogDescription>
                    </DialogHeader>
                    {!data.hold && (
                      <div className="text-muted-foreground flex flex-col gap-1 text-xs">
                        <span>{data.procedure}</span>
                        <span>{PRACTITIONERS.find((item) => item.id === data.practitioner)?.name}</span>
                      </div>
                    )}
                    <DialogFooter>
                      {data.hold ? (
                        <Button onClick={() => setSelectedId(null)}>Close</Button>
                      ) : (
                        <>
                          <Button variant="outline" onClick={() => remove(detail.id)}>Delete</Button>
                          <Button variant="outline" onClick={() => setStatus(detail.id, "cancelled")}>Cancel</Button>
                          <Button className="ms-auto" onClick={() => setStatus(detail.id, "completed")}>Mark completed</Button>
                        </>
                      )}
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
export default EventCalendar5Block
