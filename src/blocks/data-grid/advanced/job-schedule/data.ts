export type JobStatus = "on-track" | "late" | "not-started" | "on-hold" | "complete"
export type SlotTag = "inspection" | "material" | "delivery"

export interface Crew {
  id: string
  name: string
  lead: string
  avatar: string
  chip: string
  dot: string
}

export interface Slot {
  day: number
  hours: number
  tag?: SlotTag
}

export interface Material {
  name: string
  qty: string
  status: "delivered" | "due" | "backorder"
  eta: string
}

export interface Inspection {
  name: string
  date: string
  result: "passed" | "scheduled" | "failed"
  authority: string
}

export interface Job {
  id: string
  name: string
  client: string
  address: string
  crewId: string
  status: JobStatus
  startDay: number
  length: number
  dueDay: number
  tags: [number, SlotTag][]
  slots: Slot[]
  materials: Material[]
  inspections: Inspection[]
}

/** Monday, Oct 19 2026. Four working weeks, weekends skipped. */
const WINDOW_START = Date.UTC(2026, 9, 19)

export const WORKDAYS = (() => {
  const days: { index: number; weekday: string; date: string; month: string; label: string }[] = []
  const cursor = new Date(WINDOW_START)
  while (days.length < 20) {
    const day = cursor.getUTCDay()
    if (day !== 0 && day !== 6) {
      days.push({
        index: days.length,
        weekday: cursor.toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" }).slice(0, 2),
        date: String(cursor.getUTCDate()),
        month: cursor.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }),
        label: cursor.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          timeZone: "UTC",
        }),
      })
    }
    cursor.setUTCDate(cursor.getUTCDate() + 1)
  }
  return days
})()

export const WEEKS = [0, 1, 2, 3].map((week) =>
  WORKDAYS.slice(week * 5, week * 5 + 5),
)

/** Fixed demo "today": Friday, Oct 30 2026. */
export const TODAY_INDEX = 9

export const CREWS: Crew[] = [
  { id: "c1", name: "Alvarez Crew", lead: "Luis Alvarez", avatar: "https://i.pravatar.cc/96?img=11", chip: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  { id: "c2", name: "Becker Crew", lead: "Tom Becker", avatar: "https://i.pravatar.cc/96?img=13", chip: "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  { id: "c3", name: "Chen Crew", lead: "Maya Chen", avatar: "https://i.pravatar.cc/96?img=45", chip: "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300", dot: "bg-sky-500" },
  { id: "c4", name: "Doyle Crew", lead: "Sean Doyle", avatar: "https://i.pravatar.cc/96?img=14", chip: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  { id: "c5", name: "Grant Crew", lead: "Nia Grant", avatar: "https://i.pravatar.cc/96?img=32", chip: "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  { id: "c6", name: "Herrera Crew", lead: "Diego Herrera", avatar: "https://i.pravatar.cc/96?img=15", chip: "border-indigo-500/25 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300", dot: "bg-indigo-500" },
]

export const CREW_BY_ID = Object.fromEntries(CREWS.map((crew) => [crew.id, crew]))

type JobSeed = Omit<Job, "slots">

const SEEDS: JobSeed[] = [
  {
    id: "j1", name: "Alvarez Exterior", client: "Alvarez Residence", address: "18 Cedar Lane", crewId: "c1", status: "on-hold",
    startDay: 6, length: 10, dueDay: 15, tags: [[14, "inspection"]],
    materials: [
      { name: "Hardie siding", qty: "42 panels", status: "backorder", eta: "Nov 3" },
      { name: "House wrap", qty: "6 rolls", status: "delivered", eta: "Oct 24" },
      { name: "Trim coil", qty: "8 boxes", status: "due", eta: "Nov 2" },
    ],
    inspections: [
      { name: "Framing inspection", date: "Nov 5", result: "scheduled", authority: "County building" },
      { name: "Sheathing", date: "Oct 27", result: "passed", authority: "County building" },
    ],
  },
  {
    id: "j2", name: "Becker Kitchen", client: "Becker Family", address: "402 Willow St", crewId: "c2", status: "not-started",
    startDay: 13, length: 6, dueDay: 18, tags: [[16, "material"]],
    materials: [
      { name: "Shaker cabinets", qty: "18 units", status: "due", eta: "Nov 6" },
      { name: "Quartz counter", qty: "1 slab", status: "delivered", eta: "Oct 30" },
    ],
    inspections: [
      { name: "Rough-in electrical", date: "Nov 9", result: "scheduled", authority: "City inspector" },
    ],
  },
  {
    id: "j3", name: "Brandt Exterior", client: "Brandt Duplex", address: "77 Mercer Ave", crewId: "c3", status: "on-track",
    startDay: 1, length: 8, dueDay: 9, tags: [[2, "material"], [7, "inspection"]],
    materials: [
      { name: "Roof underlayment", qty: "12 rolls", status: "delivered", eta: "Oct 20" },
      { name: "Standing seam panels", qty: "84 ft", status: "delivered", eta: "Oct 22" },
    ],
    inspections: [
      { name: "Roof dry-in", date: "Oct 28", result: "passed", authority: "County building" },
    ],
  },
  {
    id: "j4", name: "Chen Bath", client: "Chen Residence", address: "9 Lantern Ct", crewId: "c4", status: "on-track",
    startDay: 5, length: 8, dueDay: 13, tags: [[7, "material"], [11, "inspection"]],
    materials: [
      { name: "Tile setter kit", qty: "1 kit", status: "delivered", eta: "Oct 23" },
      { name: "Glass shower door", qty: "1", status: "due", eta: "Nov 4" },
    ],
    inspections: [
      { name: "Waterproofing", date: "Nov 4", result: "scheduled", authority: "City inspector" },
    ],
  },
  {
    id: "j5", name: "Doyle Kitchen", client: "Doyle Family", address: "310 Alder Rd", crewId: "c1", status: "late",
    startDay: 0, length: 12, dueDay: 7, tags: [[5, "inspection"]],
    materials: [
      { name: "Cabinet boxes", qty: "14 units", status: "delivered", eta: "Oct 16" },
      { name: "Backsplash tile", qty: "24 sq ft", status: "backorder", eta: "Nov 2" },
    ],
    inspections: [
      { name: "Plumbing rough-in", date: "Oct 23", result: "failed", authority: "City inspector" },
    ],
  },
  {
    id: "j6", name: "Feldman Bath", client: "Feldman Residence", address: "55 Brookside", crewId: "c5", status: "not-started",
    startDay: 11, length: 8, dueDay: 19, tags: [[15, "material"]],
    materials: [
      { name: "Vanity + top", qty: "1", status: "due", eta: "Nov 5" },
      { name: "Shower valve", qty: "1", status: "delivered", eta: "Oct 28" },
    ],
    inspections: [
      { name: "Final plumbing", date: "Nov 12", result: "scheduled", authority: "City inspector" },
    ],
  },
  {
    id: "j7", name: "Grant Bath", client: "Grant Residence", address: "212 Pine St", crewId: "c6", status: "on-track",
    startDay: 3, length: 7, dueDay: 12, tags: [[8, "inspection"]],
    materials: [
      { name: "Cement board", qty: "22 sheets", status: "delivered", eta: "Oct 21" },
      { name: "Fixture package", qty: "1", status: "delivered", eta: "Oct 24" },
    ],
    inspections: [
      { name: "Tile substrate", date: "Oct 30", result: "scheduled", authority: "City inspector" },
    ],
  },
  {
    id: "j8", name: "Hale Exterior", client: "Hale Cottage", address: "4 Orchard Way", crewId: "c3", status: "complete",
    startDay: 0, length: 4, dueDay: 5, tags: [],
    materials: [
      { name: "Cedar shakes", qty: "30 bundles", status: "delivered", eta: "Oct 15" },
    ],
    inspections: [
      { name: "Final exterior", date: "Oct 23", result: "passed", authority: "County building" },
    ],
  },
  {
    id: "j9", name: "Herrera Basement", client: "Herrera Family", address: "880 Quarry Rd", crewId: "c4", status: "on-track",
    startDay: 0, length: 6, dueDay: 8, tags: [[4, "inspection"]],
    materials: [
      { name: "Insulation", qty: "34 bags", status: "delivered", eta: "Oct 16" },
      { name: "Egress window", qty: "2", status: "delivered", eta: "Oct 19" },
    ],
    inspections: [
      { name: "Egress + framing", date: "Oct 26", result: "passed", authority: "City inspector" },
    ],
  },
  {
    id: "j10", name: "Ibarra Bath", client: "Ibarra Residence", address: "40 Selby Ave", crewId: "c2", status: "not-started",
    startDay: 12, length: 6, dueDay: 18, tags: [[15, "inspection"]],
    materials: [
      { name: "Shower pan", qty: "1", status: "due", eta: "Nov 6" },
      { name: "Tile", qty: "38 sq ft", status: "delivered", eta: "Oct 29" },
    ],
    inspections: [
      { name: "Waterproofing", date: "Nov 9", result: "scheduled", authority: "City inspector" },
    ],
  },
  {
    id: "j11", name: "Okafor Kitchen", client: "Okafor Family", address: "16 Fennel Dr", crewId: "c5", status: "late",
    startDay: 0, length: 12, dueDay: 5, tags: [[3, "material"]],
    materials: [
      { name: "Range hood", qty: "1", status: "backorder", eta: "Nov 4" },
      { name: "Flooring", qty: "18 boxes", status: "delivered", eta: "Oct 16" },
    ],
    inspections: [
      { name: "Electrical rough-in", date: "Oct 22", result: "passed", authority: "City inspector" },
    ],
  },
  {
    id: "j12", name: "Rahman Kitchen", client: "Rahman Family", address: "93 Juniper Ln", crewId: "c6", status: "on-track",
    startDay: 2, length: 9, dueDay: 11, tags: [[4, "delivery"], [10, "inspection"]],
    materials: [
      { name: "Semi-custom cabinets", qty: "16 units", status: "delivered", eta: "Oct 22" },
      { name: "Countertop template", qty: "1", status: "due", eta: "Nov 2" },
    ],
    inspections: [
      { name: "Countertop template", date: "Nov 2", result: "scheduled", authority: "Fabricator" },
    ],
  },
  {
    id: "j13", name: "Novak Bath", client: "Novak Loft", address: "5 Canal St", crewId: "c2", status: "on-track",
    startDay: 8, length: 5, dueDay: 14, tags: [[9, "material"]],
    materials: [
      { name: "Wall tile", qty: "26 sq ft", status: "due", eta: "Oct 31" },
      { name: "Niche insert", qty: "2", status: "delivered", eta: "Oct 27" },
    ],
    inspections: [
      { name: "Final tile", date: "Nov 5", result: "scheduled", authority: "City inspector" },
    ],
  },
  {
    id: "j14", name: "Ellis Exterior", client: "Ellis House", address: "120 Summit Rd", crewId: "c5", status: "on-track",
    startDay: 9, length: 6, dueDay: 16, tags: [[13, "inspection"]],
    materials: [
      { name: "Window units", qty: "9", status: "delivered", eta: "Oct 29" },
      { name: "Flashing kit", qty: "1", status: "due", eta: "Nov 3" },
    ],
    inspections: [
      { name: "Window flashing", date: "Nov 6", result: "scheduled", authority: "County building" },
    ],
  },
]

export function buildJobs(): Job[] {
  return SEEDS.map((seed) => ({
    ...seed,
    slots: Array.from({ length: seed.length }, (_, offset) => {
      const day = seed.startDay + offset
      const tag = seed.tags.find(([tagDay]) => tagDay === day)?.[1]
      return { day, hours: tag === "inspection" ? 4 : 8, tag }
    }),
  }))
}

export const JOBS = buildJobs()

export const STATUS_META: Record<
  JobStatus,
  { label: string; variant: "success-light" | "destructive-light" | "outline" | "info-light" | "warning-light" }
> = {
  "on-track": { label: "On Track", variant: "success-light" },
  late: { label: "Late", variant: "destructive-light" },
  "not-started": { label: "Not Started", variant: "outline" },
  "on-hold": { label: "On Hold", variant: "warning-light" },
  complete: { label: "Complete", variant: "info-light" },
}

export const TAG_META: Record<SlotTag, { label: string; icon: "clipboard" | "package" | "truck" }> = {
  inspection: { label: "Inspection", icon: "clipboard" },
  material: { label: "Material drop", icon: "package" },
  delivery: { label: "Delivery", icon: "truck" },
}

export function dayLabel(day: number) {
  return WORKDAYS[day]?.label ?? "Outside window"
}

export function finishDay(job: Job) {
  return job.slots.reduce((latest, slot) => Math.max(latest, slot.day), 0)
}

export function remainingHours(job: Job) {
  return job.slots
    .filter((slot) => slot.day >= TODAY_INDEX)
    .reduce((total, slot) => total + slot.hours, 0)
}

export function totalHours(job: Job) {
  return job.slots.reduce((total, slot) => total + slot.hours, 0)
}

export function completedHours(job: Job) {
  return job.slots
    .filter((slot) => slot.day < TODAY_INDEX)
    .reduce((total, slot) => total + slot.hours, 0)
}

export function replanJob(job: Job, shift: number): Job {
  const slots = job.slots.map((slot) =>
    slot.day >= TODAY_INDEX
      ? { ...slot, day: Math.min(19, slot.day + shift) }
      : slot,
  )
  const last = slots.reduce((latest, slot) => Math.max(latest, slot.day), job.startDay)
  const late = last > job.dueDay
  return {
    ...job,
    slots,
    status: late
      ? "late"
      : job.status === "late" || job.status === "on-hold"
        ? "on-track"
        : job.status,
  }
}

export function crewTotals(jobs: Job[]) {
  return CREWS.map((crew) => {
    const crewJobs = jobs.filter((job) => job.crewId === crew.id)
    return {
      crew,
      jobs: crewJobs.length,
      hours: crewJobs.reduce((total, job) => total + totalHours(job), 0),
      remaining: crewJobs.reduce((total, job) => total + remainingHours(job), 0),
    }
  })
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}
