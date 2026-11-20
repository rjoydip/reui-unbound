import { useMemo, useState } from "react"
import {
  CalendarIcon,
  FunnelIcon,
  Settings2Icon,
  StarIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/reui-unbound/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui-unbound/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui-unbound/data-grid/data-grid-column-header"
import { DataGridPagination } from "@/components/reui-unbound/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui-unbound/data-grid/data-grid-scroll-area"
import { DataGridTable } from "@/components/reui-unbound/data-grid/data-grid-table"
import { cn } from "cn"

import { DIRECTORY_MEMBERS, TEAM_TONES } from "./data"
import type { DirectoryMember } from "./data"

function MemberCell({ member }: { member: DirectoryMember }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <div className="relative">
        <Avatar className="size-8">
          <AvatarImage src={`https://i.pravatar.cc/96?u=${member.id}`} alt={member.name} />
          <AvatarFallback className="text-xs">
            {member.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        {member.online && (
          <span className="border-background bg-success absolute -right-0.5 -bottom-0.5 size-2 rounded-full border-2" />
        )}
      </div>
      <div className="min-w-0">
        <div className="truncate font-medium">
          {member.name}
          {member.name === "Avery Stone" && (
            <span className="text-muted-foreground font-normal"> (You)</span>
          )}
        </div>
        <div className="text-muted-foreground truncate text-xs">{member.email}</div>
      </div>
    </div>
  )
}

function Stars({ value }: { value: number }) {
  const filled = Math.round(value)
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            className={cn(
              "size-3.5",
              index < filled ? "fill-warning text-warning" : "text-muted-foreground/35",
            )}
          />
        ))}
      </div>
      <span className="text-muted-foreground text-xs tabular-nums">
        {value.toFixed(1)}
      </span>
    </div>
  )
}

function Activity({ value }: { value: number }) {
  const radius = 8
  const circumference = 2 * Math.PI * radius
  const tone =
    value >= 80 ? "text-success" : value >= 50 ? "text-warning" : "text-destructive"
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 20 20" className={tone}>
        <circle cx="10" cy="10" r={radius} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2.5" />
        <circle
          cx="10"
          cy="10"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - value / 100)}
          transform="rotate(-90 10 10)"
        />
      </svg>
      <span className="text-sm tabular-nums">{value}%</span>
    </div>
  )
}

export function MemberColumnsBlock() {
  const [members] = useState(DIRECTORY_MEMBERS)
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 8,
  })

  const columns = useMemo<ColumnDef<DataGridFeatures, DirectoryMember>[]>(
    () => [
      {
        id: "member",
        accessorKey: "name",
        header: ({ column }) => <DataGridColumnHeader title="Member" column={column} />,
        cell: ({ row }) => <MemberCell member={row.original} />,
        size: 300,
        enableHiding: false,
      },
      {
        id: "role",
        accessorKey: "role",
        header: ({ column }) => <DataGridColumnHeader title="Role" column={column} />,
        cell: ({ row }) => (
          <Badge variant="outline" size="sm" className="font-normal">
            {row.original.role}
          </Badge>
        ),
        size: 100,
      },
      {
        id: "team",
        accessorKey: "team",
        header: ({ column }) => <DataGridColumnHeader title="Team" column={column} />,
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <span className="text-sm">{row.original.team}</span>
            <div className="flex -space-x-1.5">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className={cn(
                    "border-background flex size-5 items-center justify-center overflow-hidden rounded-full border-2",
                    index === 2 ? TEAM_TONES[row.original.team] : "bg-muted",
                  )}
                >
                  {index < 2 ? (
                    <img
                      src={`https://i.pravatar.cc/48?u=${row.original.id}-team-${index}`}
                      alt=""
                      className="size-full object-cover"
                    />
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        ),
        size: 150,
      },
      {
        id: "rating",
        accessorKey: "rating",
        header: ({ column }) => <DataGridColumnHeader title="Rating" column={column} />,
        cell: ({ row }) => <Stars value={row.original.rating} />,
        size: 155,
      },
      {
        id: "last-seen",
        accessorKey: "lastSeen",
        header: ({ column }) => <DataGridColumnHeader title="Last seen" column={column} />,
        cell: ({ row }) => (
          <span className="flex items-center gap-2 text-sm">
            {row.original.online ? (
              <>
                <span className="bg-success size-1.5 rounded-full" />
                Online
              </>
            ) : (
              row.original.lastSeen
            )}
          </span>
        ),
        size: 110,
      },
      {
        id: "activity",
        accessorKey: "activity",
        header: ({ column }) => <DataGridColumnHeader title="Activity" column={column} />,
        cell: ({ row }) => <Activity value={row.original.activity} />,
        size: 120,
      },
      {
        id: "joined",
        accessorKey: "joined",
        header: ({ column }) => <DataGridColumnHeader title="Joined" column={column} />,
        cell: ({ row }) => (
          <span className="text-muted-foreground inline-flex items-center gap-1.5 text-sm">
            <CalendarIcon className="size-3.5" />
            {row.original.joined}
          </span>
        ),
        size: 120,
      },
    ],
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: members,
    pageCount: Math.ceil(members.length / pagination.pageSize),
    getRowId: (member) => member.id,
    state: { pagination },
    onPaginationChange: setPagination,
  })

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold">Members</h2>
            <Badge size="xs" variant="secondary">
              {members.length}
            </Badge>
          </div>
          <Button variant="outline" size="sm" onClick={() => toast("Settings")}>
            <Settings2Icon />
            Settings
          </Button>
        </div>

        <div>
          <Button variant="outline" size="sm" onClick={() => toast("Filters")}>
            <FunnelIcon />
            Filters
          </Button>
        </div>

        <DataGrid
          table={table}
          recordCount={members.length}
          emptyMessage="No members match these filters."
          tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
        >
          <DataGridContainer>
            <DataGridScrollArea>
              <DataGridTable />
            </DataGridScrollArea>
          </DataGridContainer>
          <DataGridPagination
            sizes={[8, 16, 28]}
            info="{from} - {to} of {count} members"
            rowsPerPageLabel="Rows per page"
          />
        </DataGrid>
      </div>
    </div>
  )
}

export default MemberColumnsBlock
