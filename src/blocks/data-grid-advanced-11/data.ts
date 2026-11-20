export type NextBuy = "grow" | "hold" | "open" | "reduce" | "exit"

export type Category = "Footwear" | "Apparel" | "Accessories" | "Components"

export interface Factory {
  id: string
  name: string
  country: string
  flag: string
  category: Category
  rank: number
  /** null marks a factory that entered the ranking this quarter. */
  prevRank: number | null
  /** FOB spend, USD. */
  spend: number
  otif: number
  peerLow: number
  peerHigh: number
  defectRate: number
  leadTime: number
  nextBuy: NextBuy
  /** OTIF for the last four quarters, oldest first. */
  trend: number[]
  notes: string
}

export interface Thresholds {
  floor: number
  goal: number
}

export const QUARTERS = ["Q4 25", "Q1 26", "Q2 26", "Q3 26"]

export const CATEGORY_DEFAULTS: Record<Category, Thresholds> = {
  Footwear: { floor: 88, goal: 95 },
  Apparel: { floor: 90, goal: 96 },
  Accessories: { floor: 85, goal: 93 },
  Components: { floor: 87, goal: 94 },
}

export const NEXT_BUY_META: Record<
  NextBuy,
  { label: string; variant: "success-light" | "warning-light" | "destructive-light" | "invert-light"; hint: string }
> = {
  grow: {
    label: "Grow",
    variant: "success-light",
    hint: "Raise allocation and add a second line.",
  },
  hold: {
    label: "Hold",
    variant: "invert-light",
    hint: "Keep the current award and review next quarter.",
  },
  open: {
    label: "Open",
    variant: "invert-light",
    hint: "Qualify before awarding new volume.",
  },
  reduce: {
    label: "Reduce",
    variant: "warning-light",
    hint: "Shift volume to a stronger peer.",
  },
  exit: {
    label: "Exit",
    variant: "destructive-light",
    hint: "Wind down after current purchase orders.",
  },
}

const FOOTWEAR_PEER: [number, number] = [86, 98]
const APPAREL_PEER: [number, number] = [84, 97]
const ACCESSORY_PEER: [number, number] = [83, 96]
const COMPONENT_PEER: [number, number] = [87, 97]

