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
import { Input } from "@/components/ui/input"
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
} from "@/components/reui-unbound/number-field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { OBJECTIVES, OWNERS, PERSPECTIVES } from "./data"
import type { Direction, Kpi, OwnerKey, Unit } from "./data"

export function WeightDialog({
  kpi,
  objectiveName,
  open,
  onOpenChange,
  onSave,
}: {
  kpi: Kpi | null
  objectiveName: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (id: string, weight: number) => void
}) {
  if (!kpi) return null

  return (
    <WeightDialogForm
      key={kpi.id}
      kpi={kpi}
      objectiveName={objectiveName}
      open={open}
      onOpenChange={onOpenChange}
      onSave={onSave}
    />
  )
}

function WeightDialogForm({
  kpi,
  objectiveName,
  open,
  onOpenChange,
  onSave,
}: {
  kpi: Kpi
  objectiveName: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (id: string, weight: number) => void
}) {
  const [weight, setWeight] = useState(kpi.weight)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit KPI weight</DialogTitle>
          <DialogDescription>
            {kpi.name} · weight inside {objectiveName}
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="kpi-weight">Weight (%)</FieldLabel>
            <NumberField
              id="kpi-weight"
              value={weight}
              min={0}
              max={100}
              step={5}
              onValueChange={(value) => setWeight(value ?? weight)}
            >
              <NumberFieldGroup>
                <NumberFieldInput />
              </NumberFieldGroup>
            </NumberField>
          </Field>
          <div className="bg-muted/40 text-muted-foreground rounded-lg border px-3 py-2 text-xs text-pretty">
            Rollups normalise by the weights present, so the objective,
            perspective and company score update without renaming the other
            KPIs.
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
              onSave(kpi.id, weight)
              onOpenChange(false)
            }}
          >
            Save weight
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const UNITS: Array<{ value: Unit; label: string }> = [
  { value: "Percent", label: "Percent" },
  { value: "USD_M", label: "USD millions" },
  { value: "USD", label: "USD" },
  { value: "Days", label: "Days" },
  { value: "Score", label: "Score" },
  { value: "X", label: "Ratio (×)" },
]

export function AddKpiDialog({
  open,
  defaultObjective,
  onOpenChange,
  onSave,
}: {
  open: boolean
  defaultObjective: string | null
  onOpenChange: (open: boolean) => void
  onSave: (kpi: Kpi) => void
}) {
  const [name, setName] = useState("")
  const [objective, setObjective] = useState(
    defaultObjective ?? OBJECTIVES[0].id,
  )
  const [owner, setOwner] = useState<OwnerKey>("sana")
  const [weight, setWeight] = useState(25)
  const [baseline, setBaseline] = useState(0)
  const [value, setValue] = useState(0)
  const [target, setTarget] = useState(0)
  const [unit, setUnit] = useState<Unit>("Percent")
  const [direction, setDirection] = useState<Direction>("up")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add KPI</DialogTitle>
          <DialogDescription>
            Drops straight into the objective row and joins the weighted
            rollups.
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="new-kpi-name">KPI name</FieldLabel>
            <Input
              id="new-kpi-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Checkout Conversion"
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="new-kpi-objective">Objective</FieldLabel>
              <Select
                value={objective}
                onValueChange={setObjective}
              >
                <SelectTrigger id="new-kpi-objective" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {OBJECTIVES.map((item) => {
                    const perspective = PERSPECTIVES.find(
                      (entry) => entry.id === item.perspective,
                    )
                    return (
                      <SelectItem key={item.id} value={item.id}>
                        {perspective?.name} · {item.name}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="new-kpi-owner">Owner</FieldLabel>
              <Select
                value={owner}
                onValueChange={(next) => setOwner(next as OwnerKey)}
              >
                <SelectTrigger id="new-kpi-owner" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(OWNERS) as OwnerKey[]).map((key) => (
                    <SelectItem key={key} value={key}>
                      {OWNERS[key]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Field>
              <FieldLabel htmlFor="new-kpi-weight">Weight %</FieldLabel>
              <NumberField
                id="new-kpi-weight"
                value={weight}
                min={0}
                max={100}
                step={5}
                onValueChange={(next) => setWeight(next ?? weight)}
              >
                <NumberFieldGroup>
                  <NumberFieldInput />
                </NumberFieldGroup>
              </NumberField>
            </Field>
            <Field>
              <FieldLabel htmlFor="new-kpi-unit">Unit</FieldLabel>
              <Select
                value={unit}
                onValueChange={(next) => setUnit(next as Unit)}
              >
                <SelectTrigger id="new-kpi-unit" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {UNITS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="new-kpi-direction">Direction</FieldLabel>
              <Select
                value={direction}
                onValueChange={(next) => setDirection(next as Direction)}
              >
                <SelectTrigger id="new-kpi-direction" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="up">Higher is better</SelectItem>
                  <SelectItem value="down">Lower is better</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Field>
              <FieldLabel htmlFor="new-kpi-baseline">Baseline</FieldLabel>
              <NumberField
                id="new-kpi-baseline"
                value={baseline}
                step={0.1}
                onValueChange={(next) => setBaseline(next ?? baseline)}
              >
                <NumberFieldGroup>
                  <NumberFieldInput />
                </NumberFieldGroup>
              </NumberField>
            </Field>
            <Field>
              <FieldLabel htmlFor="new-kpi-value">Value</FieldLabel>
              <NumberField
                id="new-kpi-value"
                value={value}
                step={0.1}
                onValueChange={(next) => setValue(next ?? value)}
              >
                <NumberFieldGroup>
                  <NumberFieldInput />
                </NumberFieldGroup>
              </NumberField>
            </Field>
            <Field>
              <FieldLabel htmlFor="new-kpi-target">Target</FieldLabel>
              <NumberField
                id="new-kpi-target"
                value={target}
                step={0.1}
                onValueChange={(next) => setTarget(next ?? target)}
              >
                <NumberFieldGroup>
                  <NumberFieldInput />
                </NumberFieldGroup>
              </NumberField>
            </Field>
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
            disabled={name.trim() === "" || target === 0}
            onClick={() => {
              onSave({
                id: `kpi-${Date.now().toString(36)}`,
                objective,
                name: name.trim(),
                owner,
                weight,
                baseline,
                value,
                target,
                unit,
                direction,
                lagging: { flag: "us", market: "US", pct: 50 },
              })
              onOpenChange(false)
            }}
          >
            Add KPI
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
