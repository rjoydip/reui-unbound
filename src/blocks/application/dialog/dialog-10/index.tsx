"use client"
import { useState } from "react"
import {
  Building2Icon,
  CreditCardIcon,
  InfoIcon,
  Settings2Icon,
  UserRoundIcon,
  UsersIcon,
  XIcon,
} from "lucide-react"
import { cn } from "cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
const SECTIONS = [
  { value: "profile", label: "Profile", icon: UserRoundIcon, description: "Manage your account identity." },
  { value: "workspace", label: "Workspace", icon: Building2Icon, description: "Configure how Atlas works for your team." },
  { value: "team", label: "Team", icon: UsersIcon, description: "Invite people and manage their access." },
  { value: "billing", label: "Billing", icon: CreditCardIcon, description: "Review your plan, payment and invoices." },
  { value: "preferences", label: "Preferences", icon: Settings2Icon, description: "Choose what Atlas notifies you about." },
] as const
const MEMBERS = [
  { name: "Maya Stone", email: "maya@atlashq.app", role: "Product lead", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80" },
  { name: "Leo Grant", email: "leo@atlashq.app", role: "Design systems", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80" },
  { name: "Nora Chen", email: "nora@atlashq.app", role: "Engineering", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80" },
] as const
function Row({
  label,
  hint,
  children,
  info,
  className,
}: {
  label: string
  hint?: string
  children: React.ReactNode
  info?: boolean
  className?: string
}) {
  return (
    <div className={cn("grid items-start gap-1.5 sm:grid-cols-[190px_1fr] sm:gap-6", className)}>
      <div className="pt-1">
        <div className="flex items-center gap-1.5 text-sm font-medium">
          {label}
          {info ? (
            <InfoIcon className="size-3.5 shrink-0 text-muted-foreground" aria-label="More information" />
          ) : null}
        </div>
        {hint ? <p className="text-sm text-muted-foreground">{hint}</p> : null}
      </div>
      {children}
    </div>
  )
}
function FieldBlock({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <Field>
      <FieldLabel className="text-sm font-medium">{label}</FieldLabel>
      {children}
      {hint ? <p className="text-sm text-muted-foreground">{hint}</p> : null}
    </Field>
  )
}
function Panel({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-5 py-5">{children}</div>
}
export function Dialog10Block() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<string>("profile")
  const section = SECTIONS.find((item) => item.value === tab) ?? SECTIONS[0]
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/30 p-6">
      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Settings2Icon />
            Account settings
          </Button>
        </DialogTrigger>
        <DialogContent className="h-[650px] max-h-[calc(100svh-2rem)] gap-0 overflow-hidden p-0 sm:max-w-[960px]">
          <Tabs value={tab} onValueChange={setTab} orientation="vertical" className="h-full flex-row gap-0">
            <TabsList className="w-[220px] shrink-0 flex-col items-stretch gap-1 rounded-none border-r bg-muted/40 p-3">
              <p className="px-2.5 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Settings
              </p>
              {SECTIONS.map((item) => (
                <TabsTrigger key={item.value} value={item.value} className="h-9 justify-start gap-2.5 px-2.5 text-sm">
                  <item.icon className="size-4" />
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex min-w-0 flex-1 flex-col">
              <DialogHeader className="px-7 pt-6">
                <DialogTitle className="text-xl">{section.label}</DialogTitle>
                <DialogDescription>{section.description}</DialogDescription>
              </DialogHeader>
              <div className="min-h-0 flex-1 overflow-y-auto px-7">
                <TabsContent value="profile">
                  <Panel>
                    <Row label="Profile Photo" hint="Shown in comments and mentions." className="items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="size-12">
                          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80" alt="Ava Chen" />
                          <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm">
                          Change
                        </Button>
                        <Button variant="ghost" size="sm">
                          <XIcon />
                          Remove
                        </Button>
                      </div>
                    </Row>
                    <Row label="Full Name" hint="Used across Atlas.">
                      <Input defaultValue="Ava Chen" />
                    </Row>
                    <Row label="Email Address" hint="Primary sign-in email.">
                      <div className="flex items-center gap-2">
                        <Input defaultValue="ava@atlashq.app" />
                        <Badge variant="success-light" radius="full" className="shrink-0">
                          Verified
                        </Badge>
                      </div>
                    </Row>
                    <Row label="Username" hint="Used in mentions and links.">
                      <InputGroup>
                        <InputGroupAddon>@</InputGroupAddon>
                        <InputGroupInput defaultValue="avachen" />
                      </InputGroup>
                    </Row>
                    <Row label="Public Details" hint="Shown across Atlas." info>
                      <div className="flex flex-col gap-3">
                        <FieldBlock label="Role">
                          <Select defaultValue="staff-product-lead">
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="staff-product-lead">Staff Product Lead</SelectItem>
                              <SelectItem value="product-manager">Product Manager</SelectItem>
                              <SelectItem value="engineering-lead">Engineering Lead</SelectItem>
                              <SelectItem value="design-lead">Design Lead</SelectItem>
                            </SelectContent>
                          </Select>
                        </FieldBlock>
                        <FieldBlock label="Time zone">
                          <Select defaultValue="gmt-5">
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gmt-5">(GMT-5) New York</SelectItem>
                              <SelectItem value="gmt-8">(GMT-8) Los Angeles</SelectItem>
                              <SelectItem value="gmt-0">(GMT+0) London</SelectItem>
                              <SelectItem value="gmt+1">(GMT+1) Berlin</SelectItem>
                            </SelectContent>
                          </Select>
                        </FieldBlock>
                        <FieldBlock label="Website">
                          <InputGroup>
                            <InputGroupAddon>https://</InputGroupAddon>
                            <InputGroupInput defaultValue="ava.atlashq.app" />
                          </InputGroup>
                        </FieldBlock>
                      </div>
                    </Row>
                    <Row label="Bio" hint="Short profile summary.">
                      <Textarea
                        rows={4}
                        defaultValue="Leading launch systems, product operations, and internal tooling across the Atlas workspace."
                        className="resize-none"
                      />
                    </Row>
                  </Panel>
                </TabsContent>
                <TabsContent value="workspace">
                  <Panel>
                    <Row label="Workspace name" hint="Visible to every member.">
                      <Input defaultValue="Atlas HQ" />
                    </Row>
                    <Row label="Workspace URL" hint="Used for links and invites.">
                      <InputGroup>
                        <InputGroupAddon>atlas.app/</InputGroupAddon>
                        <InputGroupInput defaultValue="atlas-hq" />
                      </InputGroup>
                    </Row>
                    <Row label="Default visibility" hint="New projects start with this setting.">
                      <Select defaultValue="workspace">
                        <SelectTrigger className="w-full sm:w-[260px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="workspace">Workspace</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="public">Public</SelectItem>
                        </SelectContent>
                      </Select>
                    </Row>
                    <Row label="Require 2FA" hint="Members must verify a second factor." className="items-center">
                      <Switch defaultChecked aria-label="Require two-factor authentication" />
                    </Row>
                    <Row label="Guest access" hint="Allow guests on shared projects." className="items-center">
                      <Switch aria-label="Allow guest access" />
                    </Row>
                  </Panel>
                </TabsContent>
                <TabsContent value="team">
                  <Panel>
                    <Row label="Invite member" hint="Send an email invitation.">
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <Input type="email" placeholder="name@company.com" className="flex-1" />
                        <Select defaultValue="member">
                          <SelectTrigger className="w-full sm:w-[132px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="member">Member</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="viewer">Viewer</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button>Send invite</Button>
                      </div>
                    </Row>
                    <div className="flex flex-col gap-2">
                      {MEMBERS.map((member) => (
                        <div key={member.email} className="flex items-center gap-3 rounded-lg border p-3">
                          <Avatar className="size-8">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.name.slice(0, 1)}</AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">{member.name}</p>
                            <p className="truncate text-sm text-muted-foreground">{member.email}</p>
                          </div>
                          <span className="hidden text-sm text-muted-foreground sm:block">{member.role}</span>
                          <Button variant="ghost" size="sm">
                            Manage
                          </Button>
                        </div>
                      ))}
                    </div>
                  </Panel>
                </TabsContent>
                <TabsContent value="billing">
                  <Panel>
                    <Row label="Current plan" hint="Billed monthly per member.">
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Pro</span>
                            <Badge variant="primary-light">Active</Badge>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">$20 per member / month</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Change plan
                        </Button>
                      </div>
                    </Row>
                    <Row label="Payment method" hint="Used for renewals.">
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-2 text-sm">
                          <CreditCardIcon className="size-4 text-muted-foreground" />
                          Visa ending in 4242
                        </div>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </div>
                    </Row>
                    <Row label="Billing email" hint="Invoices are sent here.">
                      <Input type="email" defaultValue="billing@atlashq.app" />
                    </Row>
                  </Panel>
                </TabsContent>
                <TabsContent value="preferences">
                  <Panel>
                    <Row label="Product updates" hint="News about new Atlas features." className="items-center">
                      <Switch defaultChecked aria-label="Product updates" />
                    </Row>
                    <Row label="Weekly digest" hint="A Monday summary of workspace activity." className="items-center">
                      <Switch defaultChecked aria-label="Weekly digest" />
                    </Row>
                    <Row label="Mentions only" hint="Pause everything except direct mentions." className="items-center">
                      <Switch aria-label="Mentions only" />
                    </Row>
                    <Row label="Appearance" hint="How Atlas looks on this device.">
                      <Select defaultValue="system">
                        <SelectTrigger className="w-full sm:w-[220px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">Match system</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                        </SelectContent>
                      </Select>
                    </Row>
                  </Panel>
                </TabsContent>
              </div>
              <DialogFooter className="mx-0 mb-0 rounded-none bg-background sm:justify-end">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpen(false)}>Save changes</Button>
              </DialogFooter>
            </div>
          </Tabs>
        </DialogContent>
      </DialogRoot>
    </div>
  )
}
export default Dialog10Block
