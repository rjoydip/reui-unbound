export type Period = "fy" | "h2" | "q4"

export type ViewMode = "actual" | "budget" | "prior"

export type LineKind = "group" | "leaf" | "subtotal"

export type GroupId = "revenue" | "cogs" | "fulfillment" | "marketing" | "ga"

export type Confidence = "high" | "medium" | "low"

export interface MonthMeta {
  label: string
  quarter: 1 | 2 | 3 | 4
  forecast: boolean
}

export interface MonthValues {
  actual: number
  budget: number
  prior: number
  forecast: number
}

export interface PnlRow {
  id: string
  label: string
  kind: LineKind
  group?: GroupId
  cost: boolean
  owner?: string
  confidence?: Confidence
  note?: string
  /** Twelve months, oldest first. Values are USD thousands. */
  values: MonthValues[]
}

export const MONTHS: MonthMeta[] = [
  { label: "Jan", quarter: 1, forecast: false },
  { label: "Feb", quarter: 1, forecast: false },
  { label: "Mar", quarter: 1, forecast: false },
  { label: "Apr", quarter: 2, forecast: false },
  { label: "May", quarter: 2, forecast: false },
  { label: "Jun", quarter: 2, forecast: false },
  { label: "Jul", quarter: 3, forecast: false },
  { label: "Aug", quarter: 3, forecast: false },
  { label: "Sep", quarter: 3, forecast: false },
  { label: "Oct", quarter: 4, forecast: true },
  { label: "Nov", quarter: 4, forecast: true },
  { label: "Dec", quarter: 4, forecast: true },
]

