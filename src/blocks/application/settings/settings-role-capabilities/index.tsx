import { useState } from "react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const PERMISSIONS = [
  { key: "workspace", title: "Workspace Settings", description: "Review workspace details, team defaults, and operational preferences.", on: true },
  { key: "billing", title: "Billing Management", description: "Access plan details, invoices, and subscription adjustments." },
  { key: "integrations", title: "Integration Setup", description: "Configure apps, credentials, and automation entry points.", on: true },
  { key: "permissions", title: "Permissions Control", description: "Grant, revoke, and review access scopes for collaborators." },
  { key: "maps", title: "Map Creation", description: "Create new workspace maps and maintain location structure." },
  { key: "export", title: "Data Export", description: "Download structured workspace reports for analysis and audits.", on: true },
  { key: "roles", title: "User Roles", description: "Edit role assignments and keep team responsibility lines clear.", on: true },
  { key: "security", title: "Security Settings", description: "Adjust workspace protection controls and policy requirements.", on: true },
  { key: "insights", title: "Insights Access", description: "View performance dashboards, usage trends, and reporting panels." },
  { key: "merchant", title: "Merchant List", description: "Maintain merchant records and workspace-linked account mappings." },
]

export function SettingsRoleCapabilitiesBlock() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(PERMISSIONS.map((permission) => [permission.key, Boolean(permission.on)]))
  )

  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-full max-w-[800px] overflow-hidden rounded-xl border shadow-sm">
        <div className="flex flex-wrap items-start gap-3 border-b p-4">
          <div className="min-w-0">
            <h1 className="text-sm font-semibold">Role Permissions for Project Manager</h1>
            <p className="text-muted-foreground mt-1 text-sm">Control the workspace capabilities this role can manage.</p>
          </div>
          <Button size="sm" className="ml-auto gap-1.5">
            Permission
            <Badge variant="success" size="sm">New</Badge>
          </Button>
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-2">
          {PERMISSIONS.map((permission) => (
            <div key={permission.key} className="flex items-start gap-3 rounded-lg border p-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{permission.title}</p>
                <p className="text-muted-foreground mt-1 text-sm">{permission.description}</p>
              </div>
              <Switch
                checked={enabled[permission.key]}
                onCheckedChange={(value) => setEnabled((current) => ({ ...current, [permission.key]: value }))}
                aria-label={permission.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SettingsRoleCapabilitiesBlock
