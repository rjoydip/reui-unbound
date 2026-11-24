import { useState } from "react"
import {
  BuildingIcon,
  CheckIcon,
  ChevronDownIcon,
  CircleHelpIcon,
  EllipsisIcon,
  FileTextIcon,
  FolderIcon,
  HomeIcon,
  HouseIcon,
  LogOutIcon,
  PlusIcon,
  SettingsIcon,
  SparklesIcon,
  SquareCheckIcon,
  StickyNoteIcon,
  UserIcon,
  UserPlusIcon,
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
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const workspaces = [
  { name: "Mint", tone: "bg-emerald-500" },
  { name: "Studio", tone: "bg-violet-500" },
  { name: "Nova", tone: "bg-pink-500" },
]

const navItems = [
  { label: "Dashboard", icon: HouseIcon, active: true },
  { label: "Tasks", icon: SquareCheckIcon, count: 3, pinnable: true },
  { label: "Notes", icon: StickyNoteIcon },
  { label: "Contacts", icon: UsersIcon },
  { label: "Companies", icon: BuildingIcon },
  { label: "Company", icon: FolderIcon },
]

const favorites = [
  { label: "New task", icon: SquareCheckIcon, workspace: "Mint" },
  { label: "New deal", icon: FileTextIcon, workspace: "Studio" },
  { label: "Recent note", icon: StickyNoteIcon, workspace: "Nova" },
  { label: "Lead added", icon: FileTextIcon, workspace: "Orbit" },
]

const teamAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
]

function WorkspaceMark({
  name,
  tone,
  className,
}: {
  name: string
  tone: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold text-white",
        tone,
        className,
      )}
    >
      {name.slice(0, 1)}
    </span>
  )
}

