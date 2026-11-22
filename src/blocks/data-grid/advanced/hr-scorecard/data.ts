export type KpiGroup =
  | "Hiring"
  | "Retention"
  | "Learning"
  | "Performance"
  | "Engagement"

export type KpiUnit =
  | "Days"
  | "USD"
  | "Percent"
  | "Score"
  | "Count"
  | "Hours"
  | "Months"

/** up: higher is better. down: lower is better. */
export type Direction = "up" | "down"

export type ScoreMode = "month" | "ytd"

export interface Owner {
  name: string
  role: string
}

export const OWNERS = {
  priya: { name: "Priya Shah", role: "People Ops" },
  lucas: { name: "Lucas Meyer", role: "Comp & Ben" },
  nina: { name: "Nina Okafor", role: "Talent" },
  amara: { name: "Amara Diallo", role: "Culture" },
  omar: { name: "Omar Haddad", role: "People Analytics" },
  sana: { name: "Sana Iqbal", role: "HRBP" },
  diego: { name: "Diego Ramos", role: "HRBP" },
  sofia: { name: "Sofia Lind", role: "L&D" },
  kenji: { name: "Kenji Mori", role: "Talent" },
  elijah: { name: "Elijah Cole", role: "People Ops" },
} as const

export type OwnerKey = keyof typeof OWNERS

export interface Kpi {
  id: string
  name: string
  group: KpiGroup
  owner: OwnerKey
  unit: KpiUnit
  direction: Direction
  priorYear: number
  priorMonth: number
  priorYtd: number
  targetMonth: number
  actualMonth: number
  targetYtd: number
  actualYtd: number
  /** Twelve monthly observations, oldest first. */
  trend: number[]
}

export const GROUP_META: Record<
  KpiGroup,
  { dot: string; rail: string; tint: string }
> = {
  Hiring: {
    dot: "bg-sky-500",
    rail: "border-sky-500/70",
    tint: "text-sky-600 dark:text-sky-400",
  },
  Retention: {
    dot: "bg-violet-500",
    rail: "border-violet-500/70",
    tint: "text-violet-600 dark:text-violet-400",
  },
  Learning: {
    dot: "bg-amber-500",
    rail: "border-amber-500/70",
    tint: "text-amber-600 dark:text-amber-400",
  },
  Performance: {
    dot: "bg-emerald-500",
    rail: "border-emerald-500/70",
    tint: "text-emerald-600 dark:text-emerald-400",
  },
  Engagement: {
    dot: "bg-rose-500",
    rail: "border-rose-500/70",
    tint: "text-rose-600 dark:text-rose-400",
  },
}

export const GROUP_ORDER: KpiGroup[] = [
  "Hiring",
  "Retention",
  "Learning",
  "Performance",
  "Engagement",
]

function makeTrend(actual: number, seed: number, spread = 0.07) {
  return Array.from({ length: 12 }, (_, index) => {
    const wave = Math.sin(seed * 1.9 + index * 0.8) * spread
    const drift = ((index - 11) / 11) * spread * 0.8
    return Number((actual * (1 + wave + drift)).toFixed(3))
  })
}

