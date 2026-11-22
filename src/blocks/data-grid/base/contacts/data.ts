export type ContactStatus = "prospect" | "customer"

export interface Contact {
  id: string
  name: string
  email: string
  avatar?: string
  company: string
  score: number
  /** 16 weeks of engagement, oldest first. */
  engagement: number[]
  pipeline: number
  openDeals: number
  status: ContactStatus
  pinned?: boolean
}

/** Fixed demo clock - swap for a real one before shipping. */
export const TODAY = new Date("2026-03-24T00:00:00Z")

export const COMPANY_MARKS: Record<string, { slug: string; color: string }> = {
  Vercel: { slug: "vercel", color: "000000" },
  Stripe: { slug: "stripe", color: "635BFF" },
  Supabase: { slug: "supabase", color: "3FCF8E" },
  Mintlify: { slug: "mintlify", color: "18E299" },
  PlanetScale: { slug: "planetscale", color: "000000" },
  Linear: { slug: "linear", color: "5E6AD2" },
  Figma: { slug: "figma", color: "F24E1E" },
  Notion: { slug: "notion", color: "000000" },
  GitHub: { slug: "github", color: "181717" },
  n8n: { slug: "n8n", color: "EA4B71" },
  Raycast: { slug: "raycast", color: "FF6363" },
  PostHog: { slug: "posthog", color: "000000" },
  Sentry: { slug: "sentry", color: "362D59" },
  Cloudflare: { slug: "cloudflare", color: "F38020" },
}

