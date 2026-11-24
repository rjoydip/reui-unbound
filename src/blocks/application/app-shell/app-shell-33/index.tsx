import { useState } from "react"
import {
  BotIcon,
  BoxesIcon,
  ChevronRightIcon,
  CircleHelpIcon,
  CircleIcon,
  ClipboardPlusIcon,
  GaugeIcon,
  HomeIcon,
  LayoutGridIcon,
  MapIcon,
  PlusIcon,
  PowerIcon,
  RadioIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SquareIcon,
  TrendingUpIcon,
  UsersIcon,
  WrenchIcon,
  XIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "cn"

const railItems: LucideIcon[] = [HomeIcon, MapIcon, BoxesIcon, UsersIcon, ShieldCheckIcon]

const viewTiles: { label: string; icon: LucideIcon }[] = [
  { label: "Overview", icon: LayoutGridIcon },
  { label: "Live", icon: RadioIcon },
  { label: "Runs", icon: ClipboardPlusIcon },
  { label: "Load", icon: BoxesIcon },
  { label: "Power", icon: PowerIcon },
  { label: "Service", icon: WrenchIcon },
  { label: "Issues", icon: CircleIcon },
  { label: "Trends", icon: TrendingUpIcon },
]

const pinnable: { label: string; icon: LucideIcon }[] = [
  { label: "Charging", icon: ZapIcon },
  { label: "Zones", icon: BoxesIcon },
  { label: "Dispatch", icon: BotIcon },
]

type Scope = {
  label: string
  count?: number
  status?: { label: string; tone: "success" | "danger" | "neutral" }
  action?: string
  open?: boolean
  icon?: LucideIcon
  children?: Scope[]
}

const scopes: Scope[] = [
  {
    label: "Fleet",
    icon: BotIcon,
    open: true,
    status: { label: "Stable", tone: "success" },
    children: [
      {
        label: "Robots",
        count: 248,
        open: true,
        action: "+",
        children: [{ label: "Online" }, { label: "Charging" }],
      },
      {
        label: "Depots",
        count: 12,
        open: true,
        action: "+",
        children: [
          { label: "Overview" },
          { label: "Suspicious Activity" },
          { label: "Incidents", action: "Review" },
          { label: "Anomalies" },
        ],
      },
      { label: "Risks", count: 37, status: { label: "High", tone: "danger" } },
      { label: "Policies", count: 8, action: "+" },
      { label: "Quarantined", count: 5 },
      { label: "Tasks", count: 7, status: { label: "Active", tone: "success" } },
    ],
  },
  { label: "Identity & Access", icon: ShieldCheckIcon, action: "+" },
  { label: "Application Security", icon: BoxesIcon },
]

const toneClass: Record<"success" | "danger" | "neutral", string> = {
  success: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
  danger: "border-red-500/25 bg-red-500/10 text-red-400",
  neutral: "border-zinc-500/25 bg-zinc-500/10 text-zinc-300",
}

function ScopeList({
  items,
  selected,
  onSelect,
  nested = false,
}: {
  items: Scope[]
  selected: string
  onSelect: (label: string) => void
  nested?: boolean
}) {
  return (
    <ul className={cn("space-y-0.5", nested && "border-zinc-700/70 ml-3 border-l pl-1.5")}>
      {items.map((node) => {
        const Icon = node.icon
        const hasChildren = Boolean(node.children?.length)
        const content = (
          <>
            {hasChildren ? (
              <ChevronRightIcon className="size-3.5 shrink-0 transition-transform group-data-[state=open]/node:rotate-90" />
            ) : (
              <SquareIcon className="size-3 shrink-0 opacity-50" />
            )}
            {Icon ? <Icon className="size-3.5 shrink-0" /> : null}
            <span className="truncate">{node.label}</span>
            {node.count !== undefined ? (
              <span className="text-xs text-zinc-400 tabular-nums">{node.count}</span>
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
                      className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md px-1.5 py-1 text-left text-[13px] font-medium text-zinc-100 hover:bg-white/5"
                    >
                      {content}
                    </button>
                  </CollapsibleTrigger>
                ) : (
                  <button
                    type="button"
                    onClick={() => onSelect(node.label)}
                    aria-current={selected === node.label ? "page" : undefined}
                    className={cn(
                      "flex min-w-0 flex-1 items-center gap-1.5 rounded-md px-1.5 py-1 text-left text-[13px] text-zinc-300 transition-colors hover:bg-white/5",
                      selected === node.label && "bg-zinc-800 font-medium text-white",
                    )}
                  >
                    {content}
                  </button>
                )}
                {node.status ? (
                  <span
                    className={cn(
                      "shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium",
                      toneClass[node.status.tone],
                    )}
                  >
                    {node.status.label}
                  </span>
                ) : node.action ? (
                  <button
                    type="button"
                    className="shrink-0 px-1 text-xs text-zinc-400 hover:text-white"
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

function ListSkeleton({ wide = false }: { wide?: boolean }) {
  return (
    <div className={cn("bg-card rounded-xl border p-4", wide && "min-h-40")}>
      <div className="flex items-center gap-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="ml-auto h-2.5 w-16" />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Skeleton className="h-2.5 w-32" />
        <Skeleton className="ml-auto h-2.5 w-12" />
        <Skeleton className="h-2.5 w-12" />
        <Skeleton className="h-2.5 w-12" />
      </div>
      <div className="mt-4 flex gap-3">
        <Skeleton className="h-24 w-1/3 rounded-lg" />
        <Skeleton className="h-24 flex-1 rounded-lg" />
      </div>
    </div>
  )
}

export default function AppShell33Block() {
  const [selected, setSelected] = useState("Suspicious Activity")
  const [activeTile, setActiveTile] = useState("Overview")
  const [pins, setPins] = useState<{ label: string; icon: LucideIcon }[]>([])
  const [filterOpen, setFilterOpen] = useState(false)
  const [query, setQuery] = useState("")

  const tiles = [...viewTiles, ...pins]
  const scopeMatches = query
    ? scopes.filter((node) => node.label.toLowerCase().includes(query.toLowerCase()))
    : scopes

  return (
    <div className="bg-background flex h-svh overflow-hidden">
      <aside className="flex w-14 shrink-0 flex-col items-center gap-1 border-r py-3">
        <span className="bg-foreground text-background mb-2 flex size-8 items-center justify-center rounded-lg text-sm font-bold">
          U
        </span>
        {railItems.map((Icon, index) => (
          <button
            key={index}
            type="button"
            aria-label={["Home", "Fleet map", "Inventory", "Operators", "Security"][index]}
            className={cn(
              "text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-lg transition-colors",
              index === 0 && "text-foreground",
            )}
          >
            <Icon className="size-4" />
          </button>
        ))}
        <div className="bg-border my-2 h-px w-6" />
        <button type="button" aria-label="Online operators" className="flex size-6 items-center justify-center text-emerald-500">
          <UsersIcon className="size-4" />
        </button>
        <button type="button" aria-label="Robot fleet" className="text-foreground flex size-6 items-center justify-center">
          <BotIcon className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Synced sources"
          className="bg-blue-500 my-1 flex size-5 items-center justify-center rounded text-[10px] font-bold text-white"
        >
          S
        </button>
        <button
          type="button"
          aria-label="Add"
          className="text-muted-foreground hover:bg-muted mt-2 flex size-8 items-center justify-center rounded-lg"
        >
          <PlusIcon className="size-4" />
        </button>
        <div className="mt-auto flex flex-col items-center gap-1">
          <button type="button" aria-label="Help" className="text-muted-foreground hover:bg-muted flex size-8 items-center justify-center rounded-lg">
            <CircleHelpIcon className="size-4" />
          </button>
          <button type="button" aria-label="Settings" className="text-muted-foreground hover:bg-muted flex size-8 items-center justify-center rounded-lg">
            <SettingsIcon className="size-4" />
          </button>
          <Avatar className="mt-1 size-7">
            <AvatarImage
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
              alt="Shadcn"
            />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
        </div>
      </aside>

      <aside className="m-2 flex w-[290px] shrink-0 flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-100">
        <div className="flex items-center gap-2 px-3 py-3">
          {filterOpen ? (
            <div className="bg-zinc-900 flex h-8 flex-1 items-center gap-2 rounded-md border border-zinc-700 px-2">
              <SearchIcon className="size-3.5 text-zinc-400" />
              <Input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Filter scopes"
                placeholder="Filter scopes"
                className="h-6 border-0 bg-transparent px-0 text-xs text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-0 dark:bg-transparent"
              />
              <button
                type="button"
                aria-label="Close filter"
                onClick={() => {
                  setFilterOpen(false)
                  setQuery("")
                }}
                className="text-zinc-400 hover:text-white"
              >
                <XIcon className="size-3.5" />
              </button>
            </div>
          ) : (
            <>
              <span className="text-sm font-semibold">Fleet Center</span>
              <button
                type="button"
                aria-label="Filter scopes"
                onClick={() => setFilterOpen(true)}
                className="ml-auto flex size-7 items-center justify-center rounded-md text-zinc-400 hover:bg-white/5 hover:text-white"
              >
                <SearchIcon className="size-4" />
              </button>
            </>
          )}
        </div>

        <div className="grid grid-cols-3 gap-1.5 px-2.5">
          {tiles.map((tile) => (
            <button
              key={tile.label}
              type="button"
              onClick={() => setActiveTile(tile.label)}
              className={cn(
                "flex h-16 flex-col items-center justify-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/60 text-[11px] text-zinc-300 transition-colors hover:bg-zinc-800",
                activeTile === tile.label && "bg-zinc-800 text-white ring-1 ring-white/20",
              )}
            >
              <tile.icon className="size-4" />
              {tile.label}
            </button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Pin a view"
                className="flex h-16 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
              >
                <PlusIcon className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="right">
              <DropdownMenuLabel>Pin View</DropdownMenuLabel>
              {pinnable
                .filter((item) => !pins.some((pin) => pin.label === item.label))
                .map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    onSelect={() =>
                      setPins((current) => [...current, { label: item.label, icon: item.icon }])
                    }
                  >
                    <item.icon />
                    {item.label}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mx-3 my-3 h-px bg-zinc-800" />
        <p className="px-4 pb-2 text-[11px] font-medium tracking-wide text-zinc-500 uppercase">
          Operational Scope
        </p>
        <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">
          {scopeMatches.length ? (
            <ScopeList items={scopeMatches} selected={selected} onSelect={setSelected} />
          ) : (
            <p className="px-3 py-4 text-xs text-zinc-500">No scopes match “{query}”.</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-1.5 border-t border-zinc-800 p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center justify-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1.5 text-xs text-zinc-200 hover:bg-zinc-800"
              >
                <ClipboardPlusIcon className="size-3.5" />
                Quick Add
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="top">
              <DropdownMenuItem>New Robot</DropdownMenuItem>
              <DropdownMenuItem>Add Depot</DropdownMenuItem>
              <DropdownMenuItem>New Policy</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center justify-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1.5 text-xs text-zinc-200 hover:bg-zinc-800"
              >
                <GaugeIcon className="size-3.5" />
                System
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="top">
              <DropdownMenuLabel>System</DropdownMenuLabel>
              <DropdownMenuItem>Audit Log</DropdownMenuItem>
              <DropdownMenuItem>Fleet Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Reboot Nodes</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      <main className="bg-muted/20 min-w-0 flex-1 overflow-y-auto p-3">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div key={index} className="bg-card rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <Skeleton className="size-7 rounded-lg" />
                <Skeleton className="h-2.5 w-1/3" />
                <Skeleton className="ml-auto size-6 rounded-md" />
              </div>
              <Skeleton className="mt-5 h-2.5 w-2/3" />
              <Skeleton className="mt-4 h-2 w-full" />
            </div>
          ))}
        </div>

        <div className="bg-card mt-3 flex items-center gap-2 rounded-xl border p-3">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="ml-auto h-7 w-24" />
          <Skeleton className="h-7 w-16" />
        </div>

        <div className="mt-3 space-y-3">
          <ListSkeleton wide />
          <ListSkeleton wide />
          <ListSkeleton />
        </div>
      </main>
    </div>
  )
}
