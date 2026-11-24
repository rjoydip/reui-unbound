import { useState } from "react"
import {
  ActivityIcon,
  ArrowLeftIcon,
  Building2Icon,
  CalendarIcon,
  CheckIcon,
  CopyIcon,
  InfoIcon,
  LockIcon,
  MailIcon,
  MoreVerticalIcon,
  RefreshCwIcon,
  SaveIcon,
  ShieldCheckIcon,
  UserIcon,
} from "lucide-react"
import { cn } from "cn"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]
const DAYS = ["S", "M", "T", "W", "T", "F", "S"]

// ponytail: deterministic pseudo-pattern, swap for the real activity series.
const ACTIVITY = Array.from({ length: 41 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => {
    const seed = (week + 3) * 11 + day * 7
    return seed % 13 === 0 ? 3 : seed % 7 === 0 ? 2 : seed % 4 === 0 ? 1 : 0
  }),
)

const LEVELS = [
  "bg-muted",
  "bg-foreground/15",
  "bg-foreground/40",
  "bg-foreground/90",
]

function InfoTip({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground inline-flex transition-colors"
          aria-label="More information"
        >
          <InfoIcon className="size-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-60">{children}</TooltipContent>
    </Tooltip>
  )
}

function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("divide-y overflow-hidden rounded-xl border bg-card", className)}>
      {children}
    </div>
  )
}

function Row({
  label,
  description,
  info,
  trailing,
  children,
}: {
  label: string
  description?: string
  info?: string
  trailing?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 items-start gap-3 px-4 py-4 sm:grid-cols-[310px_1fr] sm:gap-6">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium">{label}</p>
          {info && <InfoTip>{info}</InfoTip>}
        </div>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
      <div className="flex min-w-0 items-start gap-3">
        <div className="min-w-0 flex-1">{children}</div>
        {trailing}
      </div>
    </div>
  )
}

function SectionTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-3 flex flex-col gap-0.5">
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

