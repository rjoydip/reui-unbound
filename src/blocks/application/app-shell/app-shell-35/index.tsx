import { useState } from "react"
import {
  ClockIcon,
  DownloadIcon,
  FolderIcon,
  Grid2x2Icon,
  LayoutGridIcon,
  Link2Icon,
  MenuIcon,
  MoreHorizontalIcon,
  PanelLeftIcon,
  Share2Icon,
  StarIcon,
  StickyNoteIcon,
  TagIcon,
  Trash2Icon,
  UserIcon,
  UsersIcon,
  CircleHelpIcon,
  type LucideIcon,
} from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

const primaryRail: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Board", icon: StickyNoteIcon, active: true },
  { label: "Templates", icon: Grid2x2Icon },
  { label: "Recent", icon: ClockIcon },
  { label: "Favourites", icon: StarIcon },
]

const secondaryRail: { label: string; icon: LucideIcon }[] = [
  { label: "Members", icon: UsersIcon },
  { label: "Files", icon: FolderIcon },
  { label: "Contacts", icon: UserIcon },
  { label: "Tags", icon: TagIcon },
  { label: "Archive", icon: Trash2Icon },
  { label: "Trash", icon: Trash2Icon },
]

const boardViews = ["Board", "Outline", "Comments", "Activity"]

const collaborators = [
  { name: "Sienna Wells", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { name: "Kai Meyer", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&dpr=2&q=80" },
  { name: "Leo Grant", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
]

function RailContent() {
  return (
    <div className="flex h-full flex-col items-center gap-1 py-3">
      <span className="bg-foreground text-background mb-2 flex size-8 items-center justify-center rounded-lg text-sm font-bold">
        U
      </span>
      {primaryRail.map((item) => (
        <button
          key={item.label}
          type="button"
          aria-label={item.label}
          className={cn(
            "text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-lg transition-colors",
            item.active && "bg-muted text-foreground",
          )}
        >
          <item.icon className="size-4" />
        </button>
      ))}
      <div className="bg-border my-1.5 h-px w-6" />
      {secondaryRail.map((item) => (
        <button
          key={item.label}
          type="button"
          aria-label={item.label}
          className="text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-lg transition-colors"
        >
          <item.icon className="size-4" />
        </button>
      ))}
      <div className="mt-auto flex flex-col items-center gap-1">
        <button
          type="button"
          aria-label="Help"
          className="text-muted-foreground hover:bg-muted flex size-8 items-center justify-center rounded-lg"
        >
          <CircleHelpIcon className="size-4" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button" aria-label="Open profile for Sienna Wells" className="rounded-full">
              <Avatar className="size-7">
                <AvatarImage src={collaborators[0].src} alt="Sienna Wells" />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="right" className="w-64">
            <div className="flex items-center gap-2 px-2 py-1.5">
              <Avatar className="size-8">
                <AvatarImage src={collaborators[0].src} alt="" />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">Sienna Wells</p>
                <p className="text-muted-foreground truncate text-xs">sienna@nimbusfleet.io</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>Sign-In Security</DropdownMenuItem>
            <DropdownMenuItem>Alert Routing</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Shift Roster</DropdownMenuItem>
            <DropdownMenuItem>Invite Operator</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Theme</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

function BoardCard({ rows }: { rows: number }) {
  return (
    <div className="bg-card rounded-xl border p-4">
      <Skeleton className="h-2.5 w-2/3" />
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton key={index} className="mt-2 h-2.5" style={{ width: `${55 - index * 10}%` }} />
      ))}
      <Skeleton className="mt-4 h-28 w-full rounded-lg" />
    </div>
  )
}

export default function AppShell35Block() {
  const [view, setView] = useState("Board")
  const [viewDrawerOpen, setViewDrawerOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deleted, setDeleted] = useState(false)

  return (
    <div className="bg-background flex h-svh overflow-hidden">
      <aside className="hidden w-14 shrink-0 flex-col border-r md:flex">
        <RailContent />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="grid h-12 shrink-0 grid-cols-[1fr_auto_1fr] items-center gap-2 border-b px-3">
          <div className="flex min-w-0 items-center gap-1.5">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Open navigation" className="md:hidden">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-16 p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <RailContent />
              </SheetContent>
            </Sheet>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Boards</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Launch Map</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="hidden lg:block">
            <Tabs value={view} onValueChange={setView}>
              <TabsList>
                {boardViews.map((item) => (
                  <TabsTrigger key={item} value={item} className="px-3">
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <div className="flex justify-center lg:hidden">
            <Drawer open={viewDrawerOpen} onOpenChange={setViewDrawerOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <PanelLeftIcon />
                  Views
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Board views</DrawerTitle>
                </DrawerHeader>
                <div className="space-y-1 p-4 pt-0">
                  {boardViews.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setView(item)
                        setViewDrawerOpen(false)
                      }}
                      className={cn(
                        "hover:bg-muted flex w-full items-center rounded-md px-3 py-2 text-left text-sm",
                        view === item && "bg-muted font-medium",
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden -space-x-2 sm:flex">
              {collaborators.map((person) => (
                <Avatar key={person.name} className="border-background size-7 border-2">
                  <AvatarImage src={person.src} alt={person.name} />
                  <AvatarFallback>{person.name.slice(0, 1)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Button size="sm" className="gap-1.5">
              <Share2Icon />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5">
              <DownloadIcon />
              Export
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Board menu">
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuItem>
                  <Link2Icon />
                  Copy link
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LayoutGridIcon />
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DownloadIcon />
                  Export as Image
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onSelect={() => setDeleteOpen(true)}>
                  <Trash2Icon />
                  Delete Board
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto p-4">
          {deleted ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
              <span className="bg-muted text-muted-foreground flex size-12 items-center justify-center rounded-xl">
                <StickyNoteIcon className="size-6" />
              </span>
              <p className="text-lg font-semibold">Launch Map was deleted</p>
              <p className="text-muted-foreground text-sm">
                The board and its 18 cards are in the trash for 30 days.
              </p>
              <Button variant="outline" size="sm" className="mt-2" onClick={() => setDeleted(false)}>
                Undo
              </Button>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <BoardCard rows={1} />
                <BoardCard rows={1} />
                <BoardCard rows={1} />
                <BoardCard rows={1} />
              </div>
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <BoardCard rows={2} />
                <BoardCard rows={2} />
                <BoardCard rows={2} />
                <BoardCard rows={2} />
              </div>
            </>
          )}
        </main>
      </div>

      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this board?</AlertDialogTitle>
            <AlertDialogDescription>
              Launch Map and its 18 cards will move to the trash. You can restore it for 30 days.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setDeleted(true)
                setDeleteOpen(false)
              }}
            >
              Delete Board
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
