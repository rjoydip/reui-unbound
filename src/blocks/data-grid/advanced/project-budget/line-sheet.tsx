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
  MONTHS,
  DECISION_META,
  formatMoney,
  formatVariance,
  overBudget,
  scheduleLabel,
  spendTrend,
  spentPct,
  variance,
} from "./data"
import type { BudgetLine } from "./data"
import { WORKSTREAM_META } from "./parts"

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground text-sm">{label}</dt>
      <dd className="text-right text-sm font-medium">{value}</dd>
    </div>
  )
}

function TrendChart({ line }: { line: BudgetLine }) {
  const points = spendTrend(line)
  const width = 360
  const height = 110
  const max = Math.max(...points.map((point) => Math.max(point.actual, point.forecast))) || 1

  function path(key: "actual" | "forecast") {
    return points
      .map((point, index) => {
        const x = (index / (points.length - 1)) * width
        const y = height - (point[key] / max) * height
        return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
      })
      .join(" ")
  }

  const actual = path("actual")
  const area = `${actual} L${width},${height} L0,${height} Z`

  return (
    <div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`Cumulative spend for ${line.name}`}
        className="h-28 w-full overflow-visible"
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
        <path d={area} className="fill-success/10" />
        <path
          d={path("forecast")}
          fill="none"
          className="stroke-info"
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
        <path
          d={actual}
          fill="none"
          className="stroke-success"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <div className="text-muted-foreground flex justify-between text-[10px]">
        {MONTHS.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
      <div className="text-muted-foreground mt-2 flex items-center gap-3 text-xs">
        <span className="flex items-center gap-1">
          <span className="bg-success h-0.5 w-4 rounded" />
          Actual
        </span>
        <span className="flex items-center gap-1">
          <span className="bg-info h-0.5 w-4 rounded" />
          Forecast
        </span>
      </div>
    </div>
  )
}

export function LineSheet({
  line,
  open,
  onOpenChange,
}: {
  line: BudgetLine | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!line) return null

  const meta = WORKSTREAM_META[line.workstream]
  const Icon = meta.icon
  const value = variance(line)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="gap-3 border-b pb-4">
          <div className="flex items-center gap-3">
            <span className={cn("bg-muted flex size-10 items-center justify-center rounded-lg", meta.tone)}>
              <Icon className="size-5" />
            </span>
            <div className="min-w-0">
              <SheetTitle className="truncate">{line.name}</SheetTitle>
              <SheetDescription className="truncate">
                {line.workstream} · {line.vendor}
              </SheetDescription>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={overBudget(line) ? "destructive-light" : "success-light"} size="lg">
              {overBudget(line) ? "Over budget" : "Within budget"}
            </Badge>
            {line.decision && (
              <Badge variant={DECISION_META[line.decision].variant} size="lg">
                {DECISION_META[line.decision].label}
              </Badge>
            )}
            {line.reforecast && (
              <Badge variant="outline" size="lg">
                Re-forecasted
              </Badge>
            )}
          </div>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-muted/25 rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Budget</div>
              <div className="mt-0.5 text-lg font-semibold tabular-nums">{formatMoney(line.budget)}</div>
            </div>
            <div className="bg-muted/25 rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Actual</div>
              <div className="mt-0.5 text-lg font-semibold tabular-nums">{formatMoney(line.actual)}</div>
            </div>
            <div className="bg-muted/25 rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Forecast</div>
              <div className="mt-0.5 text-lg font-semibold tabular-nums">{formatMoney(line.forecast)}</div>
            </div>
            <div className="bg-muted/25 rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Variance</div>
              <div
                className={cn(
                  "mt-0.5 text-lg font-semibold tabular-nums",
                  value < 0 ? "text-destructive" : "text-success-foreground",
                )}
              >
                {formatVariance(value)}
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium">Spend trend</span>
              <span className="text-muted-foreground text-xs">Cumulative</span>
            </div>
            <TrendChart line={line} />
          </div>

          <div className="rounded-lg border p-3">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium">Budget consumed</span>
              <span className="tabular-nums">{Math.round(spentPct(line))}%</span>
            </div>
            <Progress value={Math.min(spentPct(line), 100)} className="h-2" />
            <div className="text-muted-foreground mt-1 text-xs">
              {formatMoney(line.actual)} of {formatMoney(line.budget)} spent ·{" "}
              {formatMoney(line.forecast)} at completion
            </div>
          </div>

          <dl className="grid gap-2 rounded-lg border p-3">
            <Detail label="Basis" value={line.basis} />
            <Detail label="Vendor" value={line.vendor} />
            <Detail label="Schedule" value={scheduleLabel(line)} />
            <Detail label="Workstream" value={line.workstream} />
            {line.decision && (
              <Detail label="Decision" value={DECISION_META[line.decision].label} />
            )}
          </dl>

          {line.decisionNote && (
            <div className="bg-muted/25 rounded-lg border p-3">
              <div className="mb-1 text-sm font-medium">Decision note</div>
              <p className="text-muted-foreground text-xs">{line.decisionNote}</p>
            </div>
          )}

          <p className="text-muted-foreground text-xs">
            Forecast is editable inline in the table. Cover, adjust and hold
            decisions live in the row menu.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
