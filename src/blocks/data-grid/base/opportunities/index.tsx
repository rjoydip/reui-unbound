import { useMemo, useState } from "react"
import {
  ChevronDownIcon,
  Columns3Icon,
  FunnelIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"
import type {
  ColumnDef,
  RowPinningState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table"
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
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import { DataGridColumnVisibility } from "@/components/kit/data-grid/~data-grid-column-visibility"
import { DataGridPagination } from "@/components/kit/data-grid/~data-grid-pagination"
import { DataGridScrollArea } from "@/components/kit/data-grid/~data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableRowPin,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/kit/data-grid/~data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"
import { Filters } from "@/components/kit/filters/filters"
import { createFilterQuery } from "@/components/kit/filters/~filters-query"
import type { FilterQuery } from "@/components/kit/filters/~filters-types"

import { OPPORTUNITIES } from "./data"
import type { Opportunity } from "./data"
import { matchesPipelineQuery, pipelineFilterFields } from "./pipeline-filters"
import {
  AlertsCell,
  AmountCell,
  OpportunityCell,
  OwnerCell,
  ProgressRing,
  StageCell,
} from "./parts"

export function DealPipelineBlock() {
  const [deals] = useState<Opportunity[]>(OPPORTUNITIES)
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState<FilterQuery>(() => createFilterQuery())
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [rowPinning, setRowPinning] = useState<RowPinningState>({
    top: ["opp-01", "opp-02"],
    bottom: [],
  })
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return deals
      .filter((deal) => matchesPipelineQuery(deal, query))
      .filter((deal) => {
        if (term === "") return true
        return [deal.name, deal.company, deal.owner.name].some((field) =>
          field.toLowerCase().includes(term),
        )
      })
  }, [deals, query, search])

  const pinnedCount = rowPinning.top?.length ?? 0

  const columns = useMemo<ColumnDef<DataGridFeatures, Opportunity>[]>(
    () => [
      {
        id: "select",
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        size: 32,
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: "pinned",
        header: () => null,
        cell: ({ row }) => <DataGridTableRowPin row={row} />,
        size: 36,
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Opportunity" column={column} />
        ),
        cell: ({ row }) => <OpportunityCell opportunity={row.original} />,
        size: 220,
        enableHiding: false,
      },
      {
        accessorKey: "stage",
        header: ({ column }) => (
          <DataGridColumnHeader title="Stage" column={column} />
        ),
        cell: ({ row }) => <StageCell stage={row.original.stage} />,
        size: 150,
      },
      {
        id: "owner",
        accessorFn: (deal) => deal.owner.name,
        header: ({ column }) => (
          <DataGridColumnHeader title="Owner" column={column} />
        ),
        cell: ({ row }) => <OwnerCell opportunity={row.original} />,
        size: 160,
      },
      {
        accessorKey: "amount",
        header: ({ column }) => (
          <DataGridColumnHeader title="Amount" column={column} />
        ),
        cell: ({ row }) => <AmountCell amount={row.original.amount} />,
        size: 130,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        accessorKey: "progress",
        header: ({ column }) => (
          <DataGridColumnHeader title="Progress" column={column} />
        ),
        cell: ({ row }) => <ProgressRing value={row.original.progress} />,
        size: 120,
      },
      {
        id: "alerts",
        accessorFn: (deal) => deal.alerts.critical + deal.alerts.warning,
        header: ({ column }) => (
          <DataGridColumnHeader title="Alerts" column={column} />
        ),
        cell: ({ row }) => <AlertsCell alerts={row.original.alerts} />,
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
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuLabel className="font-medium">
                  {row.original.name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => toast("Opening deal details")}
                >
                  View details
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => toast("Next step scheduled")}>
                  Next step
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={() => toast("Deal archived")}
                >
                  Archive
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
    [deals],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (deal: Opportunity) => deal.id,
    state: {
      sorting,
      columnVisibility,
      pagination,
      rowSelection,
      rowPinning,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onRowPinningChange: setRowPinning,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Opportunities</h1>

      <Frame className="w-full max-w-6xl">
        <FramePanel>
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
            <div>
              <FrameTitle>Opportunities</FrameTitle>
              <FrameDescription>
                {deals.length} revenue pipeline
              </FrameDescription>
            </div>
            <Button onClick={() => toast("Add opportunity")}>
              <PlusIcon />
              Add opportunity
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No opportunities match your filters."
            tableLayout={{ headerBackground: true, rowsPinnable: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <Filters
                    fields={pipelineFilterFields}
                    query={query}
                    onQueryChange={setQuery}
                    size="sm"
                    showClear
                    trigger={
                      <Button variant="outline" size="sm">
                        <FunnelIcon />
                        Filters
                      </Button>
                    }
                  />
                  <InputGroup className="w-full sm:max-w-52">
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search..."
                      aria-label="Search opportunities"
                      className="text-sm"
                    />
                  </InputGroup>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={pinnedCount === 0}
                    onClick={() => setRowPinning({ top: [], bottom: [] })}
                  >
                    Unpin all
                  </Button>
                  <span className="text-muted-foreground text-sm">
                    {pinnedCount} opportunities pinned
                  </span>
                  <DataGridColumnVisibility
                    table={table}
                    trigger={
                      <Button variant="outline" size="sm">
                        <Columns3Icon />
                        Columns
                        <ChevronDownIcon />
                      </Button>
                    }
                  />
                </div>
              </div>

              <DataGridContainer>
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <DataGridPagination
                sizes={[5, 10, 20]}
                info="{from} - {to} of {count} opportunities"
                rowsPerPageLabel="Rows per page"
                className={filtered.length === 0 ? "hidden" : undefined}
              />
            </div>
          </DataGrid>
        </FramePanel>
      </Frame>
    </div>
  )
}
