import { useMemo, useState } from "react"
import {
  ChevronDownIcon,
  Columns3Icon,
  DownloadIcon,
  FunnelIcon,
  SearchIcon,
  XIcon,
} from "lucide-react"
import type {
  ColumnDef,
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
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Badge } from "@/components/reui-unbound/badge"
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
import {
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/reui-unbound/data-grid/data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"

import { GROUPS, INVOICES, formatUsd, invoicesByGroup, sumUsd } from "./data"
import type { Invoice } from "./data"
import {
  BalanceCell,
  CustomerCell,
  ExpectedCell,
  GroupCard,
  GroupHeaderRow,
  NextStepButton,
  OwnerCell,
  StatusCell,
  TimelineCell,
} from "./parts"
import { CustomerSheet } from "./customer-sheet"

const STATUS_ITEMS = [
  { value: "late", label: "Late" },
  { value: "disputed", label: "Disputed" },
  { value: "due", label: "Due soon" },
]

const CSV_COLUMNS = [
  "Invoice",
  "Customer",
  "Contact",
  "Balance",
  "Currency",
  "Status",
  "Due",
  "Expected",
  "Next step",
  "Owner",
]

const TOGGLEABLE_COLUMNS = [
  { id: "customer", label: "Customer" },
  { id: "balance", label: "Balance" },
  { id: "status", label: "Status" },
  { id: "timeline", label: "Timeline" },
  { id: "expected", label: "Expected" },
  { id: "nextStep", label: "Next Step" },
  { id: "owner", label: "Owner" },
]

function exportInvoices(invoices: Invoice[]) {
  const lines = [
    CSV_COLUMNS,
    ...invoices.map((invoice) => [
      invoice.number,
      invoice.customer,
      invoice.contact,
      invoice.balance.toFixed(2),
      invoice.currency,
      invoice.status,
      invoice.dueDate,
      invoice.expected.label ?? "",
      invoice.nextStep.label,
      invoice.owner.name,
    ]),
  ]

  const csv = lines
    .map((line) =>
      line.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","),
    )
    .join("\n")

  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }))
  const link = document.createElement("a")
  link.href = url
  link.download = "invoices.csv"
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)

  toast("Invoices exported", {
    description: `${invoices.length} ${invoices.length === 1 ? "row" : "rows"} written to invoices.csv.`,
  })
}

