import { useMemo, useState } from "react"
import {
  ChevronDownIcon,
  DownloadIcon,
  FunnelIcon,
  MoreHorizontalIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  XIcon,
} from "lucide-react"
import type {
  ColumnDef,
  PaginationState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"
import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  Cascader,
  CascaderContent,
  CascaderList,
  CascaderPanel,
  CascaderStatus,
  CascaderTrigger,
} from "@/components/reui-unbound/cascader/cascader"
import { CascaderItems } from "@/components/reui-unbound/cascader/cascader-item"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import { cn } from "cn"
import {
  CATEGORY_DEFAULTS,
  FACTORIES,
  NEXT_BUY_META,
  formatCompactUsd,
  scoreOf,
} from "./data"
import type { Category, Factory, NextBuy, Thresholds } from "./data"
import {
  DefectCell,
  FactoryCell,
  NextBuyBadge,
  OtifCell,
  PeerBand,
  RankCell,
  SpendCell,
  ThresholdsPopover,
} from "./parts"
import { FactorySheet, NextBuyDialog } from "./sheets"
type QuickFilter = "all" | "climbers" | "fallers" | "below" | "at-goal"
const NEXT_BUY_ITEMS = (Object.keys(NEXT_BUY_META) as NextBuy[]).map(
  (value) => ({ value, label: NEXT_BUY_META[value].label }),
)
const QUICK_LABEL: Record<QuickFilter, string> = {
  all: "All",
  climbers: "Climbers",
  fallers: "Fallers",
  below: "Below floor",
  "at-goal": "At goal",
}
export function FactoryScorecardBlock() {
  const [factories, setFactories] = useState<Factory[]>(FACTORIES)
  const [thresholds, setThresholds] =
    useState<Record<Category, Thresholds>>(CATEGORY_DEFAULTS)
  const [search, setSearch] = useState("")
  const [nextBuyFilters, setNextBuyFilters] = useState<string[]>([])
  const [quick, setQuick] = useState<QuickFilter>("all")
  const [sorting, setSorting] = useState<SortingState>([
    { id: "rank", desc: false },
  ])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const thresholdsFor = (factory: Factory) => thresholds[factory.category]
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return factories.filter((factory) => {
      const score = scoreOf(factory, thresholds[factory.category])
      if (quick === "climbers" && !(factory.prevRank && factory.rank < factory.prevRank))
        return false
      if (quick === "fallers" && !(factory.prevRank && factory.rank > factory.prevRank))
        return false
      if (quick === "below" && score !== "below-floor") return false
      if (quick === "at-goal" && score !== "at-goal") return false
      if (nextBuyFilters.length > 0 && !nextBuyFilters.includes(factory.nextBuy))
        return false
      if (query === "") return true
      return [factory.name, factory.country, factory.category].some((field) =>
        field.toLowerCase().includes(query),
      )
    })
  }, [factories, thresholds, quick, nextBuyFilters, search])
  const counts = useMemo(
    () => ({
      all: factories.length,
      climbers: factories.filter(
        (factory) => factory.prevRank && factory.rank < factory.prevRank,
      ).length,
      fallers: factories.filter(
        (factory) => factory.prevRank && factory.rank > factory.prevRank,
      ).length,
      below: factories.filter(
        (factory) =>
          scoreOf(factory, thresholds[factory.category]) === "below-floor",
      ).length,
      "at-goal": factories.filter(
        (factory) =>
          scoreOf(factory, thresholds[factory.category]) === "at-goal",
      ).length,
    }),
    [factories, thresholds],
  )
  const selected = factories.find((factory) => factory.id === selectedId) ?? null
  const editing = factories.find((factory) => factory.id === editingId) ?? null
  const totalSpend = filtered.reduce((sum, factory) => sum + factory.spend, 0)

  function saveNextBuy(id: string, nextBuy: NextBuy, note: string) {
    const previous = factories.find((factory) => factory.id === id)
    if (!previous) return
    setFactories((current) =>
      current.map((factory) =>
        factory.id === id ? { ...factory, nextBuy, notes: note } : factory,
      ),
    )
    setSelectedId(null)
    toast("Next buy updated", {
      description: `${previous.name} → ${NEXT_BUY_META[nextBuy].label}`,
      action: {
        label: "Undo",
        onClick: () =>
          setFactories((current) =>
            current.map((factory) =>
              factory.id === id
                ? { ...factory, nextBuy: previous.nextBuy, notes: previous.notes }
                : factory,
            ),
          ),
      },
    })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, Factory>[]>(
    () => [
      {
        id: "rank",
        accessorFn: (factory) => factory.rank,
        header: ({ column }) => (
          <DataGridColumnHeader title="Rank" column={column} />
        ),
        cell: ({ row }) => <RankCell factory={row.original} />,
        size: 100,
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Factory" column={column} />
        ),
        cell: ({ row }) => <FactoryCell factory={row.original} />,
        size: 230,
        enableHiding: false,
      },
      {
        accessorKey: "spend",
        header: ({ column }) => (
          <DataGridColumnHeader title="FOB spend" column={column} />
        ),
        cell: ({ row }) => <SpendCell factory={row.original} />,
        size: 190,
      },
      {
        id: "band",
        accessorFn: (factory) => factory.otif,
        header: "OTIF vs peers",
        cell: ({ row }) => (
          <PeerBand
            factory={row.original}
            thresholds={thresholdsFor(row.original)}
          />
        ),
        size: 170,
        enableSorting: false,
      },
      {
        accessorKey: "otif",
        header: ({ column }) => (
          <DataGridColumnHeader title="OTIF" column={column} />
        ),
        cell: ({ row }) => (
          <OtifCell
            factory={row.original}
            thresholds={thresholdsFor(row.original)}
          />
        ),
        size: 110,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        accessorKey: "defectRate",
        header: ({ column }) => (
          <DataGridColumnHeader title="Defects" column={column} />
        ),
        cell: ({ row }) => <DefectCell factory={row.original} />,
        size: 100,
      },
      {
        accessorKey: "nextBuy",
        header: ({ column }) => (
          <DataGridColumnHeader title="Next buy" column={column} />
        ),
        cell: ({ row }) => (
          <div
            className="flex items-center gap-1.5"
            onClick={(event) => event.stopPropagation()}
          >
            <NextBuyBadge value={row.original.nextBuy} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label={`Change next buy for ${row.original.name}`}
                >
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {(Object.keys(NEXT_BUY_META) as NextBuy[]).map((value) => (
                  <DropdownMenuItem
                    key={value}
                    onSelect={() =>
                      saveNextBuy(
                        row.original.id,
                        value,
                        row.original.notes,
                      )
                    }
                  >
                    {NEXT_BUY_META[value].label}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => setEditingId(row.original.id)}
                >
                  <PencilIcon />
                  Edit with note
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
        size: 150,
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
                  aria-label={`Open actions for ${row.original.name}`}
                >
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem onSelect={() => setSelectedId(row.original.id)}>
                  <SearchIcon />
                  Open scorecard
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setEditingId(row.original.id)}>
                  <PencilIcon />
                  Edit next buy
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => {
                    setQuick("below")
                    setSearch(row.original.name)
                  }}
                >
                  <SlidersHorizontalIcon />
                  Audit this factory
                </DropdownMenuItem>
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
    [thresholds, factories],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.max(1, Math.ceil(filtered.length / pagination.pageSize)),
    getRowId: (factory: Factory) => factory.id,
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  })

  const quickFilters = Object.keys(QUICK_LABEL) as QuickFilter[]

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Factory scorecard</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Factory Scorecard</FrameTitle>
                <FrameDescription>
                  Q3 2026 · {factories.length} factories ranked by FOB spend
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" size="lg" className="bg-background">
                  Q2 2026
                </Badge>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Export factories"
                  onClick={() => toast("Export factories")}
                >
                  <DownloadIcon />
                </Button>
                <Button size="sm" onClick={() => toast("Add factory")}>
                  <PlusIcon />
                  Add Factory
                </Button>
                <ThresholdsPopover
                  thresholds={thresholds}
                  onReset={() => setThresholds(CATEGORY_DEFAULTS)}
                  onChange={(category, next) =>
                    setThresholds((current) => ({
                      ...current,
                      [category]: next,
                    }))
                  }
                />
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No factories match your search or filters."
              onRowClick={(factory) => setSelectedId(factory.id)}
              tableLayout={{ headerBackground: true }}
            >
              <div className="flex flex-col gap-3">
                <div className="divide-border flex flex-wrap divide-x overflow-hidden rounded-lg border">
                  {quickFilters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() =>
                        setQuick((current) =>
                          current === filter && filter !== "all"
                            ? "all"
                            : filter,
                        )
                      }
                      className={cn(
                        "hover:bg-muted/60 flex items-center gap-1.5 px-3 py-2 text-sm transition-colors",
                        quick === filter &&
                          filter !== "all" &&
                          "bg-muted/70 font-medium",
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          filter === "climbers" && "bg-success",
                          filter === "fallers" && "bg-destructive",
                          filter === "below" && "bg-destructive",
                          filter === "at-goal" && "bg-success",
                          filter === "all" && "bg-muted-foreground/40",
                        )}
                      />
                      {QUICK_LABEL[filter]}
                      <span className="text-muted-foreground tabular-nums">
                        {counts[filter]}
                      </span>
                    </button>
                  ))}
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
                        placeholder="Search factory or country..."
                        aria-label="Search factories"
                        className="text-sm"
                      />
                    </InputGroup>

                    <Cascader
                      multiple
                      items={NEXT_BUY_ITEMS}
                      value={nextBuyFilters}
                      onValueChange={setNextBuyFilters}
                    >
                      <CascaderTrigger
                        aria-label="Filter by next buy"
                        render={<Button variant="outline" size="sm" />}
                      >
                        <FunnelIcon />
                        Next buy
                        {nextBuyFilters.length > 0 && (
                          <Badge size="xs" variant="secondary">
                            {nextBuyFilters.length}
                          </Badge>
                        )}
                        <ChevronDownIcon />
                      </CascaderTrigger>
                      <CascaderContent align="start" className="w-56">
                        <CascaderPanel>
                          <CascaderList>
                            <CascaderItems />
                          </CascaderList>
                          <CascaderStatus />
                        </CascaderPanel>
                      </CascaderContent>
                    </Cascader>
                  </div>

                  {(quick !== "all" ||
                    search !== "" ||
                    nextBuyFilters.length > 0) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setQuick("all")
                        setSearch("")
                        setNextBuyFilters([])
                      }}
                    >
                      <XIcon />
                      Clear
                    </Button>
                  )}
                </div>

                <DataGridContainer className="[&_tr:hover_td]:bg-muted/30">
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-2 text-sm">
                  <span className="font-medium">
                    {filtered.length} factories · {formatCompactUsd(totalSpend)}{" "}
                    FOB
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Band = peer fence · dashed floor · solid goal · set in Targets
                  </span>
                </div>

                <DataGridPagination
                  sizes={[10, 20, 30]}
                  info="{from} - {to} of {count} factories"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <FactorySheet
        factory={selected}
        thresholds={
          selected ? thresholdsFor(selected) : { floor: 88, goal: 95 }
        }
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null)
        }}
        onEdit={(factory) => {
          setSelectedId(null)
          setEditingId(factory.id)
        }}
      />

      <NextBuyDialog
        key={editingId ?? "closed"}
        factory={editing}
        open={editing !== null}
        onOpenChange={(open) => {
          if (!open) setEditingId(null)
        }}
        onSave={saveNextBuy}
      />
    </>
  )
}

export default FactoryScorecardBlock
