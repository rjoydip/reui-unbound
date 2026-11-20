import { useMemo } from "react"
import { ArrowDownIcon, ArrowUpIcon, PencilIcon } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import type { DataGridFeatures } from "@/components/reui-unbound/data-grid/data-grid"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

import {
  GROUP_META,
  OWNERS,
  actualOf,
  formatValue,
  formatVariance,
  indexOf,
  priorOf,
  statusOf,
  targetOf,
  varianceOf,
  vsPriorIndex,
} from "./data"
import type {
  HrRow,
  Kpi,
  KpiGroup,
  KpiStatus,
  KpiUnit,
  OwnerKey,
  ScoreMode,
  Thresholds,
} from "./data"

export const STATUS_TINT: Record<KpiStatus, string> = {
  on: "bg-success/8 text-success-foreground",
  watch: "bg-warning/8 text-warning-foreground",
  off: "bg-destructive/8 text-destructive",
}

export const STATUS_DOT: Record<KpiStatus, string> = {
  on: "bg-success",
  watch: "bg-warning",
  off: "bg-destructive",
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function GroupCell({
  group,
  count,
  index,
}: {
  group: KpiGroup
  count: number
  index: number
}) {
  const meta = GROUP_META[group]

  return (
    <div className="flex items-center gap-2">
      <span className={cn("size-2 shrink-0 rounded-full", meta.dot)} />
      <span className="text-xs font-semibold tracking-wide uppercase">
        {group}
      </span>
      <span className="text-muted-foreground text-xs">{count} KPIs</span>
      <span className={cn("ml-auto text-xs font-medium tabular-nums", meta.tint)}>
        {Math.round(index)}
      </span>
    </div>
  )
}

export function KpiCell({
  kpi,
  rail,
}: {
  kpi: Kpi
  rail: string
}) {
  const DirectionIcon = kpi.direction === "up" ? ArrowUpIcon : ArrowDownIcon

  return (
    <div className={cn("flex items-center gap-1.5 border-l-2 pl-2.5", rail)}>
      <span className="min-w-0 flex-1 truncate">{kpi.name}</span>
      <DirectionIcon
        className="text-muted-foreground/60 size-3 shrink-0"
        aria-label={kpi.direction === "up" ? "Higher is better" : "Lower is better"}
      />
    </div>
  )
}

export function OwnerCell({ owner }: { owner: OwnerKey }) {
  const person = OWNERS[owner]

  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-5">
        <AvatarFallback className="text-[9px] font-medium">
          {initials(person.name)}
        </AvatarFallback>
      </Avatar>
      <span className="text-muted-foreground truncate text-xs">
        {person.name.split(" ")[0]}
      </span>
    </div>
  )
}

export function UnitCell({ unit }: { unit: KpiUnit }) {
  return <span className="text-muted-foreground text-xs">{unit}</span>
}

export function MetricCell({
  value,
  unit,
  muted,
}: {
  value: number | null
  unit: KpiUnit
  muted?: boolean
}) {
  if (value === null) {
    return <span className="text-muted-foreground/40 text-sm">—</span>
  }
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

export function VarianceCell({
  value,
  unit,
}: {
  value: number
  unit: KpiUnit
}) {
  return (
    <span
      className={cn(
        "text-sm tabular-nums",
        value >= 0
          ? "text-success-foreground"
          : "text-destructive",
      )}
    >
      {formatVariance(value, unit)}
    </span>
  )
}

export function IndexCell({
  value,
  status,
  emphasized,
}: {
  value: number
  status: KpiStatus
  emphasized?: boolean
}) {
  return (
    <span
      className={cn(
        "inline-flex min-w-9 items-center justify-center rounded-sm px-1 py-0.5 text-xs tabular-nums",
        STATUS_TINT[status],
        emphasized && "font-semibold",
      )}
    >
      {Math.round(value)}
    </span>
  )
}

export function ActualCell({
  kpi,
  value,
  unit,
  onEdit,
}: {
  kpi: Kpi
  value: number
  unit: KpiUnit
  onEdit: () => void
}) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onEdit}
      aria-label={`Edit actual for ${kpi.name}`}
      className="group hover:bg-info/10 hover:text-info-foreground -mr-1 ml-auto h-6 gap-1 px-1.5 font-normal text-info-foreground tabular-nums"
    >
      {formatValue(value, unit)}
      <PencilIcon className="text-info size-3 opacity-0 transition-opacity group-hover:opacity-100" />
    </Button>
  )
}

export function SparklineCell({
  kpi,
  status,
}: {
  kpi: Kpi
  status: KpiStatus
}) {
  const values = kpi.trend
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = Math.max(0.001, max - min)
  const points = values.map((value, index) => {
    const x = 3 + (index / (values.length - 1)) * 74
    const y = 21 - ((value - min) / span) * 18
    return { x, y }
  })
  const path = points.map((point) => `${point.x},${point.y}`).join(" ")
  const stroke =
    status === "on"
      ? "stroke-success"
      : status === "watch"
        ? "stroke-warning"
        : "stroke-destructive"
  const fill =
    status === "on"
      ? "fill-success"
      : status === "watch"
        ? "fill-warning"
        : "fill-destructive"
  const last = points[points.length - 1]

  return (
    <svg
      viewBox="0 0 80 24"
      role="img"
      aria-label={`${kpi.name} twelve month trend, ${min.toFixed(
        1,
      )} to ${max.toFixed(1)}`}
      className="h-6 w-20"
    >
      <title>
        {`${kpi.name}: ${min.toFixed(1)} – ${max.toFixed(1)} over 12 months`}
      </title>
      {[6, 12, 18].map((y) => (
        <line
          key={y}
          x1={2}
          x2={78}
          y1={y}
          y2={y}
          className="stroke-border/60"
          strokeWidth={0.5}
          strokeDasharray="2 3"
        />
      ))}
      <polyline
        points={path}
        className={cn("fill-none", stroke)}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={last.x} cy={last.y} r={2.2} className={fill} />
    </svg>
  )
}

