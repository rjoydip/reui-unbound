import { useState } from "react"
import {
  ChevronDownIcon, InfoIcon, MessageSquareIcon, SaveIcon, SearchIcon, SendIcon, ShieldCheckIcon, XIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Badge, type BadgeProps } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty,
  ComboboxItem, ComboboxList, ComboboxValue, useComboboxAnchor,
} from "@/components/ui/combobox"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "cn"

const INVITEES = [
  "iris.kwon@atlaslane.dev", "kai.morgan@atlaslane.dev",
  "priya.nair@atlaslane.dev", "theo.alvarez@atlaslane.dev",
]
const WORKSPACES = [
  { value: "global", label: "Global Operations", hint: "Customer data access." },
  { value: "platform", label: "Platform Control", hint: "Internal tools and releases." },
  { value: "finance", label: "Finance Ledger", hint: "Billing and reconciliation." },
]
const EXPIRY = [
  { value: "7", label: "7 days", hint: "Recommended for sensitive workspaces." },
  { value: "14", label: "14 days", hint: "Standard enterprise invite window." },
  { value: "30", label: "30 days", hint: "Use for planned onboarding batches." },
]
const MEMBER_TYPES = [
  { value: "employee", label: "Employee", hint: "SSO managed." },
  { value: "contractor", label: "Contractor", hint: "Time-bound access." },
  { value: "service", label: "Service account", hint: "Automation owner." },
]

type Role = { name: string; badge?: string; variant?: BadgeProps["variant"] }
type Group = { id: string; label: string; roles: Role[] }

const ROLE_GROUPS: Group[] = [
  { id: "admin", label: "Admin roles", roles: [
    { name: "Organization owner", badge: "Privileged", variant: "destructive-light" },
    { name: "Workspace admin" },
  ] },
  { id: "developer", label: "Developer roles", roles: [
    { name: "Developer" },
    { name: "Secret manager", badge: "MFA", variant: "warning-light" },
    { name: "Release engineer" },
  ] },
  { id: "finance", label: "Finance roles", roles: [
    { name: "Finance analyst", badge: "Export", variant: "info-light" },
    { name: "Refund analyst" },
    { name: "Dispute analyst" },
  ] },
  { id: "support", label: "Support roles", roles: [{ name: "Support agent" }, { name: "Escalation lead" }] },
  { id: "view", label: "View only roles", roles: [
    { name: "Workspace viewer", badge: "Read only", variant: "outline" },
    { name: "Audit viewer", badge: "Read only", variant: "outline" },
  ] },
  { id: "identity", label: "Identity roles", roles: [{ name: "Identity admin" }, { name: "SSO operator" }] },
  { id: "sandbox", label: "Sandbox roles", roles: [
    { name: "Sandbox admin" },
    { name: "Sandbox viewer", badge: "Read only", variant: "outline" },
  ] },
]

