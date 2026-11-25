import { useState } from "react"
import {
  CalendarIcon,
  ChartColumnIcon,
  ChevronRightIcon,
  EllipsisIcon,
  RotateCwIcon,
  SearchIcon,
  Share2Icon,
  TrendingUpIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Kbd } from "@/components/ui/kbd"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "cn"

const REFRESH_OPTIONS = [
  { value: "off", label: "Off" },
  { value: "30s", label: "30s" },
  { value: "1m", label: "1m" },
  { value: "5m", label: "5m" },
]

export function Navbar6Block() {
  const [refreshing, setRefreshing] = useState(false)
  const [refresh, setRefresh] = useState("off")
  const [comparing, setComparing] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const handleRefresh = () => {
    setRefreshing(true)
    window.setTimeout(() => setRefreshing(false), 1200)
  }

  return (
    <header className="bg-background sticky top-0 z-30 border-b">
      <div className="flex h-12 items-center gap-2 px-4">
        <ChartColumnIcon className="text-muted-foreground size-4" />
        <span className="text-muted-foreground text-sm">Analytics</span>
        <ChevronRightIcon className="text-muted-foreground/60 size-3.5" />
        <span className="text-sm font-medium">Growth Overview</span>

        <div className="ml-auto flex items-center gap-1.5">
          <Button variant="ghost" size="icon-sm" aria-label="Refresh data" onClick={handleRefresh}>
            <RotateCwIcon className={cn(refreshing && "animate-spin")} />
          </Button>
          <Select value={refresh} onValueChange={setRefresh}>
            <SelectTrigger size="sm" className="text-muted-foreground w-18" aria-label="Auto refresh">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              {REFRESH_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="bg-border mx-1 h-5 w-px" />
          <Button variant="outline" size="sm"><Share2Icon />Share</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Dashboard options">
                <EllipsisIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Edit dashboard</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Export CSV</DropdownMenuItem>
              <DropdownMenuItem>Export PNG</DropdownMenuItem>
              <DropdownMenuItem>Embed</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex h-12 items-center gap-2 px-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <CalendarIcon />
              {date ? date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Select the date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
          </PopoverContent>
        </Popover>
        <Button
          variant="outline"
          size="sm"
          aria-pressed={comparing}
          onClick={() => setComparing((value) => !value)}
          className={cn("text-muted-foreground", comparing && "bg-accent")}
        >
          <TrendingUpIcon />
          Compare
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground ml-auto gap-2 font-normal"
        >
          <SearchIcon />
          Search
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </Button>
      </div>
    </header>
  )
}

export default Navbar6Block
