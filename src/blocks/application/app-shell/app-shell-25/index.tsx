import { useState } from "react"
import {
  ActivityIcon,
  ArrowUpRightIcon,
  BotIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleHelpIcon,
  ClipboardCheckIcon,
  ClockIcon,
  ImageIcon,
  LayoutDashboardIcon,
  ListChecksIcon,
  MapIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  SparklesIcon,
  TargetIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Frame, FramePanel } from "@/components/kit/frame"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

const AVATAR =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"

const RAIL = [
  { label: "Dashboard", icon: LayoutDashboardIcon },
  { label: "Routes", icon: MapIcon },
  { label: "Assignments", icon: ClipboardCheckIcon },
  { label: "Operators", icon: UsersIcon },
  { label: "Robots", icon: BotIcon },
  { label: "Missions", icon: ListChecksIcon },
  { label: "Media", icon: ImageIcon },
  { label: "Maintenance", icon: WrenchIcon },
  { label: "Security", icon: ShieldIcon },
  { label: "Targets", icon: TargetIcon },
]

const ASSIGNMENTS = [
  { name: "Meow S025", status: "On time", badge: "success-light" as const, initials: "ME" },
  { name: "Dock C112", status: "Running late", badge: "warning-light" as const, initials: "DO" },
  { name: "Pip W92", status: "On time", badge: "success-light" as const, initials: "PI" },
  { name: "Humble P028", status: "Failed", badge: "destructive-light" as const, initials: "HU" },
]

const EVENTS = [
  { time: "15:05", label: "Cargo scanned", meta: "18/18 units" },
  { time: "15:13", label: "Delay detected", meta: "+6 min" },
  { time: "15:15", label: "Checkpoint reached", meta: "Zone B" },
  { time: "15:17", label: "Route changed by Chris", meta: "" },
  { time: "15:18", label: "Battery dropped", meta: "▮▮▮▮▯" },
]

const TICKS = Array.from({ length: 44 }, (_, index) =>
  index < 24
    ? "bg-blue-500"
    : index < 32
      ? "bg-emerald-500"
      : index < 38
        ? "bg-amber-500"
        : "bg-rose-500",
)

function Section({
  title,
  count,
  children,
  defaultOpen,
}: {
  title: string
  count: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(Boolean(defaultOpen))
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border-t pt-3">
      <div className="flex items-center gap-2">
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="flex flex-1 items-center gap-2 text-left text-sm font-semibold"
          >
            {title}
            <Badge variant="outline" size="sm">
              {count}
            </Badge>
          </button>
        </CollapsibleTrigger>
        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
          View All
        </Button>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="icon-xs" aria-label={`Toggle ${title}`}>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-2">{children}</CollapsibleContent>
    </Collapsible>
  )
}

