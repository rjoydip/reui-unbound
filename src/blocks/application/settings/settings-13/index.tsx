import { useState } from "react"
import {
  ArrowUpRightIcon,
  MusicIcon,
  ShapesIcon,
  SparklesIcon,
  TriangleIcon,
  WorkflowIcon,
  ZapIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const APPS = [
  { name: "Slack", description: "Releases, on-call alerts, and approvals in your channels.", tone: "bg-emerald-500", icon: WorkflowIcon },
  { name: "Stripe", description: "Charges, retries, and payouts across connected tools.", tone: "bg-violet-500", icon: ZapIcon },
  { name: "Supabase", description: "DB and auth events for live dashboards.", tone: "bg-emerald-600", icon: ShapesIcon },
  { name: "n8n", description: "Automation runs: successes and failures in one place.", tone: "bg-rose-500", icon: WorkflowIcon },
  { name: "Zoom", description: "Recordings, attendance, and follow-ups synced.", tone: "bg-blue-500", icon: TriangleIcon },
  { name: "Loom", description: "Async walkthroughs and feedback in one queue.", tone: "bg-violet-500", icon: SparklesIcon },
  { name: "Discord", description: "Community signals and mod flags to internal channels.", tone: "bg-indigo-500", icon: WorkflowIcon },
  { name: "Notion", description: "AI for documents and content workflows.", tone: "bg-foreground", icon: SparklesIcon },
  { name: "Spotify", description: "Playlists and listening data for workspace apps.", tone: "bg-emerald-500", icon: MusicIcon },
]

export function Settings13Block() {
  const [connected, setConnected] = useState<Record<string, boolean>>({ Slack: true, Supabase: true, n8n: true, Loom: true })

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[896px]">
        <h1 className="text-2xl font-semibold">Integrations</h1>
        <p className="text-muted-foreground mt-1 text-sm">Enhance your workspace by linking external tools for communication, payments, and automation.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {APPS.map((app) => {
            const on = Boolean(connected[app.name])
            return (
              <div key={app.name} className="bg-card flex flex-col overflow-hidden rounded-xl border shadow-sm">
                <div className="p-3">
                  <div className="flex items-start justify-between">
                    <span className={cn("flex size-9 items-center justify-center rounded-md text-white", app.tone)}>
                      <app.icon className="size-4" />
                    </span>
                    <ArrowUpRightIcon className="text-muted-foreground size-4" />
                  </div>
                  <p className="text-muted-foreground mt-6 min-h-12 text-sm">{app.description}</p>
                </div>
                <div className="flex items-center gap-2 border-t p-2.5">
                  <Button
                    variant={on ? "outline" : "default"}
                    size="sm"
                    className={on ? undefined : "gap-1.5"}
                    onClick={() => setConnected((current) => ({ ...current, [app.name]: !on }))}
                  >
                    {on ? "Disconnect" : "Connect"}
                  </Button>
                  <Switch
                    checked={on}
                    onCheckedChange={(value) => setConnected((current) => ({ ...current, [app.name]: value }))}
                    className="ml-auto"
                    aria-label={`${app.name} enabled`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Settings13Block
