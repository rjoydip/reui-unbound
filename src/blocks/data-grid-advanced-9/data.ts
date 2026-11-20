export type VisitStatus = "none" | "done" | "due" | "missed" | "awaiting"

export interface Day {
  index: number
  iso: string
  day: number
  weekday: string
  weekend: boolean
}

const START = new Date("2026-10-12T00:00:00")

export const DAYS: Day[] = Array.from({ length: 21 }, (_, index) => {
  const date = new Date(START)
  date.setDate(date.getDate() + index)
  return {
    index,
    iso: date.toISOString().slice(0, 10),
    day: date.getDate(),
    weekday: date
      .toLocaleDateString("en-US", { weekday: "short" })
      .slice(0, 2),
    weekend: date.getDay() === 0 || date.getDay() === 6,
  }
})

const CODES: Record<string, VisitStatus> = {
  ".": "none",
  d: "done",
  u: "due",
  m: "missed",
  a: "awaiting",
}

/** 21-char visit pattern, one char per day. */
function pattern(value: string): VisitStatus[] {
  return value.split("").map((char) => CODES[char] ?? "none")
}

export interface Site {
  id: string
  name: string
  manager: string
  vendor: string
  service: string
  note: string
  required: number
  visits: VisitStatus[]
}

export const SITES: Site[] = [
  {
    id: "river-north",
    name: "River North Grill",
    manager: "Grace Okoye",
    vendor: "PestPro",
    service: "Pest control",
    note: "Pest due Oct 21",
    required: 4,
    visits: pattern("d.....d.............."),
  },
  {
    id: "edgewater",
    name: "Edgewater Taqueria",
    manager: "Victor Hale",
    vendor: "CoolAir",
    service: "Cooling",
    note: "Cooling missed",
    required: 4,
    visits: pattern("mu..a......d...a....."),
  },
  {
    id: "lakeview",
    name: "Lakeview Grill",
    manager: "Marcus Bell",
    vendor: "GreaseGuard",
    service: "Grease trap",
    note: "Grease missed",
    required: 6,
    visits: pattern("mu.a..a..d...d......."),
  },
  {
    id: "loop-cafe",
    name: "Loop Café",
    manager: "Grace Okoye",
    vendor: "CoolAir",
    service: "Cooling",
    note: "Cooling missed",
    required: 4,
    visits: pattern("mu.......a..d.......u"),
  },
  {
    id: "hyde-park",
    name: "Hyde Park Café",
    manager: "Elena Ruiz",
    vendor: "PestPro",
    service: "Pest control",
    note: "Hood due Oct 22",
    required: 6,
    visits: pattern("d....au...d....a....d"),
  },
  {
    id: "pilsen-taqueria",
    name: "Pilsen Taqueria",
    manager: "Elena Ruiz",
    vendor: "HoodWorks",
    service: "Hood cleaning",
    note: "Pest missed",
    required: 6,
    visits: pattern("m..d....a......d...a."),
  },
  {
    id: "avondale",
    name: "Avondale Pizzeria",
    manager: "Andre Lewis",
    vendor: "PestPro",
    service: "Pest control",
    note: "Pest due Oct 21",
    required: 5,
    visits: pattern("..d....a......d...d.."),
  },
  {
    id: "fulton",
    name: "Fulton Market Grill",
    manager: "Dana Whitfield",
    vendor: "GreaseGuard",
    service: "Grease trap",
    note: "Hood due Oct 22",
    required: 5,
    visits: pattern("d....a........d......"),
  },
  {
    id: "wicker",
    name: "Wicker Park Grill",
    manager: "Andre Lewis",
    vendor: "CoolAir",
    service: "Cooling",
    note: "Cooling booked late",
    required: 5,
    visits: pattern("d..........a...d....u"),
  },
  {
    id: "andersonville",
    name: "Andersonville Café",
    manager: "Victor Hale",
    vendor: "HoodWorks",
    service: "Hood cleaning",
    note: "Two visits left",
    required: 4,
    visits: pattern("...d......a......d..."),
  },
  {
    id: "logan-deli",
    name: "Logan Square Deli",
    manager: "Dana Whitfield",
    vendor: "PestPro",
    service: "Pest control",
    note: "Awaiting quote",
    required: 4,
    visits: pattern("..d..........a...u..."),
  },
  {
    id: "pilsen-bakery",
    name: "Pilsen Bakery",
    manager: "Marcus Bell",
    vendor: "GreaseGuard",
    service: "Grease trap",
    note: "Pest due Nov 1",
    required: 6,
    visits: pattern("d....a....d..a....d.."),
  },
]

export const STATUS_META: Record<
  VisitStatus,
  {
    label: string
    variant:
      | "success-light"
      | "warning-light"
      | "destructive-light"
      | "info-light"
      | "invert-light"
    cell: string
    icon: "check" | "calendar" | "alert" | "clock" | "dash"
  }
> = {
  done: {
    label: "Done",
    variant: "success-light",
    cell: "bg-success/10 text-success-foreground border-success/20",
    icon: "check",
  },
  due: {
    label: "Due",
    variant: "warning-light",
    cell: "bg-warning/10 text-warning-foreground border-warning/25",
    icon: "calendar",
  },
  missed: {
    label: "Missed",
    variant: "destructive-light",
    cell: "bg-destructive/10 text-destructive border-destructive/25",
    icon: "alert",
  },
  awaiting: {
    label: "Awaiting",
    variant: "info-light",
    cell: "bg-purple-500/10 text-purple-600 border-purple-500/25 dark:text-purple-400",
    icon: "clock",
  },
  none: {
    label: "No visit",
    variant: "invert-light",
    cell: "border-transparent bg-transparent",
    icon: "dash",
  },
}

export const SERVICES = [
  "Pest control",
  "Cooling",
  "Grease trap",
  "Hood cleaning",
]

export function coverage(site: Site) {
  const done = site.visits.filter((visit) => visit === "done").length
  const missed = site.visits.filter((visit) => visit === "missed").length
  const due = site.visits.filter(
    (visit) => visit === "due" || visit === "awaiting",
  ).length

  const tone =
    missed > 0
      ? "destructive"
      : done < site.required
        ? "warning"
        : "success"

  return { done, missed, due, tone }
}

export function formatRange(days: Day[]) {
  const first = days[0]
  const last = days[days.length - 1]
  if (!first || !last) return ""

  const month = (day: Day) =>
    new Date(`${day.iso}T00:00:00`).toLocaleDateString("en-US", {
      month: "short",
    })

  return `${month(first)} ${first.day} – ${month(last)} ${last.day}`
}
