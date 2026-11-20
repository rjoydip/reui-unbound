import {
  Building2Icon,
  ChevronDownIcon,
  CircleDollarSignIcon,
  MegaphoneIcon,
  PackageIcon,
  BoxesIcon,
  PencilIcon,
  TriangleAlertIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { IconTile } from "@/components/reui-unbound/icon-tile"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

import {
  CONFIDENCE_META,
  MONTHS,
  budgetValue,
  formatDelta,
  formatK,
  formatPct,
  isFlagged,
  primaryValue,
  variancePct,
} from "./data"
import type { GroupId, PnlRow, ViewMode } from "./data"

const GROUP_ICON: Record<GroupId, { icon: LucideIcon; tone: string }> = {
  revenue: { icon: CircleDollarSignIcon, tone: "text-emerald-500" },
  cogs: { icon: PackageIcon, tone: "text-amber-500" },
  fulfillment: { icon: BoxesIcon, tone: "text-sky-500" },
  marketing: { icon: MegaphoneIcon, tone: "text-violet-500" },
  ga: { icon: Building2Icon, tone: "text-slate-500" },
}

export function LineCell({
  row,
  collapsed,
  onToggle,
}: {
  row: PnlRow
  collapsed: boolean
  onToggle: () => void
}) {
  if (row.kind === "group") {
    const meta = GROUP_ICON[row.group!]
    const Icon = meta.icon
    return (
      <div className="flex items-center gap-2" data-row-kind="group">
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground size-5 shrink-0"
          aria-label={`${collapsed ? "Expand" : "Collapse"} ${row.label}`}
          aria-expanded={!collapsed}
          onClick={(event) => {
            event.stopPropagation()
            onToggle()
          }}
        >
          <ChevronDownIcon
            className={cn("size-3.5", collapsed && "-rotate-90")}
          />
        </Button>
        <IconTile
          variant="soft"
          size="xs"
          className={cn("rounded-md", meta.tone)}
        >
          <Icon />
        </IconTile>
        <div className="min-w-0">
          <div className="truncate text-sm font-medium">{row.label}</div>
          <div className="text-muted-foreground truncate text-[11px]">
            {row.note} · {row.owner}
          </div>
        </div>
      </div>
    )
  }

  if (row.kind === "subtotal") {
    return (
      <div
        className="flex flex-col gap-0.5 pl-2"
        data-row-kind="subtotal"
      >
        <span className="text-sm font-semibold">{row.label}</span>
        <span className="text-muted-foreground text-[11px]">{row.note}</span>
      </div>
    )
  }

  return (
    <div className="pl-7" data-row-kind="leaf">
      <span className="text-sm">{row.label}</span>
    </div>
  )
}

export function MonthCell({
  row,
  index,
  view,
  onEdit,
}: {
  row: PnlRow
  index: number
  view: ViewMode
  onEdit: () => void
}) {
  const month = MONTHS[index]
  const values = row.values[index]
  const value = primaryValue(row, index, view)
  const budget = budgetValue(row, index)
  const diff = value - budget
  const pct = variancePct(row, index, view)
  const flagged = isFlagged(row, index, view)
  const forecast = view === "actual" && month.forecast
  const detail = `Budget ${formatK(values.budget)} · Actual ${formatK(
    values.actual,
  )} · Forecast ${formatK(values.forecast)} · Prior ${formatK(values.prior)}`
  const editable = row.kind === "leaf" && month.forecast && view === "actual"

  const content = (
    <>
      <span
        className={cn(
          "text-xs tabular-nums",
          forecast
            ? "text-info-foreground underline decoration-dotted underline-offset-2"
            : row.kind === "subtotal"
              ? "font-semibold"
              : "text-foreground",
        )}
      >
        {formatK(value)}
      </span>
      {view !== "budget" && Math.abs(pct) >= 0.5 && (
        <span
          className={cn(
            "text-[10px] leading-none tabular-nums",
            flagged
              ? "text-destructive font-medium"
              : row.cost
                ? pct > 5
                  ? "text-destructive"
                  : "text-muted-foreground/70"
                : pct < -5
                  ? "text-destructive"
                  : "text-muted-foreground/70",
          )}
        >
          {formatPct(pct)}
        </span>
      )}
    </>
  )

  if (editable) {
    return (
      <Button
        variant="ghost"
        onClick={(event) => {
          event.stopPropagation()
          onEdit()
        }}
        title={`${month.label} · ${detail} · click to edit forecast`}
        aria-label={`Edit ${row.label} ${month.label} forecast`}
        className="group hover:bg-info/10 -mx-1 flex h-full w-[calc(100%+0.5rem)] flex-col items-end gap-0.5 rounded-sm px-1 py-1 font-normal"
      >
        {content}
        <PencilIcon className="text-info size-2.5 opacity-0 transition-opacity group-hover:opacity-100" />
      </Button>
    )
  }

  return (
    <div
      title={`${month.label} · ${detail}`}
      className="flex flex-col items-end gap-0.5 px-1 py-1"
    >
      {content}
    </div>
  )
}

export function TotalCell({
  row,
  indices,
  view,
}: {
  row: PnlRow
  indices: number[]
  view: ViewMode
}) {
  const total = indices.reduce(
    (sum, index) => sum + primaryValue(row, index, view),
    0,
  )
  const budget = indices.reduce(
    (sum, index) => sum + budgetValue(row, index),
    0,
  )
  const diff = total - budget
  const flagged =
    Math.abs(diff) > 15 &&
    (row.cost ? diff > 0 : diff < 0) &&
    Math.abs(diff / Math.max(1, Math.abs(budget))) * 100 > 5

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span
        className={cn(
          "text-sm tabular-nums",
          row.kind === "subtotal" ? "font-semibold" : "font-medium",
        )}
      >
        {formatK(total)}
      </span>
      <span
        className={cn(
          "text-[10px] leading-none tabular-nums",
          flagged ? "text-destructive" : "text-muted-foreground/70",
        )}
      >
        {formatDelta(diff)}
      </span>
    </div>
  )
}

