export type StorePace = "ahead" | "on-track" | "behind"
export type StoreFormat = "Flagship" | "Standard" | "Outlet"
export type MetricKey = "sales" | "orders" | "customers" | "units" | "profit" | "returns"

export interface Store {
  id: string
  name: string
  city: string
  country: string
  countryCode: string
  format: StoreFormat
  manager: string
  sales: number
  salesLy: number
  orders: number
  ordersLy: number
  customers: number
  customersLy: number
  units: number
  unitsLy: number
  grossProfit: number
  returns: number
  returnsLy: number
  goal: number
  pace: StorePace
  /** Deterministic wobble for the 24-month series. */
  seed: number
}

/** Fixed demo clock: October 2026 trading period. */
export const PERIODS = [
  { value: "2026-08", label: "Aug 2026", factor: 0.94 },
  { value: "2026-09", label: "Sep 2026", factor: 0.97 },
  { value: "2026-10", label: "Oct 2026", factor: 1 },
] as const

export const COUNTRIES = [
  "Australia",
  "Canada",
  "Germany",
  "United Kingdom",
  "United States",
]

export const FORMATS: StoreFormat[] = ["Flagship", "Standard", "Outlet"]

export const STORES: Store[] = [
  {
    id: "s1", name: "Flagship 3", city: "New York", country: "United States", countryCode: "us", format: "Flagship", manager: "Maya Chen",
    sales: 2800000, salesLy: 2560000, orders: 18970, ordersLy: 17290, customers: 4820, customersLy: 4610, units: 24300, unitsLy: 23500,
    grossProfit: 782000, returns: 5.3, returnsLy: 5.0, goal: 2720000, pace: "ahead", seed: 3,
  },
  {
    id: "s2", name: "Portland Pearl", city: "Portland", country: "United States", countryCode: "us", format: "Standard", manager: "Alex Rivera",
    sales: 1020000, salesLy: 976000, orders: 6656, ordersLy: 6410, customers: 1840, customersLy: 1790, units: 8200, unitsLy: 8050,
    grossProfit: 280000, returns: 5.6, returnsLy: 5.5, goal: 1010000, pace: "on-track", seed: 7,
  },
  {
    id: "s3", name: "Denver LoDo", city: "Denver", country: "United States", countryCode: "us", format: "Standard", manager: "Priya Shah",
    sales: 859000, salesLy: 808000, orders: 6176, ordersLy: 6270, customers: 1550, customersLy: 1580, units: 7600, unitsLy: 7500,
    grossProfit: 231000, returns: 5.4, returnsLy: 5.2, goal: 845000, pace: "on-track", seed: 11,
  },
  {
    id: "s4", name: "Chicago West Loop", city: "Chicago", country: "United States", countryCode: "us", format: "Standard", manager: "Jordan Blake",
    sales: 923000, salesLy: 747000, orders: 6138, ordersLy: 4710, customers: 1640, customersLy: 1490, units: 7900, unitsLy: 7200,
    grossProfit: 252000, returns: 4.9, returnsLy: 5.1, goal: 870000, pace: "ahead", seed: 5,
  },
  {
    id: "s5", name: "Seattle Ballard", city: "Seattle", country: "United States", countryCode: "us", format: "Standard", manager: "Sam Okafor",
    sales: 401000, salesLy: 408000, orders: 3214, ordersLy: 3400, customers: 990, customersLy: 1010, units: 3600, unitsLy: 3700,
    grossProfit: 104000, returns: 5.8, returnsLy: 5.4, goal: 425000, pace: "behind", seed: 13,
  },
  {
    id: "s6", name: "Miami Wynwood", city: "Miami", country: "United States", countryCode: "us", format: "Outlet", manager: "Riley Shaw",
    sales: 139000, salesLy: 161000, orders: 1203, ordersLy: 1310, customers: 410, customersLy: 440, units: 1400, unitsLy: 1600,
    grossProfit: 33000, returns: 6.2, returnsLy: 5.7, goal: 166000, pace: "behind", seed: 17,
  },
  {
    id: "s7", name: "Austin Eastside", city: "Austin", country: "United States", countryCode: "us", format: "Standard", manager: "Taylor Reed",
    sales: 347000, salesLy: 293000, orders: 2945, ordersLy: 2540, customers: 870, customersLy: 760, units: 2600, unitsLy: 2300,
    grossProfit: 95000, returns: 4.9, returnsLy: 5.3, goal: 330000, pace: "ahead", seed: 19,
  },
  {
    id: "s8", name: "Boulder Pearl Street", city: "Boulder", country: "United States", countryCode: "us", format: "Standard", manager: "Casey Nolan",
    sales: 276000, salesLy: 271000, orders: 2233, ordersLy: 2180, customers: 690, customersLy: 680, units: 2100, unitsLy: 2080,
    grossProfit: 74000, returns: 5.3, returnsLy: 5.3, goal: 273000, pace: "on-track", seed: 23,
  },
  {
    id: "s9", name: "Salt Lake Sugar House", city: "Salt Lake City", country: "United States", countryCode: "us", format: "Standard", manager: "Dana Wolfe",
    sales: 254000, salesLy: 251000, orders: 2092, ordersLy: 2030, customers: 630, customersLy: 620, units: 1950, unitsLy: 1900,
    grossProfit: 67000, returns: 6.1, returnsLy: 5.9, goal: 258000, pace: "on-track", seed: 29,
  },
  {
    id: "s10", name: "Minneapolis North Loop", city: "Minneapolis", country: "United States", countryCode: "us", format: "Standard", manager: "Owen Price",
    sales: 254000, salesLy: 234000, orders: 2209, ordersLy: 1930, customers: 680, customersLy: 620, units: 2000, unitsLy: 1860,
    grossProfit: 69000, returns: 6.1, returnsLy: 6.0, goal: 246000, pace: "ahead", seed: 31,
  },
  {
    id: "s11", name: "Atlanta Inman Park", city: "Atlanta", country: "United States", countryCode: "us", format: "Standard", manager: "Jamie Cross",
    sales: 250000, salesLy: 219000, orders: 2039, ordersLy: 1900, customers: 620, customersLy: 590, units: 1880, unitsLy: 1760,
    grossProfit: 66000, returns: 6.6, returnsLy: 6.2, goal: 248000, pace: "on-track", seed: 37,
  },
  {
    id: "s12", name: "Boston Seaport", city: "Boston", country: "United States", countryCode: "us", format: "Standard", manager: "Ines Duarte",
    sales: 306000, salesLy: 303000, orders: 2585, ordersLy: 2500, customers: 760, customersLy: 750, units: 2300, unitsLy: 2280,
    grossProfit: 82000, returns: 6.1, returnsLy: 6.0, goal: 312000, pace: "on-track", seed: 41,
  },
  {
    id: "s13", name: "Outlet 4", city: "Orlando", country: "United States", countryCode: "us", format: "Outlet", manager: "Bruno Alves",
    sales: 834000, salesLy: 842000, orders: 9857, ordersLy: 9810, customers: 2410, customersLy: 2400, units: 11200, unitsLy: 11100,
    grossProfit: 201000, returns: 8.3, returnsLy: 8.1, goal: 884000, pace: "behind", seed: 43,
  },
  {
    id: "s14", name: "Woodburn Outlet", city: "Woodburn", country: "United States", countryCode: "us", format: "Outlet", manager: "Alice Monroe",
    sales: 237000, salesLy: 264000, orders: 2825, ordersLy: 3010, customers: 720, customersLy: 760, units: 2700, unitsLy: 2900,
    grossProfit: 58000, returns: 9.0, returnsLy: 8.6, goal: 272000, pace: "behind", seed: 47,
  },
  {
    id: "s15", name: "Park City Outlet", city: "Park City", country: "United States", countryCode: "us", format: "Outlet", manager: "George Bell",
    sales: 194000, salesLy: 200000, orders: 2208, ordersLy: 2160, customers: 590, customersLy: 580, units: 2300, unitsLy: 2350,
    grossProfit: 49000, returns: 8.1, returnsLy: 8.0, goal: 205000, pace: "behind", seed: 53,
  },
  {
    id: "s16", name: "Orlando Vineland", city: "Orlando", country: "United States", countryCode: "us", format: "Outlet", manager: "Mia Rossi",
    sales: 217000, salesLy: 208000, orders: 2589, ordersLy: 2470, customers: 670, customersLy: 650, units: 2500, unitsLy: 2400,
    grossProfit: 54000, returns: 8.3, returnsLy: 8.1, goal: 215000, pace: "on-track", seed: 59,
  },
  {
    id: "s17", name: "Camarillo Outlet", city: "Camarillo", country: "United States", countryCode: "us", format: "Outlet", manager: "Lena Brandt",
    sales: 186000, salesLy: 192000, orders: 2235, ordersLy: 2300, customers: 570, customersLy: 590, units: 2200, unitsLy: 2280,
    grossProfit: 46000, returns: 7.8, returnsLy: 7.6, goal: 195000, pace: "behind", seed: 61,
  },
  {
    id: "s18", name: "Toronto Queen West", city: "Toronto", country: "Canada", countryCode: "ca", format: "Flagship", manager: "Erik Sund",
    sales: 1240000, salesLy: 1180000, orders: 9210, ordersLy: 8900, customers: 2640, customersLy: 2550, units: 10800, unitsLy: 10400,
    grossProfit: 318000, returns: 5.2, returnsLy: 5.1, goal: 1200000, pace: "on-track", seed: 67,
  },
  {
    id: "s19", name: "Berlin Mitte", city: "Berlin", country: "Germany", countryCode: "de", format: "Flagship", manager: "Lena Fox",
    sales: 1180000, salesLy: 1090000, orders: 8120, ordersLy: 7700, customers: 2300, customersLy: 2210, units: 9600, unitsLy: 9200,
    grossProfit: 301000, returns: 4.8, returnsLy: 5.0, goal: 1150000, pace: "ahead", seed: 71,
  },
  {
    id: "s20", name: "London Soho", city: "London", country: "United Kingdom", countryCode: "gb", format: "Flagship", manager: "Amara Okafor",
    sales: 1460000, salesLy: 1350000, orders: 9980, ordersLy: 9400, customers: 2810, customersLy: 2700, units: 11200, unitsLy: 10700,
    grossProfit: 384000, returns: 5.0, returnsLy: 5.2, goal: 1420000, pace: "ahead", seed: 73,
  },
  {
    id: "s21", name: "Sydney CBD", city: "Sydney", country: "Australia", countryCode: "au", format: "Flagship", manager: "Noah Williams",
    sales: 1090000, salesLy: 1020000, orders: 7860, ordersLy: 7500, customers: 2190, customersLy: 2100, units: 9400, unitsLy: 9100,
    grossProfit: 276000, returns: 5.5, returnsLy: 5.4, goal: 1080000, pace: "on-track", seed: 79,
  },
]

