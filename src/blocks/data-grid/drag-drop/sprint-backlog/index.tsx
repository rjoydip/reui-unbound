import { useState } from "react"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  FlagIcon,
  FlaskConicalIcon,
  SparklesIcon,
  MoreHorizontalIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  Trash2Icon,
  WrenchIcon,
} from "lucide-react"
import { arrayMove } from "@dnd-kit/sortable"
import type { DragEndEvent } from "@dnd-kit/core"
import type { ColumnDef } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/kit/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import { DataGridScrollArea } from "@/components/kit/data-grid/~data-grid-scroll-area"
import {
  DataGridTableDndRowHandle,
  DataGridTableDndRows,
} from "@/components/kit/data-grid/~data-grid-table-dnd-rows"
import { IconTile } from "@/components/kit/icon-tile"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"

import { BACKLOG_ITEMS, BACKLOG_STATUS_VARIANT } from "./data"
import type { BacklogItem } from "./data"

const ICONS = {
  pin: SparklesIcon,
  shield: ShieldCheckIcon,
  webhook: WrenchIcon,
  file: WrenchIcon,
  chart: SparklesIcon,
  flask: FlaskConicalIcon,
  phone: SparklesIcon,
  key: ShieldCheckIcon,
}

export function SprintBacklogBlock() {
  const [items, setItems] = useState(BACKLOG_ITEMS)

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = items.findIndex((item) => item.id === active.id)
    const newIndex = items.findIndex((item) => item.id === over.id)
    if (oldIndex < 0 || newIndex < 0) return
    setItems(arrayMove(items, oldIndex, newIndex))
  }

  const columns: ColumnDef<DataGridFeatures, BacklogItem>[] = [
    {
      id: "drag",
      header: () => null,
      cell: () => <DataGridTableDndRowHandle className="size-6" />,
      size: 34,
      enableSorting: false,
    },
    {
      id: "rank",
      header: () => <span className="text-muted-foreground text-xs font-medium">#</span>,
      cell: ({ row }) => (
        <span className="text-muted-foreground flex items-center gap-1 text-sm tabular-nums">
          {row.index === 0 && <FlagIcon className="text-foreground size-3.5" />}
          {row.index + 1}
        </span>
      ),
      size: 52,
      enableSorting: false,
    },
    {
      id: "task",
      accessorKey: "title",
      header: ({ column }) => <DataGridColumnHeader title="Task" column={column} />,
      cell: ({ row }) => {
        const Icon = ICONS[row.original.icon as keyof typeof ICONS]
        return (
          <div className="flex min-w-0 items-center gap-2.5">
            <IconTile variant="elevated" size="sm" className="rounded-[10px] text-foreground">
              <Icon />
            </IconTile>
            <div className="min-w-0">
              <div className="truncate font-medium">{row.original.title}</div>
              <div className="text-muted-foreground truncate font-mono text-[11px]">
                {row.original.code} · {row.original.subtitle}
              </div>
            </div>
          </div>
        )
      },
      size: 260,
      enableHiding: false,
    },
    {
      id: "owner",
      accessorKey: "owner",
      header: ({ column }) => <DataGridColumnHeader title="Owner" column={column} />,
      cell: ({ row }) => (
        <span className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarImage src={`https://i.pravatar.cc/96?u=${row.original.id}`} alt="" />
            <AvatarFallback className="text-[9px]">
              {row.original.owner
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="truncate text-sm">{row.original.owner}</span>
        </span>
      ),
      size: 150,
    },
    {
      id: "team",
      accessorKey: "team",
      header: ({ column }) => <DataGridColumnHeader title="Team" column={column} />,
      cell: ({ row }) => <span className="text-sm">{row.original.team}</span>,
      size: 115,
    },
    {
      id: "cycle",
      accessorKey: "cycle",
      header: ({ column }) => <DataGridColumnHeader title="Cycle" column={column} />,
      cell: ({ row }) => (
        <span className="text-muted-foreground text-sm">{row.original.cycle}</span>
      ),
      size: 95,
    },
    {
      id: "due",
      accessorKey: "due",
      header: ({ column }) => <DataGridColumnHeader title="Due" column={column} />,
      cell: ({ row }) => <span className="text-sm tabular-nums">{row.original.due}</span>,
      size: 80,
    },
    {
      id: "status",
      accessorKey: "status",
      header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
      cell: ({ row }) => (
        <Badge variant={BACKLOG_STATUS_VARIANT[row.original.status]} size="sm">
          {row.original.status}
        </Badge>
      ),
      size: 120,
    },
    {
      id: "effort",
      accessorKey: "effort",
      header: ({ column }) => <DataGridColumnHeader title="Effort" column={column} />,
      cell: ({ row }) => (
        <span className="text-muted-foreground text-sm tabular-nums">
          {row.original.effort} pts
        </span>
      ),
      size: 90,
    },
    {
      id: "actions",
      header: () => null,
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="Task actions">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem
              onSelect={() =>
                setItems((current) => {
                  const index = current.findIndex(
                    (item) => item.id === row.original.id,
                  )
                  if (index <= 0) return current
                  return [current[index]!, ...current.filter((_, i) => i !== index)]
                })
              }
            >
              <ArrowUpIcon />
              Move to top
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() =>
                setItems((current) => {
                  const index = current.findIndex(
                    (item) => item.id === row.original.id,
                  )
                  if (index < 0 || index === current.length - 1) return current
                  return [
                    ...current.filter((_, i) => i !== index),
                    current[index]!,
                  ]
                })
              }
            >
              <ArrowDownIcon />
              Move to bottom
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onSelect={() =>
                setItems((current) =>
                  current.filter((item) => item.id !== row.original.id),
                )
              }
            >
              <Trash2Icon />
              Remove from sprint
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      size: 40,
      enableSorting: false,
    },
  ]

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: items,
    getRowId: (item) => item.id,
    state: { pagination: { pageIndex: 0, pageSize: 100 } },
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Sprint backlog</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel>
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
            <div>
              <FrameTitle>Sprint Backlog</FrameTitle>
              <FrameDescription>Drag to prioritize · {items.length} items</FrameDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => setItems(BACKLOG_ITEMS)}>
              <RotateCcwIcon />
              Reset order
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={items.length}
            emptyMessage="No backlog items."
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <DataGridContainer className="rounded-lg border">
              <DataGridScrollArea>
                <DataGridTableDndRows
                  dataIds={items.map((item) => item.id)}
                  handleDragEnd={handleDragEnd}
                />
              </DataGridScrollArea>
            </DataGridContainer>
          </DataGrid>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default SprintBacklogBlock
