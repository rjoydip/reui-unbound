import { ArrowDownIcon, ArrowUpIcon, CirclePauseIcon, type LucideIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { IconTile } from "@/components/kit/icon-tile"
import { cn } from "cn"

import {
  formatCount,
  formatDelta,
  formatMoney,
  formatPercent,
  goalProgress,
  paceLabel,
  sparkFor,
} from "./data"
import type { MetricKey, Store, StorePace } from "./data"

/** Soft dot-matrix strip: one column per month, value bucketed into rows. */
export function DotMatrix({
  values,
  rows = 3,
  tone = "bg-violet-500/80",
  className,
}: {
  values: number[]
  rows?: number
  tone?: string
  className?: string
}) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const span = max - min || 1

  return (
    <div
      aria-hidden
      className={cn("grid gap-[2px]", className)}
      style={{
        gridTemplateColumns: `repeat(${values.length}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: rows * values.length }, (_, index) => {
        const row = Math.floor(index / values.length)
        const column = index % values.length
        const level = (values[column]! - min) / span
        const active = level >= 1 - (row + 1) / rows
        return (
          <span
            key={index}
            className={cn(
              "size-[3px] rounded-full",
              active ? tone : "bg-muted",
            )}
          />
        )
      })}
    </div>
  )
}

export function CountryFlag({ code }: { code: string }) {
  return (
    <img
      src={`https://flagcdn.com/${code}.svg`}
      alt=""
      loading="lazy"
      className="size-4 shrink-0 rounded-full object-cover ring-1 ring-border"
    />
  )
}

const PACE_VARIANT: Record<StorePace, "success-light" | "info-light" | "destructive-light"> = {
  ahead: "success-light",
  "on-track": "info-light",
  behind: "destructive-light",
}

export function PaceBadge({ store, factor = 1 }: { store: Store; factor?: number }) {
  const progress = goalProgress(store, factor)
  return (
    <div className="flex flex-col items-start gap-1">
      <Badge variant={PACE_VARIANT[store.pace]} size="lg" className="font-medium">
        {store.pace === "behind" && <CirclePauseIcon />}
        {paceLabel(store.pace)}
      </Badge>
      <span className="text-muted-foreground text-xs tabular-nums">
        {Math.round(progress)}% of goal
      </span>
    </div>
  )
}

export function StoreCell({ store }: { store: Store }) {
  return (
    <div className="flex items-center gap-2.5">
      <CountryFlag code={store.countryCode} />
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">{store.name}</div>
        <div className="text-muted-foreground truncate text-xs">
          {store.format} · {store.city}
        </div>
      </div>
    </div>
  )
}

export function DeltaText({ value }: { value: number }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-xs tabular-nums",
        value < 0 ? "text-destructive" : "text-success-foreground",
      )}
    >
      {value < 0 ? <ArrowDownIcon className="size-3" /> : <ArrowUpIcon className="size-3" />}
      {formatDelta(value)}
    </span>
  )
}

export function MetricCell({
  value,
  current,
  previous,
  metric,
  store,
  note,
  tone = "bg-violet-500/70",
  rows = 2,
}: {
  value: string
  current: number
  previous: number
  metric: MetricKey
  store: Store
  note?: string
  tone?: string
  rows?: number
}) {
  const change = previous ? ((current - previous) / previous) * 100 : 0

  return (
    <div className="flex flex-col items-end gap-1">
      <span className="font-medium tabular-nums">{value}</span>
      <div className="flex items-center justify-end gap-1.5">
        <DeltaText value={change} />
        {note && <span className="text-muted-foreground text-xs">{note}</span>}
      </div>
      <DotMatrix
        values={sparkFor(store, metric)}
        rows={rows}
        tone={tone}
        className="mt-0.5 w-20"
      />
    </div>
  )
}

export function SalesCell({ store, factor = 1 }: { store: Store; factor?: number }) {
  return (
    <MetricCell
      value={formatMoney(store.sales * factor)}
      current={store.sales * factor}
      previous={store.salesLy * factor}
      metric="sales"
      store={store}
      note="vs LY"
      tone="bg-violet-500/70"
    />
  )
}

export function OrdersCell({ store, factor = 1 }: { store: Store; factor?: number }) {
  return (
    <MetricCell
      value={formatCount(store.orders * factor)}
      current={store.orders * factor}
      previous={store.ordersLy * factor}
      metric="orders"
      store={store}
      note="vs LY"
      tone="bg-amber-500/70"
    />
  )
}

export function CustomersCell({ store, factor = 1 }: { store: Store; factor?: number }) {
  return (
    <MetricCell
      value={formatCount(store.customers * factor)}
      current={store.customers * factor}
      previous={store.customersLy * factor}
      metric="customers"
      store={store}
      note="vs LY"
      tone="bg-sky-500/70"
    />
  )
}

export function UnitsCell({ store, factor = 1 }: { store: Store; factor?: number }) {
  return (
    <MetricCell
      value={formatCount(store.units * factor)}
      current={store.units * factor}
      previous={store.unitsLy * factor}
      metric="units"
      store={store}
      note="vs LY"
      tone="bg-emerald-500/70"
    />
  )
}

export function ProfitCell({ store, factor = 1 }: { store: Store; factor?: number }) {
  const margin = ((store.grossProfit * factor) / (store.sales * factor)) * 100
  return (
    <div className="flex flex-col items-end gap-1">
      <span className="font-medium tabular-nums">
        {formatMoney(store.grossProfit * factor)}
      </span>
      <span className="text-muted-foreground text-xs tabular-nums">
        {margin.toFixed(0)}% margin
      </span>
      <DotMatrix
        values={sparkFor(store, "profit")}
        rows={2}
        tone="bg-primary/70"
        className="mt-0.5 w-20"
      />
    </div>
  )
}

export function ReturnsCell({ store }: { store: Store }) {
  const change = store.returns - store.returnsLy
  return (
    <div className="flex flex-col items-end gap-1">
      <Badge
        variant={store.returns >= 7 ? "destructive-light" : "outline"}
        size="lg"
        className="font-medium tabular-nums"
      >
        {formatPercent(store.returns)}
      </Badge>
      <span
        className={cn(
          "text-xs tabular-nums",
          change > 0 ? "text-destructive" : "text-success-foreground",
        )}
      >
        {change > 0 ? "+" : ""}
        {change.toFixed(1)} pts
      </span>
      <DotMatrix
        values={sparkFor(store, "returns")}
        rows={2}
        tone="bg-rose-500/70"
        className="mt-0.5 w-20"
      />
    </div>
  )
}

export function KpiCard({
  label,
  value,
  note,
  trend,
  tone,
  icon: Icon,
  iconTone,
}: {
  label: string
  value: string
  note: string
  trend: number[]
  tone: string
  icon: LucideIcon
  iconTone: string
}) {
  return (
    <div className="bg-muted/25 flex flex-col gap-2 rounded-lg border p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-muted-foreground text-xs font-medium">{label}</span>
        <IconTile variant="soft" size="xs" className={iconTone}>
          <Icon />
        </IconTile>
      </div>
      <div>
        <div className="text-lg font-semibold tabular-nums">{value}</div>
        <div className="text-muted-foreground text-xs">{note}</div>
      </div>
      <DotMatrix values={trend} rows={3} tone={tone} className="w-full" />
    </div>
  )
}
