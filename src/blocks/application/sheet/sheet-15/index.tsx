import { useState } from "react"
import { CheckCircle2Icon, ChevronDownIcon, ChevronUpIcon, CopyIcon, LoaderCircleIcon, PauseIcon, RotateCcwIcon, XCircleIcon, XIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

const STAGES = [
  { name: "Build", status: "done", time: "0:48" },
  { name: "Test", status: "done", time: "1:36" },
  { name: "Security scan", status: "done", time: "0:32" },
  { name: "Canary 25%", status: "done", time: "2:30", note: "Error 0.05%, p95 43 ms, 3 of 12 pods" },
  { name: "Canary 50%", status: "running", time: "66%" },
  { name: "Promote gate", status: "pending", time: "Manual" },
  { name: "Full rollout", status: "pending" },
]

export function Sheet15Block() {
  const [tab, setTab] = useState("Pipeline")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 px-3 pt-2">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">DEP-4128 <CopyIcon className="size-3" /></span>
          <div className="ml-auto flex items-center gap-0.5">
            <span className="text-muted-foreground text-xs">1 of 23</span>
            <Button variant="ghost" size="icon-xs" aria-label="Previous"><ChevronUpIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Next"><ChevronDownIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>
        <div className="px-4 pb-2">
          <h1 className="flex items-center gap-2 text-lg font-semibold">fraud-scorer <span className="text-muted-foreground text-xs font-normal">v3.9.0</span> <Badge variant="success-light" size="sm">Running</Badge></h1>
          <p className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-xs"><Badge variant="secondary" size="sm">Production</Badge>· prod-us-east-1</p>
          <div className="mt-3 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((segment) => <span key={segment} className={cn("h-1.5 flex-1 rounded-full", segment <= 4 ? "bg-emerald-500" : "bg-muted")} />)}
            <span className="ml-2 flex-1"><span className="block h-1.5"><span className="block h-1.5 w-2/3 rounded-full bg-foreground" /></span></span>
            <span className="text-muted-foreground ml-2 text-xs">Canary 50% · 7:24</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Button variant="outline" size="sm"><PauseIcon />Pause</Button>
            <Button variant="outline" size="sm"><RotateCcwIcon />Roll back</Button>
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="gap-0">
          <TabsList variant="line" className="h-9 gap-4 border-b px-4">
            {["Pipeline", "Logs", "Health", "Changes 5"].map((item) => <TabsTrigger key={item} value={item.split(" ")[0]} className="px-0">{item}</TabsTrigger>)}
          </TabsList>
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            {tab === "Pipeline" ? (
              <>
                <div className="overflow-hidden rounded-lg border">
                  {STAGES.map((stage, index) => (
                    <div key={stage.name} className={cn("flex items-center gap-2 px-3 py-2 text-sm", index < STAGES.length - 1 && "border-b")}>
                      {stage.status === "done" ? <CheckCircle2Icon className="size-4 text-emerald-500" /> : stage.status === "running" ? <LoaderCircleIcon className="size-4 animate-spin" /> : <span className="border-muted-foreground/40 size-4 rounded-full border border-dashed" />}
                      <span className={cn(stage.status === "pending" && "text-muted-foreground")}>{stage.name}</span>
                      {stage.time ? <span className="text-muted-foreground ml-auto text-xs">{stage.time}</span> : null}
                      {stage.status === "running" ? <div className="absolute" /> : null}
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  {[["Release", "fraud-scorer"], ["Version", "v3.9.0 from v3.8.2"], ["Commit", "d4a7c19 · Serve fs-v7 features from the online store"], ["Image", "registry.lumenharbor.example/fraud-scorer:v3.9.0"], ["Strategy", "Canary holds at Canary 50%"], ["Started", "14:05 UTC"], ["Run by", "Emma Wilson"]].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[110px_1fr] gap-3"><span className="text-muted-foreground">{label}</span><span>{value}</span></div>
                  ))}
                </div>
              </>
            ) : <p className="text-muted-foreground text-sm">{tab} for DEP-4128.</p>}
          </div>
        </Tabs>
        <div className="flex items-center gap-2 border-t p-3 text-xs text-muted-foreground"><XCircleIcon className="size-3.5" />Streaming logs are available in the Logs tab.</div>
      </aside>
    </div>
  )
}

export default Sheet15Block
