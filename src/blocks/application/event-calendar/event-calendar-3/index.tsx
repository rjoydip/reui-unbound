"use client"

import { useMemo, useRef, useState, type ComponentProps } from "react"
import { EventCalendar } from "@/components/kit/event-calendar/event-calendar"
import { EventCalendarContent } from "@/components/kit/event-calendar/~event-calendar-content"
import {
  EventCalendarNav,
  EventCalendarToolbar,
} from "@/components/kit/event-calendar/~event-calendar-nav"
import type { CalendarEvent } from "@/components/kit/event-calendar/~event-calendar-types"
import {
  addDays,
  eachDayOfInterval,
  format,
  isSameDay,
  setHours,
  startOfDay,
} from "date-fns"
import type { DayButton } from "react-day-picker"
import {
  ChevronDownIcon,
  ConciergeBellIcon,
  MapPinIcon,
  PartyPopperIcon,
  PlusIcon,
  SprayCanIcon,
  Trash2Icon,
} from "lucide-react"

import { cn } from "cn"
import { Badge } from "@/components/kit/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ANCHOR = new Date(2026, 6, 8)
const PALETTE = [
  "var(--color-blue-500)",
  "var(--color-amber-500)",
  "var(--color-emerald-500)",
  "var(--color-violet-500)",
  "var(--color-rose-500)",
]

interface Stream {
  id: string
  name: string
  color: string
}

interface BookingData {
  streamId: string
  room?: string
  guest?: string
  status?: "due-out"
}

const STREAMS: Stream[] = [
  { id: "arrivals", name: "Arrivals", color: PALETTE[0] },
  { id: "departures", name: "Departures", color: PALETTE[1] },
  { id: "housekeeping", name: "Housekeeping", color: PALETTE[2] },
  { id: "functions", name: "Functions", color: PALETTE[3] },
  { id: "services", name: "Guest Services", color: PALETTE[4] },
]

const TONES = ["bg-sky-500", "bg-orange-400", "bg-violet-500", "bg-emerald-500", "bg-rose-500"]
const STREAM_ICONS: Record<string, typeof SprayCanIcon> = {
  housekeeping: SprayCanIcon,
  functions: PartyPopperIcon,
  services: ConciergeBellIcon,
}

const day = (offset: number, hour = 0, minute = 0) => {
  const date = addDays(ANCHOR, offset)
  date.setHours(hour, minute, 0, 0)
  return date
}
const dayStart = (offset: number) => startOfDay(day(offset))
const streamColor = (id: string) =>
  STREAMS.find((stream) => stream.id === id)?.color ?? PALETTE[0]

function make(
  id: string,
  title: string,
  streamId: string,
  start: Date,
  end: Date,
  data: Partial<BookingData> = {},
  allDay = false
): CalendarEvent<BookingData> {
  return {
    id,
    title,
    start,
    end,
    allDay,
    color: streamColor(streamId),
    data: { streamId, ...data },
  }
}

