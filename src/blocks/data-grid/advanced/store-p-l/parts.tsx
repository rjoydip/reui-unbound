import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  ChevronDownIcon,
  Columns3Icon,
  DownloadIcon,
  EyeIcon,
  MoreHorizontalIcon,
  StoreIcon,
} from "lucide-react"
import type {
  ColumnDef,
  PaginationState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import { DataGridPagination } from "@/components/kit/data-grid/~data-grid-pagination"
import { DataGridScrollArea } from "@/components/kit/data-grid/~data-grid-scroll-area"
import { DataGridTable } from "@/components/kit/data-grid/~data-grid-table"
import { IconTile } from "@/components/kit/icon-tile"
import { cn } from "cn"

import {
  MONTHS,
  attainment,
  formatCompact,
  formatPercent,
  regionLabel,
  regionMeta,
} from "./data"
import type { RegionSummary, Store } from "./data"

export function formatSigned(amount: number) {
  return `${amount < 0 ? "-" : "+"}${formatCompact(Math.abs(amount))}`
}

export function priorYearSales(store: Store) {
  return store.sales / (1 + store.yoy / 100)
}

export function StoreCell({ store }: { store: Store }) {
  const region = regionMeta(store.region)

  return (
    <div className="flex items-center gap-2.5">
      <IconTile variant="soft" size="sm" className="text-muted-foreground rounded-md">
        <StoreIcon />
      </IconTile>
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">{store.name}</div>
        <div className="text-muted-foreground flex min-w-0 items-center gap-1.5 text-xs">
          <span className={cn("size-1.5 shrink-0 rounded-full", region.dot)} />
          <span className="font-medium">{store.country}</span>
          <span aria-hidden>&middot;</span>
          <span className="truncate">
            {store.city} &middot; {store.format}
          </span>
        </div>
      </div>
    </div>
  )
}

export function AttainmentCell({ store }: { store: Store }) {
  const pct = attainment(store)
  const tone =
    pct >= 100 ? "bg-success" : pct >= 90 ? "bg-warning" : "bg-destructive"

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <div className="bg-muted h-1.5 w-16 overflow-hidden rounded-full">
          <div
            className={cn("h-full rounded-full", tone)}
            style={{ width: `${Math.min(100, pct)}%` }}
          />
        </div>
        <span
          className={cn(
            "text-xs font-medium tabular-nums",
            pct < 90 && "text-destructive",
          )}
        >
          {pct.toFixed(0)}%
        </span>
      </div>
      <span className="text-muted-foreground text-xs tabular-nums">
        of {formatCompact(store.plan)} plan
      </span>
    </div>
  )
}

export function SalesCell({ store }: { store: Store }) {
  return (
    <span className="text-sm font-semibold tabular-nums">
      {formatCompact(store.sales)}
    </span>
  )
}

export function YoYCell({ store }: { store: Store }) {
  const up = store.yoy >= 0
  const Icon = up ? ArrowUpRightIcon : ArrowDownRightIcon

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span
        className={cn(
          "flex items-center gap-1 text-xs font-medium tabular-nums",
          up ? "text-success-foreground" : "text-destructive",
        )}
      >
        <Icon className="size-3" />
        {formatPercent(store.yoy, 1)}
      </span>
      <span className="text-muted-foreground text-xs tabular-nums">
        FY25 {formatCompact(priorYearSales(store))}
      </span>
    </div>
  )
}

export function RankChip({ rank }: { rank: number }) {
  return (
    <span className="bg-muted text-muted-foreground inline-flex size-6 items-center justify-center rounded border text-xs font-semibold tabular-nums">
      {rank}
    </span>
  )
}

export function ProfitCell({ store }: { store: Store }) {
  const positive = store.profit >= 0

  return (
    <span
      className={cn(
        "inline-flex min-w-24 justify-end rounded-md px-2 py-1 text-sm font-semibold tabular-nums",
        positive
          ? "bg-primary/10 text-foreground"
          : "bg-destructive/10 text-destructive",
      )}
    >
      {formatCompact(store.profit)}
    </span>
  )
}

export function ProfitVsCell({ store }: { store: Store }) {
  const prior = store.profit / (1 + store.yoy / 100)
  const delta = store.profit - prior
  const positive = delta >= 0

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span
        className={cn(
          "text-xs tabular-nums",
          positive ? "text-success-foreground" : "text-destructive",
        )}
      >
        {formatSigned(delta)}
      </span>
      <Badge
        variant={positive ? "success-light" : "destructive-light"}
        size="sm"
        className="font-medium tabular-nums"
      >
        {formatPercent(store.yoy, 0)}
      </Badge>
    </div>
  )
}

export function MarginCell({ store }: { store: Store }) {
  return (
    <Badge
      variant={
        store.margin < 0
          ? "destructive-light"
          : store.margin >= 12
            ? "success-light"
            : "outline"
      }
      size="lg"
      className="font-medium tabular-nums"
    >
      {store.margin.toFixed(1)}%
    </Badge>
  )
}

