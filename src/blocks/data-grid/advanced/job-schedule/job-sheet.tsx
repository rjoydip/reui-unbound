import { CalendarClockIcon, ClipboardCheckIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "cn"

import {
  CREW_BY_ID,
  TODAY_INDEX,
  dayLabel,
  finishDay,
  remainingHours,
  totalHours,
} from "./data"
import type { Job } from "./data"
import {
  CrewAvatar,
  JobStatusBadge,
  ScheduleCell,
} from "./parts"

const MATERIAL_VARIANT = {
  delivered: "success-light",
  due: "warning-light",
  backorder: "destructive-light",
} as const

const INSPECTION_VARIANT = {
  passed: "success-light",
  scheduled: "info-light",
  failed: "destructive-light",
} as const

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground text-sm">{label}</dt>
      <dd className="text-right text-sm font-medium">{value}</dd>
    </div>
  )
}

export function JobSheet({
  job,
  open,
  onOpenChange,
  onReplan,
}: {
  job: Job | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onReplan: (job: Job) => void
}) {
  if (!job) return null

  const crew = CREW_BY_ID[job.crewId]!
  const finish = finishDay(job)
  const logged = job.slots
    .filter((slot) => slot.day < TODAY_INDEX)
    .reduce((total, slot) => total + slot.hours, 0)
  const progress = totalHours(job) ? (logged / totalHours(job)) * 100 : 0
  const remaining = remainingHours(job)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="gap-3 border-b pb-4">
          <div className="flex items-center gap-3">
            <CrewAvatar crewId={job.crewId} className="size-10" />
            <div className="min-w-0">
              <SheetTitle className="truncate">{job.name}</SheetTitle>
              <SheetDescription className="truncate">
                {job.client} · {job.address}
              </SheetDescription>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <JobStatusBadge status={job.status} />
            <Badge variant="outline" size="lg">
              {crew.name}
            </Badge>
            <span className="text-muted-foreground text-xs">Lead {crew.lead}</span>
          </div>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-muted/25 rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Finish</div>
              <div className="mt-0.5 text-sm font-semibold">{dayLabel(finish)}</div>
              <div className="text-muted-foreground text-xs">Due {dayLabel(job.dueDay)}</div>
            </div>
            <div className="bg-muted/25 rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Remaining</div>
              <div className="mt-0.5 text-sm font-semibold tabular-nums">{remaining}h</div>
              <div className="text-muted-foreground text-xs">{totalHours(job)}h planned</div>
            </div>
            <div className="bg-muted/25 rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Progress</div>
              <div className="mt-0.5 text-sm font-semibold tabular-nums">{Math.round(progress)}%</div>
              <Progress value={progress} className="mt-1.5 h-1" />
            </div>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="inspections">Inspections</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-3 flex flex-col gap-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Four-week schedule</span>
                  <span className="text-muted-foreground text-xs">Oct 19 – Nov 13</span>
                </div>
                <div className="overflow-x-auto rounded-lg border p-3">
                  <div className="min-w-80">
                    <ScheduleCell job={job} />
                  </div>
                </div>
                <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-3 text-xs">
                  <span className="flex items-center gap-1">
                    <ClipboardCheckIcon className="size-3" />
                    Inspection
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="bg-muted h-2.5 w-2.5 rounded-sm" />
                    No work
                  </span>
                </div>
              </div>

              <dl className="grid gap-2 rounded-lg border p-3">
                <Detail label="Client" value={job.client} />
                <Detail label="Address" value={job.address} />
                <Detail label="Crew" value={`${crew.name} · ${crew.lead}`} />
                <Detail label="Window" value={`${dayLabel(job.startDay)} → ${dayLabel(finish)}`} />
                <Detail label="Hours" value={`${logged}h logged · ${remaining}h left`} />
              </dl>

              <div className="bg-muted/25 flex items-start gap-2 rounded-lg border p-3">
                <CalendarClockIcon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                <p className="text-muted-foreground text-xs">
                  Slide the remaining work after rain or a late material drop.
                  Completed days stay put.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="materials" className="mt-3 flex flex-col gap-2">
              {job.materials.map((material) => (
                <div
                  key={material.name}
                  className="flex items-center justify-between gap-3 rounded-lg border p-3"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{material.name}</div>
                    <div className="text-muted-foreground text-xs">
                      {material.qty} · ETA {material.eta}
                    </div>
                  </div>
                  <Badge
                    variant={MATERIAL_VARIANT[material.status]}
                    size="lg"
                    className={cn("shrink-0 font-medium capitalize")}
                  >
                    {material.status}
                  </Badge>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="inspections" className="mt-3 flex flex-col gap-2">
              {job.inspections.map((inspection) => (
                <div
                  key={inspection.name}
                  className="flex items-center justify-between gap-3 rounded-lg border p-3"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{inspection.name}</div>
                    <div className="text-muted-foreground text-xs">
                      {inspection.date} · {inspection.authority}
                    </div>
                  </div>
                  <Badge
                    variant={INSPECTION_VARIANT[inspection.result]}
                    size="lg"
                    className="shrink-0 font-medium capitalize"
                  >
                    {inspection.result}
                  </Badge>
                </div>
              ))}
            </TabsContent>
          </Tabs>

          <Button variant="outline" onClick={() => onReplan(job)}>
            <CalendarClockIcon />
            Replan remaining days
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
