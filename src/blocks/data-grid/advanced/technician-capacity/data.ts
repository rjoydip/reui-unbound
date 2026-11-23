export type DayState = "booked" | "off" | "holiday"

export interface DayPlan {
  state: DayState
  booked: number
}

export interface WeekPlan {
  days: DayPlan[]
}

export interface Technician {
  id: string
  name: string
  trade: string
  team: "Alpha" | "Bravo" | "Charlie" | "Delta"
  avatar: string
  /** Contracted hours per day. */
  capacity: number
  weeks: WeekPlan[]
}

export const WEEK_WINDOWS = [
  {
    label: "Oct 12 – 16",
    days: [
      { weekday: "Mon", date: 12 },
      { weekday: "Tue", date: 13 },
      { weekday: "Wed", date: 14 },
      { weekday: "Thu", date: 15 },
      { weekday: "Fri", date: 16 },
    ],
  },
  {
    label: "Oct 19 – 23",
    days: [
      { weekday: "Mon", date: 19 },
      { weekday: "Tue", date: 20 },
      { weekday: "Wed", date: 21 },
      { weekday: "Thu", date: 22 },
      { weekday: "Fri", date: 23 },
    ],
  },
  {
    label: "Oct 26 – 30",
    days: [
      { weekday: "Mon", date: 26 },
      { weekday: "Tue", date: 27 },
      { weekday: "Wed", date: 28 },
      { weekday: "Thu", date: 29 },
      { weekday: "Fri", date: 30 },
    ],
  },
]

export const TEAMS = ["Alpha", "Bravo", "Charlie", "Delta"] as const

export const TRADES = [
  "Mechanic",
  "Auto Electrician",
  "Diagnostic Tech",
  "Tire Specialist",
  "Brake Specialist",
  "Detailer",
]

function mkWeek(
  booked: [number, number, number, number, number],
  off: number[] = [],
  holiday: number[] = [],
): WeekPlan {
  return {
    days: booked.map((hours, index) => ({
      state: holiday.includes(index)
        ? "holiday"
        : off.includes(index)
          ? "off"
          : "booked",
      booked: hours,
    })),
  }
}

const avatar = (index: number) => `https://i.pravatar.cc/96?img=${index}`

