import { Frame, FramePanel } from "@/components/kit/frame"

type DealCard = {
  label: string
  total: string
}

const CARDS: DealCard[] = [
  { label: "Avg. Deal Size", total: "$14,9M" },
  { label: "Due Deals", total: "16" },
  { label: "Pending Invoices", total: "$2.7M" },
  { label: "Active Clients", total: "36" },
]

function DotPattern() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-80 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:7px_7px] [mask-image:radial-gradient(ellipse_at_top_right,black_5%,transparent_70%)]"
    />
  )
}

export function Card35Block() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-3xl">
        <div className="grid gap-(--frame-gap) sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <FramePanel key={card.label} className="p-4">
              <DotPattern />
              <div className="relative">
                <div className="text-sm text-muted-foreground">
                  {card.label}
                </div>
                <div className="mt-1.5 text-lg font-semibold tracking-tight">
                  {card.total}
                </div>
              </div>
            </FramePanel>
          ))}
        </div>
      </Frame>
    </div>
  )
}

export default Card35Block
