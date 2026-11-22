export type TicketQueue =
  | "Platform"
  | "Billing"
  | "Authentication"
  | "Integrations"
export type TicketPriority = "Urgent" | "High" | "Low"
export type TicketStatus = "Open" | "Pending" | "Resolved"

export interface Assignee {
  id: string
  name: string
  avatar: string
}

export interface Ticket {
  id: string
  number: string
  title: string
  requester: { name: string; company: string; avatar?: string }
  queue: TicketQueue
  priority: TicketPriority
  /** Minutes until breach; negative is breached, null has no live SLA. */
  slaMinutes: number | null
  slaNote: string
  status: TicketStatus
  openedAgo: string
  assigneeId: string | null
}

export const SUPPORT_ASSIGNEES: Assignee[] = [
  {
    id: "maya-patel",
    name: "Maya Patel",
    avatar: "https://i.pravatar.cc/96?img=47",
  },
  {
    id: "daniel-ortiz",
    name: "Daniel Ortiz",
    avatar: "https://i.pravatar.cc/96?img=12",
  },
  {
    id: "tom-becker",
    name: "Tom Becker",
    avatar: "https://i.pravatar.cc/96?img=53",
  },
  {
    id: "priya-shah",
    name: "Priya Shah",
    avatar: "https://i.pravatar.cc/96?img=45",
  },
]

export const SUPPORT_TICKETS: Ticket[] = [
  {
    id: "sup-1831",
    number: "SUP-1831",
    title: "Webhook signatures stop validating in EU region only",
    requester: {
      name: "Theo Vincent",
      company: "Atlas Fleet",
      avatar: "https://i.pravatar.cc/96?img=15",
    },
    queue: "Platform",
    priority: "Urgent",
    slaMinutes: -14,
    slaNote: "Needs immediate follow-up",
    status: "Pending",
    openedAgo: "Opened 2h ago",
    assigneeId: "maya-patel",
  },
  {
    id: "sup-1804",
    number: "SUP-1804",
    title: "Ledger correction completed and refund receipt confirmed",
    requester: {
      name: "Sofia Kim",
      company: "Bright Harbor",
      avatar: "https://i.pravatar.cc/96?img=26",
    },
    queue: "Billing",
    priority: "Low",
    slaMinutes: null,
    slaNote: "No live SLA",
    status: "Resolved",
    openedAgo: "Opened yesterday",
    assigneeId: "daniel-ortiz",
  },
  {
    id: "sup-1793",
    number: "SUP-1793",
    title: "Need audit trail export before Monday security review",
    requester: { name: "Harper Lowe", company: "Veritas Grid" },
    queue: "Authentication",
    priority: "Urgent",
    slaMinutes: 18,
    slaNote: "Reply target is close",
    status: "Open",
    openedAgo: "Opened 22m ago",
    assigneeId: null,
  },
  {
    id: "sup-1842",
    number: "SUP-1842",
    title: "SSO claims fail after Okta certificate rotation",
    requester: { name: "Jordan Park", company: "Northstar Labs" },
    queue: "Authentication",
    priority: "Urgent",
    slaMinutes: 28,
    slaNote: "Reply target is close",
    status: "Pending",
    openedAgo: "Opened 38m ago",
    assigneeId: "priya-shah",
  },
  {
    id: "sup-1822",
    number: "SUP-1822",
    title: "Enterprise invoice PDF renders missing tax address block",
    requester: {
      name: "Lena Foster",
      company: "Shoreline Capital",
      avatar: "https://i.pravatar.cc/96?img=44",
    },
    queue: "Billing",
    priority: "High",
    slaMinutes: 34,
    slaNote: "Reply target is close",
    status: "Open",
    openedAgo: "Opened 54m ago",
    assigneeId: "daniel-ortiz",
  },
  {
    id: "sup-1798",
    number: "SUP-1798",
    title: "Slack installation skips channel permissions on reconnect",
    requester: {
      name: "Elliot Hart",
      company: "Sunline HQ",
      avatar: "https://i.pravatar.cc/96?img=53",
    },
    queue: "Integrations",
    priority: "High",
    slaMinutes: 43,
    slaNote: "Reply target is close",
    status: "Open",
    openedAgo: "Opened 1h ago",
    assigneeId: null,
  },
  {
    id: "sup-1835",
    number: "SUP-1835",
    title: "API keys rotated without notice, automations failing",
    requester: { name: "Marcus Hale", company: "Northline" },
    queue: "Platform",
    priority: "High",
    slaMinutes: 52,
    slaNote: "Reply target is close",
    status: "Open",
    openedAgo: "Opened 1h ago",
    assigneeId: "tom-becker",
  },
  {
    id: "sup-1828",
    number: "SUP-1828",
    title: "Duplicate charges on annual plan renewal",
    requester: {
      name: "Avery Quinn",
      company: "Sable Interiors",
      avatar: "https://i.pravatar.cc/96?img=20",
    },
    queue: "Billing",
    priority: "Urgent",
    slaMinutes: 65,
    slaNote: "Reply target is comfortable",
    status: "Open",
    openedAgo: "Opened 2h ago",
    assigneeId: "maya-patel",
  },
  {
    id: "sup-1810",
    number: "SUP-1810",
    title: "SSO login loop on Safari after the latest release",
    requester: { name: "Nadia Petrov", company: "Kestrel Labs" },
    queue: "Authentication",
    priority: "High",
    slaMinutes: 66,
    slaNote: "Reply target is comfortable",
    status: "Pending",
    openedAgo: "Opened 3h ago",
    assigneeId: "priya-shah",
  },
  {
    id: "sup-1806",
    number: "SUP-1806",
    title: "Webhook retries exceed the configured limit",
    requester: {
      name: "Owen Park",
      company: "Cobalt AI",
      avatar: "https://i.pravatar.cc/96?img=8",
    },
    queue: "Platform",
    priority: "Low",
    slaMinutes: 120,
    slaNote: "Reply target is comfortable",
    status: "Pending",
    openedAgo: "Opened 5h ago",
    assigneeId: "tom-becker",
  },
  {
    id: "sup-1801",
    number: "SUP-1801",
    title: "Refund not reflected in the customer portal",
    requester: { name: "Camila Reyes", company: "Harbor Coffee" },
    queue: "Billing",
    priority: "Low",
    slaMinutes: 180,
    slaNote: "Reply target is comfortable",
    status: "Resolved",
    openedAgo: "Opened 6h ago",
    assigneeId: "daniel-ortiz",
  },
]

export const SLA_NEAR_MINUTES = 60

export function ticketSlaLabel(ticket: Ticket) {
  if (ticket.slaMinutes === null) return "Closed"
  if (ticket.slaMinutes < 0) return `Breached ${Math.abs(ticket.slaMinutes)}m`
  return `${ticket.slaMinutes}m left`
}

export function queueCounts(tickets: Ticket[]) {
  return {
    visible: tickets.length,
    unassigned: tickets.filter((ticket) => !ticket.assigneeId).length,
    nearSla: tickets.filter(
      (ticket) =>
        ticket.slaMinutes !== null && ticket.slaMinutes <= SLA_NEAR_MINUTES,
    ).length,
  }
}
