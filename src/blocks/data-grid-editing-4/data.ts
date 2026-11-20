export type Audience = "Individuals" | "Teams" | "Companies"

export interface PlanRow {
  id: string
  name: string
  code: string
  audience: Audience
  price: number
  seats: number
  trial: string
  visibility: "Public" | "Private"
  featured: boolean
}

export const PLANS: PlanRow[] = [
  { id: "pl-1", name: "Free", code: "plan_free", audience: "Individuals", price: 0, seats: 1, trial: "No trial", visibility: "Public", featured: false },
  { id: "pl-2", name: "Starter", code: "plan_starter", audience: "Individuals", price: 12, seats: 3, trial: "14-day", visibility: "Public", featured: false },
  { id: "pl-3", name: "Pro", code: "plan_pro", audience: "Teams", price: 29, seats: 10, trial: "14-day", visibility: "Public", featured: true },
  { id: "pl-4", name: "Business", code: "plan_business", audience: "Teams", price: 79, seats: 25, trial: "30-day", visibility: "Public", featured: false },
  { id: "pl-5", name: "Enterprise", code: "plan_enterprise", audience: "Companies", price: 299, seats: 100, trial: "30-day", visibility: "Private", featured: false },
]

export const AUDIENCE_DOT: Record<Audience, string> = {
  Individuals: "bg-info",
  Teams: "bg-purple-500",
  Companies: "bg-warning",
}
