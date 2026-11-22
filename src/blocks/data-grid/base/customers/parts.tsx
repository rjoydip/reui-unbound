import { useState } from "react"
import { ArrowDownIcon, ArrowUpIcon, CircleSlash2Icon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

import {
  COMPANY_LOGOS,
  STATUS_OPTIONS,
  formatCurrency,
  formatPercent,
  initials,
} from "./data"
import type { Customer, CustomerStatus } from "./data"

export function CompanyLogo({
  company,
  className,
}: {
  company: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const logo = COMPANY_LOGOS[company]

  if (!logo || failed) {
    return (
      <span
        aria-hidden
        className={cn(
          "bg-muted text-muted-foreground inline-flex size-4 shrink-0 items-center justify-center rounded-sm text-[9px] font-semibold",
          className,
        )}
      >
        {company.slice(0, 1)}
      </span>
    )
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color}`}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("size-4 shrink-0", className)}
    />
  )
}

export function StatusBadge({ status }: { status: CustomerStatus }) {
  const meta = STATUS_OPTIONS.find((option) => option.value === status)!

  return (
    <Badge variant={meta.badge} size="lg" className="gap-1.5 font-medium">
      <span className={cn("size-1.5 rounded-full", meta.dot)} />
      {meta.label}
    </Badge>
  )
}

export function PlanBadge({ plan }: { plan: Customer["plan"] }) {
  return (
    <Badge variant="outline" size="lg" className="bg-background font-normal">
      {plan}
    </Badge>
  )
}

export function CustomerAvatar({
  customer,
  className,
}: {
  customer: Customer
  className?: string
}) {
  return (
    <Avatar className={cn("size-8", className)}>
      <AvatarImage src={customer.avatar} alt={customer.name} />
      <AvatarFallback className="text-[10px] font-medium">
        {initials(customer.name)}
      </AvatarFallback>
    </Avatar>
  )
}

export function CustomerCell({ customer }: { customer: Customer }) {
  return (
    <div className="flex items-center gap-2.5">
      <CustomerAvatar customer={customer} />
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">
          {customer.name}
        </div>
        <div className="text-muted-foreground truncate text-xs">
          {customer.email}
        </div>
      </div>
    </div>
  )
}

export function BalanceCell({ customer }: { customer: Customer }) {
  const reversed = customer.balance < 0
  const previous =
    customer.change === null
      ? null
      : customer.balance / (1 + customer.change / 100)

  return (
    <div className="flex flex-col items-end gap-0.5">
      <div
        className={cn(
          "flex items-center gap-1.5 font-medium tabular-nums",
          reversed && "text-destructive",
        )}
      >
        {reversed && (
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="inline-flex shrink-0 items-center">
                <CircleSlash2Icon className="size-3.5" />
                <span className="sr-only">Balance reversed</span>
              </span>
            </TooltipTrigger>
            <TooltipContent className="max-w-64 text-pretty">
              {customer.reversalNote ?? "This balance was reversed."}
            </TooltipContent>
          </Tooltip>
        )}
        {formatCurrency(Math.abs(customer.balance))}
      </div>
      {customer.change === null ? (
        <span className="text-muted-foreground text-xs">No statement yet</span>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <span
              className={cn(
                "flex items-center gap-1 text-xs tabular-nums",
                customer.change < 0
                  ? "text-destructive"
                  : "text-muted-foreground",
              )}
            >
              {customer.change < 0 ? (
                <ArrowDownIcon className="size-3" />
              ) : (
                <ArrowUpIcon className="size-3" />
              )}
              {formatPercent(customer.change)}
            </span>
          </TooltipTrigger>
          <TooltipContent className="text-pretty">
            {previous === null
              ? "No prior statement to compare against."
              : `${customer.change < 0 ? "Down" : "Up"} ${formatPercent(
                  customer.change,
                )} on the prior statement of ${formatCurrency(
                  Math.abs(previous),
                )}.`}
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  )
}
