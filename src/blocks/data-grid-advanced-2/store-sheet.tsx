import { Badge } from "@/components/reui-unbound/badge"
import { IconTile } from "@/components/reui-unbound/icon-tile"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { StoreIcon } from "lucide-react"
import { cn } from "cn"

import {
  FY_LABEL,
  attainment,
  formatCompact,
  formatPercent,
  formatUsd,
  regionMeta,
} from "./data"
import type { Store } from "./data"
import { TrendBars } from "./parts"

export function StoreSheet({
  store,
  open,
  onOpenChange,
}: {
  store: Store | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const region = store ? regionMeta(store.region) : null

  const lines = store
    ? [
        { label: "Net sales", amount: store.sales, strong: true },
        { label: "Cost of goods", amount: -store.costs.cogs },
        { label: "Payroll", amount: -store.costs.payroll },
        { label: "Occupancy", amount: -store.costs.occupancy },
        { label: "Marketing", amount: -store.costs.marketing },
        { label: "Other operating", amount: -store.costs.other },
        { label: "Operating profit", amount: store.profit, strong: true },
      ]
    : []

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        {store && region && (
          <>
            <SheetHeader className="gap-3 border-b pb-4">
              <div className="flex items-start gap-3">
                <IconTile variant="soft" size="sm" className="rounded-md">
                  <StoreIcon />
                </IconTile>
                <div className="min-w-0">
                  <SheetTitle className="truncate">{store.name}</SheetTitle>
                  <SheetDescription className="truncate">
                    {store.city}, {store.country} &middot; {FY_LABEL}
                  </SheetDescription>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-1.5">
                  <span className={cn("size-1.5 rounded-full", region.dot)} />
                  {region.label}
                </Badge>
                <Badge variant="secondary">{store.format}</Badge>
                <Badge variant="outline">Rank #{store.rank}</Badge>
              </div>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-4 pb-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border p-3">
                  <div className="text-muted-foreground text-xs font-medium">
                    Net sales
                  </div>
                  <div className="mt-1 text-lg font-semibold tabular-nums">
                    {formatCompact(store.sales)}
                  </div>
                  <div className="text-muted-foreground mt-0.5 text-xs">
                    {attainment(store).toFixed(0)}% of{" "}
                    {formatCompact(store.plan)} plan
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-muted-foreground text-xs font-medium">
                    Operating profit
                  </div>
                  <div
                    className={cn(
                      "mt-1 text-lg font-semibold tabular-nums",
                      store.profit < 0 && "text-destructive",
                    )}
                  >
                    {formatCompact(store.profit)}
                  </div>
                  <div className="text-muted-foreground mt-0.5 text-xs">
                    {store.margin.toFixed(1)}% margin
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="text-sm font-medium">Monthly net sales</div>
                  <span className="text-muted-foreground text-xs">
                    {formatPercent(store.yoy, 1)} YoY
                  </span>
                </div>
                <div className="rounded-lg border p-3">
                  <TrendBars values={store.monthly} />
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium">P&amp;L lines</div>
                <div className="overflow-hidden rounded-lg border">
                  {lines.map((line, index) => (
                    <div
                      key={line.label}
                      className={cn(
                        "flex items-center justify-between gap-3 px-3 py-2 text-sm",
                        index !== 0 && "border-t",
                        line.strong && "bg-muted/40 font-medium",
                        line.label === "Operating profit" &&
                          store.profit < 0 &&
                          "text-destructive",
                      )}
                    >
                      <span>{line.label}</span>
                      <span className="flex items-center gap-2 tabular-nums">
                        <span className="text-muted-foreground text-xs">
                          {line.amount >= 0 ? "" : "("}
                          {Math.abs((line.amount / store.sales) * 100).toFixed(0)}
                          %{line.amount >= 0 ? "" : ")"}
                        </span>
                        <span className="w-24 text-right">
                          {line.amount < 0
                            ? `(${formatCompact(Math.abs(line.amount))})`
                            : formatCompact(line.amount)}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground text-xs">
                {formatUsd(store.sales)} net sales across {store.format.toLowerCase()}{" "}
                doors. Cost lines are demo values derived per store.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border p-3">
                  <div className="text-muted-foreground text-xs">Sales per sq ft</div>
                  <div className="mt-1 font-medium tabular-nums">
                    ${Math.round(store.sales / 18_000)}
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-muted-foreground text-xs">
                    Payroll ratio
                  </div>
                  <div className="mt-1 font-medium tabular-nums">
                    {((store.costs.payroll / store.sales) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
