import { useState } from "react"
import { addDays, addMinutes, format, setHours, startOfDay } from "date-fns"
import { ChevronDownIcon, ClockIcon, PlusIcon, SearchIcon, Trash2Icon, UsersIcon } from "lucide-react"
import { EventCalendar } from "@/components/kit/event-calendar/event-calendar"
import { EventCalendarContent } from "@/components/kit/event-calendar/~event-calendar-content"
import {
  EventCalendarNav,
  EventCalendarNavNext,
  EventCalendarNavPrev,
  EventCalendarNavToday,
  EventCalendarTitle,
  EventCalendarViewSwitcher,
} from "@/components/kit/event-calendar/~event-calendar-nav"
import type {
  CalendarEvent,
  EventCalendarOccurrence,
} from "@/components/kit/event-calendar/~event-calendar-types"
import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "cn"
const ANCHOR = new Date(2026, 8, 14)
const DEPARTMENTS = {
  dock: { label: "Inbound Dock", color: "var(--color-sky-500)", dot: "bg-sky-500" },
  pick: { label: "Pick Line", color: "var(--color-violet-500)", dot: "bg-violet-500" },
  dispatch: { label: "Dispatch", color: "var(--color-emerald-500)", dot: "bg-emerald-500" },
  cold: { label: "Cold Store", color: "var(--color-rose-500)", dot: "bg-rose-500" },
  site: { label: "Site Support", color: "var(--color-indigo-500)", dot: "bg-indigo-500" },
} as const
type Dept = keyof typeof DEPARTMENTS
const STAFF = [
  "Ava Reed", "Luis Ortega", "Priya Nair", "Tom Becker", "Mia Chen", "Jonas Weber",
  "Sam Okafor", "Nora Haas", "Eli Brooks", "Kira Lind", "Dana Cole", "Owen Frost",
]
const TONES = [
  "bg-sky-500/20 text-sky-700 dark:text-sky-300",
  "bg-violet-500/20 text-violet-700 dark:text-violet-300",
  "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
  "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  "bg-rose-500/20 text-rose-700 dark:text-rose-300",
]
const initials = (name: string) => name.split(" ").map((part) => part[0]).join("")
const tone = (name: string) =>
  TONES[[...name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % TONES.length]
const staffNames = (indices: number[]) => indices.map((index) => STAFF[index])
interface ShiftData {
  dept: Dept
  staff: string[]
  required: number
  published: boolean
}
const at = (day: number, hour: number, minute = 0) =>
  addMinutes(setHours(addDays(startOfDay(ANCHOR), day), hour), minute)
function shift(
  id: string, title: string, day: number, startHour: number, endHour: number,
  dept: Dept, staff: number[], required: number, published = true
): CalendarEvent<ShiftData> {
  return {
    id, title, start: at(day, startHour),
    end: at(day, Math.floor(endHour), (endHour % 1) * 60),
    color: DEPARTMENTS[dept].color, readOnly: !published,
    data: { dept, staff: staffNames(staff), required, published },
  }
}
const onCall = (day: number): CalendarEvent<ShiftData> => ({
  id: `on-call-${day}`, title: "On Call", start: at(day, 0), end: at(day + 1, 0),
  allDay: true, color: "var(--color-violet-500)",
  data: { dept: "pick", staff: ["Nora Haas"], required: 1, published: true },
})
const ROWS: Array<[
  string, string, number, number, number, Dept, number[], number?
]> = [
  ["dock-mon", "Dock AM", 0, 6, 14.5, "dock", [0, 1, 2, 3], 4],
  ["pick-am-mon", "Pick AM", 0, 6, 14, "pick", [4, 5], 4],
  ["pick-pm-mon", "Pick PM", 0, 14, 22, "pick", [6, 7, 8, 9, 10], 5],
  ["dock-tue", "Dock AM", 1, 6, 14, "dock", [0], 2],
  ["pick-am-tue", "Pick AM", 1, 6, 14, "pick", [4, 5, 6, 7, 8, 9], 6],
  ["pick-pm-tue", "Pick PM", 1, 14, 22, "pick", [1, 3], 4],
  ["dock-wed", "Dock AM", 2, 6, 14, "dock", [1, 2, 3, 0], 4],
  ["pick-am-wed", "Pick AM", 2, 6, 14, "pick", [10, 11, 4], 4],
  ["load-out", "Load Out", 2, 16.5, 19, "dispatch", [5, 6], 2],
  ["dock-thu", "Dock AM", 3, 6, 14, "dock", [0, 1, 2, 3], 4],
  ["pick-am-thu", "Pick AM", 3, 6, 14, "pick", [4, 5], 4],
  ["cold-pm-thu", "Cold PM", 3, 14, 22, "cold", [8], 2],
  ["dock-fri", "Dock AM", 4, 6, 14, "dock", [0, 1, 2, 3, 9], 5],
  ["pick-am-fri", "Pick AM", 4, 6, 14, "pick", [4, 5], 4],
  ["pick-pm-fri", "Pick PM", 4, 14, 22, "pick", [6, 7, 8], 4],
  ["pick-am-sat", "Pick AM", 5, 7, 12, "pick", [4, 5], 3],
  ["site-sat", "Site Cover", 5, 8, 16, "site", [7, 9], 2],
  ["dock-sun", "Dock AM", 6, 8, 16, "dock", [0], 2],
  ["cold-sun", "Cold AM", 6, 9, 17, "cold", [8, 10], 2],
]
const EVENTS = [
  ...ROWS.map(([id, title, day, start, end, dept, staff, required = 2]) =>
    shift(id, title, day, start, end, dept, staff, required)
  ),
  onCall(2),
  onCall(5),
]
const covered = (staff: string[], required: number) => {
  const open = Math.max(0, required - staff.length)
  return { open, label: open ? `${open} open` : `${staff.length}/${required}` }
}
function StaffAvatars({ names, max = 3 }: { names: string[]; max?: number }) {
  const shown = names.slice(0, max)
  const rest = names.length - shown.length
  if (!names.length) return <span className="text-amber-600 dark:text-amber-400">Unassigned</span>
  return (
    <AvatarGroup className="-space-x-1">
      {shown.map((name) => (
        <Avatar key={name} size="sm" className="size-4.5">
          <AvatarFallback className={cn("text-[0.5rem] font-semibold", tone(name))}>
            {initials(name)}
          </AvatarFallback>
        </Avatar>
      ))}
      {rest > 0 && <span className="text-muted-foreground ps-2 text-[0.6rem]">+{rest}</span>}
    </AvatarGroup>
  )
}
function ShiftChip({ occurrence, view }: { occurrence: EventCalendarOccurrence<ShiftData>; view: string }) {
  const data = occurrence.event.data!, info = covered(data.staff, data.required)
  if (view === "month") {
    return (
      <span className="flex w-full min-w-0 items-center gap-1.5">
        <span className="truncate font-medium">{occurrence.event.title}</span>
        <span className={cn("ms-auto shrink-0 text-[0.6rem] tabular-nums", info.open ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground")}>{info.label}</span>
      </span>
    )
  }
  if (occurrence.allDay) {
    return (
      <span className="flex w-full min-w-0 items-center gap-1.5">
        <span className="size-1.5 shrink-0 rounded-full bg-(--ec-event-color)" />
        <span className="truncate font-medium">{occurrence.event.title}</span>
        <span className="text-muted-foreground ms-auto shrink-0 tabular-nums">{info.label}</span>
      </span>
    )
  }
  return (
    <span className="flex w-full min-w-0 flex-col gap-0.5">
      <span className="truncate font-medium">{occurrence.event.title}</span>
      <StaffAvatars names={data.staff} />
      <span className={cn("text-[0.65rem] tabular-nums", info.open ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground")}>
        {info.label}
      </span>
    </span>
  )
}
export function EventCalendarShiftRosterBlock() {
  const [all, setAll] = useState(EVENTS)
  const [query, setQuery] = useState("")
  const [openOnly, setOpenOnly] = useState(false)
  const [depts, setDepts] = useState<Set<Dept>>(new Set(Object.keys(DEPARTMENTS) as Dept[]))
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const visible = all.filter((event) => {
    const data = event.data!
    if (!depts.has(data.dept)) return false
    if (openOnly && data.staff.length >= data.required) return false
    const term = query.trim().toLowerCase()
    if (!term) return true
    return event.title.toLowerCase().includes(term) ||
      data.staff.some((name) => name.toLowerCase().includes(term))
  })
  const detail = selectedId ? all.find((event) => event.id === selectedId) : null
  const merge = (next: CalendarEvent<ShiftData>[]) => {
    const byId = new Map(next.map((event) => [event.id, event]))
    setAll((prev) => [
      ...prev.map((event) => byId.get(event.id) ?? event),
      ...next.filter((event) => !prev.some((item) => item.id === event.id)),
    ])
  }
  const update = (id: string, patch: Partial<ShiftData>) =>
    setAll((prev) => prev.map((event) => event.id === id
      ? { ...event, data: { ...event.data!, ...patch }, readOnly: patch.published === false }
      : event))
  const remove = (id: string) => {
    setAll((prev) => prev.filter((event) => event.id !== id))
    setSelectedId(null)
  }
  const addNew = () => {
    const id = `shift-new-${all.length + 1}`
    setAll((prev) => [...prev, shift(id, "New shift", 0, 6, 14, "dock", [], 2, false)])
    setSelectedId(id)
  }
  const toggleDept = (dept: Dept, checked: boolean) =>
    setDepts((prev) => {
      const next = new Set(prev)
      if (checked) next.add(dept)
      else next.delete(dept)
      return next
    })
  return (
    <div className="h-svh p-4">
      <Frame dense className="h-full min-h-0">
        <FramePanel className="flex h-full min-h-0 flex-col overflow-hidden p-0">
          <EventCalendar<ShiftData>
            events={visible}
            onEventsChange={merge}
            defaultView="week"
            defaultDate={ANCHOR}
            views={["day", "week", "month"]}
            weekStartsOn={1}
            dayStartHour={6}
            dayEndHour={22}
            scrollToHour={6}
            interval={60}
            slotDuration={30}
            enableShortcuts
            renderEvent={(props) => <ShiftChip occurrence={props.occurrence} view={props.view} />}
            onEventClick={(occurrence) => setSelectedId(occurrence.eventId)}
            canDropEvent={({ event, start, end }) =>
              !all.some((other) =>
                other.id !== event.id && !other.allDay &&
                other.data!.staff.some((name) => event.data!.staff.includes(name)) &&
                start < other.end && end > other.start)}
            className="min-h-0 flex-1"
          >
            <EventCalendarNav className="border-b px-2 py-2">
              <TooltipProvider delayDuration={600} skipDelayDuration={300}>
              <EventCalendarNavToday />
              <EventCalendarViewSwitcher />
              <div className="flex items-center"><EventCalendarNavPrev /><EventCalendarNavNext /></div>
              <EventCalendarTitle className="ms-3" />
              <div className="grow" />
              <InputGroup className="hidden w-52 lg:flex">
                <InputGroupAddon><SearchIcon className="size-3.5" /></InputGroupAddon>
                <InputGroupInput
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search shifts or staff..."
                />
              </InputGroup>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                        <span className="flex -space-x-1.5">
                      {(Object.keys(DEPARTMENTS) as Dept[]).map((dept) => (
                        <span key={dept} className={cn("size-2.5 rounded-full ring-2 ring-background", DEPARTMENTS[dept].dot)} />
                      ))}
                    </span>
                    Departments
                    <ChevronDownIcon className="size-3.5 opacity-60" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuLabel>Departments</DropdownMenuLabel>
                  {(Object.keys(DEPARTMENTS) as Dept[]).map((dept) => (
                    <DropdownMenuCheckboxItem
                      key={dept}
                      checked={depts.has(dept)}
                      onCheckedChange={(checked) => toggleDept(dept, Boolean(checked))}
                    >
                      <span className={cn("size-2.5 rounded-full", DEPARTMENTS[dept].dot)} />
                      {DEPARTMENTS[dept].label}
                    </DropdownMenuCheckboxItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><PlusIcon /> New department</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant={openOnly ? "secondary" : "outline"} size="sm" onClick={() => setOpenOnly((value) => !value)}>
                <span className="size-2 rounded-full bg-amber-500" /> 17 Open
              </Button>
              <Button size="sm" onClick={addNew}><PlusIcon /> New shift</Button>
              </TooltipProvider>
            </EventCalendarNav>
            <EventCalendarContent />
          </EventCalendar>
          <Dialog open={Boolean(detail)} onOpenChange={(open) => !open && setSelectedId(null)}>
            <DialogContent className="sm:max-w-md">
              {detail && (() => {
                const data = detail.data!
                const info = covered(data.staff, data.required)
                return (
                  <>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        {detail.title}
                        <Badge variant={data.published ? "success-light" : "warning-light"} size="sm">
                          {data.published ? "Published" : "Unpublished"}
                        </Badge>
                      </DialogTitle>
                      <DialogDescription>
                        {format(detail.start, "EEEE, MMM d")} · {format(detail.start, "h:mm a")} - {format(detail.end, "h:mm a")}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <span className={cn("size-2.5 rounded-full", DEPARTMENTS[data.dept].dot)} />
                        <span className="text-sm font-medium">{DEPARTMENTS[data.dept].label}</span>
                        <Badge variant="outline" size="sm" className="ms-auto">
                          <UsersIcon /> {data.staff.length}/{data.required}
                        </Badge>
                      </div>
                      <StaffAvatars names={data.staff} max={6} />
                      {info.open ? (
                        <div className="flex items-center gap-2 rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-700 dark:text-amber-300">
                          <ClockIcon className="size-4" /> {info.open} open slot{info.open > 1 ? "s" : ""} still need cover.
                        </div>
                      ) : (
                        <div className="text-muted-foreground flex items-center gap-2 text-xs">
                          <UsersIcon className="size-4" /> Fully covered by {data.staff.join(", ")}.
                        </div>
                      )}
                      <p className="text-muted-foreground text-xs">
                        Double-booking guard is on: dragging a shift onto a slot already held by the same person is rejected.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => remove(detail.id)}><Trash2Icon /> Delete</Button>
                      <Button className="ms-auto" onClick={() => update(detail.id, { published: !data.published })}>
                        {data.published ? "Unpublish" : "Publish shift"}
                      </Button>
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
export default EventCalendarShiftRosterBlock
