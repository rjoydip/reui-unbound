export type Workstream = "Discovery" | "Design" | "Build" | "Launch"
export type Decision = "cover" | "adjust" | "hold"

export interface BudgetLine {
  id: string
  name: string
  workstream: Workstream
  basis: string
  vendor: string
  budget: number
  actual: number
  forecast: number
  startMonth: number
  endMonth: number
  decision?: Decision
  decisionNote?: string
  reforecast?: boolean
}

export const MONTHS = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]

export const WORKSTREAMS: Workstream[] = ["Discovery", "Design", "Build", "Launch"]

export const DECISION_META: Record<
  Decision,
  { label: string; variant: "success-light" | "warning-light" | "outline" }
> = {
  cover: { label: "Covered", variant: "success-light" },
  adjust: { label: "Scope adjusted", variant: "warning-light" },
  hold: { label: "On hold", variant: "outline" },
}

export const BUDGET_LINES: BudgetLine[] = [
  {
    id: "b1", name: "Stakeholder interviews", workstream: "Discovery", basis: "64 h × $165", vendor: "Northline Research",
    budget: 10560, actual: 9800, forecast: 10560, startMonth: 0, endMonth: 0,
  },
  {
    id: "b2", name: "Analytics audit", workstream: "Discovery", basis: "$6,200 fixed", vendor: "Northline Research",
    budget: 6200, actual: 6200, forecast: 6200, startMonth: 0, endMonth: 1,
  },
  {
    id: "b3", name: "Discovery workshops", workstream: "Discovery", basis: "40 h × $165", vendor: "Studio Kestrel",
    budget: 6600, actual: 6100, forecast: 6600, startMonth: 1, endMonth: 1,
  },
  {
    id: "b4", name: "Wireframes", workstream: "Design", basis: "120 h × $150", vendor: "Studio Kestrel",
    budget: 18000, actual: 16800, forecast: 16800, startMonth: 1, endMonth: 2,
  },
  {
    id: "b5", name: "Design system", workstream: "Design", basis: "96 h × $150", vendor: "Studio Kestrel",
    budget: 14400, actual: 13200, forecast: 16200, startMonth: 2, endMonth: 3, reforecast: true,
  },
  {
    id: "b6", name: "Usability testing", workstream: "Design", basis: "$7,200 fixed", vendor: "Fieldnote Labs",
    budget: 7200, actual: 7200, forecast: 7200, startMonth: 3, endMonth: 4,
  },
  {
    id: "b7", name: "Brand refresh", workstream: "Design", basis: "$9,600 fixed", vendor: "Atelier Nord",
    budget: 9600, actual: 9100, forecast: 9600, startMonth: 1, endMonth: 2,
  },
  {
    id: "b8", name: "Theme build", workstream: "Build", basis: "420 h × $165", vendor: "ReUI Studio",
    budget: 69300, actual: 41250, forecast: 74580, startMonth: 1, endMonth: 4, reforecast: true,
  },
  {
    id: "b9", name: "Checkout flow", workstream: "Build", basis: "160 h × $185", vendor: "ReUI Studio",
    budget: 29600, actual: 11100, forecast: 28860, startMonth: 3, endMonth: 5,
  },
  {
    id: "b10", name: "Platform license", workstream: "Build", basis: "6 mo × $2,300", vendor: "Commerce Cloud",
    budget: 13800, actual: 6900, forecast: 18400, startMonth: 0, endMonth: 5,
  },
  {
    id: "b11", name: "Site search", workstream: "Build", basis: "6 mo × $450 + $1,500", vendor: "Algolia",
    budget: 4200, actual: 1950, forecast: 4200, startMonth: 3, endMonth: 4,
  },
  {
    id: "b12", name: "Accessibility audit", workstream: "Build", basis: "$8,000 fixed", vendor: "Access Works",
    budget: 8000, actual: 0, forecast: 8000, startMonth: 5, endMonth: 5,
  },
  {
    id: "b13", name: "Content migration", workstream: "Launch", basis: "80 h × $120", vendor: "Wordwell",
    budget: 9600, actual: 4800, forecast: 12200, startMonth: 4, endMonth: 5, reforecast: true,
  },
  {
    id: "b14", name: "Launch comms", workstream: "Launch", basis: "$5,400 fixed", vendor: "Signal & Co",
    budget: 5400, actual: 2600, forecast: 5400, startMonth: 4, endMonth: 5,
  },
  {
    id: "b15", name: "Performance monitoring", workstream: "Launch", basis: "6 mo × $600", vendor: "Speedlab",
    budget: 3600, actual: 0, forecast: 3600, startMonth: 5, endMonth: 5,
  },
]

export function variance(line: BudgetLine) {
  return line.budget - line.forecast
}

export function overBudget(line: BudgetLine) {
  return line.forecast > line.budget
}

export function spentPct(line: BudgetLine) {
  return line.budget ? (line.actual / line.budget) * 100 : 0
}

export function totals(lines: BudgetLine[]) {
  return lines.reduce(
    (total, line) => ({
      budget: total.budget + line.budget,
      actual: total.actual + line.actual,
      forecast: total.forecast + line.forecast,
    }),
    { budget: 0, actual: 0, forecast: 0 },
  )
}

/** Cumulative actual vs forecast across the six-month schedule. */
export function spendTrend(line: BudgetLine) {
  const months = line.endMonth - line.startMonth + 1
  return MONTHS.map((month, index) => {
    const progress = Math.min(
      1,
      Math.max(0, (index - line.startMonth + 1) / (months || 1)),
    )
    return {
      month,
      actual: Math.round(line.actual * progress),
      forecast: Math.round(line.forecast * progress),
    }
  })
}

const compact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function formatMoney(value: number) {
  return compact.format(value)
}

export function formatVariance(value: number) {
  return `${value > 0 ? "+" : value < 0 ? "−" : ""}${compact.format(Math.abs(value))}`
}

export function scheduleLabel(line: BudgetLine) {
  if (line.startMonth === line.endMonth) return MONTHS[line.startMonth]!
  return `${MONTHS[line.startMonth]} – ${MONTHS[line.endMonth]}`
}
