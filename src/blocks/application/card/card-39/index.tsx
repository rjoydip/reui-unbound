import {
  LifeBuoyIcon,
  Link2Icon,
  PlayIcon,
  ShieldIcon,
} from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"
import { IconTile } from "@/components/kit/icon-tile"

const CARDS = [
  {
    title: "Getting Started",
    description:
      "Follow our step-by-step onboarding guides to integrate and launch your project smoothly, even if you're just getting started.",
    icon: PlayIcon,
  },
  {
    title: "Security Center",
    description:
      "Learn about our advanced security measures and best practices to keep your data protected and your app fully compliant.",
    icon: ShieldIcon,
  },
  {
    title: "Integrations",
    description:
      "Seamlessly connect your app with trusted third-party services, from analytics and payments to automation tools that boost performance.",
    icon: Link2Icon,
  },
  {
    title: "Support Hub",
    description:
      "Access expert support, detailed docs, and a vibrant developer community, with guidance for complex issues whenever needed.",
    icon: LifeBuoyIcon,
  },
]

export function Card39Block() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-5xl">
        <div className="grid gap-(--frame-gap) sm:grid-cols-2 xl:grid-cols-4">
          {CARDS.map(({ title, description, icon: Icon }) => (
            <FramePanel key={title} className="flex flex-col gap-5 p-4">
              <IconTile variant="frame" className="rounded-xl">
                <Icon />
              </IconTile>
              <div className="flex flex-col gap-1.5">
                <a
                  href="#"
                  className="text-sm font-semibold underline-offset-4 hover:underline"
                >
                  {title}
                </a>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </FramePanel>
          ))}
        </div>
      </Frame>
    </div>
  )
}

export default Card39Block
