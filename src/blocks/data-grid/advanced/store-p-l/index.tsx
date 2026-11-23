import { useEffect, useMemo, useState } from "react"
import {
  DownloadIcon,
  GitBranchIcon,
  Rows3Icon,
  SearchIcon,
  SlidersHorizontalIcon,
} from "lucide-react"
import type { PaginationState, SortingState } from "@tanstack/react-table"

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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"

import {
  FY_LABEL,
  REGIONS,
  STORES,
  formatCompact,
  formatPercent,
  formatUsd,
  regionLabel,
  storesByRegion,
  summarize,
} from "./data"
import type { RegionKey, Store } from "./data"
import {
  ColumnsMenu,
  RegionBand,
  RegionCard,
  StoreGrid,
  exportStores,
  storeColumns,
} from "./parts"
import { StoreSheet } from "./store-sheet"

type ViewMode = "flat" | "tree"
type RegionFilter = RegionKey | "all"

export function RegionalStorePnlBlock() {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState<RegionFilter>("all")
  const [mode, setMode] = useState<ViewMode>("flat")
  const [sorting, setSorting] = useState<SortingState>([
    { id: "sales", desc: true },
  ])
  const [visibility, setVisibility] = useState<Record<string, boolean>>({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [selected, setSelected] = useState<Store | null>(null)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return STORES.filter((store) => {
      if (region !== "all" && store.region !== region) return false
      if (term === "") return true
      return [store.name, store.city, store.country, store.format].some(
        (field) => field.toLowerCase().includes(term),
      )
    })
  }, [search, region])

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, region])

  const summaries = [
    summarize(STORES, "all"),
    ...REGIONS.map((entry) => summarize(STORES, entry.key)),
  ]
  const groups = storesByRegion(filtered)
  const activeSummary =
    region === "all" ? summaries[0] : summaries.find((s) => s.key === region)!

  const columns = useMemo(
    () => storeColumns(mode === "tree", setSelected),
    [mode],
  )

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Regional store P&amp;L</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Store P&amp;L</FrameTitle>
                <FrameDescription>
                  {STORES.length} stores &middot; {REGIONS.length} regions &middot;{" "}
                  {FY_LABEL}
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <InputGroup className="w-full sm:w-64">
                  <InputGroupAddon>
                    <SearchIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search stores..."
                    aria-label="Search stores"
                    className="text-sm"
                  />
                </InputGroup>
                <ColumnsMenu visibility={visibility} onChange={setVisibility} />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Settings">
                      <SlidersHorizontalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onSelect={() => exportStores(filtered)}>
                      <DownloadIcon />
                      Export current view
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => {
                        setSearch("")
                        setRegion("all")
                        setMode("flat")
                        setVisibility({})
                        setSorting([{ id: "sales", desc: true }])
                      }}
                    >
                      Reset view
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </FrameHeader>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {summaries.map((summary) => (
                <RegionCard
                  key={summary.key}
                  summary={summary}
                  active={region === summary.key}
                  onClick={() => setRegion(summary.key)}
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <ToggleGroup
                  type="single"
                  variant="outline"
                  size="sm"
                  value={mode}
                  onValueChange={(value) => {
                    if (value === "flat" || value === "tree") setMode(value)
                  }}
                  aria-label="Table layout"
                >
                  <ToggleGroupItem value="flat" className="gap-1.5">
                    <Rows3Icon />
                    Flat
                  </ToggleGroupItem>
                  <ToggleGroupItem value="tree" className="gap-1.5">
                    <GitBranchIcon />
                    Tree
                  </ToggleGroupItem>
                </ToggleGroup>
                <span className="text-muted-foreground text-xs">
                  {mode === "tree"
                    ? "Region subtotals above each group"
                    : "One ranked list across all regions"}
                </span>
              </div>
              <div className="text-muted-foreground text-xs tabular-nums">
                {activeSummary.label} &middot; {filtered.length} stores &middot;{" "}
                {formatCompact(activeSummary.sales)} sales &middot;{" "}
                {formatPercent(activeSummary.yoy, 1)} YoY
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-muted-foreground rounded-lg border border-dashed p-10 text-center text-sm">
                No stores match this search or region.
              </div>
            ) : mode === "flat" ? (
              <div className="overflow-hidden rounded-lg border">
                <StoreGrid
                  rows={filtered}
                  columns={columns}
                  sorting={sorting}
                  onSortingChange={setSorting}
                  visibility={visibility}
                  onVisibilityChange={setVisibility}
                  pagination={{ state: pagination, onChange: setPagination }}
                  onRowClick={setSelected}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {groups.map((group, index) => (
                  <div
                    key={group.region.key}
                    className="overflow-hidden rounded-lg border"
                  >
                    <RegionBand
                      summary={summarize(group.stores, group.region.key)}
                    />
                    <StoreGrid
                      rows={group.stores}
                      columns={columns}
                      sorting={sorting}
                      onSortingChange={setSorting}
                      visibility={visibility}
                      onVisibilityChange={setVisibility}
                      showHeader={index === 0}
                      onRowClick={setSelected}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
              <span>
                {filtered.length} of {STORES.length} stores &middot;{" "}
                {formatUsd(
                  filtered.reduce((sum, store) => sum + store.sales, 0),
                )}{" "}
                net sales
              </span>
              <span>
                {filtered.filter((store) => store.profit < 0).length}{" "}
                loss-making &middot; {mode === "tree" ? "Tree" : "Flat"} view
                {region === "all" ? "" : ` · ${regionLabel(region)}`}
              </span>
            </div>
          </FramePanel>
        </Frame>
      </div>

      <StoreSheet
        store={selected}
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      />
    </>
  )
}

export default RegionalStorePnlBlock
