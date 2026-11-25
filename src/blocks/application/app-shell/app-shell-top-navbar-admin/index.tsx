import { useMemo, useState } from "react"
import {
  BellIcon,
  CheckIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  MenuIcon,
  RadioIcon,
  RouteIcon,
  SearchIcon,
  SettingsIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  TruckIcon,
  WrenchIcon,
  XIcon,
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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Rating } from "@/components/kit/rating"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

const navSections = [
  { label: "Overview", icon: LayoutDashboardIcon },
  { label: "Fleet", icon: TruckIcon },
  { label: "Missions", icon: RouteIcon },
  { label: "Stations", icon: RadioIcon },
  { label: "Maintenance", icon: WrenchIcon },
  { label: "Reports", icon: FileTextIcon },
]

const workspaceTabs = [
  "Summary",
  "Delivery Center",
  "Performance",
  "Coverage",
  "Issues",
  "Capacity",
  "Trends",
  "Access",
]

type Notification = {
  title: string
  body: string
  time: string
  tone: string
  initials?: string
  avatar?: string
  rating?: number
  urgent?: boolean
  approval?: boolean
}

const notifications: Notification[] = [
  {
    title: "Mira Stone mentioned you in Mission #8812",
    body: "Can you check the pallet handover at Station 12 before tonight?",
    time: "2 min ago",
    tone: "bg-primary/15 text-primary",
    initials: "MS",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  },
  {
    title: "Dock 4 lost telemetry",
    body: "No heartbeat for 6 minutes. Robots queued at the dock were rerouted.",
    time: "15 min ago",
    tone: "bg-warning/15 text-warning-foreground",
    urgent: true,
  },
  {
    title: "Leo Grant rated the new mission planner",
    body: "Route previews made the night shift handover much faster.",
    time: "1 hour ago",
    tone: "bg-warning/15 text-warning-foreground",
    initials: "LG",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
    rating: 4,
  },
  {
    title: "Pending approval",
    body: "Night Shift route change for Depot B requires your approval before rollout.",
    time: "2 hours ago",
    tone: "bg-warning/15 text-warning-foreground",
    approval: true,
  },
  {
    title: "Firmware 2.4.1 rolled out",
    body: "286 robots updated to the new battery controller without downtime.",
    time: "3 hours ago",
    tone: "bg-success/15 text-success-foreground",
  },
  {
    title: "3 new operators joined the fleet",
    body: "Nora, Theo and David have been added to the Night Shift roster.",
    time: "4 hours ago",
    tone: "bg-primary/15 text-primary",
    initials: "NT",
  },
  {
    title: "Charging milestone reached!",
    body: "1,000 charge cycles completed this month across the fleet.",
    time: "6 hours ago",
    tone: "bg-info/15 text-info-foreground",
  },
]

function StatSkeleton() {
  return (
    <div className="bg-card rounded-xl border p-4">
      <div className="flex items-center gap-2">
        <Skeleton className="size-7 rounded-lg" />
        <Skeleton className="h-2.5 w-2/5" />
        <Skeleton className="ml-auto size-6 rounded-md" />
      </div>
      <Skeleton className="mt-5 h-2.5 w-3/5" />
      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-1.5">
          <Skeleton className="size-5 rounded-full" />
          <Skeleton className="size-5 rounded-full" />
          <Skeleton className="size-5 rounded-full" />
        </div>
        <Skeleton className="h-2.5 w-24" />
      </div>
    </div>
  )
}

