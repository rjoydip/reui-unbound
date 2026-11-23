export type RegionKey = "americas" | "emea" | "apac" | "latam"

export interface Region {
  key: RegionKey
  label: string
  dot: string
  tint: string
}

export const REGIONS: Region[] = [
  { key: "americas", label: "Americas", dot: "bg-info", tint: "bg-info/8" },
  { key: "emea", label: "EMEA", dot: "bg-purple-500", tint: "bg-purple-500/8" },
  { key: "apac", label: "APAC", dot: "bg-success", tint: "bg-success/8" },
  { key: "latam", label: "LATAM", dot: "bg-warning", tint: "bg-warning/8" },
]

export interface StoreCosts {
  cogs: number
  payroll: number
  occupancy: number
  marketing: number
  other: number
}

export interface Store {
  id: string
  name: string
  city: string
  country: string
  region: RegionKey
  format: "Flagship" | "Standard"
  sales: number
  plan: number
  profit: number
  margin: number
  yoy: number
  rank: number
  monthly: number[]
  costs: StoreCosts
}

export const MONTHS = [
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
]

export const FY_LABEL = "FY26, Oct 2025 to Sep 2026"

const COST_RATES = {
  cogs: 0.38,
  payroll: 0.16,
  occupancy: 0.08,
  marketing: 0.06,
}

function makeStore(
  input: Omit<Store, "monthly" | "costs" | "margin" | "id"> & { seed: number },
): Store {
  const { seed, ...store } = input
  const margin = (store.profit / store.sales) * 100
  const committed =
    store.sales *
    (COST_RATES.cogs +
      COST_RATES.payroll +
      COST_RATES.occupancy +
      COST_RATES.marketing)
  const costs: StoreCosts = {
    cogs: Math.round(store.sales * COST_RATES.cogs),
    payroll: Math.round(store.sales * COST_RATES.payroll),
    occupancy: Math.round(store.sales * COST_RATES.occupancy),
    marketing: Math.round(store.sales * COST_RATES.marketing),
    other: Math.round(store.sales - store.profit - committed),
  }
  const base = store.sales / MONTHS.length
  const monthly = MONTHS.map((_, index) =>
    Math.round(
      base *
        (1 +
          ((index - 3.5) * store.yoy) / 800 +
          Math.sin((index + seed) * 0.9) * 0.04),
    ),
  )

  return {
    ...store,
    id: store.name.toLowerCase().replace(/[^a-z]+/g, "-"),
    margin,
    costs,
    monthly,
  }
}