export function StatusLegend({ onTrack, watch }: { onTrack: number; watch: number }) {
  return (
    <span className="text-muted-foreground text-xs">
      On track from {onTrack}, watch from {watch}
    </span>
  )
}

export function useHrColumns({
  mode,
  thresholds,
  onEdit,
}: {
  mode: ScoreMode
  thresholds: Thresholds
  onEdit: (id: string) => void
}) {
  const columns = useMemo<ColumnDef<DataGridFeatures, HrRow>[]>(
    () => [
      {
        id: "kpi",
        accessorFn: (row) => (row.kind === "kpi" ? row.kpi.name : row.group),
        header: ({ column }) => (
          <DataGridColumnHeader title="KPI" column={column} />
        ),
        cell: ({ row }) => {
          const data = row.original
          if (data.kind === "group") {
            return (
              <div data-row-kind="group">
                <GroupCell
                  group={data.group}
                  count={data.kpis.length}
                  index={data.index}
                />
              </div>
            )
          }
          return (
            <div data-row-kind="kpi">
              <KpiCell kpi={data.kpi} rail={data.rail} />
            </div>
          )
        },
        size: 250,
        enableHiding: false,
        enableSorting: false,
      },
      {
        id: "owner",
        accessorFn: (row) =>
          row.kind === "kpi" ? OWNERS[row.kpi.owner].name : "",
        header: ({ column }) => (
          <DataGridColumnHeader title="Owner" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <OwnerCell owner={row.original.kpi.owner} />
          ) : null,
        size: 110,
        enableSorting: false,
      },
      {
        id: "unit",
        accessorFn: (row) => (row.kind === "kpi" ? row.kpi.unit : ""),
        header: ({ column }) => (
          <DataGridColumnHeader title="Unit" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <UnitCell unit={row.original.kpi.unit} />
          ) : null,
        size: 70,
        enableSorting: false,
      },
      {
        id: "priorYear",
        accessorFn: (row) =>
          row.kind === "kpi" ? row.kpi.priorYear : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="Prior year" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <MetricCell
              value={row.original.kpi.priorYear}
              unit={row.original.kpi.unit}
              muted
            />
          ) : null,
        size: 82,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "prior",
        accessorFn: (row) =>
          row.kind === "kpi" ? priorOf(row.kpi, mode) : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader
            title={mode === "month" ? "Prior month" : "Prior YTD"}
            column={column}
          />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <MetricCell
              value={priorOf(row.original.kpi, mode)}
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
        id: "target",
        accessorFn: (row) =>
          row.kind === "kpi" ? targetOf(row.kpi, mode) : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="Target" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <MetricCell
              value={targetOf(row.original.kpi, mode)}
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
        id: "actual",
        accessorFn: (row) =>
          row.kind === "kpi" ? actualOf(row.kpi, mode) : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="Actual" column={column} />
        ),
        cell: ({ row }) => {
          const data = row.original
          if (data.kind !== "kpi") return null
          return (
            <div className="flex justify-end">
              <ActualCell
                kpi={data.kpi}
                value={actualOf(data.kpi, mode)}
                unit={data.kpi.unit}
                onEdit={() => onEdit(data.kpi.id)}
              />
            </div>
          )
        },
        size: 100,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "variance",
        accessorFn: (row) =>
          row.kind === "kpi" ? varianceOf(row.kpi, mode) : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="Variance" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <VarianceCell
              value={varianceOf(row.original.kpi, mode)}
              unit={row.original.kpi.unit}
            />
          ) : null,
        size: 86,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "attainment",
        accessorFn: (row) =>
          row.kind === "kpi" ? indexOf(row.kpi, mode) : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="Attainment" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <IndexCell
              value={indexOf(row.original.kpi, mode)}
              status={statusOf(row.original.kpi, mode, thresholds)}
              emphasized
            />
          ) : null,
        size: 92,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "vsPrior",
        accessorFn: (row) =>
          row.kind === "kpi" ? vsPriorIndex(row.kpi, mode) : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="vs PY" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <IndexCell
              value={vsPriorIndex(row.original.kpi, mode)}
              status={statusOf(row.original.kpi, mode, thresholds)}
            />
          ) : null,
        size: 78,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "trend",
        accessorFn: (row) =>
          row.kind === "kpi" ? row.kpi.trend[11] : Number.NaN,
        header: ({ column }) => (
          <DataGridColumnHeader title="12 mo" column={column} />
        ),
        cell: ({ row }) =>
          row.original.kind === "kpi" ? (
            <SparklineCell
              kpi={row.original.kpi}
              status={statusOf(row.original.kpi, mode, thresholds)}
            />
          ) : null,
        size: 100,
        enableSorting: false,
      },
    ],
    [mode, thresholds],
  )

  return columns
}
