import { useEffect, useMemo, useRef, useState } from "react"
import {
  ChevronDownIcon,
  Columns3Icon,
  DownloadIcon,
  EyeIcon,
  FunnelIcon,
  MoreHorizontalIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  TagIcon,
  Trash2Icon,
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
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/kit/badge"
import {
  Cascader,
  CascaderContent,
  CascaderList,
  CascaderPanel,
  CascaderStatus,
  CascaderTrigger,
} from "@/components/kit/cascader/cascader"
import { CascaderItems } from "@/components/kit/cascader/~cascader-item"
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
import { cn } from "cn"

import { CUSTOMERS, STATUS_OPTIONS, formatCurrency } from "./data"
import type { Customer, CustomerStatus } from "./data"
import {
  BalanceCell,
  CompanyLogo,
  CustomerCell,
  PlanBadge,
  StatusBadge,
} from "./parts"
import { CustomerFormSheet, CustomerViewSheet } from "./customer-sheets"

const STATUS_ITEMS = STATUS_OPTIONS.map((option) => ({
  value: option.value,
  label: option.label,
}))

const CSV_COLUMNS = [
  "Customer",
  "Email",
  "Balance",
  "Trend",
  "Status",
  "Plan",
  "Company",
  "Country",
]

function exportCsv(rows: Customer[]) {
  const lines = [
    CSV_COLUMNS,
    ...rows.map((customer) => [
      customer.name,
      customer.email,
      customer.balance.toFixed(2),
      customer.change === null ? "" : `${customer.change}%`,
      customer.status,
      customer.plan,
      customer.company,
      `${customer.country} ${customer.timezone}`,
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
  link.download = "customers.csv"
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)

  toast("Customers exported", {
    description: `${rows.length} ${rows.length === 1 ? "row" : "rows"} written to customers.csv.`,
  })
}

export function CustomerBalancesBlock() {
  const [customers, setCustomers] = useState<Customer[]>(CUSTOMERS)
  const [search, setSearch] = useState("")
  const [statuses, setStatuses] = useState<string[]>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const [viewing, setViewing] = useState<Customer | null>(null)
  const [editing, setEditing] = useState<Customer | "new" | null>(null)

  const searchRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    return customers.filter((customer) => {
      const matchesStatus =
        statuses.length === 0 || statuses.includes(customer.status)
      if (!matchesStatus) return false
      if (query === "") return true

      return [
        customer.name,
        customer.email,
        customer.company,
        customer.country,
      ].some((field) => field.toLowerCase().includes(query))
    })
  }, [customers, search, statuses])

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, statuses])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const totalBalance = customers.reduce(
    (sum, customer) => sum + customer.balance,
    0,
  )

  function resetView() {
    setSearch("")
    setStatuses([])
    setSorting([{ id: "name", desc: false }])
    setColumnVisibility({})
    setPagination({ pageIndex: 0, pageSize: 10 })
    setRowSelection({})
  }

  function handleDelete(customer: Customer) {
    const index = customers.findIndex((entry) => entry.id === customer.id)
    setCustomers((current) =>
      current.filter((entry) => entry.id !== customer.id),
    )
    setViewing((current) => (current?.id === customer.id ? null : current))

    toast(`${customer.name} deleted`, {
      description: "The customer was removed from this list.",
      action: {
        label: "Undo",
        onClick: () =>
          setCustomers((current) => {
            if (current.some((entry) => entry.id === customer.id))
              return current
            const next = [...current]
            next.splice(index, 0, customer)
            return next
          }),
      },
    })
  }

  function handleSave(customer: Customer) {
    const exists = customers.some((entry) => entry.id === customer.id)
    setCustomers((current) =>
      exists
        ? current.map((entry) => (entry.id === customer.id ? customer : entry))
        : [customer, ...current],
    )
    if (!exists) setPagination((current) => ({ ...current, pageIndex: 0 }))
    toast(exists ? "Customer updated" : "Customer added", {
      description: `${customer.name} · ${customer.email}`,
    })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, Customer>[]>(
    () => [
      {
        id: "select",
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        size: 28,
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Customer" column={column} />
        ),
        cell: ({ row }) => <CustomerCell customer={row.original} />,
        size: 240,
        enableHiding: false,
      },
      {
        accessorKey: "balance",
        header: ({ column }) => (
          <DataGridColumnHeader title="Balance" column={column} />
        ),
        cell: ({ row }) => <BalanceCell customer={row.original} />,
        size: 150,
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
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
        size: 120,
      },
      {
        accessorKey: "plan",
        header: ({ column }) => (
          <DataGridColumnHeader title="Plan" column={column} />
        ),
        cell: ({ row }) => <PlanBadge plan={row.original.plan} />,
        size: 120,
      },
      {
        accessorKey: "company",
        header: ({ column }) => (
          <DataGridColumnHeader title="Company" column={column} />
        ),
        cell: ({ row }) => (
          <span className="flex items-center gap-2 font-medium">
            <CompanyLogo company={row.original.company} />
            {row.original.company}
          </span>
        ),
        size: 150,
      },
      {
        accessorKey: "country",
        header: ({ column }) => (
          <DataGridColumnHeader title="Location" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img
              src={`https://flagcdn.com/${row.original.countryCode}.svg`}
              alt=""
              loading="lazy"
              className="size-4 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <div className="text-foreground truncate font-medium">
                {row.original.country}
              </div>
              <div className="text-muted-foreground truncate text-xs">
                {row.original.timezone}
              </div>
            </div>
          </div>
        ),
        size: 180,
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
                <DropdownMenuItem onSelect={() => setViewing(row.original)}>
                  <EyeIcon />
                  View details
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setEditing(row.original)}>
                  <PencilIcon />
                  Edit customer
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={() => handleDelete(row.original)}
                >
                  <Trash2Icon />
                  Delete
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [customers],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (customer: Customer) => customer.id,
    state: {
      sorting,
      columnVisibility,
      pagination,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  const selectedCustomers = table
    .getSelectedRowModel()
    .rows.map((row) => row.original)

  function setStatusForSelection(status: CustomerStatus) {
    const ids = new Set(selectedCustomers.map((customer) => customer.id))
    setCustomers((current) =>
      current.map((customer) =>
        ids.has(customer.id) ? { ...customer, status } : customer,
      ),
    )
    setRowSelection({})
    toast("Status updated", {
      description: `${ids.size} ${ids.size === 1 ? "customer" : "customers"} set to ${status}.`,
    })
  }

  const emptyMessage =
    customers.length === 0
      ? "No customers yet. Add one to get started."
      : "No customers match your search or status filter."

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Customers</h1>

        <Frame className="w-full max-w-6xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Customers</FrameTitle>
                <FrameDescription>
                  {customers.length} customers &middot;{" "}
                  {formatCurrency(totalBalance)} in balances
                </FrameDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => exportCsv(filtered)}
                  disabled={filtered.length === 0}
                >
                  <DownloadIcon />
                  Export
                </Button>
                <Button onClick={() => setEditing("new")}>
                  <PlusIcon />
                  Add Customer
                </Button>
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage={emptyMessage}
              onRowClick={(customer) => setViewing(customer)}
              tableLayout={{ headerBackground: true }}
            >
              <div className="flex flex-col gap-3">
                {selectedCustomers.length > 0 ? (
                  <div className="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5">
                    <div className="text-sm font-medium">
                      {selectedCustomers.length} selected
                    </div>
                    <div className="flex items-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <TagIcon />
                            Set status
                            <ChevronDownIcon />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {STATUS_OPTIONS.map((option) => (
                            <DropdownMenuItem
                              key={option.value}
                              onSelect={() =>
                                setStatusForSelection(option.value)
                              }
                            >
                              {option.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => exportCsv(selectedCustomers)}
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
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-1 flex-wrap items-center gap-2">
                      <InputGroup className="w-full sm:max-w-64">
                        <InputGroupAddon>
                          <SearchIcon />
                        </InputGroupAddon>
                        <InputGroupInput
                          ref={searchRef}
                          value={search}
                          onChange={(event) => setSearch(event.target.value)}
                          placeholder="Search customers..."
                          aria-label="Search customers"
                          className="text-sm"
                        />
                        <InputGroupAddon align="inline-end">
                          <Kbd>/</Kbd>
                        </InputGroupAddon>
                      </InputGroup>

                      <Cascader
                        multiple
                        items={STATUS_ITEMS}
                        value={statuses}
                        onValueChange={setStatuses}
                      >
                        <CascaderTrigger
                          aria-label="Filter by status"
                          render={<Button variant="outline" size="sm" />}
                        >
                          <FunnelIcon />
                          Status
                          {statuses.length > 0 && (
                            <Badge
                              size="xs"
                              variant="secondary"
                              className="ml-0.5"
                            >
                              {statuses.length}
                            </Badge>
                          )}
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

                    <div className="flex items-center gap-2">
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
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            aria-label="Reset view"
                            onClick={resetView}
                          >
                            <SlidersHorizontalIcon />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          Reset filters and sorting
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                )}

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
                <DataGridPagination
                  sizes={[5, 10, 20, 30, 50]}
                  info="{from} - {to} of {count} customers"
                  rowsPerPageLabel="Rows per page"
                  className={cn(filtered.length === 0 && "hidden")}
                />
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <CustomerViewSheet
        customer={viewing}
        open={viewing !== null}
        onOpenChange={(open) => {
          if (!open) setViewing(null)
        }}
        onEdit={(customer) => {
          setViewing(null)
          setEditing(customer)
        }}
      />

      <CustomerFormSheet
        key={editing === "new" ? "new" : (editing?.id ?? "closed")}
        open={editing !== null}
        customer={editing === "new" || editing === null ? undefined : editing}
        onOpenChange={(open) => {
          if (!open) setEditing(null)
        }}
        onSave={handleSave}
      />
    </>
  )
}
