import { useState } from "react"
import {
  BotIcon,
  ClipboardListIcon,
  LayoutGridIcon,
  LogOutIcon,
  MapIcon,
  MonitorIcon,
  MoonIcon,
  RadioIcon,
  ScanLineIcon,
  SearchIcon,
  ShieldIcon,
  SunIcon,
  UsersIcon,
  WorkflowIcon,
  type LucideIcon,
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
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

const railItems: { label: string; icon: LucideIcon }[] = [
  { label: "Overview", icon: LayoutGridIcon },
  { label: "Fleet", icon: WorkflowIcon },
  { label: "Network", icon: MapIcon },
  { label: "Signals", icon: RadioIcon },
  { label: "Missions", icon: BotIcon },
  { label: "Automations", icon: ScanLineIcon },
  { label: "Crew", icon: UsersIcon },
  { label: "Security", icon: ShieldIcon },
  { label: "Logs", icon: ClipboardListIcon },
]

const workspaceTabs = [
  { value: "operations", label: "Operations" },
  { value: "structure", label: "Structure" },
  { value: "insights", label: "Insights" },
]

const folderShape = {
  clipPath: "polygon(0 0, 100% 0, 93% 100%, 7% 100%)",
}

function Wash() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-fuchsia-300/35 dark:bg-fuchsia-500/10 absolute -top-32 -left-24 size-[420px] rounded-full blur-3xl" />
      <div className="bg-emerald-300/30 dark:bg-emerald-500/10 absolute -top-24 right-1/3 size-[360px] rounded-full blur-3xl" />
      <div className="bg-amber-200/40 dark:bg-amber-500/10 absolute -right-20 top-1/3 size-[340px] rounded-full blur-3xl" />
      <div className="bg-violet-300/30 dark:bg-violet-500/10 absolute bottom-0 left-1/4 size-[380px] rounded-full blur-3xl" />
      <div className="bg-sky-300/25 dark:bg-sky-500/10 absolute right-0 bottom-0 size-[300px] rounded-full blur-3xl" />
      <div className="bg-rose-200/30 dark:bg-rose-500/10 absolute bottom-1/4 left-0 size-[280px] rounded-full blur-3xl" />
    </div>
  )
}

function RailButton({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string
  icon: LucideIcon
  active: boolean
  onClick: () => void
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={onClick}
          aria-label={label}
          aria-pressed={active}
          className={cn(
            "text-muted-foreground hover:text-foreground flex size-8 items-center justify-center rounded-lg transition-colors",
            active &&
              "bg-background text-foreground ring-border shadow-sm ring-1",
          )}
        >
          <Icon className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  )
}

function SkeletonGrid() {
  return (
    <>
      <div className="grid gap-3 xl:grid-cols-[280px_1fr]">
        <div className="grid grid-cols-2 gap-3">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="bg-background/50 rounded-xl border p-3">
              <Skeleton className="h-2.5 w-1/2" />
              <Skeleton className="mt-3 h-20 w-full rounded-lg" />
            </div>
          ))}
        </div>
        <div className="bg-background/50 rounded-xl border p-4">
          <Skeleton className="h-2.5 w-2/3" />
          <Skeleton className="mt-2 h-2.5 w-1/3" />
          <Skeleton className="mt-4 h-40 w-full rounded-lg" />
        </div>
      </div>
      <div className="bg-background/50 mt-3 rounded-xl border p-4">
        <Skeleton className="h-2.5 w-3/4" />
        <Skeleton className="mt-2 h-2.5 w-1/2" />
        <Skeleton className="mt-4 h-36 w-full rounded-lg" />
      </div>
    </>
  )
}

