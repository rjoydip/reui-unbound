export type RequestStatus = "Active" | "Blocked" | "Draft"
export type RequestPriority = "High" | "Medium" | "Low"

export interface IntakeRequest {
  id: string
  title: string
  code: string
  requester: string
  budget: number
  dueDays: number
  confidence: number
  status: RequestStatus
  priority: RequestPriority
  approved: boolean
}

export const REQUESTS: IntakeRequest[] = [
  { id: "r-1", title: "Website Refresh", code: "REQ-2401", requester: "Maya Chen", budget: 18000, dueDays: 14, confidence: 78, status: "Active", priority: "Medium", approved: true },
  { id: "r-2", title: "Checkout Audit", code: "REQ-2418", requester: "Owen Brooks", budget: 9200, dueDays: 5, confidence: 42, status: "Blocked", priority: "High", approved: false },
  { id: "r-3", title: "Brand System", code: "REQ-2430", requester: "Nina Patel", budget: 12500, dueDays: 21, confidence: 64, status: "Draft", priority: "Low", approved: false },
  { id: "r-4", title: "CRM Automation", code: "REQ-2442", requester: "Leo Martin", budget: 24000, dueDays: 8, confidence: 86, status: "Active", priority: "High", approved: true },
  { id: "r-5", title: "Data Dashboard", code: "REQ-2459", requester: "Sara Klein", budget: 16000, dueDays: 30, confidence: 71, status: "Active", priority: "Medium", approved: true },
]

export const REQUEST_STATUSES: RequestStatus[] = ["Active", "Blocked", "Draft"]
export const REQUEST_PRIORITIES: RequestPriority[] = ["High", "Medium", "Low"]
