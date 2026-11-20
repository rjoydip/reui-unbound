import { useMemo, useState } from "react"
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
import { Badge } from "@/components/reui-unbound/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridColumnVisibility } from "@/components/reui-unbound/data-grid/data-grid-column-visibility"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableRowPin,
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
import { Filters } from "@/components/reui-unbound/filters/filters"
import { createFilterQuery } from "@/components/reui-unbound/filters/filters-query"
import type { FilterQuery } from "@/components/reui-unbound/filters/filters-types"

import { CONTACTS, engagementTrend, formatCurrency } from "./data"
import type { Contact, ContactStatus } from "./data"
import { contactFilterFields, matchesContactQuery } from "./contact-filters"
import {
  CompanyLogo,
  ContactCell,
  EngagementCell,
  PipelineCell,
  ScoreCell,
  StatusBadge,
} from "./parts"
import { ContactFormSheet, ContactViewSheet } from "./contact-sheets"

function exportContacts(contacts: Contact[]) {
  const rows = [
    ["Name", "Email", "Company", "Score", "Pipeline", "Status"],
    ...contacts.map((contact) => [
      contact.name,
      contact.email,
      contact.company,
      String(contact.score),
      contact.pipeline.toFixed(0),
      contact.status,
    ]),
  ]

  const csv = rows
    .map((row) => row.map((value) => `"${value}"`).join(","))
    .join("\n")
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }))
  const link = document.createElement("a")
  link.href = url
  link.download = "contacts.csv"
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)

  toast("Contacts exported", {
    description: `${contacts.length} rows written to contacts.csv.`,
  })
}

export function LeadScoringContactsBlock() {
  const [contacts, setContacts] = useState<Contact[]>(CONTACTS)
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState<FilterQuery>(() => createFilterQuery())
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [rowPinning, setRowPinning] = useState<RowPinningState>({
    top: ["con-01", "con-02"],
    bottom: [],
  })
  const [viewing, setViewing] = useState<Contact | null>(null)
  const [editing, setEditing] = useState<Contact | "new" | null>(null)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return contacts
      .filter((contact) => matchesContactQuery(contact, query))
      .filter((contact) => {
        if (term === "") return true
        return [contact.name, contact.email, contact.company].some((field) =>
          field.toLowerCase().includes(term),
        )
      })
  }, [contacts, query, search])

  const pinnedCount = rowPinning.top?.length ?? 0

  const totalPipeline = contacts.reduce(
    (sum, contact) => sum + contact.pipeline,
    0,
  )

  function handleSave(contact: Contact) {
    const exists = contacts.some((entry) => entry.id === contact.id)
    setContacts((current) =>
      exists
        ? current.map((entry) => (entry.id === contact.id ? contact : entry))
        : [contact, ...current],
    )
    if (!exists) setPagination((current) => ({ ...current, pageIndex: 0 }))
    toast(exists ? "Contact updated" : "Contact added", {
      description: `${contact.name} · ${contact.email}`,
    })
  }

  function handleDelete(contact: Contact) {
    const index = contacts.findIndex((entry) => entry.id === contact.id)
    setContacts((current) => current.filter((entry) => entry.id !== contact.id))
    toast(`${contact.name} deleted`, {
      description: "The contact was removed from this list.",
      action: {
        label: "Undo",
        onClick: () =>
          setContacts((current) => {
            if (current.some((entry) => entry.id === contact.id)) return current
            const next = [...current]
            next.splice(index, 0, contact)
            return next
          }),
      },
    })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, Contact>[]>(
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
        header: ({ column }) => (
          <DataGridColumnHeader title="Contact" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center justify-between gap-2">
            <ContactCell contact={row.original} />
            <DataGridTableRowPin row={row} />
          </div>
        ),
        size: 260,
        enableHiding: false,
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
        size: 160,
      },
      {
        accessorKey: "score",
        header: ({ column }) => (
          <DataGridColumnHeader title="Lead Score" column={column} />
        ),
        cell: ({ row }) => <ScoreCell score={row.original.score} />,
        size: 150,
      },
      {
        id: "engagement",
        accessorFn: (contact) => engagementTrend(contact).last,
        header: ({ column }) => (
          <DataGridColumnHeader title="Engagement" column={column} />
        ),
        cell: ({ row }) => <EngagementCell contact={row.original} />,
        size: 180,
      },
      {
        accessorKey: "pipeline",
        header: ({ column }) => (
          <DataGridColumnHeader title="Pipeline" column={column} />
        ),
        cell: ({ row }) => <PipelineCell contact={row.original} />,
        size: 140,
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataGridColumnHeader title="Status" column={column} />
        ),
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
        size: 130,
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
                  Edit contact
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
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contacts],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (contact: Contact) => contact.id,
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

  const selectedContacts = table
    .getSelectedRowModel()
    .rows.map((row) => row.original)

  function setStatusForSelection(status: ContactStatus) {
    const ids = new Set(selectedContacts.map((contact) => contact.id))
    setContacts((current) =>
      current.map((contact) =>
        ids.has(contact.id) ? { ...contact, status } : contact,
      ),
    )
    setRowSelection({})
    toast("Status updated", {
      description: `${ids.size} contact${ids.size === 1 ? "" : "s"} set to ${status}.`,
    })
  }

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Contacts</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Contacts</FrameTitle>
                <FrameDescription>
                  {contacts.length} contacts &middot;{" "}
                  {formatCurrency(totalPipeline)} in open pipeline
                </FrameDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => exportContacts(filtered)}
                  disabled={filtered.length === 0}
                >
                  <DownloadIcon />
                  Export
                </Button>
                <Button onClick={() => setEditing("new")}>
                  <PlusIcon />
                  Add Contact
                </Button>
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No contacts match your search or filters."
              onRowClick={(contact) => setViewing(contact)}
              tableLayout={{ headerBackground: true, rowsPinnable: true }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <InputGroup className="w-full sm:max-w-56">
                      <InputGroupAddon>
                        <SearchIcon />
                      </InputGroupAddon>
                      <InputGroupInput
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search contacts..."
                        aria-label="Search contacts"
                        className="text-sm"
                      />
                      <InputGroupAddon align="inline-end">
                        <Kbd>/</Kbd>
                      </InputGroupAddon>
                    </InputGroup>

                    <Filters
                      fields={contactFilterFields}
                      query={query}
                      onQueryChange={setQuery}
                      size="sm"
                      showClear
                      trigger={
                        <Button variant="outline" size="sm">
                          <FunnelIcon />
                          Filter
                        </Button>
                      }
                    />

                    <Button
                      variant="outline"
                      size="sm"
                      disabled={pinnedCount === 0}
                      onClick={() => setRowPinning({ top: [], bottom: [] })}
                    >
                      Unpin All
                      <Badge size="xs" variant="secondary">
                        {pinnedCount}
                      </Badge>
                    </Button>
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
                          onClick={() => {
                            setSearch("")
                            setQuery(createFilterQuery())
                            setSorting([])
                            setColumnVisibility({})
                            setPagination({ pageIndex: 0, pageSize: 10 })
                            setRowSelection({})
                          }}
                        >
                          <SlidersHorizontalIcon />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Reset filters and sorting</TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                {selectedContacts.length > 0 && (
                  <div className="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5">
                    <div className="text-sm font-medium">
                      {selectedContacts.length} selected
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
                          <DropdownMenuItem
                            onSelect={() => setStatusForSelection("prospect")}
                          >
                            Prospect
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onSelect={() => setStatusForSelection("customer")}
                          >
                            Customer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => exportContacts(selectedContacts)}
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

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
                <DataGridPagination
                  sizes={[10, 20, 30]}
                  info="{from} - {to} of {count} contacts"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <ContactViewSheet
        contact={viewing}
        open={viewing !== null}
        onOpenChange={(open) => {
          if (!open) setViewing(null)
        }}
        onEdit={(contact) => {
          setViewing(null)
          setEditing(contact)
        }}
      />

      <ContactFormSheet
        key={editing === "new" ? "new" : (editing?.id ?? "closed")}
        open={editing !== null}
        contact={editing === "new" || editing === null ? undefined : editing}
        onOpenChange={(open) => {
          if (!open) setEditing(null)
        }}
        onSave={handleSave}
      />
    </>
  )
}
