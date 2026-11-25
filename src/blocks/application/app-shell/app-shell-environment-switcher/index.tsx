import { useState } from "react"
import {
  ActivityIcon,
  Building2Icon,
  CheckIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  GlobeIcon,
  KeyRoundIcon,
  MapPinIcon,
  SearchIcon,
  ShieldCheckIcon,
  UsersIcon,
  WebhookIcon,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { cn } from "cn"

const workspaces = [
  { name: "Acme Inc", color: "bg-violet-500" },
  { name: "Northwind", color: "bg-emerald-500" },
  { name: "Orbit Labs", color: "bg-orange-500" },
]

const apps = ["Web App", "Documentation", "Mobile App"]
const environments = ["Production", "Staging", "Development"]

const metrics = [
  { label: "API latency", value: "42ms", percent: 32 },
  { label: "CPU", value: "23%", percent: 23 },
  { label: "Memory", value: "61%", percent: 61 },
  { label: "Database", value: "12ms", percent: 18 },
]

function Sparkline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 28"
      className={cn("h-7 w-24", className)}
      aria-hidden="true"
    >
      <polyline
        points="0,20 8,18 16,21 24,12 32,15 40,9 48,13 56,7 64,11 72,6 80,9 88,4 96,8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Switcher({
  label,
  items,
  value,
  onChange,
  icon,
}: {
  label: string
  items: string[]
  value: string
  onChange: (value: string) => void
  icon?: React.ReactNode
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="hover:bg-muted flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm font-medium"
        >
          {icon}
          {value}
          <ChevronsUpDownIcon className="text-muted-foreground size-3.5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        {items.map((item) => (
          <DropdownMenuItem key={item} onClick={() => onChange(item)}>
            {icon}
            {item}
            {value === item && <CheckIcon className="ml-auto" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="text-muted-foreground">Create {label}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function SystemPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="hover:bg-muted flex h-8 items-center gap-2 rounded-md border px-2.5 text-sm"
        >
          <ActivityIcon className="text-muted-foreground size-4" />
          <span className="font-medium">System</span>
          <Badge size="sm" variant="success-light">
            Normal
          </Badge>
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="border-b p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">System monitor</span>
            <Badge size="sm" variant="success-light">
              All systems normal
            </Badge>
          </div>
          <p className="text-muted-foreground mt-0.5 text-xs">
            us-east-1 · Live, updates every second
          </p>
        </div>
        <div className="flex items-center gap-3 border-b p-3">
          <Sparkline className="text-emerald-500" />
          <div className="text-xs">
            <p className="font-medium">99.99% uptime</p>
            <p className="text-muted-foreground">Last 24 hours</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-center gap-3">
              <span className="text-muted-foreground w-20 text-xs">
                {metric.label}
              </span>
              <Progress value={metric.percent} className="flex-1" />
              <span className="w-10 text-right text-xs tabular-nums">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
        <div className="text-muted-foreground border-t p-2 text-center text-xs">
          us-east-1 · 3 regions healthy
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function AppShellEnvironmentSwitcherBlock() {
  const [org, setOrg] = useState("Acme Inc")
  const [app, setApp] = useState("Web App")
  const [env, setEnv] = useState("Production")
  const [usersOpen, setUsersOpen] = useState(true)
  const [orgsOpen, setOrgsOpen] = useState(false)

  return (
    <SidebarProvider className="h-svh flex-col overflow-hidden">
      <header className="flex h-12 shrink-0 items-center gap-2 border-b px-3">
        <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg text-sm font-bold">
          U
        </span>
        <Breadcrumb>
          <BreadcrumbList className="gap-1.5 sm:gap-1.5">
            <BreadcrumbItem>
              <Switcher
                label="Organizations"
                items={workspaces.map((workspace) => workspace.name)}
                value={org}
                onChange={setOrg}
                icon={<span className="bg-violet-500 size-2 rounded-full" />}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <Switcher
                label="Applications"
                items={apps}
                value={app}
                onChange={setApp}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <Switcher
                label="Environments"
                items={environments}
                value={env}
                onChange={setEnv}
              />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto">
          <SystemPopover />
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <Sidebar
          collapsible="none"
          className="w-60 shrink-0 border-r bg-background"
        >
          <SidebarHeader className="p-3">
            <button
              type="button"
              className="border-input text-muted-foreground hover:bg-muted/40 flex h-8 w-full items-center gap-2 rounded-md border px-2.5 text-sm"
            >
              <SearchIcon className="size-4" />
              Search...
              <kbd className="bg-muted ml-auto rounded-sm px-1.5 py-0.5 text-[10px]">
                ⌘K
              </kbd>
            </button>
          </SidebarHeader>
          <SidebarContent className="min-h-0">
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <GlobeIcon />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <Collapsible
                    open={usersOpen}
                    onOpenChange={setUsersOpen}
                    className="group/users"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <UsersIcon />
                          <span>Users</span>
                          <ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {["All Users", "Invitations", "Roles"].map((item) => (
                            <SidebarMenuSubItem key={item}>
                              <SidebarMenuSubButton
                                isActive={item === "Roles"}
                              >
                                <span>{item}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                  <Collapsible
                    open={orgsOpen}
                    onOpenChange={setOrgsOpen}
                    className="group/orgs"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <Building2Icon />
                          <span>Organizations</span>
                          <ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {["Members", "Billing", "Domains"].map((item) => (
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
                    <SidebarMenuButton>
                      <ShieldCheckIcon />
                      <span>Security</span>
                      <ChevronRightIcon className="ml-auto" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <WebhookIcon />
                      <span>Webhooks</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <KeyRoundIcon />
                      <span>API Keys</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="gap-3 p-3">
            <div className="bg-muted/40 overflow-hidden rounded-xl border">
              <div className="p-3">
                <p className="text-sm font-medium">Multi-theme support is here</p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Switch between Vega, Nova, Maia, Lyra, and Mira themes...
                </p>
              </div>
              <div className="h-20 bg-linear-to-br from-orange-400 via-fuchsia-500 to-violet-600 p-2">
                <div className="h-full rounded-md bg-linear-to-br from-cyan-300 to-blue-600 opacity-90" />
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="hover:bg-muted/60 flex w-full items-center gap-2 rounded-md px-1.5 py-1.5 text-left"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                    N
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">
                      Nick Bold
                    </span>
                    <span className="text-muted-foreground block truncate text-xs">
                      nick@reui.io
                    </span>
                  </span>
                  <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Preferences</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>

        <main className="min-w-0 flex-1 overflow-y-auto p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="bg-muted/30 h-52 rounded-xl border border-dashed"
              />
            ))}
          </div>
          <div className="bg-muted/30 mt-4 min-h-[420px] rounded-xl border border-dashed p-4">
            <div className="text-muted-foreground flex items-center gap-2 text-xs">
              <MapPinIcon className="size-3.5" />
              {org} / {app} / {env}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default AppShellEnvironmentSwitcherBlock