export const FACTORIES: Factory[] = [
  {
    id: "lam-vien", name: "Lam Vien Footwear", country: "Vietnam",
    flag: "vn", category: "Footwear", rank: 1,
    prevRank: 1, spend: 3420000, otif: 95.2,
    peerLow: 89, peerHigh: 98, defectRate: 0.6,
    leadTime: 24, nextBuy: "grow", trend: [92.1, 93.4, 94.1, 95.2],
    notes: "Two new lines qualified in August. Capacity can absorb another 12% without a tooling spend.",
  },
  {
    id: "carolina-riverknit", name: "Carolina Riverknit", country: "United States",
    flag: "us", category: "Apparel", rank: 2,
    prevRank: 3, spend: 2050000, otif: 95.6,
    peerLow: 85, peerHigh: 97, defectRate: 0.8,
    leadTime: 18, nextBuy: "grow", trend: [93.2, 94.8, 95.1, 95.6],
    notes: "Nearshore mix keeps replenishment inside three weeks. The knitting line is the constraint.",
  },
  {
    id: "lule-shelter", name: "Lule Shelter Tech", country: "Sweden",
    flag: "se", category: "Footwear", rank: 3,
    prevRank: 7, spend: 1920000, otif: 83.6,
    peerLow: 84, peerHigh: 97, defectRate: 1.9,
    leadTime: 31, nextBuy: "grow", trend: [78.4, 80.1, 82.2, 83.6],
    notes: "Highest spend jump this quarter, but OTIF sits below the category floor. Confirm the new press is running before adding volume.",
  },
  {
    id: "hanse-harbor", name: "Hanse Harbor Apparel", country: "Germany",
    flag: "de", category: "Apparel", rank: 4,
    prevRank: 4, spend: 1760000, otif: 97.9,
    peerLow: 90, peerHigh: 98, defectRate: 0.4,
    leadTime: 21, nextBuy: "hold", trend: [97.1, 97.5, 98.2, 97.9],
    notes: "Most reliable apparel source. Price is 3% above peers, so the next award stays flat.",
  },
  {
    id: "nene-valley", name: "Nene Valley Footwear", country: "United Kingdom",
    flag: "gb", category: "Footwear", rank: 5,
    prevRank: 9, spend: 1610000, otif: 93.8,
    peerLow: 88, peerHigh: 97, defectRate: 1.1,
    leadTime: 26, nextBuy: "open", trend: [89.9, 91.2, 92.6, 93.8],
    notes: "Back in the top ten after a weak spring. Second source for the trail range is still unqualified.",
  },
  {
    id: "sinos-shoe", name: "Sinos Shoe Works", country: "Brazil",
    flag: "br", category: "Footwear", rank: 6,
    prevRank: 2, spend: 1590000, otif: 86.5,
    peerLow: 82, peerHigh: 95, defectRate: 2.2,
    leadTime: 38, nextBuy: "reduce", trend: [92.4, 90.1, 88.6, 86.5],
    notes: "Three quarters of decline. Customs delays in Santos added nine days to the last two shipments.",
  },
  {
    id: "busan-pack", name: "Busan Pack Works", country: "South Korea",
    flag: "kr", category: "Accessories", rank: 7,
    prevRank: 5, spend: 1540000, otif: 94.6,
    peerLow: 88, peerHigh: 97, defectRate: 0.9,
    leadTime: 27, nextBuy: "hold", trend: [95.8, 95.1, 94.9, 94.6],
    notes: "Stable bag programme. Freight consolidation with Osaka Weave cut landed cost by 4%.",
  },
  {
    id: "laurentian", name: "Laurentian Outerwear", country: "Canada",
    flag: "ca", category: "Apparel", rank: 8,
    prevRank: 6, spend: 1380000, otif: 81.4,
    peerLow: 80, peerHigh: 94, defectRate: 2.6,
    leadTime: 44, nextBuy: "exit", trend: [86.7, 84.2, 82.9, 81.4],
    notes: "Below the floor for two quarters and the only factory above the defect ceiling. Exit after the winter buy.",
  },
  {
    id: "brenta-sole", name: "Brenta Sole Lab", country: "Italy",
    flag: "it", category: "Components", rank: 9,
    prevRank: 10, spend: 1250000, otif: 99.1,
    peerLow: 92, peerHigh: 99, defectRate: 0.2,
    leadTime: 14, nextBuy: "grow", trend: [97.8, 98.2, 98.6, 99.1],
    notes: "Best OTIF in the network. Moulding capacity opens in January, ideal for the trail sole ramp.",
  },
  {
    id: "elix-trail", name: "Elix Trail Works", country: "Portugal",
    flag: "pt", category: "Footwear", rank: 10,
    prevRank: null, spend: 1210000, otif: 85.2,
    peerLow: 81, peerHigh: 94, defectRate: 1.7,
    leadTime: 29, nextBuy: "open", trend: [87.0, 86.2, 85.8, 85.2],
    notes: "New entrant from the Iberian sourcing sprint. Promising build quality, no peak-season track record yet.",
  },
  {
    id: "kilifi-knit", name: "Kilifi Knit Co", country: "Kenya",
    flag: "ke", category: "Apparel", rank: 11,
    prevRank: 8, spend: 1090000, otif: 90.8,
    peerLow: 86, peerHigh: 95, defectRate: 1.3,
    leadTime: 35, nextBuy: "reduce", trend: [94.1, 93.2, 92.0, 90.8],
    notes: "Air freight is carrying the season. Keep a smaller knit award until the sea schedule stabilises.",
  },
  {
    id: "mekong-trim", name: "Mekong Trim VN", country: "Vietnam",
    flag: "vn", category: "Components", rank: 12,
    prevRank: 14, spend: 980000, otif: 96.3,
    peerLow: 88, peerHigh: 98, defectRate: 0.5,
    leadTime: 22, nextBuy: "grow", trend: [94.9, 95.4, 95.8, 96.3],
    notes: "Trims and eyelets for three footwear lines. Awarded the recycled-metal programme in September.",
  },
  {
    id: "tatra-components", name: "Tatra Components", country: "Czechia",
    flag: "cz", category: "Components", rank: 13,
    prevRank: 12, spend: 910000, otif: 88.9,
    peerLow: 84, peerHigh: 95, defectRate: 1.4,
    leadTime: 25, nextBuy: "hold", trend: [91.2, 90.4, 89.5, 88.9],
    notes: "Injection tooling is reliable but the paint line keeps slipping. Hold volume through the winter.",
  },
  {
    id: "osaka-weave", name: "Osaka Weave", country: "Japan",
    flag: "jp", category: "Apparel", rank: 14,
    prevRank: 15, spend: 870000, otif: 97.1,
    peerLow: 89, peerHigh: 98, defectRate: 0.7,
    leadTime: 30, nextBuy: "hold", trend: [96.4, 96.7, 96.9, 97.1],
    notes: "Premium technical knits. Low volume by design; the mill only runs two looms for us.",
  },
  {
    id: "andes-fibers", name: "Andes Fibers", country: "Peru",
    flag: "pe", category: "Apparel", rank: 15,
    prevRank: 11, spend: 820000, otif: 84.7,
    peerLow: 80, peerHigh: 93, defectRate: 2.1,
    leadTime: 41, nextBuy: "open", trend: [89.6, 87.8, 86.1, 84.7],
    notes: "Alpaca blend quality is strong but delivery has slipped every month since the mill fire.",
  },
  {
    id: "ganges-leather", name: "Ganges Leather", country: "India",
    flag: "in", category: "Footwear", rank: 16,
    prevRank: 18, spend: 760000, otif: 91.5,
    peerLow: 85, peerHigh: 96, defectRate: 1.0,
    leadTime: 33, nextBuy: "grow", trend: [88.9, 90.1, 90.8, 91.5],
    notes: "Improving steadily after the tannery audit. Leather is chrome-free, a good fit for the 2027 line.",
  },
  {
    id: "baltic-zippers", name: "Baltic Zippers", country: "Lithuania",
    flag: "lt", category: "Components", rank: 17,
    prevRank: 16, spend: 710000, otif: 93.2,
    peerLow: 89, peerHigh: 97, defectRate: 0.8,
    leadTime: 19, nextBuy: "hold", trend: [92.6, 93.0, 93.4, 93.2],
    notes: "Short lead time covers our replenishment gap. No capacity for a larger award.",
  },
  {
    id: "caspian-textiles", name: "Caspian Textiles", country: "Türkiye",
    flag: "tr", category: "Accessories", rank: 18,
    prevRank: 13, spend: 680000, otif: 79.8,
    peerLow: 82, peerHigh: 94, defectRate: 2.8,
    leadTime: 36, nextBuy: "exit", trend: [86.4, 84.1, 81.9, 79.8],
    notes: "Two failed audits and the lowest OTIF in the network. Exit confirmed with sourcing.",
  },
  {
    id: "drava-rubber", name: "Drava Rubber", country: "Slovenia",
    flag: "si", category: "Components", rank: 19,
    prevRank: 17, spend: 650000, otif: 89.4,
    peerLow: 85, peerHigh: 96, defectRate: 1.6,
    leadTime: 20, nextBuy: "reduce", trend: [91.8, 90.7, 90.1, 89.4],
    notes: "Outsole compound is good, but two lots arrived out of spec. Split the award with Brenta.",
  },
  {
    id: "sula-threads", name: "Sula Threads", country: "Portugal",
    flag: "pt", category: "Accessories", rank: 20,
    prevRank: 20, spend: 610000, otif: 86.1,
    peerLow: 81, peerHigh: 95, defectRate: 1.8,
    leadTime: 28, nextBuy: "open", trend: [88.2, 87.4, 86.8, 86.1],
    notes: "Hats and small accessories. Volume is too small to justify a dedicated quality engineer.",
  },
]

