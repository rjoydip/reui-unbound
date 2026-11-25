import { useState } from "react"
import {
  AlertCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CopyIcon,
  EllipsisIcon,
  PauseIcon,
  PlayIcon,
  TerminalIcon,
  XIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SheetCronJobDetailBlock() {
  const [tab, setTab] = useState("Overview")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 px-3 pt-2">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">JOB-219 <CopyIcon className="size-3" /></span>
          <div className="ml-auto flex items-center gap-0.5">
            <Button variant="ghost" size="icon-xs" aria-label="Previous job"><ChevronUpIcon /></Button>
            <span className="bg-muted rounded px-1.5 py-0.5 text-xs">2 of 32</span>
            <Button variant="ghost" size="icon-xs" aria-label="Next job"><ChevronDownIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="More"><EllipsisIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>

        <div className="px-4 pb-2">
          <h1 className="flex items-center gap-2 text-lg font-semibold">Import bank settlement files <Badge variant="destructive-light" size="sm">Failing</Badge></h1>
          <p className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-xs">30 * * * * · Hourly at :30 UTC · <TerminalIcon className="size-3.5" />ledger-worker</p>
          <div className="mt-2 flex items-center gap-2">
            <Button size="sm" className="gap-1.5"><PlayIcon className="fill-current" />Run Now</Button>
            <Button variant="outline" size="sm" className="gap-1.5"><PauseIcon />Pause</Button>
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="gap-0">
          <TabsList variant="line" className="h-9 gap-4 border-b px-4">
            {["Overview", "Runs", "Settings"].map((item) => <TabsTrigger key={item} value={item} className="px-0">{item}{item === "Runs" ? " 21" : ""}</TabsTrigger>)}
          </TabsList>

          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            {tab === "Overview" ? (
              <>
                <div className="border-destructive/30 bg-destructive/5 flex items-start gap-2 rounded-lg border p-3">
                  <AlertCircleIcon className="text-destructive mt-0.5 size-4" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-destructive">Exit 137</p>
                    <p className="text-muted-foreground text-sm">OOMKilled at the 2Gi memory limit. 4 failed runs in a row since 11:30 UTC.</p>
                  </div>
                  <Button variant="outline" size="sm">View Log</Button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-muted-foreground text-xs font-medium">Schedule</p>
                  <ChevronUpIcon className="text-muted-foreground size-4" />
                </div>
                <div className="mt-2 grid grid-cols-5 gap-3 text-xs">
                  {[["Minute", "30"], ["Hour", "*"], ["Day", "*"], ["Month", "*"], ["Weekday", "*"]].map(([label, value]) => (
                    <div key={label}><p className="text-muted-foreground">{label}</p><p className="mt-0.5 text-sm">{value}</p></div>
                  ))}
                </div>

                <div className="mt-4 border-t pt-3">
                  <div className="flex items-center justify-between"><p className="text-muted-foreground text-xs font-medium">Details</p><ChevronUpIcon className="text-muted-foreground size-4" /></div>
                  <div className="mt-2 space-y-2 text-sm">
                    {[
                      ["Runs", "Hourly at :30 UTC"],
                      ["Next Run", "Tue, Sep 29, 14:30 UTC in 10m"],
                      ["Concurrency", "Forbid skip if still running"],
                      ["Timeout", "15 min"],
                      ["Retries", "3"],
                      ["Alerts", "Pages #sre-oncall"],
                      ["Target", "ledger-worker prod-us-east-1"],
                      ["Environment", "Production"],
                      ["Owner", "Alex Johnson SRE"],
                    ].map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[120px_1fr] gap-3">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="flex items-center gap-1.5">
                          {label === "Owner" ? <Avatar size="sm" className="size-4"><AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" alt="" /><AvatarFallback>AJ</AvatarFallback></Avatar> : null}
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 border-t pt-3">
                  <div className="flex items-center justify-between"><p className="text-muted-foreground text-xs font-medium">Next 5 Runs</p><ChevronUpIcon className="text-muted-foreground size-4" /></div>
                  <div className="mt-2 flex justify-between text-sm"><span>Tue, Sep 29, 14:30 UTC</span><span className="text-muted-foreground text-xs">in 10m</span></div>
                </div>
              </>
            ) : (
              <p className="text-muted-foreground text-sm">{tab === "Runs" ? "21 runs · latest failed with exit 137." : "Settings for job JOB-219."}</p>
            )}
          </div>
        </Tabs>
      </aside>
    </div>
  )
}

export default SheetCronJobDetailBlock
