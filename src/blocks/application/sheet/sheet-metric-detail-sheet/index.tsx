import { BellIcon, CopyIcon, InfoIcon, TargetIcon, XIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"

const OWNERS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
]

export function SheetMetricDetailSheetBlock() {
  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[484px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs"><TargetIcon className="size-3.5" />MET-609 <CopyIcon className="size-3" /></span>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="border-b p-4">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">Activation rate</h1>
              <Badge variant="success-light" size="sm" className="ml-auto">On track</Badge>
            </div>
            <p className="text-muted-foreground mt-1 text-sm">801 of 1,284 workspaces activated in 28 days.</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-3xl font-semibold">62.4%</span>
              <Badge variant="success-light" size="sm">+3.1 pts</Badge>
              <span className="text-muted-foreground ml-auto text-xs">vs 59.3% prior 28 days</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="bg-muted relative h-1.5 flex-1 overflow-hidden rounded-full">
                <div className="h-full w-[89%] rounded-full bg-emerald-500" />
                <span className="bg-muted-foreground/40 absolute top-0 right-0 h-full w-[11%]" />
              </div>
              <span className="text-muted-foreground text-xs">Target 70%</span>
              <span className="text-muted-foreground text-xs">89% ready</span>
            </div>
            <p className="text-muted-foreground mt-2 text-xs">801 of 1,284 new workspaces activated</p>
          </div>

          <div className="border-b p-4">
            <p className="text-muted-foreground mb-2 text-xs uppercase">Definition</p>
            <div className="space-y-2 text-sm">
              {[
                ["Activation event", "template_applied"],
                ["Source feature", "Template gallery (FEA-118)"],
                ["Segment", "Trial workspaces over 20 seats"],
                ["Window", "Last 28 days"],
                ["Definition", "activated / new workspaces"],
                ["Refreshed", "Hourly · 2h ago"],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[130px_1fr] gap-3">
                  <span className="text-muted-foreground">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b p-4">
            <p className="text-muted-foreground mb-2 text-xs uppercase">Owners</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {OWNERS.map((src) => (
                  <Avatar key={src} size="sm" className="size-6 ring-2 ring-card">
                    <AvatarImage src={src} alt="" />
                    <AvatarFallback>OW</AvatarFallback>
                  </Avatar>
                ))}
                <span className="bg-muted text-muted-foreground flex size-6 items-center justify-center rounded-full text-[10px] ring-2 ring-card">IV</span>
              </div>
              <span className="text-muted-foreground ml-auto text-xs">Mira Stone · leads</span>
            </div>
          </div>

          <div className="border-b p-4">
            <p className="text-muted-foreground mb-2 text-xs uppercase">Alert rule</p>
            <div className="flex items-start gap-2">
              <BellIcon className="mt-0.5 size-4 text-amber-500" />
              <div>
                <p className="text-sm font-medium">Activation drop</p>
                <p className="text-muted-foreground text-xs">Fires below 55% · 2 day window</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs"><Avatar size="sm" className="size-4"><AvatarImage src={OWNERS[2]} alt="" /><AvatarFallback>SQ</AvatarFallback></Avatar>Sana Qureshi</p>
              </div>
              <Badge variant="success-light" size="sm" className="ml-auto">Armed</Badge>
            </div>
          </div>

          <div className="p-4">
            <p className="text-muted-foreground mb-2 text-xs uppercase">Readout</p>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground flex items-center gap-1.5">Decision <InfoIcon className="size-3.5" /></span>
              <span>Keep rollout at 50%</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default SheetMetricDetailSheetBlock