export const PERIODS: Array<{ value: Period; label: string; months: number[] }> = [
  { value: "fy", label: "FY 2026", months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { value: "h2", label: "H2 2026", months: [6, 7, 8, 9, 10, 11] },
  { value: "q4", label: "Q4 2026", months: [9, 10, 11] },
]

const SEASON = [0.92, 0.9, 1.0, 0.97, 1.03, 1.06, 0.98, 0.96, 1.02, 1.08, 1.18, 1.32]

interface LeafSpec {
  id: string
  label: string
  group: GroupId
  base: number
  seed: number
  confidence: Confidence
}

const LEAF_SPECS: LeafSpec[] = [
  { id: "product-sales", label: "Product Sales", group: "revenue", base: 2050, seed: 1, confidence: "high" },
  { id: "services", label: "Services", group: "revenue", base: 240, seed: 2, confidence: "medium" },
  { id: "promotions", label: "Promotions & Markdowns", group: "revenue", base: -290, seed: 3, confidence: "low" },
  { id: "product-cost", label: "Product Cost", group: "cogs", base: 700, seed: 4, confidence: "high" },
  { id: "inbound-freight", label: "Inbound Freight", group: "cogs", base: 110, seed: 5, confidence: "medium" },
  { id: "duties", label: "Duties & Tariffs", group: "cogs", base: 85, seed: 6, confidence: "low" },
  { id: "warehouse-labor", label: "Warehouse Labor", group: "fulfillment", base: 130, seed: 7, confidence: "high" },
  { id: "packaging", label: "Packaging", group: "fulfillment", base: 32, seed: 8, confidence: "high" },
  { id: "outbound-shipping", label: "Outbound Shipping", group: "fulfillment", base: 140, seed: 9, confidence: "low" },
  { id: "paid-media", label: "Paid Media", group: "marketing", base: 160, seed: 10, confidence: "medium" },
  { id: "agency-fees", label: "Agency Fees", group: "marketing", base: 55, seed: 11, confidence: "high" },
  { id: "salaries", label: "Salaries", group: "ga", base: 400, seed: 12, confidence: "high" },
  { id: "software", label: "Software & Tools", group: "ga", base: 80, seed: 13, confidence: "high" },
]

const GROUP_META: Record<
  GroupId,
  { label: string; owner: string; confidence: Confidence }
> = {
  revenue: { label: "Net Revenue", owner: "Sana Qureshi", confidence: "high" },
  cogs: { label: "Cost of Goods", owner: "Amara Okafor", confidence: "medium" },
  fulfillment: { label: "Fulfillment", owner: "Ruth Adeyemi", confidence: "low" },
  marketing: { label: "Marketing", owner: "Tom Becker", confidence: "medium" },
  ga: { label: "General & Admin", owner: "Elena Rossi", confidence: "high" },
}

const GROUP_ORDER: GroupId[] = ["revenue", "cogs", "fulfillment", "marketing", "ga"]

function generate(spec: LeafSpec, index: number): MonthValues {
  const revenue = spec.group === "revenue"
  const season = revenue ? SEASON[index] : Math.pow(SEASON[index], 0.35)
  const priorSeason = revenue
    ? SEASON[Math.max(0, index - 1)]
    : Math.pow(SEASON[Math.max(0, index - 1)], 0.35)
  const wiggle = 1 + Math.sin(spec.seed * 1.7 + index * 1.15) * 0.035
  const growth = 1 + (index / 11) * 0.035
  const actual = spec.base * season * wiggle * growth
  const budget = spec.base * season * (1 + Math.cos(spec.seed + index) * 0.025)
  const prior = spec.base * priorSeason * 0.9
  const forecast =
    spec.base * season * (1 + Math.cos(spec.seed * 0.7 + index) * 0.03) * 1.01

  return {
    actual: Math.round(actual),
    budget: Math.round(budget),
    prior: Math.round(prior),
    forecast: Math.round(forecast),
  }
}

function emptyValues(): MonthValues[] {
  return MONTHS.map(() => ({ actual: 0, budget: 0, prior: 0, forecast: 0 }))
}

function sumRows(rows: PnlRow[]): MonthValues[] {
  const values = emptyValues()
  for (const row of rows) {
    row.values.forEach((month, index) => {
      values[index].actual += month.actual
      values[index].budget += month.budget
      values[index].prior += month.prior
      values[index].forecast += month.forecast
    })
  }
  return values
}

function subtractRows(left: PnlRow, rightRows: PnlRow[]): MonthValues[] {
  const right = sumRows(rightRows)
  return left.values.map((month, index) => ({
    actual: month.actual - right[index].actual,
    budget: month.budget - right[index].budget,
    prior: month.prior - right[index].prior,
    forecast: month.forecast - right[index].forecast,
  }))
}

export type ForecastOverrides = Record<string, Record<number, number>>

export function buildRows(overrides: ForecastOverrides = {}): PnlRow[] {
  const leaves: PnlRow[] = LEAF_SPECS.map((spec) => ({
    id: spec.id,
    label: spec.label,
    kind: "leaf",
    group: spec.group,
    cost: spec.base > 0 && spec.group !== "revenue",
    confidence: spec.confidence,
    values: MONTHS.map((_, index) => {
      const values = generate(spec, index)
      const override = overrides[spec.id]?.[index]
      return override === undefined ? values : { ...values, forecast: override }
    }),
  }))

  const groups: PnlRow[] = GROUP_ORDER.map((group) => {
    const children = leaves.filter((leaf) => leaf.group === group)
    return {
      id: group,
      label: GROUP_META[group].label,
      kind: "group" as const,
      group,
      cost: group !== "revenue",
      owner: GROUP_META[group].owner,
      confidence: GROUP_META[group].confidence,
      note: `${children.length} lines`,
      values: sumRows(children),
    }
  })

  const revenue = groups.find((row) => row.id === "revenue")!
  const cogs = groups.find((row) => row.id === "cogs")!
  const fulfillment = groups.find((row) => row.id === "fulfillment")!
  const marketing = groups.find((row) => row.id === "marketing")!
  const ga = groups.find((row) => row.id === "ga")!

  const grossMargin: PnlRow = {
    id: "gross-margin",
    label: "Gross Margin",
    kind: "subtotal",
    cost: false,
    note: "revenue less COGS",
    values: subtractRows(revenue, [cogs]),
  }

  const operatingProfit: PnlRow = {
    id: "operating-profit",
    label: "Operating Profit",
    kind: "subtotal",
    cost: false,
    note: "after operating expenses",
    values: subtractRows(grossMargin, [fulfillment, marketing, ga]),
  }

  const rows: PnlRow[] = []
  for (const group of groups) {
    rows.push(group)
    rows.push(...leaves.filter((leaf) => leaf.group === group.id))
    if (group.id === "cogs") rows.push(grossMargin)
  }
  rows.push(operatingProfit)
  return rows
}

export const PNL_ROWS = buildRows()

export function monthOf(index: number) {
  return MONTHS[index]
}

export function primaryValue(row: PnlRow, index: number, view: ViewMode) {
  const values = row.values[index]
  if (view === "budget") return values.budget
  if (view === "prior") return values.prior
  return MONTHS[index].forecast ? values.forecast : values.actual
}

export function budgetValue(row: PnlRow, index: number) {
  return row.values[index].budget
}

export function periodTotal(row: PnlRow, indices: number[], view: ViewMode) {
  return indices.reduce(
    (sum, index) => sum + primaryValue(row, index, view),
    0,
  )
}

export function budgetTotal(row: PnlRow, indices: number[]) {
  return indices.reduce(
    (sum, index) => sum + budgetValue(row, index),
    0,
  )
}

export function varianceOf(row: PnlRow, index: number, view: ViewMode) {
  return primaryValue(row, index, view) - budgetValue(row, index)
}

export function variancePct(row: PnlRow, index: number, view: ViewMode) {
  const budget = budgetValue(row, index)
  if (budget === 0) return 0
  return (varianceOf(row, index, view) / Math.abs(budget)) * 100
}

export function isAdverse(row: PnlRow, index: number, view: ViewMode) {
  const diff = varianceOf(row, index, view)
  const pct = variancePct(row, index, view)
  if (Math.abs(diff) <= 15 || Math.abs(pct) <= 5) return false
  return row.cost ? diff > 0 : diff < 0
}

export function isFlagged(row: PnlRow, index: number, view: ViewMode) {
  return isAdverse(row, index, view)
}

export function formatK(value: number) {
  const rounded = Math.round(value)
  if (rounded < 0) return `(${Math.abs(rounded).toLocaleString("en-US")})`
  return rounded.toLocaleString("en-US")
}

export function formatDelta(value: number) {
  const rounded = Math.round(value)
  const sign = rounded > 0 ? "+" : rounded < 0 ? "−" : ""
  const abs = Math.abs(rounded)
  const body =
    abs >= 1000 ? `$${(abs / 1000).toFixed(1)}M` : `$${abs.toLocaleString("en-US")}K`
  return `${sign}${body}`
}

export function formatPct(value: number) {
  const sign = value > 0 ? "+" : value < 0 ? "−" : ""
  return `${sign}${Math.abs(value).toFixed(1)}%`
}


export const CONFIDENCE_META: Record<
  Confidence,
  { label: string; bars: number; tone: string }
> = {
  high: { label: "High", bars: 4, tone: "bg-success" },
  medium: { label: "Medium", bars: 3, tone: "bg-warning" },
  low: { label: "Low", bars: 2, tone: "bg-destructive/70" },
}

export function isEditable(row: PnlRow, index: number) {
  return row.kind === "leaf" && MONTHS[index].forecast
}