export function RegionCard({
  summary,
  active,
  onClick,
}: {
  summary: RegionSummary
  active: boolean
  onClick: () => void
}) {
  const meta = summary.key === "all" ? null : regionMeta(summary.key)
  const profitable = summary.stores - summary.lossMaking

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-lg border p-3 text-left transition-colors",
        active
          ? "border-primary/40 bg-primary/5 ring-primary/20 ring-1"
          : "hover:bg-muted/40",
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="flex min-w-0 items-center gap-1.5 text-sm font-medium">
          <span
            className={cn(
              "size-2 shrink-0 rounded-full",
              meta?.dot ?? "bg-primary",
            )}
          />
          <span className="truncate">{summary.label}</span>
        </span>
        <span className="text-muted-foreground shrink-0 text-xs">
          {summary.stores} stores
        </span>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-xl font-semibold tabular-nums">
          {formatCompact(summary.sales)}
        </span>
        <span
          className={cn(
            "text-xs tabular-nums",
            summary.yoy >= 0 ? "text-success-foreground" : "text-destructive",
          )}
        >
          {formatPercent(summary.yoy, 1)}
        </span>
      </div>
      <div className="text-muted-foreground mt-0.5 flex flex-wrap items-center gap-x-2 text-xs">
        <span>{summary.margin.toFixed(1)}% margin</span>
        <span aria-hidden>&middot;</span>
        <span
          className={cn(
            summary.lossMaking > 0 ? "text-destructive" : "text-success-foreground",
          )}
        >
          {summary.lossMaking} loss-making
        </span>
      </div>
      <div className="mt-2 flex h-1 gap-0.5 overflow-hidden rounded-full">
        <span
          className="bg-success"
          style={{ width: `${(profitable / Math.max(1, summary.stores)) * 100}%` }}
        />
        <span
          className="bg-destructive"
          style={{
            width: `${(summary.lossMaking / Math.max(1, summary.stores)) * 100}%`,
          }}
        />
      </div>
    </button>
  )
}

export function RegionBand({ summary }: { summary: RegionSummary }) {
  const meta = regionMeta(summary.key as Exclude<RegionSummary["key"], "all">)

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 border-b px-3 py-2",
        meta.tint,
      )}
    >
      <span className={cn("size-2 shrink-0 rounded-full", meta.dot)} />
      <span className="text-sm font-semibold">{summary.label}</span>
      <Badge variant="outline" size="sm" className="bg-background/60">
        {summary.stores} stores
      </Badge>
      <div className="text-muted-foreground ml-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs tabular-nums">
        <span>
          Sales{" "}
          <span className="text-foreground font-medium">
            {formatCompact(summary.sales)}
          </span>
        </span>
        <span>
          Profit{" "}
          <span
            className={cn(
              "font-medium",
              summary.profit >= 0
                ? "text-foreground"
                : "text-destructive",
            )}
          >
            {formatCompact(summary.profit)}
          </span>
        </span>
        <span>
          Margin{" "}
          <span className="text-foreground font-medium">
            {summary.margin.toFixed(1)}%
          </span>
        </span>
        <span>
          Plan{" "}
          <span className="text-foreground font-medium">
            {summary.attainment.toFixed(0)}%
          </span>
        </span>
      </div>
    </div>
  )
}

export function TrendBars({ values }: { values: number[] }) {
  const max = Math.max(...values, 1)

  return (
    <div className="flex h-32 items-end gap-2">
      {values.map((value, index) => (
        <div
          key={MONTHS[index]}
          className="flex h-full flex-1 flex-col justify-end gap-1"
        >
          <div
            className={cn(
              "w-full rounded-t-sm",
              index === values.length - 1 ? "bg-primary" : "bg-primary/40",
            )}
            style={{ height: `${Math.max(6, (value / max) * 100)}%` }}
            title={`$${Math.round(value / 1000)}K`}
          />
          <span className="text-muted-foreground text-center text-[10px]">
            {MONTHS[index]}
          </span>
        </div>
      ))}
    </div>
  )
}

const TOGGLEABLE_COLUMNS = [
  { id: "attainment", label: "Plan attainment" },
  { id: "sales", label: "Net sales" },
  { id: "yoy", label: "YoY" },
  { id: "rank", label: "Profit rank" },
  { id: "profit", label: "Profit" },
  { id: "profitVs", label: "Profit vs FY25" },
  { id: "margin", label: "Margin" },
]