export function VsBudgetCell({
  row,
  indices,
  view,
}: {
  row: PnlRow
  indices: number[]
  view: ViewMode
}) {
  const total = indices.reduce(
    (sum, index) => sum + primaryValue(row, index, view),
    0,
  )
  const budget = indices.reduce(
    (sum, index) => sum + budgetValue(row, index),
    0,
  )
  const diff = total - budget
  const pct = budget === 0 ? 0 : (diff / Math.abs(budget)) * 100
  const adverse = row.cost ? diff > 0 : diff < 0
  const meaningful = Math.abs(diff) >= 1
  const flagged =
    meaningful &&
    Math.abs(diff) > 15 &&
    Math.abs(pct) > 5 &&
    adverse

  if (!meaningful) {
    return <span className="text-muted-foreground/50 text-xs">—</span>
  }

  return (
    <div
      className="flex flex-col items-end gap-0.5"
      title={`${formatDelta(diff)} against ${formatK(budget)} budget`}
    >
      <span
        className={cn(
          "flex items-center gap-1 text-xs font-medium tabular-nums",
          adverse ? "text-destructive" : "text-success-foreground",
        )}
      >
        {flagged && <TriangleAlertIcon className="size-3" />}
        {formatPct(pct)}
      </span>
      <span
        className={cn(
          "text-[10px] tabular-nums",
          adverse ? "text-destructive/80" : "text-muted-foreground",
        )}
      >
        {formatDelta(diff)}
      </span>
    </div>
  )
}

export function ConfidenceCell({ row }: { row: PnlRow }) {
  if (row.kind === "subtotal" || !row.confidence) {
    return <span className="text-muted-foreground/40 text-xs">—</span>
  }
  const meta = CONFIDENCE_META[row.confidence]

  return (
    <div className="flex items-center gap-2">
      <span className="flex items-end gap-0.5" aria-hidden>
        {[0, 1, 2, 3].map((bar) => (
          <span
            key={bar}
            className={cn(
              "w-0.5 rounded-sm",
              bar < meta.bars ? meta.tone : "bg-muted",
            )}
            style={{ height: `${5 + bar * 3}px` }}
          />
        ))}
      </span>
      <span className="text-muted-foreground text-xs">{meta.label}</span>
    </div>
  )
}

