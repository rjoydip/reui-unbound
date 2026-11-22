export type Channel = "Search" | "Shopping" | "Video" | "Social" | "Display"

export type Stage = "Prospecting" | "Retargeting" | "Retention"

export type Verdict = "On target" | "At risk" | "Missing"

export interface TargetRevision {
  id: string
  field: "ROAS" | "CPA"
  from: number
  to: number
  date: string
  by: string
  note: string
}

export interface TargetCampaign {
  id: string
  name: string
  channel: Channel
  stage: Stage
  roasTarget: number
  roasActual: number
  cpaTarget: number
  cpaActual: number
  spend: number
  revisions: TargetRevision[]
}

export const STAGES: Stage[] = ["Prospecting", "Retargeting", "Retention"]

export const CAMPAIGNS: TargetCampaign[] = [
  {
    id: "tgt-01",
    name: "Coastline Shell Generic",
    channel: "Search",
    stage: "Prospecting",
    roasTarget: 3.6,
    roasActual: 4.45,
    cpaTarget: 46,
    cpaActual: 37.32,
    spend: 48200,
    revisions: [
      {
        id: "rev-01",
        field: "ROAS",
        from: 3.2,
        to: 3.6,
        date: "Oct 12, 2026",
        by: "Maya Chen",
        note: "Raised after Q3 margin review.",
      },
    ],
  },
  {
    id: "tgt-02",
    name: "Ridge Boots Brand Exact",
    channel: "Shopping",
    stage: "Prospecting",
    roasTarget: 6.0,
    roasActual: 7.12,
    cpaTarget: 24,
    cpaActual: 21.13,
    spend: 39100,
    revisions: [],
  },
  {
    id: "tgt-03",
    name: "Trailhead Jacket Phrase",
    channel: "Search",
    stage: "Prospecting",
    roasTarget: 5.2,
    roasActual: 5.68,
    cpaTarget: 30,
    cpaActual: 27.93,
    spend: 35400,
    revisions: [
      {
        id: "rev-02",
        field: "CPA",
        from: 32,
        to: 30,
        date: "Sep 28, 2026",
        by: "Daniel Ortiz",
        note: "Efficiency gain from phrase match cleanup.",
      },
    ],
  },
  {
    id: "tgt-04",
    name: "Basecamp Tent Evergreen",
    channel: "Search",
    stage: "Retargeting",
    roasTarget: 4.2,
    roasActual: 4.47,
    cpaTarget: 58,
    cpaActual: 55.81,
    spend: 31700,
    revisions: [],
  },
  {
    id: "tgt-05",
    name: "Summit Pack Launch",
    channel: "Video",
    stage: "Prospecting",
    roasTarget: 3.8,
    roasActual: 3.28,
    cpaTarget: 42,
    cpaActual: 39.88,
    spend: 29900,
    revisions: [
      {
        id: "rev-03",
        field: "ROAS",
        from: 3.5,
        to: 3.8,
        date: "Oct 3, 2026",
        by: "Maya Chen",
        note: "Holiday launch needs to clear paid media.",
      },
    ],
  },
  {
    id: "tgt-06",
    name: "Alpine Fleece Competitor",
    channel: "Search",
    stage: "Prospecting",
    roasTarget: 3.4,
    roasActual: 2.35,
    cpaTarget: 44,
    cpaActual: 61.18,
    spend: 27600,
    revisions: [
      {
        id: "rev-04",
        field: "ROAS",
        from: 3.1,
        to: 3.4,
        date: "Oct 9, 2026",
        by: "Priya Shah",
        note: "Competitor terms should earn their keep.",
      },
      {
        id: "rev-05",
        field: "CPA",
        from: 48,
        to: 44,
        date: "Oct 9, 2026",
        by: "Priya Shah",
        note: "Tightened alongside the ROAS raise.",
      },
    ],
  },
  {
    id: "tgt-07",
    name: "Basecamp Tent Price Drop",
    channel: "Shopping",
    stage: "Retargeting",
    roasTarget: 4.6,
    roasActual: 6.05,
    cpaTarget: 64,
    cpaActual: 50.59,
    spend: 26100,
    revisions: [],
  },
  {
    id: "tgt-08",
    name: "Glacier Gloves Preview",
    channel: "Search",
    stage: "Retargeting",
    roasTarget: 3.2,
    roasActual: 3.6,
    cpaTarget: 26,
    cpaActual: 23.57,
    spend: 24400,
    revisions: [
      {
        id: "rev-06",
        field: "CPA",
        from: 28,
        to: 26,
        date: "Sep 19, 2026",
        by: "Daniel Ortiz",
        note: "Preview list converts better than plan.",
      },
    ],
  },
  {
    id: "tgt-09",
    name: "Canyon Bottle Feed",
    channel: "Shopping",
    stage: "Retargeting",
    roasTarget: 4.0,
    roasActual: 3.2,
    cpaTarget: 18,
    cpaActual: 22.5,
    spend: 21800,
    revisions: [],
  },
  {
    id: "tgt-10",
    name: "Harbor Duffle Bundle Offer",
    channel: "Video",
    stage: "Retention",
    roasTarget: 3.9,
    roasActual: 3.57,
    cpaTarget: 52,
    cpaActual: 57.62,
    spend: 19600,
    revisions: [
      {
        id: "rev-07",
        field: "CPA",
        from: 55,
        to: 52,
        date: "Oct 15, 2026",
        by: "Maya Chen",
        note: "Bundles should not cost more than singles.",
      },
    ],
  },
  {
    id: "tgt-11",
    name: "Ember Stone Retention",
    channel: "Social",
    stage: "Retention",
    roasTarget: 5.0,
    roasActual: 5.42,
    cpaTarget: 34,
    cpaActual: 31.8,
    spend: 18400,
    revisions: [],
  },
  {
    id: "tgt-12",
    name: "Northpeak Shell Loyalty",
    channel: "Search",
    stage: "Retention",
    roasTarget: 4.4,
    roasActual: 4.02,
    cpaTarget: 38,
    cpaActual: 41.2,
    spend: 16900,
    revisions: [
      {
        id: "rev-08",
        field: "ROAS",
        from: 4.0,
        to: 4.4,
        date: "Oct 1, 2026",
        by: "Priya Shah",
        note: "Loyalty cohort has no acquisition cost.",
      },
    ],
  },
  {
    id: "tgt-13",
    name: "Meadow Hammock Winback",
    channel: "Social",
    stage: "Retention",
    roasTarget: 3.0,
    roasActual: 3.35,
    cpaTarget: 29,
    cpaActual: 26.1,
    spend: 15300,
    revisions: [],
  },
  {
    id: "tgt-14",
    name: "Alpine Fleece Prospecting",
    channel: "Video",
    stage: "Prospecting",
    roasTarget: 3.5,
    roasActual: 2.1,
    cpaTarget: 48,
    cpaActual: 72,
    spend: 14200,
    revisions: [
      {
        id: "rev-09",
        field: "ROAS",
        from: 3.2,
        to: 3.5,
        date: "Sep 30, 2026",
        by: "Daniel Ortiz",
        note: "Cold audience test budget gate.",
      },
    ],
  },
  {
    id: "tgt-15",
    name: "Summit Pack Retarget",
    channel: "Display",
    stage: "Retargeting",
    roasTarget: 4.0,
    roasActual: 2.8,
    cpaTarget: 40,
    cpaActual: 47.5,
    spend: 12800,
    revisions: [],
  },
  {
    id: "tgt-16",
    name: "Glacier Gloves Brand",
    channel: "Search",
    stage: "Prospecting",
    roasTarget: 6.2,
    roasActual: 6.8,
    cpaTarget: 22,
    cpaActual: 19.4,
    spend: 11400,
    revisions: [],
  },
]

