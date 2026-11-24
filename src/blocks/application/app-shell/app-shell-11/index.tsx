import { useState } from "react"
import {
  BellIcon,
  BotIcon,
  CalendarIcon,
  CheckCheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleAlertIcon,
  EllipsisIcon,
  FileTextIcon,
  HelpCircleIcon,
  LayoutGridIcon,
  Maximize2Icon,
  MessageSquareIcon,
  PanelLeftIcon,
  PanelRightIcon,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  SparklesIcon,
  UsersIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
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
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { cn } from "cn"

const DEMO_MONTH = new Date(2026, 1, 1)
const DEMO_TODAY = new Date(2026, 1, 24)

const operators = [
  { name: "Maya Chen", initials: "MC", color: "bg-sky-100 text-sky-700" },
  { name: "Owen Price", initials: "OP", color: "bg-emerald-100 text-emerald-700" },
  { name: "Noah Singh", initials: "NS", color: "bg-amber-100 text-amber-700" },
  { name: "Iris Hale", initials: "IH", color: "bg-violet-100 text-violet-700" },
  { name: "Sofia Bennett", initials: "SB", color: "bg-rose-100 text-rose-700" },
  { name: "Liam Carter", initials: "LC", color: "bg-slate-100 text-slate-700" },
]

const upNext = [
  { title: "Weekly Team Standup", time: "9:00 AM to 9:30 AM", color: "border-blue-500" },
  { title: "Design Review · Compone...", time: "11:00 AM to 12:00 PM", color: "border-violet-500" },
  { title: "Coffee with Alex", time: "2:00 PM to 2:30 PM", color: "border-orange-500" },
]

const workbenchTabs = [
  { value: "settings", label: "Settings" },
  { value: "webhooks", label: "Webhooks" },
  { value: "events", label: "Events", count: "8" },
  { value: "logs", label: "Logs", count: "3" },
  { value: "health", label: "Health", count: "12" },
  { value: "inspector", label: "Inspector" },
]

function PlaceholderLines({ rows }: { rows: number }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: rows }, (_, index) => (
        <div
          key={index}
          className="bg-muted h-2.5 rounded"
          style={{ width: `${[92, 78, 85, 64, 88][index % 5]}%` }}
        />
      ))}
    </div>
  )
}

function NotificationsPopover() {
  const items = [
    { title: "@sarah_smith mentioned you in #PR-1024", body: '"Can you review the changes?"', meta: "2m ago" },
    { title: "Pending approval", body: "Enterprise handoff kit needs approval before the customer review.", meta: "5m ago", high: true },
    { title: "@maverick shared", body: "Renewal summary · northwind-renewal.pdf (2mb)", meta: "15m ago" },
  ]
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Open notifications" className="relative">
          <BellIcon />
          <span className="bg-destructive absolute top-1 right-1 size-1.5 rounded-full" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80 p-0">
        <div className="flex items-center gap-2 border-b px-3 py-2.5">
          <span className="text-sm font-semibold">Notifications</span>
          <Badge size="sm" variant="secondary">3</Badge>
          <Button variant="ghost" size="icon-xs" aria-label="Mark all as read" className="ml-auto">
            <CheckCheckIcon />
          </Button>
        </div>
        <div className="max-h-72 overflow-y-auto">
          {items.map((item) => (
            <div key={item.title} className="border-b p-3 last:border-b-0">
              <div className="flex items-start gap-2.5">
                <CircleAlertIcon className={cn("mt-0.5 size-4", item.high ? "text-warning" : "text-muted-foreground")} />
                <div className="min-w-0">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-muted-foreground mt-0.5 text-xs">{item.body}</p>
                  <div className="text-muted-foreground mt-2 flex items-center gap-2 text-xs">
                    <span>{item.meta}</span>
                    {item.high && <Badge size="sm" variant="warning-light">High</Badge>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-1.5">
          <Button variant="ghost" size="sm" className="w-full">View all notifications</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function RightRail() {
  const [selected, setSelected] = useState<Date | undefined>(DEMO_TODAY)
  return (
    <aside className="hidden w-80 shrink-0 flex-col overflow-y-auto border-l xl:flex">
      <div className="flex items-center justify-between px-3 pt-3">
        <span className="text-sm font-semibold">February 2026</span>
        <div className="flex items-center gap-0.5">
          <Button variant="ghost" size="icon-xs" aria-label="Previous month"><ChevronLeftIcon /></Button>
          <Button variant="ghost" size="icon-xs" aria-label="Next month"><ChevronRightIcon /></Button>
        </div>
      </div>
      <Calendar mode="single" month={DEMO_MONTH} selected={selected} onSelect={setSelected} hideNavigation
        classNames={{ month_caption: "hidden" }} className="w-full px-2 [--cell-size:--spacing(9)]" />
      <div className="border-y px-3 py-3">
        <p className="text-muted-foreground mb-2 text-xs font-medium">MY CALENDARS</p>
        <div className="mb-1 flex items-center gap-1.5 rounded-md bg-muted/40 px-1.5 py-1 text-sm">
          <ChevronDownIcon className="text-muted-foreground size-3.5" />
          nick@company.io
          <Badge size="sm" variant="secondary" className="ml-auto">3</Badge>
        </div>
        {[{ name: "Work", color: "bg-blue-500" }, { name: "Personal", color: "bg-emerald-500" }, { name: "Meetings", color: "bg-violet-500" }].map((cal) => (
          <div key={cal.name} className="flex items-center gap-2 rounded-md py-1 pl-3 text-sm">
            <span className={cn("size-2 rounded-full", cal.color)} />
            <span className="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-sm">
              <CheckCheckIcon className="size-2.5" />
            </span>
            {cal.name}
          </div>
        ))}
        <button type="button" className="text-muted-foreground hover:text-foreground mt-1 flex items-center gap-1.5 px-1.5 py-1 text-sm">
          <PlusIcon className="size-3.5" /> Add account
        </button>
      </div>
      <div className="px-3 py-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-muted-foreground text-xs font-medium">UP NEXT</p>
          <Badge size="sm" variant="secondary">3</Badge>
        </div>
        <div className="flex flex-col gap-3">
          {upNext.map((event) => (
            <div key={event.title} className={cn("border-l-2 pl-2.5", event.color)}>
              <p className="truncate text-sm font-medium">{event.title}</p>
              <p className="text-muted-foreground text-xs">{event.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-2 border-t p-3">
        <Button size="sm"><PlusIcon /> New Event</Button>
        <Button size="sm" variant="outline"><ShareIcon /> Share Availability</Button>
      </div>
    </aside>
  )
}

export function AppShell11Block() {
  const [tab, setTab] = useState("overview")
  const [workbenchTab, setWorkbenchTab] = useState("settings")
  const [detailTab, setDetailTab] = useState("details")
  const [queueOpen, setQueueOpen] = useState(false)
  const [accountsOpen, setAccountsOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [showDetail, setShowDetail] = useState(true)
  const [showWorkbench, setShowWorkbench] = useState(true)
  const [showRail, setShowRail] = useState(true)

  const regionToggles = [
    { label: "Toggle navigation", icon: PanelLeftIcon, pressed: sidebarOpen, onChange: () => setSidebarOpen((v) => !v) },
    { label: "Toggle detail sidebar", icon: PanelRightIcon, pressed: showDetail, onChange: () => setShowDetail((v) => !v) },
    { label: "Toggle workbench", icon: LayoutGridIcon, pressed: showWorkbench, onChange: () => setShowWorkbench((v) => !v) },
    { label: "Toggle calendar rail", icon: CalendarIcon, pressed: showRail, onChange: () => setShowRail((v) => !v) },
  ]

  return (
    <SidebarProvider open={sidebarOpen} onOpenChange={setSidebarOpen} className="h-svh overflow-hidden">
      <Sidebar collapsible="icon">
        <SidebarHeader className="gap-2 p-3">
          <div className="flex items-center gap-2">
            <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md text-xs font-bold">U</span>
            <span className="truncate text-sm font-semibold group-data-[collapsible=icon]:hidden">ReUI</span>
            <div className="ml-auto group-data-[collapsible=icon]:hidden"><NotificationsPopover /></div>
          </div>
          <button type="button" className="border-input text-muted-foreground hover:bg-muted/40 flex h-8 w-full items-center gap-2 rounded-md border px-2.5 text-sm group-data-[collapsible=icon]:justify-center">
            <SearchIcon className="size-4" />
            <span className="group-data-[collapsible=icon]:hidden">Search...</span>
            <kbd className="bg-muted ml-auto rounded-sm px-1.5 py-0.5 text-[10px] group-data-[collapsible=icon]:hidden">⌘K</kbd>
          </button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Notifications">
                    <BellIcon />
                    <span>Notifications</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive tooltip="Today"><CalendarIcon /><span>Today</span></SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Handoffs"><FileTextIcon /><span>Handoffs</span></SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Follow-ups"><CheckCheckIcon /><span>Follow-ups</span></SidebarMenuButton>
                </SidebarMenuItem>
                <Collapsible open={queueOpen} onOpenChange={setQueueOpen} className="group/queue">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Brief Queue">
                        <SparklesIcon />
                        <span>Brief Queue</span>
                        <ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="border-border ml-4 flex flex-col border-l pl-2">
                        {["Unassigned", "Drafting", "Approved"].map((item) => (
                          <button key={item} type="button" className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-2 py-1.5 text-left text-sm">{item}</button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <Collapsible open={accountsOpen} onOpenChange={setAccountsOpen}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Accounts">
                        <UsersIcon /><span>Accounts</span>
                        <ChevronRightIcon className="ml-auto transition-transform data-[state=open]:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="border-border ml-4 flex flex-col border-l pl-2">
                        {["Customers", "Partners", "Prospects"].map((item) => (
                          <button key={item} type="button" className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-2 py-1.5 text-left text-sm">{item}</button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Insights"><LayoutGridIcon /><span>Insights</span></SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Operators</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {operators.map((operator) => (
                  <SidebarMenuItem key={operator.name}>
                    <SidebarMenuButton tooltip={operator.name}>
                      <span className={cn("flex size-6 items-center justify-center rounded-full text-[10px] font-semibold", operator.color)}>{operator.initials}</span>
                      <span>{operator.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="gap-2">
          <div className="bg-muted/40 rounded-lg border p-2.5 group-data-[collapsible=icon]:hidden">
            <p className="text-xs font-medium">AI Drafts</p>
            <p className="text-muted-foreground mt-1 text-xs">Draft credits refresh with the workspace cycle</p>
            <div className="bg-muted mt-2 h-1.5 overflow-hidden rounded-full"><div className="bg-success h-full w-[78%] rounded-full" /></div>
            <div className="mt-1 flex justify-between text-xs"><span className="font-medium">78% Used</span><span className="text-muted-foreground">22% Free</span></div>
          </div>
          <SidebarMenuButton size="lg" className="border">
            <span className="bg-foreground text-background flex size-6 items-center justify-center rounded-full text-[10px] font-bold">C</span>
            <span className="truncate text-sm font-medium">Codex</span>
            <EllipsisIcon className="text-muted-foreground ml-auto size-4" />
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-w-0">
        <div className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          <div className="flex min-w-0 items-center gap-1.5 text-sm">
            <span className="bg-violet-500 size-2 rounded-full" />
            <span className="font-medium">Atlas Desk</span>
            <ChevronDownIcon className="text-muted-foreground size-3.5" />
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Production</span>
            <ChevronDownIcon className="text-muted-foreground size-3.5" />
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button variant="ghost" size="sm"><HelpCircleIcon /> Help</Button>
            <Button variant="outline" size="sm"><SparklesIcon /> Ask ReUI</Button>
            <Button variant="ghost" size="icon-sm" aria-label="Toggle help panel"><PanelRightIcon /></Button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1">
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center gap-2 px-4 pt-3">
              <BotIcon className="size-5" />
              <h1 className="text-lg font-semibold">Codex</h1>
              <div className="ml-auto flex items-center gap-1">
                <Button size="sm" variant="outline"><FileTextIcon /> Add note</Button>
                {regionToggles.map((toggle) => (
                  <Button key={toggle.label} variant="ghost" size="icon-sm" aria-label={toggle.label} aria-pressed={toggle.pressed} onClick={toggle.onChange} className={cn(!toggle.pressed && "text-muted-foreground/40")}>
                    <toggle.icon />
                  </Button>
                ))}
              </div>
            </div>

            <Tabs value={tab} onValueChange={setTab} className="flex min-h-0 flex-1 flex-col gap-0">
              <div className="flex items-center gap-4 border-b px-4">
                <TabsList variant="line" className="h-10">
                  <TabsTrigger value="overview"><LayoutGridIcon /> Overview</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="briefs"><FileTextIcon /> Briefs <Badge size="sm" variant="secondary">6</Badge></TabsTrigger>
                  <TabsTrigger value="calls">Calls <Badge size="sm" variant="secondary">3</Badge></TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="more">+3 more</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-1">
                  {["details", "comments"].map((item) => (
                    <button key={item} type="button" onClick={() => setDetailTab(item)} className={cn("flex items-center gap-1.5 border-b-2 px-2 py-3 text-sm capitalize", detailTab === item ? "border-foreground font-medium" : "text-muted-foreground border-transparent")}>
                      {item === "details" ? <LayoutGridIcon className="size-3.5" /> : <MessageSquareIcon className="size-3.5" />}
                      {item}
                      {item === "comments" && <Badge size="sm" variant="secondary">4</Badge>}
                    </button>
                  ))}
                  <Button variant="ghost" size="icon-xs" aria-label="More tab actions"><EllipsisIcon /></Button>
                  <Button variant="ghost" size="icon-xs" aria-label="Close detail panel" onClick={() => setShowDetail(false)}><XIcon /></Button>
                </div>
              </div>

              <TabsContent value="overview" className="flex min-h-0 flex-1">
                <ResizablePanelGroup orientation="horizontal" className="h-full">
                  <ResizablePanel defaultSize={showDetail ? "62%" : "100%"} minSize="30%">
                    <div className="h-full overflow-y-auto p-4">
                      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((cell) => <div key={cell} className="bg-muted/30 h-24 rounded-lg border border-dashed" />)}
                      </div>
                      <div className="bg-muted/30 mt-3 rounded-lg border border-dashed p-3"><PlaceholderLines rows={6} /></div>
                    </div>
                  </ResizablePanel>
                  {showDetail && (
                    <>
                      <ResizableHandle withHandle />
                      <ResizablePanel defaultSize="38%" minSize="20%">
                        <div className="h-full overflow-y-auto p-4">
                          <div className="mb-4 flex items-center gap-2"><span className="text-sm font-medium capitalize">{detailTab}</span><Badge size="sm" variant="secondary">4</Badge></div>
                          <PlaceholderLines rows={detailTab === "details" ? 9 : 5} />
                          <div className="bg-muted/30 mt-4 h-24 rounded-lg border border-dashed" />
                        </div>
                      </ResizablePanel>
                    </>
                  )}
                </ResizablePanelGroup>
              </TabsContent>
              {["activity", "briefs", "calls", "team", "more"].map((value) => (
                <TabsContent key={value} value={value} className="min-h-0 flex-1 overflow-y-auto p-4">
                  <div className="bg-muted/30 min-h-64 rounded-xl border border-dashed p-4"><PlaceholderLines rows={7} /></div>
                </TabsContent>
              ))}
            </Tabs>

            {showWorkbench && (
              <div className="flex h-64 shrink-0 flex-col border-t">
                <div className="flex h-10 items-center gap-2 px-4">
                  <span className="text-sm font-medium">Workbench</span>
                  <div className="ml-auto flex items-center gap-0.5">
                    <Button variant="ghost" size="icon-xs" aria-label="Workbench options"><EllipsisIcon /></Button>
                    <Button variant="ghost" size="icon-xs" aria-label="Expand workbench"><Maximize2Icon /></Button>
                    <Button variant="ghost" size="icon-xs" aria-label="Close workbench" onClick={() => setShowWorkbench(false)}><XIcon /></Button>
                  </div>
                </div>
                <Tabs value={workbenchTab} onValueChange={setWorkbenchTab} className="flex min-h-0 flex-1 flex-col gap-0">
                  <div className="min-h-0 flex-1 overflow-y-auto p-3">
                    <div className="bg-muted/30 h-full rounded-lg border border-dashed p-3"><PlaceholderLines rows={4} /></div>
                  </div>
                  <TabsList variant="line" className="h-9 shrink-0 justify-start rounded-none border-t px-2">
                    {workbenchTabs.map((item) => (
                      <TabsTrigger key={item.value} value={item.value}>
                        {item.label}
                        {item.count && <Badge size="sm" variant="secondary">{item.count}</Badge>}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            )}
          </div>

          {showRail && <RightRail />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppShell11Block
