import { useMemo, useState } from "react"
import { SearchIcon, XIcon } from "lucide-react"
import { useTable, type PaginationState } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
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
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "cn"

import {
  DEFAULT_THRESHOLDS,
  GROUP_META,
  GROUP_ORDER,
  KPIS,
  OWNERS,
  countStatus,
  formatValue,
  groupAverage,
  indexOf,
  statusOf,
} from "./data"
import type {
  HrRow,
  Kpi,
  KpiGroup,
  KpiStatus,
  ScoreMode,
  Thresholds,
} from "./data"
import {
  STATUS_DOT,
  StatusLegend,
  useHrColumns,
} from "./parts"
import { EditActualDialog, ThresholdsPopover } from "./dialogs"

type StatusFilter = "all" | KpiStatus

export function HrScorecardBlock() {
  const [kpis, setKpis] = useState<Kpi[]>(KPIS)
  const [mode, setMode] = useState<ScoreMode>("month")
  const [thresholds, setThresholds] = useState<Thresholds>(DEFAULT_THRESHOLDS)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all")
  const [editingId, setEditingId] = useState<string | null>(null)

  const counts = countStatus(kpis, mode, thresholds)
  const overall = Math.round(groupAverage(kpis, mode, thresholds))

  const visible = useMemo(() => {
    const query = search.trim().toLowerCase()

    return kpis.filter((kpi) => {
      if (
        statusFilter !== "all" &&
        statusOf(kpi, mode, thresholds) !== statusFilter
      )
        return false
      if (query === "") return true
      return [kpi.name, OWNERS[kpi.owner].name, kpi.group].some((field) =>
        field.toLowerCase().includes(query),
      )
    })
  }, [kpis, mode, thresholds, statusFilter, search])

  const rows = useMemo<HrRow[]>(() => {
    const built: HrRow[] = []
    for (const group of GROUP_ORDER) {
      const groupKpis = visible.filter((kpi) => kpi.group === group)
      if (groupKpis.length === 0) continue
      built.push({
        kind: "group",
        id: `group-${group}`,
        group,
        kpis: groupKpis,
        index: groupAverage(groupKpis, mode, thresholds),
      })
      for (const kpi of groupKpis) {
        built.push({
          kind: "kpi",
          id: kpi.id,
          kpi,
          rail: GROUP_META[group].rail,
        })
      }
    }
    return built
  }, [visible, mode, thresholds])

  const editing = kpis.find((kpi) => kpi.id === editingId) ?? null

  function saveActuals(id: string, actualMonth: number, actualYtd: number) {
    const previous = kpis.find((kpi) => kpi.id === id)
    if (!previous) return
    setKpis((current) =>
      current.map((kpi) =>
        kpi.id === id ? { ...kpi, actualMonth, actualYtd } : kpi,
      ),
    )
    toast("Actuals updated", {
      description: `${previous.name} · ${formatValue(
        actualMonth,
        previous.unit,
      )} this month`,
      action: {
        label: "Undo",
        onClick: () =>
          setKpis((current) =>
            current.map((kpi) =>
              kpi.id === id
                ? {
                    ...kpi,
                    actualMonth: previous.actualMonth,
                    actualYtd: previous.actualYtd,
                  }
                : kpi,
            ),
          ),
      },
    })
  }

  const columns = useHrColumns({
    mode,
    thresholds,
    onEdit: setEditingId,
  })

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: rows,
    pageCount: 1,
    getRowId: (row: HrRow) => row.id,
    state: {
      pagination: { pageIndex: 0, pageSize: 200 } as PaginationState,
    },
  })

  const statusCells: Array<{
    key: StatusFilter
    label: string
    value: string
    sub: string
  }> = [
    {
      key: "all",
      label: "Index vs target",
      value: `${overall}`,
      sub: `${counts.on} of ${kpis.length} on track`,
    },
    {
      key: "on",
      label: "On track",
      value: `${counts.on}`,
      sub: `from ${thresholds.onTrack}`,
    },
    {
      key: "watch",
      label: "Watch",
      value: `${counts.watch}`,
      sub: `from ${thresholds.watch}`,
    },
    {
      key: "off",
      label: "Off track",
      value: `${counts.off}`,
      sub: `below ${thresholds.watch}`,
    },
  ]

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">HR scorecard</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>HR Scorecard</FrameTitle>
                <FrameDescription>
                  Sep 2026 · vs Sep 2025 · {kpis.length} KPIs
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <ToggleGroup
                  type="single"
                  size="sm"
                  variant="outline"
                  value={mode}
                  onValueChange={(value) => {
                    if (value) setMode(value as ScoreMode)
                  }}
                >
                  <ToggleGroupItem value="month">Month</ToggleGroupItem>
                  <ToggleGroupItem value="ytd">YTD</ToggleGroupItem>
                </ToggleGroup>
                <ThresholdsPopover
                  thresholds={thresholds}
                  onChange={setThresholds}
                  onReset={() => setThresholds(DEFAULT_THRESHOLDS)}
                />
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={rows.length}
              emptyMessage="No KPIs match your search or status filter."
              tableLayout={{ headerBackground: true, dense: true }}
            >
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 divide-x overflow-hidden rounded-lg border sm:grid-cols-4">
                  {statusCells.map((cell) => {
                    const active = statusFilter === cell.key
                    return (
                      <button
                        key={cell.key}
                        type="button"
                        onClick={() =>
                          setStatusFilter((current) =>
                            current === cell.key ? "all" : cell.key,
                          )
                        }
                        className={cn(
                          "hover:bg-muted/50 px-3 py-2 text-left transition-colors",
                          active && "bg-muted/60",
                        )}
                      >
                        <div className="text-muted-foreground flex items-center gap-1.5 text-[11px]">
                          {cell.key !== "all" && (
                            <span
                              className={cn(
                                "size-1.5 rounded-full",
                                STATUS_DOT[cell.key as KpiStatus],
                              )}
                            />
                          )}
                          {cell.label}
                        </div>
                        <div className="mt-0.5 flex items-baseline gap-2">
                          <span className="text-lg font-semibold tabular-nums">
                            {cell.value}
                          </span>
                          <span className="text-muted-foreground truncate text-[11px]">
                            {cell.sub}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <InputGroup className="w-full sm:max-w-64">
                      <InputGroupAddon>
                        <SearchIcon />
                      </InputGroupAddon>
                      <InputGroupInput
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search KPIs or owners..."
                        aria-label="Search KPIs"
                        className="text-sm"
                      />
                    </InputGroup>
                    {statusFilter !== "all" && (
                      <Badge variant="secondary" size="lg" className="gap-1.5">
                        <span
                          className={cn(
                            "size-1.5 rounded-full",
                            STATUS_DOT[statusFilter],
                          )}
                        />
                        {statusFilter === "on"
                          ? "On track"
                          : statusFilter === "watch"
                            ? "Watch"
                            : "Off track"}
                        <button
                          type="button"
                          onClick={() => setStatusFilter("all")}
                          aria-label="Clear status filter"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <XIcon className="size-3" />
                        </button>
                      </Badge>
                    )}
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {mode === "month"
                      ? "September actuals"
                      : "January – September actuals"}
                  </span>
                </div>

                <DataGridContainer className="[&_tr:has([data-row-kind=group])_td]:bg-muted/45 [&_tr:has([data-row-kind=group])_td]:py-1.5">
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>

                <div className="border-t pt-2">
                  <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span>
                      Blue figures are inputs — click one to edit. Changes can be
                      undone from the toast.
                    </span>
                    <StatusLegend
                      onTrack={thresholds.onTrack}
                      watch={thresholds.watch}
                    />
                  </div>
                </div>
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <EditActualDialog
        key={editingId ?? "closed"}
        kpi={editing}
        open={editing !== null}
        onOpenChange={(open) => {
          if (!open) setEditingId(null)
        }}
        onSave={saveActuals}
      />
    </>
  )
}

export default HrScorecardBlock
