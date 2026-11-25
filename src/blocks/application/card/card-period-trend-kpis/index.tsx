import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"

type TrendCard = {
  label: string
  valueBold: string
  valueFaint?: string
  change: string
  direction: "up" | "down"
  period: string
}

const CARDS: TrendCard[] = [
  {
    label: "Total Orders",
    valueBold: "1,246",
    change: "23.08%",
    direction: "up",
    period: "Annual",
  },
  {
    label: "Cumulative Spend",
    valueBold: "$89,378",
    valueFaint: ".02",
    change: "3.82%",
    direction: "up",
    period: "Monthly",
  },
  {
    label: "Avg. Order Value(AOV)",
    valueBold: "$68",
    valueFaint: ".50",
    change: "0.39%",
    direction: "down",
    period: "Weekly",
  },
  {
    label: "Account Balance",
    valueBold: "$2,345",
    valueFaint: ".94",
    change: "1.04%",
    direction: "up",
    period: "Daily",
  },
]

export function CardPeriodTrendKpisBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-3xl [--frame-gap:--spacing(3)]">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {CARDS.map((card) => (
            <FramePanel key={card.label} className="gap-0 p-0">
              <FrameHeader className="py-2">
                <FrameTitle className="text-[13px] font-medium">
                  {card.label}
                </FrameTitle>
              </FrameHeader>
              <div className="mx-0.75 mb-0.75 rounded-[calc(var(--frame-panel-radius)-4px)] border bg-background px-4 py-3.5 shadow-xs">
                <div className="text-2xl leading-none font-semibold tracking-tight">
                  {card.valueBold}
                  {card.valueFaint ? (
                    <span className="text-muted-foreground/60">
                      {card.valueFaint}
                    </span>
                  ) : null}
                </div>
                <div className="mt-3.5 flex items-center gap-2">
                  <Badge
                    variant={
                      card.direction === "up"
                        ? "success-light"
                        : "destructive-light"
                    }
                    size="sm"
                    radius="full"
                  >
                    {card.direction === "up" ? (
                      <TrendingUpIcon />
                    ) : (
                      <TrendingDownIcon />
                    )}
                    {card.change}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {card.period} trend
                  </span>
                </div>
              </div>
            </FramePanel>
          ))}
        </div>
      </Frame>
    </div>
  )
}

export default CardPeriodTrendKpisBlock
