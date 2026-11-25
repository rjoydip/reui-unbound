import { useState } from "react"
import {
  BellIcon,
  CalendarIcon,
  ChartColumnIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  ClipboardListIcon,
  CodeXmlIcon,
  ShapesIcon,
  FileTextIcon,
  FilterIcon,
  FolderIcon,
  InboxIcon,
  LayoutGridIcon,
  LogOutIcon,
  MailIcon,
  MonitorIcon,
  MoonIcon,
  PanelLeftIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  SparklesIcon,
  SunIcon,
  TrendingUpIcon,
  UserIcon,
  UsersIcon,
  UsersRoundIcon,
  ZapIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { cn } from "cn"
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const railNav = [
  { id: "overview", label: "Overview", icon: ChartColumnIcon },
  { id: "contacts", label: "Contacts", icon: UsersIcon },
  { id: "workspaces", label: "Workspaces", icon: FolderIcon, active: true },
  { id: "code", label: "Code", icon: CodeXmlIcon },
  { id: "docs", label: "Docs", icon: FileTextIcon },
  { id: "activity", label: "Activity", icon: BellIcon },
]

const workspaces = [
  { name: "Thunder AI", members: "8 members", tone: "from-emerald-400 to-teal-600" },
  { name: "Clarity AI", members: "6 members", tone: "from-fuchsia-400 to-purple-600" },
  { name: "Thunder Labs", members: "12 members", tone: "from-amber-400 to-orange-600" },
  { name: "Bold Studio", members: "4 members", tone: "from-sky-400 to-blue-600" },
]

const primaryNav = [
  { label: "Home", icon: ZapIcon },
  { label: "Updates", icon: UsersRoundIcon, active: true },
  { label: "Inbox", icon: InboxIcon },
  { label: "Clients", icon: SettingsIcon, badge: "Beta" },
  { label: "My Tasks", icon: TrendingUpIcon },
]

const workspaceNav = [
  { label: "Business Concepts", icon: FolderIcon },
  { label: "Northstar Studio", icon: ShapesIcon },
  { label: "Teams", icon: UsersIcon, badge: "Pro" },
  { label: "Reports", icon: ChartColumnIcon },
]

const communityNav = [
  { label: "Designers Hub", icon: ShapesIcon },
  { label: "React Js", icon: CodeXmlIcon },
  { label: "Node Js", icon: ZapIcon },
]

const views = [
  { value: "list", label: "List", icon: ClipboardListIcon },
  { value: "kanban", label: "Kanban", icon: LayoutGridIcon },
  { value: "calendar", label: "Calendar", icon: CalendarIcon },
  { value: "dashboard", label: "Dashboard", icon: ZapIcon },
]

function WorkspaceMark({ tone }: { tone: string }) {
  return (
    <span
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-b text-white",
        tone,
      )}
    >
      <ZapIcon className="size-3.5" />
    </span>
  )
}

function ThemeRow() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light")
  return (
    <DropdownMenuItem
      onSelect={(event) => event.preventDefault()}
      className="justify-between"
    >
      <span className="flex items-center gap-1.5">
        <SunIcon />
        Theme
      </span>
      <span className="flex items-center gap-0.5">
        {[
          { value: "light", icon: SunIcon, label: "Light" },
          { value: "dark", icon: MoonIcon, label: "Dark" },
          { value: "system", icon: MonitorIcon, label: "System" },
        ].map((option) => (
          <button
            key={option.value}
            type="button"
            aria-label={`${option.label} theme`}
            onClick={(event) => {
              event.stopPropagation()
              setTheme(option.value as typeof theme)
            }}
            className={
              theme === option.value
                ? "bg-accent text-accent-foreground flex size-5 items-center justify-center rounded-sm"
                : "text-muted-foreground hover:text-foreground flex size-5 items-center justify-center rounded-sm"
            }
          >
            <option.icon className="size-3.5" />
          </button>
        ))}
      </span>
    </DropdownMenuItem>
  )
}

export function AppShellViewToolbarWorkspaceBlock() {
  const [navOpen, setNavOpen] = useState(true)
  const [workspace, setWorkspace] = useState("Thunder AI")
  const [view, setView] = useState("list")
  const [activeAction, setActiveAction] = useState<string | null>(null)

  return (
    <div className="bg-background flex h-svh w-full overflow-hidden">
      <aside className="flex w-14 shrink-0 flex-col items-center gap-1 border-r py-2">
        <span className="bg-foreground text-background mb-2 flex size-8 items-center justify-center rounded-md text-sm font-bold">
          U
        </span>
        {railNav.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            className={cn(
              "flex size-9 items-center justify-center rounded-md transition-colors",
              item.active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <item.icon className="size-4" />
          </button>
        ))}
        <div className="mt-auto flex flex-col items-center gap-1">
          <button
            type="button"
            aria-label="Messages"
            className="text-muted-foreground hover:bg-muted hover:text-foreground flex size-9 items-center justify-center rounded-md transition-colors"
          >
            <MailIcon className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Files"
            className="text-muted-foreground hover:bg-muted hover:text-foreground flex size-9 items-center justify-center rounded-md transition-colors"
          >
            <FileTextIcon className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Settings"
            className="text-muted-foreground hover:bg-muted hover:text-foreground flex size-9 items-center justify-center rounded-md transition-colors"
          >
            <SettingsIcon className="size-4" />
          </button>
        </div>
      </aside>

      {navOpen ? (
        <aside className="flex w-60 shrink-0 flex-col border-r">
          <div className="flex h-14 shrink-0 items-center gap-1 border-b px-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="hover:bg-muted flex min-w-0 flex-1 items-center gap-2 rounded-md px-1.5 py-1 text-left transition-colors"
                >
                  <WorkspaceMark tone="from-emerald-400 to-teal-600" />
                  <span className="truncate text-sm font-medium">
                    {workspace}
                  </span>
                  <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-3.5 shrink-0" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                {workspaces.map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    onSelect={() => setWorkspace(item.name)}
                    className="gap-2"
                  >
                    <WorkspaceMark tone={item.tone} />
                    <span className="flex flex-col">
                      <span className="text-sm">{item.name}</span>
                      <span className="text-muted-foreground text-xs">
                        {item.members}
                      </span>
                    </span>
                    {workspace === item.name ? (
                      <CheckIcon className="ml-auto" />
                    ) : null}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2">
                  <span className="border-border flex size-6 shrink-0 items-center justify-center rounded-md border border-dashed">
                    <PlusIcon className="size-3.5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm">New Workspace</span>
                    <span className="text-muted-foreground text-xs">
                      Collaborate with others.
                    </span>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Toggle navigation"
              onClick={() => setNavOpen(false)}
              className="text-muted-foreground"
            >
              <PanelLeftIcon />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto py-2">
            <nav className="flex flex-col gap-0.5 px-2">
              {primaryNav.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={cn(
                    "hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                    item.active && "bg-muted font-medium",
                  )}
                >
                  <item.icon className="text-muted-foreground size-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                  {item.badge ? (
                    <Badge
                      size="sm"
                      variant={
                        item.badge === "Pro" ? "success-light" : "destructive-light"
                      }
                      className="ml-auto"
                    >
                      {item.badge}
                    </Badge>
                  ) : null}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex items-center gap-1 px-4 py-1">
              <span className="text-muted-foreground text-xs font-medium">
                Workspaces
              </span>
              <div className="ml-auto flex items-center gap-0.5">
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Add workspace"
                  className="text-muted-foreground"
                >
                  <PlusIcon />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Collapse workspaces"
                  className="text-muted-foreground"
                >
                  <ChevronsUpDownIcon />
                </Button>
              </div>
            </div>
            <nav className="flex flex-col gap-0.5 px-2">
              {workspaceNav.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
                >
                  <item.icon className="text-muted-foreground size-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                  {item.badge ? (
                    <Badge size="sm" variant="success-light" className="ml-auto">
                      {item.badge}
                    </Badge>
                  ) : null}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex items-center gap-1 px-4 py-1">
              <span className="text-muted-foreground text-xs font-medium">
                Communities
              </span>
              <div className="ml-auto flex items-center gap-0.5">
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Add community"
                  className="text-muted-foreground"
                >
                  <PlusIcon />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Collapse communities"
                  className="text-muted-foreground"
                >
                  <ChevronsUpDownIcon />
                </Button>
              </div>
            </div>
            <nav className="flex flex-col gap-0.5 px-2 pb-4">
              <a
                href="#"
                className="hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
              >
                <PlusIcon className="text-muted-foreground size-4 shrink-0" />
                <span className="truncate">Create A Community</span>
              </a>
              {communityNav.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
                >
                  <item.icon className="text-muted-foreground size-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          {!navOpen ? (
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Show navigation"
              onClick={() => setNavOpen(true)}
              className="text-muted-foreground"
            >
              <PanelLeftIcon />
            </Button>
          ) : null}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Home
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">Updates</span>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden sm:block">
              <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
              <Input
                aria-label="Search"
                placeholder="Search"
                className="h-8 w-52 pl-8"
              />
            </div>
            <Button variant="outline">
              <FileTextIcon />
              Reports
            </Button>
            <Button className="gap-1">
              <PlusIcon />
              Add
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label="Open profile for Mira Stone"
                  className="rounded-full"
                >
                  <Avatar className="size-7">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"
                      alt="Mira Stone"
                    />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuLabel className="flex items-center gap-2 py-1.5">
                  <Avatar className="size-7">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"
                      alt="Mira Stone"
                    />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <span className="flex flex-col">
                    <span className="text-foreground text-sm font-medium">
                      Mira Stone
                    </span>
                    <span className="text-xs font-normal">Product Lead</span>
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon />
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  Preferences
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UsersIcon />
                  Manage Accounts
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <ThemeRow />
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon />
                  Sign Out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex flex-wrap items-center gap-2 border-b px-4 py-1.5">
          <Tabs value={view} onValueChange={setView}>
            <TabsList variant="line">
              {views.map((item) => (
                <TabsTrigger key={item.value} value={item.value} className="gap-1.5 px-2">
                  <item.icon className="size-4" />
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="ml-auto flex items-center gap-1">
            {[
              { id: "sort", label: "Sort", icon: SparklesIcon },
              { id: "view", label: "View", icon: InboxIcon },
              { id: "filter", label: "Filter", icon: FilterIcon },
            ].map((action) => (
              <Button
                key={action.id}
                variant="outline"
                size="sm"
                aria-pressed={activeAction === action.id}
                onClick={() =>
                  setActiveAction((current) =>
                    current === action.id ? null : action.id,
                  )
                }
                className="gap-1.5"
              >
                <action.icon />
                {action.label}
              </Button>
            ))}
            <Button variant="ghost" size="icon-sm" aria-label="Search views">
              <SearchIcon />
            </Button>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <div className="grid gap-4 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-muted/20 h-44 rounded-xl border" />
            ))}
          </div>
          <div className="bg-muted/20 min-h-72 flex-1 rounded-xl border" />
        </div>
      </div>
    </div>
  )
}

export default AppShellViewToolbarWorkspaceBlock
