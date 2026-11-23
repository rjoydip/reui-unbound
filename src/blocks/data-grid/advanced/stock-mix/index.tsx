import { useMemo, useState } from "react"
import {
  CheckIcon,
  RotateCcwIcon,
  SearchIcon,
  SendIcon,
  SparklesIcon,
} from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridScrollArea } from "@/components/kit/data-grid/~data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableFootRow,
  DataGridTableFootRowCell,
} from "@/components/kit/data-grid/~data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"
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
  METRICS,
  MODELS,
  formatMetric,
  formatMoney,
  metricTotal,
  orderBudget,
} from "./data"
import type { Metric } from "./data"
import { CellSheet, MetricCell } from "./parts"

const BUDGET = 5000

export default function StockMixBlock() {
  const [metrics, setMetrics] = useState<Metric[]>(METRICS)
  const [search, setSearch] = useState("")
  const [plan, setPlan] = useState("autumn")
  const [orderTo, setOrderTo] = useState("target")
  const [detail, setDetail] = useState<{ metricId: string; modelId: string } | null>(
    null,
  )

  const models = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (query === "") return MODELS
    const matched = MODELS.filter((model) =>
      [model.name, model.category, model.supplier].some((field) =>
        field.toLowerCase().includes(query),
      ),
    )
    return matched.length > 0 ? matched : MODELS
  }, [search])

  function setValue(metricId: string, modelId: string, value: number) {
    setMetrics((current) =>
      current.map((metric) =>
        metric.id === metricId
          ? { ...metric, values: { ...metric.values, [modelId]: value } }
          : metric,
      ),
    )
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, Metric>[]>(() => {
    const modelColumns: ColumnDef<DataGridFeatures, Metric>[] = models.map(
      (model) => ({
        id: model.id,
        accessorFn: (metric) => metric.values[model.id],
        header: () => (
          <div className="flex flex-col items-end">
            <span className="text-xs font-semibold">{model.name}</span>
            <span className="text-muted-foreground text-[10px] font-normal">
              {model.category}
            </span>
          </div>
        ),
        cell: ({ row }) => (
          <MetricCell
            metric={row.original}
            model={model}
            onChange={setValue}
            onOpen={() =>
              setDetail({ metricId: row.original.id, modelId: model.id })
            }
          />
        ),
        size: 96,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      }),
    )

    return [
      {
        accessorKey: "label",
        header: () => <span className="text-xs font-semibold">Aisle / order</span>,
        cell: ({ row }) => (
          <div className="flex min-w-0 items-center gap-2">
            <span className="text-muted-foreground/60 font-mono text-[10px]">
              {row.original.id === "order" ? "03" : "01"}
            </span>
            <div className="min-w-0">
              <div className="text-foreground truncate text-sm font-medium">
                {row.original.label}
              </div>
              <div className="text-muted-foreground truncate text-[11px]">
                {row.original.hint}
              </div>
            </div>
          </div>
        ),
        size: 220,
        enableSorting: false,
        enableHiding: false,
      },
      ...modelColumns,
      {
        id: "total",
        accessorFn: (metric) => metricTotal(metric, models),
        header: () => (
          <div className="flex flex-col items-end">
            <span className="text-xs font-semibold">Total</span>
            <span className="text-muted-foreground text-[10px] font-normal">
              All categories
            </span>
          </div>
        ),
        cell: ({ row }) => {
          const total = metricTotal(row.original, models)
          if (total === null) {
            return (
              <span className="text-muted-foreground/60 ml-auto text-sm">-</span>
            )
          }
          return (
            <span className="ml-auto text-sm font-semibold tabular-nums">
              {row.original.kind === "cost"
                ? formatMoney(total)
                : formatMetric(row.original, total)}
            </span>
          )
        },
        size: 90,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
    ]
  }, [models])

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: metrics,
    state: {
      columnPinning: { start: ["label"], end: ["total"] },
    },
  })

  const orderMetric = metrics.find((metric) => metric.id === "order")
  const orders = models.map((model) =>
    Number(orderMetric?.values[model.id] ?? 0),
  )
  const onPlan = orders.filter((value) => value === 0).length
  const watch = orders.filter((value) => value !== 0 && Math.abs(value) <= 4).length
  const offPlan = orders.filter((value) => Math.abs(value) > 4).length
  const spent = orderBudget(metrics)

  const detailMetric =
    metrics.find((metric) => metric.id === detail?.metricId) ?? null
  const detailModel = models.find((model) => model.id === detail?.modelId) ?? null

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Stock mix</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Stock Mix</FrameTitle>
                <FrameDescription>
                  Maple Street Market · $250k orders · v12
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setMetrics(METRICS)
                    toast("Plan reverted", {
                      description: "Suggested orders and costs are back to v12.",
                    })
                  }}
                >
                  <RotateCcwIcon />
                  Revert
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    toast("Orders submitted", {
                      description: `${orders.filter((value) => value !== 0).length} lines · ${formatMoney(spent, false)} committed.`,
                    })
                  }
                >
                  <SendIcon />
                  Submit Orders
                </Button>
              </div>
            </FrameHeader>

            <div className="grid gap-3 lg:grid-cols-[13rem_minmax(0,1fr)]">
              <div className="flex flex-col gap-3">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-muted-foreground text-xs">Plan</span>
                    <Select value={plan} onValueChange={setPlan}>
                      <SelectTrigger size="sm" className="h-7 w-28">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="autumn">Autumn</SelectItem>
                        <SelectItem value="winter">Winter</SelectItem>
                        <SelectItem value="spring">Spring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-muted-foreground text-xs">
                      Order to
                    </span>
                    <Select value={orderTo} onValueChange={setOrderTo}>
                      <SelectTrigger size="sm" className="h-7 w-28">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="target">Target</SelectItem>
                        <SelectItem value="min">Minimum</SelectItem>
                        <SelectItem value="max">Maximum</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="text-xs font-medium">Stages</div>
                  <div className="mt-2 flex flex-col gap-1.5 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="bg-success size-1.5 rounded-full" />
                        On plan
                      </span>
                      <span className="tabular-nums">{onPlan}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="bg-warning size-1.5 rounded-full" />
                        Watch
                      </span>
                      <span className="tabular-nums">{watch}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="bg-destructive size-1.5 rounded-full" />
                        Off plan
                      </span>
                      <span className="tabular-nums">{offPlan}</span>
                    </div>
                    <div className="text-muted-foreground flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="bg-muted-foreground/40 size-1.5 rounded-full" />
                        Unpriced
                      </span>
                      <span className="tabular-nums">0</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/40 rounded-lg border p-3">
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <SparklesIcon className="text-primary size-3.5" />
                    Costs
                  </div>
                  <div className="text-muted-foreground mt-0.5 text-xs">
                    {onPlan + watch + offPlan} of {models.length} updated today
                  </div>
                  <div className="mt-2 text-lg font-semibold tabular-nums">
                    {formatMoney(spent, false)}
                  </div>
                  <div className="text-muted-foreground text-[11px]">
                    Budget {formatMoney(BUDGET, false)} ·{" "}
                    {formatMoney(Math.max(BUDGET - spent, 0), false)} left
                  </div>
                </div>
              </div>

              <div className="flex min-w-0 flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <InputGroup className="w-full sm:max-w-64">
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Filter categories..."
                      aria-label="Filter categories"
                      className="text-sm"
                    />
                  </InputGroup>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="success-light" size="sm">
                      {onPlan} on plan
                    </Badge>
                    <Badge variant="warning-light" size="sm">
                      {watch} watch
                    </Badge>
                    <Badge variant="destructive-light" size="sm">
                      {offPlan} off plan
                    </Badge>
                  </div>
                </div>

                <DataGrid
                  table={table}
                  recordCount={metrics.length}
                  tableLayout={{ headerBackground: true, columnsPinnable: true }}
                  tableClassNames={{ bodyRow: "hover:bg-muted/30" }}
                >
                  <DataGridContainer>
                    <DataGridScrollArea>
                      <DataGridTable
                        footerContent={
                          <DataGridTableFootRow>
                            <DataGridTableFootRowCell
                              colSpan={models.length + 2}
                              className="text-muted-foreground text-xs"
                            >
                              Budget {formatMoney(BUDGET, false)} ·{" "}
                              {formatMoney(spent, false)} after suggested orders
                              and $130 fees
                            </DataGridTableFootRowCell>
                          </DataGridTableFootRow>
                        }
                      />
                    </DataGridScrollArea>
                  </DataGridContainer>
                </DataGrid>

                <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="text-success size-3.5" />
                    Suggested orders and case costs are editable. Click any other
                    cell for detail.
                  </span>
                  <span>{models.length} categories · sheet v12</span>
                </div>
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>

      <CellSheet
        metric={detailMetric}
        model={detailModel}
        onOpenChange={(open) => {
          if (!open) setDetail(null)
        }}
      />
    </>
  )
}
