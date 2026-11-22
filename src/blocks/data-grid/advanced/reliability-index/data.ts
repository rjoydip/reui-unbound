export type SloWindow = "7d" | "30d"

export type SloStatus = "Healthy" | "At risk" | "Exhausted"

export type SloAlert = "Quiet" | "Ticket" | "Paging"

export interface Slo {
  id: string
  name: string
  team: string
  slug: string
  objective: number
  current7: number
  current30: number
  owner: { name: string; avatar: string }
  /** Error budget left (%) by week, oldest first. */
  history: number[]
}

export interface SloEvaluation {
  slo: Slo
  objective: number
  current: number
  budget: number
  burn: number
  runsOut: string
  alert: SloAlert
  status: SloStatus
}

export const WINDOW_DAYS: Record<SloWindow, number> = { "7d": 7, "30d": 30 }

export const OBJECTIVE_OPTIONS = [
  { value: "own", label: "Own objective" },
  { value: "99.99", label: "99.99%" },
  { value: "99.95", label: "99.95%" },
  { value: "99.9", label: "99.9%" },
  { value: "99.5", label: "99.5%" },
  { value: "99", label: "99%" },
]

function history(end: number, seed: number) {
  return Array.from({ length: 12 }, (_, index) => {
    const progress = index / 11
    const wobble = Math.sin((index + seed) * 1.4) * 6
    return Math.round(end + (1 - progress) * (45 + (seed % 4) * 8) + wobble)
  })
}

export const SLOS: Slo[] = [
  {
    id: "ledger-write",
    name: "Ledger write success",
    team: "Ledger",
    slug: "ledger-writes · 99.99% · 30d",
    objective: 99.99,
    current7: 99.992,
    current30: 99.982,
    owner: { name: "Priya Shah", avatar: "https://i.pravatar.cc/96?img=45" },
    history: history(-82, 1),
  },
  {
    id: "sms-availability",
    name: "SMS provider availability",
    team: "Notifications",
    slug: "notifications · 99.9% · 30d",
    objective: 99.9,
    current7: 99.905,
    current30: 99.843,
    owner: { name: "Maya Chen", avatar: "https://i.pravatar.cc/96?img=47" },
    history: history(-57, 2),
  },
  {
    id: "index-freshness",
    name: "Index freshness",
    team: "Search indexer",
    slug: "search-indexer · 99% · 30d",
    objective: 99,
    current7: 98.6,
    current30: 97.9,
    owner: { name: "Daniel Ortiz", avatar: "https://i.pravatar.cc/96?img=12" },
    history: history(-37, 3),
  },
  {
    id: "payout-batch",
    name: "Payout batch on time",
    team: "Payouts",
    slug: "payouts · 99.5% · 30d",
    objective: 99.5,
    current7: 99.42,
    current30: 99.38,
    owner: { name: "Tom Becker", avatar: "https://i.pravatar.cc/96?img=53" },
    history: history(-17, 4),
  },
  {
    id: "fraud-latency",
    name: "Fraud score latency",
    team: "Risk",
    slug: "fraud-score · 99.9% · 28d",
    objective: 99.9,
    current7: 99.86,
    current30: 99.82,
    owner: { name: "Amara Okafor", avatar: "https://i.pravatar.cc/96?img=32" },
    history: history(-9, 5),
  },
  {
    id: "ledger-freshness",
    name: "Ledger posting freshness",
    team: "Ledger",
    slug: "ledger-postings · 99.5% · 30d",
    objective: 99.5,
    current7: 99.61,
    current30: 99.55,
    owner: { name: "Priya Shah", avatar: "https://i.pravatar.cc/96?img=45" },
    history: history(8, 6),
  },
  {
    id: "payout-api",
    name: "Payout API availability",
    team: "Payouts",
    slug: "payout-api · 99.9% · 30d",
    objective: 99.9,
    current7: 99.92,
    current30: 99.905,
    owner: { name: "Tom Becker", avatar: "https://i.pravatar.cc/96?img=53" },
    history: history(17, 7),
  },
  {
    id: "charge-api",
    name: "Charge API latency",
    team: "Payments API",
    slug: "payments-api · 99% · 28d",
    objective: 99,
    current7: 99.93,
    current30: 99.902,
    owner: { name: "Maya Chen", avatar: "https://i.pravatar.cc/96?img=47" },
    history: history(21, 8),
  },
  {
    id: "webhook-delivery",
    name: "Webhook delivery success",
    team: "Webhooks",
    slug: "webhooks · 99.9% · 28d",
    objective: 99.9,
    current7: 99.94,
    current30: 99.91,
    owner: { name: "Daniel Ortiz", avatar: "https://i.pravatar.cc/96?img=12" },
    history: history(36, 9),
  },
  {
    id: "auth-refresh",
    name: "Auth token refresh",
    team: "Identity",
    slug: "identity · 99.95% · 30d",
    objective: 99.95,
    current7: 99.96,
    current30: 99.955,
    owner: { name: "Amara Okafor", avatar: "https://i.pravatar.cc/96?img=32" },
    history: history(48, 10),
  },
  {
    id: "catalog-images",
    name: "Catalog image delivery",
    team: "Storefront",
    slug: "storefront · 99.5% · 30d",
    objective: 99.5,
    current7: 99.58,
    current30: 99.52,
    owner: { name: "Tom Becker", avatar: "https://i.pravatar.cc/96?img=53" },
    history: history(54, 11),
  },
  {
    id: "address-lookup",
    name: "Checkout address lookup",
    team: "Checkout",
    slug: "checkout · 99.9% · 30d",
    objective: 99.9,
    current7: 99.95,
    current30: 99.93,
    owner: { name: "Priya Shah", avatar: "https://i.pravatar.cc/96?img=45" },
    history: history(62, 12),
  },
]

export function evaluateSlo(
  slo: Slo,
  window: SloWindow,
  objectiveOverride: number | null,
): SloEvaluation {
  const objective = objectiveOverride ?? slo.objective
  const current = window === "7d" ? slo.current7 : slo.current30
  const headroom = 100 - objective
  const rawBudget =
    headroom === 0 ? 0 : ((current - objective) / headroom) * 100
  const budget = Math.max(-999, rawBudget)
  const burn = headroom === 0 ? 0 : (100 - current) / headroom
  const days = WINDOW_DAYS[window]

  const runsOut =
    burn <= 0.05
      ? "Stable"
      : burn >= days
        ? "Imminent"
        : `${Math.max(1, Math.round(days / burn))} day${Math.round(days / burn) === 1 ? "" : "s"}`

  const alert: SloAlert = burn >= 8 ? "Paging" : burn >= 4 ? "Ticket" : "Quiet"
  const status: SloStatus =
    budget < 0 ? "Exhausted" : budget < 25 ? "At risk" : "Healthy"

  return { slo, objective, current, budget, burn, runsOut, alert, status }
}

export function statusCounts(rows: SloEvaluation[]) {
  return {
    all: rows.length,
    Healthy: rows.filter((row) => row.status === "Healthy").length,
    "At risk": rows.filter((row) => row.status === "At risk").length,
    Exhausted: rows.filter((row) => row.status === "Exhausted").length,
  }
}

export function formatBudget(value: number) {
  return `${value > 0 ? "+" : ""}${value.toFixed(1)}%`
}

export function formatObjective(value: number) {
  return `${value.toFixed(value === 99 ? 0 : 2)}%`
}

export function formatCurrent(value: number) {
  return `${value.toFixed(value < 99 ? 2 : 3)}%`
}
