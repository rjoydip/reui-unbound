export interface Model {
  id: string
  name: string
  category: string
  supplier: string
}

export type MetricKind =
  | "share"
  | "actual"
  | "supplier"
  | "target"
  | "tolerance"
  | "percent"
  | "min"
  | "cost"
  | "value"
  | "order"

export interface Metric {
  id: string
  label: string
  hint: string
  kind: MetricKind
  editable?: boolean
  values: Record<string, number | string>
}

/** Fixed demo mix - nine categories, one sheet row per metric. */
export const MODELS: Model[] = [
  { id: "drinks", name: "Drinks", category: "Pantry", supplier: "DST" },
  { id: "dairy", name: "Dairy", category: "Fresh", supplier: "DIR" },
  { id: "bakery", name: "Bakery", category: "Fresh", supplier: "DIR" },
  { id: "produce", name: "Produce", category: "Fresh", supplier: "WHL" },
  { id: "frozen", name: "Frozen", category: "Fresh", supplier: "DST" },
  { id: "snacks", name: "Snacks", category: "Pantry", supplier: "DST" },
  { id: "home", name: "Home", category: "Non-food", supplier: "WHL" },
  { id: "care", name: "Care", category: "Non-food", supplier: "DST" },
]

export const METRICS: Metric[] = [
  {
    id: "share",
    label: "Share %",
    hint: "Target share of the autumn plan",
    kind: "share",
    values: {
      drinks: 14,
      dairy: 12,
      bakery: 6,
      produce: 10,
      frozen: 10,
      snacks: 16,
      home: 18,
      care: 14,
    },
  },
  {
    id: "actual",
    label: "Actual %",
    hint: "Current share against target",
    kind: "actual",
    values: {
      drinks: 16.6,
      dairy: 12.6,
      bakery: 5.8,
      produce: 10.4,
      frozen: 9.2,
      snacks: 14.7,
      home: 15.3,
      care: 13.6,
    },
  },
  {
    id: "supplier",
    label: "Supplier",
    hint: "Primary delivery route",
    kind: "supplier",
    values: {
      drinks: "DST",
      dairy: "DIR",
      bakery: "DIR",
      produce: "WHL",
      frozen: "DST",
      snacks: "DST",
      home: "WHL",
      care: "DST",
    },
  },
  {
    id: "target",
    label: "Target %",
    hint: "Category target used by the order engine",
    kind: "target",
    values: {
      drinks: 14,
      dairy: 12,
      bakery: 6,
      produce: 10,
      frozen: 10,
      snacks: 16,
      home: 18,
      care: 14,
    },
  },
  {
    id: "tolerance",
    label: "Tolerance pp",
    hint: "Allowed drift before a reorder is suggested",
    kind: "tolerance",
    values: {
      drinks: 2,
      dairy: 1,
      bakery: 1,
      produce: 1,
      frozen: 2,
      snacks: 2,
      home: 2,
      care: 1,
    },
  },
  {
    id: "sell-through",
    label: "Sell-through %",
    hint: "Units sold against units delivered",
    kind: "percent",
    values: {
      drinks: 78.2,
      dairy: 74.5,
      bakery: 68.1,
      produce: 81.3,
      frozen: 72.8,
      snacks: 69.4,
      home: 64.2,
      care: 71.6,
    },
  },
  {
    id: "waste",
    label: "Waste %",
    hint: "Shrink as a share of deliveries",
    kind: "percent",
    values: {
      drinks: 2.4,
      dairy: 3.1,
      bakery: 4.8,
      produce: 5.2,
      frozen: 2.9,
      snacks: 1.8,
      home: 2.2,
      care: 3.6,
    },
  },
  {
    id: "promo",
    label: "Promo %",
    hint: "Volume sold on promotion",
    kind: "percent",
    values: {
      drinks: 18,
      dairy: 24,
      bakery: 12,
      produce: 8,
      frozen: 15,
      snacks: 31,
      home: 22,
      care: 19,
    },
  },
  {
    id: "min",
    label: "Min order sk",
    hint: "Smallest order the supplier will ship",
    kind: "min",
    values: {
      drinks: 1,
      dairy: 1,
      bakery: 1,
      produce: 1,
      frozen: 2,
      snacks: 1,
      home: 1,
      care: 1,
    },
  },
  {
    id: "cost",
    label: "Case cost $",
    hint: "Landed cost per case",
    kind: "cost",
    editable: true,
    values: {
      drinks: 14.4,
      dairy: 21.6,
      bakery: 18.75,
      produce: 26.5,
      frozen: 32.8,
      snacks: 19.9,
      home: 27.4,
      care: 36.2,
    },
  },
  {
    id: "value",
    label: "Stock value sk",
    hint: "On-hand stock valued in cases",
    kind: "value",
    values: {
      drinks: 42,
      dairy: 31,
      bakery: 14,
      produce: 26,
      frozen: 23,
      snacks: 37,
      home: 38,
      care: 34,
    },
  },
  {
    id: "order",
    label: "Suggested order sk",
    hint: "Negative means send stock back",
    kind: "order",
    editable: true,
    values: {
      drinks: -7,
      dairy: 3,
      bakery: -2,
      produce: 0,
      frozen: 4,
      snacks: 0,
      home: 7,
      care: 0,
    },
  },
]

export function metricTotal(metric: Metric, models: Model[] = MODELS) {
  if (metric.kind === "supplier") return null
  const values = models.map((model) => Number(metric.values[model.id] ?? 0))

  if (
    metric.kind === "tolerance" ||
    metric.kind === "cost" ||
    metric.kind === "percent"
  ) {
    return values.reduce((sum, value) => sum + value, 0) / values.length
  }

  return values.reduce((sum, value) => sum + value, 0)
}

export function deltaFor(metric: Metric, modelId: string) {
  const actual = Number(metric.values[modelId] ?? 0)
  const share = Number(
    METRICS.find((entry) => entry.id === "share")?.values[modelId] ?? 0,
  )
  return Number((actual - share).toFixed(1))
}

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
})

const moneyWhole = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function formatMoney(value: number, precise = true) {
  return precise ? money.format(value) : moneyWhole.format(value)
}

export function formatMetric(metric: Metric, value: number) {
  switch (metric.kind) {
    case "share":
    case "actual":
    case "target":
      return value.toFixed(1)
    case "tolerance":
    case "percent":
      return value.toFixed(1)
    case "cost":
      return formatMoney(value)
    default:
      return Math.round(value).toString()
  }
}

export function orderBudget(metrics: Metric[]) {
  const orders = metrics.find((metric) => metric.id === "order")
  const costs = metrics.find((metric) => metric.id === "cost")
  if (!orders || !costs) return 0

  return MODELS.reduce((sum, model) => {
    const order = Number(orders.values[model.id] ?? 0)
    const cost = Number(costs.values[model.id] ?? 0)
    return sum + Math.max(order, 0) * cost * 6
  }, 0)
}
