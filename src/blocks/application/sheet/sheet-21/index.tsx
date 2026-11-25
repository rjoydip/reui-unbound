import { useState } from "react"
import { ActivityIcon, ServerIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const OBJECTIVES = ["99%", "99.5%", "99.9%", "99.95%", "99.99%"]
const WINDOWS = ["7 days", "28 days", "30 days"]

export function Sheet21Block() {
  const [objective, setObjective] = useState("99.9%")
  const [window, setWindow] = useState("28 days")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-start gap-2 p-3">
          <div>
            <p className="text-sm font-semibold">New SLO</p>
            <p className="text-muted-foreground text-xs">Set an objective for a Harbor Ops service.</p>
          </div>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 pb-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">Definition</p>
            <p className="text-xs font-medium">Name</p>
            <Input defaultValue="Checkout API availability" aria-label="SLO name" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1"><p className="text-xs font-medium">Service</p><Select defaultValue="payments-api"><SelectTrigger className="w-full"><ServerIcon /><SelectValue /></SelectTrigger><SelectContent><SelectItem value="payments-api">payments-api</SelectItem></SelectContent></Select></div>
            <div className="space-y-1"><p className="text-xs font-medium">Indicator</p><Select defaultValue="Availability"><SelectTrigger className="w-full"><ActivityIcon /><SelectValue /></SelectTrigger><SelectContent>{["Availability", "Latency", "Correctness"].map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent></Select></div>
          </div>
          <div className="space-y-1"><p className="text-xs font-medium">Good Event</p><textarea rows={3} defaultValue="Share of requests answered without a 5xx" aria-label="Good event" className="w-full resize-none rounded-lg border bg-transparent px-3 py-2 text-sm outline-none" /></div>

          <div className="space-y-1">
            <p className="text-sm font-medium">Target</p>
            <p className="text-xs font-medium">Objective</p>
            <div className="flex overflow-hidden rounded-lg border">
              {OBJECTIVES.map((item) => <button key={item} type="button" onClick={() => setObjective(item)} className={cn("flex-1 border-r px-2 py-1.5 text-xs last:border-r-0", objective === item ? "bg-muted font-medium" : "hover:bg-muted/40")}>{item}</button>)}
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium">Rolling Window</p>
            <div className="flex overflow-hidden rounded-lg border">
              {WINDOWS.map((item) => <button key={item} type="button" onClick={() => setWindow(item)} className={cn("flex-1 border-r px-2 py-1.5 text-xs last:border-r-0", window === item ? "bg-muted font-medium" : "hover:bg-muted/40")}>{item}</button>)}
            </div>
            <p className="text-muted-foreground text-sm">Allows <span className="text-foreground font-medium">40m 19s</span> of full outage, or about <span className="text-foreground font-medium">117.6K requests</span> failing, every {window.toLowerCase()}.</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">Alerting</p>
            {[
              ["Burn alerts", "Notifies #sre-oncall."],
              ["Page on fast burn", "Over 14.4× for 1 hour or 6× for 6 hours."],
              ["Ticket on slow burn", "Over 1× for 3 days."],
            ].map(([label, description], index) => (
              <div key={label} className="flex items-center gap-3">
                <div className="min-w-0 flex-1"><p className="text-sm">{label}</p><p className="text-muted-foreground text-xs">{description}</p></div>
                <Switch defaultChecked={index < 2} aria-label={label} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 border-t p-3">
          <p className="text-muted-foreground text-xs">40m 19s per {window.toLowerCase()}</p>
          <Button variant="ghost" size="sm" className="ml-auto">Cancel</Button>
          <Button size="sm">Create SLO</Button>
        </div>
      </aside>
    </div>
  )
}

export default Sheet21Block
