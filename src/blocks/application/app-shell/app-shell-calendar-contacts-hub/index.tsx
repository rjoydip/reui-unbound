import { useState } from "react"
import {
  BellIcon, CalendarDaysIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon,
  ChevronRightIcon, ClockIcon, MoreHorizontalIcon, PanelLeftIcon, PlusIcon,
  SearchIcon, UsersIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar"
import { cn } from "cn"

const DEMO_MONTH = new Date(2026, 5, 1)
const DEMO_TODAY = new Date(2026, 5, 10)
const COLORS = ["bg-rose-500", "bg-orange-500", "bg-amber-500", "bg-emerald-500", "bg-teal-500", "bg-blue-500", "bg-violet-500", "bg-fuchsia-500", "bg-slate-500", "bg-zinc-800"]

type RailId = "calendar" | "schedule" | "contacts" | "notifications"
const railItems: { id: RailId; label: string; icon: typeof CalendarDaysIcon }[] = [
  { id: "calendar", label: "Calendar", icon: CalendarDaysIcon },
  { id: "schedule", label: "Schedule", icon: ClockIcon },
  { id: "contacts", label: "Contacts", icon: UsersIcon },
  { id: "notifications", label: "Notifications", icon: BellIcon },
]
const accounts = [
  { email: "nick@company.io", count: 3, calendars: [
    { name: "Work", color: "bg-blue-500", on: true },
    { name: "Personal", color: "bg-emerald-500", on: true },
    { name: "Meetings", color: "bg-violet-500", on: true },
  ] },
  { email: "nick@gmail.com", count: 2, calendars: [
    { name: "Personal", color: "bg-orange-500", on: true },
    { name: "Family", color: "bg-rose-500", on: false },
  ] },
]
const upNext = [
  { title: "Weekly Team Standup", time: "9:00 AM to 9:30 AM", color: "border-blue-500", people: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  ] },
  { title: "Design Review · Component Li...", time: "11:00 AM to 12:00 PM", color: "border-violet-500", people: [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80",
  ] },
  { title: "Coffee with Alex", time: "2:00 PM to 2:30 PM", color: "border-orange-500", people: [] },
]
const contacts = [
  { name: "Daniel Parker", email: "daniel@acme.io", initials: "DP" },
  { name: "Matthew Reed", email: "matthew@acme.io", initials: "MR" },
  { name: "Ryan Brooks", email: "ryan@acme.io", initials: "RB" },
  { name: "Lena Dawson", email: "lena@acme.io", initials: "LD" },
  { name: "Sophie Bennett", email: "sophie@acme.io", initials: "SB" },
]
const titles: Record<RailId, string> = {
  calendar: "Calendars", schedule: "Schedule", contacts: "Contacts", notifications: "Notifications",
}

function RailButton({ label, active, children, onClick }: {
  label: string; active?: boolean; children: React.ReactNode; onClick: () => void
}) {
  return (
    <Button variant="ghost" size="icon" aria-label={label} title={label} onClick={onClick}
      className={cn("text-muted-foreground relative size-8", active && "bg-accent text-foreground")}>
      {children}
    </Button>
  )
}

