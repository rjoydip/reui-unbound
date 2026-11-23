export type Corridor = "West" | "Central" | "East"

export type MarginTier = "deep-loss" | "loss" | "thin" | "healthy" | "strong"

export interface Lane {
  rate: number
  cost: number
  loads: number
  /** Six weekly rate points, oldest first. */
  history: number[]
}

export interface Terminal {
  code: string
  city: string
  country: string
  flag: string
  corridor: Corridor
  /** Lanes keyed by destination terminal code. */
  lanes: Record<string, Lane>
}

const TERMINAL_META: Array<Omit<Terminal, "lanes">> = [
  { code: "MAD", city: "Madrid", country: "Spain", flag: "es", corridor: "West" },
  { code: "LON", city: "London", country: "United Kingdom", flag: "gb", corridor: "West" },
  { code: "ANR", city: "Antwerp", country: "Belgium", flag: "be", corridor: "West" },
  { code: "RTM", city: "Rotterdam", country: "Netherlands", flag: "nl", corridor: "West" },
  { code: "LYS", city: "Lyon", country: "France", flag: "fr", corridor: "West" },
  { code: "ZRH", city: "Zurich", country: "Switzerland", flag: "ch", corridor: "Central" },
  { code: "MIL", city: "Milan", country: "Italy", flag: "it", corridor: "Central" },
  { code: "HAM", city: "Hamburg", country: "Germany", flag: "de", corridor: "Central" },
  { code: "PRG", city: "Prague", country: "Czechia", flag: "cz", corridor: "East" },
  { code: "VIE", city: "Vienna", country: "Austria", flag: "at", corridor: "East" },
  { code: "BUD", city: "Budapest", country: "Hungary", flag: "hu", corridor: "East" },
  { code: "WAW", city: "Warsaw", country: "Poland", flag: "pl", corridor: "East" },
]

export const TERMINAL_CODES = TERMINAL_META.map((terminal) => terminal.code)

/**
 * Bidirectional lane contracts: headhaul rate/cost from→to, backhaul
 * rate/cost to→from, then weekly loads. EUR per 100 kg.
 */
type Pair = [
  from: string,
  to: string,
  outRate: number,
  outCost: number,
  backRate: number,
  backCost: number,
  loads: number,
]

const PAIRS: Pair[] = [
  ["MAD", "LON", 32, 28, 16, 15, 41],
  ["MAD", "ANR", 30, 26, 22, 20, 33],
  ["MAD", "RTM", 34, 29, 21, 18, 57],
  ["MAD", "LYS", 22, 20, 16, 14, 31],
  ["MAD", "MIL", 36, 32, 23, 20, 48],
  ["LON", "ANR", 30, 26, 75, 64, 22],
  ["LON", "RTM", 28, 25, 46, 39, 51],
  ["LON", "MIL", 31, 27, 53, 45, 44],
  ["LON", "ZRH", 26, 23, 24, 21, 38],
  ["ANR", "RTM", 20, 18, 57, 50, 68],
  ["ANR", "MIL", 33, 29, 57, 49, 27],
  ["ANR", "HAM", 30, 27, 38, 33, 46],
  ["RTM", "LYS", 41, 35, 18, 16, 36],
  ["RTM", "HAM", 34, 30, 48, 41, 62],
  ["RTM", "PRG", 38, 33, 31, 28, 55],
  ["RTM", "VIE", 27, 24, 22, 19, 49],
  ["RTM", "BUD", 46, 39, 31, 27, 39],
  ["LYS", "ZRH", 14, 12, 14, 12, 24],
  ["LYS", "MIL", 20, 17, 14, 12, 33],
  ["ZRH", "MIL", 13, 11, 12, 10, 46],
  ["ZRH", "HAM", 22, 19, 43, 37, 18],
  ["ZRH", "VIE", 26, 22, 33, 26, 21],
  ["MIL", "HAM", 26, 22, 47, 40, 52],
  ["MIL", "PRG", 36, 31, 34, 30, 29],
  ["MIL", "BUD", 31, 27, 29, 26, 24],
  ["HAM", "PRG", 32, 28, 30, 27, 41],
  ["HAM", "WAW", 36, 31, 33, 29, 47],
  ["PRG", "VIE", 21, 18, 22, 19, 58],
  ["PRG", "BUD", 14, 12, 15, 13, 44],
  ["VIE", "BUD", 26, 22, 16, 14, 37],
  ["VIE", "WAW", 24, 21, 41, 35, 32],
  ["BUD", "WAW", 20, 17, 23, 20, 51],
  ["WAW", "PRG", 28, 24, 19, 16, 26],
]

