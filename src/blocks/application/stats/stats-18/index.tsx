import { Building2Icon, EllipsisIcon, PackageIcon, ReceiptTextIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "cn"

const CELLS = [
  { label: "Invoices Collected", meta: "October billing run", value: "608", total: "691", unit: "invoices", percent: "88%", tone: "bg-emerald-500", icon: ReceiptTextIcon },
  { label: "Stock Replenished", meta: "Across 4 warehouses", value: "7,420", total: "12,300", unit: "units", percent: "60%", tone: "bg-violet-500", icon: PackageIcon },
  { label: "Budget Utilized", meta: "Q4 operating budget", value: "$1.4M", total: "$2.6M", unit: "", percent: "55%", tone: "bg-amber-400", icon: Building2Icon },
]

export function Stats18Block() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="bg-card grid overflow-hidden rounded-xl border shadow-sm md:grid-cols-3">
        {CELLS.map((cell, index) => (
          <div key={cell.label} className={cn("p-4", index < 2 && "border-b md:border-r md:border-b-0")}>
            <div className="flex items-center gap-2">
              <span className="bg-muted flex size-9 items-center justify-center rounded-lg"><cell.icon className="size-4" /></span>
              <div>
                <p className="text-sm font-medium">{cell.label}</p>
                <p className="text-muted-foreground text-xs">{cell.meta}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label={`${cell.label} options`}><EllipsisIcon /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-2xl font-semibold">{cell.value}</span>
              <span className="text-muted-foreground text-xs">of {cell.total} {cell.unit}</span>
              <span className="ml-auto text-sm font-medium">{cell.percent}</span>
            </div>

            <div className="mt-2 flex h-3.5 gap-[2px]">
              {Array.from({ length: 32 }, (_, dot) => (
                <span key={dot} className={cn("h-full flex-1 rounded-[1px]", dot < Math.round((parseInt(cell.percent) / 100) * 32) ? cell.tone : "bg-muted")} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats18Block
