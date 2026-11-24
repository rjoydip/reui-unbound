import { useState } from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BookmarkIcon,
  ChevronDownIcon,
  DownloadIcon,
  FileIcon,
  InboxIcon,
  MailIcon,
  MoreHorizontalIcon,
  PaperclipIcon,
  PenLineIcon,
  RefreshCwIcon,
  ReplyAllIcon,
  SendIcon,
  ShieldAlertIcon,
  SlidersHorizontalIcon,
  StarIcon,
  Trash2Icon,
  UsersIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "cn"

const folders = [
  { name: "Inbox", icon: InboxIcon, count: 4, active: true },
  { name: "Starred", icon: StarIcon },
  { name: "Sent", icon: SendIcon },
  { name: "Drafts", icon: PenLineIcon },
  { name: "Archive", icon: ArchiveIcon },
  { name: "Spam", icon: ShieldAlertIcon },
  { name: "Trash", icon: Trash2Icon },
]

type Mail = {
  id: string
  sender: string
  email: string
  avatar?: string
  initials: string
  subject: string
  preview: string
  time: string
  unread?: boolean
  starred?: boolean
  label?: { text: string; variant: "info-light" | "warning-light" | "success-light" | "primary-light" }
  meta?: string
  attachment?: string
  actions?: boolean
}

const mails: Mail[] = [
  {
    id: "1",
    sender: "Sarah Chen",
    email: "sarah@figma.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
    initials: "SC",
    subject: "Design review · component library v2.0",
    preview: "Hey Nick, I've gone through the latest Figma handoff…",
    time: "10:42 AM",
    unread: true,
    starred: true,
    label: { text: "Design", variant: "info-light" },
    meta: "+2",
  },
  {
    id: "2",
    sender: "Marcus Lee",
    email: "marcus@reui.io",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80",
    initials: "ML",
    subject: "Q4 Sprint planning, your input needed",
    preview: "Hey team, sharing the draft sprint board for Q4. We…",
    time: "9:15 AM",
    unread: true,
    label: { text: "Work", variant: "primary-light" },
    attachment: "Q4-Sprint-plan.xlsx · 1.2 MB",
  },
  {
    id: "3",
    sender: "Emma Wilson",
    email: "emma@partners.co",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
    initials: "EW",
    subject: "Partnership proposal · ReUI integration",
    preview: "Hi Nick, reaching out because we've been using Re…",
    time: "Yesterday",
    unread: true,
    label: { text: "Business", variant: "warning-light" },
    actions: true,
  },
  {
    id: "4",
    sender: "GitHub",
    email: "notifications@github.com",
    initials: "GH",
    subject: "[keenthemes] Security advisory on rollup affects yo…",
    preview: "A security advisory on rollup affects at least one of…",
    time: "Yesterday",
    meta: "repo · reui/core",
  },
  {
    id: "5",
    sender: "Stripe",
    email: "receipts@stripe.com",
    initials: "S",
    subject: "Payment received · $299 from Acme Corp",
    preview: "A payment of $299.00 has been received from Acm…",
    time: "Mon",
    label: { text: "Finance", variant: "success-light" },
  },
  {
    id: "6",
    sender: "Alex Martin",
    email: "billing@northwind.io",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80",
    initials: "AM",
    subject: "Invoice #1024 · November services",
    preview: "Please find attached the invoice for November cons…",
    time: "Mon",
    attachment: "invoice-1024.pdf · 320 KB",
  },
]

export function AppShell4Block() {
  const [activeFolder, setActiveFolder] = useState("Inbox")
  const [selected, setSelected] = useState(mails[0].id)
  const [tab, setTab] = useState("all")
  const [query, setQuery] = useState("")

  const filtered = mails.filter((mail) => {
    if (tab === "unread" && !mail.unread) return false
    if (tab === "starred" && !mail.starred) return false
    if (tab === "files" && !mail.attachment) return false
    const term = query.trim().toLowerCase()
    if (!term) return true
    return `${mail.sender} ${mail.subject} ${mail.preview}`.toLowerCase().includes(term)
  })
  const activeMail = mails.find((mail) => mail.id === selected) ?? mails[0]

  return (
    <div className="bg-background flex h-svh w-full overflow-hidden">
      <aside className="flex w-14 shrink-0 flex-col items-center gap-1 border-r py-2">
        <span className="bg-foreground text-background mb-2 flex size-8 items-center justify-center rounded-lg text-xs font-bold">
          U
        </span>
        {folders.map((folder) => (
          <button
            key={folder.name}
            type="button"
            aria-label={folder.name}
            onClick={() => setActiveFolder(folder.name)}
            className={cn(
              "relative flex size-9 items-center justify-center rounded-md transition-colors",
              activeFolder === folder.name
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <folder.icon className="size-4" />
            {folder.count ? (
              <span className="bg-primary text-primary-foreground absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full text-[10px] font-semibold">
                {folder.count}
              </span>
            ) : null}
          </button>
        ))}
        <div className="mt-auto">
          <Avatar className="size-8">
            <AvatarImage
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"
              alt="Nick Bold"
            />
            <AvatarFallback>NB</AvatarFallback>
          </Avatar>
        </div>
      </aside>

      <section className="flex w-[440px] shrink-0 flex-col border-r">
        <header className="flex h-14 items-center gap-2 px-3">
          <h1 className="text-lg font-semibold">{activeFolder}</h1>
          <Badge size="sm" variant="secondary">
            {mails.filter((mail) => mail.unread).length}
          </Badge>
          <div className="ml-auto flex items-center gap-0.5">
            <Button size="icon-sm" variant="ghost" aria-label="Refresh">
              <RefreshCwIcon />
            </Button>
            <Button size="icon-sm" variant="ghost" aria-label="Filter">
              <SlidersHorizontalIcon />
            </Button>
            <Button size="icon-sm" variant="ghost" aria-label="Compose">
              <PenLineIcon />
            </Button>
          </div>
        </header>

        <div className="px-3 pb-2">
          <div className="relative">
            <MailIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search mail..."
              className="h-9 pl-9"
            />
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="px-3 pb-2">
          <TabsList className="w-full justify-start gap-1 bg-transparent p-0">
            {[
              { value: "all", label: "All" },
              { value: "unread", label: "Unread", count: 4 },
              { value: "starred", label: "Starred", count: 3 },
              { value: "files", label: "Files", count: 2 },
            ].map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="data-[state=active]:bg-foreground data-[state=active]:text-background h-7 rounded-full px-3 text-xs data-[state=active]:shadow-none"
              >
                {item.label}
                {item.count ? (
                  <span className="ml-1 tabular-nums opacity-70">{item.count}</span>
                ) : null}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex-1 overflow-y-auto">
          {filtered.map((mail) => (
            <button
              key={mail.id}
              type="button"
              onClick={() => setSelected(mail.id)}
              className={cn(
                "border-border/70 relative flex w-full gap-3 border-b px-3 py-3 text-left transition-colors",
                selected === mail.id ? "bg-muted/50" : "hover:bg-muted/30",
              )}
            >
              {mail.unread ? (
                <span className="bg-primary absolute top-1/2 left-1 size-1.5 -translate-y-1/2 rounded-full" />
              ) : null}
              <Avatar className="mt-0.5 size-9">
                {mail.avatar ? <AvatarImage src={mail.avatar} alt={mail.sender} /> : null}
                <AvatarFallback className={cn(mail.sender === "Stripe" && "bg-indigo-500 text-white")}>
                  {mail.sender === "Stripe" ? <span className="text-sm font-bold">S</span> : mail.initials}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "truncate text-sm",
                      mail.unread ? "font-semibold" : "font-medium",
                    )}
                  >
                    {mail.sender}
                  </span>
                  {mail.starred ? (
                    <StarIcon className="fill-warning text-warning size-3.5 shrink-0" />
                  ) : null}
                  <span className="text-muted-foreground ml-auto shrink-0 text-xs">
                    {mail.time}
                  </span>
                </div>
                <p className={cn("truncate text-sm", mail.unread && "font-medium")}>
                  {mail.subject}
                </p>
                <p className="text-muted-foreground line-clamp-1 text-sm">
                  {mail.preview}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  {mail.label ? (
                    <Badge size="sm" variant={mail.label.variant}>
                      {mail.label.text}
                    </Badge>
                  ) : null}
                  {mail.meta ? (
                    <Badge size="sm" variant="outline">
                      {mail.meta}
                    </Badge>
                  ) : null}
                  {mail.attachment ? (
                    <span className="border-border bg-background inline-flex items-center gap-1.5 rounded-md border px-1.5 py-0.5 text-xs">
                      <PaperclipIcon className="size-3" />
                      <span className="max-w-36 truncate">{mail.attachment}</span>
                      <DownloadIcon className="size-3" />
                    </span>
                  ) : null}
                </div>
                {mail.actions ? (
                  <div className="mt-2 flex items-center gap-2">
                    <Button size="sm" className="h-7">
                      Schedule Call
                    </Button>
                    <Button size="sm" variant="outline" className="h-7">
                      View Proposal
                    </Button>
                  </div>
                ) : null}
              </div>
            </button>
          ))}
          {filtered.length === 0 ? (
            <p className="text-muted-foreground px-4 py-10 text-center text-sm">
              No messages match this view.
            </p>
          ) : null}
        </div>
      </section>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center gap-2 border-b px-3">
          <Button size="icon-sm" variant="ghost" aria-label="Back">
            <ArrowLeftIcon />
          </Button>
          <Button size="icon-sm" variant="ghost" aria-label="Forward">
            <ArrowRightIcon />
          </Button>
          <Separator orientation="vertical" className="mx-1 h-6" />
          <span className="truncate text-sm font-medium">{activeMail.subject}</span>
          <div className="ml-auto flex items-center gap-0.5">
            <Button size="sm" variant="outline" className="mr-1 h-8">
              <ReplyAllIcon />
              Reply all
            </Button>
            <Button
              size="icon-sm"
              variant="ghost"
              aria-label="Star message"
              className={cn(activeMail.starred && "text-warning")}
            >
              <StarIcon className={cn(activeMail.starred && "fill-warning")} />
            </Button>
            <Button size="icon-sm" variant="ghost" aria-label="Bookmark">
              <BookmarkIcon />
            </Button>
            <Button size="icon-sm" variant="ghost" aria-label="Delete">
              <Trash2Icon />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon-sm" variant="ghost" aria-label="More actions">
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <UsersIcon />
                  Reply all
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileIcon />
                  Download attachments
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  Move to trash
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="icon-sm" variant="ghost" aria-label="More">
              <ChevronDownIcon />
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="bg-muted/40 h-48 rounded-lg border" />
            ))}
          </div>
          <div className="bg-muted/30 min-h-100 flex-1 rounded-lg border border-dashed" />
        </div>
      </section>
    </div>
  )
}

export default AppShell4Block
