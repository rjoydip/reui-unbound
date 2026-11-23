import { useMemo, useState } from "react"
import {
  Columns3Icon,
  HashIcon,
  MoreHorizontalIcon,
  PlusIcon,
  Settings2Icon,
  SlidersHorizontalIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
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
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"
import { cn } from "cn"

import {
  CATEGORY_VARIANT,
  COMPANIES,
  STAGE_VARIANT,
} from "./data"
import type { Company } from "./data"

function CompanyCell({ company }: { company: Company }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <span className="bg-muted relative flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-md border">
        <span className="text-[10px] font-semibold">{company.name[0]}</span>
        <img
          src={`https://cdn.simpleicons.org/${company.slug}/${company.brand}`}
          alt=""
          className="absolute size-4 object-contain"
          onError={(event) => {
            event.currentTarget.style.display = "none"
          }}
        />
      </span>
      <div className="min-w-0">
        <div className="truncate font-medium">{company.name}</div>
        <div className="text-muted-foreground truncate text-xs">{company.domain}</div>
      </div>
    </div>
  )
}

function HealthCell({ value }: { value: number }) {
  const tone =
    value >= 75 ? "bg-success" : value >= 50 ? "bg-warning" : "bg-destructive"
  return (
    <div className="flex items-center gap-2">
      <HashIcon className="text-muted-foreground size-3.5" />
      <span className="bg-muted h-1.5 w-24 overflow-hidden rounded-full">
        <span
          className={cn("block h-full rounded-full", tone)}
          style={{ width: `${value}%` }}
        />
      </span>
      <span className="text-sm tabular-nums">{value}</span>
    </div>
  )
}

export function CompanyAttributesBlock() {
  const [companies] = useState(COMPANIES)
  const [search, setSearch] = useState("")
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return companies
    return companies.filter((company) =>
      [company.name, company.domain, company.owner].some((value) =>
        value.toLowerCase().includes(term),
      ),
    )
  }, [companies, search])

  const columns = useMemo<ColumnDef<DataGridFeatures, Company>[]>(
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
        id: "company",
        accessorKey: "name",
        header: ({ column }) => <DataGridColumnHeader title="Company" column={column} />,
        cell: ({ row }) => <CompanyCell company={row.original} />,
        size: 260,
        enableHiding: false,
      },
      {
        id: "owner",
        accessorKey: "owner",
        header: ({ column }) => <DataGridColumnHeader title="Owner" column={column} />,
        cell: ({ row }) => (
          <span className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage
                src={`https://i.pravatar.cc/96?u=${row.original.owner}`}
                alt={row.original.owner}
              />
              <AvatarFallback className="text-[9px]">
                {row.original.owner
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="truncate text-sm">{row.original.owner}</span>
          </span>
        ),
        size: 150,
      },
      {
        id: "stage",
        accessorKey: "stage",
        header: ({ column }) => <DataGridColumnHeader title="Stage" column={column} />,
        cell: ({ row }) => (
          <Badge variant={STAGE_VARIANT[row.original.stage]} size="sm">
            {row.original.stage}
          </Badge>
        ),
        size: 110,
      },
      {
        id: "arr",
        accessorKey: "arr",
        header: ({ column }) => <DataGridColumnHeader title="ARR" column={column} />,
        cell: ({ row }) => <span className="font-medium tabular-nums">{row.original.arr}</span>,
        size: 95,
      },
      {
        id: "categories",
        accessorKey: "categories",
        header: ({ column }) => <DataGridColumnHeader title="Categories" column={column} />,
        cell: ({ row }) => (
          <div className="flex flex-wrap items-center gap-1">
            {row.original.categories.map((category) => (
              <Badge
                key={category}
                variant={CATEGORY_VARIANT[category] ?? "secondary"}
                size="xs"
              >
                {category}
              </Badge>
            ))}
          </div>
        ),
        size: 210,
        enableSorting: false,
      },
      {
        id: "health",
        accessorKey: "health",
        header: ({ column }) => <DataGridColumnHeader title="Health" column={column} />,
        cell: ({ row }) => <HealthCell value={row.original.health} />,
        size: 145,
      },
      {
        id: "actions",
        header: () => null,
        cell: () => (
          <Button variant="ghost" size="icon-sm" aria-label="Company actions">
            <MoreHorizontalIcon />
          </Button>
        ),
        size: 44,
        enableSorting: false,
      },
    ],
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (company) => company.id,
    state: { columnVisibility, pagination, rowSelection },
    enableRowSelection: true,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Companies</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel>
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
            <div>
              <FrameTitle>Companies</FrameTitle>
              <FrameDescription>8 active · 1 at risk</FrameDescription>
            </div>
            <Button onClick={() => toast("Add company")}>
              <PlusIcon />
              Add company
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No companies match this filter."
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <InputGroup className="w-full sm:max-w-md">
                    <InputGroupAddon>
                      <span className="text-muted-foreground text-sm">Company</span>
                      <span className="text-muted-foreground/70 text-sm">contains</span>
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search companies..."
                      className="text-sm"
                    />
                    <InputGroupAddon align="inline-end">
                      <Button variant="ghost" size="icon-xs" aria-label="Filter options">
                        <MoreHorizontalIcon />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                  <Button variant="outline" size="sm">
                    <SlidersHorizontalIcon />
                    Filter
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <DataGridColumnVisibility
                    table={table}
                    trigger={
                      <Button variant="outline" size="sm">
                        <Columns3Icon />
                        Columns
                      </Button>
                    }
                  />
                  <Button variant="outline" size="sm" onClick={() => toast("Settings")}>
                    <Settings2Icon />
                    Settings
                  </Button>
                </div>
              </div>

              <DataGridContainer>
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <DataGridPagination
                sizes={[10, 20]}
                info="{from} - {to} of {count} companies"
                rowsPerPageLabel="Rows per page"
                className={filtered.length === 0 ? "hidden" : undefined}
              />
            </div>
          </DataGrid>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default CompanyAttributesBlock
