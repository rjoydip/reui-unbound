import { useEffect, useState } from "react"
import {
  ActivityIcon,
  BookOpenIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  FolderIcon,
  LifeBuoyIcon,
  PanelLeftIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
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
  useSidebar,
} from "@/components/ui/sidebar"

const workspaces = ["Vercel", "Linear", "ReUI Pro"]

const searchable = [
  { label: "Overview", icon: FolderIcon },
  { label: "Segments", icon: UsersIcon },
  { label: "Accounts", icon: FolderIcon },
  { label: "Health Scores", icon: ActivityIcon },
  { label: "Subscriptions", icon: CreditCardIcon },
  { label: "Revenue", icon: WalletIcon },
  { label: "Automation", icon: ZapIcon },
  { label: "Support", icon: LifeBuoyIcon },
]

function ShellSearch({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [query, setQuery] = useState("")
  const results = searchable.filter((item) =>
    item.label.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        className="border-input bg-background text-muted-foreground hover:bg-muted/40 flex h-9 w-full items-center gap-2 rounded-md border px-2.5 text-sm transition-colors"
      >
        <SearchIcon className="size-4 shrink-0" />
        <span className="truncate">Search...</span>
        <Kbd className="ml-auto">⌘K</Kbd>
      </button>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-lg">
          <DialogHeader className="sr-only">
            <DialogTitle>Search workspace</DialogTitle>
            <DialogDescription>Jump to any page in the workspace.</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 border-b px-3">
            <SearchIcon className="text-muted-foreground size-4" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search pages, people and settings..."
              className="h-11 w-full bg-transparent text-sm outline-none"
            />
          </div>
          <div className="max-h-72 overflow-y-auto p-2">
            {results.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => onOpenChange(false)}
                className="hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm"
              >
                <item.icon className="text-muted-foreground size-4" />
                {item.label}
              </button>
            ))}
            {results.length === 0 ? (
              <p className="text-muted-foreground px-2 py-6 text-center text-sm">
                No results for “{query}”
              </p>
            ) : null}
          </div>
          <div className="text-muted-foreground flex items-center gap-3 border-t px-3 py-2 text-xs">
            <span>Workspace</span>
            <span className="text-foreground">Vercel</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function WorkspacePicker({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton size="lg">
          <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md text-[11px] font-bold">
            V
          </span>
          <span className="truncate text-sm font-medium">{value}</span>
          <ChevronsUpDownIcon className="ml-auto size-4" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
        {workspaces.map((workspace) => (
          <DropdownMenuItem key={workspace} onClick={() => onChange(workspace)}>
            {workspace}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>Create workspace</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function SidebarBody() {
  const { setOpenMobile } = useSidebar()
  const [searchOpen, setSearchOpen] = useState(false)
  const [workspace, setWorkspace] = useState("Vercel")

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

  return (
    <>
      <SidebarHeader className="gap-3">
        <div className="flex items-center gap-2 px-2">
          <span className="bg-foreground text-background flex size-8 shrink-0 items-center justify-center rounded-lg">
            <span className="text-[11px] font-bold">R</span>
          </span>
          <span className="truncate text-sm font-semibold">ReUI</span>
          <SidebarTrigger className="ml-auto">
            <PanelLeftIcon />
          </SidebarTrigger>
        </div>
        <div className="px-2">
          <ShellSearch open={searchOpen} onOpenChange={setSearchOpen} />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive onClick={() => setOpenMobile(false)}>
                  <FolderIcon />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <Collapsible defaultOpen className="group/customers">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <UsersIcon />
                      <span>Customers</span>
                      <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/customers:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {["Segments", "Accounts", "Health Scores"].map((item) => (
                        <SidebarMenuSubItem key={item}>
                          <SidebarMenuSubButton isActive={item === "Accounts"}>
                            {item}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <Collapsible className="group/subscriptions">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <CreditCardIcon />
                      <span>Subscriptions</span>
                      <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/subscriptions:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {["Plans", "Invoices", "Dunning"].map((item) => (
                        <SidebarMenuSubItem key={item}>
                          <SidebarMenuSubButton>{item}</SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <WalletIcon />
                  <span>Revenue</span>
                  <span className="bg-success ml-auto size-2 rounded-full" />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ZapIcon />
                  <span>Automation</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LifeBuoyIcon />
                  <span>Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-1">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <SettingsIcon />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <UsersIcon />
              <span>Invite Team</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <BookOpenIcon />
              <span>Documentation</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <WorkspacePicker value={workspace} onChange={setWorkspace} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}

export function AppShellFloatingSidebarAdminBlock() {
  return (
    <SidebarProvider
      style={{ "--sidebar-width": "17rem" } as React.CSSProperties}
      className="min-h-svh bg-[radial-gradient(circle_at_20%_-10%,var(--accent),transparent_55%)]"
    >
      <Sidebar variant="floating" collapsible="offcanvas">
        <SidebarBody />
      </Sidebar>
      <SidebarInset className="bg-transparent">
        <header className="flex h-14 items-center gap-2 px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-muted-foreground font-normal">
                  Workspace
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-muted-foreground font-normal">
                  @shadcn
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Projects</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="bg-background h-52 rounded-xl border" />
            ))}
          </div>
          <div className="bg-background min-h-100 flex-1 rounded-xl border" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppShellFloatingSidebarAdminBlock
