import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon } from "lucide-react"

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
const DURATIONS = ["15m", "30m", "45m", "60m", "90m"]
const SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00"]

export function ScheduleSessionBookingBlock() {
  const [month, setMonth] = useState(new Date(2026, 5, 1))
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [duration, setDuration] = useState("30m")
  const [slot, setSlot] = useState("")

  return (
    <div className="bg-background text-foreground flex min-h-svh items-start justify-center p-8">
      <div className="bg-card w-full max-w-[512px] overflow-hidden rounded-xl border shadow-sm">
        <div className="flex flex-wrap items-center gap-2 border-b p-3">
          <h1 className="text-sm font-semibold">Schedule a session</h1>
          <div className="ml-auto flex items-center gap-1">
            {DURATIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => { setDuration(option); setSlot("") }}
                className={cn(
                  "rounded-md border px-2 py-0.5 text-xs transition-colors",
                  duration === option ? "bg-foreground text-background border-transparent" : "hover:bg-muted"
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3">
          <div className="overflow-hidden rounded-lg border">
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
                  onSelect={(value) => { setDate(value); setSlot("") }}
                  hideNavigation
                  classNames={{ month_caption: "hidden" }}
                  className="w-full p-0 [--cell-size:--spacing(9)]"
                />
              </div>

              <div className="p-3">
                {date ? (
                  <>
                    <p className="text-sm font-semibold">
                      {date.toLocaleDateString("en-US", { weekday: "long", day: "numeric" })}
                    </p>
                    <p className="text-muted-foreground text-xs">{duration} session</p>
                    <div className="mt-2 max-h-[250px] space-y-1.5 overflow-y-auto pr-1">
                      {SLOTS.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSlot(time)}
                          className={cn(
                            "w-full rounded-md border px-3 py-1.5 text-sm transition-colors",
                            slot === time ? "bg-foreground text-background border-transparent" : "hover:bg-muted"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                    <span className="bg-muted flex size-10 items-center justify-center rounded-full">
                      <ClockIcon className="size-5" />
                    </span>
                    <p className="text-muted-foreground mt-3 max-w-[120px] text-sm">Select a date to see available times</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t px-3 py-2.5">
          <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
            <ClockIcon className="size-3.5" />
            {date && slot ? `${date.toLocaleDateString("en-US", { month: "long", day: "numeric" })} at ${slot} · ${duration}` : "Choose a date and time to book"}
          </p>
          <Button size="sm" className="ml-auto" disabled={!date || !slot}>Book session</Button>
        </div>
      </div>
    </div>
  )
}

export default ScheduleSessionBookingBlock