function InfoHint({ text }: { text: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild><InfoIcon className="size-3.5 text-muted-foreground/70" /></TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function Row({ label, description, info, children }: {
  label: string; description: string; info?: string; children: React.ReactNode
}) {
  return (
    <div className="grid gap-4 px-6 py-5 md:grid-cols-[240px_1fr] md:gap-6">
      <div className="space-y-0.5">
        <div className="flex items-center gap-1.5 text-sm font-medium">{label}{info && <InfoHint text={info} />}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

function HintSelect({ label, value, onChange, items }: {
  label: string; value: string; onChange: (value: string) => void
  items: { value: string; label: string; hint: string }[]
}) {
  return (
    <div className="space-y-1.5">
      <span className="text-sm font-medium">{label}</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full" aria-label={label}>
          <SelectValue>{items.find((item) => item.value === value)?.label ?? value}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.hint}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export function FormRolePermissionInviteBlock() {
  const anchor = useComboboxAnchor()
  const [recipients, setRecipients] = useState<string[]>([INVITEES[0]])
  const [workspace, setWorkspace] = useState("global")
  const [expiry, setExpiry] = useState("14")
  const [memberType, setMemberType] = useState("employee")
  const [requireSso, setRequireSso] = useState(true)
  const [notifyManager, setNotifyManager] = useState(false)
  const [roleSearch, setRoleSearch] = useState("")
  const [selectedRoles, setSelectedRoles] = useState(["Developer", "Finance analyst", "Support agent"])
  const [expanded, setExpanded] = useState(["admin", "developer", "finance"])
  const [note, setNote] = useState("")
  const [sending, setSending] = useState(false)

  const activeWorkspace = WORKSPACES.find((item) => item.value === workspace)?.label ?? ""
  const toggleRole = (role: string) =>
    setSelectedRoles((current) =>
      current.includes(role) ? current.filter((item) => item !== role) : [...current, role]
    )

  const sendInvite = () => {
    if (recipients.length === 0) { toast.error("Add at least one recipient"); return }
    if (selectedRoles.length === 0) { toast.error("Select at least one role"); return }
    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      toast.success(`Invite sent for ${activeWorkspace} with ${selectedRoles.length} roles`)
    }, 900)
  }

  const query = roleSearch.trim().toLowerCase()

  return (
    <div className="min-h-svh bg-background">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-2.5 sm:px-5">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon-sm" aria-label="Close invite" onClick={() => toast.message("Invite closed")}>
            <XIcon />
          </Button>
          <span className="h-6 w-px bg-border" />
          <div>
            <h1 className="text-sm font-semibold leading-tight">Invite Member</h1>
            <p className="text-xs text-muted-foreground">Enterprise access request</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => toast.success("Feedback recorded")}>
            <MessageSquareIcon />Feedback
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.success("Invite draft saved")}>
            <SaveIcon />Save Draft
          </Button>
          <Button size="sm" onClick={sendInvite} disabled={sending}>
            {sending ? <Spinner className="size-3.5" /> : <SendIcon />}Send Invite
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
        <section className="overflow-hidden rounded-xl border bg-card">
          <div className="flex items-start justify-between gap-3 border-b px-6 py-5">
            <div className="space-y-0.5">
              <h2 className="text-base font-semibold">Member Access</h2>
              <p className="text-sm text-muted-foreground">Add people and assign scoped workspace roles.</p>
            </div>
            <Badge variant="success-light" radius="full" className="gap-1">
              <ShieldCheckIcon />Policy Checked
            </Badge>
          </div>

          <div className="divide-y divide-dashed">
            <Row label="Recipients" info="Directory-resolved addresses only." description="Directory email addresses.">
              <Combobox multiple autoHighlight items={INVITEES} value={recipients} onValueChange={setRecipients}>
                <ComboboxChips ref={anchor} className="min-h-9">
                  <ComboboxValue>
                    {(values: string[]) => (
                      <>
                        {values.map((value) => <ComboboxChip key={value}>{value}</ComboboxChip>)}
                        <ComboboxChipsInput placeholder="Add email" />
                      </>
                    )}
                  </ComboboxValue>
                </ComboboxChips>
                <ComboboxContent anchor={anchor}>
                  <ComboboxEmpty>No directory matches.</ComboboxEmpty>
                  <ComboboxList>
                    {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Row>

            <Row label="Workspace" info="Applies to every recipient." description="Workspace and expiry window.">
              <div className="grid gap-4 sm:grid-cols-2">
                <HintSelect label="Workspace" value={workspace} onChange={setWorkspace} items={WORKSPACES} />
                <HintSelect label="Invite Expires" value={expiry} onChange={setExpiry} items={EXPIRY} />
              </div>
            </Row>

            <Row label="Member Type" description="How the account is governed.">
              <RadioGroup value={memberType} onValueChange={setMemberType} className="gap-3">
                {MEMBER_TYPES.map((item) => (
                  <label key={item.value} className="flex cursor-pointer items-start gap-3">
                    <RadioGroupItem value={item.value} className="mt-0.5" />
                    <span>
                      <span className="block text-sm font-medium">{item.label}</span>
                      <span className="block text-sm text-muted-foreground">{item.hint}</span>
                    </span>
                  </label>
                ))}
              </RadioGroup>
            </Row>

            <Row label="Guardrails" info="Enforced at sign-in." description="Sign-in and access-owner notice.">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">Require SSO</p>
                    <p className="text-sm text-muted-foreground">Block password login.</p>
                  </div>
                  <Switch checked={requireSso} onCheckedChange={setRequireSso} />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">Notify Manager</p>
                    <p className="text-sm text-muted-foreground">Copy the access owner.</p>
                  </div>
                  <Switch checked={notifyManager} onCheckedChange={setNotifyManager} />
                </div>
              </div>
            </Row>

            <Row label="Find Roles" description="Function or risk hint.">
              <InputGroup>
                <InputGroupAddon><SearchIcon /></InputGroupAddon>
                <InputGroupInput
                  value={roleSearch}
                  onChange={(event) => setRoleSearch(event.target.value)}
                  placeholder="Search roles..."
                  aria-label="Search roles"
                />
              </InputGroup>
            </Row>

            <Row label="Permissions" info="Least privilege by default." description="Choose minimum access.">
              <div className="rounded-lg border">
                <div className="flex items-start justify-between gap-3 border-b px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">Role groups</p>
                    <p className="text-xs text-muted-foreground">7 groups available</p>
                  </div>
                  <Badge variant="outline">{selectedRoles.length} selected roles</Badge>
                </div>
                <div className="p-1.5">
                  {ROLE_GROUPS.map((group) => {
                    const roles = group.roles.filter((role) => role.name.toLowerCase().includes(query))
                    if (query && roles.length === 0) return null
                    const open = query.length > 0 || expanded.includes(group.id)
                    return (
                      <div key={group.id}>
                        <button
                          type="button"
                          onClick={() =>
                            !query && setExpanded((current) =>
                              current.includes(group.id) ? current.filter((id) => id !== group.id) : [...current, group.id]
                            )
                          }
                          className="flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-sm font-medium transition-colors hover:bg-muted/60"
                          aria-expanded={open}
                        >
                          <ChevronDownIcon className={cn("size-4 text-muted-foreground transition-transform", !open && "-rotate-90")} />
                          {group.label}
                        </button>
                        {open && (
                          <div className="space-y-0.5 pb-1 pl-6">
                            {roles.map((role) => (
                              <label key={role.name} className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted/50">
                                <Checkbox checked={selectedRoles.includes(role.name)} onCheckedChange={() => toggleRole(role.name)} />
                                <span className="flex-1">{role.name}</span>
                                {role.badge && <Badge variant={role.variant ?? "outline"} radius="full">{role.badge}</Badge>}
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </Row>

            <Row label="Internal Note" info="Only visible to workspace admins." description="Optional internal context.">
              <Textarea
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="Add context for reviewers..."
                className="min-h-20"
              />
            </Row>
          </div>
        </section>
      </main>
    </div>
  )
}

export default FormRolePermissionInviteBlock
