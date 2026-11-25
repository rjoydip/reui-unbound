import { useState } from "react"
import {
  CreditCardIcon,
  EllipsisIcon,
  PlusIcon,
  RefreshCwIcon,
  ShieldIcon,
  TriangleAlertIcon,
  UsersIcon,
  WebhookIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"

const ENDPOINTS = [
  { name: "Billing Pipeline", url: "https://events.acme.dev/webhooks/billing", status: "Delivering", healthy: true, on: true, icon: CreditCardIcon },
  { name: "Customer Ledger", url: "https://ingest.acme.dev/webhooks/customers", status: "Delivering", healthy: true, warning: true, on: true, icon: UsersIcon },
  { name: "Subscription Orchestrator", url: "https://ops.acme.dev/webhooks/subscriptions", status: "Retrying", healthy: false, warning: true, on: true, icon: RefreshCwIcon },
  { name: "Finance Reconciliation", url: "https://ledger.acme.dev/webhooks/payouts", status: "Paused", healthy: true, warning: true, on: false, icon: WebhookIcon },
  { name: "Risk Intake", url: "https://risk.acme.dev/webhooks/disputes", status: "Delivering", healthy: true, warning: true, on: true, icon: ShieldIcon },
]

export function Settings8Block() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(ENDPOINTS.map((endpoint) => [endpoint.name, endpoint.on]))
  )

  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-full max-w-[768px] overflow-hidden rounded-xl border shadow-sm">
        <div className="flex flex-wrap items-start gap-3 border-b p-4">
          <div className="min-w-0">
            <h1 className="text-sm font-semibold">Webhook Endpoints</h1>
            <p className="text-muted-foreground text-xs">Routes and status</p>
          </div>
          <Button size="sm" className="ml-auto"><PlusIcon />Add Endpoint</Button>
        </div>

        {ENDPOINTS.map((endpoint, index) => (
          <div key={endpoint.name} className={index < ENDPOINTS.length - 1 ? "flex items-center gap-3 border-b px-4 py-3.5" : "flex items-center gap-3 px-4 py-3.5"}>
            <span className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md"><endpoint.icon className="size-4" /></span>
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-center gap-2 text-sm font-medium">
                {endpoint.name}
                {endpoint.healthy ? <span className="size-2 rounded-full border border-emerald-500" /> : <span className="text-destructive">⊗</span>}
                {endpoint.warning ? <TriangleAlertIcon className="size-3.5 text-amber-500" /> : null}
                <Badge
                  variant={endpoint.status === "Delivering" ? "success-light" : endpoint.status === "Retrying" ? "warning-light" : "secondary"}
                  size="sm"
                >
                  {endpoint.status}
                </Badge>
              </p>
              <p className="text-muted-foreground font-mono text-xs">{endpoint.url}</p>
            </div>
            <Switch
              checked={enabled[endpoint.name]}
              onCheckedChange={(value) => setEnabled((current) => ({ ...current, [endpoint.name]: value }))}
              aria-label={`Enable ${endpoint.name}`}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label={`Actions for ${endpoint.name}`}><EllipsisIcon /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem>Copy URL</DropdownMenuItem>
                <DropdownMenuItem>Rotate secret</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Remove endpoint</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Settings8Block
