import { useState } from "react"
import {
  BellIcon,
  BookOpenIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  CodeIcon,
  GlobeIcon,
  InboxIcon,
  LogOutIcon,
  MonitorIcon,
  MoonIcon,
  PanelLeftIcon,
  PlusIcon,
  SettingsIcon,
  SunIcon,
  UserIcon,
  ZapIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

const WORKSPACES = [
  { name: "Acme Inc", plan: "Pro", color: "bg-violet-500" },
  { name: "NovaCo", plan: "Free", color: "bg-blue-500" },
]
const PROJECTS = ["web-app", "mobile-app", "docs-site"]
const ENVIRONMENTS = [
  { name: "Production", color: "bg-emerald-500" },
  { name: "Preview", color: "bg-amber-500" },
  { name: "Development", color: "bg-violet-500" },
]
const THEMES = [
  { value: "light", icon: SunIcon, label: "Light" },
  { value: "dark", icon: MoonIcon, label: "Dark" },
  { value: "system", icon: MonitorIcon, label: "System" },
]

const USER = {
  name: "Nick Bold",
  email: "nick@reui.io",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
}

function SwitcherTrigger({ icon, label }: { icon?: React.ReactNode; label: string }) {
  return (
    <Button variant="ghost" className="h-8 gap-1.5 px-2 font-medium">
      {icon}
      {label}
      <ChevronsUpDownIcon className="text-muted-foreground size-3.5" />
    </Button>
  )
}

function ThemeRow() {
  const [theme, setTheme] = useState("light")
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
  )
}

export function Navbar3Block() {
  const [workspace, setWorkspace] = useState(WORKSPACES[0].name)
  const [project, setProject] = useState(PROJECTS[0])
  const [environment, setEnvironment] = useState(ENVIRONMENTS[0].name)
  const activeWorkspace = WORKSPACES.find((item) => item.name === workspace) ?? WORKSPACES[0]
  const activeEnvironment =
    ENVIRONMENTS.find((item) => item.name === environment) ?? ENVIRONMENTS[0]

  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-1 border-b px-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SwitcherTrigger
            icon={<span className={`size-2.5 shrink-0 rounded-full ${activeWorkspace.color}`} />}
            label={workspace}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-60">
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>
          {WORKSPACES.map((item) => (
            <DropdownMenuItem key={item.name} onSelect={() => setWorkspace(item.name)}>
              <span className={`size-2.5 shrink-0 rounded-full ${item.color}`} />
              <span className="flex min-w-0 flex-col">
                <span className="truncate">{item.name}</span>
                <span className="text-muted-foreground text-xs">{item.plan}</span>
              </span>
              {workspace === item.name ? <CheckIcon className="ml-auto" /> : null}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PlusIcon />
            Create Organization
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <span className="text-muted-foreground/60 px-1 text-sm">/</span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SwitcherTrigger icon={<GlobeIcon className="text-muted-foreground size-4" />} label={project} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Projects</DropdownMenuLabel>
          {PROJECTS.map((item) => (
            <DropdownMenuItem key={item} onSelect={() => setProject(item)}>
              <GlobeIcon />
              {item}
              {project === item ? <CheckIcon className="ml-auto" /> : null}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PlusIcon />
            Create project
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <span className="text-muted-foreground/60 px-1 text-sm">/</span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SwitcherTrigger
            icon={<span className={`size-2.5 shrink-0 rounded-full ${activeEnvironment.color}`} />}
            label={environment}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Environments</DropdownMenuLabel>
          {ENVIRONMENTS.map((item) => (
            <DropdownMenuItem key={item.name} onSelect={() => setEnvironment(item.name)}>
              <span className={`size-2.5 shrink-0 rounded-full ${item.color}`} />
              {item.name}
              {environment === item.name ? <CheckIcon className="ml-auto" /> : null}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="ml-auto flex items-center gap-1">
        <Button variant="ghost" size="icon-sm" aria-label="Toggle panel">
          <PanelLeftIcon />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="Help and settings">
              <SettingsIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem><BookOpenIcon />Documentation</DropdownMenuItem>
            <DropdownMenuItem><CodeIcon />API Reference</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><BellIcon />Notifications</DropdownMenuItem>
            <DropdownMenuItem><SettingsIcon />Appearance</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" className="gap-1.5 px-3">
          <ZapIcon className="fill-current" />
          Upgrade
        </Button>
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
            <DropdownMenuItem><InboxIcon />Inbox</DropdownMenuItem>
            <DropdownMenuItem><SettingsIcon />Settings</DropdownMenuItem>
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
  )
}

export default Navbar3Block
