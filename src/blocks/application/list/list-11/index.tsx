import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  Flame,
  Search,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react"
import { cn } from "cn"

import { Badge } from "@/components/ui/badge"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Frame, FramePanel } from "@/components/kit/frame"

function OpenAIMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.5-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07Zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5Zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.83 2.79a4.5 4.5 0 0 1-6.15-1.64ZM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97v5.68a.77.77 0 0 0 .39.67l5.81 3.36-2.02 1.17a.08.08 0 0 1-.07 0L3.99 14a4.5 4.5 0 0 1-1.65-6.1Zm16.6 3.85-5.84-3.39 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.67Zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06L14.27 3.9a4.5 4.5 0 0 1 6.68 4.83ZM8.3 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08L8.7 5.46a.79.79 0 0 0-.39.68Zm1.1-2.36 2.6-1.5 2.61 1.5v3l-2.6 1.5-2.6-1.5Z" />
    </svg>
  )
}

type MoverStatus = "Active" | "New" | "On Hold"

type TopMover = {
  id: string
  name: string
  location: string
  status: MoverStatus
  activeValue: string
  trend: "up" | "down"
  logo: ReactNode
}

const TOP_MOVERS: TopMover[] = [
  {
    id: "tiango",
    name: "Tiango",
    location: "Barcelona, Spain",
    status: "Active",
    activeValue: "+$1.9M",
    trend: "up",
    logo: (
      <span className="flex size-7 items-center justify-center rounded-full bg-teal-500 text-white">
        <Zap className="size-4" fill="currentColor" />
      </span>
    ),
  },
  {
    id: "hotmart",
    name: "Hotmart",
    location: "Belo Horizonte, Brazil",
    status: "New",
    activeValue: "-$2.1M",
    trend: "down",
    logo: <Flame className="size-7 text-orange-500" fill="currentColor" />,
  },
  {
    id: "openai",
    name: "OpenAI",
    location: "San Francisco, CA",
    status: "Active",
    activeValue: "+$870k",
    trend: "up",
    logo: <OpenAIMark className="size-6 text-foreground" />,
  },
  {
    id: "vercel",
    name: "Vercel",
    location: "San Francisco, CA",
    status: "On Hold",
    activeValue: "-$530k",
    trend: "down",
    logo: (
      <span className="flex size-7 items-center justify-center rounded-full bg-zinc-950 text-[13px] font-semibold text-white ring-1 ring-border">
        N
      </span>
    ),
  },
]

const STATUS_CLASS: Record<MoverStatus, string> = {
  Active:
    "border-dashed border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  New: "border-dashed border-violet-500/40 bg-violet-500/10 text-violet-600 dark:text-violet-400",
  "On Hold":
    "border-dashed border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400",
}

export function List11Block() {
  const [query, setQuery] = useState("")
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const needle = query.trim().toLowerCase()
  const rows = needle
    ? TOP_MOVERS.filter(
        (mover) =>
          mover.name.toLowerCase().includes(needle) ||
          mover.location.toLowerCase().includes(needle),
      )
    : TOP_MOVERS

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-[560px]">
        <Frame dense>
          <FramePanel className="p-0">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <span className="text-[15px] font-semibold">Top Movers</span>
              <InputGroup className="h-8 w-[190px]">
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupInput
                  ref={searchRef}
                  placeholder="Search"
                  aria-label="Search top movers"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <InputGroupAddon align="inline-end">
                  <Kbd className="rounded-sm">⌘ K</Kbd>
                </InputGroupAddon>
              </InputGroup>
            </div>

            <Table className="[&_td]:px-4! [&_td]:py-3! [&_th]:px-4!">
              <TableHeader className="bg-muted/50">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-[13px] font-normal text-muted-foreground">
                    Name
                  </TableHead>
                  <TableHead className="w-[17%] text-[13px] font-normal text-muted-foreground">
                    Status
                  </TableHead>
                  <TableHead className="w-[24%] text-[13px] font-normal text-muted-foreground">
                    Active
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.length === 0 ? (
                  <TableRow className="hover:bg-transparent">
                    <TableCell
                      colSpan={3}
                      className="py-8! text-center text-sm text-muted-foreground"
                    >
                      No movers found.
                    </TableCell>
                  </TableRow>
                ) : (
                  rows.map((mover) => (
                    <TableRow
                      key={mover.id}
                      className="cursor-pointer last:border-0"
                    >
                      <TableCell>
                        <div className="flex items-center gap-2.5">
                          <span className="flex size-7 shrink-0 items-center justify-center">
                            {mover.logo}
                          </span>
                          <div className="min-w-0">
                            <div className="truncate text-[13px] font-medium">
                              {mover.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {mover.location}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={cn(
                            "h-5 px-1.5 text-xs font-medium",
                            STATUS_CLASS[mover.status],
                          )}
                        >
                          {mover.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div
                          className={cn(
                            "flex items-center gap-1.5 text-[13px] font-medium tabular-nums",
                            mover.trend === "up"
                              ? "text-success"
                              : "text-destructive",
                          )}
                        >
                          {mover.trend === "up" ? (
                            <TrendingUp className="size-4" />
                          ) : (
                            <TrendingDown className="size-4" />
                          )}
                          {mover.activeValue}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}

export default List11Block
