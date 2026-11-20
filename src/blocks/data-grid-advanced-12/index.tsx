import { useMemo, useState } from "react"
import { ChevronDownIcon, SearchIcon, TriangleAlertIcon, XIcon } from "lucide-react"
import type { ColumnDef, SortingState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"
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
import { cn } from "cn"

import {
  TERMINALS,
  TERMINAL_CODES,
  formatLoads,
  formatPercent,
  isLosing,
  marginOf,
  networkStats,
  outMargin,
} from "./data"
import type { Corridor, Lane, Terminal } from "./data"
import {
  MarginLegend,
  OutMarginCell,
  SplitCell,
  TerminalCell,
} from "./parts"
import { LaneSheet, RepriceDialog } from "./sheets"
import type { LaneSelection } from "./sheets"

type CorridorFilter = "all" | Corridor

function cloneTerminals() {
  return TERMINALS.map((terminal) => ({
    ...terminal,
    lanes: { ...terminal.lanes },
  }))
}

export function FreightLanesBlock() {
  const [terminals, setTerminals] = useState<Terminal[]>(cloneTerminals)
  const [corridor, setCorridor] = useState<CorridorFilter>("all")
  const [search, setSearch] = useState("")
  const [losingOnly, setLosingOnly] = useState(false)
  const [sorting, setSorting] = useState<SortingState>([
    { id: "city", desc: false },
  ])
  const [selected, setSelected] = useState<LaneSelection | null>(null)
  const [repriceOpen, setRepriceOpen] = useState(false)

  const destCodes = useMemo(
    () =>
      corridor === "all"
        ? TERMINAL_CODES
        : terminals
            .filter((terminal) => terminal.corridor === corridor)
            .map((terminal) => terminal.code),
    [corridor, terminals],
  )

  const byCode = useMemo(
    () => new Map(terminals.map((terminal) => [terminal.code, terminal])),
    [terminals],
  )

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    return terminals
      .filter((terminal) => corridor === "all" || terminal.corridor === corridor)
      .filter(
        (terminal) => !losingOnly || isLosing(terminal, destCodes),
      )
      .filter((terminal) => {
        if (query === "") return true
        return [terminal.city, terminal.code, terminal.country].some((field) =>
          field.toLowerCase().includes(query),
        )
      })
  }, [terminals, corridor, losingOnly, destCodes, search])

  const stats = networkStats(
    corridor === "all"
      ? terminals
      : terminals.filter((terminal) => terminal.corridor === corridor),
    destCodes,
  )

  function openLane(from: Terminal, toCode: string) {
    const to = byCode.get(toCode)
    if (!to) return
    if (!from.lanes[toCode] && !to.lanes[from.code]) return
    setSelected({ from, to })
  }

  function applyReprice(next: {
    outRate: number
    outCost: number
    backRate: number | null
    backCost: number | null
  }) {
    if (!selected) return
    const { from, to } = selected
    const snapshot = terminals

    setTerminals((current) =>
      current.map((terminal) => {
        if (terminal.code === from.code) {
          const lane = terminal.lanes[to.code]
          if (!lane) return terminal
          const updated: Lane = {
            ...lane,
            rate: next.outRate,
            cost: next.outCost,
            history: [...lane.history.slice(1), next.outRate],
          }
          return { ...terminal, lanes: { ...terminal.lanes, [to.code]: updated } }
        }
        if (
          terminal.code === to.code &&
          next.backRate !== null &&
          next.backCost !== null
        ) {
          const lane = terminal.lanes[from.code]
          if (!lane) return terminal
          const updated: Lane = {
            ...lane,
            rate: next.backRate,
            cost: next.backCost,
            history: [...lane.history.slice(1), next.backRate],
          }
          return {
            ...terminal,
            lanes: { ...terminal.lanes, [from.code]: updated },
          }
        }
        return terminal
      }),
    )

    setRepriceOpen(false)
    setSelected(null)
    toast("Lane repriced", {
      description: `${from.city} ↔ ${to.city} · headhaul €${next.outRate}`,
      action: { label: "Undo", onClick: () => setTerminals(snapshot) },
    })
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, Terminal>[]>(() => {
    const laneColumns: ColumnDef<DataGridFeatures, Terminal>[] = destCodes.map(
      (code) => {
        const to = byCode.get(code)
        return {
          id: code,
          accessorFn: (terminal: Terminal) => {
            const lane = terminal.lanes[code]
            return lane ? marginOf(lane) : -100
          },
          header: ({ column }) => (
            <DataGridColumnHeader title={code} column={column} />
          ),
          cell: ({ row }) => {
            const from = row.original
            if (!to) return null
            return (
              <SplitCell
                from={from}
                to={to}
                outLane={from.lanes[code] ?? null}
                backLane={to.lanes[from.code] ?? null}
                onOpen={() => openLane(from, code)}
              />
            )
          },
          size: 92,
          meta: { cellClassName: "p-1" },
        }
      },
    )

    return [
      {
        id: "city",
        accessorFn: (terminal) => terminal.city,
        header: ({ column }) => (
          <DataGridColumnHeader title="From / to" column={column} />
        ),
        cell: ({ row }) => <TerminalCell terminal={row.original} />,
        size: 190,
        enableHiding: false,
      },
      ...laneColumns,
      {
        id: "out",
        accessorFn: (terminal) => outMargin(terminal, destCodes).margin,
        header: ({ column }) => (
          <DataGridColumnHeader title="Out" column={column} />
        ),
        cell: ({ row }) => (
          <OutMarginCell terminal={row.original} destCodes={destCodes} />
        ),
        size: 110,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destCodes, byCode, terminals])

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: 1,
    getRowId: (terminal: Terminal) => terminal.code,
    state: { sorting, pagination: { pageIndex: 0, pageSize: 100 } },
    onSortingChange: setSorting,
  })

  const corridors: Array<{ value: CorridorFilter; label: string }> = [
    { value: "all", label: "All corridors" },
    { value: "West", label: "West" },
    { value: "Central", label: "Central" },
    { value: "East", label: "East" },
  ]

  const totalLanes = filtered.reduce(
    (sum, terminal) =>
      sum +
      destCodes.filter(
        (code) => terminal.lanes[code] || byCode.get(code)?.lanes[terminal.code],
      ).length,
    0,
  )

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Freight and cargo services</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Freight &amp; Cargo Services</FrameTitle>
                <FrameDescription>
                  4 weeks to 16 Oct 2026 · {terminals.length} terminals ·{" "}
                  {totalLanes} lanes in view
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" size="lg" className="bg-background">
                  {formatLoads(stats.loads)} loads
                </Badge>
                <Badge
                  variant={stats.margin < 8 ? "warning-light" : "success-light"}
                  size="lg"
                >
                  {formatPercent(stats.margin)} margin
                </Badge>
                <Badge variant="destructive-light" size="lg">
                  {stats.losing} losing
                </Badge>
              </div>
            </FrameHeader>

            <DataGrid
              table={table}
              recordCount={filtered.length}
              emptyMessage="No terminals or lanes match your filters."
              onRowClick={(terminal) => {
                const first = destCodes.find(
                  (code) =>
                    terminal.lanes[code] ||
                    byCode.get(code)?.lanes[terminal.code],
                )
                if (first) openLane(terminal, first)
              }}
              tableLayout={{
                headerBackground: true,
                cellBorder: true,
                dense: true,
              }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <InputGroup className="w-full sm:max-w-64">
                      <InputGroupAddon>
                        <SearchIcon />
                      </InputGroupAddon>
                      <InputGroupInput
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Terminal or shipper..."
                        aria-label="Search terminals"
                        className="text-sm"
                      />
                    </InputGroup>

                    <Select
                      value={corridor}
                      onValueChange={(value) =>
                        setCorridor(value as CorridorFilter)
                      }
                    >
                      <SelectTrigger size="sm" className="w-36">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {corridors.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Button
                      variant={losingOnly ? "secondary" : "outline"}
                      size="sm"
                      onClick={() => setLosingOnly((current) => !current)}
                    >
                      <TriangleAlertIcon />
                      Losing only
                    </Button>
                  </div>

                  {(search !== "" ||
                    losingOnly ||
                    corridor !== "all") && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSearch("")
                        setLosingOnly(false)
                        setCorridor("all")
                      }}
                    >
                      <XIcon />
                      Clear
                    </Button>
                  )}
                </div>

                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium">
                      Network · {formatLoads(stats.loads)} loads ·{" "}
                      {formatPercent(stats.margin)} margin
                    </span>
                    <span className="text-muted-foreground text-xs">
                      → headhaul · ← backhaul · rate / margin, cost on hover
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-muted-foreground text-[11px]">
                      No lane
                    </span>
                    <span className="bg-muted/40 size-2 rounded-full" />
                    <MarginLegend />
                  </div>
                </div>
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </div>

      <LaneSheet
        selection={selected}
        open={selected !== null && !repriceOpen}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
        onReprice={() => setRepriceOpen(true)}
      />

      <RepriceDialog
        key={selected ? `${selected.from.code}-${selected.to.code}` : "closed"}
        selection={selected}
        open={repriceOpen}
        onOpenChange={setRepriceOpen}
        onSave={applyReprice}
      />
    </>
  )
}

export default FreightLanesBlock
