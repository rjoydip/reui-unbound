import { useState } from "react"
import { CalendarClockIcon, TerminalIcon, XIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "cn"

const PRESETS = ["Every 5 min", "Hourly", "Daily", "Weekdays", "Weekly", "Monthly"]

export function SheetNewCronJobBlock() {
  const [preset, setPreset] = useState("Hourly")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <div>
            <p className="text-sm font-semibold">New Job</p>
            <p className="text-muted-foreground text-xs">Schedule a command on Harbor Ops.</p>
          </div>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>

        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
          <div className="space-y-1">
            <label htmlFor="job-name" className="text-sm font-medium">Name</label>
            <Input id="job-name" defaultValue="Nightly ledger reconciliation" />
          </div>
          <div className="space-y-1">
            <label htmlFor="job-command" className="text-sm font-medium">Command</label>
            <div className="flex items-center rounded-lg border px-2">
              <TerminalIcon className="text-muted-foreground size-4" />
              <input id="job-command" defaultValue="harbor run payments-api -- jobs:sync" className="h-8 min-w-0 flex-1 bg-transparent px-2 font-mono text-xs outline-none" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Schedule</p>
            <div className="flex overflow-hidden rounded-lg border">
              {PRESETS.map((item) => (
                <button key={item} type="button" onClick={() => setPreset(item)} className={cn("flex-1 border-r px-2 py-1.5 text-xs last:border-r-0", preset === item ? "bg-muted font-medium" : "hover:bg-muted/40")}>{item}</button>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Cron Expression</p>
            <div className="flex items-center rounded-lg border px-2">
              <CalendarClockIcon className="text-muted-foreground size-4" />
              <input defaultValue="0 * * * *" aria-label="Cron expression" className="h-8 min-w-0 flex-1 bg-transparent px-2 font-mono text-xs outline-none" />
            </div>
            <p className="text-muted-foreground text-xs">Hourly at :00 UTC</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Timezone</p>
            <Select defaultValue="UTC"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent>{["UTC", "Europe/Berlin", "Asia/Kolkata"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">Next 3 Runs</p>
            {["Tue, Sep 29, 15:00 UTC|in 40m", "Tue, Sep 29, 16:00 UTC|in 1h 40m", "Tue, Sep 29, 17:00 UTC|in 2h 40m"].map((row) => {
              const [time, eta] = row.split("|")
              return <div key={time} className="flex justify-between text-sm"><span>{time}</span><span className="text-muted-foreground text-xs">{eta}</span></div>
            })}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1"><p className="text-sm font-medium">Service</p><Select defaultValue="payments-api"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="payments-api">payments-api</SelectItem></SelectContent></Select></div>
            <div className="space-y-1"><p className="text-sm font-medium">Cluster</p><Select defaultValue="prod-us-east-1"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="prod-us-east-1">prod-us-east-1</SelectItem></SelectContent></Select></div>
            <div className="space-y-1"><p className="text-sm font-medium">Environment</p><Select defaultValue="Production"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Production">Production</SelectItem></SelectContent></Select></div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Owner</p>
              <Select defaultValue="Nina Santos"><SelectTrigger className="w-full"><Avatar size="sm" className="size-4"><AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" alt="" /><AvatarFallback>NS</AvatarFallback></Avatar><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Nina Santos">Nina Santos</SelectItem></SelectContent></Select>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t p-3">
          <p className="text-muted-foreground text-xs">First run in 40m · 15:00 UTC</p>
          <Button variant="ghost" size="sm" className="ml-auto">Cancel</Button>
          <Button size="sm">Create Job</Button>
        </div>
      </aside>
    </div>
  )
}

export default SheetNewCronJobBlock
