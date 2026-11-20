import { useMemo, useState } from "react"
import { PlusIcon, SearchIcon, SlidersHorizontalIcon, XIcon } from "lucide-react"
import { useTable } from "@tanstack/react-table"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "cn"

import {
  KPIS,
  OBJECTIVES,
  PERSPECTIVES,
  STATUS_THRESHOLDS,
  companyScore,
  kpiProgress,
  mistakeCount,
  progressStatus,
  statusCounts,
  weightedScore,
} from "./data"
import type {
  Kpi,
  PerspectiveId,
  ScoreRow,
} from "./data"
import {
  PROGRESS_META,
  useScoreColumns,
} from "./parts"
import { AddKpiDialog, WeightDialog } from "./dialogs"

type PerspectiveFilter = "all" | PerspectiveId

export function StrategyScorecardBlock() {
  const [kpis, setKpis] = useState<Kpi[]>(KPIS)
  const [search, setSearch] = useState("")
  const [perspectiveFilter, setPerspectiveFilter] =
    useState<PerspectiveFilter>("all")
  const [offTrackOnly, setOffTrackOnly] = useState(false)
  const [weightKpiId, setWeightKpiId] = useState<string | null>(null)
  const [addObjective, setAddObjective] = useState<string | null>(null)
  const [addOpen, setAddOpen] = useState(false)

  const counts = statusCounts(kpis)
  const score = companyScore(kpis)

  const perspectiveScores = useMemo(
    () =>
      PERSPECTIVES.map((perspective) => {
        const objectives = OBJECTIVES.filter(
          (objective) => objective.perspective === perspective.id,
        )
        const total = objectives.reduce(
          (sum, objective) => sum + objective.weight,
          0,
        )
        const value =
          total === 0
            ? 0
            : objectives.reduce(
                (sum, objective) =>
                  sum + weightedScore(
                    kpis.filter((kpi) => kpi.objective === objective.id),
                  ) *
                    objective.weight,
                0,
              ) / total
        return { perspective, value, objectives }
      }),
    [kpis],
  )

  const weakest = perspectiveScores.reduce((lowest, current) =>
    current.value < lowest.value ? current : lowest,
  )

  const rows = useMemo<ScoreRow[]>(() => {
    const query = search.trim().toLowerCase()
    const built: ScoreRow[] = []

    for (const entry of perspectiveScores) {
      if (
        perspectiveFilter !== "all" &&
        entry.perspective.id !== perspectiveFilter
      )
        continue

      const perspectiveObjectives = entry.objectives
        .map((objective) => {
          const objectiveKpis = kpis
            .filter((kpi) => kpi.objective === objective.id)
            .filter((kpi) => {
              if (
                offTrackOnly &&
                progressStatus(kpiProgress(kpi)) !== "off"
              )
                return false
              if (query === "") return true
              return kpi.name.toLowerCase().includes(query)
            })
          return { objective, objectiveKpis }
        })
        .filter((entryObjective) => entryObjective.objectiveKpis.length > 0)

      if (perspectiveObjectives.length === 0) continue

      const visibleKpis = perspectiveObjectives.flatMap(
        (item) => item.objectiveKpis,
      )

      built.push({
        kind: "perspective",
        id: `perspective-${entry.perspective.id}`,
        perspective: entry.perspective,
        score: entry.value,
        kpiCount: visibleKpis.length,
        objectiveCount: perspectiveObjectives.length,
        offCount: visibleKpis.filter(
          (kpi) => progressStatus(kpiProgress(kpi)) === "off",
        ).length,
      })

      for (const item of perspectiveObjectives) {
        const score = weightedScore(
          kpis.filter((kpi) => kpi.objective === item.objective.id),
        )
        built.push({
          kind: "objective",
          id: `objective-${item.objective.id}`,
          objective: item.objective,
          perspective: entry.perspective,
          score,
          kpiCount: item.objectiveKpis.length,
        })

        for (const kpi of item.objectiveKpis) {
          built.push({
            kind: "kpi",
            id: kpi.id,
            kpi,
            perspective: entry.perspective,
            objective: item.objective,
            progress: kpiProgress(kpi),
          })
        }
      }
    }

    return built
  }, [perspectiveScores, kpis, perspectiveFilter, offTrackOnly, search])

  const editingKpi = kpis.find((kpi) => kpi.id === weightKpiId) ?? null
  const editingObjective =
    OBJECTIVES.find(
      (objective) => objective.id === editingKpi?.objective,
    ) ?? null

  function saveWeight(id: string, weight: number) {
    setKpis((current) =>
      current.map((kpi) => (kpi.id === id ? { ...kpi, weight } : kpi)),
    )
    toast("Weight updated", {
      description: `Rollups recalculated for ${weightedScore(
        kpis.filter((kpi) => kpi.objective === editingKpi?.objective),
      ).toFixed(0)}% objective score`,
    })
  }

  function saveKpi(kpi: Kpi) {
    setKpis((current) => [...current, kpi])
    setPerspectiveFilter("all")
    setSearch("")
    setOffTrackOnly(false)
    toast("KPI added", {
      description: `${kpi.name} · ${kpi.weight}% of the objective`,
    })
  }

  const columns = useScoreColumns({
    onWeight: setWeightKpiId,
    onAddKpi: (id) => {
      setAddObjective(id)
      setAddOpen(true)
    },
  })

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: rows,
    pageCount: 1,
    getRowId: (row: ScoreRow) => row.id,
    state: { pagination: { pageIndex: 0, pageSize: 200 } },
  })

  const statusChips = [
    { key: "on" as const, label: "On track" },
    { key: "watch" as const, label: "Watch" },
    { key: "off" as const, label: "Off track" },
  ]

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Strategy scorecard</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Strategy Scorecard</FrameTitle>
                <FrameDescription>
                  Sep 2026 · baseline to year-end target · {kpis.length} KPIs
                </FrameDescription>
              </div>
              <Button
                size="sm"
                onClick={() => {
                  setAddObjective(null)
                  setAddOpen(true)
                }}
              >
                <PlusIcon />
                Add KPI
              </Button>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={rows.length}
              emptyMessage="No KPIs match your search or filters."
              tableLayout={{ headerBackground: true, dense: true }}
            >
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 divide-x overflow-hidden rounded-lg border lg:grid-cols-4">
                  <div className="px-3 py-2">
                    <div className="text-muted-foreground text-[11px]">
                      Company score
                    </div>
                    <div className="mt-0.5 flex items-baseline gap-2">
                      <span className="text-lg font-semibold tabular-nums">
                        {Math.round(score)}%
                      </span>
                      <span className="text-success-foreground text-[11px]">
                        +2 pts since Aug
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-2">
                    <div className="text-muted-foreground text-[11px]">
                      KPIs on track
                    </div>
                    <div className="mt-0.5 flex items-baseline gap-2">
                      <span className="text-lg font-semibold tabular-nums">
                        {counts.on}
                      </span>
                      <span className="text-muted-foreground text-[11px]">
                        of {kpis.length} scored
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-2">
                    <div className="text-muted-foreground text-[11px]">
                      Weakest perspective
                    </div>
                    <div className="mt-0.5 flex items-baseline gap-2">
                      <span className="text-lg font-semibold tabular-nums">
                        {Math.round(weakest.value)}%
                      </span>
                      <span className="text-muted-foreground truncate text-[11px]">
                        {weakest.perspective.name} ·{" "}
                        {mistakeCount(weakest.perspective.id, kpis)} off track
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-2">
                    <div className="text-muted-foreground text-[11px]">
                      KPI status
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-1.5">
                      {statusChips.map((chip) => (
                        <Badge
                          key={chip.key}
                          variant={
                            chip.key === "on"
                              ? "success-light"
                              : chip.key === "watch"
                                ? "warning-light"
                                : "destructive-light"
                          }
                          size="sm"
                          className="gap-1"
                        >
                          <span
                            className={cn(
                              "size-1.5 rounded-full",
                              PROGRESS_META[chip.key].bar,
                            )}
                          />
                          {counts[chip.key]} {chip.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
                        placeholder="Search KPIs..."
                        aria-label="Search KPIs"
                        className="text-sm"
                      />
                    </InputGroup>

                    <Select
                      value={perspectiveFilter}
                      onValueChange={(value) =>
                        setPerspectiveFilter(value as PerspectiveFilter)
                      }
                    >
                      <SelectTrigger size="sm" className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All perspectives</SelectItem>
                        {PERSPECTIVES.map((perspective) => (
                          <SelectItem
                            key={perspective.id}
                            value={perspective.id}
                          >
                            {perspective.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Button
                      variant={offTrackOnly ? "secondary" : "outline"}
                      size="sm"
                      onClick={() => setOffTrackOnly((current) => !current)}
                    >
                      <SlidersHorizontalIcon />
                      Off track only
                    </Button>
                  </div>

                  {(search !== "" ||
                    offTrackOnly ||
                    perspectiveFilter !== "all") && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSearch("")
                        setOffTrackOnly(false)
                        setPerspectiveFilter("all")
                      }}
                    >
                      <XIcon />
                      Clear
                    </Button>
                  )}
                </div>

                <DataGridContainer
                  className={cn(
                    "[&_tr:has([data-row-kind=perspective])_td]:bg-muted/45",
                    "[&_tr:has([data-row-kind=perspective])_td]:border-y",
                    "[&_tr:has([data-row-kind=perspective])_td]:py-2",
                    "[&_tr:has([data-row-kind=objective])_td]:border-t-0",
                  )}
                >
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>

                <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 border-t pt-2 text-xs">
                  <span>
                    Click a KPI weight to rebalance. Objective and perspective
                    scores are weighted rollups.
                  </span>
                  <span className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5">
                      <span className="bg-success size-1.5 rounded-full" /> On
                      track {STATUS_THRESHOLDS.onTrack}%+
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="bg-warning size-1.5 rounded-full" />{" "}
                      Watch {STATUS_THRESHOLDS.watch}%+
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="bg-destructive size-1.5 rounded-full" />{" "}
                      Off track
                    </span>
                  </span>
                </div>
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <WeightDialog
        kpi={editingKpi}
        objectiveName={editingObjective?.name ?? ""}
        open={editingKpi !== null}
        onOpenChange={(open) => {
          if (!open) setWeightKpiId(null)
        }}
        onSave={saveWeight}
      />

      <AddKpiDialog
        key={`${addObjective ?? "none"}-${addOpen ? "open" : "closed"}`}
        open={addOpen}
        defaultObjective={addObjective}
        onOpenChange={(open) => {
          setAddOpen(open)
          if (!open) setAddObjective(null)
        }}
        onSave={saveKpi}
      />
    </>
  )
}

export default StrategyScorecardBlock
