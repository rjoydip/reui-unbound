export type TransactionStatus = "Settled" | "Pending" | "Refunded"
export type Method = "Google Pay" | "PayPal" | "Apple Pay"
export type Channel = "API" | "Web" | "POS" | "Mobile"

export interface Transaction {
  id: string
  charge: string
  customer: string
  email: string
  avatar: number
  amount: number
  status: TransactionStatus
  method: Method
  last4: string
  channel: Channel
  risk: number
  date: string
  time: string
}

export const STATUSES: TransactionStatus[] = ["Settled", "Pending", "Refunded"]
export const CHANNELS: Channel[] = ["API", "Web", "POS", "Mobile"]

const CUSTOMERS = [
  { name: "Sana Qureshi", email: "sana.qureshi@outlook.com", avatar: 45 },
  { name: "Omar Haddad", email: "omar.haddad@outlook.com", avatar: 53 },
  { name: "David Kim", email: "david.kim@hey.com", avatar: 59 },
  { name: "Sofia Romero", email: "sofia.romero@gmail.com", avatar: 44 },
  { name: "Mira Stone", email: "mira.stone@northbeam.co", avatar: 47 },
  { name: "Alex Johnson", email: "alex.johnson@gmail.com", avatar: 15 },
  { name: "Sarah Chen", email: "sarah.chen@gmail.com", avatar: 26 },
]

const METHODS: Method[] = ["Google Pay", "PayPal", "Apple Pay"]
const CHANNEL_POOL: Channel[] = ["API", "API", "API", "Web", "Web", "POS", "Mobile", "Mobile"]

const FIRST: Transaction[] = [
  { id: "TXN-0YGJ0", charge: "ch_07wwdvx", customer: "Sana Qureshi", email: "sana.qureshi@outlook.com", avatar: 45, amount: 1805.97, status: "Refunded", method: "Google Pay", last4: "6685", channel: "API", risk: 87, date: "Jun 23", time: "16:59" },
  { id: "TXN-0YGJ1", charge: "ch_0tk488s", customer: "Omar Haddad", email: "omar.haddad@outlook.com", avatar: 53, amount: 1740.66, status: "Settled", method: "Google Pay", last4: "5794", channel: "Web", risk: 96, date: "Jun 23", time: "16:57" },
  { id: "TXN-0YGJ2", charge: "ch_02xkgp9", customer: "David Kim", email: "david.kim@hey.com", avatar: 59, amount: 16.04, status: "Settled", method: "Google Pay", last4: "2845", channel: "API", risk: 64, date: "Jun 23", time: "16:55" },
  { id: "TXN-0YGJ3", charge: "ch_0w982d5", customer: "Sofia Romero", email: "sofia.romero@gmail.com", avatar: 44, amount: 1368.47, status: "Settled", method: "PayPal", last4: "4792", channel: "API", risk: 26, date: "Jun 23", time: "16:53" },
  { id: "TXN-0YGJ4", charge: "ch_0533jmd", customer: "David Kim", email: "david.kim@hey.com", avatar: 59, amount: 3652.33, status: "Settled", method: "PayPal", last4: "4535", channel: "API", risk: 51, date: "Jun 23", time: "16:51" },
  { id: "TXN-0YGJ5", charge: "ch_0v4nad5", customer: "Sofia Romero", email: "sofia.romero@gmail.com", avatar: 44, amount: 7.83, status: "Settled", method: "PayPal", last4: "5477", channel: "POS", risk: 4, date: "Jun 23", time: "16:50" },
  { id: "TXN-0YGJ6", charge: "ch_04deqvk", customer: "Omar Haddad", email: "omar.haddad@outlook.com", avatar: 53, amount: 1345.1, status: "Pending", method: "PayPal", last4: "8407", channel: "API", risk: 37, date: "Jun 23", time: "16:48" },
  { id: "TXN-0YGJ7", charge: "ch_0wfax9", customer: "Mira Stone", email: "mira.stone@northbeam.co", avatar: 47, amount: 1168.61, status: "Refunded", method: "Apple Pay", last4: "1934", channel: "Mobile", risk: 67, date: "Jun 23", time: "16:45" },
  { id: "TXN-0YGJ8", charge: "ch_020ybwy", customer: "Alex Johnson", email: "alex.johnson@gmail.com", avatar: 15, amount: 159.22, status: "Pending", method: "PayPal", last4: "2985", channel: "Mobile", risk: 95, date: "Jun 23", time: "16:43" },
  { id: "TXN-0YGJ9", charge: "ch_09dgc9n", customer: "Sana Qureshi", email: "sana.qureshi@outlook.com", avatar: 45, amount: 588.75, status: "Settled", method: "Apple Pay", last4: "1334", channel: "Mobile", risk: 2, date: "Jun 23", time: "16:42" },
]

function random(seed: number) {
  let state = (seed + 0x6d2b79f5) >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let value = state
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

function chargeId(rand: () => number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"
  let id = "ch_"
  for (let index = 0; index < 7; index += 1) {
    id += alphabet[Math.floor(rand() * alphabet.length)]
  }
  return id
}

const BASE_TIME = Date.UTC(2026, 5, 23, 16, 59)
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function makeTransaction(index: number): Transaction {
  if (index < FIRST.length) return FIRST[index]

  const rand = random(index + 7)
  const customer = CUSTOMERS[Math.floor(rand() * CUSTOMERS.length)]
  const method = METHODS[Math.floor(rand() * METHODS.length)]
  const channel = CHANNEL_POOL[Math.floor(rand() * CHANNEL_POOL.length)]
  const statusRoll = rand()
  const status: TransactionStatus =
    statusRoll < 0.7 ? "Settled" : statusRoll < 0.86 ? "Pending" : "Refunded"
  const amount =
    rand() < 0.15
      ? Math.round(rand() * 40 * 100) / 100 + 1
      : Math.round(rand() * 4000 * 100) / 100
  const date = new Date(BASE_TIME - index * 97_000)

  return {
    id: `TXN-0YGJ${index.toString(36).toUpperCase()}`,
    charge: chargeId(rand),
    customer: customer.name,
    email: customer.email,
    avatar: customer.avatar,
    amount,
    status,
    method,
    last4: String(1000 + Math.floor(rand() * 9000)),
    channel,
    risk: Math.floor(rand() * 100),
    date: `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}`,
    time: `${String(date.getUTCHours()).padStart(2, "0")}:${String(date.getUTCMinutes()).padStart(2, "0")}`,
  }
}

export function currency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value)
}

export function compactCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value)
}
