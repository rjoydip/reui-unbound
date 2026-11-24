import { useEffect, useState } from "react"
import {
  BellIcon,
  BookOpenIcon,
  BotIcon,
  CalendarIcon,
  ChevronDownIcon,
  CircleHelpIcon,
  ClipboardListIcon,
  DatabaseIcon,
  EllipsisIcon,
  FileTextIcon,
  Grid2x2Icon,
  LayersIcon,
  LayoutGridIcon,
  LifeBuoyIcon,
  LogOutIcon,
  MonitorIcon,
  MoonIcon,
  RadioTowerIcon,
  SettingsIcon,
  ShieldIcon,
  SunIcon,
  TruckIcon,
  UserIcon,
  WrenchIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "cn"

const HERO_SLIDES = [
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80",
  "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1600&q=80",
  "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1600&q=80",
]

const SECTIONS = ["Overview", "Missions", "Stations", "Requests", "Maintenance"]
const ROBOT_SECTIONS = [
  "Overview",
  "Robots",
  "Routes",
  "Stations",
  "Incidents",
  "Tasks",
  "Depots",
  "Billing",
  "Runbooks",
]

function RailButton({
  label,
  active,
  children,
}: {
  label: string
  active?: boolean
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "text-foreground/70 hover:bg-foreground/10 hover:text-foreground flex size-9 items-center justify-center rounded-md transition-colors [&_svg]:size-4",
        active && "bg-foreground/10 text-foreground",
      )}
    >
      {children}
    </button>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-background/80 rounded-xl border p-4 shadow-sm backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="bg-muted size-6 rounded-md" />
        <div className="bg-muted h-2.5 w-24 rounded-full" />
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div className="flex -space-x-1.5">
          <div className="bg-muted size-5 rounded-full ring-1 ring-background" />
          <div className="bg-muted size-5 rounded-full ring-1 ring-background" />
          <div className="bg-muted size-5 rounded-full ring-1 ring-background" />
        </div>
        <div className="bg-muted h-2.5 w-28 rounded-full" />
      </div>
    </div>
  )
}

function WideSkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("bg-background/80 rounded-xl border p-4 shadow-sm", className)}>
      <div className="bg-muted h-2.5 w-2/3 rounded-full" />
      <div className="bg-muted mt-2 h-2.5 w-1/2 rounded-full" />
      <div className="bg-muted/70 mt-4 h-[220px] rounded-lg" />
    </div>
  )
}

