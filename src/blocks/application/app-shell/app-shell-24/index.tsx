import { useState } from "react"
import {
  ActivityIcon,
  BellIcon,
  BoxIcon,
  ChevronsUpDownIcon,
  CircleAlertIcon,
  ClipboardListIcon,
  CompassIcon,
  FileTextIcon,
  Grid2x2Icon,
  LayoutDashboardIcon,
  ListChecksIcon,
  MapPinnedIcon,
  RadioTowerIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  TagIcon,
  TruckIcon,
  UserIcon,
  UsersIcon,
  WrenchIcon,
  ZapIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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

const SECTIONS = [
  { label: "Fleet", icon: TruckIcon },
  { label: "Missions", icon: ListChecksIcon },
  { label: "Stations", icon: RadioTowerIcon },
  { label: "Maintenance", icon: WrenchIcon },
  { label: "Reports", icon: FileTextIcon },
]

const NAV_GROUPS = [
  {
    label: "Fleet Overview",
    items: [
      { label: "Overview", icon: LayoutDashboardIcon },
      { label: "Live Map", icon: MapPinnedIcon },
      { label: "All Robots", icon: BoxIcon },
      { label: "Robot Groups", icon: UsersIcon },
      { label: "Zones", icon: Grid2x2Icon },
      { label: "Assignments", icon: ClipboardListIcon },
    ],
  },
  {
    label: "Fleet Activity",
    items: [
      { label: "Live Status", icon: ActivityIcon },
      { label: "Access Requests", icon: ShieldCheckIcon },
      { label: "Alerts", icon: CircleAlertIcon },
      { label: "Event Feed", icon: CompassIcon },
    ],
  },
  {
    label: "Fleet Settings",
    items: [
      { label: "Robot Profiles", icon: UserIcon },
      { label: "Tags & Labels", icon: TagIcon },
      { label: "Access Rules", icon: ShieldCheckIcon },
      { label: "Data Sync", icon: ZapIcon },
      { label: "Fleet Preferences", icon: SettingsIcon },
    ],
  },
]

const SEARCH_ROUTES = NAV_GROUPS.flatMap((group) => group.items.map((item) => item.label))

const STATUSES = [
  { label: "No Status", dot: "bg-muted-foreground/40" },
  { label: "Online", dot: "bg-emerald-500" },
  { label: "Away", dot: "bg-amber-500" },
  { label: "Offline", dot: "bg-rose-500" },
]

function StatSkeleton() {
  return (
    <div className="bg-card rounded-xl border p-4">
      <div className="bg-muted h-2.5 w-28 rounded-full" />
      <div className="bg-muted mt-2 h-2.5 w-36 rounded-full" />
      <div className="bg-muted/70 mt-4 h-8 w-24 rounded-md" />
    </div>
  )
}

function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("bg-card rounded-xl border p-5", className)}>
      <div className="bg-muted h-2.5 w-2/3 rounded-full" />
      <div className="bg-muted mt-2 h-2.5 w-1/2 rounded-full" />
      <div className="bg-muted/70 mt-4 h-56 rounded-lg" />
    </div>
  )
}

