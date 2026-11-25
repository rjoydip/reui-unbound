import { Badge } from "@/components/kit/badge"
import { HeadsetIcon, SmileIcon, CheckCircle2Icon } from "lucide-react"

const CARDS = [
  { value: "320", label: "Support Tickets", badge: "12 Open, 308 Closed", tone: "focus-light", icon: HeadsetIcon, iconTone: "text-blue-500 bg-blue-50" },
  { value: "98%", label: "Resolved", badge: "+2.1% this month", tone: "success-light", icon: CheckCircle2Icon, iconTone: "text-emerald-500 bg-emerald-50" },
  { value: "4.8", label: "Satisfaction Rate", badge: "Avg. (out of 5)", tone: "warning-light", icon: SmileIcon, iconTone: "text-amber-500 bg-amber-50" },
]

export function Stats12Block() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="grid gap-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <div key={card.label} className="bg-card rounded-xl border p-4 shadow-sm">
            <span className={`flex size-9 items-center justify-center rounded-lg ${card.iconTone}`}><card.icon className="size-4" /></span>
            <p className="mt-6 text-2xl font-semibold">{card.value}</p>
            <p className="text-muted-foreground text-sm">{card.label}</p>
            <Badge variant={card.tone as "focus-light"} size="sm" className="mt-3">{card.badge}</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats12Block
