import { ArrowDownRightIcon, ArrowUpRightIcon, EllipsisIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const STATS = [
  { label: "Total Sales", value: "$892.2M", change: "+0.2%", up: true, previous: "$889.1M", tone: "bg-neutral-950 text-white" },
  { label: "New Customers", value: "12,800", change: "+3.1%", up: true, previous: "12,400", tone: "bg-fuchsia-600 text-white" },
  { label: "Refunds", value: "320", change: "-1.2%", up: false, previous: "340", tone: "bg-blue-600 text-white" },
  { label: "Churn Rate", value: "2.3%", change: "-0.1%", up: false, previous: "2.4%", tone: "bg-teal-600 text-white" },
]

export function StatsKpiScorecardBlock() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className={`rounded-xl p-4 shadow-sm ${stat.tone}`}>
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">{stat.label}</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon-xs" className="ml-auto text-white/70 hover:bg-white/10 hover:text-white" aria-label={`${stat.label} options`}><EllipsisIcon /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem>Export data</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-[28px] leading-none font-semibold">{stat.value}</span>
              <span className="inline-flex items-center gap-0.5 rounded bg-white/20 px-1.5 py-0.5 text-xs">
                {stat.up ? <ArrowUpRightIcon className="size-3" /> : <ArrowDownRightIcon className="size-3" />}
                {stat.change.replace(/^[+-]/, "")}
              </span>
            </div>
            <div className="mt-5 border-t border-white/20 pt-2.5 text-xs">
              Vs last month: <span className="font-medium">{stat.previous}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsKpiScorecardBlock
