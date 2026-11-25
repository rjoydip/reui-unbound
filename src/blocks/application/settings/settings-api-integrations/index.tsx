import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon, CopyIcon, PencilIcon, SlidersHorizontalIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const INTEGRATIONS = [
  { name: "AI Summarizer", description: "Gemini · Meeting transcript distillation and action extraction", key: "gem_live_r1m5q8v3p9x7n2c4", calls: "4,100" },
  { name: "Async Reviews", description: "Loom · Code review recordings and feedback collection", key: "lom_live_x5n2m8q4v1r9p7c3", calls: "2,900" },
  { name: "Community Sync", description: "Discord · Community reports and moderation escalations", key: "dsc_live_m3q9v2k7r5n1x8c4", calls: "6,400" },
  { name: "Content Generator", description: "Gemini · Draft generation and content summarization", key: "gem_live_k4r9m2q7v1p8x3n5", calls: "8,200" },
  { name: "DB Replication", description: "Neon · Cross-region read replica synchronization", key: "neo_live_p7x3m1q9v4r2n8c6", calls: "22,100", on: true },
  { name: "Docs Webhook", description: "Mintlify · Documentation deploy and page-view events", key: "mnt_live_v2q8m5r1p9x4n7c3", calls: "4,300" },
  { name: "Edge Cache Sync", description: "Convex · State snapshots for frontend refreshes", key: "cvx_live_t1p6m9q3r7v2x4c8", calls: "15,400" },
  { name: "Incident Bot", description: "Discord · Automated incident threads and status page sync", key: "dsc_live_r6n1m4q9v7p2x8c5", calls: "3,200", on: true },
  { name: "Invoice Relay", description: "Stripe · Automated invoice generation and delivery tracking", key: "stp_live_v3m8q1r6p9x2n4c7", calls: "7,800", on: true },
  { name: "Meeting Webhooks", description: "Zoom · Recording ready and host events", key: "zom_live_q5n8r2m4v7c1p9d3", calls: "11,300", on: true },
]

export function SettingsApiIntegrationsBlock() {
  const [pauseAll, setPauseAll] = useState(false)
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(INTEGRATIONS.map((integration) => [integration.name, Boolean(integration.on)]))
  )

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[1152px]">
        <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
          <div className="flex flex-wrap items-center gap-3 border-b p-4">
            <div className="min-w-0">
              <h1 className="text-sm font-semibold">API Integrations</h1>
              <p className="text-muted-foreground text-xs">Oversee endpoints, key rotation, and traffic availability.</p>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <label className="text-muted-foreground flex items-center gap-2 text-xs">
                Pause all
                <Switch checked={pauseAll} onCheckedChange={setPauseAll} aria-label="Pause all" />
              </label>
              <Button variant="outline" size="sm"><SlidersHorizontalIcon />Positions</Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10"><Checkbox aria-label="Select all integrations" /></TableHead>
                <TableHead>Integration ⇅</TableHead>
                <TableHead>API Key ⇅</TableHead>
                <TableHead>Daily Calls ⇅</TableHead>
                <TableHead>Status ⇅</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {INTEGRATIONS.map((integration) => (
                <TableRow key={integration.name}>
                  <TableCell><Checkbox aria-label={`Select ${integration.name}`} /></TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2.5">
                      <span className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-md text-xs font-bold">
                        {integration.name.slice(0, 1)}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{integration.name}</p>
                        <p className="text-muted-foreground text-xs">{integration.description}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1.5">
                      <Badge variant="secondary" size="sm" className="font-mono">{integration.key}</Badge>
                      <Button variant="ghost" size="icon-xs" aria-label={`Copy key for ${integration.name}`}><CopyIcon /></Button>
                    </span>
                  </TableCell>
                  <TableCell className="text-sm">{integration.calls}</TableCell>
                  <TableCell>
                    <Switch
                      checked={!pauseAll && enabled[integration.name]}
                      disabled={pauseAll}
                      onCheckedChange={(value) => setEnabled((current) => ({ ...current, [integration.name]: value }))}
                      aria-label={`Enable ${integration.name}`}
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon-sm" aria-label={`Edit ${integration.name}`}><PencilIcon /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex flex-wrap items-center gap-2 border-t p-3 text-xs">
            <span className="text-muted-foreground">Rows per page</span>
            <Select defaultValue="10">
              <SelectTrigger size="sm" className="w-16"><SelectValue /></SelectTrigger>
              <SelectContent>{["10", "25", "50"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
            </Select>
            <span className="text-muted-foreground ml-auto">1 - 10 of 31</span>
            <Button variant="ghost" size="icon-xs" aria-label="Previous page"><ChevronLeftIcon /></Button>
            {[1, 2, 3, 4].map((page) => (
              <span key={page} className={page === 1 ? "bg-muted flex size-6 items-center justify-center rounded" : "flex size-6 items-center justify-center"}>{page}</span>
            ))}
            <Button variant="ghost" size="icon-xs" aria-label="Next page"><ChevronRightIcon /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsApiIntegrationsBlock
