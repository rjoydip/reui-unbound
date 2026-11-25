import { ZapIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { Button } from "@/components/ui/button"

export function CardUpsellPromoBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[250px]">
        <FramePanel className="flex flex-col items-center gap-5 px-6 py-8 text-center">
          <div className="relative flex h-24 w-32 items-center justify-center">
            <span
              aria-hidden="true"
              className="absolute left-1 h-20 w-20 -rotate-6 rounded-2xl bg-[radial-gradient(120%_120%_at_20%_20%,#fde68a,transparent_55%),radial-gradient(120%_120%_at_85%_15%,#f9a8d4,transparent_60%),radial-gradient(140%_140%_at_50%_100%,#22d3ee,#93c5fd_45%,#a78bfa)] shadow-md ring-4 ring-white/70 dark:ring-white/10"
            />
            <span
              aria-hidden="true"
              className="absolute right-1 h-20 w-20 rotate-6 rounded-2xl bg-[radial-gradient(110%_110%_at_80%_15%,#c084fc,transparent_60%),radial-gradient(130%_130%_at_20%_80%,#7c3aed,#4c1d95)] shadow-md ring-4 ring-white/70 dark:ring-white/10"
            />
          </div>

          <Badge variant="outline" radius="full" className="bg-background">
            Play Mode
          </Badge>

          <div className="flex flex-col items-center gap-1.5">
            <span className="text-lg font-semibold">Practice Trading Safely</span>
            <p className="text-muted-foreground max-w-[230px] text-sm leading-relaxed">
              Analyze live market data to identify patterns and respond with
              precision
            </p>
          </div>

          <Button className="gap-1.5 rounded-full px-4 font-medium">
            <ZapIcon className="size-3.5" aria-hidden="true" />
            Try Demo Trading
          </Button>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default CardUpsellPromoBlock
