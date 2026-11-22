import { useState } from "react"
import { ArrowDownIcon, ArrowUpIcon, MinusIcon, PinIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

import {
  COMPANY_MARKS,
  SCORE_BANDS,
  engagementTrend,
  formatCurrency,
  initials,
  scoreBand,
} from "./data"
import type { Contact, ContactStatus } from "./data"

export function CompanyLogo({ company }: { company: string }) {
  const [failed, setFailed] = useState(false)
  const mark = COMPANY_MARKS[company]

  if (!mark || failed) {
    return (
      <span className="bg-muted text-muted-foreground inline-flex size-4 shrink-0 items-center justify-center rounded-[3px] text-[9px] font-semibold">
        {company.slice(0, 1)}
      </span>
    )
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${mark.slug}/${mark.color}`}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className="size-4 shrink-0"
    />
  )
}

export function ContactCell({ contact }: { contact: Contact }) {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-8">
        <AvatarImage src={contact.avatar} alt={contact.name} />
        <AvatarFallback className="text-[10px]">
          {initials(contact.name)}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">
          {contact.name}
        </div>
        <div className="text-muted-foreground truncate text-xs">
          {contact.email}
        </div>
      </div>
    </div>
  )
}

export function ScoreCell({ score }: { score: number }) {
  const band = SCORE_BANDS.find((entry) => entry.value === scoreBand(score))!

  return (
    <div className="flex items-center gap-3">
      <div className="bg-muted h-1.5 w-24 overflow-hidden rounded-full">
        <div
          className={cn("h-full rounded-full", band.bar)}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-sm font-medium tabular-nums">{score}</span>
    </div>
  )
}

export function EngagementCell({ contact }: { contact: Contact }) {
  const trend = engagementTrend(contact)
  const Icon =
    trend.state === "up"
      ? ArrowUpIcon
      : trend.state === "down"
        ? ArrowDownIcon
        : MinusIcon

  return (
    <div className="flex flex-col gap-1">
      <div className="flex h-6 items-end gap-px" aria-hidden>
        {contact.engagement.map((value, index) => (
          <span
            key={index}
            className={cn(
              "w-1 rounded-[1px]",
              value >= 8 ? "bg-success/70" : "bg-muted-foreground/25",
            )}
            style={{ height: `${(value / 10) * 100}%` }}
          />
        ))}
      </div>
      <div className="text-muted-foreground flex items-center gap-1 text-xs">
        <span>{trend.label}</span>
        <span aria-hidden>&middot;</span>
        <span
          className={cn(
            "flex items-center gap-0.5",
            trend.state === "up" && "text-success-foreground",
            trend.state === "down" && "text-destructive",
          )}
        >
          <Icon className="size-3" />
          {trend.changeLabel}
        </span>
      </div>
    </div>
  )
}

const STATUS_META: Record<
  ContactStatus,
  { label: string; variant: "warning-light" | "success-light"; dot: string }
> = {
  prospect: { label: "Prospect", variant: "warning-light", dot: "bg-warning" },
  customer: { label: "Customer", variant: "success-light", dot: "bg-success" },
}

export function StatusBadge({ status }: { status: ContactStatus }) {
  const meta = STATUS_META[status]

  return (
    <Badge variant={meta.variant} size="lg" className="gap-1.5 font-medium">
      <span className={cn("size-1.5 rounded-full", meta.dot)} />
      {meta.label}
    </Badge>
  )
}

export function PipelineCell({ contact }: { contact: Contact }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-sm font-medium tabular-nums">
        {formatCurrency(contact.pipeline)}
      </span>
      <span className="text-muted-foreground text-xs">
        {contact.openDeals} open deal{contact.openDeals === 1 ? "" : "s"}
      </span>
    </div>
  )
}

export function PinButton({
  pinned,
  onToggle,
}: {
  pinned: boolean
  onToggle: () => void
}) {
  return (
    <Button
      variant="ghost"
      size="icon-xs"
      aria-label={pinned ? "Unpin contact" : "Pin contact"}
      aria-pressed={pinned}
      className={cn(
        "text-muted-foreground hover:text-foreground",
        pinned && "text-foreground",
      )}
      onClick={(event) => {
        event.stopPropagation()
        onToggle()
      }}
    >
      <PinIcon className={cn(pinned && "fill-current")} />
    </Button>
  )
}