function ColumnsMenu({
  visibility,
  onChange,
}: {
  visibility: Record<string, boolean>
  onChange: (next: Record<string, boolean>) => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" aria-label="Toggle columns">
          <Columns3Icon />
          Columns
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        <DropdownMenuLabel className="font-medium">Columns</DropdownMenuLabel>
        {TOGGLEABLE_COLUMNS.map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            checked={visibility[column.id] !== false}
            onSelect={(event) => event.preventDefault()}
            onCheckedChange={(value) =>
              onChange({ ...visibility, [column.id]: !!value })
            }
          >
            {column.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function InvoiceGrid({
  rows,
  columns,
  sorting,
  onSortingChange,
  visibility,
  onVisibilityChange,
  selection,
  onSelectionChange,
  showHeader,
  pagination,
  onRowClick,
}: {
  rows: Invoice[]
  columns: ColumnDef<DataGridFeatures, Invoice>[]
  sorting: SortingState
  onSortingChange: (sorting: SortingState) => void
  visibility: Record<string, boolean>
  onVisibilityChange: (next: Record<string, boolean>) => void
  selection: RowSelectionState
  onSelectionChange: (next: RowSelectionState) => void
  showHeader: boolean
  pagination?: {
    state: PaginationState
    onChange: (state: PaginationState) => void
  }
  onRowClick: (invoice: Invoice) => void
}) {
  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: rows,
    getRowId: (invoice: Invoice) => invoice.id,
    pageCount: pagination
      ? Math.max(1, Math.ceil(rows.length / pagination.state.pageSize))
      : 1,
    state: {
      sorting,
      columnVisibility: visibility,
      rowSelection: selection,
      pagination: pagination
        ? pagination.state
        : { pageIndex: 0, pageSize: 1000 },
    },
    enableRowSelection: true,
    onRowSelectionChange: (updater) =>
      onSelectionChange(
        typeof updater === "function" ? updater(selection) : updater,
      ),
    onSortingChange: (updater) =>
      onSortingChange(
        typeof updater === "function" ? updater(sorting) : updater,
      ),
    onColumnVisibilityChange: (updater) =>
      onVisibilityChange(
        typeof updater === "function" ? updater(visibility) : updater,
      ),
    onPaginationChange: pagination
      ? (updater) =>
          pagination.onChange(
            typeof updater === "function" ? updater(pagination.state) : updater,
          )
      : undefined,
  })

  return (
    <DataGrid
      table={table}
      recordCount={rows.length}
      tableLayout={{ headerBackground: true }}
      tableClassNames={showHeader ? undefined : { header: "hidden" }}
      onRowClick={onRowClick}
    >
      <DataGridContainer>
        <DataGridScrollArea>
          <DataGridTable />
        </DataGridScrollArea>
      </DataGridContainer>
      {pagination && (
        <DataGridPagination
          sizes={[10, 20, 30]}
          info="{from} - {to} of {count} invoices"
          rowsPerPageLabel="Rows per page"
        />
      )}
    </DataGrid>
  )
}

export function InvoiceManagerBlock() {
  const [search, setSearch] = useState("")
  const [statuses, setStatuses] = useState<string[]>([])
  const [atRiskOnly, setAtRiskOnly] = useState(false)
  const [grouped, setGrouped] = useState(true)
  const [sorting, setSorting] = useState<SortingState>([])
  const [visibility, setVisibility] = useState<Record<string, boolean>>({})
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})
  const [selectionByGroup, setSelectionByGroup] = useState<
    Record<string, RowSelectionState>
  >({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [customer, setCustomer] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    return INVOICES.filter((invoice) => {
      if (statuses.length > 0 && !statuses.includes(invoice.status))
        return false
      if (atRiskOnly && invoice.expected.state !== "at-risk") return false
      if (query === "") return true

      return [
        invoice.customer,
        invoice.contact,
        invoice.number,
        invoice.owner.name,
      ].some((field) => field.toLowerCase().includes(query))
    })
  }, [search, statuses, atRiskOnly])

  const columns = useMemo<ColumnDef<DataGridFeatures, Invoice>[]>(
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
        accessorKey: "customer",
        header: ({ column }) => (
          <DataGridColumnHeader title="Customer" column={column} />
        ),
        cell: ({ row }) => <CustomerCell invoice={row.original} />,
        size: 210,
        enableHiding: false,
      },
      {
        accessorKey: "balance",
        header: ({ column }) => (
          <DataGridColumnHeader title="Balance" column={column} />
        ),
        cell: ({ row }) => <BalanceCell invoice={row.original} />,
        size: 110,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataGridColumnHeader title="Status" column={column} />
        ),
        cell: ({ row }) => <StatusCell invoice={row.original} />,
        size: 110,
      },
      {
        id: "timeline",
        accessorFn: (invoice) => invoice.timeline.join("-"),
        header: "Timeline",
        cell: ({ row }) => <TimelineCell invoice={row.original} />,
        size: 160,
        enableSorting: false,
      },
      {
        id: "expected",
        accessorFn: (invoice) => invoice.expected.label ?? "",
        header: ({ column }) => (
          <DataGridColumnHeader title="Expected" column={column} />
        ),
        cell: ({ row }) => <ExpectedCell invoice={row.original} />,
        size: 110,
      },
      {
        id: "nextStep",
        accessorFn: (invoice) => invoice.nextStep.label,
        header: "Next Step",
        cell: ({ row }) => <NextStepButton invoice={row.original} />,
        size: 150,
        enableSorting: false,
      },
      {
        id: "owner",
        accessorFn: (invoice) => invoice.owner.name,
        header: ({ column }) => (
          <DataGridColumnHeader title="Owner" column={column} />
        ),
        cell: ({ row }) => <OwnerCell invoice={row.original} />,
        size: 140,
      },
    ],
    [],
  )

  const groups = invoicesByGroup(filtered)
  const visibleGroups = groups.filter((group) => group.invoices.length > 0)
  const renderedGroups = visibleGroups.filter((group) => !collapsed[group.key])

  const selectedInvoices = Object.values(selectionByGroup)
    .flatMap((selection) =>
      Object.keys(selection).filter((id) => selection[id]),
    )
    .map((id) => INVOICES.find((invoice) => invoice.id === id))
    .filter((invoice): invoice is Invoice => invoice !== undefined)

  function toggleGroup(key: string) {
    setCollapsed((current) => ({ ...current, [key]: !current[key] }))
  }

  function updateSelection(groupKey: string, next: RowSelectionState) {
    setSelectionByGroup((current) => ({ ...current, [groupKey]: next }))
  }

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Invoices</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Invoices</FrameTitle>
                <FrameDescription>
                  What customers owe, when they&apos;ll pay and what to do next
                </FrameDescription>
              </div>
              <Button
                variant="outline"
                onClick={() => exportInvoices(filtered)}
                disabled={filtered.length === 0}
              >
                <DownloadIcon />
                Export
              </Button>
            </FrameHeader>

            <div className="flex flex-col gap-3">
              <div className="grid gap-3 sm:grid-cols-3">
                {groups.map((group) => (
                  <GroupCard
                    key={group.key}
                    label={group.label}
                    cardNote={group.cardNote}
                    dot={group.dot}
                    tint={group.tint}
                    border={group.border}
                    invoices={group.invoices}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <Cascader
                    multiple
                    items={STATUS_ITEMS}
                    value={statuses}
                    onValueChange={setStatuses}
                  >
                    <CascaderTrigger
                      aria-label="Filter by invoice status"
                      render={<Button variant="outline" size="sm" />}
                    >
                      <FunnelIcon />
                      {statuses.length === 0
                        ? "All 148"
                        : `${statuses.length} status${statuses.length === 1 ? "" : "es"}`}
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

                  <InputGroup className="w-full sm:max-w-64">
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search invoices, customers..."
                      aria-label="Search invoices"
                      className="text-sm"
                    />
                    <InputGroupAddon align="inline-end">
                      <Kbd>&#8984;K</Kbd>
                    </InputGroupAddon>
                  </InputGroup>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <FunnelIcon />
                        Filter
                        {atRiskOnly && (
                          <Badge size="xs" variant="secondary">
                            1
                          </Badge>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuLabel className="font-medium">
                        Filter
                      </DropdownMenuLabel>
                      <DropdownMenuCheckboxItem
                        checked={atRiskOnly}
                        onSelect={(event) => event.preventDefault()}
                        onCheckedChange={(value) => setAtRiskOnly(!!value)}
                      >
                        At risk only
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onSelect={() => {
                          setAtRiskOnly(false)
                          setStatuses([])
                          setSearch("")
                        }}
                      >
                        <XIcon />
                        Clear filters
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Group Next Step
                        <ChevronDownIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuLabel className="font-medium">
                        Group by
                      </DropdownMenuLabel>
                      <DropdownMenuRadioGroup
                        value={grouped ? "grouped" : "none"}
                        onValueChange={(value) =>
                          setGrouped(value === "grouped")
                        }
                      >
                        <DropdownMenuRadioItem value="grouped">
                          Next Step
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="none">
                          None
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <div className="flex items-center overflow-hidden rounded-md border">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-none border-r"
                    >
                      Month
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-none">
                      Quarter
                    </Button>
                  </div>

                  <ColumnsMenu
                    visibility={visibility}
                    onChange={setVisibility}
                  />
                </div>
              </div>

              {selectedInvoices.length > 0 && (
                <div className="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5">
                  <div className="text-sm font-medium">
                    {selectedInvoices.length} selected
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => exportInvoices(selectedInvoices)}
                    >
                      <DownloadIcon />
                      Export
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectionByGroup({})}
                    >
                      <XIcon />
                      Clear
                    </Button>
                  </div>
                </div>
              )}

              {filtered.length === 0 ? (
                <div className="text-muted-foreground rounded-lg border p-10 text-center text-sm">
                  No invoices match your search or filters.
                </div>
              ) : grouped ? (
                <div className="overflow-hidden rounded-lg border">
                  {visibleGroups.map((group) => (
                    <div key={group.key}>
                      <GroupHeaderRow
                        label={group.label}
                        summary={group.summary}
                        dot={group.dot}
                        tint={group.tint}
                        collapsed={!!collapsed[group.key]}
                        onToggle={() => toggleGroup(group.key)}
                      />
                      {!collapsed[group.key] && (
                        <InvoiceGrid
                          rows={group.invoices}
                          columns={columns}
                          sorting={sorting}
                          onSortingChange={setSorting}
                          visibility={visibility}
                          onVisibilityChange={setVisibility}
                          selection={selectionByGroup[group.key] ?? {}}
                          onSelectionChange={(next) =>
                            updateSelection(group.key, next)
                          }
                          showHeader={renderedGroups[0]?.key === group.key}
                          onRowClick={(invoice) =>
                            setCustomer(invoice.customer)
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="overflow-hidden rounded-lg border">
                  <InvoiceGrid
                    rows={filtered}
                    columns={columns}
                    sorting={sorting}
                    onSortingChange={setSorting}
                    visibility={visibility}
                    onVisibilityChange={setVisibility}
                    selection={selectionByGroup.all ?? {}}
                    onSelectionChange={(next) => updateSelection("all", next)}
                    showHeader
                    pagination={{ state: pagination, onChange: setPagination }}
                    onRowClick={(invoice) => setCustomer(invoice.customer)}
                  />
                </div>
              )}

              <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
                <span>
                  {filtered.length} of {INVOICES.length} invoices &middot;{" "}
                  {formatUsd(sumUsd(filtered))} open
                </span>
                <span>
                  Grouped by next step &middot; {GROUPS.length} stages
                </span>
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>

      <CustomerSheet
        customer={customer}
        open={customer !== null}
        onOpenChange={(open) => {
          if (!open) setCustomer(null)
        }}
      />
    </>
  )
}
