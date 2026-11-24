import { useState } from "react"
import {
  BellIcon,
  CalendarIcon,
  ChartColumnIcon,
  CheckIcon,
  ChevronDownIcon,
  CircleAlertIcon,
  ClipboardListIcon,
  FileTextIcon,
  InboxIcon,
  LayoutGridIcon,
  MapPinIcon,
  MessageSquareIcon,
  RocketIcon,
  SettingsIcon,
  StarIcon,
  UsersIcon,
  WrenchIcon,
  WorkflowIcon,
  ZapIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Rating } from "@/components/kit/rating"
import { cn } from "cn"

const AVATAR =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"

const NAV_GROUPS = [
  {
    label: "Robot Fleet",
    icon: RocketIcon,
    items: ["Overview", "Robots", "Stations", "Fleet Map", "Device Groups", "Robot Health"],
  },
  {
    label: "Mission Control",
    icon: WorkflowIcon,
    items: ["Missions", "Requests", "Schedules", "Issue Reports"],
  },
  {
    label: "System Tools",
    icon: WrenchIcon,
    items: ["Integrations", "Automations", "Team Access"],
  },
]

const APPS = [
  { label: "Inbox", icon: InboxIcon },
  { label: "Calendar", icon: CalendarIcon },
  { label: "Docs", icon: FileTextIcon },
  { label: "Tasks", icon: ClipboardListIcon },
  { label: "Reports", icon: ChartColumnIcon },
  { label: "Fleet Map", icon: MapPinIcon },
  { label: "Chat", icon: MessageSquareIcon },
  { label: "Team", icon: UsersIcon },
  { label: "Service", icon: WrenchIcon },
]

function SkeletonTile({ tall }: { tall?: boolean }) {
  return (
    <div className="bg-card rounded-xl border p-5">
      <div className="bg-muted h-2.5 w-2/3 rounded-full" />
      <div className="bg-muted mt-2 h-2.5 w-1/2 rounded-full" />
      <div
        className={cn("bg-muted/70 mt-4 rounded-lg", tall ? "h-52" : "h-16")}
      />
    </div>
  )
}

export default function AppShell23Block() {
  const [team, setTeam] = useState("Operations Team")
  const [project, setProject] = useState("Fleet Control")
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [operations, setOperations] = useState({
    dispatch: true,
    battery: true,
    maintenance: false,
  })

  return (
    <div className="bg-background flex min-h-svh">
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-13 shrink-0 items-center gap-2 border-b px-4">
          <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md text-xs font-bold">
            U
          </span>
          <span className="text-sm font-semibold tracking-tight">ReUI</span>
          <div className="bg-border mx-1 h-5 w-px" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 px-2 font-medium">
                {team}
                <ChevronDownIcon className="text-muted-foreground size-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Team</DropdownMenuLabel>
              {["Operations Team", "Logistics Team", "Field Service Team"].map((entry) => (
                <DropdownMenuItem key={entry} onClick={() => setTeam(entry)}>
                  {entry}
                  {team === entry ? <CheckIcon className="ml-auto size-4" /> : null}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 px-2 font-medium">
                {project}
                <ChevronDownIcon className="text-muted-foreground size-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-52">
              <DropdownMenuLabel>Project</DropdownMenuLabel>
              {["Fleet Control", "Depot Rollout", "Night Shift"].map((entry) => (
                <DropdownMenuItem key={entry} onClick={() => setProject(entry)}>
                  {entry}
                  {project === entry ? <CheckIcon className="ml-auto size-4" /> : null}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="ml-auto flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Apps">
                  <LayoutGridIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 p-3">
                <DropdownMenuLabel className="px-1 pb-2">Apps</DropdownMenuLabel>
                <div className="grid grid-cols-3 gap-2">
                  {APPS.map((app) => (
                    <button
                      key={app.label}
                      type="button"
                      className="hover:bg-muted flex flex-col items-center gap-1.5 rounded-lg border p-3 text-xs transition-colors"
                    >
                      <app.icon className="text-muted-foreground size-4" />
                      {app.label}
                    </button>
                  ))}
                </div>
                <DropdownMenuSeparator className="my-2" />
                <button
                  type="button"
                  className="hover:bg-muted w-full rounded-md py-1.5 text-sm font-medium transition-colors"
                >
                  Browse All Apps
                </button>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Settings">
                  <SettingsIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuItem>
                  <WrenchIcon />
                  Fleet Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MapPinIcon />
                  Station Defaults
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BellIcon />
                  Alert Rules
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Operations</DropdownMenuLabel>
                {[
                  { key: "dispatch", label: "Auto-Dispatch" },
                  { key: "battery", label: "Low-Battery Return" },
                  { key: "maintenance", label: "Maintenance Mode" },
                ].map((item) => (
                  <DropdownMenuItem
                    key={item.key}
                    onSelect={(event) => {
                      event.preventDefault()
                      setOperations((current) => ({
                        ...current,
                        [item.key]: !current[item.key as keyof typeof current],
                      }))
                    }}
                  >
                    {item.label}
                    {operations[item.key as keyof typeof operations] ? (
                      <CheckIcon className="ml-auto size-4" />
                    ) : null}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Notifications"
              onClick={() => setNotificationsOpen(true)}
            >
              <BellIcon />
            </Button>

            <Avatar className="size-7">
              <AvatarImage src={AVATAR} alt="Sienna Wells" />
              <AvatarFallback>SW</AvatarFallback>
            </Avatar>

            <Button variant="outline" size="sm" className="ml-2 gap-1.5">
              <FileTextIcon className="size-3.5" />
              New Mission
            </Button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          <aside className="bg-sidebar flex w-65 shrink-0 flex-col border-r">
            <nav className="flex-1 space-y-5 overflow-y-auto p-3">
              {NAV_GROUPS.map((group) => (
                <div key={group.label}>
                  <div className="flex items-center gap-2 px-2 pb-1 text-sm font-semibold">
                    <group.icon className="text-muted-foreground size-4" />
                    {group.label}
                  </div>
                  <div className="space-y-0.5">
                    {group.items.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={cn(
                          "hover:bg-muted/70 text-muted-foreground flex h-8 w-full items-center rounded-md px-5 text-left text-sm transition-colors",
                          item === "Stations" &&
                            "bg-muted text-foreground font-medium",
                        )}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            <div className="p-3">
              <div className="relative overflow-hidden rounded-xl border bg-card p-4 text-center">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:16px_16px]"
                />
                <div className="relative flex flex-col items-center gap-2">
                  <span className="bg-background flex size-9 items-center justify-center rounded-md border">
                    <WorkflowIcon className="size-4" />
                  </span>
                  <p className="text-sm font-semibold">Integrations</p>
                  <p className="text-muted-foreground text-xs">
                    Connect more tools to your fleet on Pro
                  </p>
                  <Button size="sm" className="mt-1 h-7">
                    Upgrade
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          <main className="min-w-0 flex-1 overflow-y-auto p-5">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <SkeletonTile key={index} tall={index >= 3} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <Sheet open={notificationsOpen} onOpenChange={setNotificationsOpen}>
        <SheetContent
          className="w-full gap-0 p-0 sm:max-w-[430px]"
          showCloseButton={false}
        >
          <SheetHeader className="flex-row items-center justify-between border-b px-4 py-3">
            <SheetTitle className="flex items-center gap-2 text-base">
              Notifications
              <Badge variant="invert" size="sm" radius="full">
                6
              </Badge>
            </SheetTitle>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon-sm" aria-label="Mark all as read">
                <CheckIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Close notifications"
                onClick={() => setNotificationsOpen(false)}
              >
                <span aria-hidden className="text-base leading-none">×</span>
              </Button>
            </div>
            <SheetDescription className="sr-only">
              Recent fleet alerts and approvals.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 divide-y overflow-y-auto">
            <div className="flex gap-3 p-4">
              <Avatar className="size-8 shrink-0">
                <AvatarImage src={AVATAR} alt="Mira Stone" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Mira Stone mentioned you in Mission #8812</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  Can you check the pallet handover at Station 12 before tonight?
                </p>
                <p className="text-muted-foreground mt-1.5 text-xs">2 min ago</p>
              </div>
            </div>

            <div className="flex gap-3 p-4">
              <CircleAlertIcon className="mt-0.5 size-4 shrink-0 text-amber-500" />
              <div className="min-w-0 text-sm">
                <div className="flex items-center gap-2">
                  <p className="font-medium">Dock 4 lost telemetry</p>
                  <Badge variant="outline" size="sm" className="ml-auto">
                    Urgent
                  </Badge>
                </div>
                <p className="text-muted-foreground mt-1">
                  No heartbeat for 6 minutes. Robots queued at the dock were rerouted.
                </p>
                <div className="mt-2 flex gap-2">
                  <Button size="sm" className="h-7">
                    Reconnect
                  </Button>
                  <Button variant="outline" size="sm" className="h-7">
                    Dismiss
                  </Button>
                </div>
                <p className="text-muted-foreground mt-2 text-xs">15 min ago</p>
              </div>
            </div>

            <div className="flex gap-3 p-4">
              <Avatar className="size-8 shrink-0">
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Leo Grant rated the new mission planner</p>
                <p className="text-muted-foreground mt-1">
                  Route previews made the night shift handover much faster.
                </p>
                <Rating rating={4} size="sm" className="mt-2" />
                <p className="text-muted-foreground mt-1.5 text-xs">1 hour ago</p>
              </div>
            </div>

            <div className="flex gap-3 p-4">
              <CircleAlertIcon className="mt-0.5 size-4 shrink-0 text-amber-500" />
              <div className="min-w-0 flex-1 text-sm">
                <p className="font-medium">Pending approval</p>
                <p className="text-muted-foreground mt-1">
                  Night Shift route change for Depot B requires your approval before rollout.
                </p>
                <div className="mt-2 flex gap-2">
                  <Button size="sm" className="h-7">
                    Approve
                  </Button>
                  <Button variant="outline" size="sm" className="h-7">
                    Review
                  </Button>
                </div>
                <div className="mt-2 flex items-center gap-3 text-xs">
                  <span className="text-muted-foreground">2 hours ago</span>
                  <span className="text-muted-foreground">
                    Priority{" "}
                    <Badge variant="warning-light" size="xs" className="ml-1">
                      High
                    </Badge>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 p-4">
              <ZapIcon className="mt-0.5 size-4 shrink-0 text-emerald-500" />
              <div className="text-sm">
                <p className="font-medium">Firmware 2.4.1 rolled out</p>
                <p className="text-muted-foreground mt-1">
                  286 robots updated to the new battery controller without downtime.
                </p>
                <p className="text-muted-foreground mt-1.5 text-xs">3 hours ago</p>
              </div>
            </div>

            <div className="flex gap-3 p-4">
              <UsersIcon className="mt-0.5 size-4 shrink-0 text-emerald-500" />
              <div className="text-sm">
                <p className="font-medium">3 new operators joined the fleet</p>
                <p className="text-muted-foreground mt-1">
                  Nora, Theo and David have been added to the Night Shift roster.
                </p>
                <div className="mt-2 flex -space-x-1.5">
                  {["NT", "TF", "DK"].map((initials) => (
                    <Avatar key={initials} className="size-6 ring-2 ring-background">
                      <AvatarFallback className="text-xs">{initials}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-muted-foreground mt-2 text-xs">4 hours ago</p>
              </div>
            </div>

            <div className="flex gap-3 p-4">
              <StarIcon className="mt-0.5 size-4 shrink-0 text-emerald-500" />
              <div className="text-sm">
                <p className="font-medium">Charging milestone reached!</p>
                <p className="text-muted-foreground mt-1">
                  1,000 charge cycles completed this month across the fleet.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t p-3">
            <Button variant="ghost" className="w-full">
              View all notifications
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