export function Form5Block() {
  const [tab, setTab] = useState("profile")
  const [saved, setSaved] = useState(false)
  const [firstName, setFirstName] = useState("Iris")
  const [lastName, setLastName] = useState("Kwon")
  const [handle, setHandle] = useState("iris.kwon")
  const [recoveryEmail, setRecoveryEmail] = useState("recovery.iris@atlaslane.dev")
  const [mfa, setMfa] = useState("Passkey and authenticator")
  const [session, setSession] = useState("30 days")
  const [bio, setBio] = useState(
    "Product operations lead keeping launches, reviews, and handoffs moving.",
  )

  const complete = [firstName, lastName, handle, recoveryEmail, bio].filter(Boolean).length

  return (
    <TooltipProvider>
      <main className="min-h-svh p-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          <Button variant="ghost" size="sm" className="text-muted-foreground -ml-2 w-fit">
            <ArrowLeftIcon />
            Users
          </Button>

          <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="size-14">
                <AvatarFallback className="bg-muted text-sm font-medium">IK</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <h1 className="text-[28px] leading-8 font-semibold tracking-tight">Iris Kwon</h1>
                <p className="text-muted-foreground text-sm">
                  Product operations lead <span aria-hidden>•</span> Active today
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Account lock status">
                    <LockIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Account is not locked</TooltipContent>
              </Tooltip>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Profile actions">
                    <MoreVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Reset password</DropdownMenuItem>
                  <DropdownMenuItem>Send verification email</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">Suspend access</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="dark:bg-foreground dark:text-background"
                onClick={() => setSaved(true)}
              >
                {saved ? <CheckIcon /> : <SaveIcon />}
                {saved ? "Saved" : "Save Profile"}
              </Button>
            </div>
          </div>

          <Tabs value={tab} onValueChange={setTab} className="mt-8 gap-7">
            <TabsList variant="line" className="gap-1 p-0">
              {[
                { value: "profile", label: "Profile", icon: UserIcon },
                { value: "organizations", label: "Organizations", icon: Building2Icon },
                { value: "security", label: "Security", icon: ShieldCheckIcon },
              ].map((item) => (
                <TabsTrigger key={item.value} value={item.value} className="gap-2 px-2">
                  <item.icon />
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_288px]">
              <div className="min-w-0">
                <TabsContent value="profile" className="flex flex-col gap-6">
                  <div>
                    <div className="mb-3 flex items-end justify-between gap-4">
                      <SectionTitle
                        title="User Activity"
                        description="A lightweight trace of recent profile and workspace activity."
                      />
                      <Select defaultValue="2026">
                        <SelectTrigger className="w-24 shrink-0">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {["2026", "2025", "2024"].map((year) => (
                            <SelectItem key={year} value={year}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Panel>
                      <div className="flex flex-wrap items-center gap-2 px-4 py-3">
                        <Badge variant="secondary">41 active days</Badge>
                        <Badge variant="outline">Apr 22</Badge>
                        <Badge variant="warning-light">
                          <RefreshCwIcon />
                          Syncing
                        </Badge>
                        <Badge variant="success-light">Synced 20m ago</Badge>
                      </div>
                      <div className="overflow-x-auto px-4 py-3">
                        <div className="min-w-[640px]">
                          <div className="flex">
                            <div className="mr-2 flex flex-col justify-between py-0.5 text-[10px] text-muted-foreground">
                              {DAYS.map((day, index) => <span key={index} className="h-3 leading-3">{day}</span>)}
                            </div>
                            <div className="grid grid-flow-col grid-rows-7 gap-1.5">
                              {ACTIVITY.flatMap((week, weekIndex) =>
                                week.map((level, dayIndex) => (
                                  <span
                                    key={`${weekIndex}-${dayIndex}`}
                                    className={cn("size-3 rounded-full", LEVELS[level])}
                                  />
                                )),
                              )}
                            </div>
                          </div>
                          <div className="text-muted-foreground mt-2 flex justify-between pl-5 text-[10px]">
                            {MONTHS.map((month) => <span key={month}>{month}</span>)}
                          </div>
                        </div>
                      </div>
                    </Panel>
                  </div>

                  <div>
                    <SectionTitle
                      title="Personal Information"
                      description="Edit the identity shown across assignments and handoffs."
                    />
                    <Panel>
                      <Row
                        label="Profile Image"
                        description="Used in mentions, activity rows, and directory previews."
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <Avatar className="size-12">
                            <AvatarFallback className="bg-muted text-xs font-medium">IK</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col gap-1.5">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Replace image</Button>
                              <Button variant="ghost" size="sm">Remove</Button>
                            </div>
                            <p className="text-muted-foreground text-xs">
                              Recommended size 1:1. PNG, JPEG, or WebP up to 4MB.
                            </p>
                          </div>
                        </div>
                      </Row>
                      <Row label="Name" description="Keep legal and display naming aligned.">
                        <div className="grid grid-cols-2 gap-2">
                          <label className="flex flex-col gap-1 text-xs font-medium">
                            First Name
                            <Input value={firstName} onChange={(event) => { setFirstName(event.target.value); setSaved(false) }} />
                          </label>
                          <label className="flex flex-col gap-1 text-xs font-medium">
                            Last Name
                            <Input value={lastName} onChange={(event) => { setLastName(event.target.value); setSaved(false) }} />
                          </label>
                        </div>
                      </Row>
                      <Row
                        label="Public Handle"
                        description="Used for mentions and profile links."
                        info="Handles are unique across the workspace."
                      >
                        <Input value={`@${handle}`} onChange={(event) => setHandle(event.target.value.replace(/^@/, ""))} />
                      </Row>
                      <Row label="Email" description="Primary contact for workspace notices.">
                        <Input defaultValue="iris.kwon@atlaslane.dev" type="email" />
                      </Row>
                      <Row label="Location" description="Used for timezone and coverage planning.">
                        <Input defaultValue="Portland, Oregon" />
                      </Row>
                      <Row label="Bio" description="Shown on the member directory card.">
                        <Textarea rows={2} value={bio} onChange={(event) => setBio(event.target.value)} />
                      </Row>
                    </Panel>
                  </div>
                </TabsContent>

                <TabsContent value="organizations" className="flex flex-col gap-6">
                  <div>
                    <SectionTitle
                      title="Organization Membership"
                      description="Control workspace ownership, role, and operational scope."
                    />
                    <Panel>
                      <Row label="Default Organization" description="Used when creating new records and reports.">
                        <Input defaultValue="Atlas Lane" />
                      </Row>
                      <Row label="Membership Role" description="Sets admin access for billing, teams, and releases.">
                        <Select defaultValue="Workspace owner">
                          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {["Workspace owner", "Admin", "Editor", "Viewer"].map((role) => (
                              <SelectItem key={role} value={role}>{role}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Row>
                    </Panel>
                  </div>
                  <div>
                    <SectionTitle
                      title="Workspace Access"
                      description="Active organizations and groups connected to this user."
                    />
                    <Panel>
                      {[
                        { name: "Atlas Lane", badge: "Default", role: "Owner", desc: "Production workspace with billing and user admin access." },
                        { name: "Launch Council", role: "Admin", desc: "Cross-functional approval group for customer releases." },
                      ].map((item) => (
                        <div key={item.name} className="flex items-start gap-3 px-4 py-4">
                          <Building2Icon className="text-muted-foreground mt-0.5 size-4" />
                          <div className="flex flex-1 flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium">{item.name}</p>
                              {item.badge && <Badge variant="info-light" size="sm">{item.badge}</Badge>}
                            </div>
                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                          </div>
                          <span className="text-muted-foreground text-sm">{item.role}</span>
                          <Button variant="ghost" size="icon-sm" aria-label={`${item.name} actions`}>
                            <MoreVerticalIcon />
                          </Button>
                        </div>
                      ))}
                    </Panel>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="flex flex-col gap-6">
                  <div>
                    <SectionTitle
                      title="Sign-In Controls"
                      description="Set recovery and session controls for this profile."
                    />
                    <Panel>
                      <Row label="Recovery Email" description="Where admins can send secure reset notices.">
                        <Input type="email" value={recoveryEmail} onChange={(event) => setRecoveryEmail(event.target.value)} />
                      </Row>
                      <Row label="MFA Method" description="Required method for privileged actions.">
                        <Select value={mfa} onValueChange={setMfa}>
                          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {["Passkey and authenticator", "Authenticator app", "SMS code", "Hardware key"].map((method) => (
                              <SelectItem key={method} value={method}>{method}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Row>
                      <Row label="Session Duration" description="Maximum session age before re-authentication.">
                        <Select value={session} onValueChange={setSession}>
                          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {["14 days", "30 days", "90 days"].map((span) => (
                              <SelectItem key={span} value={span}>{span}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Row>
                    </Panel>
                  </div>
                  <div>
                    <SectionTitle
                      title="Security Notifications"
                      description="Account alerts and privacy defaults for this user."
                    />
                    <Panel>
                      {[
                        { title: "Require passkey on privileged actions", desc: "Recommended for billing, role, and export changes.", checked: true },
                        { title: "Notify on new trusted device", desc: "Send a profile alert when a device is approved.", checked: true },
                        { title: "Hide personal email from workspace members", desc: "Show only the workspace alias outside admin views.", checked: false },
                      ].map((item) => (
                        <Row
                          key={item.title}
                          label={item.title}
                          description={item.desc}
                          trailing={<Switch defaultChecked={item.checked} aria-label={item.title} />}
                        />
                      ))}
                    </Panel>
                  </div>
                </TabsContent>
              </div>

              <aside className="flex flex-col gap-6">
                <Panel>
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-semibold">Audit Rail</p>
                    <p className="text-muted-foreground text-sm">Stable identifiers and profile timestamps.</p>
                  </div>
                  {[
                    { icon: UserIcon, label: "User ID", value: "usr_8R4m...KX92", info: "Immutable account identifier." },
                    { icon: MailIcon, label: "Primary Email", value: "iris.kwon@atlaslane.dev", info: "Verified 12 days ago." },
                    { icon: CalendarIcon, label: "User Since", value: "March 18, 2026" },
                    { icon: ActivityIcon, label: "Profile Updated", value: "Updated 3h ago" },
                  ].map((item) => (
                    <div key={item.label} className="px-4 py-3">
                      <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
                        <item.icon className="size-3.5" />
                        {item.label}
                        {item.info && <InfoTip>{item.info}</InfoTip>}
                      </p>
                      <div className="mt-1 flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-medium">{item.value}</p>
                        {item.label !== "Profile Updated" && (
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            aria-label={`Copy ${item.label}`}
                            onClick={() => navigator.clipboard?.writeText(item.value)}
                          >
                            <CopyIcon />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </Panel>

                <Panel>
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-semibold">Profile Health</p>
                    <p className="text-muted-foreground text-sm">Identity quality and access readiness.</p>
                  </div>
                  <div className="flex flex-col gap-1.5 px-4 py-3.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Completion</span>
                      <span className="text-muted-foreground">{complete * 18 + 2}%</span>
                    </div>
                    <Progress value={complete * 18 + 2} />
                  </div>
                  {[
                    { label: "Identity Sync", status: "Syncing", tone: "warning" },
                    { label: "Access Review", status: "Verified 3h ago", tone: "success" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between px-4 py-3">
                      <span className="text-muted-foreground text-xs">{item.label}</span>
                      <Badge variant={item.tone === "warning" ? "warning-light" : "success-light"} size="sm">
                        {item.tone === "warning" && <RefreshCwIcon />}
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </Panel>
              </aside>
            </div>
          </Tabs>
        </div>
      </main>
    </TooltipProvider>
  )
}

export default Form5Block
