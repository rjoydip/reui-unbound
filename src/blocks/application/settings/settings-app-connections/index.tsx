import { PlusIcon, EllipsisIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const GROUPS = [
  {
    title: "Communication",
    description: "Channels and meetings for alerts and team updates.",
    apps: [
      { name: "Slack", description: "Route alerts and approvals to channels.", status: "Needs review", tone: "bg-emerald-500" },
      { name: "Zoom", description: "Sync recordings and meeting summaries.", status: "Connected", tone: "bg-blue-500" },
      { name: "Discord", description: "Mirror updates and support escalations.", status: "Connected", tone: "bg-indigo-500" },
    ],
  },
  {
    title: "Collaboration",
    description: "Async video, dev context, and learning content.",
    apps: [
      { name: "Loom", description: "Attach walkthroughs to tickets and notes.", status: "Connected", tone: "bg-violet-500" },
      { name: "Cursor", description: "Link engineering context to active work.", status: "Needs review", tone: "bg-foreground" },
      { name: "LearnThis", description: "Push guides and enable team learning.", status: "Connected", tone: "bg-sky-500" },
    ],
  },
  {
    title: "Scheduling",
    description: "Calendar, video calls, and billing integrations.",
    apps: [
      { name: "Google Calendar", description: "Create reminders from project changes.", status: "Connected", tone: "bg-emerald-500" },
      { name: "Stripe", description: "Sync invoice status into account reviews.", status: "Connected", tone: "bg-violet-500" },
      { name: "Cal.com", description: "Book reviews straight from shared pages.", status: "Needs review", tone: "bg-foreground" },
    ],
  },
]

export function SettingsAppConnectionsBlock() {
  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="h-fit w-full max-w-[768px] space-y-4">
        <div className="flex flex-wrap items-start gap-3">
          <div className="min-w-0">
            <h1 className="text-sm font-semibold">App Connections</h1>
            <p className="text-muted-foreground text-sm">Manage third-party services for workflow automation.</p>
          </div>
          <Button size="sm" className="ml-auto"><PlusIcon />New Connection</Button>
        </div>

        {GROUPS.map((group) => (
          <section key={group.title} className="bg-card overflow-hidden rounded-xl border shadow-sm">
            <div className="border-b px-4 py-3">
              <p className="text-sm font-semibold">{group.title}</p>
              <p className="text-muted-foreground text-xs">{group.description}</p>
            </div>
            {group.apps.map((app) => (
              <div key={app.name} className="flex items-center gap-3 border-b px-4 py-3.5 last:border-0">
                <span className={`flex size-9 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white ${app.tone}`}>
                  {app.name.slice(0, 1)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{app.name}</p>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </div>
                <Badge variant={app.status === "Connected" ? "success-light" : "warning-light"} size="sm">
                  <span className={`size-1.5 rounded-full ${app.status === "Connected" ? "bg-emerald-500" : "bg-amber-500"}`} />
                  {app.status}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon-sm" aria-label={`Actions for ${app.name}`}><EllipsisIcon /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuItem>Sync now</DropdownMenuItem>
                    <DropdownMenuItem>Manage</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">Disconnect</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}

export default SettingsAppConnectionsBlock
