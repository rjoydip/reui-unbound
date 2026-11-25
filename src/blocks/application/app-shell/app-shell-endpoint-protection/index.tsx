import { useState } from "react"
import {
  ArrowUpIcon,
  BoxesIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleHelpIcon,
  FileTextIcon,
  LayoutGridIcon,
  MapIcon,
  PlusIcon,
  ScanLineIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  UsersIcon,
  WrenchIcon,
  XIcon,
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
  DialogFooter,
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

type RailItem = { label: string; icon: LucideIcon; active?: boolean }
const railItems: RailItem[] = [
  { label: "Overview", icon: LayoutGridIcon },
  { label: "Fleet map", icon: MapIcon },
  { label: "Assets", icon: BoxesIcon },
  { label: "Operators", icon: UsersIcon },
  { label: "Security", icon: ShieldCheckIcon, active: true },
  { label: "Reports", icon: FileTextIcon },
  { label: "Maintenance", icon: WrenchIcon },
  { label: "Automations", icon: ScanLineIcon },
]

type Scope = {
  label: string
  count?: number
  status?: { label: string; variant: "success-light" | "warning-light" | "destructive-light" | "secondary" | "primary-light" }
  action?: string
  open?: boolean
  icon?: LucideIcon
  children?: Scope[]
}

const scopes: Scope[] = [
  {
    label: "Endpoints",
    icon: ShieldCheckIcon,
    open: true,
    status: { label: "Stable", variant: "success-light" },
    children: [
      { label: "Devices", count: 248, action: "Add" },
      {
        label: "Threats",
        count: 12,
        open: true,
        status: { label: "Review", variant: "secondary" },
        children: [
          { label: "Overview" },
          { label: "Suspicious Activity" },
          { label: "Incidents" },
          { label: "Anomalies" },
        ],
      },
      { label: "Risks", count: 37, status: { label: "High", variant: "destructive-light" } },
      { label: "Policies", count: 8, action: "Add" },
      { label: "Quarantined", count: 5 },
      { label: "Tasks", count: 7, status: { label: "Active", variant: "success-light" } },
    ],
  },
  { label: "Identity & Access", icon: UsersIcon, action: "Add" },
  { label: "Application Security", icon: BoxesIcon },
  { label: "Data Protection", icon: FileTextIcon, action: "Review" },
]

const missionTypes = ["Patrol", "Check", "Alert", "Survey", "Status"]

const assistantAnswer = [
  "Start with Suspicious Activity. It holds the most of the 12 open threats, and two of them already feed an incident.",
  "1. Sort Suspicious Activity by severity and take the high ones first. A high alert on a server outranks anything on a laptop.",
  "2. Open the process tree. Anything that reached another device gets promoted to an incident before you dig further.",
  "3. Quarantine first and investigate after when a host is calling out. Isolation keeps the agent connected, so you lose no telemetry.",
  "Closing an alert without a verdict reopens it the next time the same file runs.",
]

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
    <ul className={cn("space-y-0.5", nested && "border-border ml-3 border-l pl-1.5")}>
      {items.map((node) => {
        const Icon = node.icon
        const hasChildren = Boolean(node.children?.length)
        const content = (
          <>
            {hasChildren ? (
              <ChevronRightIcon className="size-3.5 shrink-0 transition-transform group-data-[state=open]/node:rotate-90" />
            ) : (
              <span className="size-3.5 shrink-0" />
            )}
            {Icon ? <Icon className="size-3.5 shrink-0" /> : null}
            <span className="truncate">{node.label}</span>
            {node.count !== undefined ? (
              <span className="text-muted-foreground text-xs tabular-nums">{node.count}</span>
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
                      {content}
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
                    {content}
                  </button>
                )}
                {node.status ? (
                  <Badge size="sm" variant={node.status.variant} className="shrink-0">
                    {node.status.label}
                  </Badge>
                ) : node.action ? (
                  <button type="button" className="hover:text-foreground shrink-0 px-1 text-[11px]">
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
      <Skeleton className="mt-4 h-28 w-full rounded-lg" />
      <Skeleton className="mt-3 h-2.5 w-1/2" />
    </div>
  )
}

export default function AppShellEndpointProtectionBlock() {
  const [tab, setTab] = useState("security")
  const [selected, setSelected] = useState("Suspicious Activity")
  const [missionOpen, setMissionOpen] = useState(false)
  const [missionType, setMissionType] = useState("Patrol")
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [draft, setDraft] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const sendMessage = () => {
    const value = draft.trim()
    if (!value) return
    setMessages((current) => [...current, value])
    setDraft("")
  }

  return (
    <TooltipProvider>
      <div className="bg-background flex h-svh flex-col overflow-hidden">
        <header className="flex h-14 shrink-0 items-center gap-3 border-b px-3">
          <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg text-sm font-bold">
            U
          </span>
          <h1 className="text-sm font-semibold">Fleet Protection</h1>
          <span className="bg-border mx-1 hidden h-5 w-px sm:block" />
          <Badge variant="secondary" size="sm">248 Endpoints</Badge>
          <Badge variant="secondary" size="sm">12 Threats</Badge>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" className="gap-1.5" onClick={() => setMissionOpen(true)}>
              <MapIcon />
              New Mission
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="gap-1.5"
              onClick={() => setAssistantOpen((open) => !open)}
            >
              <SparklesIcon />
              Open Chat
            </Button>
            <Button variant="outline" size="icon-sm" aria-label="View settings">
              <SlidersHorizontalIcon />
            </Button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          <aside className="hidden w-14 shrink-0 flex-col items-center gap-1 border-r py-3 md:flex">
            {railItems.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    aria-label={item.label}
                    className={cn(
                      "text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-lg transition-colors",
                      item.active && "bg-muted text-foreground",
                    )}
                  >
                    <item.icon className="size-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </Tooltip>
            ))}
            <div className="mt-auto flex flex-col items-center gap-1">
              <button
                type="button"
                aria-label="Help"
                className="text-muted-foreground hover:bg-muted flex size-8 items-center justify-center rounded-lg"
              >
                <CircleHelpIcon className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Settings"
                className="text-muted-foreground hover:bg-muted flex size-8 items-center justify-center rounded-lg"
              >
                <SettingsIcon className="size-4" />
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button type="button" aria-label="Account menu" className="mt-1 rounded-full">
                    <Avatar className="size-7">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
                        alt="Shadcn"
                      />
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" side="right" className="w-52">
                  <DropdownMenuLabel>Shadcn</DropdownMenuLabel>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Preferences</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </aside>

          <aside className="hidden w-[300px] shrink-0 flex-col overflow-y-auto border-r p-3 lg:flex">
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="assets">Assets</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
            </Tabs>
            <p className="text-muted-foreground mt-4 mb-2 px-1.5 text-xs font-medium">
              Security Scope
            </p>
            <ScopeList items={scopes} selected={selected} onSelect={setSelected} />
          </aside>

          <main className="bg-muted/20 min-w-0 flex-1 overflow-y-auto p-4">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 9 }, (_, index) => (
                <SkeletonCard key={`endpoint-skeleton-${index}`} />
              ))}
            </div>
          </main>

          {assistantOpen ? (
            <aside className="bg-background flex w-80 shrink-0 flex-col border-l xl:w-96">
              <div className="flex h-12 items-center gap-2 border-b px-3">
                <SparklesIcon className="size-4" />
                <span className="text-sm font-semibold">AI Assistant</span>
                <div className="ml-auto flex items-center gap-0.5">
                  <Button variant="ghost" size="icon-sm" aria-label="New chat">
                    <PlusIcon />
                  </Button>
                  <Button variant="ghost" size="icon-sm" aria-label="Assistant options">
                    <SlidersHorizontalIcon />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Close assistant"
                    onClick={() => setAssistantOpen(false)}
                  >
                    <XIcon />
                  </Button>
                </div>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto p-3">
                <p className="text-muted-foreground text-center text-xs">Today</p>
                <div className="flex justify-end">
                  <p className="bg-foreground text-background max-w-[85%] rounded-2xl px-3 py-2 text-sm">
                    What should I tackle first today?
                  </p>
                </div>
                <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
                  <FileTextIcon className="size-3.5" />
                  Read 6 runbooks · Used 3
                </p>
                <div className="bg-muted/40 rounded-2xl border p-3 text-sm leading-relaxed">
                  {assistantAnswer.map((paragraph) => (
                    <p key={paragraph} className="mt-2 first:mt-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {messages.map((message) => (
                  <div key={message} className="flex justify-end">
                    <p className="bg-foreground text-background max-w-[85%] rounded-2xl px-3 py-2 text-sm">
                      {message}
                    </p>
                  </div>
                ))}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Button variant="ghost" size="icon-xs" aria-label="Helpful">
                    <ThumbsUpIcon />
                  </Button>
                  <Button variant="ghost" size="icon-xs" aria-label="Not helpful">
                    <ThumbsDownIcon />
                  </Button>
                </div>
                {["How do I quarantine a host?", "How do I clear a false positive?"].map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => setMessages((current) => [...current, prompt])}
                    className="text-muted-foreground hover:text-foreground flex w-full items-center gap-2 text-left text-xs"
                  >
                    <span aria-hidden="true">↳</span>
                    {prompt}
                  </button>
                ))}
              </div>

              <div className="border-t p-3">
                <Textarea
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  aria-label="Ask about the fleet"
                  placeholder="Ask about the fleet"
                  className="min-h-20 resize-none border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-[11px]">
                    {draft.length} / 1000
                  </span>
                  <Button
                    size="icon-sm"
                    className="rounded-full"
                    aria-label="Send message"
                    onClick={sendMessage}
                  >
                    <ArrowUpIcon />
                  </Button>
                </div>
              </div>
            </aside>
          ) : null}
        </div>

        <Dialog open={missionOpen} onOpenChange={setMissionOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>New Mission</DialogTitle>
              <DialogDescription>Plan and assign a fleet mission.</DialogDescription>
            </DialogHeader>

            <ToggleGroup
              type="single"
              value={missionType}
              onValueChange={(value) => value && setMissionType(value)}
              className="bg-muted w-full justify-start rounded-lg p-1"
            >
              {missionTypes.map((type) => (
                <ToggleGroupItem key={type} value={type} size="sm" className="flex-1">
                  {type}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            <div className="grid gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="mission-title">Title</Label>
                <Input
                  id="mission-title"
                  defaultValue="North perimeter night patrol"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="mission-notes">Notes</Label>
                <Textarea
                  id="mission-notes"
                  defaultValue="Sweep zones A to C, pause at the loading bay camera, then return to dock 2."
                  className="min-h-20"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Status", value: "Planned" },
                  { label: "Assignee", value: "Maya Stone" },
                  { label: "Due date", value: "Tomorrow" },
                  { label: "Priority", value: "Medium" },
                ].map((field) => (
                  <div key={field.label} className="grid gap-1.5">
                    <Label>{field.label}</Label>
                    <button
                      type="button"
                      className="border-input flex h-8 items-center gap-2 rounded-lg border px-2.5 text-left text-sm"
                    >
                      {field.value}
                      <ChevronDownIcon className="text-muted-foreground ml-auto size-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid gap-1.5">
                <Label>Labels</Label>
                <button
                  type="button"
                  className="border-input flex h-8 items-center gap-2 rounded-lg border px-2.5 text-left text-sm"
                >
                  <span className="bg-info size-2.5 rounded-full" />
                  <span className="bg-info size-2.5 rounded-full" />
                  <ChevronDownIcon className="text-muted-foreground ml-auto size-3.5" />
                </button>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setMissionOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setMissionOpen(false)}>
                <SearchIcon />
                Create {missionType}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  )
}
