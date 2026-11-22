import {
  ArrowDownIcon,
  ArrowUpIcon,
  RotateCcwIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
} from "@/components/kit/number-field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "cn"

import {
  CATEGORY_DEFAULTS,
  NEXT_BUY_META,
  formatCompactUsd,
  movement,
  peerMedian,
  scoreOf,
  spendShare,
} from "./data"
import type { Category, Factory, NextBuy, Thresholds } from "./data"

export function FactoryCell({ factory }: { factory: Factory }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={`https://flagcdn.com/w40/${factory.flag}.png`}
        alt=""
        loading="lazy"
        className="border-border/60 size-4 shrink-0 rounded-full border object-cover"
      />
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">
          {factory.name}
        </div>
        <div className="text-muted-foreground truncate text-xs">
          {factory.country} · {factory.category}
        </div>
      </div>
    </div>
  )
}

export function RankCell({ factory }: { factory: Factory }) {
  const move = movement(factory)
  const up = move.delta > 0

  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground text-xs font-medium tabular-nums">
        #{factory.rank}
      </span>
      <span
        className={cn(
          "flex items-center gap-0.5 text-xs tabular-nums",
          move.delta === 0 || factory.prevRank === null
            ? "text-muted-foreground/70"
            : up
              ? "text-success-foreground"
              : "text-destructive",
        )}
      >
        {factory.prevRank === null ? (
          <>
            <SparklesIcon className="size-3" />
            New
          </>
        ) : move.delta === 0 ? (
          "—"
        ) : up ? (
          <>
            <ArrowUpIcon className="size-3" />
            {move.delta}
          </>
        ) : (
          <>
            <ArrowDownIcon className="size-3" />
            {Math.abs(move.delta)}
          </>
        )}
      </span>
    </div>
  )
}

export function SpendCell({ factory }: { factory: Factory }) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-muted h-1.5 w-24 shrink-0 overflow-hidden rounded-full">
        <div
          className="bg-foreground/70 h-full rounded-full"
          style={{ width: `${spendShare(factory)}%` }}
        />
      </div>
      <span className="text-sm font-medium tabular-nums">
        {formatCompactUsd(factory.spend)}
      </span>
    </div>
  )
}

/** Peer band with the factory's marker plus category floor and goal ticks. */
export function PeerBand({
  factory,
  thresholds,
}: {
  factory: Factory
  thresholds: Thresholds
}) {
  const min = 70
  const max = 100
  const x = (value: number) =>
    8 + ((Math.min(max, Math.max(min, value)) - min) / (max - min)) * 144
  const score = scoreOf(factory, thresholds)
  const marker =
    score === "at-goal"
      ? "fill-success"
      : score === "watch"
        ? "fill-warning"
        : "fill-destructive"

  return (
    <svg
      viewBox="0 0 160 20"
      role="img"
      aria-label={`OTIF ${factory.otif}%, peer band ${factory.peerLow}% to ${factory.peerHigh}%, floor ${thresholds.floor}%, goal ${thresholds.goal}%`}
      className="h-5 w-40 overflow-visible"
    >
      <rect
        x={x(factory.peerLow)}
        y={7.5}
        width={Math.max(2, x(factory.peerHigh) - x(factory.peerLow))}
        height={5}
        rx={2.5}
        className="fill-muted-foreground/25"
      />
      <line
        x1={x(thresholds.floor)}
        y1={2.5}
        x2={x(thresholds.floor)}
        y2={17.5}
        className="stroke-destructive/70"
        strokeWidth={1}
        strokeDasharray="2 2"
      />
      <line
        x1={x(thresholds.goal)}
        y1={2.5}
        x2={x(thresholds.goal)}
        y2={17.5}
        className="stroke-foreground/50"
        strokeWidth={1}
      />
      <line
        x1={x(peerMedian(factory))}
        y1={10}
        x2={x(factory.otif)}
        y2={10}
        className="stroke-muted-foreground/40"
        strokeWidth={1}
      />
      <circle cx={x(factory.otif)} cy={10} r={4} className={marker} />
    </svg>
  )
}

