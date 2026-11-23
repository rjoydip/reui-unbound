import { useState } from "react"
import {
  CircleCheckIcon,
  CircleMinusIcon,
  PencilIcon,
  TriangleAlertIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "cn"

import {
  NEXT_BUY_META,
  QUARTERS,
  formatUsd,
  peerMedian,
  ruleChecks,
  scoreOf,
} from "./data"
import type { Factory, NextBuy, Thresholds } from "./data"
import { NextBuyBadge, PeerBand, TrendBars } from "./parts"

const CHECK_ICON = {
  pass: { icon: CircleCheckIcon, tone: "text-success-foreground" },
  warn: { icon: TriangleAlertIcon, tone: "text-warning-foreground" },
  fail: { icon: CircleMinusIcon, tone: "text-destructive" },
}

export function FactorySheet({
  factory,
  thresholds,
  open,
  onOpenChange,
  onEdit,
}: {
  factory: Factory | null
  thresholds: Thresholds
  open: boolean
  onOpenChange: (open: boolean) => void
  onEdit: (factory: Factory) => void
}) {
  if (!factory) return null

  const score = scoreOf(factory, thresholds)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            {factory.name}
            <NextBuyBadge value={factory.nextBuy} />
          </SheetTitle>
          <SheetDescription>
            #{factory.rank} in FOB spend · {factory.country} ·{" "}
            {factory.category}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-5 overflow-y-auto px-4 pb-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border p-3">
              <div className="text-muted-foreground text-xs">FOB spend</div>
              <div className="mt-1 text-lg font-semibold tabular-nums">
                {formatUsd(factory.spend)}
              </div>
              <div className="text-muted-foreground text-xs">trailing year</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-muted-foreground text-xs">OTIF</div>
              <div
                className={cn(
                  "mt-1 text-lg font-semibold tabular-nums",
                  score === "below-floor" && "text-destructive",
                  score === "watch" && "text-warning-foreground",
                  score === "at-goal" && "text-success-foreground",
                )}
              >
                {factory.otif.toFixed(1)}%
              </div>
              <div className="text-muted-foreground text-xs">
                peer median {peerMedian(factory).toFixed(1)}%
              </div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">OTIF vs peers</span>
              <Badge variant="outline" size="sm">
                floor {thresholds.floor}% · goal {thresholds.goal}%
              </Badge>
            </div>
            <PeerBand factory={factory} thresholds={thresholds} />
            <div className="text-muted-foreground mt-2 text-xs text-pretty">
              Band {factory.peerLow}–{factory.peerHigh}% is the peer fence for
              this category.
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Quarterly OTIF</span>
              <span className="text-muted-foreground text-xs">
                2025 Q4 → 2026 Q3
              </span>
            </div>
            <TrendBars values={factory.trend} />
            <div className="text-muted-foreground mt-1 flex justify-between text-[10px]">
              {QUARTERS.map((quarter) => (
                <span key={quarter}>{quarter}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-sm font-medium">Rule checks</div>
            <div className="divide-y rounded-lg border">
              {ruleChecks(factory, thresholds).map((check) => {
                const Icon = CHECK_ICON[check.state].icon
                return (
                  <div
                    key={check.label}
                    className="flex items-start gap-2 px-3 py-2"
                  >
                    <Icon
                      className={cn(
                        "mt-0.5 size-3.5 shrink-0",
                        CHECK_ICON[check.state].tone,
                      )}
                    />
                    <div className="min-w-0">
                      <div className="text-sm font-medium">{check.label}</div>
                      <div className="text-muted-foreground text-xs text-pretty">
                        {check.detail}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <div className="mb-1.5 text-sm font-medium">Sourcing notes</div>
            <p className="text-muted-foreground text-sm text-pretty">
              {factory.notes}
            </p>
          </div>

          <div className="text-muted-foreground text-xs">
            Next buy recommendation: {NEXT_BUY_META[factory.nextBuy].hint}
          </div>
        </div>

        <SheetFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={() => onEdit(factory)}>
            <PencilIcon />
            Edit next buy
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export function NextBuyDialog({
  factory,
  open,
  onOpenChange,
  onSave,
}: {
  factory: Factory | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (id: string, nextBuy: NextBuy, note: string) => void
}) {
  const [nextBuy, setNextBuy] = useState<NextBuy>(factory?.nextBuy ?? "hold")
  const [note, setNote] = useState(factory?.notes ?? "")

  const options = Object.keys(NEXT_BUY_META) as NextBuy[]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit next buy</DialogTitle>
          <DialogDescription>
            {factory?.name ?? "Factory"} · the call badge and filter counts
            update immediately.
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="next-buy">Next buy call</FieldLabel>
            <Select
              value={nextBuy}
              onValueChange={(value) => setNextBuy(value as NextBuy)}
            >
              <SelectTrigger id="next-buy" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {NEXT_BUY_META[option].label} —{" "}
                    {NEXT_BUY_META[option].hint}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="next-buy-note">Sourcing note</FieldLabel>
            <Textarea
              id="next-buy-note"
              rows={4}
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="What should the buyer know?"
            />
          </Field>
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
              if (!factory) return
              onSave(factory.id, nextBuy, note)
              onOpenChange(false)
            }}
          >
            Save call
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
