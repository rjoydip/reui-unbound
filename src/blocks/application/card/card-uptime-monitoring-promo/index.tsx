import { BotIcon, BoxIcon, GemIcon, WorkflowIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Frame, FramePanel } from "@/components/kit/frame"
import { cn } from "cn"

function LogoTile({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        "border-border bg-card flex size-16 items-center justify-center rounded-2xl border shadow-xs",
        className
      )}
    >
      {children}
    </span>
  )
}

export function CardUptimeMonitoringPromoBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame
        stacked
        spacing="xs"
        className="bg-muted/40 w-full max-w-[388px]"
      >
        <FramePanel className="relative min-h-[212px] overflow-hidden p-4">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:22px_22px] opacity-40"
          />

          <div className="relative h-[180px]">
            <div className="absolute top-2 left-0 flex items-end gap-1.5">
              <span className="text-7xl leading-none font-semibold tracking-tight">
                24
              </span>
              <span className="flex flex-col pb-2">
                <span className="text-muted-foreground text-[11px] leading-tight">
                  Monitoring
                </span>
                <span className="text-muted-foreground/50 text-3xl leading-none font-semibold">
                  /7
                </span>
              </span>
            </div>

            <LogoTile className="absolute top-0 right-20">
              <BotIcon className="size-7 text-neutral-800 dark:text-neutral-200" />
            </LogoTile>
            <LogoTile className="absolute top-4 right-0">
              <GemIcon className="text-muted-foreground size-7" />
            </LogoTile>
            <LogoTile className="absolute bottom-0 left-28">
              <BoxIcon className="size-7 fill-amber-400 text-amber-500" />
            </LogoTile>
            <LogoTile className="absolute bottom-0 left-48">
              <WorkflowIcon className="size-7 text-emerald-600" />
            </LogoTile>
          </div>
        </FramePanel>

        <FramePanel className="flex flex-col items-center gap-3 px-6 py-7 text-center">
          <h3 className="text-lg font-semibold tracking-tight">
            Always On Watch
          </h3>
          <p className="text-muted-foreground max-w-[320px] text-sm text-balance">
            Get continuous oversight of market activity with automated tools
            running day and night.
          </p>
          <Button size="sm" className="mt-1 rounded-full px-3">
            Start Monitoring
          </Button>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default CardUptimeMonitoringPromoBlock
