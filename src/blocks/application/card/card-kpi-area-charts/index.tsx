import {
  ChartColumnIcon,
  CircleDollarSignIcon,
  ClipboardCheckIcon,
  CreditCardIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { cn } from "cn"

const METRICS = [
  {
    label: "Total Orders",
    icon: ClipboardCheckIcon,
    valueBold: "1,246",
    valueFaint: "",
    badge: "239",
    positive: true,
    description: "Tracks overall orders placed within the selected timeframe",
    path: "M0 52 C60 40 70 28 120 26 C170 24 200 40 240 46 L240 120 L0 120 Z",
    from: "#818cf8",
    to: "#4f46e5",
  },
  {
    label: "Cumulative Spend",
    icon: CreditCardIcon,
    valueBold: "$89,378",
    valueFaint: ".02",
    badge: "$4K",
    positive: false,
    description: "Total amount spent across all transactions to date",
    path: "M0 46 C60 36 90 50 140 54 C185 58 215 42 240 38 L240 120 L0 120 Z",
    from: "#818cf8",
    to: "#4f46e5",
  },
  {
    label: "Avg. Order Value(AOV)",
    icon: CircleDollarSignIcon,
    valueBold: "$68",
    valueFaint: ".50",
    badge: "$17",
    positive: true,
    description: "Average revenue earned per order during reporting period",
    path: "M0 42 C50 58 90 62 130 46 C170 30 210 28 240 34 L240 120 L0 120 Z",
    from: "#818cf8",
    to: "#4f46e5",
  },
  {
    label: "Account Balance",
    icon: ChartColumnIcon,
    valueBold: "$31,345",
    valueFaint: ".21",
    badge: "$3K",
    positive: true,
    description: "Current available balance based on latest account activity",
    path: "M0 34 C60 18 100 20 150 32 C190 42 220 48 240 46 L240 120 L0 120 Z",
    from: "#6366f1",
    to: "#1e1b4b",
  },
]

export function CardKpiAreaChartsBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame
        spacing="xs"
        className="grid w-full max-w-[960px] gap-0 overflow-hidden rounded-xl p-0 md:grid-cols-4"
      >
        {METRICS.map((metric, index) => {
          const Icon = metric.icon
          const TrendIcon = metric.positive ? TrendingUpIcon : TrendingDownIcon
          return (
            <FramePanel
              key={metric.label}
              className="flex flex-col rounded-none border-y-0 border-r-0 border-l border-border bg-card p-4 pb-0 shadow-none first:border-l-0 max-md:border-l-0"
            >
              <Icon
                className="text-muted-foreground size-4.5"
                aria-hidden="true"
              />
              <p className="text-muted-foreground mt-5 text-sm">{metric.label}</p>
              <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
                <span className="text-xl font-semibold tracking-tight">
                  {metric.valueBold}
                  {metric.valueFaint ? (
                    <span className="text-muted-foreground/40">
                      {metric.valueFaint}
                    </span>
                  ) : null}
                </span>
                <Badge
                  size="sm"
                  variant={
                    metric.positive ? "success-light" : "warning-light"
                  }
                >
                  <TrendIcon aria-hidden="true" />
                  {metric.badge}
                </Badge>
              </div>
              <p className="text-muted-foreground mt-3 text-sm leading-snug text-balance">
                {metric.description}
              </p>

              <div className="mt-auto h-[112px] w-full pt-4">
                <svg
                  viewBox="0 0 240 120"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="block h-full w-full"
                >
                  <defs>
                    <linearGradient
                      id={`kpi-area-${index}`}
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor={metric.from} />
                      <stop offset="100%" stopColor={metric.to} />
                    </linearGradient>
                  </defs>
                  <path
                    d={metric.path}
                    transform="translate(0 -16)"
                    className={cn("fill-indigo-200 dark:fill-indigo-950")}
                  />
                  <path
                    d={metric.path}
                    fill={`url(#kpi-area-${index})`}
                  />
                </svg>
              </div>
            </FramePanel>
          )
        })}
      </Frame>
    </div>
  )
}

export default CardKpiAreaChartsBlock
