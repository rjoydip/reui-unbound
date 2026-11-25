import { useState } from "react"
import {
  BellIcon,
  CreditCardIcon,
  ShieldIcon,
  TriangleAlertIcon,
  UploadIcon,
  UserRoundIcon,
  XIcon,
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
import { Textarea } from "@/components/ui/textarea"
import { cn } from "cn"

const TABS = [
  { id: "profile", label: "My Profile", icon: UserRoundIcon },
  { id: "security", label: "Security", icon: ShieldIcon },
  { id: "notifications", label: "Notifications", icon: BellIcon },
  { id: "billing", label: "Billing", icon: CreditCardIcon },
]

function Row({ label, description, children, last = false }: { label: string; description?: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={cn("grid gap-3 px-4 py-3.5 sm:grid-cols-[1fr_320px] sm:items-start", !last && "border-b")}>
      <div>
        <p className="flex items-center gap-1.5 text-sm font-medium">
          {label}
          {label === "Email address" ? <Badge variant="success-light" size="sm">Verified</Badge> : null}
        </p>
        {description ? <p className="text-muted-foreground text-sm">{description}</p> : null}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

export function SettingsAccountSettingsBlock() {
  const [tab, setTab] = useState("profile")
  const [alertOpen, setAlertOpen] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)
  const [digest, setDigest] = useState(true)
  const [plan, setPlan] = useState("Pro")

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[896px]">
        <h1 className="text-2xl font-semibold">Account Settings</h1>
        <p className="text-muted-foreground mt-1 text-sm">Update your profile, access, notifications, and billing preferences.</p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[168px_minmax(0,1fr)]">
          <nav aria-label="Account settings" className="flex gap-1 overflow-x-auto lg:flex-col">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                aria-current={tab === item.id ? "page" : undefined}
                className={cn(
                  "flex h-9 items-center gap-2.5 rounded-md px-3 text-sm font-medium whitespace-nowrap transition-colors",
                  tab === item.id ? "bg-muted" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="space-y-4">
            {alertOpen ? (
              <div className="border-warning/30 bg-warning/10 flex flex-wrap items-center gap-3 rounded-lg border px-4 py-3">
                <TriangleAlertIcon className="text-warning-foreground size-4" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">Complete your profile.</p>
                  <p className="text-muted-foreground text-sm">Add a photo and keep your role and timezone current.</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setAlertOpen(false)}>Dismiss</Button>
                <Button size="sm">Update</Button>
              </div>
            ) : null}

            {tab === "profile" ? (
              <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
                <div className="border-b p-4">
                  <h2 className="text-sm font-semibold">My profile</h2>
                  <p className="text-muted-foreground text-xs">Public account details</p>
                </div>
                <Row label="Photo" description="Shown in comments and mentions.">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" alt="" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm"><UploadIcon />Change</Button>
                    <Button variant="outline" size="sm"><XIcon />Remove</Button>
                  </div>
                </Row>
                <Row label="Full name" description="Used across the workspace."><Input defaultValue="Alex Morgan" aria-label="Full name" /></Row>
                <Row label="Email address" description="Primary sign-in email."><Input defaultValue="alex@acme.dev" aria-label="Email address" /></Row>
                <Row label="Username" description="Visible in mentions and links."><Input defaultValue="@ alexmorgan" aria-label="Username" /></Row>
                <Row label="Profile details" description="Public details shared across the workspace.">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-xs font-medium">Role</p>
                      <Select defaultValue="Engineering Lead"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Engineering Lead">Engineering Lead</SelectItem><SelectItem value="Product Manager">Product Manager</SelectItem></SelectContent></Select>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium">Time zone</p>
                      <Select defaultValue="UTC-8 (Pacific Time)"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="UTC-8 (Pacific Time)">UTC-8 (Pacific Time)</SelectItem><SelectItem value="UTC+1 (Central European Time)">UTC+1 (Central European Time)</SelectItem></SelectContent></Select>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium">Website</p>
                      <Input defaultValue="https:// alexmorgan.dev" aria-label="Website" />
                    </div>
                  </div>
                </Row>
                <Row label="Bio" description="Short profile summary." last>
                  <Textarea rows={3} defaultValue="Building developer tools at Acme. Previously platform engineering." aria-label="Bio" />
                </Row>
                <div className="flex justify-end gap-2 border-t p-3">
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button size="sm">Save changes</Button>
                </div>
              </div>
            ) : null}

            {tab === "security" ? (
              <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
                <div className="border-b p-4"><h2 className="text-sm font-semibold">Security</h2><p className="text-muted-foreground text-xs">Protect your account and sessions.</p></div>
                <Row label="Two-step verification" description="Require a code from your authenticator app.">
                  <div className="flex justify-end"><Switch checked={twoFactor} onCheckedChange={setTwoFactor} aria-label="Two-step verification" /></div>
                </Row>
                <Row label="Active sessions" description="Devices currently signed in.">
                  <div className="space-y-1.5 text-sm">
                    <p>MacBook Pro · Berlin · Current</p>
                    <p className="text-muted-foreground text-xs">iPhone 17 · Berlin · 2 hours ago</p>
                  </div>
                </Row>
                <Row label="Delete account" description="Permanently remove your account and data." last>
                  <div className="flex justify-end"><Button variant="destructive" size="sm">Delete account</Button></div>
                </Row>
              </div>
            ) : null}

            {tab === "notifications" ? (
              <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
                <div className="border-b p-4"><h2 className="text-sm font-semibold">Notifications</h2><p className="text-muted-foreground text-xs">Choose how updates reach you.</p></div>
                <Row label="Weekly digest" description="One summary of project activity every Monday.">
                  <div className="flex justify-end"><Switch checked={digest} onCheckedChange={setDigest} aria-label="Weekly digest" /></div>
                </Row>
                <Row label="Mentions" description="Notify me when someone mentions my name.">
                  <div className="flex justify-end"><Switch defaultChecked aria-label="Mentions" /></div>
                </Row>
                <Row label="Product updates" description="Occasional notes about new features." last>
                  <div className="flex justify-end"><Switch aria-label="Product updates" /></div>
                </Row>
              </div>
            ) : null}

            {tab === "billing" ? (
              <div className="space-y-4">
                <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
                  <div className="border-b p-4"><h2 className="text-sm font-semibold">Billing</h2><p className="text-muted-foreground text-xs">Manage your plan and payment details.</p></div>
                  <div className="grid gap-3 p-4 sm:grid-cols-3">
                    {[
                      { name: "Free", price: "$0", note: "For personal projects" },
                      { name: "Pro", price: "$24", note: "For growing teams" },
                      { name: "Enterprise", price: "Custom", note: "Advanced controls" },
                    ].map((option) => (
                      <button
                        key={option.name}
                        type="button"
                        onClick={() => setPlan(option.name)}
                        className={cn(
                          "rounded-lg border p-3 text-left",
                          plan === option.name ? "border-foreground/30 bg-muted/40" : "hover:bg-muted/30"
                        )}
                      >
                        <p className="flex items-center gap-2 text-sm font-medium">
                          {option.name}
                          {plan === option.name ? <Badge variant="success-light" size="sm">Current</Badge> : null}
                        </p>
                        <p className="mt-1 text-xl font-semibold">{option.price}</p>
                        <p className="text-muted-foreground text-xs">{option.note}</p>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end gap-2 border-t p-3">
                    <Button variant="outline" size="sm">Manage payment</Button>
                    <Button size="sm">Change plan</Button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsAccountSettingsBlock
