import { useMemo, useState } from "react"
import {
  ArrowLeftRightIcon,
  ArrowUpRightIcon,
  Building2Icon,
  CalendarClockIcon,
  CheckIcon,
  CopyIcon,
  EyeIcon,
  FileTextIcon,
  FunnelIcon,
  LayersIcon,
  MoreVerticalIcon,
  PlusIcon,
  SearchIcon,
  Settings2Icon,
  ShieldAlertIcon,
  SplitIcon,
  Trash2Icon,
  TriangleAlertIcon,
  UserIcon,
  XIcon,
} from "lucide-react"
import type {
  ColumnDef,
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
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/kit/data-grid/~data-grid-table"
import { cn } from "cn"

import {
  BRAND_COLOR,
  FILTER_ATTRIBUTES,
  HEALTH_TONE,
  RENEWALS,
  RISK_VARIANT,
  STAGE_DOT,
} from "./data"
import type { RenewalRow } from "./data"
import {
  AnthropicIcon,
  ConvexIcon,
  MintlifyIcon,
  OpenAIIcon,
  StripeIcon,
  SupabaseIcon,
} from "./brand-icons"

const BRAND_ICONS = {
  stripe: StripeIcon,
  supabase: SupabaseIcon,
  openai: OpenAIIcon,
  mintlify: MintlifyIcon,
  anthropic: AnthropicIcon,
  convex: ConvexIcon,
}

const ATTRIBUTE_ICONS = {
  Account: Building2Icon,
  Segment: LayersIcon,
  Stage: SplitIcon,
  Risk: ShieldAlertIcon,
  "Renewal window": CalendarClockIcon,
  Owner: UserIcon,
}

const FIELD_ACCESSOR: Record<string, (row: RenewalRow) => string> = {
  Account: (row) => row.account,
  Segment: (row) => row.segment,
  Stage: (row) => row.stage,
  Risk: (row) => row.risk,
  "Renewal window": (row) => row.due,
  Owner: (row) => row.owner,
}

export function RenewalsReviewBlock() {
  const [field, setField] = useState("Account")
  const [operator, setOperator] = useState("contains")
  const [search, setSearch] = useState("")
  const [draftSearch, setDraftSearch] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [selection, setSelection] = useState<RowSelectionState>({})
  const [sorting, setSorting] = useState<SortingState>([
    { id: "arr", desc: true },
  ])

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    const accessor = FIELD_ACCESSOR[field] ?? FIELD_ACCESSOR.Account!
    return RENEWALS.filter((row) => {
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
  }, [field, operator, search])

  function clearFilters() {
    setField("Account")
    setOperator("contains")
    setSearch("")
    setDraftSearch("")
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, RenewalRow>[]>(
    () => [
      {
        id: "select",
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        size: 32,
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
              <span
                className="flex size-7 shrink-0 items-center justify-center"
                style={{ color: BRAND_COLOR[row.original.brand] }}
              >
                <Icon className="size-4" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-medium">{row.original.account}</div>
                <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                  <Avatar className="size-4">
                    <AvatarImage
                      src={`https://i.pravatar.cc/48?u=${row.original.owner}`}
                      alt=""
                    />
                    <AvatarFallback className="text-[8px]">
                      {row.original.owner[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="truncate">{row.original.owner}</span>
                  <span>·</span>
                  <span className="truncate">{row.original.segment}</span>
                </div>
              </div>
            </div>
          )
        },
        size: 300,
        enableHiding: false,
      },
      {
        id: "renewal",
        accessorKey: "due",
        header: ({ column }) => <DataGridColumnHeader title="Renewal" column={column} />,
        cell: ({ row }) => (
          <div>
            <div
              className={cn(
                "text-sm font-medium",
                row.original.dueTone === "danger" && "text-destructive",
                row.original.dueTone === "warning" && "text-warning-foreground",
              )}
            >
              {row.original.due}
            </div>
            <div className="text-muted-foreground text-xs">{row.original.date}</div>
          </div>
        ),
        size: 135,
      },
      {
        id: "arr",
        accessorKey: "arr",
        header: ({ column }) => <DataGridColumnHeader title="ARR" column={column} />,
        cell: ({ row }) => (
          <div>
            <div className="text-sm font-medium tabular-nums">
              ${row.original.arr.toLocaleString()}
            </div>
            <div
              className={cn(
                "flex items-center gap-0.5 text-xs tabular-nums",
                row.original.upside > 0 ? "text-success-foreground" : "text-muted-foreground",
              )}
            >
              {row.original.upside > 0 && <ArrowUpRightIcon className="size-3" />}$
              {row.original.upside.toLocaleString()} upside
            </div>
          </div>
        ),
        size: 145,
      },
      {
        id: "health",
        accessorKey: "health",
        header: ({ column }) => <DataGridColumnHeader title="Health" column={column} />,
        cell: ({ row }) => (
          <div className="w-24">
            <div className="flex items-center gap-2">
              <span className={cn("h-1 flex-1 rounded-full", HEALTH_TONE[row.original.healthLabel])} />
              <span className="text-xs tabular-nums">{row.original.health}%</span>
            </div>
            <div
              className={cn(
                "mt-0.5 text-xs",
                row.original.healthLabel === "At risk"
                  ? "text-destructive"
                  : row.original.healthLabel === "Watchlist"
                    ? "text-warning-foreground"
                    : "text-success-foreground",
              )}
            >
              {row.original.healthLabel}
            </div>
          </div>
        ),
        size: 120,
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
        size: 155,
      },
      {
        id: "risk",
        accessorKey: "risk",
        header: ({ column }) => <DataGridColumnHeader title="Risk" column={column} />,
        cell: ({ row }) => (
          <Badge variant={RISK_VARIANT[row.original.risk]} size="sm">
            {row.original.risk}
          </Badge>
        ),
        size: 110,
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
                Open account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileTextIcon />
                Legal redlines
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                onSelect={() => toast(`Escalated ${row.original.account}`)}
              >
                <TriangleAlertIcon />
                Escalate
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
    state: { rowSelection: selection, sorting },
    onRowSelectionChange: setSelection,
    onSortingChange: setSorting,
    enableRowSelection: true,
  })

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Renewals review</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/50 px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Renewals Review</h2>
              <p className="text-muted-foreground text-sm">
                6 due in 30d, 13 blocked, $3.3M ARR at risk.
              </p>
            </div>
            <Button
              size="sm"
              onClick={() =>
                toast("New transaction", {
                  description: "Renewal entry opens in the billing workflow.",
                })
              }
            >
              <PlusIcon />
              New transaction
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

                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    Clear filters
                  </Button>
                </div>

                <Button variant="outline" size="sm">
                  <Settings2Icon />
                  Settings
                </Button>
              </div>

              <DataGridContainer className="border-x-0">
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
            </div>
          </DataGrid>
        </div>
      </div>
    </div>
  )
}

export default RenewalsReviewBlock
