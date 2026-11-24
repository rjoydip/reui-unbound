import { LinkIcon, TrendingUpIcon, PackageIcon, BoxIcon } from "lucide-react"

import { Frame, FrameHeader, FramePanel, FrameTitle } from "@/components/kit/frame"

const CARDS = [
  {
    label: "Binance",
    icon: BoxIcon,
    description:
      "Track trading volumes, liquidity shifts, and price movements for informed decisions",
    href: "https://www.binance.com/en/markets/overview",
    link: "https://www.binance.com/en/markets/over...",
  },
  {
    label: "Revenue",
    icon: TrendingUpIcon,
    description:
      "Get instant insights into earnings and cash flow performance.",
    href: "https://nexo.io/earn/crypto-detailed-portfolio",
    link: "https://nexo.io/earn/crypto-detailed-portfol...",
  },
  {
    label: "Shipments",
    icon: PackageIcon,
    description:
      "Stay on top of deliveries and track shipment statuses efficiently.",
    href: "https://www.educare.io/platform/analytics/earnings",
    link: "https://www.educare.io/platform/analytics/e...",
  },
]

export function Card18Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <div className="grid w-full max-w-[800px] gap-3 md:grid-cols-3">
        {CARDS.map((card) => (
          <Frame key={card.label} className="gap-0">
            <FrameHeader className="flex-row items-center gap-2">
              <card.icon
                className="text-muted-foreground size-4"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <FrameTitle className="text-sm font-semibold">{card.label}</FrameTitle>
            </FrameHeader>
            <FramePanel className="flex flex-col gap-3">
              <p className="text-sm leading-relaxed">{card.description}</p>
              <a
                href={card.href}
                className="text-muted-foreground hover:text-foreground flex min-w-0 items-center gap-1.5 text-xs underline underline-offset-4 transition-colors"
              >
                <LinkIcon className="size-3 shrink-0" aria-hidden="true" />
                <span className="truncate">{card.link}</span>
              </a>
            </FramePanel>
          </Frame>
        ))}
      </div>
    </div>
  )
}

export default Card18Block
