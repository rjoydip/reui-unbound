import { EllipsisIcon, ShieldCheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "cn"

const DOTS = Array.from({ length: 26 }, (_, index) => index < 17)

export function StatsComplianceChecksBlock() {
  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-[444px] rounded-xl border p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <ShieldCheckIcon className="text-muted-foreground size-4" />
          <p className="text-sm font-semibold">Compliance Checks</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Compliance options"><EllipsisIcon /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>View checks</DropdownMenuItem>
              <DropdownMenuItem>Export report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-4 flex items-center gap-[3px]">
          {DOTS.map((filled, index) => <span key={index} className={cn("h-4 flex-1 rounded-full", filled ? "bg-foreground" : "bg-muted")} />)}
        </div>

        <div className="text-muted-foreground mt-2 flex items-center justify-between text-xs">
          <span>20/16 checks passing</span>
          <span className="text-foreground font-medium">67% assigned</span>
        </div>
      </div>
    </div>
  )
}

export default StatsComplianceChecksBlock
