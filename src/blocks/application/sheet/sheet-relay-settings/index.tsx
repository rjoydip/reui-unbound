import { InfoIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

function Row({ label, hint, children }: { label: string; hint?: boolean; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_280px] items-center gap-3 py-2">
      <p className="flex items-center gap-1.5 text-sm">
        {label}
        {hint ? <InfoIcon className="text-muted-foreground size-3.5" /> : null}
      </p>
      <div>{children}</div>
    </div>
  )
}

export function SheetRelaySettingsBlock() {
  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[520px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <span className="text-sm font-semibold">Notification Relay</span>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-2">
          <p className="bg-muted/40 -mx-4 px-4 py-1.5 text-xs font-medium">Delivery</p>
          <Row label="Panel Label"><Input defaultValue="Launch desk relay" aria-label="Panel label" /></Row>
          <Row label="Quiet Window" hint>
            <div className="flex items-center gap-1.5">
              <Select defaultValue="18:30"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent>{["18:00", "18:30", "19:00"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select>
              <span className="text-muted-foreground text-xs">to</span>
              <Select defaultValue="08:00"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent>{["07:30", "08:00", "09:00"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select>
            </div>
          </Row>
          <Row label="Region Clock"><Select defaultValue="Asia/Tashkent"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent>{["Asia/Tashkent", "UTC", "Europe/Berlin"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select></Row>
          <Row label="Delivery Channel"><Select defaultValue="Workspace inbox"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent>{["Workspace inbox", "Email", "Slack"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select></Row>
          <Row label="Digest Cadence"><Select defaultValue="Twice daily"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent>{["Once daily", "Twice daily", "Hourly"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select></Row>
          <Row label="Workdays Only"><div className="flex justify-end"><Switch defaultChecked aria-label="Workdays only" /></div></Row>

          <p className="bg-muted/40 -mx-4 mt-3 px-4 py-1.5 text-xs font-medium">Routing</p>
          <Row label="Digest Route"><Select defaultValue="Ops brief"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent>{["Ops brief", "Launch digest", "Leadership"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select></Row>
          <Row label="Priority Escalation" hint><div className="flex justify-end"><Switch defaultChecked aria-label="Priority escalation" /></div></Row>
          <Row label="Escalation Delay"><Select defaultValue="10 minutes"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent>{["5 minutes", "10 minutes", "30 minutes"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select></Row>
          <Row label="Retry Failed Sends"><div className="flex justify-end"><Switch defaultChecked aria-label="Retry failed sends" /></div></Row>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t p-3">
          <Button variant="outline">Reset</Button>
          <Button>Save Settings</Button>
        </div>
      </aside>
    </div>
  )
}

export default SheetRelaySettingsBlock
