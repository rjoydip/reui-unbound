import { useState } from "react"
import {
  CheckIcon,
  CodeXmlIcon,
  LogOutIcon,
  MonitorIcon,
  MoonIcon,
  SettingsIcon,
  ShapesIcon,
  SunIcon,
  UserIcon,
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TABS = ["Patterns", "Tokens", "Icons", "Motion"]

const SYNC_SOURCES = [
  {
    id: "shadcn",
    label: "shadcn/ui Tokens",
    icon: <CodeXmlIcon className="size-4" />,
  },
  {
    id: "cursor",
    label: "Cursor Workspace",
    icon: <span className="bg-foreground flex size-4 items-center justify-center rounded-[4px] text-[9px] font-bold text-background">C</span>,
  },
  {
    id: "paper",
    label: "Paper Source",
    icon: <span className="bg-sky-500 size-3.5 rounded-[3px]" />,
  },
]

const USER = {
  name: "Nick Bold",
  email: "dev@devportal.io",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
}

const THEMES = [
  { value: "light", icon: SunIcon, label: "Light" },
  { value: "dark", icon: MoonIcon, label: "Dark" },
  { value: "system", icon: MonitorIcon, label: "System" },
]

export function Navbar11Block() {
  const [tab, setTab] = useState("patterns")
  const [source, setSource] = useState("shadcn")
  const [theme, setTheme] = useState("light")
  const activeSource = SYNC_SOURCES.find((item) => item.id === source) ?? SYNC_SOURCES[0]

  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-2 border-b px-4">
      <div className="flex items-center gap-2">
        <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg">
          <ShapesIcon className="size-4" />
        </span>
        <span className="text-sm font-semibold">DesignOps</span>
        <Badge variant="outline" size="sm">v3.2.1</Badge>
      </div>

      <div className="flex flex-1 justify-center">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            {TABS.map((item) => (
              <TabsTrigger key={item} value={item.toLowerCase()} className="px-3">
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center gap-1.5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" className="gap-1.5">
              <CodeXmlIcon />
              {activeSource.label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>Sync from</DropdownMenuLabel>
            {SYNC_SOURCES.map((item) => (
              <DropdownMenuItem key={item.id} onSelect={() => setSource(item.id)}>
                {item.icon}
                <span className="flex flex-col">
                  {item.label.split(" ")[0]}
                  <span className="text-muted-foreground text-xs">
                    {item.label.split(" ").slice(1).join(" ")}
                  </span>
                </span>
                {source === item.id ? <CheckIcon className="ml-auto" /> : null}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" className="ml-1 rounded-full" aria-label="Open profile">
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
            <DropdownMenuItem><ShapesIcon />Documentation</DropdownMenuItem>
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
      </div>
    </header>
  )
}

export default Navbar11Block
