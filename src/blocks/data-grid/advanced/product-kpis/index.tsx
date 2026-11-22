import { useEffect, useMemo, useState } from "react"
import {
  ChevronDownIcon,
  MoreHorizontalIcon,
  PlusIcon,
  RotateCcwIcon,
  SearchIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Cascader,
  CascaderContent,
  CascaderList,
  CascaderPanel,
  CascaderStatus,
  CascaderTrigger,
} from "@/components/kit/cascader/cascader"
import { CascaderItems } from "@/components/kit/cascader/~cascader-item"
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
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "cn"

import {
  DEFAULT_GUARDRAILS,
  PRODUCTS,
  PROMO_MONTHS,
  formatCompactMoney,
  scoreProduct,
} from "./data"
import type { Guardrails, Product, Score } from "./data"
import {
  GuardrailsPopover,
  MarginCell,
  ProductCell,
  ProductSheet,
  ProfitCell,
  PromoCalendar,
  PromoStrip,
  RevenueCell,
  StatusCell,
  TrendSparkline,
} from "./parts"

const STATUS_ITEMS = [
  { value: "on-track", label: "On track" },
  { value: "at-risk", label: "At risk" },
  { value: "off-track", label: "Off track" },
  { value: "no-sales", label: "No sales" },
  { value: "returned", label: "Returned" },
]

const CATEGORIES = ["Footwear", "Apparel", "Accessories"]

const HORIZONS: Record<string, number> = { "4w": 4, "13w": 8, "26w": 8 }

