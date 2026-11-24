import { useMemo, useState } from "react"
import {
  ArrowUpIcon,
  BoxesIcon,
  CheckIcon,
  ChevronRightIcon,
  CircleHelpIcon,
  FileTextIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  UploadIcon,
  UsersIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

type OrderStatus = "Review" | "Ready" | "Overdue"

type Order = {
  id: string
  status?: OrderStatus
  checks?: { label: string; issues: number }[]
}

const orders: Order[] = [
  {
    id: "PO-2026-10021",
    status: "Review",
    checks: [
      { label: "Document validation", issues: 1 },
      { label: "3-way line match", issues: 2 },
      { label: "Approve payment", issues: 0 },
    ],
  },
  { id: "PO-2026-10001", status: "Ready" },
  { id: "PO-2026-10024" },
  { id: "PO-2026-10032" },
  { id: "PO-2026-10011" },
  { id: "PO-2026-10033", status: "Review" },
  { id: "PO-2026-10022" },
  { id: "PO-2026-10051" },
  { id: "PO-2026-10053", status: "Review" },
  { id: "PO-2026-10070" },
  { id: "PO-2026-10020", status: "Overdue" },
  { id: "PO-2026-10023", status: "Ready" },
  { id: "PO-2026-10090" },
]

const statusVariant: Record<OrderStatus, "warning-light" | "success-light" | "destructive-light"> = {
  Review: "warning-light",
  Ready: "success-light",
  Overdue: "destructive-light",
}

const railItems: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Matching queue", icon: BoxesIcon, active: true },
  { label: "Documents", icon: FileTextIcon },
  { label: "Purchase orders", icon: FileTextIcon },
  { label: "Vendors", icon: UsersIcon },
  { label: "Workflows", icon: SlidersHorizontalIcon },
]

const advisorAnswer = [
  "Two checks failed on PO-2026-10021, so Approve payment cannot start. Document validation raised 1 issue and the 3-way line match raised 2.",
  "1. Clear Document validation first. The tax ID on the invoice differs from the supplier record, and nothing after it runs until that is fixed.",
  "2. Then open 3-way line match. Line 2 is invoiced for 500 units against 480 received, and line 4 is priced 3.1% over the PO.",
  "3. Ask for a credit note on the 20 short units rather than overbidding. The price gap needs the buyer's sign off.",
  "Price tolerance is 2% per line, so the 3.1% variance cannot be approved from the queue.",
]

function SkeletonCard({ lines = 3 }: { lines?: number }) {
  return (
    <div className="bg-card rounded-xl border p-4">
      <Skeleton className="h-2.5 w-1/3" />
      <div className="mt-4 space-y-2">
        {Array.from({ length: lines }, (_, index) => (
          <Skeleton key={index} className="h-2.5" style={{ width: `${90 - index * 15}%` }} />
        ))}
      </div>
      <Skeleton className="mt-4 h-24 w-full rounded-lg" />
    </div>
  )
}

