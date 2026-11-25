import { useState } from "react"
import {
  Building2Icon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CreditCardIcon,
  EllipsisIcon,
  FilterIcon,
  UserPlusIcon,
  UserRoundIcon,
  UsersRoundIcon,
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
  { id: "profile", label: "Profile", icon: UserRoundIcon },
  { id: "workspace", label: "Workspace", icon: Building2Icon },
  { id: "team", label: "Team", icon: UsersRoundIcon },
  { id: "billing", label: "Billing", icon: CreditCardIcon },
]

const TEAM = [
  { name: "Ava Chen", email: "ava@atlas hq.app".replace(" ", ""), role: "Owner", title: "Product · Leadership", status: "Active", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { name: "Leo Grant", email: "leo@atlas hq.app".replace(" ", ""), role: "Member", title: "Engineering · Platform", status: "Suspended", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Maya Singh", email: "maya@atlas hq.app".replace(" ", ""), role: "Admin", title: "Finance · Ops", status: "Invited", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
  { name: "Milo Harper", email: "milo@atlas hq.app".replace(" ", ""), role: "Admin", title: "Revenue · Growth", status: "Active", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
  { name: "Nina Park", email: "nina@atlas hq.app".replace(" ", ""), role: "Member", title: "Design · Systems", status: "Active", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80" },
]

const ACCENTS = ["bg-zinc-500", "bg-blue-500", "bg-emerald-500", "bg-pink-500", "bg-orange-500"]

function FieldRow({
  label,
  description,
  children,
  last = false,
}: {
  label: string
  description?: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <div className={cn("grid gap-3 px-4 py-3.5 sm:grid-cols-[1fr_324px] sm:items-start", !last && "border-b")}>
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
    <section className="bg-muted/30 rounded-xl border p-3">
      <div className="px-1 pb-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
      <div className="bg-card overflow-hidden rounded-lg border">{children}</div>
      {footer ? <div className="flex justify-end gap-2 px-1 pt-3">{footer}</div> : null}
    </section>
  )
}

export function ProfileAccountTeamSettingsBlock() {
  const [tab, setTab] = useState("profile")
  const [accent, setAccent] = useState(2)
  const [externalSharing, setExternalSharing] = useState(true)
  const [briefing, setBriefing] = useState(true)
  const [seat, setSeat] = useState("24 seats")
  const [memberQuery, setMemberQuery] = useState("")
  const members = TEAM.filter((member) =>
    `${member.name} ${member.email}`.toLowerCase().includes(memberQuery.toLowerCase())
  )

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[888px]">
        <h1 className="text-2xl font-semibold">Account Settings</h1>
        <p className="text-muted-foreground mt-1 text-sm">Update your account, workspace, team, and billing.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[164px_minmax(0,1fr)]">
          <nav aria-label="Settings sections" className="flex gap-1 overflow-x-auto lg:flex-col">
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

          <div className="space-y-6">
            {tab === "profile" ? (
              <>
                <Panel
                  title="Profile Details"
                  description="Personal account info."
                  footer={<><Button variant="outline" size="sm">Cancel</Button><Button size="sm">Save changes</Button></>}
                >
                  <FieldRow label="Profile Photo" description="Shown in comments and mentions.">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" alt="" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">Change</Button>
                      <Button variant="outline" size="sm"><XIcon />Remove</Button>
                    </div>
                  </FieldRow>
                  <FieldRow label="Full Name" description="Used across Atlas.">
                    <Input defaultValue="Ava Chen" aria-label="Full name" />
                  </FieldRow>
                  <FieldRow label="Email Address" description="Primary sign-in email.">
                    <div className="space-y-2">
                      <Badge variant="success-light" size="sm">Verified</Badge>
                      <Input defaultValue="ava@atlashq.app" aria-label="Email address" />
                    </div>
                  </FieldRow>
                  <FieldRow label="Phone Number" description="Recovery and urgent alerts.">
                    <Input defaultValue="+1 718 555 0188" aria-label="Phone number" />
                  </FieldRow>
                  <FieldRow label="Username" description="Used in mentions and links.">
                    <Input defaultValue="@ avachen" aria-label="Username" />
                  </FieldRow>
                  <FieldRow label="Public Details" description="Shown across Atlas.">
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium">Role</label>
                        <Select defaultValue="Staff Product Lead">
                          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Staff Product Lead">Staff Product Lead</SelectItem>
                            <SelectItem value="Product Manager">Product Manager</SelectItem>
                            <SelectItem value="Engineer">Engineer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium">Time zone</label>
                        <Select defaultValue="(GMT-5) New York">
                          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="(GMT-5) New York">(GMT-5) New York</SelectItem>
                            <SelectItem value="(GMT+1) Berlin">(GMT+1) Berlin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium">Website</label>
                        <Input defaultValue="https:// ava.atlashq.app" aria-label="Website" />
                      </div>
                    </div>
                  </FieldRow>
                  <FieldRow label="Bio" description="Short profile summary." last>
                    <Textarea
                      rows={4}
                      defaultValue="Leading launch systems, product operations, and internal tooling across the Atlas workspace."
                      aria-label="Bio"
                    />
                  </FieldRow>
                </Panel>

                <Panel title="Profile Preferences" description="Default workspace behavior.">
                  <FieldRow label="Language">
                    <Select defaultValue="English (US)">
                      <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English (US)">English (US)</SelectItem>
                        <SelectItem value="Deutsch">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldRow>
                  <FieldRow label="Landing View">
                    <Select defaultValue="Priority inbox">
                      <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Priority inbox">Priority inbox</SelectItem>
                        <SelectItem value="Today">Today</SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldRow>
                  <FieldRow label="Digest Cadence">
                    <Select defaultValue="Weekly summary">
                      <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Weekly summary">Weekly summary</SelectItem>
                        <SelectItem value="Daily">Daily</SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldRow>
                  <FieldRow label="Daily Briefing" description="Morning recap before meetings." last>
                    <div className="flex justify-end">
                      <Switch checked={briefing} onCheckedChange={setBriefing} aria-label="Daily briefing" />
                    </div>
                  </FieldRow>
                </Panel>
              </>
            ) : null}

            {tab === "workspace" ? (
              <>
                <Panel
                  title="Workspace Details"
                  description="Brand and contact info."
                  footer={<><Button variant="outline" size="sm">Preview brand</Button><Button size="sm">Save workspace</Button></>}
                >
                  <FieldRow label="Workspace Logo" description="Used in navigation and shared links.">
                    <div className="flex items-center gap-2">
                      <span className="size-10 rounded-md bg-gradient-to-br from-sky-700 to-cyan-500" />
                      <Button variant="outline" size="sm">Change</Button>
                      <Button variant="outline" size="sm"><XIcon />Remove</Button>
                    </div>
                  </FieldRow>
                  <FieldRow label="Workspace Name">
                    <Input defaultValue="Atlas" aria-label="Workspace name" />
                  </FieldRow>
                  <FieldRow label="Workspace URL" description="Link for teammates and clients.">
                    <div className="flex items-center rounded-lg border px-3">
                      <input defaultValue="hq" aria-label="Workspace URL" className="h-8 min-w-0 flex-1 bg-transparent text-sm outline-none" />
                      <span className="text-muted-foreground text-sm">.atlashq.app</span>
                    </div>
                  </FieldRow>
                  <FieldRow label="Support Email" description="Shown on help surfaces.">
                    <Input defaultValue="support@atlashq.app" aria-label="Support email" />
                  </FieldRow>
                  <FieldRow label="Accent Color" description="Used for highlights and links. Select one accent." last>
                    <div className="flex items-center justify-end gap-2">
                      {ACCENTS.map((color, index) => (
                        <button
                          key={color}
                          type="button"
                          aria-label={`Accent ${index + 1}`}
                          onClick={() => setAccent(index)}
                          className={cn(
                            "flex size-6 items-center justify-center rounded-full",
                            accent === index && "ring-2 ring-emerald-500 ring-offset-2 ring-offset-card"
                          )}
                        >
                          <span className={cn("size-5 rounded-full", color)} />
                        </button>
                      ))}
                    </div>
                  </FieldRow>
                </Panel>

                <Panel title="Workspace Preferences" description="Sharing and automation defaults.">
                  <FieldRow label="Default Landing View">
                    <Select defaultValue="Pipeline board">
                      <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pipeline board">Pipeline board</SelectItem>
                        <SelectItem value="Inbox">Inbox</SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldRow>
                  <FieldRow label="External Sharing" description="Create client-safe links." last>
                    <div className="flex justify-end">
                      <Switch checked={externalSharing} onCheckedChange={setExternalSharing} aria-label="External sharing" />
                    </div>
                  </FieldRow>
                </Panel>
              </>
            ) : null}

            {tab === "team" ? (
              <section>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-semibold">Workspace Team</h2>
                    <p className="text-muted-foreground text-xs">Manage members and access.</p>
                  </div>
                  <Button size="sm"><UserPlusIcon />Invite member</Button>
                </div>
                <div className="bg-card mt-4 overflow-hidden rounded-lg border">
                  <div className="flex gap-2 border-b p-3">
                    <Input
                      value={memberQuery}
                      onChange={(event) => setMemberQuery(event.target.value)}
                      placeholder="Search team…"
                      aria-label="Search team"
                      className="max-w-64"
                    />
                    <Button variant="outline" size="sm"><FilterIcon />Status</Button>
                  </div>
                  <div className="text-muted-foreground grid grid-cols-[1fr_150px_110px_32px] gap-3 border-b px-4 py-2 text-xs">
                    <span>Member ↑</span><span>Role ⇅</span><span>Status ⇅</span><span />
                  </div>
                  {members.map((member) => (
                    <div key={member.email} className="grid grid-cols-[1fr_150px_110px_32px] items-center gap-3 border-b px-4 py-2.5 last:border-0">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <Avatar size="sm">
                          <AvatarImage src={member.avatar} alt="" />
                          <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 text-sm font-medium">
                            {member.name}
                            <Badge variant="secondary" size="sm">{member.role}</Badge>
                          </p>
                          <p className="text-muted-foreground truncate text-xs">{member.email}</p>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p>{member.title.split(" · ")[0]}</p>
                        <p className="text-muted-foreground text-xs">{member.title.split(" · ")[1]}</p>
                      </div>
                      <div>
                        <Badge
                          size="sm"
                          variant={
                            member.status === "Active"
                              ? "success-light"
                              : member.status === "Suspended"
                                ? "destructive-light"
                                : "focus-light"
                          }
                        >
                          {member.status}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon-xs" aria-label={`Actions for ${member.name}`}>
                        <EllipsisIcon />
                      </Button>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 px-4 py-2.5 text-xs">
                    <span className="text-muted-foreground">Rows per page</span>
                    <Select defaultValue="5">
                      <SelectTrigger size="sm" className="w-16"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-muted-foreground ml-auto">1 – 5 of 6</span>
                    <Button variant="ghost" size="icon-xs" aria-label="Previous page"><ChevronLeftIcon /></Button>
                    <span className="bg-muted flex size-6 items-center justify-center rounded">1</span>
                    <span className="flex size-6 items-center justify-center">2</span>
                    <Button variant="ghost" size="icon-xs" aria-label="Next page"><ChevronRightIcon /></Button>
                  </div>
                </div>
              </section>
            ) : null}

            {tab === "billing" ? (
              <div className="space-y-5">
                <div className="border-warning/30 bg-warning/10 flex flex-wrap items-center gap-3 rounded-lg border px-4 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">Access review</p>
                    <p className="text-muted-foreground text-sm">Review billing roles and approvers before renewal.</p>
                  </div>
                  <Button variant="ghost" size="sm">Dismiss</Button>
                  <Button size="sm">Review</Button>
                </div>

                <Panel title="Billing Setup" description="Plan, seats, and invoices.">
                  <div className="flex items-start justify-between border-b px-4 py-3.5">
                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold">Current Plan <Badge variant="secondary" size="sm">Current</Badge></p>
                      <p className="text-muted-foreground text-sm">Includes scale, audit, and admin tools.</p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="font-semibold">$149 / workspace</p>
                      <p className="text-muted-foreground text-xs">Billed monthly</p>
                    </div>
                  </div>
                  <FieldRow label="Billing Owner" description="Primary approver for plan changes.">
                    <Input defaultValue="finance@atlashq.app" aria-label="Billing owner" />
                  </FieldRow>
                  <FieldRow label="Invoice Approvers" description="Users who approve plan changes.">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {["Ava Chen", "Milo Harper", "Maya Singh"].map((name) => (
                        <Badge key={name} variant="secondary" size="lg" className="gap-1.5">
                          <Avatar size="sm" className="size-4"><AvatarFallback>{name.slice(0, 1)}</AvatarFallback></Avatar>
                          {name}
                          <XIcon className="size-3" />
                        </Badge>
                      ))}
                      <span className="text-muted-foreground text-xs">Add approvers…</span>
                    </div>
                  </FieldRow>
                  <FieldRow label="Invoice Email">
                    <Input defaultValue="ap@atlashq.app" aria-label="Invoice email" />
                  </FieldRow>
                  <FieldRow label="Cost Center">
                    <Input defaultValue="RevOps / Growth" aria-label="Cost center" />
                  </FieldRow>
                  <FieldRow label="Seat Selection" description="Set team capacity." last>
                    <div className="space-y-2">
                      <div className="grid gap-2 sm:grid-cols-3">
                        {[
                          { value: "16 seats", note: "Best for your current team size and smooth growth" },
                          { value: "24 seats", note: "Gives your team room for future growth" },
                          { value: "40 seats", note: "Supports the next hiring cycle with 16 open seats" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setSeat(option.value)}
                            className={cn(
                              "relative rounded-lg border p-2.5 text-left text-xs",
                              seat === option.value ? "bg-accent" : "hover:bg-muted/50"
                            )}
                          >
                            <span className="block text-sm font-medium">{option.value}</span>
                            <span className="text-muted-foreground mt-0.5 block">{option.note}</span>
                            {seat === option.value ? (
                              <span className="bg-foreground text-background absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full">
                                <CheckIcon className="size-3" />
                              </span>
                            ) : null}
                          </button>
                        ))}
                      </div>
                    </div>
                  </FieldRow>
                </Panel>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileAccountTeamSettingsBlock
