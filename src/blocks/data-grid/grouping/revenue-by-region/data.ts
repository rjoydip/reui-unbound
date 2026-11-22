export type HealthState = "Healthy" | "Watch" | "At Risk"

export interface RegionAccount {
  id: string
  region: string
  name: string
  initials: string
  tone: string
  owner: string
  health: HealthState
  arr: number
  nrr: number
  renewal: string
}

export interface RegionSummary {
  name: string
  count: number
  description: string
  arr: number
  nrr: number
  renewal: string
}

export const REGIONS: RegionSummary[] = [
  { name: "North America", count: 7, description: "US and Canada strategic accounts", arr: 2905000, nrr: 115, renewal: "Next Jun 30, 2026" },
  { name: "EMEA", count: 6, description: "Europe, Middle East, and Africa book", arr: 3495000, nrr: 109, renewal: "Next Jun 24, 2026" },
  { name: "APAC", count: 4, description: "Asia Pacific growth territory", arr: 1625000, nrr: 107, renewal: "Next Jun 27, 2026" },
  { name: "LATAM", count: 3, description: "Latin America emerging accounts", arr: 550000, nrr: 108, renewal: "Next Jun 22, 2026" },
]

export const ACCOUNTS: RegionAccount[] = [
  { id: "a-1", region: "North America", name: "Northwind Trading", initials: "NT", tone: "bg-blue-500/15 text-blue-600", owner: "Rina Holt", health: "Healthy", arr: 920000, nrr: 124, renewal: "Sep 14, 2026" },
  { id: "a-2", region: "North America", name: "Cedar Health Systems", initials: "CH", tone: "bg-purple-500/15 text-purple-600", owner: "Evren Blake", health: "Watch", arr: 760000, nrr: 103, renewal: "Jul 2, 2026" },
  { id: "a-3", region: "North America", name: "Vantage Robotics", initials: "VR", tone: "bg-teal-500/15 text-teal-600", owner: "Rina Holt", health: "Healthy", arr: 410000, nrr: 118, renewal: "Nov 21, 2026" },
  { id: "a-4", region: "North America", name: "Brightline Media", initials: "BM", tone: "bg-amber-500/15 text-amber-600", owner: "Mina Rowe", health: "At Risk", arr: 285000, nrr: 92, renewal: "Jun 30, 2026" },
  { id: "a-5", region: "North America", name: "Summit Analytics", initials: "SA", tone: "bg-red-500/15 text-red-600", owner: "Evren Blake", health: "Healthy", arr: 138000, nrr: 129, renewal: "Oct 9, 2026" },
  { id: "a-6", region: "North America", name: "Banyan AgriTech", initials: "BA", tone: "bg-emerald-500/15 text-emerald-600", owner: "Sora Min", health: "Healthy", arr: 124000, nrr: 132, renewal: "Nov 12, 2026" },
  { id: "a-7", region: "North America", name: "Andes Fintech", initials: "AF", tone: "bg-sky-500/15 text-sky-600", owner: "Noor Albright", health: "Healthy", arr: 268000, nrr: 122, renewal: "Oct 30, 2026" },
  { id: "a-8", region: "EMEA", name: "Helvetia Pay", initials: "HP", tone: "bg-blue-500/15 text-blue-600", owner: "Mina Rowe", health: "Watch", arr: 900000, nrr: 104, renewal: "Aug 12, 2026" },
  { id: "a-9", region: "EMEA", name: "Nordwind Energy", initials: "NE", tone: "bg-purple-500/15 text-purple-600", owner: "Rina Holt", health: "Healthy", arr: 800000, nrr: 112, renewal: "Sep 4, 2026" },
  { id: "a-10", region: "EMEA", name: "Albion Retail Group", initials: "AR", tone: "bg-emerald-500/15 text-emerald-600", owner: "Evren Blake", health: "Healthy", arr: 700000, nrr: 110, renewal: "Oct 20, 2026" },
  { id: "a-11", region: "EMEA", name: "Lumen Telecom", initials: "LT", tone: "bg-amber-500/15 text-amber-700", owner: "Sora Min", health: "At Risk", arr: 500000, nrr: 96, renewal: "Jul 18, 2026" },
  { id: "a-12", region: "EMEA", name: "Castellan Bank", initials: "CB", tone: "bg-red-500/15 text-red-700", owner: "Noor Albright", health: "Watch", arr: 350000, nrr: 101, renewal: "Aug 30, 2026" },
  { id: "a-13", region: "EMEA", name: "Meridian Media", initials: "MM", tone: "bg-amber-500/15 text-amber-600", owner: "Mina Rowe", health: "Healthy", arr: 245000, nrr: 118, renewal: "Nov 8, 2026" },
  { id: "a-14", region: "APAC", name: "Sakura Systems", initials: "SS", tone: "bg-pink-500/15 text-pink-600", owner: "Sora Min", health: "Healthy", arr: 600000, nrr: 113, renewal: "Sep 22, 2026" },
  { id: "a-15", region: "APAC", name: "Pacific Grid", initials: "PG", tone: "bg-cyan-500/15 text-cyan-600", owner: "Rina Holt", health: "Watch", arr: 450000, nrr: 102, renewal: "Oct 11, 2026" },
  { id: "a-16", region: "APAC", name: "Southern Cross", initials: "SC", tone: "bg-indigo-500/15 text-indigo-600", owner: "Evren Blake", health: "Healthy", arr: 350000, nrr: 109, renewal: "Nov 2, 2026" },
  { id: "a-17", region: "APAC", name: "Lotus Commerce", initials: "LC", tone: "bg-emerald-500/15 text-emerald-600", owner: "Noor Albright", health: "At Risk", arr: 225000, nrr: 94, renewal: "Jul 29, 2026" },
  { id: "a-18", region: "LATAM", name: "Andina Foods", initials: "AF", tone: "bg-lime-500/15 text-lime-700", owner: "Mina Rowe", health: "Healthy", arr: 250000, nrr: 112, renewal: "Sep 7, 2026" },
  { id: "a-19", region: "LATAM", name: "Cobre Mining", initials: "CM", tone: "bg-stone-500/15 text-stone-600", owner: "Sora Min", health: "Watch", arr: 180000, nrr: 103, renewal: "Oct 3, 2026" },
  { id: "a-20", region: "LATAM", name: "Verde Mobility", initials: "VM", tone: "bg-green-500/15 text-green-600", owner: "Noor Albright", health: "Healthy", arr: 120000, nrr: 109, renewal: "Nov 16, 2026" },
]

export const HEALTH_VARIANT: Record<HealthState, "success-light" | "warning-light" | "destructive-light"> = {
  Healthy: "success-light",
  Watch: "warning-light",
  "At Risk": "destructive-light",
}
