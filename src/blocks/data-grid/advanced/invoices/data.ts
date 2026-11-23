export type InvoiceGroupKey = "needs-you" | "waiting" | "next-30"

export type InvoiceStatus = "late" | "disputed" | "due"

export type TimelineTone = "danger" | "warning" | "violet" | "info" | "success"

export type ExpectedState =
  | "at-risk"
  | "promised"
  | "on-track"
  | "might-slip"
  | "settled"

export type NextStepKind =
  | "collections"
  | "call"
  | "dispute"
  | "resend"
  | "wait"
  | "reminder"

export type Currency = "USD" | "EUR"

export interface Invoice {
  id: string
  number: string
  customer: string
  contact: string
  /** Open invoices for this customer, shown next to the contact. */
  openCount?: number
  balance: number
  currency: Currency
  /** Partial note, e.g. "of $12,400". */
  balanceNote?: string
  status: InvoiceStatus
  daysLate?: number
  dueIn?: number
  /** "Due Jul 20 · INV-1019" is composed from this in the cell. */
  dueDate: string
  group: InvoiceGroupKey
  timeline: [TimelineTone, TimelineTone, TimelineTone]
  expected: { label: string | null; state: ExpectedState }
  nextStep: { label: string; kind: NextStepKind }
  owner: Owner
}

export interface Owner {
  name: string
  role: string
  avatar: string
}

/** Fixed demo clock - swap for a real one before shipping. */
export const TODAY = new Date("2026-11-17T00:00:00Z")

export const FX_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 1.08,
}

export const OWNERS: Record<string, Owner> = {
  priya: {
    name: "Priya Shah",
    role: "Finance Lead",
    avatar: "https://i.pravatar.cc/96?img=45",
  },
  daniel: {
    name: "Daniel Ortiz",
    role: "AR Specialist",
    avatar: "https://i.pravatar.cc/96?img=12",
  },
  tom: {
    name: "Tom Becker",
    role: "Account Manager",
    avatar: "https://i.pravatar.cc/96?img=53",
  },
  maya: {
    name: "Maya Chen",
    role: "AR Specialist",
    avatar: "https://i.pravatar.cc/96?img=47",
  },
}

export const TIMELINE_MONTHS = [-2, -1, 0].map((offset) => {
  const date = new Date(TODAY)
  date.setMonth(date.getMonth() + offset)
  return date.toLocaleDateString("en-US", { month: "short" })
})

export const INVOICES: Invoice[] = [
  // Needs you
  {
    id: "inv-1019",
    number: "INV-1019",
    customer: "Kite Fitness",
    contact: "Jordan Blake",
    openCount: 2,
    balance: 4420,
    currency: "USD",
    status: "late",
    daysLate: 101,
    dueDate: "Due Jul 20",
    group: "needs-you",
    timeline: ["danger", "danger", "danger"],
    expected: { label: null, state: "at-risk" },
    nextStep: { label: "Hand to Collections", kind: "collections" },
    owner: OWNERS.priya,
  },
  {
    id: "inv-1027",
    number: "INV-1027",
    customer: "Kite Fitness",
    contact: "Robin Hart",
    openCount: 2,
    balance: 4420,
    currency: "USD",
    status: "late",
    daysLate: 71,
    dueDate: "Due Aug 19",
    group: "needs-you",
    timeline: ["danger", "danger", "danger"],
    expected: { label: null, state: "at-risk" },
    nextStep: { label: "Hand to Collections", kind: "collections" },
    owner: OWNERS.priya,
  },
  {
    id: "inv-1032",
    number: "INV-1032",
    customer: "Atlas Freight GmbH",
    contact: "Alex Morgan",
    openCount: 2,
    balance: 17350,
    currency: "EUR",
    balanceNote: "≈ $18,738",
    status: "late",
    daysLate: 65,
    dueDate: "Due Aug 25",
    group: "needs-you",
    timeline: ["danger", "danger", "danger"],
    expected: { label: null, state: "at-risk" },
    nextStep: { label: "Call Alex Morgan", kind: "call" },
    owner: OWNERS.priya,
  },
  {
    id: "inv-1039",
    number: "INV-1039",
    customer: "Copperline Electric",
    contact: "Taylor Reed",
    openCount: 2,
    balance: 6940,
    currency: "USD",
    status: "late",
    daysLate: 29,
    dueDate: "Due Sep 30",
    group: "needs-you",
    timeline: ["warning", "warning", "warning"],
    expected: { label: null, state: "at-risk" },
    nextStep: { label: "Call Taylor Reed", kind: "call" },
    owner: OWNERS.daniel,
  },
  {
    id: "inv-1047",
    number: "INV-1047",
    customer: "Lumen Labs",
    contact: "Casey Nolan",
    balance: 9800,
    currency: "USD",
    status: "disputed",
    dueDate: "Paused",
    group: "needs-you",
    timeline: ["violet", "violet", "violet"],
    expected: { label: "On hold", state: "settled" },
    nextStep: { label: "Review Dispute", kind: "dispute" },
    owner: OWNERS.tom,
  },
  {
    id: "inv-1051",
    number: "INV-1051",
    customer: "Orbit Media",
    contact: "Riley Shaw",
    balance: 7900,
    currency: "USD",
    status: "due",
    dueIn: 3,
    dueDate: "Due Nov 1",
    group: "needs-you",
    timeline: ["danger", "warning", "info"],
    expected: { label: "Nov 4", state: "might-slip" },
    nextStep: { label: "Resend Invoice", kind: "resend" },
    owner: OWNERS.tom,
  },

  // Waiting
  {
    id: "inv-1036",
    number: "INV-1036",
    customer: "Greenleaf Market",
    contact: "Sam Rivera",
    balance: 5300,
    currency: "USD",
    status: "late",
    daysLate: 37,
    dueDate: "Due Sep 22",
    group: "waiting",
    timeline: ["danger", "danger", "danger"],
    expected: { label: "Oct 31", state: "promised" },
    nextStep: { label: "Wait for Oct 31", kind: "wait" },
    owner: OWNERS.maya,
  },
  {
    id: "inv-1044",
    number: "INV-1044",
    customer: "Northwind Studio",
    contact: "Lena Fox",
    openCount: 2,
    balance: 4960,
    currency: "USD",
    balanceNote: "of $12,400",
    status: "late",
    daysLate: 15,
    dueDate: "Due Oct 14",
    group: "waiting",
    timeline: ["warning", "warning", "warning"],
    expected: { label: "Nov 3", state: "promised" },
    nextStep: { label: "Wait for Nov 3", kind: "wait" },
    owner: OWNERS.maya,
  },
  {
    id: "inv-1057",
    number: "INV-1057",
    customer: "Northwind Studio",
    contact: "Dana Wolfe",
    openCount: 2,
    balance: 3900,
    currency: "USD",
    status: "due",
    dueIn: 17,
    dueDate: "Due Nov 15",
    group: "waiting",
    timeline: ["info", "info", "info"],
    expected: { label: "Nov 17", state: "on-track" },
    nextStep: { label: "Reminder Nov 16", kind: "reminder" },
    owner: OWNERS.maya,
  },
  {
    id: "inv-1058",
    number: "INV-1058",
    customer: "Harbor Coffee",
    contact: "Jamie Cross",
    balance: 3180,
    currency: "USD",
    status: "due",
    dueIn: 5,
    dueDate: "Due Nov 3",
    group: "waiting",
    timeline: ["success", "success", "success"],
    expected: { label: "Nov 3", state: "on-track" },
    nextStep: { label: "Reminder Nov 4", kind: "reminder" },
    owner: OWNERS.daniel,
  },
  {
    id: "inv-1029",
    number: "INV-1029",
    customer: "Volta Mobility",
    contact: "Ines Duarte",
    balance: 5000,
    currency: "EUR",
    balanceNote: "≈ $8,899",
    status: "late",
    daysLate: 48,
    dueDate: "Due Sep 11",
    group: "waiting",
    timeline: ["danger", "warning", "warning"],
    expected: { label: "Nov 21", state: "promised" },
    nextStep: { label: "Wait for Nov 21", kind: "wait" },
    owner: OWNERS.priya,
  },
  {
    id: "inv-1062",
    number: "INV-1062",
    customer: "Tidewater Supply",
    contact: "Owen Price",
    balance: 5000,
    currency: "USD",
    status: "due",
    dueIn: 9,
    dueDate: "Due Nov 7",
    group: "waiting",
    timeline: ["info", "info", "success"],
    expected: { label: "Nov 9", state: "on-track" },
    nextStep: { label: "Reminder Nov 8", kind: "reminder" },
    owner: OWNERS.daniel,
  },
  {
    id: "inv-1041",
    number: "INV-1041",
    customer: "Beacon Health",
    contact: "Amara Okafor",
    balance: 3000,
    currency: "USD",
    status: "late",
    daysLate: 22,
    dueDate: "Due Oct 7",
    group: "waiting",
    timeline: ["warning", "warning", "violet"],
    expected: { label: "Nov 12", state: "promised" },
    nextStep: { label: "Wait for Nov 12", kind: "wait" },
    owner: OWNERS.tom,
  },
  {
    id: "inv-1034",
    number: "INV-1034",
    customer: "Sable Interiors",
    contact: "Lena Brandt",
    balance: 1377,
    currency: "USD",
    status: "late",
    daysLate: 33,
    dueDate: "Due Sep 26",
    group: "waiting",
    timeline: ["danger", "danger", "warning"],
    expected: { label: "Nov 6", state: "at-risk" },
    nextStep: { label: "Call Lena Brandt", kind: "call" },
    owner: OWNERS.maya,
  },

  // Next 30 days
  {
    id: "inv-1064",
    number: "INV-1064",
    customer: "Fern & Field",
    contact: "Alice Monroe",
    balance: 4120,
    currency: "USD",
    status: "due",
    dueIn: 21,
    dueDate: "Due Nov 19",
    group: "next-30",
    timeline: ["success", "success", "info"],
    expected: { label: "Nov 20", state: "on-track" },
    nextStep: { label: "Reminder Nov 19", kind: "reminder" },
    owner: OWNERS.daniel,
  },
  {
    id: "inv-1066",
    number: "INV-1066",
    customer: "Harbor Coffee",
    contact: "Jamie Cross",
    balance: 3000,
    currency: "USD",
    status: "due",
    dueIn: 24,
    dueDate: "Due Nov 22",
    group: "next-30",
    timeline: ["success", "success", "success"],
    expected: { label: "Nov 24", state: "on-track" },
    nextStep: { label: "Reminder Nov 23", kind: "reminder" },
    owner: OWNERS.maya,
  },
  {
    id: "inv-1068",
    number: "INV-1068",
    customer: "Orbit Media",
    contact: "Riley Shaw",
    balance: 5000,
    currency: "USD",
    status: "due",
    dueIn: 27,
    dueDate: "Due Nov 25",
    group: "next-30",
    timeline: ["info", "info", "info"],
    expected: { label: "Nov 28", state: "might-slip" },
    nextStep: { label: "Resend Invoice", kind: "resend" },
    owner: OWNERS.tom,
  },
  {
    id: "inv-1061",
    number: "INV-1061",
    customer: "Kite Fitness",
    contact: "Jordan Blake",
    openCount: 2,
    balance: 3000,
    currency: "USD",
    status: "due",
    dueIn: 18,
    dueDate: "Due Nov 16",
    group: "next-30",
    timeline: ["info", "info", "success"],
    expected: { label: "Nov 18", state: "on-track" },
    nextStep: { label: "Reminder Nov 17", kind: "reminder" },
    owner: OWNERS.priya,
  },
  {
    id: "inv-1060",
    number: "INV-1060",
    customer: "Atelier Nord",
    contact: "Erik Sund",
    balance: 3000,
    currency: "EUR",
    balanceNote: "≈ $6,610",
    status: "due",
    dueIn: 12,
    dueDate: "Due Nov 10",
    group: "next-30",
    timeline: ["success", "success", "warning"],
    expected: { label: "Nov 12", state: "promised" },
    nextStep: { label: "Wait for Nov 12", kind: "wait" },
    owner: OWNERS.priya,
  },
  {
    id: "inv-1070",
    number: "INV-1070",
    customer: "Copa Studio",
    contact: "Bruno Alves",
    balance: 4000,
    currency: "USD",
    status: "due",
    dueIn: 29,
    dueDate: "Due Nov 27",
    group: "next-30",
    timeline: ["info", "info", "info"],
    expected: { label: "Dec 1", state: "might-slip" },
    nextStep: { label: "Call Bruno Alves", kind: "call" },
    owner: OWNERS.tom,
  },
  {
    id: "inv-1063",
    number: "INV-1063",
    customer: "Meridian Labs",
    contact: "Sarah Chen",
    balance: 8000,
    currency: "USD",
    status: "due",
    dueIn: 20,
    dueDate: "Due Nov 18",
    group: "next-30",
    timeline: ["success", "success", "success"],
    expected: { label: "Nov 20", state: "on-track" },
    nextStep: { label: "Reminder Nov 19", kind: "reminder" },
    owner: OWNERS.daniel,
  },
  {
    id: "inv-1067",
    number: "INV-1067",
    customer: "Bluebird Foods",
    contact: "Mia Rossi",
    balance: 2000,
    currency: "USD",
    status: "due",
    dueIn: 26,
    dueDate: "Due Nov 24",
    group: "next-30",
    timeline: ["success", "success", "info"],
    expected: { label: "Nov 26", state: "on-track" },
    nextStep: { label: "Reminder Nov 25", kind: "reminder" },
    owner: OWNERS.maya,
  },
  {
    id: "inv-1071",
    number: "INV-1071",
    customer: "Union Print",
    contact: "George Bell",
    balance: 7657,
    currency: "USD",
    status: "due",
    dueIn: 30,
    dueDate: "Due Nov 28",
    group: "next-30",
    timeline: ["info", "info", "success"],
    expected: { label: "Dec 2", state: "promised" },
    nextStep: { label: "Wait for Dec 2", kind: "wait" },
    owner: OWNERS.tom,
  },
]