const SEED: CalendarEvent<BookingData>[] = [
  make("prior-in-1", "Check in: Fischer", "arrivals", day(-7, 15), day(-7, 15, 45), { room: "Room 214", guest: "Fischer" }),
  make("prior-out-1", "Check out: Adams", "departures", day(-6, 9), day(-6, 9, 30), { room: "Room 512", guest: "Adams" }),
  make("prior-turn", "Turnover round", "housekeeping", day(-6, 11), day(-6, 12), { room: "Floor 5" }),
  make("prior-in-2", "Check in: Rossi", "arrivals", day(-5, 15, 30), day(-5, 16, 15), { room: "Room 708", guest: "Rossi" }),
  make("prior-transfer", "Airport transfer", "services", day(-4, 9), day(-4, 10), { room: "Lobby" }),
  make("prior-out-2", "Check out: Dubois", "departures", day(-3, 8, 30), day(-3, 9), { room: "Room 301", guest: "Dubois" }),
  make("meridian", "MERIDIAN AGM in house", "functions", dayStart(-2), dayStart(3), { room: "Grand ballroom" }, true),
  make("romero-wedding", "Romero wedding", "functions", dayStart(2), dayStart(5), { room: "Garden terrace" }, true),
  make("mon-out-1", "Check out: Alvarez", "departures", day(-2, 7, 45), day(-2, 8, 15), { room: "Room 512", guest: "Alvarez" }),
  make("mon-out-2", "Check out: Bennett", "departures", day(-2, 9, 15), day(-2, 9, 45), { room: "Room 220", guest: "Bennett" }),
  make("mon-turn-1", "Turnover round", "housekeeping", day(-2, 10, 30), day(-2, 11, 30), { room: "6 rooms" }),
  make("mon-in-1", "Check in: Wilson", "arrivals", day(-2, 14, 30), day(-2, 15, 15), { room: "Room 318", guest: "Wilson" }),
  make("mon-in-2", "Check in: Okafor", "arrivals", day(-2, 16, 15), day(-2, 17), { room: "Room 1206", guest: "Okafor" }),
  make("tue-floor", "Ballroom reset", "functions", day(-1, 7), day(-1, 17), { room: "Grand ballroom" }),
  make("tue-out-1", "Check out: Silva", "departures", day(-1, 8, 30), day(-1, 9), { room: "Room 708", guest: "Silva" }),
  make("tue-out-2", "Check out: Novak", "departures", day(-1, 9, 45), day(-1, 10, 15), { room: "Room 512", guest: "Novak" }),
  make("tue-turn", "Turnover round", "housekeeping", day(-1, 10, 30), day(-1, 11, 30), { room: "Floor 7" }),
  make("tue-in-1", "Check in: Haddad", "arrivals", day(-1, 14), day(-1, 15), { room: "Harbour Suite 1203", guest: "Haddad" }),
  make("tue-in-2", "Check in: Garcia", "arrivals", day(-1, 17, 30), day(-1, 18, 15), { room: "Room 415", guest: "Garcia" }),
  make("wed-clean", "Deep clean: floor 9", "housekeeping", day(0, 8), day(0, 13), { room: "Floor 9" }),
  make("wed-out-1", "Check out: Rodriguez", "departures", day(0, 7, 15), day(0, 7, 45), { room: "Room 417", guest: "Rodriguez" }),
  make("wed-out-2", "Check out: Johnson", "departures", day(0, 9, 45), day(0, 10, 15), { room: "Room 826", guest: "Johnson", status: "due-out" }),
  make("wed-turn", "Turnover round", "housekeeping", day(0, 10, 15), day(0, 11), { room: "Departure rooms" }),
  make("wed-turn-2", "Turnover round", "housekeeping", day(0, 18), day(0, 19), { room: "14 suites + VIP arrivals" }),
  make("wed-in-1", "Check in: Patel", "arrivals", day(0, 14), day(0, 14, 45), { room: "Harbour Suite 1203", guest: "Patel" }),
  make("wed-in-2", "Check in: Santos", "arrivals", day(0, 16, 45), day(0, 17, 30), { room: "Junior Suite 1002", guest: "Santos" }),
  make("thu-out-1", "Check out: Meyer", "departures", day(1, 8), day(1, 8, 30), { room: "Room 614", guest: "Meyer" }),
  make("thu-out-2", "Check out: Costa", "departures", day(1, 10), day(1, 10, 30), { room: "Room 911", guest: "Costa" }),
  make("thu-turn", "Turnover round", "housekeeping", day(1, 12), day(1, 13), { room: "Suites" }),
  make("thu-wedding", "Wedding", "functions", day(1, 13), day(1, 15), { room: "Garden terrace" }),
  make("thu-spa", "Spa: Romero", "services", day(1, 14, 15), day(1, 15), { room: "Spa 2" }),
  make("thu-in-1", "Check in: Morgan", "arrivals", day(1, 15, 30), day(1, 16, 15), { room: "Room 522", guest: "Morgan" }),
  make("thu-in-2", "Check in: Ito", "arrivals", day(1, 17), day(1, 17, 45), { room: "Room 108", guest: "Ito" }),
  make("fri-out", "Check out: Laurent", "departures", day(2, 9), day(2, 9, 30), { room: "Room 301", guest: "Laurent" }),
  make("fri-turn", "Turnover round", "housekeeping", day(2, 10), day(2, 11), { room: "Floor 3" }),
  make("fri-in-1", "Check in: Romero", "arrivals", day(2, 14, 15), day(2, 15), { room: "Garden suite", guest: "Romero" }),
  make("fri-in-2", "Check in: Park", "arrivals", day(2, 16, 30), day(2, 17, 15), { room: "Room 217", guest: "Park" }),
  make("sat-out-1", "Check out: Weber", "departures", day(3, 8, 45), day(3, 9, 15), { room: "Room 704", guest: "Weber" }),
  make("sat-out-2", "Check out: Rossi", "departures", day(3, 10, 30), day(3, 11), { room: "Room 220", guest: "Rossi" }),
  make("sat-turn", "Turnover round", "housekeeping", day(3, 11, 30), day(3, 12, 30), { room: "12 rooms" }),
  make("sat-class", "Group coach in", "services", day(3, 14), day(3, 15), { room: "Studio 1" }),
  make("sat-in-1", "Check in: Wilson", "arrivals", day(3, 15, 45), day(3, 16, 30), { room: "Room 318", guest: "Wilson" }),
  make("sat-in-2", "Check in: Diaz", "arrivals", day(3, 17, 15), day(3, 18), { room: "Room 610", guest: "Diaz" }),
  make("sun-out", "Check out: Moreau", "departures", day(4, 8, 15), day(4, 8, 45), { room: "Room 408", guest: "Moreau" }),
  make("sun-transfer", "Airport transfer", "services", day(4, 9), day(4, 10), { room: "Lobby" }),
  make("sun-turn", "Turnover round", "housekeeping", day(4, 9, 15), day(4, 10, 15), { room: "Departure rooms" }),
  make("sun-in-1", "Check in: Santos", "arrivals", day(4, 13, 45), day(4, 14, 30), { room: "Junior Suite 1002", guest: "Santos" }),
  make("sun-in-2", "Check in: Lee", "arrivals", day(4, 16), day(4, 16, 45), { room: "Room 205", guest: "Lee" }),
]