export const KPIS: Kpi[] = [
  {
    id: "headcount", name: "Headcount", group: "Hiring", owner: "elijah",
    unit: "Count", direction: "up", priorYear: 1190, priorMonth: 1241,
    priorYtd: 1214, targetMonth: 1248, actualMonth: 1248, targetYtd: 1248,
    actualYtd: 1247, trend: makeTrend(1248, 18, 0.02),
  },
  {
    id: "time-to-fill", name: "Time to Fill", group: "Hiring", owner: "priya",
    unit: "Days", direction: "down", priorYear: 36.4, priorMonth: 38.0,
    priorYtd: 37.2, targetMonth: 32.0, actualMonth: 36.8, targetYtd: 33.5,
    actualYtd: 35.9, trend: makeTrend(36.8, 1),
  },
  {
    id: "cost-per-hire", name: "Cost per Hire", group: "Hiring", owner: "lucas",
    unit: "USD", direction: "down", priorYear: 5257, priorMonth: 4585,
    priorYtd: 5010, targetMonth: 4600, actualMonth: 4371, targetYtd: 4720,
    actualYtd: 4488, trend: makeTrend(4371, 2, 0.09),
  },
  {
    id: "offer-acceptance", name: "Offer Acceptance", group: "Hiring", owner: "nina",
    unit: "Percent", direction: "up", priorYear: 83.7, priorMonth: 84.9,
    priorYtd: 84.1, targetMonth: 88.0, actualMonth: 82.9, targetYtd: 86.5,
    actualYtd: 86.4, trend: makeTrend(82.9, 3, 0.04),
  },
  {
    id: "quality-of-hire", name: "Quality of Hire", group: "Hiring", owner: "priya",
    unit: "Score", direction: "up", priorYear: 3.7, priorMonth: 3.3,
    priorYtd: 3.5, targetMonth: 4.0, actualMonth: 3.3, targetYtd: 3.9,
    actualYtd: 3.8, trend: makeTrend(3.3, 4, 0.05),
  },
  {
    id: "turnover-rate", name: "Turnover Rate", group: "Retention", owner: "omar",
    unit: "Percent", direction: "down", priorYear: 1.6, priorMonth: 1.3,
    priorYtd: 1.5, targetMonth: 1.2, actualMonth: 1.5, targetYtd: 1.25,
    actualYtd: 1.4, trend: makeTrend(1.5, 5, 0.12),
  },
  {
    id: "early-leavers", name: "Early Leavers", group: "Retention", owner: "sana",
    unit: "Percent", direction: "down", priorYear: 8.7, priorMonth: 6.2,
    priorYtd: 7.4, targetMonth: 7.0, actualMonth: 6.7, targetYtd: 7.2,
    actualYtd: 7.0, trend: makeTrend(6.7, 6, 0.08),
  },
  {
    id: "regretted-exits", name: "Regretted Exits", group: "Retention", owner: "diego",
    unit: "Count", direction: "down", priorYear: 6, priorMonth: 4,
    priorYtd: 5, targetMonth: 4, actualMonth: 6, targetYtd: 4,
    actualYtd: 5, trend: makeTrend(6, 7, 0.15),
  },
  {
    id: "average-tenure", name: "Average Tenure", group: "Retention", owner: "omar",
    unit: "Months", direction: "up", priorYear: 40.9, priorMonth: 44.9,
    priorYtd: 42.8, targetMonth: 44.0, actualMonth: 44.8, targetYtd: 43.5,
    actualYtd: 43.9, trend: makeTrend(44.8, 8, 0.03),
  },
  {
    id: "learning-hours", name: "Learning Hours", group: "Learning", owner: "sofia",
    unit: "Hours", direction: "up", priorYear: 2.3, priorMonth: 3.5,
    priorYtd: 2.9, targetMonth: 3.5, actualMonth: 3.2, targetYtd: 3.3,
    actualYtd: 3.1, trend: makeTrend(3.2, 9, 0.1),
  },
  {
    id: "course-completion", name: "Course Completion", group: "Learning", owner: "nina",
    unit: "Percent", direction: "up", priorYear: 70.3, priorMonth: 89.0,
    priorYtd: 80.1, targetMonth: 85.0, actualMonth: 86.4, targetYtd: 83.0,
    actualYtd: 82.8, trend: makeTrend(86.4, 10, 0.05),
  },
  {
    id: "internal-moves", name: "Internal Moves", group: "Learning", owner: "kenji",
    unit: "Count", direction: "up", priorYear: 7, priorMonth: 11,
    priorYtd: 9, targetMonth: 10, actualMonth: 10, targetYtd: 10,
    actualYtd: 9, trend: makeTrend(10, 11, 0.2),
  },
  {
    id: "cost-per-learner", name: "Cost per Learner", group: "Performance", owner: "lucas",
    unit: "USD", direction: "down", priorYear: 148, priorMonth: 135,
    priorYtd: 142, targetMonth: 130, actualMonth: 135, targetYtd: 132,
    actualYtd: 131, trend: makeTrend(135, 12, 0.06),
  },
  {
    id: "goals-met", name: "Goals Met", group: "Performance", owner: "kenji",
    unit: "Percent", direction: "up", priorYear: 69.8, priorMonth: 71.4,
    priorYtd: 70.6, targetMonth: 75.0, actualMonth: 72.4, targetYtd: 73.0,
    actualYtd: 71.2, trend: makeTrend(72.4, 13, 0.05),
  },
  {
    id: "reviews-on-time", name: "Reviews On Time", group: "Performance", owner: "sana",
    unit: "Percent", direction: "up", priorYear: 80.6, priorMonth: 90.5,
    priorYtd: 85.4, targetMonth: 95.0, actualMonth: 91.9, targetYtd: 92.0,
    actualYtd: 90.4, trend: makeTrend(91.9, 14, 0.04),
  },
  {
    id: "high-performers", name: "High Performers", group: "Performance", owner: "sofia",
    unit: "Percent", direction: "up", priorYear: 18.2, priorMonth: 20.8,
    priorYtd: 19.4, targetMonth: 21.3, actualMonth: 20.0, targetYtd: 20.5,
    actualYtd: 19.8, trend: makeTrend(20.0, 15, 0.05),
  },
  {
    id: "enps", name: "eNPS", group: "Engagement", owner: "amara",
    unit: "Score", direction: "up", priorYear: 12.4, priorMonth: 21.4,
    priorYtd: 16.8, targetMonth: 25.0, actualMonth: 21.5, targetYtd: 22.0,
    actualYtd: 20.9, trend: makeTrend(21.5, 16, 0.1),
  },
  {
    id: "voluntary-attrition", name: "Voluntary Attrition", group: "Engagement", owner: "elijah",
    unit: "Percent", direction: "down", priorYear: 1.1, priorMonth: 0.9,
    priorYtd: 1.0, targetMonth: 0.8, actualMonth: 0.9, targetYtd: 0.85,
    actualYtd: 0.86, trend: makeTrend(0.9, 17, 0.14),
  },
]