function WorkspaceContent() {
  return (
    <div className="mt-4 grid gap-4 xl:grid-cols-[320px_1fr]">
      <div className="space-y-4">
        <StatSkeleton />
        <StatSkeleton />
        <StatSkeleton />
      </div>
      <div className="bg-card rounded-xl border p-5">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="mt-4 h-2.5 w-2/3" />
        {[0, 1].map((row) => (
          <div key={row} className="mt-8">
            <div className="flex items-center gap-3">
              <Skeleton className="size-2.5 rounded-full" />
              <Skeleton className="h-2.5 w-28" />
              <Skeleton className="h-2.5 w-20" />
              <Skeleton className="h-2.5 w-16" />
              <Skeleton className="ml-auto size-8 rounded-lg" />
            </div>
            <Skeleton className="mt-4 h-36 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AppShellTopNavbarAdminBlock() {
  const [section, setSection] = useState("Overview")
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [autoDispatch, setAutoDispatch] = useState(true)
  const [lowBattery, setLowBattery] = useState(true)
  const [maintenanceMode, setMaintenanceMode] = useState(false)

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return workspaceTabs.slice(0, 4)
    return workspaceTabs.filter((item) => item.toLowerCase().includes(needle))
  }, [query])

  return (
    <div className="bg-muted/30 flex min-h-svh flex-col">
      <header className="bg-background flex h-14 items-center gap-3 border-b px-4">
        <div className="flex items-center gap-2">
          <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md text-xs font-bold">
            U
          </span>
          <span className="hidden text-sm font-semibold tracking-[0.2em] sm:block">
            REUI
          </span>
        </div>

        <nav className="ml-2 hidden items-center gap-0.5 lg:flex" aria-label="Sections">
          {navSections.map((item) => {
            const Icon = item.icon
            const isActive = section === item.label
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setSection(item.label)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-muted-foreground hover:bg-muted/60 hover:text-foreground flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-colors",
                  isActive && "bg-muted text-foreground",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </button>
            )
          })}
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="lg:hidden">
              <MenuIcon />
              Sections
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {navSections.map((item) => (
              <DropdownMenuItem key={item.label} onSelect={() => setSection(item.label)}>
                <item.icon />
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Search robots, zones, missions"
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
              <DropdownMenuItem>Fleet Settings</DropdownMenuItem>
              <DropdownMenuItem>Station Defaults</DropdownMenuItem>
              <DropdownMenuItem>Alert Rules</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Operations</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={autoDispatch}
                onCheckedChange={setAutoDispatch}
              >
                Auto-Dispatch
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={lowBattery}
                onCheckedChange={setLowBattery}
              >
                Low-Battery Return
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={maintenanceMode}
                onCheckedChange={setMaintenanceMode}
              >
                Maintenance Mode
              </DropdownMenuCheckboxItem>
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
              <button
                type="button"
                aria-label="Open account menu"
                className="ring-border ml-1 rounded-full ring-2"
              >
                <Avatar className="size-7">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
                    alt="Shadcn"
                  />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>Shadcn</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button size="sm" className="ml-2 hidden sm:inline-flex">
            Onboard Robot
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col p-3">
        <div className="bg-background flex-1 rounded-xl border shadow-sm">
          <div className="flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-start">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Mission Control Center
                </h1>
                <Badge size="sm" variant="secondary">
                  342 Robots
                </Badge>
                <Badge size="sm" variant="secondary">
                  58 Missions
                </Badge>
                <Badge size="sm" variant="secondary">
                  12 Stations
                </Badge>
              </div>
              <p className="text-muted-foreground mt-1.5 max-w-2xl text-sm">
                Track robot status, capacity, assignments, health, and activity
                across your entire operating fleet.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 lg:ml-auto">
              <Button size="sm" className="gap-1.5">
                <RouteIcon />
                New Mission
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5">
                <SparklesIcon />
                Open Chat
              </Button>
              <Button variant="outline" size="icon-sm" aria-label="View display options">
                <SlidersHorizontalIcon />
              </Button>
            </div>
          </div>

          <div className="p-4">
            <Tabs defaultValue="Delivery Center">
              <TabsList className="max-w-full justify-start overflow-x-auto">
                {workspaceTabs.map((tab) => (
                  <TabsTrigger key={tab} value={tab} className="px-2.5">
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <WorkspaceContent />
          </div>
        </div>
      </div>

      <Sheet open={notificationsOpen} onOpenChange={setNotificationsOpen}>
        <SheetContent className="w-full gap-0 sm:max-w-md">
          <SheetHeader className="flex-row items-center border-b">
            <SheetTitle className="flex items-center gap-2">
              Notifications
              <Badge size="sm" variant="secondary">
                6
              </Badge>
            </SheetTitle>
            <div className="ml-auto flex items-center gap-1">
              <Button variant="ghost" size="icon-sm" aria-label="Mark all as read">
                <CheckIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Close notifications"
                onClick={() => setNotificationsOpen(false)}
              >
                <XIcon />
              </Button>
            </div>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto">
            {notifications.map((item) => (
              <div key={item.title} className="flex gap-3 border-b px-4 py-3">
                <span
                  className={cn(
                    "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
                    item.tone,
                  )}
                >
                  {item.avatar ? (
                    <Avatar className="size-7">
                      <AvatarImage src={item.avatar} alt="" />
                      <AvatarFallback>{item.initials}</AvatarFallback>
                    </Avatar>
                  ) : (
                    (item.initials ?? <BellIcon className="size-3.5" />)
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-2">
                    <p className="text-[13px] font-medium">{item.title}</p>
                    {item.urgent ? (
                      <Badge size="sm" variant="outline" className="ml-auto">
                        Urgent
                      </Badge>
                    ) : null}
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">{item.body}</p>
                  {item.rating ? (
                    <Rating rating={item.rating} size="sm" className="mt-1.5" />
                  ) : null}
                  {item.urgent ? (
                    <div className="mt-2 flex gap-2">
                      <Button size="xs">Reconnect</Button>
                      <Button size="xs" variant="outline">
                        Dismiss
                      </Button>
                    </div>
                  ) : null}
                  {item.approval ? (
                    <div className="mt-2 flex items-center gap-2">
                      <Button size="xs">Approve</Button>
                      <Button size="xs" variant="outline">
                        Review
                      </Button>
                      <span className="text-muted-foreground ml-1 text-[11px]">
                        Priority
                      </span>
                      <Badge size="xs" variant="warning-light">
                        High
                      </Badge>
                    </div>
                  ) : null}
                  <p className="text-muted-foreground mt-1.5 text-[11px]">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <SheetFooter className="border-t">
            <Button variant="ghost" className="w-full">
              View all notifications
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="top-[38%] gap-0 p-0 sm:max-w-xl">
          <DialogHeader className="sr-only">
            <DialogTitle>Search</DialogTitle>
            <DialogDescription>Search robots, zones and missions.</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 border-b px-3">
            <SearchIcon className="text-muted-foreground size-4" />
            <Input
              autoFocus
              aria-label="Search robots, zones, missions"
              placeholder="Search robots, zones, missions"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
            />
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
            >
              <XIcon />
            </Button>
          </div>
          <div className="p-2">
            {results.length ? (
              results.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm"
                  onClick={() => {
                    setSection("Overview")
                    setSearchOpen(false)
                  }}
                >
                  <LayoutDashboardIcon className="text-muted-foreground size-4" />
                  {item}
                </button>
              ))
            ) : (
              <p className="text-muted-foreground px-2 py-6 text-center text-sm">
                No views match “{query}”.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
