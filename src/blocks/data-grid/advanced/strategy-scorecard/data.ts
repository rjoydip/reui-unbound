export type PerspectiveId =
  | "financial"
  | "customer"
  | "operations"
  | "people"

export type Direction = "up" | "down"

export type Unit = "USD_M" | "USD" | "Percent" | "Days" | "Score" | "X"

export interface Perspective {
  id: PerspectiveId
  name: string
  weight: number
  note: string
  dot: string
  rail: string
  tint: string
  bar: string
}

export interface Objective {
  id: string
  perspective: PerspectiveId
  name: string
  weight: number
}

export interface Kpi {
  id: string
  objective: string
  name: string
  owner: OwnerKey
  weight: number
  baseline: number
  value: number
  target: number
  unit: Unit
  direction: Direction
  lagging: { flag: string; market: string; pct: number }
}

export const OWNERS = {
  priya: "Priya Shah",
  sana: "Sana Iqbal",
  kenji: "Kenji Mori",
  diego: "Diego Ramos",
  omar: "Omar Haddad",
  sofia: "Sofia Lind",
  lucas: "Lucas Meyer",
  elijah: "Elijah Cole",
  hana: "Hana Sato",
  nina: "Nina Okafor",
} as const

export type OwnerKey = keyof typeof OWNERS

export const PERSPECTIVES: Perspective[] = [
  {
    id: "financial",
    name: "Financial",
    weight: 30,
    note: "Margin funds the guard we design and the markets we open next.",
    dot: "bg-amber-500",
    rail: "border-amber-500/70",
    tint: "text-amber-600 dark:text-amber-400",
    bar: "bg-amber-500",
  },
  {
    id: "customer",
    name: "Customer",
    weight: 25,
    note: "Riders and hikers come back when gear lasts and arrives when promised.",
    dot: "bg-sky-500",
    rail: "border-sky-500/70",
    tint: "text-sky-600 dark:text-sky-400",
    bar: "bg-sky-500",
  },
  {
    id: "operations",
    name: "Operations",
    weight: 25,
    note: "Fulfilment keeps the promise made on the product page.",
    dot: "bg-emerald-500",
    rail: "border-emerald-500/70",
    tint: "text-emerald-600 dark:text-emerald-400",
    bar: "bg-emerald-500",
  },
  {
    id: "people",
    name: "People",
    weight: 20,
    note: "A bench that can open two markets without burning out.",
    dot: "bg-violet-500",
    rail: "border-violet-500/70",
    tint: "text-violet-600 dark:text-violet-400",
    bar: "bg-violet-500",
  },
]

export const OBJECTIVES: Objective[] = [
  { id: "grow-revenue", perspective: "financial", name: "Grow Direct Revenue", weight: 55 },
  { id: "protect-margin", perspective: "financial", name: "Protect Gross Margin", weight: 45 },
  { id: "earn-loyal", perspective: "customer", name: "Earn Loyal Customers", weight: 60 },
  { id: "deliver-respond", perspective: "customer", name: "Deliver and Respond", weight: 40 },
  { id: "keep-stock", perspective: "operations", name: "Keep Stock Available", weight: 100 },
  { id: "build-bench", perspective: "people", name: "Build the Bench", weight: 100 },
]

