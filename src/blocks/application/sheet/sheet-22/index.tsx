import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon, CopyIcon, EyeIcon, PauseIcon, RefreshCwIcon, XIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

const BARS = [62, 74, 58, 68, 90, 72, 65, 80, 70, 85, 66, 77, 88, 70, 60, 82, 74, 90, 72, 64, 80, 68, 85, 76]

export function Sheet22Block() {
  const [tab, setTab] = useState("Overview")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 px-3 pt-2">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">CON-101 <CopyIcon className="size-3" /></span>
          <div className="ml-auto flex items-center gap-0.5">
            <Button variant="ghost" size="icon-xs" aria-label="Previous"><ChevronUpIcon /></Button>
            <span className="bg-muted rounded px-1.5 py-0.5 text-xs">2 of 13</span>
            <Button variant="ghost" size="icon-xs" aria-label="Next"><ChevronDownIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="More"><span className="text-lg leading-none">···</span></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>
        <div className="px-4 pb-2">
          <p className="flex items-center gap-2 text-lg font-semibold">
            <span className="bg-emerald-100 text-emerald-700 flex size-8 items-center justify-center rounded-md text-xs font-bold">N</span>
            ledger-primary <Badge variant="success-light" size="sm">Healthy</Badge>
          </p>
          <p className="text-muted-foreground mt-0.5 text-xs">Neon Postgres · Production · 4 of 6 datasets linked</p>
          <div className="mt-2 flex items-center gap-2">
            <Button variant="outline" size="sm"><RefreshCwIcon />Sync Now</Button>
            <Button variant="outline" size="sm"><PauseIcon />Pause</Button>
            <Button variant="outline" size="sm"><EyeIcon />Preview</Button>
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="gap-0">
          <TabsList variant="line" className="h-9 gap-4 border-b px-4">
            {["Overview", "Datasets 6", "Preview", "Settings"].map((item) => <TabsTrigger key={item} value={item.split(" ")[0]} className="px-0">{item}</TabsTrigger>)}
          </TabsList>
          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
            {tab === "Overview" ? (
              <>
                <div className="overflow-hidden rounded-lg border">
                  <div className="flex items-center justify-between border-b p-3">
                    <div><p className="text-sm font-medium">Last 24 Hours <span className="text-muted-foreground">ⓘ</span></p></div>
                    <div className="text-muted-foreground flex items-center gap-2 text-[10px]"><span>● Succeeded</span><span>● Slow</span><span>● Failed</span></div>
                  </div>
                  <div className="p-3">
                    <div className="mb-1 flex justify-between text-[10px] text-muted-foreground"><span>45K</span><span>30K</span><span>15K</span><span>0</span></div>
                    <div className="flex h-24 items-end gap-1">
                      {BARS.map((height, index) => (
                        <span key={index} className={cn("flex-1 rounded-sm", height > 86 ? "bg-amber-300" : "bg-emerald-300")} style={{ height: `${height}%` }} />
                      ))}
                    </div>
                    <div className="mt-1 flex justify-between text-[10px] text-muted-foreground"><span>18:00</span><span>22:00</span><span>02:00</span><span>06:00</span><span>10:00</span><span>Now</span></div>
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground text-xs font-medium">Sync</p>
                  <div className="mt-1 space-y-1.5 text-sm">
                    {[["Frequency", "Every 15 minutes"], ["Last sync", "4m ago Sep 29, 14:15 UTC"], ["Next sync", "in 10m 14:30 UTC"], ["Datasets", "4 of 6 linked"]].map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-3"><span className="text-muted-foreground">{label}</span><span>{value}</span></div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-3">
                  <p className="text-muted-foreground text-xs font-medium">Connection</p>
                  <div className="mt-1 space-y-1.5 text-sm">
                    {[["Integration", "Neon Postgres"], ["Endpoint", "ep-quiet-harbor-41.us-east-1.aws.neon.tech"], ["Environment", "Production"], ["Signs in as", "harbor_sync"], ["Password", "••••••a71c Sep 1 by JOB-290"]].map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-3"><span className="text-muted-foreground">{label}</span><span className="truncate">{value}</span></div>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-end"><Button variant="outline" size="sm">Rotate</Button></div>
                </div>
              </>
            ) : <p className="text-muted-foreground text-sm">{tab} for CON-101.</p>}
          </div>
        </Tabs>
      </aside>
    </div>
  )
}

export default Sheet22Block
