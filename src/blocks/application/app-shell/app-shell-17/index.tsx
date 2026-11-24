import { useState, type CSSProperties } from "react"
import {
  ApertureIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  AsteriskIcon,
  ChevronDownIcon,
  CodeXmlIcon,
  CopyIcon,
  DatabaseIcon,
  EllipsisIcon,
  FileTextIcon,
  GemIcon,
  GlobeIcon,
  HistoryIcon,
  ListChecksIcon,
  MailIcon,
  MapPinIcon,
  MicIcon,
  PinIcon,
  PlusIcon,
  SearchIcon,
  Share2Icon,
  SparklesIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { cn } from "cn"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const models = [
  { name: "GPT-4", icon: ApertureIcon, tone: "text-foreground" },
  { name: "Claude", icon: AsteriskIcon, tone: "text-orange-500" },
  { name: "Gemini", icon: GemIcon, tone: "text-sky-500" },
]

const pinned = [
  { title: "Onboarding email draft", model: "Claude", meta: "7 msgs" },
]

const recent = [
  { title: "Quarterly revenue summary", icon: FileTextIcon, active: true },
  { title: "Refactor auth middleware", icon: CodeXmlIcon },
  { title: "Lisbon trip itinerary", icon: MapPinIcon },
  { title: "Launch checklist draft", icon: ListChecksIcon },
  { title: "Explain vector search", icon: SearchIcon },
  { title: "Optimize SQL query", icon: DatabaseIcon },
]

const quickActions = [
  { label: "Favorites", icon: StarIcon, count: "2", tone: "info-light" },
  { label: "Clear History", icon: Trash2Icon },
  { label: "Chat History", icon: HistoryIcon },
  { label: "Templates", icon: FileTextIcon, count: "5", tone: "destructive-light" },
]

const suggestions = [
  { label: "Draft an email", icon: MailIcon },
  { label: "Summarize a file", icon: FileTextIcon },
  { label: "Write a function", icon: CodeXmlIcon },
  { label: "Plan a trip", icon: MapPinIcon },
]

function ModelMark({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const model = models.find((item) => item.name === name) ?? models[0]
  return <model.icon className={cn("size-4", model.tone, className)} />
}

function ChatActions({ title }: { title: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={`Actions for ${title}`}
          className="text-muted-foreground hover:bg-background hover:text-foreground flex size-5 items-center justify-center rounded-sm opacity-0 transition-colors group-hover/chat:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100"
        >
          <EllipsisIcon className="size-3.5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <StarIcon />
          Add To Favorites
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PinIcon />
          Pin Chat
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CopyIcon />
          Copy Link
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2Icon />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function AppShell17Block() {
  const [model, setModel] = useState("GPT-4")
  const [draft, setDraft] = useState("")

  return (
    <SidebarProvider
      className="bg-muted/30 h-svh overflow-hidden"
      style={{ "--sidebar-width": "15rem" } as CSSProperties}
    >
      <Sidebar variant="floating" collapsible="offcanvas">
        <SidebarHeader className="flex-row items-center gap-2 px-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background">
            U
          </span>
          <span className="text-sm font-semibold">ReUI AI</span>
          <SidebarTrigger className="text-muted-foreground ml-auto" />
        </SidebarHeader>

        <div className="px-2">
          <Button className="w-full justify-between rounded-lg">
            New Chat
            <SparklesIcon />
          </Button>
        </div>

        <SidebarContent className="px-1">
          <div className="px-2 pt-2">
            <p className="text-muted-foreground mb-2 text-xs font-medium">
              AI Model
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              {models.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={model === item.name}
                  onClick={() => setModel(item.name)}
                  className={cn(
                    "hover:bg-muted flex flex-col items-center gap-1 rounded-lg border px-1 py-2 text-xs transition-colors",
                    model === item.name
                      ? "border-border bg-muted/70"
                      : "border-transparent",
                  )}
                >
                  <item.icon className={cn("size-4", item.tone)} />
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="px-2 pt-4">
            <p className="text-muted-foreground mb-2 text-xs font-medium">
              Pinned
            </p>
            {pinned.map((chat) => (
              <button
                key={chat.title}
                type="button"
                className="hover:bg-muted/60 w-full rounded-lg border p-2 text-left transition-colors"
              >
                <span className="flex items-start gap-2">
                  <span className="bg-muted text-muted-foreground flex size-5 shrink-0 items-center justify-center rounded-sm">
                    <MailIcon className="size-3" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">
                      {chat.title}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-xs">
                      <Badge size="sm" variant="outline">
                        {chat.model}
                      </Badge>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{chat.meta}</span>
                    </span>
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div className="px-2 pt-4">
            <p className="text-muted-foreground mb-1 text-xs font-medium">
              Recent
            </p>
            <div className="flex flex-col">
              {recent.map((chat) => (
                <div
                  key={chat.title}
                  className={cn(
                    "group/chat flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                    chat.active ? "bg-muted" : "hover:bg-muted/60",
                  )}
                >
                  <chat.icon className="text-muted-foreground size-4 shrink-0" />
                  <span className="truncate">{chat.title}</span>
                  <span className="ml-auto shrink-0">
                    <ChatActions title={chat.title} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-2 pt-4">
            <p className="text-muted-foreground mb-1 text-xs font-medium">
              Quick Actions
            </p>
            <div className="flex flex-col">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className="hover:bg-muted/60 flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
                >
                  <action.icon className="size-4 shrink-0" />
                  <span className="truncate">{action.label}</span>
                  {action.count ? (
                    <Badge
                      size="sm"
                      variant={
                        action.tone === "info-light"
                          ? "info-light"
                          : "destructive-light"
                      }
                      className="ml-auto"
                    >
                      {action.count}
                    </Badge>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <span className="relative">
                  <Avatar className="size-8">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"
                      alt="AI Assistant"
                    />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <span className="ring-sidebar absolute right-0 bottom-0 size-2.5 rounded-full bg-emerald-500 ring-2" />
                </span>
                <span className="flex min-w-0 flex-col text-left">
                  <span className="truncate text-sm font-medium">
                    AI Assistant
                  </span>
                  <span className="text-muted-foreground truncate text-xs">
                    Always here to help
                  </span>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <main className="flex min-w-0 flex-1 py-2 pr-2">
        <div className="bg-background flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border">
          <header className="flex h-14 shrink-0 items-center gap-2 px-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <ModelMark name={model} />
                  {model}
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {models.map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    onSelect={() => setModel(item.name)}
                  >
                    <item.icon className={cn("size-4", item.tone)} />
                    {item.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="ml-auto gap-2">
              <Share2Icon />
              Share Chat
            </Button>
          </header>

          <div className="flex min-h-0 flex-1 flex-col px-4">
            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="flex w-full max-w-2xl flex-col items-center">
                <span className="bg-foreground text-background mb-4 flex size-9 items-center justify-center rounded-lg text-base font-bold">
                  U
                </span>
                <h1 className="text-2xl font-semibold">How Can I Help?</h1>
                <p className="text-muted-foreground mt-1 text-sm">
                  Start a chat or pick a prompt below.
                </p>

                <div className="mt-8 grid w-full gap-2 sm:grid-cols-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion.label}
                      type="button"
                      onClick={() => setDraft(suggestion.label)}
                      className="hover:bg-muted flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors"
                    >
                      <suggestion.icon className="text-muted-foreground size-4" />
                      <span className="font-medium">{suggestion.label}</span>
                      <ArrowUpRightIcon className="text-muted-foreground ml-auto size-3.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl pb-2">
              <div className="bg-background rounded-xl border p-3 shadow-sm">
                <textarea
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  rows={2}
                  placeholder="Message ReUI AI..."
                  aria-label="Message ReUI AI"
                  className="placeholder:text-muted-foreground w-full resize-none bg-transparent text-sm outline-none"
                />
                <div className="flex items-center gap-2 pt-2">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Attach file"
                    className="text-muted-foreground"
                  >
                    <PlusIcon />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground gap-1.5"
                  >
                    <GlobeIcon />
                    Search
                  </Button>
                  <span className="text-muted-foreground ml-auto hidden text-xs sm:block">
                    {model}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Voice input"
                    className="text-muted-foreground"
                  >
                    <MicIcon />
                  </Button>
                  <Button
                    size="icon-sm"
                    aria-label="Send message"
                    className="rounded-full"
                    onClick={() => setDraft("")}
                  >
                    <ArrowUpIcon />
                  </Button>
                </div>
              </div>
              <p className="text-muted-foreground mt-2 text-center text-xs">
                ReUI AI can make mistakes. Check important info.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default AppShell17Block
