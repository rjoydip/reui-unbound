"use client"

import { useMemo, useState } from "react"
import { Badge } from "@/components/kit/badge"
import { Gantt, type GanttColumn } from "@/components/kit/gantt/gantt"
import {
  GanttNav,
  GanttNavNext,
  GanttNavPrev,
  GanttNavToday,
  GanttTitle,
  GanttToolbar,
} from "@/components/kit/gantt/~gantt-nav"
import type {
  GanttEvent,
  GanttResource,
} from "@/components/kit/gantt/~gantt-types"
import { GanttView } from "@/components/kit/gantt/~gantt-view"
import { addMinutes } from "date-fns"
import {
  ChevronDownIcon,
  PlusIcon,
  PlusCircleIcon,
  Trash2Icon,
} from "lucide-react"

import { cn } from "cn"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TooltipProvider } from "@/components/ui/tooltip"

const DAY = new Date(2026, 6, 19)
const at = (minutes: number) => addMinutes(DAY, minutes)

type JobType = "Install" | "Repair" | "Inspection" | "Emergency"
const JOB_TYPES: JobType[] = ["Install", "Repair", "Inspection", "Emergency"]
const TYPE_DOT: Record<JobType, string> = {
  Install: "bg-blue-500",
  Repair: "bg-amber-500",
  Inspection: "bg-teal-500",
  Emergency: "bg-rose-500",
}
const TYPE_COLOR: Record<JobType, [string, string]> = {
  Install: ["var(--color-blue-500)", "var(--color-blue-300)"],
  Repair: ["var(--color-amber-500)", "var(--color-amber-300)"],
  Inspection: ["var(--color-teal-500)", "var(--color-teal-300)"],
  Emergency: ["var(--color-rose-500)", "var(--color-rose-300)"],
}

type Person = {
  id: string
  name: string
  initials: string
  role: string
  shift: string
  booked: string
  load: number
  nextFree: string
  clash?: boolean
}
type Crew = {
  id: string
  title: string
  zone: string
  booked: string
  load: number
  jobs: number
  clash?: boolean
  people: Person[]
}
const CREWS: Crew[] = [
  {
    id: "north",
    title: "North Crew",
    zone: "Zone 1",
    booked: "22h 30m",
    load: 83,
    jobs: 12,
    clash: true,
    people: [
      { id: "mira", name: "Mira Stone", initials: "MS", role: "HVAC Lead", shift: "8am to 5pm", booked: "7h 30m", load: 83, nextFree: "11:30am" },
      { id: "alex", name: "Alex Johnson", initials: "AJ", role: "HVAC", shift: "8am to 5pm", booked: "7h 30m", load: 83, nextFree: "8am", clash: true },
      { id: "sarah", name: "Sarah Chen", initials: "SC", role: "Plumbing", shift: "8am to 5pm", booked: "7h 30m", load: 83, nextFree: "12:30pm" },
    ],
  },
  {
    id: "south",
    title: "South Crew",
    zone: "Zone 4",
    booked: "25h",
    load: 89,
    jobs: 14,
    clash: true,
    people: [
      { id: "leo", name: "Leo Grant", initials: "LG", role: "HVAC", shift: "9am to 6pm", booked: "6h", load: 67, nextFree: "1pm" },
      { id: "sofia", name: "Sofia Romero", initials: "SR", role: "Electrical", shift: "8am to 5pm", booked: "6h 30m", load: 81, nextFree: "11am" },
      { id: "theo", name: "Theo Park", initials: "TP", role: "Plumbing", shift: "8am to 5pm", booked: "8h 30m", load: 94, nextFree: "8am", clash: true },
      { id: "jonas", name: "Jonas Beck", initials: "JB", role: "Apprentice", shift: "10am to 3pm", booked: "4h", load: 80, nextFree: "12pm" },
    ],
  },
]
const PEOPLE = CREWS.flatMap((crew) => crew.people)

