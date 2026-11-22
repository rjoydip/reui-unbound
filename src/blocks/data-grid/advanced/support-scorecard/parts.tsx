import {
  CalendarClockIcon,
  CircleCheckIcon,
  MessagesSquareIcon,
  SparklesIcon,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { cn } from "cn"

import {
  COACHING_META,
  csatPercent,
  formatMinutes,
  initials,
  qaLabel,
  qaTone,
} from "./data"
import type { Agent, CoachingStatus } from "./data"

export function AgentAvatar({ agent, className }: { agent: Agent; className?: string }) {
  return (
    <Avatar className={cn("size-8", className)}>
      <AvatarImage src={agent.avatar} alt={agent.name} />
      <AvatarFallback className="text-[10px] font-medium">
        {initials(agent.name)}
      </AvatarFallback>
    </Avatar>
  )
}

export function AgentCell({ agent }: { agent: Agent }) {
  return (
    <div className="flex items-center gap-2.5">
      <AgentAvatar agent={agent} />
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">{agent.name}</div>
        <div className="text-muted-foreground truncate text-xs">
          {agent.team} · since {agent.started}
        </div>
      </div>
    </div>
  )
}

export function QaCell({ agent }: { agent: Agent }) {
  return (
    <div className="flex items-center gap-2">
      <span
        title={`${agent.qa} QA · ${qaLabel(agent.qa)}`}
        className={cn(
          "inline-flex size-9 items-center justify-center rounded-full border-2 text-xs font-semibold tabular-nums",
          qaTone(agent.qa),
        )}
      >
        {agent.qa}
      </span>
      <span
        className={cn(
          "text-xs tabular-nums",
          agent.qaDelta < 0 ? "text-destructive" : "text-muted-foreground",
        )}
      >
        {agent.qaDelta > 0 ? "+" : ""}
        {agent.qaDelta}
      </span>
    </div>
  )
}

export function ReopenCell({ agent }: { agent: Agent }) {
  const rate = (agent.reopens / agent.reopenTotal) * 100
  return (
    <div className="flex items-center gap-1.5">
      <span className="font-medium tabular-nums">{Math.max(1, Math.round(rate))}%</span>
      <span className="text-muted-foreground text-xs">
        of {agent.reopenTotal}
      </span>
      {rate > 8 && (
        <span className="bg-destructive size-1.5 rounded-full" title="Above 8% target" />
      )}
    </div>
  )
}

const CSAT_SEGMENTS = [
  { key: 0, className: "bg-success" },
  { key: 1, className: "bg-warning" },
  { key: 2, className: "bg-info" },
] as const

export function CsatCell({ agent }: { agent: Agent }) {
  const total = agent.csat[0] + agent.csat[1] + agent.csat[2]
  return (
    <div className="w-28">
      <div className="flex items-center justify-between text-xs tabular-nums">
        <span className="font-medium">
          {agent.csat[0]}/{total}
        </span>
        <span className="text-muted-foreground">{csatPercent(agent).toFixed(0)}%</span>
      </div>
      <div className="bg-muted mt-1 flex h-1.5 overflow-hidden rounded-full">
        {CSAT_SEGMENTS.map((segment) => (
          <span
            key={segment.key}
            className={segment.className}
            style={{ width: `${(agent.csat[segment.key]! / total) * 100}%` }}
          />
        ))}
      </div>
    </div>
  )
}

export function SpeedCell({
  minutes,
  warnAt,
  label,
}: {
  minutes: number
  warnAt: number
  label: string
}) {
  const late = minutes >= warnAt
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-sm tabular-nums",
        late ? "text-destructive font-medium" : "text-foreground",
      )}
      title={`${label}: ${formatMinutes(minutes)}`}
    >
      {formatMinutes(minutes)}
      {late && <span className="bg-destructive size-1.5 rounded-full" />}
    </span>
  )
}

export function SlaCell({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-9 text-sm font-medium tabular-nums">{value}%</span>
      <span className="bg-muted h-1.5 w-14 overflow-hidden rounded-full">
        <span
          className={cn(
            "block h-full rounded-full",
            value >= 95 ? "bg-success" : value >= 90 ? "bg-warning" : "bg-destructive",
          )}
          style={{ width: `${value}%` }}
        />
      </span>
    </div>
  )
}

const COACHING_ICON: Record<CoachingStatus, LucideIcon> = {
  "on-track": CircleCheckIcon,
  suggest: SparklesIcon,
  coaching: MessagesSquareIcon,
  scheduled: CalendarClockIcon,
}

export function CoachingBadge({
  status,
  label,
}: {
  status: CoachingStatus
  label?: string
}) {
  const meta = COACHING_META[status]
  const Icon = COACHING_ICON[status]
  return (
    <Badge variant={meta.variant} size="lg" className="gap-1 font-medium">
      <Icon />
      {label ?? meta.label}
    </Badge>
  )
}
