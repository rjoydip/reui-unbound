import {
  AppleIcon,
  BoxIcon,
  BriefcaseIcon,
  CameraIcon,
  CopyIcon,
  DownloadIcon,
  EyeIcon,
  HeartIcon,
  MoonIcon,
  MoreHorizontalIcon,
  Music2Icon,
  PauseIcon,
  PinIcon,
  PlayIcon,
  SearchIcon,
  XIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/reui-unbound/badge"
import type { DataGridFeatures } from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import {
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/reui-unbound/data-grid/data-grid-table"
import { IconTile } from "@/components/reui-unbound/icon-tile"
import type {
  FilterField,
  FilterNode,
  FilterQuery,
  FilterRule,
} from "@/components/reui-unbound/filters/filters-types"
import { cn } from "cn"

import { MARKETS } from "./data"
import type {
  Campaign,
  CampaignChannel,
  CampaignObjective,
  CampaignStatus,
} from "./data"

const CHANNEL_ICONS: Record<CampaignChannel, LucideIcon> = {
  Google: SearchIcon,
  Meta: CameraIcon,
  TikTok: Music2Icon,
  LinkedIn: BriefcaseIcon,
  Pinterest: PinIcon,
}

export function ChannelMark({ channel }: { channel: CampaignChannel }) {
  const Icon = CHANNEL_ICONS[channel]

  return (
    <IconTile variant="soft" size="sm" className="text-muted-foreground rounded-md">
      <Icon />
    </IconTile>
  )
}

const CAMPAIGN_MARK_ICONS: Record<string, LucideIcon> = {
  "cmp-01": AppleIcon,
  "cmp-02": AppleIcon,
  "cmp-03": HeartIcon,
  "cmp-04": XIcon,
  "cmp-05": MoonIcon,
  "cmp-06": BoxIcon,
  "cmp-07": XIcon,
  "cmp-08": AppleIcon,
  "cmp-09": AppleIcon,
}

export function CampaignMark({ campaign }: { campaign: Campaign }) {
  const Icon = CAMPAIGN_MARK_ICONS[campaign.id]

  if (!Icon && campaign.id !== "cmp-10") {
    return <ChannelMark channel={campaign.channel} />
  }

  return (
    <IconTile variant="soft" size="sm" className="text-muted-foreground rounded-md">
      {Icon ? (
        <Icon />
      ) : (
        <span className="text-info text-sm leading-none font-bold">f</span>
      )}
    </IconTile>
  )
}

export function MarketTag({ market }: { market: string }) {
  return (
    <span className="text-muted-foreground inline-flex items-center gap-1.5 text-xs">
      <img
        src={`https://flagcdn.com/w20/${market.toLowerCase()}.png`}
        alt=""
        aria-hidden
        className="size-3.5 rounded-full object-cover"
      />
      <span className="font-medium">{market}</span>
    </span>
  )
}

export function CampaignCell({ campaign }: { campaign: Campaign }) {
  return (
    <div className="flex items-center gap-2.5">
      <CampaignMark campaign={campaign} />
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">
          {campaign.name}
        </div>
        <div className="flex min-w-0 items-center gap-1.5">
          <MarketTag market={campaign.market} />
          <span className="text-muted-foreground/60 text-xs">&middot;</span>
          <span className="text-muted-foreground truncate text-xs">
            {campaign.objective === "Prospecting"
              ? "Prospect"
              : campaign.objective}
          </span>
        </div>
      </div>
    </div>
  )
}

const STATUS_VARIANTS: Record<
  CampaignStatus,
  "success-light" | "warning-light" | "invert-light"
> = {
  Live: "success-light",
  Limited: "warning-light",
  Paused: "invert-light",
}

export function CampaignStatusBadge({ status }: { status: CampaignStatus }) {
  return (
    <Badge variant={STATUS_VARIANTS[status]} size="lg" className="font-medium">
      <span
        className={cn(
          "size-1.5 rounded-full",
          status === "Live"
            ? "bg-success"
            : status === "Limited"
              ? "bg-warning"
              : "bg-muted-foreground",
        )}
      />
      {status}
    </Badge>
  )
}

export function DeltaText({
  value,
  inverse = false,
  className,
}: {
  value: number
  inverse?: boolean
  className?: string
}) {
  const positive = inverse ? value <= 0 : value >= 0

  return (
    <span
      className={cn(
        "text-xs tabular-nums",
        positive ? "text-success-foreground" : "text-destructive",
        className,
      )}
    >
      {formatPercent(value, 1)}
    </span>
  )
}

export function SpendCell({ campaign }: { campaign: Campaign }) {
  const share = Math.round((campaign.spend / campaign.budget) * 100)

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className="font-medium tabular-nums">
        {formatCompactUsd(campaign.spend)}
      </span>
      <span className="text-muted-foreground text-xs tabular-nums">
        {share}% of {formatCompactUsd(campaign.budget)}
      </span>
    </div>
  )
}

export function ConversionsCell({ campaign }: { campaign: Campaign }) {
  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className="font-medium tabular-nums">
        {formatNumber(campaign.conversions)}
      </span>
      <DeltaText value={campaignDelta(campaign)} />
    </div>
  )
}

export function CpaCell({ campaign }: { campaign: Campaign }) {
  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className="font-medium tabular-nums">
        ${campaignCpa(campaign).toFixed(2)}
      </span>
      <DeltaText value={cpaDelta(campaign)} inverse />
    </div>
  )
}

export function Sparkline({
  points,
  className,
  area = true,
  stretch = false,
}: {
  points: number[]
  className?: string
  area?: boolean
  stretch?: boolean
}) {
  if (points.length < 2) return null

  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const coords = points.map((value, index) => {
    const x = (index / (points.length - 1)) * 96
    const y = 26 - ((value - min) / range) * 22
    return [x, y] as const
  })
  const line = coords.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ")
  const fill = `0,28 ${line} 96,28`

  return (
    <svg
      viewBox="0 0 96 28"
      className={cn("h-7 w-24 overflow-visible", className)}
      fill="none"
      preserveAspectRatio={stretch ? "none" : undefined}
      aria-hidden
    >
      {area && (
        <polygon points={fill} fill="currentColor" opacity={0.08} />
      )}
      <polyline
        points={line}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle
        cx={coords[coords.length - 1][0]}
        cy={coords[coords.length - 1][1]}
        r={1.8}
        fill="currentColor"
      />
    </svg>
  )
}

export function TrendCell({ campaign }: { campaign: Campaign }) {
  const up =
    campaign.spark[campaign.spark.length - 1] >= campaign.spark[0]

  return (
    <Sparkline
      points={campaign.spark}
      className={up ? "text-info" : "text-destructive"}
    />
  )
}

export function RoasCell({ campaign }: { campaign: Campaign }) {
  const max = Math.max(campaign.targetRoas * 1.7, campaign.roas * 1.15, 1)
  const width = Math.min(100, (campaign.roas / max) * 100)
  const target = Math.min(100, (campaign.targetRoas / max) * 100)
  const onTarget = campaign.roas >= campaign.targetRoas

  return (
    <div className="flex items-center justify-end gap-2.5">
      <div className="bg-muted relative h-1.5 w-14 shrink-0 overflow-visible rounded-full">
        <div
          className={cn(
            "absolute inset-y-0 left-0 rounded-full",
            onTarget ? "bg-primary" : "bg-destructive",
          )}
          style={{ width: `${width}%` }}
        />
        <span
          className="bg-foreground/50 absolute -top-1 h-3.5 w-px"
          style={{ left: `${target}%` }}
          title={`Target ${campaign.targetRoas.toFixed(1)}x`}
        />
      </div>
      <span className="w-10 text-right font-medium tabular-nums">
        {campaign.roas.toFixed(1)}x
      </span>
    </div>
  )
}

export function NewBuyerCell({ campaign }: { campaign: Campaign }) {
  return (
    <div className="flex items-center justify-end gap-2.5">
      <div className="bg-muted h-1.5 w-14 shrink-0 overflow-hidden rounded-full">
        <div
          className="bg-primary h-full rounded-full"
          style={{ width: `${campaign.newBuyerShare}%` }}
        />
      </div>
      <span className="w-9 text-right tabular-nums">
        {campaign.newBuyerShare}%
      </span>
    </div>
  )
}

export const CHANNELS: CampaignChannel[] = [
  "Google",
  "Meta",
  "TikTok",
  "LinkedIn",
  "Pinterest",
]

export const STATUSES: CampaignStatus[] = ["Live", "Limited", "Paused"]

export const OBJECTIVES: CampaignObjective[] = [
  "Prospecting",
  "Retargeting",
  "Brand Search",
  "Winback",
]

export const CAMPAIGN_FIELDS: FilterField[] = [
  {
    id: "channel",
    label: "Channel",
    type: "select",
    options: CHANNELS.map((channel) => ({ value: channel, label: channel })),
  },
  {
    id: "status",
    label: "Status",
    type: "select",
    options: STATUSES.map((status) => ({ value: status, label: status })),
  },
  {
    id: "objective",
    label: "Objective",
    type: "select",
    options: OBJECTIVES.map((objective) => ({
      value: objective,
      label: objective,
    })),
  },
  { id: "roas", label: "ROAS", type: "number", placeholder: "4.3" },
  {
    id: "market",
    label: "Market",
    type: "select",
    options: Object.entries(MARKETS).map(([value, market]) => ({
      value,
      label: market.label,
    })),
  },
]

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function formatUsd(amount: number) {
  return usd.format(amount)
}