export function ColumnsMenu({
  visibility,
  onChange,
}: {
  visibility: Record<string, boolean>
  onChange: (next: Record<string, boolean>) => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Columns3Icon />
          Columns
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        <DropdownMenuLabel className="font-medium">Columns</DropdownMenuLabel>
        {TOGGLEABLE_COLUMNS.map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            checked={visibility[column.id] !== false}
            onSelect={(event) => event.preventDefault()}
            onCheckedChange={(value) =>
              onChange({ ...visibility, [column.id]: !!value })
            }
          >
            {column.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function exportStores(rows: Store[]) {
  const lines = [
    [
      "Store",
      "City",
      "Country",
      "Region",
      "Format",
      "Sales",
      "Plan",
      "Attainment",
      "Profit",
      "Margin",
      "YoY",
      "Rank",
    ],
    ...rows.map((store) => [
      store.name,
      store.city,
      store.country,
      regionLabel(store.region),
      store.format,
      store.sales,
      store.plan,
      `${attainment(store).toFixed(1)}%`,
      store.profit,
      `${store.margin.toFixed(1)}%`,
      `${store.yoy}%`,
      store.rank,
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
  link.download = "store-pnl.csv"
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)

  toast("Store P&L exported", {
    description: `${rows.length} ${rows.length === 1 ? "store" : "stores"} written to store-pnl.csv.`,
  })
}

export function StoreGrid({
  rows,
  columns,
  sorting,
  onSortingChange,
  visibility,
  onVisibilityChange,
  pagination,
  showHeader = true,
  onRowClick,
}: {
  rows: Store[]
  columns: ColumnDef<DataGridFeatures, Store>[]
  sorting: SortingState
  onSortingChange: (sorting: SortingState) => void
  visibility: Record<string, boolean>
  onVisibilityChange: (next: Record<string, boolean>) => void
  pagination?: {
    state: PaginationState
    onChange: (state: PaginationState) => void
  }
  showHeader?: boolean
  onRowClick: (store: Store) => void
}) {
  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: rows,
    pageCount: pagination
      ? Math.max(1, Math.ceil(rows.length / pagination.state.pageSize))
      : 1,
    getRowId: (store: Store) => store.id,
    state: {
      sorting,
      columnVisibility: visibility,
      pagination: pagination
        ? pagination.state
        : { pageIndex: 0, pageSize: 100 },
    },
    onSortingChange: (updater) =>
      onSortingChange(
        typeof updater === "function" ? updater(sorting) : updater,
      ),
    onColumnVisibilityChange: (updater) =>
      onVisibilityChange(
        typeof updater === "function" ? updater(visibility) : updater,
      ),
    onPaginationChange: pagination
      ? (updater) =>
          pagination.onChange(
            typeof updater === "function" ? updater(pagination.state) : updater,
          )
      : undefined,
  })

  return (
    <DataGrid
      table={table}
      recordCount={rows.length}
      onRowClick={onRowClick}
      tableLayout={{ headerBackground: true }}
      tableClassNames={showHeader ? undefined : { header: "hidden" }}
    >
      <DataGridContainer>
        <DataGridScrollArea>
          <DataGridTable />
        </DataGridScrollArea>
      </DataGridContainer>
      {pagination && (
        <DataGridPagination
          sizes={[10, 20]}
          info="{from} - {to} of {count} stores"
          rowsPerPageLabel="Rows per page"
        />
      )}
    </DataGrid>
  )
}

export function storeColumns(
  tree: boolean,
  onView: (store: Store) => void,
): ColumnDef<DataGridFeatures, Store>[] {
  const right = {
    headerClassName: "text-right [&>div]:justify-end",
    cellClassName: "text-right",
  }

  return [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataGridColumnHeader title="Store" column={column} />
      ),
      cell: ({ row }) => <StoreCell store={row.original} />,
      size: 280,
      enableHiding: false,
      meta: {
        headerTitle: "Store",
        cellClassName: tree ? "ps-8" : undefined,
      },
    },
    {
      id: "attainment",
      accessorFn: (store) => attainment(store),
      header: ({ column }) => (
        <DataGridColumnHeader title="Sales #" column={column} />
      ),
      cell: ({ row }) => <AttainmentCell store={row.original} />,
      size: 160,
    },
    {
      accessorKey: "sales",
      header: ({ column }) => (
        <DataGridColumnHeader title="Net Sales" column={column} />
      ),
      cell: ({ row }) => <SalesCell store={row.original} />,
      size: 110,
      meta: right,
    },
    {
      accessorKey: "yoy",
      header: ({ column }) => (
        <DataGridColumnHeader title="YoY" column={column} />
      ),
      cell: ({ row }) => <YoYCell store={row.original} />,
      size: 120,
      meta: right,
    },
    {
      accessorKey: "rank",
      header: ({ column }) => (
        <DataGridColumnHeader title="Profit #" column={column} />
      ),
      cell: ({ row }) => <RankChip rank={row.original.rank} />,
      size: 70,
    },
    {
      accessorKey: "profit",
      header: ({ column }) => (
        <DataGridColumnHeader title="Profit" column={column} />
      ),
      cell: ({ row }) => <ProfitCell store={row.original} />,
      size: 130,
      meta: right,
    },
    {
      id: "profitVs",
      accessorFn: (store) => store.profit / (1 + store.yoy / 100),
      header: ({ column }) => (
        <DataGridColumnHeader title="Profit vs FY25" column={column} />
      ),
      cell: ({ row }) => <ProfitVsCell store={row.original} />,
      size: 140,
      meta: right,
    },
    {
      accessorKey: "margin",
      header: ({ column }) => (
        <DataGridColumnHeader title="Margin" column={column} />
      ),
      cell: ({ row }) => <MarginCell store={row.original} />,
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
                <span className="sr-only">Open store menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel className="font-medium">
                {row.original.name}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => onView(row.original)}>
                <EyeIcon />
                View store
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => exportStores([row.original])}>
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
