import { useEffect, useMemo, useState } from "react"
import {
  ChevronDownIcon,
  Columns3Icon,
  DownloadIcon,
  MessageSquarePlusIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  XIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState, RowSelectionState, SortingState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
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
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"

import {
  AGENTS,
  COACHING_META,
  TEAMS,
  csatPercent,
  formatMinutes,
} from "./data"
import type { Agent, CoachingStatus, Team } from "./data"
import {
  AgentCell,
  CoachingBadge,
  CsatCell,
  QaCell,
  ReopenCell,
  SlaCell,
  SpeedCell,
} from "./parts"
import { AgentSheet, CoachingDialog } from "./agent-sheet"

const COACHING_OPTIONS = Object.entries(COACHING_META) as [
  CoachingStatus,
  (typeof COACHING_META)[CoachingStatus],
][]

function exportAgents(agents: Agent[]) {
  const rows = [
    ["Agent", "Team", "QA", "Reopen %", "CSAT %", "First reply", "Resolution", "SLA %", "Coaching"],
    ...agents.map((agent) => [
      agent.name,
      agent.team,
      String(agent.qa),
      ((agent.reopens / agent.reopenTotal) * 100).toFixed(1),
      csatPercent(agent).toFixed(0),
      formatMinutes(agent.firstReply),
      formatMinutes(agent.resolve),
      String(agent.sla),
      COACHING_META[agent.coaching].label,
    ]),
  ]
  const csv = rows
    .map((row) => row.map((value) => `"${value.replaceAll('"', '""')}"`).join(","))
    .join("\n")
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }))
  const link = document.createElement("a")
  link.href = url
  link.download = "support-scorecard.csv"
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
  toast("Scorecard exported", { description: `${agents.length} agents written to CSV.` })
}

