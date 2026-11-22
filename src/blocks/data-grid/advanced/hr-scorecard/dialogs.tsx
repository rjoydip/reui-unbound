import { useState } from "react"
import { RotateCcwIcon, SlidersHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
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

import { DEFAULT_THRESHOLDS, formatValue } from "./data"
import type { Kpi, Thresholds } from "./data"

export function EditActualDialog({
  kpi,
  open,
  onOpenChange,
  onSave,
}: {
  kpi: Kpi | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (id: string, actualMonth: number, actualYtd: number) => void
}) {
  const [month, setMonth] = useState(kpi?.actualMonth ?? 0)
  const [ytd, setYtd] = useState(kpi?.actualYtd ?? 0)

  if (!kpi) return null

  const step = kpi.unit === "USD" ? 10 : kpi.unit === "Percent" ? 0.1 : 1

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit actuals</DialogTitle>
          <DialogDescription>
            {kpi.name} · {kpi.unit} · target{" "}
            {formatValue(kpi.targetMonth, kpi.unit)} this month
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="actual-month">September actual</FieldLabel>
              <NumberField
                id="actual-month"
                value={month}
                min={0}
                step={step}
                onValueChange={(value) => setMonth(value ?? month)}
              >
                <NumberFieldGroup>
                  <NumberFieldInput />
                </NumberFieldGroup>
              </NumberField>
            </Field>
            <Field>
              <FieldLabel htmlFor="actual-ytd">YTD actual</FieldLabel>
              <NumberField
                id="actual-ytd"
                value={ytd}
                min={0}
                step={step}
                onValueChange={(value) => setYtd(value ?? ytd)}
              >
                <NumberFieldGroup>
                  <NumberFieldInput />
                </NumberFieldGroup>
              </NumberField>
            </Field>
          </div>
          <div className="bg-muted/40 text-muted-foreground rounded-lg border px-3 py-2 text-xs text-pretty">
            Variance, attainment and the trend re-score against the current
            thresholds as soon as you save.
          </div>
        </FieldGroup>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              onSave(kpi.id, month, ytd)
              onOpenChange(false)
            }}
          >
            Save actuals
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function ThresholdsPopover({
  thresholds,
  onChange,
  onReset,
}: {
  thresholds: Thresholds
  onChange: (next: Thresholds) => void
  onReset: () => void
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontalIcon />
          Thresholds
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-sm font-medium">Re-score thresholds</div>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Index 100 is exactly on target.
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
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5 text-sm">
              <span className="bg-success size-1.5 rounded-full" /> On track from
            </span>
            <NumberField
              value={thresholds.onTrack}
              min={80}
              max={140}
              step={1}
              size="sm"
              onValueChange={(value) =>
                onChange({
                  ...thresholds,
                  onTrack: Math.max(
                    value ?? thresholds.onTrack,
                    thresholds.watch + 1,
                  ),
                })
              }
            >
              <NumberFieldGroup className="w-16">
                <NumberFieldInput aria-label="On track threshold" />
              </NumberFieldGroup>
            </NumberField>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5 text-sm">
              <span className="bg-warning size-1.5 rounded-full" /> Watch from
            </span>
            <NumberField
              value={thresholds.watch}
              min={60}
              max={130}
              step={1}
              size="sm"
              onValueChange={(value) =>
                onChange({
                  ...thresholds,
                  watch: Math.min(value ?? thresholds.watch, thresholds.onTrack - 1),
                })
              }
            >
              <NumberFieldGroup className="w-16">
                <NumberFieldInput aria-label="Watch threshold" />
              </NumberFieldGroup>
            </NumberField>
          </div>
        </div>
        <div className="text-muted-foreground border-t pt-3 text-xs">
          Defaults: {DEFAULT_THRESHOLDS.onTrack} / {DEFAULT_THRESHOLDS.watch}.
          Values re-score every row and the header counts.
        </div>
      </PopoverContent>
    </Popover>
  )
}
