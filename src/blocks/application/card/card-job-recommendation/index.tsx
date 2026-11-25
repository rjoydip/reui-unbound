import { BanknoteIcon, LaptopIcon, MapPinIcon, ZapIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Frame, FramePanel } from "@/components/kit/frame"

function BinanceMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6" fill="#F0B90B">
      <path d="M12 1.8 15.1 4.9 12 8 8.9 4.9 12 1.8Zm-7.1 7.1L8 12l-3.1 3.1L1.8 12l3.1-3.1Zm14.2 0L22.2 12l-3.1 3.1L16 12l3.1-3.1ZM12 8.9l3.1 3.1L12 15.1 8.9 12 12 8.9Zm-7.1 7.1L8 19.1 4.9 22.2 1.8 19.1 4.9 16Zm14.2 0 3.1 3.1-3.1 3.1-3.1-3.1 3.1-3.1Z" />
    </svg>
  )
}

const META = [
  { icon: MapPinIcon, label: "Berlin, Germany" },
  { icon: LaptopIcon, label: "Hybrid" },
  { icon: BanknoteIcon, label: "$60-75k/year" },
]

export function CardJobRecommendationBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame spacing="sm" className="w-full max-w-[592px]">
        <div className="text-foreground flex items-center gap-2 px-1 py-0.5 text-sm font-medium">
          <ZapIcon className="text-muted-foreground size-4" aria-hidden="true" />
          Recommended Role, based on your profile
        </div>

        <FramePanel className="p-5">
          <div className="flex items-center gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-neutral-950 shadow-sm ring-1 ring-black/10">
              <BinanceMark />
            </span>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-lg leading-none font-semibold tracking-tight">
                Software Engineer
              </h3>
              <p className="text-muted-foreground text-sm">Resend</p>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="text-foreground flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {META.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5">
                <Icon
                  className="text-muted-foreground size-4"
                  aria-hidden="true"
                />
                {label}
              </span>
            ))}
          </div>

          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            Join the engineering team at CloudCore to build scalable cloud
            platforms. Collaborate on backend systems, APIs, and modern
            infrastructure to deliver enterprise solutions worldwide.
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Button size="sm">Quick Apply</Button>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default CardJobRecommendationBlock
