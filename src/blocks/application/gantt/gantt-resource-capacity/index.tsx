"use client"

import { useMemo, useState } from "react"
import { Badge, type BadgeProps } from "@/components/kit/badge"
import { Gantt, type GanttColumn } from "@/components/kit/gantt/gantt"
import { GanttNav, GanttToolbar } from "@/components/kit/gantt/~gantt-nav"
import type {
  GanttEvent,
  GanttResource,
} from "@/components/kit/gantt/~gantt-types"
import { GanttView } from "@/components/kit/gantt/~gantt-view"
import { addDays, differenceInCalendarDays, format } from "date-fns"
import { AlertTriangleIcon, CheckIcon, FilterIcon, PlusIcon, SlidersHorizontalIcon } from "lucide-react"

import { cn } from "cn"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ContextMenuItem, ContextMenuSeparator } from "@/components/ui/context-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

const ANCHOR = new Date(2026, 7, 1)
const day = (offset: number) => addDays(ANCHOR, offset)

type Workstream = "Discovery" | "Design" | "Build" | "Launch"
const WORKSTREAMS: Workstream[] = ["Discovery", "Design", "Build", "Launch"]
const WS_COLOR: Record<Workstream, string> = {
  Discovery: "var(--color-violet-500)",
  Design: "var(--color-blue-500)",
  Build: "var(--color-emerald-500)",
  Launch: "var(--color-amber-500)",
}
const WS_DOT: Record<Workstream, string> = {
  Discovery: "bg-violet-500",
  Design: "bg-blue-500",
  Build: "bg-emerald-500",
  Launch: "bg-amber-500",
}
type Priority = "High" | "Medium" | "Low"
const PRIORITY_VARIANT: Record<Priority, BadgeProps["variant"]> = {
  High: "destructive-light",
  Medium: "warning-light",
  Low: "secondary",
}

type Person = { id: string; name: string; initials: string; role: string; load: string; tone: "ok" | "warn" | "over" }
type Squad = { id: string; title: string; lead: string; load: string; pct?: number; people: Person[] }
const SQUADS: Squad[] = [
  {
    id: "experience",
    title: "Experience",
    lead: "Mira Stone",
    load: "220/280",
    pct: 81,
    people: [
      { id: "mira", name: "Mira Stone", initials: "MS", role: "Design Lead", load: "60/100", tone: "ok" },
      { id: "nora", name: "Nora Vale", initials: "NV", role: "Product Designer", load: "70/100", tone: "ok" },
      { id: "theo", name: "Theo Park", initials: "TP", role: "Frontend Engineer", load: "90/80", tone: "over" },
    ],
  },
  {
    id: "platform",
    title: "Platform",
    lead: "Leo Grant",
    load: "190/260",
    people: [
      { id: "leo", name: "Leo Grant", initials: "LG", role: "Staff Engineer", load: "50/100", tone: "ok" },
      { id: "alex", name: "Alex Johnson", initials: "AJ", role: "Backend Engineer", load: "80/100", tone: "ok" },
      { id: "priya", name: "Priya Patel", initials: "PP", role: "Platform Engineer", load: "60/60", tone: "warn" },
    ],
  },
  {
    id: "insights",
    title: "Insights",
    lead: "Sana Qureshi",
    load: "110/180",
    pct: 61,
    people: [
      { id: "sana", name: "Sana Qureshi", initials: "SQ", role: "Research Lead", load: "60/100", tone: "ok" },
      { id: "devin", name: "Devin Okeye", initials: "DO", role: "Data Analyst", load: "50/80", tone: "ok" },
    ],
  },
]
const PERSON = (id: string) => SQUADS.flatMap((squad) => squad.people).find((person) => person.id === id)
const SQUAD_OF = (personId: string) => SQUADS.find((squad) => squad.people.some((person) => person.id === personId))
const RESOURCES: GanttResource[] = SQUADS.map((squad) => ({
  id: squad.id,
  title: squad.title,
  children: squad.people.map((person) => ({ id: person.id, title: person.name })),
}))

