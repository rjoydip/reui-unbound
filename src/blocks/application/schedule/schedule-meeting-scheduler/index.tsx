import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon, CirclePlayIcon, DoorOpenIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "cn"

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const SLOTS = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"]

export function ScheduleMeetingSchedulerBlock() {
  const [month, setMonth] = useState(new Date(2026, 5, 1))
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 5, 30))
  const [time, setTime] = useState("10:00")
  const [waitingRoom, setWaitingRoom] = useState(true)
  const [record, setRecord] = useState(false)

  return (
    <div className="bg-background text-foreground flex min-h-svh items-start justify-center p-8">
      <div className="bg-card w-full max-w-[512px] overflow-hidden rounded-xl border shadow-sm">
        <div className="border-b p-4">
          <h1 className="text-sm font-semibold">Schedule Meeting</h1>
          <p className="text-muted-foreground text-xs">Asia/Calcutta</p>
        </div>

        <div className="p-3">
          <div className="overflow-hidden rounded-lg border">
            <div className="grid grid-cols-[minmax(0,1fr)_160px]">
              <div className="border-b p-3">
                <div className="flex items-center gap-2">
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
                  className="w-full p-0 [--cell-size:--spacing(8)]"
                />
              </div>
              <div className="border-b p-3">
                <p className="text-sm font-semibold">
                  {date ? `${date.toLocaleDateString("en-US", { weekday: "long" })}, ${date.getDate()}` : "Pick a date"}
                </p>
                <div className="mt-2 max-h-[250px] space-y-1.5 overflow-y-auto pr-1">
                  {SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={cn(
                        "w-full rounded-md border px-3 py-1.5 text-sm transition-colors",
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

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Duration</label>
              <Select defaultValue="30 min">
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["15 min", "30 min", "45 min", "60 min"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Recurrence</label>
              <Select defaultValue="Every week">
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Does not repeat", "Every day", "Every week", "Every month"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-3 space-y-1.5">
            <label htmlFor="meeting-title" className="text-sm font-medium">Title</label>
            <Input id="meeting-title" placeholder="e.g. Weekly standup" />
          </div>
          <div className="mt-3 space-y-1.5">
            <label htmlFor="meeting-description" className="text-sm font-medium">Description</label>
            <Textarea id="meeting-description" rows={3} placeholder="Add agenda or notes…" />
          </div>

          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-2 text-sm">
              <DoorOpenIcon className="text-muted-foreground size-4" />
              Waiting room
              <Switch checked={waitingRoom} onCheckedChange={setWaitingRoom} className="ml-auto" aria-label="Waiting room" />
            </label>
            <label className="flex items-center gap-2 text-sm">
              <CirclePlayIcon className="text-muted-foreground size-4" />
              Auto-record
              <Switch checked={record} onCheckedChange={setRecord} className="ml-auto" aria-label="Auto record" />
            </label>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 border-t p-3">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Schedule meeting</Button>
        </div>
      </div>
    </div>
  )
}

export default ScheduleMeetingSchedulerBlock
