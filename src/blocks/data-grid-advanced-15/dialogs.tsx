import { useState } from "react"

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
} from "@/components/reui-unbound/number-field"

import { MONTHS, formatDelta, formatK } from "./data"
import type { PnlRow } from "./data"

export function ForecastDialog({
  line,
  index,
  open,
  onOpenChange,
  onSave,
}: {
  line: PnlRow | null
  index: number
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (lineId: string, index: number, value: number) => void
}) {
  const month = MONTHS[index]
  const values = line?.values[index]
  const [forecast, setForecast] = useState(values?.forecast ?? 0)

  if (!line || !values) return null

  const budgetDelta = forecast - values.budget

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit {month.label} forecast</DialogTitle>
          <DialogDescription>
            {line.label} · USD thousands · budget {formatK(values.budget)},
            prior year {formatK(values.prior)}
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="forecast-value">Forecast</FieldLabel>
            <NumberField
              id="forecast-value"
              value={forecast}
              min={0}
              step={10}
              onValueChange={(value) => setForecast(value ?? forecast)}
            >
              <NumberFieldGroup>
                <NumberFieldInput />
              </NumberFieldGroup>
            </NumberField>
          </Field>
          <div className="bg-muted/40 flex items-center justify-between rounded-lg border px-3 py-2 text-xs">
            <span className="text-muted-foreground">Against budget</span>
            <span
              className={
                budgetDelta < 0
                  ? "text-destructive tabular-nums"
                  : "text-success-foreground tabular-nums"
              }
            >
              {formatDelta(budgetDelta)} ({formatK(forecast)} vs{" "}
              {formatK(values.budget)})
            </span>
          </div>
          <p className="text-muted-foreground text-xs text-pretty">
            Saving re-rolls the group, gross margin, operating profit and the
            chart band for every visible period.
          </p>
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
              onSave(line.id, index, forecast)
              onOpenChange(false)
            }}
          >
            Save forecast
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
