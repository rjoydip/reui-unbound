import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarClockIcon,
  ChevronDownIcon,
  CopyIcon,
  EllipsisIcon,
  EyeIcon,
  FileClockIcon,
  FileTextIcon,
  SendIcon,
  Trash2Icon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const VIEWERS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80",
]

export function Navbar7Block() {
  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-2 border-b px-3">
      <Button variant="ghost" size="icon-sm" aria-label="Back to posts">
        <ArrowLeftIcon />
      </Button>
      <span className="text-sm font-medium">Blog Posts</span>

      <div className="ml-auto flex items-center gap-2">
        <AvatarGroup className="mr-1">
          {VIEWERS.map((src, index) => (
            <Avatar key={src} size="sm">
              <AvatarImage src={src} alt="" />
              <AvatarFallback>V{index + 1}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>

        <Button variant="outline" size="sm"><EyeIcon />Preview</Button>

        <ButtonGroup>
          <Button size="sm"><SendIcon />Publish</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="px-2" aria-label="Publish options">
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem><CalendarClockIcon />Schedule for later</DropdownMenuItem>
              <DropdownMenuItem><FileTextIcon />Save as draft</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="More actions">
              <EllipsisIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuItem><CopyIcon />Duplicate post</DropdownMenuItem>
            <DropdownMenuItem><FileClockIcon />Version history</DropdownMenuItem>
            <DropdownMenuItem><ArchiveIcon />Archive</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive"><Trash2Icon />Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Navbar7Block