export const KPIS: Kpi[] = [
  {
    id: "direct-revenue", objective: "grow-revenue", name: "Direct Revenue",
    owner: "sana", weight: 40, baseline: 3.1,
    value: 4.0, target: 4.2, unit: "USD_M",
    direction: "up", lagging: { flag: "us", market: "US", pct: 73 },
  },
  {
    id: "repeat-share", objective: "grow-revenue", name: "Repeat Order Share",
    owner: "priya", weight: 35, baseline: 31.0,
    value: 35.5, target: 38.0, unit: "Percent",
    direction: "up", lagging: { flag: "fr", market: "FR", pct: 64 },
  },
  {
    id: "aov", objective: "grow-revenue", name: "Average Order Value",
    owner: "kenji", weight: 25, baseline: 118,
    value: 130.74, target: 132, unit: "USD",
    direction: "up", lagging: { flag: "jp", market: "JP", pct: 82 },
  },
  {
    id: "gross-margin", objective: "protect-margin", name: "Gross Margin",
    owner: "diego", weight: 50, baseline: 52.0,
    value: 54.3, target: 56.0, unit: "Percent",
    direction: "up", lagging: { flag: "jp", market: "JP", pct: 43 },
  },
  {
    id: "markdown-rate", objective: "protect-margin", name: "Markdown Rate",
    owner: "diego", weight: 50, baseline: 14.0,
    value: 12.5, target: 10.0, unit: "Percent",
    direction: "down", lagging: { flag: "ca", market: "CA", pct: 22 },
  },
  {
    id: "nps", objective: "earn-loyal", name: "Net Promoter Score",
    owner: "priya", weight: 60, baseline: 41,
    value: 49.4, target: 52, unit: "Score",
    direction: "up", lagging: { flag: "gb", market: "UK", pct: 66 },
  },
  {
    id: "retention", objective: "earn-loyal", name: "12 Month Retention",
    owner: "sofia", weight: 40, baseline: 38.0,
    value: 41.4, target: 45.0, unit: "Percent",
    direction: "up", lagging: { flag: "us", market: "US", pct: 49 },
  },
  {
    id: "on-time", objective: "deliver-respond", name: "On Time Delivery",
    owner: "omar", weight: 50, baseline: 91.0,
    value: 94.4, target: 96.0, unit: "Percent",
    direction: "up", lagging: { flag: "fr", market: "FR", pct: 58 },
  },
  {
    id: "days-to-deliver", objective: "deliver-respond", name: "Days to Deliver",
    owner: "omar", weight: 50, baseline: 4.6,
    value: 3.7, target: 3.5, unit: "Days",
    direction: "down", lagging: { flag: "de", market: "DE", pct: 82 },
  },
  {
    id: "in-stock", objective: "keep-stock", name: "In Stock Rate",
    owner: "lucas", weight: 45, baseline: 92.0,
    value: 95.6, target: 97.0, unit: "Percent",
    direction: "up", lagging: { flag: "no", market: "NO", pct: 53 },
  },
  {
    id: "inventory-turns", objective: "keep-stock", name: "Inventory Turns",
    owner: "lucas", weight: 30, baseline: 4.8,
    value: 5.5, target: 6.0, unit: "X",
    direction: "up", lagging: { flag: "gb", market: "UK", pct: 62 },
  },
  {
    id: "stockout-days", objective: "keep-stock", name: "Stockout Days",
    owner: "elijah", weight: 25, baseline: 5.2,
    value: 3.4, target: 2.5, unit: "Days",
    direction: "down", lagging: { flag: "au", market: "AU", pct: 40 },
  },
  {
    id: "internal-fill", objective: "build-bench", name: "Internal Fill Rate",
    owner: "nina", weight: 40, baseline: 38.0,
    value: 44.8, target: 50.0, unit: "Percent",
    direction: "up", lagging: { flag: "nl", market: "NL", pct: 57 },
  },
  {
    id: "regretted-attrition", objective: "build-bench", name: "Regretted Attrition",
    owner: "hana", weight: 35, baseline: 9.0,
    value: 7.1, target: 6.0, unit: "Percent",
    direction: "down", lagging: { flag: "ca", market: "CA", pct: 47 },
  },
  {
    id: "engagement", objective: "build-bench", name: "Engagement Score",
    owner: "nina", weight: 25, baseline: 6.9,
    value: 7.8, target: 8.2, unit: "Score",
    direction: "up", lagging: { flag: "de", market: "DE", pct: 61 },
  },
]

export const STATUS_THRESHOLDS = { onTrack: 70, watch: 45 }

export function kpiProgress(kpi: Kpi) {
  const span = kpi.target - kpi.baseline
  if (span === 0) return 0
  const raw = ((kpi.value - kpi.baseline) / span) * 100
  return Math.max(0, Math.min(140, raw))
}

export function weightedScore(kpis: Kpi[]) {
  const total = kpis.reduce((sum, kpi) => sum + kpi.weight, 0)
  if (total === 0) return 0
  return (
    kpis.reduce((sum, kpi) => sum + kpiProgress(kpi) * kpi.weight, 0) / total
  )
}

export function objectiveScore(objective: Objective, kpis: Kpi[]) {
  return weightedScore(kpis.filter((kpi) => kpi.objective === objective.id))
}

