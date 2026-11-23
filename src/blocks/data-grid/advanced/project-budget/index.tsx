import { useEffect, useMemo, useState } from "react"
import {
  Columns3Icon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  TriangleAlertIcon,
  TrendingUpIcon,
  WalletIcon,
  XIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState, SortingState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import { DataGridColumnVisibility } from "@/components/kit/data-grid/~data-grid-column-visibility"
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
import { cn } from "cn"

import {
  BUDGET_LINES,
  DECISION_META,
  WORKSTREAMS,
  formatMoney,
  formatVariance,
  overBudget,
  totals,
} from "./data"
import type { BudgetLine, Decision, Workstream } from "./data"
import {
  BudgetCard,
  ForecastCell,
  LineCell,
  ScheduleCell,
  ScheduleHeader,
  SpentCell,
  VarianceCell,
} from "./parts"
import { LineSheet } from "./line-sheet"

type Tab = "all" | "over" | "under" | "needs"

export function ProjectBudgetBlock() {
  const [lines, setLines] = useState<BudgetLine[]>(BUDGET_LINES)
  const [search, setSearch] = useState("")
  const [workstream, setWorkstream] = useState<"all" | Workstream>("all")
  const [tab, setTab] = useState<Tab>("all")
  const [sorting, setSorting] = useState<SortingState>([{ id: "budget", desc: true }])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
  const [sheetId, setSheetId] = useState<string | null>(null)

  const base = useMemo(() => {
    const query = search.trim().toLowerCase()
    return lines.filter((line) => {
      if (workstream !== "all" && line.workstream !== workstream) return false
      if (query === "") return true
      return [line.name, line.vendor, line.basis, line.workstream].some((value) =>
        value.toLowerCase().includes(query),
      )
    })
  }, [lines, search, workstream])

  const filtered = useMemo(() => {
    if (tab === "over") return base.filter(overBudget)
    if (tab === "under") return base.filter((line) => !overBudget(line))
    if (tab === "needs") return base.filter((line) => overBudget(line) && !line.decision)
    return base
  }, [base, tab])

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, workstream, tab])

  const summary = useMemo(() => totals(base), [base])
  const overLines = base.filter(overBudget)
  const overrun = overLines.reduce((total, line) => total + (line.forecast - line.budget), 0)
  const activeLine = lines.find((line) => line.id === sheetId) ?? null
  const counts = {
    all: base.length,
    over: overLines.length,
    under: base.length - overLines.length,
    needs: overLines.filter((line) => !line.decision).length,
  }

  function updateLine(id: string, patch: Partial<BudgetLine>) {
    const snapshot = lines
    setLines((current) =>
      current.map((line) => (line.id === id ? { ...line, ...patch } : line)),
    )
    return snapshot
  }

  function saveForecast(line: BudgetLine, value: number) {
    const snapshot = updateLine(line.id, { forecast: value, reforecast: true })
    toast("Forecast updated", {
      description: `${line.name} · ${formatMoney(line.budget)} budget · ${formatMoney(value)} forecast.`,
      action: { label: "Undo", onClick: () => setLines(snapshot) },
    })
  }

  function decide(line: BudgetLine, decision: Decision | null) {
    const note =
      decision === "cover"
        ? "Covered from the $24,000 contingency."
        : decision === "adjust"
          ? "Scope reduced with the client; change order pending."
          : decision === "hold"
            ? "Spend paused until the next steering review."
            : undefined
    const snapshot = updateLine(line.id, { decision: decision ?? undefined, decisionNote: note })
    toast(decision ? DECISION_META[decision].label : "Decision cleared", {
      description: `${line.name} · ${formatVariance(line.budget - line.forecast)} variance.`,
      action: { label: "Undo", onClick: () => setLines(snapshot) },
    })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, BudgetLine>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => <DataGridColumnHeader title="Line" column={column} />,
        cell: ({ row }) => <LineCell line={row.original} />,
        size: 245,
        enableHiding: false,
      },
      {
        id: "schedule",
        header: () => <ScheduleHeader />,
        cell: ({ row }) => <ScheduleCell line={row.original} />,
        size: 155,
        enableSorting: false,
      },
      {
        accessorKey: "budget",
        header: ({ column }) => <DataGridColumnHeader title="Budget" column={column} />,
        cell: ({ row }) => (
          <span className="block text-right font-medium tabular-nums">
            {formatMoney(row.original.budget)}
          </span>
        ),
        size: 110,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        accessorKey: "actual",
        header: ({ column }) => <DataGridColumnHeader title="Actual" column={column} />,
        cell: ({ row }) => (
          <span className="block text-right tabular-nums">
            {formatMoney(row.original.actual)}
          </span>
        ),
        size: 105,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        id: "spent",
        accessorFn: (line) => (line.budget ? line.actual / line.budget : 0),
        header: ({ column }) => <DataGridColumnHeader title="Spent" column={column} />,
        cell: ({ row }) => <SpentCell line={row.original} />,
        size: 150,
      },
      {
        accessorKey: "forecast",
        header: ({ column }) => <DataGridColumnHeader title="Forecast" column={column} />,
        cell: ({ row }) => (
          <ForecastCell
            line={row.original}
            onSave={(value) => saveForecast(row.original, value)}
          />
        ),
        size: 125,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        id: "variance",
        accessorFn: (line) => line.budget - line.forecast,
        header: ({ column }) => <DataGridColumnHeader title="Over / Under" column={column} />,
        cell: ({ row }) => <VarianceCell line={row.original} />,
        size: 155,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <div className="flex justify-end" onClick={(event) => event.stopPropagation()}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" className="text-muted-foreground">
                  <MoreHorizontalIcon />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel className="font-medium">{row.original.name}</DropdownMenuLabel>
                <DropdownMenuItem onSelect={() => setSheetId(row.original.id)}>
                  View spend detail
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => decide(row.original, "cover")}>
                  Cover from contingency
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => decide(row.original, "adjust")}>
                  Adjust scope
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => decide(row.original, "hold")}>
                  Hold line
                </DropdownMenuItem>
                {row.original.decision && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={() => decide(row.original, null)}>
                      Clear decision
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
        size: 44,
        enableSorting: false,
        enableHiding: false,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lines],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (line: BudgetLine) => line.id,
    state: { sorting, columnVisibility, pagination },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  const spentTotal = summary.budget ? (summary.actual / summary.budget) * 100 : 0

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Project budget</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Project Budget</FrameTitle>
                <FrameDescription>
                  Storefront replatform · updated Nov 14 · {lines.length} lines ·{" "}
                  {WORKSTREAMS.length} workstreams
                </FrameDescription>
              </div>
              <Button
                size="sm"
                onClick={() =>
                  toast("Add line", { description: "New budget lines are created from an approved change order." })
                }
              >
                <PlusIcon />
                Add line
              </Button>
            </FrameHeader>

            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
              <BudgetCard
                label="Total budget"
                value={formatMoney(summary.budget)}
                note={`${base.length} lines · contingency $24,000`}
                trend={base.map((line) => line.budget)}
                tone="bg-primary/60"
                icon={WalletIcon}
                iconTone="text-primary"
              />
              <BudgetCard
                label="Actual spend"
                value={formatMoney(summary.actual)}
                note={`${Math.round(spentTotal)}% of budget spent`}
                trend={base.map((line) => line.actual)}
                tone="bg-success/60"
                icon={TrendingUpIcon}
                iconTone="text-success-foreground"
                progress={spentTotal}
              />
              <BudgetCard
                label="Forecast at completion"
                value={formatMoney(summary.forecast)}
                note={`${formatVariance(summary.budget - summary.forecast)} vs budget`}
                trend={base.map((line) => line.forecast)}
                tone="bg-info/60"
                icon={TrendingUpIcon}
                iconTone="text-info-foreground"
              />
              <BudgetCard
                label="At risk"
                value={formatMoney(overrun)}
                note={`${overLines.length} of ${base.length} lines over`}
                trend={overLines.length ? overLines.map((line) => line.forecast - line.budget) : [1, 1, 1, 1]}
                tone="bg-destructive/60"
                icon={TriangleAlertIcon}
                iconTone="text-destructive"
              />
            </div>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No budget lines match these filters."
              tableLayout={{ headerBackground: true }}
              onRowClick={(line) => setSheetId(line.id)}
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <ToggleGroup
                      type="single"
                      value={tab}
                      onValueChange={(value) => value && setTab(value as Tab)}
                      size="sm"
                      variant="outline"
                      spacing={0}
                      aria-label="Filter budget lines"
                    >
                      <ToggleGroupItem value="all">All {counts.all}</ToggleGroupItem>
                      <ToggleGroupItem value="over">Over {counts.over}</ToggleGroupItem>
                      <ToggleGroupItem value="under">Under {counts.under}</ToggleGroupItem>
                      <ToggleGroupItem value="needs">Needs decision {counts.needs}</ToggleGroupItem>
                    </ToggleGroup>

                    <InputGroup className="w-full sm:max-w-56">
                      <InputGroupAddon>
                        <SearchIcon />
                      </InputGroupAddon>
                      <InputGroupInput
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Line, vendor or basis..."
                        aria-label="Search budget lines"
                        className="text-sm"
                      />
                    </InputGroup>

                    <Select
                      value={workstream}
                      onValueChange={(value) => setWorkstream(value as "all" | Workstream)}
                    >
                      <SelectTrigger size="sm" className="w-36" aria-label="Filter by workstream">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All workstreams</SelectItem>
                        {WORKSTREAMS.map((entry) => (
                          <SelectItem key={entry} value={entry}>
                            {entry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {(search || workstream !== "all" || tab !== "all") && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSearch("")
                          setWorkstream("all")
                          setTab("all")
                        }}
                      >
                        <XIcon />
                        Clear
                      </Button>
                    )}
                  </div>

                  <DataGridColumnVisibility
                    table={table}
                    trigger={
                      <Button variant="outline" size="sm">
                        <Columns3Icon />
                        Columns
                      </Button>
                    }
                  />
                </div>

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
                <DataGridPagination
                  sizes={[10, 20]}
                  info="{from} - {to} of {count} lines"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />

                <div className="bg-muted/30 grid grid-cols-2 gap-3 rounded-lg border px-3 py-2 sm:grid-cols-4">
                  <div>
                    <div className="text-muted-foreground text-xs">Project budget</div>
                    <div className="font-semibold tabular-nums">{formatMoney(summary.budget)}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Actual</div>
                    <div className="font-semibold tabular-nums">{formatMoney(summary.actual)}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Forecast</div>
                    <div className="font-semibold tabular-nums">{formatMoney(summary.forecast)}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Net variance</div>
                    <div
                      className={cn(
                        "font-semibold tabular-nums",
                        summary.budget - summary.forecast < 0
                          ? "text-destructive"
                          : "text-success-foreground",
                      )}
                    >
                      {formatVariance(summary.budget - summary.forecast)}
                    </div>
                  </div>
                </div>

                <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span>
                    {filtered.length} of {lines.length} lines · {formatMoney(summary.actual)} spent
                  </span>
                  <span>
                    {spentTotal.toFixed(1)}% consumed · {overLines.length} over budget ·{" "}
                    {overLines.filter((line) => !line.decision).length} need a decision
                  </span>
                </div>
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <LineSheet
        line={activeLine}
        open={activeLine !== null}
        onOpenChange={(open) => {
          if (!open) setSheetId(null)
        }}
      />
    </>
  )
}

export default ProjectBudgetBlock
