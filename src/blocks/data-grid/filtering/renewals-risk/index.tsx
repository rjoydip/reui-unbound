import { useMemo, useState } from "react"
import {
  ArrowLeftRightIcon,
  BellIcon,
  Building2Icon,
  CheckIcon,
  CopyIcon,
  CalendarDaysIcon,
  FlagIcon,
  EyeIcon,
  MoreVerticalIcon,
  PinIcon,
  PlusIcon,
  Settings2Icon,
  SplitIcon,
  Trash2Icon,
  TriangleAlertIcon,
  UserIcon,
  XIcon,
  FunnelIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState } from "@tanstack/react-table"
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
} from "@/components/kit/data-grid/~data-grid-table"
import { cn } from "cn"

import {
  FILTER_ATTRIBUTES,
  RISK_ROWS,
  SIGNAL_VARIANT,
  STAGE_DOT,
} from "./data"
import type { RiskRow } from "./data"
import {
  AnthropicIcon,
  ConvexIcon,
  MintlifyIcon,
  OpenAIIcon,
  PrismaIcon,
  StripeIcon,
  SupabaseIcon,
} from "./brand-icons"

const BRAND_ICONS = {
  openai: OpenAIIcon,
  anthropic: AnthropicIcon,
  stripe: StripeIcon,
  supabase: SupabaseIcon,
  prisma: PrismaIcon,
  convex: ConvexIcon,
  mintlify: MintlifyIcon,
}

const BRAND_COLOR = {
  openai: "#111111",
  anthropic: "#191919",
  stripe: "#635BFF",
  supabase: "#3ECF8E",
  prisma: "#2D3748",
  convex: "#EE342F",
  mintlify: "#111111",
}

const ATTRIBUTE_ICONS = {
  Account: Building2Icon,
  Owner: UserIcon,
  Stage: SplitIcon,
  Signals: TriangleAlertIcon,
  Alerts: BellIcon,
}

const FIELD_ACCESSOR: Record<string, (row: RiskRow) => string> = {
  Account: (row) => row.account,
  Owner: (row) => row.owner,
  Stage: (row) => row.stage,
  Signals: (row) => row.signals.join(" "),
  Alerts: (row) => row.alertMessage,
}

const SETTINGS_COLUMNS = [
  { id: "stage", label: "Stage" },
  { id: "owner", label: "Owner" },
  { id: "signals", label: "Signals" },
  { id: "health", label: "Health" },
  { id: "arr", label: "ARR" },
  { id: "renewal", label: "Renewal" },
  { id: "alerts", label: "Alerts" },
]

