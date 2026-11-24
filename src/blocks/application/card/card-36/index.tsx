import { Frame, FramePanel } from "@/components/kit/frame"

type OutreachCard = {
  title: string
  total: string
}

const CARDS: OutreachCard[] = [
  { title: "Emails Sent", total: "340" },
  { title: "Calls Made", total: "62" },
  { title: "Demo Requests", total: "18" },
  { title: "Meetings", total: "71" },
]

export function Card36Block() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-3xl">
        <div className="grid gap-(--frame-gap) sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <FramePanel
              key={card.title}
              className="flex min-h-24 flex-col justify-between p-4"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:7px_7px] [mask-image:linear-gradient(200deg,black_0%,transparent_75%)]"
              />
              <div className="relative text-lg font-semibold tracking-tight">
                {card.total}
              </div>
              <div className="relative text-sm text-muted-foreground">
                {card.title}
              </div>
            </FramePanel>
          ))}
        </div>
      </Frame>
    </div>
  )
}

export default Card36Block
