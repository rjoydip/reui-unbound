import { useState } from "react"
import {
  ChevronRightIcon,
  CopyIcon,
  EllipsisIcon,
  FolderIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  Share2Icon,
  StarIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TAB_ITEMS = [
  { value: "discussion", label: "Discussion", count: 3 },
  { value: "tasks", label: "Tasks" },
  { value: "timeline", label: "Timeline" },
  { value: "files", label: "Files" },
  { value: "overview", label: "Overview" },
]

const COLLABORATORS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80",
]

function Crumb({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-muted-foreground flex items-center gap-1.5">
      <FolderIcon className="size-4" />
      {children}
    </span>
  )
}

export function Navbar1Block() {
  const [tab, setTab] = useState("tasks")
  const [starred, setStarred] = useState(false)

  return (
    <header className="bg-background border-b">
      <div className="flex items-center gap-2 px-4 pt-2.5">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li><Crumb>Products</Crumb></li>
            <li aria-hidden="true"><ChevronRightIcon className="text-muted-foreground size-3.5" /></li>
            <li><Crumb>Mobile</Crumb></li>
            <li aria-hidden="true"><ChevronRightIcon className="text-muted-foreground size-3.5" /></li>
            <li className="text-foreground">Checkout Flow</li>
          </ol>
        </nav>
        <div className="ml-auto flex items-center gap-0.5">
          <Button variant="ghost" size="icon-sm" aria-label="Search">
            <SearchIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={starred ? "Remove from favorites" : "Add to favorites"}
            aria-pressed={starred}
            onClick={() => setStarred((value) => !value)}
          >
            <StarIcon className={starred ? "fill-current" : undefined} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="More options">
                <EllipsisIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem><Share2Icon />Share</DropdownMenuItem>
              <DropdownMenuItem><CopyIcon />Copy link</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem><SettingsIcon />Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex items-center gap-3 px-4 pb-0">
        <Tabs value={tab} onValueChange={setTab} className="gap-0">
          <TabsList variant="line" className="h-9 gap-4">
            {TAB_ITEMS.map((item) => (
              <TabsTrigger key={item.value} value={item.value} className="gap-2 px-0">
                {item.label}
                {item.count ? (
                  <Badge variant="destructive-light" size="sm">{item.count}</Badge>
                ) : null}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="ml-auto flex items-center gap-2.5 pb-1.5">
          <Button size="icon-sm" className="rounded-full" aria-label="Create new">
            <PlusIcon />
          </Button>
          <div className="flex items-center gap-1.5">
            <AvatarGroup>
              {COLLABORATORS.map((src, index) => (
                <Avatar key={src} size="sm">
                  <AvatarImage src={src} alt="" />
                  <AvatarFallback>C{index + 1}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
            <span className="text-muted-foreground text-xs font-medium">+9</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar1Block
