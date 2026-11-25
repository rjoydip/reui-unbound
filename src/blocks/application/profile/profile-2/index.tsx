import { useState } from "react"
import {
  BellIcon,
  Building2Icon,
  CheckIcon,
  InfoIcon,
  PlusIcon,
  PuzzleIcon,
  ShieldIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
  XIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

const ACCENTS = ["bg-zinc-500", "bg-blue-500", "bg-emerald-500", "bg-pink-500", "bg-orange-500", "bg-violet-500"]

const MEMBERS = [
  { name: "Ava Chen", email: "ava@harborops.app", role: "Owner", title: "Product · Leadership", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { name: "Leo Grant", email: "leo@harborops.app", role: "Member", title: "Engineering · Platform", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Maya Singh", email: "maya@harborops.app", role: "Admin", title: "Finance · Ops", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
  { name: "Elena Park", email: "elena@harborops.app", role: "Editor", title: "Design · Systems", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80" },
]

function Row({ label, description, children, last = false }: { label: string; description?: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={cn("grid gap-3 px-5 py-4 sm:grid-cols-[1fr_360px] sm:items-start", !last && "border-b")}>
      <div>
        <p className="text-sm font-medium">{label}</p>
        {description ? <p className="text-muted-foreground text-xs">{description}</p> : null}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("bg-card overflow-hidden rounded-lg border", className)}>{children}</div>
}

function SectionTitle({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
      {action}
    </div>
  )
}

const PERMISSIONS = [
  { group: "Workspace access", description: "Core admin actions for setup, members, and connected tools.", rows: [
    ["Edit workspace settings", true, true, false],
    ["Invite and remove members", true, true, false],
    ["Manage integrations", true, true, false],
  ] },
  { group: "Approval controls", description: "Review coverage for routing, billing, and security changes.", rows: [
    ["Approve billing changes", true, false, false],
    ["Approve security policy", true, true, false],
    ["Route review requests", true, true, true],
  ] },
]

function PermissionMatrix() {
  return (
    <div className="space-y-5">
      {PERMISSIONS.map((group) => (
        <Card key={group.group}>
          <div className="border-b px-5 py-3.5">
            <p className="text-sm font-medium">{group.group}</p>
            <p className="text-muted-foreground text-xs">{group.description}</p>
          </div>
          <div className="text-muted-foreground grid grid-cols-[1fr_90px_90px_90px] gap-2 border-b px-5 py-2 text-xs">
            <span>Capability</span><span>Owner</span><span>Admin</span><span>Editor</span>
          </div>
          {group.rows.map(([label, owner, admin, editor]) => (
            <div key={String(label)} className="grid grid-cols-[1fr_90px_90px_90px] items-center gap-2 border-b px-5 py-3 text-sm last:border-0">
              <span>{label}</span>
              {[owner, admin, editor].map((checked, index) => (
                <Checkbox key={index} defaultChecked={Boolean(checked)} aria-label={`${label} level ${index}`} />
              ))}
            </div>
          ))}
        </Card>
      ))}
    </div>
  )
}

export function Profile2Block() {
  const [tab, setTab] = useState("general")
  const [accent, setAccent] = useState(2)
  const [domains, setDomains] = useState(["harborops.app", "clients.harborops.app", "partnermail.co"])
  const [reviewAlert, setReviewAlert] = useState(true)
  const [quietWeekends, setQuietWeekends] = useState(true)
  const [digestContent, setDigestContent] = useState<string[]>(["Approval Activity", "Member Access Changes"])
  const [access, setAccess] = useState<string[]>(["Approvals", "Reports"])

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[888px]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Admin Settings</h1>
            <p className="text-muted-foreground mt-1 text-sm">Manage your profile, workspace defaults, access, and connected tools.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Update</Button>
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="mt-6 gap-0">
          <TabsList variant="line" className="h-10 gap-4 border-b">
            {[
              { id: "general", label: "General", icon: Building2Icon },
              { id: "profile", label: "Profile", icon: UserIcon },
              { id: "members", label: "Members", icon: UsersIcon },
              { id: "permissions", label: "Permissions", icon: ShieldIcon },
              { id: "notifications", label: "Notifications", icon: BellIcon },
              { id: "integrations", label: "Integrations", icon: PuzzleIcon },
            ].map((item) => (
              <TabsTrigger key={item.id} value={item.id} className="gap-1.5 px-0.5">
                <item.icon className="size-4" />
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="general" className="mt-8 space-y-8">
            <div className="space-y-3">
              <SectionTitle title="Workspace Basics" description="Keep your workspace identity and invite defaults tidy." />
              <Card>
                <Row label="Workspace Name" description="Used in shared pages and invites.">
                  <Input defaultValue="Harbor Ops" aria-label="Workspace name" />
                  <p className="text-muted-foreground mt-1.5 text-xs">Appears in invite flows and the workspace switcher.</p>
                </Row>
                <Row label="Workspace Domain" description="Keep the public URL short and clear.">
                  <div className="flex items-center gap-2">
                    <Badge variant="success-light" size="sm">Connected</Badge>
                  </div>
                  <div className="mt-1 flex items-center rounded-lg border px-3">
                    <span className="text-muted-foreground text-sm">workspace.de/</span>
                    <input defaultValue="harbor-ops" aria-label="Workspace domain" className="h-8 min-w-0 flex-1 bg-transparent text-sm outline-none" />
                  </div>
                  <p className="text-muted-foreground mt-1.5 text-xs">New invite and share links will use this slug.</p>
                </Row>
                <Row label="Invite Domains" description="Allow signups from trusted company domains.">
                  <div className="flex flex-wrap gap-1.5">
                    {domains.map((domain) => (
                      <Badge key={domain} variant="secondary" size="lg" className="gap-1">
                        {domain}
                        <button type="button" aria-label={`Remove ${domain}`} onClick={() => setDomains((current) => current.filter((item) => item !== domain))}>
                          <XIcon className="size-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="mt-2"><PlusIcon />Add domain</Button>
                  <p className="text-muted-foreground mt-2 text-xs">Only trusted company domains are auto-approved for invites.</p>
                </Row>
                <Row label="Accent Color" description="Use one color for key status and links." last>
                  <div className="flex items-center justify-end gap-2">
                    {ACCENTS.map((color, index) => (
                      <button key={color} type="button" aria-label={`Accent ${index + 1}`} onClick={() => setAccent(index)} className={cn("flex size-6 items-center justify-center rounded-full", accent === index && "ring-2 ring-emerald-500 ring-offset-2 ring-offset-card")}>
                        <span className={cn("size-5 rounded-full", color)} />
                      </button>
                    ))}
                  </div>
                </Row>
              </Card>
            </div>

            <div className="space-y-3">
              <SectionTitle title="Regional Preferences" description="Choose how dates, language, and time are displayed." />
              <Card>
                <Row label="Language And Timezone" description="Keep the workspace readable for the whole team.">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-xs font-medium">Language</p>
                      <Select defaultValue="English"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="English">English</SelectItem><SelectItem value="Deutsch">Deutsch</SelectItem></SelectContent></Select>
                      <p className="text-muted-foreground text-xs">Sets shared UI copy for this workspace.</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium">Timezone</p>
                      <Select defaultValue="(GMT+1) Berlin"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="(GMT+1) Berlin">(GMT+1) Berlin</SelectItem><SelectItem value="(GMT-5) New York">(GMT-5) New York</SelectItem></SelectContent></Select>
                      <p className="text-muted-foreground text-xs">Used in summaries, reviews, and scheduled digests.</p>
                    </div>
                  </div>
                </Row>
                <Row label="Week Start" description="Match your planning cadence.">
                  <Select defaultValue="Monday"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Monday">Monday</SelectItem><SelectItem value="Sunday">Sunday</SelectItem></SelectContent></Select>
                </Row>
                <Row label="Date Format" description="Keep reports and summaries consistent." last>
                  <Select defaultValue="MM/DD/YYYY"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem><SelectItem value="DD.MM.YYYY">DD.MM.YYYY</SelectItem></SelectContent></Select>
                  <p className="text-muted-foreground mt-1.5 text-xs">Applies to exports, reports, and activity tables.</p>
                </Row>
              </Card>
            </div>

            <div className="space-y-3">
              <SectionTitle title="Editor Behavior" description="Tighten small workflow defaults for daily operations." />
              <Card>
                {[
                  ["Send On Enter", "Post updates without opening a composer."],
                  ["Markdown Shortcuts", "Expand formatting while you type."],
                  ["Compact Tables", "Fit more rows in planning views."],
                ].map(([label, description], index) => (
                  <Row key={label} label={label} description={description} last={index === 2}>
                    <div className="flex justify-end">
                      <Switch defaultChecked={index > 0} aria-label={label} />
                    </div>
                  </Row>
                ))}
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="mt-8 space-y-8">
            <div className="space-y-3">
              <SectionTitle title="Personal Details" description="Keep your identity and recovery details current." />
              <Card>
                <Row label="Profile Photo" description="Shown in approvals, mentions, and member lists.">
                  <div className="flex items-center gap-2">
                    <Avatar size="lg">
                      <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80" alt="" />
                      <AvatarFallback>EP</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">Change</Button>
                    <Button variant="outline" size="sm"><XIcon />Remove</Button>
                  </div>
                </Row>
                <Row label="Full Name" description="Used on assignments and reviews."><Input defaultValue="Elena Park" aria-label="Full name" /></Row>
                <Row label="Email Address" description="Primary sign-in and alert email.">
                  <div className="space-y-2"><Badge variant="success-light" size="sm">Verified</Badge><Input defaultValue="elena@harborops.app" aria-label="Email address" /></div>
                </Row>
                <Row label="Phone Number" description="Used for urgent account recovery.">
                  <Input defaultValue="+1 415 555 0119" aria-label="Phone number" />
                  <p className="text-muted-foreground mt-1.5 text-xs">Used only for security verification and recovery alerts.</p>
                </Row>
                <Row label="Username" description="Used in mentions and shared links." last>
                  <Input defaultValue="@ elenapark" aria-label="Username" />
                </Row>
              </Card>
            </div>
            <div className="space-y-3">
              <SectionTitle title="Profile Details" description="Control how your profile appears across the workspace." />
              <Card>
                <Row label="Role" description="Shown next to your name."><Input defaultValue="Product Operations" aria-label="Role" /></Row>
                <Row label="Bio" description="A short introduction." last><Input defaultValue="Keeping launches calm and teams aligned." aria-label="Bio" /></Row>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="members" className="mt-8 space-y-8">
            <div className="space-y-3">
              <SectionTitle title="Invite Defaults" description="Keep new member access clear and predictable." />
              <Card>
                <Row label="Default Role" description="Use one safe default for new members.">
                  <Select defaultValue="Editor"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Editor">Editor</SelectItem><SelectItem value="Viewer">Viewer</SelectItem></SelectContent></Select>
                </Row>
                <Row label="Team Visibility" description="Control how much member detail is exposed.">
                  <Select defaultValue="Limited roster"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Limited roster">Limited roster</SelectItem><SelectItem value="Full roster">Full roster</SelectItem></SelectContent></Select>
                </Row>
                <Row label="Workspace Access" description="Choose the default areas new members can use." last>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "Approvals", note: "Review flows" },
                      { name: "Reports", note: "Shared insights" },
                      { name: "Billing", note: "Plans and invoices" },
                      { name: "Apps", note: "Connected tools" },
                    ].map((item) => {
                      const checked = access.includes(item.name)
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => setAccess((current) => checked ? current.filter((value) => value !== item.name) : [...current, item.name])}
                          className={cn("relative rounded-lg border p-2.5 text-left", checked ? "bg-accent" : "hover:bg-muted/50")}
                        >
                          <span className="block text-sm font-medium">{item.name}</span>
                          <span className="text-muted-foreground block text-xs">{item.note}</span>
                          {checked ? <span className="bg-foreground text-background absolute top-2 right-2 flex size-4 items-center justify-center rounded-full"><CheckIcon className="size-3" /></span> : <span className="border-muted-foreground/40 absolute top-2 right-2 size-4 rounded-full border" />}
                        </button>
                      )
                    })}
                  </div>
                </Row>
              </Card>
            </div>
            <div className="space-y-3">
              <SectionTitle title="Workspace Members" description="Search, review, and update workspace access." action={<Button size="sm"><UserPlusIcon />Invite member</Button>} />
              <Card>
                <div className="grid grid-cols-[1fr_120px_120px] gap-3 border-b bg-muted/30 px-5 py-2 text-xs text-muted-foreground">
                  <span>Member</span><span>Access</span><span>Role</span>
                </div>
                {MEMBERS.map((member) => (
                  <div key={member.email} className="grid grid-cols-[1fr_120px_120px] items-center gap-3 border-b px-5 py-3 last:border-0">
                    <div className="flex items-center gap-2.5">
                      <Avatar size="sm"><AvatarImage src={member.avatar} alt="" /><AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback></Avatar>
                      <div><p className="text-sm font-medium">{member.name}</p><p className="text-muted-foreground text-xs">{member.email}</p></div>
                    </div>
                    <span className="text-muted-foreground text-sm">{member.title.split(" · ")[1]}</span>
                    <Badge variant="secondary" size="sm">{member.role}</Badge>
                  </div>
                ))}
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="permissions" className="mt-8 space-y-5">
            {reviewAlert ? (
              <div className="border-warning/30 bg-warning/10 flex items-center gap-3 rounded-lg border px-4 py-3">
                <ShieldIcon className="size-4" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">Access review is enabled.</p>
                  <p className="text-muted-foreground text-sm">High-risk admin changes now require review from an active owner.</p>
                </div>
                <Button size="sm" onClick={() => setReviewAlert(false)}>Dismiss</Button>
              </div>
            ) : null}
            <SectionTitle title="Role Permissions" description="Review which capabilities are enabled for each access level." />
            <PermissionMatrix />
          </TabsContent>

          <TabsContent value="notifications" className="mt-8 space-y-5">
            <SectionTitle title="Digest Rules" description="Control when review updates and summaries are delivered." />
            <Card>
              <Row label="Digest Cadence" description="Batch routine updates into one summary.">
                <Select defaultValue="Morning brief"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Morning brief">Morning brief</SelectItem><SelectItem value="Weekly">Weekly</SelectItem></SelectContent></Select>
              </Row>
              <Row label="Quiet Hours" description="Pause low-priority alerts after hours.">
                <Select defaultValue="After hours"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="After hours">After hours</SelectItem><SelectItem value="Off">Off</SelectItem></SelectContent></Select>
              </Row>
              <Row label="Quiet Weekends" description="Mute routine updates from Friday evening.">
                <div className="flex justify-end"><Switch checked={quietWeekends} onCheckedChange={setQuietWeekends} aria-label="Quiet weekends" /></div>
              </Row>
              <Row label="Digest Content" description="Choose what gets bundled into routine digests." last>
                <div className="space-y-2">
                  {["Approval Activity", "Member Access Changes", "Integration Sync Health"].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm">
                      <Checkbox
                        checked={digestContent.includes(item)}
                        onCheckedChange={(value) => setDigestContent((current) => value ? [...current, item] : current.filter((entry) => entry !== item))}
                      />
                      {item}
                      <InfoIcon className="text-muted-foreground size-3.5" />
                    </label>
                  ))}
                </div>
              </Row>
            </Card>
            <SectionTitle title="Channels" description="Choose which surfaces stay active during the workday." />
            <Card>
              {[
                ["Email", "Recommended", "Important only"],
                ["In-app", "Always on", "All mentions"],
                ["Mobile push", "Optional", "Direct mentions"],
              ].map(([name, badge, value], index) => (
                <div key={name} className="flex flex-wrap items-center gap-3 border-b px-5 py-3.5 last:border-0">
                  <span className="text-sm font-medium">{name}</span>
                  <Badge variant={index === 1 ? "secondary" : "success-light"} size="sm">{badge}</Badge>
                  <div className="ml-auto w-52">
                    <Select defaultValue={value}><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value={value}>{value}</SelectItem></SelectContent></Select>
                  </div>
                </div>
              ))}
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="mt-8 space-y-6">
            <SectionTitle title="Connected Tools" description="Keep meetings, messaging, and async handoffs in sync." action={<Button variant="outline" size="sm">Browse directory</Button>} />
            <Card>
              {[
                { name: "Slack", desc: "Share approvals and review mentions.", meta: "Connected to #ops-reviews", badge: "Connected", action: "Manage" },
                { name: "Google Meet", desc: "Use shared huddle links for reviews.", meta: "Assigned to client calls", badge: "Default", action: "Manage" },
                { name: "Zoom", desc: "Keep a backup host for escalations.", meta: "Ready for leadership reviews", badge: "Available", action: "Connect" },
                { name: "Loom", desc: "Record async handoff updates.", meta: "Used by support and product", badge: "Connected", action: "Manage" },
              ].map((item) => (
                <div key={item.name} className="flex flex-wrap items-center gap-3 border-b px-5 py-3.5 last:border-0">
                  <span className="bg-muted flex size-9 items-center justify-center rounded-md text-xs font-semibold">{item.name.slice(0, 1)}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                    <p className="text-muted-foreground text-xs">{item.meta}</p>
                  </div>
                  <Badge variant={item.badge === "Available" ? "secondary" : "success-light"} size="sm">{item.badge}</Badge>
                  <Button variant={item.action === "Connect" ? "default" : "outline"} size="sm">{item.action}</Button>
                </div>
              ))}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Profile2Block
