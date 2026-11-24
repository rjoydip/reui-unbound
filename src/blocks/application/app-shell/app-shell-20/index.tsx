import { useState, type CSSProperties } from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BarChart3Icon,
  BookmarkIcon,
  ChevronsUpDownIcon,
  ChevronDownIcon,
  ClockIcon,
  EyeIcon,
  InboxIcon,
  LayersIcon,
  LifeBuoyIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  MonitorIcon,
  MoonIcon,
  MoreHorizontalIcon,
  PaperclipIcon,
  PenLineIcon,
  PlusIcon,
  RefreshCwIcon,
  ReplyAllIcon,
  SendIcon,
  SettingsIcon,
  ShieldCheckIcon,
  StarIcon,
  SunIcon,
  Trash2Icon,
  TriangleAlertIcon,
  UserIcon,
  UsersIcon,
  WandSparklesIcon,
  ArchiveXIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Textarea } from "@/components/ui/textarea"

const mailFolders = [
  { label: "Inbox", icon: InboxIcon, count: 3, active: true },
  { label: "Draft", icon: PenLineIcon, count: 45 },
  { label: "Sent", icon: SendIcon, count: 9 },
]

const labels = [
  { label: "Archive", icon: ArchiveIcon, count: 12 },
  { label: "Snoozed", icon: ClockIcon, count: 4 },
  { label: "Spam", icon: TriangleAlertIcon, count: 3 },
  { label: "Trash", icon: Trash2Icon, count: 34 },
]

const contacts = [
  {
    name: "Nick Bold (You)",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
  },
  {
    name: "Sarah Chen",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  },
  {
    name: "Marcus Lee",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  },
]

const categories = [
  "Primary",
  "Social",
  "Promotions",
  "Updates",
  "Forums",
  "Shopping",
  "Travel",
  "Finance",
  "Newsletters",
  "Spam",
]

