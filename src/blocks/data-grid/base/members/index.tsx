import { useMemo, useState } from "react"
import {
  ChevronDownIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  Trash2Icon,
  UploadIcon,
  EyeIcon,
} from "lucide-react"
import type {
  ColumnDef,
  PaginationState,
  SortingState,
} from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import { DataGridPagination } from "@/components/kit/data-grid/~data-grid-pagination"
import { DataGridScrollArea } from "@/components/kit/data-grid/~data-grid-scroll-area"
import { DataGridTable } from "@/components/kit/data-grid/~data-grid-table"
import { cn } from "cn"

import {
  MEMBER_AUTH_PROVIDER_OPTIONS,
  MEMBER_BILLING_STATUS_OPTIONS,
  MEMBER_RECORDS,
  MEMBER_ROLE_OPTIONS,
  memberHandle,
} from "./data"
import type { AuthProvider, BillingStatus, Member } from "./data"

const BILLING_DOT: Record<BillingStatus, string> = {
  Active: "bg-success",
  "Pending invoice": "bg-info",
  "Past due": "bg-destructive",
}

const BILLING_TEXT: Record<BillingStatus, string> = {
  Active: "text-success-foreground",
  "Pending invoice": "text-info-foreground",
  "Past due": "text-destructive",
}

function MemberCell({ member }: { member: Member }) {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-8">
        <AvatarImage src={member.avatar} alt={member.name} />
        <AvatarFallback className="text-[10px]">
          {member.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">
          {member.name}
        </div>
        <div className="text-muted-foreground truncate text-xs">
          {memberHandle(member)}
        </div>
      </div>
    </div>
  )
}

interface MemberFilters {
  roles: string[]
  billing: BillingStatus[]
  auth: AuthProvider[]
}

const EMPTY_FILTERS: MemberFilters = { roles: [], billing: [], auth: [] }

