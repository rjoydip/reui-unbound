import { useEffect, useState } from "react"
import {
  BellIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
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
      { label: "All Robots", icon: TruckIcon },
      { label: "Robot Groups", icon: UsersIcon },
      { label: "Zones", icon: Grid2x2Icon },
      { label: "Assignments", icon: ClipboardListIcon },
    ],
  },
  {
    label: "Fleet Activity",
    items: [
      { label: "Live Status", icon: ZapIcon },
      { label: "Access Requests", icon: ShieldCheckIcon },
      { label: "Alerts", icon: BellIcon },
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

const ALERTS = [
  { title: "Dock 4 Blocked", detail: "R-118 waiting", time: "12m" },
  { title: "Battery Critical", detail: "R-204 at 6%", time: "38m" },
  { title: "Zone C Reopened", detail: "Cleared by ops", time: "2h" },
]

const ROUTES = NAV_GROUPS.flatMap((group) => group.items.map((item) => item.label))

export default function AppShell28Block() {
  const [section, setSection] = useState("Fleet")
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const results = ROUTES.filter((route) =>
    route.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <div className="bg-background flex min-h-svh flex-col p-3">
      <header className="flex h-12 shrink-0 items-center gap-2">
        <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md text-xs font-bold">
          U
        </span>

        <nav className="ml-2 hidden items-center gap-1 md:flex">
          {SECTIONS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setSection(item.label)}
              className={cn(
                "text-muted-foreground hover:bg-muted/70 hover:text-foreground flex h-8 items-center gap-2 rounded-md px-2.5 text-sm transition-colors",
                section === item.label &&
                  "border bg-card text-foreground font-medium shadow-xs",
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="outline" size="sm" className="ml-2 gap-1.5">
              {section}
              <ChevronDownIcon className="size-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-44">
            {SECTIONS.map((item) => (
              <DropdownMenuItem key={item.label} onClick={() => setSection(item.label)}>
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
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Fleet Preferences</DropdownMenuItem>
              <DropdownMenuItem>Access Rules</DropdownMenuItem>
              <DropdownMenuItem>Data Sync</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Notifications">
                <BellIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="divide-y">
                {ALERTS.map((alert) => (
                  <div key={alert.title} className="flex gap-2 px-1 py-2">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">{alert.title}</p>
                      <p className="text-muted-foreground text-xs">{alert.detail}</p>
                    </div>
                    <span className="text-muted-foreground text-xs">{alert.time}</span>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Avatar className="mx-1 size-7">
            <AvatarImage src={AVATAR} alt="Shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            New Mission
          </Button>
        </div>
      </header>

      <div className="bg-card mt-2 flex min-h-0 flex-1 overflow-hidden rounded-2xl border">
        <aside className="bg-sidebar flex w-60 shrink-0 flex-col border-r">
          <nav className="flex-1 space-y-4 overflow-y-auto p-3">
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
              className="hover:bg-muted/70 flex w-full items-center gap-2 rounded-lg border p-2 text-left transition-colors"
            >
              <Avatar className="size-8">
                <AvatarImage src={AVATAR} alt="Shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <span className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-medium">Shadcn</span>
                <span className="text-muted-foreground truncate text-xs">
                  Author of Shadcn/ui
                </span>
              </span>
              <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-4 shrink-0" />
            </button>
          </div>
        </aside>

        <main className="min-w-0 flex-1 overflow-y-auto p-4">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="flex h-40 flex-col rounded-xl border">
                <div className="flex-1" />
                <div className="border-t p-3">
                  <div className="bg-muted h-2.5 w-2/3 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="bg-card rounded-xl border p-4">
                <div className="bg-muted h-2.5 w-2/3 rounded-full" />
                <div className="bg-muted mt-2 h-2.5 w-1/2 rounded-full" />
                <div className="bg-muted/60 mt-4 h-32 rounded-lg" />
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {[0, 1].map((index) => (
              <div key={index} className="bg-card rounded-xl border p-4">
                <div className="bg-muted h-2.5 w-2/3 rounded-full" />
                <div className="bg-muted mt-2 h-2.5 w-1/2 rounded-full" />
                <div className="bg-muted/60 mt-4 h-52 rounded-lg" />
              </div>
            ))}
          </div>
        </main>
      </div>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-lg">
          <DialogHeader className="sr-only">
            <DialogTitle>Search fleet</DialogTitle>
            <DialogDescription>Find robots, zones and missions.</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 px-3">
            <SearchIcon className="text-muted-foreground size-4" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search robots, zones, missions"
              className="h-12 w-full bg-transparent text-sm outline-none"
            />
          </div>
          {query ? (
            <div className="border-t p-2">
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
                  No results for “{query}”
                </p>
              ) : null}
            </div>
          ) : (
            <div className="text-muted-foreground flex items-center justify-between border-t px-3 py-2 text-xs">
              <span>Jump to a route in {section}</span>
              <Badge variant="outline" size="sm">
                ⌘K
              </Badge>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
