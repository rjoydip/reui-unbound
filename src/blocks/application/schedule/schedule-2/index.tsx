import { useState } from "react"
import { ClockIcon, EllipsisIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "cn"

const TIMES = Array.from({ length: 24 }, (_, index) => {
  const hour = index
  const suffix = hour < 12 ? "AM" : "PM"
  const display = hour % 12 === 0 ? 12 : hour % 12
  return `${String(display).padStart(2, "0")}:00 ${suffix}`
})

const PRESETS = ["15 min", "30 min", "1 hour", "2 hours", "3 hours", "4 hours", "5 hours", "6 hours", "7 hours", "8 hours"]

const format = (index: number) => TIMES[(index + 24) % 24]

const durationLabel = (start: string, end: string) => {
  const startIndex = TIMES.indexOf(start)
  const endIndex = TIMES.indexOf(end)
  const hours = (endIndex - startIndex + 24) % 24 || 24
  if (hours === 1) return "1 hour"
  return `${hours} hours`
}

export function Schedule2Block() {
  const [start, setStart] = useState("09:00 AM")
  const [end, setEnd] = useState("10:00 AM")

  const applyPreset = (preset: string) => {
    const hours = preset.includes("hour") ? Number.parseInt(preset, 10) : Number.parseInt(preset, 10) / 60
    const startIndex = TIMES.indexOf(start)
    setEnd(format(startIndex + hours))
  }

  const activePreset = PRESETS.find((preset) => {
    const hours = preset.includes("hour") ? Number.parseInt(preset, 10) : Number.parseInt(preset, 10) / 60
    return (TIMES.indexOf(end) - TIMES.indexOf(start) + 24) % 24 === hours
  })

  return (
    <div className="bg-background text-foreground flex min-h-svh items-start justify-center p-8">
      <div className="bg-card w-full max-w-[456px] overflow-hidden rounded-xl border shadow-sm">
        <div className="flex items-center gap-2.5 border-b p-3">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" alt="" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-sm font-semibold">Alex Johnson</p>
            <p className="text-muted-foreground text-xs">Founder &amp; CEO</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="ml-auto" aria-label="Time range actions"><EllipsisIcon /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem>Copy time range</DropdownMenuItem>
              <DropdownMenuItem>Save as preset</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="p-3">
          <div className="bg-muted/30 rounded-lg border p-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Start time</label>
                <Select value={start} onValueChange={(value) => {
                  setStart(value)
                  setEnd(format(TIMES.indexOf(value) + 1))
                }}>
                  <SelectTrigger className="w-full bg-card"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {TIMES.map((time) => <SelectItem key={time} value={time}>{time}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">End time</label>
                <Select value={end} onValueChange={setEnd}>
                  <SelectTrigger className="w-full bg-card"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {TIMES.map((time) => <SelectItem key={time} value={time}>{time}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <p className="mt-4 text-sm font-medium">Duration</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => applyPreset(preset)}
                  className={cn(
                    "hover:bg-muted rounded-md border px-2.5 py-1.5 text-sm transition-colors",
                    activePreset === preset && "bg-foreground text-background border-transparent hover:bg-foreground"
                  )}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t p-3">
          <ClockIcon className="text-muted-foreground size-4" />
          <p className="text-muted-foreground text-sm">Selected duration: <span className="text-foreground font-medium">{durationLabel(start, end)}</span></p>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Apply</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule2Block
