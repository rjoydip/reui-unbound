export type Region = "us-east" | "us-west" | "eu-central" | "ap-south"

export interface RateLine {
  id: string
  product: string
  list: number
  discount: number
  commit: number
  usage: number
  monthly: number
  renews: string
  status: "Active" | "Expiring"
  region: Region
}

export const AS_OF = new Date(2026, 8, 24)

export const REGION_LABEL: Record<Region, string> = {
  "us-east": "US East",
  "us-west": "US West",
  "eu-central": "EU Central",
  "ap-south": "AP South",
}

export const REGION_UPLIFT: Record<Region, number> = {
  "us-east": 1,
  "us-west": 1.04,
  "eu-central": 1.08,
  "ap-south": 0.94,
}

export const RATE_LINES: RateLine[] = [
  {
    id: "sku-01",
    product: "Standard Compute",
    list: 0.05,
    discount: 28,
    commit: 186420,
    usage: 92,
    monthly: 6711.12,
    renews: "Mar 1, 2028",
    status: "Active",
    region: "us-east",
  },
  {
    id: "sku-02",
    product: "Memory Optimized",
    list: 0.0625,
    discount: 28,
    commit: 64000,
    usage: 91,
    monthly: 3110.4,
    renews: "Jun 15, 2027",
    status: "Active",
    region: "us-east",
  },
  {
    id: "sku-03",
    product: "GPU L4",
    list: 0.8,
    discount: 19.3,
    commit: 3612,
    usage: 108,
    monthly: 2333.35,
    renews: "Jan 31, 2027",
    status: "Active",
    region: "us-west",
  },
  {
    id: "sku-04",
    product: "Block Storage SSD",
    list: 0.1,
    discount: 23.5,
    commit: 48000,
    usage: 96,
    monthly: 3672,
    renews: "Mar 1, 2028",
    status: "Active",
    region: "us-east",
  },
  {
    id: "sku-05",
    product: "Object Storage",
    list: 0.025,
    discount: 32,
    commit: 418600,
    usage: 108,
    monthly: 7116.2,
    renews: "Mar 1, 2028",
    status: "Active",
    region: "us-east",
  },
  {
    id: "sku-06",
    product: "Internet Egress",
    list: 0.09,
    discount: 25,
    commit: 36480,
    usage: 58,
    monthly: 2757.89,
    renews: "Oct 15, 2026",
    status: "Active",
    region: "eu-central",
  },
  {
    id: "sku-07",
    product: "Managed Postgres",
    list: 0.125,
    discount: 22.4,
    commit: 21900,
    usage: 90,
    monthly: 2128.68,
    renews: "Jun 15, 2027",
    status: "Active",
    region: "eu-central",
  },
  {
    id: "sku-08",
    product: "Redis Cache",
    list: 0.02,
    discount: 25,
    commit: 146000,
    usage: 60,
    monthly: 2190,
    renews: "Feb 28, 2027",
    status: "Active",
    region: "us-east",
  },
  {
    id: "sku-09",
    product: "Inference Tokens",
    list: 3,
    discount: 23.5,
    commit: 1850,
    usage: 116,
    monthly: 4245.75,
    renews: "Jan 31, 2027",
    status: "Active",
    region: "us-west",
  },
  {
    id: "sku-10",
    product: "Function Calls",
    list: 0.2,
    discount: 5,
    commit: 5400,
    usage: 55,
    monthly: 1149.12,
    renews: "Nov 2, 2026",
    status: "Expiring",
    region: "ap-south",
  },
  {
    id: "sku-11",
    product: "Load Balancer",
    list: 0.03,
    discount: 18,
    commit: 40200,
    usage: 87,
    monthly: 800,
    renews: "Dec 12, 2026",
    status: "Expiring",
    region: "eu-central",
  },
  {
    id: "sku-12",
    product: "CDN Bandwidth",
    list: 0.045,
    discount: 26,
    commit: 91000,
    usage: 74,
    monthly: 1500,
    renews: "Aug 9, 2027",
    status: "Active",
    region: "us-west",
  },
  {
    id: "sku-13",
    product: "Queue Throughput",
    list: 0.008,
    discount: 21,
    commit: 620000,
    usage: 64,
    monthly: 900,
    renews: "Apr 4, 2027",
    status: "Active",
    region: "us-east",
  },
  {
    id: "sku-14",
    product: "Vault Secrets",
    list: 0.15,
    discount: 30,
    commit: 12400,
    usage: 41,
    monthly: 1200,
    renews: "Nov 28, 2026",
    status: "Expiring",
    region: "eu-central",
  },
  {
    id: "sku-15",
    product: "Tracing Spans",
    list: 0.002,
    discount: 14,
    commit: 2100000,
    usage: 118,
    monthly: 1200,
    renews: "Jun 1, 2027",
    status: "Active",
    region: "ap-south",
  },
  {
    id: "sku-16",
    product: "Edge Functions",
    list: 0.06,
    discount: 20,
    commit: 54000,
    usage: 83,
    monthly: 845.99,
    renews: "Sep 19, 2027",
    status: "Active",
    region: "us-west",
  },
]

export function netRate(line: RateLine) {
  return line.list * (1 - line.discount / 100)
}

const rate = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 4,
  maximumFractionDigits: 4,
})

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export function formatRate(value: number) {
  return rate.format(value)
}

export function formatMonthly(value: number) {
  return money.format(value)
}

export function totals(lines: RateLine[]) {
  const monthly = lines.reduce((sum, line) => sum + line.monthly, 0)
  const discount =
    lines.length === 0
      ? 0
      : lines.reduce((sum, line) => sum + line.discount, 0) / lines.length

  return { monthly, discount }
}

export function daysUntil(date: string) {
  const target = new Date(date)
  return Math.round((target.getTime() - AS_OF.getTime()) / 86_400_000)
}