export default function AppShell22Block() {
  const [slide, setSlide] = useState(0)
  const [section, setSection] = useState("Overview")
  const [accessRequest, setAccessRequest] = useState(true)

  useEffect(() => {
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % HERO_SLIDES.length),
      6000,
    )
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="bg-background relative min-h-svh overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[360px] overflow-hidden">
        {HERO_SLIDES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-1000",
              index === slide ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="from-background via-background/20 absolute inset-0 bg-gradient-to-b to-transparent" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 flex h-4 items-end justify-between px-1"
        >
          {Array.from({ length: 48 }, (_, index) => (
            <span
              key={index}
              className="bg-background"
              style={{
                width: 6 + ((index * 7) % 4) * 2,
                height: 6 + ((index * 5) % 3) * 3,
                opacity: index % 3 === 0 ? 0.9 : 0.35,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative flex min-h-svh">
        <aside className="border-foreground/10 bg-background/40 sticky top-0 flex h-svh w-15 shrink-0 flex-col items-center gap-1 border-r py-3 backdrop-blur-xl">
          <div className="mb-2 flex size-9 items-center justify-center rounded-lg border bg-background/70 text-sm font-bold shadow-sm">
            U
          </div>

          <RailButton label="Overview">
            <LayoutGridIcon />
          </RailButton>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Robots section menu"
                className="text-foreground/70 hover:bg-foreground/10 hover:text-foreground flex size-9 items-center justify-center rounded-md transition-colors [&_svg]:size-4"
              >
                <DatabaseIcon />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={8} className="w-44 bg-popover/95 backdrop-blur">
              {ROBOT_SECTIONS.map((entry) => (
                <DropdownMenuItem key={entry} onClick={() => setSection(entry)}>
                  {entry}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <RailButton label="Fleet map">
            <LayersIcon />
          </RailButton>
          <RailButton label="Telemetry">
            <RadioTowerIcon />
          </RailButton>
          <RailButton label="Security">
            <ShieldIcon />
          </RailButton>
          <RailButton label="Maintenance">
            <WrenchIcon />
          </RailButton>

          <div className="bg-foreground/10 my-1 h-px w-6" />

          <RailButton label="Robots">
            <BotIcon />
          </RailButton>
          <RailButton label="Runbooks">
            <FileTextIcon />
          </RailButton>
          <RailButton label="Documentation">
            <BookOpenIcon />
          </RailButton>

          <div className="mt-auto flex flex-col items-center gap-1">
            <RailButton label="Notifications">
              <BellIcon />
            </RailButton>
            <RailButton label="Settings">
              <SettingsIcon />
            </RailButton>
            <RailButton label="Sign out">
              <LogOutIcon />
            </RailButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label="Account menu"
                  className="mt-1 size-9 overflow-hidden rounded-full ring-1 ring-foreground/20"
                >
                  <Avatar className="size-9">
                    <AvatarFallback className="bg-neutral-900 text-xs text-white">
                      ER
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" side="right" sideOffset={8} className="w-60 bg-popover/95 backdrop-blur">
                <div className="flex items-center gap-2 px-2 py-2">
                  <Avatar className="size-8">
                    <AvatarFallback className="bg-neutral-900 text-xs text-white">
                      ER
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">Evil Rabbit</p>
                    <p className="text-muted-foreground truncate text-xs">
                      Fleet Operations Lead
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TruckIcon />
                  Shift Handover
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  Preferences
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CircleHelpIcon />
                  Help &amp; Support
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookOpenIcon />
                  API Reference
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex items-center justify-between text-xs font-normal">
                  Theme
                  <span className="flex items-center gap-1">
                    <SunIcon className="size-3.5" />
                    <MoonIcon className="size-3.5" />
                    <MonitorIcon className="size-3.5" />
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon />
                  Sign Out
                  <span className="text-muted-foreground ml-auto text-xs">⌘Q</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="relative flex h-16 shrink-0 items-center justify-center px-4 pt-2">
            <nav className="flex items-center gap-1 rounded-full border border-black/10 bg-background/70 p-1 text-sm shadow-sm backdrop-blur-md dark:border-white/10">
              {SECTIONS.slice(0, 5).map((entry) => (
                <button
                  key={entry}
                  type="button"
                  onClick={() => setSection(entry)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-foreground/70 transition-colors hover:text-foreground",
                    section === entry &&
                      "bg-foreground text-background hover:text-background",
                  )}
                >
                  {entry}
                </button>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    aria-label="More sections"
                    className="text-foreground/70 hover:bg-foreground/10 flex size-7 items-center justify-center rounded-full transition-colors"
                  >
                    <EllipsisIcon className="size-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44 bg-popover/95 backdrop-blur">
                  {SECTIONS.map((entry) => (
                    <DropdownMenuItem key={entry} onClick={() => setSection(entry)}>
                      {entry}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {accessRequest ? (
              <div className="absolute right-4 top-3 hidden w-80 gap-3 rounded-xl border border-white/10 bg-[#3b332c]/95 p-3 text-white shadow-xl backdrop-blur lg:flex">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-white/10">
                  <FileTextIcon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold">Access request</p>
                    <span className="text-xs text-white/60">2m ago</span>
                  </div>
                  <p className="mt-0.5 text-xs text-white/70">
                    RT-06 wants to connect to the control room.
                  </p>
                  <div className="mt-2 flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-white hover:bg-white/10 hover:text-white"
                      onClick={() => setAccessRequest(false)}
                    >
                      Dismiss
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 bg-emerald-500 text-white hover:bg-emerald-600"
                      onClick={() => setAccessRequest(false)}
                    >
                      Allow
                    </Button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex-1 px-6 pb-8 pt-[250px]">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {[0, 1, 2, 3].map((index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
            <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_2fr]">
              <WideSkeletonCard />
              <WideSkeletonCard />
            </div>
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <div className="bg-background/80 flex h-14 items-center gap-3 rounded-xl border px-4 shadow-sm">
                <Grid2x2Icon className="text-muted-foreground size-4" />
                <span className="text-sm font-medium">{section}</span>
                <ChevronDownIcon className="text-muted-foreground size-4" />
                <span className="text-muted-foreground ml-auto flex items-center gap-1 text-xs">
                  <CalendarIcon className="size-3.5" />
                  Updated 2m ago
                </span>
              </div>
              <div className="bg-background/80 flex h-14 items-center gap-3 rounded-xl border px-4 shadow-sm">
                <ClipboardListIcon className="text-muted-foreground size-4" />
                <span className="text-sm font-medium">Shift log</span>
                <span className="text-muted-foreground ml-auto text-xs">
                  3 open tasks
                </span>
                <LifeBuoyIcon className="text-muted-foreground size-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
