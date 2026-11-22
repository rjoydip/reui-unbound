export type Desk = "Features" | "Business" | "Culture" | "Science"
export type Stage = "Drafting" | "In Edit" | "Fact Check" | "Ready"
export type Placement = "Lead" | "Feature" | "Brief"
export type Issue = "Issue 42" | "Issue 43"
export type GroupKey = "stage" | "desk" | "issue"

export interface Story {
  id: string
  slug: string
  title: string
  angle: string
  desk: Desk
  stage: Stage
  issue: Issue
  bylines: number[]
  filed: string
  publish: string
  placement: Placement
  assets: number
  notes: number
}

export const STORIES: Story[] = [
  {
    id: "1201",
    slug: "NR-1201",
    title: "The Last Dry Winter",
    angle: "Reservoir towns rewrite what happens when the water runs out",
    desk: "Features",
    stage: "Drafting",
    issue: "Issue 42",
    bylines: [47, 12],
    filed: "06 Jul",
    publish: "14 Aug",
    placement: "Lead",
    assets: 7,
    notes: 12,
  },
  {
    id: "1202",
    slug: "NR-1202",
    title: "Cheap Money Ends",
    angle: "Why regional lenders stopped lending to the towns that need it",
    desk: "Business",
    stage: "Drafting",
    issue: "Issue 42",
    bylines: [12],
    filed: "09 Jul",
    publish: "07 Aug",
    placement: "Feature",
    assets: 3,
    notes: 5,
  },
  {
    id: "1203",
    slug: "NR-1203",
    title: "Night Shift Choirs",
    angle: "Hospital cleaners built a choir that sold out the concert hall",
    desk: "Culture",
    stage: "Drafting",
    issue: "Issue 43",
    bylines: [32, 12],
    filed: "11 Jul",
    publish: "11 Sep",
    placement: "Brief",
    assets: 2,
    notes: 3,
  },
  {
    id: "1204",
    slug: "NR-1204",
    title: "The Grid Goes Quiet",
    angle: "A utility learns to sell less power without losing money",
    desk: "Business",
    stage: "In Edit",
    issue: "Issue 42",
    bylines: [12, 57],
    filed: "24 Jun",
    publish: "14 Aug",
    placement: "Feature",
    assets: 11,
    notes: 18,
  },
  {
    id: "1205",
    slug: "NR-1205",
    title: "The Repair Clause",
    angle: "A right-to-repair bill nobody lobbied for just passed",
    desk: "Business",
    stage: "In Edit",
    issue: "Issue 42",
    bylines: [47, 12, 57],
    filed: "19 Jun",
    publish: "21 Aug",
    placement: "Lead",
    assets: 6,
    notes: 21,
  },
  {
    id: "1206",
    slug: "NR-1206",
    title: "Museum of Ordinary Things",
    angle: "A curator collects receipts, tickets, and other everyday relics",
    desk: "Culture",
    stage: "In Edit",
    issue: "Issue 42",
    bylines: [44],
    filed: "02 Jul",
    publish: "07 Aug",
    placement: "Brief",
    assets: 4,
    notes: 7,
  },
  {
    id: "1207",
    slug: "NR-1207",
    title: "Counting the Kelp",
    angle: "Divers and satellites disagree on what the kelp forest is doing",
    desk: "Science",
    stage: "Fact Check",
    issue: "Issue 42",
    bylines: [47, 44],
    filed: "12 Jun",
    publish: "28 Aug",
    placement: "Feature",
    assets: 9,
    notes: 26,
  },
  {
    id: "1208",
    slug: "NR-1208",
    title: "Who Owns the Aquifer?",
    angle: "Three counties, one permit, four competing claims to the water",
    desk: "Features",
    stage: "Fact Check",
    issue: "Issue 42",
    bylines: [32, 47, 12],
    filed: "05 Jun",
    publish: "14 Aug",
    placement: "Lead",
    assets: 14,
    notes: 33,
  },
  {
    id: "1209",
    slug: "NR-1209",
    title: "The Understudy Economy",
    angle: "Touring shows now run on people who never get the spotlight",
    desk: "Culture",
    stage: "Fact Check",
    issue: "Issue 43",
    bylines: [47, 44],
    filed: "01 Jul",
    publish: "11 Sep",
    placement: "Brief",
    assets: 3,
    notes: 9,
  },
  {
    id: "1210",
    slug: "NR-1210",
    title: "Freight on the Old Line",
    angle: "A closed rail spur reopens and a valley's timetable changes",
    desk: "Business",
    stage: "Ready",
    issue: "Issue 42",
    bylines: [12, 57],
    filed: "28 May",
    publish: "21 Aug",
    placement: "Feature",
    assets: 8,
    notes: 15,
  },
  {
    id: "1211",
    slug: "NR-1211",
    title: "Field Notes: Ash",
    angle: "What a burn scar looks like eleven years after the fire",
    desk: "Science",
    stage: "Ready",
    issue: "Issue 42",
    bylines: [32, 12],
    filed: "02 Jun",
    publish: "28 Aug",
    placement: "Brief",
    assets: 12,
    notes: 6,
  },
  {
    id: "1212",
    slug: "NR-1212",
    title: "The Quiet Ward",
    angle: "A hospice unit that stopped making noise to hear its patients",
    desk: "Features",
    stage: "Ready",
    issue: "Issue 42",
    bylines: [47, 12, 57],
    filed: "21 May",
    publish: "14 Aug",
    placement: "Feature",
    assets: 5,
    notes: 11,
  },
  {
    id: "1213",
    slug: "NR-1213",
    title: "Second Press",
    angle: "A closed print shop reopens as a school for the trade",
    desk: "Culture",
    stage: "Ready",
    issue: "Issue 43",
    bylines: [12, 57],
    filed: "18 Jun",
    publish: "11 Sep",
    placement: "Brief",
    assets: 4,
    notes: 8,
  },
]

