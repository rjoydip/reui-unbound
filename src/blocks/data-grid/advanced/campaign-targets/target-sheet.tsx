import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/kit/number-field"
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
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import {
  cpaSpread,
  formatMoney,
  formatSpread,
  roasSpread,
  verdict,
} from "./data"
import type { TargetCampaign, TargetRevision } from "./data"
import { VerdictBadge } from "./parts"

type TargetField = TargetRevision["field"]

function CurrentTarget({
  label,
  target,
  actual,
  spread,
  kind,
}: {
  label: string
  target: number
  actual: number
  spread: number
  kind: "roas" | "cpa"
}) {
  const format = (value: number) =>
    kind === "roas" ? `${value.toFixed(2)}x` : formatMoney(value, 2)

  return (
    <div className="rounded-lg border p-3">
      <div className="text-muted-foreground text-xs font-medium">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-lg font-semibold tabular-nums">
          {format(actual)}
        </span>
        <span className="text-muted-foreground text-xs">
          target {format(target)}
        </span>
      </div>
      <span
        className={cn(
          "mt-1 inline-block text-xs font-medium tabular-nums",
          spread >= 0 ? "text-success-foreground" : "text-destructive",
        )}
      >
        {formatSpread(spread)} vs target
      </span>
    </div>
  )
}

export function TargetHistorySheet({
  campaign,
  open,
  onOpenChange,
  onEdit,
}: {
  campaign: TargetCampaign | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onEdit: (campaign: TargetCampaign) => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        {campaign && (
          <>
            <SheetHeader className="gap-3 border-b pb-4">
              <div className="min-w-0">
                <SheetTitle className="truncate">{campaign.name}</SheetTitle>
                <SheetDescription>
                  {campaign.channel} &middot; {campaign.stage} &middot;{" "}
                  {formatMoney(campaign.spend)} spend
                </SheetDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <VerdictBadge verdict={verdict(campaign)} />
                <span className="text-muted-foreground text-xs">
                  Targets reviewed against current performance
                </span>
              </div>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-4 pb-6">
              <Button
                variant="outline"
                size="sm"
                className="self-start"
                onClick={() => onEdit(campaign)}
              >
                Edit target
              </Button>

              <div className="grid gap-2">
                <CurrentTarget
                  label="ROAS"
                  target={campaign.roasTarget}
                  actual={campaign.roasActual}
                  spread={roasSpread(campaign)}
                  kind="roas"
                />
                <CurrentTarget
                  label="CPA"
                  target={campaign.cpaTarget}
                  actual={campaign.cpaActual}
                  spread={cpaSpread(campaign)}
                  kind="cpa"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="text-sm font-medium">Target history</div>
                  <span className="text-muted-foreground text-xs">
                    {campaign.revisions.length} revision
                    {campaign.revisions.length === 1 ? "" : "s"}
                  </span>
                </div>

                {campaign.revisions.length === 0 ? (
                  <div className="text-muted-foreground rounded-lg border border-dashed p-6 text-center text-sm">
                    No target changes yet. The original brief still applies.
                  </div>
                ) : (
                  <ol className="flex flex-col gap-2">
                    {[...campaign.revisions].reverse().map((revision) => (
                      <li key={revision.id} className="rounded-lg border p-3">
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-sm font-medium">
                            {revision.field} target
                          </span>
                          <span className="text-muted-foreground shrink-0 text-xs">
                            {revision.date}
                          </span>
                        </div>
                        <div className="mt-1 text-sm tabular-nums">
                          <span className="text-muted-foreground line-through">
                            {revision.field === "ROAS"
                              ? `${revision.from.toFixed(1)}x`
                              : formatMoney(revision.from)}
                          </span>
                          <span className="text-muted-foreground mx-1.5">
                            &rarr;
                          </span>
                          <span className="font-semibold">
                            {revision.field === "ROAS"
                              ? `${revision.to.toFixed(1)}x`
                              : formatMoney(revision.to)}
                          </span>
                        </div>
                        {revision.note && (
                          <p className="text-muted-foreground mt-1.5 text-xs">
                            {revision.note}
                          </p>
                        )}
                        <p className="text-muted-foreground mt-1 text-xs">
                          by {revision.by}
                        </p>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

export function EditTargetDialog({
  campaign,
  open,
  onOpenChange,
  onSave,
}: {
  campaign: TargetCampaign | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (field: TargetField, value: number, note: string) => void
}) {
  const [field, setField] = useState<TargetField>("ROAS")
  const [value, setValue] = useState(0)
  const [note, setNote] = useState("")

  useEffect(() => {
    if (!campaign || !open) return
    setField("ROAS")
    setValue(campaign.roasTarget)
    setNote("")
  }, [campaign, open])

  function changeField(next: string) {
    if (!campaign || (next !== "ROAS" && next !== "CPA")) return
    setField(next)
    setValue(next === "ROAS" ? campaign.roasTarget : campaign.cpaTarget)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit target</DialogTitle>
          <DialogDescription>
            {campaign?.name ?? "Campaign"} &middot; the change is added to the
            target history.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="target-field">Target metric</Label>
            <Select value={field} onValueChange={changeField}>
              <SelectTrigger id="target-field" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ROAS">ROAS (higher is better)</SelectItem>
                <SelectItem value="CPA">CPA (lower is better)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="target-value">
              New target {field === "ROAS" ? "(x)" : "($)"}
            </Label>
            <NumberField
              id="target-value"
              value={value}
              onValueChange={(next) => setValue(next ?? 0)}
              min={0}
              step={field === "ROAS" ? 0.1 : 1}
            >
              <NumberFieldGroup>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldGroup>
            </NumberField>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="target-note">Reason</Label>
            <Input
              id="target-note"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Why is this target changing?"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            disabled={value <= 0}
            onClick={() => {
              onSave(
                field,
                field === "ROAS"
                  ? Math.round(value * 100) / 100
                  : Math.round(value),
                note.trim() || "Manual target update.",
              )
            }}
          >
            Save target
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
