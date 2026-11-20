import { useState } from "react"
import { CalendarPlusIcon, ClockIcon, PlusIcon } from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import {
  SERVICES,
  TECHNICIANS,
  WEEK_WINDOWS,
  extraKey,
  offDays,
  utilisation,
} from "./data"
import type { DayPlan, Technician } from "./data"

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function TechCell({
  tech,
  week,
  extras,
}: {
  tech: Technician
  week: number
  extras: Record<string, number>
}) {
  const { hours, capacity } = utilisation(tech, week, extras)

  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-7">
        <AvatarImage src={tech.avatar} alt={tech.name} />
        <AvatarFallback className="text-[10px]">
          {initials(tech.name)}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <div className="text-foreground truncate text-sm font-medium">
          {tech.name}
        </div>
        <div className="text-muted-foreground truncate text-xs">
          {tech.trade} · {hours}h of {capacity}h
        </div>
      </div>
    </div>
  )
}

export function DayCell({
  plan,
  extra,
  capacity,
  onOpen,
}: {
  plan: DayPlan
  extra: number
  capacity: number
  onOpen: () => void
}) {
  if (plan.state !== "booked" && extra === 0) {
    return (
      <span
        className={cn(
          "text-muted-foreground mx-auto flex h-8 w-full max-w-20 items-center justify-center rounded-sm border text-[11px]",
          plan.state === "holiday"
            ? "border-warning/25 bg-warning/10 text-warning-foreground"
            : "bg-muted/40",
        )}
      >
        {plan.state === "holiday" ? "Holiday" : "Off"}
      </span>
    )
  }

  const hours = plan.booked + extra
  const overtime = hours > capacity

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        onOpen()
      }}
      className={cn(
        "mx-auto flex h-8 w-full max-w-20 flex-col items-center justify-center rounded-sm border text-[11px] leading-tight tabular-nums transition-colors hover:brightness-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        overtime
          ? "border-destructive/25 bg-destructive/10 text-destructive"
          : hours === 0
            ? "border-border bg-background text-muted-foreground"
            : "border-success/20 bg-success/10 text-success-foreground",
      )}
    >
      <span className="font-medium">{hours}h</span>
      {overtime && (
        <span className="text-[9px]">+{hours - capacity}h OT</span>
      )}
      {extra > 0 && !overtime && (
        <span className="text-[9px]">+{extra}h added</span>
      )}
    </button>
  )
}

export function UtilisationCell({
  tech,
  week,
  extras,
}: {
  tech: Technician
  week: number
  extras: Record<string, number>
}) {
  const { hours, capacity, percent } = utilisation(tech, week, extras)
  const tone =
    percent >= 100
      ? "bg-destructive"
      : percent >= 85
        ? "bg-success"
        : percent >= 60
          ? "bg-warning"
          : "bg-muted-foreground/40"

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            "text-sm font-medium tabular-nums",
            percent >= 100 && "text-destructive",
          )}
        >
          {percent}%
        </span>
        <span className="text-muted-foreground text-[10px] tabular-nums">
          {hours}h of {capacity}h
        </span>
      </div>
      <div className="bg-muted h-1 w-full overflow-hidden rounded-full">
        <div
          className={cn("h-full rounded-full", tone)}
          style={{ width: `${Math.min(100, percent)}%` }}
        />
      </div>
    </div>
  )
}