export const CONTACTS: Contact[] = [
  {
    id: "con-01",
    name: "Darrell Steward",
    email: "darrell@vercel.com",
    avatar: "https://i.pravatar.cc/96?img=12",
    company: "Vercel",
    score: 76,
    pipeline: 71200,
    openDeals: 2,
    status: "prospect",
    pinned: true,
    engagement: [4, 2, 6, 8, 3, 5, 7, 9, 6, 2, 4, 8, 9, 7, 6, 8],
  },
  {
    id: "con-02",
    name: "Eleanor Pena",
    email: "eleanor@openclaw.dev",
    avatar: "https://i.pravatar.cc/96?img=45",
    company: "OpenClaw",
    score: 71,
    pipeline: 55600,
    openDeals: 2,
    status: "prospect",
    pinned: true,
    engagement: [3, 5, 4, 6, 2, 4, 3, 5, 4, 3, 5, 4, 6, 5, 4, 6],
  },
  {
    id: "con-03",
    name: "Theresa Webb",
    email: "theresa@stripe.com",
    avatar: "https://i.pravatar.cc/96?img=26",
    company: "Stripe",
    score: 92,
    pipeline: 48500,
    openDeals: 2,
    status: "customer",
    engagement: [6, 8, 7, 9, 8, 6, 9, 10, 8, 7, 9, 8, 9, 7, 8, 10],
  },
  {
    id: "con-04",
    name: "Floyd Miles",
    email: "floyd@n8n.io",
    avatar: "https://i.pravatar.cc/96?img=53",
    company: "n8n",
    score: 90,
    pipeline: 91400,
    openDeals: 2,
    status: "prospect",
    engagement: [5, 6, 8, 7, 9, 7, 6, 8, 9, 10, 8, 7, 9, 9, 10, 8],
  },
  {
    id: "con-05",
    name: "Cameron Williamson",
    email: "cameron@mintlify.com",
    avatar: "https://i.pravatar.cc/96?img=15",
    company: "Mintlify",
    score: 88,
    pipeline: 62300,
    openDeals: 2,
    status: "prospect",
    engagement: [4, 5, 7, 6, 8, 6, 5, 7, 9, 8, 7, 9, 8, 9, 10, 9],
  },
  {
    id: "con-06",
    name: "Bessie Cooper",
    email: "bessie@modelcontextprotocol.io",
    avatar: "https://i.pravatar.cc/96?img=32",
    company: "Model Context Protocol",
    score: 84,
    pipeline: 41200,
    openDeals: 2,
    status: "customer",
    engagement: [5, 4, 6, 5, 7, 6, 5, 6, 7, 6, 8, 7, 6, 8, 7, 8],
  },
  {
    id: "con-07",
    name: "Devon Lane",
    email: "devon@supabase.com",
    avatar: "https://i.pravatar.cc/96?img=68",
    company: "Supabase",
    score: 83,
    pipeline: 78300,
    openDeals: 3,
    status: "prospect",
    engagement: [3, 4, 5, 6, 5, 7, 6, 8, 7, 6, 8, 9, 8, 9, 9, 10],
  },
  {
    id: "con-08",
    name: "Annette Black",
    email: "annette@slack.com",
    avatar: "https://i.pravatar.cc/96?img=47",
    company: "Slack",
    score: 81,
    pipeline: 67800,
    openDeals: 2,
    status: "customer",
    engagement: [4, 4, 5, 5, 6, 5, 6, 6, 7, 6, 7, 7, 8, 7, 8, 8],
  },
  {
    id: "con-09",
    name: "Dianne Russell",
    email: "dianne@openai.com",
    avatar: "https://i.pravatar.cc/96?img=44",
    company: "OpenAI",
    score: 79,
    pipeline: 54700,
    openDeals: 3,
    status: "customer",
    engagement: [5, 3, 4, 4, 5, 4, 6, 5, 6, 5, 7, 6, 7, 6, 8, 7],
  },
  {
    id: "con-10",
    name: "Jacob Jones",
    email: "jacob@planetscale.com",
    avatar: "https://i.pravatar.cc/96?img=8",
    company: "PlanetScale",
    score: 68,
    pipeline: 12100,
    openDeals: 1,
    status: "customer",
    engagement: [3, 2, 4, 3, 5, 4, 4, 5, 4, 6, 5, 5, 6, 6, 5, 7],
  },
  {
    id: "con-11",
    name: "Marvin McKinney",
    email: "marvin@github.com",
    avatar: "https://i.pravatar.cc/96?img=20",
    company: "GitHub",
    score: 66,
    pipeline: 6080,
    openDeals: 2,
    status: "prospect",
    engagement: [4, 3, 5, 4, 4, 3, 5, 4, 3, 5, 4, 5, 4, 6, 5, 5],
  },
  {
    id: "con-12",
    name: "Courtney Henry",
    email: "courtney@sentry.io",
    avatar: "https://i.pravatar.cc/96?img=61",
    company: "Sentry",
    score: 74,
    pipeline: 6905,
    openDeals: 1,
    status: "customer",
    engagement: [5, 4, 6, 5, 5, 6, 5, 6, 5, 6, 7, 6, 6, 7, 6, 7],
  },
  {
    id: "con-13",
    name: "Ronald Richards",
    email: "ronald@cloudflare.com",
    avatar: "https://i.pravatar.cc/96?img=33",
    company: "Cloudflare",
    score: 58,
    pipeline: 4338,
    openDeals: 2,
    status: "prospect",
    engagement: [3, 2, 3, 4, 3, 3, 4, 3, 4, 3, 3, 4, 5, 4, 4, 5],
  },
  {
    id: "con-14",
    name: "Kathryn Murphy",
    email: "kathryn@loom.com",
    avatar: "https://i.pravatar.cc/96?img=25",
    company: "Loom",
    score: 62,
    pipeline: 4873,
    openDeals: 1,
    status: "prospect",
    engagement: [4, 3, 4, 3, 4, 5, 4, 4, 5, 4, 4, 5, 5, 4, 6, 5],
  },
  {
    id: "con-15",
    name: "Jerome Bell",
    email: "jerome@raycast.com",
    avatar: "https://i.pravatar.cc/96?img=57",
    company: "Raycast",
    score: 86,
    pipeline: 10143,
    openDeals: 2,
    status: "customer",
    engagement: [6, 5, 7, 6, 7, 8, 7, 8, 7, 8, 9, 8, 9, 8, 9, 10],
  },
  {
    id: "con-16",
    name: "Cody Fisher",
    email: "cody@vercel.com",
    avatar: "https://i.pravatar.cc/96?img=14",
    company: "Vercel",
    score: 73,
    pipeline: 7821,
    openDeals: 3,
    status: "prospect",
    engagement: [4, 5, 4, 6, 5, 6, 5, 6, 6, 5, 7, 6, 6, 7, 7, 6],
  },
  {
    id: "con-17",
    name: "Esther Howard",
    email: "esther@stripe.com",
    avatar: "https://i.pravatar.cc/96?img=43",
    company: "Stripe",
    score: 95,
    pipeline: 16008,
    openDeals: 2,
    status: "customer",
    engagement: [7, 8, 9, 8, 9, 10, 9, 10, 9, 10, 10, 9, 10, 10, 10, 10],
  },
  {
    id: "con-18",
    name: "Leslie Alexander",
    email: "leslie@linear.app",
    avatar: "https://i.pravatar.cc/96?img=38",
    company: "Linear",
    score: 77,
    pipeline: 8952,
    openDeals: 2,
    status: "prospect",
    engagement: [5, 6, 5, 7, 6, 6, 7, 6, 7, 7, 8, 7, 7, 8, 8, 7],
  },
  {
    id: "con-19",
    name: "Guy Hawkins",
    email: "guy@mintlify.com",
    avatar: "https://i.pravatar.cc/96?img=59",
    company: "Mintlify",
    score: 54,
    pipeline: 2857,
    openDeals: 1,
    status: "prospect",
    engagement: [2, 3, 2, 3, 2, 3, 3, 2, 3, 4, 3, 3, 4, 3, 4, 4],
  },
  {
    id: "con-20",
    name: "Savannah Nguyen",
    email: "savannah@figma.com",
    avatar: "https://i.pravatar.cc/96?img=23",
    company: "Figma",
    score: 82,
    pipeline: 11075,
    openDeals: 2,
    status: "customer",
    engagement: [5, 6, 6, 7, 6, 7, 8, 7, 8, 8, 9, 8, 8, 9, 9, 9],
  },
  {
    id: "con-21",
    name: "Albert Flores",
    email: "albert@supabase.com",
    avatar: "https://i.pravatar.cc/96?img=51",
    company: "Supabase",
    score: 69,
    pipeline: 5331,
    openDeals: 2,
    status: "prospect",
    engagement: [3, 4, 4, 5, 4, 4, 5, 4, 5, 5, 5, 6, 5, 6, 6, 6],
  },
  {
    id: "con-22",
    name: "Jenny Wilson",
    email: "jenny@notion.so",
    avatar: "https://i.pravatar.cc/96?img=29",
    company: "Notion",
    score: 61,
    pipeline: 4017,
    openDeals: 1,
    status: "customer",
    engagement: [4, 3, 4, 4, 3, 4, 4, 4, 4, 5, 4, 5, 5, 4, 5, 5],
  },
]

