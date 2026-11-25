import { Frame, FramePanel } from "@/components/kit/frame"
import { Separator } from "@/components/ui/separator"

const CARDS = {
  metrics: [
    { value: "$9k+", label: "Earned" },
    { value: "4x", label: "Hired" },
    { value: "4.93", label: "Rating" },
    { value: "106", label: "Followers" },
  ],
}

export function CardProfileStatStripBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[29rem]">
        <FramePanel className="flex items-stretch p-0">
          {CARDS.metrics.map((metric, index) => (
            <div key={metric.label} className="flex flex-1">
              {index > 0 ? (
                <Separator orientation="vertical" className="my-2.5" />
              ) : null}
              <div className="relative flex-1 px-3 py-2.5">
                {index === CARDS.metrics.length - 1 ? (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-80 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:6px_6px] [mask-image:radial-gradient(ellipse_at_top_right,black_0%,transparent_75%)]"
                  />
                ) : null}
                <div className="relative text-lg leading-none font-semibold tracking-tight">
                  {metric.value}
                </div>
                <div className="relative mt-1.5 text-xs text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </FramePanel>
      </Frame>
    </div>
  )
}

export default CardProfileStatStripBlock
