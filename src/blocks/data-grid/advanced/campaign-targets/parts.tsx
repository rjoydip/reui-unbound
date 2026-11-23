import {
  DownloadIcon,
  EyeIcon,
  HistoryIcon,
  MonitorIcon,
  MoreHorizontalIcon,
  PencilIcon,
  SearchIcon,
  Share2Icon,
  ShoppingBagIcon,
  VideoIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { DataGridFeatures } from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import {
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/kit/data-grid/~data-grid-table"
import { IconTile } from "@/components/kit/icon-tile"
import { cn } from "cn"

import {
  cpaSpread,
  formatMoney,
  formatSpread,
  roasSpread,
  verdict,
} from "./data"
import type { Channel, TargetCampaign, Verdict } from "./data"

const CHANNEL_ICONS: Record<Channel, LucideIcon> = {
  Search: SearchIcon,
  Shopping: ShoppingBagIcon,
  Video: VideoIcon,
  Social: Share2Icon,
  Display: MonitorIcon,
}

export function ChannelCell({ channel }: { channel: Channel }) {
  const Icon = CHANNEL_ICONS[channel]

  return (
    <span className="flex items-center gap-2 text-sm">
      <IconTile variant="soft" size="xs" className="text-muted-foreground rounded">
        <Icon />
      </IconTile>
      <span className="truncate">{channel}</span>
    </span>
  )
}

export function CampaignCell({ campaign }: { campaign: TargetCampaign }) {
  return (
    <div className="min-w-0">
      <div className="text-foreground truncate font-medium">{campaign.name}</div>
      <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
        <span>{campaign.stage}</span>
        {campaign.revisions.length > 0 && (
          <>
            <span aria-hidden>&middot;</span>
            <span className="inline-flex items-center gap-1">
              <HistoryIcon className="size-3" />
              {campaign.revisions.length} revision
              {campaign.revisions.length === 1 ? "" : "s"}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

const VERDICT_VARIANTS: Record<
  Verdict,
  "success-light" | "warning-light" | "destructive-light"
> = {
  "On target": "success-light",
  "At risk": "warning-light",
  Missing: "destructive-light",
}

export function VerdictBadge({ verdict }: { verdict: Verdict }) {
  return (
    <Badge variant={VERDICT_VARIANTS[verdict]} size="sm" className="font-medium">
      <span
        className={cn(
          "size-1.5 rounded-full",
          verdict === "On target"
            ? "bg-success"
            : verdict === "At risk"
              ? "bg-warning"
              : "bg-destructive",
        )}
      />
      {verdict}
    </Badge>
  )
}

export function TargetCell({
  value,
  kind,
}: {
  value: number
  kind: "roas" | "cpa"
}) {
  return (
    <span className="text-muted-foreground text-sm tabular-nums">
      {kind === "roas" ? `${value.toFixed(1)}x` : formatMoney(value)}
    </span>
  )
}

export function ActualCell({
  value,
  kind,
  spread,
}: {
  value: number
  kind: "roas" | "cpa"
  spread: number
}) {
  const tone =
    spread >= 0
      ? "bg-success/10 text-foreground"
      : spread >= -10
        ? "bg-warning/10 text-warning-foreground"
        : "bg-destructive/10 text-destructive"

  return (
    <span
      className={cn(
        "inline-flex min-w-16 justify-end rounded-md px-2 py-1 text-sm font-semibold tabular-nums",
        tone,
      )}
    >
      {kind === "roas" ? `${value.toFixed(2)}x` : formatMoney(value, 2)}
    </span>
  )
}

export function SpreadCell({
  spread,
  label,
}: {
  spread: number
  label: string
}) {
  const positive = spread >= 0
  const width = Math.min(46, Math.abs(spread) * 0.85)

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="bg-muted relative h-1.5 w-20 shrink-0 rounded-full">
        <span className="bg-border absolute inset-y-0 left-1/2 w-px" />
        <span
          className={cn(
            "absolute inset-y-0 rounded-full",
            positive ? "bg-success left-1/2" : "bg-destructive right-1/2",
          )}
          style={{ width: `${width}%` }}
        />
      </div>
      <span
        className={cn(
          "w-10 text-right text-xs font-medium tabular-nums",
          positive ? "text-success-foreground" : "text-destructive",
        )}
      >
        {formatSpread(spread)}
      </span>
      <span className="sr-only">{label}</span>
    </div>
  )
}

export function exportCampaigns(rows: TargetCampaign[]) {
  const lines = [
    [
      "Campaign",
      "Channel",
      "Stage",
      "ROAS target",
      "ROAS actual",
      "ROAS vs target",
      "CPA target",
      "CPA actual",
      "CPA vs target",
      "Verdict",
      "Spend",
    ],
    ...rows.map((campaign) => [
      campaign.name,
      campaign.channel,
      campaign.stage,
      campaign.roasTarget,
      campaign.roasActual,
      `${roasSpread(campaign).toFixed(1)}%`,
      campaign.cpaTarget,
      campaign.cpaActual,
      `${cpaSpread(campaign).toFixed(1)}%`,
      verdict(campaign),
      campaign.spend,
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
  link.download = "campaign-targets.csv"
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)

  toast("Target review exported", {
    description: `${rows.length} ${rows.length === 1 ? "campaign" : "campaigns"} written to campaign-targets.csv.`,
  })
}

export function campaignColumns({
  onEdit,
  onHistory,
}: {
  onEdit: (campaign: TargetCampaign) => void
  onHistory: (campaign: TargetCampaign) => void
}): ColumnDef<DataGridFeatures, TargetCampaign>[] {
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
      accessorKey: "channel",
      header: ({ column }) => (
        <DataGridColumnHeader title="Channel" column={column} />
      ),
      cell: ({ row }) => <ChannelCell channel={row.original.channel} />,
      size: 120,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataGridColumnHeader title="Campaign" column={column} />
      ),
      cell: ({ row }) => <CampaignCell campaign={row.original} />,
      size: 240,
      enableHiding: false,
      meta: { headerTitle: "Campaign" },
    },
    {
      accessorKey: "roasTarget",
      header: ({ column }) => (
        <DataGridColumnHeader title="Target" column={column} />
      ),
      cell: ({ row }) => (
        <TargetCell value={row.original.roasTarget} kind="roas" />
      ),
      size: 80,
      meta: {
        headerTitle: "ROAS target",
        headerClassName: "text-right [&>div]:justify-end border-s border-border/60",
        cellClassName: "text-right border-s border-border/60",
      },
    },
    {
      accessorKey: "roasActual",
      header: ({ column }) => (
        <DataGridColumnHeader title="Actual" column={column} />
      ),
      cell: ({ row }) => (
        <ActualCell
          value={row.original.roasActual}
          kind="roas"
          spread={roasSpread(row.original)}
        />
      ),
      size: 90,
      meta: {
        headerTitle: "ROAS actual",
        headerClassName: "text-right [&>div]:justify-end",
        cellClassName: "text-right",
      },
    },
    {
      id: "roasSpread",
      accessorFn: (campaign) => roasSpread(campaign),
      header: ({ column }) => (
        <DataGridColumnHeader title="vs Target" column={column} />
      ),
      cell: ({ row }) => (
        <SpreadCell
          spread={roasSpread(row.original)}
          label={`ROAS ${roasSpread(row.original).toFixed(0)}% versus target`}
        />
      ),
      size: 130,
      meta: { headerTitle: "ROAS vs target" },
    },
    {
      accessorKey: "cpaTarget",
      header: ({ column }) => (
        <DataGridColumnHeader title="Target" column={column} />
      ),
      cell: ({ row }) => (
        <TargetCell value={row.original.cpaTarget} kind="cpa" />
      ),
      size: 80,
      meta: {
        headerTitle: "CPA target",
        headerClassName: "text-right [&>div]:justify-end border-s border-border/60",
        cellClassName: "text-right border-s border-border/60",
      },
    },
    {
      accessorKey: "cpaActual",
      header: ({ column }) => (
        <DataGridColumnHeader title="Actual" column={column} />
      ),
      cell: ({ row }) => (
        <ActualCell
          value={row.original.cpaActual}
          kind="cpa"
          spread={cpaSpread(row.original)}
        />
      ),
      size: 95,
      meta: {
        headerTitle: "CPA actual",
        headerClassName: "text-right [&>div]:justify-end",
        cellClassName: "text-right",
      },
    },
    {
      id: "cpaSpread",
      accessorFn: (campaign) => cpaSpread(campaign),
      header: ({ column }) => (
        <DataGridColumnHeader title="vs Target" column={column} />
      ),
      cell: ({ row }) => (
        <SpreadCell
          spread={cpaSpread(row.original)}
          label={`CPA ${cpaSpread(row.original).toFixed(0)}% versus target`}
        />
      ),
      size: 140,
      meta: { headerTitle: "CPA vs target" },
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
              <DropdownMenuItem onSelect={() => onEdit(row.original)}>
                <PencilIcon />
                Edit target
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onHistory(row.original)}>
                <EyeIcon />
                View history
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => exportCampaigns([row.original])}
              >
                <DownloadIcon />
                Export row
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
      size: 48,
      enableSorting: false,
      enableHiding: false,
      meta: { cellClassName: "text-right" },
    },
  ]
}
