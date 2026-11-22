export type Brand = "openai" | "anthropic" | "stripe" | "supabase" | "prisma" | "convex" | "mintlify"
export type AlertTone = "danger" | "warning" | "success"

export interface RiskRow {
  id: string
  brand: Brand
  account: string
  contact: string
  role: string
  product: string
  seats: number
  stage: string
  owner: string
  ownerRole: string
  signals: string[]
  moreSignals: number
  health: number
  arr: number
  renewal: string
  daysLeft: string
  daysTone: "danger" | "warning"
  alerts: number
  alertTone: AlertTone
  alertMessage: string
  pinned: boolean
}

export const RISK_ROWS: RiskRow[] = [
  { id: "r-1", brand: "openai", account: "OpenAI", contact: "Elena Park", role: "VP Security Operations", product: "Identity Cloud", seats: 4200, stage: "Executive Review", owner: "Sarah Chen", ownerRole: "Strategic CSM", signals: ["Champion Change", "Security Review"], moreSignals: 1, health: 34, arr: 420000, renewal: "Apr 26, 2026", daysLeft: "12 days left", daysTone: "danger", alerts: 3, alertTone: "danger", alertMessage: "Security addendum is blocked on buyer counsel.", pinned: true },
  { id: "r-2", brand: "anthropic", account: "Anthropic", contact: "David Lin", role: "Senior Director, Platform", product: "Network Observability", seats: 2800, stage: "Save Plan", owner: "Michael Rodriguez", ownerRole: "Enterprise AM", signals: ["Usage Dip", "Procurement"], moreSignals: 1, health: 39, arr: 315000, renewal: "May 2, 2026", daysLeft: "18 days left", daysTone: "danger", alerts: 4, alertTone: "danger", alertMessage: "Expansion was pulled out of the renewal package.", pinned: true },
  { id: "r-3", brand: "stripe", account: "Stripe", contact: "Maya Thompson", role: "Head of IT Applications", product: "Secure Workflows", seats: 1900, stage: "Legal Review", owner: "Emma Wilson", ownerRole: "Renewals Lead", signals: ["Legal Redlines", "Security Review"], moreSignals: 0, health: 44, arr: 280000, renewal: "May 8, 2026", daysLeft: "24 days left", daysTone: "warning", alerts: 2, alertTone: "warning", alertMessage: "DPA redlines are still open with procurement.", pinned: false },
  { id: "r-4", brand: "supabase", account: "Supabase", contact: "Arjun Mehta", role: "Director of Infrastructure", product: "Risk Intelligence", seats: 5400, stage: "Procurement", owner: "Daniel Kim", ownerRole: "Global CSM", signals: ["Pricing Pushback", "Multi-Year Ask"], moreSignals: 0, health: 52, arr: 610000, renewal: "May 13, 2026", daysLeft: "29 days left", daysTone: "warning", alerts: 2, alertTone: "warning", alertMessage: "Buyer is asking for extra discount on a multi-year term.", pinned: false },
  { id: "r-5", brand: "prisma", account: "Prisma", contact: "Sofia Lee", role: "VP Digital Experience", product: "Store Reliability Suite", seats: 1650, stage: "Commercial Review", owner: "Priya Patel", ownerRole: "Commercial CSM", signals: ["Adoption Plateau", "Pricing Pushback"], moreSignals: 0, health: 58, arr: 205000, renewal: "May 21, 2026", daysLeft: "37 days left", daysTone: "warning", alerts: 2, alertTone: "warning", alertMessage: "Low feature adoption is driving the down-sell motion.", pinned: false },
  { id: "r-6", brand: "convex", account: "Convex", contact: "Nadia Hassan", role: "Head of Grid Analytics", product: "Asset Monitoring", seats: 3100, stage: "Verbal Commit", owner: "Alex Johnson", ownerRole: "Renewals Manager", signals: ["Procurement"], moreSignals: 0, health: 78, arr: 355000, renewal: "May 24, 2026", daysLeft: "40 days left", daysTone: "warning", alerts: 1, alertTone: "success", alertMessage: "Verbal approval is in, awaiting PO release.", pinned: false },
  { id: "r-7", brand: "mintlify", account: "Mintlify", contact: "Rachel Green", role: "Sr. Manager, Operations Tech", product: "Fleet Visibility", seats: 2280, stage: "Security Review", owner: "Michael Rodriguez", ownerRole: "Enterprise AM", signals: ["Security Review", "Usage Dip"], moreSignals: 0, health: 63, arr: 265000, renewal: "May 29, 2026", daysLeft: "45 days left", daysTone: "warning", alerts: 2, alertTone: "warning", alertMessage: "Security questionnaire reopened after new SSO scope.", pinned: false },
  { id: "r-8", brand: "openai", account: "OpenAI", contact: "Marcus Cole", role: "Director of Platform", product: "Edge Gateway", seats: 1200, stage: "Procurement", owner: "Sarah Chen", ownerRole: "Strategic CSM", signals: ["Pricing Pushback"], moreSignals: 0, health: 61, arr: 198000, renewal: "Jun 4, 2026", daysLeft: "51 days left", daysTone: "warning", alerts: 1, alertTone: "warning", alertMessage: "Awaiting revised pricing schedule.", pinned: false },
  { id: "r-9", brand: "anthropic", account: "Anthropic", contact: "Grace Liu", role: "Head of Infrastructure", product: "Trust Platform", seats: 2100, stage: "Legal Review", owner: "Emma Wilson", ownerRole: "Renewals Lead", signals: ["Legal Redlines"], moreSignals: 0, health: 49, arr: 342000, renewal: "Jun 9, 2026", daysLeft: "56 days left", daysTone: "warning", alerts: 2, alertTone: "warning", alertMessage: "Liability language under legal review.", pinned: false },
  { id: "r-10", brand: "stripe", account: "Stripe", contact: "Owen Fisher", role: "Senior Manager, Billing", product: "Revenue Controls", seats: 980, stage: "Commercial Review", owner: "Priya Patel", ownerRole: "Commercial CSM", signals: ["Adoption Plateau"], moreSignals: 0, health: 67, arr: 152000, renewal: "Jun 14, 2026", daysLeft: "61 days left", daysTone: "warning", alerts: 1, alertTone: "success", alertMessage: "Usage review scheduled for next week.", pinned: false },
  { id: "r-11", brand: "supabase", account: "Supabase", contact: "Ingrid Solberg", role: "VP Engineering", product: "Data Fabric", seats: 3600, stage: "Executive Review", owner: "Daniel Kim", ownerRole: "Global CSM", signals: ["Champion Change", "Usage Dip"], moreSignals: 1, health: 41, arr: 465000, renewal: "Jun 21, 2026", daysLeft: "68 days left", daysTone: "warning", alerts: 3, alertTone: "danger", alertMessage: "New engineering lead is re-evaluating the platform.", pinned: false },
  { id: "r-12", brand: "convex", account: "Convex", contact: "Samir Patel", role: "Director, Operations", product: "Fleet Telemetry", seats: 1420, stage: "Preparing", owner: "Alex Johnson", ownerRole: "Renewals Manager", signals: ["Procurement"], moreSignals: 0, health: 72, arr: 118000, renewal: "Jun 28, 2026", daysLeft: "75 days left", daysTone: "warning", alerts: 1, alertTone: "success", alertMessage: "Renewal owner assigned and outreach sent.", pinned: false },
]

export const FILTER_ATTRIBUTES = ["Account", "Owner", "Stage", "Signals", "Alerts"]

export const STAGE_DOT: Record<string, string> = {
  "Executive Review": "bg-warning",
  "Save Plan": "bg-destructive",
  "Legal Review": "bg-warning",
  Procurement: "bg-info",
  "Commercial Review": "bg-info",
  "Verbal Commit": "bg-success",
  "Security Review": "bg-purple-500",
  Preparing: "bg-muted-foreground/50",
}

export const SIGNAL_VARIANT: Record<string, "info-light" | "success-light" | "warning-light" | "destructive-light" | "primary-light"> = {
  "Champion Change": "info-light",
  "Security Review": "primary-light",
  "Usage Dip": "warning-light",
  Procurement: "success-light",
  "Legal Redlines": "destructive-light",
  "Pricing Pushback": "destructive-light",
  "Multi-Year Ask": "warning-light",
  "Adoption Plateau": "info-light",
}