const asideItems = [
  { label: "Analytics", icon: BarChart3Icon },
  { label: "Settings", icon: SettingsIcon },
  { label: "Contacts", icon: UsersIcon },
  { label: "Security", icon: ShieldCheckIcon },
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

function EmptyArt() {
  return (
    <div className="relative mb-4 size-16" aria-hidden>
      <span className="bg-background absolute inset-0 translate-x-2 -translate-y-2 rounded-lg border" />
      <span className="bg-background absolute inset-0 translate-x-1 -translate-y-1 rounded-lg border" />
      <span className="bg-background relative flex size-16 items-center justify-center rounded-lg border shadow-sm">
        <MailIcon className="text-muted-foreground size-6" />
      </span>
    </div>
  )
}

export function AppShell20Block() {
  const [selectedCategories, setSelectedCategories] = useState([
    "Primary",
    "Updates",
  ])
  const [composeOpen, setComposeOpen] = useState(false)
  const [labelOpen, setLabelOpen] = useState(false)
  const [labelName, setLabelName] = useState("")

  const toggleCategory = (category: string) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    )
  }

  return (
    <SidebarProvider
      className="bg-muted/30 h-svh overflow-hidden"
      style={{ "--sidebar-width": "15rem" } as CSSProperties}
    >
      <Sidebar variant="inset" collapsible="offcanvas" className="h-full">
        <SidebarHeader>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="hover:bg-muted flex w-full items-center gap-2 rounded-lg p-1.5 text-left transition-colors"
              >
                <Avatar className="size-9">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80"
                    alt="Nick Bold"
                  />
                  <AvatarFallback>NB</AvatarFallback>
                </Avatar>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-medium">Nick Bold</span>
                  <span className="text-muted-foreground truncate text-xs">
                    nick@reui.io
                  </span>
                </span>
                <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-60">
              <DropdownMenuLabel className="flex items-center gap-2 py-1.5">
                <Avatar className="size-8">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80"
                    alt="Nick Bold"
                  />
                  <AvatarFallback>NB</AvatarFallback>
                </Avatar>
                <span className="flex flex-col">
                  <span className="text-foreground text-sm font-medium">
                    Nick Bold
                  </span>
                  <span className="text-xs font-normal">nick@reui.io</span>
                </span>
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <UserIcon />
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Settings
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

          <Button className="w-full justify-center gap-1.5" onClick={() => setComposeOpen(true)}>
            <PenLineIcon />
            New Mail
          </Button>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Mail</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mailFolders.map((folder) => (
                  <SidebarMenuItem key={folder.label}>
                    <SidebarMenuButton isActive={folder.active} tooltip={folder.label}>
                      <folder.icon />
                      <span>{folder.label}</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>
                      <span className="text-muted-foreground text-xs tabular-nums">
                        {folder.count}
                      </span>
                    </SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center">
              Labels
              <button
                type="button"
                aria-label="Create label"
                onClick={() => setLabelOpen(true)}
                className="hover:text-foreground ml-auto"
              >
                <PlusIcon className="size-3.5" />
              </button>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {labels.map((label) => (
                  <SidebarMenuItem key={label.label}>
                    <SidebarMenuButton tooltip={label.label}>
                      <label.icon />
                      <span>{label.label}</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>
                      <span className="text-muted-foreground text-xs tabular-nums">
                        {label.count}
                      </span>
                    </SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Direct Messages</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {contacts.map((contact) => (
                  <SidebarMenuItem key={contact.name}>
                    <SidebarMenuButton tooltip={contact.name}>
                      <Avatar className="size-5">
                        <AvatarImage src={contact.src} alt={contact.name} />
                        <AvatarFallback className="text-[9px]">NB</AvatarFallback>
                      </Avatar>
                      <span>{contact.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <PlusIcon />
                    <span>Add Teammates</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            {[
              { label: "Support", icon: LifeBuoyIcon },
              { label: "Settings", icon: SettingsIcon },
              { label: "Feedback", icon: MessageSquareIcon },
            ].map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton tooltip={item.label}>
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-w-0 bg-transparent">
        <div className="flex min-h-0 flex-1 gap-2 p-2 pl-0">
          <section className="bg-background flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border">
            <header className="flex items-center gap-2 border-b p-2">
              <SidebarTrigger className="text-muted-foreground" />
              <div className="relative min-w-0 flex-1">
                <Input
                  aria-label="Search mail"
                  placeholder="Search..."
                  className="h-8"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                    Categories
                    <ChevronDownIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                  {categories.map((category) => (
                    <DropdownMenuCheckboxItem
                      key={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                      onSelect={(event) => event.preventDefault()}
                    >
                      {category}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Refresh"
                className="text-muted-foreground"
              >
                <RefreshCwIcon />
              </Button>
            </header>

            <Empty className="flex-1">
              <EmptyArt />
              <EmptyHeader>
                <EmptyTitle className="text-base font-semibold">
                  It&apos;s empty here
                </EmptyTitle>
                <EmptyDescription>
                  Search for another email or{" "}
                  <button
                    type="button"
                    onClick={() => setSelectedCategories([])}
                    className="underline underline-offset-4"
                  >
                    clear filters
                  </button>
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </section>

          <section className="bg-background hidden min-w-0 flex-[1.4] flex-col overflow-hidden rounded-xl border md:flex">
            <header className="flex items-center gap-1 border-b p-2">
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Back"
                className="text-muted-foreground"
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Forward"
                className="text-muted-foreground"
              >
                <ArrowRightIcon />
              </Button>
              <span className="bg-muted ml-1 rounded-md px-2 py-1 text-xs font-medium">
                Normal
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="View options"
                className="text-muted-foreground"
              >
                <EyeIcon />
              </Button>
              <div className="ml-auto flex items-center gap-0.5">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <ReplyAllIcon />
                  Reply All
                </Button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Move to"
                  className="text-muted-foreground"
                >
                  <LayersIcon />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Bookmark"
                  className="text-muted-foreground"
                >
                  <BookmarkIcon />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Star"
                  className="text-muted-foreground"
                >
                  <StarIcon />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Archive"
                  className="text-muted-foreground"
                >
                  <ArchiveXIcon />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Delete"
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2Icon />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="More actions"
                  className="text-muted-foreground"
                >
                  <MoreHorizontalIcon />
                </Button>
              </div>
            </header>

            <Empty className="flex-1">
              <EmptyArt />
              <EmptyHeader>
                <EmptyTitle className="text-base font-semibold">
                  It&apos;s empty here
                </EmptyTitle>
                <EmptyDescription>
                  Choose an email to view details
                </EmptyDescription>
              </EmptyHeader>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <WandSparklesIcon />
                  Ask AI
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <MailIcon />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  onClick={() => setComposeOpen(true)}
                >
                  <PlusIcon />
                  New Email
                </Button>
              </div>
            </Empty>
          </section>

          <aside className="hidden w-14 shrink-0 flex-col items-center gap-1 rounded-xl border bg-background py-2 xl:flex">
            {asideItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="icon"
                aria-label={item.label}
                className="text-muted-foreground"
              >
                <item.icon />
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              aria-label="Add shortcut"
              className="mt-1 rounded-full"
            >
              <PlusIcon />
            </Button>
          </aside>
        </div>
      </SidebarInset>

      <Dialog open={composeOpen} onOpenChange={setComposeOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>New Message</DialogTitle>
            <DialogDescription>
              Write and send a new email.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="mail-to">To</Label>
              <Input id="mail-to" placeholder="name@company.com" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="mail-subject">Subject</Label>
              <Input id="mail-subject" placeholder="Project update" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="mail-body">Message</Label>
              <Textarea
                id="mail-body"
                rows={4}
                placeholder="Write your message..."
                className="resize-none"
              />
            </div>
          </div>
          <DialogFooter className="justify-between sm:justify-between">
            <Button variant="outline" className="gap-1.5">
              <PaperclipIcon />
              Attach
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" onClick={() => setComposeOpen(false)}>
                Discard
              </Button>
              <Button
                className="gap-1.5"
                onClick={() => setComposeOpen(false)}
              >
                <SendIcon />
                Send
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={labelOpen} onOpenChange={setLabelOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Label</DialogTitle>
            <DialogDescription>
              Group related mail under a label.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-1.5">
            <Label htmlFor="label-name">Name</Label>
            <Input
              id="label-name"
              value={labelName}
              onChange={(event) => setLabelName(event.target.value)}
              placeholder="Receipts"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setLabelOpen(false)}>
              Cancel
            </Button>
            <Button
              disabled={!labelName.trim()}
              onClick={() => {
                setLabelName("")
                setLabelOpen(false)
              }}
            >
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  )
}

export default AppShell20Block
