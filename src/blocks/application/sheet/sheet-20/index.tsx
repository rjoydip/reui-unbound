import { useState } from "react"
import { AlertCircleIcon, BellRingIcon, CheckCircle2Icon, ChevronDownIcon, ChevronUpIcon, CopyIcon, PencilIcon, XIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

const DAYS = Array.from({ length: 30 }, (_, index) => index + 1)

export function Sheet20Block() {
  const [tab, setTab] = useState("Overview")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 px-3 pt-2">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">SLO-104 <CopyIcon className="size-3" /></span>
          <div className="ml-auto flex items-center gap-0.5">
            <Button variant="ghost" size="icon-xs" aria-label="Previous"><ChevronUpIcon /></Button>
            <span className="bg-muted rounded px-1.5 py-0.5 text-xs">1 of 18</span>
            <Button variant="ghost" size="icon-xs" aria-label="Next"><ChevronDownIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="More"><span className="text-lg leading-none">···</span></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>
        <div className="px-4 pb-2">
          <h1 className="flex items-center gap-2 text-lg font-semibold">Ledger write success <Badge variant="destructive-light" size="sm">Exhausted</Badge></h1>
          <p className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-xs"><CheckCircle2Icon className="size-3.5" />Correctness · 99.99% over 30 days · ledger-worker</p>
          <div className="mt-2 flex items-center gap-2">
            <Button variant="outline" size="sm"><BellRingIcon />Mute Alerts</Button>
            <Button variant="outline" size="sm"><PencilIcon />Edit</Button>
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="gap-0">
          <TabsList variant="line" className="h-9 gap-4 border-b px-4">
            {["Overview", "Burn Rate", "Events 2", "Settings"].map((item) => <TabsTrigger key={item} value={item.split(" ")[0]} className="px-0">{item}</TabsTrigger>)}
          </TabsList>

          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            {tab === "Overview" ? (
              <>
                <div className="border-destructive/30 bg-destructive/5 flex items-start gap-2 rounded-lg border p-3">
                  <AlertCircleIcon className="text-destructive mt-0.5 size-4" />
                  <div>
                    <p className="text-sm font-medium text-destructive">Deploy Freeze</p>
                    <p className="text-muted-foreground text-sm">The budget is 42% over. Releases to ledger-worker need SRE approval until it recovers.</p>
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-lg border">
                  <div className="flex items-center gap-2 border-b p-3">
                    <span className="bg-muted flex size-7 items-center justify-center rounded-md"><span className="text-xs">⌁</span></span>
                    <div><p className="text-sm font-medium">Burn-Down</p><p className="text-muted-foreground text-xs">Budget left, day by day</p></div>
                  </div>
                  <div className="p-3">
                    <p className="text-2xl font-semibold text-destructive">42% <span className="text-muted-foreground text-xs font-normal">over budget</span></p>
                    <p className="text-muted-foreground text-xs">Two incidents spent 112% in six days.</p>

                    <div className="relative mt-4 h-[150px]">
                      <div className="absolute inset-x-0 top-0 flex justify-between text-[10px] text-muted-foreground"><span>45K</span><span>30K</span><span>15K</span><span>0</span></div>
                      <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-amber-400" />
                      <div className="absolute inset-x-0 top-0 bottom-0 flex items-end gap-[5px]">
                        {DAYS.map((day) => {
                          const over = day >= 21
                          const height = over ? Math.min(95, 30 + (day - 20) * 12) : 60 + (day % 5) * 6
                          return (
                            <div key={day} className="flex flex-1 flex-col items-center justify-end gap-0.5">
                              <span className={cn("size-1.5 rounded-full", over ? "bg-rose-500" : "bg-emerald-500")} />
                              <span className={cn("w-full rounded-t-sm", over ? "bg-rose-100" : "bg-muted")} style={{ height: `${height}px` }} />
                              {day === 29 ? <span className="text-[10px] font-medium">29</span> : day === 1 || day === 8 || day === 15 || day === 21 || day === 26 ? <span className="text-[10px] text-muted-foreground">{day}</span> : <span className="text-[10px] opacity-0">.</span>}
                            </div>
                          )
                        })}
                      </div>
                      <div className="bg-foreground text-background absolute top-2 right-2 rounded px-1.5 py-0.5 text-[10px]">42% over · Today</div>
                    </div>
                    <div className="text-muted-foreground mt-2 flex items-center justify-between text-[10px]">
                      <span>● Even burn</span><span>○ Forecast</span><span>● Incident</span><span>Drag across days to sum spend</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-muted-foreground text-xs font-medium">Budget</p>
                  {[["Remaining", "−42%"], ["Consumed", "142%"], ["Incidents", "2"]].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm"><span className="text-muted-foreground">{label}</span><span>{value}</span></div>
                  ))}
                </div>
              </>
            ) : <p className="text-muted-foreground text-sm">{tab} for SLO-104.</p>}
          </div>
        </Tabs>
      </aside>
    </div>
  )
}

export default Sheet20Block
