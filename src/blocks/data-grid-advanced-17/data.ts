export type Team = "Tier 1" | "Tier 2" | "Escalations"
export type CoachingStatus = "on-track" | "suggest" | "coaching" | "scheduled"

export interface WeekReview {
  week: string
  qa: number
  csat: number
  sla: number
  reply: number
  resolve: number
}

export interface ReviewNote {
  date: string
  label: string
  detail: string
}

export interface Agent {
  id: string
  name: string
  email: string
  avatar: string
  team: Team
  started: string
  qa: number
  qaDelta: number
  reopens: number
  reopenTotal: number
  /** good, neutral, bad */
  csat: [number, number, number]
  firstReply: number
  resolve: number
  sla: number
  coaching: CoachingStatus
  focus: string
  weeks: WeekReview[]
  notes: ReviewNote[]
}

export const REVIEW_WEEKS = ["Oct 19", "Oct 26", "Nov 2", "Nov 9"]

export const TEAMS: Team[] = ["Tier 1", "Tier 2", "Escalations"]

export const COACHING_META: Record<
  CoachingStatus,
  { label: string; variant: "success-light" | "warning-light" | "info-light" | "outline" }
> = {
  "on-track": { label: "On track", variant: "success-light" },
  suggest: { label: "Suggest", variant: "warning-light" },
  coaching: { label: "Coaching", variant: "info-light" },
  scheduled: { label: "Scheduled", variant: "outline" },
}

function weeks(qa: [number, number, number, number], csat: number, sla: number): WeekReview[] {
  return REVIEW_WEEKS.map((week, index) => ({
    week,
    qa: qa[index]!,
    csat: csat + (index - 1) * 0.6,
    sla: sla - (index === 1 ? 1 : 0),
    reply: 8 + index * 2,
    resolve: 180 + index * 35,
  }))
}

