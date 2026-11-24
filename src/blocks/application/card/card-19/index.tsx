import { CircleDollarSignIcon } from "lucide-react"

import { Frame, FrameHeader, FramePanel, FrameTitle } from "@/components/kit/frame"
import { Button } from "@/components/ui/button"

function BinanceMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <g fill="currentColor">
        <path d="M12 2.6 15 5.6 12 8.6 9 5.6 12 2.6Z" />
        <path d="M6.1 7.9 9.1 10.9 6.1 13.9 3.1 10.9 6.1 7.9Z" />
        <path d="M17.9 7.9 20.9 10.9 17.9 13.9 14.9 10.9 17.9 7.9Z" />
        <path d="M12 9.9 15 12.9 12 15.9 9 12.9 12 9.9Z" />
        <path d="M12 17.2 15 20.2 12 23.2 9 20.2 12 17.2Z" />
      </g>
    </svg>
  )
}

export function Card19Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[520px]">
        <FrameHeader className="flex-row items-center justify-between gap-4">
          <FrameTitle>Asset Overview</FrameTitle>
          <span className="text-muted-foreground text-xs">
            Updated Mar 3, 7:32 AM GMT+7
          </span>
        </FrameHeader>

        <FramePanel className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <CircleDollarSignIcon
                className="text-muted-foreground size-4"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="text-xs font-semibold">BTS/USD</span>
              <span className="text-muted-foreground text-xs">|</span>
              <span className="text-muted-foreground text-[11px] tracking-wide uppercase">
                Cryptocurrency
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight">
                $93,725.75 USD
              </span>
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-500">
                +2.42% (+$2,215.87)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8">
              Follow
            </Button>
            <Button size="sm" className="h-8 gap-1.5 font-semibold">
              <BinanceMark className="size-3.5" />
              Trade on Binance
            </Button>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default Card19Block
