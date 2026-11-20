export type ProspectStatus = "new" | "contacted" | "qualified" | "researching" | "disqualified"
export type FitTier = "high" | "medium" | "low"
export type SignalKind = "hiring" | "funding" | "tech"
export type HeadcountBucket = "all" | "1-100" | "101-500" | "501-2000" | "2000+"

export interface Owner {
  id: string
  name: string
  avatar: string
}

export interface Signal {
  kind: SignalKind
  label: string
  detail: string
}

export interface Contact {
  name: string
  title: string
  email: string
}

export interface TimelineEvent {
  date: string
  label: string
  detail: string
  kind: SignalKind | "note"
}

export interface Prospect {
  id: string
  name: string
  industry: string
  hq: string
  website: string
  headcount: number
  growth: number
  fit: number
  ownerId: string | null
  status: ProspectStatus
  signals: Signal[]
  contacts: Contact[]
  timeline: TimelineEvent[]
}

export interface IcpFilters {
  headcount: HeadcountBucket
  industries: string[]
  signals: SignalKind[]
  tier: FitTier | "all"
}

export const OWNERS: Owner[] = [
  { id: "marcus", name: "Marcus Reed", avatar: "https://i.pravatar.cc/96?img=11" },
  { id: "emma", name: "Emma Silva", avatar: "https://i.pravatar.cc/96?img=47" },
  { id: "owen", name: "Owen Park", avatar: "https://i.pravatar.cc/96?img=13" },
  { id: "nadia", name: "Nadia Haddad", avatar: "https://i.pravatar.cc/96?img=44" },
]

export const OWNER_BY_ID = Object.fromEntries(OWNERS.map((owner) => [owner.id, owner]))

export const INDUSTRIES = [
  "Healthcare",
  "Logistics",
  "Manufacturing",
  "Marketing",
  "Retail",
  "SaaS",
]

export const STATUS_META: Record<
  ProspectStatus,
  { label: string; variant: "warning-light" | "invert-light" | "success-light" | "info-light" | "destructive-light" }
> = {
  new: { label: "New", variant: "warning-light" },
  contacted: { label: "Contacted", variant: "invert-light" },
  qualified: { label: "Qualified", variant: "success-light" },
  researching: { label: "Researching", variant: "info-light" },
  disqualified: { label: "Disqualified", variant: "destructive-light" },
}

export const SIGNAL_META: Record<SignalKind, { label: string; variant: "info-light" | "success-light" | "warning-light" }> = {
  hiring: { label: "Hiring", variant: "info-light" },
  funding: { label: "Funding", variant: "success-light" },
  tech: { label: "Tech", variant: "warning-light" },
}

export const EMPTY_FILTERS: IcpFilters = {
  headcount: "all",
  industries: [],
  signals: [],
  tier: "all",
}

export const SAVED_LISTS: { id: string; name: string; note: string; filters: IcpFilters }[] = [
  {
    id: "enterprise-mfg",
    name: "Enterprise manufacturers",
    note: "500+ heads · manufacturing",
    filters: { headcount: "501-2000", industries: ["Manufacturing"], signals: [], tier: "all" },
  },
  {
    id: "recent-funding",
    name: "Recent funding",
    note: "Any industry · funding signal",
    filters: { headcount: "all", industries: [], signals: ["funding"], tier: "all" },
  },
  {
    id: "warm-retail",
    name: "Warm retail",
    note: "Any fit · retail",
    filters: { headcount: "all", industries: ["Retail"], signals: [], tier: "all" },
  },
]