function buildHistory(rate: number, seed: number) {
  return Array.from({ length: 6 }, (_, index) => {
    const wiggle = Math.sin(seed * 1.7 + index * 1.3) * 0.06
    const drift = (index - 5) * 0.012
    return Math.max(1, Math.round(rate * (1 + wiggle + drift)))
  })
}

function makeLane(
  rate: number,
  cost: number,
  loads: number,
  seed: number,
): Lane {
  return { rate, cost, loads, history: buildHistory(rate, seed) }
}

export const TERMINALS: Terminal[] = TERMINAL_META.map((terminal) => ({
  ...terminal,
  lanes: {},
}))

PAIRS.forEach(([from, to, outRate, outCost, backRate, backCost, loads], index) => {
  const origin = TERMINALS.find((terminal) => terminal.code === from)
  const dest = TERMINALS.find((terminal) => terminal.code === to)
  if (!origin || !dest) return
  origin.lanes[to] = makeLane(outRate, outCost, loads, index + 1)
  dest.lanes[from] = makeLane(backRate, backCost, Math.round(loads * 0.9), index + 2)
})

export function terminalByCode(code: string) {
  return TERMINALS.find((terminal) => terminal.code === code)
}

export function marginOf(lane: Lane) {
  return ((lane.rate - lane.cost) / lane.rate) * 100
}

export function tierOf(lane: Lane): MarginTier {
  const margin = marginOf(lane)
  if (margin < 0) return "deep-loss"
  if (margin < 5) return "loss"
  if (margin < 8) return "thin"
  if (margin < 15) return "healthy"
  return "strong"
}

export function laneFor(origin: Terminal, destCode: string) {
  return origin.lanes[destCode] ?? null
}

export function laneCount(terminal: Terminal) {
  return Object.keys(terminal.lanes).length
}

export function outMargin(terminal: Terminal, destCodes: string[] = TERMINAL_CODES) {
  let revenue = 0
  let cost = 0
  let loads = 0
  let losing = 0
  for (const code of destCodes) {
    const lane = terminal.lanes[code]
    if (!lane) continue
    revenue += lane.rate * lane.loads
    cost += lane.cost * lane.loads
    loads += lane.loads
    if (marginOf(lane) < 0) losing += 1
  }
  if (revenue === 0) return { margin: 0, loads: 0, losing: 0 }
  return {
    margin: ((revenue - cost) / revenue) * 100,
    loads,
    losing,
  }
}

export function networkStats(
  terminals: Terminal[] = TERMINALS,
  destCodes: string[] = TERMINAL_CODES,
) {
  let revenue = 0
  let cost = 0
  let loads = 0
  let losing = 0
  for (const terminal of terminals) {
    for (const code of destCodes) {
      const lane = terminal.lanes[code]
      if (!lane) continue
      revenue += lane.rate * lane.loads
      cost += lane.cost * lane.loads
      loads += lane.loads
      if (marginOf(lane) < 0) losing += 1
    }
  }
  return {
    loads,
    losing,
    margin: revenue === 0 ? 0 : ((revenue - cost) / revenue) * 100,
  }
}

export function isLosing(terminal: Terminal, destCodes: string[]) {
  return destCodes.some((code) => {
    const lane = terminal.lanes[code]
    return lane !== null && lane !== undefined && marginOf(lane) < 0
  })
}

export const TIER_META: Record<
  MarginTier,
  { label: string; cell: string; dot: string; text: string }
> = {
  "deep-loss": {
    label: "Deep loss",
    cell: "bg-destructive/18 text-destructive",
    dot: "bg-destructive",
    text: "text-destructive",
  },
  loss: {
    label: "Loss",
    cell: "bg-destructive/8 text-destructive",
    dot: "bg-destructive/60",
    text: "text-destructive",
  },
  thin: {
    label: "Thin",
    cell: "bg-warning/10 text-warning-foreground",
    dot: "bg-warning",
    text: "text-warning-foreground",
  },
  healthy: {
    label: "Healthy",
    cell: "bg-success/8 text-success-foreground",
    dot: "bg-success/70",
    text: "text-success-foreground",
  },
  strong: {
    label: "Strong",
    cell: "bg-success/18 text-success-foreground",
    dot: "bg-success",
    text: "text-success-foreground",
  },
}

export function formatEur(value: number) {
  return `€${Math.round(value)}`
}

export function formatPercent(value: number, digits = 1) {
  return `${value.toFixed(digits)}%`
}

export function formatLoads(value: number) {
  return value.toLocaleString("en-US")
}
