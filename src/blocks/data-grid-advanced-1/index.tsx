import { useEffect, useMemo, useState } from "react"
import {
  ChevronDownIcon,
  Columns3Icon,
  DownloadIcon,
  FunnelIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  XIcon,
} from "lucide-react"
import type { PaginationState, RowSelectionState, SortingState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Badge } from "@/components/reui-unbound/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { ColumnsMenu } from "@/components/columns-menu"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import { Filters } from "@/components/reui-unbound/filters/filters"
import {
  createFilterQuery,
  flattenFilterRules,
} from "@/components/reui-unbound/filters/filters-query"
import type { FilterQuery } from "@/components/reui-unbound/filters/filters-types"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"

import { CAMPAIGNS, REPORT_RANGE } from "./data"
import type { Campaign } from "./data"
import {
  CAMPAIGN_FIELDS,
  DeltaText,
  campaignColumns,
  exportCampaigns,
  formatCompactUsd,
  formatNumber,
  formatPercent,
  matchesCampaignQuery,
  totals,
} from "./parts"
import { CampaignSheet } from "./campaign-sheet"

export function AdCampaignPerformanceBlock() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(CAMPAIGNS)
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState<FilterQuery>(() => createFilterQuery())
  const [sorting, setSorting] = useState<SortingState>([
    { id: "spend", desc: true },
  ])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [selected, setSelected] = useState<Campaign | null>(null)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return campaigns.filter((campaign) => {
      if (!matchesCampaignQuery(campaign, query)) return false
      if (term === "") return true
      return [campaign.name, campaign.channel, campaign.objective, campaign.market]
        .some((field) => field.toLowerCase().includes(term))
    })
  }, [campaigns, search, query])

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, query])

  const activeRules = flattenFilterRules(query).length
  const aggregate = totals(filtered)

  const columns = useMemo(
    () =>
      campaignColumns({
        onView: (campaign) => setSelected(campaign),
        onDuplicate: (campaign) => {
          setCampaigns((current) => [
            {
              ...campaign,
              id: `${campaign.id}-copy`,
              name: `${campaign.name} (copy)`,
              status: "Paused",
            },
            ...current,
          ])
          toast("Campaign duplicated", { description: campaign.name })
        },
        onToggleStatus: (campaign) => {
          const resume = campaign.status === "Paused"
          setCampaigns((current) =>
            current.map((entry) =>
              entry.id === campaign.id
                ? { ...entry, status: resume ? "Live" : "Paused" }
                : entry,
            ),
          )
          toast(resume ? "Campaign resumed" : "Campaign paused", {
            description: campaign.name,
          })
        },
      }),
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.max(1, Math.ceil(filtered.length / pagination.pageSize)),
    getRowId: (campaign: Campaign) => campaign.id,
    state: { sorting, columnVisibility, pagination, rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  const selectedCampaigns = table
    .getSelectedRowModel()
    .rows.map((row) => row.original)

  function resetView() {
    setSearch("")
    setQuery(createFilterQuery())
    setSorting([{ id: "spend", desc: true }])
    setColumnVisibility({})
    setPagination({ pageIndex: 0, pageSize: 10 })
    setRowSelection({})
  }

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Ad campaign performance</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Campaign Performance</FrameTitle>
                <FrameDescription>
                  {campaigns.length} campaigns &middot; {filtered.length} in view
                  &middot; {REPORT_RANGE}
                </FrameDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => exportCampaigns(filtered)}
                  disabled={filtered.length === 0}
                >
                  <DownloadIcon />
                  Export
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Settings">
                      <SlidersHorizontalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onSelect={resetView}>
                      Reset view
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => setCampaigns(CAMPAIGNS)}>
                      Restore demo data
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </FrameHeader>

            <div className="grid grid-cols-2 divide-y border-y sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
              <div className="p-4">
                <div className="text-muted-foreground text-xs font-medium">Spend</div>
                <div className="mt-1 text-2xl font-semibold tabular-nums">
                  {formatCompactUsd(aggregate.spend)}
                </div>
                <div className="text-muted-foreground mt-0.5 text-xs">
                  {aggregate.budget === 0
                    ? "No budget"
                    : `${Math.round((aggregate.spend / aggregate.budget) * 100)}% of ${formatCompactUsd(aggregate.budget)} budget`}
                </div>
              </div>
              <div className="p-4">
                <div className="text-muted-foreground text-xs font-medium">
                  Conversions
                </div>
                <div className="mt-1 text-2xl font-semibold tabular-nums">
                  {formatNumber(aggregate.conversions)}
                </div>
                <DeltaText value={aggregate.delta} className="mt-0.5 block" />
              </div>
              <div className="p-4">
                <div className="text-muted-foreground text-xs font-medium">
                  Blended CPA
                </div>
                <div className="mt-1 text-2xl font-semibold tabular-nums">
                  ${aggregate.cpa.toFixed(2)}
                </div>
                <span className="text-muted-foreground mt-0.5 block text-xs">
                  {filtered.length === 0
                    ? "No data"
                    : `${formatPercent(aggregate.ctr, 1)} CTR`}
                </span>
              </div>
              <div className="p-4">
                <div className="text-muted-foreground text-xs font-medium">
                  Blended ROAS
                </div>
                <div className="mt-1 text-2xl font-semibold tabular-nums">
                  {aggregate.roas.toFixed(1)}x
                </div>
                <div className="text-muted-foreground mt-0.5 text-xs">
                  Target 4.3x
                </div>
              </div>
              <div className="p-4">
                <div className="text-muted-foreground text-xs font-medium">
                  Below Target
                </div>
                <div className="text-destructive mt-1 text-2xl font-semibold tabular-nums">
                  {aggregate.belowTarget}
                </div>
                <div className="text-muted-foreground mt-0.5 text-xs">
                  of {filtered.length} campaigns
                </div>
              </div>
            </div>

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
                      placeholder="Search campaign, channel, market..."
                      aria-label="Search campaigns"
                      className="text-sm"
                    />
                  </InputGroup>

                  <Filters
                    variant="advanced"
                    fields={CAMPAIGN_FIELDS}
                    query={query}
                    onQueryChange={setQuery}
                    trigger={
                      <Button variant="outline" size="sm">
                        <FunnelIcon />
                        Filter
                        {activeRules > 0 && (
                          <Badge size="xs" variant="secondary">
                            {activeRules}
                          </Badge>
                        )}
                      </Button>
                    }
                  />

                  {activeRules > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuery(createFilterQuery())}
                    >
                      <XIcon />
                      Clear filters
                    </Button>
                  )}
                </div>

                <ColumnsMenu table={table} />
              </div>

              {selectedCampaigns.length > 0 && (
                <div className="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5">
                  <div className="text-sm font-medium">
                    {selectedCampaigns.length} selected
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => exportCampaigns(selectedCampaigns)}
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
                emptyMessage="No campaigns match this search or filter."
                onRowClick={(campaign) => setSelected(campaign)}
                tableLayout={{ headerBackground: true }}
              >
                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
                <DataGridPagination
                  sizes={[10, 20, 30]}
                  info="{from} - {to} of {count} campaigns"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />
              </DataGrid>
            </div>
          </FramePanel>
        </Frame>
      </div>

      <CampaignSheet
        campaign={selected}
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      />
    </>
  )
}

export default AdCampaignPerformanceBlock
