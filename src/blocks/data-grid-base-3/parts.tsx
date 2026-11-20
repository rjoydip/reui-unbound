import { CircleSlash2Icon, PinIcon, TriangleAlertIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

import { STAGE_META, formatAmount, progressTone } from "./data"
import type { DealStage, Opportunity } from "./data"

export function OpportunityCell({ opportunity }: { opportunity: Opportunity }) {
  return (
    <div className="min-w-0">
      <div className="text-foreground truncate font-medium">
        {opportunity.name}
      </div>
      <div className="text-muted-foreground truncate text-xs">
        {opportunity.company}
      </div>
    </div>
  )
}

export function StageCell({ stage }: { stage: DealStage }) {
  const meta = STAGE_META[stage]

  return (
    <span className="flex items-center gap-2 text-sm">
      <span className={cn("size-1.5 shrink-0 rounded-full", meta.dot)} />
      {stage}
    </span>
  )
}

export function OwnerCell({ opportunity }: { opportunity: Opportunity }) {
  return (
    <span className="flex items-center gap-2">
      <Avatar className="size-6">
        <AvatarImage
          src={opportunity.owner.avatar}
          alt={opportunity.owner.name}
        />
        <AvatarFallback className="text-[9px]">
          {opportunity.owner.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <span className="truncate text-sm">{opportunity.owner.name}</span>
    </span>
  )
}

export function AmountCell({ amount }: { amount: number }) {
  return (
    <span className="text-sm font-medium tabular-nums">
      {formatAmount(amount)}
    </span>
  )
}

export function ProgressRing({ value }: { value: number }) {
  const size = 20
  const stroke = 2.5
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <div className="flex items-center gap-2">
      <svg
        height={size}
        width={size}
        viewBox={`0 0 ${size} ${size}`}
        className={progressTone(value)}
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className="stroke-current opacity-20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * circumference} ${circumference}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="stroke-current"
        />
      </svg>
      <span className="text-sm tabular-nums">{value}%</span>
    </div>
  )
}

export function AlertsCell({ alerts }: { alerts: Opportunity["alerts"] }) {
  if (alerts.critical === 0 && alerts.warning === 0) {
    return <span className="text-muted-foreground text-sm">None</span>
  }

  return (
    <div className="flex items-center gap-2">
      {alerts.critical > 0 && (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="text-destructive flex items-center gap-1 text-sm">
              <CircleSlash2Icon className="size-3.5" />
              {alerts.critical}
              <span className="sr-only">critical alerts</span>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            {alerts.critical} critical alert{alerts.critical === 1 ? "" : "s"}
          </TooltipContent>
        </Tooltip>
      )}
      {alerts.warning > 0 && (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="text-warning-foreground flex items-center gap-1 text-sm">
              <TriangleAlertIcon className="size-3.5" />
              {alerts.warning}
              <span className="sr-only">warning alerts</span>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            {alerts.warning} warning alert{alerts.warning === 1 ? "" : "s"}
          </TooltipContent>
        </Tooltip>
      )}
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
      aria-label={pinned ? "Unpin opportunity" : "Pin opportunity"}
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

export function StageBadge({ stage }: { stage: DealStage }) {
  const meta = STAGE_META[stage]
  const variant = meta.variant as "success" | "warning" | "info" | "secondary"

  return (
    <Badge variant={variant} size="sm">
      {stage}
    </Badge>
  )
}
