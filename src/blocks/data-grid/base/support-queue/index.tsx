import { useMemo, useState } from "react"
import {
  ChevronDownIcon,
  Columns3Icon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  UserRoundIcon,
} from "lucide-react"
import type {
  ColumnDef,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/kit/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import { DataGridColumnVisibility } from "@/components/kit/data-grid/~data-grid-column-visibility"
import { DataGridPagination } from "@/components/kit/data-grid/~data-grid-pagination"
import { DataGridScrollArea } from "@/components/kit/data-grid/~data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/kit/data-grid/~data-grid-table"

import {
  SUPPORT_ASSIGNEES,
  SUPPORT_TICKETS,
  queueCounts,
  ticketSlaLabel,
} from "./data"
import type { Ticket, TicketStatus } from "./data"
import {
  AssigneeAvatar,
  PriorityBadge,
  QueueCell,
  RequesterCell,
  SlaCell,
  StatusCell,
  TicketCell,
} from "./parts"

const QUEUES = ["Platform", "Billing", "Authentication", "Integrations"]
const STATUSES: TicketStatus[] = ["Open", "Pending", "Resolved"]

export function SupportTicketsBlock() {
  const [tickets, setTickets] = useState<Ticket[]>(SUPPORT_TICKETS)
  const [search, setSearch] = useState("")
  const [queue, setQueue] = useState("all")
  const [statuses, setStatuses] = useState<TicketStatus[]>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 6,
  })
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [closing, setClosing] = useState<Ticket | null>(null)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return tickets
      .filter((ticket) => queue === "all" || ticket.queue === queue)
      .filter(
        (ticket) => statuses.length === 0 || statuses.includes(ticket.status),
      )
      .filter((ticket) => {
        if (term === "") return true
        return [ticket.title, ticket.number, ticket.requester.name].some(
          (field) => field.toLowerCase().includes(term),
        )
      })
  }, [tickets, search, queue, statuses])

  const counts = queueCounts(filtered)

  function assignOwner(ticketIds: string[], assigneeId: string) {
    setTickets((current) =>
      current.map((ticket) =>
        ticketIds.includes(ticket.id) ? { ...ticket, assigneeId } : ticket,
      ),
    )
    const assignee = SUPPORT_ASSIGNEES.find((entry) => entry.id === assigneeId)
    toast("Owner assigned", {
      description: `${ticketIds.length} ticket${ticketIds.length === 1 ? "" : "s"} assigned to ${assignee?.name}.`,
    })
  }

  function setStatus(ticketIds: string[], status: TicketStatus) {
    setTickets((current) =>
      current.map((ticket) =>
        ticketIds.includes(ticket.id) ? { ...ticket, status } : ticket,
      ),
    )
    setRowSelection({})
    toast("Status updated", {
      description: `${ticketIds.length} ticket${ticketIds.length === 1 ? "" : "s"} set to ${status}.`,
    })
  }

  function closeTicket(ticket: Ticket) {
    setTickets((current) =>
      current.map((entry) =>
        entry.id === ticket.id
          ? {
              ...entry,
              status: "Resolved",
              slaMinutes: null,
              slaNote: "No live SLA",
            }
          : entry,
      ),
    )
    setClosing(null)
    toast(`${ticket.number} closed`, {
      description: "The requester was notified and the SLA clock stopped.",
    })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, Ticket>[]>(
    () => [
      {
        id: "select",
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        size: 32,
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "title",
        header: ({ column }) => (
          <DataGridColumnHeader title="Ticket" column={column} />
        ),
        cell: ({ row }) => <TicketCell ticket={row.original} />,
        size: 340,
        enableHiding: false,
      },
      {
        id: "requester",
        accessorFn: (ticket) => ticket.requester.name,
        header: ({ column }) => (
          <DataGridColumnHeader title="Requester" column={column} />
        ),
        cell: ({ row }) => <RequesterCell ticket={row.original} />,
        size: 170,
      },
      {
        accessorKey: "queue",
        header: ({ column }) => (
          <DataGridColumnHeader title="Queue" column={column} />
        ),
        cell: ({ row }) => <QueueCell queue={row.original.queue} />,
        size: 120,
      },
      {
        accessorKey: "priority",
        header: ({ column }) => (
          <DataGridColumnHeader title="Priority" column={column} />
        ),
        cell: ({ row }) => <PriorityBadge priority={row.original.priority} />,
        size: 85,
      },
      {
        id: "sla",
        accessorFn: (ticket) => ticket.slaMinutes ?? Number.MAX_SAFE_INTEGER,
        header: ({ column }) => (
          <DataGridColumnHeader title="SLA" column={column} />
        ),
        cell: ({ row }) => <SlaCell ticket={row.original} />,
        size: 160,
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataGridColumnHeader title="Status" column={column} />
        ),
        cell: ({ row }) => <StatusCell status={row.original.status} />,
        size: 105,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <div
            className="flex justify-end"
            onClick={(event) => event.stopPropagation()}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-muted-foreground"
                >
                  <MoreHorizontalIcon />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="flex items-center justify-between gap-2 font-medium">
                  {row.original.number}
                  <span className="text-muted-foreground text-xs font-normal">
                    {ticketSlaLabel(row.original)}
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() =>
                    toast("Opening ticket", {
                      description: row.original.title,
                    })
                  }
                >
                  View ticket
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => assignOwner([row.original.id], "maya-patel")}
                >
                  <UserRoundIcon />
                  Assign to Maya Patel
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={() => setClosing(row.original)}
                >
                  Close ticket
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
        size: 44,
        enableSorting: false,
        enableHiding: false,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tickets],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (ticket: Ticket) => ticket.id,
    state: {
      sorting,
      columnVisibility,
      pagination,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  const selected = table.getSelectedRowModel().rows.map((row) => row.original)
  const selectedIds = selected.map((ticket) => ticket.id)

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Support queue</h1>

        <Card className="w-full max-w-7xl gap-0 py-0">
          <CardHeader className="border-b py-4">
            <CardTitle>Support Queue</CardTitle>
            <CardDescription>
              {counts.visible} visible &middot; {counts.unassigned} unassigned
              &middot; {counts.nearSla} near SLA
            </CardDescription>
            <CardAction>
              <Button size="sm" onClick={() => toast("New ticket")}>
                <PlusIcon />
                New ticket
              </Button>
            </CardAction>
          </CardHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No tickets match these filters."
            tableLayout={{ headerBackground: true }}
          >
            <CardContent className="flex flex-col gap-3 px-4 pt-4 pb-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <InputGroup className="w-full sm:max-w-64">
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search tickets..."
                      aria-label="Search tickets"
                      className="text-sm"
                    />
                  </InputGroup>

                  <Select value={queue} onValueChange={setQueue}>
                    <SelectTrigger size="sm" className="w-40">
                      <SelectValue placeholder="All queues" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All queues</SelectItem>
                      {QUEUES.map((entry) => (
                        <SelectItem key={entry} value={entry}>
                          {entry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Status
                        {statuses.length > 0 && (
                          <Badge size="xs" variant="secondary">
                            {statuses.length}
                          </Badge>
                        )}
                        <ChevronDownIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-40">
                      {STATUSES.map((status) => (
                        <DropdownMenuItem
                          key={status}
                          onSelect={() =>
                            setStatuses((current) =>
                              current.includes(status)
                                ? current.filter((entry) => entry !== status)
                                : [...current, status],
                            )
                          }
                        >
                          {status}
                          {statuses.includes(status) && (
                            <Badge
                              size="xs"
                              variant="secondary"
                              className="ml-auto"
                            >
                              On
                            </Badge>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <DataGridColumnVisibility
                    table={table}
                    trigger={
                      <Button variant="outline" size="sm">
                        <Columns3Icon />
                        Columns
                        <Badge size="xs" variant="secondary">
                          5
                        </Badge>
                      </Button>
                    }
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MoreHorizontalIcon />
                        Actions
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem
                        onSelect={() => setStatuses([])}
                        disabled={statuses.length === 0}
                      >
                        Clear status filter
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => setQueue("all")}
                        disabled={queue === "all"}
                      >
                        Reset queue
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onSelect={() => {
                          setTickets(SUPPORT_TICKETS)
                          setSearch("")
                          setStatuses([])
                          setQueue("all")
                        }}
                      >
                        Restore demo data
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {selected.length > 0 && (
                <div className="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5">
                  <div className="text-sm font-medium">
                    {selected.length} selected
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <UserRoundIcon />
                          Assign owner
                          <ChevronDownIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {SUPPORT_ASSIGNEES.map((assignee) => (
                          <DropdownMenuItem
                            key={assignee.id}
                            onSelect={() =>
                              assignOwner(selectedIds, assignee.id)
                            }
                          >
                            <AssigneeAvatar assignee={assignee} />
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Set status
                          <ChevronDownIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onSelect={() => setStatus(selectedIds, "Open")}
                        >
                          Open
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() => setStatus(selectedIds, "Pending")}
                        >
                          Pending
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() => setStatus(selectedIds, "Resolved")}
                        >
                          Resolved
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setRowSelection({})}
                    >
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
                sizes={[6, 10, 20]}
                info="{from} - {to} of {count} tickets"
                rowsPerPageLabel="Rows per page"
                className={filtered.length === 0 ? "hidden" : undefined}
              />
            </CardContent>
          </DataGrid>
        </Card>
      </div>

      <AlertDialog
        open={closing !== null}
        onOpenChange={(open) => {
          if (!open) setClosing(null)
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Close {closing?.number}?</AlertDialogTitle>
            <AlertDialogDescription>
              The requester is notified and the SLA clock stops. You can reopen
              the ticket from its history.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => closing && closeTicket(closing)}>
              Close ticket
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