export const PROSPECTS: Prospect[] = [
  {
    id: "p1", name: "Arcwell Systems", industry: "Manufacturing", hq: "Chicago, IL", website: "arcwell.io", headcount: 1450, growth: 5, fit: 64, ownerId: "marcus", status: "contacted",
    signals: [
      { kind: "hiring", label: "12 open roles", detail: "Ops and RevOps hiring up 18% this quarter." },
      { kind: "tech", label: "SAP + Snowflake", detail: "Job posts mention SAP migration and a new warehouse." },
    ],
    contacts: [
      { name: "Dana Whitfield", title: "VP Operations", email: "dana@arcwell.io" },
      { name: "Ravi Menon", title: "Director IT", email: "ravi@arcwell.io" },
    ],
    timeline: [
      { date: "Nov 12", label: "Discovery call booked", detail: "Marcus booked 30 minutes with Dana for Nov 19.", kind: "note" },
      { date: "Nov 4", label: "Hiring signal", detail: "12 operations roles opened across two plants.", kind: "hiring" },
    ],
  },
  {
    id: "p2", name: "Bramble Bio", industry: "Healthcare", hq: "Boston, MA", website: "bramblebio.com", headcount: 88, growth: 38, fit: 72, ownerId: "emma", status: "new",
    signals: [
      { kind: "funding", label: "Series A $24M", detail: "Closed Oct 30 to expand clinical operations." },
      { kind: "hiring", label: "9 open roles", detail: "Clinical ops and quality assurance." },
    ],
    contacts: [
      { name: "Dr. Iris Bell", title: "COO", email: "iris@bramblebio.com" },
      { name: "Theo Marsh", title: "Head of QA", email: "theo@bramblebio.com" },
    ],
    timeline: [
      { date: "Nov 10", label: "Funding announced", detail: "Series A led by Northline Ventures.", kind: "funding" },
      { date: "Nov 6", label: "Added to ICP list", detail: "Headcount growth crossed the fast-growth threshold.", kind: "note" },
    ],
  },
  {
    id: "p3", name: "Brindle Commerce", industry: "Retail", hq: "Austin, TX", website: "brindle.co", headcount: 58, growth: 12, fit: 52, ownerId: null, status: "new",
    signals: [
      { kind: "tech", label: "Shopify Plus", detail: "Migrated from WooCommerce in September." },
    ],
    contacts: [
      { name: "Nico Alvarez", title: "Founder", email: "nico@brindle.co" },
    ],
    timeline: [
      { date: "Nov 8", label: "Tech signal", detail: "Detected Shopify Plus in the storefront stack.", kind: "tech" },
    ],
  },
  {
    id: "p4", name: "Cobalt Route", industry: "Logistics", hq: "Denver, CO", website: "cobaltroute.com", headcount: 340, growth: 13, fit: 70, ownerId: "owen", status: "contacted",
    signals: [
      { kind: "hiring", label: "6 dispatcher roles", detail: "New Denver hub opens in January." },
      { kind: "funding", label: "Series B $36M", detail: "Announced Oct 22; expansion into Mexico." },
    ],
    contacts: [
      { name: "Marta Klein", title: "COO", email: "marta@cobaltroute.com" },
      { name: "Ben Ortiz", title: "VP Sales", email: "ben@cobaltroute.com" },
    ],
    timeline: [
      { date: "Nov 9", label: "Follow-up email", detail: "Owen sent the integration one-pager.", kind: "note" },
      { date: "Oct 22", label: "Funding announced", detail: "Series B to fund cross-border expansion.", kind: "funding" },
    ],
  },
  {
    id: "p5", name: "Corvid Health", industry: "Healthcare", hq: "Seattle, WA", website: "corvidhealth.com", headcount: 130, growth: 2, fit: 54, ownerId: "emma", status: "contacted",
    signals: [
      { kind: "hiring", label: "3 clinical roles", detail: "Steady hiring, no new locations." },
    ],
    contacts: [
      { name: "Dr. Lena Voss", title: "CMO", email: "lena@corvidhealth.com" },
    ],
    timeline: [
      { date: "Nov 5", label: "Reply received", detail: "Asked for a security overview before booking.", kind: "note" },
    ],
  },
  {
    id: "p6", name: "Emberly Foods", industry: "Retail", hq: "Portland, OR", website: "emberlyfoods.com", headcount: 900, growth: 3, fit: 37, ownerId: "owen", status: "researching",
    signals: [
      { kind: "hiring", label: "4 retail ops roles", detail: "Two new stores planned for spring." },
      { kind: "tech", label: "NetSuite", detail: "ERP consolidation project in progress." },
    ],
    contacts: [
      { name: "Sam Porter", title: "VP Retail", email: "sam@emberlyfoods.com" },
    ],
    timeline: [
      { date: "Nov 2", label: "Research note", detail: "Store rollout may stall until the ERP migration lands.", kind: "note" },
    ],
  },
  {
    id: "p7", name: "Ferncroft Retail", industry: "Retail", hq: "Atlanta, GA", website: "ferncroft.com", headcount: 1200, growth: 1, fit: 44, ownerId: "nadia", status: "disqualified",
    signals: [
      { kind: "tech", label: "Salesforce Commerce", detail: "Locked into a three-year contract." },
    ],
    contacts: [
      { name: "Cara Boyd", title: "CIO", email: "cara@ferncroft.com" },
    ],
    timeline: [
      { date: "Oct 30", label: "Disqualified", detail: "Platform lock-in until 2028; revisit next cycle.", kind: "note" },
    ],
  },
  {
    id: "p8", name: "Glasshouse Studio", industry: "Marketing", hq: "Brooklyn, NY", website: "glasshouse.studio", headcount: 32, growth: -3, fit: 29, ownerId: null, status: "new",
    signals: [],
    contacts: [
      { name: "Milo Chen", title: "Managing Partner", email: "milo@glasshouse.studio" },
    ],
    timeline: [
      { date: "Oct 29", label: "Added to database", detail: "Small agency, outside the current ICP.", kind: "note" },
    ],
  },
  {
    id: "p9", name: "Granite Peak Metals", industry: "Manufacturing", hq: "Pittsburgh, PA", website: "granitepeak.com", headcount: 2100, growth: -6, fit: 33, ownerId: "nadia", status: "researching",
    signals: [
      { kind: "funding", label: "Debt facility $80M", detail: "Refinancing announced in October." },
    ],
    contacts: [
      { name: "Hank Rollins", title: "CFO", email: "hank@granitepeak.com" },
    ],
    timeline: [
      { date: "Oct 27", label: "Research note", detail: "Headcount down two quarters; cost program underway.", kind: "note" },
    ],
  },
  {
    id: "p10", name: "Halden Robotics", industry: "Manufacturing", hq: "Detroit, MI", website: "halden.dev", headcount: 520, growth: 11, fit: 81, ownerId: "marcus", status: "qualified",
    signals: [
      { kind: "hiring", label: "18 engineering roles", detail: "Controls, software and field service." },
      { kind: "funding", label: "Series C $60M", detail: "Closed Oct 16 for the new assembly line." },
      { kind: "tech", label: "AWS + Kubernetes", detail: "Platform team hiring around a cloud migration." },
    ],
    contacts: [
      { name: "Priya Raman", title: "VP Engineering", email: "priya@halden.dev" },
      { name: "Gus Feld", title: "COO", email: "gus@halden.dev" },
    ],
    timeline: [
      { date: "Nov 13", label: "Technical deep dive", detail: "Marcus and Priya reviewed the integration surface.", kind: "note" },
      { date: "Oct 16", label: "Funding announced", detail: "Series C led by Foundry North.", kind: "funding" },
    ],
  },
  {
    id: "p11", name: "Ivoryline Media", industry: "Marketing", hq: "London, UK", website: "ivoryline.media", headcount: 210, growth: 18, fit: 66, ownerId: "emma", status: "contacted",
    signals: [
      { kind: "funding", label: "Growth round £18M", detail: "Announced Nov 3 to fund US expansion." },
    ],
    contacts: [
      { name: "Sophie Hale", title: "CEO", email: "sophie@ivoryline.media" },
    ],
    timeline: [
      { date: "Nov 11", label: "Intro call", detail: "Emma walked through the reporting use case.", kind: "note" },
      { date: "Nov 3", label: "Funding announced", detail: "Growth round to open a New York office.", kind: "funding" },
    ],
  },
  {
    id: "p12", name: "Juniper Freight", industry: "Logistics", hq: "Rotterdam, NL", website: "juniperfreight.eu", headcount: 780, growth: 9, fit: 58, ownerId: "owen", status: "new",
    signals: [
      { kind: "hiring", label: "14 warehouse roles", detail: "Expanding the Rotterdam cross-dock." },
    ],
    contacts: [
      { name: "Anouk de Vries", title: "Operations Director", email: "anouk@juniperfreight.eu" },
    ],
    timeline: [
      { date: "Nov 7", label: "Hiring signal", detail: "14 roles opened at the Rotterdam hub.", kind: "hiring" },
    ],
  },
  {
    id: "p13", name: "Kestrel Analytics", industry: "SaaS", hq: "Dublin, IE", website: "kestrel.ai", headcount: 160, growth: 24, fit: 76, ownerId: "marcus", status: "qualified",
    signals: [
      { kind: "hiring", label: "7 GTM roles", detail: "First US sales team being built." },
      { kind: "tech", label: "Snowflake + dbt", detail: "Modern data stack, strong technical fit." },
    ],
    contacts: [
      { name: "Eoin Walsh", title: "CRO", email: "eoin@kestrel.ai" },
      { name: "Maeve Doyle", title: "Head of Data", email: "maeve@kestrel.ai" },
    ],
    timeline: [
      { date: "Nov 14", label: "Pricing shared", detail: "Sent the growth-tier proposal to Eoin.", kind: "note" },
      { date: "Nov 1", label: "Tech signal", detail: "Careers page lists Snowflake and dbt experience.", kind: "tech" },
    ],
  },
  {
    id: "p14", name: "Larkspur Labs", industry: "Healthcare", hq: "San Diego, CA", website: "larkspurlabs.com", headcount: 410, growth: 14, fit: 68, ownerId: "nadia", status: "researching",
    signals: [
      { kind: "funding", label: "Series B $42M", detail: "Closed Oct 18; three new clinics planned." },
      { kind: "tech", label: "Epic + MuleSoft", detail: "Integration team is being built out." },
    ],
    contacts: [
      { name: "Dr. Alan Reyes", title: "CMIO", email: "alan@larkspurlabs.com" },
    ],
    timeline: [
      { date: "Nov 6", label: "Research note", detail: "Clinic rollout creates a clear integration wedge.", kind: "note" },
      { date: "Oct 18", label: "Funding announced", detail: "Series B to fund three new clinics.", kind: "funding" },
    ],
  },
  {
    id: "p15", name: "Meridian Works", industry: "Manufacturing", hq: "Cleveland, OH", website: "meridianworks.com", headcount: 2400, growth: 4, fit: 47, ownerId: null, status: "new",
    signals: [
      { kind: "hiring", label: "22 plant roles", detail: "Second shift added at two facilities." },
    ],
    contacts: [
      { name: "Ruth Calloway", title: "VP People", email: "ruth@meridianworks.com" },
    ],
    timeline: [
      { date: "Nov 4", label: "Added to database", detail: "Large account, needs a multi-site pitch.", kind: "note" },
    ],
  },
  {
    id: "p16", name: "Northwind Foods", industry: "Retail", hq: "Toronto, CA", website: "northwindfoods.ca", headcount: 640, growth: 7, fit: 61, ownerId: "emma", status: "contacted",
    signals: [
      { kind: "funding", label: "Series A CAD 30M", detail: "Announced Oct 21 for Ontario expansion." },
    ],
    contacts: [
      { name: "Leah Fontaine", title: "VP Growth", email: "leah@northwindfoods.ca" },
    ],
    timeline: [
      { date: "Nov 12", label: "Second touch", detail: "Emma shared the retail case study.", kind: "note" },
      { date: "Oct 21", label: "Funding announced", detail: "Series A to open six new stores.", kind: "funding" },
    ],
  },
]

