import { useState, type CSSProperties } from "react"
import {
  ArrowUpIcon,
  CalendarIcon,
  CheckCircle2Icon,
  ChevronsUpDownIcon,
  ClockIcon,
  FlagIcon,
  ListChecksIcon,
  ListTodoIcon,
  LogOutIcon,
  MonitorIcon,
  MoonIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  SparklesIcon,
  SunIcon,
  UserIcon,
  XIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "cn"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Progress, ProgressValue } from "@/components/ui/progress"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Textarea } from "@/components/ui/textarea"

const lists = [
  { label: "All Tasks", icon: ListChecksIcon, count: 42, active: true },
  { label: "Today", icon: CalendarIcon, count: 6 },
  { label: "Upcoming", icon: ClockIcon, count: 14 },
  { label: "Priority", icon: FlagIcon, count: 4 },
  { label: "Completed", icon: CheckCircle2Icon, count: 18 },
]

const tags = [
  { label: "Work", dot: "bg-rose-500" },
  { label: "Personal", dot: "bg-emerald-500" },
  { label: "Team", dot: "bg-amber-500" },
  { label: "Goals", dot: "bg-sky-500" },
]

type Message = { role: "assistant" | "user"; text: string }

const initialMessages: Message[] = [
  {
    role: "assistant",
    text: "Morning, Mira. You have 6 tasks due today and 3 are high priority.",
  },
  { role: "user", text: "What should I tackle first?" },
  {
    role: "assistant",
    text: "Start with the launch announcement copy - it blocks two other tasks and is due at 2:00 PM.",
  },
]

const suggested = ["Summarize my day", "Plan the week", "Surface blockers"]

const reply =
  "Focus on the launch announcement copy first, then review the sprint board before your 2:00 PM check-in."

function AssistantPanel({
  messages,
  draft,
  onDraftChange,
  onSend,
  onClose,
}: {
  messages: Message[]
  draft: string
  onDraftChange: (value: string) => void
  onSend: () => void
  onClose: () => void
}) {
  return (
    <div className="flex h-full flex-col">
      <header className="flex h-12 shrink-0 items-center gap-2 border-b px-3">
        <SparklesIcon className="size-4" />
        <span className="text-sm font-medium">AI Assistant</span>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Close assistant"
          onClick={onClose}
          className="text-muted-foreground ml-auto"
        >
          <XIcon />
        </Button>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto p-3">
        {messages.map((message, index) =>
          message.role === "assistant" ? (
            <div key={index} className="flex items-start gap-2">
              <span className="bg-muted mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md">
                <SparklesIcon className="size-3.5" />
              </span>
              <p className="bg-muted max-w-[85%] rounded-lg px-3 py-2 text-sm">
                {message.text}
              </p>
            </div>
          ) : (
            <div key={index} className="flex items-start justify-end gap-2">
              <p className="bg-foreground text-background max-w-[85%] rounded-lg px-3 py-2 text-sm">
                {message.text}
              </p>
              <Avatar className="mt-0.5 size-6">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"
                  alt="Mira Stone"
                />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
            </div>
          ),
        )}

        <div className="pt-2">
          <p className="text-muted-foreground mb-2 text-xs">Suggested</p>
          <div className="flex flex-wrap gap-1.5">
            {suggested.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onDraftChange(item)}
                className="hover:bg-muted rounded-full border px-2.5 py-1 text-xs transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t p-3">
        <Textarea
          value={draft}
          onChange={(event) => onDraftChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault()
              onSend()
            }
          }}
          rows={2}
          placeholder="Ask anything about your tasks..."
          aria-label="Ask anything about your tasks"
          className="min-h-16 resize-none"
        />
        <div className="mt-2 flex justify-end">
          <Button
            size="icon-sm"
            aria-label="Send message"
            disabled={!draft.trim()}
            onClick={onSend}
          >
            <ArrowUpIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export function AppShell18Block() {
  const [assistantOpen, setAssistantOpen] = useState(true)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [newTaskOpen, setNewTaskOpen] = useState(false)
  const [taskName, setTaskName] = useState("")
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [draft, setDraft] = useState("")
  const [query, setQuery] = useState("")

  const openAssistant = () => {
    setAssistantOpen(true)
    setSheetOpen(true)
  }

  const send = () => {
    const text = draft.trim()
    if (!text) return
    setMessages((current) => [
      ...current,
      { role: "user", text },
      { role: "assistant", text: reply },
    ])
    setDraft("")
  }

  const assistant = (
    <AssistantPanel
      messages={messages}
      draft={draft}
      onDraftChange={setDraft}
      onSend={send}
      onClose={() => setAssistantOpen(false)}
    />
  )

  return (
    <SidebarProvider
      className="bg-muted/30 h-svh overflow-hidden"
      style={{ "--sidebar-width": "15.5rem" } as CSSProperties}
    >
      <Sidebar variant="floating" collapsible="offcanvas">
        <SidebarHeader className="flex-row items-center gap-2 px-2">
          <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md text-sm font-bold">
            U
          </span>
          <span className="text-sm font-semibold">ReUI</span>
          <SidebarTrigger className="text-muted-foreground ml-auto" />
        </SidebarHeader>

        <div className="px-2">
          <Button className="w-full justify-start gap-1.5" onClick={() => setNewTaskOpen(true)}>
            <PlusIcon />
            New Task
          </Button>
        </div>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>My Lists</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {lists.map((list) => (
                  <SidebarMenuItem key={list.label}>
                    <SidebarMenuButton isActive={list.active} tooltip={list.label}>
                      <list.icon />
                      <span>{list.label}</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>
                      <span className="text-muted-foreground text-xs tabular-nums">
                        {list.count}
                      </span>
                    </SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Tags</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="flex flex-wrap gap-1.5 px-1">
                {tags.map((tag) => (
                  <button
                    key={tag.label}
                    type="button"
                    className="hover:bg-muted flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs transition-colors"
                  >
                    <span className={cn("size-1.5 rounded-full", tag.dot)} />
                    {tag.label}
                  </button>
                ))}
                <button
                  type="button"
                  className="hover:bg-muted flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs transition-colors"
                >
                  <PlusIcon className="size-3" />
                  Add Tag
                </button>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="gap-2">
          <div className="rounded-lg border p-3">
            <Progress value={56}>
              <span className="text-xs font-medium">Focus Progress</span>
              <ProgressValue className="text-foreground text-xs font-medium">
                18 / 32
              </ProgressValue>
            </Progress>
            <p className="mt-2 text-sm font-medium">Launch Campaign</p>
            <p className="text-muted-foreground text-xs">
              Next milestone in 3 days
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="hover:bg-muted flex w-full items-center gap-2 rounded-lg px-1 py-1 text-left transition-colors"
              >
                <span className="relative">
                  <Avatar className="size-8">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"
                      alt="Mira Stone"
                    />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <span className="ring-sidebar absolute right-0 bottom-0 size-2.5 rounded-full bg-emerald-500 ring-2" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-medium">Mira Stone</span>
                  <span className="text-muted-foreground truncate text-xs">
                    mira@reui.io
                  </span>
                </span>
                <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuItem>
                <UserIcon />
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Preferences
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ListChecksIcon />
                My Tasks
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CheckCircle2Icon />
                Completed
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SparklesIcon />
                Help &amp; Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
                <SunIcon />
                Theme
                <span className="ml-auto flex items-center gap-0.5">
                  <SunIcon className="size-3.5" />
                  <MoonIcon className="size-3.5" />
                  <MonitorIcon className="size-3.5" />
                </span>
              </DropdownMenuItem>
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

      <main className="flex min-w-0 flex-1 gap-2 py-2 pr-2">
        <section className="bg-background flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border">
          <header className="flex flex-wrap items-center gap-2 border-b px-4 py-3">
            <ListTodoIcon className="size-4" />
            <h1 className="text-sm font-semibold">All Tasks</h1>
            <div className="ml-auto flex items-center gap-2">
              <div className="relative hidden sm:block">
                <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search tasks"
                  placeholder="Search tasks"
                  className="h-8 w-56 pl-8 pr-14"
                />
                <KbdGroup className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2">
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </KbdGroup>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  if (window.matchMedia("(min-width: 1024px)").matches) {
                    setAssistantOpen(true)
                  } else {
                    setSheetOpen(true)
                  }
                }}
                className="gap-1.5"
              >
                <SparklesIcon />
                Assistant
              </Button>
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            <div className="grid gap-4 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-muted/20 h-44 rounded-xl border border-dashed"
                />
              ))}
            </div>
            <div className="bg-muted/20 min-h-72 flex-1 rounded-xl border border-dashed" />
          </div>
        </section>

        {assistantOpen ? (
          <aside className="bg-background hidden w-80 shrink-0 overflow-hidden rounded-xl border lg:flex lg:flex-col">
            {assistant}
          </aside>
        ) : null}

        <div className="lg:hidden">
          <Button
            size="icon"
            aria-label="Open assistant"
            onClick={openAssistant}
            className="fixed right-4 bottom-4 z-30 rounded-full shadow-lg"
          >
            <SparklesIcon />
          </Button>
        </div>
      </main>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="w-full p-0 sm:max-w-sm">
          <SheetHeader className="sr-only">
            <SheetTitle>AI Assistant</SheetTitle>
          </SheetHeader>
          <div className="h-full">
            <AssistantPanel
              messages={messages}
              draft={draft}
              onDraftChange={setDraft}
              onSend={send}
              onClose={() => setSheetOpen(false)}
            />
          </div>
        </SheetContent>
      </Sheet>

      <Dialog open={newTaskOpen} onOpenChange={setNewTaskOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Task</DialogTitle>
            <DialogDescription className="sr-only">
              Add a task to your list.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="task-name">Task name</Label>
            <Input
              id="task-name"
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
              placeholder="What needs to get done?"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setNewTaskOpen(false)}>
              Cancel
            </Button>
            <Button
              disabled={!taskName.trim()}
              onClick={() => {
                setTaskName("")
                setNewTaskOpen(false)
              }}
            >
              Create Task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  )
}

export default AppShell18Block
