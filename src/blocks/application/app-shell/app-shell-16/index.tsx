import { useState, type ReactNode } from "react"
import {
  CalendarIcon,
  ChartColumnIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
  DownloadIcon,
  ExternalLinkIcon,
  FileTextIcon,
  FolderIcon,
  HexagonIcon,
  HouseIcon,
  InboxIcon,
  LogOutIcon,
  MailIcon,
  MonitorIcon,
  MoonIcon,
  NewspaperIcon,
  PanelLeftIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  SunIcon,
  UserIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { cn } from "cn"
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

const railItems = [
  { id: "home", label: "Home", icon: HouseIcon },
  { id: "analytics", label: "Analytics", icon: ChartColumnIcon, active: true },
  { id: "settings", label: "Settings", icon: SettingsIcon },
  { id: "team", label: "Team", icon: UsersIcon },
  { id: "security", label: "Security", icon: ShieldIcon },
  { id: "projects", label: "Projects", icon: FolderIcon },
  { id: "docs", label: "Docs", icon: FileTextIcon },
]

const navItems = [
  { label: "Home", icon: HouseIcon },
  { label: "Updates", icon: UsersIcon, active: true },
  { label: "Inbox", icon: InboxIcon },
  { label: "Clients", icon: UserIcon, badge: "Beta" },
  { label: "My Tasks", icon: ChartColumnIcon },
]

const workspaceItems = [
  { label: "Business Concepts", icon: FolderIcon },
  { label: "KeenThemes Studio", icon: ZapIcon },
  { label: "Teams", icon: UsersIcon, badge: "Pro" },
  { label: "Reports", icon: ChartColumnIcon },
]

const communities = [
  { label: "Designers Hub", icon: ZapIcon, tone: "text-rose-500" },
  { label: "React Js", icon: CodeXmlIcon, tone: "text-sky-500" },
  { label: "Node Js", icon: HexagonIcon, tone: "text-emerald-500" },
]

const resources = [
  { label: "About Metronic", icon: DownloadIcon },
  { label: "Advertise", icon: FileTextIcon, badge: "Pro" },
  { label: "Help", icon: ExternalLinkIcon },
  { label: "Blog", icon: NewspaperIcon },
  { label: "Careers", icon: FolderIcon },
  { label: "Press", icon: NewspaperIcon },
]

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

function SectionLabel({
  children,
  open,
}: {
  children: ReactNode
  open: boolean
}) {
  return (
    <span className="text-muted-foreground flex w-full items-center gap-1 px-2 pt-3 pb-1 text-xs font-medium">
      {children}
      <ChevronDownIcon
        className={cn(
          "ml-auto size-3.5 transition-transform",
          !open && "-rotate-90",
        )}
      />
    </span>
  )
}

export function AppShell16Block() {
  const [navOpen, setNavOpen] = useState(true)
  const [communitiesOpen, setCommunitiesOpen] = useState(true)
  const [resourcesOpen, setResourcesOpen] = useState(true)

  return (
    <div className="bg-muted/40 flex h-svh w-full gap-2 p-2">
      <aside className="flex w-12 shrink-0 flex-col items-center gap-1 rounded-xl bg-zinc-950 py-2">
        <span className="mb-2 flex size-7 items-center justify-center rounded-md bg-white text-sm font-bold text-zinc-950">
          U
        </span>
        {railItems.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            className={cn(
              "flex size-8 items-center justify-center rounded-md transition-colors",
              item.active
                ? "bg-white/15 text-white"
                : "text-zinc-500 hover:bg-white/10 hover:text-white",
            )}
          >
            <item.icon className="size-4" />
          </button>
        ))}
        <div className="mt-auto flex flex-col items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Inbox"
                className="flex size-8 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-white/10 hover:text-white"
              >
                <MailIcon className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="right" className="w-44">
              <DropdownMenuItem>Inbox</DropdownMenuItem>
              <DropdownMenuItem>Mentions</DropdownMenuItem>
              <DropdownMenuItem>Direct Messages</DropdownMenuItem>
              <DropdownMenuItem>Digest</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Calendar"
                className="flex size-8 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-white/10 hover:text-white"
              >
                <CalendarIcon className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="right" className="w-44">
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>Next 7 days</DropdownMenuItem>
              <DropdownMenuItem>Next 30 days</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            type="button"
            aria-label="Settings"
            className="flex size-8 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-white/10 hover:text-white"
          >
            <SettingsIcon className="size-4" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Open profile for Chris Dale"
                className="mt-1 rounded-full"
              >
                <Avatar className="size-7">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"
                    alt="Chris Dale"
                  />
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="right" className="w-60">
              <DropdownMenuLabel className="flex items-center gap-2 py-1.5">
                <Avatar className="size-8">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"
                    alt="Chris Dale"
                  />
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <span className="flex flex-col">
                  <span className="text-foreground text-sm font-medium">
                    Chris Dale
                  </span>
                  <span className="text-xs font-normal">
                    chris@thunder.example
                  </span>
                </span>
              </DropdownMenuLabel>
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
      </aside>

      {navOpen ? (
        <aside className="bg-background flex w-64 shrink-0 flex-col overflow-hidden rounded-xl border">
          <div className="flex h-14 shrink-0 items-center gap-2 border-b px-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-linear-to-b from-emerald-400 to-teal-600 text-white">
              <ZapIcon className="size-4" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-semibold">Thunder AI</span>
              <span className="text-muted-foreground truncate text-xs">
                8 members
              </span>
            </span>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Switch workspace"
              className="ml-auto text-muted-foreground"
            >
              <ChevronsUpDownIcon />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            <nav className="flex flex-col gap-0.5">
              {navItems.map((item) => (
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
                    <Badge size="sm" variant="destructive-light" className="ml-auto">
                      {item.badge}
                    </Badge>
                  ) : null}
                </a>
              ))}
            </nav>

            <div className="text-muted-foreground flex items-center px-2 pt-3 pb-1 text-xs font-medium">
              Workspaces
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Add workspace"
                className="text-muted-foreground ml-auto"
              >
                <PlusIcon />
              </Button>
            </div>
            <nav className="flex flex-col gap-0.5">
              {workspaceItems.map((item) => (
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

            <Collapsible open={communitiesOpen} onOpenChange={setCommunitiesOpen}>
              <CollapsibleTrigger className="w-full">
                <SectionLabel open={communitiesOpen}>Communities</SectionLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <nav className="flex flex-col gap-0.5">
                  <a
                    href="#"
                    className="hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
                  >
                    <PlusIcon className="text-muted-foreground size-4 shrink-0" />
                    Create a community
                  </a>
                  {communities.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className="hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
                    >
                      <item.icon className={cn("size-4 shrink-0", item.tone)} />
                      <span className="truncate">{item.label}</span>
                    </a>
                  ))}
                </nav>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={resourcesOpen} onOpenChange={setResourcesOpen}>
              <CollapsibleTrigger className="w-full">
                <SectionLabel open={resourcesOpen}>Resources</SectionLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <nav className="flex flex-col gap-0.5">
                  {resources.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className="hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
                    >
                      <item.icon className="text-muted-foreground size-4 shrink-0" />
                      <span className="truncate">{item.label}</span>
                      {item.badge ? (
                        <Badge
                          size="sm"
                          variant="success-light"
                          className="ml-auto"
                        >
                          {item.badge}
                        </Badge>
                      ) : null}
                    </a>
                  ))}
                </nav>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </aside>
      ) : null}

      <main className="bg-background flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border">
        <div className="flex-1 overflow-y-auto">
          <header className="flex flex-wrap items-start gap-3 p-4">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Toggle navigation"
              onClick={() => setNavOpen((value) => !value)}
              className="text-muted-foreground"
            >
              <PanelLeftIcon />
            </Button>
            <div className="min-w-0">
              <h1 className="text-lg font-semibold">Updates</h1>
              <nav
                aria-label="Breadcrumb"
                className="text-muted-foreground flex items-center gap-1 text-xs"
              >
                <a href="#" className="hover:text-foreground">
                  Home
                </a>
                <span>/</span>
                <a href="#" className="hover:text-foreground">
                  Account
                </a>
                <span>/</span>
                <span className="text-foreground">Updates</span>
              </nav>
            </div>
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
            </div>
          </header>

          <div className="flex flex-col gap-4 px-4 pb-4">
            <div className="grid gap-4 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-muted/20 h-44 rounded-xl border" />
              ))}
            </div>
            <div className="bg-muted/20 min-h-72 flex-1 rounded-xl border" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppShell16Block
