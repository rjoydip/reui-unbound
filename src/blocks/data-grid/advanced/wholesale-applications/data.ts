export type Decision = "Approved" | "In Review" | "Declined" | "On hold"

export type QueueKey = "review" | "missing" | "ready" | "hold" | "approved"

export interface Door {
  id: string
  name: string
  city: string
  ships: string
  checks: {
    resale: boolean
    lease: boolean
    visit: boolean
    fixtures: boolean
  }
}

export interface Account {
  id: string
  name: string
  city: string
  country: string
  buyer: string
  decision: Decision
  creditLimit: number
  orderValue: number
  creditScore: number
  ships: string
  creditVerified: boolean
  doors: Door[]
}

export type CheckKey = keyof Door["checks"]

export const CHECK_LABELS: { key: CheckKey; label: string }[] = [
  { key: "resale", label: "Resale certificate" },
  { key: "lease", label: "Lease agreement" },
  { key: "visit", label: "Site visit" },
  { key: "fixtures", label: "Fixture plan" },
]

export const QUEUES: {
  key: Exclude<QueueKey, "approved">
  label: string
  description: string
}[] = [
  {
    key: "review",
    label: "Awaiting review",
    description: "Docs complete, needs a decision",
  },
  { key: "missing", label: "Missing docs", description: "A door check is short" },
  { key: "ready", label: "Ready to approve", description: "All checks passed" },
  { key: "hold", label: "On hold", description: "Declined or paused" },
]

function door(
  id: string,
  name: string,
  city: string,
  ships: string,
  spec: string,
): Door {
  return {
    id,
    name,
    city,
    ships,
    checks: {
      resale: spec[0] === "1",
      lease: spec[1] === "1",
      visit: spec[2] === "1",
      fixtures: spec[3] === "1",
    },
  }
}

export const ACCOUNTS: Account[] = [
  {
    id: "hedgerow",
    name: "Hedgerow & Fell",
    city: "Kendal",
    country: "GB",
    buyer: "Mia Hart",
    decision: "Declined",
    creditLimit: 5000,
    orderValue: 5400,
    creditScore: 52,
    ships: "Nov 12",
    creditVerified: false,
    doors: [
      door("hedgerow-1", "Kendal High Street", "Kendal", "Nov 12", "1110"),
      door("hedgerow-2", "Windermere Mews", "Windermere", "Nov 19", "1000"),
    ],
  },
  {
    id: "alpenrand",
    name: "Alpenrand Sport",
    city: "Munich",
    country: "DE",
    buyer: "Jonas Keller",
    decision: "Approved",
    creditLimit: 35000,
    orderValue: 31500,
    creditScore: 90,
    ships: "Nov 14",
    creditVerified: true,
    doors: [
      door("alpenrand-1", "Munich Sendling", "Munich", "Nov 14", "1111"),
      door("alpenrand-2", "Garmisch Platz", "Garmisch", "Nov 21", "1111"),
    ],
  },
  {
    id: "blue-spruce",
    name: "Blue Spruce Mercantile",
    city: "Bozeman",
    country: "US",
    buyer: "Elena Ford",
    decision: "Approved",
    creditLimit: 20000,
    orderValue: 15800,
    creditScore: 83,
    ships: "Nov 14",
    creditVerified: true,
    doors: [door("spruce-1", "Bozeman Main", "Bozeman", "Nov 14", "1111")],
  },
  {
    id: "basecamp",
    name: "Basecamp Collective",
    city: "Seattle",
    country: "US",
    buyer: "Ravi Shah",
    decision: "In Review",
    creditLimit: 75000,
    orderValue: 71200,
    creditScore: 91,
    ships: "Nov 14",
    creditVerified: false,
    doors: [
      door("basecamp-1", "Capitol Hill", "Seattle", "Nov 14", "1111"),
      door("basecamp-2", "Ballard Locks", "Seattle", "Nov 18", "1111"),
      door("basecamp-3", "Tacoma Union", "Tacoma", "Nov 24", "1111"),
      door("basecamp-4", "Bellevue Square", "Bellevue", "Nov 2", "1111"),
    ],
  },
  {
    id: "tidewater",
    name: "Tidewater Paddle Co.",
    city: "Portland",
    country: "US",
    buyer: "Casey Nguyen",
    decision: "In Review",
    creditLimit: 10000,
    orderValue: 9800,
    creditScore: 74,
    ships: "In 2 days",
    creditVerified: false,
    doors: [
      door("tidewater-1", "Pearl District", "Portland", "In 2 days", "1111"),
      door("tidewater-2", "Alberta Arts", "Portland", "Nov 26", "1110"),
    ],
  },
  {
    id: "polder",
    name: "Polder Outdoor",
    city: "Utrecht",
    country: "NL",
    buyer: "Sanne de Boer",
    decision: "Approved",
    creditLimit: 30000,
    orderValue: 26700,
    creditScore: 84,
    ships: "Nov 15",
    creditVerified: true,
    doors: [
      door("polder-1", "Utrecht Centraal", "Utrecht", "Nov 15", "1111"),
      door("polder-2", "Rotterdam Noord", "Rotterdam", "Nov 22", "1111"),
    ],
  },
  {
    id: "granite",
    name: "Granite Peak Outfitters",
    city: "Boulder",
    country: "US",
    buyer: "Tessa Brooks",
    decision: "In Review",
    creditLimit: 40000,
    orderValue: 36000,
    creditScore: 81,
    ships: "In 3 days",
    creditVerified: true,
    doors: [
      door("granite-1", "Pearl Street", "Boulder", "In 3 days", "1111"),
      door("granite-2", "Larimer Square", "Denver", "Nov 23", "1111"),
      door("granite-3", "Old Town", "Fort Collins", "Nov 6", "1111"),
    ],
  },
  {
    id: "southern-ridge",
    name: "Southern Ridge Gear",
    city: "Hobart",
    country: "AU",
    buyer: "Liam Fraser",
    decision: "Declined",
    creditLimit: 5000,
    orderValue: 2200,
    creditScore: 44,
    ships: "Nov 17",
    creditVerified: false,
    doors: [door("ridge-1", "Salamanca Place", "Hobart", "Nov 17", "1010")],
  },
  {
    id: "aiguille",
    name: "Aiguille Sports",
    city: "Chamonix",
    country: "FR",
    buyer: "Camille Rey",
    decision: "In Review",
    creditLimit: 15000,
    orderValue: 14400,
    creditScore: 70,
    ships: "In 4 days",
    creditVerified: false,
    doors: [
      door("aiguille-1", "Chamonix Centre", "Chamonix", "In 4 days", "1111"),
      door("aiguille-2", "Les Houches", "Les Houches", "Nov 2", "1100"),
    ],
  },
  {
    id: "sentier",
    name: "Sentier Montagne",
    city: "Annecy",
    country: "FR",
    buyer: "Hugo Blanc",
    decision: "In Review",
    creditLimit: 15000,
    orderValue: 14200,
    creditScore: 72,
    ships: "In 5 days",
    creditVerified: true,
    doors: [
      door("sentier-1", "Annecy Vieille Ville", "Annecy", "In 5 days", "1111"),
      door("sentier-2", "Talloires Bay", "Talloires", "Nov 9", "1111"),
    ],
  },
  {
    id: "ridgeline",
    name: "Ridgeline Supply",
    city: "Denver",
    country: "US",
    buyer: "Noah Ellis",
    decision: "In Review",
    creditLimit: 22000,
    orderValue: 21000,
    creditScore: 88,
    ships: "Nov 21",
    creditVerified: false,
    doors: [
      door("ridgeline-1", "RiNo Depot", "Denver", "Nov 21", "1111"),
      door("ridgeline-2", "Golden Mill", "Golden", "Nov 29", "1111"),
      door("ridgeline-3", "Boulder Creek", "Boulder", "Nov 4", "1110"),
    ],
  },
  {
    id: "snowline",
    name: "Snowline & Co.",
    city: "Oslo",
    country: "NO",
    buyer: "Ingrid Dahl",
    decision: "Approved",
    creditLimit: 18000,
    orderValue: 15100,
    creditScore: 80,
    ships: "Nov 23",
    creditVerified: true,
    doors: [door("snowline-1", "Grünerløkka", "Oslo", "Nov 23", "1111")],
  },
]

