import { useMemo, useState } from "react"
import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  FileIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react"
import type {
  ColumnDef,
  PaginationState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { IconTile } from "@/components/kit/icon-tile"
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
import { cn } from "cn"

import { MODULE_RECORDS, MODULE_STATUS_META, windowDays } from "./data"
import type { ModuleStatus, ProjectModule } from "./data"

function ringTone(progress: number) {
  if (progress >= 75) return "text-success"
  if (progress >= 45) return "text-warning-foreground"
  if (progress >= 20) return "text-info"
  return "text-purple-500"
}

function ProgressRing({ value }: { value: number }) {
  const size = 36
  const stroke = 3
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        height={size}
        width={size}
        viewBox={`0 0 ${size} ${size}`}
        className={ringTone(value)}
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className="stroke-current opacity-20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * circumference} ${circumference}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="stroke-current"
        />
      </svg>
      <span className="absolute text-[9px] font-medium tabular-nums">
        {value}%
      </span>
    </div>
  )
}

function ProgressCell({ moduleRecord }: { moduleRecord: ProjectModule }) {
  return (
    <div className="flex items-center gap-2.5">
      <ProgressRing value={moduleRecord.progress} />
      <div className="min-w-0">
        <div className="text-sm font-medium">
          {moduleRecord.progress}% ready
        </div>
        <div className="text-muted-foreground text-xs">
          {moduleRecord.tasksDone}/{moduleRecord.tasksTotal} tasks
        </div>
      </div>
    </div>
  )
}

function ModuleCell({ moduleRecord }: { moduleRecord: ProjectModule }) {
  return (
    <div className="min-w-0">
      <div className="text-foreground truncate font-medium">
        {moduleRecord.name}
      </div>
      <div className="text-muted-foreground truncate text-xs">
        {moduleRecord.kind} &middot; {moduleRecord.owner} &middot;{" "}
        {moduleRecord.code}
      </div>
    </div>
  )
}

function WindowCell({ moduleRecord }: { moduleRecord: ProjectModule }) {
  return (
    <div className="min-w-0">
      <div className="text-sm font-medium">{moduleRecord.dateRange}</div>
      <div className="text-muted-foreground flex items-center gap-1 text-xs">
        <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
          <rect
            x="1"
            y="2"
            width="9"
            height="8"
            rx="1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M1 4.5h9" stroke="currentColor" strokeWidth="1" />
        </svg>
        {windowDays(moduleRecord)}-day window
      </div>
    </div>
  )
}

export function ProjectModulesBlock() {
  const [modules, setModules] = useState<ProjectModule[]>(MODULE_RECORDS)
  const [search, setSearch] = useState("")
  const [statuses, setStatuses] = useState<ModuleStatus[]>([])
  const [sortBy, setSortBy] = useState("name")
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: false },
  ])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return modules
      .filter(
        (moduleRecord) =>
          statuses.length === 0 || statuses.includes(moduleRecord.status),
      )
      .filter((moduleRecord) => {
        if (term === "") return true
        return [
          moduleRecord.name,
          moduleRecord.owner,
          moduleRecord.code,
          moduleRecord.kind,
        ].some((field) => field.toLowerCase().includes(term))
      })
  }, [modules, search, statuses])

  function toggleFavorite(moduleRecord: ProjectModule) {
    setModules((current) =>
      current.map((entry) =>
        entry.id === moduleRecord.id
          ? { ...entry, favorite: !entry.favorite }
          : entry,
      ),
    )
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, ProjectModule>[]>(
    () => [
      {
        accessorKey: "progress",
        header: ({ column }) => (
          <DataGridColumnHeader title="Progress" column={column} />
        ),
        cell: ({ row }) => <ProgressCell moduleRecord={row.original} />,
        size: 170,
        enableHiding: false,
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Module" column={column} />
        ),
        cell: ({ row }) => <ModuleCell moduleRecord={row.original} />,
        size: 280,
        enableHiding: false,
      },
      {
        accessorKey: "dateStart",
        header: ({ column }) => (
          <DataGridColumnHeader title="Window" column={column} />
        ),
        cell: ({ row }) => <WindowCell moduleRecord={row.original} />,
        size: 170,
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataGridColumnHeader title="Status" column={column} />
        ),
        cell: ({ row }) => {
          const meta = MODULE_STATUS_META[row.original.status]
          return (
            <Badge
              variant={meta.variant}
              size="lg"
              className="gap-1.5 font-medium"
            >
              <span className={cn("size-1.5 rounded-full", meta.dot)} />
              {row.original.status}
            </Badge>
          )
        },
        size: 140,
      },
      {
        id: "actions",
        header: () => <span className="text-sm font-medium">Actions</span>,
        cell: ({ row }) => (
          <div
            className="flex items-center justify-end gap-1"
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label={`Open ${row.original.name}`}
              onClick={() => toast(`Opening ${row.original.code}`)}
            >
              <FileIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label={
                row.original.favorite
                  ? "Remove from favorites"
                  : "Add to favorites"
              }
              aria-pressed={!!row.original.favorite}
              onClick={() => toggleFavorite(row.original)}
            >
              <StarIcon
                className={cn(
                  row.original.favorite
                    ? "fill-warning text-warning"
                    : "text-muted-foreground",
                )}
              />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={`More actions for ${row.original.name}`}
                >
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem onSelect={() => toast("View module")}>
                  View module
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => toast("Edit module")}>
                  Edit module
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={() => toast("Archive module")}
                >
                  Archive
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
        size: 120,
        enableSorting: false,
        enableHiding: false,
      },
    ],
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (moduleRecord: ProjectModule) => moduleRecord.id,
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  })

  return (
    <div className="flex min-h-svh flex-col bg-background p-4 sm:p-6">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <IconTile
              size="sm"
              className="rounded-md bg-warning text-white shadow-none"
            >
              <span className="text-[11px] font-bold">K</span>
            </IconTile>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm"
            >
              <span className="text-muted-foreground">Keenthemes</span>
              <span className="text-muted-foreground">›</span>
              <span className="font-medium">Modules</span>
            </nav>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <InputGroup className="w-full sm:w-60">
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search..."
                aria-label="Search modules"
                className="text-sm"
              />
            </InputGroup>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <ArrowUpDownIcon />
                  {sortBy === "name"
                    ? "Name"
                    : sortBy === "progress"
                      ? "Progress"
                      : sortBy === "window"
                        ? "Window"
                        : "Status"}
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel className="font-medium">
                  Sort by
                </DropdownMenuLabel>
                <DropdownMenuRadioGroup
                  value={sortBy}
                  onValueChange={(value) => {
                    setSortBy(value)
                    setSorting([
                      {
                        id: value === "window" ? "dateStart" : value,
                        desc: value === "progress",
                      },
                    ])
                  }}
                >
                  <DropdownMenuRadioItem value="name">
                    Name
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="progress">
                    Progress
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="window">
                    Window
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="status">
                    Status
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Filters
                  {statuses.length > 0 && (
                    <Badge size="xs" variant="secondary">
                      {statuses.length}
                    </Badge>
                  )}
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                {(Object.keys(MODULE_STATUS_META) as ModuleStatus[]).map(
                  (status) => (
                    <DropdownMenuCheckboxItem
                      key={status}
                      checked={statuses.includes(status)}
                      onSelect={(event) => event.preventDefault()}
                      onCheckedChange={(value) =>
                        setStatuses((current) =>
                          value
                            ? [...current, status]
                            : current.filter((entry) => entry !== status),
                        )
                      }
                    >
                      {status}
                    </DropdownMenuCheckboxItem>
                  ),
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="sm" onClick={() => toast("Add module")}>
              <PlusIcon />
              Add Module
            </Button>
          </div>
        </div>

        <DataGrid
          table={table}
          recordCount={filtered.length}
          emptyMessage="No modules match your search or filters."
        >
          <div className="flex flex-col gap-3">
            <DataGridContainer>
              <DataGridScrollArea>
                <DataGridTable />
              </DataGridScrollArea>
            </DataGridContainer>
            <DataGridPagination
              sizes={[5, 10, 20]}
              info="{from} - {to} of {count} modules"
              rowsPerPageLabel="Rows per page"
              className={filtered.length === 0 ? "hidden" : undefined}
            />
          </div>
        </DataGrid>
      </div>
    </div>
  )
}
