import { useState } from "react"
import {
  CheckIcon,
  ChevronDownIcon,
  DatabaseIcon,
  MonitorIcon,
  MoonIcon,
  PlusIcon,
  ShapesIcon,
  SparklesIcon,
  SunIcon,
  ZapIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const API_SERVICES = [
  { id: "openai", label: "OpenAI API", icon: <ShapesIcon className="size-4" /> },
  {
    id: "stripe",
    label: "Stripe API",
    icon: <span className="bg-violet-600 h-2.5 w-4 rounded-[2px]" />,
  },
  {
    id: "supabase",
    label: "Supabase API",
    icon: <ZapIcon className="size-4 fill-emerald-500 text-emerald-500" />,
  },
]

const METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"]

const USER = {
  name: "Nick Bold",
  email: "nick@reui.io",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
}

const THEMES = [
  { value: "light", icon: SunIcon, label: "Light" },
  { value: "dark", icon: MoonIcon, label: "Dark" },
  { value: "system", icon: MonitorIcon, label: "System" },
]

export function Navbar10Block() {
  const [service, setService] = useState("openai")
  const [method, setMethod] = useState("GET")
  const [path, setPath] = useState("/models/(id)")
  const [theme, setTheme] = useState("light")
  const activeService = API_SERVICES.find((item) => item.id === service) ?? API_SERVICES[0]

  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-2 border-b px-3">
      <div className="flex items-center gap-2">
        <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg">
          <ShapesIcon className="size-4" />
        </span>
        <span className="text-sm font-semibold">DevPortal</span>
      </div>

      <span className="bg-border mx-1 h-5 w-px" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1.5">
            {activeService.icon}
            {activeService.label}
            <ChevronDownIcon className="text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>API Services</DropdownMenuLabel>
          {API_SERVICES.map((item) => (
            <DropdownMenuItem key={item.id} onSelect={() => setService(item.id)}>
              {item.icon}
              {item.label}
              {service === item.id ? <CheckIcon className="ml-auto" /> : null}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem><PlusIcon />Connect service</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="ml-auto flex items-center gap-2">
        <ButtonGroup>
          <Select value={method} onValueChange={setMethod}>
            <SelectTrigger size="sm" className="w-24 font-medium" aria-label="HTTP method">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {METHODS.map((item) => (
                <SelectItem key={item} value={item}>{item}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            value={path}
            onChange={(event) => setPath(event.target.value)}
            aria-label="Request path"
            className="w-40 font-mono text-xs"
          />
        </ButtonGroup>
        <Button size="sm">Send</Button>

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
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem><DatabaseIcon />Usage</DropdownMenuItem>
            <DropdownMenuItem><SparklesIcon />API keys</DropdownMenuItem>
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Navbar10Block
