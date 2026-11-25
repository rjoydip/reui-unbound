import { useState } from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  MapPinIcon,
  PlusIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

type Event = {
  id: number
  title: string
  day: number
  time: string
  location: string
  avatars: string[]
  extra: number
  status: "Upcoming" | "Completed" | "Cancelled"
}

const EVENTS: Event[] = [
  { id: 1, title: "Mobile QA Handoff", day: 10, time: "2:30 pm", location: "Remote", avatars: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"], extra: 1, status: "Upcoming" },
  { id: 2, title: "Quarterly All-Hands", day: 10, time: "4:00 pm", location: "Main Hall", avatars: ["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80"], extra: 0, status: "Upcoming" },
  { id: 3, title: "Marketing Campaign Review", day: 10, time: "10:30 am", location: "Google Meet", avatars: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80"], extra: 1, status: "Upcoming" },
  { id: 4, title: "Hiring Panel · Design", day: 10, time: "11:00 am", location: "Zoom", avatars: ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"], extra: 0, status: "Upcoming" },
  { id: 7, title: "Customer Support Sync", day: 10, time: "1:00 pm", location: "Zoom", avatars: ["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80"], extra: 2, status: "Upcoming" },
  { id: 8, title: "Security Review", day: 10, time: "3:15 pm", location: "Main Hall", avatars: ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80"], extra: 0, status: "Upcoming" },
  { id: 5, title: "Sprint Planning", day: 9, time: "9:00 am", location: "Main Hall", avatars: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80"], extra: 2, status: "Completed" },
  { id: 6, title: "Customer Advisory", day: 12, time: "1:00 pm", location: "Remote", avatars: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80"], extra: 0, status: "Cancelled" },
]

const DOT_DAYS = [4, 8, 9, 11, 13, 14, 17, 21, 24, 25, 27, 28]

export function ScheduleAppointmentPlannerBlock() {
  const [month, setMonth] = useState(new Date(2026, 5, 1))
  const [selected, setSelected] = useState<Date | undefined>(new Date(2026, 5, 10))
  const [filter, setFilter] = useState("All events")

  const events = EVENTS.filter(
    (event) =>
      event.day === selected?.getDate() &&
      (filter === "All events" || event.status === filter)
  )

  const shiftMonth = (offset: number) => {
    setMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1))
  }

  return (
    <div className="bg-background text-foreground flex min-h-svh items-start justify-center p-8">
      <div className="bg-card grid w-full max-w-[888px] overflow-hidden rounded-xl border shadow-sm md:grid-cols-[400px_minmax(0,1fr)]">
        <div className="border-b p-4 md:border-r md:border-b-0">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon-sm" aria-label="Previous month" onClick={() => shiftMonth(-1)}><ChevronLeftIcon /></Button>
            <Select value={String(month.getMonth())} onValueChange={(value) => setMonth(new Date(month.getFullYear(), Number(value), 1))}>
              <SelectTrigger size="sm" className="w-28"><SelectValue>{MONTHS[month.getMonth()]}</SelectValue></SelectTrigger>
              <SelectContent>
                {MONTHS.map((name, index) => <SelectItem key={name} value={String(index)}>{name}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={String(month.getFullYear())} onValueChange={(value) => setMonth(new Date(Number(value), month.getMonth(), 1))}>
              <SelectTrigger size="sm" className="w-24"><SelectValue /></SelectTrigger>
              <SelectContent>
                {[2025, 2026, 2027].map((year) => <SelectItem key={year} value={String(year)}>{year}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon-sm" aria-label="Next month" onClick={() => shiftMonth(1)}><ChevronRightIcon /></Button>
          </div>
          <Calendar
            mode="single"
            month={month}
            onMonthChange={setMonth}
            selected={selected}
            onSelect={setSelected}
            hideNavigation
            classNames={{ month_caption: "hidden" }}
            modifiers={{ event: DOT_DAYS.map((day) => new Date(2026, 5, day)) }}
            modifiersClassNames={{ event: "relative after:absolute after:top-1 after:right-1.5 after:size-1 after:rounded-full after:bg-muted-foreground" }}
            className="w-full [--cell-size:--spacing(10)]"
          />
        </div>

        <div className="flex min-h-[380px] flex-col p-4">
          <div className="flex flex-wrap items-start gap-2">
            <div className="min-w-0">
              <p className="text-sm font-semibold">
                {selected ? selected.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "Select a date"}
              </p>
              <p className="text-muted-foreground text-xs">{events.length} events</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger size="sm" className="w-32"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["All events", "Upcoming", "Completed", "Cancelled"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                </SelectContent>
              </Select>
              <Button size="sm"><PlusIcon />Add</Button>
            </div>
          </div>

          <div className="mt-3 max-h-[320px] space-y-2 overflow-y-auto pr-1">
            {events.map((event) => (
              <div key={event.id} className="rounded-lg border p-3">
                <p className="text-sm font-medium">{event.title}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-xs">
                  <Badge
                    variant={event.status === "Upcoming" ? "focus-light" : event.status === "Completed" ? "success-light" : "destructive-light"}
                    size="sm"
                  >
                    {event.status}
                  </Badge>
                  <span className="flex -space-x-1.5">
                    {event.avatars.map((src) => (
                      <Avatar key={src} size="sm" className="size-5 ring-2 ring-card">
                        <AvatarImage src={src} alt="" />
                        <AvatarFallback>EV</AvatarFallback>
                      </Avatar>
                    ))}
                    {event.extra ? <span className="text-muted-foreground ml-2">+{event.extra}</span> : null}
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1"><ClockIcon className="size-3.5" />Jun {event.day} · {event.time}</span>
                  <span className="text-muted-foreground flex items-center gap-1"><MapPinIcon className="size-3.5" />{event.location}</span>
                </div>
              </div>
            ))}
            {events.length === 0 ? (
              <p className="text-muted-foreground py-10 text-center text-sm">No events match this filter.</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleAppointmentPlannerBlock
