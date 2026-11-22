export type ShipmentStatus = "Delayed" | "Customs Hold" | "Exception"
export type Priority = "Critical" | "High" | "Medium"
export type Issue = "Weather" | "Admin" | "Capacity" | "Address" | "Damage"
export type Carrier =
  | "BlueLine Freight"
  | "AeroLink"
  | "MetroShip"
  | "Northstar Parcel"
  | "Harbor Express"

export interface Owner {
  name: string
  avatar: number
}

export interface Shipment {
  id: string
  customer: string
  order: string
  route: string
  hub: string
  carrier: Carrier
  carrierMode: string
  status: ShipmentStatus
  priority: Priority
  issue: Issue
  owner: Owner | null
  etaDate: string
  etaTime: string
  etaDelta: string
  packages: number
  value: number
}

export const STATUSES: ShipmentStatus[] = [
  "Delayed",
  "Customs Hold",
  "Exception",
]
export const PRIORITIES: Priority[] = ["Critical", "High", "Medium"]
export const ISSUES: Issue[] = ["Weather", "Admin", "Capacity", "Address", "Damage"]
export const CARRIERS: Carrier[] = [
  "BlueLine Freight",
  "AeroLink",
  "MetroShip",
  "Northstar Parcel",
  "Harbor Express",
]

export const OWNERS: Owner[] = [
  { name: "Sana Qureshi", avatar: 45 },
  { name: "Theo Park", avatar: 13 },
  { name: "Mira Stone", avatar: 47 },
  { name: "Priya Patel", avatar: 20 },
  { name: "Omar Haddad", avatar: 53 },
  { name: "David Kim", avatar: 59 },
  { name: "Sofia Romero", avatar: 44 },
  { name: "Alex Johnson", avatar: 15 },
  { name: "Sarah Chen", avatar: 26 },
  { name: "Nora Vale", avatar: 5 },
]

export const CARRIER_MODES: Record<Carrier, string> = {
  "BlueLine Freight": "Cross Dock",
  AeroLink: "Priority Air",
  MetroShip: "International",
  "Northstar Parcel": "International",
  "Harbor Express": "Cross Dock",
}

const BASE: Shipment[] = [
  {
    id: "SHP-0063AF",
    customer: "Beacon Works",
    order: "ORD-02QXX",
    route: "Oakland to Portland",
    hub: "Hub OAK-2",
    carrier: "BlueLine Freight",
    carrierMode: "Cross Dock",
    status: "Delayed",
    priority: "High",
    issue: "Weather",
    owner: { name: "Sana Qureshi", avatar: 45 },
    etaDate: "Jun 24",
    etaTime: "07:35",
    etaDelta: "+7h",
    packages: 14,
    value: 12800,
  },
  {
    id: "SHP-0063A7",
    customer: "Beacon Works",
    order: "ORD-02Q5X",
    route: "Los Angeles to Seattle",
    hub: "Hub LAX-4",
    carrier: "AeroLink",
    carrierMode: "Priority Air",
    status: "Customs Hold",
    priority: "Critical",
    issue: "Admin",
    owner: { name: "Theo Park", avatar: 13 },
    etaDate: "Jun 24",
    etaTime: "08:27",
    etaDelta: "+6h",
    packages: 9,
    value: 9400,
  },
  {
    id: "SHP-0063B2",
    customer: "Pine Market",
    order: "ORD-02QZP",
    route: "Los Angeles to Seattle",
    hub: "Hub LAX-4",
    carrier: "MetroShip",
    carrierMode: "International",
    status: "Exception",
    priority: "Critical",
    issue: "Capacity",
    owner: { name: "Mira Stone", avatar: 47 },
    etaDate: "Jun 24",
    etaTime: "08:30",
    etaDelta: "+7h",
    packages: 22,
    value: 15600,
  },
  {
    id: "SHP-0063BT",
    customer: "Marlow Medical",
    order: "ORD-02R1Y",
    route: "Memphis to Nashville",
    hub: "Hub MEM-7",
    carrier: "Northstar Parcel",
    carrierMode: "International",
    status: "Delayed",
    priority: "High",
    issue: "Capacity",
    owner: null,
    etaDate: "Jun 24",
    etaTime: "08:32",
    etaDelta: "+7h",
    packages: 5,
    value: 7300,
  },
  {
    id: "SHP-0063AY",
    customer: "Atlas Studio",
    order: "ORD-02QZA",
    route: "Los Angeles to Seattle",
    hub: "Hub LAX-4",
    carrier: "Harbor Express",
    carrierMode: "Cross Dock",
    status: "Customs Hold",
    priority: "Critical",
    issue: "Address",
    owner: { name: "Priya Patel", avatar: 20 },
    etaDate: "Jun 24",
    etaTime: "09:10",
    etaDelta: "+5h",
    packages: 11,
    value: 11200,
  },
  {
    id: "SHP-0063BZ",
    customer: "Atlas Studio",
    order: "ORD-02R2D",
    route: "Long Beach to Honolulu",
    hub: "Hub LGB-8",
    carrier: "AeroLink",
    carrierMode: "Ground",
    status: "Delayed",
    priority: "High",
    issue: "Weather",
    owner: { name: "Omar Haddad", avatar: 53 },
    etaDate: "Jun 24",
    etaTime: "09:25",
    etaDelta: "+6h",
    packages: 8,
    value: 8600,
  },
  {
    id: "SHP-0063C5",
    customer: "Bloom Home",
    order: "ORD-02R2Z",
    route: "Memphis to Nashville",
    hub: "Hub MEM-7",
    carrier: "AeroLink",
    carrierMode: "Priority Air",
    status: "Delayed",
    priority: "High",
    issue: "Weather",
    owner: { name: "David Kim", avatar: 59 },
    etaDate: "Jun 24",
    etaTime: "09:40",
    etaDelta: "+5h",
    packages: 17,
    value: 13400,
  },
  {
    id: "SHP-0063CA",
    customer: "Bloom Home",
    order: "ORD-02R3E",
    route: "Newark to Boston",
    hub: "Hub EWR-5",
    carrier: "Northstar Parcel",
    carrierMode: "Ground",
    status: "Exception",
    priority: "Critical",
    issue: "Damage",
    owner: { name: "Sofia Romero", avatar: 44 },
    etaDate: "Jun 24",
    etaTime: "10:05",
    etaDelta: "+6h",
    packages: 6,
    value: 6900,
  },
  {
    id: "SHP-0063BS",
    customer: "Kova Retail",
    order: "ORD-02R1V",
    route: "Chicago to Detroit",
    hub: "Hub ORD-3",
    carrier: "BlueLine Freight",
    carrierMode: "Ground",
    status: "Customs Hold",
    priority: "Critical",
    issue: "Address",
    owner: { name: "Alex Johnson", avatar: 15 },
    etaDate: "Jun 24",
    etaTime: "10:20",
    etaDelta: "+7h",
    packages: 19,
    value: 16800,
  },
  {
    id: "SHP-0063AE",
    customer: "Northstar Labs",
    order: "ORD-02QXT",
    route: "Dallas to Denver",
    hub: "Hub DFW-2",
    carrier: "MetroShip",
    carrierMode: "Ground",
    status: "Delayed",
    priority: "High",
    issue: "Capacity",
    owner: { name: "Sarah Chen", avatar: 26 },
    etaDate: "Jun 24",
    etaTime: "10:45",
    etaDelta: "+5h",
    packages: 12,
    value: 10900,
  },
  {
    id: "SHP-0063C1",
    customer: "Pine Market",
    order: "ORD-02R4A",
    route: "Seattle to Portland",
    hub: "Hub SEA-1",
    carrier: "BlueLine Freight",
    carrierMode: "Cross Dock",
    status: "Delayed",
    priority: "Medium",
    issue: "Weather",
    owner: { name: "Nora Vale", avatar: 5 },
    etaDate: "Jun 24",
    etaTime: "11:00",
    etaDelta: "+4h",
    packages: 7,
    value: 5400,
  },
  {
    id: "SHP-0063C2",
    customer: "Kova Retail",
    order: "ORD-02R4B",
    route: "Denver to Dallas",
    hub: "Hub DFW-2",
    carrier: "Harbor Express",
    carrierMode: "Ground",
    status: "Exception",
    priority: "High",
    issue: "Damage",
    owner: null,
    etaDate: "Jun 24",
    etaTime: "11:15",
    etaDelta: "+6h",
    packages: 4,
    value: 3200,
  },
]

