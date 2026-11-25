import { useState } from "react"
import { ArrowDownRightIcon, ArrowUpRightIcon, InfoIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { cn } from "cn"

const PERIODS = ["1W", "1M", "3M", "1Y"]

const SLEEVES = [
  { name: "Equities", percent: 52, change: "+5.1%", up: true, exposure: "$5.2M", managers: 6, color: "bg-emerald-500" },
  { name: "Fixed Income", percent: 29, change: "-2.6%", up: false, exposure: "$2.9M", managers: 2, color: "bg-violet-500" },
  { name: "Alternatives", percent: 12, change: "-0.9%", up: false, exposure: "$1.2M", managers: 5, color: "bg-amber-400" },
]

const MANAGERS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
]

export function Stats17Block() {
  const [period, setPeriod] = useState("1M")

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="grid gap-4 md:grid-cols-3">
        {SLEEVES.map((sleeve) => (
          <div key={sleeve.name} className="bg-card rounded-xl border p-4 shadow-sm">
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-medium">{sleeve.name}</p>
              <InfoIcon className="text-muted-foreground size-3.5" />
              <div className="ml-auto flex items-center overflow-hidden rounded-md border">
                {PERIODS.map((item) => (
                  <button key={item} type="button" onClick={() => setPeriod(item)} className={cn("px-2 py-0.5 text-[10px]", period === item ? "bg-muted font-medium" : "text-muted-foreground")}>{item}</button>
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-2xl font-semibold">{sleeve.percent}%</span>
              <Badge variant={sleeve.up ? "success-light" : "destructive-light"} size="sm">
                {sleeve.up ? <ArrowUpRightIcon /> : <ArrowDownRightIcon />}{sleeve.change}
              </Badge>
              <span className="text-muted-foreground text-xs">vs last month</span>
            </div>

            <div className="mt-3 flex h-4 items-center gap-[2px]">
              {Array.from({ length: 32 }, (_, index) => (
                <span key={index} className={cn("h-full flex-1 rounded-[1px]", index < Math.round((sleeve.percent / 60) * 32) ? sleeve.color : "bg-muted")} />
              ))}
            </div>

            <div className="text-muted-foreground mt-3 flex items-center gap-2 text-xs">
              <span>Exposure</span>
              <span className="text-foreground font-medium">{sleeve.exposure}</span>
              <div className="ml-auto flex -space-x-1.5">
                {MANAGERS.map((src) => (
                  <Avatar key={src} size="sm" className="size-5 ring-2 ring-card"><AvatarImage src={src} alt="" /><AvatarFallback>MG</AvatarFallback></Avatar>
                ))}
              </div>
              <span>{sleeve.managers} Managers</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats17Block