export default function AppShell24Block() {
  const [section, setSection] = useState("Fleet")
  const [status, setStatus] = useState("No Status")
  const [searchOpen, setSearchOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [query, setQuery] = useState("")

  const results = SEARCH_ROUTES.filter((route) =>
    route.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <div className="bg-background flex min-h-svh flex-col">
      <header className="flex h-13 shrink-0 items-center gap-1 border-b px-3">
        <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md text-xs font-bold">
          U
        </span>
        <div className="bg-border mx-2 h-5 w-px" />
        {SECTIONS.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setSection(item.label)}
            className={cn(
              "text-muted-foreground hover:bg-muted/60 hover:text-foreground flex h-8 items-center gap-2 rounded-md px-2.5 text-sm transition-colors",
              section === item.label && "bg-muted text-foreground font-medium",
            )}
          >
            <item.icon className="size-4" />
            {item.label}
          </button>
        ))}

        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Search fleet"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Fleet settings">
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
                <RadioTowerIcon />
                Station Defaults
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Alert Rules
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Operations</DropdownMenuLabel>
              <DropdownMenuItem>
                Auto-Dispatch
                <span className="ml-auto text-xs">✓</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Low-Battery Return
                <span className="ml-auto text-xs">✓</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Maintenance Mode</DropdownMenuItem>
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" aria-label="Account menu" className="ml-1">
                <Avatar className="size-7">
                  <AvatarImage src={AVATAR} alt="shadcn" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <div className="flex items-center gap-2 px-2 py-2">
                <Avatar className="size-8">
                  <AvatarImage src={AVATAR} alt="shadcn" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">shadcn</p>
                  <p className="text-muted-foreground truncate text-xs">m@example.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              {STATUSES.map((entry) => (
                <DropdownMenuItem key={entry.label} onClick={() => setStatus(entry.label)}>
                  <span className={cn("size-2.5 rounded-full", entry.dot)} />
                  {entry.label}
                  {status === entry.label ? (
                    <span className="ml-auto text-xs">✓</span>
                  ) : null}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem>
                <UserIcon />
                Profile
                <span className="text-muted-foreground ml-auto text-xs">⌘P</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UsersIcon />
                Shift Roster
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Preferences
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
                <span className="flex size-4 items-center justify-center rounded-full border" />
                Theme
                <span className="text-muted-foreground ml-auto text-xs">☀ ☾ ▭</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Sign Out
                <span className="text-muted-foreground ml-auto text-xs">⌘Q</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-2">
                New Mission
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>Start From</DropdownMenuLabel>
              <DropdownMenuItem>
                <TruckIcon />
                Transport Run
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SearchIcon />
                Inspection Sweep
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ZapIcon />
                Recharge Cycle
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="bg-sidebar flex w-65 shrink-0 flex-col border-r">
          <nav className="flex-1 space-y-5 overflow-y-auto p-3">
            {NAV_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-muted-foreground px-2 pb-1 text-xs font-medium">
                  {group.label}
                </p>
                <div className="space-y-0.5">
                  {group.items.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className={cn(
                        "text-muted-foreground hover:bg-muted/70 hover:text-foreground flex h-8 w-full items-center gap-2 rounded-md px-2 text-left text-sm transition-colors",
                        item.label === "Overview" &&
                          "bg-muted text-foreground font-medium",
                      )}
                    >
                      <item.icon className="size-4" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="border-t p-3">
            <button
              type="button"
              className="hover:bg-muted/70 flex w-full items-center gap-2 rounded-lg border bg-card p-2 text-left transition-colors"
            >
              <Avatar className="size-8">
                <AvatarImage src={AVATAR} alt="shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <span className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-medium">shadcn</span>
                <span className="text-muted-foreground truncate text-xs">
                  Author of Shadcn/ui
                </span>
              </span>
              <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-4 shrink-0" />
            </button>
          </div>
        </aside>

        <main className="min-w-0 flex-1 overflow-y-auto p-5">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[0, 1, 2, 3].map((index) => (
              <StatSkeleton key={index} />
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CardSkeleton />
            <CardSkeleton />
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </main>
      </div>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-lg">
          <DialogHeader className="sr-only">
            <DialogTitle>Search fleet</DialogTitle>
            <DialogDescription>Find a route in the fleet console.</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 border-b px-3">
            <SearchIcon className="text-muted-foreground size-4" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search robots, zones, missions..."
              className="h-11 w-full bg-transparent text-sm outline-none"
            />
          </div>
          <div className="max-h-72 overflow-y-auto p-2">
            {results.map((route) => (
              <button
                key={route}
                type="button"
                onClick={() => setSearchOpen(false)}
                className="hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors"
              >
                <LayoutDashboardIcon className="text-muted-foreground size-4" />
                {route}
              </button>
            ))}
            {results.length === 0 ? (
              <p className="text-muted-foreground px-2 py-6 text-center text-sm">
                No routes match “{query}”
              </p>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>

      <Sheet open={notificationsOpen} onOpenChange={setNotificationsOpen}>
        <SheetContent
          side="right"
          className="gap-0 rounded-xl border p-0 shadow-xl data-[side=right]:inset-y-3 data-[side=right]:right-3 data-[side=right]:h-auto sm:max-w-[420px]"
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
                <span className="text-base leading-none">✓</span>
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Close notifications"
                onClick={() => setNotificationsOpen(false)}
              >
                <span className="text-base leading-none">×</span>
              </Button>
            </div>
            <SheetDescription className="sr-only">
              Recent fleet alerts and approvals.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 divide-y overflow-y-auto">
            <div className="flex gap-3 p-4">
              <Avatar className="size-8 shrink-0">
                <AvatarFallback className="text-xs">MS</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Mira Stone mentioned you in Mission #8812</p>
                <p className="text-muted-foreground mt-1">
                  Can you check the pallet handover at Station 12 before tonight?
                </p>
                <p className="text-muted-foreground mt-1.5 text-xs">2 min ago</p>
              </div>
            </div>

            <div className="flex gap-3 p-4">
              <CircleAlertIcon className="mt-0.5 size-4 shrink-0 text-amber-500" />
              <div className="min-w-0 flex-1 text-sm">
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
                <AvatarFallback className="text-xs">LG</AvatarFallback>
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
