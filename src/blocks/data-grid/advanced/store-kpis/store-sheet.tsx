import { Badge } from "@/components/kit/badge"
import { Progress } from "@/components/ui/progress"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import {
  MONTH_LABELS,
  delta,
  formatCount,
  formatDelta,
  formatMoney,
  formatPercent,
  goalProgress,
  paceLabel,
  storeHistory,
} from "./data"
import type { Store } from "./data"
import { CountryFlag, DotMatrix } from "./parts"

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground text-sm">{label}</dt>
      <dd className="text-right text-sm font-medium">{value}</dd>
    </div>
  )
}

function Kpi({
  label,
  value,
  previous,
  format,
}: {
  label: string
  value: number
  previous: number
  format: "money" | "count" | "percent"
}) {
  const change = delta(value, previous)
  return (
    <div className="bg-muted/25 rounded-lg border p-2.5">
      <div className="text-muted-foreground text-xs">{label}</div>
      <div className="mt-0.5 font-semibold tabular-nums">
        {format === "money"
          ? formatMoney(value)
          : format === "count"
            ? formatCount(value)
            : formatPercent(value)}
      </div>
      <div
        className={cn(
          "text-xs tabular-nums",
          change < 0 ? "text-destructive" : "text-success-foreground",
        )}
      >
        {formatDelta(change)} vs LY
      </div>
    </div>
  )
}

function TrendChart({ values, labels }: { values: number[]; labels: string[] }) {
  const width = 360
  const height = 110
  const max = Math.max(...values)
  const min = Math.min(...values) * 0.92
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width
    const y = height - ((value - min) / (max - min || 1)) * height
    return [x, y] as const
  })
  const line = points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ")
  const area = `${line} L${width},${height} L0,${height} Z`

  return (
    <div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`Monthly sales trend, ${labels[0]} to ${labels[labels.length - 1]}`}
        className="text-primary h-28 w-full overflow-visible"
        preserveAspectRatio="none"
      >
        {[0.25, 0.5, 0.75].map((ratio) => (
          <line
            key={ratio}
            x1={0}
            x2={width}
            y1={height * ratio}
            y2={height * ratio}
            className="stroke-border"
            strokeDasharray="3 4"
          />
        ))}
        <path d={area} fill="currentColor" className="text-primary/10" />
        <path
          d={line}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle
          cx={points[points.length - 1]![0]}
          cy={points[points.length - 1]![1]}
          r={3.5}
          fill="currentColor"
        />
      </svg>
      <div className="text-muted-foreground mt-1 flex justify-between text-[10px]">
        {labels.map((label, index) => (
          <span key={`${label}-${index}`}>{label}</span>
        ))}
      </div>
    </div>
  )
}

export function StoreSheet({
  store,
  factor,
  periodLabel,
  open,
  onOpenChange,
}: {
  store: Store | null
  factor: number
  periodLabel: string
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!store) return null

  const history = storeHistory(store).map((value) => Math.round(value * factor))
  const labels = MONTH_LABELS.filter((_, index) => index % 4 === 3)
  const progress = goalProgress(store, factor)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="gap-3 border-b pb-4">
          <div className="flex items-center gap-3">
            <CountryFlag code={store.countryCode} />
            <div className="min-w-0">
              <SheetTitle className="truncate">{store.name}</SheetTitle>
              <SheetDescription className="truncate">
                {store.format} · {store.city}, {store.country}
              </SheetDescription>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant={
                store.pace === "ahead"
                  ? "success-light"
                  : store.pace === "behind"
                    ? "destructive-light"
                    : "info-light"
              }
              size="lg"
            >
              {paceLabel(store.pace)}
            </Badge>
            <Badge variant="outline" size="lg">
              {periodLabel}
            </Badge>
            <span className="text-muted-foreground text-xs">
              Manager {store.manager}
            </span>
          </div>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4">
          <div className="rounded-lg border p-3">
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="font-medium">Monthly goal</span>
              <span className="tabular-nums">
                {formatMoney(store.sales * factor)}{" "}
                <span className="text-muted-foreground">
                  / {formatMoney(store.goal)}
                </span>
              </span>
            </div>
            <Progress value={Math.min(progress, 100)} className="mt-2 h-2" />
            <div className="text-muted-foreground mt-1 text-xs">
              {Math.round(progress)}% of goal ·{" "}
              {store.sales * factor >= store.goal
                ? `${formatMoney(store.sales * factor - store.goal)} over target`
                : `${formatMoney(store.goal - store.sales * factor)} to target`}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">24-month sales</span>
              <span className="text-muted-foreground text-xs">
                to {periodLabel}
              </span>
            </div>
            <TrendChart
              values={history}
              labels={labels.map((label) => label)}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Kpi label="Net sales" value={store.sales * factor} previous={store.salesLy * factor} format="money" />
            <Kpi label="Gross profit" value={store.grossProfit * factor} previous={store.grossProfit * 0.94} format="money" />
            <Kpi label="Orders" value={store.orders * factor} previous={store.ordersLy * factor} format="count" />
            <Kpi label="Customers" value={store.customers * factor} previous={store.customersLy * factor} format="count" />
            <Kpi label="Units" value={store.units * factor} previous={store.unitsLy * factor} format="count" />
            <Kpi label="Return rate" value={store.returns} previous={store.returnsLy} format="percent" />
          </div>

          <div className="rounded-lg border p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Sales rhythm</span>
              <DotMatrix
                values={history.slice(-12)}
                rows={4}
                tone="bg-violet-500/70"
                className="w-28"
              />
            </div>
            <dl className="grid gap-2">
              <Detail label="Format" value={store.format} />
              <Detail label="Country" value={store.country} />
              <Detail label="Store manager" value={store.manager} />
              <Detail label="Period" value={periodLabel} />
            </dl>
          </div>

          <p className="text-muted-foreground text-xs">
            Compared with the same month last year. Trend is a fixed demo
            series; swap it for the warehouse feed before shipping.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