export const GROUP_ORDER: Record<GroupKey, string[]> = {
  stage: ["Drafting", "In Edit", "Fact Check", "Ready"],
  desk: ["Features", "Business", "Culture", "Science"],
  issue: ["Issue 42", "Issue 43"],
}

export const GROUP_STYLE: Record<string, { dot: string; bar: string }> = {
  Drafting: {
    dot: "bg-blue-500",
    bar: "bg-blue-500/[0.07] dark:bg-blue-500/[0.14]",
  },
  "In Edit": {
    dot: "bg-amber-500",
    bar: "bg-amber-500/[0.08] dark:bg-amber-500/[0.12]",
  },
  "Fact Check": {
    dot: "bg-rose-500",
    bar: "bg-rose-500/[0.07] dark:bg-rose-500/[0.14]",
  },
  Ready: {
    dot: "bg-emerald-500",
    bar: "bg-emerald-500/[0.07] dark:bg-emerald-500/[0.14]",
  },
  Features: {
    dot: "bg-violet-500",
    bar: "bg-violet-500/[0.07] dark:bg-violet-500/[0.14]",
  },
  Business: {
    dot: "bg-sky-500",
    bar: "bg-sky-500/[0.07] dark:bg-sky-500/[0.14]",
  },
  Culture: {
    dot: "bg-fuchsia-500",
    bar: "bg-fuchsia-500/[0.07] dark:bg-fuchsia-500/[0.14]",
  },
  Science: {
    dot: "bg-teal-500",
    bar: "bg-teal-500/[0.07] dark:bg-teal-500/[0.14]",
  },
  "Issue 42": {
    dot: "bg-indigo-500",
    bar: "bg-indigo-500/[0.07] dark:bg-indigo-500/[0.14]",
  },
  "Issue 43": {
    dot: "bg-orange-500",
    bar: "bg-orange-500/[0.08] dark:bg-orange-500/[0.12]",
  },
}

export const DESKS: Desk[] = ["Features", "Business", "Culture", "Science"]
export const PLACEMENTS: Placement[] = ["Lead", "Feature", "Brief"]

export function groupValue(story: Story, key: GroupKey) {
  return story[key]
}
