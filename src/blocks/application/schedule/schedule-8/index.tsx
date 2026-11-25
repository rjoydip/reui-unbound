import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "cn"

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const CATEGORIES = [
  { label: "Sprint", color: "bg-violet-500", dot: "after:bg-violet-500" },
  { label: "Standup", color: "bg-amber-500", dot: "after:bg-amber-500" },
  { label: "Review", color: "bg-sky-500", dot: "after:bg-sky-500" },
  { label: "Deadline", color: "bg-rose-500", dot: "after:bg-rose-500" },
  { label: "Workshop", color: "bg-emerald-500", dot: "after:bg-emerald-500" },
]

const EVENTS = [
  { title: "Sprint Kickoff", time: "Jun 9, 9am - 10:30am", category: "Sprint", avatars: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"], extra: 1 },
  { title: "Eng Standup", time: "Jun 9, 9:30am - 9:45am", category: "Standup", avatars: ["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80"], extra: 0 },
  { title: "Design Review", time: "Jun 9, 11am - 12pm", category: "Review", avatars: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80"], extra: 0 },
  { title: "Roadmap Workshop", time: "Jun 9, 2pm - 3:30pm", category: "Workshop", avatars: ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80"], extra: 2 },
]

const DOT_DAYS = [4, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 23, 24, 25, 26, 30]

export function Schedule8Block() {
  const [month, setMonth] = useState(new Date(2026, 5, 1))
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 5, 9))
  const [filter, setFilter] = useState("All")

  const events = EVENTS.filter((event) => filter === "All" || event.category === filter)

  return (
    <div className="bg-background text-foreground flex min-h-svh items-start justify-center p-8">
      <div className="bg-card w-full max-w-[384px] overflow-hidden rounded-xl border shadow-sm">
        <div className="flex items-center gap-1.5 p-3 pb-0">
          <Button variant="ghost" size="icon-sm" aria-label="Previous month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}><ChevronLeftIcon /></Button>
          <Select value={String(month.getMonth())} onValueChange={(value) => setMonth(new Date(month.getFullYear(), Number(value), 1))}>
            <SelectTrigger size="sm" className="w-24"><SelectValue /></SelectTrigger>
            <SelectContent>{MONTHS.map((name, index) => <SelectItem key={name} value={String(index)}>{name}</SelectItem>)}</SelectContent>
          </Select>
          <Select value={String(month.getFullYear())} onValueChange={(value) => setMonth(new Date(Number(value), month.getMonth(), 1))}>
            <SelectTrigger size="sm" className="w-20"><SelectValue /></SelectTrigger>
            <SelectContent>{[2025, 2026, 2027].map((year) => <SelectItem key={year} value={String(year)}>{year}</SelectItem>)}</SelectContent>
          </Select>
          <Button variant="ghost" size="icon-sm" aria-label="Next month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}><ChevronRightIcon /></Button>
        </div>

        <Calendar
          mode="single"
          month={month}
          onMonthChange={setMonth}
          selected={date}
          onSelect={setDate}
          hideNavigation
          classNames={{ month_caption: "hidden" }}
          modifiers={{ event: DOT_DAYS.map((day) => new Date(2026, 5, day)) }}
          modifiersClassNames={{ event: "relative after:absolute after:bottom-1 after:left-1/2 after:size-1 after:-translate-x-1 after:rounded-full after:bg-violet-500 after:shadow-[3px_0_0_#f59e0b,6px_0_0_#10b981]" }}
          className="w-full px-3 pb-2 [--cell-size:--spacing(9)]"
        />

        <div className="border-t p-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">
              {date ? date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "Pick a date"}
            </p>
            <Button variant="ghost" size="icon-xs" aria-label="Add event"><PlusIcon /></Button>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["All", ...CATEGORIES.map((category) => category.label)].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setFilter(label)}
                className={cn(
                  "flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
                  filter === label ? "bg-foreground text-background border-transparent" : "hover:bg-muted"
                )}
              >
                {label !== "All" ? (
                  <span className={cn("size-1.5 rounded-full", CATEGORIES.find((item) => item.label === label)?.color)} />
                ) : null}
                {label}
              </button>
            ))}
          </div>
          <div className="mt-2 max-h-[170px] space-y-1.5 overflow-y-auto pr-1">
            {events.map((event) => (
              <div key={event.title} className="flex items-start gap-2 rounded-lg border p-2">
                <span className={cn("mt-0.5 h-9 w-1 rounded-full", CATEGORIES.find((item) => item.label === event.category)?.color)} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{event.title}</p>
                  <p className="text-muted-foreground text-xs">{event.time}</p>
                </div>
                <div className="flex -space-x-1.5">
                  {event.avatars.map((src) => (
                    <Avatar key={src} size="sm" className="size-5 ring-2 ring-card">
                      <AvatarImage src={src} alt="" />
                      <AvatarFallback>TA</AvatarFallback>
                    </Avatar>
                  ))}
                  {event.extra ? <span className="text-muted-foreground ml-2 self-center text-xs">+{event.extra}</span> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule8Block