export type HrRow =
  | {
      kind: "group"
      id: string
      group: KpiGroup
      kpis: Kpi[]
      index: number
    }
  | {
      kind: "kpi"
      id: string
      kpi: Kpi
      rail: string
    }

export interface Thresholds {
  onTrack: number
  watch: number
}

export const DEFAULT_THRESHOLDS: Thresholds = { onTrack: 100, watch: 90 }

export function targetOf(kpi: Kpi, mode: ScoreMode) {
  return mode === "month" ? kpi.targetMonth : kpi.targetYtd
}

export function actualOf(kpi: Kpi, mode: ScoreMode) {
  return mode === "month" ? kpi.actualMonth : kpi.actualYtd
}

export function priorOf(kpi: Kpi, mode: ScoreMode) {
  return mode === "month" ? kpi.priorMonth : kpi.priorYtd
}

/** 100 = exactly on target, after honouring the KPI's direction. */
export function indexOf(kpi: Kpi, mode: ScoreMode) {
  const target = targetOf(kpi, mode)
  const actual = actualOf(kpi, mode)
  if (target === 0 || actual === 0) return 0
  return kpi.direction === "up"
    ? (actual / target) * 100
    : (target / actual) * 100
}

export function vsPriorIndex(kpi: Kpi, mode: ScoreMode) {
  const prior = kpi.priorYear
  const actual = actualOf(kpi, mode)
  if (prior === 0 || actual === 0) return 0
  return kpi.direction === "up"
    ? (actual / prior) * 100
    : (prior / actual) * 100
}

export function varianceOf(kpi: Kpi, mode: ScoreMode) {
  return kpi.direction === "up"
    ? actualOf(kpi, mode) - targetOf(kpi, mode)
    : targetOf(kpi, mode) - actualOf(kpi, mode)
}

export type KpiStatus = "on" | "watch" | "off"

export function statusOf(
  kpi: Kpi,
  mode: ScoreMode,
  thresholds: Thresholds = DEFAULT_THRESHOLDS,
): KpiStatus {
  const index = indexOf(kpi, mode)
  if (index >= thresholds.onTrack) return "on"
  if (index >= thresholds.watch) return "watch"
  return "off"
}

export function formatValue(value: number, unit: KpiUnit) {
  switch (unit) {
    case "USD":
      return `$${Math.round(value).toLocaleString("en-US")}`
    case "Percent":
      return `${value.toFixed(1)}%`
    case "Count":
      return Math.round(value).toLocaleString("en-US")
    case "Days":
    case "Hours":
    case "Months":
      return `${value.toFixed(1)}`
    case "Score":
      return value.toFixed(1)
  }
}

export function formatVariance(value: number, unit: KpiUnit) {
  const sign = value > 0 ? "+" : value < 0 ? "−" : ""
  const magnitude = Math.abs(value)
  const body =
    unit === "USD"
      ? `$${Math.round(magnitude).toLocaleString("en-US")}`
      : unit === "Percent"
        ? `${magnitude.toFixed(1)}%`
        : unit === "Count"
          ? Math.round(magnitude).toLocaleString("en-US")
          : magnitude.toFixed(1)
  return `${sign}${body}`
}

export function groupAverage(
  kpis: Kpi[],
  mode: ScoreMode,
  thresholds: Thresholds,
) {
  if (kpis.length === 0) return 0
  return (
    kpis.reduce((sum, kpi) => sum + indexOf(kpi, mode), 0) / kpis.length
  )
}

export function countStatus(
  kpis: Kpi[],
  mode: ScoreMode,
  thresholds: Thresholds,
) {
  return kpis.reduce(
    (counts, kpi) => {
      counts[statusOf(kpi, mode, thresholds)] += 1
      return counts
    },
    { on: 0, watch: 0, off: 0 },
  )
}
