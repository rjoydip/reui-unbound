import { useEffect, useMemo, useState } from "react"
import {
  ChevronDownIcon,
  Columns3Icon,
  PlusIcon,
  SearchIcon,
  UserRoundIcon,
  XIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState, RowSelectionState, SortingState } from "@tanstack/react-table"
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

import {
  EMPTY_FILTERS,
  OWNERS,
  PROSPECTS,
  SAVED_LISTS,
  STATUS_META,
  fitTier,
  matchesFilters,
} from "./data"
import type {
  FitTier,
  IcpFilters,
  Prospect,
  ProspectStatus,
} from "./data"
import {
  CompanyIcon,
  ContactStack,
  FitCell,
  HeadcountCell,
  IcpFiltersPopover,
  OwnerCell,
  ProspectCell,
  SavedListsPopover,
  SignalsCell,
  StatusBadge,
  TierCard,
} from "./parts"
import { CompanySheet } from "./company-sheet"

const STATUSES = Object.keys(STATUS_META) as ProspectStatus[]
const TIERS: { tier: FitTier; label: string }[] = [
  { tier: "high", label: "High fit" },
  { tier: "medium", label: "Medium fit" },
  { tier: "low", label: "Low fit" },
]

export function ProspectDatabaseBlock() {
  const [prospects, setProspects] = useState<Prospect[]>(PROSPECTS)
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState<IcpFilters>(EMPTY_FILTERS)
  const [status, setStatus] = useState<"all" | ProspectStatus>("all")
  const [owner, setOwner] = useState("all")
  const [activeList, setActiveList] = useState<string | null>(null)
  const [sorting, setSorting] = useState<SortingState>([{ id: "fit", desc: true }])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [sheetId, setSheetId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return prospects.filter((prospect) => {
      if (!matchesFilters(prospect, filters)) return false
      if (status !== "all" && prospect.status !== status) return false
      if (owner === "unassigned" && prospect.ownerId !== null) return false
      if (owner !== "all" && owner !== "unassigned" && prospect.ownerId !== owner) return false
      if (query === "") return true
      return [prospect.name, prospect.industry, prospect.hq, prospect.website].some((value) =>
        value.toLowerCase().includes(query),
      )
    })
  }, [prospects, search, filters, status, owner])

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, filters, status, owner])

  const selected = prospects.filter((prospect) => rowSelection[prospect.id])
  const selectedIds = selected.map((prospect) => prospect.id)
  const activeProspect = prospects.find((prospect) => prospect.id === sheetId) ?? null
  const activeFilterCount =
    (filters.headcount !== "all" ? 1 : 0) +
    filters.industries.length +
    filters.signals.length +
    (filters.tier !== "all" ? 1 : 0)

  const tierCounts = useMemo(
    () =>
      TIERS.map(({ tier, label }) => {
        const matches = prospects.filter((prospect) => fitTier(prospect.fit) === tier)
        return {
          tier,
          label,
          count: matches.length,
          unassigned: matches.filter((prospect) => !prospect.ownerId).length,
        }
      }),
    [prospects],
  )

  function toggleList(listId: string) {
    const list = SAVED_LISTS.find((entry) => entry.id === listId)
    if (!list) return
    if (activeList === listId) {
      setFilters(EMPTY_FILTERS)
      setActiveList(null)
      return
    }
    setFilters(list.filters)
    setActiveList(listId)
    toast(`Loaded ${list.name}`, { description: `${list.note}.` })
  }

  function setTier(tier: FitTier | "all") {
    setFilters((current) => ({ ...current, tier }))
  }

  function assignOwner(ids: string[], ownerId: string | null) {
    const snapshot = prospects
    setProspects((current) =>
      current.map((prospect) =>
        ids.includes(prospect.id) ? { ...prospect, ownerId } : prospect,
      ),
    )
    setRowSelection({})
    const ownerName = ownerId ? OWNERS.find((entry) => entry.id === ownerId)?.name : "Unassigned"
    toast(`Owner set to ${ownerName}`, {
      description: `${ids.length} compan${ids.length === 1 ? "y" : "ies"} updated.`,
      action: { label: "Undo", onClick: () => setProspects(snapshot) },
    })
  }

  function setProspectStatus(ids: string[], next: ProspectStatus) {
    const snapshot = prospects
    setProspects((current) =>
      current.map((prospect) =>
        ids.includes(prospect.id) ? { ...prospect, status: next } : prospect,
      ),
    )
    setRowSelection({})
    toast("Status updated", {
      description: `${ids.length} compan${ids.length === 1 ? "y" : "ies"} marked ${STATUS_META[next].label.toLowerCase()}.`,
      action: { label: "Undo", onClick: () => setProspects(snapshot) },
    })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, Prospect>[]>(
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
        accessorKey: "name",
        header: ({ column }) => <DataGridColumnHeader title="Company" column={column} />,
        cell: ({ row }) => <ProspectCell prospect={row.original} />,
        size: 225,
        enableHiding: false,
      },
      {
        accessorKey: "industry",
        header: ({ column }) => <DataGridColumnHeader title="Industry" column={column} />,
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5 text-sm">
            <CompanyIcon industry={row.original.industry} size="xs" />
            {row.original.industry}
          </div>
        ),
        size: 130,
      },
      {
        accessorKey: "headcount",
        header: ({ column }) => <DataGridColumnHeader title="Size" column={column} />,
        cell: ({ row }) => <HeadcountCell prospect={row.original} />,
        size: 130,
        meta: { headerClassName: "text-right [&>div]:justify-end" },
      },
      {
        accessorKey: "fit",
        header: ({ column }) => <DataGridColumnHeader title="ICP fit" column={column} />,
        cell: ({ row }) => <FitCell prospect={row.original} />,
        size: 120,
      },
      {
        id: "signals",
        accessorFn: (prospect) => prospect.signals.length,
        header: ({ column }) => <DataGridColumnHeader title="Signals" column={column} />,
        cell: ({ row }) => <SignalsCell prospect={row.original} />,
        size: 165,
      },
      {
        id: "contacts",
        accessorFn: (prospect) => prospect.contacts.length,
        header: ({ column }) => <DataGridColumnHeader title="Contacts" column={column} />,
        cell: ({ row }) => <ContactStack prospect={row.original} />,
        size: 90,
      },
      {
        accessorKey: "status",
        header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
        size: 120,
      },
      {
        id: "owner",
        accessorFn: (prospect) =>
          prospect.ownerId ? OWNERS.find((entry) => entry.id === prospect.ownerId)?.name ?? "" : "",
        header: ({ column }) => <DataGridColumnHeader title="Owner" column={column} />,
        cell: ({ row }) => <OwnerCell prospect={row.original} />,
        size: 140,
      },
    ],
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (prospect: Prospect) => prospect.id,
    state: { sorting, columnVisibility, pagination, rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Prospect database</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Prospects</FrameTitle>
                <FrameDescription>
                  {prospects.length} companies · {prospects.filter((entry) => !entry.ownerId).length} unassigned ·{" "}
                  {prospects.filter((entry) => fitTier(entry.fit) === "high").length} high fit
                </FrameDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    toast("Hand over", {
                      description: `${filtered.length} prospects sent to the CRM queue.`,
                    })
                  }
                >
                  <UserRoundIcon />
                  Hand over
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    toast("Add company", { description: "Manual entry opens in a sheet in the full app." })
                  }
                >
                  <PlusIcon />
                  Add company
                </Button>
              </div>
            </FrameHeader>

            <div className="grid gap-2 sm:grid-cols-3">
              {tierCounts.map((entry) => (
                <TierCard
                  key={entry.tier}
                  tier={entry.tier}
                  label={entry.label}
                  count={entry.count}
                  total={prospects.length}
                  unassigned={entry.unassigned}
                  active={filters.tier === entry.tier}
                  onClick={() => setTier(filters.tier === entry.tier ? "all" : entry.tier)}
                />
              ))}
            </div>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No prospects match this ICP."
              tableLayout={{ headerBackground: true }}
              onRowClick={(prospect) => setSheetId(prospect.id)}
            >
              <div className="flex flex-col gap-3">
                {selected.length > 0 ? (
                  <div className="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5">
                    <div className="text-sm font-medium">{selected.length} selected</div>
                    <div className="flex flex-wrap items-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <UserRoundIcon />
                            Assign owner
                            <ChevronDownIcon />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel className="font-medium">Owner</DropdownMenuLabel>
                          {OWNERS.map((entry) => (
                            <DropdownMenuItem
                              key={entry.id}
                              onSelect={() => assignOwner(selectedIds, entry.id)}
                            >
                              {entry.name}
                            </DropdownMenuItem>
                          ))}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onSelect={() => assignOwner(selectedIds, null)}>
                            Unassign
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Set status
                            <ChevronDownIcon />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {STATUSES.map((entry) => (
                            <DropdownMenuItem
                              key={entry}
                              onSelect={() => setProspectStatus(selectedIds, entry)}
                            >
                              {STATUS_META[entry].label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <Button variant="ghost" size="sm" onClick={() => setRowSelection({})}>
                        <XIcon />
                        Clear
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-1 flex-wrap items-center gap-2">
                      <InputGroup className="w-full sm:max-w-56">
                        <InputGroupAddon>
                          <SearchIcon />
                        </InputGroupAddon>
                        <InputGroupInput
                          value={search}
                          onChange={(event) => setSearch(event.target.value)}
                          placeholder="Search companies..."
                          aria-label="Search companies"
                          className="text-sm"
                        />
                      </InputGroup>

                      <IcpFiltersPopover
                        filters={filters}
                        onChange={(next) => {
                          setFilters(next)
                          setActiveList(null)
                        }}
                      />

                      <SavedListsPopover
                        prospects={prospects}
                        activeList={activeList}
                        onToggle={toggleList}
                      />

                      <Select
                        value={status}
                        onValueChange={(value) => setStatus(value as "all" | ProspectStatus)}
                      >
                        <SelectTrigger size="sm" className="w-32" aria-label="Filter by status">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All statuses</SelectItem>
                          {STATUSES.map((entry) => (
                            <SelectItem key={entry} value={entry}>
                              {STATUS_META[entry].label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select value={owner} onValueChange={setOwner}>
                        <SelectTrigger size="sm" className="w-36" aria-label="Filter by owner">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All owners</SelectItem>
                          <SelectItem value="unassigned">Unassigned</SelectItem>
                          {OWNERS.map((entry) => (
                            <SelectItem key={entry.id} value={entry.id}>
                              {entry.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {(search || activeFilterCount > 0 || status !== "all" || owner !== "all") && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSearch("")
                            setFilters(EMPTY_FILTERS)
                            setStatus("all")
                            setOwner("all")
                            setActiveList(null)
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
                          <ChevronDownIcon />
                        </Button>
                      }
                    />
                  </div>
                )}

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
                <DataGridPagination
                  sizes={[10, 20]}
                  info="{from} - {to} of {count} companies"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />

                <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span>
                    {filtered.length} of {prospects.length} companies
                    {activeList
                      ? ` · ${SAVED_LISTS.find((entry) => entry.id === activeList)?.name}`
                      : " · ICP fit"}
                  </span>
                  <span>
                    {prospects.filter((entry) => entry.status === "qualified").length} qualified ·{" "}
                    {prospects.filter((entry) => entry.status === "new").length} new
                  </span>
                </div>
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <CompanySheet
        prospect={activeProspect}
        open={activeProspect !== null}
        onOpenChange={(open) => {
          if (!open) setSheetId(null)
        }}
      />
    </>
  )
}

export default ProspectDatabaseBlock
