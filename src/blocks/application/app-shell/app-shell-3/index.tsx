import {
  ActivityIcon,
  BellIcon,
  ChevronRightIcon,
  CircleIcon,
  HouseIcon,
  LayoutDashboardIcon,
  ListTodoIcon,
  PanelLeftIcon,
  SettingsIcon,
  SquareIcon,
  UsersIcon,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/kit/badge"
import { cn } from "cn"

const projects = [
  { name: "Design System", percent: 72, color: "#3b82f6" },
  { name: "API Integration", percent: 45, color: "#8b5cf6" },
  { name: "Mobile App", percent: 88, color: "#10b981" },
  { name: "Analytics Dashboard", percent: 30, color: "#f97316" },
  { name: "Auth Module", percent: 62, color: "#f43f5e" },
]

const workspaces = ["Claude", "ReUI Pro", "Personal"]

function ProgressRing({ percent, color }: { percent: number; color: string }) {
  const radius = 6
  const circumference = 2 * Math.PI * radius
  return (
    <svg viewBox="0 0 16 16" className="size-4 -rotate-90" aria-hidden="true">
      <circle
        cx="8"
        cy="8"
        r={radius}
        fill="none"
        strokeWidth="2"
        className="stroke-muted"
      />
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

function Placeholder({ className }: { className?: string }) {
  return <div className={cn("bg-muted/40 h-52 rounded-xl border", className)} />
}

export function AppShell3Block() {
  return (
    <SidebarProvider className="min-h-svh">
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2">
            <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg text-xs font-bold">
              U
            </span>
            <span className="truncate text-sm font-semibold">ReUI</span>
            <div className="ml-auto flex items-center gap-0.5">
              <SidebarTrigger aria-label="Notifications">
                <BellIcon />
              </SidebarTrigger>
              <SidebarTrigger>
                <PanelLeftIcon />
              </SidebarTrigger>
            </div>
          </div>
          <div className="px-2">
            <button
              type="button"
              className="border-input text-muted-foreground hover:bg-muted/40 flex h-9 w-full items-center gap-2 rounded-md border px-2.5 text-sm"
            >
              <span className="bg-muted size-4 rounded-sm" />
              <span>Search...</span>
              <Kbd className="ml-auto">⌘K</Kbd>
            </button>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive tooltip="Dashboard">
                    <LayoutDashboardIcon />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Projects">
                    <SquareIcon />
                    <span>Projects</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="My Tasks">
                    <ListTodoIcon />
                    <span>My Tasks</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Issues">
                    <CircleIcon />
                    <span>Issues</span>
                    <Badge size="sm" variant="secondary">
                      8
                    </Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Team">
                    <UsersIcon />
                    <span>Team</span>
                    <Badge size="sm" variant="secondary">
                      12
                    </Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Reports">
                    <ActivityIcon />
                    <span>Reports</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <Collapsible defaultOpen className="group/projects">
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex w-full items-center">
                  Active Projects
                  <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/projects:rotate-90" />
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
                          <span className="text-muted-foreground ml-auto text-xs tabular-nums">
                            {project.percent}%
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="gap-3">
          <div className="bg-muted/40 rounded-lg border p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Spending Limit</span>
              <span className="text-muted-foreground text-xs">May</span>
            </div>
            <p className="text-muted-foreground mt-1 text-xs">
              Consumption and balance will be reset at the end of the month.
            </p>
            <div className="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
              <div className="bg-success h-full w-[82%] rounded-full" />
            </div>
            <div className="text-muted-foreground mt-1 flex justify-between text-[11px]">
              <span className="text-foreground font-medium">82% Used</span>
              <span>18% Free</span>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="hover:bg-muted/60 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  C
                </span>
                <span className="truncate font-medium">Claude</span>
                <ChevronRightIcon className="text-muted-foreground ml-auto size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-52">
              <DropdownMenuLabel>Workspace</DropdownMenuLabel>
              {workspaces.map((workspace) => (
                <DropdownMenuItem key={workspace}>{workspace}</DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SettingsIcon />
                Workspace settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-muted-foreground inline-flex items-center gap-1.5 font-normal">
                  <HouseIcon className="size-3.5" />
                  Home
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator>~</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </div>
          <Placeholder className="min-h-120 flex-1" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppShell3Block
