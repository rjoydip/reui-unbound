import { useState } from "react"
import {
  ActivityIcon,
  CircleDotIcon,
  CodeXmlIcon,
  DownloadIcon,
  ShapesIcon,
  FileTextIcon,
  FilterIcon,
  HexagonIcon,
  InboxIcon,
  LogOutIcon,
  MailIcon,
  MonitorIcon,
  MoonIcon,
  NetworkIcon,
  NewspaperIcon,
  PanelLeftIcon,
  PlusIcon,
  RocketIcon,
  SearchIcon,
  SettingsIcon,
  SunIcon,
  TrendingUpIcon,
  UserCogIcon,
  UserIcon,
  UsersRoundIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

const general = [
  { label: "Dashboards", icon: RocketIcon },
  { label: "Public Profiles", icon: UsersRoundIcon, active: true },
  { label: "Account Settings", icon: UserCogIcon },
  { label: "Network", icon: NetworkIcon, badge: "Beta" },
  { label: "Authentication", icon: TrendingUpIcon },
]

const communities = [
  { label: "Designers Hub", icon: ShapesIcon },
  { label: "React Guild", icon: CodeXmlIcon },
  { label: "Node Runtime", icon: HexagonIcon },
]

const resources = [
  { label: "About ReUI", icon: DownloadIcon },
  { label: "Advertise", icon: FileTextIcon, badge: "Pro" },
  { label: "Help", icon: ActivityIcon },
  { label: "Blog", icon: NewspaperIcon },
  { label: "Community pulse", icon: CircleDotIcon },
]

function Dot() {
  return <span className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
}

function ThemeRow() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  return (
    <DropdownMenuItem
      onSelect={(event) => event.preventDefault()}
      className="justify-between"
    >
      <span className="flex items-center gap-1.5">
        <SunIcon className="rotate-0" />
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

export function AppShell13Block() {
  const [open, setOpen] = useState(true)

  return (
    <div className="bg-background flex min-h-svh flex-col">
      <header className="bg-background relative z-30 flex h-14 shrink-0 items-center gap-2 border-b px-3">
        <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md text-sm font-bold">
          U
        </span>
        <span className="text-sm font-semibold">ReUI</span>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Toggle sidebar"
          onClick={() => setOpen((value) => !value)}
          className="text-muted-foreground"
        >
          <PanelLeftIcon />
        </Button>

        <div className="mx-auto w-full max-w-lg">
          <div className="relative">
            <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
            <Input
              aria-label="Search ReUI"
              placeholder="Search ReUI"
              className="h-9 pl-8"
            />
          </div>
        </div>

        <div className="flex items-center gap-0.5">
          <Button variant="ghost" size="sm" className="gap-1">
            <PlusIcon />
            Create
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Messages"
            className="text-muted-foreground"
          >
            <MailIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Docs"
            className="text-muted-foreground"
          >
            <FileTextIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Settings"
            className="text-muted-foreground"
          >
            <SettingsIcon />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Open profile for Cal Reed"
                className="relative ml-1 rounded-full"
              >
                <Avatar className="size-7">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"
                    alt="Cal Reed"
                  />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <span className="ring-background absolute right-0 bottom-0 size-2 rounded-full bg-emerald-500 ring-2" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuLabel className="flex items-center gap-2 py-1.5">
                <Avatar className="size-7">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"
                    alt="Cal Reed"
                  />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <span className="flex flex-col">
                  <span className="text-foreground text-sm font-medium">
                    Cal Reed
                  </span>
                  <span className="text-xs font-normal">cal@reui.io</span>
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
                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <InboxIcon />
                Inbox
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

      <SidebarProvider open={open} onOpenChange={setOpen} className="min-h-0 flex-1">
        <Sidebar
          collapsible="icon"
          style={{ top: "3.5rem", height: "calc(100svh - 3.5rem)" }}
        >
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>General</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {general.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        isActive={item.active}
                        tooltip={item.label}
                      >
                        <item.icon />
                        <span>{item.label}</span>
                        {item.badge ? (
                          <Badge
                            size="sm"
                            variant={
                              item.badge === "Pro"
                                ? "success-light"
                                : "destructive-light"
                            }
                            className="ml-auto"
                          >
                            {item.badge}
                          </Badge>
                        ) : null}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Custom Feed</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Create a custom feed">
                      <PlusIcon />
                      <span>Create a custom feed</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {["New order received", "New customer registered"].map(
                    (item) => (
                      <SidebarMenuItem key={item}>
                        <SidebarMenuButton tooltip={item}>
                          <Dot />
                          <span>{item}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ),
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Communities</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Create a community">
                      <PlusIcon />
                      <span>Create a community</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {communities.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton tooltip={item.label}>
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Resources</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {resources.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton tooltip={item.label}>
                        <item.icon />
                        <span>{item.label}</span>
                        {item.badge ? (
                          <Badge
                            size="sm"
                            variant="success-light"
                            className="ml-auto"
                          >
                            {item.badge}
                          </Badge>
                        ) : null}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="min-w-0">
          <div className="flex flex-1 flex-col gap-6 p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="text-lg font-semibold">Community Feeds</h1>
                <p className="text-muted-foreground text-sm">
                  Manage your feed preferences and filters
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <FilterIcon />
                    Manage Feeds
                    <Badge size="sm" className="ml-1">
                      8
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuItem>
                    <FileTextIcon />
                    Saved Posts
                    <Badge size="sm" variant="secondary" className="ml-auto">
                      12
                    </Badge>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ActivityIcon />
                    Recent Activity
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TrendingUpIcon />
                    Trending Today
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <FilterIcon />
                      Filter Posts
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-44">
                      <DropdownMenuItem>Most recent</DropdownMenuItem>
                      <DropdownMenuItem>Most reactions</DropdownMenuItem>
                      <DropdownMenuItem>Most replies</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <CircleDotIcon />
                      View Options
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-44">
                      <DropdownMenuItem>Comfortable</DropdownMenuItem>
                      <DropdownMenuItem>Compact</DropdownMenuItem>
                      <DropdownMenuItem>Grid</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <MailIcon />
                    Notification Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SettingsIcon />
                    Feed Preferences
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-muted/30 h-44 rounded-xl border"
                />
              ))}
            </div>
            <div className="bg-muted/30 min-h-80 flex-1 rounded-xl border" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

export default AppShell13Block
