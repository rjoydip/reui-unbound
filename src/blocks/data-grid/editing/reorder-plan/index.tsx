import { useMemo, useState } from "react"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Columns3Icon,
  DownloadIcon,
  BoxesIcon,
  FunnelIcon,
  LayersIcon,
  PackageIcon,
  Redo2Icon,
  RotateCcwIcon,
  SearchIcon,
  Settings2Icon,
  ShoppingCartIcon,
  Undo2Icon,
} from "lucide-react"
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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
import { Badge } from "@/components/kit/badge"
import {
  DataGrid,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
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

import { REORDER_LINES } from "./data"
import type { ReorderLine, ReorderStatus } from "./data"

const STATUS_VARIANT: Record<ReorderStatus, "secondary" | "destructive-light" | "success-light"> = {
  Covered: "secondary",
  Hold: "destructive-light",
  Ordered: "success-light",
}

const STATUS_DOT: Record<ReorderStatus, string> = {
  Covered: "bg-muted-foreground/50",
  Hold: "bg-destructive",
  Ordered: "bg-success",
}

type EditableField = "sku" | "item" | "onHand" | "orderValue"



function ReorderColumnsPopover() {
  const [view, setView] = useState<string | null>(null)
  const groups = [
    { icon: PackageIcon, label: "Product", count: 2 },
    { icon: LayersIcon, label: "Planning", count: 3 },
    { icon: BoxesIcon, label: "Stock", count: 1 },
    { icon: ShoppingCartIcon, label: "Order", count: 1 },
  ]
  const orderFields = ["Order Qty", "Unit Cost", "Order Value"]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Columns3Icon />
          Columns
          <span className="bg-muted text-muted-foreground rounded px-1 text-[10px]">7</span>
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56 p-0">
        {view === null ? (
          <>
            <div className="border-b p-2">
              <Input placeholder="Search columns" className="h-8" />
            </div>
            <div className="p-2">
              {groups.map(({ icon: Icon, label, count }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setView(label)}
                  className="hover:bg-muted/60 flex w-full items-center gap-2 rounded px-2 py-0.5 text-xs"
                >
                  <Icon className="text-muted-foreground size-4" />
                  <span className="flex-1 text-left">{label}</span>
                  <span className="text-muted-foreground text-xs">{count}</span>
                  <ChevronRightIcon className="text-muted-foreground size-3.5" />
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setView(null)}
              className="text-muted-foreground hover:text-foreground flex w-full items-center gap-1.5 border-b px-3 py-2 text-sm"
            >
              <ChevronLeftIcon className="size-4" />
              Search columns
            </button>
            <div className="p-2">
              <div className="px-2 py-1 text-xs font-medium">{view}</div>
              {orderFields.map((field) => (
                <button
                  key={field}
                  type="button"
                  className="hover:bg-muted/60 flex w-full items-center gap-2 rounded px-2 py-0.5 text-xs"
                >
                  <span className="flex-1 text-left">{field}</span>
                  <span
                    className={
                      field === "Order Value"
                        ? "bg-foreground text-background flex size-4 items-center justify-center rounded-[3px]"
                        : "border-border size-4 rounded-[3px] border"
                    }
                  >
                    {field === "Order Value" && <CheckIcon className="size-3" />}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}

export function StockReorderPlanBlock() {
  const [lines, setLines] = useState(REORDER_LINES)
  const [search, setSearch] = useState("")
  const [statuses, setStatuses] = useState<ReorderStatus[]>([])
  const [selection, setSelection] = useState<RowSelectionState>({})
  const [editing, setEditing] = useState<{ id: string; field: EditableField } | null>(null)
  const [value, setValue] = useState("")

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return lines.filter((line) => {
      if (statuses.length > 0 && !statuses.includes(line.status)) return false
      if (!term) return true
      return [line.sku, line.item, line.buyer, line.warehouse].some((entry) =>
        entry.toLowerCase().includes(term),
      )
    })
  }, [lines, search, statuses])

  function startEdit(line: ReorderLine, field: EditableField) {
    setEditing({ id: line.id, field })
    setValue(String(line[field]))
  }

  function commit() {
    if (!editing) return
    setLines((current) =>
      current.map((line) => {
        if (line.id !== editing.id) return line
        if (editing.field === "onHand" || editing.field === "orderValue") {
          const number = Number(value)
          return Number.isFinite(number) ? { ...line, [editing.field]: number } : line
        }
        return { ...line, [editing.field]: value }
      }),
    )
    setEditing(null)
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, ReorderLine>[]>(
    () => [
      {
        id: "select",
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        size: 32,
        enableSorting: false,
      },
      {
        id: "line",
        header: () => <span className="text-muted-foreground text-xs font-medium">#</span>,
        cell: ({ row }) => (
          <span className="text-muted-foreground text-sm tabular-nums">
            {row.index + 1}
          </span>
        ),
        size: 44,
        enableSorting: false,
      },
      {
        id: "sku",
        accessorKey: "sku",
        header: ({ column }) => (
          <div className="flex items-center gap-1.5">
            <DataGridColumnHeader title="SKU" column={column} />
            <span className="bg-muted text-muted-foreground flex size-4 items-center justify-center rounded-[3px] text-[9px] font-medium">
              A
            </span>
          </div>
        ),
        cell: ({ row }) =>
          editing?.id === row.original.id && editing.field === "sku" ? (
            <Input
              autoFocus
              value={value}
              className="h-7 w-32 text-sm"
              onChange={(event) => setValue(event.target.value)}
              onBlur={commit}
              onKeyDown={(event) => {
                if (event.key === "Enter") commit()
                if (event.key === "Escape") setEditing(null)
              }}
            />
          ) : (
            <button
              type="button"
              className="hover:bg-muted -mx-1 rounded px-1 font-mono text-xs font-medium"
              onClick={() => startEdit(row.original, "sku")}
            >
              {row.original.sku}
            </button>
          ),
        size: 110,
      },
      {
        id: "item",
        accessorKey: "item",
        header: ({ column }) => (
          <div className="flex items-center gap-1.5">
            <DataGridColumnHeader title="Item" column={column} />
            <span className="bg-muted text-muted-foreground flex size-4 items-center justify-center rounded-[3px] text-[9px] font-medium">
              B
            </span>
          </div>
        ),
        cell: ({ row }) =>
          editing?.id === row.original.id && editing.field === "item" ? (
            <Input
              autoFocus
              value={value}
              className="h-7 w-56 text-sm"
              onChange={(event) => setValue(event.target.value)}
              onBlur={commit}
              onKeyDown={(event) => {
                if (event.key === "Enter") commit()
                if (event.key === "Escape") setEditing(null)
              }}
            />
          ) : (
            <button
              type="button"
              className="hover:bg-muted -mx-1 max-w-full truncate rounded px-1 text-left text-sm"
              onClick={() => startEdit(row.original, "item")}
            >
              {row.original.item}
            </button>
          ),
        size: 175,
        enableHiding: false,
      },
      {
        id: "buyer",
        accessorKey: "buyer",
        header: ({ column }) => (
          <div className="flex items-center gap-1.5">
            <DataGridColumnHeader title="Buyer" column={column} />
            <span className="bg-muted text-muted-foreground flex size-4 items-center justify-center rounded-[3px] text-[9px] font-medium">
              C
            </span>
          </div>
        ),
        cell: ({ row }) => (
          <span className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage src={`https://i.pravatar.cc/96?u=${row.original.buyer}`} alt="" />
              <AvatarFallback className="text-[9px]">
                {row.original.buyer.split(" ").map((part) => part[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <span className="truncate text-sm">{row.original.buyer}</span>
          </span>
        ),
        size: 120,
      },
      {
        id: "warehouse",
        accessorKey: "warehouse",
        header: ({ column }) => (
          <div className="flex items-center gap-1.5">
            <DataGridColumnHeader title="Warehouse" column={column} />
            <span className="bg-muted text-muted-foreground flex size-4 items-center justify-center rounded-[3px] text-[9px] font-medium">
              D
            </span>
          </div>
        ),
        cell: ({ row }) => <span className="text-sm">{row.original.warehouse}</span>,
        size: 105,
      },
      {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => (
          <div className="flex items-center gap-1.5">
            <DataGridColumnHeader title="Status" column={column} />
            <span className="bg-muted text-muted-foreground flex size-4 items-center justify-center rounded-[3px] text-[9px] font-medium">
              E
            </span>
          </div>
        ),
        cell: ({ row }) => (
          <Badge variant={STATUS_VARIANT[row.original.status]} size="sm" className="gap-1.5">
            <span className={cn("size-1.5 rounded-full", STATUS_DOT[row.original.status])} />
            {row.original.status}
          </Badge>
        ),
        size: 90,
      },
      {
        id: "onHand",
        accessorKey: "onHand",
        header: ({ column }) => (
          <div className="flex items-center gap-1.5">
            <DataGridColumnHeader title="On Hand" column={column} />
            <span className="bg-muted text-muted-foreground flex size-4 items-center justify-center rounded-[3px] text-[9px] font-medium">
              F
            </span>
          </div>
        ),
        cell: ({ row }) =>
          editing?.id === row.original.id && editing.field === "onHand" ? (
            <Input
              autoFocus
              type="number"
              value={value}
              className="h-7 w-24 text-sm"
              onChange={(event) => setValue(event.target.value)}
              onBlur={commit}
              onKeyDown={(event) => {
                if (event.key === "Enter") commit()
                if (event.key === "Escape") setEditing(null)
              }}
            />
          ) : (
            <button
              type="button"
              className="hover:bg-muted -mx-1 rounded px-1 text-sm tabular-nums"
              onClick={() => startEdit(row.original, "onHand")}
            >
              {row.original.onHand.toLocaleString()}
            </button>
          ),
        size: 90,
      },
      {
        id: "orderValue",
        accessorKey: "orderValue",
        header: ({ column }) => (
          <div className="flex items-center gap-1.5">
            <DataGridColumnHeader title="Order Value" column={column} />
            <span className="bg-muted text-muted-foreground flex size-4 items-center justify-center rounded-[3px] text-[9px] font-medium">
              J
            </span>
          </div>
        ),
        cell: ({ row }) =>
          editing?.id === row.original.id && editing.field === "orderValue" ? (
            <Input
              autoFocus
              type="number"
              value={value}
              className="h-7 w-24 text-sm"
              onChange={(event) => setValue(event.target.value)}
              onBlur={commit}
              onKeyDown={(event) => {
                if (event.key === "Enter") commit()
                if (event.key === "Escape") setEditing(null)
              }}
            />
          ) : (
            <button
              type="button"
              className="hover:bg-muted -mx-1 rounded px-1 text-sm tabular-nums"
              onClick={() => startEdit(row.original, "orderValue")}
            >
              ${row.original.orderValue.toFixed(2)}
            </button>
          ),
        size: 105,
      },
    ],
    [editing, value],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    getRowId: (line) => line.id,
    state: { rowSelection: selection, pagination: { pageIndex: 0, pageSize: 100 } },
    enableRowSelection: true,
    onRowSelectionChange: setSelection,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Reorder plan</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel className="gap-0">
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3 pb-1 -mx-4 -mt-4 rounded-t-xl border-b bg-muted/50 px-4 pt-4 ">
            <div>
              <FrameTitle>Reorder Plan</FrameTitle>
              <FrameDescription>
                <span className="text-destructive">69 below reorder point</span> · 32 to
                review · $29.8K approved to order
              </FrameDescription>
            </div>
            <Button variant="outline" size="sm">
              <RotateCcwIcon />
              Reset View
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No lines match this filter."
            tableClassNames={{ headerRow: "[&>th]:py-3" }}
            tableLayout={{ headerBackground: false, headerSticky: true, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 py-1">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <InputGroup className="w-full sm:max-w-80">
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search SKU, item or buyer"
                      className="text-sm"
                    />
                  </InputGroup>
                  <span className="text-muted-foreground text-xs">285 lines</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Button variant="ghost" size="icon-sm" aria-label="Undo">
                    <Undo2Icon />
                  </Button>
                  <Button variant="ghost" size="icon-sm" aria-label="Redo">
                    <Redo2Icon />
                  </Button>
                  <Button variant="outline" size="sm">
                    <FunnelIcon />
                    Filters
                  </Button>
                  <ReorderColumnsPopover />
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Settings2Icon />
                        Settings
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-44 p-0.5">
                      <div className="text-muted-foreground px-2 py-0.5 text-[10px]">Density</div>
                      <button type="button" className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
                        Comfortable <CheckIcon className="size-4" />
                      </button>
                      <button type="button" className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
                        Compact
                      </button>
                      <div className="text-muted-foreground px-2 py-0.5 text-[10px]">Appearance</div>
                      <button type="button" className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
                        Column lines <CheckIcon className="size-4" />
                      </button>
                      <button type="button" className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
                        Row stripes
                      </button>
                      <button type="button" className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
                        Column letters <CheckIcon className="size-4" />
                      </button>
                      <div className="text-muted-foreground px-2 py-0.5 text-[10px]">Columns</div>
                      <button type="button" className="hover:bg-muted/60 flex w-full items-center justify-between rounded px-2 py-0.5 text-xs">
                        Resizable columns <CheckIcon className="size-4" />
                      </button>
                      <button type="button" className="hover:bg-muted/60 flex w-full items-center gap-2 rounded px-2 py-0.5 text-xs">
                        <RotateCcwIcon className="size-4" />
                        Reset Columns
                      </button>
                    </PopoverContent>
                  </Popover>
                  <Button variant="outline" size="icon-sm" aria-label="Download">
                    <DownloadIcon />
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border">
                <DataGridScrollArea className="max-h-[420px] overflow-y-auto">
                  <DataGridTable />
                </DataGridScrollArea>
                <div className="bg-muted/30 border-t px-3 py-3 text-xs">
                  <div className="text-muted-foreground flex items-center justify-between">
                    <span className="w-16" />
                    <span className="flex-1">285 lines</span>
                    <span className="w-24 text-right">Sum 60,824</span>
                    <span className="w-28 text-right">Sum $151.2K</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground border-t pt-2 text-xs">
                Select a cell to inspect it
              </p>
            </div>
          </DataGrid>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default StockReorderPlanBlock