export function AtRiskRenewalsBlock() {
  const [rows, setRows] = useState(RISK_ROWS)
  const [field, setField] = useState("Account")
  const [operator, setOperator] = useState("contains")
  const [search, setSearch] = useState("")
  const [draftSearch, setDraftSearch] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [visibility, setVisibility] = useState<Record<string, boolean>>({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 7,
  })

  const ordered = [...rows].sort(
    (a, b) => Number(b.pinned) - Number(a.pinned),
  )

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    const accessor = FIELD_ACCESSOR[field] ?? FIELD_ACCESSOR.Account!
    return ordered.filter((row) => {
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
  }, [ordered, field, operator, search])

  function clearFilters() {
    setField("Account")
    setOperator("contains")
    setSearch("")
    setDraftSearch("")
  }

  function togglePinned(id: string) {
    setRows((current) =>
      current.map((row) =>
        row.id === id ? { ...row, pinned: !row.pinned } : row,
      ),
    )
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, RiskRow>[]>(
    () => [
      {
        id: "pin",
        header: () => null,
        cell: ({ row }) => (
          <button
            type="button"
            onClick={() => togglePinned(row.original.id)}
            aria-label={row.original.pinned ? "Unpin renewal" : "Pin renewal"}
            className="text-muted-foreground hover:text-foreground flex size-6 items-center justify-center"
          >
            <PinIcon
              className={cn(
                "size-4",
                row.original.pinned ? "text-foreground fill-current" : "text-muted-foreground",
              )}
            />
          </button>
        ),
        size: 36,
        enableSorting: false,
      },
      {
        id: "account",
        accessorKey: "account",
        header: ({ column }) => <DataGridColumnHeader title="Account" column={column} />,
        cell: ({ row }) => {
          const Icon = BRAND_ICONS[row.original.brand]
          return (
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-md">
                <Icon
                  className="size-4"
                  style={{ color: BRAND_COLOR[row.original.brand] }}
                />
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-medium">{row.original.account}</div>
                <div className="text-muted-foreground truncate text-xs">
                  {row.original.contact} · {row.original.role}
                </div>
                <div className="text-muted-foreground truncate text-xs">
                  {row.original.product} · {row.original.seats.toLocaleString()} seats
                </div>
              </div>
            </div>
          )
        },
        size: 275,
        enableHiding: false,
      },
      {
        id: "stage",
        accessorKey: "stage",
        header: ({ column }) => <DataGridColumnHeader title="Stage" column={column} />,
        cell: ({ row }) => (
          <span className="flex items-center gap-1.5 text-sm">
            <span
              className={cn(
                "size-1.5 rounded-full",
                STAGE_DOT[row.original.stage] ?? "bg-muted-foreground/50",
              )}
            />
            {row.original.stage}
          </span>
        ),
        size: 140,
      },
      {
        id: "owner",
        accessorKey: "owner",
        header: ({ column }) => <DataGridColumnHeader title="Owner" column={column} />,
        cell: ({ row }) => (
          <span className="flex items-center gap-2">
            <Avatar className="size-7">
              <AvatarImage src={`https://i.pravatar.cc/96?u=${row.original.owner}`} alt="" />
              <AvatarFallback className="text-[10px]">
                {row.original.owner
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="min-w-0">
              <span className="block truncate text-sm">{row.original.owner}</span>
              <span className="text-muted-foreground block truncate text-xs">
                {row.original.ownerRole}
              </span>
            </span>
          </span>
        ),
        size: 160,
      },
      {
        id: "signals",
        accessorKey: "signals",
        header: ({ column }) => <DataGridColumnHeader title="Signals" column={column} />,
        cell: ({ row }) => (
          <div className="flex flex-wrap items-center gap-1">
            {row.original.signals.map((signal) => (
              <Badge
                key={signal}
                variant={SIGNAL_VARIANT[signal] ?? "secondary"}
                size="xs"
              >
                {signal}
              </Badge>
            ))}
            {row.original.moreSignals > 0 && (
              <span className="text-muted-foreground text-xs">
                +{row.original.moreSignals}
              </span>
            )}
          </div>
        ),
        size: 150,
        enableSorting: false,
      },
      {
        id: "health",
        accessorKey: "health",
        header: ({ column }) => <DataGridColumnHeader title="Health" column={column} />,
        cell: ({ row }) => {
          const value = row.original.health
          const tone =
            value < 50 ? "bg-destructive" : value < 70 ? "bg-warning" : "bg-success"
          return (
            <div className="flex items-center gap-2">
              <span className={cn("h-1 w-12 rounded-full", tone)} />
              <span className="text-xs tabular-nums">{value}%</span>
            </div>
          )
        },
        size: 95,
      },
      {
        id: "arr",
        accessorKey: "arr",
        header: ({ column }) => <DataGridColumnHeader title="ARR" column={column} />,
        cell: ({ row }) => (
          <span className="text-sm font-medium tabular-nums">
            ${row.original.arr.toLocaleString()}
          </span>
        ),
        size: 95,
      },
      {
        id: "renewal",
        accessorKey: "renewal",
        header: ({ column }) => <DataGridColumnHeader title="Renewal" column={column} />,
        cell: ({ row }) => (
          <div>
            <div className="text-sm tabular-nums">{row.original.renewal}</div>
            <div
              className={cn(
                "text-xs",
                row.original.daysTone === "danger"
                  ? "text-destructive"
                  : "text-warning-foreground",
              )}
            >
              {row.original.daysLeft}
            </div>
          </div>
        ),
        size: 125,
      },
      {
        id: "alerts",
        accessorKey: "alerts",
        header: ({ column }) => <DataGridColumnHeader title="Alerts" column={column} />,
        cell: ({ row }) => (
          <div className="min-w-0">
            <Badge
              variant={
                row.original.alertTone === "danger"
                  ? "destructive-light"
                  : row.original.alertTone === "warning"
                    ? "warning-light"
                    : "success-light"
              }
              size="xs"
              className="gap-1"
            >
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  row.original.alertTone === "danger"
                    ? "bg-destructive"
                    : row.original.alertTone === "warning"
                      ? "bg-warning"
                      : "bg-success",
                )}
              />
              {row.original.alerts} {row.original.alerts === 1 ? "issue" : "issues"}
            </Badge>
            <div className="text-muted-foreground mt-0.5 truncate text-xs">
              {row.original.alertMessage}
            </div>
          </div>
        ),
        size: 230,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Renewal actions">
                <MoreVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem>
                <EyeIcon />
                Open
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FlagIcon />
                Save plan
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarDaysIcon />
                Exec review
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => toast(`Copied brief for ${row.original.account}`)}
              >
                <CopyIcon />
                Copy brief
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        size: 40,
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
    state: { pagination, columnVisibility: visibility },
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setVisibility,
    enableRowSelection: true,
  })

  const pinnedArr = rows.filter((row) => row.pinned).reduce((sum, row) => sum + row.arr, 0)

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Renewals risk</h1>
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/50 px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Renewals Risk</h2>
              <p className="text-muted-foreground text-sm">
                12 renewals · $4M ARR · 2 critical · 4 in 30d
              </p>
            </div>
            <Button
              size="sm"
              onClick={() =>
                toast("Create save plan", {
                  description: "Save plan builder opens in the renewal workspace.",
                })
              }
            >
              <PlusIcon />
              Create save plan
            </Button>
          </div>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No renewals match this filter."
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex h-9 min-w-60 flex-1 items-stretch overflow-hidden rounded-md border bg-background sm:max-w-[360px]">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" className="flex items-center gap-1.5 px-3 text-sm font-medium">
                          <Building2Icon className="size-3.5" />
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

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Settings2Icon />
                      Settings
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-72 p-0">
                    <div className="border-b p-3">
                      <div className="text-muted-foreground mb-2 text-xs">Table</div>
                      <div className="flex items-center justify-between py-1 text-sm">
                        Density
                        <span className="text-muted-foreground">compact</span>
                      </div>
                      <div className="flex items-center justify-between py-1 text-sm">
                        Resizable columns
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between py-1 text-sm">
                        Movable columns
                        <Switch defaultChecked />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="text-muted-foreground mb-2 text-xs">Columns</div>
                      {SETTINGS_COLUMNS.map((column) => (
                        <div
                          key={column.id}
                          className="flex items-center justify-between py-1 text-sm"
                        >
                          {column.label}
                          <Switch
                            checked={visibility[column.id] !== false}
                            onCheckedChange={(value) =>
                              setVisibility((current) => ({
                                ...current,
                                [column.id]: value,
                              }))
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-center justify-between border-b bg-muted/50 px-3 py-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold tracking-wide uppercase">Pinned risk</span>
                  <span className="text-muted-foreground">
                    {rows.filter((row) => row.pinned).length} renewals stay on top
                  </span>
                </div>
                <span className="font-medium">
                  ${pinnedArr.toLocaleString()} ARR pinned
                </span>
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
                    : "border-t bg-muted/50 px-4 pt-4 pb-4"
                }
              >
                <DataGridPagination
                  sizes={[7, 12]}
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

export default AtRiskRenewalsBlock