export function OtifCell({
  factory,
  thresholds,
}: {
  factory: Factory
  thresholds: Thresholds
}) {
  const score = scoreOf(factory, thresholds)
  const delta = factory.otif - peerMedian(factory)

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span
        className={cn(
          "font-medium tabular-nums",
          score === "at-goal" && "text-success-foreground",
          score === "watch" && "text-warning-foreground",
          score === "below-floor" && "text-destructive",
        )}
      >
        {factory.otif.toFixed(1)}%
      </span>
      <span className="text-muted-foreground text-xs tabular-nums">
        {delta >= 0 ? "+" : ""}
        {delta.toFixed(1)} vs peers
      </span>
    </div>
  )
}

export function DefectCell({ factory }: { factory: Factory }) {
  const tone =
    factory.defectRate > 1.8
      ? "text-destructive"
      : factory.defectRate > 1.2
        ? "text-warning-foreground"
        : "text-muted-foreground"

  return (
    <div className="flex flex-col gap-0.5">
      <span className={cn("text-sm tabular-nums", tone)}>
        {factory.defectRate.toFixed(1)}%
      </span>
      <span className="text-muted-foreground text-xs">
        {factory.leadTime}d lead
      </span>
    </div>
  )
}

export function NextBuyBadge({
  value,
  className,
}: {
  value: NextBuy
  className?: string
}) {
  const meta = NEXT_BUY_META[value]

  return (
    <Badge
      variant={meta.variant}
      size="lg"
      className={cn("font-medium", className)}
    >
      {meta.label}
    </Badge>
  )
}

function ThresholdRow({
  category,
  value,
  onChange,
}: {
  category: Category
  value: Thresholds
  onChange: (next: Thresholds) => void
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm">{category}</span>
      <div className="flex items-center gap-1.5">
        <NumberField
          value={value.floor}
          min={60}
          max={100}
          step={1}
          size="sm"
          onValueChange={(next) =>
            onChange({ ...value, floor: Math.min(100, next ?? value.floor) })
          }
        >
          <NumberFieldGroup className="w-[4.6rem]">
            <NumberFieldInput aria-label={`${category} floor`} />
          </NumberFieldGroup>
        </NumberField>
        <span className="text-muted-foreground text-xs">/</span>
        <NumberField
          value={value.goal}
          min={60}
          max={100}
          step={1}
          size="sm"
          onValueChange={(next) =>
            onChange({ ...value, goal: Math.min(100, next ?? value.goal) })
          }
        >
          <NumberFieldGroup className="w-[4.6rem]">
            <NumberFieldInput aria-label={`${category} goal`} />
          </NumberFieldGroup>
        </NumberField>
      </div>
    </div>
  )
}

export function ThresholdsPopover({
  thresholds,
  onChange,
  onReset,
}: {
  thresholds: Record<Category, Thresholds>
  onChange: (category: Category, next: Thresholds) => void
  onReset: () => void
}) {
  const categories = Object.keys(CATEGORY_DEFAULTS) as Category[]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontalIcon />
          Targets
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-medium">Category thresholds</div>
            <p className="text-muted-foreground mt-0.5 text-xs text-pretty">
              Floor and OTIF goal re-score the band, status and header counts.
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Reset thresholds"
            onClick={onReset}
          >
            <RotateCcwIcon />
          </Button>
        </div>
        <div className="mt-4 grid gap-3">
          {categories.map((category) => (
            <ThresholdRow
              key={category}
              category={category}
              value={thresholds[category]}
              onChange={(next) => onChange(category, next)}
            />
          ))}
        </div>
        <div className="text-muted-foreground border-t pt-3 text-xs">
          Floor · dashed marker. Goal · solid marker.
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function TrendBars({ values }: { values: number[] }) {
  const min = Math.min(...values) - 2
  const max = Math.max(...values) + 1

  return (
    <div className="flex h-16 items-end gap-1.5">
      {values.map((value, index) => {
        const height = ((value - min) / (max - min)) * 100
        return (
          <div key={index} className="flex flex-1 flex-col items-center gap-1">
            <div className="bg-muted flex h-12 w-full items-end overflow-hidden rounded-sm">
              <div
                className="bg-foreground/75 w-full rounded-sm"
                style={{ height: `${Math.max(8, height)}%` }}
              />
            </div>
            <span className="text-muted-foreground text-[10px] tabular-nums">
              {value.toFixed(1)}
            </span>
          </div>
        )
      })}
    </div>
  )
}
