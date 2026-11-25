import { ArrowDownRightIcon, ArrowUpRightIcon, CheckCircle2Icon, CircleXIcon, EllipsisIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const METRICS = [
  { label: "Deals Closed", value: "27", change: "+12%", up: true },
  { label: "Revenue", value: "$182.4k", change: "+6%", up: true },
  { label: "Conversion", value: "72%", change: "-3%", up: false },
]

const ACTIVITY = [
  { text: "Closed deal with FinSight Inc.", badge: "Today", ok: true },
  { text: "3 new leads added to Pipeline.", badge: "Yesterday", ok: true },
  { text: "Follow-up scheduled.", badge: "2 days ago", ok: false },
]

export function Stats6Block() {
  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-[456px] rounded-xl border p-4 shadow-sm">
        <div className="flex items-start gap-2">
          <div>
            <p className="text-sm font-semibold">Staff Performance</p>
            <p className="text-muted-foreground text-xs">Sales Manager</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <Select defaultValue="Q3 - 2024"><SelectTrigger size="sm" className="w-28"><SelectValue /></SelectTrigger><SelectContent>{["Q1 - 2024", "Q2 - 2024", "Q3 - 2024"].map((q) => <SelectItem key={q} value={q}>{q}</SelectItem>)}</SelectContent></Select>
            <Button variant="outline" size="icon-sm" aria-label="More"><EllipsisIcon /></Button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {METRICS.map((metric) => (
            <div key={metric.label}>
              <p className="text-xl font-semibold">{metric.value}</p>
              <p className="text-muted-foreground text-xs">{metric.label}</p>
              <p className={metric.up ? "flex items-center gap-0.5 text-xs text-emerald-600" : "flex items-center gap-0.5 text-xs text-rose-500"}>
                {metric.up ? <ArrowUpRightIcon className="size-3" /> : <ArrowDownRightIcon className="size-3" />}{metric.change}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t pt-3">
          <div className="flex items-center justify-between text-sm"><span className="font-medium">Pipeline Progress</span><span className="text-xs">76%</span></div>
          <div className="bg-muted mt-2 h-2 overflow-hidden rounded-full"><div className="bg-foreground h-full w-[76%] rounded-full" /></div>
        </div>

        <div className="mt-4 border-t pt-3">
          <p className="text-sm font-medium">Recent Activity</p>
          <div className="mt-2 space-y-2">
            {ACTIVITY.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm">
                {item.ok ? <CheckCircle2Icon className="size-4 text-emerald-500" /> : <CircleXIcon className="size-4 text-rose-500" />}
                <span>{item.text}</span>
                <Badge variant={item.badge === "2 days ago" ? "success-light" : "focus-light"} size="sm" className="ml-auto">{item.badge}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 border-t pt-3">
          <Button variant="outline" size="sm">Schedule</Button>
          <Button size="sm">Full Report</Button>
        </div>
      </div>
    </div>
  )
}

export default Stats6Block
