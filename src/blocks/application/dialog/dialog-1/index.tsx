import { useState } from "react"
import { CheckIcon, ClockIcon, InfoIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const TIME_OPTIONS = Array.from({ length: 48 }, (_, index) => {
  const hour24 = Math.floor(index / 2)
  const suffix = hour24 < 12 ? "AM" : "PM"
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12
  return `${String(hour12).padStart(2, "0")}:${index % 2 === 0 ? "00" : "30"} ${suffix}`
})

const DURATION_PRESETS = [
  { id: "30-min", label: "30 min", minutes: 30 },
  { id: "2-hours", label: "2 hours", minutes: 120 },
  { id: "4-hours", label: "4 hours", minutes: 240 },
  { id: "8-hours", label: "8 hours", minutes: 480 },
  { id: "12-hours", label: "12 hours", minutes: 720 },
  { id: "1-day", label: "1 day", minutes: 1440 },
]

export function Dialog1Block() {
  const [open, setOpen] = useState(false)
  const [startTime, setStartTime] = useState("02:00 AM")
  const [endTime, setEndTime] = useState("02:30 AM")

  const startIndex = TIME_OPTIONS.indexOf(startTime)
  const endIndex = TIME_OPTIONS.indexOf(endTime)
  const durationMinutes =
    ((endIndex - startIndex + TIME_OPTIONS.length) % TIME_OPTIONS.length || TIME_OPTIONS.length) * 30
  const activePreset = DURATION_PRESETS.find((preset) => preset.minutes === durationMinutes)?.id

  function applyPreset(presetId: string) {
    const preset = DURATION_PRESETS.find((item) => item.id === presetId)
    if (!preset) return
    setEndTime(TIME_OPTIONS[(startIndex + preset.minutes / 30) % TIME_OPTIONS.length])
  }

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <h1 className="sr-only">Duration picker dialog</h1>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Select duration
      </Button>

      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-[560px]">
          <DialogHeader className="flex-row items-start gap-3 p-5 pb-4">
            <div className="bg-muted/60 flex size-10 shrink-0 items-center justify-center rounded-lg border">
              <ClockIcon className="size-5" />
            </div>
            <div className="grid gap-1.5">
              <DialogTitle>Select duration</DialogTitle>
              <DialogDescription>Pick a start and end time or use a quick preset.</DialogDescription>
            </div>
          </DialogHeader>

          <div className="grid gap-4 px-5 pb-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="dialog-1-start">
                Start time{" "}
                <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <Select value={startTime} onValueChange={setStartTime}>
                <SelectTrigger id="dialog-1-start" className="h-9 w-full">
                  <span>{startTime}</span>
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {TIME_OPTIONS.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dialog-1-end">
                End time{" "}
                <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <Select value={endTime} onValueChange={setEndTime}>
                <SelectTrigger id="dialog-1-end" className="h-9 w-full">
                  <span>{endTime}</span>
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {TIME_OPTIONS.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2 px-5 pb-5">
            <Label>Quick duration</Label>
            <ToggleGroup
              type="single"
              value={activePreset ?? ""}
              onValueChange={applyPreset}
              className="grid w-full grid-cols-4 gap-2"
            >
              {DURATION_PRESETS.map((preset) => (
                <ToggleGroupItem
                  key={preset.id}
                  value={preset.id}
                  variant="outline"
                  className="h-9 w-full justify-center gap-1.5"
                >
                  {activePreset === preset.id ? <CheckIcon className="size-4" /> : null}
                  {preset.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <DialogFooter className="mx-0 mb-0 flex-col gap-3 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <InfoIcon className="size-3.5" />
              Quick presets update the end time.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Apply</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </main>
  )
}

export default Dialog1Block
