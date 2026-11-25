import { useState } from "react"
import {
  BellIcon,
  BriefcaseIcon,
  CheckCheckIcon,
  DownloadIcon,
  FileTextIcon,
  KeyRoundIcon,
  LogOutIcon,
  MonitorIcon,
  MoonIcon,
  RocketIcon,
  SettingsIcon,
  ShapesIcon,
  SunIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { Rating } from "@/components/kit/rating"
import { cn } from "cn"

const AGENT_CATEGORIES = ["All", "Code", "Research", "Data"]

const USER = {
  name: "Nick Bold",
  email: "nick@reui.io",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
}

const THEMES = [
  { value: "light", icon: SunIcon, label: "Light" },
  { value: "dark", icon: MoonIcon, label: "Dark" },
  { value: "system", icon: MonitorIcon, label: "System" },
]

function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Open notifications" className="relative">
          <BellIcon />
          <span className="bg-destructive absolute top-1 right-1.5 size-1.5 rounded-full" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[22rem] gap-0 p-0">
        <div className="flex items-center gap-2 border-b px-3 py-2.5">
          <span className="text-sm font-semibold">Notifications</span>
          <Badge size="sm" className="rounded-full">3</Badge>
          <Button variant="ghost" size="icon-xs" aria-label="Mark all as read" className="ml-auto">
            <CheckCheckIcon />
          </Button>
        </div>
        <div className="max-h-[24rem] overflow-y-auto [scrollbar-width:thin]">
          <div className="flex gap-2.5 border-b p-3">
            <Avatar className="size-7">
              <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" alt="" />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 space-y-1 text-sm">
              <p className="text-muted-foreground">
                <span className="text-foreground">@sarah_smith</span> mentioned you in #PR-1024
              </p>
              <p className="text-muted-foreground">"Can you review the changes?"</p>
              <p className="text-muted-foreground text-xs">2m ago</p>
            </div>
          </div>
          <div className="flex gap-2.5 border-b p-3">
            <span className="bg-warning/15 text-warning-foreground flex size-7 shrink-0 items-center justify-center rounded-full">
              <CheckCheckIcon className="size-4" />
            </span>
            <div className="min-w-0 flex-1 space-y-1.5 text-sm">
              <p>Pending approval</p>
              <p className="text-muted-foreground">Design System v2.0 release requires your approval before deployment.</p>
              <div className="flex items-center gap-1.5">
                <Button size="sm">Approve</Button>
                <Button variant="outline" size="sm">Review</Button>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-muted-foreground">5m ago</span>
                <span className="text-muted-foreground flex items-center gap-1.5">
                  Priority <Badge variant="warning-light" size="sm">High</Badge>
                </span>
              </div>
            </div>
            <span className="bg-foreground mt-1 size-1.5 shrink-0 rounded-full" />
          </div>
          <div className="flex gap-2.5 border-b p-3">
            <Avatar className="size-7">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" alt="" />
              <AvatarFallback>MV</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 space-y-1.5 text-sm">
              <p className="text-muted-foreground"><span className="text-foreground">@maverick</span> shared <span className="text-foreground">Project Timeline</span></p>
              <div className="border-border inline-flex items-center gap-2 rounded-md border px-2 py-1 text-xs">
                <FileTextIcon className="size-3.5" />
                project-plan.pdf (2mb)
                <DownloadIcon className="size-3.5" />
              </div>
              <p className="text-muted-foreground text-xs">15m ago</p>
            </div>
            <span className="bg-foreground mt-1 size-1.5 shrink-0 rounded-full" />
          </div>
          <div className="flex gap-2.5 border-b p-3">
            <Avatar className="size-7">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80" alt="" />
              <AvatarFallback>LK</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 space-y-1.5 text-sm">
              <p className="text-muted-foreground"><span className="text-foreground">@lisa_k</span> rated your agent</p>
              <Rating rating={4} size="sm" />
              <p className="text-muted-foreground text-xs">1h ago</p>
            </div>
          </div>
          <div className="flex gap-2.5 p-3">
            <span className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-full">
              <RocketIcon className="size-4" />
            </span>
            <div className="min-w-0 flex-1 space-y-1.5 text-sm">
              <p>Deployment progress</p>
              <p className="text-muted-foreground">Agentflow-prod is rolling out to 12 regions.</p>
              <Progress value={72} className="h-1.5" />
              <p className="text-muted-foreground text-xs">2h ago</p>
            </div>
          </div>
        </div>
        <div className="border-t p-2">
          <Button variant="ghost" size="sm" className="w-full">View all notifications</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function UserMenu() {
  const [theme, setTheme] = useState("light")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="rounded-full" aria-label="Open profile">
          <Avatar className="size-7">
            <AvatarImage src={USER.avatar} alt="" />
            <AvatarFallback>NB</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <Avatar>
            <AvatarImage src={USER.avatar} alt="" />
            <AvatarFallback>NB</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{USER.name}</p>
            <p className="text-muted-foreground truncate text-xs">{USER.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem><UserIcon />Profile<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuItem><UsersIcon />My Agents</DropdownMenuItem>
        <DropdownMenuItem><BriefcaseIcon />Usage</DropdownMenuItem>
        <DropdownMenuItem><KeyRoundIcon />API Keys</DropdownMenuItem>
        <DropdownMenuItem><SettingsIcon />Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={(event) => event.preventDefault()} className="justify-between">
          <span className="flex items-center gap-1.5"><SunIcon />Theme</span>
          <span className="flex items-center gap-0.5">
            {THEMES.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-label={`${option.label} theme`}
                aria-pressed={theme === option.value}
                onClick={(event) => {
                  event.stopPropagation()
                  setTheme(option.value)
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
        <DropdownMenuSeparator />
        <DropdownMenuItem><LogOutIcon />Sign Out<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function NavbarAgentMarketplaceBlock() {
  const [active, setActive] = useState("All")

  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-3 border-b px-4">
      <div className="flex items-center gap-2">
        <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg">
          <ShapesIcon className="size-4" />
        </span>
        <span className="text-sm font-semibold">Agentflow</span>
      </div>

      <div className="flex flex-1 justify-center">
        <div
          role="tablist"
          aria-label="Agent categories"
          className="border-border flex items-center divide-x divide-border rounded-lg border p-0.5"
        >
          {AGENT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={cn(
                "h-7 rounded-md px-2.5 text-sm font-medium transition-colors",
                active === category
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <Button size="sm"><RocketIcon />Deploy</Button>
        <NotificationsPopover />
        <UserMenu />
      </div>
    </header>
  )
}

export default NavbarAgentMarketplaceBlock
