export type TaskStatus = "In Progress" | "Done" | "Todo" | "Review"
export type TaskPriority = "Urgent" | "High" | "Medium"

export interface DeliveryTask {
  id: string
  parentId: string | null
  title: string
  done: boolean
  status: TaskStatus
  assignee: string
  priority: TaskPriority
  project: string
}

export const DELIVERY_TASKS: DeliveryTask[] = [
  { id: "t-1", parentId: null, title: "Finalize licensed registry handshake for private installs", done: false, status: "In Progress", assignee: "Maya Perez", priority: "Urgent", project: "Registry API" },
  { id: "t-1-1", parentId: "t-1", title: "Lock the signed entitlement payload shape", done: true, status: "Done", assignee: "Maya Perez", priority: "Urgent", project: "Registry API" },
  { id: "t-1-2", parentId: "t-1", title: "Validate private install signature rotation", done: true, status: "Done", assignee: "Jonas Reed", priority: "High", project: "Registry API" },
  { id: "t-1-3", parentId: "t-1", title: "Add replay guard for expired install links", done: false, status: "In Progress", assignee: "Emil Novak", priority: "Urgent", project: "Registry API" },
  { id: "t-2", parentId: null, title: "Document the fallback flow for invalid claims", done: false, status: "In Progress", assignee: "Maya Perez", priority: "Medium", project: "Registry API" },
  { id: "t-3", parentId: null, title: "Audit session invalidation when workspace roles change", done: false, status: "Todo", assignee: "Jonas Reed", priority: "Urgent", project: "Workspace Access" },
  { id: "t-4", parentId: null, title: "Wire project health badges into the launch command center", done: false, status: "In Progress", assignee: "Pavel Singh", priority: "Urgent", project: "Launch Analytics" },
  { id: "t-5", parentId: null, title: "Design empty states for expiring team seat invitations", done: false, status: "Todo", assignee: "Noa Kim", priority: "High", project: "Workspace Access" },
  { id: "t-6", parentId: null, title: "Add audit trail hooks to task status change events", done: false, status: "Review", assignee: "Emil Novak", priority: "High", project: "Task Delivery" },
  { id: "t-7", parentId: null, title: "Harden webhook signing keys across staging tenants", done: false, status: "In Progress", assignee: "Pavel Singh", priority: "Urgent", project: "Platform" },
  { id: "t-8", parentId: null, title: "Refresh onboarding checklist copy for enterprise trials", done: false, status: "Todo", assignee: "Noa Kim", priority: "Medium", project: "Growth" },
  { id: "t-9", parentId: null, title: "Track seat expansion signals in the admin console", done: false, status: "Review", assignee: "Jonas Reed", priority: "High", project: "Workspace Access" },
  { id: "t-10", parentId: null, title: "Cut the release candidate for the registry service", done: false, status: "In Progress", assignee: "Maya Perez", priority: "Urgent", project: "Registry API" },
  { id: "t-11", parentId: null, title: "Validate billing proration on annual upgrades", done: false, status: "Todo", assignee: "Emil Novak", priority: "High", project: "Revenue" },
  { id: "t-12", parentId: null, title: "Publish the migration guide for private installs", done: false, status: "In Progress", assignee: "Pavel Singh", priority: "Medium", project: "Docs" },
  { id: "t-13", parentId: null, title: "Instrument latency budgets for registry lookups", done: false, status: "Todo", assignee: "Noa Kim", priority: "High", project: "Registry API" },
  { id: "t-14", parentId: null, title: "Backfill audit events for legacy registry installs", done: false, status: "In Progress", assignee: "Pavel Singh", priority: "High", project: "Registry API" },
  { id: "t-15", parentId: null, title: "Tighten retry backoff on webhook delivery", done: false, status: "Todo", assignee: "Emil Novak", priority: "Medium", project: "Platform" },
  { id: "t-16", parentId: null, title: "Review enterprise seat invite limits", done: false, status: "Review", assignee: "Noa Kim", priority: "High", project: "Workspace Access" },
]

export const STATUS_TONE: Record<TaskStatus, { dot: string; variant: "warning-light" | "success-light" | "info-light" | "primary-light" }> = {
  "In Progress": { dot: "bg-warning", variant: "warning-light" },
  Done: { dot: "bg-success", variant: "success-light" },
  Todo: { dot: "bg-info", variant: "info-light" },
  Review: { dot: "bg-purple-500", variant: "primary-light" },
}

export const PRIORITY_VARIANT: Record<TaskPriority, "destructive-light" | "warning-light" | "primary-light"> = {
  Urgent: "destructive-light",
  High: "warning-light",
  Medium: "primary-light",
}
