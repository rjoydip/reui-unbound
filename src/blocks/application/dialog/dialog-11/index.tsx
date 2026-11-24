"use client"

import { useState } from "react"
import { ArrowUpRightIcon, PlusIcon, XIcon } from "lucide-react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Dialog as DialogRoot,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

const DEFAULTS = {
  name: "Cedar Operating",
  tag: "cedar_ops",
  label: "CEDAR STUDIO",
}

export function Dialog11Block() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(DEFAULTS.name)
  const [tag, setTag] = useState(DEFAULTS.tag)
  const [label, setLabel] = useState(DEFAULTS.label)

  const previewName = name.trim() || DEFAULTS.name
  const previewTag = tag.trim() || DEFAULTS.tag
  const previewLabel = label.trim() || DEFAULTS.label

  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/30 p-6">
      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <PlusIcon />
            Create account
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[calc(100svh-2rem)] gap-0 overflow-y-auto p-0 sm:max-w-[900px]">
          <DialogHeader className="sr-only">
            <DialogTitle>Create your finance account</DialogTitle>
            <DialogDescription>
              Set the account identity used for payouts and transfers.
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-[1fr_420px]">
            <div className="flex flex-col p-8 sm:p-10">
              <div className="space-y-1">
                <h2 className="font-heading text-2xl font-medium tracking-tight">
                  Create your finance account
                </h2>
                <p className="text-sm text-muted-foreground">
                  Set the account identity used for payouts and transfers.
                </p>
              </div>

              <div className="mt-7 space-y-4">
                <Field>
                  <FieldLabel htmlFor="finance-name" className="text-sm font-medium">
                    Account name
                  </FieldLabel>
                  <Input
                    id="finance-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="off"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="finance-tag" className="text-sm font-medium">
                    Account tag
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupAddon className="text-muted-foreground">acct_</InputGroupAddon>
                    <InputGroupInput
                      id="finance-tag"
                      value={tag}
                      maxLength={22}
                      placeholder="cedar_ops"
                      onChange={(event) =>
                        setTag(event.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))
                      }
                      autoComplete="off"
                    />
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel htmlFor="finance-label" className="text-sm font-medium">
                    Statement label
                  </FieldLabel>
                  <Input
                    id="finance-label"
                    value={label}
                    maxLength={18}
                    placeholder="CEDAR STUDIO"
                    onChange={(event) =>
                      setLabel(event.target.value.toUpperCase().replace(/[^A-Z0-9 ]/g, ""))
                    }
                    autoComplete="off"
                  />
                </Field>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t pt-5">
                <Button variant="link" className="h-auto px-0 text-foreground">
                  Terms &amp; disclosures
                  <ArrowUpRightIcon />
                </Button>
                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Not now
                  </Button>
                  <Button onClick={() => setOpen(false)}>Create account</Button>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#0c0a56_0%,#2a147e_38%,#7c3fb4_70%,#ffc0dc_100%)] p-8 md:rounded-r-xl">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 border-transparent bg-background text-foreground shadow-sm hover:bg-background"
                >
                  <XIcon />
                  <span className="sr-only">Close</span>
                </Button>
              </DialogClose>

              <div className="w-full max-w-[320px] rounded-xl bg-card p-5 text-card-foreground shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-md bg-muted text-sm font-medium">
                    {previewName.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{previewName}</p>
                    <p className="truncate text-xs text-muted-foreground">acct_{previewTag}</p>
                  </div>
                </div>

                <p className="mt-5 text-xs text-muted-foreground">Available balance</p>
                <p className="text-2xl font-medium tracking-tight">$86,240.00</p>

                <div className="mt-4 space-y-2 border-t pt-4 text-xs">
                  {[
                    ["Account type", "USD operating"],
                    ["Statement label", previewLabel],
                    ["Routing", "021000021"],
                  ].map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between gap-4">
                      <span className="text-muted-foreground">{key}</span>
                      <span className={cn("truncate text-right font-medium", key === "Statement label" && "tracking-wide")}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </DialogRoot>
    </div>
  )
}

export default Dialog11Block
