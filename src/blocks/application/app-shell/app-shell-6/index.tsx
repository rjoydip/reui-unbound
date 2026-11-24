import { useState } from "react"
import {
  BarChart3Icon, BellIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon,
  CircleAlertIcon, CircleDotIcon, EllipsisIcon, FileTextIcon, FolderIcon, HouseIcon,
  LayoutDashboardIcon, ListTodoIcon, MoreHorizontalIcon, PanelRightIcon, PlusIcon,
  SearchIcon, ShareIcon, UsersIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuAction,
  SidebarMenuButton, SidebarMenuItem, SidebarProvider,
} from "@/components/ui/sidebar"
import { cn } from "cn"

const DEMO_MONTH = new Date(2026, 1, 1)
const DEMO_TODAY = new Date(2026, 1, 24)
const nav = [
  { label: "Dashboard", icon: LayoutDashboardIcon, active: true },
  { label: "Projects", icon: FolderIcon },
  { label: "My Tasks", icon: ListTodoIcon },
  { label: "Issues", icon: CircleDotIcon },
  { label: "Team", icon: UsersIcon },
  { label: "Reports", icon: BarChart3Icon },
]
const team = [
  { name: "Daniel Parker", initials: "DP", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80" },
  { name: "Matthew Reed", initials: "MR", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Ryan Brooks", initials: "RB", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
  { name: "Lena Dawson", initials: "LD", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { name: "Sophie Bennett", initials: "SB", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
  { name: "Liam Carter", initials: "LC", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&dpr=2&q=80" },
]
const upNext = [
  { title: "Weekly Team Standup", time: "9:00 AM to 9:30 AM", color: "border-blue-500", people: [team[3].src, team[1].src] },
  { title: "Design Review · Componen...", time: "11:00 AM to 12:00 PM", color: "border-violet-500", people: [team[3].src] },
  { title: "Coffee with Alex", time: "2:00 PM to 2:30 PM", color: "border-orange-500", people: [] },
]

function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Open notifications"
          className="text-sidebar-foreground/70 hover:text-sidebar-foreground relative">
          <BellIcon />
          <span className="bg-destructive absolute top-1 right-1.5 size-1.5 rounded-full" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80 p-0">
        <div className="flex items-center gap-2 border-b px-3 py-2.5">
          <span className="text-sm font-semibold">Notifications</span>
          <Badge size="sm" variant="secondary">3</Badge>
          <Button variant="ghost" size="icon-xs" aria-label="Mark all as read" className="ml-auto"><CheckIcon /></Button>
        </div>
        <div className="max-h-80 overflow-y-auto">
          <div className="flex gap-2.5 border-b p-3">
            <Avatar className="size-7"><AvatarImage src={team[3].src} alt="" /><AvatarFallback>SC</AvatarFallback></Avatar>
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
            <Avatar className="size-7"><AvatarImage src={team[1].src} alt="" /><AvatarFallback>MR</AvatarFallback></Avatar>
            <div className="min-w-0">
              <p className="text-sm font-medium">@maverick shared</p>
              <p className="text-muted-foreground text-xs">Project Timeline</p>
              <button type="button" className="bg-muted mt-2 flex items-center gap-1.5 rounded-md px-2 py-1 text-xs">
                <FileTextIcon className="size-3.5" />project-plan.pdf (2mb)
              </button>
              <p className="text-muted-foreground mt-2 text-xs">15m ago</p>
            </div>
          </div>
        </div>
        <div className="border-t p-1.5"><Button variant="ghost" size="sm" className="w-full">View all notifications</Button></div>
      </PopoverContent>
    </Popover>
  )
}

function RightPanel() {
  const [selected, setSelected] = useState<Date | undefined>(DEMO_TODAY)
  return (
    <aside className="hidden w-80 shrink-0 flex-col overflow-y-auto border-l bg-background lg:flex">
      <div className="flex items-center justify-between px-3 pt-3">
        <span className="text-sm font-semibold">February 2026</span>
        <div className="flex items-center gap-0.5">
          <Button variant="ghost" size="icon-xs" aria-label="Previous month"><ChevronLeftIcon /></Button>
          <Button variant="ghost" size="icon-xs" aria-label="Next month"><ChevronRightIcon /></Button>
        </div>
      </div>
      <Calendar mode="single" month={DEMO_MONTH} selected={selected} onSelect={setSelected} hideNavigation
        classNames={{ month_caption: "hidden" }} className="w-full px-2 [--cell-size:--spacing(9)]" />
      <div className="border-y px-3 py-3">
        <p className="text-muted-foreground mb-2 text-xs font-medium">MY CALENDARS</p>
        <button type="button" className="hover:bg-muted/60 flex w-full items-center gap-1.5 rounded-md bg-muted/40 px-1.5 py-1 text-sm">
          <ChevronDownIcon className="text-muted-foreground size-3.5" />nick@company.io
          <Badge size="sm" variant="secondary" className="ml-auto">3</Badge>
        </button>
        <div className="mt-1 flex flex-col gap-0.5">
          {[{ name: "Work", color: "bg-blue-500" }, { name: "Personal", color: "bg-emerald-500" }, { name: "Meetings", color: "bg-violet-500" }].map((cal) => (
            <div key={cal.name} className="flex items-center gap-2 rounded-md py-1 pl-3 text-sm">
              <span className={cn("size-2 rounded-full", cal.color)} />
              <span className="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-sm"><CheckIcon className="size-3" /></span>
              {cal.name}
            </div>
          ))}
          <button type="button" className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm">
            <ChevronRightIcon className="size-3.5" />nick@gmail.com
            <Badge size="sm" variant="secondary" className="ml-auto">2</Badge>
          </button>
          <button type="button" className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm">
            <PlusIcon className="size-3.5" />Add account
          </button>
        </div>
      </div>
      <div className="px-3 py-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-muted-foreground text-xs font-medium">UP NEXT</p>
          <Badge size="sm" variant="secondary">3</Badge>
        </div>
        <div className="flex flex-col gap-3">
          {upNext.map((event) => (
            <div key={event.title} className={cn("border-l-2 pl-2.5", event.color)}>
              <p className="truncate text-sm font-medium">{event.title}</p>
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground text-xs">{event.time}</p>
                <div className="ml-auto flex -space-x-1.5">
                  {event.people.map((src) => (
                    <Avatar key={src} className="size-5 ring-2 ring-background"><AvatarImage src={src} alt="" /><AvatarFallback>U</AvatarFallback></Avatar>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-2 border-t p-3">
        <Button size="sm"><PlusIcon /> New Event</Button>
        <Button size="sm" variant="outline"><ShareIcon /> Share Availability</Button>
        <p className="text-muted-foreground pt-2 text-xs">Your timezone</p>
        <p className="text-xs">GMT-5 · Eastern Time</p>
      </div>
    </aside>
  )
}

export function AppShell6Block() {
  const [showPanel, setShowPanel] = useState(true)
  const [issuesOpen, setIssuesOpen] = useState(true)
  const [teamOpen, setTeamOpen] = useState(true)
  const [teamNavOpen, setTeamNavOpen] = useState(false)
  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <Sidebar className="border-0">
        <div className="dark bg-sidebar text-sidebar-foreground flex h-full min-h-0 flex-col">
          <SidebarHeader className="gap-3 p-3">
            <div className="flex items-center gap-2">
              <span className="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-lg text-sm font-bold">U</span>
              <span className="truncate text-sm font-semibold">ReUI</span>
              <div className="ml-auto"><NotificationsPopover /></div>
            </div>
            <button type="button" className="border-sidebar-border bg-sidebar-accent/50 text-sidebar-foreground/60 hover:bg-sidebar-accent flex h-8 w-full items-center gap-2 rounded-md border px-2.5 text-sm">
              <SearchIcon className="size-4" />Search...
              <kbd className="bg-sidebar-accent ml-auto rounded-sm px-1.5 py-0.5 text-[10px]">⌘K</kbd>
            </button>
          </SidebarHeader>
          <SidebarContent className="min-h-0">
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {nav.slice(0, 3).map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton isActive={item.active}><item.icon /><span>{item.label}</span></SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <Collapsible open={issuesOpen} onOpenChange={setIssuesOpen}>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <CircleAlertIcon /><span>Issues</span>
                          <ChevronRightIcon className="ml-auto size-4 transition-transform data-[state=open]:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="border-sidebar-border ml-4 flex flex-col border-l pl-2">
                          {["Backlog", "In Progress", "Resolved"].map((sub) => (
                            <button key={sub} type="button" className="text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground rounded-md px-2 py-1.5 text-left text-sm">{sub}</button>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                  <Collapsible open={teamNavOpen} onOpenChange={setTeamNavOpen}>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <UsersIcon /><span>Team</span>
                          <ChevronRightIcon className="ml-auto size-4 transition-transform data-[state=open]:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="border-sidebar-border ml-4 flex flex-col border-l pl-2">
                          {["Members", "Roles", "Invitations"].map((sub) => (
                            <button key={sub} type="button" className="text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground rounded-md px-2 py-1.5 text-left text-sm">{sub}</button>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                  {nav.slice(5).map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton><item.icon /><span>{item.label}</span></SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <Collapsible open={teamOpen} onOpenChange={setTeamOpen}>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="hover:bg-sidebar-accent flex w-full items-center rounded-md">
                    Team Members<ChevronRightIcon className="ml-auto size-4 transition-transform data-[state=open]:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {team.map((member) => (
                        <SidebarMenuItem key={member.name}>
                          <SidebarMenuButton>
                            <Avatar className="size-5"><AvatarImage src={member.src} alt="" /><AvatarFallback>{member.initials}</AvatarFallback></Avatar>
                            <span>{member.name}</span>
                          </SidebarMenuButton>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <SidebarMenuAction showOnHover aria-label={`Actions for ${member.name}`}><MoreHorizontalIcon /></SidebarMenuAction>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" side="right">
                              <DropdownMenuLabel>{member.name}</DropdownMenuLabel>
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Send Message</DropdownMenuItem>
                              <DropdownMenuItem>Assign Task</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem variant="destructive">Remove from Team</DropdownMenuItem>
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
          <SidebarFooter className="gap-2 p-3">
            <div className="border-sidebar-border bg-sidebar-accent/40 rounded-lg border p-2.5">
              <p className="text-warning text-xs font-medium">Spending Limit</p>
              <p className="text-sidebar-foreground/60 mt-1 text-xs">Consumption and balance will be reset at the end of the month</p>
              <div className="bg-sidebar-accent mt-2 h-1.5 overflow-hidden rounded-full"><div className="bg-success h-full w-[82%] rounded-full" /></div>
              <div className="mt-1 flex justify-between text-xs"><span className="font-medium">82% Used</span><span className="text-sidebar-foreground/60">18% Free</span></div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button type="button" className="hover:bg-sidebar-accent flex w-full items-center gap-2 rounded-md px-1.5 py-1.5 text-left">
                  <span className="flex size-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">C</span>
                  <span className="truncate text-sm font-medium">Claude</span>
                  <EllipsisIcon className="text-sidebar-foreground/60 ml-auto size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" side="right" className="w-52">
                <DropdownMenuLabel>Workspace</DropdownMenuLabel>
                {["Claude", "ReUI Pro", "Personal"].map((workspace) => <DropdownMenuItem key={workspace}>{workspace}</DropdownMenuItem>)}
                <DropdownMenuSeparator />
                <DropdownMenuItem>Workspace settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </div>
      </Sidebar>

      <div className="flex min-w-0 flex-1">
        <SidebarInset className="min-w-0">
          <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
            <HouseIcon className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-sm">Home</span>
            <span className="text-muted-foreground text-sm">–</span>
            <span className="text-sm font-medium">Overview</span>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="flex -space-x-2">
                {team.slice(0, 3).map((member) => (
                  <Avatar key={member.name} className="size-6 ring-2 ring-background"><AvatarImage src={member.src} alt="" /><AvatarFallback>{member.initials}</AvatarFallback></Avatar>
                ))}
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
              <Button variant="ghost" size="icon-sm" aria-label="Toggle calendar panel" aria-pressed={showPanel} onClick={() => setShowPanel(!showPanel)}>
                <PanelRightIcon />
              </Button>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((card) => <div key={card} className="bg-muted/30 h-40 rounded-xl border border-dashed" />)}
            </div>
            <div className="bg-muted/30 mt-4 min-h-[420px] rounded-xl border border-dashed" />
          </div>
        </SidebarInset>
        {showPanel && <RightPanel />}
      </div>
    </SidebarProvider>
  )
}

export default AppShell6Block
