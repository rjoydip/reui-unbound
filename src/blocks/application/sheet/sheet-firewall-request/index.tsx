import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon, CopyIcon, ShieldAlertIcon, XIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const CLIENT = [
  ["IP address", "203.0.113.12"],
  ["Country", "🇻🇳 Vietnam"],
  ["Network", "AS64498 Stackpoint Hosting"],
  ["IP lists", "None"],
  ["Bot score", "2 likely automated"],
  ["Rate", "98 requests a minute"],
]
const REQUEST = [
  ["Request", "GET /.env"],
  ["Service", "payments-api"],
  ["User agent", "curl/8.7.1"],
  ["Signals", "None"],
  ["Response", "403 Forbidden"],
  ["Time", "Sep 29, 2026, 14:19:37 UTC"],
]

export function SheetFirewallRequestBlock() {
  const [tab, setTab] = useState("Details")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 px-3 pt-2">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">c0cdab31430fa59 <CopyIcon className="size-3" /></span>
          <div className="ml-auto flex items-center gap-0.5">
            <span className="text-muted-foreground text-xs">2 of 112</span>
            <Button variant="ghost" size="icon-xs" aria-label="Previous"><ChevronUpIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Next"><ChevronDownIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>
        <div className="px-4 pb-2">
          <h1 className="flex items-center gap-2 text-lg font-semibold">GET /.env <Badge variant="destructive-light" size="sm">Blocked</Badge></h1>
          <p className="text-muted-foreground text-xs">203.0.113.12 · payments-api · Sep 29, 2026, 14:19:37 UTC</p>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="gap-0">
          <TabsList variant="line" className="h-9 gap-4 border-b px-4">
            {["Details", "Trace", "Raw"].map((item) => <TabsTrigger key={item} value={item} className="px-0">{item}</TabsTrigger>)}
          </TabsList>
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            {tab === "Details" ? (
              <>
                <div className="border-destructive/30 bg-destructive/5 rounded-lg border p-3">
                  <p className="flex items-center gap-1.5 text-sm font-medium text-destructive"><ShieldAlertIcon className="size-4" />Blocked by Block scanner probes</p>
                  <p className="text-muted-foreground mt-1 font-mono text-xs">http.path starts_with "/." or http.path contains "wp-" or http.user_agent contains "sqlmap" or http.user_agent contains "Nikto"</p>
                </div>
                <p className="text-muted-foreground mt-4 text-xs font-medium">Client</p>
                <div className="mt-1 space-y-1.5 text-sm">
                  {CLIENT.map(([label, value]) => <div key={label} className="grid grid-cols-[130px_1fr] gap-3"><span className="text-muted-foreground">{label}</span><span className="flex items-center gap-1.5">{value}{label === "IP address" ? <CopyIcon className="size-3" /> : null}</span></div>)}
                </div>
                <p className="text-muted-foreground mt-4 text-xs font-medium">Request</p>
                <div className="mt-1 space-y-1.5 text-sm">
                  {REQUEST.map(([label, value]) => <div key={label} className="grid grid-cols-[130px_1fr] gap-3"><span className="text-muted-foreground">{label}</span><span>{value}</span></div>)}
                </div>
              </>
            ) : <p className="text-muted-foreground text-sm">{tab} data for this request.</p>}
          </div>
        </Tabs>

        <div className="flex items-center gap-2 border-t p-3">
          <Button variant="outline" size="sm">⊘ Block IP</Button>
          <Button variant="outline" size="sm">✓ Allow IP</Button>
          <Button variant="ghost" size="sm" className="ml-auto"><span className="text-base leading-none">+</span> Create Rule</Button>
        </div>
      </aside>
    </div>
  )
}

export default SheetFirewallRequestBlock