type Booking = {
  id: string
  title: string
  client: string
  personId: string
  workstream: Workstream
  priority: Priority
  startOffset: number
  endOffset: number
  notes: string
  flagged?: boolean
  helpers?: string[]
}
const BOOKINGS: Booking[] = [
  { id: "b1", title: "Checkout Audit", client: "Northwind Retail", personId: "mira", workstream: "Discovery", priority: "High", startOffset: 2, endOffset: 6, notes: "Heuristic review of checkout.", helpers: ["sana", "nora"] },
  { id: "b2", title: "Design System", client: "Internal", personId: "mira", workstream: "Design", priority: "Medium", startOffset: 7, endOffset: 11, notes: "Token and component pass.", helpers: ["nora"] },
  { id: "b3", title: "Onboarding Flow", client: "Kestrel Health", personId: "nora", workstream: "Design", priority: "High", startOffset: 3, endOffset: 14, notes: "Three step onboarding.", helpers: ["mira", "theo"] },
  { id: "b4", title: "Billing Rewrite", client: "Kestrel Health", personId: "theo", workstream: "Build", priority: "High", startOffset: 2, endOffset: 12, notes: "Over capacity: 90 of 80 hours.", flagged: true, helpers: ["leo", "alex"] },
  { id: "b5", title: "Launch Review", client: "Northwind Retail", personId: "theo", workstream: "Launch", priority: "Low", startOffset: 10, endOffset: 15, notes: "Pre-launch checklist.", helpers: ["mira"] },
  { id: "b6", title: "Search Rollout", client: "Northwind Retail", personId: "leo", workstream: "Launch", priority: "Medium", startOffset: 5, endOffset: 11, notes: "Rollout to all regions.", helpers: ["alex", "theo"] },
  { id: "b7", title: "Event Pipeline", client: "Meridian Logistics", personId: "leo", workstream: "Build", priority: "Low", startOffset: 12, endOffset: 17, notes: "Ingest queue hardening." },
  { id: "b8", title: "Ledger Sync", client: "Meridian Logistics", personId: "alex", workstream: "Build", priority: "Medium", startOffset: 2, endOffset: 9, notes: "Nightly reconciliation.", helpers: ["leo"] },
  { id: "b9", title: "Cache Tuning", client: "Internal", personId: "priya", workstream: "Build", priority: "Low", startOffset: 3, endOffset: 5, notes: "Session cache limits." },
  { id: "b10", title: "Pricing Study", client: "Northwind Retail", personId: "sana", workstream: "Discovery", priority: "High", startOffset: 4, endOffset: 11, notes: "Willingness to pay research.", helpers: ["devin", "mira"] },
  { id: "b11", title: "Churn Model", client: "Kestrel Health", personId: "devin", workstream: "Discovery", priority: "Medium", startOffset: 6, endOffset: 11, notes: "Retention scoring baseline." },
]

const toEvent = (booking: Booking): GanttEvent => ({
  id: booking.id,
  title: booking.title,
  start: day(booking.startOffset),
  end: day(booking.endOffset + 1),
  allDay: true,
  color: WS_COLOR[booking.workstream],
  resourceId: booking.personId,
  data: booking.id,
})

type Draft = {
  id: string | null
  title: string
  client: string
  personId: string
  workstream: Workstream
  priority: Priority
  start: string
  end: string
  notes: string
}
const draftFor = (booking?: Booking): Draft =>
  booking
    ? {
        id: booking.id,
        title: booking.title,
        client: booking.client,
        personId: booking.personId,
        workstream: booking.workstream,
        priority: booking.priority,
        start: format(day(booking.startOffset), "yyyy-MM-dd"),
        end: format(day(booking.endOffset), "yyyy-MM-dd"),
        notes: booking.notes,
      }
    : { id: null, title: "", client: "", personId: "mira", workstream: "Discovery", priority: "Medium", start: "2026-08-03", end: "2026-08-07", notes: "" }

function AvatarStack({ ids }: { ids: string[] }) {
  return (
    <span className="flex -space-x-1">
      {ids.slice(0, 3).map((id) => {
        const person = PERSON(id)
        return (
          <Avatar key={id} className="size-4 ring-1 ring-background">
            <AvatarFallback className="bg-muted text-[8px]">{person?.initials}</AvatarFallback>
          </Avatar>
        )
      })}
    </span>
  )
}

