import { useState } from "react"
import {
  ArrowLeftRightIcon, BarChart3Icon, BellIcon, BoxesIcon, Building2Icon, CheckIcon,
  ChevronsUpDownIcon, CircleUserIcon, CreditCardIcon, HouseIcon, LayoutGridIcon,
  PanelsTopLeftIcon, PlusIcon, RocketIcon, SearchIcon, SettingsIcon, ShoppingCartIcon,
  StarIcon, TagsIcon, TruckIcon, TriangleAlertIcon, UsersIcon, WarehouseIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu,
  SidebarMenuButton, SidebarMenuItem, SidebarProvider,
} from "@/components/ui/sidebar"
import { cn } from "cn"

type NavItem = { name: string; icon: typeof TagsIcon; badge?: string; active?: boolean }
type Section = { id: string; label: string; icon: typeof TagsIcon; nav: { label: string; items: NavItem[] }[] }

const sections: Section[] = [
  { id: "home", label: "Home", icon: HouseIcon, nav: [{ label: "Home", items: [
    { name: "Dashboard", icon: LayoutGridIcon, active: true },
    { name: "Activity", icon: ArrowLeftRightIcon },
    { name: "Tasks", icon: CircleUserIcon },
  ] }] },
  { id: "catalog", label: "Product Catalog", icon: BoxesIcon, nav: [
    { label: "Catalog", items: [
      { name: "Product Catalog", icon: LayoutGridIcon, active: true },
      { name: "Categories", icon: TagsIcon },
      { name: "Customer Reviews", icon: StarIcon, badge: "20" },
    ] },
    { label: "Operations", items: [
      { name: "Transactions", icon: ArrowLeftRightIcon },
      { name: "Suppliers", icon: TruckIcon },
      { name: "Warehouses", icon: WarehouseIcon },
      { name: "Stock Alerts", icon: TriangleAlertIcon, badge: "4" },
    ] },
  ] },
  { id: "orders", label: "Orders", icon: ShoppingCartIcon, nav: [
    { label: "Orders", items: [
      { name: "All Orders", icon: LayoutGridIcon, active: true },
      { name: "Drafts", icon: ShoppingCartIcon },
      { name: "Returns", icon: ArrowLeftRightIcon },
    ] },
    { label: "Payments", items: [
      { name: "Transactions", icon: CreditCardIcon },
      { name: "Payouts", icon: BarChart3Icon },
    ] },
  ] },
  { id: "customers", label: "Customers", icon: UsersIcon, nav: [{ label: "Customers", items: [
    { name: "All Customers", icon: LayoutGridIcon, active: true },
    { name: "Segments", icon: TagsIcon },
    { name: "Companies", icon: Building2Icon },
  ] }] },
  { id: "content", label: "Content", icon: PanelsTopLeftIcon, nav: [{ label: "Content", items: [
    { name: "Pages", icon: PanelsTopLeftIcon, active: true },
    { name: "Media", icon: LayoutGridIcon },
    { name: "Reviews", icon: StarIcon },
  ] }] },
  { id: "reports", label: "Reports", icon: BarChart3Icon, nav: [{ label: "Reports", items: [
    { name: "Overview", icon: LayoutGridIcon, active: true },
    { name: "Sales", icon: BarChart3Icon },
    { name: "Inventory", icon: BoxesIcon },
  ] }] },
  { id: "settings", label: "Settings", icon: SettingsIcon, nav: [{ label: "Settings", items: [
    { name: "General", icon: SettingsIcon, active: true },
    { name: "Team", icon: UsersIcon },
    { name: "Billing", icon: CreditCardIcon },
  ] }] },
]
const workspaces = [
  { name: "Acme Inc", plan: "Pro", color: "bg-violet-500" },
  { name: "Starter Kit", plan: "Free", color: "bg-orange-500" },
  { name: "Enterprise", plan: "Enterprise", color: "bg-blue-500" },
]
const environments = ["Production", "Staging", "Development"]

