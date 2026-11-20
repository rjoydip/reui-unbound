import { useMemo, useState } from "react"
import { RotateCcwIcon, SparklesIcon } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "cn"

import {
  MONTHS,
  PERIODS,
  buildRows,
  formatK,
  periodTotal,
  primaryValue,
} from "./data"
import type {
  ForecastOverrides,
  Period,
  PnlRow,
  ViewMode,
} from "./data"
import {
  ChartBand,
  ConfidenceCell,
  FlagLegend,
  LineCell,
  MonthCell,
  TotalCell,
  VsBudgetCell,
} from "./parts"
import { ForecastDialog } from "./dialogs"

interface ForecastEdit {
  lineId: string
  index: number
}

export function RetailPnlBlock() {
  const [period, setPeriod] = useState<Period>("h2")
  const [view, setView] = useState<ViewMode>("actual")
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})
  const [overrides, setOverrides] = useState<ForecastOverrides>({})
  const [edit, setEdit] = useState<ForecastEdit | null>(null)

  const rows = useMemo(() => buildRows(overrides), [overrides])
  const months = PERIODS.find((entry) => entry.value === period)!.months

  const visibleRows = useMemo(
    () =>
      rows.filter(
        (row) =>
          row.kind !== "leaf" || !collapsed[row.group ?? ""],
      ),
    [rows, collapsed],
  )

  const revenue = rows.find((row) => row.id === "revenue")!
  const grossMargin = rows.find((row) => row.id === "gross-margin")!
  const operatingProfit = rows.find((row) => row.id === "operating-profit")!

  const revenueTotal = periodTotal(revenue, months, view)
  const marginTotal = periodTotal(grossMargin, months, view)
  const profitTotal = periodTotal(operatingProfit, months, view)
  const marginPct = revenueTotal === 0 ? 0 : (marginTotal / revenueTotal) * 100
  const profitPct = revenueTotal === 0 ? 0 : (profitTotal / revenueTotal) * 100
  const forecastCount = months.filter((index) => MONTHS[index].forecast).length

  const editLine = edit
    ? rows.find((row) => row.id === edit.lineId) ?? null
    : null

  function saveForecast(lineId: string, index: number, value: number) {
    const label = rows.find((row) => row.id === lineId)?.label ?? "Line"
    setOverrides((current) => ({
      ...current,
      [lineId]: { ...(current[lineId] ?? {}), [index]: value },
    }))
    toast("Forecast updated", {
      description: `${label} · ${MONTHS[index].label} ${formatK(value)}`,
    })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, PnlRow>[]>(() => {
    const monthColumns: ColumnDef<DataGridFeatures, PnlRow>[] = months.map(
      (index) => ({
        id: `month-${index}`,
        accessorFn: (row: PnlRow) => primaryValue(row, index, view),
        header: ({ column }) => (
          <DataGridColumnHeader
            title={MONTHS[index].label}
            column={column}
          />
        ),
        cell: ({ row }) => (
          <MonthCell
            row={row.original}
            index={index}
            view={view}
            onEdit={() => setEdit({ lineId: row.original.id, index })}
          />
        ),
        size: 64,
        enableSorting: false,
        meta: { cellClassName: "px-1 py-0" },
      }),
    )

    return [
      {
        id: "line",
        accessorFn: (row) => row.label,
        header: ({ column }) => (
          <DataGridColumnHeader title="Line" column={column} />
        ),
        cell: ({ row }) => (
          <LineCell
            row={row.original}
            collapsed={!!collapsed[row.original.id]}
            onToggle={() =>
              setCollapsed((current) => ({
                ...current,
                [row.original.id]: !current[row.original.id],
              }))
            }
          />
        ),
        size: 220,
        enableHiding: false,
        enableSorting: false,
      },
      ...monthColumns,
      {
        id: "total",
        accessorFn: (row) => periodTotal(row, months, view),
        header: ({ column }) => (
          <DataGridColumnHeader
            title={PERIODS.find((entry) => entry.value === period)!.label}
            column={column}
          />
        ),
        cell: ({ row }) => (
          <TotalCell row={row.original} indices={months} view={view} />
        ),
        size: 90,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "vsBudget",
        accessorFn: (row) => {
          const total = periodTotal(row, months, view)
          const budget = periodTotal(row, months, "budget")
          return budget === 0 ? 0 : ((total - budget) / Math.abs(budget)) * 100
        },
        header: ({ column }) => (
          <DataGridColumnHeader title="vs Budget" column={column} />
        ),
        cell: ({ row }) => (
          <VsBudgetCell row={row.original} indices={months} view={view} />
        ),
        size: 96,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "confidence",
        accessorFn: (row) => row.confidence ?? "",
        header: ({ column }) => (
          <DataGridColumnHeader title="Confidence" column={column} />
        ),
        cell: ({ row }) => <ConfidenceCell row={row.original} />,
        size: 100,
        enableSorting: false,
      },
    ]
  }, [months, view, collapsed, period])

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: visibleRows,
    pageCount: 1,
    getRowId: (row: PnlRow) => row.id,
    state: { pagination: { pageIndex: 0, pageSize: 200 } },
  })

  const periodLabel = PERIODS.find((entry) => entry.value === period)!.label

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Retail P&amp;L outlook</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>P&amp;L Outlook</FrameTitle>
                <FrameDescription>
                  FY 2026 in $ thousands, closed through September · {periodLabel}
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <ToggleGroup
                  type="single"
                  size="sm"
                  variant="outline"
                  value={view}
                  onValueChange={(value) => {
                    if (value) setView(value as ViewMode)
                  }}
                >
                  <ToggleGroupItem value="actual">Actual</ToggleGroupItem>
                  <ToggleGroupItem value="budget">Budget</ToggleGroupItem>
                  <ToggleGroupItem value="prior">Prior</ToggleGroupItem>
                </ToggleGroup>
                <Select
                  value={period}
                  onValueChange={(value) => setPeriod(value as Period)}
                >
                  <SelectTrigger size="sm" className="w-32">
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
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={visibleRows.length}
              emptyMessage="No P&L lines in this view."
              tableLayout={{
                headerBackground: true,
                dense: true,
                width: "fixed",
              }}
            >
              <div className="flex flex-col gap-3">
                <ChartBand row={revenue} months={months} />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="info-light" size="lg" className="gap-1.5">
                      <SparklesIcon />
                      {forecastCount} forecast month
                      {forecastCount === 1 ? "" : "s"} editable
                    </Badge>
                    {Object.keys(overrides).length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setOverrides({})
                          toast("Forecasts reset", {
                            description:
                              "Every edited month is back to the baseline plan.",
                          })
                        }}
                      >
                        <RotateCcwIcon />
                        Reset edits
                      </Button>
                    )}
                  </div>
                  <FlagLegend view={view} />
                </div>

                <DataGridContainer
                  className={cn(
                    "[&_tr:has([data-row-kind=subtotal])_td]:bg-muted/35",
                    "[&_tr:has([data-row-kind=subtotal])_td]:border-t-2",
                    "[&_tr:has([data-row-kind=subtotal])_td]:font-medium",
                  )}
                >
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-2">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-baseline gap-1.5">
                      <span className="text-muted-foreground text-xs">
                        Net revenue
                      </span>
                      <span className="font-semibold tabular-nums">
                        {formatK(revenueTotal)}
                      </span>
                    </span>
                    <span className="flex items-baseline gap-1.5">
                      <span className="text-muted-foreground text-xs">
                        Gross margin
                      </span>
                      <span className="font-medium tabular-nums">
                        {marginPct.toFixed(1)}%
                      </span>
                    </span>
                    <span className="flex items-baseline gap-1.5">
                      <span className="text-muted-foreground text-xs">
                        Operating profit
                      </span>
                      <span className="font-medium tabular-nums">
                        {profitPct.toFixed(1)}%
                      </span>
                    </span>
                  </div>
                  <span className="text-muted-foreground text-[11px]">
                    {view === "actual"
                      ? "Actuals through Sep · forecast Oct – Dec"
                      : view === "budget"
                        ? "Budget view · variance hidden"
                        : "Prior year view · variance vs budget"}
                  </span>
                </div>
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <ForecastDialog
        key={
          edit ? `${edit.lineId}-${edit.index}` : "closed"
        }
        line={editLine}
        index={edit?.index ?? 9}
        open={edit !== null}
        onOpenChange={(open) => {
          if (!open) setEdit(null)
        }}
        onSave={saveForecast}
      />
    </>
  )
}

export default RetailPnlBlock
