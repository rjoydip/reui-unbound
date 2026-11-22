import { MailIcon, StickyNoteIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Progress } from "@/components/ui/progress"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import {
  OWNER_BY_ID,
  SIGNAL_META,
  fitLabel,
  fitTier,
  headcountLabel,
  headcountTrend,
  initials,
} from "./data"
import type { Prospect } from "./data"
import {
  CompanyIcon,
  MiniBars,
  SIGNAL_ICON,
  StatusBadge,
} from "./parts"

const TIER_COLOR = {
  high: "var(--success)",
  medium: "var(--warning)",
  low: "var(--destructive)",
} as const

const EVENT_COLOR = {
  hiring: "bg-info",
  funding: "bg-success",
  tech: "bg-warning",
  note: "bg-muted-foreground",
} as const

function Factor({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span>{label}</span>
        <span className="font-medium tabular-nums">{value}</span>
      </div>
      <Progress value={value} className="h-1.5" />
    </div>
  )
}

export function CompanySheet({
  prospect,
  open,
  onOpenChange,
}: {
  prospect: Prospect | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!prospect) return null

  const tier = fitTier(prospect.fit)
  const owner = prospect.ownerId ? OWNER_BY_ID[prospect.ownerId] : null
  const up = prospect.growth >= 0
  const signalStrength = prospect.signals.length
    ? Math.min(96, 52 + prospect.signals.length * 14)
    : 24
  const techFit = prospect.signals.some((signal) => signal.kind === "tech") ? 88 : 56

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="gap-3 border-b pb-4">
          <div className="flex items-center gap-3">
            <CompanyIcon industry={prospect.industry} size="xs" />
            <div className="min-w-0">
              <SheetTitle className="truncate">{prospect.name}</SheetTitle>
              <SheetDescription className="truncate">
                {prospect.hq} · {prospect.website}
              </SheetDescription>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={prospect.status} />
            <Badge variant="outline" size="lg">
              {prospect.industry}
            </Badge>
            <span className="text-muted-foreground text-xs">
              {owner ? `Owner ${owner.name}` : "Unassigned"}
            </span>
          </div>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4">
          <div className="flex items-center gap-4 rounded-lg border p-3">
            <div
              className="relative size-20 shrink-0 rounded-full"
              style={{
                background: `conic-gradient(${TIER_COLOR[tier]} ${prospect.fit}%, var(--muted) 0)`,
              }}
            >
              <div className="bg-background absolute inset-2 flex flex-col items-center justify-center rounded-full">
                <span className="text-xl font-semibold tabular-nums">{prospect.fit}</span>
                <span className="text-muted-foreground text-[10px]">ICP fit</span>
              </div>
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium">{fitLabel(prospect.fit)} fit</div>
              <div className="text-muted-foreground text-xs">
                {headcountLabel(prospect.headcount)} employees ·{" "}
                <span className={cn(up ? "text-success-foreground" : "text-destructive")}>
                  {up ? "+" : ""}
                  {prospect.growth}%
                </span>{" "}
                headcount
              </div>
              <div className="mt-2">
                <MiniBars values={headcountTrend(prospect)} up={up} />
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <div className="mb-3 text-sm font-medium">Why this fits</div>
            <div className="flex flex-col gap-2.5">
              <Factor label="Industry" value={Math.min(98, prospect.fit + 7)} />
              <Factor label="Company size" value={Math.min(96, prospect.fit + 3)} />
              <Factor label="Buying signals" value={signalStrength} />
              <Factor label="Tech overlap" value={techFit} />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Signals</span>
              <span className="text-muted-foreground text-xs">
                {prospect.signals.length} active
              </span>
            </div>
            {prospect.signals.length === 0 ? (
              <div className="text-muted-foreground rounded-lg border p-3 text-sm">
                No hiring, funding or technology signal yet.
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {prospect.signals.map((signal) => {
                  const Icon = SIGNAL_ICON[signal.kind]
                  return (
                    <div key={signal.label} className="flex items-start gap-2.5 rounded-lg border p-3">
                      <span className="bg-muted mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md">
                        <Icon className="text-muted-foreground size-3.5" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-medium">{signal.label}</span>
                          <Badge variant={SIGNAL_META[signal.kind].variant} size="xs">
                            {SIGNAL_META[signal.kind].label}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mt-0.5 text-xs">{signal.detail}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div>
            <div className="mb-2 text-sm font-medium">Contacts</div>
            <div className="flex flex-col gap-2">
              {prospect.contacts.map((contact) => (
                <div key={contact.email} className="flex items-center gap-2.5 rounded-lg border p-3">
                  <Avatar className="size-8">
                    <AvatarFallback className="text-[10px] font-medium">
                      {initials(contact.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{contact.name}</div>
                    <div className="text-muted-foreground truncate text-xs">{contact.title}</div>
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={`Email ${contact.name}`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <MailIcon className="size-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-sm font-medium">Timeline</div>
            <div className="flex flex-col">
              {prospect.timeline.map((event, index) => {
                const Icon = event.kind === "note" ? StickyNoteIcon : SIGNAL_ICON[event.kind]
                return (
                  <div key={`${event.date}-${event.label}`} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span
                        className={cn(
                          "mt-1 size-2 rounded-full",
                          EVENT_COLOR[event.kind],
                        )}
                      />
                      {index < prospect.timeline.length - 1 && (
                        <span className="bg-border w-px flex-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-1.5">
                        <Icon className="text-muted-foreground size-3.5" />
                        <span className="text-sm font-medium">{event.label}</span>
                        <span className="text-muted-foreground text-xs">{event.date}</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">{event.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <p className="text-muted-foreground text-xs">
            Fit score is a fixed demo heuristic: industry, size and active
            signals. Saved lists and owner assignment are local state.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
