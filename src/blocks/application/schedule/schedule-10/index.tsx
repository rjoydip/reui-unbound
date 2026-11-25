import { useState } from "react"
import {
  CalendarClockIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  SunIcon,
  XIcon,
} from "lucide-react"

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
const SLOTS = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00"]
const DISABLED = ["12:00", "12:30"]

const TODAY = new Date(2026, 5, 30)
const TOMORROW = new Date(2026, 6, 1)
const LATER = new Date(2026, 6, 2)
const NEXT_WEEK = new Date(2026, 6, 6)

const QUICK = [
  { label: "Today", meta: "Tuesday", date: TODAY, icon: SunIcon, tone: "text-foreground" },
  { label: "Tomorrow", meta: "Wednesday", date: TOMORROW, icon: ClockIcon, tone: "text-amber-500" },
  { label: "Later this week", meta: "Thursday", date: LATER, icon: CalendarIcon, tone: "text-emerald-500" },
  { label: "Next week", meta: "Mon, Jul 6", date: NEXT_WEEK, icon: CalendarClockIcon, tone: "text-violet-500" },
]

export function Schedule10Block() {
  const [month, setMonth] = useState(new Date(2026, 5, 1))
  const [date, setDate] = useState<Date | undefined>(TODAY)
  const [time, setTime] = useState("10:00")
  const [quick, setQuick] = useState("Today")

  return (
    <div className="bg-background text-foreground flex min-h-svh items-start justify-center p-8">
      <div className="bg-card w-full max-w-[512px] overflow-hidden rounded-xl border shadow-sm">
        <div className="border-b px-4 py-2.5">
          <p className="text-sm font-semibold">Asia/Calcutta</p>
        </div>

        <div className="p-3">
          <div className="space-y-0.5">
            {QUICK.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => { setDate(item.date); setQuick(item.label); setMonth(new Date(item.date.getFullYear(), item.date.getMonth(), 1)) }}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
                  quick === item.label ? "bg-muted" : "hover:bg-muted/60"
                )}
              >
                <item.icon className={cn("size-4", item.tone)} />
                {item.label}
                <span className="text-muted-foreground ml-auto text-xs">{item.meta}</span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => { setDate(undefined); setQuick("none") }}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm text-destructive transition-colors",
                quick === "none" ? "bg-muted" : "hover:bg-muted/60"
              )}
            >
              <XIcon className="size-4" />
              No date
              <span className="text-muted-foreground ml-auto text-xs">Remove deadline</span>
            </button>
          </div>

          <div className="mt-2 overflow-hidden rounded-lg border">
            <div className="grid grid-cols-[minmax(0,1fr)_160px]">
              <div className="border-b p-3 md:border-r md:border-b-0">
                <div className="flex items-center gap-1.5">
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
                  onSelect={(value) => { setDate(value); setQuick("none") }}
                  hideNavigation
                  classNames={{ month_caption: "hidden" }}
                  className="w-full p-0 [--cell-size:--spacing(8)]"
                />
              </div>

              <div className="p-3">
                <p className="text-sm font-semibold">
                  {date ? `${date.toLocaleDateString("en-US", { weekday: "long" })}, ${date.getDate()}` : "Pick a date"}
                </p>
                <div className="mt-2 max-h-[250px] space-y-1.5 overflow-y-auto pr-1">
                  {SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      disabled={DISABLED.includes(slot)}
                      onClick={() => setTime(slot)}
                      className={cn(
                        "w-full rounded-md border px-3 py-1.5 text-sm transition-colors disabled:opacity-40",
                        time === slot ? "bg-foreground text-background border-transparent" : "hover:bg-muted"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t p-3">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm" disabled={!date}>Apply</Button>
        </div>
      </div>
    </div>
  )
}

export default Schedule10Block
