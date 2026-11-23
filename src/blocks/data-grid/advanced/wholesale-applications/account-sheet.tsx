import { CircleAlertIcon, DoorOpenIcon, StoreIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { IconTile } from "@/components/kit/icon-tile"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import {
  CHECK_LABELS,
  QUEUES,
  accountChecks,
  formatMoney,
  missingCheckLabels,
  queueOf,
  shortCredit,
} from "./data"
import type { Account } from "./data"
import { CheckDots, DecisionBadge } from "./parts"

export function AccountSheet({
  account,
  open,
  onOpenChange,
  onApprove,
  onHold,
}: {
  account: Account | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onApprove: (account: Account) => void
  onHold: (account: Account) => void
}) {
  const checks = account ? accountChecks(account) : null
  const queue = account ? queueOf(account) : null
  const queueMeta = QUEUES.find((entry) => entry.key === queue)
  const missing = account ? missingCheckLabels(account) : []
  const short = account ? shortCredit(account) : 0

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        {account && checks && (
          <>
            <SheetHeader className="gap-3 border-b pb-4">
              <div className="flex items-start gap-3">
                <IconTile variant="soft" size="sm" className="rounded-md">
                  <StoreIcon />
                </IconTile>
                <div className="min-w-0">
                  <SheetTitle className="truncate">{account.name}</SheetTitle>
                  <SheetDescription className="truncate">
                    {account.city}, {account.country} &middot; buyer{" "}
                    {account.buyer}
                  </SheetDescription>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <DecisionBadge decision={account.decision} />
                <Badge variant="outline">
                  {queueMeta?.label ?? "Approved"}
                </Badge>
                <Badge variant="secondary">
                  {account.doors.length} door
                  {account.doors.length === 1 ? "" : "s"}
                </Badge>
              </div>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-4 pb-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border p-3">
                  <div className="text-muted-foreground text-xs">
                    Credit limit
                  </div>
                  <div className="mt-1 text-lg font-semibold tabular-nums">
                    {formatMoney(account.creditLimit)}
                  </div>
                  <div
                    className={cn(
                      "mt-0.5 text-xs",
                      short > 0
                        ? "text-warning-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {short > 0
                      ? `Short ${formatMoney(short)}`
                      : `Order ${formatMoney(account.orderValue)}`}
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-muted-foreground text-xs">
                    Credit score
                  </div>
                  <div
                    className={cn(
                      "mt-1 text-lg font-semibold tabular-nums",
                      account.creditScore >= 80
                        ? "text-success-foreground"
                        : account.creditScore < 60
                          ? "text-destructive"
                          : undefined,
                    )}
                  >
                    {account.creditScore}
                  </div>
                  <div className="text-muted-foreground mt-0.5 text-xs">
                    Ships {account.ships}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="text-sm font-medium">Onboarding readiness</div>
                  <span className="text-muted-foreground text-xs tabular-nums">
                    {checks.done}/{checks.total} checks &middot;{" "}
                    {Math.round(checks.pct)}%
                  </span>
                </div>
                <div className="bg-muted h-2 overflow-hidden rounded-full">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      checks.pct >= 100
                        ? "bg-success"
                        : checks.pct >= 50
                          ? "bg-warning"
                          : "bg-destructive",
                    )}
                    style={{ width: `${checks.pct}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium">Doors</div>
                <div className="flex flex-col gap-2">
                  {account.doors.map((entry) => {
                    const done = CHECK_LABELS.filter(
                      (check) => entry.checks[check.key],
                    ).length

                    return (
                      <div key={entry.id} className="rounded-lg border p-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-2">
                            <DoorOpenIcon className="text-muted-foreground size-4 shrink-0" />
                            <div className="min-w-0">
                              <div className="truncate text-sm font-medium">
                                {entry.name}
                              </div>
                              <div className="text-muted-foreground truncate text-xs">
                                {entry.city}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={cn(
                                "text-xs tabular-nums",
                                entry.ships.startsWith("In ")
                                  ? "text-warning-foreground font-medium"
                                  : "text-muted-foreground",
                              )}
                            >
                              {entry.ships}
                            </div>
                            <div className="text-muted-foreground text-xs tabular-nums">
                              {done}/4 checks
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <CheckDots checks={entry.checks} />
                          <span className="text-muted-foreground text-[10px]">
                            {done === 4 ? "Door ready" : "Action needed"}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {missing.length > 0 ? (
                <div>
                  <div className="mb-2 text-sm font-medium">Missing docs</div>
                  <ul className="flex flex-col gap-1.5">
                    {missing.map((label) => (
                      <li
                        key={label}
                        className="text-warning-foreground flex items-center gap-2 text-sm"
                      >
                        <CircleAlertIcon className="size-4 shrink-0" />
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="rounded-lg border border-success/20 bg-success/5 p-3 text-sm">
                  Every door has all four onboarding checks.
                </div>
              )}

              <p className="text-muted-foreground text-xs">
                Demo application for {account.buyer}. Approving moves this
                account out of the review queues; holding keeps the ship date
                frozen.
              </p>
            </div>

            <div className="flex items-center gap-2 border-t px-4 py-3">
              <Button
                className="flex-1"
                disabled={account.decision === "Approved"}
                onClick={() => onApprove(account)}
              >
                Approve account
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                disabled={account.decision === "On hold"}
                onClick={() => onHold(account)}
              >
                Put on hold
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
