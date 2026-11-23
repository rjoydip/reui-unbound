import { ChevronDownIcon, Columns3Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ColumnLike {
  id: string
  getCanHide: () => boolean
  getIsVisible: () => boolean
  toggleVisibility: (value: boolean) => void
  columnDef?: {
    header?: unknown
    meta?: { headerTitle?: string } | unknown
  }
}

function labelOf(column: ColumnLike) {
  const meta = column.columnDef?.meta as { headerTitle?: string } | undefined
  if (meta?.headerTitle) return meta.headerTitle
  const header = column.columnDef?.header
  if (typeof header === "string") return header
  return column.id
}

/** Columns dropdown that reads a table instance directly, so it works outside DataGrid. */
export function ColumnsMenu({
  table,
}: {
  table: { getAllColumns: () => ColumnLike[] }
}) {
  const columns = table.getAllColumns().filter((column) => column.getCanHide())

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Columns3Icon />
          Columns
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        <DropdownMenuLabel className="font-medium">Columns</DropdownMenuLabel>
        {columns.map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            checked={column.getIsVisible()}
            onSelect={(event) => event.preventDefault()}
            onCheckedChange={(value) => column.toggleVisibility(!!value)}
          >
            {labelOf(column)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
