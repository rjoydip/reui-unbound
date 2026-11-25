import {
  ClockIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
  PackageIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Frame, FrameHeader, FramePanel, FrameTitle } from "@/components/kit/frame"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DELIVERY_DETAILS: {
  icon: typeof MapPinIcon
  content: string
  secondary?: string
  badge?: string
}[] = [
  {
    icon: MapPinIcon,
    content: "Overtoom 135, 1054 HG Amsterdam",
    badge: "Home",
  },
  {
    icon: ClockIcon,
    content: "37m 23s",
    secondary: "24m ago",
  },
  {
    icon: PackageIcon,
    content: "#NL-54321-AMST",
    secondary: "Live Tracking",
  },
]

export function CardDeliveryTrackingBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[445px]">
        <FrameHeader className="flex-row items-center gap-2.5">
          <span className="bg-card flex size-6 items-center justify-center rounded-md border shadow-xs">
            <PackageIcon className="size-3.5" aria-hidden="true" />
          </span>
          <FrameTitle className="flex-1">Delivery Details</FrameTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-7"
                aria-label="Delivery details actions"
              >
                <EllipsisVerticalIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Copy link</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </FrameHeader>

        <FramePanel className="flex flex-col gap-3">
          {DELIVERY_DETAILS.map((row) => (
            <div key={row.content} className="flex items-center gap-2.5">
              <row.icon
                className="text-muted-foreground size-4 shrink-0"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="text-sm">{row.content}</span>
              {row.secondary ? (
                <span className="text-muted-foreground text-xs">
                  {row.secondary}
                </span>
              ) : null}
              {row.badge ? (
                <Badge variant="primary-light" size="xs" radius="full">
                  {row.badge}
                </Badge>
              ) : null}
            </div>
          ))}

          <div className="mt-1 flex flex-col gap-1">
            <span className="text-sm font-medium">Delivery Notes</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Driver confirmed delivery at the main entrance; photo proof
              uploaded to the order.
            </p>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default CardDeliveryTrackingBlock
