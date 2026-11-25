import { ArrowDownRightIcon, ArrowUpRightIcon, EllipsisIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const STATS = [
  { label: "All Orders", value: "122,380", change: "+15.1%", up: true, previous: "105,922" },
  { label: "Order Created", value: "1.9M", change: "-2%", up: false, previous: "2.0M" },
  { label: "Organic Sales", value: "$98.1M", change: "+0.4%", up: true, previous: "$97.8M" },
  { label: "Active Users", value: "48,210", change: "+3.7%", up: true, previous: "46,480" },
]

export function StatsStatsOverviewBlock() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl border p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">{stat.label}</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label={`${stat.label} options`}><EllipsisIcon /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem>Export data</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-2xl font-semibold">{stat.value}</span>
              <span className={stat.up ? "bg-emerald-100 text-emerald-700 inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-xs" : "bg-rose-100 text-rose-600 inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-xs"}>
                {stat.up ? <ArrowUpRightIcon className="size-3" /> : <ArrowDownRightIcon className="size-3" />}
                {stat.change.replace(/^[+-]/, "")}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-1 border-t pt-2.5 text-xs">
              <span className="text-muted-foreground">Vs last month:</span>
              <span className="font-medium">{stat.previous}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsStatsOverviewBlock
