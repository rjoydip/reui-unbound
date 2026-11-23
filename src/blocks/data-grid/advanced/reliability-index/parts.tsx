import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { cn } from "cn"

import {
  formatBudget,
  formatCurrent,
  formatObjective,
} from "./data"
import type {
  Slo,
  SloAlert,
  SloEvaluation,
  SloStatus,
} from "./data"

export function SloCell({ slo }: { slo: Slo }) {
  return (
    <div className="min-w-0">
      <div className="text-foreground truncate font-medium">{slo.name}</div>
      <div className="text-muted-foreground truncate text-xs">
        {slo.team} &middot; {slo.slug}
      </div>
    </div>
  )
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function OwnerCell({ slo }: { slo: Slo }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-6">
        <AvatarImage src={slo.owner.avatar} alt={slo.owner.name} />
        <AvatarFallback className="text-[9px]">
          {initials(slo.owner.name)}
        </AvatarFallback>
      </Avatar>
      <span className="text-muted-foreground truncate text-xs">
        {slo.owner.name.split(" ")[0]}
      </span>
    </div>
  )
}

const STATUS_VARIANTS: Record<
  SloStatus,
  "success-light" | "warning-light" | "destructive-light"
> = {
  Healthy: "success-light",
  "At risk": "warning-light",
  Exhausted: "destructive-light",
}

export function SloStatusBadge({ status }: { status: SloStatus }) {
  return (
    <Badge variant={STATUS_VARIANTS[status]} size="sm" className="font-medium">
      <span
        className={cn(
          "size-1.5 rounded-full",
          status === "Healthy"
            ? "bg-success"
            : status === "At risk"
              ? "bg-warning"
              : "bg-destructive",
        )}
      />
      {status}
    </Badge>
  )
}

export function AlertBadge({ alert }: { alert: SloAlert }) {
  return (
    <Badge
      variant={
        alert === "Paging"
          ? "destructive-light"
          : alert === "Ticket"
            ? "warning-light"
            : "outline"
      }
      size="sm"
    >
      {alert}
    </Badge>
  )
}

export function ObjectiveCell({ row }: { row: SloEvaluation }) {
  return (
    <span className="text-sm tabular-nums">
      {formatObjective(row.objective)}
    </span>
  )
}

export function CurrentCell({ row }: { row: SloEvaluation }) {
  return (
    <span className="text-sm font-medium tabular-nums">
      {formatCurrent(row.current)}
    </span>
  )
}

export function BudgetCell({ row }: { row: SloEvaluation }) {
  return (
    <span
      className={cn(
        "text-sm font-semibold tabular-nums",
        row.budget < 0
          ? "text-destructive"
          : row.budget < 25
            ? "text-warning-foreground"
            : "text-success-foreground",
      )}
    >
      {formatBudget(row.budget)}
    </span>
  )
}

export function BurnCell({ row }: { row: SloEvaluation }) {
  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className="text-sm tabular-nums">{row.burn.toFixed(1)}x</span>
      <span className="text-muted-foreground text-xs">{row.runsOut}</span>
    </div>
  )
}

export function MiniTrend({ row }: { row: SloEvaluation }) {
  const points = row.slo.history
  const coords = points.map((value, index) => {
    const x = (index / (points.length - 1)) * 76
    const y = 20 - (Math.max(-100, Math.min(100, value)) / 100) * 15
    return [x, y] as const
  })
  const line = coords
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ")

  return (
    <svg
      viewBox="0 0 76 24"
      className={cn(
        "h-6 w-20",
        points[points.length - 1] >= 0 ? "text-success" : "text-destructive",
      )}
      fill="none"
      aria-hidden
    >
      <line
        x1={0}
        x2={76}
        y1={12}
        y2={12}
        className="stroke-border"
        strokeDasharray="2 3"
      />
      <polyline
        points={line}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={coords[coords.length - 1][0]}
        cy={coords[coords.length - 1][1]}
        r={1.8}
        fill="currentColor"
      />
    </svg>
  )
}

export function LollipopChart({
  rows,
  hovered,
  onHover,
}: {
  rows: SloEvaluation[]
  hovered: string | null
  onHover: (id: string | null) => void
}) {
  const width = 320
  const top = 26
  const bottom = 26
  const center = width / 2
  const half = 105
  const height = 260
  const usable = height - top - bottom
  const hoveredRow = rows.find((row) => row.slo.id === hovered)

  const xFor = (value: number) =>
    center + (Math.max(-100, Math.min(100, value)) / 100) * half

  return (
    <div className="relative">
      {hoveredRow && (
        <div className="bg-foreground text-background pointer-events-none absolute top-1 left-1 z-10 flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs shadow-sm">
          <span className="font-semibold tabular-nums">
            {formatBudget(hoveredRow.budget)}
          </span>
          <span className="opacity-80">{hoveredRow.slo.name}</span>
        </div>
      )}

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-[260px] w-full"
        role="img"
        aria-label="Error budget remaining, worst first"
      >
        {[100, 50, 0, -50, -100].map((tick) => (
          <g key={tick}>
            <line
              x1={xFor(tick)}
              x2={xFor(tick)}
              y1={top - 6}
              y2={height - bottom + 6}
              className={cn(
                "stroke-border",
                tick === 0 ? "stroke-[1.5]" : "stroke-[0.75]",
              )}
              strokeDasharray={tick === 0 ? undefined : "3 4"}
            />
            <text
              x={xFor(tick)}
              y={height - 8}
              textAnchor="middle"
              className="fill-muted-foreground text-[9px]"
            >
              {tick > 0 ? `+${tick}%` : `${tick}%`}
            </text>
          </g>
        ))}

        <text
          x={center}
          y={14}
          textAnchor="middle"
          className="fill-muted-foreground text-[9px]"
        >
          Budget index
        </text>

        {rows.map((row, index) => {
          const y = top + (index / Math.max(1, rows.length - 1)) * usable
          const x = xFor(row.budget)
          const active = hovered === row.slo.id

          return (
            <g
              key={row.slo.id}
              onMouseEnter={() => onHover(row.slo.id)}
              onMouseLeave={() => onHover(null)}
              className="cursor-pointer"
            >
              <title>{`${row.slo.name} · ${formatBudget(row.budget)}`}</title>
              <line
                x1={center}
                x2={x}
                y1={y}
                y2={y}
                className="stroke-border"
                strokeDasharray="2 3"
              />
              <circle
                cx={x}
                cy={y}
                r={active ? 8 : 14}
                fill="transparent"
              />
              <circle
                cx={x}
                cy={y}
                r={active ? 5 : 3.5}
                className={cn(
                  row.status === "Exhausted"
                    ? "fill-destructive"
                    : row.status === "At risk"
                      ? "fill-warning"
                      : "fill-success",
                )}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export function ChartLegend({ rows }: { rows: SloEvaluation[] }) {
  const entries: { status: SloStatus; dot: string }[] = [
    { status: "Healthy", dot: "bg-success" },
    { status: "At risk", dot: "bg-warning" },
    { status: "Exhausted", dot: "bg-destructive" },
  ]

  return (
    <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs">
      {entries.map((entry) => (
        <span key={entry.status} className="inline-flex items-center gap-1.5">
          <span className={cn("size-2 rounded-full", entry.dot)} />
          {entry.status}{" "}
          <span className="text-foreground font-medium tabular-nums">
            {rows.filter((row) => row.status === entry.status).length}
          </span>
        </span>
      ))}
    </div>
  )
}
