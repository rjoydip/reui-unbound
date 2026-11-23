export type CohortTab = "Intake area" | "Booking strength" | "Hold risk"

export interface CohortMetrics {
  answers: number
  verified: number
  verifiedPct: number
  booked: number
  bookedPct: number
  arrived: number
  arrivedPct: number
  started: number
  startedPct: number
  hold: number
  holdPct: number
}

export interface CohortChild extends CohortMetrics {
  id: string
  code: string
  name: string
  description: string
}

export interface CohortGroup extends CohortMetrics {
  id: string
  name: string
  description: string
  count: number
  children: CohortChild[]
}

const m = (
  answers: number,
  verified: number,
  verifiedPct: number,
  booked: number,
  bookedPct: number,
  arrived: number,
  arrivedPct: number,
  started: number,
  startedPct: number,
  hold: number,
  holdPct: number,
): CohortMetrics => ({
  answers,
  verified,
  verifiedPct,
  booked,
  bookedPct,
  arrived,
  arrivedPct,
  started,
  startedPct,
  hold,
  holdPct,
})

export const INTAKE_GROUPS: CohortGroup[] = [
  {
    id: "clinical",
    name: "Clinical Fit",
    description: "Need, referral, and ...",
    count: 2,
    ...m(1281, 1060, 83, 768, 60, 638, 50, 552, 43, 95, 7),
    children: [
      { id: "q1", code: "Q1", name: "Needs care this week", description: "Acute pain and mobility limits", ...m(642, 548, 85, 392, 61, 328, 51, 284, 44, 39, 6) },
      { id: "q2", code: "Q2", name: "Imaging is ready", description: "X-ray or MRI attached", ...m(639, 512, 80, 376, 59, 310, 49, 268, 42, 56, 9) },
    ],
  },
  {
    id: "coverage",
    name: "Coverage Fit",
    description: "Plan match and ...",
    count: 2,
    ...m(1271, 978, 77, 672, 53, 525, 41, 449, 35, 160, 13),
    children: [
      { id: "q4", code: "Q4", name: "Plan matches network", description: "Payer accepted at main camp...", ...m(640, 502, 78, 354, 55, 279, 44, 240, 38, 68, 11) },
      { id: "q3", code: "Q3", name: "Prior auth status", description: "Authorization known at intake", ...m(631, 476, 75, 318, 50, 246, 39, 209, 33, 92, 15) },
    ],
  },
  {
    id: "visit",
    name: "Visit Fit",
    description: "Slot, travel, caregiver, ...",
    count: 4,
    ...m(2433, 1722, 71, 1202, 49, 993, 41, 848, 35, 257, 11),
    children: [
      { id: "q5", code: "Q5", name: "Travel distance is workable", description: "30 minute radius from clinic", ...m(700, 500, 72, 350, 50, 290, 41, 250, 36, 75, 11) },
      { id: "q6", code: "Q6", name: "Caregiver is available", description: "Adult escort confirmed", ...m(600, 420, 70, 300, 50, 245, 41, 210, 35, 60, 10) },
      { id: "q7", code: "Q7", name: "Slot matches preference", description: "Morning appointment preferred", ...m(550, 390, 71, 270, 49, 225, 41, 190, 35, 62, 11) },
      { id: "q8", code: "Q8", name: "Pre-op clearance attached", description: "Cardiology note on file", ...m(583, 412, 71, 282, 48, 233, 40, 198, 34, 60, 10) },
    ],
  },
]