export default function AppShell31Block() {
  const [railItem, setRailItem] = useState("Overview")
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light")

  return (
    <TooltipProvider>
      <div className="bg-background relative flex min-h-svh gap-3 overflow-hidden p-3">
        <Wash />

        <aside className="relative z-10 flex w-12 shrink-0 flex-col items-center gap-3">
          <div className="bg-background/70 flex size-10 items-center justify-center rounded-xl border text-sm font-bold shadow-sm backdrop-blur-md">
            U
          </div>
          <button
            type="button"
            aria-label="Search"
            className="bg-background/60 text-muted-foreground hover:text-foreground flex size-10 items-center justify-center rounded-xl border backdrop-blur-md transition-colors"
          >
            <SearchIcon className="size-4" />
          </button>

          <div className="bg-background/60 mt-28 flex flex-col gap-1 rounded-2xl border p-1 shadow-sm backdrop-blur-md">
            {railItems.map((item) => (
              <RailButton
                key={item.label}
                label={item.label}
                icon={item.icon}
                active={railItem === item.label}
                onClick={() => setRailItem(item.label)}
              />
            ))}
          </div>

          <div className="mt-auto flex flex-col items-center gap-2">
            <button
              type="button"
              aria-label="Sign out"
              className="bg-background/60 text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-full border backdrop-blur-md transition-colors"
            >
              <LogOutIcon className="size-4" />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label="Open operator menu"
                  className="bg-gradient-to-tr from-fuchsia-500 via-amber-400 to-sky-400 rounded-full p-0.5"
                >
                  <Avatar className="border-background size-8 border-2">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"
                      alt="Kai Meyer"
                    />
                    <AvatarFallback>KM</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" side="right" className="w-64">
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Avatar className="size-8">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"
                      alt=""
                    />
                    <AvatarFallback>KM</AvatarFallback>
                  </Avatar>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium">Kai Meyer</span>
                    <span className="text-muted-foreground text-xs">kai@reui.io</span>
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-muted-foreground flex items-center gap-2 text-xs font-normal">
                  Theme
                </DropdownMenuLabel>
                <div className="flex items-center gap-1 px-2 pb-1">
                  {(
                    [
                      { value: "light", icon: SunIcon, label: "Light" },
                      { value: "dark", icon: MoonIcon, label: "Dark" },
                      { value: "system", icon: MonitorIcon, label: "System" },
                    ] as const
                  ).map((option) => (
                    <Button
                      key={option.value}
                      variant={theme === option.value ? "secondary" : "ghost"}
                      size="icon-xs"
                      aria-label={`${option.label} theme`}
                      aria-pressed={theme === option.value}
                      onClick={() => setTheme(option.value)}
                    >
                      <option.icon />
                    </Button>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </aside>

        <div className="relative z-10 flex min-w-0 flex-1 gap-4">
          <section className="bg-background/65 flex min-w-0 flex-1 flex-col rounded-3xl border shadow-xl backdrop-blur-xl">
            <Tabs defaultValue="operations" className="flex flex-1 flex-col gap-0">
              <TabsList className="grid h-11 w-full grid-cols-3 gap-0 rounded-none bg-transparent p-0">
                {workspaceTabs.map((tab, index) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    style={folderShape}
                    className={cn(
                      "data-active:bg-background h-11 rounded-none px-4 text-sm font-medium",
                      index === 0 ? "rounded-tl-3xl" : "",
                    )}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {workspaceTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="p-4">
                  <SkeletonGrid />
                </TabsContent>
              ))}
            </Tabs>
          </section>

          <aside className="bg-background/60 hidden w-72 shrink-0 flex-col gap-4 rounded-3xl border p-4 shadow-xl backdrop-blur-xl xl:flex">
            <Skeleton className="h-52 w-full rounded-2xl" />
            <Skeleton className="h-20 w-full rounded-2xl" />
            <div className="flex items-center gap-2">
              <Skeleton className="size-6 rounded-full" />
              <Skeleton className="h-2.5 w-24" />
            </div>
            <Skeleton className="h-28 w-full rounded-2xl" />
            <Skeleton className="mt-auto h-12 w-full rounded-2xl" />
          </aside>
        </div>
      </div>
    </TooltipProvider>
  )
}
