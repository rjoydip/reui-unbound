import { useState } from "react"
import {
  ArrowUpRightIcon,
  BarChart3Icon,
  FileTextIcon,
  ReceiptTextIcon,
  ShoppingCartIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { IconTile } from "@/components/kit/icon-tile"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type Metric = {
  label: string
  value: string
  suffix?: string
  trend: string
  direction: "up" | "down"
  icon: LucideIcon
  summary: string
}

const METRICS: Metric[] = [
  {
    label: "Total Orders",
    value: "1,246",
    trend: "23.08%",
    direction: "up",
    icon: ShoppingCartIcon,
    summary: "Orders placed across every storefront this month.",
  },
  {
    label: "Net Spend",
    value: "$89.3",
    suffix: "k",
    trend: "3.82%",
    direction: "up",
    icon: ReceiptTextIcon,
    summary: "Total spend net of refunds and cancelled orders.",
  },
  {
    label: "Avg. Basket Value",
    value: "$68.1",
    suffix: "k",
    trend: "0.39%",
    direction: "down",
    icon: FileTextIcon,
    summary: "Average order value across completed checkouts.",
  },
  {
    label: "Account Balance",
    value: "$2.3",
    suffix: "k",
    trend: "1.04%",
    direction: "up",
    icon: BarChart3Icon,
    summary: "Available balance in your payout account.",
  },
]

function TrendBadge({
  trend,
  direction,
}: Pick<Metric, "trend" | "direction">) {
  const TrendIcon =
    direction === "up" ? TrendingUpIcon : TrendingDownIcon

  return (
    <Badge
      variant={direction === "up" ? "success-light" : "destructive-light"}
      size="sm"
      className="ml-0.5"
    >
      <TrendIcon aria-hidden="true" />
      {trend}
    </Badge>
  )
}

export function ListOrderKpiListBlock() {
  const [active, setActive] = useState<Metric | null>(null)

  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame dense stacked className="w-full max-w-[445px]">
        {METRICS.map((metric) => {
          const Icon = metric.icon

          return (
            <FramePanel key={metric.label} className="p-0!">
              <div className="flex items-center gap-3 px-4 py-4">
                <IconTile variant="frame" size="default">
                  <Icon aria-hidden="true" />
                </IconTile>

                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <span className="text-lg leading-none font-semibold tracking-tight tabular-nums">
                      {metric.value}
                    </span>
                    {metric.suffix ? (
                      <span className="text-muted-foreground text-xs">
                        {metric.suffix}
                      </span>
                    ) : null}
                    <TrendBadge
                      trend={metric.trend}
                      direction={metric.direction}
                    />
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {metric.label}
                  </span>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="size-8 rounded-md"
                  aria-label={`Open ${metric.label} details`}
                  onClick={() => setActive(metric)}
                >
                  <ArrowUpRightIcon />
                </Button>
              </div>
            </FramePanel>
          )
        })}
      </Frame>

      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null)
        }}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{active?.label}</DialogTitle>
            <DialogDescription>{active?.summary}</DialogDescription>
          </DialogHeader>

          {active ? (
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Current value</span>
                <span className="font-semibold tabular-nums">
                  {active.value}
                  {active.suffix ?? ""}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Month over month</span>
                <TrendBadge
                  trend={active.trend}
                  direction={active.direction}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Reporting period</span>
                <span>July 2026</span>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ListOrderKpiListBlock
