export type DealStage =
  | "Won"
  | "Negotiation"
  | "Proposal Sent"
  | "Qualified"
  | "Discovery"

export interface Opportunity {
  id: string
  name: string
  company: string
  stage: DealStage
  owner: { name: string; avatar: string }
  amount: number
  progress: number
  alerts: { critical: number; warning: number }
  industry: string
  pinned?: boolean
}

export const STAGE_META: Record<DealStage, { dot: string; variant: string }> = {
  Won: { dot: "bg-success", variant: "success" },
  Negotiation: { dot: "bg-success", variant: "success" },
  "Proposal Sent": { dot: "bg-warning", variant: "warning" },
  Qualified: { dot: "bg-info", variant: "info" },
  Discovery: { dot: "bg-muted-foreground", variant: "secondary" },
}

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "opp-01",
    name: "Annual Service Renewal",
    company: "Orbit Stack",
    stage: "Won",
    owner: { name: "Rebecca Lee", avatar: "https://i.pravatar.cc/96?img=45" },
    amount: 150000,
    progress: 25,
    alerts: { critical: 2, warning: 0 },
    industry: "Technology",
    pinned: true,
  },
  {
    id: "opp-02",
    name: "Enterprise Upgrade",
    company: "Northstar Health",
    stage: "Proposal Sent",
    owner: { name: "Sarah Jones", avatar: "https://i.pravatar.cc/96?img=26" },
    amount: 70000,
    progress: 56,
    alerts: { critical: 0, warning: 0 },
    industry: "Healthcare",
    pinned: true,
  },
  {
    id: "opp-03",
    name: "Enterprise Upgrade",
    company: "Stackpoint Cloud",
    stage: "Negotiation",
    owner: { name: "John Martin", avatar: "https://i.pravatar.cc/96?img=12" },
    amount: 72000,
    progress: 57,
    alerts: { critical: 0, warning: 1 },
    industry: "Technology",
  },
  {
    id: "opp-04",
    name: "New Product Launch",
    company: "Forge Systems",
    stage: "Proposal Sent",
    owner: { name: "John Martin", avatar: "https://i.pravatar.cc/96?img=12" },
    amount: 63000,
    progress: 63,
    alerts: { critical: 1, warning: 2 },
    industry: "Manufacturing",
  },
  {
    id: "opp-05",
    name: "Enterprise Upgrade",
    company: "Altura Finance",
    stage: "Proposal Sent",
    owner: { name: "Tom Carter", avatar: "https://i.pravatar.cc/96?img=53" },
    amount: 56000,
    progress: 80,
    alerts: { critical: 0, warning: 0 },
    industry: "Finance",
  },
  {
    id: "opp-06",
    name: "Platform Migration",
    company: "Kestrel Labs",
    stage: "Negotiation",
    owner: { name: "Priya Nair", avatar: "https://i.pravatar.cc/96?img=47" },
    amount: 128000,
    progress: 68,
    alerts: { critical: 0, warning: 1 },
    industry: "Technology",
  },
  {
    id: "opp-07",
    name: "Seat Expansion",
    company: "Brightline Media",
    stage: "Qualified",
    owner: { name: "Alex Chen", avatar: "https://i.pravatar.cc/96?img=15" },
    amount: 42000,
    progress: 34,
    alerts: { critical: 0, warning: 0 },
    industry: "Media",
  },
  {
    id: "opp-08",
    name: "EU Renewal",
    company: "Meridian Group",
    stage: "Won",
    owner: { name: "Rebecca Lee", avatar: "https://i.pravatar.cc/96?img=45" },
    amount: 96000,
    progress: 100,
    alerts: { critical: 0, warning: 0 },
    industry: "Finance",
  },
  {
    id: "opp-09",
    name: "Data Warehouse Rollout",
    company: "Cobalt AI",
    stage: "Discovery",
    owner: { name: "Sarah Jones", avatar: "https://i.pravatar.cc/96?img=26" },
    amount: 210000,
    progress: 18,
    alerts: { critical: 3, warning: 1 },
    industry: "Technology",
  },
  {
    id: "opp-10",
    name: "Security Review",
    company: "Windward Logistics",
    stage: "Qualified",
    owner: { name: "Tom Carter", avatar: "https://i.pravatar.cc/96?img=53" },
    amount: 38000,
    progress: 45,
    alerts: { critical: 0, warning: 2 },
    industry: "Logistics",
  },
]

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function formatAmount(value: number) {
  return currency.format(value)
}

export function progressTone(progress: number) {
  if (progress >= 75) return "text-success"
  if (progress >= 40) return "text-warning-foreground"
  return "text-destructive"
}
