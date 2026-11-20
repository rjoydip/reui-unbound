import {
  CircleCheckIcon,
  CircleDashedIcon,
  CirclePauseIcon,
  DoorOpenIcon,
  DownloadIcon,
  EyeIcon,
  MoreHorizontalIcon,
  StoreIcon,
} from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { DataGridFeatures } from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import {
  DataGridTableRowExpand,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/reui-unbound/data-grid/data-grid-table"
import { IconTile } from "@/components/reui-unbound/icon-tile"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

import {
  CHECK_LABELS,
  accountChecks,
  aggregateChecks,
  doorReady,
  formatMoney,
  shortCredit,
} from "./data"
import type { Account, CheckKey, Decision, Door } from "./data"

export function RetailerCell({ account }: { account: Account }) {
  return (
    <div className="flex items-center gap-2.5">
      <IconTile variant="soft" size="sm" className="text-muted-foreground rounded-md">
        <StoreIcon />
      </IconTile>
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">{account.name}</div>
        <div className="text-muted-foreground flex min-w-0 items-center gap-1.5 text-xs">
          <span className="font-medium">{account.country}</span>
          <span aria-hidden>&middot;</span>
          <span className="truncate">
            {account.city} &middot; {account.doors.length} door
            {account.doors.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </div>
  )
}

export function ShipsCell({ ships }: { ships: string }) {
  const soon = ships.startsWith("In ")

  return (
    <span
      className={cn(
        "text-sm tabular-nums",
        soon ? "text-warning-foreground font-medium" : "text-muted-foreground",
      )}
    >
      {ships}
    </span>
  )
}

const DECISION_VARIANTS: Record<
  Decision,
  "success-light" | "info-light" | "destructive-light" | "warning-light"
> = {
  Approved: "success-light",
  "In Review": "info-light",
  Declined: "destructive-light",
  "On hold": "warning-light",
}

export function DecisionBadge({ decision }: { decision: Decision }) {
  return (
    <Badge variant={DECISION_VARIANTS[decision]} size="lg" className="font-medium">
      {decision}
    </Badge>
  )
}

export function CreditCell({ account }: { account: Account }) {
  const short = shortCredit(account)

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className="text-sm font-medium tabular-nums">
        {formatMoney(account.creditLimit)}
      </span>
      <span
        className={cn(
          "text-xs tabular-nums",
          short > 0 ? "text-warning-foreground" : "text-muted-foreground",
        )}
      >
        {short > 0
          ? `Short ${formatMoney(short)}`
          : `Order ${formatMoney(account.orderValue)}`}
      </span>
    </div>
  )
}

export function ScoreCell({ score }: { score: number }) {
  return (
    <span
      className={cn(
        "text-sm font-semibold tabular-nums",
        score >= 80
          ? "text-success-foreground"
          : score >= 60
            ? "text-foreground"
            : "text-destructive",
      )}
    >
      {score}
    </span>
  )
}

export function CheckDot({
  done,
  label,
}: {
  done: boolean
  label: string
}) {
  const Icon = done ? CircleCheckIcon : CircleDashedIcon

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={cn(
            "inline-flex",
            done ? "text-success" : "text-muted-foreground/50",
          )}
        >
          <Icon className="size-4" />
          <span className="sr-only">
            {label}: {done ? "complete" : "missing"}
          </span>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        {label}: {done ? "complete" : "missing"}
      </TooltipContent>
    </Tooltip>
  )
}

export function CheckDots({
  checks,
  className,
}: {
  checks: Door["checks"] | Account["doors"][number]["checks"]
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {CHECK_LABELS.map((check) => (
        <CheckDot
          key={check.key}
          done={checks[check.key as CheckKey]}
          label={check.label}
        />
      ))}
    </div>
  )
}

export function ReadinessCell({
  account,
  compact = false,
}: {
  account: Account
  compact?: boolean
}) {
  const { pct, done, total } = accountChecks(account)
  const tone =
    pct >= 100 ? "bg-success" : pct >= 50 ? "bg-warning" : "bg-destructive"

  return (
    <div className={cn("flex items-center gap-2", compact ? "w-24" : "w-32")}>
      <div className="bg-muted h-1.5 flex-1 overflow-hidden rounded-full">
        <div
          className={cn("h-full rounded-full", tone)}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-muted-foreground w-8 text-right text-xs tabular-nums">
        {Math.round(pct)}
      </span>
      {!compact && (
        <span className="sr-only">
          {done} of {total} checks complete
        </span>
      )}
    </div>
  )
}

export function DoorRow({ door }: { door: Door }) {
  const done = Object.values(door.checks).filter(Boolean).length
  const pct = (done / CHECK_LABELS.length) * 100

  return (
    <div className="hover:bg-muted/40 grid grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-3 rounded-md px-2 py-1.5">
      <div className="flex min-w-0 items-center gap-2 ps-6">
        <DoorOpenIcon className="text-muted-foreground size-3.5 shrink-0" />
        <span className="truncate text-sm font-medium">{door.name}</span>
        <span className="text-muted-foreground shrink-0 text-xs">
          {door.city}
        </span>
      </div>
      <span
        className={cn(
          "text-xs tabular-nums",
          door.ships.startsWith("In ")
            ? "text-warning-foreground"
            : "text-muted-foreground",
        )}
      >
        {door.ships}
      </span>
      <CheckDots checks={door.checks} />
      <div className="flex w-20 items-center gap-1.5">
        <div className="bg-muted h-1 flex-1 overflow-hidden rounded-full">
          <div
            className={cn(
              "h-full rounded-full",
              doorReady(door) ? "bg-success" : "bg-warning",
            )}
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-muted-foreground w-6 text-right text-[10px] tabular-nums">
          {done}/4
        </span>
      </div>
    </div>
  )
}

