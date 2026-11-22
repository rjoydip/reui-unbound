import { useState } from "react"
import { format } from "date-fns"
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

import {
  KIND_TONES,
  coverage,
  formatDuration,
  shiftWeek,
  trackedTimeState,
  weekTotal,
} from "./data"
import type { DayEntry, Person } from "./data"

export function PersonCell({ person }: { person: Person }) {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-8">
        <AvatarImage src={person.avatar} alt={person.name} />
        <AvatarFallback className="text-[10px]">
          {person.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">
          {person.name}
        </div>
        <div className="text-muted-foreground truncate text-xs">
          {person.role}
        </div>
      </div>
    </div>
  )
}

export function DayCell({ entry }: { entry: DayEntry }) {
  if (entry.minutes === 0) {
    return (
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground text-sm">
          {formatDuration(0)}
        </span>
        <span className="text-muted-foreground text-xs">Off</span>
      </div>
    )
  }

  const cell = (
    <div className="flex w-full flex-col gap-1">
      <span className="text-sm font-medium tabular-nums">
        {formatDuration(entry.minutes)}
      </span>
      <div className="bg-muted h-1 w-full overflow-hidden rounded-full">
        <div
          className={cn("h-full rounded-full", KIND_TONES[entry.kind])}
          style={{ width: `${Math.min(100, (entry.minutes / 480) * 100)}%` }}
        />
      </div>
      <span className="text-muted-foreground text-xs">{entry.kind}</span>
    </div>
  )

  if (!entry.note) return cell

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-full cursor-default">{cell}</div>
      </TooltipTrigger>
      <TooltipContent className="max-w-56 text-pretty">
        {entry.note}
      </TooltipContent>
    </Tooltip>
  )
}

export function TotalCell({
  person,
  weekStart,
}: {
  person: Person
  weekStart: Date
}) {
  const total = weekTotal(person, weekStart)
  const percent = coverage(total, person.targetMinutes)
  const state = trackedTimeState(percent)
  const Icon = state === "under" ? TrendingDownIcon : TrendingUpIcon

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className="text-sm font-medium tabular-nums">
        {formatDuration(total)}
      </span>
      <span
        className={cn(
          "flex items-center gap-1 text-xs tabular-nums",
          state === "under" && "text-destructive",
          state === "over" && "text-success-foreground",
          state === "on" && "text-muted-foreground",
        )}
      >
        <Icon className="size-3" />
        {percent}%
      </span>
    </div>
  )
}

export function WeekNavigator({
  weekStart,
  onChange,
}: {
  weekStart: Date
  onChange: (date: Date) => void
}) {
  const [open, setOpen] = useState(false)
  const end = addDaysTo(weekStart, 6)
  const label =
    weekStart.getMonth() === end.getMonth()
      ? `${format(weekStart, "MMM d")} - ${format(end, "d")}`
      : `${format(weekStart, "MMM d")} - ${format(end, "MMM d")}`

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Previous week"
        onClick={() => onChange(shiftWeek(weekStart, -1))}
      >
        <ChevronLeftIcon />
      </Button>
      <span className="min-w-24 text-center text-sm font-medium">{label}</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Pick week">
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-auto p-0">
          <Calendar
            mode="single"
            selected={weekStart}
            onSelect={(date) => {
              if (!date) return
              const monday = new Date(date)
              const day = (monday.getDay() + 6) % 7
              monday.setDate(monday.getDate() - day)
              onChange(monday)
              setOpen(false)
            }}
            autoFocus
          />
        </PopoverContent>
      </Popover>
      <Separator orientation="vertical" className="mx-1 h-5" />
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Next week"
        onClick={() => onChange(shiftWeek(weekStart, 1))}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  )
}

function addDaysTo(date: Date, days: number) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}