export function formatCompactUsd(amount: number) {
  if (Math.abs(amount) >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1)}M`
  if (Math.abs(amount) >= 1_000) return `$${(amount / 1_000).toFixed(1)}K`
  return `$${amount.toFixed(0)}`
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value)
}

export function formatPercent(value: number, digits = 0) {
  return `${value > 0 ? "+" : ""}${value.toFixed(digits)}%`
}

export function campaignCpa(campaign: Campaign) {
  return campaign.spend / campaign.conversions
}

export function campaignRevenue(campaign: Campaign) {
  return campaign.spend * campaign.roas
}

export function campaignDelta(campaign: Campaign) {
  return (
    ((campaign.conversions - campaign.previousConversions) /
      campaign.previousConversions) *
    100
  )
}

export function cpaDelta(campaign: Campaign) {
  const previousCpa = campaign.spend / campaign.previousConversions
  return ((campaignCpa(campaign) - previousCpa) / previousCpa) * 100
}

export function totals(campaigns: Campaign[]) {
  const spend = campaigns.reduce((sum, campaign) => sum + campaign.spend, 0)
  const budget = campaigns.reduce((sum, campaign) => sum + campaign.budget, 0)
  const conversions = campaigns.reduce(
    (sum, campaign) => sum + campaign.conversions,
    0,
  )
  const previousConversions = campaigns.reduce(
    (sum, campaign) => sum + campaign.previousConversions,
    0,
  )
  const revenue = campaigns.reduce(
    (sum, campaign) => sum + campaignRevenue(campaign),
    0,
  )
  const impressions = campaigns.reduce(
    (sum, campaign) => sum + campaign.impressions,
    0,
  )
  const clicks = campaigns.reduce((sum, campaign) => sum + campaign.clicks, 0)

  return {
    spend,
    budget,
    conversions,
    delta:
      previousConversions === 0
        ? 0
        : ((conversions - previousConversions) / previousConversions) * 100,
    cpa: conversions === 0 ? 0 : spend / conversions,
    roas: spend === 0 ? 0 : revenue / spend,
    ctr: impressions === 0 ? 0 : (clicks / impressions) * 100,
    belowTarget: campaigns.filter(
      (campaign) => campaign.roas < campaign.targetRoas,
    ).length,
  }
}

function ruleMatches(campaign: Campaign, rule: FilterRule) {
  const key = rule.path[0]
  const value = rule.value
  const values = (
    Array.isArray(value) ? value : value === undefined ? [] : [value]
  ).map(String)
  const field =
    key === "roas"
      ? campaign.roas.toFixed(2)
      : String((campaign as unknown as Record<string, unknown>)[key] ?? "")
  const numeric = key === "roas"

  let result = true
  switch (rule.operator) {
    case "is":
    case "eq":
      result = numeric ? Number(field) === Number(values[0]) : field === values[0]
      break
    case "is_not":
    case "neq":
      result = numeric ? Number(field) !== Number(values[0]) : field !== values[0]
      break
    case "is_any_of":
    case "has_any_of":
      result = values.includes(field)
      break
    case "is_none_of":
    case "has_none_of":
      result = !values.includes(field)
      break
    case "contains":
      result = field.toLowerCase().includes((values[0] ?? "").toLowerCase())
      break
    case "gt":
      result = Number(field) > Number(values[0])
      break
    case "gte":
      result = Number(field) >= Number(values[0])
      break
    case "lt":
      result = Number(field) < Number(values[0])
      break
    case "lte":
      result = Number(field) <= Number(values[0])
      break
    case "between": {
      const min = Math.min(Number(values[0]), Number(values[1]))
      const max = Math.max(Number(values[0]), Number(values[1]))
      result = Number(field) >= min && Number(field) <= max
      break
    }
    case "not_between": {
      const min = Math.min(Number(values[0]), Number(values[1]))
      const max = Math.max(Number(values[0]), Number(values[1]))
      result = Number(field) < min || Number(field) > max
      break
    }
    case "empty":
      result = field === ""
      break
    case "not_empty":
      result = field !== ""
      break
    default:
      result = true
  }

  return rule.negated ? !result : result
}

export function matchesCampaignQuery(campaign: Campaign, query: FilterQuery) {
  const walk = (node: FilterNode): boolean => {
    if (node.type === "rule") return ruleMatches(campaign, node)
    if (node.rules.length === 0) return true
    return node.combinator === "or"
      ? node.rules.some(walk)
      : node.rules.every(walk)
  }
  return walk(query)
}

const CSV_COLUMNS = [
  "Campaign",
  "Channel",
  "Market",
  "Objective",
  "Status",
  "Spend",
  "Budget",
  "Conversions",
  "CPA",
  "ROAS",
  "Target ROAS",
  "New buyer share",
]

export function exportCampaigns(
  rows: Campaign[],
  file = "campaign-performance.csv",
) {
  const lines = [
    CSV_COLUMNS,
    ...rows.map((campaign) => [
      campaign.name,
      campaign.channel,
      campaign.market,
      campaign.objective,
      campaign.status,
      campaign.spend.toFixed(2),
      campaign.budget.toFixed(2),
      campaign.conversions,
      campaignCpa(campaign).toFixed(2),
      campaign.roas.toFixed(2),
      campaign.targetRoas.toFixed(2),
      `${campaign.newBuyerShare}%`,
    ]),
  ]

  const csv = lines
    .map((line) =>
      line.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","),
    )
    .join("\n")

  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }))
  const link = document.createElement("a")
  link.href = url
  link.download = file
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)

  toast("Campaigns exported", {
    description: `${rows.length} ${rows.length === 1 ? "row" : "rows"} written to ${file}.`,
  })
}
export function campaignColumns({
  onView,
  onDuplicate,
  onToggleStatus,
}: {
  onView: (campaign: Campaign) => void
  onDuplicate: (campaign: Campaign) => void
  onToggleStatus: (campaign: Campaign) => void
}): ColumnDef<DataGridFeatures, Campaign>[] {
  const right = {
    headerClassName: "text-right [&>div]:justify-end",
    cellClassName: "text-right",
  }

  return [
    {
      id: "select",
      header: () => <DataGridTableRowSelectAll />,
      cell: ({ row }) => <DataGridTableRowSelect row={row} />,
      size: 32,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataGridColumnHeader title="Campaign" column={column} />
      ),
      cell: ({ row }) => <CampaignCell campaign={row.original} />,
      size: 300,
      enableHiding: false,
      meta: { headerTitle: "Campaign" },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataGridColumnHeader title="Status" column={column} />
      ),
      cell: ({ row }) => <CampaignStatusBadge status={row.original.status} />,
      size: 90,
    },
    {
      accessorKey: "spend",
      header: ({ column }) => (
        <DataGridColumnHeader title="Spend" column={column} />
      ),
      cell: ({ row }) => <SpendCell campaign={row.original} />,
      size: 110,
      meta: right,
    },
    {
      accessorKey: "conversions",
      header: ({ column }) => (
        <DataGridColumnHeader title="Conversions" column={column} />
      ),
      cell: ({ row }) => <ConversionsCell campaign={row.original} />,
      size: 100,
      meta: right,
    },
    {
      id: "trend",
      accessorFn: (campaign) => campaign.spark.at(-1) ?? 0,
      header: ({ column }) => (
        <DataGridColumnHeader title="Trend" column={column} />
      ),
      cell: ({ row }) => <TrendCell campaign={row.original} />,
      size: 95,
      meta: right,
    },
    {
      id: "cpa",
      accessorFn: (campaign) => campaignCpa(campaign),
      header: ({ column }) => (
        <DataGridColumnHeader title="CPA" column={column} />
      ),
      cell: ({ row }) => <CpaCell campaign={row.original} />,
      size: 95,
      meta: right,
    },
    {
      accessorKey: "roas",
      header: ({ column }) => (
        <DataGridColumnHeader title="ROAS" column={column} />
      ),
      cell: ({ row }) => <RoasCell campaign={row.original} />,
      size: 90,
      meta: right,
    },
    {
      accessorKey: "newBuyerShare",
      header: ({ column }) => (
        <DataGridColumnHeader title="New Buyers" column={column} />
      ),
      cell: ({ row }) => <NewBuyerCell campaign={row.original} />,
      size: 100,
      meta: right,
    },
    {
      id: "actions",
      header: () => null,
      cell: ({ row }) => (
        <div
          className="flex justify-end"
          onClick={(event) => event.stopPropagation()}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-muted-foreground"
              >
                <MoreHorizontalIcon />
                <span className="sr-only">Open campaign menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel className="font-medium">
                {row.original.name}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => onView(row.original)}>
                <EyeIcon />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => exportCampaigns([row.original], "campaign.csv")}
              >
                <DownloadIcon />
                Export row
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onDuplicate(row.original)}>
                <CopyIcon />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => onToggleStatus(row.original)}>
                {row.original.status === "Paused" ? <PlayIcon /> : <PauseIcon />}
                {row.original.status === "Paused" ? "Resume" : "Pause"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
      size: 40,
      enableSorting: false,
      enableHiding: false,
      meta: { cellClassName: "text-right" },
    },
  ]
}