export function fitTier(fit: number): FitTier {
  if (fit >= 70) return "high"
  if (fit >= 50) return "medium"
  return "low"
}

export function fitLabel(fit: number) {
  if (fit >= 80) return "Excellent"
  if (fit >= 70) return "Strong"
  if (fit >= 50) return "Moderate"
  return "Weak"
}

export function headcountLabel(size: number) {
  return size >= 1000 ? `${(size / 1000).toFixed(1)}k` : String(size)
}

export function headcountTrend(prospect: Prospect) {
  const start = prospect.headcount / (1 + prospect.growth / 100)
  return Array.from({ length: 10 }, (_, index) => {
    const base = start + ((prospect.headcount - start) * index) / 9
    const wobble = ((prospect.headcount + index * 7) % 9) - 4
    return Math.max(1, Math.round(base + wobble))
  })
}

export function matchesHeadcount(size: number, bucket: HeadcountBucket) {
  if (bucket === "all") return true
  if (bucket === "1-100") return size <= 100
  if (bucket === "101-500") return size > 100 && size <= 500
  if (bucket === "501-2000") return size > 500 && size <= 2000
  return size > 2000
}

export function matchesFilters(prospect: Prospect, filters: IcpFilters) {
  if (!matchesHeadcount(prospect.headcount, filters.headcount)) return false
  if (filters.industries.length > 0 && !filters.industries.includes(prospect.industry)) return false
  if (
    filters.signals.length > 0 &&
    !filters.signals.every((signal) => prospect.signals.some((entry) => entry.kind === signal))
  )
    return false
  if (filters.tier !== "all" && fitTier(prospect.fit) !== filters.tier) return false
  return true
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}
