export type Priority = "Low" | "Urgent" | "High" | "Normal"
export type WorkStatus = "Done" | "Blocked" | "In review" | "Queued" | "Ready"
export type WorkType = "Bug" | "Request" | "Experiment" | "Task"

export interface WorkItem {
  id: string
  title: string
  queue: string
  updated: string
  owner: string
  ownerRole: string
  priority: Priority
  status: WorkStatus
  type: WorkType
  due: string
}

export const WORK_ITEMS: WorkItem[] = [
  { id: "w-1", title: "Triage notification noise report", queue: "Support queue", updated: "Updated Apr 15, 2026", owner: "Oskar Lind", ownerRole: "Support", priority: "Low", status: "Done", type: "Bug", due: "Apr 20, 2026" },
  { id: "w-2", title: "Resolve SSO invite edge case", queue: "Identity queue", updated: "Updated Apr 21, 2026", owner: "Niko Patel", ownerRole: "Security", priority: "Urgent", status: "Blocked", type: "Bug", due: "Apr 23, 2026" },
  { id: "w-3", title: "Review invoice approval handoff", queue: "Finance desk", updated: "Updated Apr 22, 2026", owner: "Maya Chen", ownerRole: "Product Ops", priority: "High", status: "In review", type: "Request", due: "Apr 25, 2026" },
  { id: "w-4", title: "Validate workspace limit prompt", queue: "Upgrade flow", updated: "Updated Apr 13, 2026", owner: "Eli Mercer", ownerRole: "Activation", priority: "High", status: "Queued", type: "Experiment", due: "Apr 29, 2026" },
  { id: "w-5", title: "Add webhook replay controls", queue: "Integrations", updated: "Updated Apr 18, 2026", owner: "Tomas Varga", ownerRole: "Platform", priority: "High", status: "Ready", type: "Experiment", due: "Apr 30, 2026" },
  { id: "w-6", title: "Audit trial conversion events", queue: "Revenue ops", updated: "Updated Apr 17, 2026", owner: "Amina Reyes", ownerRole: "Analytics", priority: "Normal", status: "In review", type: "Task", due: "May 2, 2026" },
]

export const PRIORITY_TONE: Record<Priority, string> = {
  Low: "bg-muted-foreground/50",
  Urgent: "bg-destructive",
  High: "bg-warning",
  Normal: "bg-info",
}

export const STATUS_TONE: Record<WorkStatus, string> = {
  Done: "bg-muted-foreground/50",
  Blocked: "bg-destructive",
  "In review": "bg-info",
  Queued: "bg-muted-foreground/50",
  Ready: "bg-success",
}

export const TYPE_TONE: Record<WorkType, string> = {
  Bug: "bg-destructive",
  Request: "bg-info",
  Experiment: "bg-purple-500",
  Task: "bg-success",
}

export const WORK_TABS = ["Overview", "Assigned", "Created", "Following", "Activity"]
export const PRIORITIES: Priority[] = ["Low", "Urgent", "High", "Normal"]
