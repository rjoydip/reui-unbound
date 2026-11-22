import { useState } from "react"
import {
  CheckIcon,
  CodeXmlIcon,
  CompassIcon,
  PaletteIcon,
  PencilIcon,
  RocketIcon,
  RotateCcwIcon,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { IconTile } from "@/components/kit/icon-tile"
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
import { Progress } from "@/components/ui/progress"
import { cn } from "cn"

import {
  DECISION_META,
  MONTHS,
  formatMoney,
  formatVariance,
  overBudget,
  scheduleLabel,
  spentPct,
  variance,
} from "./data"
import type { BudgetLine, Workstream } from "./data"

export const WORKSTREAM_META: Record<
  Workstream,
  { icon: LucideIcon; tone: string; bar: string }
> = {
  Discovery: { icon: CompassIcon, tone: "text-violet-500", bar: "bg-violet-500/70" },
  Design: { icon: PaletteIcon, tone: "text-sky-500", bar: "bg-sky-500/70" },
  Build: { icon: CodeXmlIcon, tone: "text-amber-600", bar: "bg-amber-500/70" },
  Launch: { icon: RocketIcon, tone: "text-emerald-600", bar: "bg-emerald-500/70" },
}

export function LineCell({ line }: { line: BudgetLine }) {
  const meta = WORKSTREAM_META[line.workstream]
  const Icon = meta.icon
  return (
    <div className="flex items-center gap-2.5">
      <IconTile variant="soft" size="sm" className={cn("rounded-md", meta.tone)}>
        <Icon />
      </IconTile>
      <div className="min-w-0">
        <div className="text-foreground flex items-center gap-1.5 truncate font-medium">
          {line.name}
          {line.reforecast && (
            <RotateCcwIcon className="text-muted-foreground size-3 shrink-0" aria-label="Re-forecasted" />
          )}
        </div>
        <div className="text-muted-foreground truncate text-xs">
          {line.basis} · {line.workstream}
        </div>
      </div>
    </div>
  )
}

export function ScheduleHeader() {
  return (
    <div className="grid w-full grid-cols-6 gap-0.5">
      {MONTHS.map((month) => (
        <span key={month} className="text-muted-foreground text-center text-[10px]">
          {month}
        </span>
      ))}
    </div>
  )
}

export function ScheduleCell({ line }: { line: BudgetLine }) {
  const meta = WORKSTREAM_META[line.workstream]
  return (
    <div className="grid w-full grid-cols-6 gap-0.5" title={scheduleLabel(line)}>
      {MONTHS.map((month, index) => {
        const active = index >= line.startMonth && index <= line.endMonth
        return (
          <span
            key={month}
            className={cn(
              "h-2 rounded-full",
              active ? meta.bar : "bg-muted",
              index === 4 && "ring-primary/60 ring-1 ring-offset-1 ring-offset-background",
            )}
          />
        )
      })}
    </div>
  )
}

export function SpentCell({ line }: { line: BudgetLine }) {
  const percent = spentPct(line)
  const over = percent > 100
  return (
    <div className="w-28">
      <div className="flex items-center justify-between text-xs tabular-nums">
        <span className="font-medium">{Math.round(percent)}%</span>
        <span className="text-muted-foreground">{formatMoney(line.actual)}</span>
      </div>
      <Progress
        value={Math.min(percent, 100)}
        className={cn("mt-1 h-1.5", over && "[&>div]:bg-destructive")}
      />
    </div>
  )
}

export function ForecastCell({
  line,
  onSave,
}: {
  line: BudgetLine
  onSave: (value: number) => void
}) {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState<number | null>(line.forecast)

  function commit() {
    if (draft === null || draft < line.actual) return
    onSave(draft)
    setOpen(false)
  }

  return (
    <div onClick={(event) => event.stopPropagation()} className="flex justify-end">
      <Popover
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (next) setDraft(line.forecast)
        }}
      >
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground h-7 gap-1 px-1.5 font-medium tabular-nums"
          >
            {formatMoney(line.forecast)}
            <PencilIcon className="text-muted-foreground size-3" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-60">
          <div className="flex flex-col gap-2">
            <div>
              <div className="text-sm font-medium">Re-forecast</div>
              <div className="text-muted-foreground text-xs">{line.name}</div>
            </div>
            <NumberField value={draft} onValueChange={setDraft} step={100} min={0}>
              <NumberFieldGroup>
                <NumberFieldInput aria-label="Forecast at completion" />
              </NumberFieldGroup>
            </NumberField>
            <div className="text-muted-foreground text-xs">
              Budget {formatMoney(line.budget)} · actual {formatMoney(line.actual)}
            </div>
            {draft !== null && draft < line.actual && (
              <span className="text-destructive text-xs">
                Forecast cannot be below actual spend.
              </span>
            )}
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button size="sm" disabled={draft === null || draft < line.actual} onClick={commit}>
                <CheckIcon />
                Save
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export function VarianceCell({ line }: { line: BudgetLine }) {
  const value = variance(line)
  return (
    <div className="flex flex-col items-end gap-1">
      <span
        className={cn(
          "text-sm font-medium tabular-nums",
          value < 0 ? "text-destructive" : value > 0 ? "text-success-foreground" : "text-muted-foreground",
        )}
      >
        {formatVariance(value)}
      </span>
      <div className="flex items-center gap-1">
        {overBudget(line) && (
          <span className="text-muted-foreground text-xs">
            {Math.round((line.forecast / line.budget - 1) * 100)}% over
          </span>
        )}
        {line.decision && (
          <Badge variant={DECISION_META[line.decision].variant} size="sm">
            {DECISION_META[line.decision].label}
          </Badge>
        )}
      </div>
    </div>
  )
}

export function BudgetCard({
  label,
  value,
  note,
  trend,
  tone,
  icon: Icon,
  iconTone,
  progress,
}: {
  label: string
  value: string
  note: string
  trend: number[]
  tone: string
  icon: LucideIcon
  iconTone: string
  progress?: number
}) {
  const max = Math.max(...trend)
  const min = Math.min(...trend)
  const span = max - min || 1
  return (
    <div className="bg-muted/20 flex flex-col gap-2 rounded-lg border p-3">
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
      <div aria-hidden className="flex h-5 items-end gap-[3px]">
        {trend.map((entry, index) => (
          <span
            key={index}
            className={cn("flex-1 rounded-[1px]", tone)}
            style={{ height: `${4 + ((entry - min) / span) * 16}px` }}
          />
        ))}
      </div>
      {progress !== undefined && <Progress value={progress} className="h-1.5" />}
    </div>
  )
}
