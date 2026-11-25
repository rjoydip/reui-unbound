import { useState } from "react"
import { ClockIcon, TriangleAlertIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const CANCELLATION_REASONS = [
  { id: "one-launch", label: "Only needed one launch" },
  { id: "budget", label: "Budget changed" },
  { id: "patterns", label: "Missing a few patterns" },
  { id: "in-house", label: "Moved back in-house" },
  { id: "stack-fit", label: "Not the right stack fit" },
  { id: "figma", label: "Wanted better Figma parity" },
  { id: "inconsistent", label: "Output felt inconsistent" },
  { id: "other", label: "Something else" },
]

const FEEDBACK_PLACEHOLDER = "Anything we should improve before you leave ReUI?"

export function DialogCancelPlanSurveyBlock() {
  const [open, setOpen] = useState(false)
  const [noticeVisible, setNoticeVisible] = useState(true)
  const [selectedReasonIds, setSelectedReasonIds] = useState<string[]>([])
  const [feedback, setFeedback] = useState("")

  function toggleReason(reasonId: string, checked: boolean) {
    setSelectedReasonIds((current) =>
      checked ? [...current, reasonId] : current.filter((id) => id !== reasonId),
    )
  }

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <h1 className="sr-only">Cancel plan dialog</h1>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Cancel plan
      </Button>

      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90svh] gap-0 overflow-y-auto p-0 sm:max-w-[680px]">
          <DialogHeader className="gap-1 p-5 pb-4">
            <DialogTitle>Cancel Your Plan</DialogTitle>
            <DialogDescription>Your workspace stays active through the current billing period.</DialogDescription>
          </DialogHeader>

          {noticeVisible ? (
            <div className="mx-5 mb-4 flex flex-col gap-3 rounded-lg border border-warning/30 bg-warning/10 p-3 sm:flex-row sm:items-center">
              <TriangleAlertIcon className="size-4 shrink-0 text-warning-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Shared access pauses after expiry.</p>
                <p className="text-muted-foreground text-xs">
                  Team access stays on until the current period ends.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setNoticeVisible(false)}>
                  Dismiss
                </Button>
                <Button size="sm">Manage</Button>
              </div>
            </div>
          ) : null}

          <div className="grid gap-2 px-5 sm:grid-cols-2">
            {CANCELLATION_REASONS.map((reason) => (
              <Label
                key={reason.id}
                htmlFor={`dialog-3-${reason.id}`}
                className="border-input hover:bg-muted/40 flex h-10 cursor-pointer items-center justify-between gap-3 rounded-lg border px-3 text-sm font-normal transition-colors"
              >
                {reason.label}
                <Checkbox
                  id={`dialog-3-${reason.id}`}
                  checked={selectedReasonIds.includes(reason.id)}
                  onCheckedChange={(checked) => toggleReason(reason.id, checked === true)}
                />
              </Label>
            ))}
          </div>

          <div className="px-5 pt-4 pb-5">
            <Textarea
              aria-label="Cancellation feedback"
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              placeholder={FEEDBACK_PLACEHOLDER}
              className="min-h-24 resize-none"
            />
          </div>

          <DialogFooter className="mx-0 mb-0 flex-col gap-3 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <ClockIcon className="size-3.5" />
              Billing stays active
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" autoFocus onClick={() => setOpen(false)}>
                Keep plan
              </Button>
              <Button
                disabled={selectedReasonIds.length === 0}
                onClick={() => setOpen(false)}
              >
                Cancel plan
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </main>
  )
}

export default DialogCancelPlanSurveyBlock
