export type Stage =
  | "Discovery"
  | "In Production"
  | "Client Review"
  | "Ready To Ship"

export interface Crew {
  avatars: number[]
  extra?: number
  initials?: string
}

export interface Engagement {
  id: string
  client: string
  stage: Stage
  title: string | null
  completion: number | null
  crew: Crew
  milestone: string | null
}

export const STAGES: Stage[] = [
  "Discovery",
  "In Production",
  "Client Review",
  "Ready To Ship",
]

export const ENGAGEMENTS: Engagement[] = [
  {
    id: "stripe-spring",
    client: "Stripe",
    stage: "Discovery",
    title: "Spring Menu Film",
    completion: 18,
    crew: { avatars: [47, 12] },
    milestone: "Concept Lock",
  },
  {
    id: "docker",
    client: "Docker",
    stage: "Discovery",
    title: null,
    completion: null,
    crew: { avatars: [12] },
    milestone: null,
  },
  {
    id: "gemini",
    client: "Gemini",
    stage: "Discovery",
    title: "Type Specimen",
    completion: 27,
    crew: { avatars: [47, 12, 57], extra: 1 },
    milestone: "Art Direction",
  },
  {
    id: "supabase-lab",
    client: "Supabase",
    stage: "In Production",
    title: "Lab Site Rebuild",
    completion: 64,
    crew: { avatars: [32, 47, 57], extra: 4 },
    milestone: "Motion Pass",
  },
  {
    id: "neon",
    client: "Neon",
    stage: "In Production",
    title: "Docuseries Titles",
    completion: 52,
    crew: { avatars: [44, 12], extra: 1 },
    milestone: "Style Frames",
  },
  {
    id: "slack",
    client: "Slack",
    stage: "In Production",
    title: "Catalog Relaunch",
    completion: 71,
    crew: { avatars: [47, 12, 57], extra: 2 },
    milestone: "Photo Edit",
  },
  {
    id: "loom",
    client: "Loom",
    stage: "In Production",
    title: null,
    completion: null,
    crew: { avatars: [44] },
    milestone: null,
  },
  {
    id: "hono",
    client: "Hono",
    stage: "Client Review",
    title: "Annual Report",
    completion: 88,
    crew: { avatars: [47, 12], extra: 3 },
    milestone: "Print Proof",
  },
  {
    id: "convex",
    client: "Convex",
    stage: "Client Review",
    title: "Care Campaign",
    completion: 79,
    crew: { avatars: [32, 12] },
    milestone: "Final Cut",
  },
  {
    id: "redis",
    client: "Redis",
    stage: "Client Review",
    title: "Cellar Identity",
    completion: 83,
    crew: { avatars: [44] },
    milestone: "Brand Book",
  },
  {
    id: "stripe-holiday",
    client: "Stripe",
    stage: "Ready To Ship",
    title: "Holiday Packaging",
    completion: 96,
    crew: { avatars: [47, 12, 57], extra: 5 },
    milestone: "Launch Kit",
  },
  {
    id: "supabase-investor",
    client: "Supabase",
    stage: "Ready To Ship",
    title: "Investor Deck",
    completion: 100,
    crew: { avatars: [], initials: "JB" },
    milestone: "Handoff",
  },
]

export function averageCompletion(rows: Engagement[]) {
  const values = rows
    .map((row) => row.completion)
    .filter((value): value is number => value !== null)
  if (values.length === 0) return 0
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length)
}
