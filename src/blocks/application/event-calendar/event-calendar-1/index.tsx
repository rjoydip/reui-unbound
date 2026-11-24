"use client"

import { useMemo, useRef, useState } from "react"
import {
  EventCalendar,
  type EventCalendarRenderEventProps,
} from "@/components/kit/event-calendar/event-calendar"
import { EventCalendarContent } from "@/components/kit/event-calendar/~event-calendar-content"
import {
  EventCalendarNav,
  EventCalendarToolbar,
} from "@/components/kit/event-calendar/~event-calendar-nav"
import type {
  CalendarEvent,
  EventCalendarOccurrence,
} from "@/components/kit/event-calendar/~event-calendar-types"
import { addDays, addMinutes, format, setHours, startOfDay } from "date-fns"
import {
  ChevronDownIcon,
  MapPinIcon,
  PlusIcon,
  RepeatIcon,
  Trash2Icon,
  UsersIcon,
} from "lucide-react"

import { cn } from "cn"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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

const ANCHOR = new Date(2026, 6, 1)
const PALETTE = [
  "var(--color-blue-500)",
  "var(--color-violet-500)",
  "var(--color-amber-500)",
  "var(--color-emerald-500)",
  "var(--color-rose-500)",
]

interface CalendarDef {
  id: string
  name: string
  color: string
}

interface EventData {
  calendarId: string
  guests?: string[]
  location?: string
}

const CALENDARS: CalendarDef[] = [
  { id: "work", name: "Work", color: PALETTE[0] },
  { id: "meetings", name: "Meetings", color: PALETTE[1] },
  { id: "focus", name: "Focus", color: PALETTE[2] },
  { id: "personal", name: "Personal", color: PALETTE[3] },
  { id: "travel", name: "Travel", color: PALETTE[4] },
]

const TONES = ["bg-sky-500", "bg-violet-500", "bg-amber-500", "bg-emerald-500", "bg-rose-500"]
const day = (offset: number) => addDays(ANCHOR, offset)
const at = (offset: number, hour: number, minute = 0) => addMinutes(setHours(day(offset), hour), minute)

const initials = (name: string) =>
  name.split(" ").map((part) => part[0]).slice(0, 2).join("")

function make(
  id: string,
  title: string,
  calendarId: string,
  start: Date,
  end: Date,
  extra: Partial<CalendarEvent<EventData>> = {},
  data: Partial<EventData> = {}
): CalendarEvent<EventData> {
  const color = CALENDARS.find((item) => item.id === calendarId)?.color ?? PALETTE[0]
  return { id, title, start, end, color, data: { calendarId, ...data }, ...extra }
}

const SEED: CalendarEvent<EventData>[] = [
  make("time-off", "Time off", "personal", day(0), day(3), { allDay: true }),
  make("one-on-one", "1:1 with Leo", "meetings", at(1, 11), at(1, 11, 30), {}, { guests: ["Leo Tanaka"], location: "Meet · Zoom" }),
  make("offsite", "Offsite", "travel", day(1), day(3), { allDay: true }),
  make("weekly-planning", "Weekly planning", "meetings", at(5, 9, 30), at(5, 10), { recurrence: { freq: "weekly", count: 3 } }, { guests: ["Ava Brooks"] }),
  make("design-review", "Design review", "work", at(6, 10), at(6, 10, 30), {}, { guests: ["Mia Chen"], location: "Studio 2" }),
  make("focus-block", "Focus block", "focus", at(7, 14), at(7, 15)),
  make("client-call", "Client call: Northstar", "meetings", at(9, 15), at(9, 15, 30), {}, { guests: ["Noah Patel"] }),
  make("interview", "Interview: System design", "meetings", at(13, 10), at(13, 10, 45), {}, { guests: ["Iris Hale", "Sam Ortiz", "Lena Ford"], location: "Studio 1" }),
  make("quarterly", "Quarterly planning", "work", at(15, 13), at(15, 14), {}, { guests: ["Ava Brooks", "Leo Tanaka"], location: "Boardroom" }),
  make("monthly-review", "Monthly review", "meetings", at(20, 10), at(20, 10, 30), {}, { guests: ["Mia Chen", "Noah Patel", "Sam Ortiz"] }),
  make("release-day", "Release day", "work", day(22), day(23), { allDay: true }),
]