export function missingDoors(account: Account) {
  return account.doors.filter((entry) =>
    Object.values(entry.checks).some((value) => !value),
  ).length
}

export function doorReady(door: Door) {
  return Object.values(door.checks).every(Boolean)
}

export function accountChecks(account: Account) {
  const total = account.doors.length * CHECK_LABELS.length
  const done = account.doors.reduce(
    (sum, entry) =>
      sum + CHECK_LABELS.filter((check) => entry.checks[check.key]).length,
    0,
  )
  return { done, total, pct: total === 0 ? 0 : (done / total) * 100 }
}

/** A check counts as done only when every door has it. */
export function aggregateChecks(account: Account): Door["checks"] {
  return {
    resale: account.doors.length > 0 && account.doors.every((d) => d.checks.resale),
    lease: account.doors.length > 0 && account.doors.every((d) => d.checks.lease),
    visit: account.doors.length > 0 && account.doors.every((d) => d.checks.visit),
    fixtures:
      account.doors.length > 0 && account.doors.every((d) => d.checks.fixtures),
  }
}

export function queueOf(account: Account): QueueKey {
  if (account.decision === "Approved") return "approved"
  if (account.decision === "On hold" || account.decision === "Declined")
    return "hold"
  if (missingDoors(account) > 0) return "missing"
  if (account.creditVerified) return "ready"
  return "review"
}

export function queueCounts(accounts: Account[]) {
  return QUEUES.map((queue) => ({
    ...queue,
    count: accounts.filter((account) => queueOf(account) === queue.key).length,
  }))
}

export function missingCheckLabels(account: Account) {
  const missing = new Set<string>()
  for (const entry of account.doors) {
    for (const check of CHECK_LABELS) {
      if (!entry.checks[check.key]) missing.add(check.label)
    }
  }
  return [...missing]
}

export function shortCredit(account: Account) {
  return Math.max(0, account.orderValue - account.creditLimit)
}

export function formatMoney(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount)
}

export function totalChecked(accounts: Account[]) {
  return accounts.reduce(
    (sum, account) => sum + accountChecks(account).done,
    0,
  )
}

export function totalChecks(accounts: Account[]) {
  return accounts.reduce(
    (sum, account) => sum + accountChecks(account).total,
    0,
  )
}
