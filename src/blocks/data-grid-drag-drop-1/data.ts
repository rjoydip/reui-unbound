export type BacklogStatus = "In Progress" | "In Review" | "Ready" | "Blocked" | "Planned"

export interface BacklogItem {
  id: string
  code: string
  title: string
  subtitle: string
  owner: string
  team: string
  cycle: string
  due: string
  status: BacklogStatus
  effort: number
  icon: string
}

export const BACKLOG_ITEMS: BacklogItem[] = [
  { id: "b-1", code: "PLT-2041", title: "Realtime presence", subtitle: "Feature", owner: "Leo Grant", team: "Collaboration", cycle: "Sprint 18", due: "Jul 08", status: "In Progress", effort: 8, icon: "pin" },
  { id: "b-2", code: "PLT-2042", title: "SSO enforcement", subtitle: "Security", owner: "Sana Qureshi", team: "Identity", cycle: "Sprint 18", due: "Jul 10", status: "In Review", effort: 5, icon: "shield" },
  { id: "b-3", code: "PLT-2043", title: "Webhook retries", subtitle: "Improvement", owner: "Alex Johnson", team: "Platform", cycle: "Sprint 18", due: "Jul 09", status: "Ready", effort: 2, icon: "webhook" },
  { id: "b-4", code: "PLT-2044", title: "Audit log export", subtitle: "Improvement", owner: "David Kim", team: "Compliance", cycle: "Sprint 19", due: "Jul 12", status: "Blocked", effort: 3, icon: "file" },
  { id: "b-5", code: "PLT-2045", title: "Billing usage meters", subtitle: "Feature", owner: "Mira Stone", team: "Revenue", cycle: "Sprint 19", due: "Jul 16", status: "Planned", effort: 13, icon: "chart" },
  { id: "b-6", code: "PLT-2046", title: "Search relevance", subtitle: "Research", owner: "Nora Vale", team: "Search", cycle: "Discovery", due: "Jul 18", status: "Planned", effort: 8, icon: "flask" },
  { id: "b-7", code: "PLT-2047", title: "Mobile offline mode", subtitle: "Feature", owner: "Theo Park", team: "Mobile", cycle: "Sprint 20", due: "Jul 22", status: "Planned", effort: 13, icon: "phone" },
  { id: "b-8", code: "PLT-2048", title: "Token rotation", subtitle: "Security", owner: "Ravi Menon", team: "Security", cycle: "Sprint 20", due: "Jul 24", status: "Planned", effort: 5, icon: "key" },
]

export const BACKLOG_STATUS_VARIANT: Record<BacklogStatus, "warning-light" | "secondary" | "success-light" | "destructive-light"> = {
  "In Progress": "warning-light",
  "In Review": "secondary",
  Ready: "success-light",
  Blocked: "destructive-light",
  Planned: "secondary",
}
