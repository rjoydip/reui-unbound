import {
  CopyIcon,
  EllipsisVerticalIcon,
  PackageCheckIcon,
  PencilIcon,
  RotateCcwIcon,
  ShoppingCartIcon,
  Trash2Icon,
  TrendingDownIcon,
  TrendingUpIcon,
  TruckIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/kit/badge"
import { Frame } from "@/components/kit/frame"
import { cn } from "cn"

const METRICS = [
  {
    icon: PackageCheckIcon,
    value: "2,140",
    label: "Shipments Today",
    badge: "+0.1% vs yesterday",
    badgeVariant: "focus-light" as const,
    dashed: true,
  },
  {
    icon: TruckIcon,
    value: "96.7%",
    label: "On-Time Rate",
    badge: "Consistently improving",
    badgeVariant: "success-light" as const,
    trend: "up" as const,
  },
  {
    icon: ShoppingCartIcon,
    value: "329",
    label: "Pending Orders",
    badge: "No significant change",
    badgeVariant: "destructive-light" as const,
  },
  {
    icon: RotateCcwIcon,
    value: "18",
    label: "Returns",
    badge: "-5.8% this week",
    badgeVariant: "warning-light" as const,
    trend: "down" as const,
  },
]

function ActionsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Open metric actions"
        >
          <EllipsisVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem>
          <PencilIcon />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CopyIcon />
          Copy link
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2Icon />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function CardLogisticsKpiTilesBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <div className="grid w-full max-w-[960px] gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((metric) => {
          const Icon = metric.icon
          const TrendIcon =
            metric.trend === "up"
              ? TrendingUpIcon
              : metric.trend === "down"
                ? TrendingDownIcon
                : null
          return (
            <Frame key={metric.label} className="h-full">
              <div className="flex items-start justify-between">
                <span className="border-border bg-background flex size-9 items-center justify-center rounded-md border shadow-xs">
                  <Icon
                    className="text-foreground size-4.5"
                    aria-hidden="true"
                  />
                </span>
                <ActionsMenu />
              </div>

              <div className="mt-6 flex flex-col gap-0.5">
                <p className="text-2xl font-semibold tracking-tight">
                  {metric.value}
                </p>
                <p className="text-muted-foreground text-sm">{metric.label}</p>
              </div>

              <div className="mt-5">
                <Badge
                  variant={metric.badgeVariant}
                  className={cn(metric.dashed && "border-dashed")}
                >
                  {TrendIcon ? <TrendIcon aria-hidden="true" /> : null}
                  {metric.badge}
                </Badge>
              </div>
            </Frame>
          )
        })}
      </div>
    </div>
  )
}

export default CardLogisticsKpiTilesBlock
