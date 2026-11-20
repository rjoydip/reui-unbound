import { useMemo, useState } from "react"
import {
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  InfoIcon,
  PlusIcon,
  SearchIcon,
  TriangleAlertIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DataGrid,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
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
import { cn } from "cn"

import { LINE_FILTERS, MONTHS, TREASURY_ROWS, money } from "./data"
import type { TreasuryRow } from "./data"

function Ring({ value, tone }: { value: number; tone: TreasuryRow["tone"] }) {
  const radius = 7
  const circumference = 2 * Math.PI * radius
  const color =
    tone === "positive"
      ? "text-success"
      : tone === "warning"
        ? "text-warning"
        : "text-muted-foreground"
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" className={color}>
      <circle cx="9" cy="9" r={radius} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2" />
      <circle
        cx="9"
        cy="9"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - value / 100)}
        transform="rotate(-90 9 9)"
      />
    </svg>
  )
}


function monthDays(year: number, month: number) {
  const first = new Date(year, month, 1)
  const days = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = Array.from({ length: first.getDay() }, () => null)
  for (let day = 1; day <= days; day += 1) cells.push(day)
  return cells
}

function MonthGrid({ year, month, highlight }: { year: number; month: number; highlight?: number }) {
  const name = new Date(year, month).toLocaleString("en-US", { month: "long", year: "numeric" })
  return (
    <div className="flex-1">
      <div className="mb-2 text-center text-sm font-medium">{name}</div>
      <div className="grid grid-cols-7 gap-y-1 text-center text-[11px]">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <span key={day} className="text-muted-foreground">
            {day}
          </span>
        ))}
        {monthDays(year, month).map((day, index) => (
          <span
            key={index}
            className={cn(
              "mx-auto flex size-6 items-center justify-center rounded-full tabular-nums",
              day === highlight ? "bg-muted font-medium" : "text-muted-foreground/70",
            )}
          >
            {day ?? ""}
          </span>
        ))}
      </div>
    </div>
  )
}

function DateRangePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex h-8 items-center gap-2 rounded-md border px-3 text-sm hover:bg-muted/40"
        >
          <ChevronLeftIcon className="size-3.5" />
          Apr 2026 - Aug 2026
          <CalendarIcon className="text-muted-foreground size-3.5" />
          <ChevronRightIcon className="size-3.5" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[420px] p-3">
        <div className="mb-2 flex items-center justify-between">
          <ChevronLeftIcon className="size-4" />
          <div className="text-sm font-medium">November 2026</div>
          <div className="text-sm font-medium">December 2026</div>
          <ChevronRightIcon className="size-4" />
        </div>
        <div className="flex gap-3">
          <MonthGrid year={2026} month={10} highlight={19} />
          <MonthGrid year={2026} month={11} />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function TreasuryWaterfallBlock() {
  const [tab, setTab] = useState("Actuals")
  const [search, setSearch] = useState("")
  const [expanded, setExpanded] = useState<string[]>(["cash", "burn", "income", "expenses", "funding"])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const parents = TREASURY_ROWS.filter((row) => row.parentId === null)
  const childrenOf = (id: string) => TREASURY_ROWS.filter((row) => row.parentId === id)
  const filteredParents = parents.filter((row) =>
    row.label.toLowerCase().includes(search.trim().toLowerCase()),
  )
  const pageStart = pagination.pageIndex * pagination.pageSize
  const pageParents = filteredParents.slice(pageStart, pageStart + pagination.pageSize)
  const visibleRows = pageParents.flatMap((row) =>
    expanded.includes(row.id) ? [row, ...childrenOf(row.id)] : [row],
  )

  function toggleExpanded(id: string) {
    setExpanded((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id],
    )
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, TreasuryRow>[]>(() => {
    const lineColumn: ColumnDef<DataGridFeatures, TreasuryRow> = {
      id: "line",
      accessorKey: "label",
      header: ({ column }) => <DataGridColumnHeader title="Line Item" column={column} />,
      cell: ({ row }) => {
        const child = row.original.parentId !== null
        const hasChildren = childrenOf(row.original.id).length > 0
        const value = Number.parseFloat(row.original.percent)
        return (
          <div
            className="flex items-center justify-between gap-3"
            style={{ paddingLeft: child ? 20 : 0 }}
          >
            <div className="flex min-w-0 items-center gap-1.5">
              {hasChildren ? (
                <button
                  type="button"
                  onClick={() => toggleExpanded(row.original.id)}
                  aria-label={expanded.includes(row.original.id) ? "Collapse" : "Expand"}
                  className="text-muted-foreground hover:text-foreground flex size-5 items-center justify-center rounded"
                >
                  {expanded.includes(row.original.id) ? (
                    <ChevronDownIcon className="size-4" />
                  ) : (
                    <ChevronRightIcon className="size-4" />
                  )}
                </button>
              ) : (
                <span className="w-5" />
              )}
              <span
                className={cn(
                  "truncate text-sm",
                  !child && "font-semibold",
                  child && "text-muted-foreground",
                )}
              >
                {row.original.label}
              </span>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 text-xs">
              {hasChildren ? (
                <Ring value={value} tone={row.original.tone} />
              ) : row.original.tone === "warning" ? (
                <TriangleAlertIcon className="text-destructive size-3.5" />
              ) : (
                <InfoIcon className="text-muted-foreground size-3.5" />
              )}
              <span
                className={cn(
                  "tabular-nums",
                  row.original.tone === "warning"
                    ? "text-destructive"
                    : row.original.tone === "positive"
                      ? "text-success-foreground"
                      : "text-muted-foreground",
                )}
              >
                {row.original.percent}
              </span>
            </span>
          </div>
        )
      },
      size: 300,
      enableHiding: false,
    }

    const monthColumns: ColumnDef<DataGridFeatures, TreasuryRow>[] = MONTHS.map(
      (month, index) => ({
        id: `month-${index}`,
        accessorFn: (row) => row.values[index] ?? 0,
        header: () => (
          <div className="text-muted-foreground w-full text-right text-xs font-medium">
            {month}
          </div>
        ),
        cell: ({ row }) => {
          const delta = row.original.deltas[index] ?? 0
          const value = row.original.values[index] ?? 0
          const dir =
            tab === "Variance"
              ? value > 0
                ? "up"
                : value < 0
                  ? "down"
                  : "flat"
              : (row.original.deltaDirs[index] ?? "flat")
          return (
            <div
              className={cn(
                "flex items-center justify-end gap-1.5 text-right text-sm tabular-nums",
                row.original.parentId === null && "font-semibold",
              )}
            >
              <span>{money(row.original.values[index] ?? 0)}</span>
              <span
                className={cn(
                  "flex items-center gap-0.5 text-[11px] font-normal",
                  dir === "up"
                    ? "text-success-foreground"
                    : dir === "down"
                      ? "text-destructive"
                      : "text-muted-foreground",
                )}
              >
                {dir === "up" ? (
                  <ArrowUpRightIcon className="size-3" />
                ) : dir === "down" ? (
                  <ArrowDownRightIcon className="size-3" />
                ) : (
                  <ArrowRightIcon className="size-3" />
                )}
                {delta}%
              </span>
            </div>
          )
        },
        size: 140,
        enableSorting: false,
      }),
    )

    return [lineColumn, ...monthColumns]
  }, [expanded, tab])

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: visibleRows,
    getRowId: (row) => row.id,
    state: { pagination },
    onPaginationChange: setPagination,
    manualPagination: true,
    pageCount: Math.ceil(filteredParents.length / pagination.pageSize),
  })

  const allParents = parents.map((row) => row.id)
  const cashRow = TREASURY_ROWS.find((row) => row.id === "cash")
  const burnRow = TREASURY_ROWS.find((row) => row.id === "burn")
  const variance = tab === "Variance"
  const closingCash = variance
    ? (cashRow?.values ?? [])
    : [243000, 181000, 121000, 62000, 245000]
  const netBurn = variance
    ? (burnRow?.values ?? [])
    : [-47000, -62000, -60000, -93000, -15000]
  const summaryLabel = variance ? "Actual Vs Plan" : "End Of Month"
  const netLabel = variance ? "Actual Vs Plan" : "Operating Movement"

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Treasury waterfall</h1>
      <div className="w-full max-w-7xl overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/50 px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Treasury Waterfall</h2>
              <p className="text-muted-foreground text-sm">5 Visible Lines • Closing Cash</p>
            </div>
            <Button size="sm">
              <PlusIcon />
              New Transaction
            </Button>
          </div>

          <DataGrid
            table={table}
            recordCount={filteredParents.length}
            emptyMessage="No lines match this view."
            tableClassNames={{ headerRow: "[&>th]:py-3" }}
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true, cellBorder: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b">
                <div className="flex items-center gap-1">
                  {["Actuals", "Plan", "Variance"].map((entry) => (
                    <button
                      key={entry}
                      type="button"
                      onClick={() => {
                        setTab(entry)
                        setExpanded(
                          entry === "Variance"
                            ? ["cash", "burn"]
                            : allParents,
                        )
                      }}
                      className={cn(
                        "-mb-px border-b-2 px-2.5 py-2 text-sm font-medium transition-colors",
                        tab === entry
                          ? "border-foreground text-foreground"
                          : "text-muted-foreground hover:text-foreground border-transparent",
                      )}
                    >
                      {entry}
                    </button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setExpanded((current) =>
                      current.length === allParents.length ? [] : allParents,
                    )
                  }
                >
                  {expanded.length === allParents.length ? "Collapse All" : "Expand All"}
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <InputGroup className="h-9 w-full sm:max-w-64">
                  <InputGroupAddon>
                    <SearchIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    value={search}
                    onChange={(event) => {
                      setSearch(event.target.value)
                      setPagination({ pageIndex: 0, pageSize: 5 })
                    }}
                    placeholder="Search Line Items"
                    className="text-sm"
                  />
                </InputGroup>
                <Select defaultValue="All Lines">
                  <SelectTrigger size="sm" className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {LINE_FILTERS.map((entry) => (
                      <SelectItem key={entry} value={entry}>
                        {entry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="ml-auto">
                  <DateRangePopover />
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border">
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
                <div className="border-t">
                  <div className="grid grid-cols-[300px_repeat(5,minmax(0,1fr))] border-b">
                    <div className="px-3 py-2">
                      <div className="text-muted-foreground text-xs">Treasury Summary</div>
                      <div className="text-sm font-semibold">Closing Cash</div>
                    </div>
                    {closingCash.map((value, index) => (
                      <div key={index} className="border-l px-3 py-2 text-right">
                        <div className="text-muted-foreground text-[11px]">{summaryLabel}</div>
                        <div className="text-sm font-semibold tabular-nums">
                          {money(value)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-[320px_repeat(5,minmax(0,1fr))]">
                    <div className="px-3 py-2">
                      <div className="text-muted-foreground text-xs">5 Visible Lines</div>
                      <div className="text-sm font-semibold">Net Burn</div>
                    </div>
                    {netBurn.map((value, index) => (
                      <div key={index} className="border-l px-3 py-2 text-right">
                        <div className="text-muted-foreground text-[11px]">
                          {netLabel}
                        </div>
                        <div className="text-sm font-semibold tabular-nums">
                          {money(value)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <DataGridPagination
                sizes={[5, 10]}
                info="{from} - {to} of {count}"
                rowsPerPageLabel="Rows per page"
                className={filteredParents.length === 0 ? "hidden" : undefined}
              />
            </div>
          </DataGrid>
      </div>
    </div>
  )
}

export default TreasuryWaterfallBlock
