import { useMemo, useState } from "react"
import {
  CheckIcon,
  CopyIcon,
  EyeIcon,
  PencilIcon,
  PlusIcon,
  SquarePenIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/reui-unbound/badge"
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
import { cn } from "cn"

import { AUDIENCE_DOT, PLANS } from "./data"
import type { Audience, PlanRow } from "./data"

const AUDIENCES: Audience[] = ["Individuals", "Teams", "Companies"]
const VISIBILITIES: PlanRow["visibility"][] = ["Public", "Private"]

const VISIBILITY_VARIANT: Record<string, "success-light" | "primary-light" | "secondary"> = {
  Public: "success-light",
  Private: "primary-light",
  Archived: "secondary",
}

export function PricingPlanEditorBlock() {
  const [plans, setPlans] = useState(PLANS)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<PlanRow | null>(null)
  const [visibilityFilter, setVisibilityFilter] = useState("All")

  const visiblePlans = useMemo(
    () =>
      visibilityFilter === "All"
        ? plans
        : plans.filter((plan) => plan.visibility === visibilityFilter),
    [plans, visibilityFilter],
  )

  const publicCount = plans.filter((plan) => plan.visibility === "Public").length

  function startEdit(plan: PlanRow) {
    setEditingId(plan.id)
    setDraft({ ...plan })
  }

  function startAdd() {
    const next: PlanRow = {
      id: "new",
      name: "New plan",
      code: "plan_new",
      audience: "Individuals",
      price: 0,
      seats: 1,
      trial: "0",
      visibility: "Private",
      featured: false,
    }
    setPlans((current) => [next, ...current])
    setEditingId("new")
    setDraft(next)
  }

  function cancelEdit() {
    if (editingId === "new") {
      setPlans((current) => current.filter((plan) => plan.id !== "new"))
    }
    setEditingId(null)
    setDraft(null)
  }

  function saveEdit() {
    if (!draft) return
    setPlans((current) =>
      current.map((plan) => (plan.id === draft.id ? draft : plan)),
    )
    setEditingId(null)
    setDraft(null)
  }

  function updateDraft(patch: Partial<PlanRow>) {
    setDraft((current) => (current ? { ...current, ...patch } : current))
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, PlanRow>[]>(
    () => [
      {
        id: "plan",
        accessorKey: "name",
        header: ({ column }) => <DataGridColumnHeader title="Plan" column={column} />,
        cell: ({ row }) =>
          editingId === row.original.id && draft ? (
            <div className="flex items-center gap-2">
              <span className="-ml-3 h-6 w-0.5 bg-foreground" />
              <Input
                autoFocus
                value={draft.name}
                className="h-7 w-52 text-sm"
                onChange={(event) => updateDraft({ name: event.target.value })}
              />
            </div>
          ) : (
            <div className="min-w-0">
              <div className="truncate font-medium">{row.original.name}</div>
              <div className="text-muted-foreground truncate font-mono text-[11px]">
                {row.original.code}
              </div>
            </div>
          ),
        size: 200,
        enableHiding: false,
      },
      {
        id: "audience",
        accessorKey: "audience",
        header: ({ column }) => <DataGridColumnHeader title="Audience" column={column} />,
        cell: ({ row }) =>
          editingId === row.original.id && draft ? (
            <Select
              value={draft.audience}
              onValueChange={(value) => updateDraft({ audience: value as Audience })}
            >
              <SelectTrigger size="sm" className="h-7 w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {AUDIENCES.map((audience) => (
                  <SelectItem key={audience} value={audience}>
                    {audience}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Badge variant="outline" size="sm" className="gap-1.5 font-normal">
              <span className={cn("size-1.5 rounded-full", AUDIENCE_DOT[row.original.audience])} />
              {row.original.audience}
            </Badge>
          ),
        size: 160,
      },
      {
        id: "price",
        accessorKey: "price",
        header: ({ column }) => <DataGridColumnHeader title="Price" column={column} />,
        cell: ({ row }) =>
          editingId === row.original.id && draft ? (
            <Input
              type="number"
              value={draft.price}
              className="h-7 w-24 text-sm"
              onChange={(event) => updateDraft({ price: Number(event.target.value) })}
            />
          ) : (
            <span className="text-sm tabular-nums">
              ${row.original.price}
              <span className="text-muted-foreground text-xs"> /mo</span>
            </span>
          ),
        size: 110,
      },
      {
        id: "seats",
        accessorKey: "seats",
        header: ({ column }) => <DataGridColumnHeader title="Seats" column={column} />,
        cell: ({ row }) =>
          editingId === row.original.id && draft ? (
            <Input
              type="number"
              value={draft.seats}
              className="h-7 w-16 text-sm"
              onChange={(event) => updateDraft({ seats: Number(event.target.value) })}
            />
          ) : (
            <span className="text-sm tabular-nums">{row.original.seats}</span>
          ),
        size: 90,
      },
      {
        id: "trial",
        accessorKey: "trial",
        header: ({ column }) => <DataGridColumnHeader title="Trial" column={column} />,
        cell: ({ row }) =>
          editingId === row.original.id && draft ? (
            <Input
              value={draft.trial}
              className="h-7 w-20 text-sm"
              onChange={(event) => updateDraft({ trial: event.target.value })}
            />
          ) : (
            <span className="text-muted-foreground text-sm">{row.original.trial}</span>
          ),
        size: 110,
      },
      {
        id: "visibility",
        accessorKey: "visibility",
        header: ({ column }) => <DataGridColumnHeader title="Visibility" column={column} />,
        cell: ({ row }) =>
          editingId === row.original.id && draft ? (
            <Select
              value={draft.visibility}
              onValueChange={(value) =>
                updateDraft({ visibility: value as PlanRow["visibility"] })
              }
            >
              <SelectTrigger size="sm" className="h-7 w-26">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {VISIBILITIES.map((visibility) => (
                  <SelectItem key={visibility} value={visibility}>
                    {visibility}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Badge
              variant={VISIBILITY_VARIANT[row.original.visibility]}
              size="sm"
              className={
                row.original.visibility === "Private"
                  ? "border-purple-500/20 bg-purple-500/10 text-purple-600"
                  : undefined
              }
            >
              {row.original.visibility}
            </Badge>
          ),
        size: 115,
      },
      {
        id: "featured",
        accessorKey: "featured",
        header: ({ column }) => <DataGridColumnHeader title="Featured" column={column} />,
        cell: ({ row }) =>
          editingId === row.original.id && draft ? (
            <Switch
              checked={draft.featured}
              onCheckedChange={(checked) => updateDraft({ featured: checked })}
              aria-label="Featured"
            />
          ) : row.original.featured ? (
            <Badge variant="secondary" size="sm">
              Featured
            </Badge>
          ) : (
            <span className="text-muted-foreground text-sm">Off</span>
          ),
        size: 105,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) =>
          editingId === row.original.id ? (
            <div className="flex items-center justify-end gap-1">
              <Button variant="ghost" size="icon-xs" aria-label="Cancel" onClick={cancelEdit}>
                <XIcon />
              </Button>
              <Button size="icon-xs" aria-label="Save" onClick={saveEdit}>
                <CheckIcon />
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-end gap-0.5">
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Edit plan"
                onClick={() => startEdit(row.original)}
              >
                <PencilIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Duplicate plan"
                onClick={() =>
                  setPlans((current) => [
                    ...current,
                    {
                      ...row.original,
                      id: `${row.original.id}-copy-${Date.now()}`,
                      name: `${row.original.name} copy`,
                      code: `${row.original.code}_copy`,
                    },
                  ])
                }
              >
                <CopyIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Delete plan"
                onClick={() =>
                  setPlans((current) =>
                    current.filter((plan) => plan.id !== row.original.id),
                  )
                }
              >
                <Trash2Icon />
              </Button>
            </div>
          ),
        size: 110,
        enableSorting: false,
      },
    ],
    [editingId, draft],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: visiblePlans,
    getRowId: (plan) => plan.id,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Plans</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel className="gap-0">
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3 pb-1 -mx-4 -mt-4 rounded-t-xl border-b bg-muted/50 px-4 pt-4 ">
            <div>
              <FrameTitle>Plans</FrameTitle>
              <FrameDescription>Edit one plan at a time.</FrameDescription>
            </div>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <EyeIcon />
                    Visibility
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-28 p-1.5">
                  <div className="text-muted-foreground mb-1 text-[11px] font-medium">
                    Visibility
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    {["Public", "Private", "Archived"].map((visibility) => (
                      <button
                        key={visibility}
                        type="button"
                        onClick={() => setVisibilityFilter(visibility)}
                      >
                        <Badge
                          variant={VISIBILITY_VARIANT[visibility]}
                          size="xs"
                          className={
                            visibility === "Private"
                              ? "border-purple-500/20 bg-purple-500/10 text-purple-600"
                              : undefined
                          }
                        >
                          {visibility}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <Button size="sm" onClick={startAdd} disabled={editingId !== null}>
                <PlusIcon />
                Add plan
              </Button>
            </div>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={visiblePlans.length}
            emptyMessage="No plans yet."
            tableClassNames={{ headerRow: "[&>th]:py-3" }}
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col gap-3">
              <DataGridContainer className="mt-2 rounded-lg border">
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <div className="-mx-4 -mb-4 flex items-center gap-2 rounded-b-xl border-t bg-muted/30 px-4 py-3 text-sm">
                {editingId && draft ? (
                  <>
                    <SquarePenIcon className="size-4" />
                    <span>
                      Editing <span className="font-medium">{draft.name}</span>. Save or
                      cancel to continue.
                    </span>
                  </>
                ) : (
                  <span className="text-muted-foreground">
                    {plans.filter((plan) => plan.id !== "new").length} plans ·{" "}
                    {publicCount} public
                  </span>
                )}
              </div>
            </div>
          </DataGrid>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default PricingPlanEditorBlock
