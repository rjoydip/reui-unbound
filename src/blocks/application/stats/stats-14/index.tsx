import { EllipsisIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "cn"

// Deterministic adoption matrix: each column is a week, each cell a cohort.
const MATRIX = Array.from({ length: 7 }, (_, column) =>
  Array.from({ length: 5 }, (_, row) => {
    const strength = 7 - column - Math.floor(row / 2)
    if (strength <= 0) return "bg-muted"
    if (strength >= 4) return "bg-indigo-600"
    if (strength === 3) return "bg-indigo-400"
    if (strength === 2) return "bg-indigo-300"
    return "bg-indigo-200"
  })
)

export function Stats14Block() {
  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-[444px] rounded-xl border p-4 shadow-sm">
        <div className="flex items-start gap-2">
          <div>
            <p className="text-sm font-semibold">Feature Adoption</p>
            <p className="text-muted-foreground text-sm">Best adoption report</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Adoption options"><EllipsisIcon /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>View report</DropdownMenuItem>
              <DropdownMenuItem>Export data</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className="mt-6 text-[44px] leading-none font-semibold">84%</p>

        <div className="mt-7 grid grid-cols-7 gap-1.5">
          {MATRIX.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-1.5">
              {column.map((tone, rowIndex) => <span key={rowIndex} className={cn("block h-3 rounded-sm", tone)} />)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats14Block
