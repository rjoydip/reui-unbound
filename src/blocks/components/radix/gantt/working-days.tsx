"use client"

import { useMemo, useState } from "react"
import { Gantt } from "@/components/kit/gantt/gantt"
import {
  resolveOffDay,
  toZoned,
  zonedStartOfDay,
} from "@/components/kit/gantt/~gantt-lib"
import { GanttNav } from "@/components/kit/gantt/~gantt-nav"
import type {
  GanttEvent,
  GanttOffDaysConfig,
  GanttProposedUpdate,
  GanttResource,
} from "@/components/kit/gantt/~gantt-types"
import { GanttView } from "@/components/kit/gantt/~gantt-view"
import { addDays, format, startOfWeek } from "date-fns"

import { Card, CardContent } from "@/components/ui/card"

/**
 * The team's calendar zone. The gantt lays out and shades its days in it and
 * the adjust below counts working days in it, so the two always agree.
 */
const TIME_ZONE = "America/New_York"

const RESOURCES: GanttResource[] = [
  { id: "scope", title: "Scope review" },
  { id: "api", title: "API endpoints" },
  { id: "screens", title: "Client screens" },
  { id: "qa", title: "QA pass" },
  { id: "notes", title: "Release notes" },
]

/** Zoned midnight `days` away; DST-safe, where adding 24h is not. */
function shiftDays(day: Date, days: number): Date {
  return zonedStartOfDay(addDays(toZoned(day, TIME_ZONE), days), TIME_ZONE)
}

/** Sunday of the current week, so the plan always sits around today. */
function currentWeek(anchor: Date): Date {
  return startOfWeek(zonedStartOfDay(anchor, TIME_ZONE), { weekStartsOn: 0 })
}

function buildBars(anchor: Date): GanttEvent[] {
  const week = currentWeek(anchor)
  const bar = (
    resourceId: string,
    title: string,
    startOffset: number,
    days: number,
    color: string
  ): GanttEvent => ({
    id: `bar-${resourceId}`,
    title,
    start: shiftDays(week, startOffset),
    end: shiftDays(week, startOffset + days),
    allDay: true,
    color,
    resourceId,
  })
  return [
    bar("scope", "Scope review", 1, 2, "var(--color-blue-500)"),
    // 4 working days across the Friday holiday and the weekend: Wed to Tue
    bar("api", "API endpoints", 3, 7, "var(--color-violet-500)"),
    bar("screens", "Client screens", 10, 2, "var(--color-sky-500)"),
    bar("qa", "QA pass", 12, 4, "var(--color-emerald-500)"),
    bar("notes", "Release notes", 16, 1, "var(--color-amber-500)"),
  ]
}

/** Weekends plus a holiday on this week's Friday, in the same zone. */
function buildOffDays(anchor: Date): GanttOffDaysConfig {
  return { weekendDays: [0, 6], dates: [shiftDays(currentWeek(anchor), 5)] }
}

/** Working days in [start, end), read from the config the gantt shades. */
function countWorkdays(start: Date, end: Date, offDays: GanttOffDaysConfig) {
  let count = 0
  for (let day = start; day < end; day = shiftDays(day, 1)) {
    if (!resolveOffDay(day, TIME_ZONE, offDays)) count++
  }
  return count
}

/** Exclusive end after `count` working days from a working-day start. */
function addWorkdays(start: Date, count: number, offDays: GanttOffDaysConfig) {
  let day = start
  for (let left = count; left > 0; day = shiftDays(day, 1)) {
    if (!resolveOffDay(day, TIME_ZONE, offDays)) left--
  }
  return day
}

const formatDay = (day: Date) => format(toZoned(day, TIME_ZONE), "EEE, MMM d")

export default function Pattern() {
  const { bars, offDays, focus } = useMemo(() => {
    const now = new Date()
    return {
      bars: buildBars(now),
      offDays: buildOffDays(now),
      // open on the holiday weekend, whatever weekday today is
      focus: shiftDays(currentWeek(now), 6),
    }
  }, [])
  const [status, setStatus] = useState(
    "Drop a bar on a weekend or the holiday: it starts on the next working day."
  )

  // The gantt moves a bar by calendar days; this runs once on release and
  // returns the dates to commit instead. `event` is the bar before the move.
  const keepWorkingDays = ({ event, start, source }: GanttProposedUpdate) => {
    // a milestone (zero length) stays a point
    if (source !== "drag" || event.start.getTime() === event.end.getTime()) {
      return
    }
    let first = start
    while (resolveOffDay(first, TIME_ZONE, offDays)) first = shiftDays(first, 1)
    const days = Math.max(countWorkdays(event.start, event.end, offDays), 1)
    const end = addWorkdays(first, days, offDays)
    setStatus(
      `${event.title}: ${formatDay(first)} to ${formatDay(shiftDays(end, -1))}, ${days} working ${days === 1 ? "day" : "days"}`
    )
    return { start: first, end }
  }

  return (
    <div className="w-full p-4">
      <Card className="w-full py-0">
        <CardContent className="p-0">
          <Gantt
            defaultEvents={bars}
            resources={RESOURCES}
            defaultScale="month"
            initialCenter={focus}
            timeZone={TIME_ZONE}
            offDays={offDays}
            onEventUpdate={keepWorkingDays}
            // every change is a move, so every change keeps its working days
            defaultInteractions={{ resize: false }}
            treePanel={{ width: 200 }}
            className="h-[360px] w-full"
          >
            <GanttNav />
            <GanttView />
            <p
              role="status"
              className="text-muted-foreground border-t px-3 py-2"
            >
              {status}
            </p>
          </Gantt>
        </CardContent>
      </Card>
    </div>
  )
}