import { MapPinIcon, PackageIcon, TrendingUpIcon } from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"

const CARDS = [
  {
    label: "Total Orders",
    title: "Analytics",
    description:
      "Track every order and monitor growth trends with real-time updates.",
    icon: PackageIcon,
  },
  {
    label: "Revenue",
    title: "Financial Summary",
    description:
      "Get instant insights into earnings and cash flow performance.",
    icon: TrendingUpIcon,
  },
  {
    label: "Shipments",
    title: "Logistics",
    description: "Stay on top of deliveries and track shipment statuses efficiently.",
    icon: MapPinIcon,
  },
]

export function CardLinkedMetricTilesBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <div className="grid w-full max-w-[980px] gap-2.5 md:grid-cols-3">
        {CARDS.map((card) => {
          const Icon = card.icon
          return (
            <Frame key={card.label} spacing="xs" className="bg-muted/50 h-full">
              <div className="flex items-center gap-2 px-2 py-1">
                <Icon
                  className="text-muted-foreground size-4"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium">{card.label}</span>
              </div>
              <FramePanel className="flex flex-col gap-1.5 p-3.5">
                <a
                  href="#"
                  className="w-fit text-sm font-semibold tracking-tight outline-none hover:underline focus-visible:underline"
                >
                  {card.title}
                </a>
                <p className="text-muted-foreground text-sm">
                  {card.description}
                </p>
              </FramePanel>
            </Frame>
          )
        })}
      </div>
    </div>
  )
}

export default CardLinkedMetricTilesBlock
