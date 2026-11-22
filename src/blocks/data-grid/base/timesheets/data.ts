import { addWeeks, format, startOfWeek } from "date-fns"

export type WorkKind = "Client" | "Internal" | "Support" | "Off"

export interface DayEntry {
  minutes: number
  kind: WorkKind
  note?: string
}

export interface Person {
  id: string
  name: string
  role: string
  avatar: string
  team: "Design" | "Engineering" | "Delivery" | "Support"
  targetMinutes: number
  billable: boolean
  weeks: Record<string, DayEntry[]>
}

export const TODAY = new Date("2026-03-25T00:00:00Z")
export const DEFAULT_WEEK = startOfWeek(new Date(2026, 2, 23), {
  weekStartsOn: 1,
})
export const WEEK_KEYS = ["2026-03-16", "2026-03-23", "2026-03-30"]

export const EMPTY_ENTRY: DayEntry[] = Array.from({ length: 7 }, () => ({
  minutes: 0,
  kind: "Off" as WorkKind,
}))

export function weekKey(date: Date) {
  return format(startOfWeek(date, { weekStartsOn: 1 }), "yyyy-MM-dd")
}

export function shiftWeek(date: Date, amount: number) {
  return addWeeks(date, amount)
}

export function weekDays(weekStart: Date) {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(weekStart)
    date.setDate(date.getDate() + index)
    return date
  })
}

export function formatDuration(minutes: number) {
  if (minutes === 0) return "–"
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  if (hours === 0) return `${rest}m`
  if (rest === 0) return `${hours}h`
  return `${hours}h ${rest}m`
}

export function coverage(total: number, target: number) {
  if (target === 0) return 0
  return Math.round((total / target) * 100)
}

export type TrackedTimeState = "under" | "on" | "over"

export function trackedTimeState(percent: number): TrackedTimeState {
  if (percent < 85) return "under"
  if (percent > 108) return "over"
  return "on"
}

function day(
  minutes: number,
  kind: WorkKind = "Client",
  note?: string,
): DayEntry {
  return { minutes, kind, note }
}

const off = day(0, "Off")

export const TIMESHEET_PEOPLE: Person[] = [
  {
    id: "per-01",
    name: "Amara Ortiz",
    role: "Client delivery lead",
    avatar: "https://i.pravatar.cc/96?img=45",
    team: "Delivery",
    targetMinutes: 1920,
    billable: true,
    weeks: {
      "2026-03-16": [
        day(330, "Client"),
        day(330, "Internal"),
        day(390),
        day(330),
        day(270),
        off,
        off,
      ],
      "2026-03-23": [
        day(390, "Client", "Kickoff with Copperline and weekly check-in."),
        day(330, "Internal", "Internal roadmap workshop."),
        day(420, "Client", "Design review with Kite Fitness."),
        day(360, "Client", "Sprint planning and handoff."),
        day(270, "Client", "Follow-ups with two accounts."),
        off,
        off,
      ],
      "2026-03-30": [
        day(360),
        day(300, "Internal"),
        day(390),
        day(330),
        day(300),
        off,
        off,
      ],
    },
  },
  {
    id: "per-02",
    name: "Theo Mercer",
    role: "Platform engineer",
    avatar: "https://i.pravatar.cc/96?img=12",
    team: "Engineering",
    targetMinutes: 2385,
    billable: true,
    weeks: {
      "2026-03-16": [
        day(420),
        day(450, "Internal"),
        day(390),
        day(420),
        day(420),
        off,
        off,
      ],
      "2026-03-23": [
        day(480, "Client", "Migration cutover for Northwind Studio."),
        day(480, "Client", "API gateway rollout."),
        day(450, "Client", "Cache layer tuning."),
        day(480, "Client", "Release hardening."),
        day(480, "Client", "Two production hotfixes."),
        off,
        off,
      ],
      "2026-03-30": [
        day(450),
        day(480),
        day(420, "Internal"),
        day(450),
        day(450),
        off,
        off,
      ],
    },
  },
  {
    id: "per-03",
    name: "Lena Hoffman",
    role: "Content systems editor",
    avatar: "https://i.pravatar.cc/96?img=26",
    team: "Design",
    targetMinutes: 1800,
    billable: false,
    weeks: {
      "2026-03-16": [
        day(300, "Internal"),
        day(360),
        day(300, "Internal"),
        day(330),
        day(240),
        off,
        off,
      ],
      "2026-03-23": [
        day(300, "Internal", "Content model audit."),
        day(270, "Client", "Copy pass on onboarding."),
        day(300, "Internal", "Glossary cleanup."),
        day(210, "Client", "Support macros refresh."),
        day(240, "Client", "Landing page edits."),
        off,
        off,
      ],
      "2026-03-30": [
        day(300),
        day(300, "Internal"),
        day(270),
        day(240),
        day(210),
        off,
        off,
      ],
    },
  },
  {
    id: "per-04",
    name: "Iris Calder",
    role: "Design systems lead",
    avatar: "https://i.pravatar.cc/96?img=32",
    team: "Design",
    targetMinutes: 1920,
    billable: true,
    weeks: {
      "2026-03-16": [
        day(360),
        day(390),
        day(330, "Internal"),
        day(390),
        day(270),
        off,
        off,
      ],
      "2026-03-23": [
        day(360, "Client", "Token review with Atlas Freight."),
        day(390, "Client", "Component audit with Meridian Labs."),
        day(360, "Internal", "Design system office hours."),
        day(390, "Client", "Prototype reviews."),
        day(240, "Client", "Handoff sessions."),
        off,
        off,
      ],
      "2026-03-30": [
        day(390),
        day(330),
        day(360),
        day(300),
        day(300),
        off,
        off,
      ],
    },
  },
  {
    id: "per-05",
    name: "Samir Vale",
    role: "Partner success manager",
    avatar: "https://i.pravatar.cc/96?img=53",
    team: "Support",
    targetMinutes: 2100,
    billable: true,
    weeks: {
      "2026-03-16": [
        day(420),
        day(390),
        day(390),
        day(480),
        day(360),
        off,
        off,
      ],
      "2026-03-23": [
        day(420, "Support", "Escalation queue cleanup."),
        day(420, "Support", "Partner onboarding calls."),
        day(390, "Client", "Quarterly business review."),
        day(480, "Client", "Renewal negotiations."),
        day(420, "Support", "Ticket triage with L2."),
        off,
        off,
      ],
      "2026-03-30": [
        day(450),
        day(390),
        day(420),
        day(390),
        day(390),
        off,
        off,
      ],
    },
  },
  {
    id: "per-06",
    name: "Nadia Petrov",
    role: "Backend engineer",
    avatar: "https://i.pravatar.cc/96?img=47",
    team: "Engineering",
    targetMinutes: 2400,
    billable: true,
    weeks: {
      "2026-03-16": [
        day(480),
        day(450),
        day(480),
        day(450),
        day(480),
        off,
        off,
      ],
      "2026-03-23": [
        day(450, "Client", "Billing service refactor."),
        day(480, "Client", "Webhook retries."),
        day(480, "Internal", "Platform hardening day."),
        day(450, "Client", "Data export pipeline."),
        day(480, "Client", "On-call follow-ups."),
        off,
        off,
      ],
      "2026-03-30": [
        day(480),
        day(480),
        day(450),
        day(480),
        day(450),
        off,
        off,
      ],
    },
  },
  {
    id: "per-07",
    name: "Owen Park",
    role: "Product designer",
    avatar: "https://i.pravatar.cc/96?img=15",
    team: "Design",
    targetMinutes: 1920,
    billable: false,
    weeks: {
      "2026-03-16": [
        day(330),
        day(360, "Internal"),
        day(330),
        day(300),
        day(300),
        off,
        off,
      ],
      "2026-03-23": [
        day(330, "Client", "Flow review for Harbor Coffee."),
        day(300, "Internal", "Design critique."),
        day(360, "Client", "Prototype iteration."),
        day(300, "Client", "Usability sessions."),
        day(270, "Internal", "Pattern library upkeep."),
        off,
        off,
      ],
      "2026-03-30": [
        day(360),
        day(330),
        day(300),
        day(330),
        day(270),
        off,
        off,
      ],
    },
  },
  {
    id: "per-08",
    name: "Camila Reyes",
    role: "Support lead",
    avatar: "https://i.pravatar.cc/96?img=8",
    team: "Support",
    targetMinutes: 2160,
    billable: true,
    weeks: {
      "2026-03-16": [
        day(450, "Support"),
        day(420, "Support"),
        day(390, "Support"),
        day(420, "Support"),
        day(450, "Support"),
        off,
        off,
      ],
      "2026-03-23": [
        day(450, "Support", "SLA backlog review."),
        day(420, "Support", "Staffing plan for April."),
        day(420, "Support", "Customer escalations."),
        day(390, "Client", "Onsite training."),
        day(450, "Support", "Knowledge base updates."),
        off,
        off,
      ],
      "2026-03-30": [
        day(420),
        day(450),
        day(420),
        day(450),
        day(420),
        off,
        off,
      ],
    },
  },
  {
    id: "per-09",
    name: "Jonas Weber",
    role: "Data engineer",
    avatar: "https://i.pravatar.cc/96?img=61",
    team: "Engineering",
    targetMinutes: 2400,
    billable: true,
    weeks: {
      "2026-03-16": [
        day(450),
        day(480),
        day(450),
        day(450),
        day(420),
        off,
        off,
      ],
      "2026-03-23": [
        day(480, "Client", "Warehouse schema rollout."),
        day(450, "Client", "Streaming pipeline fixes."),
        day(480, "Internal", "Cost review for storage."),
        day(450, "Client", "Dashboard SLAs."),
        day(480, "Client", "Backfill jobs."),
        off,
        off,
      ],
      "2026-03-30": [
        day(480),
        day(450),
        day(480),
        day(450),
        day(420),
        off,
        off,
      ],
    },
  },
]

export function entriesFor(person: Person, weekStart: Date): DayEntry[] {
  return person.weeks[weekKey(weekStart)] ?? EMPTY_ENTRY
}

export function weekTotal(person: Person, weekStart: Date) {
  return entriesFor(person, weekStart).reduce(
    (sum, entry) => sum + entry.minutes,
    0,
  )
}

export const KIND_TONES: Record<WorkKind, string> = {
  Client: "bg-success",
  Internal: "bg-warning",
  Support: "bg-info",
  Off: "bg-muted",
}
