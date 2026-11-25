import { ArrowDownRightIcon, ArrowUpRightIcon, TrendingDownIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"

const COLUMNS = [
  { title: "Total Sales & Cost", period: "Last 60 days", value: "$956.82k", change: "+5.4%", up: true, note: "+8.20k vs prev. 60 days" },
  { title: "New Customers", period: "This quarter", value: "1,245", change: "+3.2%", up: true, note: "+39 vs last quarter" },
  { title: "Churn Rate", period: "Last 30 days", value: "2.8%", change: "-1.1%", up: false, note: "-0.3% vs prev. 30 days" },
]

export function Stats7Block() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="bg-card grid overflow-hidden rounded-xl border shadow-sm md:grid-cols-3">
        {COLUMNS.map((column, index) => (
          <div key={column.title} className={index < 2 ? "border-b p-4 md:border-r md:border-b-0" : "p-4"}>
            <p className="text-sm font-semibold">{column.title}</p>
            <p className="text-muted-foreground text-sm">{column.period}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-2xl font-semibold">{column.value}</span>
              <Badge variant={column.up ? "success-light" : "destructive-light"} size="sm">
                {column.up ? <ArrowUpRightIcon /> : <ArrowDownRightIcon />}
                {column.change}
              </Badge>
            </div>
            <p className="text-muted-foreground mt-1 flex items-center gap-1 text-xs"><TrendingDownIcon className="size-3" />{column.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats7Block
