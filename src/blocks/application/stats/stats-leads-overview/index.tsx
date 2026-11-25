import { InfoIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SEGMENTS = Array.from({ length: 20 }, (_, index) => index < 18)

export function StatsLeadsOverviewBlock() {
  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-[444px] rounded-xl border p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">Leads Overview</p>
          <Select defaultValue="This Month">
            <SelectTrigger size="sm" className="ml-auto w-32"><SelectValue /></SelectTrigger>
            <SelectContent>{["This Month", "Last Month", "This Quarter"].map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
          </Select>
        </div>

        <div className="mt-3 grid grid-cols-2 divide-x">
          <div className="pr-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-semibold">54</span>
              <Badge variant="focus-light" size="sm">21.43%</Badge>
            </div>
            <p className="text-muted-foreground mt-1 text-sm">New leads</p>
            <div className="bg-muted mt-2 h-2 overflow-hidden rounded-full"><div className="h-full w-[31%] rounded-full bg-foreground" /></div>
            <p className="text-muted-foreground mt-3 text-xs">Top Source</p>
            <p className="text-sm font-medium">LinkedIn</p>
          </div>
          <div className="pl-4">
            <span className="text-2xl font-semibold">198</span>
            <p className="text-muted-foreground mt-1 text-sm">Returning leads</p>
            <div className="mt-2 flex h-2 items-center gap-[2px]">
              {SEGMENTS.map((filled, index) => <span key={index} className={filled ? "bg-emerald-500 h-full flex-1 rounded-[1px]" : "bg-muted h-full flex-1 rounded-[1px]"} />)}
            </div>
            <p className="text-muted-foreground mt-3 flex items-center gap-1 text-xs">Conversion Rate <InfoIcon className="size-3" /></p>
            <p className="text-sm font-medium">12.8%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsLeadsOverviewBlock
