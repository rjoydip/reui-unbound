"use client"

import { useMemo, useRef, useState, type ComponentProps } from "react"
import {
  EventCalendar,
} from "@/components/kit/event-calendar/event-calendar"
import { EventCalendarContent } from "@/components/kit/event-calendar/~event-calendar-content"
import {
  EventCalendarNav,
  EventCalendarToolbar,
} from "@/components/kit/event-calendar/~event-calendar-nav"
import type { CalendarEvent } from "@/components/kit/event-calendar/~event-calendar-types"
import { addDays, eachDayOfInterval, format, setHours, startOfDay } from "date-fns"
import type { DayButton } from "react-day-picker"
import {
  EllipsisIcon,
  PencilIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react"

import { cn } from "cn"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
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
}

const INITIAL_CALENDARS: CalendarDef[] = [
  { id: "work", name: "Work", color: PALETTE[0] },
  { id: "meetings", name: "Meetings", color: PALETTE[1] },
  { id: "focus", name: "Focus", color: PALETTE[2] },
  { id: "personal", name: "Personal", color: PALETTE[3] },
  { id: "travel", name: "Travel", color: PALETTE[4] },
]

const day = (offset: number, hour = 0, minute = 0) => {
  const date = addDays(ANCHOR, offset)
  date.setHours(hour, minute, 0, 0)
  return date
}
const dayStart = (offset: number) => startOfDay(day(offset))

function make(
  id: string,
  title: string,
  calendarId: string,
  start: Date,
  end: Date,
  allDay = false
): CalendarEvent<EventData> {
  return {
    id,
    title,
    start,
    end,
    allDay,
    color: INITIAL_CALENDARS.find((item) => item.id === calendarId)?.color,
    data: { calendarId },
  }
}

const SEED: CalendarEvent<EventData>[] = [
  make("design-week-1", "Design review", "work", day(-7, 10), day(-7, 11)),
  make("weekly-week-1", "Weekly planning", "meetings", day(-6, 9, 30), day(-6, 10)),
  make("time-off-jul", "Time off", "personal", dayStart(-5), dayStart(-4), true),
  make("weekly-planning", "Weekly planning", "meetings", day(-2, 9, 30), day(-2, 10)),
  make("one-on-one", "1:1 with Leo", "meetings", day(-1, 11), day(-1, 11, 30)),
  make("offsite", "Offsite", "travel", dayStart(2), dayStart(3), true),
  make("interview", "Interview: System design", "meetings", day(1, 10), day(1, 10, 45)),
  make("lunch", "Lunch with Nora", "personal", day(0, 12, 30), day(0, 13, 30)),
  make("design-review", "Design review", "work", day(0, 14), day(0, 15)),
  make("focus-block", "Focus block", "focus", day(-1, 14), day(-1, 16)),
  make("roadmap", "Roadmap review", "meetings", day(2, 14), day(2, 15)),
  make("client-call", "Client call: Northstar", "meetings", day(2, 14, 30), day(2, 15)),
  make("interview-2", "Interview: System design", "meetings", day(5, 10), day(5, 10, 45)),
  make("focus-block-2", "Focus block", "focus", day(6, 14), day(6, 16)),
  make("quarterly-2", "Quarterly planning", "work", day(8, 13), day(8, 14)),
  make("monthly-2", "Monthly review", "meetings", day(12, 10), day(12, 10, 30)),
  make("client-call-2", "Client call: Northstar", "meetings", day(13, 15), day(13, 15, 30)),
  make("release-day", "Release day", "work", dayStart(15), dayStart(16), true),
]

const UP_NEXT = [
  { calendarId: "personal", title: "Lunch with Nora", meta: "Wed, Jul 8 · 12:30 PM" },
  { calendarId: "meetings", title: "Interview: System design", meta: "Thu, Jul 9 · 10:00 AM" },
  { calendarId: "meetings", title: "Roadmap review", meta: "Thu, Jul 9 · 1:00 PM" },
  { calendarId: "meetings", title: "Client call: Northstar", meta: "Thu, Jul 9 · 1:30 PM" },
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

interface CalendarDraft {
  id: string
  name: string
  color: string
}

export function EventCalendarMiniMonthCalendarBlock() {
  const [calendars, setCalendars] = useState<CalendarDef[]>(INITIAL_CALENDARS)
  const [events, setEvents] = useState<CalendarEvent<EventData>[]>(SEED)
  const [hidden, setHidden] = useState<Set<string>>(new Set())
  const [anchor, setAnchor] = useState<Date>(ANCHOR)
  const [month, setMonth] = useState<Date>(ANCHOR)
  const [calendarDraft, setCalendarDraft] = useState<CalendarDraft | null>(null)
  const [draft, setDraft] = useState<{ title: string; calendarId: string } | null>(null)
  const [selected, setSelected] = useState<CalendarEvent<EventData> | null>(null)
  const counter = useRef(0)

  const colorOf = (id: string) =>
    calendars.find((calendar) => calendar.id === id)?.color ?? PALETTE[0]

  const visibleEvents = useMemo(
    () => events.filter((item) => !hidden.has(item.data?.calendarId ?? "")),
    [events, hidden]
  )

  const eventDays = useMemo(() => {
    const days: Date[] = []
    for (const item of events) {
      const end = item.allDay ? new Date(item.end.getTime() - 1) : item.end
      days.push(
        ...eachDayOfInterval({
          start: startOfDay(item.start),
          end: startOfDay(end),
        })
      )
    }
    return days
  }, [events])

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

  const saveCalendar = () => {
    if (!calendarDraft?.name.trim()) return
    const { id, name, color } = calendarDraft
    setCalendars((previous) =>
      previous.map((calendar) => (calendar.id === id ? { ...calendar, name, color } : calendar))
    )
    setEvents((previous) =>
      previous.map((item) => (item.data?.calendarId === id ? { ...item, color } : item))
    )
    setCalendarDraft(null)
  }

  const removeCalendar = (id: string) => {
    if (calendars.length <= 1) return
    setCalendars((previous) => previous.filter((calendar) => calendar.id !== id))
    setEvents((previous) => previous.filter((item) => item.data?.calendarId !== id))
  }

  const saveDraft = () => {
    const calendar = calendars.find((item) => item.id === draft?.calendarId) ?? calendars[0]
    if (!draft?.title.trim() || !calendar) return
    const start = setHours(startOfDay(anchor), 9)
    setEvents((previous) => [
      ...previous,
      {
        id: `new-event-${counter.current++}`,
        title: draft.title.trim(),
        start,
        end: new Date(start.getTime() + 60 * 60_000),
        color: calendar.color,
        data: { calendarId: calendar.id },
      },
    ])
    setDraft(null)
  }

  return (
    <div className="h-svh p-4">
      <div className="bg-background flex h-full overflow-hidden rounded-xl border">
        <aside className="hidden w-80 shrink-0 flex-col border-r lg:flex">
          <div className="px-3 py-3">
            <Calendar
              mode="single"
              month={month}
              onMonthChange={setMonth}
              selected={anchor}
              onSelect={(date) => {
                if (!date) return
                setAnchor(date)
                setMonth(date)
              }}
              weekStartsOn={1}
              showOutsideDays
              modifiers={{ hasEvents: eventDays }}
              components={{ DayButton: CalendarDot }}
              className="w-full p-0 [--cell-size:--spacing(9)]"
            />
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
            <p className="text-muted-foreground text-xs font-medium">Up Next</p>
            <ul className="mt-3 flex flex-col gap-3">
              {UP_NEXT.map((item) => (
                <li key={item.title} className="flex gap-2">
                  <span
                    className="mt-1.5 size-2 shrink-0 rounded-full"
                    style={{ backgroundColor: colorOf(item.calendarId) }}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{item.title}</p>
                    <p className="text-muted-foreground text-xs">{item.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6 text-xs font-medium">My Calendars</p>
            <ul className="mt-2 flex flex-col">
              {calendars.map((calendar) => {
                const visible = !hidden.has(calendar.id)
                return (
                  <li
                    key={calendar.id}
                    className="hover:bg-muted/50 group flex items-center gap-2 rounded-md px-1.5 py-1.5"
                  >
                    <Checkbox
                      checked={visible}
                      aria-label={`Show ${calendar.name}`}
                      onCheckedChange={() => toggleCalendar(calendar.id)}
                      style={visible ? { backgroundColor: calendar.color, borderColor: calendar.color, color: "#fff" } : undefined}
                    />
                    <button
                      type="button"
                      onClick={() => toggleCalendar(calendar.id)}
                      className="flex-1 text-start text-sm"
                    >
                      {calendar.name}
                    </button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          aria-label={`${calendar.name} options`}
                          className="opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                        >
                          <EllipsisIcon className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-36">
                        <DropdownMenuItem
                          onSelect={() =>
                            setCalendarDraft({ id: calendar.id, name: calendar.name, color: calendar.color })
                          }
                        >
                          <PencilIcon className="size-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          variant="destructive"
                          onSelect={() => removeCalendar(calendar.id)}
                        >
                          <Trash2Icon className="size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
            scrollToHour={7}
            date={anchor}
            onDateChange={(date) => {
              setAnchor(date)
              setMonth(date)
            }}
            defaultView="week"
            views={["month", "week", "day", "agenda"]}
            events={visibleEvents}
            onEventsChange={handleEventsChange}
            onEventClick={(occurrence, mouseEvent) => {
              mouseEvent.preventDefault()
              setSelected(occurrence.event)
            }}
          >
            <div className="flex items-center gap-2 border-b pe-2">
              <EventCalendarNav className="min-w-0 flex-1" />
              <EventCalendarToolbar>
                <Button
                  size="sm"
                  onClick={() =>
                    setDraft({ title: "", calendarId: calendars[0]?.id ?? "work" })
                  }
                >
                  <PlusIcon className="size-4" /> New event
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
                <DialogDescription>
                  {selected.allDay
                    ? `${format(selected.start, "EEE, MMM d")} · All day`
                    : `${format(selected.start, "EEE, MMM d · h:mm a")} – ${format(selected.end, "h:mm a")}`}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-2.5 text-sm">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full" style={{ backgroundColor: selected.color }} />
                  {calendars.find((calendar) => calendar.id === selected.data?.calendarId)?.name}
                </div>
              </div>
              <DialogFooter className="sm:justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={() => {
                    setEvents((previous) => previous.filter((item) => item.id !== selected.id))
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

      <Dialog open={calendarDraft !== null} onOpenChange={(open) => !open && setCalendarDraft(null)}>
        <DialogContent className="sm:max-w-sm">
          {calendarDraft && (
            <>
              <DialogHeader>
                <DialogTitle>Edit calendar</DialogTitle>
                <DialogDescription>Name and color for this calendar.</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                <Input
                  autoFocus
                  value={calendarDraft.name}
                  onChange={(e) =>
                    setCalendarDraft({ ...calendarDraft, name: e.target.value })
                  }
                  placeholder="Calendar name"
                />
                <div className="flex gap-2">
                  {PALETTE.map((color) => (
                    <button
                      key={color}
                      type="button"
                      aria-label={`Use ${color}`}
                      aria-pressed={calendarDraft.color === color}
                      onClick={() => setCalendarDraft({ ...calendarDraft, color })}
                      style={{ backgroundColor: color }}
                      className={cn(
                        "ring-offset-background size-6 rounded-full",
                        calendarDraft.color === color && "ring-ring ring-2 ring-offset-2"
                      )}
                    />
                  ))}
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" size="sm" onClick={() => setCalendarDraft(null)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={saveCalendar}>
                  Save
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
                <DialogTitle>New event</DialogTitle>
                <DialogDescription>
                  {format(anchor, "EEEE, MMMM d, yyyy")} · 9:00 AM
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                <Input
                  autoFocus
                  placeholder="Event title"
                  value={draft.title}
                  onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                />
                <Select
                  value={draft.calendarId}
                  onValueChange={(calendarId) => setDraft({ ...draft, calendarId })}
                >
                  <SelectTrigger size="sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {calendars.map((calendar) => (
                      <SelectItem key={calendar.id} value={calendar.id}>
                        {calendar.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <Button variant="outline" size="sm" onClick={() => setDraft(null)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={saveDraft} disabled={!draft.title.trim()}>
                  Create event
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EventCalendarMiniMonthCalendarBlock
