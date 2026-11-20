import { useState } from "react"
import {
  ActivityIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  BanIcon,
  ClockIcon,
  ZapIcon,
  FunnelIcon,
  MailIcon,
  MoreHorizontalIcon,
  RotateCcwIcon,
  TagIcon,
  Trash2Icon,
  TriangleAlertIcon,
  UsersIcon,
} from "lucide-react"
import { arrayMove } from "@dnd-kit/sortable"
import type { DragEndEvent } from "@dnd-kit/core"
import type { ColumnDef } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/reui-unbound/badge"
import { Switch } from "@/components/ui/switch"
import {
  DataGrid,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import {
  DataGridTableDndRowHandle,
  DataGridTableDndRows,
} from "@/components/reui-unbound/data-grid/data-grid-table-dnd-rows"
import { IconTile } from "@/components/reui-unbound/icon-tile"

import { ROUTING_RULES, SCOPE_VARIANT } from "./data"
import type { RoutingRule } from "./data"

const ICONS = {
  alert: TriangleAlertIcon,
  users: UsersIcon,
  tag: TagIcon,
  clock: ClockIcon,
  mail: MailIcon,
  ban: BanIcon,
}

export function RoutingRulesBlock() {
  const [rules, setRules] = useState(ROUTING_RULES)

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = rules.findIndex((rule) => rule.id === active.id)
    const newIndex = rules.findIndex((rule) => rule.id === over.id)
    if (oldIndex < 0 || newIndex < 0) return
    setRules(arrayMove(rules, oldIndex, newIndex))
  }

  const columns: ColumnDef<DataGridFeatures, RoutingRule>[] = [
    {
      id: "drag",
      header: () => null,
      cell: () => <DataGridTableDndRowHandle className="size-6" />,
      size: 40,
      enableSorting: false,
    },
    {
      id: "rank",
      header: () => <span className="text-muted-foreground text-xs font-medium">#</span>,
      cell: ({ row }) => (
        <span className="text-muted-foreground text-sm tabular-nums">{row.index + 1}</span>
      ),
      size: 40,
      enableSorting: false,
    },
    {
      id: "rule",
      accessorKey: "title",
      header: ({ column }) => <DataGridColumnHeader title="Rule" column={column} />,
      cell: ({ row }) => {
        const Icon = ICONS[row.original.icon as keyof typeof ICONS]
        return (
          <div className="flex min-w-0 items-center gap-2.5">
            <IconTile variant="elevated" size="sm" className="rounded-[10px] text-foreground">
              <Icon />
            </IconTile>
            <div className="min-w-0">
              <div className="truncate font-medium">{row.original.title}</div>
              <div className="text-muted-foreground truncate text-xs">
                {row.original.subtitle}
              </div>
            </div>
          </div>
        )
      },
      size: 250,
      enableHiding: false,
    },
    {
      id: "scope",
      accessorKey: "scope",
      header: ({ column }) => <DataGridColumnHeader title="Scope" column={column} />,
      cell: ({ row }) => (
        <Badge variant={SCOPE_VARIANT[row.original.scope] ?? "secondary"} size="xs">
          {row.original.scope}
        </Badge>
      ),
      size: 110,
    },
    {
      id: "when",
      accessorKey: "when",
      header: ({ column }) => <DataGridColumnHeader title="When" column={column} />,
      cell: ({ row }) => (
        <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
          <FunnelIcon className="size-3.5" />
          {row.original.when}
        </span>
      ),
      size: 180,
    },
    {
      id: "then",
      accessorKey: "then",
      header: ({ column }) => <DataGridColumnHeader title="Then" column={column} />,
      cell: ({ row }) => (
        <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
          <ZapIcon className="size-3.5" />
          {row.original.then}
        </span>
      ),
      size: 180,
    },
    {
      id: "matches",
      accessorKey: "matches",
      header: ({ column }) => <DataGridColumnHeader title="Matches" column={column} />,
      cell: ({ row }) => (
        <span className="text-muted-foreground flex items-center gap-1.5 text-sm tabular-nums">
          <ActivityIcon className="size-3.5" />
          {row.original.matches}
          <span className="text-xs">7d</span>
        </span>
      ),
      size: 110,
    },
    {
      id: "enabled",
      accessorKey: "enabled",
      header: ({ column }) => <DataGridColumnHeader title="Enabled" column={column} />,
      cell: ({ row }) => (
        <Switch
          checked={row.original.enabled}
          onCheckedChange={(checked) =>
            setRules((current) =>
              current.map((rule) =>
                rule.id === row.original.id ? { ...rule, enabled: checked } : rule,
              ),
            )
          }
          aria-label={`${row.original.title} enabled`}
        />
      ),
      size: 95,
    },
    {
      id: "actions",
      header: () => null,
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="Rule actions">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem
              onSelect={() =>
                setRules((current) => {
                  const index = current.findIndex(
                    (rule) => rule.id === row.original.id,
                  )
                  if (index <= 0) return current
                  return [current[index]!, ...current.filter((_, i) => i !== index)]
                })
              }
            >
              <ArrowUpIcon />
              Move to top
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() =>
                setRules((current) => {
                  const index = current.findIndex(
                    (rule) => rule.id === row.original.id,
                  )
                  if (index < 0 || index === current.length - 1) return current
                  return [
                    ...current.filter((_, i) => i !== index),
                    current[index]!,
                  ]
                })
              }
            >
              <ArrowDownIcon />
              Move to bottom
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onSelect={() =>
                setRules((current) =>
                  current.filter((rule) => rule.id !== row.original.id),
                )
              }
            >
              <Trash2Icon />
              Delete rule
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      size: 44,
      enableSorting: false,
    },
  ]

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: rules,
    getRowId: (rule) => rule.id,
    state: { pagination: { pageIndex: 0, pageSize: 100 } },
  })

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-semibold">Routing Rules</h2>
            <p className="text-muted-foreground text-xs">
              First match wins · {rules.filter((rule) => rule.enabled).length} active · 1,280
              matches
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={() => setRules(ROUTING_RULES)}>
            <RotateCcwIcon />
            Reset order
          </Button>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <DataGrid
            table={table}
            recordCount={rules.length}
            emptyMessage="No routing rules."
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true, cellBorder: true }}
          >
            <DataGridScrollArea>
              <DataGridTableDndRows
                dataIds={rules.map((rule) => rule.id)}
                handleDragEnd={handleDragEnd}
              />
            </DataGridScrollArea>
          </DataGrid>
        </div>

      </div>
    </div>
  )
}

export default RoutingRulesBlock
