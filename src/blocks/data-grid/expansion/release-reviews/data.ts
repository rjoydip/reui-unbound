export type ReviewStatus = "Needs approval" | "Blocked"
export type Risk = "Critical" | "High"
export type ChecklistState = "Flagged" | "Open" | "Done"

export interface ChecklistItem {
  id: string
  state: ChecklistState
  title: string
  reviewer: string
  due: string
  rating: number
  readiness: number
}

export interface ReleaseReview {
  id: string
  title: string
  code: string
  project: string
  owner: string
  role: string
  status: ReviewStatus
  risk: Risk
  approvals: number
  approvalsTotal: number
  pending: number
  readiness: number
  checklist: ChecklistItem[]
}

const CHECKLIST: ChecklistItem[] = [
  { id: "c-1", state: "Flagged", title: "Replica lag watch", reviewer: "Jonah Lee", due: "Due Apr 18", rating: 2.4, readiness: 42 },
  { id: "c-2", state: "Open", title: "PSP fallback ready", reviewer: "Nina Santos", due: "Due Apr 18", rating: 3.1, readiness: 58 },
  { id: "c-3", state: "Done", title: "Rollback sign-off", reviewer: "Maya Patel", due: "Done Apr 17", rating: 4.8, readiness: 96 },
]

export const RELEASE_REVIEWS: ReleaseReview[] = [
  { id: "r-1", title: "Split EU checkout traffic", code: "REL-8421", project: "Checkout • Production", owner: "Maya Patel", role: "Release lead", status: "Needs approval", risk: "Critical", approvals: 3, approvalsTotal: 5, pending: 2, readiness: 40, checklist: CHECKLIST },
  { id: "r-2", title: "Roll out regional webhook retries", code: "REL-8362", project: "Webhooks • Production", owner: "Omar Haddad", role: "Integrations owner", status: "Blocked", risk: "Critical", approvals: 2, approvalsTotal: 5, pending: 3, readiness: 40, checklist: CHECKLIST },
  { id: "r-3", title: "Rotate auth signing keys", code: "REL-8416", project: "Authentication • Production", owner: "Jonah Lee", role: "Platform reviewer", status: "Blocked", risk: "High", approvals: 2, approvalsTotal: 4, pending: 2, readiness: 50, checklist: CHECKLIST },
  { id: "r-4", title: "Activate instant refunds", code: "REL-8387", project: "Checkout • Production", owner: "Nina Santos", role: "Billing reviewer", status: "Needs approval", risk: "High", approvals: 1, approvalsTotal: 4, pending: 3, readiness: 25, checklist: CHECKLIST },
  { id: "r-5", title: "Gate partner retries by tenant policy", code: "REL-8341", project: "Webhooks • Production", owner: "Omar Haddad", role: "Integrations owner", status: "Needs approval", risk: "High", approvals: 2, approvalsTotal: 5, pending: 3, readiness: 40, checklist: CHECKLIST },
]

export const RISK_VARIANT: Record<Risk, "destructive-light" | "warning-light"> = {
  Critical: "destructive-light",
  High: "warning-light",
}

export const REVIEW_STATUS_VARIANT: Record<ReviewStatus, "warning-light" | "destructive-light"> = {
  "Needs approval": "warning-light",
  Blocked: "destructive-light",
}

export const CHECKLIST_VARIANT: Record<ChecklistState, "destructive-light" | "secondary" | "success-light"> = {
  Flagged: "destructive-light",
  Open: "secondary",
  Done: "success-light",
}
