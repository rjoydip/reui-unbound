import {
  AppleIcon,
  ChartColumnIcon,
  Gamepad2Icon,
  LinkIcon,
} from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"
import { cn } from "cn"

const METRICS = [
  {
    icon: LinkIcon,
    value: "102.9k",
    label: "Account Followers",
    tile: "bg-[linear-gradient(180deg,#404040,#0a0a0a)]",
  },
  {
    icon: Gamepad2Icon,
    value: "23.7k",
    label: "Avg. Stream Viewers",
    tile: "bg-[linear-gradient(180deg,#8b5cf6,#5b21b6)]",
  },
  {
    icon: ChartColumnIcon,
    value: "93.1k",
    label: "GitHub Stars",
    tile: "bg-[linear-gradient(180deg,#404040,#0a0a0a)]",
  },
  {
    icon: AppleIcon,
    value: "5M+",
    label: "Weekly Downloads",
    tile: "bg-[linear-gradient(180deg,#ef4444,#b91c1c)]",
  },
]

export function CardAudienceReachStatsBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <div className="grid w-full max-w-[960px] gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((metric) => {
          const Icon = metric.icon
          return (
            <Frame key={metric.label} spacing="xs" className="h-full">
              <FramePanel className="relative flex min-h-[152px] flex-col gap-8 overflow-hidden p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:16px_16px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
                />

                <span
                  className={cn(
                    "relative flex size-10 items-center justify-center rounded-lg text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.25)] ring-1 ring-black/10",
                    metric.tile
                  )}
                >
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>

                <div className="relative mt-auto flex flex-col gap-0.5">
                  <p className="text-2xl font-semibold tracking-tight">
                    {metric.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{metric.label}</p>
                </div>
              </FramePanel>
            </Frame>
          )
        })}
      </div>
    </div>
  )
}

export default CardAudienceReachStatsBlock
