import { ArrowLeftIcon, ArrowRightIcon, TriangleAlertIcon } from "lucide-react"

import { cn } from "cn"

import {
  TIER_META,
  formatEur,
  formatLoads,
  formatPercent,
  laneCount,
  marginOf,
  outMargin,
  tierOf,
} from "./data"
import type { Lane, MarginTier, Terminal } from "./data"

export function TerminalCell({ terminal }: { terminal: Terminal }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={`https://flagcdn.com/w40/${terminal.flag}.png`}
        alt=""
        loading="lazy"
        className="border-border/60 size-4 shrink-0 rounded-full border object-cover"
      />
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">
          {terminal.city}
        </div>
        <div className="text-muted-foreground truncate text-[11px]">
          {terminal.code} · {laneCount(terminal)} lanes
        </div>
      </div>
    </div>
  )
}

function LaneHalf({
  lane,
  direction,
  title,
}: {
  lane: Lane | null
  direction: "out" | "back"
  title: string
}) {
  if (!lane) {
    return (
      <div className="text-muted-foreground/40 flex h-6 items-center justify-center text-[11px]">
        —
      </div>
    )
  }

  const tier = tierOf(lane)
  const meta = TIER_META[tier]

  return (
    <div
      className={cn(
        "flex h-6 items-center justify-between gap-1 px-1.5 text-[11px] leading-none",
        meta.cell,
        direction === "back" && "opacity-85",
      )}
      title={`${title} · rate ${formatEur(lane.rate)} · cost ${formatEur(
        lane.cost,
      )} · margin ${formatPercent(marginOf(lane))}`}
    >
      <span className="flex items-center gap-0.5 font-medium tabular-nums">
        {direction === "out" ? (
          <ArrowRightIcon className="size-2.5 opacity-60" />
        ) : (
          <ArrowLeftIcon className="size-2.5 opacity-60" />
        )}
        {formatEur(lane.rate)}
      </span>
      <span className="tabular-nums opacity-85">{marginOf(lane).toFixed(0)}%</span>
    </div>
  )
}

export function SplitCell({
  from,
  to,
  outLane,
  backLane,
  onOpen,
}: {
  from: Terminal
  to: Terminal
  outLane: Lane | null
  backLane: Lane | null
  onOpen: () => void
}) {
  if (!outLane && !backLane) {
    return <div className="text-muted-foreground/30 h-12" aria-hidden />
  }

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        onOpen()
      }}
      aria-label={`Open ${from.city} to ${to.city} lane`}
      className="group hover:ring-ring/50 -mx-1 flex w-[calc(100%+0.5rem)] flex-col overflow-hidden rounded-sm ring-1 ring-transparent transition-shadow focus-visible:ring-2 focus-visible:outline-none"
    >
      <LaneHalf lane={outLane} direction="out" title={`${from.city} → ${to.city}`} />
      <div className="border-border/60 border-t border-dashed" />
      <LaneHalf lane={backLane} direction="back" title={`${to.city} → ${from.city}`} />
    </button>
  )
}

export function OutMarginCell({
  terminal,
  destCodes,
}: {
  terminal: Terminal
  destCodes: string[]
}) {
  const summary = outMargin(terminal, destCodes)

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span
        className={cn(
          "text-sm font-medium tabular-nums",
          summary.margin < 0
            ? "text-destructive"
            : summary.margin < 8
              ? "text-warning-foreground"
              : "text-foreground",
        )}
      >
        {formatPercent(summary.margin)}
      </span>
      <span className="text-muted-foreground text-[11px] tabular-nums">
        {formatLoads(summary.loads)} loads
      </span>
      {summary.losing > 0 && (
        <span className="text-destructive flex items-center gap-1 text-[10px]">
          <TriangleAlertIcon className="size-2.5" />
          {summary.losing} losing
        </span>
      )}
    </div>
  )
}

export function LosingBadge({ count }: { count: number }) {
  if (count === 0) {
    return <span className="text-muted-foreground text-xs">—</span>
  }
  return (
    <span className="text-destructive flex items-center gap-1 text-xs tabular-nums">
      <TriangleAlertIcon className="size-3" />
      {count} losing
    </span>
  )
}

export function MarginLegend() {
  const tiers: MarginTier[] = ["deep-loss", "loss", "thin", "healthy", "strong"]
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {tiers.map((tier) => (
        <span
          key={tier}
          className="text-muted-foreground flex items-center gap-1.5 text-[11px]"
        >
          <span className={cn("size-2 rounded-full", TIER_META[tier].dot)} />
          {TIER_META[tier].label}
        </span>
      ))}
    </div>
  )
}

export function RateHistory({
  history,
  label,
}: {
  history: number[]
  label: string
}) {
  const min = Math.min(...history)
  const max = Math.max(...history)
  const span = Math.max(1, max - min)
  const points = history.map((value, index) => {
    const x = 6 + (index / Math.max(1, history.length - 1)) * 188
    const y = 52 - ((value - min) / span) * 40
    return { x, y, value }
  })
  const path = points.map((point) => `${point.x},${point.y}`).join(" ")
  const area = `6,56 ${path} 194,56`

  return (
    <div>
      <svg
        viewBox="0 0 200 60"
        role="img"
        aria-label={`${label} rate history`}
        className="h-16 w-full overflow-visible"
      >
        <polygon points={area} className="fill-primary/10" />
        <polyline
          points={path}
          className="stroke-primary fill-none"
          strokeWidth={1.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r={index === points.length - 1 ? 2.6 : 1.8}
            className={
              index === points.length - 1
                ? "fill-primary"
                : "fill-background stroke-primary/60"
            }
            strokeWidth={1}
          />
        ))}
      </svg>
      <div className="text-muted-foreground flex justify-between text-[10px] tabular-nums">
        <span>Wk 1 · {formatEur(history[0])}</span>
        <span>
          Wk 6 · {formatEur(history[history.length - 1])}
        </span>
      </div>
    </div>
  )
}
