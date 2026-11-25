import { useState } from "react"
import {
  BarChart3Icon,
  BellIcon,
  BookOpenIcon,
  ChartPieIcon,
  CheckIcon,
  ChevronRightIcon,
  CircleAlertIcon,
  CreditCardIcon,
  DownloadIcon,
  GlobeIcon,
  HouseIcon,
  LayoutGridIcon,
  MessageSquareIcon,
  MonitorIcon,
  MoonIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  SunIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
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
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { cn } from "cn"

const projects = [
  { name: "Billing Portal", percent: 72, color: "#3b82f6" },
  { name: "Audience Sync", percent: 88, color: "#10b981" },
  { name: "Report Builder", percent: 45, color: "#8b5cf6" },
  { name: "Network Map", percent: 30, color: "#f97316" },
  { name: "Access Review", percent: 62, color: "#f43f5e" },
]

const apps = [
  { name: "Analytics", description: "Traffic and funnels", icon: BarChart3Icon },
  { name: "Billing", description: "Invoices and plans", icon: CreditCardIcon },
  { name: "Customers", description: "Accounts and contacts", icon: UsersIcon },
  { name: "Reports", description: "Saved dashboards", icon: ChartPieIcon },
  { name: "Integrations", description: "Connected apps", icon: GlobeIcon },
  { name: "Settings", description: "Workspace config", icon: SettingsIcon },
]

function ProgressRing({ percent, color }: { percent: number; color: string }) {
  const radius = 6
  const circumference = 2 * Math.PI * radius
  return (
    <svg viewBox="0 0 16 16" className="size-4 -rotate-90" aria-hidden="true">
      <circle cx="8" cy="8" r={radius} fill="none" strokeWidth="2" className="stroke-muted" />
      <circle
        cx="8"
        cy="8"
        r={radius}
        fill="none"
        strokeWidth="2"
        stroke={color}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - (percent / 100) * circumference}
      />
    </svg>
  )
}

