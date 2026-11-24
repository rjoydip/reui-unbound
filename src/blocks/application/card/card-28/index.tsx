import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"

const METRICS = [
  {
    valueBold: "1,246",
    valueFaint: "",
    label: "Total Orders",
    badge: "23.08%",
    period: "Annual trend",
    positive: true,
  },
  {
    valueBold: "$89,378",
    valueFaint: ".02",
    label: "Cumulative Spend",
    badge: "3.82%",
    period: "Monthly trend",
    positive: true,
  },
  {
    valueBold: "$68",
    valueFaint: ".50",
    label: "Avg. Order Value(AOV)",
    badge: "0.39%",
    period: "Weekly trend",
    positive: false,
  },
  {
    valueBold: "$2,345",
    valueFaint: ".94",
    label: "Account Balance",
    badge: "1.04%",
    period: "Daily trend",
    positive: true,
  },
]

export function Card28Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="grid w-full max-w-[960px] gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((metric) => {
          const TrendIcon = metric.positive ? TrendingUpIcon : TrendingDownIcon
          return (
            <FramePanel
              key={metric.label}
              className="flex min-h-[120px] flex-col p-4"
            >
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-semibold tracking-tight">
                  {metric.valueBold}
                  {metric.valueFaint ? (
                    <span className="text-muted-foreground/40">
                      {metric.valueFaint}
                    </span>
                  ) : null}
                </p>
                <p className="text-muted-foreground text-sm">{metric.label}</p>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                <Badge
                  variant={metric.positive ? "success-light" : "destructive-light"}
                >
                  <TrendIcon aria-hidden="true" />
                  {metric.badge}
                </Badge>
                <span className="text-muted-foreground text-sm">
                  {metric.period}
                </span>
              </div>
            </FramePanel>
          )
        })}
      </Frame>
    </div>
  )
}

export default Card28Block