export type ScoreBand = "hot" | "warm" | "cold"

export function scoreBand(score: number): ScoreBand {
  if (score >= 75) return "hot"
  if (score >= 55) return "warm"
  return "cold"
}

export const SCORE_BANDS: {
  value: ScoreBand
  label: string
  bar: string
  text: string
}[] = [
  {
    value: "hot",
    label: "Hot",
    bar: "bg-success",
    text: "text-success-foreground",
  },
  {
    value: "warm",
    label: "Warm",
    bar: "bg-warning",
    text: "text-warning-foreground",
  },
  {
    value: "cold",
    label: "Cold",
    bar: "bg-destructive",
    text: "text-destructive",
  },
]

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function formatCurrency(value: number) {
  return currency.format(value)
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

/** Engagement of the last 4 weeks and its change against the 4 before. */
export function engagementTrend(contact: Contact) {
  const series = contact.engagement
  const last = series.slice(-4).reduce((sum, value) => sum + value, 0)
  const before = series.slice(-8, -4).reduce((sum, value) => sum + value, 0)
  const change = before === 0 ? 0 : Math.round(((last - before) / before) * 100)

  return {
    last,
    change,
    label: `${last} in 4 weeks`,
    state: Math.abs(change) < 5 ? "steady" : change > 0 ? "up" : "down",
    changeLabel: Math.abs(change) < 5 ? "Steady" : `${Math.abs(change)}%`,
  }
}
