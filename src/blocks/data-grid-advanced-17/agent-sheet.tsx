import { useEffect, useState } from "react"
import { MailIcon, StickyNoteIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
import { Progress } from "@/components/ui/progress"
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
import { Textarea } from "@/components/ui/textarea"
import { cn } from "cn"

import { csatPercent, formatMinutes, qaLabel, qaTone } from "./data"
import type { Agent } from "./data"
import { AgentAvatar, CoachingBadge } from "./parts"

const FOCUS_OPTIONS = ["QA accuracy", "CSAT recovery", "SLA adherence", "Reply speed"]

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="bg-muted/25 rounded-lg border p-2.5">
      <div className="text-muted-foreground text-xs">{label}</div>
      <div className="mt-0.5 text-lg font-semibold tabular-nums">{value}</div>
      <div className="text-muted-foreground text-xs">{note}</div>
    </div>
  )
}

function BreakdownBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span>{label}</span>
        <span className="font-medium tabular-nums">{value}%</span>
      </div>
      <Progress value={value} className="h-1.5" />
    </div>
  )
}

export function AgentSheet({
  agent,
  open,
  onOpenChange,
}: {
  agent: Agent | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!agent) return null

  const total = agent.csat[0] + agent.csat[1] + agent.csat[2]
  const good = (agent.csat[0] / total) * 100
  const neutral = good + (agent.csat[1] / total) * 100
  const accuracy = Math.min(99, agent.qa + 2)
  const tone = Math.max(50, agent.qa - 1)
  const resolution = Math.max(50, agent.qa - 4)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="gap-3 border-b pb-4">
          <div className="flex items-center gap-3">
            <AgentAvatar agent={agent} className="size-10" />
            <div className="min-w-0">
              <SheetTitle className="truncate">{agent.name}</SheetTitle>
              <SheetDescription className="truncate">{agent.email}</SheetDescription>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" size="lg">
              {agent.team}
            </Badge>
            <span
              className={cn(
                "inline-flex size-7 items-center justify-center rounded-full border-2 text-[10px] font-semibold tabular-nums",
                qaTone(agent.qa),
              )}
            >
              {agent.qa}
            </span>
            <span className="text-muted-foreground text-xs">{qaLabel(agent.qa)} QA</span>
            <CoachingBadge status={agent.coaching} />
          </div>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="CSAT" value={`${csatPercent(agent).toFixed(0)}%`} note={`${agent.csat[0]} of ${total} rated`} />
            <Stat label="SLA" value={`${agent.sla}%`} note="within target" />
            <Stat label="First reply" value={formatMinutes(agent.firstReply)} note="median" />
            <Stat label="Resolution" value={formatMinutes(agent.resolve)} note="median" />
          </div>

          <div className="rounded-lg border p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium">Four-week reviews</span>
              <span className="text-muted-foreground text-xs">QA · CSAT · SLA</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {agent.weeks.map((week) => (
                <div key={week.week} className="grid grid-cols-[52px_1fr] items-center gap-2">
                  <span className="text-muted-foreground text-xs">{week.week}</span>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-xs font-medium tabular-nums">{week.qa}</div>
                      <Progress value={week.qa} className="mt-1 h-1" />
                    </div>
                    <div>
                      <div className="text-xs font-medium tabular-nums">{week.csat.toFixed(0)}%</div>
                      <Progress value={week.csat} className="mt-1 h-1" />
                    </div>
                    <div>
                      <div className="text-xs font-medium tabular-nums">{week.sla}%</div>
                      <Progress value={week.sla} className="mt-1 h-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <div className="mb-3 text-sm font-medium">QA breakdown</div>
            <div className="flex flex-col gap-2.5">
              <BreakdownBar label="Accuracy" value={accuracy} />
              <BreakdownBar label="Tone & empathy" value={tone} />
              <BreakdownBar label="Resolution" value={resolution} />
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-3">
            <div
              className="relative size-24 shrink-0 rounded-full"
              style={{
                background: `conic-gradient(var(--success) 0 ${good}%, var(--warning) ${good}% ${neutral}%, var(--info) ${neutral}% 100%)`,
              }}
            >
              <div className="bg-background absolute inset-2 flex flex-col items-center justify-center rounded-full">
                <span className="text-lg font-semibold tabular-nums">
                  {csatPercent(agent).toFixed(0)}%
                </span>
                <span className="text-muted-foreground text-[10px]">CSAT</span>
              </div>
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium">Customer sentiment</div>
              <div className="text-muted-foreground text-xs">
                {agent.csat[0]} positive · {agent.csat[1]} neutral · {agent.csat[2]} negative
              </div>
              <div className="text-muted-foreground mt-1 text-xs">
                Reopen rate {(agent.reopens / agent.reopenTotal * 100).toFixed(1)}% of{" "}
                {agent.reopenTotal}.
              </div>
            </div>
          </div>

          <div>
            <div className="mb-2 text-sm font-medium">Coaching focus</div>
            <div className="bg-muted/25 rounded-lg border p-3 text-sm">{agent.focus}</div>
          </div>

          <div>
            <div className="mb-2 text-sm font-medium">Review notes</div>
            <div className="flex flex-col gap-2">
              {agent.notes.map((note) => (
                <div key={`${note.date}-${note.label}`} className="rounded-lg border p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium">{note.label}</span>
                    <span className="text-muted-foreground text-xs">{note.date}</span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-xs">{note.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function CoachingDialog({
  agents,
  open,
  onOpenChange,
  onStart,
}: {
  agents: Agent[]
  open: boolean
  onOpenChange: (open: boolean) => void
  onStart: (notes: string, focus: string) => void
}) {
  const [notes, setNotes] = useState("")
  const [focus, setFocus] = useState(FOCUS_OPTIONS[0]!)

  useEffect(() => {
    if (!open) return
    setNotes("")
    setFocus(FOCUS_OPTIONS[0]!)
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Start coaching</DialogTitle>
          <DialogDescription>
            {agents.length === 1 ? agents[0]!.name : `${agents.length} agents`} ·
            notes are shared in the next one-to-one.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {agents.map((agent) => (
              <Badge key={agent.id} variant="outline" size="lg" className="gap-1.5">
                <AgentAvatar agent={agent} className="size-4" />
                {agent.name}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="focus" className="text-sm font-medium">
              Focus area
            </label>
            <Select value={focus} onValueChange={setFocus}>
              <SelectTrigger id="focus" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FOCUS_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="coaching-notes" className="text-sm font-medium">
              Coaching notes
            </label>
            <Textarea
              id="coaching-notes"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="What to work on, examples, and the follow-up date..."
              rows={4}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button disabled={notes.trim() === ""} onClick={() => onStart(notes, focus)}>
            Start coaching
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
