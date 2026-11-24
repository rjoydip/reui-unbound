import { useState } from "react"
import {
  ActivityIcon,
  BellIcon,
  BellRingIcon,
  BookOpenIcon,
  BotIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  FileTextIcon,
  GlobeIcon,
  GraduationCapIcon,
  InboxIcon,
  LayoutGridIcon,
  MapIcon,
  MapPinIcon,
  MonitorIcon,
  PlusIcon,
  RocketIcon,
  ScanLineIcon,
  SearchIcon,
  ShieldCheckIcon,
  StarIcon,
  TrendingUpIcon,
  TriangleAlertIcon,
  UsersRoundIcon,
  WalletIcon,
  WebhookIcon,
  WrenchIcon,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
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
import { Input } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

type StatusVariant =
  | "success-light"
  | "warning-light"
  | "info-light"
  | "primary-light"
  | "secondary"

type ScopeNode = {
  label: string
  icon?: LucideIcon
  count?: number
  status?: { label: string; variant: StatusVariant; dot?: boolean }
  action?: string
  open?: boolean
  children?: ScopeNode[]
}

type Tile = { label: string; icon: LucideIcon }

type Workspace = {
  tiles: Tile[]
  treeLabel: string
  tree: ScopeNode[]
  landing: string
}

const fleetTiles: Tile[] = [
  { label: "Overview", icon: LayoutGridIcon },
  { label: "Live Map", icon: MapIcon },
  { label: "Robots", icon: BotIcon },
  { label: "Zones", icon: MapPinIcon },
  { label: "Clusters", icon: LayoutGridIcon },
  { label: "Regions", icon: GlobeIcon },
  { label: "Data Sync", icon: ScanLineIcon },
  { label: "Endpoints", icon: MonitorIcon },
]

const teamTiles: Tile[] = [
  { label: "Roster", icon: UsersRoundIcon },
  { label: "Shifts", icon: CalendarDaysIcon },
  { label: "Skills", icon: GraduationCapIcon },
  { label: "Training", icon: BookOpenIcon },
  { label: "Requests", icon: InboxIcon },
  { label: "On Call", icon: BellRingIcon },
  { label: "Payroll", icon: WalletIcon },
  { label: "Reviews", icon: StarIcon },
]

const eventTiles: Tile[] = [
  { label: "Timeline", icon: ActivityIcon },
  { label: "Incidents", icon: TriangleAlertIcon },
  { label: "Alerts", icon: BellIcon },
  { label: "Deploys", icon: RocketIcon },
  { label: "Windows", icon: CalendarDaysIcon },
  { label: "Reports", icon: FileTextIcon },
  { label: "Trends", icon: TrendingUpIcon },
  { label: "Webhooks", icon: WebhookIcon },
]

const active = (label: string) => ({ label, variant: "primary-light" as const, dot: true })
const stable = (label: string) => ({ label, variant: "success-light" as const, dot: true })

const workspaces: Record<"fleet" | "team" | "events", Workspace> = {
  fleet: {
    tiles: fleetTiles,
    treeLabel: "Robot Network",
    landing: "Scheduled",
    tree: [
      {
        label: "Service Pools",
        icon: BotIcon,
        open: true,
        status: stable("Stable"),
        children: [
          { label: "Delivery", count: 42, action: "Add" },
          {
            label: "Inspection",
            count: 18,
            open: true,
            status: { label: "Review", variant: "secondary" },
            children: [
              { label: "Overview" },
              { label: "Scheduled" },
              { label: "Findings" },
              { label: "Completed" },
            ],
          },
          {
            label: "Maintenance",
            count: 11,
            status: { label: "2 offline", variant: "warning-light" },
          },
          { label: "Transfer", count: 27 },
          { label: "Patrol", count: 16, status: stable("Live") },
          { label: "Standby", count: 37, status: active("All Ready") },
        ],
      },
      { label: "Stations & Hubs", icon: MapPinIcon, action: "Add" },
      { label: "Dispatch Queues", icon: WrenchIcon },
    ],
  },
  team: {
    tiles: teamTiles,
    treeLabel: "Crew Directory",
    landing: "Operators",
    tree: [
      {
        label: "Dispatch Crew",
        icon: UsersRoundIcon,
        open: true,
        status: stable("Staffed"),
        children: [
          { label: "Night Shift", count: 12, action: "Add" },
          {
            label: "Day Shift",
            count: 18,
            open: true,
            status: { label: "Review", variant: "secondary" },
            children: [
              { label: "Leads" },
              { label: "Operators" },
              { label: "Trainees" },
            ],
          },
          {
            label: "Relief Crew",
            count: 7,
            status: { label: "3 away", variant: "warning-light" },
          },
          { label: "Field Techs", count: 21, status: stable("Live") },
        ],
      },
      { label: "Access Groups", icon: ShieldCheckIcon, action: "Manage" },
      { label: "Certifications", icon: BookOpenIcon },
      { label: "Time Off", icon: CalendarDaysIcon, action: "Add" },
    ],
  },
  events: {
    tiles: eventTiles,
    treeLabel: "Event Streams",
    landing: "Acknowledged",
    tree: [
      {
        label: "Live Feed",
        icon: ActivityIcon,
        open: true,
        status: active("Streaming"),
        children: [
          { label: "Open Incidents", count: 9, action: "Add" },
          {
            label: "Escalations",
            count: 4,
            open: true,
            status: { label: "Review", variant: "secondary" },
            children: [
              { label: "Paged" },
              { label: "Acknowledged" },
              { label: "Handed Off" },
            ],
          },
          {
            label: "Sensor Faults",
            count: 15,
            status: { label: "5 open", variant: "warning-light" },
          },
          {
            label: "Resolved",
            count: 36,
            status: { label: "Today", variant: "info-light" },
          },
        ],
      },
      { label: "Maintenance Windows", icon: CalendarDaysIcon, action: "Add" },
      { label: "Retention Rules", icon: FileTextIcon, action: "Manage" },
    ],
  },
}

function ScopeList({
  items,
  selected,
  onSelect,
  nested = false,
}: {
  items: ScopeNode[]
  selected: string
  onSelect: (label: string) => void
  nested?: boolean
}) {
  return (
    <ul className={cn("space-y-0.5", nested && "border-border ml-3 border-l pl-1.5")}>
      {items.map((node) => {
        const Icon = node.icon
        const hasChildren = Boolean(node.children?.length)
        const row = (
          <>
            {hasChildren ? (
              <ChevronRightIcon className="size-3.5 shrink-0 transition-transform group-data-[state=open]/node:rotate-90" />
            ) : (
              <span className="size-3.5 shrink-0" />
            )}
            {Icon ? <Icon className="text-muted-foreground size-3.5 shrink-0" /> : null}
            <span className="truncate">{node.label}</span>
            {node.count !== undefined ? (
              <span className="text-muted-foreground text-xs tabular-nums">
                {node.count}
              </span>
            ) : null}
          </>
        )

        return (
          <li key={node.label}>
            <Collapsible defaultOpen={node.open} className="group/node">
              <div className="flex items-center gap-1">
                {hasChildren ? (
                  <CollapsibleTrigger asChild>
                    <button
                      type="button"
                      className="hover:bg-muted/60 flex min-w-0 flex-1 items-center gap-1.5 rounded-md px-1.5 py-1 text-left text-[13px] font-medium"
                    >
                      {row}
                    </button>
                  </CollapsibleTrigger>
                ) : (
                  <button
                    type="button"
                    onClick={() => onSelect(node.label)}
                    aria-current={selected === node.label ? "page" : undefined}
                    className={cn(
                      "hover:bg-muted/60 flex min-w-0 flex-1 items-center gap-1.5 rounded-md px-1.5 py-1 text-left text-[13px] transition-colors",
                      selected === node.label && "bg-muted font-medium",
                    )}
                  >
                    {row}
                  </button>
                )}
                {node.status ? (
                  <Badge
                    size="sm"
                    radius="full"
                    variant={node.status.variant}
                    className="shrink-0"
                  >
                    {node.status.dot ? (
                      <span className="bg-current size-1.5 rounded-full" />
                    ) : null}
                    {node.status.label}
                  </Badge>
                ) : node.action ? (
                  <button
                    type="button"
                    className="text-muted-foreground hover:text-foreground shrink-0 px-1 text-[11px] transition-colors"
                  >
                    {node.action}
                  </button>
                ) : null}
              </div>
              {hasChildren ? (
                <CollapsibleContent>
                  <ScopeList
                    items={node.children ?? []}
                    selected={selected}
                    onSelect={onSelect}
                    nested
                  />
                </CollapsibleContent>
              ) : null}
            </Collapsible>
          </li>
        )
      })}
    </ul>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-card rounded-xl border p-4">
      <div className="flex items-center gap-2">
        <Skeleton className="size-5 rounded-md" />
        <Skeleton className="h-2.5 w-2/5" />
        <Skeleton className="ml-auto size-5 rounded-md" />
      </div>
      <Skeleton className="mt-3 h-2.5 w-3/5" />
      <Skeleton className="mt-4 h-32 w-full rounded-lg" />
      <Skeleton className="mt-3 h-2.5 w-1/2" />
    </div>
  )
}

type TabId = keyof typeof workspaces

export default function AppShell29Block() {
  const [tab, setTab] = useState<TabId>("fleet")
  const [selected, setSelected] = useState(workspaces.fleet.landing)

  const changeTab = (value: string) => {
    const next = value as TabId
    setTab(next)
    setSelected(workspaces[next].landing)
  }

  return (
    <SidebarProvider className="min-h-svh">
      <Sidebar collapsible="offcanvas">
        <SidebarHeader className="gap-3 p-3">
          <div className="flex items-center gap-2">
            <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg text-sm font-bold">
              U
            </span>
            <span className="text-sm font-semibold tracking-[0.2em]">REUI</span>
            <SidebarTrigger className="ml-auto" aria-label="Toggle navigation rail" />
          </div>
        </SidebarHeader>

        <SidebarContent className="gap-0 px-1.5">
          <Tabs value={tab} onValueChange={changeTab} className="min-h-0 flex-1">
            <TabsList className="mx-1.5 grid h-8 w-[calc(100%-0.75rem)] grid-cols-3">
              <TabsTrigger value="fleet">Fleet</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
            {(["fleet", "team", "events"] as const).map((id) => (
              <TabsContent key={id} value={id} className="mt-3 min-h-0">
                <div className="grid grid-cols-3 gap-2 px-1.5">
                  {workspaces[id].tiles.map((tile) => {
                    const TileIcon = tile.icon
                    const isActive = tab === id && selected === tile.label
                    return (
                      <button
                        key={tile.label}
                        type="button"
                        onClick={() => setSelected(tile.label)}
                        className={cn(
                          "bg-background flex flex-col items-center justify-center gap-1.5 rounded-lg border px-1 py-2.5 text-[11px] font-medium transition-colors hover:bg-muted/60",
                          isActive && "bg-muted border-ring/40",
                        )}
                      >
                        <TileIcon className="size-4" />
                        <span className="w-full truncate text-center">{tile.label}</span>
                      </button>
                    )
                  })}
                  <button
                    type="button"
                    className="bg-background text-muted-foreground hover:bg-muted/60 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed px-1 py-2.5 transition-colors"
                    aria-label="Add section"
                  >
                    <PlusIcon className="size-4" />
                    <span className="text-[11px]">&nbsp;</span>
                  </button>
                </div>

                <div className="mt-5 px-3">
                  <p className="text-muted-foreground mb-2 text-xs font-medium">
                    {workspaces[id].treeLabel}
                  </p>
                  <ScopeList
                    items={workspaces[id].tree}
                    selected={selected}
                    onSelect={setSelected}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </SidebarContent>

        <SidebarFooter className="p-3 pt-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="hover:bg-muted/60 flex w-full items-center gap-2 rounded-lg border px-2 py-1.5 text-left transition-colors"
              >
                <Avatar className="size-7">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80" alt="Shadcn" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-medium">Shadcn</span>
                  <span className="text-muted-foreground truncate text-xs">
                    Author of Shadcn/ui
                  </span>
                </span>
                <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="top" className="w-60">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Workspace settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="relative">
            <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              aria-label="Search workspace"
              placeholder="Search"
              className="h-12 rounded-xl pr-16 pl-9"
            />
            <Kbd className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">⌘F</Kbd>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 9 }, (_, index) => (
              <SkeletonCard key={`tile-skeleton-${index}`} />
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
