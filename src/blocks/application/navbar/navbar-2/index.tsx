import { useState } from "react"
import {
  ArrowDownUpIcon,
  ChevronRightIcon,
  EllipsisIcon,
  FilterIcon,
  HouseIcon,
  LayoutGridIcon,
  UserPlusIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const TEAM_MEMBERS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80",
]

const FILTER_OPTIONS = ["All", "Active", "Archived"]
const SORT_OPTIONS = ["Date", "Name", "Status"]

export function Navbar2Block() {
  const [inviteOpen, setInviteOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Date")

  const handleInvite = () => {
    setEmail("")
    setInviteOpen(false)
  }

  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-3 border-b px-4">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li className="text-muted-foreground flex items-center gap-1.5">
            <HouseIcon className="size-4" />Home
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="size-3.5 opacity-50" /></li>
          <li className="text-muted-foreground flex items-center gap-1.5">
            <LayoutGridIcon className="size-4" />Projects
          </li>
          <li aria-hidden="true"><ChevronRightIcon className="size-3.5 opacity-50" /></li>
          <li className="text-foreground font-medium">Sprint</li>
        </ol>
      </nav>

      <div className="ml-auto flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <AvatarGroup>
            {TEAM_MEMBERS.map((src, index) => (
              <Avatar key={src} size="sm">
                <AvatarImage src={src} alt="" />
                <AvatarFallback>T{index + 1}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <span className="text-muted-foreground text-xs font-medium">+8</span>
        </div>

        <Popover open={inviteOpen} onOpenChange={setInviteOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <UserPlusIcon />
              Invite
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-64 gap-2.5">
            <p className="text-sm font-medium">Invite team member</p>
            <Input
              type="email"
              placeholder="email@example.com"
              aria-label="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Button className="w-full" disabled={!email} onClick={handleInvite}>
              Send invite
            </Button>
          </PopoverContent>
        </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              aria-label="Filter"
              className="bg-foreground text-background hover:bg-foreground/90 size-9 rounded-lg"
            >
              <FilterIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {FILTER_OPTIONS.map((option) => (
              <DropdownMenuItem key={option} onSelect={() => setFilter(option)}>
                {option}
                {filter === option ? <span className="ml-auto text-xs">✓</span> : null}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              aria-label="Sort"
              className="bg-foreground text-background hover:bg-foreground/90 size-9 rounded-lg"
            >
              <ArrowDownUpIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {SORT_OPTIONS.map((option) => (
              <DropdownMenuItem key={option} onSelect={() => setSort(option)}>
                {option}
                {sort === option ? <span className="ml-auto text-xs">✓</span> : null}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="More options">
              <EllipsisIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem>Rename project</DropdownMenuItem>
            <DropdownMenuItem>Duplicate project</DropdownMenuItem>
            <DropdownMenuItem>Archive project</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Navbar2Block
