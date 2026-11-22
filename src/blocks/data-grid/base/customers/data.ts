export type CustomerStatus = "active" | "pending" | "inactive"

export type CustomerPlan = "Enterprise" | "Pro" | "Starter"

export interface Customer {
  id: string
  name: string
  email: string
  avatar?: string
  /** Balance against the prior statement. Negative means reversed. */
  balance: number
  /** Percent change vs. the prior statement; null = no statement yet. */
  change: number | null
  status: CustomerStatus
  plan: CustomerPlan
  company: string
  country: string
  countryCode: string
  timezone: string
  /** Present when the balance was reversed; shown in the tooltip. */
  reversalNote?: string
}

/** Fixed demo clock - swap for a real one before shipping. */
export const TODAY = new Date("2026-11-17T00:00:00Z")
export const NOW = new Date("2026-11-17T09:41:00Z")

export const CUSTOMERS: Customer[] = [
  {
    id: "cus_01",
    name: "Alex Johnson",
    email: "alex@anthropic.com",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    balance: 5143.03,
    change: 5.2,
    status: "active",
    plan: "Enterprise",
    company: "Anthropic",
    country: "United States",
    countryCode: "us",
    timezone: "PST (UTC-8)",
  },
  {
    id: "cus_02",
    name: "Aron Thompson",
    email: "aron@supabase.com",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80",
    balance: 6214.22,
    change: 1.2,
    status: "pending",
    plan: "Pro",
    company: "Supabase",
    country: "Malaysia",
    countryCode: "my",
    timezone: "MYT (UTC+8)",
  },
  {
    id: "cus_03",
    name: "David Kim",
    email: "david@stripe.com",
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
    balance: 9876.54,
    change: 12.7,
    status: "active",
    plan: "Enterprise",
    company: "Stripe",
    country: "Germany",
    countryCode: "de",
    timezone: "CET (UTC+1)",
  },
  {
    id: "cus_04",
    name: "Elijah Morgan",
    email: "elijah@discord.com",
    avatar:
      "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
    balance: 1245.9,
    change: -10.3,
    status: "inactive",
    plan: "Starter",
    company: "Discord",
    country: "Canada",
    countryCode: "ca",
    timezone: "EST (UTC-5)",
  },
  {
    id: "cus_05",
    name: "Emma Wilson",
    email: "emma@convex.dev",
    avatar:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
    balance: 3456.45,
    change: 0.8,
    status: "inactive",
    plan: "Pro",
    company: "Convex",
    country: "Australia",
    countryCode: "au",
    timezone: "AEST (UTC+11)",
  },
  {
    id: "cus_06",
    name: "Hana Kowalski",
    email: "hana@redis.io",
    balance: 640,
    change: null,
    status: "pending",
    plan: "Starter",
    company: "Redis",
    country: "Poland",
    countryCode: "pl",
    timezone: "CET (UTC+1)",
  },
  {
    id: "cus_07",
    name: "James Brown",
    email: "james@mintlify.com",
    avatar:
      "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
    balance: -5321.77,
    change: -0.4,
    status: "inactive",
    plan: "Starter",
    company: "Mintlify",
    country: "Spain",
    countryCode: "es",
    timezone: "CET (UTC+1)",
    reversalNote:
      "Reversed by the customer's bank on Nov 4. The charge was returned as unauthorized, so the balance carries a credit until the dispute closes.",
  },
  {
    id: "cus_08",
    name: "Kenji Tan",
    email: "kenji@loom.com",
    balance: 980,
    change: null,
    status: "pending",
    plan: "Starter",
    company: "Loom",
    country: "Japan",
    countryCode: "jp",
    timezone: "JST (UTC+9)",
  },
  {
    id: "cus_09",
    name: "Leo Grant",
    email: "leo@vercel.com",
    avatar:
      "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80",
    balance: 18240.75,
    change: 3.8,
    status: "active",
    plan: "Enterprise",
    company: "Vercel",
    country: "United States",
    countryCode: "us",
    timezone: "PST (UTC-8)",
  },
  {
    id: "cus_10",
    name: "Liam Thompson",
    email: "liam@fastapi.dev",
    avatar:
      "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80",
    balance: 5214.88,
    change: 2.2,
    status: "inactive",
    plan: "Starter",
    company: "FastAPI",
    country: "Italy",
    countryCode: "it",
    timezone: "CET (UTC+1)",
  },
  {
    id: "cus_11",
    name: "Priya Sharma",
    email: "priya@linear.app",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    balance: 8210.45,
    change: 4.4,
    status: "active",
    plan: "Pro",
    company: "Linear",
    country: "India",
    countryCode: "in",
    timezone: "IST (UTC+5:30)",
  },
  {
    id: "cus_12",
    name: "Noah Bennett",
    email: "noah@figma.com",
    avatar:
      "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80",
    balance: 6420,
    change: 2.6,
    status: "active",
    plan: "Enterprise",
    company: "Figma",
    country: "United Kingdom",
    countryCode: "gb",
    timezone: "GMT (UTC+0)",
  },
  {
    id: "cus_13",
    name: "Sofia Rossi",
    email: "sofia@notion.so",
    avatar: "https://i.pravatar.cc/96?img=47",
    balance: 3890.12,
    change: -1.8,
    status: "pending",
    plan: "Pro",
    company: "Notion",
    country: "Italy",
    countryCode: "it",
    timezone: "CET (UTC+1)",
  },
  {
    id: "cus_14",
    name: "Mateo Alvarez",
    email: "mateo@github.com",
    avatar: "https://i.pravatar.cc/96?img=12",
    balance: 12875.6,
    change: 9.3,
    status: "active",
    plan: "Enterprise",
    company: "GitHub",
    country: "Spain",
    countryCode: "es",
    timezone: "CET (UTC+1)",
  },
  {
    id: "cus_15",
    name: "Chloe Dubois",
    email: "chloe@figma.com",
    avatar: "https://i.pravatar.cc/96?img=45",
    balance: 2150.75,
    change: 0.5,
    status: "inactive",
    plan: "Starter",
    company: "Figma",
    country: "France",
    countryCode: "fr",
    timezone: "CET (UTC+1)",
  },
  {
    id: "cus_16",
    name: "Yusuf Demir",
    email: "yusuf@posthog.com",
    avatar: "https://i.pravatar.cc/96?img=15",
    balance: 9430.28,
    change: 3.1,
    status: "active",
    plan: "Enterprise",
    company: "PostHog",
    country: "Germany",
    countryCode: "de",
    timezone: "CET (UTC+1)",
  },
  {
    id: "cus_17",
    name: "Nora Lindqvist",
    email: "nora@raycast.com",
    avatar: "https://i.pravatar.cc/96?img=32",
    balance: -1890.44,
    change: -2.7,
    status: "inactive",
    plan: "Starter",
    company: "Raycast",
    country: "Sweden",
    countryCode: "se",
    timezone: "CET (UTC+1)",
    reversalNote:
      "Refund issued outside the billing cycle on Nov 2 and flagged as a reversal. The credit stays on the account until the next statement closes.",
  },
  {
    id: "cus_18",
    name: "Tom Okafor",
    email: "tom@raycast.com",
    avatar: "https://i.pravatar.cc/96?img=68",
    balance: 755.2,
    change: 1.4,
    status: "pending",
    plan: "Starter",
    company: "Raycast",
    country: "Nigeria",
    countryCode: "ng",
    timezone: "WAT (UTC+1)",
  },
  {
    id: "cus_19",
    name: "Aiko Tanaka",
    email: "aiko@vercel.com",
    avatar: "https://i.pravatar.cc/96?img=44",
    balance: 11250,
    change: 7.5,
    status: "active",
    plan: "Enterprise",
    company: "Vercel",
    country: "Japan",
    countryCode: "jp",
    timezone: "JST (UTC+9)",
  },
  {
    id: "cus_20",
    name: "Lucas Meyer",
    email: "lucas@stripe.com",
    avatar: "https://i.pravatar.cc/96?img=8",
    balance: 4320.66,
    change: 1.9,
    status: "pending",
    plan: "Pro",
    company: "Stripe",
    country: "Germany",
    countryCode: "de",
    timezone: "CET (UTC+1)",
  },
  {
    id: "cus_21",
    name: "Isabella Costa",
    email: "isabella@redis.io",
    avatar: "https://i.pravatar.cc/96?img=26",
    balance: 6890.3,
    change: 5.7,
    status: "active",
    plan: "Pro",
    company: "Redis",
    country: "Brazil",
    countryCode: "br",
    timezone: "BRT (UTC-3)",
  },
  {
    id: "cus_22",
    name: "Omar Haddad",
    email: "omar@discord.com",
    avatar: "https://i.pravatar.cc/96?img=53",
    balance: 1560.9,
    change: -3.4,
    status: "pending",
    plan: "Starter",
    company: "Discord",
    country: "United Arab Emirates",
    countryCode: "ae",
    timezone: "GST (UTC+4)",
  },
  {
    id: "cus_23",
    name: "Freya Nilsen",
    email: "freya@loom.com",
    avatar: "https://i.pravatar.cc/96?img=20",
    balance: 9980.55,
    change: 4.8,
    status: "active",
    plan: "Enterprise",
    company: "Loom",
    country: "Norway",
    countryCode: "no",
    timezone: "CET (UTC+1)",
  },
  {
    id: "cus_24",
    name: "Gabriel Santos",
    email: "gabriel@fastapi.dev",
    avatar: "https://i.pravatar.cc/96?img=61",
    balance: 17898.78,
    change: 11.2,
    status: "active",
    plan: "Enterprise",
    company: "FastAPI",
    country: "Portugal",
    countryCode: "pt",
    timezone: "WET (UTC+0)",
  },
]

