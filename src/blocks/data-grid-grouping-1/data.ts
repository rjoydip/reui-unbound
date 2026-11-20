export type Stage = "Backlog" | "To Do" | "In Progress" | "Done"
export type Signal = "Queued" | "At risk" | "On track" | "Blocked" | "Done"

export interface RoadmapTask {
  id: string
  stage: Stage
  title: string
  icon: string
  owners: string[]
  label: string
  due: string
  completion: number | null
  signal: Signal
}

export const STAGE_META: Record<
  Stage,
  { dot: string; description: string }
> = {
  Backlog: { dot: "bg-muted-foreground/50", description: "Ideas waiting for product shaping" },
  "To Do": { dot: "bg-warning", description: "Scoped work ready for owners" },
  "In Progress": { dot: "bg-info", description: "Active delivery with review signals" },
  Done: { dot: "bg-success", description: "Recently completed work" },
}

export const LABEL_DOT: Record<string, string> = {
  Adoption: "bg-foreground",
  Revenue: "bg-success",
  Knowledge: "bg-purple-500",
  "AI Quality": "bg-purple-500",
  Access: "bg-destructive",
  Messaging: "bg-warning",
  Mobile: "bg-purple-500",
  Workflow: "bg-foreground",
  Insights: "bg-foreground",
}

export const SIGNAL_VARIANT: Record<Signal, "secondary" | "warning-light" | "success-light" | "destructive-light"> = {
  Queued: "secondary",
  "At risk": "warning-light",
  "On track": "success-light",
  Blocked: "destructive-light",
  Done: "secondary",
}

export const TASKS: RoadmapTask[] = [
  { id: "t-1", stage: "Backlog", title: "Draft first-run board tips", icon: "sparkles", owners: ["Maya", "Leo"], label: "Adoption", due: "22 Dec", completion: 18, signal: "Queued" },
  { id: "t-2", stage: "Backlog", title: "Map invoice retries to health cards", icon: "card", owners: ["Nina"], label: "Revenue", due: "03 Mar", completion: 34, signal: "At risk" },
  { id: "t-3", stage: "Backlog", title: "Guard archived pages", icon: "book", owners: ["Omar"], label: "Knowledge", due: "18 Aug", completion: 12, signal: "Queued" },
  { id: "t-4", stage: "Backlog", title: "Audit assistant fallback prompts for unsupported regions", icon: "cpu", owners: ["Priya", "Jonah"], label: "AI Quality", due: "29 Nov", completion: 42, signal: "On track" },
  { id: "t-5", stage: "Backlog", title: "Scope vendor admin roles", icon: "shield", owners: ["Emma", "Leo"], label: "Access", due: "14 Jan", completion: 9, signal: "Blocked" },
  { id: "t-6", stage: "Backlog", title: "Define regional quiet hours for digest notifications", icon: "bell", owners: [], label: "Messaging", due: "11 Feb", completion: null, signal: "Queued" },
  { id: "t-7", stage: "To Do", title: "Prototype mobile composer", icon: "phone", owners: ["Maya"], label: "Mobile", due: "27 Apr", completion: 46, signal: "On track" },
  { id: "t-8", stage: "To Do", title: "Connect revenue alerts to renewals", icon: "card", owners: ["Nina", "Omar"], label: "Revenue", due: "14 Oct", completion: 58, signal: "At risk" },
  { id: "t-9", stage: "To Do", title: "Write handoff checklist for knowledge base imports", icon: "book", owners: ["Priya", "Jonah"], label: "Workflow", due: "30 Sep", completion: 37, signal: "Queued" },
  { id: "t-10", stage: "To Do", title: "Separate SSO exception review from the access flow", icon: "shield", owners: ["Emma", "Leo", "Maya"], label: "Access", due: "08 May", completion: 29, signal: "Blocked" },
  { id: "t-11", stage: "To Do", title: "Preview announcement routing", icon: "bell", owners: ["Nina"], label: "Messaging", due: "21 Jul", completion: 51, signal: "On track" },
  { id: "t-12", stage: "In Progress", title: "Tune citation scoring for generated release notes", icon: "cpu", owners: ["Priya", "Omar"], label: "AI Quality", due: "19 Dec", completion: 76, signal: "On track" },
  { id: "t-13", stage: "In Progress", title: "Ship onboarding status badges", icon: "sparkles", owners: ["Maya"], label: "Adoption", due: "25 Aug", completion: 88, signal: "On track" },
  { id: "t-14", stage: "In Progress", title: "Review swipe-to-archive recovery", icon: "phone", owners: ["Leo"], label: "Mobile", due: "02 Nov", completion: 67, signal: "At risk" },
  { id: "t-15", stage: "In Progress", title: "Show warehouse lag in ops dashboards", icon: "insights", owners: [], label: "Insights", due: "06 Jun", completion: 41, signal: "Blocked" },
  { id: "t-16", stage: "In Progress", title: "Localize lifecycle copy for new locales", icon: "bell", owners: ["Nina", "Emma"], label: "Messaging", due: "15 Jul", completion: 64, signal: "On track" },
  { id: "t-17", stage: "Done", title: "Publish incident follow-up template", icon: "book", owners: ["Omar"], label: "Workflow", due: "12 Dec", completion: 100, signal: "Done" },
  { id: "t-18", stage: "Done", title: "Backfill owner assignments", icon: "shield", owners: ["Maya", "Leo"], label: "Access", due: "18 Nov", completion: 100, signal: "Done" },
  { id: "t-19", stage: "Done", title: "Archive stale product demos", icon: "book", owners: [], label: "Knowledge", due: "05 Oct", completion: 100, signal: "Done" },
]
