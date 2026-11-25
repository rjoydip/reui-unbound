import { useEffect, useState } from "react"
import {
  BarChart3Icon,
  BookmarkIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  ClockIcon,
  CodeIcon,
  EllipsisIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  ImageIcon,
  MonitorIcon,
  MoonIcon,
  PanelLeftIcon,
  PlusIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  SunIcon,
} from "lucide-react"
import { usePanelRef } from "react-resizable-panels"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/kit/badge"
import { cn } from "cn"

const PINNED = ["Stripe webhook 500s on charge.refunded", "Q3 release notes draft"]
const RECENT = [
  "Stream chat responses",
  "Churn by plan tier",
  "Mobile onboarding revamp scope",
  "Why is p95 latency up on eu-west",
  "Rewrite the trial expiry email",
  "Postgres index for events table",
]
const ARTIFACTS = [
  { label: "release-notes-3.4.pdf", icon: FileTextIcon },
  { label: "stripe-webhook.ts", icon: CodeIcon },
  { label: "Churn by plan tier chart", icon: BarChart3Icon },
  { label: "Adoption chart", icon: ImageIcon },
]
const MODELS = ["Claude Sonnet 5", "GPT-5", "Gemini 3 Pro"]
const ORGS = [
  { name: "Atlas", dot: "bg-violet-500" },
  { name: "Relay", dot: "bg-teal-500" },
  { name: "Orbit", dot: "bg-amber-500" },
]
const THREAD_ACTIONS = ["Pin to top", "Rename", "Share link", "Archive", "Delete"]

function ThreadRow({
  title,
  isActive,
  onClick,
  onPin,
}: {
  title: string
  isActive: boolean
  onClick: () => void
  onPin: () => void
}) {
  return (
    <div className="group/thread relative flex items-center">
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "hover:bg-muted/60 flex h-8 min-w-0 flex-1 items-center rounded-md px-2 text-left text-sm transition-colors",
          isActive && "bg-muted font-medium",
        )}
      >
        <span className="truncate">{title}</span>
      </button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label={`Thread actions for ${title}`}
            className="absolute right-1 opacity-0 group-hover/thread:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100"
          >
            <EllipsisIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {THREAD_ACTIONS.map((action) => (
            <DropdownMenuItem
              key={action}
              onClick={action === "Pin to top" ? onPin : undefined}
            >
              {action}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function TurnSkeleton({ index }: { index: number }) {
  const lines =
    index % 2 === 0
      ? ["w-11/12", "w-3/4", "w-5/12"]
      : ["w-10/12", "w-8/12", "w-11/12"]
  return (
    <div className="flex gap-4">
      <div className="bg-muted mt-1 size-7 shrink-0 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        {lines.map((width, line) => (
          <div
            key={line}
            className={cn("bg-muted h-5 rounded-md", width)}
          />
        ))}
      </div>
    </div>
  )
}

export default function AppShellResizableAiChatBlock() {
  const panelRef = usePanelRef()
  const [rail, setRail] = useState(false)
  const [tab, setTab] = useState("chats")
  const [activeThread, setActiveThread] = useState(PINNED[0])
  const [pinned, setPinned] = useState(PINNED)
  const [recentOpen, setRecentOpen] = useState(true)
  const [pinnedOpen, setPinnedOpen] = useState(true)
  const [model, setModel] = useState(MODELS[0])
  const [memory, setMemory] = useState(true)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [org, setOrg] = useState("Atlas")

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const recent = RECENT.filter((thread) => !pinned.includes(thread))
  const results = [...pinned, ...recent].filter((thread) =>
    thread.toLowerCase().includes(query.trim().toLowerCase()),
  )

  function pin(title: string) {
    setPinned((current) =>
      current.includes(title) ? current : [...current, title],
    )
  }

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-svh min-h-[520px] rounded-lg border"
    >
      <ResizablePanel
        panelRef={panelRef}
        defaultSize={264}
        minSize={232}
        maxSize={400}
        collapsible
        collapsedSize={56}
        onResize={(size) => setRail(size.inPixels < 96)}
        className="bg-sidebar"
      >
        <div className="flex h-full flex-col overflow-hidden">
          <div className="flex h-13 shrink-0 items-center gap-2 px-3">
            {rail ? (
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Expand sidebar"
                className="mx-auto"
                onClick={() => panelRef.current?.expand()}
              >
                <PanelLeftIcon />
              </Button>
            ) : (
              <>
                <span className="bg-foreground text-background flex size-7 shrink-0 items-center justify-center rounded-md text-xs font-bold">
                  U
                </span>
                <span className="truncate text-sm font-semibold">ReUI Chat</span>
                <div className="ml-auto flex items-center gap-0.5">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Search chats"
                    onClick={() => setSearchOpen(true)}
                  >
                    <SearchIcon />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Collapse sidebar"
                    onClick={() => panelRef.current?.collapse()}
                  >
                    <PanelLeftIcon />
                  </Button>
                </div>
              </>
            )}
          </div>

          {rail ? (
            <div className="flex flex-1 flex-col items-center gap-1 pt-2">
              <Button variant="ghost" size="icon" aria-label="New chat">
                <PlusIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Artifacts"
                onClick={() => setTab("artifacts")}
              >
                <CodeIcon />
              </Button>
            </div>
          ) : (
            <>
              <div className="px-3 pb-3">
                <Tabs value={tab} onValueChange={setTab}>
                  <TabsList className="w-full">
                    <TabsTrigger value="chats">Chats</TabsTrigger>
                    <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <nav className="px-2">
                {[
                  { label: "New Chat", icon: PlusIcon, count: null },
                  { label: "Projects", icon: FolderIcon, count: 4 },
                  { label: "Scheduled", icon: ClockIcon, count: 2 },
                  { label: "Customize", icon: SlidersHorizontalIcon, count: null },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="hover:bg-muted/60 flex h-8 w-full items-center gap-2 rounded-md px-2 text-sm transition-colors"
                  >
                    <item.icon className="text-muted-foreground size-4" />
                    <span>{item.label}</span>
                    {item.count ? (
                      <span className="text-muted-foreground ml-auto text-xs">
                        {item.count}
                      </span>
                    ) : null}
                  </button>
                ))}
              </nav>

              <div className="border-border mt-2 flex-1 overflow-y-auto border-t px-2 py-2">
                {tab === "artifacts" ? (
                  <div className="space-y-0.5">
                    <p className="text-muted-foreground px-2 py-1.5 text-xs">
                      Recent artifacts
                    </p>
                    {ARTIFACTS.map((artifact) => (
                      <button
                        key={artifact.label}
                        type="button"
                        className="hover:bg-muted/60 flex h-8 w-full items-center gap-2 rounded-md px-2 text-left text-sm transition-colors"
                      >
                        <artifact.icon className="text-muted-foreground size-4 shrink-0" />
                        <span className="truncate">{artifact.label}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <>
                    <Collapsible
                      open={pinnedOpen}
                      onOpenChange={setPinnedOpen}
                    >
                      <CollapsibleTrigger className="text-muted-foreground flex w-full items-center px-2 py-1.5 text-xs font-medium">
                        Pinned
                        <span className="ml-auto">{pinned.length}</span>
                        <ChevronRightIcon
                          className={cn(
                            "ml-1 size-3 transition-transform",
                            pinnedOpen && "rotate-90",
                          )}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        {pinned.map((thread) => (
                          <ThreadRow
                            key={thread}
                            title={thread}
                            isActive={thread === activeThread}
                            onClick={() => setActiveThread(thread)}
                            onPin={() => pin(thread)}
                          />
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible
                      open={recentOpen}
                      onOpenChange={setRecentOpen}
                      className="mt-1"
                    >
                      <CollapsibleTrigger className="text-muted-foreground flex w-full items-center px-2 py-1.5 text-xs font-medium">
                        Recent
                        <span className="ml-auto">{recent.length}</span>
                        <ChevronRightIcon
                          className={cn(
                            "ml-1 size-3 transition-transform",
                            recentOpen && "rotate-90",
                          )}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        {recent.map((thread) => (
                          <ThreadRow
                            key={thread}
                            title={thread}
                            isActive={thread === activeThread}
                            onClick={() => setActiveThread(thread)}
                            onPin={() => pin(thread)}
                          />
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </>
                )}
              </div>

              <div className="border-border space-y-0.5 border-t px-2 py-2">
                {[
                  { label: "Docs", icon: FileTextIcon },
                  { label: "What is new", icon: SparklesIcon },
                  { label: "Help", icon: HelpCircleIcon },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="hover:bg-muted/60 text-muted-foreground flex h-7 w-full items-center gap-2 rounded-md px-2 text-xs transition-colors"
                  >
                    <item.icon className="size-3.5" />
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="border-border border-t p-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="hover:bg-muted/60 flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left transition-colors"
                    >
                      <Avatar className="size-7">
                        <AvatarFallback className="text-xs">CN</AvatarFallback>
                      </Avatar>
                      <span className="flex min-w-0 flex-col">
                        <span className="truncate text-sm font-medium">shadcn</span>
                        <span className="text-muted-foreground flex items-center gap-1 truncate text-xs">
                          <span
                            className={cn(
                              "size-2 rounded-full",
                              ORGS.find((entry) => entry.name === org)?.dot,
                            )}
                          />
                          {org} · Max
                        </span>
                      </span>
                      <EllipsisIcon className="text-muted-foreground ml-auto size-4 shrink-0" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" side="top" className="w-62">
                    <DropdownMenuLabel>Organizations</DropdownMenuLabel>
                    {ORGS.map((entry) => (
                      <DropdownMenuItem key={entry.name} onClick={() => setOrg(entry.name)}>
                        <span className={cn("size-3 rounded-full", entry.dot)} />
                        {entry.name}
                        {org === entry.name ? (
                          <CheckIcon className="ml-auto size-4" />
                        ) : null}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem>
                      <PlusIcon />
                      New Organization
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Preferences</DropdownMenuItem>
                    <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
                      <SunIcon />
                      Theme
                      <span className="ml-auto inline-flex items-center gap-0.5">
                        {[SunIcon, MoonIcon, MonitorIcon].map((Icon, index) => (
                          <span
                            key={index}
                            className={cn(
                              "flex size-5 items-center justify-center rounded-sm",
                              index === 0 && "bg-muted",
                            )}
                          >
                            <Icon className="size-3" />
                          </span>
                        ))}
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Sign Out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          )}
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel className="bg-background flex min-w-0 flex-col">
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-5">
          <h1 className="truncate text-sm font-medium">{activeThread}</h1>
          <div className="ml-auto flex items-center gap-1">
            <Button variant="ghost" size="icon-sm" aria-label="Bookmark thread">
              <BookmarkIcon />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5">
                  {model}
                  <ChevronDownIcon className="size-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel>Model</DropdownMenuLabel>
                {MODELS.map((entry) => (
                  <DropdownMenuItem key={entry} onClick={() => setModel(entry)}>
                    {entry}
                    {model === entry ? <CheckIcon className="ml-auto size-4" /> : null}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={memory}
                  onCheckedChange={setMemory}
                >
                  Memory
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon-sm" aria-label="Thread options">
              <EllipsisIcon />
            </Button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-9 overflow-y-auto px-6 py-8">
            <div className="ml-auto h-7 w-64 rounded-md bg-muted" />
            <TurnSkeleton index={0} />
            <div className="ml-auto h-7 w-52 rounded-md bg-muted" />
            <TurnSkeleton index={1} />
            <div className="ml-auto h-7 w-40 rounded-md bg-muted" />
            <TurnSkeleton index={2} />
          </div>
          <div className="px-6 pb-6">
            <div className="mx-auto w-full max-w-4xl">
              <div className="bg-muted/50 h-20 rounded-2xl border" />
              <div className="bg-muted mx-auto mt-3 h-3 w-48 rounded-md" />
            </div>
          </div>
        </div>
      </ResizablePanel>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-lg">
          <DialogHeader className="sr-only">
            <DialogTitle>Search chats</DialogTitle>
            <DialogDescription>Jump to a thread in this workspace.</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 border-b px-3">
            <SearchIcon className="text-muted-foreground size-4" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search chats and artifacts..."
              className="h-11 w-full bg-transparent text-sm outline-none"
            />
          </div>
          <div className="max-h-72 overflow-y-auto p-2">
            {results.map((thread) => (
              <button
                key={thread}
                type="button"
                onClick={() => {
                  setActiveThread(thread)
                  setSearchOpen(false)
                }}
                className="hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors"
              >
                <ChevronsUpDownIcon className="text-muted-foreground size-4 shrink-0" />
                <span className="truncate">{thread}</span>
              </button>
            ))}
            {results.length === 0 ? (
              <p className="text-muted-foreground px-2 py-6 text-center text-sm">
                No chats match “{query}”
              </p>
            ) : null}
          </div>
          <div className="text-muted-foreground flex items-center gap-2 border-t px-3 py-2 text-xs">
            <Badge variant="outline" size="sm">
              {model}
            </Badge>
            <span>{memory ? "Memory on" : "Memory off"}</span>
          </div>
        </DialogContent>
      </Dialog>
    </ResizablePanelGroup>
  )
}