type Job = {
  id: string
  title: string
  personId: string
  type: JobType
  startMin: number
  endMin: number
  confirmed: boolean
}
const JOBS: Job[] = [
  { id: "j1", title: "Harbor Dental", personId: "mira", type: "Install", startMin: 480, endMin: 540, confirmed: true },
  { id: "j2", title: "Lakeside Deli", personId: "mira", type: "Repair", startMin: 540, endMin: 630, confirmed: true },
  { id: "j3", title: "Rowan Apartments", personId: "mira", type: "Install", startMin: 720, endMin: 780, confirmed: true },
  { id: "j4", title: "Cedar Clinic", personId: "mira", type: "Repair", startMin: 780, endMin: 900, confirmed: false },
  { id: "j5", title: "Fenwick Bakery", personId: "alex", type: "Repair", startMin: 570, endMin: 630, confirmed: true },
  { id: "j6", title: "Ridgeway School", personId: "alex", type: "Install", startMin: 630, endMin: 690, confirmed: true },
  { id: "j7", title: "Halsey Court", personId: "alex", type: "Emergency", startMin: 645, endMin: 690, confirmed: true },
  { id: "j8", title: "Ash Street Lofts", personId: "alex", type: "Install", startMin: 750, endMin: 840, confirmed: false },
  { id: "j9", title: "Copper Kettle", personId: "sarah", type: "Repair", startMin: 480, endMin: 570, confirmed: true },
  { id: "j10", title: "Nia Okafor", personId: "sarah", type: "Repair", startMin: 585, endMin: 645, confirmed: true },
  { id: "j11", title: "Marlow Gym", personId: "sarah", type: "Install", startMin: 645, endMin: 720, confirmed: true },
  { id: "j12", title: "Bay View Hotel", personId: "sarah", type: "Install", startMin: 750, endMin: 900, confirmed: false },
  { id: "j13", title: "Alder Offices", personId: "leo", type: "Install", startMin: 600, endMin: 660, confirmed: true },
  { id: "j14", title: "Priya Raman", personId: "leo", type: "Repair", startMin: 660, endMin: 750, confirmed: true },
  { id: "j15", title: "Stonebridge Mall", personId: "leo", type: "Inspection", startMin: 870, endMin: 930, confirmed: false },
  { id: "j16", title: "Grant Medical", personId: "sofia", type: "Emergency", startMin: 480, endMin: 540, confirmed: true },
  { id: "j17", title: "Bramble Cafe", personId: "sofia", type: "Repair", startMin: 660, endMin: 720, confirmed: true },
  { id: "j18", title: "Olive Court", personId: "sofia", type: "Inspection", startMin: 720, endMin: 780, confirmed: false },
  { id: "j19", title: "Sunset Lawn", personId: "theo", type: "Repair", startMin: 525, endMin: 570, confirmed: true },
  { id: "j20", title: "Kwan Residence", personId: "theo", type: "Install", startMin: 585, endMin: 645, confirmed: true },
  { id: "j21", title: "Ivy Lane Cafe", personId: "theo", type: "Repair", startMin: 630, endMin: 675, confirmed: true },
  { id: "j22", title: "Dunmore Court", personId: "theo", type: "Inspection", startMin: 675, endMin: 735, confirmed: false },
  { id: "j23", title: "Ferry Road Diner", personId: "theo", type: "Repair", startMin: 780, endMin: 855, confirmed: false },
  { id: "j24", title: "Northgate Flats", personId: "theo", type: "Install", startMin: 870, endMin: 960, confirmed: false },
  { id: "j25", title: "Willow Terrace", personId: "jonas", type: "Inspection", startMin: 600, endMin: 660, confirmed: true },
  { id: "j26", title: "Ambrose Hardware", personId: "jonas", type: "Repair", startMin: 780, endMin: 840, confirmed: false },
]

const RESOURCES: GanttResource[] = CREWS.map((crew) => ({
  id: crew.id,
  title: crew.title,
  children: crew.people.map((person) => ({ id: person.id, title: person.name })),
}))

