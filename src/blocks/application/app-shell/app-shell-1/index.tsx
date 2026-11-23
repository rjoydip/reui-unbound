import {
  Building2Icon,
  ChevronRightIcon,
  EllipsisIcon,
  FileTextIcon,
  HouseIcon,
  LayersIcon,
  LifeBuoyIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SettingsIcon,
  ShieldCheckIcon,
  UserPlusIcon,
  WorkflowIcon,
  ActivityIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/kit/badge"
import { cn } from "cn"

const workspaces = [
  { id: "reui", name: "ReUI", plan: "Pro workspace" },
  { id: "acme", name: "Acme Cloud", plan: "Team workspace" },
  { id: "orbit", name: "Orbit Labs", plan: "Free workspace" },
]

const resources = [
  { name: "API Gateway", badge: "Prod", dot: "bg-emerald-500" },
  { name: "ML Pipeline", dot: "bg-violet-500" },
  { name: "Database", badge: "US-East", dot: "bg-sky-500" },
  { name: "CDN", dot: "bg-amber-500" },
  { name: "Authentication", dot: "bg-rose-500" },
]

const infrastructure = ["Clusters", "Networking", "Storage", "Certificates"]

function PlaceholderTile({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-muted/30 border-border/70 h-45 rounded-lg border border-dashed",
        className,
      )}
    />
  )
}

export function AppShell1Block() {
  return (
    <SidebarProvider className="min-h-svh">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton size="lg">
                    <span className="bg-foreground text-background flex size-8 shrink-0 items-center justify-center rounded-lg">
                      <LayersIcon className="size-4" />
                    </span>
                    <span className="flex min-w-0 flex-col text-left">
                      <span className="truncate text-sm font-semibold">
                        ReUI
                      </span>
                      <span className="text-muted-foreground truncate text-xs">
                        Pro workspace
                      </span>
                    </span>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                  {workspaces.map((workspace) => (
                    <DropdownMenuItem key={workspace.id}>
                      <Building2Icon />
                      {workspace.name}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusIcon />
                    Create workspace
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction showOnHover>
                    <EllipsisIcon />
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Workspace settings</DropdownMenuItem>
                  <DropdownMenuItem>Manage members</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Invite people</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive tooltip="Overview">
                    <HouseIcon />
                    <span>Overview</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Pipelines">
                        <WorkflowIcon />
                        <span>Pipelines</span>
                        <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {["Build Runs", "Deployments", "Release Gates"].map(
                          (item) => (
                            <SidebarMenuSubItem key={item}>
                              <SidebarMenuSubButton
                                isActive={item === "Deployments"}
                              >
                                <span>{item}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ),
                        )}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Infrastructure">
                        <LayersIcon />
                        <span>Infrastructure</span>
                        <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {infrastructure.map((item) => (
                          <SidebarMenuSubItem key={item}>
                            <SidebarMenuSubButton>
                              <span>{item}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Observability">
                    <ActivityIcon />
                    <span>Observability</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>
                    <Badge size="sm" variant="success-light">
                      14
                    </Badge>
                  </SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Security">
                    <ShieldCheckIcon />
                    <span>Security</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <Collapsible defaultOpen className="group/resources">
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex w-full items-center">
                  Resources
                  <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/resources:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {resources.map((resource) => (
                      <SidebarMenuItem key={resource.name}>
                        <SidebarMenuButton tooltip={resource.name}>
                          <span
                            className={cn("size-2 rounded-full", resource.dot)}
                          />
                          <span>{resource.name}</span>
                        </SidebarMenuButton>
                        {resource.badge ? (
                          <SidebarMenuBadge>
                            <Badge size="sm" variant="outline">
                              {resource.badge}
                            </Badge>
                          </SidebarMenuBadge>
                        ) : null}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <SidebarMenuAction showOnHover>
                              <MoreHorizontalIcon />
                            </SidebarMenuAction>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Open</DropdownMenuItem>
                            <DropdownMenuItem>View metrics</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                              Remove
                            </DropdownMenuItem>
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

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <SettingsIcon />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Invite Team">
                <UserPlusIcon />
                <span>Invite Team</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Documentation">
                <FileTextIcon />
                <span>Documentation</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton size="lg" className="border">
                    <Avatar className="size-8">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"
                        alt="Nick Bold"
                      />
                      <AvatarFallback>NB</AvatarFallback>
                    </Avatar>
                    <span className="flex min-w-0 flex-col text-left">
                      <span className="truncate text-sm font-medium">
                        Nick Bold
                      </span>
                      <span className="text-muted-foreground truncate text-xs">
                        nick@reui.io
                      </span>
                    </span>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>
                    <LifeBuoyIcon />
                    Support
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <PlaceholderTile />
            <PlaceholderTile />
            <PlaceholderTile />
          </div>
          <PlaceholderTile className="min-h-120 flex-1" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
