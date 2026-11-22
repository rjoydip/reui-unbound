import { useMemo, useState } from "react"
import {
  Building2Icon,
  CheckIcon,
  CircleDotIcon,
  CopyIcon,
  DownloadIcon,
  EyeIcon,
  FileTextIcon,
  FolderIcon,
  FunnelIcon,
  GlobeIcon,
  HashIcon,
  InfoIcon,
  MoreVerticalIcon,
  PlusIcon,
  SearchIcon,
  SplitIcon,
  Trash2Icon,
  TriangleAlertIcon,
  XIcon,
  ArrowLeftRightIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState, RowSelectionState } from "@tanstack/react-table"
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
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/kit/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
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

import { FILTER_ATTRIBUTES, TRANSACTIONS } from "./data"
import {
  N8nIcon,
  OpenAIIcon,
  PaperIcon,
  StripeIcon,
  SupabaseIcon,
} from "./brand-icons"
import type { Transaction } from "./data"

const ATTRIBUTE_ICONS = {
  Reference: HashIcon,
  Description: FileTextIcon,
  Merchant: Building2Icon,
  Category: FolderIcon,
  Region: GlobeIcon,
  Channel: SplitIcon,
  Status: CircleDotIcon,
}

const FIELD_ACCESSOR: Record<string, (tx: Transaction) => string> = {
  Reference: (tx) => tx.reference,
  Description: (tx) => `${tx.title} ${tx.merchant} ${tx.category}`,
  Merchant: (tx) => tx.merchant,
  Category: (tx) => tx.category,
  Region: (tx) => tx.region,
  Channel: (tx) => tx.channel,
  Status: (tx) => tx.status,
}

function FilterAttributesPopover({ onSelect }: { onSelect: (field: string) => void }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <FunnelIcon />
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64 p-0">
        <div className="border-b p-2">
          <Input placeholder="Search attributes..." className="h-8" />
        </div>
        <div className="p-1">
          {FILTER_ATTRIBUTES.map((attribute) => {
            const Icon = ATTRIBUTE_ICONS[attribute as keyof typeof ATTRIBUTE_ICONS]
            return (
              <button
                key={attribute}
                type="button"
                onClick={() => onSelect(attribute)}
                className="hover:bg-muted/60 flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm"
              >
                <Icon className="text-muted-foreground size-4" />
                {attribute}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function BillingTransactionsBlock() {
  const [field, setField] = useState("Reference")
  const [operator, setOperator] = useState("contains")
  const [search, setSearch] = useState("")
  const [draftSearch, setDraftSearch] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [selection, setSelection] = useState<RowSelectionState>({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    const accessor = FIELD_ACCESSOR[field] ?? FIELD_ACCESSOR.Reference!
    return TRANSACTIONS.filter((tx) => {
      const value = accessor(tx).toLowerCase()
      if (operator === "is empty") return value.trim() === ""
      if (operator === "is not empty") return value.trim() !== ""
      if (!term) return true
      switch (operator) {
        case "does not contain":
          return !value.includes(term)
        case "starts with":
          return value.startsWith(term)
        case "ends with":
          return value.endsWith(term)
        case "is":
          return value === term
        case "is not":
          return value !== term
        default:
          return value.includes(term)
      }
    })
  }, [field, operator, search])

  function clearFilters() {
    setField("Reference")
    setOperator("contains")
    setSearch("")
    setDraftSearch("")
    setPagination({ pageIndex: 0, pageSize: 5 })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, Transaction>[]>(
    () => [
      {
        id: "select",
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        size: 32,
        enableSorting: false,
      },
      {
        id: "reference",
        accessorKey: "reference",
        header: ({ column }) => <DataGridColumnHeader title="Reference" column={column} />,
        cell: ({ row }) => (
          <div className="min-w-0">
            <div className="truncate font-mono text-xs font-medium">
              {row.original.reference}
            </div>
            <div className="text-muted-foreground truncate text-xs">
              {row.original.date}
            </div>
          </div>
        ),
        size: 170,
        enableHiding: false,
      },
      {
        id: "description",
        accessorKey: "title",
        header: ({ column }) => <DataGridColumnHeader title="Description" column={column} />,
        cell: ({ row }) => (
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="bg-muted border-background flex size-8 shrink-0 items-center justify-center rounded-md border-2">
              {row.original.icon === "stripe" ? (
                <StripeIcon className="size-4 text-[#635BFF]" />
              ) : row.original.icon === "supabase" ? (
                <SupabaseIcon className="size-4 text-[#3ECF8E]" />
              ) : row.original.icon === "openai" ? (
                <OpenAIIcon className="text-foreground size-4" />
              ) : row.original.icon === "n8n" ? (
                <N8nIcon className="size-4 text-[#EA4B71]" />
              ) : (
                <PaperIcon className="size-4" />
              )}
            </span>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium">{row.original.title}</div>
              <div className="text-muted-foreground truncate text-xs">
                {row.original.merchant} · {row.original.category}
              </div>
            </div>
          </div>
        ),
        size: 390,
        enableHiding: false,
      },
      {
        id: "region",
        accessorKey: "region",
        header: ({ column }) => <DataGridColumnHeader title="Region" column={column} />,
        cell: ({ row }) => (
          <div className="flex min-w-0 items-center gap-2">
            <img
              src={`https://flagcdn.com/w20/${row.original.flag}.png`}
              alt=""
              className="size-4 rounded-full object-cover"
            />
            <div className="min-w-0">
              <div className="truncate text-sm">{row.original.region}</div>
              <div className="text-muted-foreground truncate text-xs">
                {row.original.timezone}
              </div>
            </div>
          </div>
        ),
        size: 170,
      },
      {
        id: "channel",
        accessorKey: "channel",
        header: ({ column }) => <DataGridColumnHeader title="Channel" column={column} />,
        cell: ({ row }) => (
          <Badge variant="outline" size="sm" className="font-normal">
            {row.original.channel}
          </Badge>
        ),
        size: 110,
      },
      {
        id: "amount",
        accessorKey: "amount",
        header: ({ column }) => <DataGridColumnHeader title="Amount" column={column} />,
        cell: ({ row }) => {
          const value = row.original.amount
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(Math.abs(value))
          return (
            <span
              className={cn(
                "text-sm font-medium tabular-nums",
                value >= 0 ? "text-emerald-600" : "text-foreground",
              )}
            >
              {value >= 0 ? "+" : "−"}
              {formatted}
            </span>
          )
        },
        size: 110,
      },
      {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
        cell: ({ row }) => (
          <Badge
            variant={row.original.status === "Completed" ? "success-light" : "warning-light"}
            size="sm"
          >
            {row.original.status}
          </Badge>
        ),
        size: 105,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Transaction actions">
                <MoreVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem>
                <EyeIcon />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => toast(`Copied ${row.original.reference}`)}
              >
                <CopyIcon />
                Copy Reference
              </DropdownMenuItem>
              <DropdownMenuItem>
                <DownloadIcon />
                Receipt
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <TriangleAlertIcon />
                Dispute
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        size: 44,
        enableSorting: false,
      },
    ],
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    getRowId: (tx) => tx.id,
    state: { pagination, rowSelection: selection },
    onPaginationChange: setPagination,
    onRowSelectionChange: setSelection,
    enableRowSelection: true,
  })

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Billing transactions</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/50 px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Transactions</h2>
              <p className="text-muted-foreground text-sm">
                Billing ledger(refunds / payouts)
              </p>
            </div>
            <Button
              size="sm"
              onClick={() =>
                toast("New transaction", {
                  description:
                    "Wire to your checkout or manual entry flow, demo only.",
                  icon: <InfoIcon className="text-info size-4" />,
                })
              }
            >
              <PlusIcon />
              New transaction
            </Button>
          </div>
          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No transactions match this filter."
            tableClassNames={{ headerRow: "[&>th]:py-3" }}
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true, cellBorder: true }}
          >
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex h-9 min-w-60 flex-1 items-stretch overflow-hidden rounded-md border bg-background sm:max-w-[340px]">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" className="flex items-center gap-1.5 px-3 text-sm font-medium">
                          <HashIcon className="size-3.5" />
                          {field}
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {FILTER_ATTRIBUTES.map((attribute) => (
                          <DropdownMenuItem key={attribute} onSelect={() => setField(attribute)}>
                            {attribute}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="bg-border w-px" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" className="text-muted-foreground px-2 text-sm hover:bg-muted/40">
                          {operator}
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-52 p-1">
                        {[
                          "contains",
                          "does not contain",
                          "starts with",
                          "ends with",
                          "is",
                          "is not",
                          "is empty",
                          "is not empty",
                        ].map((entry) => (
                          <DropdownMenuItem
                            key={entry}
                            className="justify-between py-1"
                            onSelect={() => setOperator(entry)}
                          >
                            {entry}
                            {operator === entry && <CheckIcon className="size-3.5" />}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="bg-border w-px" />
                    <Popover open={searchOpen} onOpenChange={setSearchOpen}>
                      <PopoverTrigger asChild>
                        <button type="button" className="text-muted-foreground min-w-24 flex-1 px-2 text-left text-sm hover:bg-muted/40">
                          {search || "Search..."}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="w-[420px] p-1">
                        <div className="flex items-center gap-1 rounded-md border px-2">
                          <Input
                            autoFocus
                            value={draftSearch}
                            onChange={(event) => setDraftSearch(event.target.value)}
                            placeholder="Search..."
                            className="h-9 flex-1 border-0 px-0 shadow-none focus-visible:ring-0"
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                setSearch(draftSearch)
                                setSearchOpen(false)
                              }
                              if (event.key === "Escape") setSearchOpen(false)
                            }}
                          />
                          <Button variant="ghost" size="icon-sm" aria-label="Apply search" onClick={() => { setSearch(draftSearch); setSearchOpen(false) }}>
                            <CheckIcon />
                          </Button>
                          <Button variant="ghost" size="icon-sm" aria-label="Clear search" onClick={() => { setDraftSearch(""); setSearch(""); setSearchOpen(false) }}>
                            <XIcon />
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <span className="bg-border w-px" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" aria-label="Filter actions" className="text-muted-foreground px-2 hover:bg-muted/40">
                          <MoreVerticalIcon className="size-3.5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-44">
                        <DropdownMenuItem onSelect={() => toast("Filter duplicated")}>
                          <CopyIcon />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() =>
                            setOperator((current) =>
                              current === "contains"
                                ? "does not contain"
                                : current === "does not contain"
                                  ? "contains"
                                  : current === "is"
                                    ? "is not"
                                    : current === "is not"
                                      ? "is"
                                      : current,
                            )
                          }
                        >
                          <ArrowLeftRightIcon />
                          Negate
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive" onSelect={clearFilters}>
                          <Trash2Icon />
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <FilterAttributesPopover
                    onSelect={(attribute) => setField(attribute)}
                  />
                </div>
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  <FunnelIcon />
                  Clear
                </Button>
              </div>

              <DataGridContainer className="border-x-0">
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <div
                className={
                  filtered.length === 0
                    ? "hidden"
                    : "border-t bg-muted/50 px-4 pt-3 pb-4"
                }
              >
                <DataGridPagination
                  sizes={[5, 10]}
                  info="{from} - {to} of {count}"
                  rowsPerPageLabel="Rows per page"
                />
              </div>
            </div>
          </DataGrid>
        </div>
      </div>
    </div>
  )
}

export default BillingTransactionsBlock