/** Company name -> Simple Icons slug + brand color, for the row and sheet marks. */
export const COMPANY_LOGOS: Record<string, { slug: string; color: string }> = {
  Anthropic: { slug: "anthropic", color: "191919" },
  Supabase: { slug: "supabase", color: "3FCF8E" },
  Stripe: { slug: "stripe", color: "635BFF" },
  Discord: { slug: "discord", color: "5865F2" },
  Convex: { slug: "convex", color: "EE342F" },
  Redis: { slug: "redis", color: "FF4438" },
  Mintlify: { slug: "mintlify", color: "18E299" },
  Loom: { slug: "loom", color: "625DF5" },
  Vercel: { slug: "vercel", color: "000000" },
  FastAPI: { slug: "fastapi", color: "009688" },
  Linear: { slug: "linear", color: "5E6AD2" },
  Figma: { slug: "figma", color: "F24E1E" },
  Notion: { slug: "notion", color: "000000" },
  GitHub: { slug: "github", color: "181717" },
  PostHog: { slug: "posthog", color: "000000" },
  Raycast: { slug: "raycast", color: "FF6363" },
}

export const STATUS_OPTIONS: {
  value: CustomerStatus
  label: string
  badge: "success-light" | "warning-light" | "invert-light"
  dot: string
}[] = [
  {
    value: "active",
    label: "Active",
    badge: "success-light",
    dot: "bg-success",
  },
  {
    value: "pending",
    label: "Pending",
    badge: "warning-light",
    dot: "bg-warning",
  },
  {
    value: "inactive",
    label: "Inactive",
    badge: "invert-light",
    dot: "bg-muted-foreground",
  },
]

export const PLAN_OPTIONS: CustomerPlan[] = ["Enterprise", "Pro", "Starter"]

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export function formatCurrency(value: number) {
  return currency.format(value)
}

export function formatPercent(value: number) {
  return `${Math.abs(value).toFixed(1)}%`
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export interface Statement {
  id: string
  label: string
  date: string
  amount: number
  note?: string
}

function monthsAgo(months: number) {
  const date = new Date(TODAY)
  date.setMonth(date.getMonth() - months)
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
}

/** Statement history derived from the current balance and its percent change. */
export function getStatements(customer: Customer): Statement[] {
  const previous =
    customer.change === null
      ? customer.balance
      : customer.balance / (1 + customer.change / 100)

  const statements: Statement[] = [
    {
      id: "current",
      label: "Current statement",
      date: monthsAgo(0),
      amount: customer.balance,
      note: customer.reversalNote,
    },
    {
      id: "previous",
      label: "Previous statement",
      date: monthsAgo(1),
      amount: Number(previous.toFixed(2)),
    },
    {
      id: "opening",
      label: "Opening balance",
      date: monthsAgo(2),
      amount: Number((previous * 0.94).toFixed(2)),
    },
  ]

  return statements
}
