import {
  ClipboardCheckIcon,
  PackageIcon,
  TruckIcon,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { cn } from "cn"

import {
  CREWS,
  CREW_BY_ID,
  STATUS_META,
  TODAY_INDEX,
  WEEKS,
  dayLabel,
  finishDay,
  initials,
  remainingHours,
  totalHours,
} from "./data"
import type { Job, JobStatus, SlotTag } from "./data"

const TAG_ICON: Record<SlotTag, LucideIcon> = {
  inspection: ClipboardCheckIcon,
  material: PackageIcon,
  delivery: TruckIcon,
}

export function CrewAvatar({
  crewId,
  className,
}: {
  crewId: string
  className?: string
}) {
  const crew = CREW_BY_ID[crewId]!
  return (
    <Avatar className={cn("size-8", className)}>
      <AvatarImage src={crew.avatar} alt={crew.name} />
      <AvatarFallback className="text-[10px] font-medium">
        {initials(crew.lead)}
      </AvatarFallback>
    </Avatar>
  )
}

export function JobStatusBadge({ status }: { status: JobStatus }) {
  const meta = STATUS_META[status]
  return (
    <Badge variant={meta.variant} size="sm" className="font-medium">
      {meta.label}
    </Badge>
  )
}

export function JobCell({ job }: { job: Job }) {
  const crew = CREW_BY_ID[job.crewId]!
  return (
    <div className="flex items-center gap-2.5">
      <CrewAvatar crewId={job.crewId} />
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">{job.name}</div>
        <div className="flex items-center gap-1.5">
          <JobStatusBadge status={job.status} />
          <span className="text-muted-foreground truncate text-xs">{crew.lead}</span>
        </div>
      </div>
    </div>
  )
}

export function ScheduleHeader() {
  return (
    <div className="flex w-full gap-1.5">
      {WEEKS.map((week) => (
        <div key={week[0]!.index} className="grid flex-1 grid-cols-5 gap-[3px]">
          {week.map((day) => (
            <div key={day.index} className="text-center">
              <div className="text-muted-foreground text-[9px] leading-none">
                {day.weekday}
              </div>
              <div className="mt-0.5 text-[10px] leading-none font-medium">
                {day.date}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function ScheduleCell({ job }: { job: Job }) {
  const crew = CREW_BY_ID[job.crewId]!

  return (
    <div className="flex w-full gap-1.5">
      {WEEKS.map((week) => (
        <div key={week[0]!.index} className="grid flex-1 grid-cols-5 gap-[3px]">
          {week.map((day) => {
            const slot = job.slots.find((entry) => entry.day === day.index)
            if (!slot) {
              return (
                <span
                  key={day.index}
                  className="bg-muted/30 h-6 rounded-[3px]"
                  aria-hidden
                />
              )
            }

            const Icon = slot.tag ? TAG_ICON[slot.tag] : null
            return (
              <span
                key={day.index}
                title={`${day.label} · ${slot.hours}h${slot.tag ? ` · ${slot.tag}` : ""}`}
                className={cn(
                  "flex h-6 items-center justify-center gap-0.5 rounded-[3px] border text-[9px] font-medium tabular-nums",
                  crew.chip,
                  slot.day === TODAY_INDEX && "ring-primary/60 ring-1",
                )}
              >
                {Icon ? <Icon className="size-3" /> : `${slot.hours}h`}
              </span>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export function FinishCell({ job }: { job: Job }) {
  const finish = finishDay(job)
  const late = finish > job.dueDay || (job.status === "late" && finish < TODAY_INDEX)
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-sm font-medium">{dayLabel(finish)}</span>
      <span
        className={cn(
          "text-xs",
          late ? "text-destructive" : "text-muted-foreground",
        )}
      >
        Due {dayLabel(job.dueDay)}
      </span>
    </div>
  )
}

export function RemainingCell({ job }: { job: Job }) {
  const remaining = job.slots.filter((slot) => slot.day >= TODAY_INDEX)
  const hours = remainingHours(job)

  if (job.status === "complete") {
    return <span className="text-muted-foreground text-sm">Done</span>
  }

  if (job.status === "not-started") {
    return (
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium">Starts {dayLabel(job.startDay)}</span>
        <span className="text-muted-foreground text-xs">{totalHours(job)}h planned</span>
      </div>
    )
  }

  if (remaining.length === 0) {
    return (
      <div className="flex flex-col gap-0.5">
        <span className="text-destructive text-sm font-medium">Past due</span>
        <span className="text-muted-foreground text-xs">{totalHours(job)}h logged</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-sm font-medium tabular-nums">
        {remaining.length}d · {hours}h
      </span>
      <span className="text-muted-foreground text-xs">
        {job.slots.length} workdays total
      </span>
    </div>
  )
}

export function CrewLoad({ jobs }: { jobs: Job[] }) {
  return (
    <div className="bg-muted/25 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border px-3 py-2">
      <span className="text-xs font-medium">Crew load</span>
      {CREWS.map((crew) => {
        const crewJobs = jobs.filter((job) => job.crewId === crew.id)
        const hours = crewJobs.reduce((total, job) => total + totalHours(job), 0)
        return (
          <div key={crew.id} className="flex items-center gap-1.5 text-xs">
            <span className={cn("size-1.5 rounded-full", crew.dot)} />
            <span className="font-medium">{crew.name}</span>
            <span className="text-muted-foreground tabular-nums">
              {crewJobs.length} jobs · {hours}h
            </span>
          </div>
        )
      })}
    </div>
  )
}