export const GROUPS: {
  key: InvoiceGroupKey
  label: string
  cardNote: string
  summary: string
  dot: string
  tint: string
  border: string
}[] = [
  {
    key: "needs-you",
    label: "Needs You",
    cardNote: "Action required on your end",
    summary:
      "You owe: two for collections, two calls, a dispute and an invoice nobody opened",
    dot: "bg-warning",
    tint: "bg-warning/8",
    border: "border-warning/20",
  },
  {
    key: "waiting",
    label: "Waiting",
    cardNote: "Awaiting the customer",
    summary: "Promises and automatic reminders are on it",
    dot: "bg-purple-500",
    tint: "bg-purple-500/8",
    border: "border-purple-500/20",
  },
  {
    key: "next-30",
    label: "Next 30 Days",
    cardNote: "From promises and pay habits",
    summary: "Due soon, expected from promises and pay habits",
    dot: "bg-success",
    tint: "bg-success/8",
    border: "border-success/20",
  },
]

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

const moneyPrecise = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export function toUsd(invoice: Invoice) {
  return invoice.balance * FX_RATES[invoice.currency]
}

export function formatUsd(amount: number, precise = false) {
  return precise ? moneyPrecise.format(amount) : money.format(amount)
}

export function formatInvoiceAmount(invoice: Invoice) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: invoice.currency,
    maximumFractionDigits: 0,
  }).format(invoice.balance)
}

export function sumUsd(invoices: Invoice[]) {
  return invoices.reduce((total, invoice) => total + toUsd(invoice), 0)
}

export function invoicesByGroup(invoices: Invoice[]) {
  return GROUPS.map((group) => ({
    ...group,
    invoices: invoices.filter((invoice) => invoice.group === group.key),
  }))
}

export function customerInvoices(customer: string) {
  return INVOICES.filter((invoice) => invoice.customer === customer)
}
