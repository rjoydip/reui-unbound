import { useEffect, useMemo, useState } from "react"
import {
  ChevronDownIcon,
  Columns3Icon,
  DownloadIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  XIcon,
} from "lucide-react"
import type {
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { ColumnsMenu } from "@/components/~app/columns-menu"
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
  CAMPAIGNS,
  STAGES,
  cpaSpread,
  formatMoney,
  roasSpread,
  stageCounts,
  verdict,
  verdictCounts,
} from "./data"
import type { Stage, TargetCampaign, TargetRevision, Verdict } from "./data"
import {
  campaignColumns,
  exportCampaigns,
} from "./parts"
import { EditTargetDialog, TargetHistorySheet } from "./target-sheet"

type StageFilter = Stage | "all"
type VerdictFilter = Verdict | "all"

const VERDICTS: Verdict[] = ["On target", "At risk", "Missing"]

export function CampaignTargetReviewBlock() {
  const [campaigns, setCampaigns] = useState<TargetCampaign[]>(CAMPAIGNS)
  const [search, setSearch] = useState("")
  const [stage, setStage] = useState<StageFilter>("all")
  const [verdictFilter, setVerdictFilter] = useState<VerdictFilter>("all")
  const [sorting, setSorting] = useState<SortingState>([
    { id: "roasSpread", desc: true },
  ])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)

  const stageFiltered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return campaigns
      .filter((campaign) => stage === "all" || campaign.stage === stage)
      .filter((campaign) => {
        if (term === "") return true
        return [campaign.name, campaign.channel, campaign.stage].some((field) =>
          field.toLowerCase().includes(term),
        )
      })
  }, [campaigns, search, stage])

  const filtered = useMemo(
    () =>
      stageFiltered.filter(
        (campaign) =>
          verdictFilter === "all" || verdict(campaign) === verdictFilter,
      ),
    [stageFiltered, verdictFilter],
  )

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, stage, verdictFilter])

  const counts = stageCounts(campaigns)
  const legend = verdictCounts(stageFiltered)
  const onTarget = verdictCounts(campaigns).onTarget

  const columns = useMemo(
    () =>
      campaignColumns({
        onEdit: (campaign) => setEditingId(campaign.id),
        onHistory: (campaign) => setSelectedId(campaign.id),
      }),
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.max(1, Math.ceil(filtered.length / pagination.pageSize)),
    getRowId: (campaign: TargetCampaign) => campaign.id,
    state: { sorting, columnVisibility, pagination, rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  const selectedRows = table.getSelectedRowModel().rows.map((row) => row.original)
  const selectedCampaign =
    campaigns.find((campaign) => campaign.id === selectedId) ?? null
  const editingCampaign =
    campaigns.find((campaign) => campaign.id === editingId) ?? null

  function saveTarget(
    field: TargetRevision["field"],
    value: number,
    note: string,
  ) {
    if (!editingCampaign) return

    setCampaigns((current) =>
      current.map((campaign) => {
        if (campaign.id !== editingCampaign.id) return campaign
        const from =
          field === "ROAS" ? campaign.roasTarget : campaign.cpaTarget

        return {
          ...campaign,
          [field === "ROAS" ? "roasTarget" : "cpaTarget"]: value,
          revisions: [
            ...campaign.revisions,
            {
              id: `rev-${campaign.id}-${campaign.revisions.length + 1}`,
              field,
              from,
              to: value,
              date: "Nov 18, 2026",
              by: "Maya Chen",
              note,
            },
          ],
        }
      }),
    )
    setEditingId(null)
    setSelectedId(editingCampaign.id)
    toast("Target updated", {
      description: `${editingCampaign.name} · ${field} now ${field === "ROAS" ? `${value.toFixed(2)}x` : formatMoney(value)}.`,
    })
  }

  function resetView() {
    setSearch("")
    setStage("all")
    setVerdictFilter("all")
    setSorting([{ id: "roasSpread", desc: true }])
    setColumnVisibility({})
    setRowSelection({})
    setPagination({ pageIndex: 0, pageSize: 10 })
  }

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Campaign target review</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Campaign Targets</FrameTitle>
                <FrameDescription>
                  {campaigns.length} campaigns &middot; {onTarget} beating both
                  targets &middot; reviewed Nov 18, 2026
                </FrameDescription>
              </div>
              <Button
                variant="outline"
                onClick={() => exportCampaigns(filtered)}
                disabled={filtered.length === 0}
              >
                <DownloadIcon />
                Export
              </Button>
            </FrameHeader>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Tabs
                value={stage}
                onValueChange={(value) => setStage(value as StageFilter)}
              >
                <TabsList variant="line">
                  <TabsTrigger value="all">
                    All
                    <span className="text-muted-foreground text-xs">
                      {counts.all}
                    </span>
                  </TabsTrigger>
                  {STAGES.map((entry) => (
                    <TabsTrigger key={entry} value={entry}>
                      {entry}
                      <span className="text-muted-foreground text-xs">
                        {counts[entry]}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="flex flex-wrap items-center gap-1.5">
                {VERDICTS.map((entry) => {
                  const count =
                    entry === "On target"
                      ? legend.onTarget
                      : entry === "At risk"
                        ? legend.atRisk
                        : legend.missing
                  const active = verdictFilter === entry

                  return (
                    <button
                      key={entry}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setVerdictFilter((current) =>
                          current === entry ? "all" : entry,
                        )
                      }
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-xs transition-colors",
                        active
                          ? "border-primary/40 bg-primary/5"
                          : "hover:bg-muted/50",
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          entry === "On target"
                            ? "bg-success"
                            : entry === "At risk"
                              ? "bg-warning"
                              : "bg-destructive",
                        )}
                      />
                      {entry}
                      <span className="font-semibold tabular-nums">{count}</span>
                    </button>
                  )
                })}
                {verdictFilter !== "all" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setVerdictFilter("all")}
                  >
                    <XIcon />
                    Clear
                  </Button>
                )}
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
                    placeholder="Search campaigns..."
                    aria-label="Search campaigns"
                    className="text-sm"
                  />
                </InputGroup>
                {verdictFilter !== "all" && (
                  <span className="text-muted-foreground text-xs">
                    Showing {verdictFilter.toLowerCase()} campaigns only
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <ColumnsMenu table={table} />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <SlidersHorizontalIcon />
                      Settings
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    {[
                      { id: "roasSpread", label: "Sort by ROAS gap" },
                      { id: "cpaSpread", label: "Sort by CPA gap" },
                    ].map((option) => (
                      <DropdownMenuCheckboxItem
                        key={option.id}
                        checked={sorting[0]?.id === option.id}
                        onSelect={(event) => event.preventDefault()}
                        onCheckedChange={() =>
                          setSorting([{ id: option.id, desc: true }])
                        }
                      >
                        {option.label}
                      </DropdownMenuCheckboxItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={resetView}>
                      Reset view
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => setCampaigns(CAMPAIGNS)}>
                      Restore demo data
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {selectedRows.length > 0 && (
              <div className="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5">
                <div className="text-sm font-medium">
                  {selectedRows.length} selected
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => exportCampaigns(selectedRows)}
                  >
                    <DownloadIcon />
                    Export
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setRowSelection({})}
                  >
                    <XIcon />
                    Clear
                  </Button>
                </div>
              </div>
            )}

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No campaigns match this stage, search or verdict."
              onRowClick={(campaign) => setSelectedId(campaign.id)}
              tableLayout={{ headerBackground: true }}
            >
              <DataGridContainer>
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <DataGridPagination
                sizes={[10, 20]}
                info="{from} - {to} of {count} campaigns"
                rowsPerPageLabel="Rows per page"
                className={filtered.length === 0 ? "hidden" : undefined}
              />
            </DataGrid>

            <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
              <span>
                {legend.onTarget} on target &middot; {legend.atRisk} at risk
                &middot; {legend.missing} missing
              </span>
              <span>
                Targets compared against the last 30 days &middot;{" "}
                {formatMoney(
                  filtered.reduce((sum, campaign) => sum + campaign.spend, 0),
                )}{" "}
                spend in view
              </span>
            </div>
          </FramePanel>
        </Frame>
      </div>

      <TargetHistorySheet
        campaign={selectedCampaign}
        open={selectedCampaign !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null)
        }}
        onEdit={(campaign) => {
          setSelectedId(null)
          setEditingId(campaign.id)
        }}
      />

      <EditTargetDialog
        campaign={editingCampaign}
        open={editingCampaign !== null}
        onOpenChange={(open) => {
          if (!open) setEditingId(null)
        }}
        onSave={saveTarget}
      />
    </>
  )
}

export default CampaignTargetReviewBlock