function GuestStack({ guests }: { guests: string[] }) {
  return (
    <span className="ms-auto flex shrink-0 items-center -space-x-1">
      {guests.slice(0, 2).map((guest, index) => (
        <Avatar key={guest} className="ring-background size-4 ring-1">
          <AvatarFallback className={cn("text-[7px] font-semibold text-white", TONES[index % TONES.length])}>
            {initials(guest)}
          </AvatarFallback>
        </Avatar>
      ))}
      {guests.length > 2 && (
        <span className="bg-muted text-muted-foreground ring-background flex size-4 items-center justify-center rounded-full text-[7px] font-semibold ring-1">
          +{guests.length - 2}
        </span>
      )}
    </span>
  )
}

function MonthChip({ occurrence, segment, view }: EventCalendarRenderEventProps<EventData>) {
  if (view !== "month") return undefined
  const { event, allDay } = occurrence
  return (
    <span className="flex w-full min-w-0 items-center gap-1.5">
      <span className="bg-(--ec-event-color) size-1.5 shrink-0 rounded-full" />
      {occurrence.isRecurring && <RepeatIcon className="size-2.5 shrink-0 opacity-70" />}
      <span className="truncate font-medium">{event.title}</span>
      {!allDay && segment.isStart && (
        <span className="text-muted-foreground shrink-0">{format(occurrence.start, "h:mm a")}</span>
      )}
      {event.data?.guests?.length ? <GuestStack guests={event.data.guests} /> : null}
    </span>
  )
}

const HOURS = Array.from({ length: 12 }, (_, index) => index + 8)
const HOUR_OPTIONS = HOURS.map((hour) => ({ hour, label: format(setHours(ANCHOR, hour), "h:mm a") }))

function whenLabel(occurrence: EventCalendarOccurrence<EventData>) {
  return occurrence.allDay
    ? `${format(occurrence.start, "EEE, MMM d")} · All day`
    : `${format(occurrence.start, "EEE, MMM d · h:mm a")} – ${format(occurrence.end, "h:mm a")}`
}

interface Draft {
  title: string
  calendarId: string
  hour: number
}

