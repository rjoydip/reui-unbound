import { useState } from "react"
import {
  ArrowLeftIcon,
  CheckIcon,
  CopyIcon,
  GiftIcon,
  LifeBuoyIcon,
  LinkIcon,
  RocketIcon,
  SparklesIcon,
  UsersIcon,
  WalletIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

const METRICS = [
  { label: "Offer", note: "First paid quarter", value: "15%", progress: 100, color: "bg-emerald-500", icon: SparklesIcon },
  { label: "Qualified Teams", note: "This cycle", value: "14", progress: 70, color: "bg-violet-500", icon: UsersIcon },
  { label: "Credits Applied", note: "Ready for billing", value: "$620", progress: 62, color: "bg-amber-500", icon: WalletIcon },
]

const TIERS = [
  { name: "Workspace Credit", note: "Apply billing credit to the next paid workspace cycle.", status: "Unlocked", icon: WalletIcon },
  { name: "Advisory Sprint", note: "Book a rollout review for onboarding and activation.", status: "Next", icon: SparklesIcon },
  { name: "Migration Concierge", note: "Unlock hands-on setup support for the next referred team.", status: "Locked", icon: RocketIcon },
]

const REFERRALS = [
  { name: "Northwind Labs", note: "18 seats active · Qualified · 4 days ago", status: "Qualified", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80" },
  { name: "Relay Grid", note: "6 seats live · Invoice pending · Today", status: "Pending", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Studio Harbor", note: "Enterprise review · Security review · Open", status: "In Review", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
]

export function ProfileReferralRewardsBlock() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText("orbit/r/partner-rewards")
    } catch {
      // Clipboard permissions can be unavailable in preview iframes.
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[768px]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="flex items-center gap-2 text-2xl font-semibold">
              Partner Rewards
              <Badge variant="success-light" size="lg">Active Program</Badge>
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">Share one private invite and track the credits your referrals unlock.</p>
          </div>
          <Button variant="outline" size="sm"><ArrowLeftIcon />Back to Profile</Button>
        </div>

        <section className="mt-8 space-y-3">
          <div>
            <h2 className="text-sm font-semibold">Referral Link</h2>
            <p className="text-muted-foreground text-sm">Share one invite and keep the offer clear.</p>
          </div>

          <div className="bg-card grid overflow-hidden rounded-lg border sm:grid-cols-3">
            {METRICS.map((metric, index) => (
              <div key={metric.label} className={cn("p-4", index < 2 && "border-b sm:border-r sm:border-b-0")}>
                <div className="flex items-center gap-2">
                  <span className="bg-muted flex size-8 items-center justify-center rounded-md"><metric.icon className="size-4" /></span>
                  <div>
                    <p className="text-sm font-medium">{metric.label}</p>
                    <p className="text-muted-foreground text-xs">{metric.note}</p>
                  </div>
                </div>
                <p className="mt-2 text-xl font-semibold">{metric.value}</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="bg-muted h-1 flex-1 overflow-hidden rounded-full">
                    <div className={cn("h-full rounded-full", metric.color)} style={{ width: `${metric.progress}%` }} />
                  </div>
                  <span className="text-muted-foreground text-xs">{metric.progress}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card overflow-hidden rounded-lg border">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div>
                <p className="text-sm font-medium">Personal Link</p>
                <p className="text-muted-foreground text-xs">One private invite for every channel.</p>
              </div>
              <Badge variant="secondary" size="sm">April Cycle</Badge>
            </div>
            <div className="border-b p-4">
              <div className="flex items-center gap-2 rounded-lg border px-3">
                <LinkIcon className="text-muted-foreground size-4" />
                <input readOnly value="orbit/r/partner-rewards" aria-label="Referral link" className="h-8 min-w-0 flex-1 bg-transparent text-sm outline-none" />
                <Button variant="ghost" size="icon-xs" aria-label="Copy referral link" onClick={copy}>
                  {copied ? <CheckIcon /> : <CopyIcon />}
                </Button>
              </div>
            </div>
            <div className="flex items-start gap-3 border-b px-4 py-3.5">
              <span className="bg-muted flex size-8 items-center justify-center rounded-md"><GiftIcon className="size-4" /></span>
              <div>
                <p className="text-sm font-medium">14 active days</p>
                <p className="text-muted-foreground text-sm">New workspaces qualify after two weeks of active usage.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-b px-4 py-3.5">
              <span className="bg-muted flex size-8 items-center justify-center rounded-md"><WalletIcon className="size-4" /></span>
              <div>
                <p className="text-sm font-medium">First invoice cleared</p>
                <p className="text-muted-foreground text-sm">Credits and points unlock when the first paid invoice lands.</p>
              </div>
            </div>
            <div className="text-muted-foreground flex flex-wrap items-center gap-2 px-4 py-3 text-xs">
              Use this link for partner emails, community posts, and handoffs.
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm"><LifeBuoyIcon />Terms</Button>
                <Button variant="outline" size="sm" onClick={copy}><CopyIcon />Copy Note</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-3">
          <div>
            <h2 className="text-sm font-semibold">Reward Progress</h2>
            <p className="text-muted-foreground text-sm">Track points and the next unlock.</p>
          </div>
          <div className="bg-card overflow-hidden rounded-lg border">
            <div className="flex items-start justify-between border-b px-4 py-3">
              <div>
                <p className="text-sm font-medium">Next Unlock</p>
                <p className="text-muted-foreground text-sm">Advisory Sprint</p>
              </div>
              <Badge variant="warning-light" size="sm">58% ready</Badge>
            </div>
            <div className="border-b px-4 py-3">
              <p className="text-muted-foreground text-sm">Unlock a rollout review with planning and one focused strategy call.</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="bg-muted h-1.5 flex-1 overflow-hidden rounded-full">
                  <div className="h-full w-[58%] rounded-full bg-amber-500" />
                </div>
                <span className="text-muted-foreground text-xs">58%</span>
              </div>
            </div>
            {TIERS.map((tier) => (
              <div key={tier.name} className="flex items-center gap-3 border-b px-4 py-3 last:border-0">
                <span className="bg-muted flex size-9 items-center justify-center rounded-md"><tier.icon className="size-4" /></span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{tier.name}</p>
                  <p className="text-muted-foreground text-sm">{tier.note}</p>
                </div>
                <Badge
                  variant={tier.status === "Unlocked" ? "success-light" : tier.status === "Next" ? "focus-light" : "secondary"}
                  size="sm"
                >
                  {tier.status}
                </Badge>
              </div>
            ))}
            <div className="text-muted-foreground bg-muted/30 px-4 py-2.5 text-xs">Points post after activation and the first paid invoice.</div>
          </div>
        </section>

        <section className="mt-8 space-y-3">
          <div>
            <h2 className="text-sm font-semibold">Recent Referrals</h2>
            <p className="text-muted-foreground text-sm">Qualified, pending, and under review.</p>
          </div>
          <div className="bg-card overflow-hidden rounded-lg border">
            {REFERRALS.map((referral) => (
              <div key={referral.name} className="flex items-center gap-3 border-b px-4 py-3 last:border-0">
                <Avatar size="sm">
                  <AvatarImage src={referral.avatar} alt="" />
                  <AvatarFallback>{referral.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{referral.name}</p>
                  <p className="text-muted-foreground text-sm">{referral.note}</p>
                </div>
                <Badge
                  variant={referral.status === "Qualified" ? "success-light" : referral.status === "Pending" ? "warning-light" : "focus-light"}
                  size="sm"
                >
                  {referral.status}
                </Badge>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProfileReferralRewardsBlock
