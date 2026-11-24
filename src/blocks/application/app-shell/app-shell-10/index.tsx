import { useState } from "react"
import {
  BarChart3Icon, BellIcon, BookOpenIcon, CheckCheckIcon, ChevronRightIcon,
  CircleAlertIcon, EllipsisIcon, FileTextIcon, FolderIcon, MessageSquareIcon,
  PlayIcon, PlusIcon, SearchIcon, SettingsIcon, SparklesIcon, WrenchIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"

const agents = ["My Agents", "Templates", "Deployed"]
const tools = ["Integrations", "Custom Tools", "API Keys"]
const threads = ["All Threads", "Starred", "Archived"]
const knowledge = ["Documents", "Websites", "Snippets"]
const runs = ["Active", "Scheduled", "History"]
const projects = [
  { name: "Design System", percent: 72, color: "#3b82f6" },
  { name: "API Integration", percent: 45, color: "#8b5cf6" },
  { name: "Mobile App", percent: 88, color: "#10b981" },
  { name: "Analytics Dashboard", percent: 30, color: "#f97316" },
  { name: "Auth Module", percent: 62, color: "#f43f5e" },
]

function ProgressRing({ percent, color }: { percent: number; color: string }) {
  const radius = 6
  const circumference = 2 * Math.PI * radius
  return (
    <svg viewBox="0 0 16 16" className="size-4 -rotate-90" aria-hidden="true">
      <circle cx="8" cy="8" r={radius} fill="none" strokeWidth="2" className="stroke-muted" />
      <circle cx="8" cy="8" r={radius} fill="none" strokeWidth="2" stroke={color} strokeLinecap="round"
        strokeDasharray={circumference} strokeDashoffset={circumference - (percent / 100) * circumference} />
    </svg>
  )
}

function NotificationBell() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Open notifications" className="relative">
          <BellIcon /><span className="bg-destructive absolute top-1 right-1 size-1.5 rounded-full" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80 p-0">
        <div className="flex items-center gap-2 border-b px-3 py-2.5">
          <span className="text-sm font-semibold">Notifications</span>
          <Badge size="sm" variant="secondary">3</Badge>
          <Button variant="ghost" size="icon-xs" aria-label="Mark all as read" className="ml-auto"><CheckCheckIcon /></Button>
        </div>
        <div className="max-h-80 overflow-y-auto">
          <div className="flex gap-2.5 border-b p-3">
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
                <p className="text-muted-foreground mt-0.5 text-xs">Design System v2.0 release requires your approval before deployment.</p>
                <div className="mt-2 flex items-center gap-2"><Button size="xs">Approve</Button><Button size="xs" variant="outline">Review</Button></div>
                <div className="text-muted-foreground mt-2 flex items-center gap-2 text-xs"><span>5m ago</span><Badge size="sm" variant="warning-light">High</Badge></div>
              </div>
              <span className="bg-primary mt-1 size-1.5 shrink-0 rounded-full" />
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3">
            <Avatar className="size-7">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" alt="" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-sm font-medium">@maverick shared</p>
              <p className="text-muted-foreground text-xs">Project Timeline</p>
              <button type="button" className="bg-muted mt-2 flex items-center gap-1.5 rounded-md px-2 py-1 text-xs">
                <FileTextIcon className="size-3.5" />project-plan.pdf (2mb)
              </button>
            </div>
          </div>
        </div>
        <div className="border-t p-1.5"><Button variant="ghost" size="sm" className="w-full">View all notifications</Button></div>
      </PopoverContent>
    </Popover>
  )
}