/** Positive is good: ROAS above target or CPA below target. */
export function roasSpread(campaign: TargetCampaign) {
  return ((campaign.roasActual - campaign.roasTarget) / campaign.roasTarget) * 100
}

/** Positive is good: a lower CPA than the target. */
export function cpaSpread(campaign: TargetCampaign) {
  return ((campaign.cpaTarget - campaign.cpaActual) / campaign.cpaTarget) * 100
}

export function verdict(campaign: TargetCampaign): Verdict {
  const roas = roasSpread(campaign)
  const cpa = cpaSpread(campaign)

  if (roas >= 0 && cpa >= 0) return "On target"
  if (roas < -15 || cpa < -20) return "Missing"
  return "At risk"
}

export function verdictCounts(campaigns: TargetCampaign[]) {
  return {
    onTarget: campaigns.filter((campaign) => verdict(campaign) === "On target")
      .length,
    atRisk: campaigns.filter((campaign) => verdict(campaign) === "At risk").length,
    missing: campaigns.filter((campaign) => verdict(campaign) === "Missing")
      .length,
  }
}

export function stageCounts(campaigns: TargetCampaign[]) {
  return {
    all: campaigns.length,
    Prospecting: campaigns.filter((c) => c.stage === "Prospecting").length,
    Retargeting: campaigns.filter((c) => c.stage === "Retargeting").length,
    Retention: campaigns.filter((c) => c.stage === "Retention").length,
  }
}

export function formatMoney(amount: number, digits = 0) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(amount)
}

export function formatSpread(value: number) {
  return `${value > 0 ? "+" : ""}${value.toFixed(0)}%`
}