function CalendarDot(props: ComponentProps<typeof DayButton>) {
  return (
    <CalendarDayButton
      {...props}
      className={cn(
        "after:bg-current after:absolute after:bottom-[3px] after:left-1/2 after:size-[3px] after:-translate-x-1/2 after:rounded-full after:opacity-60",
        !props.modifiers.hasEvents && "after:hidden"
      )}
    />
  )
}

const initials = (name: string) =>
  name.split(" ").map((part) => part[0]).slice(0, 2).join("")

function whenLabel(event: CalendarEvent<BookingData>) {
  if (event.allDay) return `All day · ${format(event.start, "EEE, MMM d")}`
  return `${format(event.start, "EEE, MMM d · h:mm a")} – ${format(event.end, "h:mm a")}`
}

interface BookingDraft {
  name: string
  streamId: string
  room: string
  hour: number
}

const HOUR_OPTIONS = Array.from({ length: 12 }, (_, index) => index + 8).map((hour) => ({
  hour,
  label: format(setHours(ANCHOR, hour), "h:mm a"),
}))

export function EventCalendar3Block() {
  const [streams, setStreams] = useState<Stream[]>(STREAMS)
  const [events, setEvents] = useState<CalendarEvent<BookingData>[]>(SEED)
  const [hidden, setHidden] = useState<Set<string>>(new Set())
  const [anchor, setAnchor] = useState<Date>(ANCHOR)
  const [month, setMonth] = useState<Date>(ANCHOR)
  const [selectedDay, setSelectedDay] = useState<Date>(ANCHOR)
  const [selected, setSelected] = useState<CalendarEvent<BookingData> | null>(null)
  const [draft, setDraft] = useState<BookingDraft | null>(null)
  const counter = useRef(0)

  const visibleEvents = useMemo(
    () => events.filter((item) => !hidden.has(item.data?.streamId ?? "")),
    [events, hidden]
  )

  const eventDays = useMemo(() => {
    const days: Date[] = []
    for (const item of events) {
      days.push(
        ...eachDayOfInterval({
          start: startOfDay(item.start),
          end: startOfDay(item.allDay ? addDays(item.end, -1) : item.end),
        })
      )
    }
    return days
  }, [events])

  const dayEvents = useMemo(
    () =>
      visibleEvents
        .filter((item) => !item.allDay && isSameDay(item.start, selectedDay))
        .sort((a, b) => a.start.getTime() - b.start.getTime()),
    [visibleEvents, selectedDay]
  )

  const countIn = dayEvents.filter((item) => item.data?.streamId === "arrivals").length
  const countOut = dayEvents.filter((item) => item.data?.streamId === "departures").length
  const countJobs = dayEvents.filter((item) => item.data?.streamId === "housekeeping").length

  const handleEventsChange = (next: CalendarEvent<BookingData>[]) => {
    const byId = new Map(next.map((item) => [item.id, item]))
    setEvents((previous) => previous.map((item) => byId.get(item.id) ?? item))
  }

  const toggleStream = (id: string) =>
    setHidden((previous) => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const addStream = () => {
    const nth = streams.length - STREAMS.length + 1
    setStreams((previous) => [
      ...previous,
      {
        id: `stream-${nth}`,
        name: nth === 1 ? "New stream" : `New stream ${nth}`,
        color: PALETTE[previous.length % PALETTE.length],
      },
    ])
  }

  const goToDay = (date: Date) => {
    setAnchor(date)
    setSelectedDay(date)
    setMonth(date)
  }

  const saveDraft = () => {
    const stream = streams.find((item) => item.id === draft?.streamId) ?? streams[0]
    if (!draft?.name.trim() || !stream) return
    const prefix =
      stream.id === "arrivals" ? "Check in" : stream.id === "departures" ? "Check out" : null
    const start = setHours(startOfDay(selectedDay), draft.hour)
    setEvents((previous) => [
      ...previous,
      {
        id: `booking-${counter.current++}`,
        title: prefix ? `${prefix}: ${draft.name.trim()}` : draft.name.trim(),
        start,
        end: new Date(start.getTime() + 45 * 60_000),
        color: stream.color,
        data: {
          streamId: stream.id,
          guest: draft.name.trim(),
          room: draft.room.trim() || undefined,
        },
      },
    ])
    setDraft(null)
  }

  const removeSelected = () => {
    if (!selected) return
    setEvents((previous) => previous.filter((item) => item.id !== selected.id))
    setSelected(null)
  }

  return (
    <div className="h-svh p-4">
      <div className="bg-background flex h-full overflow-hidden rounded-xl border">
        <aside className="hidden w-80 shrink-0 flex-col border-r lg:flex">
          <div className="flex items-center justify-between border-b px-3 py-2">
            <span className="text-sm font-semibold">Streams</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-7 rounded-full px-2" aria-label="Show streams">
                  <span className="flex items-center -space-x-1">
                    {streams.slice(0, 5).map((stream) => (
                      <span
                        key={stream.id}
                        className="ring-background size-2.5 rounded-full ring-2"
                        style={{ backgroundColor: stream.color }}
                      />
                    ))}
                  </span>
                  <ChevronDownIcon className="text-muted-foreground size-3.5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56 gap-1 p-1.5">
                <p className="text-muted-foreground px-2 py-1 text-xs font-medium">Streams</p>
                {streams.map((stream) => {
                  const visible = !hidden.has(stream.id)
                  return (
                    <div
                      key={stream.id}
                      className="hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5"
                    >
                      <Checkbox
                        id={`ec3-${stream.id}`}
                        checked={visible}
                        onCheckedChange={() => toggleStream(stream.id)}
                        aria-label={`Show ${stream.name}`}
                        style={visible ? { backgroundColor: stream.color, borderColor: stream.color, color: "#fff" } : undefined}
                      />
                      <label htmlFor={`ec3-${stream.id}`} className="flex-1 cursor-pointer text-sm">
                        {stream.name}
                      </label>
                    </div>
                  )
                })}
                <div className="bg-border my-1 h-px" />
                <button
                  type="button"
                  onClick={addStream}
                  className="hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-start text-sm"
                >
                  <PlusIcon className="size-4" /> New stream
                </button>
              </PopoverContent>
            </Popover>
          </div>

          <div className="px-3 py-3">
            <Calendar
              mode="single"
              month={month}
              onMonthChange={setMonth}
              selected={selectedDay}
              onSelect={(date) => date && goToDay(date)}
              weekStartsOn={1}
              showOutsideDays
              modifiers={{ hasEvents: eventDays }}
              components={{ DayButton: CalendarDot }}
              className="w-full p-0 [--cell-size:--spacing(9)]"
            />
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-4">
            <div className="bg-muted/50 rounded-lg border px-3 py-2.5">
              <p className="text-sm font-semibold">{format(selectedDay, "EEE, MMM d")}</p>
              <p className="text-muted-foreground mt-0.5 text-xs">
                {countIn} in · {countOut} out · {countJobs} jobs
              </p>
            </div>
            <ul className="mt-3 flex flex-col">
              {dayEvents.map((item) => {
                const stream = streams.find((entry) => entry.id === item.data?.streamId)
                const Icon = STREAM_ICONS[item.data?.streamId ?? ""]
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setSelected(item)}
                      className="hover:bg-muted/50 flex w-full items-start gap-2.5 rounded-lg px-2 py-2 text-start"
                    >
                      {item.data?.guest ? (
                        <Avatar className="mt-0.5 size-8">
                          <AvatarFallback className={cn("text-[10px] font-semibold text-white", TONES[item.id.length % TONES.length])}>
                            {initials(item.data.guest)}
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <span className="border-border text-muted-foreground mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border">
                          {Icon ? <Icon className="size-4" /> : <SprayCanIcon className="size-4" />}
                        </span>
                      )}
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className="truncate text-sm font-medium">{item.title}</span>
                          {item.data?.status === "due-out" && (
                            <Badge size="sm" variant="primary-light" className="ms-auto shrink-0 border-dashed border-warning/60">
                              Due Out
                            </Badge>
                          )}
                        </span>
                        <span className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-xs">
                          <span className="size-1.5 shrink-0 rounded-full" style={{ backgroundColor: stream?.color }} />
                          {format(item.start, "h:mm a")}
                          {item.data?.room && <> · {item.data.room}</>}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <EventCalendar
            className="h-full"
            weekStartsOn={1}
            scrollToHour={7.5}
            date={anchor}
            onDateChange={(date) => {
              setAnchor(date)
              setSelectedDay(date)
              setMonth(date)
            }}
            defaultView="week"
            views={["week"]}
            events={visibleEvents}
            onEventsChange={handleEventsChange}
            onEventClick={(occurrence, mouseEvent) => {
              mouseEvent.preventDefault()
              setSelected(occurrence.event)
            }}
          >
            <div className="flex items-center gap-2 border-b pe-2">
              <EventCalendarNav className="min-w-0 flex-1" showViewSwitcher={false} />
              <EventCalendarToolbar>
                <Button size="sm" onClick={() => setDraft({ name: "", streamId: streams[0]?.id ?? "arrivals", room: "", hour: 15 })}>
                  <PlusIcon className="size-4" /> New booking
                </Button>
              </EventCalendarToolbar>
            </div>
            <EventCalendarContent />
          </EventCalendar>
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-sm">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span className="size-2 rounded-full" style={{ backgroundColor: selected.color }} />
                  {selected.title}
                </DialogTitle>
                <DialogDescription>{whenLabel(selected)}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-2.5 text-sm">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full" style={{ backgroundColor: selected.color }} />
                  {streams.find((stream) => stream.id === selected.data?.streamId)?.name}
                </div>
                {selected.data?.room && (
                  <div className="text-muted-foreground flex items-center gap-2">
                    <MapPinIcon className="size-4" /> {selected.data.room}
                  </div>
                )}
                {selected.data?.status === "due-out" && (
                  <Badge size="sm" variant="primary-light" className="w-fit border-dashed border-warning/60">
                    Due Out
                  </Badge>
                )}
              </div>
              <DialogFooter className="sm:justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={removeSelected}
                >
                  <Trash2Icon className="size-4" /> Cancel booking
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSelected(null)}>
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={draft !== null} onOpenChange={(open) => !open && setDraft(null)}>
        <DialogContent className="sm:max-w-sm">
          {draft && (
            <>
              <DialogHeader>
                <DialogTitle>New booking</DialogTitle>
                <DialogDescription>
                  {format(selectedDay, "EEEE, MMMM d, yyyy")}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                <Input
                  autoFocus
                  placeholder="Guest name"
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                />
                <Input
                  placeholder="Room or location"
                  value={draft.room}
                  onChange={(e) => setDraft({ ...draft, room: e.target.value })}
                />
                <div className="grid grid-cols-2 gap-2">
                  <Select
                    value={draft.streamId}
                    onValueChange={(streamId) => setDraft({ ...draft, streamId })}
                  >
                    <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {streams.map((stream) => (
                        <SelectItem key={stream.id} value={stream.id}>{stream.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={String(draft.hour)}
                    onValueChange={(hour) => setDraft({ ...draft, hour: Number(hour) })}
                  >
                    <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {HOUR_OPTIONS.map((option) => (
                        <SelectItem key={option.hour} value={String(option.hour)}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" size="sm" onClick={() => setDraft(null)}>Cancel</Button>
                <Button size="sm" onClick={saveDraft} disabled={!draft.name.trim()}>
                  Create booking
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EventCalendar3Block
