import { ArrowDownRightIcon, ArrowUpRightIcon, LayersIcon, ShoppingCartIcon, UsersRoundIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"

const CARDS = [
  { label: "Active Projects", value: "17", change: "+12.8%", up: true, icon: LayersIcon, tone: "bg-emerald-100 text-emerald-700" },
  { label: "Orders Processed", value: "3,421", change: "+3.7%", up: true, icon: ShoppingCartIcon, tone: "bg-violet-100 text-violet-700" },
  { label: "Churned Users", value: "89", change: "-2.1%", up: false, icon: UsersRoundIcon, tone: "bg-rose-100 text-rose-700" },
]

export function StatsAnalyticsOverviewBlock() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="grid gap-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <div key={card.label} className="bg-card rounded-xl border p-4 shadow-sm">
            <div className="flex items-start justify-between">
              <span className={`flex size-9 items-center justify-center rounded-lg ${card.tone}`}><card.icon className="size-4" /></span>
              <Badge variant={card.up ? "success-light" : "destructive-light"} size="sm">
                {card.up ? <ArrowUpRightIcon /> : <ArrowDownRightIcon />}
                {card.change}
              </Badge>
            </div>
            <p className="text-muted-foreground mt-5 text-sm">{card.label}</p>
            <p className="mt-1 text-2xl font-semibold">{card.value}</p>
            <p className="text-muted-foreground mt-3 border-t pt-2.5 text-xs">From Jan 01 – Jul 30, 2024</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsAnalyticsOverviewBlock
