import { useState } from "react"
import {
  CircleCheckIcon,
  MoreHorizontalIcon,
  PackageIcon,
  RotateCcwIcon,
  RouteIcon,
  StoreIcon,
  TriangleAlertIcon,
  TruckIcon,
} from "lucide-react"
import { arrayMove } from "@dnd-kit/sortable"
import type { DragEndEvent } from "@dnd-kit/core"
import type { ColumnDef, ColumnOrderState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/reui-unbound/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTableDnd } from "@/components/reui-unbound/data-grid/data-grid-table-dnd"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"
import { IconTile } from "@/components/reui-unbound/icon-tile"
import { cn } from "cn"

import { DISPATCH_COLUMNS, DISPATCH_WAVES, WAVE_STATUS_VARIANT } from "./data"
import type { DispatchWave } from "./data"


export function DispatchLayoutBlock() {
  const [waves] = useState(DISPATCH_WAVES)
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    DISPATCH_COLUMNS.map((column) => column.id),
  )
  const [view, setView] = useState("Dispatch")

  function handleColumnDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = columnOrder.indexOf(String(active.id))
    const newIndex = columnOrder.indexOf(String(over.id))
    if (oldIndex < 0 || newIndex < 0) return
    setColumnOrder(arrayMove(columnOrder, oldIndex, newIndex))
  }

  const columns: ColumnDef<DataGridFeatures, DispatchWave>[] = [
    {
      id: "wave",
      accessorKey: "code",
      header: ({ column }) => <DataGridColumnHeader title="Wave" column={column} />,
      cell: ({ row }) => (
        <div className="min-w-0">
          <div className="font-medium">{row.original.code}</div>
          <div className="text-muted-foreground truncate text-xs">
            {row.original.subtitle}
          </div>
        </div>
      ),
      size: 215,
      enableHiding: false,
    },
    {
      id: "status",
      accessorKey: "status",
      header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
      cell: ({ row }) =>
        row.original.status === "Hold" ? (
          <span className="text-destructive text-sm font-medium">Hold</span>
        ) : (
          <Badge variant={WAVE_STATUS_VARIANT[row.original.status]} size="sm">
            {row.original.status}
          </Badge>
        ),
      size: 95,
    },
    {
      id: "dock",
      accessorKey: "dock",
      header: ({ column }) => <DataGridColumnHeader title="Dock" column={column} />,
      cell: ({ row }) => (
        <div className="min-w-0">
          <div className="text-sm font-medium">{row.original.dock}</div>
          <div className="text-muted-foreground truncate text-xs">
            {row.original.dockNote}
          </div>
        </div>
      ),
      size: 165,
    },
    {
      id: "carrier",
      accessorKey: "carrier",
      header: ({ column }) => <DataGridColumnHeader title="Carrier" column={column} />,
      cell: ({ row }) => (
        <div className="flex min-w-0 items-center gap-2">
          <IconTile variant="elevated" size="sm" className="rounded-[10px] text-foreground">
            {row.original.carrier === "Quickline" ? (
              <RouteIcon className="size-3.5" />
            ) : row.original.carrier === "Fleet 12" ? (
              <StoreIcon className="size-3.5" />
            ) : ["Shippo", "ArcBest", "DHL", "UPS"].includes(row.original.carrier) ? (
              <PackageIcon className="size-3.5" />
            ) : (
              <TruckIcon className="size-3.5" />
            )}
          </IconTile>
          <div className="min-w-0">
            <div className="text-sm font-medium">{row.original.carrier}</div>
            <div className="text-muted-foreground truncate text-[11px]">
              {row.original.route}
            </div>
          </div>
        </div>
      ),
      size: 160,
    },
    {
      id: "orders",
      accessorKey: "orders",
      header: ({ column }) => <DataGridColumnHeader title="Orders" column={column} />,
      cell: ({ row }) => (
        <div>
          <div className="text-sm font-medium tabular-nums">
            {row.original.orders} <span className="text-muted-foreground text-xs font-normal">orders</span>
          </div>
          <div className="text-muted-foreground text-xs tabular-nums">
            {row.original.units.toLocaleString()} units
          </div>
        </div>
      ),
      size: 110,
    },
    {
      id: "capacity",
      accessorKey: "capacity",
      header: ({ column }) => <DataGridColumnHeader title="Capacity" column={column} />,
      cell: ({ row }) => {
        const value = row.original.capacity
        const tone =
          value >= 90 ? "bg-destructive" : value >= 75 ? "bg-warning" : "bg-success"
        return (
          <div>
            <div className="text-sm font-medium tabular-nums">{value}%</div>
            <span className="bg-muted mt-1 block h-1.5 w-24 overflow-hidden rounded-full">
              <span
                className={cn("block h-full rounded-full", tone)}
                style={{ width: `${value}%` }}
              />
            </span>
          </div>
        )
      },
      size: 120,
    },
    {
      id: "exceptions",
      accessorKey: "exceptions",
      header: ({ column }) => <DataGridColumnHeader title="Exceptions" column={column} />,
      cell: ({ row }) => {
        const tone = row.original.exceptionsTone
        return (
          <span
            className={cn(
              "flex items-center gap-1.5 text-sm",
              tone === "destructive" ? "text-destructive" : "text-muted-foreground",
              tone === "success" && "text-success-foreground",
            )}
          >
            {row.original.exceptions === "Clear" ? (
              <CircleCheckIcon className="size-3.5" />
            ) : (
              <TriangleAlertIcon className="size-3.5" />
            )}
            {row.original.exceptions}
          </span>
        )
      },
      size: 110,
    },
    {
      id: "actions",
      header: () => null,
      cell: () => (
        <Button variant="ghost" size="icon-sm" aria-label="Wave actions">
          <MoreHorizontalIcon />
        </Button>
      ),
      size: 40,
      enableSorting: false,
    },
  ]

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: waves,
    getRowId: (wave) => wave.id,
    state: { columnOrder, pagination: { pageIndex: 0, pageSize: 100 } },
    onColumnOrderChange: setColumnOrder,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Dispatch layout</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel>
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
            <div>
              <FrameTitle>Dispatch Layout</FrameTitle>
              <FrameDescription>
                Role review sequence · {DISPATCH_COLUMNS.length} fields · {waves.length}{" "}
                waves
              </FrameDescription>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex overflow-hidden rounded-md border">
                {["Dispatch", "Dock", "Risk"].map((entry) => (
                  <Button
                    key={entry}
                    variant={view === entry ? "secondary" : "ghost"}
                    size="sm"
                    className="rounded-none"
                    onClick={() => setView(entry)}
                  >
                    {entry}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setColumnOrder(DISPATCH_COLUMNS.map((column) => column.id))}
              >
                <RotateCcwIcon />
                Reset
              </Button>
            </div>
          </FrameHeader>

          <div className="overflow-hidden rounded-lg border">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-muted/30 px-2.5 py-2">
            <span className="text-muted-foreground text-xs font-medium">Review Order</span>
            <div className="flex flex-wrap items-center gap-2">
            {columnOrder.map((id, index) => {
              const column = DISPATCH_COLUMNS.find((entry) => entry.id === id)
              if (!column) return null
              return (
                <span
                  key={id}
                  className="bg-background text-muted-foreground flex items-center gap-1 rounded border px-1.5 py-0.5 text-[11px]"
                >
                  <span className="text-foreground font-medium">{index + 1}</span>
                  {column.label}
                </span>
              )
            })}
            </div>
          </div>

          <DataGrid
            table={table}
            recordCount={waves.length}
            emptyMessage="No waves."
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true, cellBorder: true }}
          >
            <DataGridContainer className="border-0">
              <DataGridScrollArea>
                <DataGridTableDnd handleDragEnd={handleColumnDragEnd} />
              </DataGridScrollArea>
            </DataGridContainer>
          </DataGrid>
          </div>

          <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-xs">
            <span>3 waves need review, 17 exceptions open</span>
            <span className="flex items-center gap-1">
              <PackageIcon className="size-3.5" />
              Column order drives handoff sequence
            </span>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default DispatchLayoutBlock
