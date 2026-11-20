export type TreasuryTone = "positive" | "negative" | "warning" | "neutral"

export interface TreasuryRow {
  id: string
  parentId: string | null
  label: string
  percent: string
  tone: TreasuryTone
  values: number[]
  deltas: number[]
  deltaDirs: ("up" | "down" | "flat")[]
}

export const MONTHS = ["Apr 2026", "May 2026", "Jun 2026", "Jul 2026", "Aug 2026"]

export const TREASURY_ROWS: TreasuryRow[] = [
  {
    id: "cash", parentId: null, label: "Cash", percent: "85%", tone: "positive",
    values: [-5000, -15000, -23000, -30000, 57000],
    deltas: [2, 8, 16, 33, 30],
    deltaDirs: ["up", "up", "up", "up", "up"],
  },
  {
    id: "cash-1", parentId: "cash", label: "Opening Cash Balance Carryover", percent: "-16%", tone: "neutral",
    values: [-5000, -5000, -16000, -23000, -10000],
    deltas: [2, 2, 8, 16, 14],
    deltaDirs: ["up", "up", "up", "up", "up"],
  },
  {
    id: "cash-2", parentId: "cash", label: "Operating Cash Movement Impact", percent: "+56%", tone: "neutral",
    values: [0, -10000, -7000, -23000, 19000],
    deltas: [0, 19, 13, 33, 56],
    deltaDirs: ["flat", "down", "down", "down", "up"],
  },
  {
    id: "cash-3", parentId: "cash", label: "Capital Inflow Event Timing", percent: "+89%", tone: "warning",
    values: [0, 0, 0, 16000, 48000],
    deltas: [0, 0, 0, 89, 32],
    deltaDirs: ["flat", "flat", "flat", "up", "up"],
  },
  {
    id: "burn", parentId: null, label: "Burn", percent: "77%", tone: "warning",
    values: [0, -10000, -7000, -23000, 19000],
    deltas: [0, 19, 13, 33, 56],
    deltaDirs: ["flat", "down", "down", "down", "up"],
  },
  {
    id: "burn-1", parentId: "burn", label: "Customer Cash Collection Pace", percent: "-18%", tone: "neutral",
    values: [-3000, -14000, -3000, -5000, 8000],
    deltas: [4, 18, 4, 5, 7],
    deltaDirs: ["down", "down", "down", "down", "up"],
  },
  {
    id: "burn-2", parentId: "burn", label: "Operating Cash Outflow Load", percent: "-11%", tone: "warning",
    values: [3000, 4000, -4000, -18000, 11000],
    deltas: [2, 3, 3, 11, 8],
    deltaDirs: ["up", "up", "down", "down", "up"],
  },
  {
    id: "income", parentId: null, label: "Income", percent: "88%", tone: "positive",
    values: [-3000, -14000, -3000, -5000, 8000],
    deltas: [4, 18, 4, 5, 7],
    deltaDirs: ["down", "down", "down", "down", "up"],
  },
  {
    id: "income-1", parentId: "income", label: "Recurring Subscription Revenue Base", percent: "+10%", tone: "neutral",
    values: [-2000, -3000, 2000, 0, 7000],
    deltas: [4, 6, 4, 0, 10],
    deltaDirs: ["down", "down", "up", "flat", "up"],
  },
  {
    id: "income-2", parentId: "income", label: "Implementation Services Revenue Stream", percent: "-23%", tone: "warning",
    values: [-1000, -3000, -2000, 0, 2000],
    deltas: [7, 23, 14, 0, 11],
    deltaDirs: ["down", "down", "down", "flat", "up"],
  },
  {
    id: "income-3", parentId: "income", label: "Expansion Deal Collections Timing", percent: "-50%", tone: "warning",
    values: [0, -8000, -3000, -5000, -1000],
    deltas: [0, 50, 16, 23, 5],
    deltaDirs: ["flat", "down", "down", "down", "down"],
  },
  {
    id: "expenses", parentId: null, label: "Expenses", percent: "88%", tone: "positive",
    values: [3000, 4000, -4000, -18000, 11000],
    deltas: [2, 3, 3, 11, 8],
    deltaDirs: ["up", "up", "down", "down", "up"],
  },
  {
    id: "expenses-1", parentId: "expenses", label: "Core Team Payroll Load", percent: "-5%", tone: "neutral",
    values: [1000, -1000, -3000, -4000, -4000],
    deltas: [1, 1, 4, 5, 5],
    deltaDirs: ["up", "down", "down", "down", "down"],
  },
  {
    id: "expenses-2", parentId: "expenses", label: "Cloud Infrastructure Spend Load", percent: "-13%", tone: "warning",
    values: [1000, 1000, -1000, -4000, 2000],
    deltas: [5, 5, 5, 13, 10],
    deltaDirs: ["up", "up", "down", "down", "up"],
  },
  {
    id: "expenses-3", parentId: "expenses", label: "Sales Program Spend Mix", percent: "+38%", tone: "neutral",
    values: [2000, 2000, 0, -6000, 11000],
    deltas: [9, 8, 0, 17, 38],
    deltaDirs: ["up", "up", "flat", "down", "up"],
  },
  {
    id: "expenses-4", parentId: "expenses", label: "G&A Compliance Spend Load", percent: "-20%", tone: "warning",
    values: [-1000, 2000, 0, -4000, 2000],
    deltas: [9, 15, 0, 20, 17],
    deltaDirs: ["down", "up", "flat", "down", "up"],
  },
  {
    id: "funding", parentId: null, label: "Funding", percent: "62%", tone: "warning",
    values: [0, 0, 0, 16000, 48000],
    deltas: [0, 0, 0, 89, 32],
    deltaDirs: ["flat", "flat", "flat", "up", "up"],
  },
]

export function money(value: number) {
  if (value === 0) return "$0"
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
  return value < 0 ? `(${formatted.slice(1)})` : formatted
}

export const LINE_FILTERS = ["All Lines", "Liquidity", "Operating", "Revenue", "Funding"]
