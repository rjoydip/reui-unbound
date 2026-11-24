import {
  Share2Icon,
  ShoppingBagIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"
import { Button } from "@/components/ui/button"

const CARDS = [
  {
    title: "Mobile Banking App Upgrade",
    client: "FivonaTech",
    due: "1d 18h",
    href: "#mobile-banking",
    icon: ShoppingBagIcon,
  },
  {
    title: "Crypto Portfolio Dashboard",
    client: "BlockEdge",
    due: "2d 20h",
    href: "#crypto-portfolio",
    icon: WalletIcon,
  },
  {
    title: "AI-Powered Analytics Module",
    client: "DataNexus",
    due: "3d 6h",
    href: "#analytics",
    icon: TrendingUpIcon,
  },
]

export function Card21Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <div className="grid w-full max-w-[700px] gap-3 md:grid-cols-3">
        {CARDS.map((card) => (
          <Frame key={card.title}>
            <FramePanel className="flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <span className="flex size-8 items-center justify-center rounded-lg bg-zinc-900 text-white ring-1 ring-white/10 shadow-sm">
                  <card.icon className="size-4" aria-hidden="true" />
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-7 rounded-md"
                  aria-label={`Share ${card.title}`}
                >
                  <Share2Icon className="size-3.5" />
                </Button>
              </div>

              <div className="flex flex-col gap-1.5">
                <a
                  href={card.href}
                  className="text-sm font-medium underline-offset-4 hover:underline"
                >
                  {card.title}
                </a>
                <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                  <span>{card.client}</span>
                  <span aria-hidden="true" className="size-1 rounded-full bg-current/50" />
                  <span>Due: {card.due}</span>
                </div>
              </div>
            </FramePanel>
          </Frame>
        ))}
      </div>
    </div>
  )
}

export default Card21Block
