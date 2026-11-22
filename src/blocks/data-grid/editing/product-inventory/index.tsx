import { useMemo, useState } from "react"
import {
  CheckCircle2Icon,
  CopyIcon,
  InfoIcon,
  FunnelIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  Trash2Icon,
  TriangleAlertIcon,
} from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
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
import { DataGridTable } from "@/components/kit/data-grid/~data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"

import { PRODUCTS, PRODUCT_STATUSES } from "./data"
import type { ProductRow, ProductStatus } from "./data"

const STATUS_VARIANT: Record<ProductStatus, "success-light" | "warning-light" | "destructive-light"> = {
  Active: "success-light",
  Draft: "warning-light",
  Archived: "destructive-light",
}

type EditField = "price" | "stock"

export function ProductInventoryBlock() {
  const [rows, setRows] = useState(PRODUCTS)
  const [saved, setSaved] = useState(PRODUCTS)
  const [search, setSearch] = useState("")
  const [statuses, setStatuses] = useState<ProductStatus[]>([])
  const [editing, setEditing] = useState<{ id: string; field: EditField } | null>(null)
  const [editValue, setEditValue] = useState("")

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return rows.filter((row) => {
      if (statuses.length > 0 && !statuses.includes(row.status)) return false
      if (!term) return true
      return [row.name, row.sku, row.category].some((value) =>
        value.toLowerCase().includes(term),
      )
    })
  }, [rows, search, statuses])

  const changeCount = rows.reduce((total, row) => {
    const previous = saved.find((entry) => entry.id === row.id)
    if (!previous) return total + Object.keys(row).filter((key) => key !== "id").length
    return (
      total +
      (Object.keys(row) as (keyof ProductRow)[]).filter(
        (key) => key !== "id" && row[key] !== previous[key],
      ).length
    )
  }, 0)
  const dirty = changeCount > 0

  function startEdit(row: ProductRow, field: EditField) {
    setEditing({ id: row.id, field })
    setEditValue(String(row[field]))
  }

  function commitEdit() {
    if (!editing) return
    const value = Number(editValue)
    setRows((current) =>
      current.map((row) =>
        row.id === editing.id && Number.isFinite(value)
          ? { ...row, [editing.field]: value }
          : row,
      ),
    )
    setEditing(null)
  }

  function addProduct() {
    const next: ProductRow = {
      id: `p-${Date.now()}`,
      name: "Untitled product",
      sku: `NEW-${Math.floor(Math.random() * 9000 + 1000)}`,
      category: "Apparel",
      price: 0,
      stock: 0,
      status: "Draft",
      visible: false,
    }
    setRows((current) => [next, ...current])
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, ProductRow>[]>(
    () => [
      {
        id: "product",
        accessorKey: "name",
        header: ({ column }) => <DataGridColumnHeader title="Product" column={column} />,
        cell: ({ row }) => (
          <div className="min-w-0">
            <div className="truncate font-medium">{row.original.name}</div>
            <div className="text-muted-foreground truncate font-mono text-[11px]">
              {row.original.sku}
            </div>
          </div>
        ),
        size: 280,
        enableHiding: false,
      },
      {
        id: "category",
        accessorKey: "category",
        header: ({ column }) => <DataGridColumnHeader title="Category" column={column} />,
        cell: ({ row }) => <span className="text-sm">{row.original.category}</span>,
        size: 150,
      },
      {
        id: "price",
        accessorKey: "price",
        header: ({ column }) => <DataGridColumnHeader title="Price" column={column} />,
        cell: ({ row }) =>
          editing?.id === row.original.id && editing.field === "price" ? (
            <Input
              autoFocus
              value={editValue}
              type="number"
              className="h-7 w-24 text-sm"
              onChange={(event) => setEditValue(event.target.value)}
              onBlur={commitEdit}
              onKeyDown={(event) => {
                if (event.key === "Enter") commitEdit()
                if (event.key === "Escape") setEditing(null)
              }}
            />
          ) : (
            <button
              type="button"
              className="hover:bg-muted -mx-1 rounded px-1 text-sm tabular-nums"
              onClick={() => startEdit(row.original, "price")}
            >
              ${row.original.price.toFixed(2)}
            </button>
          ),
        size: 120,
      },
      {
        id: "stock",
        accessorKey: "stock",
        header: ({ column }) => <DataGridColumnHeader title="Stock" column={column} />,
        cell: ({ row }) =>
          editing?.id === row.original.id && editing.field === "stock" ? (
            <Input
              autoFocus
              value={editValue}
              type="number"
              className="h-7 w-20 text-sm"
              onChange={(event) => setEditValue(event.target.value)}
              onBlur={commitEdit}
              onKeyDown={(event) => {
                if (event.key === "Enter") commitEdit()
                if (event.key === "Escape") setEditing(null)
              }}
            />
          ) : (
            <button
              type="button"
              className="hover:bg-muted -mx-1 flex items-center gap-1.5 rounded px-1 text-sm tabular-nums"
              onClick={() => startEdit(row.original, "stock")}
            >
              {row.original.stock > 0 && row.original.stock < 10 && (
                <TriangleAlertIcon className="size-3.5 text-warning" />
              )}
              {row.original.stock}
            </button>
          ),
        size: 120,
      },
      {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
        cell: ({ row }) => (
          <Badge variant={STATUS_VARIANT[row.original.status]} size="sm">
            {row.original.status}
          </Badge>
        ),
        size: 120,
      },
      {
        id: "visible",
        accessorKey: "visible",
        header: ({ column }) => <DataGridColumnHeader title="Visible" column={column} />,
        cell: ({ row }) => (
          <Switch
            checked={row.original.visible}
            onCheckedChange={(checked) =>
              setRows((current) =>
                current.map((entry) =>
                  entry.id === row.original.id ? { ...entry, visible: checked } : entry,
                ),
              )
            }
            aria-label={`${row.original.name} visible`}
          />
        ),
        size: 100,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Product actions">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem
                onSelect={() =>
                  setRows((current) => [
                    {
                      ...row.original,
                      id: `${row.original.id}-copy-${Date.now()}`,
                      name: `${row.original.name} copy`,
                      sku: `${row.original.sku}-C`,
                    },
                    ...current,
                  ])
                }
              >
                <CopyIcon />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                onSelect={() =>
                  setRows((current) =>
                    current.filter((entry) => entry.id !== row.original.id),
                  )
                }
              >
                <Trash2Icon />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        size: 50,
        enableSorting: false,
      },
    ],
    [editing, editValue],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    getRowId: (row) => row.id,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Product inventory</h1>
      <Frame className="w-full max-w-6xl">
        <FramePanel className="gap-0">
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3 pb-1 -mx-4 -mt-4 rounded-t-xl border-b bg-muted/50 px-4 pt-4 ">
            <div>
              <FrameTitle>Product Inventory</FrameTitle>
              <FrameDescription>Edit pricing and stock inline.</FrameDescription>
            </div>
            <Button size="sm" onClick={addProduct}>
              <PlusIcon />
              Add product
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No products match this view."
            tableClassNames={{ headerRow: "[&>th]:py-3" }}
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 py-1">
                <InputGroup className="w-full sm:max-w-72">
                  <InputGroupAddon>
                    <SearchIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search products..."
                    className="text-sm"
                  />
                </InputGroup>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <FunnelIcon />
                      Status
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-20 p-0.5">
                    <div className="text-muted-foreground mb-0.5 px-1 text-[10px] font-medium">
                      Status
                    </div>
                    <div className="flex flex-col items-start gap-0.5 px-1">
                      {PRODUCT_STATUSES.map((status) => (
                        <button
                          key={status}
                          type="button"
                          onClick={() =>
                            setStatuses((current) =>
                              current.includes(status)
                                ? current.filter((entry) => entry !== status)
                                : [...current, status],
                            )
                          }
                        >
                          <Badge variant={STATUS_VARIANT[status]} size="xs">
                            {status}
                          </Badge>
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <DataGridContainer className="rounded-lg border">
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <DataGridPagination
                sizes={[5, 10]}
                info="{from} - {to} of {count} products"
                rowsPerPageLabel="Rows per page"
                className={filtered.length === 0 ? "hidden" : "mb-4 px-2 pt-3 pb-6"}
              />
            </div>
          </DataGrid>

          <div className="-mx-4 -mb-4 flex flex-wrap items-center justify-between gap-2 rounded-b-xl border-t bg-muted/30 px-4 py-4">
            <span className="flex items-center gap-1.5 text-sm">
              {dirty ? (
                <>
                  <InfoIcon className="size-4" />
                  <span>
                    {changeCount} unsaved change{changeCount === 1 ? "" : "s"}
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle2Icon className="text-success-foreground size-4" />
                  <span className="text-success-foreground">All changes saved</span>
                </>
              )}
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={!dirty}
                onClick={() => setRows(saved)}
              >
                Discard
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  setSaved(rows)
                }}
              >
                Save changes
              </Button>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default ProductInventoryBlock
