import { useState } from "react"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CopyIcon,
  HistoryIcon,
  LinkIcon,
  MonitorIcon,
  XIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const DETAILS = [
  ["Name", "Emma Wilson", "avatar"],
  ["Role", "Release manager, Platform"],
  ["Auth", "SSO with WebAuthn"],
  ["Session", "ses_40mT8x", "copy"],
  ["IP address", "203.0.113.24 Corporate VPN"],
  ["User agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 14.6) AppleWebKit/537.36 Chrome/129.0.0.0 Safari/537.36"],
] as const

export function Sheet14Block() {
  const [tab, setTab] = useState("Details")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 px-3 pt-2">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">EVT-9f3a21 <CopyIcon className="size-3" /></span>
          <div className="ml-auto flex items-center gap-0.5">
            <span className="text-muted-foreground text-xs">1 of 65</span>
            <Button variant="ghost" size="icon-xs" aria-label="Previous"><ChevronUpIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Next"><ChevronDownIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>
        <div className="px-4 pb-2">
          <h1 className="flex items-center gap-2 text-lg font-semibold">deployment.promote <Badge variant="success-light" size="sm">Success</Badge></h1>
          <p className="text-muted-foreground mt-1 flex items-center gap-1.5 text-xs">
            <Avatar size="sm" className="size-4"><AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" alt="" /><AvatarFallback>EW</AvatarFallback></Avatar>
            Emma Wilson · Sep 29, 2026, 14:12:08 UTC
          </p>
          <p className="mt-2 text-sm">Promoted payments-api v2.41.0 from the 50% canary to all production traffic.</p>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="gap-0">
          <TabsList variant="line" className="h-9 gap-4 border-b px-4">
            {["Details", "Changes", "Raw", "Related 3"].map((item) => <TabsTrigger key={item} value={item.split(" ")[0]} className="px-0">{item}</TabsTrigger>)}
          </TabsList>
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            {tab === "Details" ? (
              <div className="space-y-4 text-sm">
                <div className="space-y-2">
                  {DETAILS.map(([label, value, extra]) => (
                    <div key={label} className="grid grid-cols-[130px_1fr] gap-3">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="flex items-center gap-1.5">
                        {extra === "avatar" ? <Avatar size="sm" className="size-4"><AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" alt="" /><AvatarFallback>EW</AvatarFallback></Avatar> : null}
                        {value}
                        {extra === "copy" ? <CopyIcon className="size-3" /> : null}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-muted-foreground mb-2 text-xs font-medium">Target</p>
                  {[["Resource", "payments-api", "monitor"], ["Resource ID", "DEP-4127", "copy"], ["Environment", "Production"], ["Cluster", "prod-us-east-1"], ["Source", "Console", "monitor"]].map(([label, value, extra]) => (
                    <div key={label} className="grid grid-cols-[130px_1fr] gap-3 py-1">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="flex items-center gap-1.5">{extra === "monitor" ? <MonitorIcon className="size-3.5" /> : null}{extra === "copy" ? <Badge variant="outline" size="sm">{value}</Badge> : value}{extra === "copy" ? <CopyIcon className="size-3" /> : null}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-muted-foreground mb-2 text-xs font-medium">Request</p>
                  {[["Request ID", "req_01J8ZK4M2Q"], ["Trace ID", "4bf92f35…0e4736"], ["Received", "Sep 29, 2026, 14:12:08 UTC"]].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[130px_1fr] gap-3 py-1">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="flex items-center gap-1.5 font-mono text-xs">{value} <CopyIcon className="size-3" /></span>
                    </div>
                  ))}
                </div>
              </div>
            ) : <p className="text-muted-foreground text-sm">{tab} data for EVT-9f3a21.</p>}
          </div>
        </Tabs>

        <div className="flex items-center gap-2 border-t p-3">
          <Button variant="outline" size="sm"><CheckIcon />Mark reviewed</Button>
          <Button variant="ghost" size="sm"><LinkIcon />Copy link</Button>
          <Button variant="ghost" size="sm" className="ml-auto"><HistoryIcon />Resource history</Button>
        </div>
      </aside>
    </div>
  )
}

export default Sheet14Block