export const TECHNICIANS: Technician[] = [
  {
    id: "elena",
    name: "Elena Petrova",
    trade: "Mechanic",
    team: "Alpha",
    avatar: avatar(45),
    capacity: 8,
    weeks: [
      mkWeek([0, 6, 7, 8, 8], [], [0]),
      mkWeek([8, 8, 6, 8, 7]),
      mkWeek([7, 8, 8, 6, 8]),
    ],
  },
  {
    id: "ben",
    name: "Ben Clarke",
    trade: "Mechanic",
    team: "Alpha",
    avatar: avatar(12),
    capacity: 8,
    weeks: [
      mkWeek([0, 8, 8, 0, 8], [3], [0]),
      mkWeek([8, 8, 8, 8, 8]),
      mkWeek([8, 6, 8, 8, 8]),
    ],
  },
  {
    id: "marco",
    name: "Marco Rossi",
    trade: "Mechanic",
    team: "Bravo",
    avatar: avatar(53),
    capacity: 8,
    weeks: [
      mkWeek([0, 8, 9, 8, 8], [], [0]),
      mkWeek([4, 8, 8, 4, 8]),
      mkWeek([8, 8, 8, 8, 10]),
    ],
  },
  {
    id: "sofia",
    name: "Sofia Romero",
    trade: "Mechanic",
    team: "Bravo",
    avatar: avatar(47),
    capacity: 8,
    weeks: [
      mkWeek([0, 8, 8, 0, 8], [3], [0]),
      mkWeek([8, 8, 8, 8, 8]),
      mkWeek([8, 8, 6, 8, 8]),
    ],
  },
  {
    id: "lucas",
    name: "Lucas Ferreira",
    trade: "Auto Electrician",
    team: "Charlie",
    avatar: avatar(15),
    capacity: 8,
    weeks: [
      mkWeek([0, 6, 6, 8, 9], [], [0]),
      mkWeek([8, 6, 8, 4, 8]),
      mkWeek([8, 8, 8, 8, 8]),
    ],
  },
  {
    id: "nadia",
    name: "Nadia Rahman",
    trade: "Auto Electrician",
    team: "Charlie",
    avatar: avatar(32),
    capacity: 8,
    weeks: [
      mkWeek([0, 8, 8, 8, 8], [], [0]),
      mkWeek([8, 8, 8, 8, 8]),
      mkWeek([10, 8, 8, 8, 8]),
    ],
  },
  {
    id: "elijah",
    name: "Elijah Morgan",
    trade: "Diagnostic Tech",
    team: "Delta",
    avatar: avatar(68),
    capacity: 8,
    weeks: [
      mkWeek([0, 8, 6, 8, 8], [], [0]),
      mkWeek([8, 8, 8, 8, 0], [4]),
      mkWeek([8, 8, 8, 8, 8]),
    ],
  },
  {
    id: "hana",
    name: "Hana Sato",
    trade: "Diagnostic Tech",
    team: "Delta",
    avatar: avatar(26),
    capacity: 8,
    weeks: [
      mkWeek([0, 8, 8, 8, 8], [], [0]),
      mkWeek([8, 8, 8, 0, 0], [3, 4]),
      mkWeek([8, 8, 8, 8, 8]),
    ],
  },
  {
    id: "kofi",
    name: "Kofi Mensah",
    trade: "Tire Specialist",
    team: "Alpha",
    avatar: avatar(59),
    capacity: 8,
    weeks: [
      mkWeek([0, 8, 9, 8, 8], [], [0]),
      mkWeek([8, 8, 8, 8, 8]),
      mkWeek([8, 8, 8, 8, 8]),
    ],
  },
  {
    id: "diego",
    name: "Diego Alvarez",
    trade: "Tire Specialist",
    team: "Bravo",
    avatar: avatar(11),
    capacity: 8,
    weeks: [
      mkWeek([0, 8, 0, 8, 8], [2], [0]),
      mkWeek([8, 8, 8, 8, 8]),
      mkWeek([9, 8, 8, 8, 8]),
    ],
  },
  {
    id: "priya",
    name: "Priya Raman",
    trade: "Brake Specialist",
    team: "Charlie",
    avatar: avatar(20),
    capacity: 8,
    weeks: [
      mkWeek([0, 9, 6, 8, 8], [], [0]),
      mkWeek([8, 8, 6, 8, 8]),
      mkWeek([8, 8, 8, 6, 8]),
    ],
  },
  {
    id: "owen",
    name: "Owen Blake",
    trade: "Detailer",
    team: "Delta",
    avatar: avatar(33),
    capacity: 8,
    weeks: [
      mkWeek([0, 8, 8, 8, 8], [], [0]),
      mkWeek([8, 8, 8, 8, 8]),
      mkWeek([8, 8, 0, 8, 8], [2]),
    ],
  },
]

export const SERVICES = [
  "Brake service",
  "Diagnostics",
  "Tire rotation",
  "Electrical",
  "Full detail",
  "Scheduled maintenance",
]

export function baseDay(tech: Technician, week: number, day: number) {
  return tech.weeks[week]?.days[day] ?? { state: "booked" as DayState, booked: 0 }
}

export function extraKey(techId: string, week: number, day: number) {
  return `${techId}-${week}-${day}`
}

export function weekHours(
  tech: Technician,
  week: number,
  extras: Record<string, number>,
) {
  return tech.weeks[week].days.reduce((sum, plan, index) => {
    const base = plan.state === "booked" ? plan.booked : 0
    return sum + base + (extras[extraKey(tech.id, week, index)] ?? 0)
  }, 0)
}

export function utilisation(
  tech: Technician,
  week: number,
  extras: Record<string, number>,
) {
  const hours = weekHours(tech, week, extras)
  const capacity = tech.capacity * 5
  return { hours, capacity, percent: Math.round((hours / capacity) * 100) }
}

export function offDays(tech: Technician, week: number) {
  return tech.weeks[week].days.reduce(
    (count, plan) => count + (plan.state === "off" ? 1 : 0),
    0,
  )
}
