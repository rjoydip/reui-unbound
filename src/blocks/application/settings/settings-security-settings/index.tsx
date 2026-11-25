import { useState } from "react"

import { Badge } from "@/components/kit/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

function Card({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="bg-card overflow-hidden rounded-xl border shadow-sm">
      <div className="border-b p-4">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      {children}
    </section>
  )
}

function Row({ label, description, children, last = false }: { label: string; description?: string; children?: React.ReactNode; last?: boolean }) {
  return (
    <div className={last ? "flex items-center gap-3 px-4 py-3.5" : "flex items-center gap-3 border-b px-4 py-3.5"}>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{label}</p>
        {description ? <p className="text-muted-foreground text-sm">{description}</p> : null}
      </div>
      {children}
    </div>
  )
}

export function SettingsSecuritySettingsBlock() {
  const [twoFactor, setTwoFactor] = useState(false)
  const [singleSession, setSingleSession] = useState(false)
  const [password, setPassword] = useState(true)
  const [magicLink, setMagicLink] = useState(true)

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[672px]">
        <h1 className="text-2xl font-semibold">Security</h1>
        <p className="text-muted-foreground mt-1 text-sm">Define authentication rules and access boundaries for your workspace.</p>

        <div className="mt-6 space-y-4">
          <Card title="Session Policy" description="Configure session duration and timeout rules for your workspace.">
            <Row label="Enforce two-factor authentication" description="Require all members to enable 2FA.">
              <Switch checked={twoFactor} onCheckedChange={setTwoFactor} aria-label="Enforce two-factor authentication" />
            </Row>
            <Row label="Session timeout" description="Auto-logout after inactivity period.">
              <Select defaultValue="4 hours">
                <SelectTrigger size="sm" className="w-32"><SelectValue /></SelectTrigger>
                <SelectContent>{["1 hour", "4 hours", "8 hours", "24 hours"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
              </Select>
            </Row>
            <Row label="Single active session" description="Limit each user to one active session." last>
              <Switch checked={singleSession} onCheckedChange={setSingleSession} aria-label="Single active session" />
            </Row>
          </Card>

          <Card title="Login Methods" description="Admins can always sign in via email. Changes apply to workspace members only.">
            <Row label="Password authentication" description="Allow members to log in with a password.">
              <Switch checked={password} onCheckedChange={setPassword} aria-label="Password authentication" />
            </Row>
            <Row label="Magic link login" description="Send a one-time link via email to sign in.">
              <Switch checked={magicLink} onCheckedChange={setMagicLink} aria-label="Magic link login" />
            </Row>
            <Row label="SAML single sign-on" description="Authenticate via your identity provider." last>
              <Badge variant="focus-light" size="lg">Enterprise</Badge>
            </Row>
          </Card>

          <Card title="Access Restrictions" description="Control which plan features are available to your workspace.">
            <Row label="Member invitations" description="Who can invite new members.">
              <Badge variant="success-light" size="sm">Basic</Badge>
            </Row>
            <Row label="Domain restrictions" description="Only allow company email domains.">
              <Badge variant="secondary" size="sm">Business</Badge>
            </Row>
            <Row label="IP allowlist" description="Limit access to trusted networks." last>
              <Badge variant="warning-light" size="sm">Enterprise</Badge>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SettingsSecuritySettingsBlock
