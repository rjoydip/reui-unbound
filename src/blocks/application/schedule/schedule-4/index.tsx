import { useState } from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  GlobeIcon,
  LayoutGridIcon,
  VideoIcon,
} from "lucide-react"

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
const SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30"]
const AVAILABLE = [16, 17, 18, 19, 23, 26, 29, 30]

export function Schedule4Block() {
  const [month, setMonth] = useState(new Date(2026, 5, 1))
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 5, 15))
  const [slot, setSlot] = useState("")

  return (
    <div className="bg-background text-foreground flex min-h-svh items-start justify-center p-8">
      <div className="bg-card w-full max-w-[768px] overflow-hidden rounded-xl border shadow-sm">
        <div className="grid md:grid-cols-[192px_320px_176px]">
          <div className="flex flex-col items-center border-b p-4 text-center md:border-r md:border-b-0">
            <Avatar size="lg" className="size-16">
              <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=128&h=128&dpr=2&q=80" alt="" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <p className="mt-3 text-sm font-semibold">James Park</p>
            <p className="text-muted-foreground text-xs">Solutions Architect</p>
            <div className="mt-6 w-full space-y-2.5 text-left text-sm">
              <p className="flex items-center gap-2"><LayoutGridIcon className="text-muted-foreground size-4" />Career Coaching</p>
              <p className="flex items-center gap-2"><VideoIcon className="text-muted-foreground size-4" />Google Meet</p>
              <p className="flex items-center gap-2"><ClockIcon className="text-muted-foreground size-4" />30 minutes</p>
              <p className="flex items-center gap-2"><GlobeIcon className="text-muted-foreground size-4" />Asia/Calcutta (GMT+5:30)</p>
            </div>
          </div>

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
              onSelect={setDate}
              hideNavigation
              classNames={{ month_caption: "hidden" }}
              modifiers={{ available: AVAILABLE.map((day) => new Date(2026, 5, day)) }}
              modifiersClassNames={{ available: "relative after:absolute after:bottom-1.5 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-foreground" }}
              className="w-full p-0 [--cell-size:--spacing(9)]"
            />
          </div>

          <div className="p-3">
            <p className="text-sm font-semibold">
              {date ? date.toLocaleDateString("en-US", { weekday: "long", day: "numeric" }) : "Pick a date"}
            </p>
            <div className="mt-2 max-h-[300px] space-y-1.5 overflow-y-auto pr-1">
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
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t px-4 py-2.5">
          <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
            <ClockIcon className="size-3.5" />
            {date && slot ? `${date.toLocaleDateString("en-US", { month: "long", day: "numeric" })} at ${slot}` : "Select a date and time to continue"}
          </p>
          <Button size="sm" className="ml-auto" disabled={!date || !slot}>Confirm booking</Button>
        </div>
      </div>
    </div>
  )
}

export default Schedule4Block