export function SupportScorecardBlock() {
  const [agents, setAgents] = useState<Agent[]>(AGENTS)
  const [search, setSearch] = useState("")
  const [team, setTeam] = useState<"all" | Team>("all")
  const [coaching, setCoaching] = useState<"all" | CoachingStatus>("all")
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [sheetId, setSheetId] = useState<string | null>(null)
  const [coachingFor, setCoachingFor] = useState<string[] | null>(null)

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return agents.filter((agent) => {
      if (team !== "all" && agent.team !== team) return false
      if (coaching !== "all" && agent.coaching !== coaching) return false
      if (query === "") return true
      return [agent.name, agent.email, agent.team, agent.focus].some((value) =>
        value.toLowerCase().includes(query),
      )
    })
  }, [agents, search, team, coaching])

  useEffect(() => {
    setPagination((current) => ({ ...current, pageIndex: 0 }))
  }, [search, team, coaching])

  const selected = agents.filter((agent) => rowSelection[agent.id])
  const selectedIds = selected.map((agent) => agent.id)
  const activeAgent = agents.find((agent) => agent.id === sheetId) ?? null
  const coachingAgents = coachingFor
    ? agents.filter((agent) => coachingFor.includes(agent.id))
    : []

  function setCoachingStatus(ids: string[], status: CoachingStatus) {
    const snapshot = agents
    setAgents((current) =>
      current.map((agent) =>
        ids.includes(agent.id) ? { ...agent, coaching: status } : agent,
      ),
    )
    setRowSelection({})
    toast(`Coaching set to ${COACHING_META[status].label.toLowerCase()}`, {
      description: `${ids.length} agent${ids.length === 1 ? "" : "s"} updated.`,
      action: { label: "Undo", onClick: () => setAgents(snapshot) },
    })
  }

  function openCoaching(ids: string[]) {
    if (ids.length === 0) return
    setCoachingFor(ids)
  }

  function saveCoaching(notes: string, focus: string) {
    if (!coachingFor || notes.trim() === "") return
    const snapshot = agents
    const ids = coachingFor
    setAgents((current) =>
      current.map((agent) =>
        ids.includes(agent.id)
          ? {
              ...agent,
              coaching: "coaching",
              focus,
              notes: [
                {
                  date: "Nov 18",
                  label: "Coaching started",
                  detail: notes.trim(),
                },
                ...agent.notes,
              ],
            }
          : agent,
      ),
    )
    setCoachingFor(null)
    setRowSelection({})
    toast("Coaching started", {
      description: `${ids.length} agent${ids.length === 1 ? "" : "s"} · focus ${focus.toLowerCase()}.`,
      action: { label: "Undo", onClick: () => setAgents(snapshot) },
    })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, Agent>[]>(
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
        accessorKey: "name",
        header: ({ column }) => <DataGridColumnHeader title="Agent" column={column} />,
        cell: ({ row }) => <AgentCell agent={row.original} />,
        size: 220,
        enableHiding: false,
      },
      {
        accessorKey: "qa",
        header: ({ column }) => <DataGridColumnHeader title="QA" column={column} />,
        cell: ({ row }) => <QaCell agent={row.original} />,
        size: 95,
      },
      {
        id: "reopens",
        accessorFn: (agent) => (agent.reopens / agent.reopenTotal) * 100,
        header: ({ column }) => <DataGridColumnHeader title="Reopen" column={column} />,
        cell: ({ row }) => <ReopenCell agent={row.original} />,
        size: 105,
      },
      {
        id: "csat",
        accessorFn: (agent) => csatPercent(agent),
        header: ({ column }) => <DataGridColumnHeader title="CSAT" column={column} />,
        cell: ({ row }) => <CsatCell agent={row.original} />,
        size: 130,
      },
      {
        accessorKey: "firstReply",
        header: ({ column }) => <DataGridColumnHeader title="First reply" column={column} />,
        cell: ({ row }) => (
          <SpeedCell minutes={row.original.firstReply} warnAt={40} label="First reply" />
        ),
        size: 100,
      },
      {
        accessorKey: "resolve",
        header: ({ column }) => <DataGridColumnHeader title="Resolution" column={column} />,
        cell: ({ row }) => (
          <SpeedCell minutes={row.original.resolve} warnAt={600} label="Resolution" />
        ),
        size: 105,
      },
      {
        accessorKey: "sla",
        header: ({ column }) => <DataGridColumnHeader title="SLA" column={column} />,
        cell: ({ row }) => <SlaCell value={row.original.sla} />,
        size: 105,
      },
      {
        accessorKey: "coaching",
        header: ({ column }) => <DataGridColumnHeader title="Coaching" column={column} />,
        cell: ({ row }) => (
          <CoachingBadge
            status={row.original.coaching}
            label={
              row.original.name === "Aylin Kaya"
                ? "Oct 23"
                : row.original.name === "Felix Wagner"
                  ? "Oct 28"
                  : undefined
            }
          />
        ),
        size: 120,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <div className="flex justify-end" onClick={(event) => event.stopPropagation()}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" className="text-muted-foreground">
                  <MoreHorizontalIcon />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="font-medium">
                  {row.original.name}
                </DropdownMenuLabel>
                <DropdownMenuItem onSelect={() => setSheetId(row.original.id)}>
                  View review
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => openCoaching([row.original.id])}>
                  <MessageSquarePlusIcon />
                  Start coaching
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => setCoachingStatus([row.original.id], "on-track")}
                >
                  Mark on track
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setCoachingStatus([row.original.id], "suggest")}
                >
                  Suggest coaching
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
    [agents],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (agent: Agent) => agent.id,
    state: { sorting, columnVisibility, pagination, rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Support scorecard</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Support Scorecard</FrameTitle>
                <FrameDescription>
                  Tier 1 support, the four weeks from Sep 28
                </FrameDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => exportAgents(filtered)}>
                  <DownloadIcon />
                  Export
                </Button>
                <Button size="sm" onClick={() => toast("Add agent", { description: "Invite flow opens in the admin app." })}>
                  <PlusIcon />
                  Add agent
                </Button>
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No agents match these filters."
              tableLayout={{ headerBackground: true }}
              onRowClick={(agent) => setSheetId(agent.id)}
            >
              <div className="flex flex-col gap-3">
                {selected.length > 0 ? (
                  <div className="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5">
                    <div className="text-sm font-medium">{selected.length} selected</div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => openCoaching(selectedIds)}>
                        <MessageSquarePlusIcon />
                        Start coaching
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Set status
                            <ChevronDownIcon />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {COACHING_OPTIONS.map(([value, meta]) => (
                            <DropdownMenuItem
                              key={value}
                              onSelect={() => setCoachingStatus(selectedIds, value)}
                            >
                              {meta.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button variant="ghost" size="sm" onClick={() => setRowSelection({})}>
                        <XIcon />
                        Clear
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-1 flex-wrap items-center gap-2">
                      <InputGroup className="w-full sm:max-w-64">
                        <InputGroupAddon>
                          <SearchIcon />
                        </InputGroupAddon>
                        <InputGroupInput
                          value={search}
                          onChange={(event) => setSearch(event.target.value)}
                          placeholder="Search agents..."
                          aria-label="Search agents"
                          className="text-sm"
                        />
                      </InputGroup>

                      <Select value={team} onValueChange={(value) => setTeam(value as "all" | Team)}>
                        <SelectTrigger size="sm" className="w-36" aria-label="Filter by team">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All teams</SelectItem>
                          {TEAMS.map((entry) => (
                            <SelectItem key={entry} value={entry}>
                              {entry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select
                        value={coaching}
                        onValueChange={(value) => setCoaching(value as "all" | CoachingStatus)}
                      >
                        <SelectTrigger size="sm" className="w-40" aria-label="Filter by coaching status">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All coaching</SelectItem>
                          {COACHING_OPTIONS.map(([value, meta]) => (
                            <SelectItem key={value} value={value}>
                              {meta.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {(search || team !== "all" || coaching !== "all") && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSearch("")
                            setTeam("all")
                            setCoaching("all")
                          }}
                        >
                          <XIcon />
                          Clear
                        </Button>
                      )}
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
                )}

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
                <DataGridPagination
                  sizes={[10, 20]}
                  info="{from} - {to} of {count} agents"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />

              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <AgentSheet
        agent={activeAgent}
        open={activeAgent !== null}
        onOpenChange={(open) => {
          if (!open) setSheetId(null)
        }}
      />

      <CoachingDialog
        agents={coachingAgents}
        open={coachingFor !== null}
        onOpenChange={(open) => {
          if (!open) setCoachingFor(null)
        }}
        onStart={saveCoaching}
      />
    </>
  )
}

export default SupportScorecardBlock
