import { useEffect, useRef, useState } from "react"
import {
  ArrowLeftRightIcon,
  Building2Icon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  FileTextIcon,
  GripVerticalIcon,
  LayersIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  MonitorIcon,
  MoonIcon,
  PanelLeftIcon,
  PlusIcon,
  RadioTowerIcon,
  SearchIcon,
  ShieldCheckIcon,
  SunIcon,
  WorkflowIcon,
  type LucideIcon,
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
import { Kbd } from "@/components/ui/kbd"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

const AVATAR =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"

const NAV_GROUPS = [
  {
    label: "Fleet Overview",
    items: [
      { label: "Overview", icon: LayoutDashboardIcon },
      { label: "Security Center", icon: ShieldCheckIcon },
      { label: "Live Map", icon: MapPinIcon },
      { label: "All Robots", icon: Building2Icon },
      { label: "Zones", icon: LayersIcon },
    ],
  },
  {
    label: "Fleet Activity",
    items: [
      { label: "Live Status", icon: RadioTowerIcon },
      { label: "Access Requests", icon: ArrowLeftRightIcon },
      { label: "Event Feed", icon: FileTextIcon },
    ],
  },
]

const SCOPE_TITLES: Record<string, string> = {
  security: "Security Scope",
  assets: "Asset Scope",
  events: "Event Scope",
}

type Row = {
  label: string
  count?: string
  badge?: { label: string; variant: "success-light" | "warning-light" | "destructive-light" }
  action?: string
  active?: boolean
  open?: boolean
  children?: Row[]
}

const TREES: Record<string, { root: string; rootIcon: LucideIcon; rows: Row[] }> = {
  security: {
    root: "Endpoints",
    rootIcon: ShieldCheckIcon,
    rows: [
      { label: "Devices", count: "248", action: "+" },
      {
        label: "Threats",
        count: "12",
        action: "Review",
        open: true,
        children: [
          { label: "Overview" },
          { label: "Suspicious Activity", active: true },
          { label: "Incidents" },
          { label: "Anomalies" },
        ],
      },
      { label: "Risks", count: "37", badge: { label: "High", variant: "destructive-light" } },
      { label: "Policies", count: "8", action: "+" },
      { label: "Quarantined", count: "5" },
      { label: "Tasks", count: "7", badge: { label: "Active", variant: "success-light" } },
      { label: "Identity & Access", action: "Add" },
      { label: "Application Security" },
      { label: "Data Protection", action: "Review" },
    ],
  },
  assets: {
    root: "Robot Fleet",
    rootIcon: LayersIcon,
    rows: [
      { label: "Units", count: "271" },
      { label: "Docking Stations", count: "24" },
      { label: "Sensors", count: "118" },
      { label: "Firmware", badge: { label: "Stable", variant: "success-light" } },
      { label: "Spare Parts", action: "Add" },
    ],
  },
  events: {
    root: "Event Streams",
    rootIcon: RadioTowerIcon,
    rows: [
      { label: "Alerts", count: "128" },
      { label: "Telemetry", count: "4210" },
      { label: "Audit Log", count: "912" },
      { label: "Schedules", badge: { label: "Active", variant: "success-light" } },
      { label: "Webhooks", action: "Review" },
    ],
  },
}

function TreeRows({ rows, depth = 0 }: { rows: Row[]; depth?: number }) {
  return (
    <div className={cn("space-y-0.5", depth > 0 && "border-border ml-3 border-l pl-2")}>
      {rows.map((row) => {
        const inner = (
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={cn(
                "text-muted-foreground hover:bg-muted/70 hover:text-foreground flex h-8 min-w-0 flex-1 items-center gap-2 rounded-md px-1.5 text-left text-sm transition-colors",
                row.active && "bg-muted text-foreground font-medium",
              )}
            >
              {row.children ? (
                <ChevronRightIcon className="size-3.5 shrink-0 transition-transform group-data-[state=open]/node:rotate-90" />
              ) : (
                <GripVerticalIcon className="size-3.5 shrink-0 opacity-50" />
              )}
              <span className="truncate">{row.label}</span>
              {row.count ? (
                <span className="text-muted-foreground ml-1 text-xs">{row.count}</span>
              ) : null}
              {row.badge ? (
                <Badge variant={row.badge.variant} size="xs" className="ml-auto">
                  {row.badge.label}
                </Badge>
              ) : null}
            </button>
            {row.action ? (
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground px-1 text-xs transition-colors"
              >
                {row.action}
              </button>
            ) : null}
          </div>
        )

        if (!row.children) {
          return <div key={row.label}>{inner}</div>
        }

        return (
          <Collapsible key={row.label} defaultOpen={row.open} className="group/node">
            <CollapsibleTrigger asChild>
              <div className="cursor-pointer">{inner}</div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <TreeRows rows={row.children} depth={depth + 1} />
            </CollapsibleContent>
          </Collapsible>
        )
      })}
    </div>
  )
}

function ScopePanel({
  scope,
  drafts,
  onAdd,
}: {
  scope: keyof typeof TREES
  drafts: Row[]
  onAdd: () => void
}) {
  const RootIcon = TREES[scope].rootIcon
  return (
    <Collapsible defaultOpen className="group/root w-full">
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="flex h-8 w-full items-center gap-2 rounded-md px-1 text-left text-sm font-semibold"
        >
          <ChevronRightIcon className="size-3.5 transition-transform group-data-[state=open]/root:rotate-90" />
          <RootIcon className="size-4" />
          {TREES[scope].root}
          <Badge variant="success-light" size="xs" className="ml-auto">
            Stable
          </Badge>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <TreeRows rows={TREES[scope].rows} depth={1} />
        {drafts.length > 0 ? (
          <div className="border-border ml-3 border-l pl-2">
            {drafts.map((draft) => (
              <div
                key={draft.label}
                className="text-muted-foreground flex h-8 items-center gap-2 px-1.5 text-sm"
              >
                <GripVerticalIcon className="size-3.5 opacity-50" />
                {draft.label}
                <span className="ml-auto text-xs">{draft.count}</span>
              </div>
            ))}
          </div>
        ) : null}
        <button
          type="button"
          onClick={onAdd}
          className="text-muted-foreground hover:text-foreground mt-1 flex h-8 items-center gap-2 rounded-md px-1.5 text-sm transition-colors"
        >
          <PlusIcon className="size-3.5" />
          Add scope
        </button>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default function AppShell27Block() {
  const searchRef = useRef<HTMLInputElement>(null)
  const [rail, setRail] = useState(false)
  const [query, setQuery] = useState("")
  const [tab, setTab] = useState("security")
  const [drafts, setDrafts] = useState<Record<string, Row[]>>({
    security: [],
    assets: [],
    events: [],
  })

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "f" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  function addDraft(scope: string) {
    setDrafts((current) => ({
      ...current,
      [scope]: [
        ...current[scope],
        { label: `Draft ${current[scope].length + 1}`, count: "1", action: "Add" },
      ],
    }))
  }

  return (
    <div className="bg-background flex min-h-svh">
      <aside
        className={cn(
          "bg-sidebar flex shrink-0 flex-col border-r transition-[width] duration-200",
          rail ? "w-14" : "w-60",
        )}
      >
        <div className="flex h-13 items-center gap-2 px-3">
          <span className="bg-foreground text-background flex size-7 shrink-0 items-center justify-center rounded-md text-xs font-bold">
            U
          </span>
          {rail ? null : (
            <span className="truncate text-sm font-semibold tracking-wide">REUI</span>
          )}
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={rail ? "Expand sidebar" : "Collapse sidebar"}
            className="ml-auto"
            onClick={() => setRail((current) => !current)}
          >
            <PanelLeftIcon />
          </Button>
        </div>

        <div className={cn("px-3", rail && "px-2")}>
          {rail ? (
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Search routes"
              className="w-full"
              onClick={() => searchRef.current?.focus()}
            >
              <SearchIcon />
            </Button>
          ) : (
            <div className="border-input flex h-9 items-center gap-2 rounded-lg border px-2">
              <SearchIcon className="text-muted-foreground size-4 shrink-0" />
              <input
                ref={searchRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                aria-label="Search routes"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              />
              <Kbd>⌘F</Kbd>
            </div>
          )}
        </div>

        <nav className="flex-1 space-y-4 overflow-y-auto p-3">
          {NAV_GROUPS.map((group) => {
            const items = group.items.filter((item) =>
              item.label.toLowerCase().includes(query.trim().toLowerCase()),
            )
            if (items.length === 0) return null
            return (
              <div key={group.label}>
                {rail ? null : (
                  <p className="text-muted-foreground px-2 pb-1 text-xs font-medium">
                    {group.label}
                  </p>
                )}
                <div className="space-y-0.5">
                  {items.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      aria-label={item.label}
                      className={cn(
                        "text-muted-foreground hover:bg-muted/70 hover:text-foreground flex h-8 w-full items-center gap-2 rounded-md px-2 text-left text-sm transition-colors",
                        item.label === "Security Center" &&
                          "bg-muted text-foreground font-medium",
                      )}
                    >
                      <item.icon className="size-4 shrink-0" />
                      {rail ? null : <span className="truncate">{item.label}</span>}
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </nav>

        {rail ? null : (
          <div className="p-3">
            <div className="bg-card relative overflow-hidden rounded-xl border p-4 text-center">
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
                  Connect fleet tools, data and workflows here
                </p>
                <Button size="sm" className="mt-1 h-7">
                  Upgrade
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="border-t p-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Account menu"
                className="hover:bg-muted/70 flex w-full items-center gap-2 rounded-lg border p-2 text-left transition-colors"
              >
                <Avatar className="size-8 shrink-0">
                  <AvatarImage src={AVATAR} alt="Shadcn" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                {rail ? null : (
                  <>
                    <span className="flex min-w-0 flex-col">
                      <span className="truncate text-sm font-medium">Shadcn</span>
                      <span className="text-muted-foreground truncate text-xs">
                        Author of Shadcn/ui
                      </span>
                    </span>
                    <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-4 shrink-0" />
                  </>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="top" className="w-60">
              <div className="flex items-center gap-2 px-2 py-2">
                <Avatar className="size-8">
                  <AvatarImage src={AVATAR} alt="Shadcn" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">Shadcn</p>
                  <p className="text-muted-foreground truncate text-xs">m@example.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Sign-In Security</DropdownMenuItem>
              <DropdownMenuItem>On-Call Alerts</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Runbooks</DropdownMenuItem>
              <DropdownMenuItem>Help &amp; Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="flex items-center justify-between text-xs font-normal">
                Theme
                <span className="flex gap-1">
                  <SunIcon className="size-3.5" />
                  <MoonIcon className="size-3.5" />
                  <MonitorIcon className="size-3.5" />
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Sign Out
                <span className="text-muted-foreground ml-auto text-xs">⌘Q</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      <section className="bg-background flex w-60 shrink-0 flex-col border-r">
        <Tabs value={tab} onValueChange={setTab} className="flex min-h-0 flex-1 flex-col">
          <div className="p-3">
            <TabsList className="w-full">
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
          </div>

          <p className="text-muted-foreground px-3 text-xs font-medium">
            {SCOPE_TITLES[tab]}
          </p>

          <div className="flex-1 overflow-y-auto p-3">
            {(["security", "assets", "events"] as const).map((scope) => (
              <TabsContent key={scope} value={scope} className="mt-0">
                <ScopePanel
                  scope={scope}
                  drafts={drafts[scope]}
                  onAdd={() => addDraft(scope)}
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </section>

      <main className="min-w-0 flex-1 overflow-y-auto p-4">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="bg-card rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <div className="bg-muted size-7 rounded-md" />
                <div className="bg-muted h-2.5 w-24 rounded-full" />
                <div className="bg-muted ml-auto size-7 rounded-md" />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="bg-muted h-2.5 w-14 rounded-full" />
                <div className="bg-muted h-2.5 w-24 rounded-full" />
              </div>
              <div className="bg-muted/60 mt-3 flex items-center justify-between rounded-md p-2">
                <div className="flex -space-x-1.5">
                  {[0, 1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      className="border-muted-foreground/30 bg-card size-5 rounded-full border"
                    />
                  ))}
                </div>
                <div className="bg-muted h-2.5 w-24 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