function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Notifications" className="relative">
          <BellIcon />
          <span className="bg-destructive absolute top-1 right-1 size-1.5 rounded-full" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="flex items-center gap-2 border-b px-3 py-2.5">
          <span className="text-sm font-semibold">Notifications</span>
          <Badge size="sm" variant="secondary">3</Badge>
          <Button variant="ghost" size="icon-xs" aria-label="Mark all as read" className="ml-auto">
            <CheckIcon />
          </Button>
        </div>
        <div className="max-h-80 overflow-y-auto">
          <div className="flex items-start gap-2.5 border-b p-3">
            <Avatar className="size-7">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" alt="" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="min-w-0 text-sm">
              <p><span className="font-medium">@sarah_smith</span> mentioned you in <span className="font-medium">#PR-1024</span></p>
              <p className="text-muted-foreground text-xs">"Can you review the changes?"</p>
              <p className="text-muted-foreground mt-1 text-xs">2m ago</p>
            </div>
          </div>
          <div className="border-b p-3">
            <div className="flex items-start gap-2.5">
              <CircleAlertIcon className="text-warning mt-0.5 size-4" />
              <div className="min-w-0">
                <p className="text-sm font-medium">Pending approval</p>
                <p className="text-muted-foreground mt-0.5 text-xs">Design System v2.0 release requires your approval.</p>
                <div className="mt-2 flex items-center gap-2">
                  <Button size="xs">Approve</Button>
                  <Button size="xs" variant="outline">Review</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3">
            <UserPlusIcon className="text-muted-foreground mt-0.5 size-4" />
            <div className="min-w-0">
              <p className="text-sm font-medium">Invitation to Northwind</p>
              <p className="text-muted-foreground text-xs">You were invited to join the workspace.</p>
              <div className="mt-2 flex items-center gap-2">
                <Button size="xs">Accept</Button>
                <Button size="xs" variant="outline">Decline</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t p-1.5">
          <Button variant="ghost" size="sm" className="w-full">View all notifications</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function AppsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Open apps">
          <LayoutGridIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold">Apps</span>
          <Badge size="sm" variant="secondary">6</Badge>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {apps.map((app) => (
            <button key={app.name} type="button" className="hover:bg-muted flex flex-col items-center gap-1.5 rounded-lg p-2.5 text-center">
              <span className="bg-muted flex size-9 items-center justify-center rounded-lg">
                <app.icon className="size-4" />
              </span>
              <span className="text-xs font-medium">{app.name}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function AppShellAppsGridHeaderBlock() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [audienceOpen, setAudienceOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(true)
  const [projectsOpen, setProjectsOpen] = useState(true)
  const [theme, setTheme] = useState("light")

  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <Sidebar>
        <SidebarHeader className="p-3">
          <div className="flex items-center gap-2">
            <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg text-sm font-bold">U</span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold">ReUI</span>
              <span className="text-muted-foreground block truncate text-xs">Pro plan</span>
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive><HouseIcon /><span>Overview</span></SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton><BarChart3Icon /><span>Analytics</span><Badge size="sm" className="ml-auto">Soon</Badge></SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <Collapsible open={audienceOpen} onOpenChange={setAudienceOpen}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton><UsersIcon /><span>Audience</span><ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" /></SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="border-border ml-4 flex flex-col border-l pl-2">
                        {["People", "Segments", "Companies"].map((item) => (
                          <button key={item} type="button" className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-2 py-1.5 text-left text-sm">{item}</button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <Collapsible open={accountOpen} onOpenChange={setAccountOpen}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton><SettingsIcon /><span>Account</span><ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" /></SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="border-border ml-4 flex flex-col border-l pl-2">
                        {["Profile", "Billing", "Security", "Members"].map((item) => (
                          <button
                            key={item}
                            type="button"
                            className={cn("hover:bg-muted rounded-md px-2 py-1.5 text-left text-sm", item === "Billing" ? "bg-muted font-medium" : "text-muted-foreground hover:text-foreground")}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <SidebarMenuItem>
                  <SidebarMenuButton><GlobeIcon /><span>Network</span><ChevronRightIcon className="ml-auto" /></SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <Collapsible open={projectsOpen} onOpenChange={setProjectsOpen}>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex w-full items-center">
                  Active Projects
                  <ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton>
                          <ProgressRing percent={project.percent} color={project.color} />
                          <span className="truncate">{project.name}</span>
                        </SidebarMenuButton>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <SidebarMenuAction showOnHover aria-label={`Actions for ${project.name}`}>
                              <MoreHorizontalIcon />
                            </SidebarMenuAction>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" side="right">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Open Project</DropdownMenuItem>
                            <DropdownMenuItem>Assign Owner</DropdownMenuItem>
                            <DropdownMenuItem>Set Milestone</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">Archive</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="gap-0.5 p-2">
          <SidebarMenu>
            {[{ label: "Settings", icon: SettingsIcon }, { label: "Invite Team", icon: UserPlusIcon }, { label: "Documentation", icon: BookOpenIcon }].map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton><item.icon /><span>{item.label}</span></SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-w-0">
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><span className="text-muted-foreground text-sm">Dashboards</span></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-sm">Overview</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center gap-1">
            <Button variant="ghost" size="icon-sm" aria-label="Search" onClick={() => setSearchOpen(true)}><SearchIcon /></Button>
            <NotificationsPopover />
            <AppsPopover />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button type="button" aria-label="Open user menu" className="ml-1 rounded-full">
                  <Avatar className="size-7">
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" alt="Nick Bold" />
                    <AvatarFallback>NB</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <span className="block text-sm">Nick Bold</span>
                  <span className="text-muted-foreground block text-xs font-normal">nick@reui.io</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                {[{ id: "light", label: "Light", icon: SunIcon }, { id: "dark", label: "Dark", icon: MoonIcon }, { id: "system", label: "System", icon: MonitorIcon }].map((option) => (
                  <DropdownMenuItem key={option.id} onClick={() => setTheme(option.id)}>
                    <option.icon />
                    {option.label}
                    {theme === option.id && <CheckIcon className="ml-auto" />}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="flex items-start gap-3 px-6 py-5">
            <div>
              <h1 className="text-xl font-semibold">Overview</h1>
              <p className="text-muted-foreground text-sm">Your workspace at a glance.</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <Button variant="outline" size="sm"><DownloadIcon /> Export</Button>
              <Button size="sm"><PlusIcon /> New Report</Button>
            </div>
          </div>
          <div className="grid gap-4 px-6 md:grid-cols-3">
            {[1, 2, 3].map((card) => <div key={card} className="bg-muted/20 h-52 rounded-xl border border-dashed" />)}
          </div>
          <div className="bg-muted/20 mx-6 mt-4 min-h-[380px] rounded-xl border border-dashed" />
        </div>

        <footer className="flex shrink-0 items-center gap-2 border-t px-6 py-3 text-xs">
          <span className="text-muted-foreground">2026 © <span className="text-foreground font-medium">ReUI</span></span>
          <div className="text-muted-foreground ml-auto flex items-center gap-4">
            {["Docs", "Changelog", "Support", "Privacy", "Status"].map((link) => (
              <button key={link} type="button" className="hover:text-foreground">{link}</button>
            ))}
          </div>
        </footer>
      </SidebarInset>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="top-24 translate-y-0 gap-3 sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
            <DialogDescription>Jump to a page or project.</DialogDescription>
          </DialogHeader>
          <div className="relative">
            <SearchIcon className="text-muted-foreground absolute top-2.5 left-2.5 size-4" />
            <input autoFocus placeholder="Search pages, projects and people..." className="border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-3 pl-9 text-sm outline-none focus-visible:ring-2" />
          </div>
          <div className="flex flex-col gap-1">
            {["Overview", "Billing Portal", "Audience Sync", "Report Builder"].map((item) => (
              <button key={item} type="button" onClick={() => setSearchOpen(false)} className="hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm">
                <MessageSquareIcon className="text-muted-foreground size-3.5" />
                {item}
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  )
}

export default AppShellAppsGridHeaderBlock