export function AppShell10Block() {
  const [agentsOpen, setAgentsOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const [threadsOpen, setThreadsOpen] = useState(false)
  const [knowledgeOpen, setKnowledgeOpen] = useState(false)
  const [runsOpen, setRunsOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(true)
  const [autoRefresh, setAutoRefresh] = useState(true)

  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-1">
            <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg text-sm font-bold">U</span>
            <span className="truncate text-sm font-semibold group-data-[collapsible=icon]:hidden">ReUI</span>
            <div className="ml-auto group-data-[collapsible=icon]:hidden"><NotificationBell /></div>
          </div>
          <button type="button" className="border-input text-muted-foreground hover:bg-muted/40 flex h-8 w-full items-center gap-2 rounded-md border px-2.5 text-sm group-data-[collapsible=icon]:justify-center">
            <SearchIcon className="size-4" />
            <span className="group-data-[collapsible=icon]:hidden">Search...</span>
            <kbd className="bg-muted ml-auto rounded-sm px-1.5 py-0.5 text-[10px] group-data-[collapsible=icon]:hidden">/</kbd>
          </button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="New Chat" className="text-violet-600 dark:text-violet-400"><PlusIcon /><span>New Chat</span></SidebarMenuButton>
                </SidebarMenuItem>
                <Collapsible open={agentsOpen} onOpenChange={setAgentsOpen}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Agents">
                        <SparklesIcon /><span>Agents</span>
                        <ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {agents.map((item) => <SidebarMenuSubItem key={item}><SidebarMenuSubButton><span>{item}</span></SidebarMenuSubButton></SidebarMenuSubItem>)}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <Collapsible open={threadsOpen} onOpenChange={setThreadsOpen}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Threads">
                        <MessageSquareIcon /><span>Threads</span>
                        <ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {threads.map((item) => <SidebarMenuSubItem key={item}><SidebarMenuSubButton><span>{item}</span></SidebarMenuSubButton></SidebarMenuSubItem>)}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <Collapsible open={toolsOpen} onOpenChange={setToolsOpen}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Tools">
                        <WrenchIcon /><span>Tools</span>
                        <ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {tools.map((item) => <SidebarMenuSubItem key={item}><SidebarMenuSubButton><span>{item}</span></SidebarMenuSubButton></SidebarMenuSubItem>)}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <Collapsible open={knowledgeOpen} onOpenChange={setKnowledgeOpen}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Knowledge">
                        <BookOpenIcon /><span>Knowledge</span>
                        <ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {knowledge.map((item) => <SidebarMenuSubItem key={item}><SidebarMenuSubButton><span>{item}</span></SidebarMenuSubButton></SidebarMenuSubItem>)}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <Collapsible open={runsOpen} onOpenChange={setRunsOpen}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Runs">
                        <PlayIcon /><span>Runs</span>
                        <ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {runs.map((item) => <SidebarMenuSubItem key={item}><SidebarMenuSubButton><span>{item}</span></SidebarMenuSubButton></SidebarMenuSubItem>)}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Analytics"><BarChart3Icon /><span>Analytics</span></SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Settings"><SettingsIcon /><span>Settings</span></SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <Collapsible open={projectsOpen} onOpenChange={setProjectsOpen}>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex w-full items-center">
                  Active Projects<ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton tooltip={project.name}>
                          <ProgressRing percent={project.percent} color={project.color} />
                          <span className="truncate">{project.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="gap-2">
          <div className="bg-muted/40 rounded-lg border p-2.5 group-data-[collapsible=icon]:hidden">
            <p className="text-warning text-xs font-medium">Spending Limit</p>
            <p className="text-muted-foreground mt-1 text-xs">Consumption and balance will be reset at the end of the month</p>
            <div className="bg-muted mt-2 h-1.5 overflow-hidden rounded-full"><div className="bg-success h-full w-[82%] rounded-full" /></div>
            <div className="mt-1 flex justify-between text-xs"><span className="font-medium">82% Used</span><span className="text-muted-foreground">18% Free</span></div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton size="lg" className="border">
                <Avatar className="size-7">
                  <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" alt="" />
                  <AvatarFallback>NB</AvatarFallback>
                </Avatar>
                <span className="flex min-w-0 flex-col text-left">
                  <span className="truncate text-sm font-medium">Nick Bold</span>
                  <span className="text-muted-foreground flex items-center gap-1 truncate text-xs"><FolderIcon className="size-3" />Atlas</span>
                </span>
                <EllipsisIcon className="text-muted-foreground ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-w-0">
        <header className="flex h-12 shrink-0 items-center gap-2 px-4">
          <div className="flex min-w-0 items-center gap-1.5 text-sm">
            <span className="bg-violet-500 size-2 rounded-full" />
            <span className="font-medium">Atlas</span>
            <ChevronRightIcon className="text-muted-foreground size-3.5" />
            <Avatar className="size-5">
              <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" alt="" />
              <AvatarFallback>NB</AvatarFallback>
            </Avatar>
            <span className="font-medium">Nick Bold</span>
            <ChevronRightIcon className="text-muted-foreground size-3.5" />
            <span className="text-muted-foreground">Overview</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <Switch id="auto-refresh" checked={autoRefresh} onCheckedChange={setAutoRefresh} />
              <Label htmlFor="auto-refresh" className="text-sm">Auto Refresh</Label>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="More options"><EllipsisIcon /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Refresh</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm"><PlusIcon />New order</Button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((card) => <div key={card} className="bg-muted/30 h-40 rounded-xl border border-dashed" />)}
          </div>
          <div className="bg-muted/30 mt-4 min-h-[440px] rounded-xl border border-dashed" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppShell10Block