export function EventCalendar1Block() {
  const [calendars, setCalendars] = useState<CalendarDef[]>(CALENDARS)
  const [events, setEvents] = useState<CalendarEvent<EventData>[]>(SEED)
  const [hidden, setHidden] = useState<Set<string>>(new Set())
  const [selected, setSelected] = useState<EventCalendarOccurrence<EventData> | null>(null)
  const [draft, setDraft] = useState<Draft | null>(null)
  const counter = useRef(0)

  const visibleEvents = useMemo(
    () => events.filter((item) => !hidden.has(item.data?.calendarId ?? "")),
    [events, hidden]
  )

  // Hidden-calendar events stay in the store while drags from the visible set
  // write back, so re-showing a calendar never loses work.
  const handleEventsChange = (next: CalendarEvent<EventData>[]) => {
    const byId = new Map(next.map((item) => [item.id, item]))
    setEvents((previous) => previous.map((item) => byId.get(item.id) ?? item))
  }

  const toggleCalendar = (id: string) =>
    setHidden((previous) => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const addCalendar = () => {
    const nth = calendars.length - CALENDARS.length + 1
    setCalendars((previous) => [
      ...previous,
      {
        id: `calendar-${nth}`,
        name: nth === 1 ? "New calendar" : `New calendar ${nth}`,
        color: PALETTE[previous.length % PALETTE.length],
      },
    ])
  }

  const saveDraft = () => {
    const calendar = calendars.find((item) => item.id === draft?.calendarId)
    if (!draft?.title.trim() || !calendar) return
    const start = setHours(startOfDay(ANCHOR), draft.hour)
    setEvents((previous) => [
      ...previous,
      {
        id: `new-event-${counter.current++}`,
        title: draft.title.trim(),
        start,
        end: addMinutes(start, 60),
        color: calendar.color,
        data: { calendarId: calendar.id },
      },
    ])
    setDraft(null)
  }

  const selectedCalendar = calendars.find(
    (item) => item.id === selected?.event.data?.calendarId
  )

  return (
    <div className="h-svh p-4">
      <div className="bg-background flex h-full flex-col overflow-hidden rounded-xl border">
        <EventCalendar
          className="h-full"
          weekStartsOn={1}
          defaultDate={ANCHOR}
          defaultView="month"
          views={["month", "week", "day", "agenda"]}
          events={visibleEvents}
          onEventsChange={handleEventsChange}
          renderEvent={MonthChip}
          onEventClick={(occurrence, mouseEvent) => {
            mouseEvent.preventDefault()
            setSelected(occurrence)
          }}
        >
          <div className="flex items-center gap-2 border-b pe-2">
            <EventCalendarNav className="min-w-0 flex-1" />
            <EventCalendarToolbar>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary" size="sm">
                    <span className="flex items-center -space-x-1">
                      {calendars.slice(0, 5).map((calendar) => (
                        <span
                          key={calendar.id}
                          className="ring-background size-2.5 rounded-full ring-2"
                          style={{ backgroundColor: calendar.color }}
                        />
                      ))}
                    </span>
                    Calendars
                    <ChevronDownIcon className="text-muted-foreground size-3.5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-56 gap-1 p-1.5">
                  <p className="text-muted-foreground px-2 py-1 text-xs font-medium">Calendars</p>
                  {calendars.map((calendar) => {
                    const visible = !hidden.has(calendar.id)
                    return (
                      <div
                        key={calendar.id}
                        className="hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5"
                      >
                        <Checkbox
                          id={`ec1-${calendar.id}`}
                          checked={visible}
                          onCheckedChange={() => toggleCalendar(calendar.id)}
                          aria-label={`Show ${calendar.name}`}
                          style={visible ? { backgroundColor: calendar.color, borderColor: calendar.color, color: "#fff" } : undefined}
                        />
                        <label
                          htmlFor={`ec1-${calendar.id}`}
                          className="flex-1 cursor-pointer text-sm"
                        >
                          {calendar.name}
                        </label>
                      </div>
                    )
                  })}
                  <div className="bg-border my-1 h-px" />
                  <button
                    type="button"
                    onClick={addCalendar}
                    className="hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-start text-sm"
                  >
                    <PlusIcon className="size-4" /> New calendar
                  </button>
                </PopoverContent>
              </Popover>
              <Button
                size="sm"
                onClick={() => setDraft({ title: "", calendarId: calendars[0]?.id ?? "work", hour: 9 })}
              >
                <PlusIcon className="size-4" /> Add event
              </Button>
            </EventCalendarToolbar>
          </div>
          <EventCalendarContent />
        </EventCalendar>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-sm">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span className="size-2 rounded-full" style={{ backgroundColor: selected.event.color }} />
                  {selected.event.title}
                </DialogTitle>
                <DialogDescription>{whenLabel(selected)}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-2.5 text-sm">
                {selectedCalendar && (
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full" style={{ backgroundColor: selectedCalendar.color }} />
                    {selectedCalendar.name}
                  </div>
                )}
                {selected.event.data?.location && (
                  <div className="text-muted-foreground flex items-center gap-2">
                    <MapPinIcon className="size-4" /> {selected.event.data.location}
                  </div>
                )}
                {selected.event.data?.guests && (
                  <div className="flex items-center gap-2">
                    <UsersIcon className="text-muted-foreground size-4" />
                    <span className="text-muted-foreground">{selected.event.data.guests.join(", ")}</span>
                  </div>
                )}
                {selected.isRecurring && (
                  <div className="text-muted-foreground flex items-center gap-2">
                    <RepeatIcon className="size-4" /> Repeats weekly
                  </div>
                )}
              </div>
              <DialogFooter className="sm:justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={() => {
                    setEvents((previous) => previous.filter((item) => item.id !== selected.eventId))
                    setSelected(null)
                  }}
                >
                  <Trash2Icon className="size-4" /> Delete
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
                <DialogTitle>Add event</DialogTitle>
                <DialogDescription>{format(ANCHOR, "EEEE, MMMM d, yyyy")}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                <Input
                  autoFocus
                  placeholder="Event title"
                  value={draft.title}
                  onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                />
                <div className="grid grid-cols-2 gap-2">
                  <Select
                    value={draft.calendarId}
                    onValueChange={(calendarId) => setDraft({ ...draft, calendarId })}
                  >
                    <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {calendars.map((calendar) => (
                        <SelectItem key={calendar.id} value={calendar.id}>{calendar.name}</SelectItem>
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
                <Button size="sm" onClick={saveDraft} disabled={!draft.title.trim()}>Create event</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EventCalendar1Block
