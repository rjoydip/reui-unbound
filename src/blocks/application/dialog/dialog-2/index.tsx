import { useState } from "react"
import { UserPlusIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

type InviteRole = {
  id: string
  label: string
  description: string
}

const INVITE_ROLES: InviteRole[] = [
  { id: "core-member", label: "Core member", description: "Project access and daily work." },
  { id: "limited-member", label: "Limited member", description: "Shared work only." },
  { id: "guest-reviewer", label: "Guest reviewer", description: "Review shared work." },
  { id: "workspace-admin", label: "Workspace admin", description: "Manage workspace settings." },
]

function parseInviteEmails(value: string) {
  return [
    ...new Set(
      value
        .split(/[,\s]+/)
        .map((email) => email.trim().toLowerCase())
        .filter(Boolean),
    ),
  ]
}

export function Dialog2Block() {
  const [open, setOpen] = useState(false)
  const [emails, setEmails] = useState("")
  const [roleId, setRoleId] = useState(INVITE_ROLES[0].id)

  const recipients = parseInviteEmails(emails)
  const role = INVITE_ROLES.find((item) => item.id === roleId) ?? INVITE_ROLES[0]

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <h1 className="sr-only">Workspace invite dialog</h1>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Invite teammates
      </Button>

      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-md">
          <DialogHeader className="gap-1 p-5 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <DialogTitle>Invite teammates</DialogTitle>
              <Badge variant="warning-light" radius="full" size="sm">
                Workspace access
              </Badge>
            </div>
            <DialogDescription>Add emails and choose the role they start with.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 px-5 pb-5">
            <div className="grid gap-2">
              <Label htmlFor="dialog-2-emails">Invite by email</Label>
              <Input
                id="dialog-2-emails"
                value={emails}
                onChange={(event) => setEmails(event.target.value)}
                placeholder="name@company.com"
                autoFocus
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dialog-2-role">Invite as</Label>
              <Select value={roleId} onValueChange={setRoleId}>
                <SelectTrigger id="dialog-2-role" className="h-9 w-full">
                  <span>{role.label}</span>
                </SelectTrigger>
                <SelectContent>
                  {INVITE_ROLES.map((item) => (
                    <SelectItem key={item.id} value={item.id} className="items-start py-2">
                      <span className="flex flex-col items-start gap-0.5">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-muted-foreground text-xs">{item.description}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="mx-0 mb-0 rounded-b-xl border-t bg-muted/50 p-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button disabled={recipients.length === 0} onClick={() => setOpen(false)}>
              <UserPlusIcon />
              {recipients.length > 0
                ? `Send ${recipients.length} invite${recipients.length === 1 ? "" : "s"}`
                : "Send invite"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </main>
  )
}

export default Dialog2Block
