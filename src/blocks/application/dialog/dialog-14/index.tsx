"use client"

import { useState } from "react"
import { ExternalLinkIcon, ShieldCheckIcon } from "lucide-react"
import { cn } from "cn"

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Openai } from "@/components/ui/svgs/openai"

const PERMISSIONS = [
  { icon: ExternalLinkIcon, title: "Google Review", description: "Approve permissions on Google's page." },
  { icon: ShieldCheckIcon, title: "Data Control", description: "Disconnect anytime from settings." },
] as const

const SYNC_SCOPES = [
  { id: "headers", label: "Headers Only", note: "Recommended", description: "Sender, subject, and dates." },
  { id: "messages", label: "Messages", note: "Better context", description: "Thread text for answers." },
] as const

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.86c2.26-2.09 3.56-5.17 3.56-8.87z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.29a11.99 11.99 0 0 0 0 10.76l3.98-3.09z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  )
}

export function Dialog14Block() {
  const [open, setOpen] = useState(false)
  const [scope, setScope] = useState<string>("headers")

  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/30 p-6">
      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Connect Gmail</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[calc(100svh-2rem)] gap-0 overflow-y-auto p-0 sm:max-w-[390px]">
          <DialogHeader className="items-center gap-0 px-6 pt-6 text-center">
            <div className="flex items-center gap-2.5 text-foreground">
              <Openai />
              <span className="flex items-center gap-1" aria-hidden="true">
                {[0, 1, 2, 3].map((dot) => (
                  <span key={dot} className="size-1 rounded-full bg-muted-foreground/40" />
                ))}
              </span>
              <GoogleMark />
            </div>
            <DialogTitle className="mt-4 text-base">Connect Gmail</DialogTitle>
            <DialogDescription>Choose what Gmail can share.</DialogDescription>
          </DialogHeader>

          <div className="mt-5 space-y-3 px-6">
            {PERMISSIONS.map((permission) => (
              <div key={permission.title} className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-muted/40">
                  <permission.icon className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">{permission.title}</p>
                  <p className="text-sm text-muted-foreground">{permission.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-6 my-5 border-t" />

          <Field className="px-6">
            <FieldLabel className="text-sm font-medium">Sync Scope</FieldLabel>
            <RadioGroup value={scope} onValueChange={setScope} className="mt-1 gap-2">
              {SYNC_SCOPES.map((option) => (
                <label
                  key={option.id}
                  onClick={(event) => {
                    if ((event.target as HTMLElement).closest("[data-slot=radio-group-item]")) return
                    setScope(option.id)
                  }}
                  className={cn(
                    "flex cursor-pointer flex-col gap-1 rounded-lg border p-3 transition-colors",
                    scope === option.id ? "border-ring ring-1 ring-ring/30" : "hover:bg-muted/40"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <RadioGroupItem value={option.id} aria-label={option.label} />
                    <span className="text-sm font-medium">{option.label}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{option.note}</span>
                  </span>
                  <span className="pl-6 text-sm text-muted-foreground">{option.description}</span>
                </label>
              ))}
            </RadioGroup>
          </Field>

          <DialogFooter className="mx-0 mt-6 mb-0 grid grid-cols-2 gap-2 rounded-b-xl bg-background px-6 py-4 sm:grid-cols-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </div>
  )
}

export default Dialog14Block