export function AppShell15Block() {
  const [tasksPinned, setTasksPinned] = useState(true)
  const [favoritesOpen, setFavoritesOpen] = useState(true)

  return (
    <div className="bg-background flex min-h-svh flex-col">
      <header className="sticky top-0 z-40 flex h-11 shrink-0 items-center gap-2 bg-zinc-950 px-3 text-zinc-50">
        <span className="flex size-6 items-center justify-center rounded-md bg-white text-xs font-bold text-zinc-950">
          U
        </span>
        <span className="text-sm font-semibold">ReUI</span>
        <div className="ml-auto flex items-center gap-1.5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Help"
                className="text-zinc-400 hover:bg-white/10 hover:text-zinc-50 dark:hover:bg-white/10"
              >
                <CircleHelpIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem>
                <CircleHelpIcon />
                Help Center
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileTextIcon />
                Release Notes
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserPlusIcon />
                Contact Support
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                className="gap-1 border-0 bg-violet-600 text-white hover:bg-violet-500"
              >
                <SparklesIcon />
                Upgrade
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>Plan Options</DropdownMenuLabel>
              <DropdownMenuItem>
                <UsersIcon />
                Team Plan
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserPlusIcon />
                Add Seats
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SettingsIcon />
                Billing Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 border-zinc-700 bg-zinc-900 text-zinc-50 hover:bg-zinc-800 hover:text-zinc-50 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <PlusIcon />
                New
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem>
                <SquareCheckIcon />
                Task
              </DropdownMenuItem>
              <DropdownMenuItem>
                <StickyNoteIcon />
                Note
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BuildingIcon />
                Company
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="mx-1 h-5 w-px bg-white/15" aria-hidden />

          <div className="flex items-center -space-x-1.5">
            {teamAvatars.map((src, index) => (
              <Avatar key={src} className="ring-zinc-950 size-6 ring-2">
                <AvatarImage src={src} alt={`Team member ${index + 1}`} />
                <AvatarFallback className="text-[10px]">TM</AvatarFallback>
              </Avatar>
            ))}
            <span className="ring-zinc-950 bg-zinc-800 text-zinc-300 flex size-6 items-center justify-center rounded-full text-[10px] font-medium ring-2">
              12
            </span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Open account menu"
                className="ml-1 rounded-full"
              >
                <Avatar className="size-6">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80"
                    alt="Nick Bold"
                  />
                  <AvatarFallback>NB</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem>
                <UserIcon />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <SidebarProvider className="min-h-0 flex-1">
        <Sidebar
          collapsible="icon"
          style={{ top: "2.75rem", height: "calc(100svh - 2.75rem)" }}
        >
          <SidebarHeader className="flex-row items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="min-w-0">
                  <WorkspaceMark name="Mint" tone="bg-emerald-500" className="size-7" />
                  <span className="truncate text-sm font-semibold">Mint</span>
                  <ChevronDownIcon className="text-muted-foreground ml-1 size-3.5 shrink-0" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-60">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>
                  <UserIcon />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SparklesIcon />
                  Upgrade
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOutIcon />
                  Sign Out
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                {workspaces.map((workspace) => (
                  <DropdownMenuItem key={workspace.name} className="gap-2">
                    <WorkspaceMark name={workspace.name} tone={workspace.tone} />
                    <span className="text-sm">{workspace.name}</span>
                    {workspace.name === "Mint" ? (
                      <CheckIcon className="ml-auto" />
                    ) : null}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusIcon />
                  New Workspace
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  Workspace Settings
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SidebarTrigger className="text-muted-foreground ml-auto" />
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems
                    .filter((item) => item.label !== "Tasks" || tasksPinned)
                    .map((item) => (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton
                          isActive={item.active}
                          tooltip={item.label}
                        >
                          <item.icon />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                        {item.count ? (
                          <SidebarMenuBadge>
                            <Badge size="sm">{item.count}</Badge>
                          </SidebarMenuBadge>
                        ) : null}
                        {item.label === "Tasks" ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <SidebarMenuAction showOnHover>
                                <EllipsisIcon />
                              </SidebarMenuAction>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-52">
                              <DropdownMenuLabel>Tasks</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <PlusIcon />
                                Add Task
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileTextIcon />
                                Design Review
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileTextIcon />
                                Release Follow-up
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onSelect={() => setTasksPinned(false)}
                              >
                                <ZapIcon />
                                Unpin From Sidebar
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : null}
                      </SidebarMenuItem>
                    ))}
                  <SidebarMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuButton tooltip="More">
                          <EllipsisIcon />
                          <span>More</span>
                        </SidebarMenuButton>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        <DropdownMenuItem
                          onSelect={() => setTasksPinned(true)}
                        >
                          <SquareCheckIcon />
                          Pin Tasks to sidebar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <SettingsIcon />
                          Manage Favorites
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <SparklesIcon />
                          Preferences
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <Collapsible
                open={favoritesOpen}
                onOpenChange={setFavoritesOpen}
                className="group/favorites"
              >
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex w-full items-center gap-1">
                    Favorites
                    <ChevronDownIcon
                      className={cn(
                        "ml-auto size-3.5 transition-transform",
                        !favoritesOpen && "-rotate-90",
                      )}
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {favorites.map((item) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton tooltip={item.label}>
                            <item.icon />
                            <span>{item.label}</span>
                            <span className="text-muted-foreground ml-auto truncate text-xs">
                              {item.workspace}
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

          <SidebarFooter className="p-0">
            <div className="grid grid-cols-2 border-t">
              <SidebarMenuButton className="h-11 justify-center rounded-none">
                <UserPlusIcon />
                <span>Invite</span>
              </SidebarMenuButton>
              <SidebarMenuButton className="h-11 justify-center rounded-none border-l">
                <CircleHelpIcon />
                <span>Help</span>
              </SidebarMenuButton>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="min-w-0">
          <header className="flex h-14 shrink-0 items-center gap-2 px-4">
            <span className="flex items-center gap-2 text-sm font-medium">
              <HomeIcon className="size-4" />
              Dashboard
            </span>
            <Button variant="outline" size="sm" className="ml-auto gap-1.5">
              <FileTextIcon />
              Reports
            </Button>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid gap-4 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-muted/30 h-44 rounded-xl border"
                />
              ))}
            </div>
            <div className="bg-muted/30 min-h-72 flex-1 rounded-xl border" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

export default AppShell15Block
