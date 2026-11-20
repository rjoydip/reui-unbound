import { Badge } from "@/components/reui-unbound/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import {
  formatBudget,
  formatCurrent,
  formatObjective,
} from "./data"
import type { SloEvaluation } from "./data"
import { AlertBadge, SloStatusBadge } from "./parts"

const WEEK_LABELS = [
  "Sep 2",
  "Sep 9",
  "Sep 16",
  "Sep 23",
  "Sep 30",
  "Oct 7",
  "Oct 14",
  "Oct 21",
  "Oct 28",
  "Nov 4",
  "Nov 11",
  "Nov 18",
]

function HistoryChart({ values }: { values: number[] }) {
  const width = 320
  const height = 110
  const baseline = 55
  const coords = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width
    const y = baseline - (Math.max(-100, Math.min(100, value)) / 100) * 42
    return [x, y] as const
  })
  const line = coords
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ")
  const area = `0,${baseline} ${line} ${width},${baseline}`
  const negative = values[values.length - 1] < 0

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-28 w-full"
      fill="none"
      aria-label="Error budget remaining over twelve weeks"
      role="img"
    >
      <line
        x1={0}
        x2={width}
        y1={baseline}
        y2={baseline}
        className="stroke-border"
        strokeDasharray="3 4"
      />
      <polygon
        points={area}
        className={negative ? "fill-destructive/10" : "fill-success/10"}
      />
      <polyline
        points={line}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={negative ? "text-destructive" : "text-success"}
      />
      <circle
        cx={coords[coords.length - 1][0]}
        cy={coords[coords.length - 1][1]}
        r={3}
        fill="currentColor"
        className={negative ? "text-destructive" : "text-success"}
      />
    </svg>
  )
}

export function SloSheet({
  row,
  open,
  onOpenChange,
}: {
  row: SloEvaluation | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        {row && (
          <>
            <SheetHeader className="gap-3 border-b pb-4">
              <div className="min-w-0">
                <SheetTitle className="truncate">{row.slo.name}</SheetTitle>
                <SheetDescription className="truncate">
                  {row.slo.team} &middot; {row.slo.slug}
                </SheetDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <SloStatusBadge status={row.status} />
                <AlertBadge alert={row.alert} />
                <Badge variant="outline">Owner {row.slo.owner.name}</Badge>
              </div>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-4 pb-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border p-3">
                  <div className="text-muted-foreground text-xs">Objective</div>
                  <div className="mt-1 text-lg font-semibold tabular-nums">
                    {formatObjective(row.objective)}
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-muted-foreground text-xs">Current</div>
                  <div className="mt-1 text-lg font-semibold tabular-nums">
                    {formatCurrent(row.current)}
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-muted-foreground text-xs">
                    Error budget
                  </div>
                  <div
                    className={cn(
                      "mt-1 text-lg font-semibold tabular-nums",
                      row.budget < 0 ? "text-destructive" : "text-success-foreground",
                    )}
                  >
                    {formatBudget(row.budget)}
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-muted-foreground text-xs">Burn rate</div>
                  <div className="mt-1 text-lg font-semibold tabular-nums">
                    {row.burn.toFixed(1)}x
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Runs out</span>
                  <span className="font-medium">{row.runsOut}</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Alerting</span>
                  <AlertBadge alert={row.alert} />
                </div>
                <div className="mt-1.5 flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Evaluated</span>
                  <span>Nov 18, 2026 · 14:20 UTC</span>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="text-sm font-medium">Burn history</div>
                  <span className="text-muted-foreground text-xs">
                    Budget remaining, 12 weeks
                  </span>
                </div>
                <div className="rounded-lg border p-3">
                  <HistoryChart values={row.slo.history} />
                  <div className="text-muted-foreground mt-1 flex justify-between text-[10px]">
                    <span>Sep 2</span>
                    <span>Oct 14</span>
                    <span>Nov 18</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium">Recent weeks</div>
                <div className="overflow-hidden rounded-lg border">
                  {row.slo.history.slice(-4).map((value, index) => (
                    <div
                      key={WEEK_LABELS[index]}
                      className={cn(
                        "flex items-center justify-between gap-3 px-3 py-2 text-sm",
                        index !== 0 && "border-t",
                      )}
                    >
                      <span className="text-muted-foreground">
                        {WEEK_LABELS[WEEK_LABELS.length - 4 + index]}
                      </span>
                      <span
                        className={cn(
                          "font-medium tabular-nums",
                          value < 0 ? "text-destructive" : "text-success-foreground",
                        )}
                      >
                        {formatBudget(value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground text-xs">
                Budget left is `(current − objective) / (100 − objective)`.
                Burn rate above 1x spends the window&apos;s budget early; 8x
                pages the on-call.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
