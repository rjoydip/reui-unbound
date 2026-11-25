import { useEffect, useState } from "react"
import {
  BellIcon,
  CheckCheckIcon,
  DownloadIcon,
  FileTextIcon,
  InboxIcon,
  LogOutIcon,
  MonitorIcon,
  MoonIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShapesIcon,
  SunIcon,
  UserIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { Rating } from "@/components/kit/rating"

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

type Notification = {
  id: number
  author: string
  avatar?: string
  title: string
  body?: string
  time: string
  unread?: boolean
  kind?: "mention" | "approval" | "file" | "rating" | "progress"
  progress?: number
  rating?: number
}

const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    author: "@sarah_smith",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
    title: "mentioned you in #PR-1024",
    body: '"Can you review the changes?"',
    time: "2m ago",
    kind: "mention",
  },
  {
    id: 2,
    author: "Pending approval",
    title: "",
    body: "Design System v2.0 release requires your approval before deployment.",
    time: "5m ago",
    unread: true,
    kind: "approval",
  },
  {
    id: 3,
    author: "@maverick shared",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
    title: "Project Timeline",
    time: "15m ago",
    unread: true,
    kind: "file",
  },
  {
    id: 4,
    author: "@lisa rated the new dashboard",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
    title: "",
    time: "32m ago",
    kind: "rating",
  },
  {
    id: 5,
    author: "Migration progress",
    title: "",
    body: "Workspace migration is 68% complete. 341 of 502 files copied.",
    time: "1h ago",
    kind: "progress",
  },
  {
    id: 6,
    author: "@team-lead assigned you",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80",
    title: "Billing settings review",
    body: "Due tomorrow at 5:00 PM",
    time: "2h ago",
    kind: "mention",
  },
]

function NotificationIcon({ kind }: { kind: Notification["kind"] }) {
  if (kind === "approval") {
    return (
      <span className="bg-warning/15 text-warning-foreground flex size-7 shrink-0 items-center justify-center rounded-full">
        <CheckCheckIcon className="size-4" />
      </span>
    )
  }
  return null
}

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
          {NOTIFICATIONS.map((item) => (
            <div key={item.id} className="flex gap-2.5 border-b p-3 last:border-b-0">
              {item.kind === "approval" ? (
                <NotificationIcon kind={item.kind} />
              ) : item.avatar ? (
                <Avatar className="size-7">
                  <AvatarImage src={item.avatar} alt="" />
                  <AvatarFallback>NB</AvatarFallback>
                </Avatar>
              ) : (
                <span className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-full">
                  <FileTextIcon className="size-4" />
                </span>
              )}
              <div className="min-w-0 flex-1 space-y-1.5 text-sm">
                <p className="text-muted-foreground">
                  {item.author}{" "}
                  {item.title ? <span className="text-foreground">{item.title}</span> : null}
                </p>
                {item.body ? <p className="text-muted-foreground">{item.body}</p> : null}
                {item.kind === "approval" ? (
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <Button size="sm">Approve</Button>
                    <Button variant="outline" size="sm">Review</Button>
                  </div>
                ) : null}
                {item.kind === "file" ? (
                  <div className="border-border inline-flex items-center gap-2 rounded-md border px-2 py-1 text-xs">
                    <FileTextIcon className="size-3.5" />
                    project-plan.pdf (2mb)
                    <DownloadIcon className="size-3.5" />
                  </div>
                ) : null}
                {item.kind === "rating" ? <Rating rating={4} size="sm" /> : null}
                {item.kind === "progress" ? <Progress value={item.progress ?? 68} className="h-1.5" /> : null}
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-muted-foreground">{item.time}</span>
                  {item.kind === "approval" ? (
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      Priority <Badge variant="warning-light" size="sm">High</Badge>
                    </span>
                  ) : null}
                </div>
              </div>
              {item.unread ? <span className="bg-foreground mt-1 size-1.5 shrink-0 rounded-full" /> : null}
            </div>
          ))}
        </div>
        <div className="border-t p-2">
          <Button variant="ghost" size="sm" className="w-full">View all notifications</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [query, setQuery] = useState("")
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="sr-only">
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="border-b p-2">
          <Input
            autoFocus
            placeholder="Type a command or search…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search"
          />
        </div>
        <div className="text-muted-foreground p-6 text-center text-sm">
          {query ? `No results for “${query}”` : "Start typing to search pages, projects and people."}
        </div>
      </DialogContent>
    </Dialog>
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
        <DropdownMenuItem><InboxIcon />Inbox</DropdownMenuItem>
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

export function Navbar4Block() {
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setSearchOpen((value) => !value)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-3 border-b px-4">
      <div className="flex items-center gap-2">
        <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg">
          <ShapesIcon className="size-4" />
        </span>
        <span className="text-sm font-semibold">ReUI Admin</span>
      </div>

      <div className="flex flex-1 justify-center">
        <Button
          variant="outline"
          className="text-muted-foreground h-8 w-full max-w-96 justify-start gap-2 px-2.5 font-normal"
          onClick={() => setSearchOpen(true)}
        >
          <SearchIcon className="size-4" />
          Search or jump to…
          <span className="ml-auto flex items-center gap-1">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </span>
        </Button>
      </div>

      <div className="flex items-center gap-1.5">
        <Button size="sm"><PlusIcon />New</Button>
        <NotificationsPopover />
        <UserMenu />
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}

export default Navbar4Block
