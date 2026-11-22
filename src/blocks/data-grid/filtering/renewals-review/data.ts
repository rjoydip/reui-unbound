export type Brand = "stripe" | "supabase" | "openai" | "mintlify" | "anthropic" | "convex"
export type Risk = "Critical" | "High" | "Medium" | "Low"
export type Health = "At risk" | "Watchlist" | "Healthy"

export interface RenewalRow {
  id: string
  brand: Brand
  account: string
  owner: string
  segment: string
  due: string
  dueTone: "danger" | "warning" | "normal"
  date: string
  arr: number
  upside: number
  health: number
  healthLabel: Health
  stage: string
  risk: Risk
}

export const RENEWALS: RenewalRow[] = [
  { id: "r-1", brand: "stripe", account: "Stripe", owner: "Maya Patel", segment: "Enterprise", due: "Due in 7d", dueTone: "danger", date: "May 12, 2026", arr: 420000, upside: 95000, health: 46, healthLabel: "At risk", stage: "Legal review", risk: "Critical" },
  { id: "r-2", brand: "supabase", account: "Supabase", owner: "Nina Santos", segment: "Enterprise", due: "Due in 12d", dueTone: "warning", date: "May 17, 2026", arr: 365000, upside: 120000, health: 58, healthLabel: "Watchlist", stage: "Commercial review", risk: "High" },
  { id: "r-3", brand: "stripe", account: "Stripe", owner: "Jonah Lee", segment: "Scale", due: "Due in 21d", dueTone: "warning", date: "May 25, 2026", arr: 420000, upside: 95000, health: 42, healthLabel: "At risk", stage: "Legal review", risk: "Critical" },
  { id: "r-4", brand: "openai", account: "OpenAI", owner: "Jonah Lee", segment: "Scale", due: "Due in 24d", dueTone: "warning", date: "May 29, 2026", arr: 182000, upside: 42000, health: 63, healthLabel: "Watchlist", stage: "Commercial review", risk: "High" },
  { id: "r-5", brand: "supabase", account: "Supabase", owner: "Priya Menon", segment: "Mid-market", due: "Due in 29d", dueTone: "warning", date: "Jun 2, 2026", arr: 376000, upside: 120000, health: 58, healthLabel: "Watchlist", stage: "Commercial review", risk: "High" },
  { id: "r-6", brand: "mintlify", account: "Mintlify", owner: "Omar Haddad", segment: "Scale", due: "Due in 30d", dueTone: "warning", date: "Jun 4, 2026", arr: 148000, upside: 86000, health: 74, healthLabel: "Watchlist", stage: "Preparing", risk: "Medium" },
  { id: "r-7", brand: "anthropic", account: "Anthropic", owner: "Priya Menon", segment: "Enterprise", due: "37d out", dueTone: "normal", date: "Jun 11, 2026", arr: 515000, upside: 0, health: 54, healthLabel: "At risk", stage: "Commercial review", risk: "High" },
  { id: "r-8", brand: "openai", account: "OpenAI", owner: "Priya Menon", segment: "Enterprise", due: "44d out", dueTone: "normal", date: "Jun 17, 2026", arr: 193000, upside: 42000, health: 67, healthLabel: "Watchlist", stage: "Preparing", risk: "Medium" },
  { id: "r-9", brand: "mintlify", account: "Mintlify", owner: "Nina Santos", segment: "Scale", due: "44d out", dueTone: "normal", date: "Jun 17, 2026", arr: 161000, upside: 98000, health: 82, healthLabel: "Healthy", stage: "Preparing", risk: "Low" },
  { id: "r-10", brand: "convex", account: "Convex", owner: "Maya Patel", segment: "Mid-market", due: "44d out", dueTone: "normal", date: "Jun 18, 2026", arr: 92000, upside: 18000, health: 71, healthLabel: "Watchlist", stage: "Preparing", risk: "Medium" },
]

export const FILTER_ATTRIBUTES = [
  "Account",
  "Segment",
  "Stage",
  "Risk",
  "Renewal window",
  "Owner",
]

export const RISK_VARIANT: Record<Risk, "destructive-light" | "warning-light" | "primary-light" | "secondary"> = {
  Critical: "destructive-light",
  High: "warning-light",
  Medium: "primary-light",
  Low: "secondary",
}

export const STAGE_DOT: Record<string, string> = {
  "Legal review": "bg-warning",
  "Commercial review": "bg-info",
  Preparing: "bg-muted-foreground/50",
}

export const HEALTH_TONE: Record<Health, string> = {
  "At risk": "bg-destructive",
  Watchlist: "bg-warning",
  Healthy: "bg-success",
}

export const BRAND_COLOR: Record<Brand, string> = {
  stripe: "#635BFF",
  supabase: "#3ECF8E",
  openai: "#111111",
  mintlify: "#111111",
  anthropic: "#191919",
  convex: "#EE342F",
}
