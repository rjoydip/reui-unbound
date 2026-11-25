import { useState } from "react"
import { ChevronDownIcon, FilterIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "cn"

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const PEOPLE = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
]

const ROWS = [
  { label: "Attendance", count: "6/8", tone: "success-light", bars: [2, 4, 3, 5, 6, 4, 7, 5, 8, 6, 4, 7, 5, 8, 6, 5, 7, 6, 8, 7], dark: false },
  { label: "Absences", count: "1/8", tone: "focus-light", bars: [1, 3, 2, 5, 4, 6, 3, 7, 4, 5, 8, 4, 6, 3, 7, 5, 6, 4, 8, 5], dark: true },
  { label: "Delayed", count: "1/8", tone: "warning-light", bars: [2, 5, 3, 4, 7, 5, 3, 6, 4, 8, 5, 3, 7, 4, 6, 8, 5, 3, 7, 4], dark: true },
]

function Sparkline({ bars, dark }: { bars: number[]; dark: boolean }) {
  return (
    <div className="flex h-6 items-end gap-0.5" aria-hidden="true">
      {bars.map((height, index) => (
        <span
          key={index}
          className={cn("w-1 rounded-sm", dark ? "bg-muted-foreground" : "bg-muted-foreground/30")}
          style={{ height: `${height * 3 + 2}px` }}
        />
      ))}
    </div>
  )
}

export function Schedule5Block() {
  const [month, setMonth] = useState(new Date(2026, 5, 1))
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 5, 9))
  const [filters, setFilters] = useState<string[]>(["Attendance", "Absences", "Delayed"])

  return (
    <div className="bg-background text-foreground flex min-h-svh items-start justify-center p-8">
      <div className="bg-card w-full max-w-[456px] overflow-hidden rounded-xl border shadow-sm">
        <div className="flex items-center justify-between gap-2 p-3">
          <Select value={String(month.getMonth())} onValueChange={(value) => setMonth(new Date(month.getFullYear(), Number(value), 1))}>
            <SelectTrigger size="sm" className="w-24"><SelectValue /></SelectTrigger>
            <SelectContent>{MONTHS.map((name, index) => <SelectItem key={name} value={String(index)}>{name}</SelectItem>)}</SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <FilterIcon />
                Filter
                <Badge variant="secondary" size="sm">{filters.length}</Badge>
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuLabel>Show rows</DropdownMenuLabel>
              {ROWS.map((row) => (
                <DropdownMenuCheckboxItem
                  key={row.label}
                  checked={filters.includes(row.label)}
                  onCheckedChange={(value) =>
                    setFilters((current) => value ? [...current, row.label] : current.filter((item) => item !== row.label))
                  }
                >
                  {row.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Calendar
          mode="single"
          month={month}
          onMonthChange={setMonth}
          selected={date}
          onSelect={setDate}
          hideNavigation
          classNames={{ month_caption: "hidden" }}
          className="w-full px-4 pb-2 [--cell-size:--spacing(10)]"
        />

        <div className="flex items-center gap-2 border-t px-4 py-3">
          <div className="min-w-0">
            <p className="text-sm font-medium">Vertex Studio · Today</p>
            <div className="mt-1.5 flex -space-x-1.5">
              {PEOPLE.map((src) => (
                <Avatar key={src} size="sm" className="size-6 ring-2 ring-card">
                  <AvatarImage src={src} alt="" />
                  <AvatarFallback>VS</AvatarFallback>
                </Avatar>
              ))}
              <span className="bg-muted text-muted-foreground flex size-6 items-center justify-center rounded-full text-xs ring-2 ring-card">+4</span>
            </div>
          </div>
          <Badge variant="outline" size="sm" className="ml-auto">All</Badge>
        </div>

        <div className="space-y-2 px-4 pb-4">
          {ROWS.filter((row) => filters.includes(row.label)).map((row) => (
            <div key={row.label} className="flex items-center gap-2 rounded-lg border px-2.5 py-2">
              <span className="text-sm font-medium">{row.label}</span>
              <Badge variant={row.tone as "success-light"} size="sm">{row.count}</Badge>
              <div className="ml-auto"><Sparkline bars={row.bars} dark={row.dark} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Schedule5Block