export default function ProductKpiGridBlock() {
  const [guardrails, setGuardrails] = useState<Guardrails>(DEFAULT_GUARDRAILS)
  const [search, setSearch] = useState("")
  const [statuses, setStatuses] = useState<string[]>([])
  const [category, setCategory] = useState("all")
  const [horizon, setHorizon] = useState("13w")
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [selected, setSelected] = useState<string | null>(null)

  const scores = useMemo(() => {
    const map = new Map<string, Score>()
    PRODUCTS.forEach((product) =>
      map.set(product.id, scoreProduct(product, guardrails)),
    )
    return map
  }, [guardrails])

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    return PRODUCTS.filter((product) => {
      const score = scores.get(product.id)
      if (statuses.length > 0 && (!score || !statuses.includes(score.status)))
        return false
      if (category !== "all" && product.category !== category) return false
      if (query === "") return true
      return [product.name, product.sku, product.category].some((field) =>
        field.toLowerCase().includes(query),
      )
    })
  }, [search, statuses, category, scores])

  const historyWindow = HORIZONS[horizon] ?? 8

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, statuses, category, guardrails])

  const columns = useMemo<ColumnDef<DataGridFeatures, Product>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Product" column={column} />
        ),
        cell: ({ row }) => <ProductCell product={row.original} />,
        size: 250,
        enableHiding: false,
      },
      {
        id: "revenue",
        accessorFn: (product) => product.revenue ?? -1,
        header: ({ column }) => (
          <DataGridColumnHeader title="Revenue" column={column} />
        ),
        cell: ({ row }) => <RevenueCell product={row.original} />,
        size: 116,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "trend",
        accessorFn: (product) =>
          product.history.slice(-historyWindow).join(","),
        header: () => <span className="text-xs font-semibold">Revenue trend</span>,
        cell: ({ row }) => (
          <div className="flex justify-center">
            <TrendSparkline
              history={row.original.history.slice(-historyWindow)}
            />
          </div>
        ),
        size: 120,
        enableSorting: false,
      },
      {
        id: "profit",
        accessorFn: (product) => product.profit ?? 0,
        header: ({ column }) => (
          <DataGridColumnHeader title="Profit" column={column} />
        ),
        cell: ({ row }) => <ProfitCell product={row.original} />,
        size: 100,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "margin",
        accessorKey: "margin",
        header: ({ column }) => (
          <DataGridColumnHeader title="Margin" column={column} />
        ),
        cell: ({ row }) => (
          <MarginCell product={row.original} guardrails={guardrails} />
        ),
        size: 92,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "promo",
        accessorFn: (product) =>
          product.promo.filter((week) => week > 0).length,
        header: () => <span className="text-xs font-semibold">Promo</span>,
        cell: ({ row }) => (
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-sm py-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label={`Promotions for ${row.original.name}`}
                onClick={(event) => event.stopPropagation()}
              >
                <PromoStrip promo={row.original.promo} />
              </button>
            </PopoverTrigger>
            <PopoverContent align="center" className="w-72 p-3">
              <div className="text-sm font-medium">Promotion calendar</div>
              <p className="text-muted-foreground mb-2 text-xs">
                {row.original.name} · rolling 12 weeks
              </p>
              <PromoCalendar product={row.original} />
            </PopoverContent>
          </Popover>
        ),
        size: 96,
        enableSorting: false,
      },
      {
        id: "status",
        accessorFn: (product) => scores.get(product.id)?.status ?? "no-sales",
        header: () => <span className="text-xs font-semibold">KPI status</span>,
        cell: ({ row }) => (
          <StatusCell
            score={scores.get(row.original.id) ?? scoreProduct(row.original, guardrails)}
          />
        ),
        size: 150,
        enableSorting: false,
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
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuLabel className="font-medium">
                  {row.original.sku}
                </DropdownMenuLabel>
                <DropdownMenuItem onSelect={() => setSelected(row.original.id)}>
                  View product
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    toast("Promotion draft", {
                      description: `${row.original.name} added to the next promo cycle.`,
                    })
                  }
                >
                  Add to promo
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() =>
                    toast("Guardrails", {
                      description: "Adjust the thresholds in the header.",
                    })
                  }
                >
                  Adjust guardrails
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
        size: 44,
        enableSorting: false,
        enableHiding: false,
      },
    ],
    [scores, guardrails, historyWindow],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (product: Product) => product.id,
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  })

  const selectedProduct =
    PRODUCTS.find((product) => product.id === selected) ?? null

  const onTrack = PRODUCTS.filter(
    (product) => scores.get(product.id)?.status === "on-track",
  ).length

  function resetView() {
    setSearch("")
    setStatuses([])
    setCategory("all")
    setGuardrails(DEFAULT_GUARDRAILS)
    setPagination({ pageIndex: 0, pageSize: 10 })
    toast("View reset", {
      description: "Filters and guardrails are back to their defaults.",
    })
  }

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Product KPIs</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Product KPIs</FrameTitle>
                <FrameDescription>
                  13 weeks to Oct 11 · {PRODUCTS.length} products · {onTrack} on
                  track
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <ToggleGroup
                  type="single"
                  size="sm"
                  variant="outline"
                  value={horizon}
                  onValueChange={(value) => value && setHorizon(value)}
                >
                  <ToggleGroupItem value="4w">4W</ToggleGroupItem>
                  <ToggleGroupItem value="13w">13W</ToggleGroupItem>
                  <ToggleGroupItem value="26w">26W</ToggleGroupItem>
                </ToggleGroup>
                <GuardrailsPopover
                  guardrails={guardrails}
                  onChange={setGuardrails}
                />
                <Button
                  size="sm"
                  onClick={() =>
                    toast("Add product", {
                      description: "Product setup opens in the full app.",
                    })
                  }
                >
                  <PlusIcon />
                  Add Product
                </Button>
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No products match your search, category or status filter."
              tableLayout={{ headerBackground: true }}
              onRowClick={(product) => setSelected(product.id)}
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <InputGroup className="w-full sm:max-w-64">
                      <InputGroupAddon>
                        <SearchIcon />
                      </InputGroupAddon>
                      <InputGroupInput
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search products..."
                        aria-label="Search products"
                        className="text-sm"
                      />
                    </InputGroup>

                    <Cascader
                      multiple
                      items={STATUS_ITEMS}
                      value={statuses}
                      onValueChange={setStatuses}
                    >
                      <CascaderTrigger
                        aria-label="Filter by KPI status"
                        render={<Button variant="outline" size="sm" />}
                      >
                        Status
                        {statuses.length > 0 && (
                          <Badge size="xs" variant="secondary">
                            {statuses.length}
                          </Badge>
                        )}
                        <ChevronDownIcon />
                      </CascaderTrigger>
                      <CascaderContent align="start" className="w-56">
                        <CascaderPanel>
                          <CascaderList>
                            <CascaderItems />
                          </CascaderList>
                          <CascaderStatus />
                        </CascaderPanel>
                      </CascaderContent>
                    </Cascader>

                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger size="sm" className="w-36">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All categories</SelectItem>
                        {CATEGORIES.map((entry) => (
                          <SelectItem key={entry} value={entry}>
                            {entry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="ghost" size="sm" onClick={resetView}>
                    <RotateCcwIcon />
                    Reset view
                  </Button>
                </div>

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>

                <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="bg-purple-500/60 size-2 rounded-sm" />
                      Promo week
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="bg-destructive/70 size-2 rounded-sm" />
                      Promo at a loss
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="bg-success size-2 rounded-sm" />
                      At target, full price
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="bg-info h-0.5 w-4 rounded-full" />
                      This period
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="bg-muted-foreground/40 h-0.5 w-4 rounded-full" />
                      Period before
                    </span>
                  </div>
                  <span>
                    {formatCompactMoney(
                      PRODUCTS.reduce(
                        (sum, product) => sum + (product.revenue ?? 0),
                        0,
                      ),
                    )}{" "}
                    catalog revenue · {PROMO_MONTHS.length} promo weeks tracked
                  </span>
                </div>

                <DataGridPagination
                  sizes={[10, 20, 30]}
                  info="{from} - {to} of {count} products"
                  rowsPerPageLabel="Rows per page"
                  className={cn(filtered.length === 0 && "hidden")}
                />
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <ProductSheet
        product={selectedProduct}
        guardrails={guardrails}
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      />
    </>
  )
}
