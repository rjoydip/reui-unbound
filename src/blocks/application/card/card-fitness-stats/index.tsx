import { Frame, FramePanel } from "@/components/kit/frame"

type FitnessCard = {
  value: string
  unit: string
  text: string
}

const CARDS: FitnessCard[] = [
  { value: "72", unit: "bpm", text: "Heart Rate" },
  { value: "6.2", unit: "km", text: "Distance Run" },
  { value: "480", unit: "kcal", text: "Calories Burned" },
  { value: "120", unit: "reps", text: "Strength Reps" },
]

export function CardFitnessStatsBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-xs">
        <div className="grid grid-cols-2 gap-(--frame-gap)">
          {CARDS.map((card) => (
            <FramePanel
              key={card.text}
              className="flex min-h-28 flex-col justify-between p-4"
            >
              <div className="flex items-baseline gap-0.5">
                <span className="text-2xl leading-none font-semibold tracking-tight">
                  {card.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {card.unit}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">{card.text}</div>
            </FramePanel>
          ))}
        </div>
      </Frame>
    </div>
  )
}

export default CardFitnessStatsBlock