export const STORES: Store[] = [
  makeStore({
    seed: 1,
    name: "Portland Pearl",
    city: "Portland",
    country: "US",
    region: "americas",
    format: "Flagship",
    sales: 12_600_000,
    plan: 12_200_000,
    profit: 3_040_000,
    yoy: 7.7,
    rank: 1,
  }),
  makeStore({
    seed: 2,
    name: "Vancouver Gastown",
    city: "Vancouver",
    country: "CA",
    region: "americas",
    format: "Flagship",
    sales: 9_840_000,
    plan: 9_500_000,
    profit: 1_970_000,
    yoy: 6.8,
    rank: 3,
  }),
  makeStore({
    seed: 3,
    name: "Seattle Ballard",
    city: "Seattle",
    country: "US",
    region: "americas",
    format: "Standard",
    sales: 4_920_000,
    plan: 4_750_000,
    profit: 876_000,
    yoy: 6.7,
    rank: 5,
  }),
  makeStore({
    seed: 4,
    name: "Austin Eastside",
    city: "Austin",
    country: "US",
    region: "americas",
    format: "Standard",
    sales: 4_050_000,
    plan: 3_720_000,
    profit: 709_000,
    yoy: 15.1,
    rank: 7,
  }),
  makeStore({
    seed: 5,
    name: "London Seven Dials",
    city: "London",
    country: "GB",
    region: "emea",
    format: "Flagship",
    sales: 10_900_000,
    plan: 11_900_000,
    profit: -425_000,
    yoy: -4.6,
    rank: 28,
  }),
  makeStore({
    seed: 6,
    name: "Munich Glockenbach",
    city: "Munich",
    country: "DE",
    region: "emea",
    format: "Flagship",
    sales: 8_720_000,
    plan: 8_900_000,
    profit: 1_660_000,
    yoy: 7.0,
    rank: 4,
  }),
  makeStore({
    seed: 7,
    name: "Paris Marais",
    city: "Paris",
    country: "FR",
    region: "emea",
    format: "Standard",
    sales: 4_360_000,
    plan: 4_240_000,
    profit: 385_000,
    yoy: 5.8,
    rank: 13,
  }),
  makeStore({
    seed: 8,
    name: "Manchester Ancoats",
    city: "Manchester",
    country: "GB",
    region: "emea",
    format: "Standard",
    sales: 3_940_000,
    plan: 3_780_000,
    profit: 631_000,
    yoy: 7.7,
    rank: 9,
  }),
  makeStore({
    seed: 9,
    name: "Tokyo Shibuya",
    city: "Tokyo",
    country: "JP",
    region: "apac",
    format: "Flagship",
    sales: 11_400_000,
    plan: 10_800_000,
    profit: 2_110_000,
    yoy: 10.0,
    rank: 2,
  }),
  makeStore({
    seed: 10,
    name: "Osaka Umeda",
    city: "Osaka",
    country: "JP",
    region: "apac",
    format: "Standard",
    sales: 4_480_000,
    plan: 4_310_000,
    profit: 704_000,
    yoy: 7.4,
    rank: 8,
  }),
  makeStore({
    seed: 11,
    name: "Seoul Hongdae",
    city: "Seoul",
    country: "KR",
    region: "apac",
    format: "Standard",
    sales: 3_620_000,
    plan: 3_400_000,
    profit: 512_000,
    yoy: 9.2,
    rank: 11,
  }),
  makeStore({
    seed: 12,
    name: "Melbourne Fitzroy",
    city: "Melbourne",
    country: "AU",
    region: "apac",
    format: "Standard",
    sales: 3_180_000,
    plan: 3_050_000,
    profit: 447_000,
    yoy: 4.1,
    rank: 15,
  }),
  makeStore({
    seed: 13,
    name: "Mexico Roma Norte",
    city: "Mexico City",
    country: "MX",
    region: "latam",
    format: "Flagship",
    sales: 6_900_000,
    plan: 6_400_000,
    profit: 1_120_000,
    yoy: 12.4,
    rank: 6,
  }),
  makeStore({
    seed: 14,
    name: "Sao Paulo Pinheiros",
    city: "Sao Paulo",
    country: "BR",
    region: "latam",
    format: "Flagship",
    sales: 5_700_000,
    plan: 5_900_000,
    profit: 620_000,
    yoy: -1.8,
    rank: 12,
  }),
  makeStore({
    seed: 15,
    name: "Bogota Chapinero",
    city: "Bogota",
    country: "CO",
    region: "latam",
    format: "Standard",
    sales: 2_950_000,
    plan: 2_750_000,
    profit: 361_000,
    yoy: 8.6,
    rank: 16,
  }),
  makeStore({
    seed: 16,
    name: "Santiago Providencia",
    city: "Santiago",
    country: "CL",
    region: "latam",
    format: "Standard",
    sales: 2_400_000,
    plan: 2_550_000,
    profit: -86_000,
    yoy: -3.2,
    rank: 24,
  }),
]

export function regionLabel(key: RegionKey) {
  return REGIONS.find((region) => region.key === key)?.label ?? key
}

export function regionMeta(key: RegionKey) {
  return REGIONS.find((region) => region.key === key) ?? REGIONS[0]
}

export interface RegionSummary {
  key: RegionKey | "all"
  label: string
  stores: number
  sales: number
  plan: number
  profit: number
  margin: number
  yoy: number
  lossMaking: number
  attainment: number
}

export function summarize(stores: Store[], key: RegionKey | "all"): RegionSummary {
  const sales = stores.reduce((sum, store) => sum + store.sales, 0)
  const plan = stores.reduce((sum, store) => sum + store.plan, 0)
  const profit = stores.reduce((sum, store) => sum + store.profit, 0)
  const weightedYoy = stores.reduce(
    (sum, store) => sum + store.yoy * store.sales,
    0,
  )

  return {
    key,
    label: key === "all" ? "All Regions" : regionLabel(key),
    stores: stores.length,
    sales,
    plan,
    profit,
    margin: sales === 0 ? 0 : (profit / sales) * 100,
    yoy: sales === 0 ? 0 : weightedYoy / sales,
    lossMaking: stores.filter((store) => store.profit < 0).length,
    attainment: plan === 0 ? 0 : (sales / plan) * 100,
  }
}

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function formatUsd(amount: number) {
  return money.format(amount)
}

export function formatCompact(amount: number) {
  const abs = Math.abs(amount)
  if (abs >= 1_000_000)
    return `${amount < 0 ? "-" : ""}$${(abs / 1_000_000).toFixed(2)}M`
  if (abs >= 1_000)
    return `${amount < 0 ? "-" : ""}$${(abs / 1_000).toFixed(0)}K`
  return money.format(amount)
}

export function formatPercent(value: number, digits = 0) {
  return `${value > 0 ? "+" : ""}${value.toFixed(digits)}%`
}

export function attainment(store: Store) {
  return (store.sales / store.plan) * 100
}

export function storesByRegion(stores: Store[]) {
  return REGIONS.map((region) => ({
    region,
    stores: stores.filter((store) => store.region === region.key),
  })).filter((group) => group.stores.length > 0)
}
