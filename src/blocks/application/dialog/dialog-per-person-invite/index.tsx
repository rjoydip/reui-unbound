import { useRef, useState } from "react"
import { PlusIcon, SendIcon, XIcon } from "lucide-react"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

type InviteRoleId = "member" | "contributor" | "reviewer" | "admin"

type InviteRow = { id: number; email: string; role: InviteRoleId }

const INVITE_ROLES: { id: InviteRoleId; label: string; description: string }[] = [
  { id: "member", label: "Member", description: "Default collaboration access." },
  { id: "contributor", label: "Contributor", description: "Create and edit assigned work." },
  { id: "reviewer", label: "Reviewer", description: "Comment and approve work." },
  { id: "admin", label: "Admin", description: "Manage people and settings." },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function DialogPerPersonInviteBlock() {
  const [open, setOpen] = useState(false)
  const [rows, setRows] = useState<InviteRow[]>([{ id: 1, email: "", role: "member" }])
  const nextId = useRef(2)

  const readyEmails = [
    ...new Set(
      rows
        .map((row) => row.email.trim().toLowerCase())
        .filter((email) => EMAIL_PATTERN.test(email)),
    ),
  ]
  const canSend = rows.every((row) => EMAIL_PATTERN.test(row.email.trim()))

  function updateRow(id: number, patch: Partial<InviteRow>) {
    setRows((current) => current.map((row) => (row.id === id ? { ...row, ...patch } : row)))
  }

  function addRow() {
    setRows((current) => [...current, { id: nextId.current++, email: "", role: "member" }])
  }

  function removeRow(id: number) {
    setRows((current) => current.filter((row) => row.id !== id))
  }

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <h1 className="sr-only">Collaborator invite dialog</h1>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open collaborator invite dialog
      </Button>

      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-[680px]">
          <form
            className="flex flex-col"
            onSubmit={(event) => {
              event.preventDefault()
              if (canSend) setOpen(false)
            }}
          >
            <DialogHeader className="gap-1 p-5 pb-4">
              <DialogTitle>Invite Collaborators</DialogTitle>
              <DialogDescription>Add each person with the access they need.</DialogDescription>
            </DialogHeader>

            <div className="grid gap-3 px-5 pb-3">
              {rows.map((row, index) => {
                const invalid = row.email.length > 0 && !EMAIL_PATTERN.test(row.email.trim())
                return (
                  <div key={row.id} className="grid gap-1.5">
                    <div className="flex items-start gap-2">
                      <Input
                        aria-label={`Email for invite ${index + 1}`}
                        aria-invalid={invalid}
                        placeholder="Enter user email"
                        value={row.email}
                        onChange={(event) => updateRow(row.id, { email: event.target.value })}
                        className="h-9 flex-1"
                      />
                      <Select
                        value={row.role}
                        onValueChange={(value) => updateRow(row.id, { role: value as InviteRoleId })}
                      >
                        <SelectTrigger className="h-9 w-44 sm:w-60" aria-label={`Role for invite ${index + 1}`}>
                          <span>
                            {INVITE_ROLES.find((role) => role.id === row.role)?.label}
                          </span>
                        </SelectTrigger>
                        <SelectContent>
                          {INVITE_ROLES.map((role) => (
                            <SelectItem key={role.id} value={role.id} className="items-start py-2">
                              <span className="flex flex-col items-start gap-0.5">
                                <span className="font-medium">{role.label}</span>
                                <span className="text-muted-foreground text-xs">{role.description}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {rows.length > 1 ? (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          aria-label={`Remove invite ${index + 1}`}
                          onClick={() => removeRow(row.id)}
                          className="shrink-0"
                        >
                          <XIcon />
                        </Button>
                      ) : null}
                    </div>
                    {invalid ? (
                      <p className="text-destructive text-xs">Enter a valid email address.</p>
                    ) : null}
                  </div>
                )
              })}

              <div className="flex justify-end">
                <Button type="button" variant="outline" size="sm" onClick={addRow}>
                  <PlusIcon />
                  Add new member
                </Button>
              </div>
            </div>

            <DialogFooter className="mx-0 mb-0 rounded-b-xl border-t bg-muted/50 p-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={!canSend}>
                <SendIcon />
                Send {readyEmails.length === 1 ? "invitation" : "invitations"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </DialogRoot>
    </main>
  )
}

export default DialogPerPersonInviteBlock
