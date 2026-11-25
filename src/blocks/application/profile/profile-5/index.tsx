import { useState } from "react"
import {
  ArrowLeftIcon,
  BellIcon,
  CalendarIcon,
  ClockIcon,
  InfoIcon,
  MailIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const ALERTS = [
  { label: "Direct mentions", description: "When someone tags you in a note, comment, or shared handoff.", email: true, inApp: true },
  { label: "Thread replies", description: "When a teammate replies to work you started or followed.", email: true, inApp: true },
  { label: "Approval requests", description: "Role reviews, access decisions, and requests waiting on you.", email: true, inApp: true },
  { label: "Ownership changes", description: "When work is assigned to you or handed back to your queue.", email: false, inApp: true },
  { label: "Shared files", description: "When a teammate drops a brief, recap, or attachment into a thread.", email: true, inApp: false },
  { label: "Workflow reviews", description: "When an automation request is approved, denied, or sent back.", email: true, inApp: true },
]

const METRICS = [
  { label: "Time", value: "8:30", meta: "AM local", progress: 92, color: "bg-emerald-500", icon: ClockIcon },
  { label: "Channel", value: "Email", meta: "Digest", progress: 97, color: "bg-emerald-500", icon: MailIcon },
  { label: "Scope", value: "Today", meta: "+ overdue", progress: 78, color: "bg-amber-500", icon: CalendarIcon },
]

export function Profile5Block() {
  const [morningDigest, setMorningDigest] = useState(true)
  const [rules, setRules] = useState(
    ALERTS.map((alert) => ({ ...alert }))
  )

  const toggle = (index: number, channel: "email" | "inApp") => {
    setRules((current) =>
      current.map((rule, ruleIndex) =>
        ruleIndex === index ? { ...rule, [channel]: !rule[channel] } : rule
      )
    )
  }

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[768px]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="flex items-center gap-2 text-2xl font-semibold">
              Notification Settings
              <Badge variant="success-light" size="lg">Synced</Badge>
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">Set digest cadence and route collaboration alerts across email and in-app delivery.</p>
          </div>
          <Button variant="outline" size="sm"><ArrowLeftIcon />Back to Profile</Button>
        </div>

        <section className="mt-8 space-y-3">
          <div>
            <h2 className="text-sm font-semibold">Daily Briefing</h2>
            <p className="text-muted-foreground text-sm">Batch open work into one calm morning summary.</p>
          </div>
          <div className="bg-card grid overflow-hidden rounded-lg border sm:grid-cols-3">
            {METRICS.map((metric, index) => (
              <div key={metric.label} className={index < 2 ? "border-b p-4 sm:border-r sm:border-b-0" : "p-4"}>
                <div className="flex items-center gap-2">
                  <span className="bg-muted flex size-8 items-center justify-center rounded-md"><metric.icon className="size-4" /></span>
                  <span className="text-sm font-medium">{metric.label}</span>
                  <InfoIcon className="text-muted-foreground size-3.5" />
                </div>
                <p className="mt-2 text-xl font-semibold">
                  {metric.value} <span className="text-muted-foreground text-sm font-normal">{metric.meta}</span>
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="bg-muted h-1 flex-1 overflow-hidden rounded-full">
                    <div className={cn("h-full rounded-full", metric.color)} style={{ width: `${metric.progress}%` }} />
                  </div>
                  <span className="text-muted-foreground text-xs">{metric.progress}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card flex items-center gap-3 rounded-lg border px-4 py-3.5">
            <span className="bg-muted flex size-9 items-center justify-center rounded-md"><BellIcon className="size-4" /></span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 text-sm font-medium">
                Morning Digest <Badge variant="focus-light" size="sm">Weekdays</Badge>
              </p>
              <p className="text-muted-foreground text-sm">Bundle due-today work and overdue follow-ups into one calm summary.</p>
            </div>
            <Switch checked={morningDigest} onCheckedChange={setMorningDigest} aria-label="Morning digest" />
          </div>
        </section>

        <section className="mt-8 space-y-3">
          <div>
            <h2 className="text-sm font-semibold">Collaboration Alerts</h2>
            <p className="text-muted-foreground text-sm">Route shared-work events to email or in-app delivery.</p>
          </div>
          <div className="bg-card overflow-hidden rounded-lg border">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div>
                <p className="text-sm font-medium">Delivery Rules</p>
                <p className="text-muted-foreground text-xs">Choose a channel for each collaboration event.</p>
              </div>
              <span className="text-muted-foreground text-xs">6 types</span>
            </div>
            <div className="text-muted-foreground grid grid-cols-[1fr_90px_90px] gap-2 border-b bg-muted/30 px-4 py-2 text-xs">
              <span>Alert Type</span>
              <span className="flex items-center gap-1.5"><MailIcon className="size-3.5" />Email</span>
              <span className="flex items-center gap-1.5"><BellIcon className="size-3.5" />In App</span>
            </div>
            {rules.map((rule, index) => (
              <div key={rule.label} className="grid grid-cols-[1fr_90px_90px] items-center gap-2 border-b px-4 py-3 last:border-0">
                <div>
                  <p className="text-sm font-medium">{rule.label}</p>
                  <p className="text-muted-foreground text-xs">{rule.description}</p>
                </div>
                <Checkbox checked={rule.email} onCheckedChange={() => toggle(index, "email")} aria-label={`${rule.label} email`} />
                <Checkbox checked={rule.inApp} onCheckedChange={() => toggle(index, "inApp")} aria-label={`${rule.label} in app`} />
              </div>
            ))}
            <div className="text-muted-foreground flex items-center gap-1.5 bg-muted/30 px-4 py-2.5 text-xs">
              Keep direct mentions and approval requests reachable. <InfoIcon className="size-3.5" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile5Block
