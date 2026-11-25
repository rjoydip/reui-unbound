import { useState } from "react"
import {
  Building2Icon,
  ChevronDownIcon,
  CodeXmlIcon,
  FingerprintIcon,
  MonitorIcon,
  ScrollTextIcon,
  UserIcon,
  WebhookIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

type NavItem = { id: string; label: string; badge?: string; pro?: boolean }

const NAV: { group: string; icon: React.ComponentType<{ className?: string }>; items: NavItem[] }[] = [
  {
    group: "Account",
    icon: UserIcon,
    items: [
      { id: "authentication", label: "Authentication", badge: "Active" },
      { id: "profile", label: "Profile Details" },
      { id: "sessions", label: "Sessions" },
      { id: "notifications", label: "Notifications" },
    ],
  },
  {
    group: "Workspace",
    icon: Building2Icon,
    items: [
      { id: "organization", label: "Organization" },
      { id: "members", label: "Members" },
      { id: "billing", label: "Billing", pro: true },
      { id: "branding", label: "Branding" },
    ],
  },
  {
    group: "Developers",
    icon: CodeXmlIcon,
    items: [
      { id: "api", label: "API Keys" },
      { id: "webhooks", label: "Webhooks" },
      { id: "audit", label: "Audit Log" },
    ],
  },
]

function Row({ label, description, children, last = false }: { label: string; description?: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={cn("grid gap-3 px-5 py-4 sm:grid-cols-[1fr_260px] sm:items-start", !last && "border-b")}>
      <div>
        <p className="text-sm font-medium">{label}</p>
        {description ? <p className="text-muted-foreground text-xs">{description}</p> : null}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

function Panel({ title, description, children, footer }: { title: string; description: string; children: React.ReactNode; footer?: React.ReactNode }) {
  return (
    <section className="bg-card overflow-hidden rounded-xl border">
      <div className="border-b px-5 py-3.5">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
      {children}
      {footer ? <div className="bg-muted/30 flex justify-end gap-2 border-t px-5 py-3">{footer}</div> : null}
    </section>
  )
}

function PanelTitle({ title, badge }: { title: string; badge?: string }) {
  return (
    <div>
      <h1 className="flex items-center gap-2 text-2xl font-semibold">
        {title}
        {badge ? <Badge variant="success-light" size="lg">{badge}</Badge> : null}
      </h1>
    </div>
  )
}

export function Profile9Block() {
  const [panel, setPanel] = useState("authentication")
  const [emailSignUp, setEmailSignUp] = useState(true)
  const [passwordSignIn, setPasswordSignIn] = useState(true)
  const [requireEmail, setRequireEmail] = useState(true)
  const [restrictChanges, setRestrictChanges] = useState(false)
  const [digest, setDigest] = useState(true)
  const [security, setSecurity] = useState(true)

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[1024px]">
        <p className="text-muted-foreground text-sm">Profile Settings</p>
        <div className="mt-3 grid gap-8 lg:grid-cols-[256px_minmax(0,1fr)]">
          <nav aria-label="Settings navigation" className="space-y-4">
            {NAV.map((group) => (
              <div key={group.group}>
                <div className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium">
                  <group.icon className="size-4" />
                  {group.group}
                  <ChevronDownIcon className="text-muted-foreground ml-auto size-4" />
                </div>
                <div className="space-y-0.5">
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPanel(item.id)}
                      aria-current={panel === item.id ? "page" : undefined}
                      className={cn(
                        "flex h-8 w-full items-center gap-2 rounded-md px-3 text-left text-sm transition-colors",
                        panel === item.id ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      )}
                    >
                      {item.label}
                      {item.badge ? <Badge variant="success-light" size="sm">{item.badge}</Badge> : null}
                      {item.pro ? <Badge variant="secondary" size="sm">Pro</Badge> : null}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="space-y-5">
            {panel === "authentication" ? (
              <>
                <PanelTitle title="Authentication" badge="Active" />
                <p className="text-muted-foreground -mt-4 text-sm">Sign-up, password, and verification rules</p>
                <Panel title="Sign-In Methods" description="Choose how users create and access accounts.">
                  <Row label="Email Sign-Up" description="Allow new users to register with email.">
                    <div className="flex justify-end"><Switch checked={emailSignUp} onCheckedChange={setEmailSignUp} aria-label="Email sign-up" /></div>
                  </Row>
                  <Row label="Password Sign-In" description="Keep password login available for returning users.">
                    <div className="flex justify-end"><Switch checked={passwordSignIn} onCheckedChange={setPasswordSignIn} aria-label="Password sign-in" /></div>
                  </Row>
                  <Row label="Verification Method" description="Primary email verification experience." last>
                    <Select defaultValue="Verification Code"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Verification Code">Verification Code</SelectItem><SelectItem value="Magic Link">Magic Link</SelectItem></SelectContent></Select>
                  </Row>
                </Panel>
                <Panel title="Protection" description="Keep account changes and sessions controlled." footer={<><Button variant="outline" size="sm">Cancel</Button><Button size="sm">Save Changes</Button></>}>
                  <Row label="Require Email Address" description="Users must keep one reachable email on file.">
                    <div className="flex justify-end"><Switch checked={requireEmail} onCheckedChange={setRequireEmail} aria-label="Require email address" /></div>
                  </Row>
                  <Row label="Session Lifetime" description="Default duration for authenticated sessions.">
                    <Select defaultValue="24 Hours"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="24 Hours">24 Hours</SelectItem><SelectItem value="7 Days">7 Days</SelectItem></SelectContent></Select>
                  </Row>
                  <Row label="Restrict Changes" description="Prevent email changes after sign-up." last>
                    <div className="flex justify-end"><Switch checked={restrictChanges} onCheckedChange={setRestrictChanges} aria-label="Restrict changes" /></div>
                  </Row>
                </Panel>
              </>
            ) : null}

            {panel === "profile" ? (
              <>
                <PanelTitle title="Profile Details" />
                <Panel title="Personal Information" description="Update how your profile appears to teammates." footer={<Button size="sm">Save Changes</Button>}>
                  <Row label="Full Name"><Input defaultValue="Elena Park" aria-label="Full name" /></Row>
                  <Row label="Email"><Input defaultValue="elena@harborops.app" aria-label="Email" /></Row>
                  <Row label="Job Title"><Input defaultValue="Staff Product Lead" aria-label="Job title" /></Row>
                  <Row label="Bio" description="A short introduction." last><Input defaultValue="Keeping launches calm and teams aligned." aria-label="Bio" /></Row>
                </Panel>
              </>
            ) : null}

            {panel === "sessions" ? (
              <>
                <PanelTitle title="Sessions" />
                <Panel title="Active Sessions" description="Devices currently signed in to this account." footer={<Button variant="outline" size="sm">Sign out all other sessions</Button>}>
                  {[
                    { device: "MacBook Pro · Chrome", location: "Berlin, Germany · Current session", icon: MonitorIcon },
                    { device: "iPhone 17 · Safari", location: "Berlin, Germany · 2 hours ago", icon: FingerprintIcon },
                    { device: "Windows 11 · Edge", location: "Amsterdam, Netherlands · Yesterday", icon: MonitorIcon },
                  ].map((session, index) => (
                    <div key={session.device} className="flex items-center gap-3 border-b px-5 py-3.5 last:border-0">
                      <span className="bg-muted flex size-9 items-center justify-center rounded-md"><session.icon className="size-4" /></span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">{session.device}</p>
                        <p className="text-muted-foreground text-xs">{session.location}</p>
                      </div>
                      {index === 0 ? <Badge variant="success-light" size="sm">Current</Badge> : <Button variant="outline" size="sm">Sign out</Button>}
                    </div>
                  ))}
                </Panel>
              </>
            ) : null}

            {panel === "notifications" ? (
              <>
                <PanelTitle title="Notifications" />
                <Panel title="Email Preferences" description="Choose what lands in your inbox." footer={<Button size="sm">Save Changes</Button>}>
                  <Row label="Daily Digest" description="One summary of activity every morning.">
                    <div className="flex justify-end"><Switch checked={digest} onCheckedChange={setDigest} aria-label="Daily digest" /></div>
                  </Row>
                  <Row label="Security Alerts" description="Sign-ins and permission changes." last>
                    <div className="flex justify-end"><Switch checked={security} onCheckedChange={setSecurity} aria-label="Security alerts" /></div>
                  </Row>
                </Panel>
              </>
            ) : null}

            {panel === "organization" ? (
              <>
                <PanelTitle title="Organization" />
                <Panel title="Organization Profile" description="Shown to members and on shared pages." footer={<Button size="sm">Save Changes</Button>}>
                  <Row label="Organization Name"><Input defaultValue="Harbor Ops" aria-label="Organization name" /></Row>
                  <Row label="Primary Domain"><Input defaultValue="harborops.app" aria-label="Primary domain" /></Row>
                  <Row label="Support Email" last><Input defaultValue="support@harborops.app" aria-label="Support email" /></Row>
                </Panel>
              </>
            ) : null}

            {panel === "members" ? (
              <>
                <PanelTitle title="Members" />
                <Panel title="Workspace Members" description="People with access to this workspace." footer={<Button size="sm">Invite member</Button>}>
                  {[
                    { name: "Ava Chen", email: "ava@harborops.app", role: "Owner", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
                    { name: "Leo Grant", email: "leo@harborops.app", role: "Editor", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
                    { name: "Maya Singh", email: "maya@harborops.app", role: "Admin", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
                  ].map((member) => (
                    <div key={member.email} className="flex items-center gap-3 border-b px-5 py-3.5 last:border-0">
                      <Avatar size="sm"><AvatarImage src={member.avatar} alt="" /><AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback></Avatar>
                      <div className="min-w-0 flex-1"><p className="text-sm font-medium">{member.name}</p><p className="text-muted-foreground text-xs">{member.email}</p></div>
                      <Badge variant="secondary" size="sm">{member.role}</Badge>
                    </div>
                  ))}
                </Panel>
              </>
            ) : null}

            {panel === "billing" ? (
              <>
                <PanelTitle title="Billing" />
                <Panel title="Current Plan" description="Growth · billed monthly." footer={<><Button variant="outline" size="sm">Manage plan</Button><Button size="sm">Add card</Button></>}>
                  <Row label="Plan" description="Includes audit, automation, and workspace permissions." last><p className="text-sm font-medium">$24.00 per editor / month</p></Row>
                </Panel>
              </>
            ) : null}

            {panel === "branding" ? (
              <>
                <PanelTitle title="Branding" />
                <Panel title="Workspace Branding" description="Logo and accent used across the product." footer={<Button size="sm">Save Changes</Button>}>
                  <Row label="Logo"><div className="flex items-center gap-2"><span className="size-9 rounded-md bg-gradient-to-br from-sky-600 to-cyan-400" /><Button variant="outline" size="sm">Upload</Button></div></Row>
                  <Row label="Accent color" last><div className="flex justify-end gap-2">{["bg-zinc-500", "bg-blue-500", "bg-emerald-500", "bg-pink-500"].map((color, index) => <span key={color} className={cn("size-6 rounded-full", color, index === 1 && "ring-2 ring-blue-500 ring-offset-2 ring-offset-card")} />)}</div></Row>
                </Panel>
              </>
            ) : null}

            {panel === "api" ? (
              <>
                <PanelTitle title="API Keys" />
                <Panel title="Keys" description="Server and browser credentials." footer={<Button size="sm">Create key</Button>}>
                  {[
                    ["Production", "nstr_live_sk_••••7f2a", "Secret"],
                    ["Web checkout", "nstr_live_pk_••••c41d", "Publishable"],
                  ].map(([name, key, type]) => (
                    <div key={name} className="flex items-center gap-3 border-b px-5 py-3.5 last:border-0">
                      <div className="min-w-0 flex-1"><p className="text-sm font-medium">{name}</p><p className="text-muted-foreground font-mono text-xs">{key}</p></div>
                      <Badge variant={type === "Secret" ? "warning-light" : "success-light"} size="sm">{type}</Badge>
                    </div>
                  ))}
                </Panel>
              </>
            ) : null}

            {panel === "webhooks" ? (
              <>
                <PanelTitle title="Webhooks" />
                <Panel title="Endpoints" description="Receive events on your own servers." footer={<Button size="sm">Add endpoint</Button>}>
                  {[
                    ["https://api.harborops.app/hooks/billing", "invoice.paid"],
                    ["https://api.harborops.app/hooks/members", "member.invited"],
                  ].map(([url, event]) => (
                    <div key={url} className="flex items-center gap-3 border-b px-5 py-3.5 last:border-0">
                      <WebhookIcon className="text-muted-foreground size-4" />
                      <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{url}</p><p className="text-muted-foreground text-xs">{event}</p></div>
                      <Badge variant="success-light" size="sm">Active</Badge>
                    </div>
                  ))}
                </Panel>
              </>
            ) : null}

            {panel === "audit" ? (
              <>
                <PanelTitle title="Audit Log" />
                <Panel title="Recent Activity" description="Security-relevant events in this workspace.">
                  {[
                    ["Elena Park", "updated authentication policy", "2 min ago"],
                    ["Ava Chen", "invited maya@harborops.app", "1 hour ago"],
                    ["System", "rotated API key for Production", "Yesterday"],
                  ].map(([actor, action, time]) => (
                    <div key={`${actor}-${action}`} className="flex items-center gap-3 border-b px-5 py-3.5 last:border-0">
                      <ScrollTextIcon className="text-muted-foreground size-4" />
                      <div className="min-w-0 flex-1"><p className="text-sm"><span className="font-medium">{actor}</span> {action}</p><p className="text-muted-foreground text-xs">{time}</p></div>
                    </div>
                  ))}
                </Panel>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile9Block
