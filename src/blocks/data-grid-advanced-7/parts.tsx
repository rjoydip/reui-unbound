import { useState } from "react"
import { PlusIcon, TriangleAlertIcon } from "lucide-react"

import { Badge } from "@/components/reui-unbound/badge"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "cn"

import {
  SECTIONS,
  YEARS,
  formatMoney,
  formatValue,
} from "./data"
import type { ProFormaRow, Section } from "./data"

const sectionMeta = (section: Section) =>
  SECTIONS.find((entry) => entry.key === section)!

export function SectionCell({ row }: { row: ProFormaRow }) {
  if (!row.sectionStart) {
    return <span className="text-muted-foreground/30 ps-2 text-xs">·</span>
  }
  const meta = sectionMeta(row.section)

  return (
    <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide">
      <span className={cn("size-1.5 rounded-full", meta.dot)} />
      <span className="truncate">{meta.label}</span>
    </span>
  )
}

export function LineCell({ row }: { row: ProFormaRow }) {
  const isTotal = row.kind === "total" || row.kind === "result"

  if (row.kind === "result") {
    return (
      <span className="flex items-center gap-2">
        <Badge
          variant={
            row.id === "noi"
              ? "success-light"
              : row.id === "total-roi"
                ? "primary-light"
                : "info-light"
          }
          size="sm"
          className="font-semibold"
        >
          {row.label}
        </Badge>
        {row.id === "cash-flow" && (
          <span className="text-muted-foreground text-[11px]">
            Net cash flow
          </span>
        )}
      </span>
    )
  }

  return (
    <span
      className={cn(
        "text-sm",
        isTotal ? "font-semibold" : "text-foreground",
        row.kind === "computed" && "text-muted-foreground",
      )}
    >
      {row.label}
      {row.kind === "input" && (
        <span className="text-muted-foreground/60 ml-1.5 font-mono text-[10px]">
          edit
        </span>
      )}
    </span>
  )
}

export function ValueCell({
  row,
  value,
  strong,
}: {
  row: ProFormaRow
  value: number
  strong?: boolean
}) {
  return (
    <span
      className={cn(
        "block text-right text-sm tabular-nums",
        (strong || row.kind === "total" || row.kind === "result") &&
          "font-semibold",
        row.kind === "computed" && "text-muted-foreground",
        row.id === "total-roi" && "text-primary",
      )}
    >
      {formatValue(row, value)}
    </span>
  )
}

export function EditLineDialog({
  row,
  open,
  onOpenChange,
  onSave,
}: {
  row: ProFormaRow | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (row: ProFormaRow) => void
}) {
  const [values, setValues] = useState<number[]>(row?.values ?? [])
  const [monthly, setMonthly] = useState(row?.monthly ?? 0)

  if (!row) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{row.label}</DialogTitle>
          <DialogDescription>
            {sectionMeta(row.section).label} · {row.basis || "Computed line"} ·
            edit the yearly inputs below.
          </DialogDescription>
        </DialogHeader>

        <form
          className="grid gap-4"
          onSubmit={(event) => {
            event.preventDefault()
            onSave({ ...row, values, monthly: Math.round(monthly) })
            onOpenChange(false)
          }}
        >
          <FieldGroup>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Field className="col-span-2">
                <FieldLabel htmlFor="pf-monthly">Monthly</FieldLabel>
                <Input
                  id="pf-monthly"
                  type="number"
                  step="1"
                  value={monthly}
                  onChange={(event) => setMonthly(Number(event.target.value))}
                />
              </Field>
              <div className="col-span-2 flex items-end pb-1">
                <span className="text-muted-foreground text-xs">
                  {formatMoney(monthly)} / month
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {YEARS.map((year, index) => (
                <Field key={year}>
                  <FieldLabel htmlFor={`pf-${year}`}>{year}</FieldLabel>
                  <Input
                    id={`pf-${year}`}
                    type="number"
                    step={row.percent ? "0.1" : "1"}
                    value={values[index] ?? 0}
                    onChange={(event) =>
                      setValues((current) =>
                        current.map((entry, position) =>
                          position === index
                            ? Number(event.target.value)
                            : entry,
                        ),
                      )
                    }
                  />
                </Field>
              ))}
            </div>

            <div className="bg-muted/40 text-muted-foreground flex items-start gap-2 rounded-lg border px-3 py-2 text-xs">
              <TriangleAlertIcon className="mt-0.5 size-3.5 shrink-0" />
              <span>
                {row.percent
                  ? "Rate lines take a percentage and do not flow into the yearly totals in this demo."
                  : "Yearly totals, NOI, cash flow and ROI recalculate on save."}
              </span>
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
            <Button type="submit">Save line</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function AddLineForm({
  onAdd,
  onCancel,
}: {
  onAdd: (input: {
    label: string
    section: Section
    monthly: number
    yearOne: number
  }) => void
  onCancel: () => void
}) {
  const [label, setLabel] = useState("")
  const [section, setSection] = useState<Section>("revenue")
  const [monthly, setMonthly] = useState(0)
  const [yearOne, setYearOne] = useState(0)

  return (
    <form
      className="bg-muted/30 flex flex-wrap items-end gap-2 rounded-lg border p-2.5"
      onSubmit={(event) => {
        event.preventDefault()
        if (label.trim() === "") return
        onAdd({ label: label.trim(), section, monthly, yearOne })
        setLabel("")
        setMonthly(0)
        setYearOne(0)
      }}
    >
      <Field className="min-w-40 flex-1">
        <FieldLabel htmlFor="new-line" className="text-xs">
          New line
        </FieldLabel>
        <Input
          id="new-line"
          value={label}
          onChange={(event) => setLabel(event.target.value)}
          placeholder="Solar lease"
          required
          className="h-8"
        />
      </Field>
      <Field className="w-32">
        <FieldLabel htmlFor="new-section" className="text-xs">
          Section
        </FieldLabel>
        <Select
          value={section}
          onValueChange={(value) => setSection(value as Section)}
        >
          <SelectTrigger id="new-section" size="sm" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="revenue">Revenues</SelectItem>
            <SelectItem value="expenses">Expenses</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field className="w-28">
        <FieldLabel htmlFor="new-monthly" className="text-xs">
          Monthly
        </FieldLabel>
        <Input
          id="new-monthly"
          type="number"
          value={monthly}
          onChange={(event) => setMonthly(Number(event.target.value))}
          className="h-8"
        />
      </Field>
      <Field className="w-28">
        <FieldLabel htmlFor="new-year" className="text-xs">
          Year 1
        </FieldLabel>
        <Input
          id="new-year"
          type="number"
          value={yearOne}
          onChange={(event) => setYearOne(Number(event.target.value))}
          className="h-8"
        />
      </Field>
      <Button type="submit" size="sm">
        <PlusIcon />
        Add line
      </Button>
      <Button type="button" size="sm" variant="ghost" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  )
}
