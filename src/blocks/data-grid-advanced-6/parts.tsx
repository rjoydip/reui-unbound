import { ArrowDownRightIcon, ArrowUpRightIcon, MinusIcon } from "lucide-react"

import { Badge } from "@/components/reui-unbound/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import {
  METRICS,
  deltaFor,
  formatMetric,
  formatMoney,
  metricTotal,
} from "./data"
import type { Metric, Model } from "./data"

export function ShareCell({ metric, model }: { metric: Metric; model: Model }) {
  const value = Number(metric.values[model.id] ?? 0)
  const delta = metric.kind === "actual" ? deltaFor(metric, model.id) : null

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className="text-foreground text-sm font-semibold tabular-nums">
        {value.toFixed(1)}
      </span>
      {delta !== null && (
        <span
          className={cn(
            "flex items-center gap-0.5 text-[11px] tabular-nums",
            delta > 0
              ? "text-destructive"
              : delta < 0
                ? "text-warning-foreground"
                : "text-muted-foreground",
          )}
        >
          {delta > 0 ? (
            <ArrowUpRightIcon className="size-3" />
          ) : delta < 0 ? (
            <ArrowDownRightIcon className="size-3" />
          ) : (
            <MinusIcon className="size-3" />
          )}
          {delta > 0 ? "+" : ""}
          {delta.toFixed(1)}
        </span>
      )}
    </div>
  )
}

export function MetricCell({
  metric,
  model,
  onChange,
  onOpen,
}: {
  metric: Metric
  model: Model
  onChange: (metricId: string, modelId: string, value: number) => void
  onOpen: () => void
}) {
  const raw = metric.values[model.id]
  const value = Number(raw ?? 0)

  if (metric.editable) {
    return (
      <div
        className="flex justify-end"
        onClick={(event) => event.stopPropagation()}
      >
        <Input
          type="number"
          step={metric.kind === "cost" ? "0.01" : "1"}
          value={value}
          aria-label={`${metric.label} for ${model.name}`}
          onChange={(event) =>
            onChange(metric.id, model.id, Number(event.target.value))
          }
          className={cn(
            "h-7 w-16 bg-background px-1.5 text-right text-sm tabular-nums",
            metric.kind === "order" && value !== 0 && "border-primary/40",
          )}
        />
      </div>
    )
  }

  if (metric.kind === "share" || metric.kind === "actual") {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="flex w-full justify-end rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <ShareCell metric={metric} model={model} />
      </button>
    )
  }

  if (metric.kind === "supplier") {
    return (
      <button type="button" onClick={onOpen} className="flex w-full">
        <Badge
          variant="outline"
          size="sm"
          className="bg-background font-mono text-[10px]"
        >
          {String(raw ?? "-")}
        </Badge>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "ml-auto flex w-full items-center justify-end gap-1 text-sm tabular-nums",
        metric.kind === "cost" ? "text-foreground" : "text-muted-foreground",
      )}
    >
      {metric.kind === "cost" ? formatMoney(value) : formatMetric(metric, value)}
    </button>
  )
}

export function CellSheet({
  metric,
  model,
  onOpenChange,
}: {
  metric: Metric | null
  model: Model | null
  onOpenChange: (open: boolean) => void
}) {
  if (!metric || !model) return null

  const value = Number(metric.values[model.id] ?? 0)
  const shareMetric = METRICS.find((entry) => entry.id === "share")
  const actualMetric = METRICS.find((entry) => entry.id === "actual")
  const toleranceMetric = METRICS.find((entry) => entry.id === "tolerance")
  const minMetric = METRICS.find((entry) => entry.id === "min")
  const supplierMetric = METRICS.find((entry) => entry.id === "supplier")
  const share = Number(shareMetric?.values[model.id] ?? 0)
  const actual = Number(actualMetric?.values[model.id] ?? 0)
  const tolerance = Number(toleranceMetric?.values[model.id] ?? 0)
  const minOrder = Number(minMetric?.values[model.id] ?? 0)
  const supplier = String(supplierMetric?.values[model.id] ?? model.supplier)

  return (
    <Sheet open onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>
            {model.name} · {metric.label}
          </SheetTitle>
          <SheetDescription>
            {model.category} · {model.supplier} route · autumn plan v12
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4 px-4 pb-6">
          <div className="bg-muted/40 rounded-lg border p-3">
            <div className="text-muted-foreground text-xs">
              {metric.hint}
            </div>
            <div className="mt-1 text-2xl font-semibold tabular-nums">
              {metric.kind === "supplier"
                ? String(metric.values[model.id])
                : metric.kind === "cost"
                  ? formatMoney(value)
                  : metric.kind === "share" ||
                      metric.kind === "actual" ||
                      metric.kind === "target" ||
                      metric.kind === "percent"
                    ? value.toFixed(1)
                    : value.toLocaleString("en-US")}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Target share</div>
              <div className="font-medium tabular-nums">
                {share.toFixed(1)}%
              </div>
            </div>
            <div className="rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Actual share</div>
              <div className="font-medium tabular-nums">
                {actual.toFixed(1)}%
              </div>
            </div>
            <div className="rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Tolerance</div>
              <div className="font-medium tabular-nums">
                {tolerance.toFixed(1)} pp
              </div>
            </div>
            <div className="rounded-lg border p-2.5">
              <div className="text-muted-foreground text-xs">Category total</div>
              <div className="font-medium tabular-nums">
                {metricTotal(metric) === null
                  ? "-"
                  : metric.kind === "cost"
                    ? formatMoney(metricTotal(metric) ?? 0)
                    : (metricTotal(metric) ?? 0).toFixed(1)}
              </div>
            </div>
          </div>

          <Separator />

          <dl className="flex flex-col gap-2 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-muted-foreground">Supplier route</dt>
              <dd className="font-medium">{supplier}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-muted-foreground">Min order</dt>
              <dd className="font-medium tabular-nums">{minOrder} sk</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-muted-foreground">Plan stage</dt>
              <dd>
                <Badge variant="success-light" size="sm">
                  On plan
                </Badge>
              </dd>
            </div>
          </dl>

          <p className="text-muted-foreground text-xs text-pretty">
            Cell detail is read-only in this demo. Edit suggested orders and
            case costs directly in the sheet, then submit the plan to recost the
            basket.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