export function TeamMembersBlock() {
  const [members] = useState<Member[]>(MEMBER_RECORDS)
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState<MemberFilters>(EMPTY_FILTERS)
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: false },
  ])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()

    return members
      .filter(
        (member) =>
          filters.roles.length === 0 || filters.roles.includes(member.role),
      )
      .filter(
        (member) =>
          filters.billing.length === 0 ||
          filters.billing.includes(member.billing),
      )
      .filter(
        (member) =>
          filters.auth.length === 0 || filters.auth.includes(member.auth),
      )
      .filter((member) => {
        if (term === "") return true
        return [member.name, member.email, member.role].some((field) =>
          field.toLowerCase().includes(term),
        )
      })
  }, [members, search, filters])

  const activeFilterCount =
    filters.roles.length + filters.billing.length + filters.auth.length

  const columns = useMemo<ColumnDef<DataGridFeatures, Member>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Member" column={column} />
        ),
        cell: ({ row }) => <MemberCell member={row.original} />,
        size: 240,
        enableHiding: false,
      },
      {
        accessorKey: "email",
        header: ({ column }) => (
          <DataGridColumnHeader title="Email" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-muted-foreground text-sm">
            {row.original.email}
          </span>
        ),
        size: 200,
      },
      {
        accessorKey: "role",
        header: ({ column }) => (
          <DataGridColumnHeader title="Role" column={column} />
        ),
        cell: ({ row }) => <span className="text-sm">{row.original.role}</span>,
        size: 120,
      },
      {
        accessorKey: "billing",
        header: ({ column }) => (
          <DataGridColumnHeader title="Billing status" column={column} />
        ),
        cell: ({ row }) => (
          <span
            className={cn(
              "flex items-center gap-2 text-sm",
              BILLING_TEXT[row.original.billing],
            )}
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                BILLING_DOT[row.original.billing],
              )}
            />
            {row.original.billing}
          </span>
        ),
        size: 130,
      },
      {
        accessorKey: "auth",
        header: ({ column }) => (
          <DataGridColumnHeader title="Authentication" column={column} />
        ),
        cell: ({ row }) => <span className="text-sm">{row.original.auth}</span>,
        size: 130,
      },
      {
        accessorKey: "joined",
        header: ({ column }) => (
          <DataGridColumnHeader title="Joining date" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-muted-foreground text-sm">
            {row.original.joined}
          </span>
        ),
        size: 120,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <div className="flex justify-end opacity-0 transition-opacity focus-within:opacity-100 [tr:hover_&]:opacity-100">
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label={`View ${row.original.name}`}
              onClick={() => handleAction("view", row.original)}
            >
              <EyeIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label={`Edit ${row.original.name}`}
              onClick={() => handleAction("edit", row.original)}
            >
              <PencilIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label={`Delete ${row.original.name}`}
              onClick={() => handleAction("delete", row.original)}
            >
              <Trash2Icon />
            </Button>
          </div>
        ),
        size: 80,
        enableSorting: false,
        enableHiding: false,
      },
    ],
    [],
  )

  function handleAction(action: "view" | "edit" | "delete", member: Member) {
    if (action === "view") toast(`Viewing ${member.name}`)
    if (action === "edit") toast(`Editing ${member.name}`)
    if (action === "delete")
      toast(`${member.name} removed`, {
        description: "Only the local list changes in this demo.",
      })
  }

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (member: Member) => member.id,
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  })

  return (
    <div className="flex min-h-svh flex-col bg-background p-4 sm:p-6">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold tracking-tight">Members</h1>
            <Badge variant="secondary" size="sm">
              {members.length}
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <InputGroup className="w-full sm:w-60">
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search..."
                aria-label="Search members"
                className="text-sm"
              />
            </InputGroup>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Filters
                  {activeFilterCount > 0 && (
                    <Badge size="xs" variant="secondary">
                      {activeFilterCount}
                    </Badge>
                  )}
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel className="font-medium">
                  Role
                </DropdownMenuLabel>
                {MEMBER_ROLE_OPTIONS.map((role) => (
                  <DropdownMenuCheckboxItem
                    key={role}
                    checked={filters.roles.includes(role)}
                    onSelect={(event) => event.preventDefault()}
                    onCheckedChange={(value) =>
                      setFilters((current) => ({
                        ...current,
                        roles: value
                          ? [...current.roles, role]
                          : current.roles.filter((entry) => entry !== role),
                      }))
                    }
                  >
                    {role}
                  </DropdownMenuCheckboxItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-medium">
                  Billing
                </DropdownMenuLabel>
                {MEMBER_BILLING_STATUS_OPTIONS.map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={filters.billing.includes(status)}
                    onSelect={(event) => event.preventDefault()}
                    onCheckedChange={(value) =>
                      setFilters((current) => ({
                        ...current,
                        billing: value
                          ? [...current.billing, status]
                          : current.billing.filter((entry) => entry !== status),
                      }))
                    }
                  >
                    {status}
                  </DropdownMenuCheckboxItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-medium">
                  Auth
                </DropdownMenuLabel>
                {MEMBER_AUTH_PROVIDER_OPTIONS.map((provider) => (
                  <DropdownMenuCheckboxItem
                    key={provider}
                    checked={filters.auth.includes(provider)}
                    onSelect={(event) => event.preventDefault()}
                    onCheckedChange={(value) =>
                      setFilters((current) => ({
                        ...current,
                        auth: value
                          ? [...current.auth, provider]
                          : current.auth.filter((entry) => entry !== provider),
                      }))
                    }
                  >
                    {provider}
                  </DropdownMenuCheckboxItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={activeFilterCount === 0}
                  onSelect={(event) => event.preventDefault()}
                  onCheckedChange={() => setFilters(EMPTY_FILTERS)}
                >
                  Show everyone
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              size="sm"
              onClick={() => toast("CSV import")}
            >
              <UploadIcon />
              Import
            </Button>
            <Button size="sm" onClick={() => toast("Invite a new member")}>
              <PlusIcon />
              Add member
            </Button>
          </div>
        </div>

        <DataGrid
          table={table}
          recordCount={filtered.length}
          emptyMessage="No members match your search or filters."
        >
          <div className="flex flex-col gap-3">
            <DataGridContainer>
              <DataGridScrollArea>
                <DataGridTable />
              </DataGridScrollArea>
            </DataGridContainer>
            <DataGridPagination
              sizes={[5, 10, 20]}
              info="{from} - {to} of {count} members"
              rowsPerPageLabel="Rows per page"
              className={filtered.length === 0 ? "hidden" : undefined}
            />
          </div>
        </DataGrid>
      </div>
    </div>
  )
}
