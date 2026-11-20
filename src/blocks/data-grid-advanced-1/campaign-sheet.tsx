import { Badge } from "@/components/reui-unbound/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import { MARKETS } from "./data"
import type { Campaign } from "./data"
import {
  CampaignStatusBadge,
  ChannelMark,
  DeltaText,
  Sparkline,
  campaignCpa,
  campaignDelta,
  campaignRevenue,
  formatCompactUsd,
  formatNumber,
  formatPercent,
  formatUsd,
} from "./parts"

function Metric({
  label,
  children,
  note,
}: {
  label: string
  children: React.ReactNode
  note?: React.ReactNode
}) {
  return (
    <div className="rounded-lg border p-3">
      <div className="text-muted-foreground text-xs font-medium">{label}</div>
      <div className="mt-1 text-lg font-semibold tabular-nums">{children}</div>
      {note && <div className="mt-0.5 text-xs">{note}</div>}
    </div>
  )
}

const BREAKDOWN = [
  { key: "Media", share: 0.82, className: "bg-primary" },
  { key: "Creative production", share: 0.11, className: "bg-info" },
  { key: "Measurement & tools", share: 0.07, className: "bg-muted-foreground" },
]

export function CampaignSheet({
  campaign,
  open,
  onOpenChange,
}: {
  campaign: Campaign | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        {campaign && (
          <>
            <SheetHeader className="gap-3 border-b pb-4">
              <div className="flex items-start gap-3">
                <ChannelMark channel={campaign.channel} />
                <div className="min-w-0">
                  <SheetTitle className="truncate">{campaign.name}</SheetTitle>
                  <SheetDescription className="truncate">
                    {campaign.channel} &middot; {campaign.objective} &middot;{" "}
                    {MARKETS[campaign.market]?.label}
                  </SheetDescription>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <CampaignStatusBadge status={campaign.status} />
                <Badge variant="outline">{campaign.id.toUpperCase()}</Badge>
                <Badge variant="secondary">
                  Target {campaign.targetRoas.toFixed(1)}x
                </Badge>
              </div>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-4 pb-6">
              <div className="grid grid-cols-2 gap-3">
                <Metric
                  label="Spend"
                  note={`of ${formatUsd(campaign.budget)} budget`}
                >
                  {formatUsd(campaign.spend)}
                </Metric>
                <Metric
                  label="ROAS"
                  note={
                    <span
                      className={cn(
                        campaign.roas >= campaign.targetRoas
                          ? "text-success-foreground"
                          : "text-destructive",
                      )}
                    >
                      {campaign.roas >= campaign.targetRoas
                        ? "Above"
                        : "Below"}{" "}
                      target of {campaign.targetRoas.toFixed(1)}x
                    </span>
                  }
                >
                  {campaign.roas.toFixed(1)}x
                </Metric>
                <Metric
                  label="Conversions"
                  note={<DeltaText value={campaignDelta(campaign)} />}
                >
                  {formatNumber(campaign.conversions)}
                </Metric>
                <Metric
                  label="CPA"
                  note={
                    <span className="text-muted-foreground">
                      {formatUsd(campaignRevenue(campaign) / campaign.conversions)}{" "}
                      revenue / conv.
                    </span>
                  }
                >
                  ${campaignCpa(campaign).toFixed(2)}
                </Metric>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="text-sm font-medium">Conversions trend</div>
                  <span className="text-muted-foreground text-xs">
                    Last 14 days
                  </span>
                </div>
                <div className="rounded-lg border p-3">
                  <Sparkline
                    points={campaign.spark}
                    className="text-info h-20 w-full"
                    stretch
                  />
                  <div className="text-muted-foreground mt-2 flex justify-between text-[10px]">
                    <span>Nov 5</span>
                    <span>Nov 12</span>
                    <span>Nov 18</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium">Spend breakdown</div>
                <div className="flex flex-col gap-2.5">
                  {BREAKDOWN.map((entry) => (
                    <div key={entry.key} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-muted-foreground">
                          {entry.key}
                        </span>
                        <span className="font-medium tabular-nums">
                          {formatCompactUsd(campaign.spend * entry.share)}
                        </span>
                      </div>
                      <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                        <div
                          className={cn("h-full rounded-full", entry.className)}
                          style={{ width: `${entry.share * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <dl className="grid gap-2 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Impressions</dt>
                  <dd className="tabular-nums">
                    {formatNumber(campaign.impressions)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Click-through rate</dt>
                  <dd className="tabular-nums">
                    {((campaign.clicks / campaign.impressions) * 100).toFixed(2)}%
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">New buyers</dt>
                  <dd className="tabular-nums">
                    {formatPercent(campaign.newBuyerShare).replace("+", "")} of
                    conversions
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Revenue</dt>
                  <dd className="tabular-nums">
                    {formatUsd(campaignRevenue(campaign))}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
