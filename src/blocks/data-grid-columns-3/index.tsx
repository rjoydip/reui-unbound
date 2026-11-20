import { useMemo, useState } from "react"
import {
  InboxIcon,
  LayoutGridIcon,
  ListIcon,
  PencilIcon,
  SlidersHorizontalIcon,
  Trash2Icon,
  MoreHorizontalIcon,
  FilterIcon,
  ListFilterIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import { cn } from "cn"

import {
  PRIORITIES,
  PRIORITY_TONE,
  STATUS_TONE,
  TYPE_TONE,
  WORK_ITEMS,
  WORK_TABS,
} from "./data"
import type { Priority, WorkItem, WorkStatus, WorkType } from "./data"

function PriorityCell({ priority }: { priority: Priority }) {
  return (
    <span className="flex items-center gap-2 text-sm">
      <span className={cn("size-1.5 rounded-full", PRIORITY_TONE[priority])} />
      {priority}
    </span>
  )
}

function StatusCell({ status }: { status: WorkStatus }) {
  return (
    <span className="flex items-center gap-2 text-sm">
      <span className={cn("size-1.5 rounded-full", STATUS_TONE[status])} />
      {status}
    </span>
  )
}

function TypeCell({ type }: { type: WorkType }) {
  return (
    <span className="flex items-center gap-2 text-sm">
      <span className={cn("size-1.5 rounded-full", TYPE_TONE[type])} />
      {type}
    </span>
  )
}

export function WorkQueueBlock() {
  const [items] = useState(WORK_ITEMS)
  const [tab, setTab] = useState("Assigned")
  const [view, setView] = useState<"grid" | "list">("list")
  const [priority, setPriority] = useState("All")
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 6,
  })

  const filtered = useMemo(
    () =>
      items.filter(
        (item) => priority === "All" || item.priority === priority,
      ),
    [items, priority],
  )

  const columns = useMemo<ColumnDef<DataGridFeatures, WorkItem>[]>(
    () => [
      {
        id: "work-item",
        accessorKey: "title",
        header: ({ column }) => <DataGridColumnHeader title="Work item" column={column} />,
        cell: ({ row }) => (
          <div className="min-w-0">
            <div className="truncate font-medium">{row.original.title}</div>
            <div className="text-muted-foreground truncate text-xs">
              {row.original.queue} · {row.original.updated}
            </div>
          </div>
        ),
        size: 330,
        enableHiding: false,
      },
      {
        id: "owner",
        accessorKey: "owner",
        header: ({ column }) => <DataGridColumnHeader title="Owner" column={column} />,
        cell: ({ row }) => (
          <span className="flex items-center gap-2.5">
            <Avatar className="size-7">
              <AvatarImage
                src={`https://i.pravatar.cc/96?u=${row.original.id}`}
                alt={row.original.owner}
              />
              <AvatarFallback className="text-[10px]">
                {row.original.owner
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium">
                {row.original.owner}
              </span>
              <span className="text-muted-foreground block truncate text-xs">
                {row.original.ownerRole}
              </span>
            </span>
          </span>
        ),
        size: 180,
      },
      {
        id: "priority",
        accessorKey: "priority",
        header: ({ column }) => <DataGridColumnHeader title="Priority" column={column} />,
        cell: ({ row }) => <PriorityCell priority={row.original.priority} />,
        size: 110,
      },
      {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
        cell: ({ row }) => <StatusCell status={row.original.status} />,
        size: 120,
      },
      {
        id: "type",
        accessorKey: "type",
        header: ({ column }) => <DataGridColumnHeader title="Type" column={column} />,
        cell: ({ row }) => <TypeCell type={row.original.type} />,
        size: 120,
      },
      {
        id: "due",
        accessorKey: "due",
        header: ({ column }) => <DataGridColumnHeader title="Due" column={column} />,
        cell: ({ row }) => <span className="text-sm tabular-nums">{row.original.due}</span>,
        size: 130,
      },
      {
        id: "actions",
        header: ({ column }) => <DataGridColumnHeader title="Actions" column={column} />,
        cell: () => (
          <div className="flex items-center justify-end gap-0.5">
            <Button variant="ghost" size="icon-xs" aria-label="Edit">
              <PencilIcon />
            </Button>
            <Button variant="ghost" size="icon-xs" aria-label="Delete">
              <Trash2Icon />
            </Button>
            <Button variant="ghost" size="icon-xs" aria-label="More">
              <MoreHorizontalIcon />
            </Button>
          </div>
        ),
        size: 110,
        enableSorting: false,
      },
    ],
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (item) => item.id,
    state: { pagination },
    onPaginationChange: setPagination,
  })

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <InboxIcon className="text-muted-foreground size-4" />
            <h2 className="text-sm font-semibold">Work Queue</h2>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex overflow-hidden rounded-md border">
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn("rounded-none", view === "grid" && "bg-muted")}
                onClick={() => setView("grid")}
                aria-label="Grid view"
              >
                <LayoutGridIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn("rounded-none border-l", view === "list" && "bg-muted")}
                onClick={() => setView("list")}
                aria-label="List view"
              >
                <ListIcon />
              </Button>
            </div>
            <Button variant="outline" size="icon-sm" aria-label="Filter">
              <FilterIcon />
            </Button>
            <Button variant="outline" size="sm">
              <SlidersHorizontalIcon />
              Display
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 border-b">
          {WORK_TABS.map((entry) => (
            <button
              key={entry}
              type="button"
              onClick={() => setTab(entry)}
              className={cn(
                "-mb-px border-b-2 py-2 text-sm font-medium transition-colors",
                tab === entry
                  ? "border-foreground text-foreground"
                  : "text-muted-foreground hover:text-foreground border-transparent",
              )}
            >
              {entry}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-sm font-medium">Priority</span>
            <span className="text-muted-foreground text-sm">is</span>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger size="sm" className="w-28">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Select</SelectItem>
                {PRIORITIES.map((entry) => (
                  <SelectItem key={entry} value={entry}>
                    {entry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon-sm" aria-label="Add filter">
              <ListFilterIcon />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setPriority("All")}
            disabled={priority === "All"}
          >
            Clear all
          </Button>
        </div>

        <DataGrid
          table={table}
          recordCount={filtered.length}
          emptyMessage="No work items match this filter."
          tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
        >
          <DataGridContainer>
            <DataGridScrollArea>
              <DataGridTable />
            </DataGridScrollArea>
          </DataGridContainer>
          <DataGridPagination
            sizes={[6, 10]}
            info="{from} - {to} of {count} work items"
            rowsPerPageLabel="Rows per page"
            className={filtered.length === 0 ? "hidden" : undefined}
          />
        </DataGrid>
      </div>
    </div>
  )
}

export default WorkQueueBlock
