import { useEffect, useRef, useState } from "react"
import {
  Building2,
  Flag,
  Play,
  Search,
  Triangle,
  type LucideIcon,
} from "lucide-react"
import { cn } from "cn"

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

type Investment = {
  id: string
  company: string
  date: string
  sector: string
  valueChange: string
  tone: "gain" | "loss"
  logo: LucideIcon
  logoBg: string
}

const INVESTMENTS: Investment[] = [
  {
    id: "ironclad",
    company: "Ironclad Metals",
    date: "Feb 8, 2025",
    sector: "Industrial Materials",
    valueChange: "+ $ 420,000",
    tone: "gain",
    logo: Flag,
    logoBg: "bg-teal-600",
  },
  {
    id: "bluepeak",
    company: "BluePeak Realty",
    date: "Feb 7, 2025",
    sector: "Real Estate",
    valueChange: "+ $ 310,000",
    tone: "gain",
    logo: Building2,
    logoBg: "bg-amber-500",
  },
  {
    id: "ditz",
    company: "Ditz Logistics",
    date: "Feb 6, 2025",
    sector: "Transportation",
    valueChange: "+ $ 185,000",
    tone: "gain",
    logo: Play,
    logoBg: "bg-violet-600",
  },
  {
    id: "wavemark",
    company: "WaveMark Capital",
    date: "Feb 5, 2025",
    sector: "Finances",
    valueChange: "- $ 92,000",
    tone: "loss",
    logo: Triangle,
    logoBg: "bg-orange-500",
  },
]

export function ListRecentInvestmentsBlock() {
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
    ? INVESTMENTS.filter(
        (investment) =>
          investment.company.toLowerCase().includes(needle) ||
          investment.sector.toLowerCase().includes(needle),
      )
    : INVESTMENTS

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-[560px]">
        <Frame dense>
          <FramePanel className="p-0">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <span className="text-[15px] font-semibold">
                Recent Investments
              </span>
              <InputGroup className="h-8 w-[190px]">
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupInput
                  ref={searchRef}
                  placeholder="Search"
                  aria-label="Search investments"
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
                    Company
                  </TableHead>
                  <TableHead className="w-[38%] text-[13px] font-normal text-muted-foreground">
                    Sector
                  </TableHead>
                  <TableHead className="w-[18%] text-[13px] font-normal text-muted-foreground">
                    Value Change
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
                      No investments found.
                    </TableCell>
                  </TableRow>
                ) : (
                  rows.map((investment) => {
                    const Logo = investment.logo
                    return (
                      <TableRow
                        key={investment.id}
                        className="cursor-pointer last:border-0"
                      >
                        <TableCell>
                          <div className="flex items-center gap-2.5">
                            <span
                              className={cn(
                                "flex size-8 shrink-0 items-center justify-center rounded-lg text-white [&_svg]:size-4",
                                investment.logoBg,
                              )}
                            >
                              <Logo />
                            </span>
                            <div className="min-w-0">
                              <div className="truncate text-[13px] font-medium">
                                {investment.company}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {investment.date}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-[13px]">
                          {investment.sector}
                        </TableCell>
                        <TableCell
                          className={cn(
                            "text-[13px] font-medium tabular-nums",
                            investment.tone === "gain"
                              ? "text-success"
                              : "text-destructive",
                          )}
                        >
                          {investment.valueChange}
                        </TableCell>
                      </TableRow>
                    )
                  })
                )}
              </TableBody>
            </Table>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}

export default ListRecentInvestmentsBlock