export function ChartBand({
  row,
  months,
}: {
  row: PnlRow
  months: number[]
}) {
  const max = Math.max(
    ...months.flatMap((index) => [
      primaryValue(row, index, "actual"),
      budgetValue(row, index),
    ]),
    1,
  )
  const spans: Array<{ label: string; length: number }> = []
  for (const index of months) {
    const label = `Q${MONTHS[index].quarter}`
    const last = spans[spans.length - 1]
    if (last && last.label === label) last.length += 1
    else spans.push({ label, length: 1 })
  }

  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium">Net Revenue vs Budget</span>
          <span className="text-muted-foreground text-[11px]">
            USD thousands, chart follows the columns below
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-muted-foreground flex items-center gap-1.5">
            <span className="bg-muted-foreground/25 size-2 rounded-sm" />
            Budget
          </span>
          <span className="text-muted-foreground flex items-center gap-1.5">
            <span className="bg-primary size-2 rounded-sm" />
            Actual
          </span>
          <span className="text-muted-foreground flex items-center gap-1.5">
            <span className="bg-info size-2 rounded-sm" />
            Forecast
          </span>
        </div>
      </div>

      <div className="overflow-x-auto px-3 py-2">
        <div className="min-w-max">
          <div
            className="grid items-end"
            style={{
              gridTemplateColumns: `220px repeat(${months.length}, 64px)`,
            }}
          >
            <div />
            {spans.map((span, spanIndex) => (
              <div
                key={`${span.label}-${spanIndex}`}
                className="text-muted-foreground border-l px-2 text-[10px] font-medium"
                style={{ gridColumn: `span ${span.length}` }}
              >
                {span.label} 2026
              </div>
            ))}
          </div>

          <div
            className="grid border-b"
            style={{
              gridTemplateColumns: `220px repeat(${months.length}, 64px)`,
            }}
          >
            <div className="text-muted-foreground px-1 pb-1 text-[10px]">
              Monthly revenue
            </div>
            {months.map((index) => (
              <div
                key={index}
                className={cn(
                  "pb-1 text-center text-[10px]",
                  MONTHS[index].forecast
                    ? "text-info-foreground"
                    : "text-muted-foreground",
                )}
              >
                {MONTHS[index].label}
              </div>
            ))}
          </div>

          <div
            className="grid items-end"
            style={{
              gridTemplateColumns: `220px repeat(${months.length}, 64px)`,
            }}
          >
            <div className="text-muted-foreground self-center px-1 text-[10px]">
              {months.length} columns
            </div>
            {months.map((index) => {
              const value = primaryValue(row, index, "actual")
              const budget = budgetValue(row, index)
              return (
                <div
                  key={index}
                  className="flex h-20 items-end justify-center gap-0.5 px-1"
                >
                  <div
                    className="bg-muted-foreground/20 w-2.5 rounded-t-sm"
                    style={{ height: `${(budget / max) * 100}%` }}
                    title={`${MONTHS[index].label} budget ${formatK(budget)}`}
                  />
                  <div
                    className={cn(
                      "w-2.5 rounded-t-sm",
                      MONTHS[index].forecast ? "bg-info" : "bg-primary",
                    )}
                    style={{ height: `${(value / max) * 100}%` }}
                    title={`${MONTHS[index].label} ${
                      MONTHS[index].forecast ? "forecast" : "actual"
                    } ${formatK(value)}`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export function FlagLegend({ view }: { view: ViewMode }) {
  return (
    <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
      <span className="text-destructive flex items-center gap-1">
        <TriangleAlertIcon className="size-3" />
        Adverse beyond 5% and $15K
      </span>
      <span className="text-muted-foreground">
        <span className="text-success-foreground">Favorable</span> vs budget
      </span>
      {view === "actual" && (
        <span className="text-muted-foreground">
          <span className="text-info-foreground">Blue months</span> are
          forecast — click to edit
        </span>
      )}
    </span>
  )
}

