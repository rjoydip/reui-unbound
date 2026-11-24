import {
  BarChart3Icon,
  CheckCircle2Icon,
  DollarSignIcon,
  FileTextIcon,
  MessageSquareIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { IconTile } from "@/components/kit/icon-tile"

const PROFILE = {
  name: "Mara Alves",
  status: "Open to Proposals",
  email: "malves@reui-capital.io",
}

const STATS = [
  { value: "87", label: "Deals" },
  { value: "$7.2M", label: "Avg. Ticket" },
  { value: "$415M", label: "Total Fund" },
]

const FUNDING_SOURCES = [
  {
    name: "Northline Ventures",
    amount: "$7,840,000",
    icon: BarChart3Icon,
    tileClassName: "bg-neutral-900 text-white dark:bg-neutral-800",
  },
  {
    name: "Bluepeak Capital",
    amount: "$3,260,000",
    icon: FileTextIcon,
    tileClassName: "bg-violet-600 text-white",
  },
  {
    name: "Everfield Equity",
    amount: "$1,180,000",
    icon: DollarSignIcon,
    tileClassName: "bg-amber-500 text-white",
  },
]

export function Card3Block() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-sm rounded-xl border bg-card p-4">
        <div className="flex items-start gap-3">
          <Avatar className="size-18 shrink-0 rounded-lg after:rounded-lg">
            <AvatarFallback className="rounded-lg bg-gradient-to-br from-amber-100 via-rose-100 to-rose-200 text-lg font-medium text-amber-900">
              MA
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 pt-1">
            <p className="text-[15px] font-semibold leading-tight">{PROFILE.name}</p>
            <Badge
              variant="success-light"
              radius="full"
              size="sm"
              className="mt-1.5"
            >
              <CheckCircle2Icon />
              {PROFILE.status}
            </Badge>
            <p className="mt-2 truncate text-[13px] text-muted-foreground">
              {PROFILE.email}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 divide-x overflow-hidden rounded-lg border bg-muted/20">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-3 py-2.5 text-center">
              <p className="text-[13px] font-semibold">{stat.value}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 divide-y divide-dashed">
          {FUNDING_SOURCES.map((source) => {
            const Icon = source.icon
            return (
              <div key={source.name} className="flex items-center gap-3 py-2.5">
                <IconTile size="sm" className={source.tileClassName}>
                  <Icon />
                </IconTile>
                <span className="min-w-0 flex-1 truncate text-[14px] font-medium">
                  {source.name}
                </span>
                <span className="text-[13px] font-semibold tabular-nums">
                  {source.amount}
                </span>
              </div>
            )
          })}
        </div>

        <Button variant="outline" className="mt-2.5 w-full">
          <MessageSquareIcon />
          Send Funding Proposal
        </Button>
      </div>
    </div>
  )
}

export default Card3Block