export function perspectiveScore(perspectiveId: PerspectiveId) {
  const objectives = OBJECTIVES.filter(
    (objective) => objective.perspective === perspectiveId,
  )
  const total = objectives.reduce((sum, objective) => sum + objective.weight, 0)
  if (total === 0) return 0
  return (
    objectives.reduce(
      (sum, objective) =>
        sum + objectiveScore(objective, KPIS) * objective.weight,
      0,
    ) / total
  )
}

export function companyScore(kpis: Kpi[] = KPIS) {
  const total = PERSPECTIVES.reduce(
    (sum, perspective) => sum + perspective.weight,
    0,
  )
  if (total === 0) return 0
  const scored = PERSPECTIVES.reduce((sum, perspective) => {
    const objectives = OBJECTIVES.filter(
      (objective) => objective.perspective === perspective.id,
    )
    const objectiveWeight = objectives.reduce(
      (acc, objective) => acc + objective.weight,
      0,
    )
    const score =
      objectiveWeight === 0
        ? 0
        : objectives.reduce((acc, objective) => {
            const objectiveKpis = kpis.filter(
              (kpi) => kpi.objective === objective.id,
            )
            return (
              acc +
              (objectiveKpis.length
                ? objectiveScore(objective, kpis)
                : 0) *
                objective.weight
            )
          }, 0) / objectiveWeight
    return sum + score * perspective.weight
  }, 0)
  return scored / total
}

export function toGo(kpi: Kpi) {
  const remaining =
    kpi.direction === "up" ? kpi.target - kpi.value : kpi.value - kpi.target
  return Math.max(0, remaining)
}

export function delta(kpi: Kpi) {
  return kpi.value - kpi.baseline
}

export function improvement(kpi: Kpi) {
  const change = delta(kpi)
  return kpi.direction === "up" ? change >= 0 : change <= 0
}

export type ProgressStatus = "on" | "watch" | "off"

export type ScoreRow =
  | {
      kind: "perspective"
      id: string
      perspective: Perspective
      score: number
      kpiCount: number
      objectiveCount: number
      offCount: number
    }
  | {
      kind: "objective"
      id: string
      objective: Objective
      perspective: Perspective
      score: number
      kpiCount: number
    }
  | {
      kind: "kpi"
      id: string
      kpi: Kpi
      perspective: Perspective
      objective: Objective
      progress: number
    }

export function progressStatus(progress: number): ProgressStatus {
  if (progress >= STATUS_THRESHOLDS.onTrack) return "on"
  if (progress >= STATUS_THRESHOLDS.watch) return "watch"
  return "off"
}

export function statusCounts(kpis: Kpi[]) {
  return kpis.reduce(
    (counts, kpi) => {
      const status = progressStatus(kpiProgress(kpi))
      counts[status] += 1
      return counts
    },
    { on: 0, watch: 0, off: 0 },
  )
}

export function mistakeCount(perspectiveId: PerspectiveId, kpis: Kpi[]) {
  const objectiveIds = OBJECTIVES.filter(
    (objective) => objective.perspective === perspectiveId,
  ).map((objective) => objective.id)
  return kpis.filter(
    (kpi) =>
      objectiveIds.includes(kpi.objective) &&
      progressStatus(kpiProgress(kpi)) === "off",
  ).length
}

export function formatValue(value: number, unit: Unit) {
  switch (unit) {
    case "USD_M":
      return `$${value.toFixed(2)}M`
    case "USD":
      return `$${Math.round(value).toLocaleString("en-US")}`
    case "Percent":
      return `${value.toFixed(1)}%`
    case "Days":
      return `${value.toFixed(1)}d`
    case "X":
      return `${value.toFixed(1)}×`
    case "Score":
      return value.toFixed(2)
  }
}

export function formatDelta(value: number, unit: Unit) {
  const sign = value > 0 ? "+" : value < 0 ? "−" : ""
  const body =
    unit === "USD_M"
      ? `$${Math.abs(value).toFixed(2)}M`
      : unit === "USD"
        ? `$${Math.round(Math.abs(value)).toLocaleString("en-US")}`
        : unit === "Percent"
          ? `${Math.abs(value).toFixed(1)}%`
          : unit === "Days"
            ? `${Math.abs(value).toFixed(1)}d`
            : unit === "X"
              ? `${Math.abs(value).toFixed(1)}×`
              : Math.abs(value).toFixed(2)
  return `${sign}${body}`
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}
