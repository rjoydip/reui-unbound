export type WorkflowState = "Live" | "Needs approval" | "Draft" | "Paused"
export type WorkflowIcon = "workflow" | "route" | "mail" | "bell"

export interface WorkflowRow {
  id: string
  title: string
  schedule: string
  group: string
  owner: string
  email: string
  score: number
  state: WorkflowState
  updated: string
  updatedNote: string
  enabled: boolean
  icon: WorkflowIcon
}

export const WORKFLOWS: WorkflowRow[] = [
  { id: "wf-1", title: "Renewal touchpoint orchestration", schedule: "Weekdays 09:00", group: "Renewal accounts", owner: "Emil Novak", email: "emil@reui.io", score: 4.8, state: "Live", updated: "Apr 11, 2026", updatedNote: "Today", enabled: true, icon: "workflow" },
  { id: "wf-2", title: "Delegated sender review route", schedule: "Queue-based release", group: "Delegated senders", owner: "Priya Nair", email: "priya@reui.io", score: 4.2, state: "Needs approval", updated: "Apr 11, 2026", updatedNote: "Today", enabled: true, icon: "route" },
  { id: "wf-3", title: "Ops exception digest", schedule: "Daily 18:00", group: "Ops leadership", owner: "Priya Nair", email: "priya@reui.io", score: 4.1, state: "Needs approval", updated: "Apr 11, 2026", updatedNote: "Today", enabled: true, icon: "mail" },
  { id: "wf-4", title: "Launch handoff digest", schedule: "Daily 08:30", group: "Launch squad", owner: "Maya Patel", email: "maya@reui.io", score: 4.7, state: "Live", updated: "Apr 10, 2026", updatedNote: "This week", enabled: true, icon: "mail" },
  { id: "wf-5", title: "SLA escalation watch", schedule: "On trigger", group: "Priority tickets", owner: "Nora Ibrahim", email: "nora@reui.io", score: 4.9, state: "Live", updated: "Apr 10, 2026", updatedNote: "This week", enabled: true, icon: "bell" },
  { id: "wf-6", title: "Weekly pipeline digest", schedule: "Mon 07:00", group: "Revenue operations", owner: "Emil Novak", email: "emil@reui.io", score: 4.4, state: "Live", updated: "Apr 9, 2026", updatedNote: "This week", enabled: true, icon: "mail" },
  { id: "wf-7", title: "Onboarding reminder sequence", schedule: "Daily 10:00", group: "Customer success", owner: "Maya Patel", email: "maya@reui.io", score: 4.0, state: "Draft", updated: "Apr 9, 2026", updatedNote: "This week", enabled: false, icon: "workflow" },
  { id: "wf-8", title: "Churn risk watch", schedule: "Daily 16:00", group: "Success signals", owner: "Nora Ibrahim", email: "nora@reui.io", score: 4.6, state: "Live", updated: "Apr 8, 2026", updatedNote: "This week", enabled: true, icon: "bell" },
  { id: "wf-9", title: "Invoice sync alert", schedule: "On trigger", group: "Finance operations", owner: "Priya Nair", email: "priya@reui.io", score: 3.9, state: "Paused", updated: "Apr 7, 2026", updatedNote: "Last week", enabled: false, icon: "bell" },
  { id: "wf-10", title: "Support triage route", schedule: "Queue-based release", group: "Support leads", owner: "Emil Novak", email: "emil@reui.io", score: 4.3, state: "Live", updated: "Apr 7, 2026", updatedNote: "Last week", enabled: true, icon: "route" },
  { id: "wf-11", title: "Lead routing by territory", schedule: "On trigger", group: "Growth ops", owner: "Maya Patel", email: "maya@reui.io", score: 4.2, state: "Draft", updated: "Apr 6, 2026", updatedNote: "Last week", enabled: false, icon: "route" },
  { id: "wf-12", title: "Security alert digest", schedule: "Daily 07:30", group: "Security team", owner: "Nora Ibrahim", email: "nora@reui.io", score: 4.5, state: "Live", updated: "Apr 5, 2026", updatedNote: "Last week", enabled: true, icon: "bell" },
  { id: "wf-13", title: "Weekly revenue summary", schedule: "Fri 17:00", group: "Finance operations", owner: "Emil Novak", email: "emil@reui.io", score: 3.8, state: "Paused", updated: "Apr 4, 2026", updatedNote: "Last week", enabled: false, icon: "mail" },
  { id: "wf-14", title: "Dunning follow-up sequence", schedule: "Daily 11:00", group: "Billing recovery", owner: "Priya Nair", email: "priya@reui.io", score: 4.1, state: "Live", updated: "Apr 3, 2026", updatedNote: "Last week", enabled: true, icon: "workflow" },
]

export const WORKFLOW_TABS = [
  { key: "All", count: 14 },
  { key: "Live", count: 7 },
  { key: "Needs Review", count: 3 },
  { key: "Drafts", count: 2 },
  { key: "Paused", count: 2 },
]

export const FILTER_ATTRIBUTES = [
  "Workflow",
  "Owner team",
  "Delivery mode",
  "Last updated",
]

export const STATE_VARIANT: Record<WorkflowState, "success-light" | "warning-light" | "secondary"> = {
  Live: "success-light",
  "Needs approval": "warning-light",
  Draft: "secondary",
  Paused: "secondary",
}

export const STATE_DOT: Record<WorkflowState, string> = {
  Live: "bg-success",
  "Needs approval": "bg-warning",
  Draft: "bg-muted-foreground/50",
  Paused: "bg-muted-foreground/50",
}
