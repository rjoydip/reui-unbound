import { useMemo, useState } from "react"
import {
  BarChart3Icon,
  CheckIcon,
  ChevronsUpDownIcon,
  CircleHelpIcon,
  DatabaseIcon,
  FileTextIcon,
  HomeIcon,
  LayersIcon,
  Link2Icon,
  ListOrderedIcon,
  LogOutIcon,
  MonitorIcon,
  NetworkIcon,
  PinIcon,
  PlusIcon,
  SearchIcon,
  ServerIcon,
  SettingsIcon,
  Share2Icon,
  BookOpenIcon,
  TimerIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "cn"

type Page = { id: string; label: string; icon: LucideIcon; section: string }

const pages: Page[] = [
  { id: "home", label: "Home", icon: HomeIcon, section: "Workspace" },
  { id: "endpoints", label: "Endpoints", icon: NetworkIcon, section: "Observe" },
  { id: "hosts", label: "Hosts", icon: ServerIcon, section: "Observe" },
  { id: "topology", label: "Topology", icon: Share2Icon, section: "Observe" },
  { id: "traces", label: "Traces", icon: ListOrderedIcon, section: "Investigate" },
  { id: "logs", label: "Logs", icon: FileTextIcon, section: "Investigate" },
  { id: "sessions", label: "Sessions", icon: MonitorIcon, section: "Investigate" },
  { id: "queries", label: "Queries", icon: DatabaseIcon, section: "Investigate" },
  { id: "sources", label: "Sources", icon: LayersIcon, section: "Workspace" },
  { id: "settings", label: "Settings", icon: SettingsIcon, section: "Workspace" },
  { id: "checkout-latency", label: "Checkout Latency", icon: TimerIcon, section: "Pinned" },
  { id: "cache-hit-ratio", label: "Cache Hit Ratio", icon: DatabaseIcon, section: "Pinned" },
  { id: "queue-backlog", label: "Queue Backlog", icon: ListOrderedIcon, section: "Pinned" },
  { id: "billing-workers", label: "Billing Workers", icon: BarChart3Icon, section: "Pinned" },
]

const pageById = (id: string) => pages.find((page) => page.id === id) ?? pages[0]

const workspaces = [
  { id: "core", name: "Nimbus Core", meta: "Production · EU West", initials: "NC", tone: "bg-emerald-500" },
  { id: "edge", name: "Nimbus Edge", meta: "Staging · US East", initials: "NE", tone: "bg-blue-500" },
  { id: "labs", name: "Nimbus Labs", meta: "Sandbox · EU West", initials: "NL", tone: "bg-fuchsia-500" },
  { id: "data", name: "Nimbus Data", meta: "Analytics · EU Central", initials: "ND", tone: "bg-orange-500" },
]

const initialPins = ["checkout-latency", "cache-hit-ratio", "queue-backlog", "billing-workers"]

function PageMenuButton({
  page,
  active,
  onSelect,
}: {
  page: Page
  active: boolean
  onSelect: () => void
}) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton isActive={active} tooltip={page.label} onClick={onSelect}>
        <page.icon />
        <span>{page.label}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

function SkeletonCard({ tall = false }: { tall?: boolean }) {
  return (
    <div className={cn("bg-card rounded-xl border p-4", tall && "min-h-48")}>
      <Skeleton className="h-2.5 w-2/3" />
      <Skeleton className="mt-2 h-2.5 w-1/3" />
      <Skeleton className="mt-4 h-32 w-full rounded-lg" />
    </div>
  )
}

export default function AppShell36Block() {
  const [pageId, setPageId] = useState("home")
  const [workspaceId, setWorkspaceId] = useState("core")
  const [pins, setPins] = useState<string[]>(initialPins)
  const [query, setQuery] = useState("")

  const page = pageById(pageId)
  const workspace = workspaces.find((item) => item.id === workspaceId) ?? workspaces[0]
  const isPinned = pins.includes(pageId)
  const needle = query.trim().toLowerCase()

  const visible = useMemo(
    () => (label: string) => !needle || label.toLowerCase().includes(needle),
    [needle],
  )

  const observe = pages.filter((item) => item.section === "Observe")
  const investigate = pages.filter((item) => item.section === "Investigate")
  const pinnedPages = pins.map(pageById).filter((item) => visible(item.label))

  const togglePin = () => {
    setPins((current) =>
      current.includes(pageId)
        ? current.filter((id) => id !== pageId)
        : [...current, pageId],
    )
  }

  return (
    <SidebarProvider className="min-h-svh">
      <Sidebar>
        <SidebarHeader className="gap-2 p-3">
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton size="lg" className="border">
                    <Avatar className="size-8 rounded-md">
                      <AvatarFallback className={cn("rounded-md text-xs text-white", workspace.tone)}>
                        {workspace.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="flex min-w-0 flex-col text-left">
                      <span className="truncate text-sm font-semibold">{workspace.name}</span>
                      <span className="text-muted-foreground truncate text-xs">{workspace.meta}</span>
                    </span>
                    <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                  {workspaces.map((item) => (
                    <DropdownMenuItem key={item.id} onSelect={() => setWorkspaceId(item.id)}>
                      <span className={cn("flex size-6 items-center justify-center rounded text-[10px] font-bold text-white", item.tone)}>
                        {item.initials}
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="text-[13px] font-medium">{item.name}</span>
                        <span className="text-muted-foreground text-[11px]">{item.meta}</span>
                      </span>
                      {item.id === workspaceId ? <CheckIcon className="ml-auto" /> : null}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusIcon />
                    New Workspace
                    <span className="text-muted-foreground ml-auto text-[11px]">
                      Collaborate with others.
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="relative">
            <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Filter navigation"
              placeholder="Search"
              className="h-8 pr-12 pl-7 text-xs"
            />
            <Kbd className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-[10px]">⌘F</Kbd>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <PageMenuButton
                  page={pages[0]}
                  active={pageId === "home"}
                  onSelect={() => setPageId("home")}
                />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Observe</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {observe
                  .filter((item) => visible(item.label))
                  .map((item) => (
                    <PageMenuButton
                      key={item.id}
                      page={item}
                      active={pageId === item.id}
                      onSelect={() => setPageId(item.id)}
                    />
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Investigate</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <Collapsible defaultOpen className="group/explorer">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Explorer">
                        <WorkflowIcon />
                        <span>Explorer</span>
                        <ChevronsUpDownIcon className="ml-auto transition-transform group-data-[state=open]/explorer:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {investigate
                          .filter((item) => visible(item.label))
                          .map((item) => (
                            <SidebarMenuSubItem key={item.id}>
                              <SidebarMenuSubButton
                                isActive={pageId === item.id}
                                onClick={() => setPageId(item.id)}
                              >
                                <item.icon className="size-3.5" />
                                <span>{item.label}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <PageMenuButton
                  page={pageById("queries")}
                  active={pageId === "queries"}
                  onSelect={() => setPageId("queries")}
                />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center">
              Pinned
              <Badge size="sm" variant="secondary" className="ml-auto">
                {pins.length}
              </Badge>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {pinnedPages.length ? (
                  pinnedPages.map((item) => (
                    <PageMenuButton
                      key={item.id}
                      page={item}
                      active={pageId === item.id}
                      onSelect={() => setPageId(item.id)}
                    />
                  ))
                ) : (
                  <p className="text-muted-foreground px-2 py-2 text-xs">
                    {needle ? `No pins match “${query}”.` : "No pinned pages yet."}
                  </p>
                )}
                {isPinned ? (
                  <SidebarMenuItem>
                    <button
                      type="button"
                      onClick={togglePin}
                      className="text-muted-foreground hover:text-foreground flex w-full items-center gap-1.5 rounded-md px-2 py-1 text-[11px]"
                    >
                      <PinIcon className="size-3" />
                      Pinned {page.label} · Undo
                    </button>
                  </SidebarMenuItem>
                ) : null}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="gap-1">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Sources" onClick={() => setPageId("sources")}>
                <LayersIcon />
                <span>Sources</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings" onClick={() => setPageId("settings")}>
                <SettingsIcon />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton size="lg" className="border">
                    <Avatar className="size-8">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
                        alt="Shadcn"
                      />
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <span className="flex min-w-0 flex-col text-left">
                      <span className="truncate text-sm font-medium">Shadcn</span>
                      <span className="text-muted-foreground truncate text-xs">m@example.com</span>
                    </span>
                    <ChevronsUpDownIcon className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" side="top" className="w-56">
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Sign-In Security</DropdownMenuItem>
                  <DropdownMenuItem>Manage Accounts</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Shift Roster</DropdownMenuItem>
                  <DropdownMenuItem>Preferences</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <BookOpenIcon />
                    Runbooks
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CircleHelpIcon />
                    Help &amp; Support
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Theme</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOutIcon />
                    Sign Out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-muted-foreground font-normal">
                  {page.section}
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{page.label}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant={isPinned ? "secondary" : "outline"}
              size="sm"
              className="gap-1.5"
              onClick={togglePin}
            >
              <PinIcon />
              {isPinned ? "Pinned" : "Pin"}
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5">
              <Link2Icon />
              Copy Link
            </Button>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <div className="grid flex-1 gap-4 lg:grid-cols-2">
            <SkeletonCard tall />
            <SkeletonCard tall />
            <SkeletonCard tall />
            <SkeletonCard tall />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
