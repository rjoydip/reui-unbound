import { useEffect, useMemo, useState } from "react"
import {
  ChevronDownIcon,
  CircleCheckIcon,
  CirclePauseIcon,
  Columns3Icon,
  DownloadIcon,
  FileWarningIcon,
  InboxIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  XIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type {
  ExpandedState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { IconTile } from "@/components/reui-unbound/icon-tile"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnVisibility } from "@/components/reui-unbound/data-grid/data-grid-column-visibility"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import { cn } from "cn"

import {
  ACCOUNTS,
  QUEUES,
  formatMoney,
  queueCounts,
  queueOf,
  totalChecked,
  totalChecks,
} from "./data"
import type { Account, Decision, QueueKey } from "./data"
import { accountColumns, exportAccounts } from "./parts"
import { AccountSheet } from "./account-sheet"

type QueueFilter = QueueKey | "all"

const QUEUE_ICONS: Record<Exclude<QueueKey, "approved">, LucideIcon> = {
  review: InboxIcon,
  missing: FileWarningIcon,
  ready: CircleCheckIcon,
  hold: CirclePauseIcon,
}

const DECISIONS: Decision[] = ["Approved", "In Review", "On hold", "Declined"]

export function WholesaleOnboardingBlock() {
  const [accounts, setAccounts] = useState<Account[]>(ACCOUNTS)
  const [search, setSearch] = useState("")
  const [queueFilter, setQueueFilter] = useState<QueueFilter>("all")
  const [decisions, setDecisions] = useState<Decision[]>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return accounts.filter((account) => {
      if (queueFilter !== "all" && queueOf(account) !== queueFilter) return false
      if (decisions.length > 0 && !decisions.includes(account.decision))
        return false
      if (term === "") return true
      return [
        account.name,
        account.city,
        account.country,
        account.buyer,
        ...account.doors.map((entry) => entry.name),
      ].some((field) => field.toLowerCase().includes(term))
    })
  }, [accounts, search, queueFilter, decisions])

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, queueFilter, decisions])

  function updateDecision(ids: string[], decision: Decision) {
    const set = new Set(ids)
    setAccounts((current) =>
      current.map((account) =>
        set.has(account.id) ? { ...account, decision } : account,
      ),
    )
    setRowSelection({})
    toast(
      decision === "Approved"
        ? "Application approved"
        : "Application put on hold",
      {
        description: `${ids.length} account${ids.length === 1 ? "" : "s"} · ${decision}.`,
      },
    )
  }

  const columns = useMemo(
    () =>
      accountColumns({
        onView: (account) => setSelectedId(account.id),
        onApprove: (account) => updateDecision([account.id], "Approved"),
        onHold: (account) => updateDecision([account.id], "On hold"),
      }),
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.max(1, Math.ceil(filtered.length / pagination.pageSize)),
    getRowId: (account: Account) => account.id,
    state: {
      sorting,
      columnVisibility,
      expanded,
      pagination,
      rowSelection,
    },
    getRowCanExpand: () => true,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  const counts = queueCounts(accounts)
  const totalDoors = accounts.reduce(
    (sum, account) => sum + account.doors.length,
    0,
  )
  const selectedAccounts = table
    .getSelectedRowModel()
    .rows.map((row) => row.original)
  const selectedAccount =
    accounts.find((account) => account.id === selectedId) ?? null

  function resetView() {
    setAccounts(ACCOUNTS)
    setSearch("")
    setQueueFilter("all")
    setDecisions([])
    setSorting([])
    setColumnVisibility({})
    setExpanded({})
    setRowSelection({})
    setPagination({ pageIndex: 0, pageSize: 10 })
  }

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Wholesale onboarding</h1>

        <Card className="w-full max-w-7xl gap-0 py-0">
          <CardHeader className="border-b py-4">
            <CardTitle>Wholesale Applications</CardTitle>
            <CardDescription>
              {accounts.length} accounts &middot; {totalDoors} doors &middot;
              credit and door checks before shipping
            </CardDescription>
            <CardAction className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => exportAccounts(filtered)}
                disabled={filtered.length === 0}
              >
                <DownloadIcon />
                Export
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                aria-label="Reset view"
                onClick={resetView}
              >
                <SlidersHorizontalIcon />
              </Button>
            </CardAction>
          </CardHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No applications match this queue, search or status."
            onRowClick={(account) => setSelectedId(account.id)}
            tableLayout={{ headerBackground: true }}
          >
            <CardContent className="flex flex-col gap-3 px-4 pt-4 pb-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <InputGroup className="w-full sm:max-w-72">
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search retailer, city, buyer, door..."
                      aria-label="Search applications"
                      className="text-sm"
                    />
                  </InputGroup>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Status
                        {decisions.length > 0 && (
                          <Badge size="xs" variant="secondary">
                            {decisions.length}
                          </Badge>
                        )}
                        <ChevronDownIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-44">
                      <DropdownMenuLabel className="font-medium">
                        Decision
                      </DropdownMenuLabel>
                      {DECISIONS.map((decision) => (
                        <DropdownMenuCheckboxItem
                          key={decision}
                          checked={decisions.includes(decision)}
                          onSelect={(event) => event.preventDefault()}
                          onCheckedChange={(value) =>
                            setDecisions((current) =>
                              value
                                ? [...current, decision]
                                : current.filter((entry) => entry !== decision),
                            )
                          }
                        >
                          {decision}
                        </DropdownMenuCheckboxItem>
                      ))}
                      {decisions.length > 0 && (
                        <>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onSelect={() => setDecisions([])}>
                            Clear status
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <DataGridColumnVisibility
                  table={table}
                  trigger={
                    <Button variant="outline" size="sm">
                      <Columns3Icon />
                      Columns
                      <ChevronDownIcon />
                    </Button>
                  }
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {counts.map((queue) => {
                  const Icon = QUEUE_ICONS[queue.key]
                  const active = queueFilter === queue.key

                  return (
                    <button
                      key={queue.key}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setQueueFilter((current) =>
                          current === queue.key ? "all" : queue.key,
                        )
                      }
                      className={cn(
                        "flex flex-col gap-2 rounded-lg border p-3 text-left transition-colors",
                        active
                          ? "border-primary/40 bg-primary/5 ring-primary/20 ring-1"
                          : "hover:bg-muted/40",
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-muted-foreground flex items-center gap-2 text-xs font-medium">
                          <IconTile
                            variant="soft"
                            size="xs"
                            className="rounded-md"
                          >
                            <Icon />
                          </IconTile>
                          {queue.label}
                        </span>
                        <span className="text-2xl font-semibold tabular-nums">
                          {queue.count}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {queue.description}
                      </span>
                    </button>
                  )
                })}
              </div>

              {selectedAccounts.length > 0 && (
                <div className="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5">
                  <div className="text-sm font-medium">
                    {selectedAccounts.length} selected
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      size="sm"
                      onClick={() =>
                        updateDecision(
                          selectedAccounts.map((account) => account.id),
                          "Approved",
                        )
                      }
                    >
                      <CircleCheckIcon />
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        updateDecision(
                          selectedAccounts.map((account) => account.id),
                          "On hold",
                        )
                      }
                    >
                      <CirclePauseIcon />
                      Hold
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => exportAccounts(selectedAccounts)}
                    >
                      <DownloadIcon />
                      Export
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setRowSelection({})}
                    >
                      <XIcon />
                      Clear
                    </Button>
                  </div>
                </div>
              )}

              <DataGridContainer>
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <DataGridPagination
                sizes={[10, 20]}
                info="{from} - {to} of {count} accounts"
                rowsPerPageLabel="Rows per page"
                className={filtered.length === 0 ? "hidden" : undefined}
              />
            </CardContent>
          </DataGrid>

          <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 border-t px-4 py-3 text-xs">
            <span>
              {filtered.length} of {accounts.length} accounts &middot;{" "}
              {filtered.reduce((sum, account) => sum + account.doors.length, 0)}{" "}
              doors in view
            </span>
            <span className="tabular-nums">
              {totalChecked(filtered)}/{totalChecks(filtered)} checks complete
              &middot;{" "}
              {formatMoney(
                filtered.reduce((sum, account) => sum + account.creditLimit, 0),
              )}{" "}
              credit
            </span>
          </div>
        </Card>
      </div>

      <AccountSheet
        account={selectedAccount}
        open={selectedAccount !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null)
        }}
        onApprove={(account) => updateDecision([account.id], "Approved")}
        onHold={(account) => updateDecision([account.id], "On hold")}
      />
    </>
  )
}

export default WholesaleOnboardingBlock