export function GanttResourceCapacityBlock() {
  const [bookings, setBookings] = useState<Booking[]>(BOOKINGS)
  const [workstreams, setWorkstreams] = useState<Workstream[]>(WORKSTREAMS)
  const [squads, setSquads] = useState<string[]>(SQUADS.map((squad) => squad.id))
  const [visibleCols, setVisibleCols] = useState<string[]>(["role", "load"])
  const [draft, setDraft] = useState<Draft | null>(null)

  const events = useMemo(
    () => bookings.filter((booking) => workstreams.includes(booking.workstream)).map(toEvent),
    [bookings, workstreams]
  )
  const resources = useMemo(
    () => RESOURCES.filter((resource) => squads.includes(resource.id)),
    [squads]
  )

  const adoptEvents = (next: GanttEvent[]) => {
    const byId = new Map(next.map((event) => [event.id, event]))
    setBookings((prev) =>
      prev.map((booking) => {
        const event = byId.get(booking.id)
        if (!event) return booking
        return {
          ...booking,
          startOffset: differenceInCalendarDays(event.start, ANCHOR),
          endOffset: differenceInCalendarDays(event.end, ANCHOR) - 1,
        }
      })
    )
  }

  const saveDraft = () => {
    if (!draft) return
    const booking: Booking = {
      id: draft.id ?? `bk-${Date.now()}`,
      title: draft.title.trim() || "Untitled booking",
      client: draft.client.trim() || "Internal",
      personId: draft.personId,
      workstream: draft.workstream,
      priority: draft.priority,
      startOffset: differenceInCalendarDays(new Date(`${draft.start}T00:00:00`), ANCHOR),
      endOffset: differenceInCalendarDays(new Date(`${draft.end}T00:00:00`), ANCHOR),
      notes: draft.notes,
    }
    setBookings((prev) =>
      draft.id ? prev.map((item) => (item.id === draft.id ? { ...booking, flagged: item.flagged, helpers: item.helpers } : item)) : [...prev, booking]
    )
    setDraft(null)
  }

  const columns = useMemo<GanttColumn[]>(
    () => [
      {
        id: "role",
        title: "Role",
        width: 140,
        render: ({ resource, isGroup }) => {
          const squad = SQUADS.find((item) => item.id === resource.id)
          return (
            <span className="text-muted-foreground truncate text-xs">
              {isGroup ? `Lead ${squad?.lead}` : PERSON(resource.id)?.role}
            </span>
          )
        },
      },
      {
        id: "load",
        title: "Load",
        width: 96,
        render: ({ resource, isGroup }) => {
          const squad = SQUADS.find((item) => item.id === resource.id)
          const person = PERSON(resource.id)
          const load = isGroup ? squad?.load : person?.load
          const tone = isGroup ? "ok" : person?.tone ?? "ok"
          return (
            <Badge
              variant={tone === "over" ? "destructive-light" : tone === "warn" ? "warning-light" : "success-light"}
              size="sm"
              radius="full"
            >
              {load}
            </Badge>
          )
        },
      },
    ],
    []
  )

  return (
    <div className="bg-background min-h-svh p-4">
      <Card className="h-[calc(100svh-2rem)] overflow-hidden py-0">
        <CardContent className="h-full p-0">
          <Gantt
            events={events}
            onEventsChange={adoptEvents}
            resources={resources}
            defaultScale="month"
            defaultDate={new Date(2026, 7, 8, 12)}
            initialCenter={new Date(2026, 7, 8, 12)}
            offDays
            barLabel="inside"
            rowCheckboxes={false}
            columns={columns.filter((column) => visibleCols.includes(column.id))}
            treePanel={{ width: 490, nameColumnWidth: 215, minWidth: 400 }}
            columnsMenu={
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon-xs" aria-label="Show or hide columns">
                    <SlidersHorizontalIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-44 p-1">
                  <p className="text-muted-foreground px-2 py-1.5 text-xs font-medium">Columns</p>
                  {[
                    ["role", "Role"],
                    ["load", "Load"],
                  ].map(([id, label]) => {
                    const checked = visibleCols.includes(id)
                    return (
                      <label key={id} className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
                        <Checkbox
                          checked={checked}
                          onCheckedChange={() =>
                            setVisibleCols((prev) => (checked ? prev.filter((col) => col !== id) : [...prev, id]))
                          }
                        />
                        {label}
                        {checked && <CheckIcon className="ms-auto size-3.5" />}
                      </label>
                    )
                  })}
                </PopoverContent>
              </Popover>
            }
            metrics={{ unitWidths: { month: 4 }, laneHeight: 3.5, laneGap: 0.1, rowPadding: 0.35, minRowHeight: 3.25 }}
            classNames={{ event: "border border-border bg-card hover:bg-muted/40 rounded-md px-0 py-0" }}
            renderEvent={({ occurrence }) => {
              const booking = bookings.find((item) => item.id === occurrence.eventId)
              if (!booking) return null
              return (
                <div className="border-s-(--gantt-event-color) flex h-full w-full min-w-0 items-center gap-2 border-s-2 px-2">
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
                    <span className="flex min-w-0 items-center gap-1.5">
                      {booking.flagged && <AlertTriangleIcon className="text-destructive size-3 shrink-0" />}
                      <span className="truncate text-xs font-medium">{booking.title}</span>
                    </span>
                    <span className="flex min-w-0 items-center gap-1.5 text-[10px]">
                      <span className="text-muted-foreground truncate">
                        {booking.client} · {format(day(booking.startOffset), "MMM d")}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className={cn("size-1.5 rounded-full", WS_DOT[booking.workstream])} />
                        {booking.workstream}
                      </span>
                      <Badge variant={PRIORITY_VARIANT[booking.priority]} size="xs">{booking.priority}</Badge>
                    </span>
                  </div>
                  <AvatarStack ids={[booking.personId, ...(booking.helpers ?? [])]} />
                </div>
              )
            }}
            renderResourceLabel={({ resource, isGroup }) => {
              if (isGroup) {
                const squad = SQUADS.find((item) => item.id === resource.id)
                return (
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span className="truncate font-medium">{resource.title}</span>
                    <span className="text-muted-foreground text-xs">{squad?.people.length}</span>
                  </span>
                )
              }
              const person = PERSON(resource.id)
              return (
                <span className="flex min-w-0 items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarFallback className="bg-muted text-[10px]">{person?.initials}</AvatarFallback>
                  </Avatar>
                  <span className="flex min-w-0 flex-col leading-tight">
                    <span className="truncate">{resource.title}</span>
                    <span className="text-muted-foreground truncate text-xs">{person?.role}</span>
                  </span>
                </span>
              )
            }}
            renderSummary={({ resource }) => {
              const squad = SQUADS.find((item) => item.id === resource.id)
              return (
                <div className="relative flex items-center">
                  <div className="bg-emerald-500/15 h-1 w-full overflow-hidden rounded-full">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${squad?.pct ?? 100}%` }} />
                  </div>
                  {squad?.pct != null && (
                    <span
                      className="text-emerald-600 dark:text-emerald-400 absolute ps-2 text-[10px]"
                      style={{ insetInlineStart: `${squad.pct}%` }}
                    >
                      {squad.pct}%
                    </span>
                  )}
                </div>
              )
            }}
            renderEventMenu={({ occurrence }) => {
              const booking = bookings.find((item) => item.id === occurrence.eventId)
              if (!booking) return null
              return (
                <>
                  <ContextMenuItem onSelect={() => setDraft(draftFor(booking))}>Edit booking</ContextMenuItem>
                  <ContextMenuItem
                    onSelect={() => setBookings((prev) => [...prev, { ...booking, id: `bk-${Date.now()}` }])}
                  >
                    Duplicate booking
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem
                    variant="destructive"
                    onSelect={() => setBookings((prev) => prev.filter((item) => item.id !== booking.id))}
                  >
                    Cancel booking
                  </ContextMenuItem>
                </>
              )
            }}
            onEventClick={(occurrence) => {
              const booking = bookings.find((item) => item.id === occurrence.eventId)
              if (booking) setDraft(draftFor(booking))
            }}
            className="h-full w-full"
          >
            <div className="flex items-center gap-2 border-b pe-3">
              <GanttNav className="min-w-0 flex-1 border-b-0" />
              <GanttToolbar>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm"><FilterIcon /> Filter</Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-64">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium">Filters</p>
                      <button
                        type="button"
                        className="text-muted-foreground text-xs hover:text-foreground"
                        onClick={() => {
                          setWorkstreams(WORKSTREAMS)
                          setSquads(SQUADS.map((squad) => squad.id))
                        }}
                      >
                        Clear
                      </button>
                    </div>
                    <p className="text-muted-foreground mb-1.5 text-xs font-medium">Workstream</p>
                    {WORKSTREAMS.map((workstream) => {
                      const checked = workstreams.includes(workstream)
                      return (
                        <label key={workstream} className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-sm px-1 py-1.5 text-sm">
                          <Checkbox
                            checked={checked}
                            onCheckedChange={() =>
                              setWorkstreams((prev) => (checked ? prev.filter((item) => item !== workstream) : [...prev, workstream]))
                            }
                          />
                          <span className={cn("size-2 rounded-full", WS_DOT[workstream])} />
                          {workstream}
                          <span className="text-muted-foreground ms-auto text-xs">
                            {BOOKINGS.filter((booking) => booking.workstream === workstream).length}
                          </span>
                        </label>
                      )
                    })}
                    <p className="text-muted-foreground mt-3 mb-1.5 text-xs font-medium">Squad</p>
                    {SQUADS.map((squad) => {
                      const checked = squads.includes(squad.id)
                      return (
                        <label key={squad.id} className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-sm px-1 py-1.5 text-sm">
                          <Checkbox
                            checked={checked}
                            onCheckedChange={() =>
                              setSquads((prev) => (checked ? prev.filter((item) => item !== squad.id) : [...prev, squad.id]))
                            }
                          />
                          {squad.title}
                          <span className="text-muted-foreground ms-auto text-xs">
                            {BOOKINGS.filter((booking) => SQUAD_OF(booking.personId)?.id === squad.id).length}
                          </span>
                        </label>
                      )
                    })}
                  </PopoverContent>
                </Popover>
                <Button onClick={() => setDraft(draftFor())}><PlusIcon /> New Booking</Button>
              </GanttToolbar>
            </div>
            <GanttView />
          </Gantt>
        </CardContent>
      </Card>

      <Sheet open={!!draft} onOpenChange={(open) => !open && setDraft(null)}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{draft?.id ? "Booking details" : "New booking"}</SheetTitle>
            <SheetDescription>Bookings take a share of the person's week.</SheetDescription>
          </SheetHeader>
          {draft && (
            <div className="grid gap-3 px-4">
              <label className="grid gap-1.5 text-sm">
                Title
                <Input value={draft.title} placeholder="Booking title" onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
              </label>
              <label className="grid gap-1.5 text-sm">
                Client
                <Input value={draft.client} placeholder="Client or Internal" onChange={(e) => setDraft({ ...draft, client: e.target.value })} />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="grid gap-1.5 text-sm">
                  Person
                  <Select value={draft.personId} onValueChange={(value) => setDraft({ ...draft, personId: value })}>
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {SQUADS.flatMap((squad) => squad.people).map((person) => (
                        <SelectItem key={person.id} value={person.id}>{person.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
                <label className="grid gap-1.5 text-sm">
                  Workstream
                  <Select value={draft.workstream} onValueChange={(value) => setDraft({ ...draft, workstream: value as Workstream })}>
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {WORKSTREAMS.map((workstream) => (
                        <SelectItem key={workstream} value={workstream}>{workstream}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="grid gap-1.5 text-sm">
                  Start
                  <Input type="date" value={draft.start} onChange={(e) => setDraft({ ...draft, start: e.target.value })} />
                </label>
                <label className="grid gap-1.5 text-sm">
                  End
                  <Input type="date" value={draft.end} onChange={(e) => setDraft({ ...draft, end: e.target.value })} />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm">
                Priority
                <Select value={draft.priority} onValueChange={(value) => setDraft({ ...draft, priority: value as Priority })}>
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {(["High", "Medium", "Low"] as Priority[]).map((priority) => (
                      <SelectItem key={priority} value={priority}>{priority}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </label>
              <label className="grid gap-1.5 text-sm">
                Notes
                <Textarea value={draft.notes} rows={3} onChange={(e) => setDraft({ ...draft, notes: e.target.value })} />
              </label>
            </div>
          )}
          <SheetFooter className="flex-row">
            {draft?.id && (
              <Button
                variant="outline"
                className="text-destructive me-auto"
                onClick={() => {
                  setBookings((prev) => prev.filter((item) => item.id !== draft?.id))
                  setDraft(null)
                }}
              >
                Cancel booking
              </Button>
            )}
            <Button variant="outline" onClick={() => setDraft(null)}>Close</Button>
            <Button onClick={saveDraft}>{draft?.id ? "Save" : "Book"}</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default GanttResourceCapacityBlock
