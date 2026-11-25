import { ArrowRightIcon, DatabaseIcon, MessageSquareIcon, PaletteIcon, SparklesIcon, ZapIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"

const APPS = [
  { name: "Supabase", description: "Sync workspace records, owners, and lifecycle events from your product database.", status: "Connected", action: "Configure", tone: "bg-emerald-500", icon: DatabaseIcon },
  { name: "Slack", description: "Route approvals, launch notes, and incident updates into selected team channels.", status: "Connected", action: "Configure", tone: "bg-emerald-500", icon: MessageSquareIcon },
  { name: "Stripe", description: "Mirror subscription, invoice, and renewal signals into account reviews.", status: "Connected", action: "Configure", tone: "bg-violet-500", icon: ZapIcon },
  { name: "Google Calendar", description: "Create planning reviews from milestones, customer dates, and release windows.", status: "Available", action: "Install", tone: "bg-blue-500", icon: ArrowRightIcon },
  { name: "Resend", description: "Send branded transactional updates when workflows change status or ownership.", status: "Available", action: "Install", tone: "bg-foreground", icon: SparklesIcon },
  { name: "Cursor", description: "Attach implementation context and AI coding notes to active product tasks.", status: "Preview", action: "Configure", tone: "bg-foreground", icon: PaletteIcon },
  { name: "Claude", description: "Draft summaries, support notes, and rollout briefs from approved workspace data.", status: "Preview", action: "Install", tone: "bg-orange-500", icon: SparklesIcon },
]

export function Settings16Block() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[896px]">
        <div className="flex flex-wrap items-start gap-3">
          <div className="min-w-0">
            <h1 className="text-sm font-semibold">Connected Apps</h1>
            <p className="text-muted-foreground text-sm">Manage source systems for automation, scheduling, support, and AI workflows.</p>
          </div>
          <Button size="sm" className="ml-auto">Build Connector</Button>
        </div>

        <div className="bg-card mt-4 overflow-hidden rounded-xl border shadow-sm">
          {APPS.map((app, index) => (
            <div key={app.name} className={index < APPS.length - 1 ? "flex items-center gap-3 border-b px-4 py-3.5" : "flex items-center gap-3 px-4 py-3.5"}>
              <span className={"flex size-9 shrink-0 items-center justify-center rounded-lg text-white " + app.tone}>
                <app.icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-2 text-sm font-medium">
                  {app.name}
                  <Badge
                    variant={app.status === "Connected" ? "success-light" : app.status === "Available" ? "secondary" : "focus-light"}
                    size="sm"
                  >
                    {app.status}
                  </Badge>
                </p>
                <p className="text-muted-foreground text-sm">{app.description}</p>
              </div>
              <Button variant={app.action === "Install" ? "outline" : "outline"} size="sm" className="min-w-20">{app.action}</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Settings16Block