export const AGENTS: Agent[] = [
  {
    id: "a1", name: "Amir Nasser", email: "amir.nasser@acme.io", avatar: "https://i.pravatar.cc/96?img=12", team: "Tier 1", started: "Mar 2024",
    qa: 92, qaDelta: 1, reopens: 3, reopenTotal: 262, csat: [57, 1, 1], firstReply: 9, resolve: 190, sla: 97,
    coaching: "on-track", focus: "Complex billing disputes",
    weeks: weeks([91, 92, 92, 93], 97, 98),
    notes: [
      { date: "Nov 6", label: "QA calibration", detail: "Strong empathy on a refund escalation; keep probing for root cause earlier." },
      { date: "Oct 23", label: "Weekly review", detail: "Reply speed steady at 9 minutes, best on the team." },
    ],
  },
  {
    id: "a2", name: "Aylin Kaya", email: "aylin.kaya@acme.io", avatar: "https://i.pravatar.cc/96?img=32", team: "Tier 1", started: "Sep 2023",
    qa: 74, qaDelta: 4, reopens: 13, reopenTotal: 181, csat: [34, 6, 3], firstReply: 22, resolve: 460, sla: 95,
    coaching: "scheduled", focus: "Reopen prevention",
    weeks: weeks([68, 71, 73, 74], 79, 95),
    notes: [
      { date: "Nov 8", label: "Coaching scheduled", detail: "Nov 12 session on closing loops and confirming the fix." },
      { date: "Oct 30", label: "Weekly review", detail: "Reopen rate still above target; ticket reads are improving." },
    ],
  },
  {
    id: "a3", name: "Ciara Weiss", email: "ciara.weiss@acme.io", avatar: "https://i.pravatar.cc/96?img=45", team: "Tier 1", started: "Jan 2024",
    qa: 88, qaDelta: -2, reopens: 9, reopenTotal: 214, csat: [44, 3, 1], firstReply: 14, resolve: 290, sla: 97,
    coaching: "on-track", focus: "API errors",
    weeks: weeks([90, 89, 88, 88], 92, 97),
    notes: [
      { date: "Nov 4", label: "QA review", detail: "Two misses on macros, tone remains excellent." },
    ],
  },
  {
    id: "a4", name: "Daniel Okafor", email: "daniel.okafor@acme.io", avatar: "https://i.pravatar.cc/96?img=15", team: "Tier 2", started: "Jun 2022",
    qa: 78, qaDelta: -6, reopens: 19, reopenTotal: 160, csat: [29, 7, 2], firstReply: 41, resolve: 680, sla: 91,
    coaching: "suggest", focus: "First reply speed",
    weeks: weeks([84, 82, 79, 78], 76, 91),
    notes: [
      { date: "Nov 9", label: "Flagged", detail: "First reply slipped past 40 minutes twice this week." },
      { date: "Oct 27", label: "Weekly review", detail: "Handling a high share of escalation overflow." },
    ],
  },
  {
    id: "a5", name: "Elif Arslan", email: "elif.arslan@acme.io", avatar: "https://i.pravatar.cc/96?img=26", team: "Tier 1", started: "Feb 2024",
    qa: 95, qaDelta: 2, reopens: 7, reopenTotal: 230, csat: [42, 1, 1], firstReply: 11, resolve: 220, sla: 98,
    coaching: "on-track", focus: "Mentoring new agents",
    weeks: weeks([93, 94, 95, 95], 95, 98),
    notes: [
      { date: "Nov 7", label: "QA calibration", detail: "Model response for the authentication queue." },
    ],
  },
  {
    id: "a6", name: "Felix Wagner", email: "felix.wagner@acme.io", avatar: "https://i.pravatar.cc/96?img=53", team: "Tier 2", started: "Nov 2023",
    qa: 72, qaDelta: 5, reopens: 9, reopenTotal: 88, csat: [22, 4, 1], firstReply: 28, resolve: 545, sla: 92,
    coaching: "scheduled", focus: "Resolution quality",
    weeks: weeks([64, 67, 70, 72], 81, 92),
    notes: [
      { date: "Nov 5", label: "Weekly review", detail: "Resolution notes improved; still missing reproduction steps." },
    ],
  },
  {
    id: "a7", name: "Freya Nilsen", email: "freya.nilsen@acme.io", avatar: "https://i.pravatar.cc/96?img=47", team: "Tier 1", started: "May 2023",
    qa: 83, qaDelta: 0, reopens: 11, reopenTotal: 176, csat: [36, 4, 1], firstReply: 17, resolve: 330, sla: 96,
    coaching: "suggest", focus: "Billing queue",
    weeks: weeks([82, 83, 84, 83], 88, 96),
    notes: [
      { date: "Oct 29", label: "Weekly review", detail: "Consistent week, no coaching action needed." },
    ],
  },
  {
    id: "a8", name: "Hannah Becker", email: "hannah.becker@acme.io", avatar: "https://i.pravatar.cc/96?img=20", team: "Tier 1", started: "Aug 2023",
    qa: 90, qaDelta: 3, reopens: 4, reopenTotal: 207, csat: [46, 2, 1], firstReply: 12, resolve: 250, sla: 97,
    coaching: "on-track", focus: "Onboarding flows",
    weeks: weeks([88, 89, 90, 90], 94, 97),
    notes: [
      { date: "Nov 3", label: "QA review", detail: "Clear, structured replies; good use of help center links." },
    ],
  },
  {
    id: "a9", name: "Henrik Dahl", email: "henrik.dahl@acme.io", avatar: "https://i.pravatar.cc/96?img=59", team: "Escalations", started: "Feb 2022",
    qa: 89, qaDelta: 1, reopens: 12, reopenTotal: 248, csat: [46, 3, 2], firstReply: 19, resolve: 375, sla: 94,
    coaching: "on-track", focus: "Enterprise escalations",
    weeks: weeks([87, 88, 89, 89], 90, 94),
    notes: [
      { date: "Nov 6", label: "Escalation review", detail: "Handled two P1s with clean customer comms." },
    ],
  },
  {
    id: "a10", name: "Ines Duarte", email: "ines.duarte@acme.io", avatar: "https://i.pravatar.cc/96?img=36", team: "Tier 1", started: "Oct 2024",
    qa: 82, qaDelta: 7, reopens: 19, reopenTotal: 236, csat: [45, 6, 2], firstReply: 35, resolve: 510, sla: 90,
    coaching: "on-track", focus: "Ticket triage",
    weeks: weeks([72, 76, 80, 82], 90, 90),
    notes: [
      { date: "Nov 10", label: "Coaching started", detail: "Triage drills and reply templates for the first 90 seconds." },
      { date: "Nov 1", label: "QA review", detail: "Big improvement in tagging and priority choice." },
    ],
  },
  {
    id: "a11", name: "Jonas Meyer", email: "jonas.meyer@acme.io", avatar: "https://i.pravatar.cc/96?img=61", team: "Tier 2", started: "Jul 2022",
    qa: 86, qaDelta: -1, reopens: 4, reopenTotal: 198, csat: [40, 3, 1], firstReply: 16, resolve: 290, sla: 96,
    coaching: "on-track", focus: "Integrations",
    weeks: weeks([87, 87, 86, 86], 91, 96),
    notes: [
      { date: "Oct 31", label: "Weekly review", detail: "Deep product knowledge, keep sharing in the channel." },
    ],
  },
  {
    id: "a12", name: "Lena Brandt", email: "lena.brandt@acme.io", avatar: "https://i.pravatar.cc/96?img=24", team: "Escalations", started: "Apr 2023",
    qa: 79, qaDelta: -3, reopens: 11, reopenTotal: 142, csat: [30, 5, 2], firstReply: 24, resolve: 445, sla: 93,
    coaching: "scheduled", focus: "Escalation handoffs",
    weeks: weeks([83, 81, 80, 79], 83, 93),
    notes: [
      { date: "Nov 11", label: "Coaching scheduled", detail: "Nov 14 session on handoff notes and ownership." },
    ],
  },
  {
    id: "a13", name: "Marco Silva", email: "marco.silva@acme.io", avatar: "https://i.pravatar.cc/96?img=68", team: "Tier 1", started: "Jan 2025",
    qa: 69, qaDelta: -8, reopens: 21, reopenTotal: 104, csat: [18, 6, 4], firstReply: 46, resolve: 720, sla: 86,
    coaching: "coaching", focus: "Reply quality",
    weeks: weeks([77, 74, 71, 69], 64, 86),
    notes: [
      { date: "Nov 12", label: "Coaching started", detail: "Two-week plan: shadow Amir, review all CSAT detractor replies." },
      { date: "Nov 8", label: "Flagged", detail: "SLA miss on four tickets and low CSAT for the week." },
    ],
  },
  {
    id: "a14", name: "Noor Haddad", email: "noor.haddad@acme.io", avatar: "https://i.pravatar.cc/96?img=44", team: "Tier 1", started: "Mar 2025",
    qa: 85, qaDelta: 2, reopens: 6, reopenTotal: 152, csat: [33, 3, 1], firstReply: 21, resolve: 360, sla: 95,
    coaching: "on-track", focus: "New product questions",
    weeks: weeks([82, 84, 85, 85], 89, 95),
    notes: [
      { date: "Nov 2", label: "Weekly review", detail: "Growing confidence on the new checkout flow." },
    ],
  },
]

export function csatPercent(agent: Agent) {
  const total = agent.csat[0] + agent.csat[1] + agent.csat[2]
  return total ? (agent.csat[0] / total) * 100 : 0
}

export function formatMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  if (hours === 0) return `${minutes}m`
  return rest === 0 ? `${hours}h` : `${hours}h ${rest}m`
}

export function qaTone(qa: number) {
  if (qa >= 90) return "text-success-foreground border-success/30 bg-success/10"
  if (qa >= 80) return "text-info-foreground border-info/30 bg-info/10"
  if (qa >= 70) return "text-warning-foreground border-warning/30 bg-warning/10"
  return "text-destructive-foreground border-destructive/30 bg-destructive/10"
}

export function qaLabel(qa: number) {
  if (qa >= 90) return "Excellent"
  if (qa >= 80) return "Solid"
  if (qa >= 70) return "Needs work"
  return "At risk"
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}
