import { useEffect, useState } from "react"
import {
  BellIcon,
  BoxesIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleUserIcon,
  ClockIcon,
  CodeIcon,
  DatabaseIcon,
  FileTextIcon,
  GlobeIcon,
  GripVerticalIcon,
  HardDriveIcon,
  LayersIcon,
  ListChecksIcon,
  LockIcon,
  PlusIcon,
  SearchIcon,
  ServerIcon,
  SettingsIcon,
  ShieldCheckIcon,
  ShieldIcon,
  SparklesIcon,
  TrendingUpIcon,
  UsersIcon,
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
import { Spinner } from "@/components/ui/spinner"
import { cn } from "cn"

const AVATAR =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"

const SECTIONS = [
  { label: "Security", icon: ShieldIcon },
  { label: "Incidents", icon: BellIcon },
  { label: "Threats", icon: ShieldCheckIcon },
  { label: "Assets", icon: FileTextIcon },
  { label: "Reports", icon: FileTextIcon },
]

const WORKSPACES = ["All Workspaces", "Production", "Staging", "Corporate IT"]

type ScopeNode = {
  label: string
  icon: LucideIcon
  count?: string
  badge?: { label: string; variant: "success-light" | "destructive-light" | "warning-light" }
  action?: string
  active?: boolean
  open?: boolean
  children?: ScopeNode[]
}

const SCOPE_TREE: ScopeNode[] = [
  {
    label: "Endpoint Security",
    icon: ShieldCheckIcon,
    badge: { label: "Stable", variant: "success-light" },
    open: true,
    children: [
      { label: "Managed Devices", icon: HardDriveIcon, count: "248", action: "+" },
      {
        label: "Threat Detection",
        icon: TrendingUpIcon,
        count: "12",
        action: "Review",
        open: true,
        children: [
          { label: "Overview", icon: LayersIcon },
          { label: "Suspicious Activity", icon: SparklesIcon, active: true },
          { label: "Malware Events", icon: ShieldIcon },
          { label: "Network Anomalies", icon: TrendingUpIcon },
        ],
      },
      { label: "Vulnerabilities", icon: GripVerticalIcon, count: "37", badge: { label: "High", variant: "destructive-light" } },
      { label: "Security Policies", icon: GripVerticalIcon, count: "8", action: "+" },
      { label: "Quarantined", icon: GripVerticalIcon, count: "5" },
      {
        label: "Response Tasks",
        icon: GripVerticalIcon,
        count: "7",
        badge: { label: "Active", variant: "success-light" },
      },
    ],
  },
  { label: "Identity & Access", icon: LockIcon, action: "Add" },
  { label: "Application Security", icon: CodeIcon },
  { label: "Data Protection", icon: DatabaseIcon, action: "Review" },
]

const SCOPE_TABS = [BoxesIcon, ServerIcon, GlobeIcon, LayersIcon, ClockIcon]

function ScopeTree({ nodes, depth = 0 }: { nodes: ScopeNode[]; depth?: number }) {
  return (
    <div className={cn("space-y-0.5", depth > 0 && "border-border ml-3 border-l pl-2")}>
      {nodes.map((node) => {
        const row = (
          <div className="group/row flex items-center">
            <button
              type="button"
              className={cn(
                "text-muted-foreground hover:bg-muted/70 hover:text-foreground flex h-8 min-w-0 flex-1 items-center gap-2 rounded-md px-1.5 text-left text-sm transition-colors",
                node.active && "bg-muted text-foreground font-medium",
              )}
            >
              {node.children ? (
                <ChevronRightIcon className="size-3.5 shrink-0 transition-transform group-data-[state=open]/scope:rotate-90" />
              ) : null}
              <node.icon className="size-3.5 shrink-0" />
              <span className="truncate">{node.label}</span>
              {node.count ? (
                <span className="text-muted-foreground ml-1 text-xs">{node.count}</span>
              ) : null}
              {node.badge ? (
                <Badge variant={node.badge.variant} size="xs" className="ml-auto">
                  {node.badge.label}
                </Badge>
              ) : null}
            </button>
            {node.action ? (
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground px-1.5 text-xs transition-colors"
              >
                {node.action}
              </button>
            ) : null}
          </div>
        )

        if (!node.children) {
          return <div key={node.label}>{row}</div>
        }

        return (
          <Collapsible
            key={node.label}
            defaultOpen={node.open}
            className="group/scope"
          >
            <CollapsibleTrigger asChild>
              <div className="cursor-pointer">{row}</div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ScopeTree nodes={node.children} depth={depth + 1} />
            </CollapsibleContent>
          </Collapsible>
        )
      })}
    </div>
  )
}

function ScopeCard() {
  return (
    <div className="bg-card rounded-xl border p-4">
      <div className="flex items-center gap-2">
        <div className="bg-muted size-8 rounded-md" />
        <div className="bg-muted h-2.5 w-24 rounded-full" />
        <div className="bg-muted ml-auto size-7 rounded-md" />
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="bg-muted h-2.5 w-14 rounded-full" />
        <div className="bg-muted h-2.5 w-24 rounded-full" />
      </div>
      <div className="bg-muted/60 mt-3 flex items-center justify-between rounded-md p-2">
        <div className="flex -space-x-1.5">
          {[0, 1, 2, 3].map((index) => (
            <span key={index} className="border-muted-foreground/30 bg-card size-5 rounded-full border" />
          ))}
        </div>
        <div className="bg-muted h-2.5 w-24 rounded-full" />
      </div>
    </div>
  )
}

export default function AppShellSecurityScopeConsoleBlock() {
  const [section, setSection] = useState("Security")
  const [workspace, setWorkspace] = useState(WORKSPACES[0])
  const [scopeTabs, setScopeTabs] = useState(SCOPE_TABS)
  const [activeScope, setActiveScope] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [scanning, setScanning] = useState(false)

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

  function runScan() {
    setScanning(true)
    window.setTimeout(() => setScanning(false), 1400)
  }

  const results = ["Suspicious Activity", "Managed Devices", "Vulnerabilities", "Data Protection"].filter(
    (item) => item.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <div className="bg-muted/30 p-2">
      <div className="bg-background flex min-h-[calc(100svh-1rem)] flex-col overflow-hidden rounded-2xl border">
        <header className="flex h-13 shrink-0 items-center gap-2 border-b px-3">
          <span className="bg-muted flex size-7 items-center justify-center rounded-md text-xs font-semibold">
            U
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 px-2 font-medium">
                {workspace}
                <ChevronDownIcon className="text-muted-foreground size-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {WORKSPACES.map((entry) => (
                <DropdownMenuItem key={entry} onClick={() => setWorkspace(entry)}>
                  {entry}
                  {workspace === entry ? <span className="ml-auto text-xs">✓</span> : null}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <nav className="mx-auto hidden items-center gap-1 md:flex">
            {SECTIONS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setSection(item.label)}
                className={cn(
                  "text-muted-foreground hover:text-foreground flex h-8 items-center gap-2 rounded-md px-2.5 text-sm transition-colors",
                  section === item.label &&
                    "bg-background text-foreground border font-medium shadow-xs",
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Search scopes"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Console settings">
                  <SettingsIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuLabel>Response</DropdownMenuLabel>
                <DropdownMenuItem>
                  Auto-Quarantine Malware
                  <span className="ml-auto text-xs">✓</span>
                </DropdownMenuItem>
                <DropdownMenuItem>Daily Alert Digest</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UsersIcon />
                  Manage Analysts
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Notifications">
                  <BellIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-0">
                <div className="flex items-center justify-between border-b px-3 py-2">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    Notifications
                    <Badge variant="invert" size="sm" radius="full">
                      5
                    </Badge>
                  </p>
                  <span className="text-muted-foreground text-xs">✓</span>
                </div>
                <div className="divide-y">
                  <div className="flex gap-2 p-3">
                    <Avatar className="size-6">
                      <AvatarFallback className="text-xs">@M</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 text-sm">
                      <p className="font-medium">@mira mentioned you in INC-4471</p>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        “Is the WS-2210 host cleared to rejoin the domain?”
                      </p>
                      <p className="text-muted-foreground mt-1 text-xs">2m ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2 p-3">
                    <span className="mt-0.5 size-3 shrink-0 rounded-full border-2 border-amber-500" />
                    <div className="min-w-0 text-sm">
                      <p className="font-medium">Policy Change Approval</p>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Blocking outbound SMB needs signoff before it reaches production.
                      </p>
                      <div className="mt-2 flex gap-2">
                        <Button size="sm" className="h-7">
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="h-7">
                          Review
                        </Button>
                      </div>
                      <div className="text-muted-foreground mt-1.5 flex items-center gap-2 text-xs">
                        8m ago
                        <Badge variant="warning-light" size="xs">
                          High
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 p-3">
                    <Avatar className="size-6">
                      <AvatarFallback className="text-xs">@L</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 text-sm">
                      <p className="font-medium">@leo shared</p>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Forensic timeline for the quarantined workstation
                      </p>
                      <div className="mt-1.5 flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs">
                        <FileTextIcon className="size-3" />
                        inc-4471-forensics.pdf (2 MB)
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="hover:bg-muted w-full border-t py-2 text-sm font-medium transition-colors"
                >
                  View All Notifications
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
            <Avatar className="size-7">
              <AvatarImage src={AVATAR} alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" className="ml-1 gap-1.5" onClick={runScan}>
              {scanning ? <Spinner className="size-3.5" /> : <ListChecksIcon className="size-3.5" />}
              Run Scan
            </Button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          <aside className="bg-card flex w-[300px] shrink-0 flex-col border-r">
            <div className="flex items-center gap-2 border-b p-3">
              <div className="bg-muted flex flex-1 items-center gap-0.5 rounded-lg p-1">
                {scopeTabs.map((Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Scope ${index + 1}`}
                    onClick={() => setActiveScope(index)}
                    className={cn(
                      "flex size-7 flex-1 items-center justify-center rounded-md transition-colors [&_svg]:size-3.5",
                      index === activeScope
                        ? "bg-background text-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Icon />
                  </button>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon-sm"
                aria-label="Add scope"
                disabled={scopeTabs.length >= 7}
                onClick={() => setScopeTabs((current) => [...current, LockIcon])}
              >
                <PlusIcon />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-3">
              <p className="text-muted-foreground px-1 pb-2 text-xs font-medium">
                {activeScope === 0 ? "Security Scope" : `Scope ${activeScope + 1}`}
              </p>
              <ScopeTree nodes={SCOPE_TREE} />
            </div>

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
                <ChevronDownIcon className="text-muted-foreground ml-auto size-4 shrink-0" />
              </button>
            </div>
          </aside>

          <main className="min-w-0 flex-1 overflow-y-auto p-4">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <ScopeCard key={index} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-lg">
          <DialogHeader className="sr-only">
            <DialogTitle>Search scopes</DialogTitle>
            <DialogDescription>Jump to a scope or item.</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 px-3">
            <SearchIcon className="text-muted-foreground size-4" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search scopes and items"
              className="h-12 w-full bg-transparent text-sm outline-none"
            />
          </div>
          {query ? (
            <div className="border-t p-2">
              {results.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors"
                >
                  <CircleUserIcon className="text-muted-foreground size-4" />
                  {item}
                </button>
              ))}
              {results.length === 0 ? (
                <p className="text-muted-foreground px-2 py-6 text-center text-sm">
                  No scopes match “{query}”
                </p>
              ) : null}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}
