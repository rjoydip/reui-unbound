import { useMemo, useState } from "react"
import {
  ActivityIcon,
  BracesIcon,
  CpuIcon,
  DatabaseIcon,
  GlobeIcon,
  HardDriveIcon,
  KeyRoundIcon,
  LayersIcon,
  MemoryStickIcon,
  NetworkIcon,
  Rows3Icon,
  SparklesIcon,
  WaypointsIcon,
  ZapIcon,
  CopyIcon,
  FunnelIcon,
  MoreHorizontalIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  Settings2Icon,
  SlidersHorizontalIcon,
  Trash2Icon,
} from "lucide-react"
import type {
  ColumnDef,
  PaginationState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
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
import { Filters } from "@/components/kit/filters/filters"
import {
  createFilterQuery,
  isFilterRule,
} from "@/components/kit/filters/~filters-query"
import type { FilterQuery } from "@/components/kit/filters/~filters-types"
import type { FilterField } from "@/components/kit/filters/~filters-types"
import { cn } from "cn"

import {
  RATE_LINES,
  REGION_LABEL,
  REGION_UPLIFT,
  formatMonthly,
  formatRate,
  netRate,
  totals,
} from "./data"
import type { RateLine, Region } from "./data"

const REGIONS = Object.keys(REGION_LABEL) as Region[]

const PRODUCT_ICONS: Record<string, typeof CpuIcon> = {
  "Standard Compute": CpuIcon,
  "Memory Optimized": MemoryStickIcon,
  "GPU L4": ZapIcon,
  "Block Storage SSD": HardDriveIcon,
  "Object Storage": DatabaseIcon,
  "Internet Egress": GlobeIcon,
  "Managed Postgres": DatabaseIcon,
  "Redis Cache": LayersIcon,
  "Inference Tokens": SparklesIcon,
  "Function Calls": BracesIcon,
  "Load Balancer": NetworkIcon,
  "CDN Bandwidth": GlobeIcon,
  "Queue Throughput": Rows3Icon,
  "Vault Secrets": KeyRoundIcon,
  "Tracing Spans": ActivityIcon,
  "Edge Functions": WaypointsIcon,
}

const rateFilterFields: FilterField[] = [
  {
    id: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "active", label: "Active" },
      { value: "expiring", label: "Expiring" },
    ],
    operators: [
      { value: "is", label: "is" },
      { value: "is-not", label: "is not" },
    ],
    defaultOperator: "is",
  },
  {
    id: "region",
    label: "Region",
    type: "select",
    options: REGIONS.map((region) => ({
      value: region,
      label: REGION_LABEL[region],
    })),
    operators: [
      { value: "is", label: "is" },
      { value: "is-not", label: "is not" },
    ],
    defaultOperator: "is",
  },
]

function matchesRateQuery(line: RateLine, query: FilterQuery): boolean {
  const rule = query.rules.find((node) => isFilterRule(node) && node.operator)
  if (!rule || !isFilterRule(rule) || rule.value === undefined) return true

  const values = Array.isArray(rule.value) ? rule.value : [rule.value]
  const wanted = String(values[0]).toLowerCase()
  const actual =
    rule.path[0] === "status" ? line.status.toLowerCase() : line.region

  return rule.operator === "is-not" ? actual !== wanted : actual === wanted
}

function ProductMark({ product }: { product: string }) {
  const Icon = PRODUCT_ICONS[product] ?? CpuIcon

  return (
    <span className="border-border bg-background text-muted-foreground flex size-5 shrink-0 items-center justify-center rounded border">
      <Icon className="size-3" />
    </span>
  )
}

function UsageCell({ usage }: { usage: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-muted h-1.5 w-20 overflow-hidden rounded-full">
        <div
          className={cn(
            "h-full rounded-full",
            usage > 100
              ? "bg-destructive"
              : usage < 75
                ? "bg-warning"
                : "bg-muted-foreground/60",
          )}
          style={{ width: `${Math.min(100, usage)}%` }}
        />
      </div>
      <span
        className={cn(
          "text-sm tabular-nums",
          usage > 100 && "text-destructive font-medium",
          usage < 75 && "text-warning-foreground",
        )}
      >
        {usage}%
      </span>
    </div>
  )
}

function RateDialog({
  open,
  line,
  onOpenChange,
  onSave,
}: {
  open: boolean
  line?: RateLine
  onOpenChange: (open: boolean) => void
  onSave: (line: RateLine) => void
}) {
  const [form, setForm] = useState<RateLine>(
    () =>
      line ?? {
        id: `sku-${Math.random().toString(36).slice(2, 7)}`,
        product: "",
        list: 0.05,
        discount: 20,
        commit: 10000,
        usage: 80,
        monthly: 0,
        renews: "Mar 1, 2028",
        status: "Active",
        region: "us-east",
      },
  )

  function set<K extends keyof RateLine>(key: K, value: RateLine[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const net = netRate(form)
  const estimate =
    net * form.commit * (form.usage / 100) * REGION_UPLIFT[form.region]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{line ? "Edit rate" : "Add rate"}</DialogTitle>
          <DialogDescription>
            Net rate and the monthly estimate update as you type.
          </DialogDescription>
        </DialogHeader>

        <form
          className="grid gap-4"
          onSubmit={(event) => {
            event.preventDefault()
            if (form.product.trim() === "") return
            onSave({
              ...form,
              product: form.product.trim(),
              monthly: Number(estimate.toFixed(2)),
            })
            onOpenChange(false)
          }}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="rate-product">SKU name</FieldLabel>
              <Input
                id="rate-product"
                value={form.product}
                onChange={(event) => set("product", event.target.value)}
                placeholder="Standard Compute"
                required
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="rate-list">List rate</FieldLabel>
                <Input
                  id="rate-list"
                  type="number"
                  step="0.0001"
                  min="0"
                  value={form.list}
                  onChange={(event) => set("list", Number(event.target.value))}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="rate-discount">Discount %</FieldLabel>
                <Input
                  id="rate-discount"
                  type="number"
                  step="0.1"
                  min="0"
                  max="90"
                  value={form.discount}
                  onChange={(event) =>
                    set("discount", Number(event.target.value))
                  }
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="rate-commit">Commit units</FieldLabel>
                <Input
                  id="rate-commit"
                  type="number"
                  min="0"
                  value={form.commit}
                  onChange={(event) =>
                    set("commit", Number(event.target.value))
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="rate-usage">Usage %</FieldLabel>
                <Input
                  id="rate-usage"
                  type="number"
                  min="0"
                  value={form.usage}
                  onChange={(event) => set("usage", Number(event.target.value))}
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="rate-region">Region</FieldLabel>
                <Select
                  value={form.region}
                  onValueChange={(value) => set("region", value as Region)}
                >
                  <SelectTrigger id="rate-region" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {REGIONS.map((region) => (
                      <SelectItem key={region} value={region}>
                        {REGION_LABEL[region]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="rate-renewal">Renews</FieldLabel>
                <Input
                  id="rate-renewal"
                  value={form.renews}
                  onChange={(event) => set("renews", event.target.value)}
                />
              </Field>
            </div>

            <div className="bg-muted/40 flex items-center justify-between gap-3 rounded-lg border px-3 py-2">
              <div className="text-sm">
                <div className="text-muted-foreground text-xs">Net / unit</div>
                <div className="font-medium tabular-nums">
                  {formatRate(net)}
                </div>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="text-right text-sm">
                <div className="text-muted-foreground text-xs">
                  Estimated monthly
                </div>
                <div className="font-medium tabular-nums">
                  {formatMonthly(estimate)}
                </div>
              </div>
            </div>
          </FieldGroup>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">{line ? "Save rate" : "Add rate"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function CloudRateCardBlock() {
  const [lines, setLines] = useState<RateLine[]>(RATE_LINES)
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState<FilterQuery>(() => createFilterQuery())
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [dense, setDense] = useState(false)
  const [stripped, setStripped] = useState(false)
  const [editing, setEditing] = useState<RateLine | "new" | null>(null)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return lines
      .filter((line) => matchesRateQuery(line, query))
      .filter((line) => {
        if (term === "") return true
        return line.product.toLowerCase().includes(term)
      })
  }, [lines, search, query])

  const summary = totals(filtered)

  function handleSave(line: RateLine) {
    const exists = lines.some((entry) => entry.id === line.id)
    setLines((current) =>
      exists
        ? current.map((entry) => (entry.id === line.id ? line : entry))
        : [line, ...current],
    )
    toast(exists ? "Rate updated" : "Rate added", {
      description: `${line.product} · ${formatMonthly(line.monthly)} / month`,
    })
  }

  function handleDelete(line: RateLine) {
    const index = lines.findIndex((entry) => entry.id === line.id)
    setLines((current) => current.filter((entry) => entry.id !== line.id))
    toast(`${line.product} deleted`, {
      description: "The line was removed from the rate card.",
      action: {
        label: "Undo",
        onClick: () =>
          setLines((current) => {
            if (current.some((entry) => entry.id === line.id)) return current
            const next = [...current]
            next.splice(index, 0, line)
            return next
          }),
      },
    })
  }

  function handleDuplicate(line: RateLine) {
    const copy: RateLine = {
      ...line,
      id: `sku-${Math.random().toString(36).slice(2, 7)}`,
      product: `${line.product} (copy)`,
    }
    setLines((current) => [copy, ...current])
    toast("Rate duplicated", { description: copy.product })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, RateLine>[]>(
    () => [
      {
        accessorKey: "product",
        header: ({ column }) => (
          <DataGridColumnHeader title="Product" column={column} />
        ),
        cell: ({ row }) => (
          <span className="flex items-center gap-2 font-medium">
            <ProductMark product={row.original.product} />
            {row.original.product}
          </span>
        ),
        size: 180,
        enableHiding: false,
      },
      {
        accessorKey: "list",
        header: ({ column }) => (
          <DataGridColumnHeader title="List" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-sm tabular-nums">
            {formatRate(row.original.list)}
          </span>
        ),
        size: 90,
      },
      {
        accessorKey: "discount",
        header: ({ column }) => (
          <DataGridColumnHeader title="Discount" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-sm tabular-nums">
            {row.original.discount.toFixed(1)}%
          </span>
        ),
        size: 95,
      },
      {
        id: "net",
        accessorFn: (line) => netRate(line),
        header: ({ column }) => (
          <DataGridColumnHeader title="Net / unit" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-sm font-medium tabular-nums">
            {formatRate(netRate(row.original))}
          </span>
        ),
        size: 100,
      },
      {
        accessorKey: "commit",
        header: ({ column }) => (
          <DataGridColumnHeader title="Commit" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-sm tabular-nums">
            {row.original.commit.toLocaleString("en-US")}
          </span>
        ),
        size: 95,
      },
      {
        accessorKey: "usage",
        header: ({ column }) => (
          <DataGridColumnHeader title="Usage" column={column} />
        ),
        cell: ({ row }) => <UsageCell usage={row.original.usage} />,
        size: 120,
      },
      {
        accessorKey: "monthly",
        header: ({ column }) => (
          <DataGridColumnHeader title="Monthly" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-sm font-medium tabular-nums">
            {formatMonthly(row.original.monthly)}
          </span>
        ),
        size: 110,
      },
      {
        accessorKey: "renews",
        header: ({ column }) => (
          <DataGridColumnHeader title="Renews" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-sm">{row.original.renews}</span>
        ),
        size: 110,
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataGridColumnHeader title="Status" column={column} />
        ),
        cell: ({ row }) => (
          <span
            className={cn(
              "text-xs font-medium",
              row.original.status === "Active"
                ? "text-success-foreground"
                : "text-warning-foreground",
            )}
          >
            {row.original.status}
          </span>
        ),
        size: 100,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <div className="flex justify-end">
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
                <DropdownMenuItem onSelect={() => setEditing(row.original)}>
                  <PencilIcon />
                  Edit rate
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => handleDuplicate(row.original)}
                >
                  <CopyIcon />
                  Duplicate
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
    [lines],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (line: RateLine) => line.id,
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  })

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Rate card</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Rate Card</FrameTitle>
                <FrameDescription>
                  {lines.length} SKUs &middot; 24.6%
                  below list
                </FrameDescription>
              </div>
              <Button onClick={() => setEditing("new")}>
                <PlusIcon />
                Add rate
              </Button>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No SKUs match your search or filters."
              tableLayout={{
                headerBackground: true,
                dense,
                stripped,
              }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <InputGroup className="w-full sm:max-w-64">
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search SKU or name..."
                      aria-label="Search SKUs"
                      className="text-sm"
                    />
                  </InputGroup>

                  <div className="flex flex-wrap items-center gap-2">
                    <Filters
                      fields={rateFilterFields}
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
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Settings2Icon />
                          Settings
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent align="end" className="w-64 p-3">
                        <div className="text-sm font-medium">Display</div>
                        <div className="mt-3 grid gap-3">
                          <label className="flex items-center justify-between gap-3 text-sm">
                            Compact density
                            <Switch
                              checked={dense}
                              onCheckedChange={setDense}
                            />
                          </label>
                          <label className="flex items-center justify-between gap-3 text-sm">
                            Striped rows
                            <Switch
                              checked={stripped}
                              onCheckedChange={setStripped}
                            />
                          </label>
                        </div>
                        <Separator className="my-3" />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => {
                            if (sorting.length === 0) {
                              toast("No sorting applied")
                              return
                            }
                            setSorting([])
                            toast("Sorting cleared")
                          }}
                        >
                          <SlidersHorizontalIcon />
                          Clear sorting
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-2 text-sm">
                  <span className="font-medium">
                    Total &middot; {filtered.length} SKUs
                  </span>
                  <span className="font-semibold tabular-nums">
                    {formatMonthly(summary.monthly)}
                  </span>
                </div>

                <DataGridPagination
                  sizes={[10, 20, 30]}
                  info="{from} - {to} of {count} SKUs"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <RateDialog
        key={editing === "new" ? "new" : (editing?.id ?? "closed")}
        open={editing !== null}
        line={editing === "new" || editing === null ? undefined : editing}
        onOpenChange={(open) => {
          if (!open) setEditing(null)
        }}
        onSave={handleSave}
      />
    </>
  )
}