const ROUTES = [
  { route: "Oakland to Portland", hub: "Hub OAK-2" },
  { route: "Los Angeles to Seattle", hub: "Hub LAX-4" },
  { route: "Memphis to Nashville", hub: "Hub MEM-7" },
  { route: "Long Beach to Honolulu", hub: "Hub LGB-8" },
  { route: "Newark to Boston", hub: "Hub EWR-5" },
  { route: "Chicago to Detroit", hub: "Hub ORD-3" },
  { route: "Dallas to Denver", hub: "Hub DFW-2" },
  { route: "Seattle to Portland", hub: "Hub SEA-1" },
]

const CUSTOMERS = [
  "Beacon Works",
  "Pine Market",
  "Marlow Medical",
  "Atlas Studio",
  "Bloom Home",
  "Kova Retail",
  "Northstar Labs",
]

function random(seed: number) {
  let state = (seed + 0x6d2b79f5) >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let value = state
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

function pick<T>(source: T[], value: number) {
  return source[Math.floor(value * source.length)]
}

export function makeShipment(index: number): Shipment {
  if (index < BASE.length) return BASE[index]

  const rand = random(index + 11)
  const route = pick(ROUTES, rand())
  const carrier = pick(CARRIERS, rand())
  const status = pick(STATUSES, rand())
  const priority = pick(PRIORITIES, rand())
  const issue = pick(ISSUES, rand())
  const owner = rand() < 0.22 ? null : pick(OWNERS, rand())
  const hour = 7 + Math.floor(((index * 13) % 120) / 10)
  const minute = Math.floor(rand() * 60)

  return {
    id: `SHP-${(0x63df + index).toString(16).toUpperCase()}`,
    customer: pick(CUSTOMERS, rand()),
    order: `ORD-02${["Q", "R"][index % 2]}${(index * 37).toString(36).toUpperCase().slice(-3)}`,
    route: route.route,
    hub: route.hub,
    carrier,
    carrierMode: CARRIER_MODES[carrier],
    status,
    priority,
    issue,
    owner,
    etaDate: "Jun 24",
    etaTime: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
    etaDelta: `+${4 + Math.floor(rand() * 5)}h`,
    packages: 1 + Math.floor(rand() * 40),
    value: 500 + Math.floor(rand() * 24000),
  }
}

export function currency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
}
