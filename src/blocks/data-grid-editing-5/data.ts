export type TaskStatus = "Shipped" | "In progress" | "In review" | "Blocked" | "Ready" | "Backlog"
export type TaskPriority = "Critical" | "High" | "Normal" | "Low"

export interface RunbookTask {
  id: string
  title: string
  status: TaskStatus
  done: boolean
  assignees: string[]
  due: string
  dueTone: "normal" | "warning" | "danger" | "muted"
  priority: TaskPriority
  points: number
}

export const RUNBOOK_TASKS: RunbookTask[] = [
  { id: "t-1", title: "Freeze the release branch and cut rc.1", status: "Shipped", done: true, assignees: ["Leo"], due: "Sep 8", dueTone: "normal", priority: "Critical", points: 2 },
  { id: "t-2", title: "Run the full regression suite against staging", status: "In progress", done: false, assignees: ["Theo", "Ivo"], due: "Sep 15", dueTone: "warning", priority: "Critical", points: 8 },
  { id: "t-3", title: "Publish the migration guide for the v3 ingest API", status: "In review", done: false, assignees: ["Nora"], due: "Sep 17", dueTone: "normal", priority: "High", points: 5 },
  { id: "t-4", title: "Load test the ingest pipeline at three times peak", status: "Blocked", done: false, assignees: ["Leo", "Theo"], due: "Sep 11", dueTone: "danger", priority: "Critical", points: 13 },
  { id: "t-5", title: "Rotate signing keys and refresh CI secrets", status: "Ready", done: false, assignees: ["Ivo"], due: "Sep 18", dueTone: "normal", priority: "High", points: 3 },
  { id: "t-6", title: "Draft the changelog and the in-app release note", status: "In progress", done: false, assignees: ["Mira", "Nora"], due: "Sep 19", dueTone: "normal", priority: "Normal", points: 3 },
  { id: "t-7", title: "Verify proration on annual plan upgrades", status: "Ready", done: false, assignees: ["Priya"], due: "Sep 16", dueTone: "warning", priority: "High", points: 5 },
  { id: "t-8", title: "Update the status page components and runbook links", status: "Backlog", done: false, assignees: [], due: "No date", dueTone: "muted", priority: "Low", points: 2 },
  { id: "t-9", title: "Localize onboarding strings for German and Japanese", status: "In progress", done: false, assignees: ["Sana"], due: "Sep 22", dueTone: "normal", priority: "Normal", points: 8 },
  { id: "t-10", title: "Dry run the rollback procedure end to end", status: "Ready", done: false, assignees: ["Leo", "Theo", "Ivo"], due: "Sep 23", dueTone: "normal", priority: "Critical", points: 8 },
  { id: "t-11", title: "Collect SOC 2 evidence for the new subprocessor", status: "In review", done: false, assignees: ["Sana"], due: "Sep 20", dueTone: "normal", priority: "High", points: 5 },
  { id: "t-12", title: "Schedule the customer webinar and send invites", status: "Backlog", done: false, assignees: ["Mira"], due: "Sep 24", dueTone: "normal", priority: "Normal", points: 3 },
  { id: "t-13", title: "Enable the flag for the five percent canary", status: "Ready", done: false, assignees: ["Theo"], due: "Sep 25", dueTone: "normal", priority: "Critical", points: 2 },
]

export const TASK_STATUSES: TaskStatus[] = ["Backlog", "In progress", "In review", "Blocked", "Ready", "Shipped"]
export const TASK_PRIORITIES: TaskPriority[] = ["Critical", "High", "Normal", "Low"]

export const STATUS_VARIANT: Record<TaskStatus, "success-light" | "secondary" | "warning-light" | "destructive-light" | "primary-light"> = {
  Shipped: "success-light",
  "In progress": "secondary",
  "In review": "warning-light",
  Blocked: "destructive-light",
  Ready: "primary-light",
  Backlog: "secondary",
}

export const PRIORITY_COLOR: Record<TaskPriority, string> = {
  Critical: "text-destructive",
  High: "text-warning-foreground",
  Normal: "text-purple-500",
  Low: "text-muted-foreground",
}