export const BOOKING_GROUPS: CohortGroup[] = [
  {
    id: "strong", name: "Strong booking", description: "55%+ booked", count: 3, ...m(1921, 1562, 81, 1122, 58, 917, 48, 792, 41, 163, 8),
    children: [
      { id: "b1", code: "B1", name: "Fast confirmation", description: "Booked within one day", ...m(700, 570, 81, 410, 59, 335, 48, 289, 41, 60, 9) },
      { id: "b2", code: "B2", name: "Same-week availability", description: "Open slot within five days", ...m(650, 530, 82, 380, 58, 310, 48, 268, 41, 55, 8) },
      { id: "b3", code: "B3", name: "Payer accepted", description: "In-network confirmation", ...m(571, 462, 81, 332, 58, 272, 48, 235, 41, 48, 8) },
    ],
  },
  {
    id: "moderate", name: "Moderate booking", description: "35 to 54%...", count: 5, ...m(3064, 2198, 72, 1520, 50, 1239, 40, 1057, 34, 349, 11),
    children: [
      { id: "b4", code: "B4", name: "Callback required", description: "Patient requests a callback", ...m(600, 430, 72, 300, 50, 245, 41, 210, 35, 70, 12) },
      { id: "b5", code: "B5", name: "Slot hold expired", description: "Temporary hold released", ...m(620, 450, 73, 310, 50, 252, 41, 215, 35, 72, 12) },
      { id: "b6", code: "B6", name: "Transport unclear", description: "Ride coordination pending", ...m(610, 440, 72, 302, 49, 246, 40, 210, 34, 69, 11) },
      { id: "b7", code: "B7", name: "Second opinion needed", description: "Awaiting specialist review", ...m(615, 440, 72, 304, 49, 247, 40, 211, 34, 69, 11) },
      { id: "b8", code: "B8", name: "Preference conflict", description: "No matching clinic time", ...m(619, 438, 71, 304, 49, 249, 40, 211, 34, 69, 11) },
    ],
  },
]

export const HOLD_GROUPS: CohortGroup[] = [
  {
    id: "high", name: "High hold risk", description: "14%+ held", count: 2, ...m(1235, 874, 71, 599, 49, 477, 39, 405, 33, 175, 14),
    children: [
      { id: "h1", code: "H1", name: "Auth not confirmed", description: "Awaiting payer response", ...m(620, 440, 71, 300, 48, 239, 39, 203, 33, 88, 14) },
      { id: "h2", code: "H2", name: "Financial clearance", description: "Balance estimate pending", ...m(615, 434, 71, 299, 49, 238, 39, 202, 33, 87, 14) },
    ],
  },
  {
    id: "watch", name: "Watch list", description: "10 to 13% held", count: 2, ...m(1258, 923, 73, 642, 51, 515, 41, 443, 35, 145, 12),
    children: [
      { id: "h3", code: "H3", name: "Missing referral", description: "Referral packet incomplete", ...m(630, 462, 73, 321, 51, 258, 41, 222, 35, 73, 12) },
      { id: "h4", code: "H4", name: "Insurance mismatch", description: "Plan variant needs review", ...m(628, 461, 73, 321, 51, 257, 41, 221, 35, 72, 11) },
    ],
  },
  {
    id: "low", name: "Low hold risk", description: "Under 10% held", count: 4, ...m(2492, 1963, 79, 1401, 56, 1164, 47, 1001, 40, 192, 8),
    children: [
      { id: "h5", code: "H5", name: "Paperwork complete", description: "All documents verified", ...m(620, 490, 79, 350, 56, 290, 47, 250, 40, 48, 8) },
      { id: "h6", code: "H6", name: "Benefits checked", description: "Coverage confirmed", ...m(625, 495, 79, 352, 56, 292, 47, 252, 40, 48, 8) },
      { id: "h7", code: "H7", name: "Transport arranged", description: "Ride booked by clinic", ...m(624, 490, 79, 350, 56, 291, 47, 251, 40, 48, 8) },
      { id: "h8", code: "H8", name: "Care plan shared", description: "Patient received next steps", ...m(623, 488, 78, 349, 56, 291, 47, 248, 40, 48, 8) },
    ],
  },
]

export const GROUPS_BY_TAB: Record<CohortTab, CohortGroup[]> = {
  "Intake area": INTAKE_GROUPS,
  "Booking strength": BOOKING_GROUPS,
  "Hold risk": HOLD_GROUPS,
}

export const TOTALS = m(4985, 3760, 75, 2642, 53, 2156, 43, 1849, 37, 512, 10)
