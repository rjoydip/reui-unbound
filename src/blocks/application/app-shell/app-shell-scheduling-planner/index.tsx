import { useState, type CSSProperties } from "react"
import {
  BellIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  ClockIcon,
  LogOutIcon,
  MapPinIcon,
  MonitorIcon,
  MoonIcon,
  PaperclipIcon,
  PlusIcon,
  SettingsIcon,
  SunIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "cn"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const events = [
  {
    title: "Morning Standup",
    time: "9:00 AM to 9:15 AM",
    place: "Zoom · Room A",
    dot: "bg-blue-500",
    badge: { label: "Meeting", variant: "secondary" as const },
    attendees: true,
  },
  {
    title: "Sprint Planning",
    time: "10:00 AM to 11:00 AM",
    place: "Conf Room B",
    dot: "bg-violet-500",
    badge: { label: "Meeting", variant: "warning-light" as const },
    file: "1 file",
  },
]

const calendars = [
  { label: "Events", icon: CalendarIcon, count: 12, active: true },
  { label: "Meetings", icon: UsersIcon, count: 5 },
]

const views = ["Day", "Week", "Month"]

const attendeePhotos = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
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

export function AppShellSchedulingPlannerBlock() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(2026, 9, 14),
  )
  const [month, setMonth] = useState(new Date(2026, 9, 1))
  const [view, setView] = useState("Week")

  return (
    <SidebarProvider
      className="h-svh overflow-hidden"
      style={{ "--sidebar-width": "17.5rem" } as CSSProperties}
    >
      <Sidebar collapsible="offcanvas">
        <SidebarHeader className="flex-row items-center gap-2 px-3 py-2">
          <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md text-sm font-bold">
            U
          </span>
          <span className="text-sm font-semibold">ReUI</span>
          <SidebarTrigger className="text-muted-foreground ml-auto" />
        </SidebarHeader>

        <SidebarContent className="gap-0 px-2">
          <div className="px-1">
            <div className="flex items-center justify-between py-1">
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Previous month"
                className="text-muted-foreground"
                onClick={() =>
                  setMonth(
                    (current) =>
                      new Date(current.getFullYear(), current.getMonth() - 1, 1),
                  )
                }
              >
                <ChevronLeftIcon />
              </Button>
              <span className="text-xs font-medium">
                {month.toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Next month"
                className="text-muted-foreground"
                onClick={() =>
                  setMonth(
                    (current) =>
                      new Date(current.getFullYear(), current.getMonth() + 1, 1),
                  )
                }
              >
                <ChevronRightIcon />
              </Button>
            </div>
            <Calendar
              mode="single"
              month={month}
              onMonthChange={setMonth}
              selected={selectedDate}
              onSelect={setSelectedDate}
              hideNavigation
              className="w-full p-0 [--cell-size:--spacing(8)]"
            />
          </div>

          <div className="px-1 pt-4">
            <p className="text-muted-foreground mb-2 px-1 text-xs font-medium">
              Up Next
            </p>
            <div className="flex flex-col gap-2">
              {events.map((event) => (
                <div key={event.title} className="rounded-lg border p-3">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={cn("size-2 shrink-0 rounded-full", event.dot)}
                    />
                    <span className="truncate text-sm font-medium">
                      {event.title}
                    </span>
                    <Badge
                      size="sm"
                      variant={event.badge.variant}
                      className="ml-auto"
                    >
                      {event.badge.label}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
                    <ClockIcon className="size-3" />
                    {event.time}
                  </p>
                  <p className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
                    <MapPinIcon className="size-3" />
                    {event.place}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    {event.attendees ? (
                      <>
                        <span className="flex -space-x-1.5">
                          {attendeePhotos.map((src, index) => (
                            <Avatar key={src} className="ring-card size-5 ring-2">
                              <AvatarImage
                                src={src}
                                alt={`Attendee ${index + 1}`}
                              />
                              <AvatarFallback className="text-[8px]">
                                A
                              </AvatarFallback>
                            </Avatar>
                          ))}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          2 attendees
                        </span>
                      </>
                    ) : (
                      <span className="text-muted-foreground ml-auto flex items-center gap-1 text-xs">
                        <PaperclipIcon className="size-3" />
                        {event.file}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-1 pt-4">
            <p className="text-muted-foreground mb-1 px-1 text-xs font-medium">
              Calendars
            </p>
            <SidebarMenu>
              {calendars.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton isActive={item.active} tooltip={item.label}>
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>
                    <Badge size="sm" variant="info-light">
                      {item.count}
                    </Badge>
                  </SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>
        </SidebarContent>

        <SidebarFooter>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="hover:bg-muted flex w-full items-center gap-2 rounded-lg px-1 py-1 text-left transition-colors"
              >
                <Avatar className="size-7">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"
                    alt="Sana Qureshi"
                  />
                  <AvatarFallback>SQ</AvatarFallback>
                </Avatar>
                <span className="truncate text-sm font-medium">Sana Qureshi</span>
                <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuLabel className="flex items-center gap-2 py-1.5">
                <Avatar className="size-8">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"
                    alt="Sana Qureshi"
                  />
                  <AvatarFallback>SQ</AvatarFallback>
                </Avatar>
                <span className="flex flex-col">
                  <span className="text-foreground text-sm font-medium">
                    Sana Qureshi
                  </span>
                  <span className="text-xs font-normal">sana@demo.test</span>
                </span>
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <UserIcon />
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ClockIcon />
                Availability
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Preferences
                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <CalendarIcon />
                Shared Calendars
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Reminders
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
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-w-0">
        <header className="flex flex-wrap items-center gap-2 border-b px-5 py-3">
          <h1 className="text-lg font-semibold">
            {new Date(2026, 9, 1).toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h1>
          <span className="flex items-center gap-0.5" aria-hidden>
            {["bg-violet-500", "bg-rose-500", "bg-amber-500", "bg-sky-500", "bg-emerald-500"].map(
              (tone) => (
                <span key={tone} className={cn("size-2 rounded-full", tone)} />
              ),
            )}
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Previous period"
              className="text-muted-foreground"
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Next period"
              className="text-muted-foreground"
            >
              <ChevronRightIcon />
            </Button>
            <Button variant="outline">Today</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-1.5">
                  {view}
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {views.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onSelect={() => setView(option)}
                    className="justify-between"
                  >
                    {option}
                    {view === option ? <CheckIcon /> : null}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="gap-1.5">
              <PlusIcon />
              New Event
            </Button>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
          <div className="grid gap-4 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-muted/20 h-44 rounded-xl border" />
            ))}
          </div>
          <div className="bg-muted/20 h-9 rounded-lg border" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppShellSchedulingPlannerBlock
