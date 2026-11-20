import { useMemo, useState } from "react"
import {
  ArrowLeftRightIcon,
  BellIcon,
  CheckIcon,
  ClockIcon,
  CopyIcon,
  EyeIcon,
  FunnelIcon,
  GitBranchIcon,
  MailIcon,
  MoreVerticalIcon,
  PencilIcon,
  PlusIcon,
  RouteIcon,
  SearchIcon,
  StarIcon,
  Trash2Icon,
  UsersIcon,
  XIcon,
} from "lucide-react"
import type {
  ColumnDef,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/reui-unbound/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/reui-unbound/data-grid/data-grid-table"
import { cn } from "cn"

import {
  FILTER_ATTRIBUTES,
  STATE_DOT,
  STATE_VARIANT,
  WORKFLOW_TABS,
  WORKFLOWS,
} from "./data"
import type { WorkflowRow } from "./data"

const ICON_MAP = {
  workflow: { icon: GitBranchIcon, className: "bg-blue-500/10 text-blue-500" },
  route: { icon: RouteIcon, className: "bg-purple-500/10 text-purple-500" },
  mail: { icon: MailIcon, className: "bg-amber-500/10 text-amber-500" },
  bell: { icon: BellIcon, className: "bg-red-500/10 text-red-500" },
}

const ATTRIBUTE_ICONS = {
  Workflow: SearchIcon,
  "Owner team": UsersIcon,
  "Delivery mode": RouteIcon,
  "Last updated": ClockIcon,
}

const FIELD_ACCESSOR: Record<string, (row: WorkflowRow) => string> = {
  Workflow: (row) => row.title,
  "Owner team": (row) => row.owner,
  "Delivery mode": (row) => row.schedule,
  "Last updated": (row) => row.updated,
}

function Stars({ value }: { value: number }) {
  const filled = Math.round(value)
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            className={cn(
              "size-4",
              index < filled
                ? "fill-warning text-warning"
                : "text-muted-foreground/30",
            )}
          />
        ))}
      </div>
      <span className="text-muted-foreground text-xs tabular-nums">
        {value.toFixed(1)}
      </span>
    </div>
  )
}

