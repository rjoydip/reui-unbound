"use client"

import { useState } from "react"
import { CheckIcon, Link2Icon, UserRoundPlusIcon } from "lucide-react"
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

const INCOMING_CONTACT = {
  name: "Maya Chen",
  email: "maya.chen@northwind.io",
  company: "Northwind Labs",
  source: "Demo request",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
}

const CANDIDATES = [
  {
    name: "Maya L. Chen",
    score: 97,
    band: "Strong" as const,
    email: "maya.chen@northwind.io",
    company: "Northwind Labs",
    emailMatch: true,
    companyMatch: true,
    status: "Customer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80",
  },
  {
    name: "Maya Chen-Ruiz",
    score: 81,
    band: "Likely" as const,
    email: "maya.ruiz@gmail.com",
    company: "Northwind Labs",
    emailMatch: false,
    companyMatch: true,
    status: "Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80",
  },
  {
    name: "M. Chen",
    score: 74,
    band: "Likely" as const,
    email: "mchen@northwind.io",
    company: "Northwind Labs",
    emailMatch: false,
    companyMatch: true,
    status: "Churned",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80",
  },
  {
    name: "Maya Cheng",
    score: 58,
    band: "Weak" as const,
    email: "maya@chengstudio.co",
    company: "Cheng Studio",
    emailMatch: false,
    companyMatch: false,
    status: "Qualified",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80",
  },
]

const BAND_VARIANTS = {
  Strong: "success-light",
  Likely: "info-light",
  Weak: "warning-light",
} as const

function MatchLine({
  value,
  matched,
}: {
  value: string
  matched: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-1", matched && "text-foreground")}>
      {matched ? <CheckIcon className="size-3.5 text-emerald-600" /> : null}
      {value}
    </span>
  )
}

export function Dialog16Block() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/30 p-6">
      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Save contact</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[calc(100svh-2rem)] gap-0 overflow-y-auto p-0 sm:max-w-[580px]">
          <DialogHeader className="space-y-1 px-6 pt-5">
            <DialogTitle className="text-base">Possible Duplicates</DialogTitle>
            <DialogDescription>
              {CANDIDATES.length} existing contacts may match this one.
            </DialogDescription>
          </DialogHeader>

          <div className="px-6 py-4">
            <p className="mb-2 text-xs font-medium text-muted-foreground">New Contact</p>
            <div className="flex items-center gap-3 rounded-lg border border-dashed p-3">
              <Avatar className="size-9">
                <AvatarImage src={INCOMING_CONTACT.avatar} alt={INCOMING_CONTACT.name} />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{INCOMING_CONTACT.name}</p>
                <p className="truncate text-sm text-muted-foreground">
                  {INCOMING_CONTACT.email} <span className="px-1">·</span> {INCOMING_CONTACT.company}
                </p>
              </div>
              <span className="hidden shrink-0 text-sm text-muted-foreground sm:block">
                {INCOMING_CONTACT.source}
              </span>
            </div>

            <p className="mt-5 mb-2 text-xs font-medium text-muted-foreground">Existing Contacts</p>
            <div className="space-y-2">
              {CANDIDATES.map((candidate) => (
                <div
                  key={candidate.email}
                  className="flex items-center gap-3 rounded-lg border p-3"
                >
                  <Avatar className="size-9 shrink-0">
                    <AvatarImage src={candidate.avatar} alt={candidate.name} />
                    <AvatarFallback>{candidate.name.slice(0, 1)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="truncate text-sm font-medium">{candidate.name}</span>
                      <Badge
                        variant={BAND_VARIANTS[candidate.band]}
                        size="sm"
                        className="rounded-md"
                      >
                        {candidate.band} {candidate.score}%
                      </Badge>
                    </div>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[13px] text-muted-foreground">
                      <MatchLine value={candidate.email} matched={candidate.emailMatch} />
                      <span aria-hidden="true">·</span>
                      <MatchLine value={candidate.company} matched={candidate.companyMatch} />
                    </div>
                  </div>
                  <span className="hidden w-14 shrink-0 text-right text-sm text-muted-foreground sm:block">
                    {candidate.status}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0"
                    onClick={() => setOpen(false)}
                  >
                    <Link2Icon />
                    Link
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <DialogFooter className="mx-0 mb-0 rounded-b-xl sm:justify-end">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>
              <UserRoundPlusIcon />
              Create New
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </div>
  )
}

export default Dialog16Block