const fmt = (min: number) => {
  const h = Math.floor(min / 60)
  const m = min % 60
  const suffix = h >= 12 ? "pm" : "am"
  const hour = h % 12 === 0 ? 12 : h % 12
  return m === 0 ? `${hour}${suffix}` : `${hour}:${String(m).padStart(2, "0")}${suffix}`
}
const toEvents = (jobs: Job[]): GanttEvent[] =>
  jobs.map((job) => ({
    id: job.id,
    title: job.title,
    start: at(job.startMin),
    end: at(job.endMin),
    color: TYPE_COLOR[job.type][job.confirmed ? 0 : 1],
    resourceId: job.personId,
    data: job.type,
  }))
const DEFAULT_JOBS = toEvents(JOBS)
const personOf = (id: string) => PEOPLE.find((person) => person.id === id)

type Draft = {
  id: string | null
  title: string
  personId: string
  type: JobType
  start: string
  duration: string
}
const draftFromJob = (job: Job): Draft => ({
  id: job.id,
  title: job.title,
  personId: job.personId,
  type: job.type,
  start: `${String(Math.floor(job.startMin / 60)).padStart(2, "0")}:${String(job.startMin % 60).padStart(2, "0")}`,
  duration: String(job.endMin - job.startMin),
})

export function GanttTechnicianDispatchBlock() {
  const [events, setEvents] = useState<GanttEvent[]>(DEFAULT_JOBS)
  const [visibleTypes, setVisibleTypes] = useState<JobType[]>(JOB_TYPES)
  const [draft, setDraft] = useState<Draft | null>(null)

  const filteredEvents = useMemo(
    () => events.filter((event) => visibleTypes.includes((event.data as JobType | undefined) ?? "Install")),
    [events, visibleTypes]
  )

  const adoptEvents = (next: GanttEvent[]) => {
    const ids = new Set(next.map((event) => event.id))
    setEvents([...next, ...events.filter((event) => !ids.has(event.id))])
  }

  const columns = useMemo<GanttColumn[]>(
    () => [
      {
        id: "shift",
        title: "Shift",
        width: 94,
        render: ({ resource, isGroup }) =>
          isGroup ? null : <span className="text-muted-foreground text-xs">{personOf(resource.id)?.shift}</span>,
      },
      {
        id: "booked",
        title: "Booked",
        width: 118,
        render: ({ resource, isGroup }) => {
          const crew = CREWS.find((item) => item.id === resource.id)
          const person = personOf(resource.id)
          const label = isGroup ? crew?.booked : person?.booked
          const load = isGroup ? crew?.load : person?.load
          return (
            <span className="flex items-center gap-2">
              <span className="bg-muted h-1 w-14 overflow-hidden rounded-full">
                <span className="bg-foreground block h-full rounded-full" style={{ width: `${load ?? 0}%` }} />
              </span>
              <span className="text-xs whitespace-nowrap">{label}</span>
            </span>
          )
        },
      },
      {
        id: "next-free",
        title: "Next Free",
        width: 94,
        render: ({ resource, isGroup }) => {
          const crew = CREWS.find((item) => item.id === resource.id)
          return (
            <span className="text-muted-foreground text-xs">
              {isGroup ? `${crew?.jobs ?? 0} jobs` : personOf(resource.id)?.nextFree}
            </span>
          )
        },
      },
      {
        id: "actions",
        title: "",
        width: 32,
        render: ({ resource, isGroup }) =>
          isGroup ? null : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-xs" aria-label={`Actions for ${resource.title}`}>
                  <span className="tracking-widest">···</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onSelect={() =>
                    setDraft({ id: null, title: "", personId: resource.id, type: "Install", start: "08:00", duration: "60" })
                  }
                >
                  <PlusIcon /> Add Job
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={() => setEvents((prev) => prev.filter((event) => event.resourceId !== resource.id))}
                >
                  <Trash2Icon /> Clear Day
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ),
      },
    ],
    []
  )

  const saveDraft = () => {
    if (!draft) return
    const [h, m] = draft.start.split(":").map(Number)
    const startMin = (h ?? 8) * 60 + (m ?? 0)
    const job: Job = {
      id: draft.id ?? `job-${Date.now()}`,
      title: draft.title.trim() || "Untitled job",
      personId: draft.personId,
      type: draft.type,
      startMin,
      endMin: startMin + Number(draft.duration),
      confirmed: true,
    }
    const next = toEvents([job])[0]!
    setEvents((prev) =>
      draft.id ? prev.map((event) => (event.id === draft.id ? { ...next, id: draft.id } : event)) : [...prev, next]
    )
    setDraft(null)
  }

  return (
    <div className="bg-background min-h-svh p-4">
      <Card className="h-[calc(100svh-2rem)] overflow-hidden py-0">
        <CardContent className="h-full p-0">
          <Gantt
            events={filteredEvents}
            onEventsChange={adoptEvents}
            resources={RESOURCES}
            defaultScale="day"
            defaultDate={new Date(2026, 6, 19, 11, 45)}
            initialCenter={new Date(2026, 6, 19, 11, 45)}
            interval={30}
            snapDuration={30}
            slotDuration={30}
            offDays
            rowCheckboxes={false}
            i18n={{ labels: { resources: "Technician" } }}
            columns={columns}
            treePanel={{ width: 670, nameColumnWidth: 300, minWidth: 480, maxWidth: 700 }}
            timelineLines="vertical"
            metrics={{ unitWidths: { day: 3.1 }, laneHeight: 1.2, laneGap: 0.12, rowPadding: 0.35, minRowHeight: 2.7 }}
            summaryBars={false}
            classNames={{ event: "gap-1 bg-(--gantt-event-color)/30 px-1 text-[10px] hover:bg-(--gantt-event-color)/40" }}
            renderResourceLabel={({ resource, isGroup }) => {
              if (isGroup) {
                const crew = CREWS.find((item) => item.id === resource.id)
                return (
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span className="truncate font-medium">{resource.title}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground truncate text-xs">{crew?.zone}</span>
                    {crew?.clash && (
                      <Badge variant="destructive-light" size="sm" radius="full">
                        Clash
                      </Badge>
                    )}
                  </span>
                )
              }
              const person = personOf(resource.id)
              return (
                <span className="flex min-w-0 items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarFallback className="bg-muted text-[10px]">{person?.initials}</AvatarFallback>
                  </Avatar>
                  <span className="truncate">{resource.title}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground truncate text-xs">{person?.role}</span>
                  {person?.clash && (
                    <Badge variant="destructive-light" size="sm" radius="full">
                      Clash
                    </Badge>
                  )}
                </span>
              )
            }}
            renderEvent={({ occurrence }) => {
              const minutes = (occurrence.end.getTime() - occurrence.start.getTime()) / 60000
              return (
                <span className="flex w-full min-w-0 items-center justify-between gap-1.5">
                  <span className="truncate">{occurrence.event.title}</span>
                  {minutes >= 90 && (
                    <span className="shrink-0 text-[9px] opacity-70">
                      {fmt(occurrence.start.getHours() * 60 + occurrence.start.getMinutes())}
                    </span>
                  )}
                </span>
              )
            }}
            onEventClick={(occurrence) => {
              const source = JOBS.find((job) => job.id === occurrence.eventId)
              const current: Job = source ?? {
                id: occurrence.eventId,
                title: occurrence.event.title,
                personId: occurrence.event.resourceId ?? "mira",
                type: (occurrence.event.data as JobType | undefined) ?? "Install",
                startMin: occurrence.start.getHours() * 60 + occurrence.start.getMinutes(),
                endMin: occurrence.end.getHours() * 60 + occurrence.end.getMinutes(),
                confirmed: true,
              }
              setDraft(draftFromJob(current))
            }}
            className="h-full w-full"
          >
            <div className="flex items-center gap-2 border-b pe-3">
              <GanttNav className="min-w-0 flex-1 border-b-0">
                <TooltipProvider delayDuration={600}>
                  <GanttNavToday />
                  <div className="flex items-center">
                    <GanttNavPrev />
                    <GanttNavNext />
                  </div>
                  <GanttTitle />
                  <div className="grow" />
                </TooltipProvider>
              </GanttNav>
              <GanttToolbar>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <span className="flex -space-x-0.5">
                        {JOB_TYPES.slice(0, 3).map((type) => (
                          <span key={type} className={cn("size-2 rounded-full", TYPE_DOT[type])} />
                        ))}
                      </span>
                      Job Types
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-56 p-1">
                    <p className="text-muted-foreground px-2 py-1.5 text-xs font-medium">Job Types</p>
                    {JOB_TYPES.map((type) => {
                      const checked = visibleTypes.includes(type)
                      return (
                        <label
                          key={type}
                          className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm"
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={() =>
                              setVisibleTypes((prev) => (checked ? prev.filter((item) => item !== type) : [...prev, type]))
                            }
                          />
                          <span className={cn("size-2 rounded-full", TYPE_DOT[type])} />
                          {type}
                        </label>
                      )
                    })}
                    <div className="bg-border my-1 h-px" />
                    <button
                      type="button"
                      className="hover:bg-muted flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm"
                      onClick={() => setVisibleTypes(JOB_TYPES)}
                    >
                      <PlusIcon className="size-3.5" /> New job type
                    </button>
                  </PopoverContent>
                </Popover>
                <Button onClick={() => setDraft({ id: null, title: "", personId: "mira", type: "Install", start: "08:00", duration: "60" })}>
                  <PlusCircleIcon />
                  Book Job
                </Button>
              </GanttToolbar>
            </div>
            <GanttView />
          </Gantt>
        </CardContent>
      </Card>

      <Dialog open={!!draft} onOpenChange={(open) => !open && setDraft(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{draft?.id ? "Job details" : "Book a job"}</DialogTitle>
            <DialogDescription>Sunday, July 19, 2026 · North and South crews</DialogDescription>
          </DialogHeader>
          {draft && (
            <div className="grid gap-3">
              <label className="grid gap-1.5 text-sm">
                Customer
                <Input value={draft.title} placeholder="Customer name" onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="grid gap-1.5 text-sm">
                  Job type
                  <Select value={draft.type} onValueChange={(value) => setDraft({ ...draft, type: value as JobType })}>
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {JOB_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
                <label className="grid gap-1.5 text-sm">
                  Technician
                  <Select value={draft.personId} onValueChange={(value) => setDraft({ ...draft, personId: value })}>
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {PEOPLE.map((person) => (
                        <SelectItem key={person.id} value={person.id}>{person.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="grid gap-1.5 text-sm">
                  Start
                  <Input type="time" value={draft.start} onChange={(e) => setDraft({ ...draft, start: e.target.value })} />
                </label>
                <label className="grid gap-1.5 text-sm">
                  Duration
                  <Select value={draft.duration} onValueChange={(value) => setDraft({ ...draft, duration: value })}>
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {["30", "60", "90", "120"].map((value) => (
                        <SelectItem key={value} value={value}>{value} min</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
              </div>
            </div>
          )}
          <DialogFooter>
            {draft?.id && (
              <Button
                variant="outline"
                className="me-auto text-destructive"
                onClick={() => {
                  setEvents((prev) => prev.filter((event) => event.id !== draft?.id))
                  setDraft(null)
                }}
              >
                Delete job
              </Button>
            )}
            <Button variant="outline" onClick={() => setDraft(null)}>Cancel</Button>
            <Button onClick={saveDraft}>{draft?.id ? "Save job" : "Book job"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default GanttTechnicianDispatchBlock
