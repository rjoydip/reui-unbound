import { useEffect, useMemo, useState } from "react"
import {
  ChevronDownIcon,
  Columns3Icon,
  PackageIcon,
  PiggyBankIcon,
  PlusIcon,
  RotateCcwIcon,
  SearchIcon,
  ShoppingCartIcon,
  UsersIcon,
  WalletIcon,
  XIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/reui-unbound/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridColumnVisibility } from "@/components/reui-unbound/data-grid/data-grid-column-visibility"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"

import {
  COUNTRIES,
  FORMATS,
  PERIODS,
  STORES,
  delta,
  formatCount,
  formatDelta,
  formatMoney,
  formatPercent,
  sparkFor,
} from "./data"
import type { MetricKey, Store, StoreFormat, StorePace } from "./data"
import {
  CustomersCell,
  KpiCard,
  OrdersCell,
  PaceBadge,
  ProfitCell,
  ReturnsCell,
  SalesCell,
  StoreCell,
  UnitsCell,
} from "./parts"
import { StoreSheet } from "./store-sheet"

const PACE_OPTIONS: { value: StorePace; label: string }[] = [
  { value: "ahead", label: "Ahead" },
  { value: "on-track", label: "On pace" },
  { value: "behind", label: "Behind" },
]

export function StoreKpiBoardBlock() {
  const [search, setSearch] = useState("")
  const [country, setCountry] = useState("all")
  const [format, setFormat] = useState<"all" | StoreFormat>("all")
  const [pace, setPace] = useState<"all" | StorePace>("all")
  const [month, setMonth] = useState("2026-10")
  const [sorting, setSorting] = useState<SortingState>([
    { id: "sales", desc: true },
  ])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [selected, setSelected] = useState<Store | null>(null)

  const period = PERIODS.find((entry) => entry.value === month) ?? PERIODS[2]
  const factor = period.factor

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    return STORES.filter((store) => {
      if (country !== "all" && store.country !== country) return false
      if (format !== "all" && store.format !== format) return false
      if (pace !== "all" && store.pace !== pace) return false
      if (query === "") return true
      return [store.name, store.city, store.country, store.manager].some(
        (value) => value.toLowerCase().includes(query),
      )
    })
  }, [search, country, format, pace])

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, country, format, pace, month])

  const totals = useMemo(() => {
    const sum = (key: "sales" | "salesLy" | "orders" | "ordersLy" | "customers" | "customersLy" | "units" | "unitsLy" | "grossProfit") =>
      filtered.reduce((total, store) => total + store[key], 0) * factor

    const sales = sum("sales")
    const salesLy = sum("salesLy")
    const orders = sum("orders")
    const grossProfit = sum("grossProfit")
    const returns = filtered.length
      ? filtered.reduce((total, store) => total + store.returns * store.orders, 0) /
        filtered.reduce((total, store) => total + store.orders, 0)
      : 0

    return {
      sales,
      salesLy,
      orders,
      ordersLy: sum("ordersLy"),
      customers: sum("customers"),
      customersLy: sum("customersLy"),
      units: sum("units"),
      unitsLy: sum("unitsLy"),
      grossProfit,
      returns,
    }
  }, [filtered, factor])

  const kpiTrends = useMemo(() => {
    const keys: MetricKey[] = ["sales", "orders", "customers", "units", "profit", "returns"]
    return Object.fromEntries(
      keys.map((key) => [
        key,
        Array.from({ length: 12 }, (_, index) =>
          filtered.reduce(
            (total, store) => total + (sparkFor(store, key)[index] ?? 0),
            0,
          ),
        ),
      ]),
    ) as Record<MetricKey, number[]>
  }, [filtered])

  const goalPct =
    filtered.length > 0
      ? ((filtered.reduce((total, store) => total + store.sales, 0) * factor) /
          filtered.reduce((total, store) => total + store.goal, 0)) *
        100
      : 0

  const columns = useMemo<ColumnDef<DataGridFeatures, Store>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Store" column={column} />
        ),
        cell: ({ row }) => <StoreCell store={row.original} />,
        size: 210,
        enableHiding: false,
      },
      {
        id: "sales",
        accessorFn: (store) => store.sales * factor,
        header: ({ column }) => (
          <DataGridColumnHeader title="Net sales" column={column} />
        ),
        cell: ({ row }) => <SalesCell store={row.original} factor={factor} />,
        size: 130,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        id: "orders",
        accessorFn: (store) => store.orders * factor,
        header: ({ column }) => (
          <DataGridColumnHeader title="Orders" column={column} />
        ),
        cell: ({ row }) => <OrdersCell store={row.original} factor={factor} />,
        size: 120,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        id: "customers",
        accessorFn: (store) => store.customers * factor,
        header: ({ column }) => (
          <DataGridColumnHeader title="Customers" column={column} />
        ),
        cell: ({ row }) => <CustomersCell store={row.original} factor={factor} />,
        size: 125,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        id: "units",
        accessorFn: (store) => store.units * factor,
        header: ({ column }) => (
          <DataGridColumnHeader title="Units" column={column} />
        ),
        cell: ({ row }) => <UnitsCell store={row.original} factor={factor} />,
        size: 115,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        id: "grossProfit",
        accessorFn: (store) => store.grossProfit * factor,
        header: ({ column }) => (
          <DataGridColumnHeader title="Gross profit" column={column} />
        ),
        cell: ({ row }) => <ProfitCell store={row.original} factor={factor} />,
        size: 125,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        accessorKey: "returns",
        header: ({ column }) => (
          <DataGridColumnHeader title="Returns" column={column} />
        ),
        cell: ({ row }) => <ReturnsCell store={row.original} />,
        size: 110,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        id: "pace",
        accessorFn: (store) =>
          store.pace === "ahead" ? 0 : store.pace === "on-track" ? 1 : 2,
        header: ({ column }) => (
          <DataGridColumnHeader title="Goal pace" column={column} />
        ),
        cell: ({ row }) => <PaceBadge store={row.original} factor={factor} />,
        size: 120,
      },
    ],
    [factor],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (store: Store) => store.id,
    state: { sorting, columnVisibility, pagination },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  const storeCount = filtered.length
  const behind = filtered.filter((store) => store.pace === "behind").length

  function resetFilters() {
    setSearch("")
    setCountry("all")
    setFormat("all")
    setPace("all")
  }

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Store KPI board</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Store KPIs</FrameTitle>
                <FrameDescription>
                  {period.label} vs same month last year · {STORES.length} stores ·{" "}
                  {new Set(STORES.map((store) => store.country)).size} countries
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Select value={month} onValueChange={setMonth}>
                  <SelectTrigger size="sm" className="w-36" aria-label="Select period">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PERIODS.map((entry) => (
                      <SelectItem key={entry.value} value={entry.value}>
                        {entry.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  size="sm"
                  onClick={() =>
                    toast("Add store", {
                      description: "Store onboarding opens from the admin app.",
                    })
                  }
                >
                  <PlusIcon />
                  Add store
                </Button>
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No stores match these filters."
              tableLayout={{ headerBackground: true }}
              onRowClick={(store) => setSelected(store)}
            >
              <div className="flex flex-col gap-3">
                <div className="grid gap-2 sm:grid-cols-3 xl:grid-cols-6">
                  <KpiCard
                    label="Net sales"
                    value={formatMoney(totals.sales)}
                    note={`${formatDelta(delta(totals.sales, totals.salesLy))} vs LY`}
                    trend={kpiTrends.sales}
                    tone="bg-violet-500/70"
                    icon={ShoppingCartIcon}
                    iconTone="text-violet-500"
                  />
                  <KpiCard
                    label="Orders"
                    value={formatCount(totals.orders)}
                    note={`${formatDelta(delta(totals.orders, totals.ordersLy))} vs LY`}
                    trend={kpiTrends.orders}
                    tone="bg-amber-500/70"
                    icon={PackageIcon}
                    iconTone="text-amber-500"
                  />
                  <KpiCard
                    label="Customers"
                    value={formatCount(totals.customers)}
                    note={`${formatDelta(delta(totals.customers, totals.customersLy))} vs LY`}
                    trend={kpiTrends.customers}
                    tone="bg-sky-500/70"
                    icon={UsersIcon}
                    iconTone="text-sky-500"
                  />
                  <KpiCard
                    label="Units"
                    value={formatCount(totals.units)}
                    note={`${formatDelta(delta(totals.units, totals.unitsLy))} vs LY`}
                    trend={kpiTrends.units}
                    tone="bg-emerald-500/70"
                    icon={WalletIcon}
                    iconTone="text-emerald-500"
                  />
                  <KpiCard
                    label="Gross profit"
                    value={formatMoney(totals.grossProfit)}
                    note={`${((totals.grossProfit / (totals.sales || 1)) * 100).toFixed(0)}% margin`}
                    trend={kpiTrends.profit}
                    tone="bg-primary/70"
                    icon={PiggyBankIcon}
                    iconTone="text-primary"
                  />
                  <KpiCard
                    label="Return rate"
                    value={formatPercent(totals.returns)}
                    note={`${formatDelta(delta(totals.returns, 5.4))} vs LY`}
                    trend={kpiTrends.returns}
                    tone="bg-rose-500/70"
                    icon={RotateCcwIcon}
                    iconTone="text-rose-500"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <InputGroup className="w-full sm:max-w-60">
                      <InputGroupAddon>
                        <SearchIcon />
                      </InputGroupAddon>
                      <InputGroupInput
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search stores..."
                        aria-label="Search stores"
                        className="text-sm"
                      />
                      <InputGroupAddon align="inline-end">
                        <Kbd>&#8984;K</Kbd>
                      </InputGroupAddon>
                    </InputGroup>

                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger size="sm" className="w-40" aria-label="Filter by country">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All countries</SelectItem>
                        {COUNTRIES.map((entry) => (
                          <SelectItem key={entry} value={entry}>
                            {entry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={format}
                      onValueChange={(value) => setFormat(value as "all" | StoreFormat)}
                    >
                      <SelectTrigger size="sm" className="w-32" aria-label="Filter by format">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All formats</SelectItem>
                        {FORMATS.map((entry) => (
                          <SelectItem key={entry} value={entry}>
                            {entry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={pace}
                      onValueChange={(value) => setPace(value as "all" | StorePace)}
                    >
                      <SelectTrigger size="sm" className="w-32" aria-label="Filter by pace">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All pace</SelectItem>
                        {PACE_OPTIONS.map((entry) => (
                          <SelectItem key={entry.value} value={entry.value}>
                            {entry.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {(search || country !== "all" || format !== "all" || pace !== "all") && (
                      <Button variant="ghost" size="sm" onClick={resetFilters}>
                        <XIcon />
                        Clear
                      </Button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant={goalPct >= 100 ? "success-light" : "warning-light"} size="lg">
                      {goalPct.toFixed(0)}% goal pace
                    </Badge>
                    <DataGridColumnVisibility
                      table={table}
                      trigger={
                        <Button variant="outline" size="sm">
                          <Columns3Icon />
                          Columns
                          <ChevronDownIcon />
                        </Button>
                      }
                    />
                  </div>
                </div>

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
                <DataGridPagination
                  sizes={[10, 20, 30]}
                  info="{from} - {to} of {count} stores"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />

                <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span>
                    {storeCount} of {STORES.length} stores · {formatMoney(totals.sales)} sales ·{" "}
                    {formatCount(totals.orders)} orders
                  </span>
                  <span>
                    {filtered.filter((store) => store.pace === "ahead").length} ahead ·{" "}
                    {behind} behind · {filtered.filter((store) => store.pace === "on-track").length} on pace
                  </span>
                </div>
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <StoreSheet
        store={selected}
        factor={factor}
        periodLabel={period.label}
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      />
    </>
  )
}

export default StoreKpiBoardBlock
