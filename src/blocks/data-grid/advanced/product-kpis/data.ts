export type ProductState = "ok" | "no-sales" | "returned"

export type KpiStatus = "on-track" | "at-risk" | "off-track" | "no-sales" | "returned"

export interface Guardrails {
  /** Minimum revenue in dollars. */
  revenue: number
  /** Minimum gross margin percent. */
  margin: number
  /** Maximum allowed discount percent. */
  discount: number
}

export interface Product {
  id: string
  sku: string
  name: string
  category: string
  /** Revenue for the current period; null when the product did not sell. */
  revenue: number | null
  change: number | null
  profit: number | null
  margin: number
  discount: number
  /** Eight monthly revenue samples, in thousands. */
  history: number[]
  /** Twelve months of promotion state: 0 none, 1 promo, 2 promo at a loss. */
  promo: (0 | 1 | 2)[]
  /** Defaults to "ok" when omitted. */
  state?: ProductState
}

export const PROMO_MONTHS = [
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
]

export const DEFAULT_GUARDRAILS: Guardrails = {
  revenue: 150000,
  margin: 24,
  discount: 20,
}

const flatPromo = (): (0 | 1 | 2)[] => Array.from({ length: 12 }, () => 0)

export const PRODUCTS: Product[] = [
  {
    id: "p-5973",
    sku: "FW-5973",
    name: "Ridgeline Hiking Boot",
    category: "Footwear",
    revenue: 463700,
    change: 15.6,
    profit: 159300,
    margin: 34.4,
    discount: 12,
    history: [268, 281, 296, 312, 304, 348, 402, 464],
    promo: [0, 0, 1, 1, 0, 0, 1, 2, 0, 0, 0, 1],
  },
  {
    id: "p-1946",
    sku: "FW-1946",
    name: "Alpine Trekker Mid",
    category: "Footwear",
    revenue: 219300,
    change: -2.3,
    profit: 84300,
    margin: 30.1,
    discount: 8,
    history: [201, 214, 226, 231, 228, 222, 220, 219],
    promo: [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
  },
  {
    id: "p-6919",
    sku: "FW-6919",
    name: "Drift Winter Boot",
    category: "Footwear",
    revenue: null,
    change: null,
    profit: null,
    margin: 22.4,
    discount: 0,
    history: [0, 0, 0, 0, 0, 0, 0, 0],
    promo: flatPromo(),
    state: "no-sales",
  },
  {
    id: "p-2892",
    sku: "FW-2892",
    name: "Switchback Runner",
    category: "Footwear",
    revenue: 297600,
    change: 17.4,
    profit: -4700,
    margin: 12.8,
    discount: 34,
    history: [148, 166, 184, 206, 232, 268, 284, 298],
    promo: [1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2],
  },
  {
    id: "p-7865",
    sku: "FW-7865",
    name: "Cirque Approach",
    category: "Footwear",
    revenue: null,
    change: null,
    profit: null,
    margin: 27.6,
    discount: 0,
    history: [42, 38, 31, 22, 14, 6, 0, 0],
    promo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    state: "returned",
  },
  {
    id: "p-3838",
    sku: "FW-3838",
    name: "Tarn Camp Slide",
    category: "Footwear",
    revenue: 109500,
    change: -19.6,
    profit: 21300,
    margin: 19.4,
    discount: 26,
    history: [186, 174, 158, 146, 138, 124, 116, 110],
    promo: [1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1],
  },
  {
    id: "p-8811",
    sku: "AP-8811",
    name: "Trailhead Jacket",
    category: "Apparel",
    revenue: 406200,
    change: 81.7,
    profit: 107900,
    margin: 26.6,
    discount: 10,
    history: [142, 168, 196, 224, 262, 312, 362, 406],
    promo: [0, 1, 1, 0, 0, 1, 1, 2, 1, 0, 0, 0],
  },
  {
    id: "p-4764",
    sku: "AP-4764",
    name: "Coastline Shell",
    category: "Apparel",
    revenue: 190200,
    change: 62.5,
    profit: -15900,
    margin: 14.2,
    discount: 31,
    history: [88, 96, 112, 128, 148, 166, 178, 190],
    promo: [2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 2],
  },
  {
    id: "p-9757",
    sku: "AP-9757",
    name: "Alpine Fleece",
    category: "Apparel",
    revenue: null,
    change: null,
    profit: null,
    margin: 23.8,
    discount: 0,
    history: [0, 0, 0, 0, 0, 0, 0, 0],
    promo: flatPromo(),
    state: "no-sales",
  },
  {
    id: "p-5730",
    sku: "AP-5730",
    name: "Bluff Hike Pant",
    category: "Apparel",
    revenue: 113300,
    change: 46.3,
    profit: 24900,
    margin: 22,
    discount: 15,
    history: [58, 64, 72, 82, 88, 96, 104, 113],
    promo: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  },
  {
    id: "p-2210",
    sku: "AP-2210",
    name: "Summit Quilted Vest",
    category: "Apparel",
    revenue: 248700,
    change: 8.2,
    profit: 61800,
    margin: 24.8,
    discount: 18,
    history: [204, 212, 224, 230, 238, 244, 246, 249],
    promo: [0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  },
  {
    id: "p-3391",
    sku: "AP-3391",
    name: "Basalt Trail Short",
    category: "Apparel",
    revenue: 172400,
    change: -4.4,
    profit: 41200,
    margin: 23.9,
    discount: 22,
    history: [198, 194, 188, 184, 180, 178, 175, 172],
    promo: [1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1],
  },
  {
    id: "p-8123",
    sku: "AP-8123",
    name: "Meridian Rain Shell",
    category: "Apparel",
    revenue: 356800,
    change: 12.8,
    profit: 94800,
    margin: 26.6,
    discount: 16,
    history: [262, 278, 296, 312, 322, 336, 348, 357],
    promo: [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  },
  {
    id: "p-6640",
    sku: "AP-6640",
    name: "Granite Fleece Hoodie",
    category: "Apparel",
    revenue: 284500,
    change: 6.1,
    profit: 74600,
    margin: 26.2,
    discount: 20,
    history: [238, 246, 258, 264, 268, 274, 280, 284],
    promo: [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  },
  {
    id: "p-4402",
    sku: "AP-4402",
    name: "Canyon Down Parka",
    category: "Apparel",
    revenue: 528900,
    change: 9.7,
    profit: 174500,
    margin: 33,
    discount: 9,
    history: [412, 434, 452, 470, 488, 502, 516, 529],
    promo: [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  },
  {
    id: "p-7018",
    sku: "AP-7018",
    name: "Rapids River Sandal",
    category: "Footwear",
    revenue: 96500,
    change: -28.4,
    profit: 12400,
    margin: 12.9,
    discount: 28,
    history: [168, 152, 136, 124, 116, 108, 102, 96],
    promo: [2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1],
  },
  {
    id: "p-9155",
    sku: "AP-9155",
    name: "Ridge Merino Sock 3pk",
    category: "Accessories",
    revenue: 64200,
    change: 38.2,
    profit: 20500,
    margin: 31.9,
    discount: 6,
    history: [28, 33, 38, 44, 49, 54, 59, 64],
    promo: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  },
  {
    id: "p-2204",
    sku: "AP-2204",
    name: "Switchback Trail Cap",
    category: "Accessories",
    revenue: 41800,
    change: 4.4,
    profit: 11200,
    margin: 26.8,
    discount: 14,
    history: [36, 37, 38, 38, 39, 40, 41, 42],
    promo: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  },
  {
    id: "p-3309",
    sku: "AP-3309",
    name: "Nightfall Beanie",
    category: "Accessories",
    revenue: 38600,
    change: -8.1,
    profit: 9800,
    margin: 25.4,
    discount: 12,
    history: [47, 46, 44, 43, 42, 40, 39, 39],
    promo: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  },
  {
    id: "p-5527",
    sku: "AP-5527",
    name: "Cirque Guide Glove",
    category: "Accessories",
    revenue: 72400,
    change: 21.3,
    profit: 21600,
    margin: 29.8,
    discount: 17,
    history: [38, 42, 47, 52, 58, 63, 68, 72],
    promo: [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  },
]

export const STATUS_META: Record<
  KpiStatus,
  {
    label: string
    variant:
      | "success-light"
      | "warning-light"
      | "destructive-light"
      | "invert-light"
  }
> = {
  "on-track": { label: "On Track", variant: "success-light" },
  "at-risk": { label: "At Risk", variant: "warning-light" },
  "off-track": { label: "Off Track", variant: "destructive-light" },
  "no-sales": { label: "No Sales", variant: "invert-light" },
  returned: { label: "Returned", variant: "invert-light" },
}

export interface Score {
  status: KpiStatus
  met: number
  flags: boolean[]
}

/** Re-scores a product against the live guardrails. */
export function scoreProduct(product: Product, guardrails: Guardrails): Score {
  if (product.state && product.state !== "ok") {
    return {
      status: product.state === "returned" ? "returned" : "no-sales",
      met: 0,
      flags: [false, false, false],
    }
  }

  const flags = [
    (product.revenue ?? 0) >= guardrails.revenue,
    product.margin >= guardrails.margin,
    product.discount <= guardrails.discount,
  ]
  const met = flags.filter(Boolean).length
  return {
    status: met === 3 ? "on-track" : met === 2 ? "at-risk" : "off-track",
    met,
    flags,
  }
}

/** Deterministic channel split for the sheet's mini bars. */
export function marketShare(product: Product) {
  if (product.state) {
    return [
      { channel: "Own store", share: 0 },
      { channel: "Marketplace", share: 0 },
      { channel: "Wholesale", share: 0 },
    ]
  }
  const seed = product.sku
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0)
  const own = 28 + (seed % 26)
  const marketplace = 20 + ((seed * 7) % 20)
  return [
    { channel: "Own store", share: own },
    { channel: "Marketplace", share: marketplace },
    { channel: "Wholesale", share: 100 - own - marketplace },
  ]
}

export function formatCompactMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value)
}
