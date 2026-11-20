import { useMemo, useState } from "react"
import {
  CalendarRangeIcon,
  ChevronDownIcon,
  PlusIcon,
  RotateCcwIcon,
} from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
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
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui-unbound/frame"
import { cn } from "cn"

import {
  INITIAL_LINES,
  LOAN,
  YEARS,
  computeRows,
  formatMoney,
  formatValue,
  makeLine,
  summary,
} from "./data"
import type { ProFormaLine, ProFormaRow } from "./data"
import {
  AddLineForm,
  EditLineDialog,
  LineCell,
  SectionCell,
  ValueCell,
} from "./parts"

export default function FourplexProFormaBlock() {
  const [lines, setLines] = useState<ProFormaLine[]>(INITIAL_LINES)
  const [editing, setEditing] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)

  const rows = useMemo(() => computeRows(lines), [lines])
  const totals = summary(rows)

  const columns = useMemo<ColumnDef<DataGridFeatures, ProFormaRow>[]>(
    () => [
      {
        id: "section",
        accessorFn: (row) => row.sectionStart ? row.section : "",
        header: () => <span className="text-xs font-semibold">Section</span>,
        cell: ({ row }) => <SectionCell row={row.original} />,
        size: 120,
        enableSorting: false,
        enableHiding: false,
        meta: { cellClassName: "text-muted-foreground" },
      },
      {
        accessorKey: "label",
        header: () => <span className="text-xs font-semibold">Line</span>,
        cell: ({ row }) => <LineCell row={row.original} />,
        size: 230,
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "basis",
        header: "",
        cell: ({ row }) =>
          row.original.basis ? (
            <span className="text-muted-foreground text-xs">
              {row.original.basis}
            </span>
          ) : null,
        size: 104,
        enableSorting: false,
        meta: { cellClassName: "text-muted-foreground" },
      },
      {
        accessorKey: "monthly",
        header: () => <span className="text-xs font-semibold">Monthly</span>,
        cell: ({ row }) => (
          <span
            className={cn(
              "block text-right text-sm tabular-nums",
              (row.original.kind === "total" ||
                row.original.kind === "result") &&
                "font-semibold",
            )}
          >
            {row.original.percent
              ? "-"
              : formatMoney(row.original.monthly)}
          </span>
        ),
        size: 96,
        enableSorting: false,
        meta: {
          headerClassName: "text-right [&>div]:justify-end",
          cellClassName: "text-right",
        },
      },
      ...YEARS.map(
        (year, index): ColumnDef<DataGridFeatures, ProFormaRow> => ({
          id: `year-${index}`,
          accessorFn: (row) => row.values[index] ?? 0,
          header: () => (
            <span className="text-xs font-semibold whitespace-nowrap">
              {year}
            </span>
          ),
          cell: ({ row }) => (
            <ValueCell
              row={row.original}
              value={row.original.values[index] ?? 0}
            />
          ),
          size: 92,
          enableSorting: false,
          meta: {
            headerClassName: "text-right [&>div]:justify-end",
            cellClassName: "text-right",
          },
        }),
      ),
    ],
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: rows,
    getRowId: (row: ProFormaRow) => row.id,
    state: {
      columnPinning: { start: ["section", "label"], end: [] },
    },
  })

  const editingRow = rows.find((row) => row.id === editing) ?? null

  return (
    <>
      <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
        <h1 className="sr-only">Fourplex pro forma</h1>

        <Frame className="w-full max-w-7xl">
          <FramePanel>
            <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <FrameTitle>Fourplex Pro Forma</FrameTitle>
                <FrameDescription>
                  Year 1 · NOI {formatMoney(totals.noi)} · Cash Flow{" "}
                  {formatMoney(totals.cash)} · Total ROI{" "}
                  {totals.roi.toFixed(1)}%
                </FrameDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <CalendarRangeIcon />
                      {YEARS.length} Years
                      <ChevronDownIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuLabel className="font-medium">
                      Horizon
                    </DropdownMenuLabel>
                    <DropdownMenuItem disabled>Ten years (soon)</DropdownMenuItem>
                    <DropdownMenuItem>Six years</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem disabled>
                      Five years (soon)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setLines(INITIAL_LINES)
                    toast("Pro forma reset", {
                      description: "All inputs are back to their defaults.",
                    })
                  }}
                >
                  <RotateCcwIcon />
                  Reset
                </Button>
              </div>
            </FrameHeader>

            <div className="bg-muted/30 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-lg border px-3 py-2 text-xs">
              {[
                { label: "Price", value: formatMoney(LOAN.price) },
                { label: "Down", value: `${LOAN.downPercent}%` },
                { label: "Closing", value: formatMoney(LOAN.closing) },
                { label: "Rate", value: `${LOAN.rate}%` },
                { label: "Term", value: `${LOAN.term} yr` },
                { label: "Loan", value: formatMoney(LOAN.loan) },
                {
                  label: "Payment",
                  value: `${formatMoney(LOAN.payment)}/mo`,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="text-info font-medium tabular-nums">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {adding && (
                <AddLineForm
                  onAdd={(input) => {
                    setLines((current) => [...current, makeLine(input)])
                    setAdding(false)
                    toast("Line added", {
                      description: `${input.label} · ${formatMoney(input.yearOne)} in Year 1.`,
                    })
                  }}
                  onCancel={() => setAdding(false)}
                />
              )}

              <DataGrid
                table={table}
                recordCount={rows.length}
                tableLayout={{ headerBackground: true, columnsPinnable: true }}
                tableClassNames={{
                  bodyRow: "hover:bg-muted/30",
                  rowNew: "bg-muted/30",
                }}
                getRowStatus={(row) =>
                  row.kind === "total" || row.kind === "result"
                    ? "new"
                    : undefined
                }
                onRowClick={(row) => {
                  if (row.kind !== "input") return
                  setEditing(row.id)
                }}
              >
                <DataGridContainer>
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
              </DataGrid>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="text-muted-foreground flex flex-wrap items-center gap-3">
                  <span className="text-info flex items-center gap-1">
                    <span className="bg-info size-1.5 rounded-full" />
                    Blue figures are inputs, click a row to edit
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="bg-warning size-1.5 rounded-full" />
                    Subtotal rows update on save
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAdding((current) => !current)}
                  >
                    <PlusIcon />
                    Add line
                  </Button>
                  <span className="text-muted-foreground">
                    {lines.length} input lines · {YEARS.length} years
                  </span>
                </div>
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>

      {editingRow && (
        <EditLineDialog
          key={editingRow.id}
          row={editingRow}
          open={editing !== null}
          onOpenChange={(open) => {
            if (!open) setEditing(null)
          }}
          onSave={(row) => {
            setLines((current) =>
              current.map((line) =>
                line.id === row.id
                  ? {
                      ...line,
                      monthly: row.monthly,
                      values: row.values,
                    }
                  : line,
              ),
            )
            toast(`${row.label} updated`, {
              description: `${formatValue(row, row.values[0] ?? 0)} in Year 1.`,
            })
          }}
        />
      )}
    </>
  )
}