export const MAX_SPEND = Math.max(...FACTORIES.map((factory) => factory.spend))

export function spendShare(factory: Factory) {
  return (factory.spend / MAX_SPEND) * 100
}

export function peerMedian(factory: Factory) {
  return (factory.peerLow + factory.peerHigh) / 2
}

export function movement(factory: Factory) {
  if (factory.prevRank === null) return { label: "New", delta: 0 }
  const delta = factory.prevRank - factory.rank
  if (delta === 0) return { label: "—", delta }
  return { label: `${delta > 0 ? "↑" : "↓"}${Math.abs(delta)}`, delta }
}

export function scoreOf(factory: Factory, thresholds: Thresholds) {
  if (factory.otif >= thresholds.goal) return "at-goal" as const
  if (factory.otif >= thresholds.floor) return "watch" as const
  return "below-floor" as const
}

export function categoryThresholds(thresholds: Record<Category, Thresholds>) {
  return thresholds
}

export function ruleChecks(factory: Factory, thresholds: Thresholds) {
  return [
    {
      label: "OTIF vs category floor",
      state:
        factory.otif >= thresholds.floor + 2
          ? ("pass" as const)
          : factory.otif >= thresholds.floor
            ? ("warn" as const)
            : ("fail" as const),
      detail: `${factory.otif.toFixed(1)}% against a ${thresholds.floor}% floor`,
    },
    {
      label: "Defect rate ceiling",
      state:
        factory.defectRate <= 1.2
          ? ("pass" as const)
          : factory.defectRate <= 1.8
            ? ("warn" as const)
            : ("fail" as const),
      detail: `${factory.defectRate.toFixed(1)}% parts rejected, ceiling 1.8%`,
    },
    {
      label: "Lead time",
      state:
        factory.leadTime <= 26
          ? ("pass" as const)
          : factory.leadTime <= 34
            ? ("warn" as const)
            : ("fail" as const),
      detail: `${factory.leadTime} days door to door, target 26`,
    },
    {
      label: "Social audit",
      state: factory.spend > 1500000 ? ("warn" as const) : ("pass" as const),
      detail:
        factory.spend > 1500000
          ? "Renewal due in Q1 2027 for the expanded site"
          : "Current through September 2027",
    },
  ]
}

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function formatUsd(amount: number) {
  return money.format(amount)
}

export function formatCompactUsd(amount: number) {
  return `$${(amount / 1_000_000).toFixed(2)}M`
}

export function average(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length
}