export default function AppShell34Block() {
  const [tab, setTab] = useState("matching")
  const [query, setQuery] = useState("")
  const [expanded, setExpanded] = useState<string | null>("PO-2026-10021")
  const [selected, setSelected] = useState("PO-2026-10021")
  const [advisorOpen, setAdvisorOpen] = useState(false)
  const [draft, setDraft] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const filtered = useMemo(
    () => orders.filter((order) => order.id.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  const send = () => {
    const value = draft.trim()
    if (!value) return
    setMessages((current) => [...current, value])
    setDraft("")
  }

  return (
    <TooltipProvider>
      <div className="bg-background flex h-svh overflow-hidden">
        <aside className="hidden w-14 shrink-0 flex-col items-center gap-1 border-r py-3 md:flex">
          <span className="bg-foreground text-background mb-2 flex size-8 items-center justify-center rounded-lg text-sm font-bold">
            U
          </span>
          {railItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  aria-label={item.label}
                  className={cn(
                    "text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-lg transition-colors",
                    item.active && "bg-muted text-foreground",
                  )}
                >
                  <item.icon className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
          <div className="mt-auto flex flex-col items-center gap-1">
            <button type="button" aria-label="Help" className="text-muted-foreground hover:bg-muted flex size-8 items-center justify-center rounded-lg">
              <CircleHelpIcon className="size-4" />
            </button>
            <button type="button" aria-label="Settings" className="text-muted-foreground hover:bg-muted flex size-8 items-center justify-center rounded-lg">
              <SettingsIcon className="size-4" />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button type="button" aria-label="Account menu" className="mt-1 rounded-full">
                  <Avatar className="size-7">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
                      alt="Shadcn"
                    />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" side="right" className="w-52">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Preferences</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </aside>

        <aside className="flex w-[300px] shrink-0 flex-col border-r">
          <div className="p-3 pb-2">
            <h1 className="text-sm font-semibold">3WIM Queue</h1>
            <Tabs value={tab} onValueChange={setTab} className="mt-2">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="matching" className="text-xs">Matching Queue</TabsTrigger>
                <TabsTrigger value="completed" className="text-xs">Completed Matches</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="mt-3 flex items-center gap-1.5">
              <div className="relative flex-1">
                <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search purchase orders"
                  placeholder="Search..."
                  className="h-8 pl-7 text-xs"
                />
              </div>
              <Button variant="outline" size="icon-sm" aria-label="Filter purchase orders">
                <SlidersHorizontalIcon />
              </Button>
            </div>
            <p className="text-muted-foreground mt-3 text-xs">
              {tab === "completed"
                ? "0 orders"
                : query
                  ? `${filtered.length} matches`
                  : "31 orders"}
            </p>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-2">
            {tab === "completed" ? (
              <div className="mt-8 flex flex-col items-center gap-2 px-6 text-center">
                <span className="bg-success/10 text-success-foreground flex size-9 items-center justify-center rounded-full">
                  <CheckIcon className="size-4" />
                </span>
                <p className="text-sm font-medium">No completed matches yet</p>
                <p className="text-muted-foreground text-xs">
                  Approved purchase orders will appear here once the three-way match clears.
                </p>
              </div>
            ) : filtered.length ? (
              filtered.map((order) =>
                order.checks ? (
                  <Collapsible
                    key={order.id}
                    className="group/po"
                    open={expanded === order.id}
                    onOpenChange={(open) => setExpanded(open ? order.id : null)}
                  >
                    <div className="flex items-center gap-1">
                      <CollapsibleTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "hover:bg-muted/60 flex min-w-0 flex-1 items-center gap-1.5 rounded-md px-1.5 py-1.5 text-left text-[13px] font-medium",
                            selected === order.id && "bg-muted",
                          )}
                          onClick={() => setSelected(order.id)}
                        >
                          <ChevronRightIcon className="size-3.5 shrink-0 transition-transform group-data-[state=open]/po:rotate-90" />
                          <span className="truncate">{order.id}</span>
                          {order.status ? (
                            <Badge size="xs" variant={statusVariant[order.status]} className="ml-auto">
                              {order.status}
                            </Badge>
                          ) : null}
                        </button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <p className="text-muted-foreground mt-1 mb-1 pl-5 text-[11px] font-medium">
                        3WIM
                      </p>
                      <ul className="border-border ml-4 space-y-0.5 border-l pl-2">
                        {order.checks.map((check, index) => (
                          <li key={check.label} className="flex items-center gap-1.5">
                            <span
                              aria-hidden="true"
                              className={cn(
                                "flex size-4 shrink-0 items-center justify-center rounded-full border text-[9px] font-bold",
                                check.issues
                                  ? "border-destructive bg-destructive/10 text-destructive"
                                  : "border-border text-muted-foreground",
                              )}
                            >
                              {check.issues ? check.issues : index === 2 ? "2" : ""}
                            </span>
                            <span className="flex min-w-0 flex-1 items-center gap-1 text-[12px]">
                              <span className="truncate">{check.label}</span>
                              {check.issues ? (
                                <Badge size="xs" variant="destructive-light">
                                  {check.issues}
                                </Badge>
                              ) : null}
                            </span>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button
                                  type="button"
                                  aria-label={`Actions for ${check.label}`}
                                  className="text-muted-foreground hover:text-foreground flex size-5 items-center justify-center rounded"
                                >
                                  <MoreHorizontalIcon className="size-3.5" />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Open Check</DropdownMenuItem>
                                <DropdownMenuItem>Assign Reviewer</DropdownMenuItem>
                                <DropdownMenuItem>
                                  <CheckIcon />
                                  Mark Resolved
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </li>
                        ))}
                        <li className="pt-1">
                          <button type="button" className="text-muted-foreground hover:text-foreground flex items-center gap-1 pl-1 text-[11px]">
                            <ChevronRightIcon className="size-3" />
                            More
                          </button>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <button
                    key={order.id}
                    type="button"
                    onClick={() => setSelected(order.id)}
                    className={cn(
                      "hover:bg-muted/60 flex w-full items-center gap-1.5 rounded-md px-1.5 py-1.5 text-left text-[13px] transition-colors",
                      selected === order.id && "bg-muted",
                    )}
                  >
                    <ChevronRightIcon className="text-muted-foreground size-3.5 shrink-0" />
                    <span className="truncate">{order.id}</span>
                    {order.status ? (
                      <Badge size="xs" variant={statusVariant[order.status]} className="ml-auto">
                        {order.status}
                      </Badge>
                    ) : null}
                  </button>
                ),
              )
            ) : (
              <p className="text-muted-foreground px-3 py-6 text-center text-xs">
                No purchase orders match “{query}”.
              </p>
            )}
          </div>

          <div className="border-t p-2">
            <Button variant="outline" className="w-full justify-center gap-1.5">
              <PlusIcon />
              New 3WIM
            </Button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex h-12 shrink-0 items-center justify-end gap-2 px-4">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={() => setAdvisorOpen((open) => !open)}
            >
              <SparklesIcon />
              Ask AI
            </Button>
            <Button size="sm" className="gap-1.5">
              <UploadIcon />
              Upload New
            </Button>
          </div>

          <main className="bg-muted/20 min-w-0 flex-1 overflow-y-auto p-4 pt-0">
            <div className="bg-gradient-to-r from-violet-200/50 via-background to-amber-100/60 dark:from-violet-500/10 dark:via-background dark:to-amber-500/10 rounded-xl border p-4">
              <Skeleton className="h-2.5 w-40" />
              <Skeleton className="mt-4 h-2.5 w-1/2" />
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <Skeleton className="h-28 rounded-lg" />
                <Skeleton className="h-28 rounded-lg" />
              </div>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <SkeletonCard lines={2} />
              <SkeletonCard lines={4} />
              <SkeletonCard lines={3} />
            </div>

            <div className="bg-card mt-3 rounded-xl border p-4">
              <Skeleton className="h-2.5 w-40" />
              <div className="mt-4 divide-y">
                {Array.from({ length: 5 }, (_, index) => (
                  <div key={index} className="flex items-center gap-3 py-3">
                    <Skeleton className="size-4 rounded-full" />
                    <Skeleton className="h-2.5 w-1/4" />
                    <Skeleton className="ml-auto h-2.5 w-16" />
                    <Skeleton className="h-2.5 w-12" />
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>

        {advisorOpen ? (
          <aside className="bg-background hidden w-80 shrink-0 flex-col border-l xl:flex">
            <div className="flex h-12 items-center gap-2 border-b px-3">
              <SparklesIcon className="size-4" />
              <span className="text-sm font-semibold">3WIM Advisor</span>
              <div className="ml-auto flex items-center gap-0.5">
                <Button variant="ghost" size="icon-sm" aria-label="New chat">
                  <PlusIcon />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="Advisor options">
                  <SlidersHorizontalIcon />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Close advisor"
                  onClick={() => setAdvisorOpen(false)}
                >
                  <XIcon />
                </Button>
              </div>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto p-3">
              <div className="flex justify-end">
                <p className="bg-foreground text-background max-w-[85%] rounded-2xl px-3 py-2 text-sm">
                  Why is PO-2026-10021 on hold?
                </p>
              </div>
              <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
                <FileTextIcon className="size-3.5" />
                Read 6 policies · Used 4
              </p>
              <div className="bg-muted/40 rounded-2xl border p-3 text-sm leading-relaxed">
                {advisorAnswer.map((paragraph) => (
                  <p key={paragraph} className="mt-2 first:mt-0">{paragraph}</p>
                ))}
              </div>
              {messages.map((message) => (
                <div key={message} className="flex justify-end">
                  <p className="bg-foreground text-background max-w-[85%] rounded-2xl px-3 py-2 text-sm">
                    {message}
                  </p>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon-xs" aria-label="Helpful">
                  <ThumbsUpIcon />
                </Button>
                <Button variant="ghost" size="icon-xs" aria-label="Not helpful">
                  <ThumbsDownIcon />
                </Button>
              </div>
              {["How do I request a credit note?", "Who can override a failed match?"].map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setMessages((current) => [...current, prompt])}
                  className="text-muted-foreground hover:text-foreground flex w-full items-center gap-2 text-left text-xs"
                >
                  <span aria-hidden="true">↳</span>
                  {prompt}
                </button>
              ))}
            </div>
            <div className="border-t p-3">
              <Textarea
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                aria-label="Ask about an order"
                placeholder="Ask about an order"
                className="min-h-20 resize-none border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-[11px]">{draft.length} / 1000</span>
                <Button size="icon-sm" className="rounded-full" aria-label="Send message" onClick={send}>
                  <ArrowUpIcon />
                </Button>
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </TooltipProvider>
  )
}
