import { useMemo, useState } from "react"
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeIcon,
  DownloadIcon,
  EyeIcon,
  FileTextIcon,
  FolderIcon,
  ImageIcon,
  MoreHorizontalIcon,
  RotateCcwIcon,
  Share2Icon,
  SheetIcon,
  Trash2Icon,
} from "lucide-react"
import { arrayMove } from "@dnd-kit/sortable"
import type { DragEndEvent } from "@dnd-kit/core"
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table"
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
import { Badge } from "@/components/reui-unbound/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import {
  DataGridTableDndRowHandle,
  DataGridTableDndRows,
} from "@/components/reui-unbound/data-grid/data-grid-table-dnd-rows"
import {
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
import { cn } from "cn"

import { DRIVE_NODES, INITIAL_ORDER } from "./data"
import type { DriveKind, DriveNode } from "./data"

const KIND_ICON: Record<DriveKind, typeof FolderIcon> = {
  Folder: FolderIcon,
  PDF: FileTextIcon,
  Doc: FileTextIcon,
  Image: ImageIcon,
  Sheet: SheetIcon,
  JSON: CodeIcon,
}

export function SharedDriveBlock() {
  const [order, setOrder] = useState(INITIAL_ORDER)
  const [expanded, setExpanded] = useState<string[]>([])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const byId = useMemo(
    () => new Map(DRIVE_NODES.map((node) => [node.id, node])),
    [],
  )

  const visibleRows = useMemo(
    () =>
      order
        .map((id) => byId.get(id))
        .filter((node): node is DriveNode => Boolean(node))
        .filter((node) => node.parentId === null || expanded.includes(node.parentId)),
    [order, expanded, byId],
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = order.indexOf(String(active.id))
    const newIndex = order.indexOf(String(over.id))
    if (oldIndex < 0 || newIndex < 0) return
    setOrder(arrayMove(order, oldIndex, newIndex))
  }

  function toggleExpanded(id: string) {
    setExpanded((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id],
    )
  }

  const folders = DRIVE_NODES.filter((entry) => entry.kind === "Folder").map(
    (entry) => entry.id,
  )

  function depthOf(entry: DriveNode) {
    let depth = 0
    let parent = entry.parentId
    while (parent) {
      depth += 1
      parent = byId.get(parent)?.parentId ?? null
    }
    return depth
  }

  const columns: ColumnDef<DataGridFeatures, DriveNode>[] = [
    {
      id: "drag",
      header: () => null,
      cell: () => <DataGridTableDndRowHandle className="size-6" />,
      size: 34,
      enableSorting: false,
    },
    {
      id: "select",
      header: () => <DataGridTableRowSelectAll />,
      cell: ({ row }) => <DataGridTableRowSelect row={row} />,
      size: 32,
      enableSorting: false,
    },
    {
      id: "name",
      accessorKey: "name",
      header: ({ column }) => <DataGridColumnHeader title="Name" column={column} />,
      cell: ({ row }) => {
        const Icon = KIND_ICON[row.original.kind]
        const isFolder = row.original.kind === "Folder"
        const isOpen = expanded.includes(row.original.id)
        return (
          <div
            className="flex min-w-0 items-center gap-2"
            style={{ paddingLeft: depthOf(row.original) * 24 }}
          >
            {isFolder ? (
              <button
                type="button"
                onClick={() => toggleExpanded(row.original.id)}
                aria-label={isOpen ? "Collapse folder" : "Expand folder"}
                className="text-muted-foreground hover:text-foreground -ml-1 rounded p-0.5"
              >
                {isOpen ? (
                  <ChevronDownIcon className="size-3.5" />
                ) : (
                  <ChevronRightIcon className="size-3.5" />
                )}
              </button>
            ) : (
              <span className="w-3.5" />
            )}
            <Icon
              className={cn(
                "size-4 shrink-0",
                isFolder ? "text-foreground" : "text-muted-foreground",
              )}
            />
            <div className="min-w-0">
              <div className="truncate font-medium">{row.original.name}</div>
              {row.original.count && (
                <div className="text-muted-foreground text-xs">{row.original.count}</div>
              )}
            </div>
          </div>
        )
      },
      size: 348,
      enableHiding: false,
    },
    {
      id: "type",
      accessorKey: "kind",
      header: ({ column }) => <DataGridColumnHeader title="Type" column={column} />,
      cell: ({ row }) => (
        <Badge variant="outline" size="xs" className="font-normal">
          {row.original.kind}
        </Badge>
      ),
      size: 110,
    },
    {
      id: "size",
      accessorKey: "size",
      header: ({ column }) => <DataGridColumnHeader title="Size" column={column} />,
      cell: ({ row }) => (
        <div>
          <div className="text-sm font-medium tabular-nums">{row.original.size}</div>
          {row.original.count && (
            <div className="text-muted-foreground text-xs">{row.original.count}</div>
          )}
        </div>
      ),
      size: 120,
    },
    {
      id: "owner",
      accessorKey: "owner",
      header: ({ column }) => <DataGridColumnHeader title="Owner" column={column} />,
      cell: ({ row }) => (
        <span className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarImage src={`https://i.pravatar.cc/96?u=${row.original.owner}`} alt="" />
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
      size: 160,
    },
    {
      id: "modified",
      accessorKey: "modified",
      header: ({ column }) => <DataGridColumnHeader title="Modified" column={column} />,
      cell: ({ row }) => (
        <div>
          <div className="text-sm tabular-nums">{row.original.modified}</div>
          <div className="text-muted-foreground text-xs">{row.original.relative}</div>
        </div>
      ),
      size: 150,
    },
    {
      id: "actions",
      header: () => null,
      cell: () => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="File actions">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>
              <EyeIcon />
              Open
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DownloadIcon />
              Download
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Share2Icon />
              Share
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2Icon />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      size: 44,
      enableSorting: false,
    },
  ]

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: visibleRows,
    getRowId: (node) => node.id,
    state: { rowSelection, pagination: { pageIndex: 0, pageSize: 100 } },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Shared drive</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel>
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
            <div>
              <FrameTitle>Shared Drive</FrameTitle>
              <FrameDescription className="flex flex-wrap items-center gap-2">
                <span>Northwind Workspace · 47 items</span>
                <Badge variant="secondary" size="xs">
                  Used 1.04 GB
                </Badge>
              </FrameDescription>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setExpanded(folders)}>
                <ChevronsUpDownIcon />
                Expand all
              </Button>
              <Button variant="outline" size="sm" onClick={() => setExpanded([])}>
                <ChevronsDownUpIcon />
                Collapse all
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setOrder(INITIAL_ORDER)
                  setExpanded([])
                }}
              >
                <RotateCcwIcon />
                Reset
              </Button>
            </div>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={visibleRows.length}
            emptyMessage="This folder is empty."
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true, cellBorder: true }}
          >
            <DataGridContainer className="rounded-lg border">
              <DataGridScrollArea>
                <DataGridTableDndRows
                  dataIds={visibleRows.map((node) => node.id)}
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

export default SharedDriveBlock
