import { useState } from "react"
import { PencilIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/components/kit/number-field"
import { cn } from "cn"

import {
  SCORE_BANDS,
  engagementTrend,
  formatCurrency,
  initials,
  scoreBand,
} from "./data"
import type { Contact, ContactStatus } from "./data"
import { CompanyLogo, EngagementCell, PipelineCell, StatusBadge } from "./parts"

function Detail({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-muted-foreground text-sm">{label}</dt>
      <dd className="text-right text-sm font-medium">{children}</dd>
    </div>
  )
}

export function ContactViewSheet({
  contact,
  open,
  onOpenChange,
  onEdit,
}: {
  contact: Contact | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onEdit: (contact: Contact) => void
}) {
  const band = contact
    ? SCORE_BANDS.find((entry) => entry.value === scoreBand(contact.score))!
    : null

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        {contact && band && (
          <>
            <SheetHeader className="gap-3 border-b pb-4">
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage src={contact.avatar} alt={contact.name} />
                  <AvatarFallback className="text-xs">
                    {initials(contact.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <SheetTitle className="truncate">{contact.name}</SheetTitle>
                  <SheetDescription className="truncate">
                    {contact.email}
                  </SheetDescription>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={contact.status} />
                <Badge variant="outline" className="gap-1.5">
                  <span className={cn("size-1.5 rounded-full", band.bar)} />
                  {band.label} &middot; {contact.score}
                </Badge>
              </div>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4">
              <dl className="grid gap-3">
                <Detail label="Company">
                  <span className="flex items-center justify-end gap-1.5">
                    <CompanyLogo company={contact.company} />
                    {contact.company}
                  </span>
                </Detail>
                <Detail label="Pipeline">
                  <PipelineCell contact={contact} />
                </Detail>
                <Detail label="Engagement">
                  {engagementTrend(contact).label}
                </Detail>
                <Detail label="Lead score">
                  <span className={band.text}>{contact.score} / 100</span>
                </Detail>
                <Detail label="Open pipeline">
                  {formatCurrency(contact.pipeline)}
                </Detail>
              </dl>

              <div className="rounded-lg border p-3">
                <div className="mb-2 text-sm font-medium">
                  Weekly engagement
                </div>
                <EngagementCell contact={contact} />
              </div>
            </div>

            <SheetFooter className="border-t">
              <Button onClick={() => onEdit(contact)}>
                <PencilIcon />
                Edit contact
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

export function ContactFormSheet({
  open,
  contact,
  onOpenChange,
  onSave,
}: {
  open: boolean
  contact?: Contact
  onOpenChange: (open: boolean) => void
  onSave: (contact: Contact) => void
}) {
  const [form, setForm] = useState<Contact>(
    () =>
      contact ?? {
        id: `con_${Math.random().toString(36).slice(2, 8)}`,
        name: "",
        email: "",
        company: "Vercel",
        score: 50,
        pipeline: 0,
        openDeals: 1,
        status: "prospect",
        engagement: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      },
  )

  function set<K extends keyof Contact>(key: K, value: Contact[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const canSave = form.name.trim() !== "" && form.email.trim() !== ""

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="border-b pb-4">
          <SheetTitle>{contact ? "Edit contact" : "Add contact"}</SheetTitle>
          <SheetDescription>
            {contact
              ? "Update the contact. Changes apply immediately."
              : "New contacts start as prospects with no engagement history."}
          </SheetDescription>
        </SheetHeader>

        <form
          className="flex min-h-0 flex-1 flex-col"
          onSubmit={(event) => {
            event.preventDefault()
            if (!canSave) return
            onSave({
              ...form,
              name: form.name.trim(),
              email: form.email.trim(),
              company: form.company.trim(),
            })
            onOpenChange(false)
          }}
        >
          <div className="flex-1 overflow-y-auto px-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                <Input
                  id="contact-name"
                  value={form.name}
                  onChange={(event) => set("name", event.target.value)}
                  placeholder="Jane Cooper"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                <Input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => set("email", event.target.value)}
                  placeholder="jane@company.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-company">Company</FieldLabel>
                <Input
                  id="contact-company"
                  value={form.company}
                  onChange={(event) => set("company", event.target.value)}
                />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field>
                  <FieldLabel htmlFor="contact-status">Status</FieldLabel>
                  <Select
                    value={form.status}
                    onValueChange={(value) =>
                      set("status", value as ContactStatus)
                    }
                  >
                    <SelectTrigger id="contact-status" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prospect">Prospect</SelectItem>
                      <SelectItem value="customer">Customer</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <NumberField
                    value={form.pipeline}
                    onValueChange={(value) => set("pipeline", value ?? 0)}
                    step={100}
                    min={0}
                  >
                    <NumberFieldScrubArea label="Pipeline (USD)" />
                    <NumberFieldGroup>
                      <NumberFieldDecrement />
                      <NumberFieldInput />
                      <NumberFieldIncrement />
                    </NumberFieldGroup>
                  </NumberField>
                </Field>
              </div>
              <Field>
                <NumberField
                  value={form.score}
                  onValueChange={(value) => set("score", value ?? 0)}
                  min={0}
                  max={100}
                >
                  <NumberFieldScrubArea label="Lead score" />
                  <NumberFieldGroup>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberFieldGroup>
                </NumberField>
              </Field>
            </FieldGroup>
          </div>

          <SheetFooter className="border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!canSave}>
              {contact ? "Save changes" : "Add contact"}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
