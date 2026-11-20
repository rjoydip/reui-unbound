export type BillingStatus = "Active" | "Pending invoice" | "Past due"
export type AuthProvider = "Okta SSO" | "GitHub" | "Google" | "Passwordless"

export interface Member {
  id: string
  name: string
  email: string
  avatar: string
  role: string
  billing: BillingStatus
  auth: AuthProvider
  joined: string
}

export const MEMBER_RECORDS: Member[] = [
  {
    id: "mem-01",
    name: "Avery Quinn",
    email: "avery@northline.app",
    avatar: "https://i.pravatar.cc/96?img=20",
    role: "Security",
    billing: "Past due",
    auth: "Okta SSO",
    joined: "Feb 10, 2026",
  },
  {
    id: "mem-02",
    name: "Dev Rana",
    email: "dev@northline.app",
    avatar: "https://i.pravatar.cc/96?img=12",
    role: "Growth",
    billing: "Pending invoice",
    auth: "GitHub",
    joined: "Jan 11, 2026",
  },
  {
    id: "mem-03",
    name: "Imani Brooks",
    email: "imani@northline.app",
    avatar: "https://i.pravatar.cc/96?img=47",
    role: "Support",
    billing: "Active",
    auth: "Passwordless",
    joined: "Mar 29, 2026",
  },
  {
    id: "mem-04",
    name: "Lena Torres",
    email: "lena@northline.app",
    avatar: "https://i.pravatar.cc/96?img=26",
    role: "Admin",
    billing: "Active",
    auth: "Google",
    joined: "Apr 17, 2026",
  },
  {
    id: "mem-05",
    name: "Marcus Hale",
    email: "marcus@northline.app",
    avatar: "https://i.pravatar.cc/96?img=53",
    role: "Finance",
    billing: "Pending invoice",
    auth: "Okta SSO",
    joined: "Apr 12, 2026",
  },
  {
    id: "mem-06",
    name: "Priya Nair",
    email: "priya@northline.app",
    avatar: "https://i.pravatar.cc/96?img=45",
    role: "Design",
    billing: "Active",
    auth: "GitHub",
    joined: "Feb 2, 2026",
  },
  {
    id: "mem-07",
    name: "Sam Osei",
    email: "sam@northline.app",
    avatar: "https://i.pravatar.cc/96?img=15",
    role: "Engineering",
    billing: "Active",
    auth: "Google",
    joined: "Mar 3, 2026",
  },
  {
    id: "mem-08",
    name: "Tessa Lin",
    email: "tessa@northline.app",
    avatar: "https://i.pravatar.cc/96?img=32",
    role: "Marketing",
    billing: "Past due",
    auth: "Passwordless",
    joined: "Jan 27, 2026",
  },
]

export const MEMBER_ROLE_OPTIONS = [
  "Security",
  "Growth",
  "Support",
  "Admin",
  "Finance",
  "Design",
  "Engineering",
  "Marketing",
]

export const MEMBER_BILLING_STATUS_OPTIONS: BillingStatus[] = [
  "Active",
  "Pending invoice",
  "Past due",
]

export const MEMBER_AUTH_PROVIDER_OPTIONS: AuthProvider[] = [
  "Okta SSO",
  "GitHub",
  "Google",
  "Passwordless",
]

export function memberHandle(member: Member) {
  return member.email.split("@")[0]
}
