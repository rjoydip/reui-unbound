import { useMemo, useState } from "react"
import {
  MoreHorizontalIcon,
  DownloadIcon,
  PinIcon,
  PinOffIcon,
  SearchIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState, RowPinningState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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
import { DataGridTable } from "@/components/kit/data-grid/~data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"
import { cn } from "cn"

import { ACCESS_MEMBERS, ACCESS_ROLES } from "./data"
import type { AccessMember } from "./data"

const TABS = [
  { label: "General", count: 5 },
  { label: "Tags", count: 6 },
  { label: "Permissions", count: 5 },
]

type PermissionKey = "settings" | "billing" | "integrations" | "users" | "permissions"

const PERMISSION_LABELS: Record<PermissionKey, string> = {
  settings: "Settings",
  billing: "Billing",
  integrations: "Integrations",
  users: "Users",
  permissions: "Permissions",
}

function MemberCell({ member }: { member: AccessMember }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <div className="relative">
        <Avatar className="size-8">
          <AvatarImage
            src={`https://i.pravatar.cc/96?u=${member.id}`}
            alt={member.name}
          />
          <AvatarFallback className="text-xs">
            {member.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <span
          className={cn(
            "border-background absolute -right-0.5 -bottom-0.5 size-2 rounded-full border-2",
            member.online ? "bg-success" : "bg-muted-foreground/40",
          )}
        />
      </div>
      <div className="min-w-0">
        <div className="truncate font-medium">{member.name}</div>
        <div className="text-muted-foreground truncate text-xs">
          {member.role} · {member.presence}
        </div>
      </div>
    </div>
  )
}

export function AccessPermissionsBlock() {
  const [members, setMembers] = useState(ACCESS_MEMBERS)
  const [tab, setTab] = useState("Permissions")
  const [role, setRole] = useState("All roles")
  const [search, setSearch] = useState("")
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [rowPinning, setRowPinning] = useState<RowPinningState>({
    top: ["mem-1", "mem-2"],
    bottom: [],
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return members.filter((member) => {
      if (role !== "All roles" && member.role !== role) return false
      if (!term) return true
      return [member.name, member.role, member.email].some((value) =>
        value.toLowerCase().includes(term),
      )
    })
  }, [members, role, search])

  const columns = useMemo<ColumnDef<DataGridFeatures, AccessMember>[]>(() => {
    const permissionColumn = (key: PermissionKey): ColumnDef<DataGridFeatures, AccessMember> => ({
      id: key,
      accessorFn: (member) => member[key],
      header: ({ column }) => (
        <DataGridColumnHeader title={PERMISSION_LABELS[key]} column={column} />
      ),
      cell: ({ row }) => (
        <Switch
          checked={row.original[key]}
          className="data-[state=checked]:bg-success"
          onCheckedChange={(checked) =>
            setMembers((current) =>
              current.map((member) =>
                member.id === row.original.id ? { ...member, [key]: checked } : member,
              ),
            )
          }
          aria-label={`${row.original.name} ${PERMISSION_LABELS[key]}`}
        />
      ),
      size: 132,
    })

    const pinColumn: ColumnDef<DataGridFeatures, AccessMember> = {
      id: "pin",
      header: () => null,
      cell: ({ row }) => {
        const pinned = rowPinning.top?.includes(row.id) ?? false
        return (
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label={pinned ? "Unpin member" : "Pin member"}
            onClick={() => togglePin(row.id)}
          >
            {pinned ? (
              <PinOffIcon className="text-foreground" />
            ) : (
              <PinIcon className="text-muted-foreground/50" />
            )}
          </Button>
        )
      },
      size: 36,
      enableSorting: false,
    }

    const memberColumn: ColumnDef<DataGridFeatures, AccessMember> = {
      id: "member",
      accessorKey: "name",
      header: ({ column }) => <DataGridColumnHeader title="Member" column={column} />,
      cell: ({ row }) => <MemberCell member={row.original} />,
      size: 280,
      enableHiding: false,
    }

    const roleColumn: ColumnDef<DataGridFeatures, AccessMember> = {
      id: "role",
      accessorKey: "role",
      header: ({ column }) => <DataGridColumnHeader title="Role" column={column} />,
      cell: ({ row }) => <span className="text-sm">{row.original.role}</span>,
      size: 160,
    }

    const presenceColumn: ColumnDef<DataGridFeatures, AccessMember> = {
      id: "presence",
      accessorKey: "presence",
      header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
      cell: ({ row }) => (
        <span className="flex items-center gap-2 text-sm">
          <span
            className={cn(
              "size-1.5 rounded-full",
              row.original.online ? "bg-success" : "bg-muted-foreground/40",
            )}
          />
          {row.original.presence}
        </span>
      ),
      size: 180,
    }

    const actionsColumn: ColumnDef<DataGridFeatures, AccessMember> = {
      id: "actions",
      header: () => null,
      cell: () => (
        <Button variant="ghost" size="icon-sm" aria-label="Member actions">
          <MoreHorizontalIcon />
        </Button>
      ),
      size: 48,
      enableSorting: false,
    }

    if (tab === "General") {
      return [
        pinColumn,
        memberColumn,
        roleColumn,
        presenceColumn,
        permissionColumn("settings"),
        permissionColumn("billing"),
        actionsColumn,
      ]
    }

    if (tab === "Tags") {
      return [
        pinColumn,
        memberColumn,
        roleColumn,
        {
          id: "tags",
          accessorFn: (member) => member.role,
          header: ({ column }) => <DataGridColumnHeader title="Tags" column={column} />,
          cell: ({ row }) => (
            <div className="flex flex-wrap items-center gap-1">
              <Badge variant="outline" size="xs">
                {row.original.role.split(" ")[0]}
              </Badge>
              <Badge
                variant={row.original.online ? "success-light" : "secondary"}
                size="xs"
              >
                {row.original.online ? "Online" : "Away"}
              </Badge>
              <Badge
                variant={row.original.permissions ? "primary-light" : "secondary"}
                size="xs"
              >
                {row.original.permissions ? "Reviewer" : "Member"}
              </Badge>
            </div>
          ),
          size: 260,
          enableSorting: false,
        },
        presenceColumn,
        actionsColumn,
      ]
    }

    return [
      pinColumn,
      memberColumn,
      permissionColumn("settings"),
      permissionColumn("billing"),
      permissionColumn("integrations"),
      permissionColumn("users"),
      permissionColumn("permissions"),
      actionsColumn,
    ]
  }, [rowPinning, tab])

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (member) => member.id,
    state: { pagination, rowPinning },
    onPaginationChange: setPagination,
    onRowPinningChange: setRowPinning,
    enableRowPinning: true,
  })

  const pinnedCount = rowPinning.top?.length ?? 0

  function togglePin(id: string) {
    setRowPinning((current) => {
      const top = current.top ?? []
      return {
        top: top.includes(id)
          ? top.filter((entry) => entry !== id)
          : [id, ...top],
        bottom: current.bottom ?? [],
      }
    })
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Workspace access review</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel>
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
            <div>
              <FrameTitle>Workspace Access Review</FrameTitle>
              <FrameDescription>
                10 members · 5 online · 5 with review access
              </FrameDescription>
            </div>
            <Button variant="outline" onClick={() => toast("Review exported")}>
              <DownloadIcon />
              Export review
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No members match the current filters."
            tableLayout={{ headerBackground: false, rowsPinnable: true, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1 border-b">
                {TABS.map((entry) => (
                  <button
                    key={entry.label}
                    type="button"
                    onClick={() => setTab(entry.label)}
                    className={cn(
                      "-mb-px flex items-center gap-1.5 border-b-2 px-2.5 py-2 text-sm font-medium transition-colors",
                      tab === entry.label
                        ? "border-foreground text-foreground"
                        : "text-muted-foreground hover:text-foreground border-transparent",
                    )}
                  >
                    {entry.label}
                    <Badge size="xs" variant="secondary">
                      {entry.count}
                    </Badge>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger size="sm" className="w-44">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ACCESS_ROLES.map((entry) => (
                        <SelectItem key={entry} value={entry}>
                          {entry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <InputGroup className="w-full sm:max-w-72">
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search members..."
                      className="text-sm"
                    />
                  </InputGroup>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={pinnedCount === 0}
                    onClick={() => setRowPinning({ top: [], bottom: [] })}
                  >
                    Unpin all
                  </Button>
                  <span className="text-muted-foreground text-sm">
                    {pinnedCount} rows pinned
                  </span>
                </div>
              </div>

              <>
                <DataGridContainer className="border-y border-border">
                  <DataGridScrollArea>
                    <DataGridTable />
                  </DataGridScrollArea>
                </DataGridContainer>
                <DataGridPagination
                  sizes={[5, 10]}
                  info="{from} - {to} of {count} members"
                  rowsPerPageLabel="Rows per page"
                  className={filtered.length === 0 ? "hidden" : undefined}
                />
              </>
            </div>
          </DataGrid>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default AccessPermissionsBlock
