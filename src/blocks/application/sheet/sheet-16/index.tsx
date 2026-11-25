import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon, CopyIcon, DownloadIcon, RotateCcwIcon, WrapTextIcon, XIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const LOGS = [
  ["1", "10:02:56", "INFO", "deploy", "DEP-4124 created for ledger-worker v1.18.4 fro"],
  ["2", "10:02:57", "INFO", "deploy", "Triggered on merge of #455"],
  ["3", "10:02:58", "INFO", "build", "Resolving registry.lumenharbor.example/ledger"],
  ["4", "10:03:45", "INFO", "build", "Pushed image digest sha256:9b30e4f1a6c8"],
  ["5", "10:03:48", "INFO", "test", "Running 846 unit tests in 6 packages"],
  ["6", "10:05:26", "INFO", "test", "Unit tests passed in 1m 38s"],
  ["7", "10:05:32", "INFO", "test", "Contract tests passed, 118 of 118"],
  ["8", "10:05:34", "INFO", "scan", "Scanning image for known CVEs"],
  ["9", "10:06:01", "INFO", "scan", "0 critical, 0 high, 0 medium"],
  ["10", "10:06:02", "INFO", "k8s", "Rolling update started on staging-us-east-1,"],
  ["11", "10:06:17", "INFO", "k8s", "Pod ledger-worker-6b8d5f-x2k9q started, prelo"],
  ["12", "10:06:30", "WARN", "k8s", "Container memory at 498Mi of the 512Mi limit"],
  ["13", "10:06:35", "ERROR", "k8s", "Container ledger-worker terminated: OOMKilled"],
  ["14", "10:06:52", "WARN", "k8s", "Back-off restarting failed container, restart"],
  ["15", "10:07:24", "ERROR", "k8s", "Container ledger-worker terminated: OOMKilled"],
  ["16", "10:07:58", "WARN", "k8s", "Back-off restarting failed container, restart"],
  ["18", "10:08:37", "ERROR", "k8s", "Container ledger-worker terminated: OOMKilled"],
  ["19", "10:09:08", "ERROR", "deploy", "Progress deadline exceeded: 0 of 4 pods ready"],
  ["20", "10:09:10", "ERROR", "deploy", "Rollout halted at 0%, staging keeps v1.18.3"],
]

export function Sheet16Block() {
  const [tab, setTab] = useState("Logs")
  const [wrap, setWrap] = useState(false)

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 px-3 pt-2">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">DEP-4124 <CopyIcon className="size-3" /></span>
          <div className="ml-auto flex items-center gap-0.5">
            <span className="text-muted-foreground text-xs">5 of 23</span>
            <Button variant="ghost" size="icon-xs" aria-label="Previous"><ChevronUpIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Next"><ChevronDownIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>
        <div className="px-4 pb-2">
          <h1 className="flex items-center gap-2 text-lg font-semibold">ledger-worker <span className="text-muted-foreground text-xs font-normal">v1.18.4</span> <Badge variant="destructive-light" size="sm">Failed</Badge></h1>
          <p className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-xs"><Badge variant="secondary" size="sm">Staging</Badge>· staging-us-east-1</p>
          <div className="mt-3 flex items-center gap-1">
            {[1, 2, 3, 4].map((s) => <span key={s} className="h-1.5 flex-1 rounded-full bg-emerald-500" />)}
            <span className="h-1.5 flex-1 rounded-full bg-rose-500" />
            <span className="bg-muted h-1.5 flex-1 rounded-full" />
            <span className="bg-muted h-1.5 flex-1 rounded-full" />
            <span className="text-muted-foreground ml-2 text-xs">Failed at Wave 1 · 6:14</span>
          </div>
          <div className="mt-2"><Button size="sm" className="gap-1.5"><RotateCcwIcon />Retry</Button></div>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="gap-0">
          <TabsList variant="line" className="h-9 gap-4 border-b px-4">
            {["Pipeline", "Logs", "Health", "Changes 2"].map((item) => <TabsTrigger key={item} value={item.split(" ")[0]} className="px-0">{item}</TabsTrigger>)}
          </TabsList>
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            {tab === "Logs" ? (
              <div className="overflow-hidden rounded-lg border">
                <div className="flex items-center gap-2 border-b px-3 py-1.5 text-xs">
                  <span className="text-muted-foreground font-mono">DEP-4124.log</span>
                  <div className="ml-auto flex items-center gap-1">
                    <Button variant={wrap ? "secondary" : "ghost"} size="sm" className="gap-1.5" onClick={() => setWrap((v) => !v)}><WrapTextIcon />Wrap</Button>
                    <Button variant="ghost" size="icon-xs" aria-label="Download log"><DownloadIcon /></Button>
                    <Button variant="ghost" size="icon-xs" aria-label="Copy log"><CopyIcon /></Button>
                  </div>
                </div>
                <div className="max-h-[470px] overflow-auto bg-muted/20 p-2 font-mono text-[11px] leading-5">
                  {LOGS.map(([line, time, level, source, message]) => (
                    <div key={`${line}-${message}`} className={level === "ERROR" ? "bg-rose-500/5 text-rose-700" : level === "WARN" ? "bg-amber-500/5 text-amber-700" : ""}>
                      <span className="text-muted-foreground inline-block w-7 text-right">{line}</span>{" "}
                      <span className="text-muted-foreground">{time}</span>{" "}
                      <span className={level === "ERROR" ? "text-rose-600" : level === "WARN" ? "text-amber-600" : "text-muted-foreground"}>{level}</span>{" "}
                      <span>{source}</span> <span>{message}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : <p className="text-muted-foreground text-sm">{tab} for DEP-4124.</p>}
          </div>
        </Tabs>
        <div className="flex items-center gap-2 border-t p-3">
          <Switch aria-label="Auto retry" />
          <span className="text-muted-foreground text-xs">Auto-retry on failure</span>
          <Button variant="outline" size="sm" className="ml-auto">View changes</Button>
        </div>
      </aside>
    </div>
  )
}

export default Sheet16Block
