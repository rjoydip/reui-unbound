export type Stage = "Committed" | "Proposal" | "Renewal" | "Evaluation" | "Discovery"

export interface Company {
  id: string
  name: string
  domain: string
  slug: string
  brand: string
  owner: string
  stage: Stage
  arr: string
  categories: string[]
  health: number
}

export const COMPANIES: Company[] = [
  { id: "co-1", name: "OpenAI", domain: "openai.com", slug: "openai", brand: "111111", owner: "Mira Stone", stage: "Committed", arr: "$1.48M", categories: ["Enterprise", "Design partner"], health: 92 },
  { id: "co-2", name: "Anthropic", domain: "anthropic.com", slug: "anthropic", brand: "191919", owner: "Nora Vale", stage: "Proposal", arr: "$960K", categories: ["Enterprise", "Regulated"], health: 84 },
  { id: "co-3", name: "Stripe", domain: "stripe.com", slug: "stripe", brand: "635BFF", owner: "Mira Stone", stage: "Renewal", arr: "$720K", categories: ["Enterprise", "Expansion"], health: 76 },
  { id: "co-4", name: "Supabase", domain: "supabase.com", slug: "supabase", brand: "3ECF8E", owner: "Alex Johnson", stage: "Evaluation", arr: "$288K", categories: ["Open source", "Expansion"], health: 81 },
  { id: "co-5", name: "Cursor", domain: "cursor.com", slug: "cursor", brand: "111111", owner: "Nora Vale", stage: "Proposal", arr: "$415K", categories: ["Design partner", "Expansion"], health: 88 },
  { id: "co-6", name: "PlanetScale", domain: "planetscale.com", slug: "planetscale", brand: "111111", owner: "Theo Park", stage: "Evaluation", arr: "$196K", categories: ["Enterprise"], health: 61 },
  { id: "co-7", name: "Neon", domain: "neon.tech", slug: "neon", brand: "00E599", owner: "Alex Johnson", stage: "Discovery", arr: "$84K", categories: ["Self-serve", "Open source"], health: 54 },
  { id: "co-8", name: "Prisma", domain: "prisma.io", slug: "prisma", brand: "2D3748", owner: "Theo Park", stage: "Renewal", arr: "$132K", categories: ["Open source"], health: 38 },
  { id: "co-9", name: "Convex", domain: "convex.dev", slug: "convex", brand: "EE342F", owner: "Alex Johnson", stage: "Discovery", arr: "$36K", categories: ["Self-serve"], health: 67 },
  { id: "co-10", name: "Resend", domain: "resend.com", slug: "resend", brand: "111111", owner: "Mira Stone", stage: "Evaluation", arr: "$61K", categories: ["Expansion", "Self-serve"], health: 79 },
  { id: "co-11", name: "Vercel", domain: "vercel.com", slug: "vercel", brand: "111111", owner: "Nora Vale", stage: "Committed", arr: "$540K", categories: ["Enterprise", "Expansion"], health: 90 },
  { id: "co-12", name: "Linear", domain: "linear.app", slug: "linear", brand: "5E6AD2", owner: "Theo Park", stage: "Renewal", arr: "$210K", categories: ["Design partner"], health: 72 },
  { id: "co-13", name: "Clerk", domain: "clerk.com", slug: "clerk", brand: "6C47FF", owner: "Alex Johnson", stage: "Proposal", arr: "$118K", categories: ["Self-serve", "Open source"], health: 58 },
  { id: "co-14", name: "Turso", domain: "turso.tech", slug: "turso", brand: "4FF8D2", owner: "Mira Stone", stage: "Discovery", arr: "$42K", categories: ["Self-serve"], health: 44 },
]

export const STAGE_VARIANT: Record<Stage, "success-light" | "warning-light" | "secondary" | "primary-light" | "outline"> = {
  Committed: "success-light",
  Proposal: "warning-light",
  Renewal: "secondary",
  Evaluation: "primary-light",
  Discovery: "outline",
}

export const CATEGORY_VARIANT: Record<string, "info-light" | "primary-light" | "warning-light" | "success-light" | "secondary"> = {
  Enterprise: "info-light",
  "Design partner": "primary-light",
  Regulated: "warning-light",
  Expansion: "success-light",
  "Open source": "success-light",
  "Self-serve": "secondary",
}

export const OWNERS = ["Mira Stone", "Nora Vale", "Alex Johnson", "Theo Park"]