export function BookingDialog({
  open,
  week,
  techId,
  onOpenChange,
  onSave,
}: {
  open: boolean
  week: number
  techId: string | null
  onOpenChange: (open: boolean) => void
  onSave: (input: {
    techId: string
    week: number
    day: number
    hours: number
    service: string
  }) => void
}) {
  const [selectedTech, setSelectedTech] = useState(techId ?? "")
  const [selectedWeek, setSelectedWeek] = useState(week)
  const [day, setDay] = useState(0)
  const [hours, setHours] = useState(2)
  const [service, setService] = useState(SERVICES[0])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book service</DialogTitle>
          <DialogDescription>
            Booked hours land in the matrix and update utilisation.
          </DialogDescription>
        </DialogHeader>

        <form
          className="grid gap-4"
          onSubmit={(event) => {
            event.preventDefault()
            if (!selectedTech || hours <= 0) return
            onSave({
              techId: selectedTech,
              week: selectedWeek,
              day,
              hours,
              service,
            })
            onOpenChange(false)
          }}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="booking-tech">Technician</FieldLabel>
              <Select
                value={selectedTech}
                onValueChange={setSelectedTech}
                required
              >
                <SelectTrigger id="booking-tech" className="w-full">
                  <SelectValue placeholder="Select a technician" />
                </SelectTrigger>
                <SelectContent>
                  {TECHNICIANS.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name} · {option.trade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="booking-week">Week</FieldLabel>
                <Select
                  value={String(selectedWeek)}
                  onValueChange={(value) => {
                    setSelectedWeek(Number(value))
                    setDay(0)
                  }}
                >
                  <SelectTrigger id="booking-week" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {WEEK_WINDOWS.map((entry, index) => (
                      <SelectItem key={entry.label} value={String(index)}>
                        {entry.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="booking-day">Day</FieldLabel>
                <Select value={String(day)} onValueChange={(value) => setDay(Number(value))}>
                  <SelectTrigger id="booking-day" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {WEEK_WINDOWS[selectedWeek].days.map((entry, index) => (
                      <SelectItem key={entry.date} value={String(index)}>
                        {entry.weekday} {entry.date}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="booking-hours">Hours</FieldLabel>
                <Input
                  id="booking-hours"
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={hours}
                  onChange={(event) => setHours(Number(event.target.value))}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="booking-service">Service</FieldLabel>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="booking-service" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((entry) => (
                      <SelectItem key={entry} value={entry}>
                        {entry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </FieldGroup>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              <PlusIcon />
              Add booking
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}


export function TechnicianSheet({
  tech,
  week,
  extras,
  open,
  onOpenChange,
  onBook,
}: {
  tech: Technician | null
  week: number
  extras: Record<string, number>
  open: boolean
  onOpenChange: (open: boolean) => void
  onBook: (techId: string) => void
}) {
  if (!tech) return null
  const { hours, capacity, percent } = utilisation(tech, week, extras)
  const days = WEEK_WINDOWS[week].days

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Avatar className="size-8">
              <AvatarImage src={tech.avatar} alt={tech.name} />
              <AvatarFallback>{initials(tech.name)}</AvatarFallback>
            </Avatar>
            {tech.name}
          </SheetTitle>
          <SheetDescription>
            {tech.trade} · Team {tech.team} · {WEEK_WINDOWS[week].label}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4 px-4 pb-6">
          <div className="grid grid-cols-3 gap-2 text-sm">
            {[
              { label: "Booked", value: `${hours}h` },
              { label: "Capacity", value: `${capacity}h` },
              { label: "Utilisation", value: `${percent}%` },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border p-2.5">
                <div className="text-muted-foreground text-[11px]">
                  {item.label}
                </div>
                <div className="font-semibold tabular-nums">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            <Badge variant="success-light" size="sm">
              {tech.capacity}h / day contracted
            </Badge>
            {offDays(tech, week) > 0 && (
              <Badge variant="invert-light" size="sm">
                {offDays(tech, week)} day(s) off
              </Badge>
            )}
            {percent >= 100 && (
              <Badge variant="destructive-light" size="sm">
                Over capacity
              </Badge>
            )}
          </div>

          <Separator />

          <div>
            <div className="text-sm font-medium">Week breakdown</div>
            <ul className="mt-2 flex flex-col gap-1.5">
              {tech.weeks[week].days.map((plan, index) => {
                const extra = extras[extraKey(tech.id, week, index)] ?? 0
                const booked =
                  plan.state === "booked" ? plan.booked + extra : extra
                return (
                  <li
                    key={days[index].date}
                    className="flex items-center justify-between gap-3 rounded-lg border px-2.5 py-2 text-sm"
                  >
                    <span className="text-muted-foreground w-16 text-xs tabular-nums">
                      {days[index].weekday} {days[index].date}
                    </span>
                    <div className="flex flex-1 items-center gap-2">
                      <div className="bg-muted h-1.5 flex-1 overflow-hidden rounded-full">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            booked > tech.capacity
                              ? "bg-destructive"
                              : "bg-success",
                          )}
                          style={{
                            width: `${Math.min(100, (booked / tech.capacity) * 100)}%`,
                          }}
                        />
                      </div>
                      <span className="w-12 text-right text-xs tabular-nums">
                        {plan.state === "booked" || extra > 0
                          ? `${booked}h`
                          : plan.state === "holiday"
                            ? "Holiday"
                            : "Off"}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              onClick={() => {
                onBook(tech.id)
                onOpenChange(false)
              }}
            >
              <CalendarPlusIcon />
              Add booking
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Availability shared", {
                  description: `${tech.name} · ${percent}% booked this week.`,
                })
              }
            >
              <ClockIcon />
              Share availability
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
