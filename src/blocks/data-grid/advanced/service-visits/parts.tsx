import {
  CalendarClockIcon,
  CheckIcon,
  CircleAlertIcon,
  ClockIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import { DAYS, STATUS_META, coverage, formatRange } from "./data"
import type { Site, VisitStatus } from "./data"

const ICONS: Record<string, LucideIcon> = {
  check: CheckIcon,
  calendar: CalendarClockIcon,
  alert: CircleAlertIcon,
  clock: ClockIcon,
  dash: MinusIcon,
}

export function SiteCell({ site }: { site: Site }) {
  return (
    <div className="flex min-w-0 flex-col">
      <span className="text-foreground truncate text-sm font-medium">
        {site.name}
      </span>
      <span className="text-muted-foreground truncate text-xs">
        {site.manager} · {site.vendor}
      </span>
    </div>
  )
}

export function DayCell({
  status,
  label,
  onOpen,
}: {
  status: VisitStatus
  label: string
  onOpen: () => void
}) {
  const meta = STATUS_META[status]
  const Icon = ICONS[meta.icon]

  if (status === "none") {
    return <span className="text-muted-foreground/20 text-xs">·</span>
  }

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        onOpen()
      }}
      aria-label={`${label}: ${meta.label}`}
      className={cn(
        "mx-auto flex size-6 items-center justify-center rounded-sm border transition-colors hover:brightness-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        meta.cell,
      )}
    >
      <Icon className="size-3" />
    </button>
  )
}

export function CoverageCell({ site }: { site: Site }) {
  const { done, missed, due, tone } = coverage(site)
  const percent = Math.min(100, (done / site.required) * 100)

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="tabular-nums">
          {done}/{site.required}
        </span>
        <span
          className={cn(
            "truncate text-[11px]",
            tone === "destructive"
              ? "text-destructive"
              : tone === "warning"
                ? "text-warning-foreground"
                : "text-success-foreground",
          )}
        >
          {site.note}
        </span>
      </div>
      <div className="bg-muted h-1 w-full overflow-hidden rounded-full">
        <div
          className={cn(
            "h-full rounded-full",
            tone === "destructive"
              ? "bg-destructive"
              : tone === "warning"
                ? "bg-warning"
                : "bg-success",
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
      {(missed > 0 || due > 0 || done < site.required) && (
        <span className="text-muted-foreground text-[10px] tabular-nums">
          {missed > 0
            ? `${missed} missed`
            : due > 0
              ? `${due} open`
              : `${site.required - done} to cover`}
        </span>
      )}
    </div>
  )
}

export function VisitLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px]">
      {(["done", "due", "missed", "awaiting"] as VisitStatus[]).map(
        (status) => {
          const meta = STATUS_META[status]
          const Icon = ICONS[meta.icon]
          return (
            <span key={status} className="flex items-center gap-1">
              <span
                className={cn(
                  "flex size-4 items-center justify-center rounded-sm border",
                  meta.cell,
                )}
              >
                <Icon className="size-2.5" />
              </span>
              {meta.label}
            </span>
          )
        },
      )}
    </div>
  )
}

export function SiteSheet({
  site,
  open,
  onOpenChange,
}: {
  site: Site | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!site) return null
  const { done, missed, due } = coverage(site)
  const history = site.visits
    .map((status, index) => ({ status, day: DAYS[index] }))
    .filter((entry) => entry.status !== "none")

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{site.name}</SheetTitle>
          <SheetDescription>
            {site.manager} · {site.vendor} · {formatRange(DAYS)}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4 px-4 pb-6">
          <div className="grid grid-cols-3 gap-2 text-sm">
            {[
              { label: "Done", value: done },
              { label: "Open", value: due },
              { label: "Missed", value: missed },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border p-2.5">
                <div className="text-muted-foreground text-[11px]">
                  {item.label}
                </div>
                <div className="font-semibold tabular-nums">{item.value}</div>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "rounded-lg border px-3 py-2 text-sm",
              missed > 0
                ? "border-destructive/25 bg-destructive/5 text-destructive"
                : due > 0
                  ? "border-warning/25 bg-warning/5 text-warning-foreground"
                  : "border-success/25 bg-success/5 text-success-foreground",
            )}
          >
            {site.note}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Visit history</div>
              <span className="text-muted-foreground text-[11px]">
                {history.length} visits
              </span>
            </div>
            <ul className="mt-2 flex flex-col gap-1.5">
              {history.map((entry) => {
                const meta = STATUS_META[entry.status]
                return (
                  <li
                    key={entry.day.iso}
                    className="flex items-center justify-between gap-3 rounded-lg border px-2.5 py-2"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="text-muted-foreground w-14 shrink-0 text-xs tabular-nums">
                        {entry.day.weekday} {entry.day.day}
                      </span>
                      <div className="min-w-0">
                        <div className="truncate text-sm">{site.service}</div>
                        <div className="text-muted-foreground truncate text-[11px]">
                          {site.vendor}
                        </div>
                      </div>
                    </div>
                    <Badge variant={meta.variant} size="sm">
                      {meta.label}
                    </Badge>
                  </li>
                )
              })}
            </ul>
          </div>

          <Button
            className="w-full"
            onClick={() =>
              toast("Visit requested", {
                description: `${site.service} for ${site.name} · ${site.vendor}`,
              })
            }
          >
            <PlusIcon />
            Book another visit
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
