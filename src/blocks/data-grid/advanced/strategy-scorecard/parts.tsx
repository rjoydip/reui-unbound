import { useMemo } from "react"
import { ArrowDownIcon, ArrowUpIcon, PlusIcon } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import type { DataGridFeatures } from "@/components/kit/data-grid/data-grid"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

import {
  OWNERS,
  delta,
  formatDelta,
  formatValue,
  improvement,
  initials,
  progressStatus,
  toGo,
} from "./data"
import type { Kpi, ProgressStatus, ScoreRow, Unit } from "./data"

export const PROGRESS_META: Record<
  ProgressStatus,
  { bar: string; text: string; tint: string }
> = {
  on: { bar: "bg-success", text: "text-success-foreground", tint: "bg-success/10" },
  watch: { bar: "bg-warning", text: "text-warning-foreground", tint: "bg-warning/10" },
  off: { bar: "bg-destructive", text: "text-destructive", tint: "bg-destructive/10" },
}

export function TreeCell({
  row,
  onAddKpi,
}: {
  row: ScoreRow
  onAddKpi: (objectiveId: string) => void
}) {
  if (row.kind === "perspective") {
    return (
      <div
        data-row-kind="perspective"
        className="flex min-w-0 flex-col gap-0.5 py-0.5"
      >
        <div className="flex min-w-0 items-center gap-2">
          <span
            className={cn("size-2 shrink-0 rounded-full", row.perspective.dot)}
          />
          <span className="text-sm font-semibold">
            {row.perspective.name}
          </span>
          <span
            className={cn(
              "text-xs font-semibold tabular-nums",
              PROGRESS_META[progressStatus(row.score)].text,
            )}
          >
            {Math.round(row.score)}%
          </span>
          <span className="text-muted-foreground text-xs">
            {row.perspective.weight}% of score · {row.kpiCount} KPIs
          </span>
          {row.offCount > 0 && (
            <span className="text-destructive text-xs">
              {row.offCount} off track
            </span>
          )}
        </div>
        <span className="text-muted-foreground truncate pl-4 text-[11px]">
          {row.perspective.note}
        </span>
      </div>
    )
  }

  if (row.kind === "objective") {
    return (
      <div
        data-row-kind="objective"
        className={cn(
          "flex min-w-0 items-center gap-1.5 border-l-2 pl-4",
          row.perspective.rail,
        )}
      >
        <span className="text-sm font-medium">{row.objective.name}</span>
        <span className="text-muted-foreground text-xs">
          {row.kpiCount} KPIs
        </span>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={`Add KPI to ${row.objective.name}`}
          className="text-muted-foreground hover:text-foreground ml-auto size-5"
          onClick={(event) => {
            event.stopPropagation()
            onAddKpi(row.objective.id)
          }}
        >
          <PlusIcon className="size-3" />
        </Button>
      </div>
    )
  }

  const DirectionIcon = row.kpi.direction === "up" ? ArrowUpIcon : ArrowDownIcon

  return (
    <div
      data-row-kind="kpi"
      className={cn(
        "flex min-w-0 items-center gap-1.5 border-l-2 pl-8",
        row.perspective.rail,
      )}
    >
      <span className="min-w-0 flex-1 truncate">{row.kpi.name}</span>
      <DirectionIcon
        className="text-muted-foreground/50 size-3 shrink-0"
        aria-label={row.kpi.direction === "up" ? "Higher is better" : "Lower is better"}
      />
    </div>
  )
}

export function OwnerCell({ owner }: { owner: Kpi["owner"] }) {
  const name = OWNERS[owner]

  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-5">
        <AvatarFallback className="text-[9px] font-medium">
          {initials(name)}
        </AvatarFallback>
      </Avatar>
      <span className="text-muted-foreground truncate text-xs">{name}</span>
    </div>
  )
}

export function WeightCell({
  weight,
  strong,
  onEdit,
}: {
  weight: number
  strong?: boolean
  onEdit?: () => void
}) {
  if (onEdit) {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={onEdit}
        className="text-muted-foreground hover:text-foreground h-6 px-1.5 font-normal tabular-nums"
        aria-label={`Edit weight, currently ${weight}%`}
      >
        {weight}%
      </Button>
    )
  }
  return (
    <span
      className={cn(
        "text-xs tabular-nums",
        strong ? "text-foreground font-medium" : "text-muted-foreground",
      )}
    >
      {weight}%
    </span>
  )
}

export function ValueCell({
  value,
  unit,
  muted,
}: {
  value: number
  unit: Unit
  muted?: boolean
}) {
  return (
    <span
      className={cn(
        "text-sm tabular-nums",
        muted ? "text-muted-foreground" : "text-foreground",
      )}
    >
      {formatValue(value, unit)}
    </span>
  )
}

export function ChangeCell({ kpi }: { kpi: Kpi }) {
  const good = improvement(kpi)
  const value = delta(kpi)

  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-xs tabular-nums",
        good ? "text-success-foreground" : "text-destructive",
      )}
    >
      {value > 0 ? (
        <ArrowUpIcon className="size-3" />
      ) : value < 0 ? (
        <ArrowDownIcon className="size-3" />
      ) : null}
      {formatDelta(value, kpi.unit)}
    </span>
  )
}

export function ProgressCell({
  progress,
  large,
}: {
  progress: number
  large?: boolean
}) {
  const status = progressStatus(progress)
  const meta = PROGRESS_META[status]
  const width = Math.max(2, Math.min(100, progress))

  return (
    <div className={cn("flex items-center gap-2", large && "font-medium")}>
      <div
        className={cn(
          "bg-muted w-full overflow-hidden rounded-full",
          large ? "h-2" : "h-1.5",
        )}
      >
        <div
          className={cn("h-full rounded-full", meta.bar)}
          style={{ width: `${width}%` }}
        />
      </div>
      <span
        className={cn(
          "w-9 shrink-0 text-right text-xs tabular-nums",
          meta.text,
          large && "text-sm font-semibold",
        )}
      >
        {Math.round(progress)}%
      </span>
    </div>
  )
}

export function LaggingCell({ kpi }: { kpi: Kpi }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={`https://flagcdn.com/w40/${kpi.lagging.flag}.png`}
        alt=""
        loading="lazy"
        className="border-border/60 size-3.5 shrink-0 rounded-full border object-cover"
      />
      <span className="text-muted-foreground w-6 shrink-0 text-xs">
        {kpi.lagging.market}
      </span>
      <div className="bg-muted h-1 w-10 overflow-hidden rounded-full">
        <div
          className={cn(
            "h-full rounded-full",
            kpi.lagging.pct < 50
              ? "bg-destructive/70"
              : kpi.lagging.pct < 70
                ? "bg-warning"
                : "bg-success/70",
          )}
          style={{ width: `${kpi.lagging.pct}%` }}
        />
      </div>
      <span className="text-xs tabular-nums">{kpi.lagging.pct}%</span>
    </div>
  )
}

export function useScoreColumns({
  onWeight,
  onAddKpi,
}: {
  onWeight: (id: string) => void
  onAddKpi: (objectiveId: string) => void
}) {
  return useMemo<ColumnDef<DataGridFeatures, ScoreRow>[]>(
    () => [
      {
        id: "tree",
        accessorFn: (row) =>
          row.kind === "kpi"
            ? row.kpi.name
            : row.kind === "objective"
              ? row.objective.name
              : row.perspective.name,
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Objective and KPI"
            column={column}
          />
        ),
        cell: ({ row }) => (
          <TreeCell row={row.original} onAddKpi={onAddKpi} />
        ),
        size: 300,
        enableHiding: false,
        enableSorting: false,
      },
      {
        id: "owner",
        accessorFn: (row) => (row.kind === "kpi" ? row.kpi.owner : ""),
        header: ({ column }) => (
          <DataGridColumnHeader title="Owner" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <OwnerCell owner={row.original.kpi.owner} />
          ) : null,
        size: 130,
        enableSorting: false,
      },
      {
        id: "weight",
        accessorFn: (row) =>
          row.kind === "kpi"
            ? row.kpi.weight
            : row.kind === "objective"
              ? row.objective.weight
              : row.perspective.weight,
        header: ({ column }) => (
          <DataGridColumnHeader title="Weight" column={column} />
        ),
        cell: ({ row }) => {
          const data = row.original
          if (data.kind === "kpi") {
            return (
              <WeightCell
                weight={data.kpi.weight}
                onEdit={() => onWeight(data.kpi.id)}
              />
            )
          }
          return (
            <WeightCell
              weight={
                data.kind === "objective"
                  ? data.objective.weight
                  : data.perspective.weight
              }
              strong
            />
          )
        },
        size: 78,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "baseline",
        accessorFn: (row) =>
          row.kind === "kpi" ? row.kpi.baseline : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="Baseline" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <ValueCell
              value={row.original.kpi.baseline}
              unit={row.original.kpi.unit}
              muted
            />
          ) : null,
        size: 84,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "value",
        accessorFn: (row) =>
          row.kind === "kpi" ? row.kpi.value : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="Value" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <ValueCell
              value={row.original.kpi.value}
              unit={row.original.kpi.unit}
            />
          ) : null,
        size: 84,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "target",
        accessorFn: (row) =>
          row.kind === "kpi" ? row.kpi.target : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="Target" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <ValueCell
              value={row.original.kpi.target}
              unit={row.original.kpi.unit}
            />
          ) : null,
        size: 84,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "togo",
        accessorFn: (row) =>
          row.kind === "kpi" ? toGo(row.kpi) : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="To go" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <span className="text-muted-foreground text-sm tabular-nums">
              {toGo(row.original.kpi) === 0
                ? "Met"
                : formatValue(toGo(row.original.kpi), row.original.kpi.unit)}
            </span>
          ) : null,
        size: 80,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "change",
        accessorFn: (row) =>
          row.kind === "kpi" ? row.kpi.value - row.kpi.baseline : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="Change" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <ChangeCell kpi={row.original.kpi} />
          ) : null,
        size: 92,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "lagging",
        accessorFn: (row) =>
          row.kind === "kpi" ? row.kpi.lagging.pct : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="Lagging market" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <LaggingCell kpi={row.original.kpi} />
          ) : null,
        size: 140,
        enableSorting: false,
      },
      {
        id: "progress",
        accessorFn: (row) =>
          row.kind === "kpi" ? row.progress : row.score,
        header: ({ column }) => (
          <DataGridColumnHeader title="Progress" column={column} />
        ),
        cell: ({ row }) => {
          const data = row.original
          if (data.kind === "kpi") {
            return <ProgressCell progress={data.progress} />
          }
          return (
            <ProgressCell
              progress={data.score}
              large={data.kind === "perspective"}
            />
          )
        },
        size: 150,
        enableSorting: false,
        meta: {
          cellClassName: "min-w-36",
        },
      },
    ],
    [onWeight, onAddKpi],
  )
}
