import { useMemo, useState } from "react"
import {
  EyeIcon,
  MoreHorizontalIcon,
  SearchIcon,
  SlidersHorizontalIcon,
} from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { cn } from "cn"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
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
  OBJECTIVE_OPTIONS,
  SLOS,
  evaluateSlo,
  formatBudget,
  statusCounts,
} from "./data"
import type { SloEvaluation, SloStatus, SloWindow } from "./data"
import {
  BudgetCell,
  BurnCell,
  ChartLegend,
  CurrentCell,
  LollipopChart,
  MiniTrend,
  ObjectiveCell,
  OwnerCell,
  SloCell,
  SloStatusBadge,
} from "./parts"
import { SloSheet } from "./slo-sheet"

type StatusFilter = SloStatus | "all"

const STATUSES: SloStatus[] = ["Healthy", "At risk", "Exhausted"]

export function SloReliabilityIndexBlock() {
  const [search, setSearch] = useState("")
  const [window, setWindow] = useState<SloWindow>("30d")
  const [objective, setObjective] = useState("own")
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all")
  const [hovered, setHovered] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const evaluated = useMemo(() => {
    const override = objective === "own" ? null : Number(objective)
    return SLOS.map((slo) => evaluateSlo(slo, window, override)).sort(
      (a, b) => a.budget - b.budget,
    )
  }, [window, objective])

  const counts = statusCounts(evaluated)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return evaluated.filter((row) => {
      if (statusFilter !== "all" && row.status !== statusFilter) return false
      if (term === "") return true
      return [
        row.slo.name,
        row.slo.team,
        row.slo.slug,
        row.slo.owner.name,
      ].some((field) => field.toLowerCase().includes(term))
    })
  }, [evaluated, search, statusFilter])

  const paging = evaluated.filter((row) => row.alert === "Paging").length

  const columns = useMemo<ColumnDef<DataGridFeatures, SloEvaluation>[]>(
    () => [
      {
        id: "slo",
        accessorFn: (row) => row.slo.name,
        header: ({ column }) => (
          <DataGridColumnHeader title="SLO" column={column} />
        ),
        cell: ({ row }) => <SloCell slo={row.original.slo} />,
        size: 260,
        enableHiding: false,
        meta: { headerTitle: "SLO" },
      },
      {
        id: "owner",
        accessorFn: (row) => row.slo.owner.name,
        header: ({ column }) => (
          <DataGridColumnHeader title="Owner" column={column} />
        ),
        cell: ({ row }) => <OwnerCell slo={row.original.slo} />,
        size: 110,
      },
      {
        id: "trend",
        accessorFn: (row) => row.budget,
        header: "90 Days",
        cell: ({ row }) => <MiniTrend row={row.original} />,
        size: 100,
        enableSorting: false,
        meta: { headerTitle: "90 days" },
      },
      {
        id: "objective",
        accessorFn: (row) => row.objective,
        header: ({ column }) => (
          <DataGridColumnHeader title="Objective" column={column} />
        ),
        cell: ({ row }) => <ObjectiveCell row={row.original} />,
        size: 90,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "current",
        accessorFn: (row) => row.current,
        header: ({ column }) => (
          <DataGridColumnHeader title="Current" column={column} />
        ),
        cell: ({ row }) => <CurrentCell row={row.original} />,
        size: 85,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "budget",
        accessorFn: (row) => row.budget,
        header: ({ column }) => (
          <DataGridColumnHeader title="Budget Left" column={column} />
        ),
        cell: ({ row }) => <BudgetCell row={row.original} />,
        size: 105,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "burn",
        accessorFn: (row) => row.burn,
        header: ({ column }) => (
          <DataGridColumnHeader title="Burn" column={column} />
        ),
        cell: ({ row }) => <BurnCell row={row.original} />,
        size: 105,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        id: "status",
        accessorFn: (row) => row.status,
        header: ({ column }) => (
          <DataGridColumnHeader title="Status" column={column} />
        ),
        cell: ({ row }) => <SloStatusBadge status={row.original.status} />,
        size: 100,
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
                  <span className="sr-only">Open SLO menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onSelect={() => setSelectedId(row.original.slo.id)}
                >
                  <EyeIcon />
                  View burn history
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    toast("SLO muted for 1 hour", {
                      description: `${row.original.slo.name} will not page until 15:20 UTC.`,
                    })
                  }
                >
                  Mute for 1 hour
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() =>
                    toast("Evaluation copied", {
                      description: `${row.original.slo.name} · ${formatBudget(row.original.budget)} budget left.`,
                    })
                  }
                >
                  Copy evaluation
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
    ],
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    getRowId: (row: SloEvaluation) => row.slo.id,
    state: { pagination: { pageIndex: 0, pageSize: 100 } },
    enableSorting: false,
  })

  const selectedRow =
    evaluated.find((row) => row.slo.id === selectedId) ?? null
  const windowLabel = window === "7d" ? "7 days" : "30 days"
  const objectiveLabel =
    objective === "own" ? "own objective" : `${objective}% objective`

  return (
    <>
      {hovered && (
        <style>{`[data-row-id="${hovered}"] > td { background-color: color-mix(in oklab, var(--primary) 6%, transparent); }`}</style>
      )}

      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">SLO reliability index</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Reliability Index</FrameTitle>
                <FrameDescription>
                  {SLOS.length} SLOs &middot; {counts.Exhausted} exhausted
                  &middot; {paging} paging &middot; measured over {windowLabel}
                </FrameDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Settings"
                  onClick={() =>
                    toast("Reliability snapshot copied", {
                      description: `${counts.Exhausted} exhausted, ${counts["At risk"]} at risk, ${counts.Healthy} healthy.`,
                    })
                  }
                >
                  <SlidersHorizontalIcon />
                </Button>
              </div>
            </FrameHeader>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  aria-pressed={statusFilter === "all"}
                  onClick={() => setStatusFilter("all")}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors",
                    statusFilter === "all"
                      ? "border-primary/40 bg-primary/5"
                      : "hover:bg-muted/50",
                  )}
                >
                  All
                  <span className="font-semibold tabular-nums">
                    {counts.all}
                  </span>
                </button>
                {STATUSES.map((status) => (
                  <button
                    key={status}
                    type="button"
                    aria-pressed={statusFilter === status}
                    onClick={() =>
                      setStatusFilter((current) =>
                        current === status ? "all" : status,
                      )
                    }
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors",
                      statusFilter === status
                        ? "border-primary/40 bg-primary/5"
                        : "hover:bg-muted/50",
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        status === "Healthy"
                          ? "bg-success"
                          : status === "At risk"
                            ? "bg-warning"
                            : "bg-destructive",
                      )}
                    />
                    {status}
                    <span className="font-semibold tabular-nums">
                      {counts[status]}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <InputGroup className="w-full sm:w-56">
                  <InputGroupAddon>
                    <SearchIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search SLOs..."
                    aria-label="Search SLOs"
                    className="text-sm"
                  />
                </InputGroup>

                <Select value={objective} onValueChange={setObjective}>
                  <SelectTrigger size="sm" className="w-40">
                    <SelectValue placeholder="Objective" />
                  </SelectTrigger>
                  <SelectContent>
                    {OBJECTIVE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <ToggleGroup
                  type="single"
                  variant="outline"
                  size="sm"
                  value={window}
                  onValueChange={(value) => {
                    if (value === "7d" || value === "30d") setWindow(value)
                  }}
                  aria-label="SLO window"
                >
                  <ToggleGroupItem value="7d">7D</ToggleGroupItem>
                  <ToggleGroupItem value="30d">30D</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
              <div className="min-w-0 overflow-hidden rounded-lg border">
                <DataGrid
                  table={table}
                  recordCount={filtered.length}
                  emptyMessage="No SLOs match this search or status."
                  onRowClick={(row) => setSelectedId(row.slo.id)}
                  tableLayout={{ headerBackground: true }}
                >
                  <DataGridContainer>
                    <DataGridScrollArea>
                      <DataGridTable />
                    </DataGridScrollArea>
                  </DataGridContainer>
                </DataGrid>
                <div className="text-muted-foreground flex items-center justify-between gap-2 border-t px-3 py-2 text-xs">
                  <span>
                    Showing {filtered.length} of {SLOS.length} SLOs &middot;{" "}
                    {counts.Healthy} healthy
                  </span>
                  <span>Ranked worst-first</span>
                </div>
              </div>

              <div className="flex min-w-0 flex-col rounded-lg border">
                <div className="flex items-start justify-between gap-2 border-b px-3 py-2.5">
                  <div>
                    <div className="text-sm font-medium">Budget Index</div>
                    <div className="text-muted-foreground text-xs">
                      {objectiveLabel} &middot; {windowLabel} window
                    </div>
                  </div>
                  <Badge variant="outline" size="sm">
                    {filtered.length} rows
                  </Badge>
                </div>

                <div className="flex-1 px-2 pt-2">
                  {filtered.length === 0 ? (
                    <div className="text-muted-foreground flex h-[260px] items-center justify-center text-sm">
                      No SLOs to plot.
                    </div>
                  ) : (
                    <LollipopChart
                      rows={filtered}
                      hovered={hovered}
                      onHover={setHovered}
                    />
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t px-3 py-2">
                  <ChartLegend rows={filtered} />
                  <span className="text-muted-foreground text-xs">
                    Evaluated Nov 18, 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
              <span>
                Hover a chart point to highlight its row &middot; click a row for
                burn history
              </span>
              <span>
                Objective and window changes recalculate budget and burn
              </span>
            </div>
          </FramePanel>
        </Frame>
      </div>

      <SloSheet
        row={selectedRow}
        open={selectedRow !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null)
        }}
      />
    </>
  )
}

export default SloReliabilityIndexBlock