const SEASON = [0.86, 0.88, 0.92, 0.96, 0.99, 1.02, 1.05, 1.06, 1.01, 0.98, 1.04, 1.16]
const METRIC_SEED: Record<MetricKey, number> = {
  sales: 1,
  orders: 3,
  customers: 5,
  units: 7,
  profit: 9,
  returns: 11,
}

export const MONTH_ENDS = (() => {
  const end = new Date("2026-10-01T00:00:00Z")
  return Array.from({ length: 24 }, (_, index) => {
    const date = new Date(end)
    date.setUTCMonth(date.getUTCMonth() - (23 - index))
    return date
  })
})()

export const MONTH_LABELS = MONTH_ENDS.map((date) =>
  date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }),
)

/** 24 months of sales ending at the selected period's month. */
export function storeHistory(store: Store) {
  const base = store.sales / SEASON[9]
  const growth = Math.pow(store.sales / store.salesLy, 1 / 12)

  return MONTH_ENDS.map((_, index) => {
    const offset = index - 23
    const month = (9 + offset + 24) % 12
    const noise = 1 + (((store.seed + index * 7) % 10) - 4.5) / 100
    return Math.round(base * SEASON[month] * Math.pow(growth, offset) * noise)
  })
}

export function sparkFor(store: Store, metric: MetricKey) {
  const seed = METRIC_SEED[metric]
  return storeHistory(store)
    .slice(-12)
    .map(
      (value, index) =>
        value * (1 + (((store.seed + seed + index) % 7) - 3) / 100),
    )
}

export function goalProgress(store: Store, factor = 1) {
  return ((store.sales * factor) / store.goal) * 100
}

export function paceLabel(pace: StorePace) {
  return pace === "on-track" ? "On pace" : pace === "ahead" ? "Ahead" : "Behind"
}

export function delta(current: number, previous: number) {
  if (!previous) return 0
  return ((current - previous) / previous) * 100
}

export function formatDelta(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`
}

export function formatMoney(value: number) {
  if (value === 0) return "$0"
  if (Math.abs(value) >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`
  }
  return `$${Math.round(value / 1000)}K`
}

const countFormat = new Intl.NumberFormat("en-US")

export function formatCount(value: number) {
  return countFormat.format(Math.round(value))
}

export function formatPercent(value: number) {
  return `${value.toFixed(1)}%`
}