export function AppShellInventoryAdminBlock() {
  const [sectionId, setSectionId] = useState("catalog")
  const [org, setOrg] = useState("Acme Inc")
  const [env, setEnv] = useState("Production")
  const [activeItem, setActiveItem] = useState("Product Catalog")
  const section = sections.find((item) => item.id === sectionId) ?? sections[0]
  const orgInfo = workspaces.find((workspace) => workspace.name === org)

  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <Sidebar collapsible="none" className="w-14 shrink-0 border-r">
        <SidebarHeader className="items-center p-2">
          <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg text-sm font-bold">U</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu className="items-center gap-1">
            {sections.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton isActive={sectionId === item.id} tooltip={item.label} aria-label={item.label}
                  onClick={() => { setSectionId(item.id); setActiveItem(item.nav[0].items.find((entry) => entry.active)?.name ?? "") }}
                  className="justify-center">
                  <item.icon />
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="items-center p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" aria-label="Open profile for Nick Bold" className="rounded-full">
                <Avatar className="size-7">
                  <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" alt="Nick Bold" />
                  <AvatarFallback>NB</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="right" className="w-56">
              <DropdownMenuLabel>
                <span className="block text-sm">Nick Bold</span>
                <span className="text-muted-foreground block text-xs font-normal">nick@reui.io</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuItem>Manage Accounts</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Theme</DropdownMenuItem>
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-12 shrink-0 items-center gap-3 border-b px-4">
          <Breadcrumb>
            <BreadcrumbList className="gap-1.5 sm:gap-1.5">
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button type="button" className="hover:bg-muted flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm font-medium">
                      <span className={cn("size-2 rounded-full", orgInfo?.color ?? "bg-violet-500")} />
                      {org}
                      <ChevronsUpDownIcon className="text-muted-foreground size-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuLabel>Organizations</DropdownMenuLabel>
                    {workspaces.map((workspace) => (
                      <DropdownMenuItem key={workspace.name} onClick={() => setOrg(workspace.name)}>
                        <span className={cn("size-2.5 rounded-full", workspace.color)} />
                        <span className="flex flex-col">
                          <span>{workspace.name}</span>
                          <span className="text-muted-foreground text-xs">{workspace.plan}</span>
                        </span>
                        {org === workspace.name && <CheckIcon className="ml-auto" />}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><PlusIcon />Create Organization</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <span className="flex items-center gap-1.5 px-1.5 text-sm font-medium"><RocketIcon className="size-4" />Inventory</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button type="button" className="hover:bg-muted flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm font-medium">
                      {env}<ChevronsUpDownIcon className="text-muted-foreground size-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuLabel>Environments</DropdownMenuLabel>
                    {environments.map((environment) => (
                      <DropdownMenuItem key={environment} onClick={() => setEnv(environment)}>
                        <RocketIcon />{environment}
                        {env === environment && <CheckIcon className="ml-auto" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative mx-auto hidden w-full max-w-sm lg:block">
            <SearchIcon className="text-muted-foreground absolute top-2 left-2.5 size-4" />
            <input type="search" placeholder="Search..." className="border-input bg-background focus-visible:ring-ring h-8 w-full rounded-md border pr-14 pl-8 text-sm outline-none focus-visible:ring-2" />
            <div className="pointer-events-none absolute top-1 right-1.5 flex items-center gap-1">
              <kbd className="bg-muted text-muted-foreground rounded-sm px-1 py-0.5 text-[10px]">⌘</kbd>
              <kbd className="bg-muted text-muted-foreground rounded-sm px-1 py-0.5 text-[10px]">K</kbd>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild><Button size="sm"><PlusIcon />Create</Button></DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem><BoxesIcon />New Product</DropdownMenuItem>
                <DropdownMenuItem><ShoppingCartIcon />New Order</DropdownMenuItem>
                <DropdownMenuItem><UsersIcon />New Customer</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Import Data</DropdownMenuItem>
                <DropdownMenuItem>Generate Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Notifications" className="relative">
                  <BellIcon /><span className="bg-destructive absolute top-1 right-1 size-1.5 rounded-full" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-72 p-0">
                <div className="border-b p-3 text-sm font-semibold">Notifications</div>
                <div className="p-3 text-xs">
                  <p className="font-medium">Stock alert · Blue hoodie</p>
                  <p className="text-muted-foreground mt-1">Only 4 units left in Warehouse A.</p>
                </div>
                <div className="border-t p-2"><Button variant="ghost" size="sm" className="w-full">View all notifications</Button></div>
              </PopoverContent>
            </Popover>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          <aside className="hidden w-52 shrink-0 flex-col overflow-y-auto border-r md:flex">
            <div className="flex flex-1 flex-col gap-4 p-2">
              {section.nav.map((group) => (
                <div key={group.label}>
                  <p className="text-muted-foreground px-2 py-1.5 text-xs font-medium tracking-wide uppercase">{group.label}</p>
                  <div className="flex flex-col gap-0.5">
                    {group.items.map((item) => (
                      <button key={item.name} type="button" onClick={() => setActiveItem(item.name)}
                        className={cn("hover:bg-muted/60 flex h-8 items-center gap-2 rounded-md px-2 text-sm", activeItem === item.name && "bg-muted font-medium")}>
                        <item.icon className="text-muted-foreground size-4" />
                        <span className="truncate">{item.name}</span>
                        {item.badge && <Badge size="sm" variant="secondary" className="ml-auto">{item.badge}</Badge>}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t p-3">
              <p className="text-warning text-xs font-medium">Storage Usage</p>
              <p className="text-muted-foreground mt-1 text-xs">
                {section.id === "catalog" ? "Warehouse capacity across all locations" : `${section.label} data synced with production`}
              </p>
              <div className="bg-muted mt-2 h-1.5 overflow-hidden rounded-full"><div className="bg-warning h-full w-[74%] rounded-full" /></div>
              <div className="mt-1 flex justify-between text-xs"><span className="font-medium">74% Used</span><span className="text-muted-foreground">26% Free</span></div>
            </div>
          </aside>

          <main className="min-w-0 flex-1 overflow-y-auto p-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-semibold">{activeItem}</h1>
                <p className="text-muted-foreground text-sm">{org} · Inventory · {env}</p>
              </div>
              <Badge variant="success-light" size="sm">Live</Badge>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((card) => <div key={card} className="bg-muted/30 h-40 rounded-xl border border-dashed" />)}
            </div>
            <div className="bg-muted/30 mt-4 min-h-56 rounded-xl border border-dashed" />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default AppShellInventoryAdminBlock
