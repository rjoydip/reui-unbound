import {
  ActivityIcon,
  BarChart3Icon,
  BookOpenIcon,
  CircleDollarSignIcon,
  ShieldIcon,
  TrendingUpIcon,
} from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"

const CARDS = [
  { title: "Valuation", href: "#valuation", icon: ActivityIcon },
  { title: "Ledger", href: "#ledger", icon: BookOpenIcon },
  { title: "Funding", href: "#funding", icon: ShieldIcon },
  { title: "Cash Flow", href: "#cash-flow", icon: CircleDollarSignIcon },
  { title: "Metrics", href: "#metrics", icon: BarChart3Icon },
  { title: "Earnings", href: "#earnings", icon: TrendingUpIcon },
]

export function CardQuickLinkTilesBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[385px]" spacing="sm">
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
          {CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group rounded-[var(--frame-panel-radius)] outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <FramePanel
                fit
                className="flex h-[5.25rem] flex-col justify-between transition-colors group-hover:bg-accent/60"
              >
                <card.icon
                  className="text-muted-foreground size-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium">{card.title}</span>
              </FramePanel>
            </a>
          ))}
        </div>
      </Frame>
    </div>
  )
}

export default CardQuickLinkTilesBlock
