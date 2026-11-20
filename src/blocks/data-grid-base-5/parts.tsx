import {
  MonitorIcon,
  PlugIcon,
  ReceiptIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/reui-unbound/badge"
import { cn } from "cn"

import type {
  Assignee,
  Ticket,
  TicketPriority,
  TicketQueue,
  TicketStatus,
} from "./data"

const QUEUE_META: Record<
  TicketQueue,
  { icon: typeof MonitorIcon; tone: string }
> = {
  Platform: { icon: MonitorIcon, tone: "text-foreground" },
  Billing: { icon: ReceiptIcon, tone: "text-warning-foreground" },
  Authentication: { icon: ShieldCheckIcon, tone: "text-info" },
  Integrations: { icon: PlugIcon, tone: "text-success-foreground" },
}

export function TicketCell({ ticket }: { ticket: Ticket }) {
  return (
    <div className="min-w-0">
      <div className="text-foreground truncate font-medium">{ticket.title}</div>
      <div className="text-muted-foreground truncate text-xs">
        {ticket.number} &middot; {ticket.openedAgo}
      </div>
    </div>
  )
}

export function RequesterCell({ ticket }: { ticket: Ticket }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-6">
        <AvatarImage
          src={ticket.requester.avatar}
          alt={ticket.requester.name}
        />
        <AvatarFallback className="text-[9px]">
          {ticket.requester.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <div className="text-foreground truncate text-sm font-medium">
          {ticket.requester.name}
        </div>
        <div className="text-muted-foreground truncate text-xs">
          {ticket.requester.company}
        </div>
      </div>
    </div>
  )
}

export function QueueCell({ queue }: { queue: TicketQueue }) {
  const meta = QUEUE_META[queue]
  const Icon = meta.icon

  return (
    <span className="flex items-center gap-1.5 text-sm">
      <Icon className={cn("size-3.5", meta.tone)} />
      {queue}
    </span>
  )
}

const PRIORITY_META: Record<
  TicketPriority,
  "destructive-light" | "warning-light" | "invert-light"
> = {
  Urgent: "destructive-light",
  High: "warning-light",
  Low: "invert-light",
}

export function PriorityBadge({ priority }: { priority: TicketPriority }) {
  return (
    <Badge variant={PRIORITY_META[priority]} className="font-medium">
      {priority}
    </Badge>
  )
}

export function SlaCell({ ticket }: { ticket: Ticket }) {
  const breached = ticket.slaMinutes !== null && ticket.slaMinutes < 0
  const close =
    ticket.slaMinutes !== null &&
    ticket.slaMinutes >= 0 &&
    ticket.slaMinutes <= 60
  const label =
    ticket.slaMinutes === null
      ? "Closed"
      : breached
        ? `Breached ${Math.abs(ticket.slaMinutes)}m`
        : `${ticket.slaMinutes}m left`

  return (
    <div className="flex flex-col gap-0.5">
      <span
        className={cn(
          "text-sm font-medium",
          breached && "text-destructive",
          close && "text-warning-foreground",
          ticket.slaMinutes === null && "text-muted-foreground",
        )}
      >
        {label}
      </span>
      <span className="text-muted-foreground text-xs">{ticket.slaNote}</span>
    </div>
  )
}

const STATUS_META: Record<TicketStatus, { dot: string }> = {
  Open: { dot: "bg-info" },
  Pending: { dot: "bg-warning" },
  Resolved: { dot: "bg-success" },
}

export function StatusCell({ status }: { status: TicketStatus }) {
  return (
    <Badge variant="outline" className="gap-1.5 font-medium">
      <span className={cn("size-1.5 rounded-full", STATUS_META[status].dot)} />
      {status}
    </Badge>
  )
}

export function AssigneeAvatar({ assignee }: { assignee: Assignee }) {
  return (
    <span className="flex items-center gap-2">
      <Avatar className="size-6">
        <AvatarImage src={assignee.avatar} alt={assignee.name} />
        <AvatarFallback className="text-[9px]">
          {assignee.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <span className="text-sm">{assignee.name}</span>
    </span>
  )
}
