import { useState } from "react"
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

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
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
} from "@/components/reui-unbound/number-field"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import {
  TIER_META,
  formatEur,
  formatPercent,
  marginOf,
  tierOf,
} from "./data"
import type { Lane, Terminal } from "./data"
import { MarginLegend, RateHistory } from "./parts"

export interface LaneSelection {
  from: Terminal
  to: Terminal
}

function LegCard({
  title,
  lane,
}: {
  title: string
  lane: Lane | null
}) {
  if (!lane) {
    return (
      <div className="rounded-lg border border-dashed p-3">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-muted-foreground mt-1 text-xs">
          No contract on this direction.
        </div>
      </div>
    )
  }

  const meta = TIER_META[tierOf(lane)]
  const margin = marginOf(lane)

  return (
    <div className={cn("rounded-lg border p-3", meta.cell)}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium">{title}</span>
        <Badge variant="outline" size="sm" className="bg-background/60">
          {meta.label}
        </Badge>
      </div>
      <div className="mt-2 flex items-end justify-between gap-2">
        <span className="text-xl font-semibold tabular-nums">
          {formatEur(lane.rate)}
        </span>
        <span className="text-xs tabular-nums">
          cost {formatEur(lane.cost)} · {formatLoadsSafe(lane.loads)} loads
        </span>
      </div>
      <div className="mt-1 flex items-center gap-1 text-xs tabular-nums">
        {margin >= 0 ? (
          <TrendingUpIcon className="size-3" />
        ) : (
          <TrendingDownIcon className="size-3" />
        )}
        {formatPercent(margin)} margin
      </div>
    </div>
  )
}

function formatLoadsSafe(value: number) {
  return value.toLocaleString("en-US")
}

export function LaneSheet({
  selection,
  open,
  onOpenChange,
  onReprice,
}: {
  selection: LaneSelection | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onReprice: () => void
}) {
  if (!selection) return null
  const { from, to } = selection
  const out = from.lanes[to.code] ?? null
  const back = to.lanes[from.code] ?? null
  const losing = (out && marginOf(out) < 0) || (back && marginOf(back) < 0)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>
            {from.city} → {to.city}
          </SheetTitle>
          <SheetDescription>
            Lane {from.code}–{to.code} · EUR per 100 kg · week 6 of 6
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-5 overflow-y-auto px-4 pb-4">
          {losing && (
            <div className="border-destructive/25 bg-destructive/5 text-destructive flex items-start gap-2 rounded-lg border p-3 text-xs">
              <TrendingDownIcon className="mt-0.5 size-3.5 shrink-0" />
              <p className="text-pretty">
                This lane prices below cost. Reprice before the next tender
                round or hand the volume to a partner carrier.
              </p>
            </div>
          )}

          <div className="grid gap-3">
            <LegCard title="Headhaul" lane={out} />
            <LegCard title="Backhaul" lane={back} />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Rate history</span>
              <span className="text-muted-foreground text-[11px]">
                headhaul, six weeks
              </span>
            </div>
            {out ? (
              <RateHistory
                history={out.history}
                label={`${from.city} to ${to.city}`}
              />
            ) : (
              <div className="text-muted-foreground rounded-lg border border-dashed p-4 text-xs">
                No headhaul history for this lane.
              </div>
            )}
          </div>

          <div>
            <div className="mb-2 text-sm font-medium">Margin thresholds</div>
            <MarginLegend />
            <p className="text-muted-foreground mt-2 text-xs text-pretty">
              Deep loss prices under cost. Thin lanes sit below the 8% network
              floor. Strong lanes clear 15%.
            </p>
          </div>
        </div>

        <SheetFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={onReprice}>Reprice lane</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export function RepriceDialog({
  selection,
  open,
  onOpenChange,
  onSave,
}: {
  selection: LaneSelection | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (next: {
    outRate: number
    outCost: number
    backRate: number | null
    backCost: number | null
  }) => void
}) {
  const out = selection?.from.lanes[selection.to.code] ?? null
  const back = selection ? (selection.to.lanes[selection.from.code] ?? null) : null

  const [outRate, setOutRate] = useState(out?.rate ?? 0)
  const [outCost, setOutCost] = useState(out?.cost ?? 0)
  const [backRate, setBackRate] = useState(back?.rate ?? 0)
  const [backCost, setBackCost] = useState(back?.cost ?? 0)

  const outMargin = outRate > 0 ? ((outRate - outCost) / outRate) * 100 : 0
  const backMargin =
    backRate > 0 ? ((backRate - backCost) / backRate) * 100 : 0

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Reprice lane</DialogTitle>
          <DialogDescription>
            {selection
              ? `${selection.from.city} ↔ ${selection.to.city} · margin updates as you type`
              : "Select a lane first."}
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="reprice-out-rate">
                Headhaul rate (€)
              </FieldLabel>
              <NumberField
                id="reprice-out-rate"
                value={outRate}
                min={1}
                max={500}
                onValueChange={(value) => setOutRate(value ?? outRate)}
              >
                <NumberFieldGroup>
                  <NumberFieldInput />
                </NumberFieldGroup>
              </NumberField>
            </Field>
            <Field>
              <FieldLabel htmlFor="reprice-out-cost">
                Headhaul cost (€)
              </FieldLabel>
              <NumberField
                id="reprice-out-cost"
                value={outCost}
                min={1}
                max={500}
                onValueChange={(value) => setOutCost(value ?? outCost)}
              >
                <NumberFieldGroup>
                  <NumberFieldInput />
                </NumberFieldGroup>
              </NumberField>
            </Field>
          </div>

          <div className="text-muted-foreground -mt-1 text-xs tabular-nums">
            Headhaul margin {formatPercent(outMargin)}
          </div>

          {back ? (
            <>
              <div className="grid grid-cols-2 gap-3">
                <Field>
                  <FieldLabel htmlFor="reprice-back-rate">
                    Backhaul rate (€)
                  </FieldLabel>
                  <NumberField
                    id="reprice-back-rate"
                    value={backRate}
                    min={1}
                    max={500}
                    onValueChange={(value) => setBackRate(value ?? backRate)}
                  >
                    <NumberFieldGroup>
                      <NumberFieldInput />
                    </NumberFieldGroup>
                  </NumberField>
                </Field>
                <Field>
                  <FieldLabel htmlFor="reprice-back-cost">
                    Backhaul cost (€)
                  </FieldLabel>
                  <NumberField
                    id="reprice-back-cost"
                    value={backCost}
                    min={1}
                    max={500}
                    onValueChange={(value) => setBackCost(value ?? backCost)}
                  >
                    <NumberFieldGroup>
                      <NumberFieldInput />
                    </NumberFieldGroup>
                  </NumberField>
                </Field>
              </div>
              <div className="text-muted-foreground -mt-1 text-xs tabular-nums">
                Backhaul margin {formatPercent(backMargin)}
              </div>
            </>
          ) : (
            <div className="text-muted-foreground rounded-lg border border-dashed p-3 text-xs">
              No backhaul contract on this lane — only the headhaul is repriced.
            </div>
          )}
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
              onSave({
                outRate,
                outCost,
                backRate: back ? backRate : null,
                backCost: back ? backCost : null,
              })
              onOpenChange(false)
            }}
          >
            Save rates
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