export function DoorList({ account }: { account: Account }) {
  const { done, total, pct } = accountChecks(account)

  return (
    <div className="bg-muted/20 flex flex-col gap-1 py-1.5">
      {account.doors.map((door) => (
        <DoorRow key={door.id} door={door} />
      ))}
      <div className="text-muted-foreground flex items-center justify-between gap-3 border-t px-8 pt-1.5 text-xs">
        <span>
          All {account.doors.length} door
          {account.doors.length === 1 ? "" : "s"}
        </span>
        <span className="tabular-nums">
          {done}/{total} checks &middot; {Math.round(pct)}% ready
        </span>
      </div>
    </div>
  )
}

export function exportAccounts(rows: Account[]) {
  const lines = [
    [
      "Retailer",
      "City",
      "Country",
      "Buyer",
      "Decision",
      "Doors",
      "Credit limit",
      "Order value",
      "Credit score",
      "Ships",
      "Checks",
    ],
    ...rows.map((account) => {
      const checks = accountChecks(account)
      return [
        account.name,
        account.city,
        account.country,
        account.buyer,
        account.decision,
        account.doors.length,
        account.creditLimit,
        account.orderValue,
        account.creditScore,
        account.ships,
        `${checks.done}/${checks.total}`,
      ]
    }),
  ]

  const csv = lines
    .map((line) =>
      line.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","),
    )
    .join("\n")

  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }))
  const link = document.createElement("a")
  link.href = url
  link.download = "wholesale-applications.csv"
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)

  toast("Applications exported", {
    description: `${rows.length} ${rows.length === 1 ? "account" : "accounts"} written to wholesale-applications.csv.`,
  })
}

export function accountColumns({
  onView,
  onApprove,
  onHold,
}: {
  onView: (account: Account) => void
  onApprove: (account: Account) => void
  onHold: (account: Account) => void
}): ColumnDef<DataGridFeatures, Account>[] {
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
      id: "expand",
      header: () => null,
      cell: ({ row }) => <DataGridTableRowExpand row={row} />,
      size: 32,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataGridColumnHeader title="Retailer" column={column} />
      ),
      cell: ({ row }) => <RetailerCell account={row.original} />,
      size: 250,
      enableHiding: false,
      meta: {
        headerTitle: "Retailer",
        expandedContent: (account: Account) => <DoorList account={account} />,
      },
    },
    {
      accessorKey: "ships",
      header: ({ column }) => (
        <DataGridColumnHeader title="Ships" column={column} />
      ),
      cell: ({ row }) => <ShipsCell ships={row.original.ships} />,
      size: 105,
    },
    {
      accessorKey: "decision",
      header: ({ column }) => (
        <DataGridColumnHeader title="Decision" column={column} />
      ),
      cell: ({ row }) => <DecisionBadge decision={row.original.decision} />,
      size: 115,
    },
    {
      accessorKey: "creditLimit",
      header: ({ column }) => (
        <DataGridColumnHeader title="Limit" column={column} />
      ),
      cell: ({ row }) => <CreditCell account={row.original} />,
      size: 130,
      meta: {
        headerClassName: "text-right [&>div]:justify-end",
        cellClassName: "text-right",
      },
    },
    {
      id: "credit",
      accessorFn: (account) => account.creditScore,
      header: ({ column }) => (
        <DataGridColumnHeader title="Credit" column={column} />
      ),
      cell: ({ row }) => <ScoreCell score={row.original.creditScore} />,
      size: 85,
      meta: {
        headerClassName: "text-right [&>div]:justify-end",
        cellClassName: "text-right",
      },
    },
    {
      id: "checks",
      accessorFn: (account) => accountChecks(account).pct,
      header: () => <span className="text-xs font-medium">Checks</span>,
      cell: ({ row }) => <CheckDots checks={aggregateChecks(row.original)} />,
      size: 110,
      enableSorting: false,
    },
    {
      id: "readiness",
      accessorFn: (account) => accountChecks(account).pct,
      header: ({ column }) => (
        <DataGridColumnHeader title="Readiness" column={column} />
      ),
      cell: ({ row }) => <ReadinessCell account={row.original} />,
      size: 130,
      meta: {
        headerClassName: "text-right [&>div]:justify-end",
        cellClassName: "text-right",
      },
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
                <span className="sr-only">Open account menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel className="font-medium">
                {row.original.name}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => onView(row.original)}>
                <EyeIcon />
                View account
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onApprove(row.original)}>
                <CircleCheckIcon />
                Approve
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => onHold(row.original)}>
                <CirclePauseIcon />
                Put on hold
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => exportAccounts([row.original])}
              >
                <DownloadIcon />
                Export row
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
      size: 44,
      enableSorting: false,
      enableHiding: false,
      meta: { cellClassName: "text-right" },
    },
  ]
}
