export type Channel = "Checkout" | "Dashboard" | "API" | "Invoice"
export type TxStatus = "Completed" | "Pending"

export interface Transaction {
  id: string
  reference: string
  date: string
  title: string
  merchant: string
  category: string
  icon: "stripe" | "supabase" | "openai" | "n8n" | "paper"
  region: string
  flag: string
  timezone: string
  channel: Channel
  amount: number
  status: TxStatus
}

export const TRANSACTIONS: Transaction[] = [
  { id: "tx-1", reference: "TXN-2025-000143", date: "Jun 12, 2025", title: "Pro plan · subscription renewal", merchant: "Stripe", category: "Payments", icon: "stripe", region: "United States", flag: "us", timezone: "PST (UTC-8)", channel: "Checkout", amount: 240, status: "Completed" },
  { id: "tx-2", reference: "TXN-2025-000142", date: "Jun 11, 2025", title: "Database compute · June cycle", merchant: "Supabase", category: "Infrastructure", icon: "supabase", region: "United States", flag: "us", timezone: "EST (UTC-5)", channel: "Dashboard", amount: 75, status: "Completed" },
  { id: "tx-3", reference: "TXN-2025-000141", date: "Jun 11, 2025", title: "GPT-4o usage · billing period", merchant: "OpenAI", category: "AI / ML", icon: "openai", region: "United States", flag: "us", timezone: "PST (UTC-8)", channel: "API", amount: 312.48, status: "Completed" },
  { id: "tx-4", reference: "TXN-2025-000140", date: "Jun 10, 2025", title: "Workflow credit · billing adjustment (outbound)", merchant: "N8n", category: "Automation", icon: "n8n", region: "Germany", flag: "de", timezone: "CET (UTC+1)", channel: "Dashboard", amount: -21, status: "Completed" },
  { id: "tx-5", reference: "TXN-2025-000139", date: "Jun 9, 2025", title: "Canvas seats · prorated refund to customer", merchant: "Paper", category: "Design", icon: "paper", region: "United Kingdom", flag: "gb", timezone: "GMT (UTC+0)", channel: "Invoice", amount: -96, status: "Pending" },
  { id: "tx-6", reference: "TXN-2025-000138", date: "Jun 8, 2025", title: "Annual plan · upgrade settlement", merchant: "Stripe", category: "Payments", icon: "stripe", region: "United States", flag: "us", timezone: "PST (UTC-8)", channel: "Checkout", amount: 480, status: "Completed" },
  { id: "tx-7", reference: "TXN-2025-000137", date: "Jun 7, 2025", title: "Vector storage · overage charge", merchant: "Supabase", category: "Infrastructure", icon: "supabase", region: "Germany", flag: "de", timezone: "CET (UTC+1)", channel: "API", amount: 46.2, status: "Completed" },
  { id: "tx-8", reference: "TXN-2025-000136", date: "Jun 6, 2025", title: "Embedding tokens · usage cycle", merchant: "OpenAI", category: "AI / ML", icon: "openai", region: "United Kingdom", flag: "gb", timezone: "GMT (UTC+0)", channel: "API", amount: 128.4, status: "Pending" },
  { id: "tx-9", reference: "TXN-2025-000135", date: "Jun 5, 2025", title: "Automation runs · monthly bundle", merchant: "N8n", category: "Automation", icon: "n8n", region: "United States", flag: "us", timezone: "EST (UTC-5)", channel: "Dashboard", amount: 64, status: "Completed" },
  { id: "tx-10", reference: "TXN-2025-000134", date: "Jun 4, 2025", title: "Invoice adjustment · tax jurisdiction", merchant: "Paper", category: "Design", icon: "paper", region: "Germany", flag: "de", timezone: "CET (UTC+1)", channel: "Invoice", amount: -35.5, status: "Completed" },
]

export const FILTER_ATTRIBUTES = [
  "Reference",
  "Description",
  "Merchant",
  "Category",
  "Region",
  "Channel",
  "Status",
]
