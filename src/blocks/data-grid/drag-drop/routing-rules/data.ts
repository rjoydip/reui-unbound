export interface RoutingRule {
  id: string
  title: string
  subtitle: string
  scope: string
  when: string
  then: string
  matches: number
  enabled: boolean
  icon: string
}

export const ROUTING_RULES: RoutingRule[] = [
  { id: "r-1", title: "Urgent escalation", subtitle: "High priority tickets", scope: "Priority", when: "Priority is Urgent", then: "Assign to Tier 2", matches: 148, enabled: true, icon: "alert" },
  { id: "r-2", title: "Enterprise VIP", subtitle: "Top tier accounts", scope: "Account", when: "Plan is Enterprise", then: "Route to Success", matches: 92, enabled: true, icon: "users" },
  { id: "r-3", title: "Billing topics", subtitle: "Payments and invoices", scope: "Topic", when: "Topic is Billing", then: "Add label Billing", matches: 311, enabled: true, icon: "tag" },
  { id: "r-4", title: "After hours", subtitle: "Outside business hours", scope: "Schedule", when: "Time is off hours", then: "Notify on-call", matches: 44, enabled: true, icon: "clock" },
  { id: "r-5", title: "Bulk senders", subtitle: "Automated mailers", scope: "Sender", when: "Domain is noreply", then: "Skip assignment", matches: 620, enabled: false, icon: "mail" },
  { id: "r-6", title: "Low signal", subtitle: "Likely spam", scope: "Risk", when: "Score below 20", then: "Move to spam", matches: 38, enabled: false, icon: "ban" },
  { id: "r-7", title: "Refund requests", subtitle: "Money back asks", scope: "Finance", when: "Topic is Refund", then: "Escalate Finance", matches: 27, enabled: true, icon: "tag" },
]

export const SCOPE_VARIANT: Record<string, "destructive-light" | "secondary" | "primary-light" | "warning-light" | "success-light" | "outline"> = {
  Priority: "destructive-light",
  Account: "secondary",
  Topic: "primary-light",
  Schedule: "warning-light",
  Sender: "success-light",
  Risk: "outline",
  Finance: "primary-light",
}
