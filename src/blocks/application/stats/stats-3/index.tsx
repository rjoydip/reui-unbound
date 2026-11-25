import { InfoIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const RENEWALS = [
  { name: "Acme Corp", plan: "Enterprise", days: "3d", tone: "focus-light" },
  { name: "Beta LLC", plan: "Pro", days: "5d", tone: "success-light" },
  { name: "Gamma Inc", plan: "Pro", days: "7d", tone: "success-light" },
]

export function Stats3Block() {
  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-[444px] rounded-xl border p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">Subscription Alerts</p>
          <Select defaultValue="This Month">
            <SelectTrigger size="sm" className="ml-auto w-32"><SelectValue /></SelectTrigger>
            <SelectContent>{["This Month", "Last Month", "This Quarter"].map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
          </Select>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div><p className="text-muted-foreground text-xs font-medium uppercase">Total Revenue</p><p className="mt-1 text-xl font-semibold">$128,400</p></div>
          <div><p className="text-muted-foreground text-xs font-medium uppercase">Subscriptions</p><p className="mt-1 text-xl font-semibold">312</p></div>
        </div>

        <div className="mt-4 flex h-2 overflow-hidden rounded-full">
          <span className="w-[50%] bg-teal-400" />
          <span className="w-[38%] bg-red-600" />
          <span className="w-[12%] bg-amber-400" />
        </div>
        <div className="text-muted-foreground mt-2 flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-teal-400" />Free</span>
          <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-red-600" />Pro</span>
          <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-amber-400" />Enterprise</span>
          <InfoIcon className="size-3.5" />
        </div>

        <p className="text-muted-foreground mt-5 text-sm">Expiring Soon</p>
        <div className="mt-2 space-y-2">
          {RENEWALS.map((item) => (
            <div key={item.name} className="bg-muted/40 flex items-center gap-2 rounded-lg px-3 py-2 text-sm">
              <span>{item.name}</span>
              <Badge variant={item.tone as "focus-light"} size="sm">{item.plan}</Badge>
              <span className="text-muted-foreground ml-auto text-xs">in {item.days}</span>
              <span className="text-muted-foreground">|</span>
              <button type="button" className="text-xs font-medium">Renew</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats3Block