export function AutomationLibraryBlock() {
  const [rows, setRows] = useState(WORKFLOWS)
  const [tab, setTab] = useState("All")
  const [field, setField] = useState("Workflow")
  const [operator, setOperator] = useState("contains")
  const [search, setSearch] = useState("")
  const [draftSearch, setDraftSearch] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [selection, setSelection] = useState<RowSelectionState>({})
  const [sorting, setSorting] = useState<SortingState>([
    { id: "updated", desc: true },
  ])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    const accessor = FIELD_ACCESSOR[field] ?? FIELD_ACCESSOR.Workflow!
    return rows.filter((row) => {
      if (tab === "Live" && row.state !== "Live") return false
      if (tab === "Needs Review" && row.state !== "Needs approval") return false
      if (tab === "Drafts" && row.state !== "Draft") return false
      if (tab === "Paused" && row.state !== "Paused") return false
      const value = accessor(row).toLowerCase()
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
  }, [rows, tab, field, operator, search])

  function setEnabled(id: string, enabled: boolean) {
    setRows((current) =>
      current.map((row) => (row.id === id ? { ...row, enabled } : row)),
    )
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, WorkflowRow>[]>(
    () => [
      {
        id: "select",
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        size: 32,
        enableSorting: false,
      },
      {
        id: "workflow",
        accessorKey: "title",
        header: ({ column }) => <DataGridColumnHeader title="Workflow" column={column} />,
        cell: ({ row }) => {
          const meta = ICON_MAP[row.original.icon]
          const Icon = meta.icon
          return (
            <div className="flex min-w-0 items-center gap-2.5">
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-md",
                  meta.className,
                )}
              >
                <Icon className="size-4" />
              </span>
              <div className="min-w-0">
                <div className="truncate font-medium">{row.original.title}</div>
                <div className="text-muted-foreground truncate text-xs">
                  {row.original.schedule} · {row.original.group}
                </div>
              </div>
            </div>
          )
        },
        size: 360,
        enableHiding: false,
      },
      {
        id: "owner",
        accessorKey: "owner",
        header: ({ column }) => <DataGridColumnHeader title="Owner" column={column} />,
        cell: ({ row }) => (
          <div className="flex min-w-0 items-center gap-2">
            <Avatar className="size-7">
              <AvatarImage src={`https://i.pravatar.cc/96?u=${row.original.email}`} alt="" />
              <AvatarFallback className="text-[10px]">
                {row.original.owner
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium">{row.original.owner}</div>
              <div className="text-muted-foreground truncate text-xs">
                {row.original.email}
              </div>
            </div>
            <span
              className={cn(
                "size-1.5 shrink-0 rounded-full",
                row.original.state === "Live"
                  ? "bg-success"
                  : row.original.state === "Needs approval"
                    ? "bg-warning"
                    : "bg-muted-foreground/40",
              )}
            />
          </div>
        ),
        size: 190,
      },
      {
        id: "score",
        accessorKey: "score",
        header: ({ column }) => <DataGridColumnHeader title="Score" column={column} />,
        cell: ({ row }) => <Stars value={row.original.score} />,
        size: 150,
      },
      {
        id: "state",
        accessorKey: "state",
        header: ({ column }) => <DataGridColumnHeader title="State" column={column} />,
        cell: ({ row }) => (
          <Badge variant={STATE_VARIANT[row.original.state]} size="sm" className="gap-1.5">
            <span className={cn("size-1.5 rounded-full", STATE_DOT[row.original.state])} />
            {row.original.state}
          </Badge>
        ),
        size: 130,
      },
      {
        id: "updated",
        accessorKey: "updated",
        header: ({ column }) => <DataGridColumnHeader title="Last updated" column={column} />,
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <div>
              <div className="text-sm tabular-nums">{row.original.updated}</div>
              <div className="text-muted-foreground text-xs">
                {row.original.updatedNote}
              </div>
            </div>
          </div>
        ),
        size: 160,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Workflow actions">
                <MoreVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem>
                <PencilIcon />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <EyeIcon />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem
                className="justify-between"
                onSelect={(event) => event.preventDefault()}
              >
                <span className="flex items-center gap-2">
                  <CheckIcon className="size-4" />
                  Enabled
                </span>
                <Switch
                  checked={row.original.enabled}
                  onCheckedChange={(value) => setEnabled(row.original.id, value)}
                />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Archive
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
    getRowId: (row) => row.id,
    state: { pagination, rowSelection: selection, sorting },
    onPaginationChange: setPagination,
    onRowSelectionChange: setSelection,
    onSortingChange: setSorting,
    enableRowSelection: true,
  })

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Automation library</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/50 px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Automation Library</h2>
              <p className="text-muted-foreground text-sm">
                14 workflows • 7 live • 3 review
              </p>
            </div>
            <Button
              size="sm"
              onClick={() =>
                toast("New workflow", {
                  description: "Workflow builder opens in the full app.",
                })
              }
            >
              <PlusIcon />
              New workflow
            </Button>
          </div>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No workflows match this filter."
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-4 border-b px-4">
                {WORKFLOW_TABS.map((entry) => (
                  <button
                    key={entry.key}
                    type="button"
                    onClick={() => {
                      setTab(entry.key)
                      setPagination({ pageIndex: 0, pageSize: 5 })
                    }}
                    className={cn(
                      "-mb-px flex items-center gap-1.5 border-b-2 py-2 text-sm transition-colors",
                      tab === entry.key
                        ? "border-foreground text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground border-transparent",
                    )}
                  >
                    {entry.key}
                    <span className="bg-muted text-muted-foreground rounded-full px-1.5 text-[11px]">
                      {entry.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex h-9 min-w-60 flex-1 items-stretch overflow-hidden rounded-md border bg-background sm:max-w-[500px]">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" className="flex w-28 items-center gap-1.5 px-3 text-sm font-medium">
                          <SearchIcon className="size-3.5" />
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
                        <button type="button" className="text-muted-foreground w-20 px-2 text-sm hover:bg-muted/40">
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
                        <DropdownMenuItem
                          variant="destructive"
                          onSelect={() => {
                            setField("Workflow")
                            setOperator("contains")
                            setSearch("")
                            setDraftSearch("")
                          }}
                        >
                          <Trash2Icon />
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

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
                              onClick={() => setField(attribute)}
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
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setTab("All")
                    setField("Workflow")
                    setOperator("contains")
                    setSearch("")
                    setDraftSearch("")
                  }}
                >
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

export default AutomationLibraryBlock