function EventBlock({ event }: { event: (typeof upNext)[number] }) {
  return (
    <div className={cn("border-l-2 pl-2.5", event.color)}>
      <p className="truncate text-sm font-medium">{event.title}</p>
      <div className="flex items-center gap-2">
        <p className="text-muted-foreground text-xs">{event.time}</p>
        {event.people.length > 0 && (
          <div className="ml-auto flex -space-x-1.5">
            {event.people.map((src) => (
              <Avatar key={src} className="size-5 ring-2 ring-background">
                <AvatarImage src={src} alt="" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function CalendarRow({ cal }: { cal: { name: string; color: string; on: boolean } }) {
  const [on, setOn] = useState(cal.on)
  return (
    <div className="group/cal hover:bg-muted/50 flex items-center gap-2 rounded-md py-1 pr-1 pl-3">
      <span className={cn("size-2 rounded-full", cal.color)} />
      <button type="button" aria-label={`Toggle ${cal.name}`} aria-pressed={on} onClick={() => setOn(!on)}
        className={cn("flex size-4 items-center justify-center rounded-sm border",
          on ? "bg-primary text-primary-foreground border-primary" : "border-muted-foreground/40 text-transparent")}>
        <CheckIcon className="size-3" />
      </button>
      <span className="truncate text-sm">{cal.name}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-xs" aria-label={`Options for ${cal.name}`}
            className="text-muted-foreground ml-auto opacity-0 group-hover/cal:opacity-100 data-[state=open]:opacity-100">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-52">
          <div className="flex flex-wrap gap-1.5 p-2">
            {COLORS.map((color) => (
              <button key={color} type="button" aria-label={`Set ${cal.name} color`} className={cn("size-5 rounded-full", color)} />
            ))}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Rename</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function CalendarsPanel() {
  const [selected, setSelected] = useState<Date | undefined>(DEMO_TODAY)
  return (
    <>
      <div className="border-b px-3 py-2">
        <Calendar mode="single" month={DEMO_MONTH} selected={selected} onSelect={setSelected}
          hideNavigation className="w-full p-0 [--cell-size:--spacing(8)]" />
      </div>
      <div className="border-b px-3 py-3">
        <p className="text-muted-foreground mb-2 text-xs font-medium">My Calendars</p>
        <div className="flex flex-col gap-1">
          {accounts.map((account) => (
            <Collapsible key={account.email} defaultOpen={account.email === "nick@company.io"}>
              <CollapsibleTrigger asChild>
                <button type="button" className="hover:bg-muted/60 flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-left text-sm">
                  <ChevronRightIcon className="text-muted-foreground size-3.5 transition-transform data-[state=open]:rotate-90" />
                  <span className="truncate">{account.email}</span>
                  <Badge size="sm" variant="secondary" className="ml-auto">{account.count}</Badge>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-0.5 flex flex-col">
                  {account.calendars.map((cal) => <CalendarRow key={`${account.email}-${cal.name}`} cal={cal} />)}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
        <button type="button" className="text-muted-foreground hover:text-foreground mt-2 flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-sm">
          <PlusIcon className="size-3.5" /> Add account
        </button>
      </div>
      <div className="px-3 py-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-muted-foreground text-xs font-medium">Up Next</p>
          <Badge size="sm" variant="secondary">3</Badge>
        </div>
        <div className="flex flex-col gap-3">{upNext.map((event) => <EventBlock key={event.title} event={event} />)}</div>
      </div>
    </>
  )
}

function PanelBody({ panel }: { panel: RailId }) {
  const [query, setQuery] = useState("")
  if (panel === "calendar") return <CalendarsPanel />
  if (panel === "schedule") {
    return (
      <div className="flex flex-col gap-3 p-3">
        <p className="text-muted-foreground text-xs font-medium">Wednesday, June 10</p>
        {upNext.map((event) => <EventBlock key={event.title} event={event} />)}
        <p className="text-muted-foreground mt-2 text-xs font-medium">Thursday, June 11</p>
        <div className="border-l-2 border-emerald-500 pl-2.5">
          <p className="text-sm font-medium">Sprint Planning</p>
          <p className="text-muted-foreground text-xs">10:00 AM to 11:00 AM</p>
        </div>
      </div>
    )
  }
  if (panel === "contacts") {
    return (
      <div className="p-3">
        <div className="relative">
          <SearchIcon className="text-muted-foreground absolute top-2.5 left-2.5 size-3.5" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search contacts..." className="h-8 pl-8" />
        </div>
        <div className="mt-3 flex flex-col gap-0.5">
          {contacts.filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase())).map((contact) => (
            <button key={contact.email} type="button" className="hover:bg-muted/60 flex items-center gap-2 rounded-md p-1.5 text-left">
              <Avatar className="size-7"><AvatarFallback>{contact.initials}</AvatarFallback></Avatar>
              <span className="min-w-0">
                <span className="block truncate text-sm">{contact.name}</span>
                <span className="text-muted-foreground block truncate text-xs">{contact.email}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-medium">Notifications</p>
        <Badge size="sm" variant="secondary">2</Badge>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { title: "Standup starts in 15 minutes", meta: "Weekly Team Standup" },
          { title: "Design Review moved to 11:00 AM", meta: "Team Calendar" },
        ].map((note) => (
          <div key={note.title} className="rounded-lg border p-2.5">
            <p className="text-sm">{note.title}</p>
            <p className="text-muted-foreground mt-0.5 text-xs">{note.meta}</p>
          </div>
        ))}
        <Button variant="ghost" size="sm" className="w-full">Mark all as read</Button>
      </div>
    </div>
  )
}

export function AppShellCalendarContactsHubBlock() {
  const [panel, setPanel] = useState<RailId>("calendar")
  const [view, setView] = useState("Week")
  const [eventOpen, setEventOpen] = useState(false)
  const [panelOpen, setPanelOpen] = useState(true)

  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <Sidebar collapsible="none" className={cn("shrink-0 border-r transition-[width]", panelOpen ? "w-[398px]" : "w-12")}>
        <div className="flex h-full min-h-0">
          <nav className="flex w-12 shrink-0 flex-col items-center gap-1 border-r py-2">
            <span className="bg-foreground text-background mb-1 flex size-8 items-center justify-center rounded-lg text-sm font-bold">U</span>
            {railItems.map((item) => (
              <RailButton key={item.id} label={item.label} active={panel === item.id && panelOpen}
                onClick={() => { setPanel(item.id); setPanelOpen(true) }}>
                <item.icon />
                {item.id === "notifications" && <span className="bg-primary absolute top-1 right-1 size-1.5 rounded-full" />}
              </RailButton>
            ))}
            <RailButton label="Search" onClick={() => { setPanel("contacts"); setPanelOpen(true) }}>
              <SearchIcon />
            </RailButton>
            <div className="mt-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button type="button" aria-label="Open profile for Nick Bold" className="rounded-full">
                    <Avatar className="size-7">
                      <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" alt="Nick Bold" />
                      <AvatarFallback>NB</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" side="right" className="w-56">
                  <DropdownMenuLabel>
                    <span className="block text-sm">Nick Bold</span>
                    <span className="text-muted-foreground block text-xs font-normal">nick@company.io</span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Preferences</DropdownMenuItem>
                  <DropdownMenuItem>Manage Accounts</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Theme</DropdownMenuItem>
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
          {panelOpen && (
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex h-12 shrink-0 items-center gap-2 border-b px-3">
                <span className="text-sm font-semibold">{titles[panel]}</span>
                <div className="ml-auto flex items-center gap-0.5">
                  <Button variant="ghost" size="icon-sm" aria-label="Add"><PlusIcon /></Button>
                  <Button variant="ghost" size="icon-sm" aria-label="Collapse panel" onClick={() => setPanelOpen(false)}><PanelLeftIcon /></Button>
                </div>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto"><PanelBody panel={panel} /></div>
            </div>
          )}
        </div>
      </Sidebar>

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          {!panelOpen && <Button variant="ghost" size="icon-sm" aria-label="Open panel" onClick={() => setPanelOpen(true)}><PanelLeftIcon /></Button>}
          <h1 className="text-lg font-semibold">June 2026</h1>
          <div className="flex -space-x-1">
            <span className="bg-blue-500 size-2.5 rounded-full ring-2 ring-background" />
            <span className="bg-emerald-500 size-2.5 rounded-full ring-2 ring-background" />
            <span className="bg-violet-500 size-2.5 rounded-full ring-2 ring-background" />
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <Button variant="ghost" size="icon-sm" aria-label="Previous week"><ChevronLeftIcon /></Button>
            <Button variant="ghost" size="icon-sm" aria-label="Next week"><ChevronRightIcon /></Button>
            <Button variant="outline" size="sm">Today</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">{view}<ChevronDownIcon /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {["Day", "Week", "Month", "Agenda"].map((option) => (
                  <DropdownMenuItem key={option} onClick={() => setView(option)}>
                    {option}
                    {view === option && <CheckIcon className="ml-auto" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" onClick={() => setEventOpen(true)}><PlusIcon /> New Event</Button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4">
          {eventOpen && (
            <div className="bg-muted/40 mb-4 flex items-center gap-2 rounded-lg border border-dashed p-3 text-sm">
              <CalendarDaysIcon className="text-muted-foreground size-4" />
              New event draft for June 10, 2026
              <Button variant="ghost" size="xs" className="ml-auto" onClick={() => setEventOpen(false)}>Dismiss</Button>
            </div>
          )}
          <div className="grid gap-4 md:grid-cols-3">
            {["9:00 AM", "11:00 AM", "2:00 PM"].map((time) => (
              <div key={time} className="bg-muted/30 min-h-40 rounded-xl border border-dashed p-3">
                <span className="text-muted-foreground inline-flex items-center gap-1 text-xs"><ClockIcon className="size-3" />{time}</span>
              </div>
            ))}
          </div>
          <div className="bg-muted/30 mt-4 min-h-[420px] rounded-xl border border-dashed p-4">
            <div className="text-muted-foreground flex items-center gap-2 text-xs"><CalendarDaysIcon className="size-3.5" />Week grid placeholder</div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default AppShellCalendarContactsHubBlock