export default function AppShell25Block() {
  const [query, setQuery] = useState("")
  const [scope, setScope] = useState("Across All Robots")
  const [tab, setTab] = useState("robots")

  const assignments = ASSIGNMENTS.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <div className="bg-muted/30 flex min-h-svh gap-3 p-3">
      <aside className="flex w-11 shrink-0 flex-col items-center gap-1 py-1">
        <div className="bg-foreground text-background mb-2 flex size-8 items-center justify-center rounded-lg text-xs font-bold">
          U
        </div>
        {RAIL.map((item) => (
          <button
            key={item.label}
            type="button"
            aria-label={item.label}
            className={cn(
              "text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-md transition-colors [&_svg]:size-4",
              item.label === "Assignments" &&
                "bg-foreground text-background hover:bg-foreground hover:text-background",
            )}
          >
            <item.icon />
          </button>
        ))}
        <div className="mt-auto flex flex-col items-center gap-1">
          <button
            type="button"
            aria-label="Help"
            className="text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-md transition-colors [&_svg]:size-4"
          >
            <CircleHelpIcon />
          </button>
          <button
            type="button"
            aria-label="Settings"
            className="text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-md transition-colors [&_svg]:size-4"
          >
            <SettingsIcon />
          </button>
          <Avatar className="mt-1 size-8">
            <AvatarImage src={AVATAR} alt="Sienna Wells" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
        </div>
      </aside>

      <aside className="hidden w-[436px] shrink-0 lg:block">
        <div className="bg-card flex h-[calc(100svh-1.5rem)] flex-col rounded-xl border">
          <div className="shrink-0 px-4 py-3">
            <h1 className="text-base font-semibold">Mission Control Center</h1>
          </div>

          <Tabs value={tab} onValueChange={setTab} className="shrink-0 px-4">
            <TabsList className="w-full">
              {["missions", "robots", "stations", "alerts"].map((entry) => (
                <TabsTrigger key={entry} value={entry} className="capitalize">
                  {entry}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="mt-3 flex-1 space-y-3 overflow-y-auto px-4 pb-3">
            {tab !== "robots" ? (
              <div className="flex h-full flex-col items-center justify-center gap-2 py-16 text-center">
                <span className="bg-muted flex size-10 items-center justify-center rounded-lg">
                  <ListChecksIcon className="size-4" />
                </span>
                <p className="text-sm font-medium">Queue Staged</p>
                <p className="text-muted-foreground max-w-52 text-sm">
                  Scheduled missions are staged under the Robots view.
                </p>
              </div>
            ) : (
              <>
                <div className="bg-card rounded-xl border p-3">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold">Robot Management</p>
                    <div className="ml-auto flex items-center gap-1">
                      <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                        <UsersIcon className="size-3.5" />
                        Onboarding
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="icon-xs" aria-label="Fleet options">
                            <SettingsIcon />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Fleet</DropdownMenuLabel>
                          <DropdownMenuItem>Rebalance routes</DropdownMenuItem>
                          <DropdownMenuItem>Export assignments</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Robot settings</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="mt-3 flex h-6 items-center gap-[3px]">
                    {TICKS.map((color, index) => (
                      <span
                        key={index}
                        className={cn("h-5 w-1 rounded-full", color)}
                      />
                    ))}
                  </div>
                  <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-3 text-xs">
                    <span className="text-foreground">
                      <span className="bg-blue-500 mr-1 inline-block size-1.5 rounded-full" />
                      38 Scheduled
                    </span>
                    <span className="text-foreground">
                      <span className="bg-emerald-500 mr-1 inline-block size-1.5 rounded-full" />
                      5 Active
                    </span>
                    <span className="text-foreground">
                      <span className="bg-amber-500 mr-1 inline-block size-1.5 rounded-full" />
                      12 Paused
                    </span>
                    <span className="text-foreground">
                      <span className="bg-rose-500 mr-1 inline-block size-1.5 rounded-full" />
                      3 Failed
                    </span>
                  </div>

                  <Separator className="my-3" />
                  <div className="grid grid-cols-4 divide-x text-center">
                    {[
                      ["$12.8k", "Order Value"],
                      ["32 min", "Avg. Run"],
                      ["68%", "On Time"],
                      ["28", "Zones"],
                    ].map(([value, label]) => (
                      <div key={label}>
                        <p className="text-sm font-semibold">{value}</p>
                        <p className="text-muted-foreground text-xs">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Section title="Scheduled" count="38 Missions">
                  <p className="text-muted-foreground text-sm">
                    Night shift routes queue after the depot closes.
                  </p>
                </Section>

                <Section title="Active Assignments" count="5 Missions" defaultOpen>
                  <div className="space-y-2">
                    {assignments.map((item, index) => (
                      <div key={item.name}>
                        <div className="flex items-center gap-2">
                          <Avatar className="size-6">
                            <AvatarFallback className="text-xs">
                              {item.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{item.name}</span>
                          <Badge variant={item.badge} size="xs" className="ml-1">
                            {item.status}
                          </Badge>
                          <Button
                            variant="outline"
                            size="icon-xs"
                            aria-label={`Open ${item.name}`}
                            className="ml-auto"
                          >
                            <ArrowUpRightIcon />
                          </Button>
                        </div>

                        {index === 1 ? (
                          <div className="mt-2 space-y-2">
                            <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs">
                              <span className="flex items-center gap-1">
                                <ClockIcon className="size-3.5" /> 24m
                              </span>
                              <span>3.8km</span>
                              <span>▮ 76%</span>
                              <span className="ml-auto flex items-center gap-1">
                                <span className="border-muted-foreground/40 size-2 rounded-full border" />
                                Checking
                                <span className="bg-foreground size-2 rounded-full" />
                                Mark
                              </span>
                            </div>
                            <div className="space-y-1.5">
                              {EVENTS.map((event) => (
                                <div
                                  key={event.time}
                                  className="text-muted-foreground flex items-center gap-2 text-xs"
                                >
                                  <span className="bg-primary size-1.5 rounded-full" />
                                  <span className="w-8 shrink-0">{event.time}</span>
                                  <span className="text-foreground">{event.label}</span>
                                  <span className="ml-auto">{event.meta}</span>
                                </div>
                              ))}
                            </div>
                            <Button variant="outline" size="sm" className="w-full text-xs">
                              Track Mission
                            </Button>
                          </div>
                        ) : null}
                      </div>
                    ))}
                    {assignments.length === 0 ? (
                      <p className="text-muted-foreground py-3 text-sm">
                        No robots match “{query}”.
                      </p>
                    ) : null}
                  </div>
                </Section>

                <Section title="Paused" count="12 Missions">
                  <p className="text-muted-foreground text-sm">
                    Routes paused by a dispatcher.
                  </p>
                </Section>

                <Section title="Failed" count="3 Missions">
                  <p className="text-muted-foreground text-sm">
                    Runs stopped by a robot fault.
                  </p>
                </Section>
              </>
            )}
          </div>

          <div className="flex shrink-0 gap-2 border-t p-3">
            <Button size="sm" className="flex-1">
              <ClipboardCheckIcon className="size-3.5" />
              Review Assignments
            </Button>
            <Button variant="outline" size="sm">
              <ActivityIcon className="size-3.5" />
              Activity
            </Button>
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="flex flex-wrap items-center gap-2 pb-3">
          <InputGroup className="min-w-48 flex-1 md:max-w-sm">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Enter Robot SKV or Nickname"
            />
          </InputGroup>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5">
                <TargetIcon className="size-3.5" />
                {scope}
                <ChevronDownIcon className="size-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {["Across All Robots", "Zone A", "Zone B", "Depot 4"].map((entry) => (
                <DropdownMenuItem key={entry} onClick={() => setScope(entry)}>
                  {entry}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="ml-auto flex items-center gap-2">
            <Button size="sm">
              <PlusIcon className="size-3.5" />
              New Mission
            </Button>
            <Button variant="outline" size="sm">
              <SparklesIcon className="size-3.5" />
              Ask AI
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="Console settings">
              <SettingsIcon />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="rounded-xl border p-4">
                <div className="flex items-center gap-2">
                  <div className="bg-muted size-8 rounded-lg" />
                  <div className="bg-muted h-2.5 w-24 rounded-full" />
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <div className="bg-muted h-3 w-16 rounded-full" />
                  <div className="bg-muted h-2.5 w-16 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          <Frame className="min-h-[480px]">
            <FramePanel className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="bg-muted h-3 w-32 rounded-full" />
                <div className="flex gap-2">
                  <div className="bg-muted h-7 w-20 rounded-md" />
                  <div className="bg-muted h-7 w-20 rounded-md" />
                </div>
              </div>
              <div className="bg-muted h-4 w-2/5 rounded-full" />
              <div className="space-y-3">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="bg-muted/60 h-24 rounded-lg" />
                ))}
              </div>
            </FramePanel>
          </Frame>
        </div>
      </main>
    </div>
  )
}
