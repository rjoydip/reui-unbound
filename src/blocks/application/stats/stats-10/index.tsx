import { ArrowDownRightIcon, BarChart3Icon, EllipsisIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Stats10Block() {
  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-[444px] rounded-xl border p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="bg-indigo-50 text-indigo-600 flex size-9 items-center justify-center rounded-lg"><BarChart3Icon className="size-4" /></span>
          <p className="text-sm font-semibold">Total Revenue</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Revenue options"><EllipsisIcon /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>View report</DropdownMenuItem>
              <DropdownMenuItem>Export CSV</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-5 border-t pt-4">
          <div className="flex items-end gap-1.5">
            <p className="text-[28px] leading-none font-semibold">$1,120,500</p>
            <span className="text-muted-foreground pb-0.5 text-xs">USD</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5">
            <Badge variant="destructive-light" size="sm"><ArrowDownRightIcon />-12.7%</Badge>
            <span className="text-muted-foreground text-xs">decreased from last quarter</span>
          </div>
        </div>

        <div className="mt-5 space-y-2">
          {[["Avg. Subscription Value:", "$320"], ["Enterprise Clients:", "42"]].map(([label, value]) => (
            <div key={label} className="bg-muted/40 flex items-center justify-between rounded-md px-3 py-2 text-sm">
              <span>{label}</span><span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats10Block
