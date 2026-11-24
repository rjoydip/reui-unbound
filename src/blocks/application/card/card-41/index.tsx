import {
  BarChart3Icon,
  Link2Icon,
  PaletteIcon,
  ShieldIcon,
} from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"
import { IconTile } from "@/components/kit/icon-tile"

const CARDS = [
  {
    title: "API Integration",
    summary: "Quick steps to connect APIs",
    icon: Link2Icon,
    iconBg: "bg-emerald-600",
  },
  {
    title: "UI Themes",
    summary: "Ready-made styles for apps",
    icon: PaletteIcon,
    iconBg: "bg-indigo-600",
  },
  {
    title: "Analytics Setup",
    summary: "Real-time tracking setup",
    icon: BarChart3Icon,
    iconBg: "bg-orange-500",
  },
  {
    title: "Security Tips",
    summary: "Simple ways to stay secure",
    icon: ShieldIcon,
    iconBg: "bg-sky-600",
  },
]

export function Card41Block() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-5xl">
        <div className="grid gap-(--frame-gap) sm:grid-cols-2 xl:grid-cols-4">
          {CARDS.map(({ title, summary, icon: Icon, iconBg }) => (
            <FramePanel key={title} className="flex flex-col gap-5 p-4">
              <IconTile
                variant="solid"
                className={`rounded-[10px] text-white ${iconBg}`}
              >
                <Icon />
              </IconTile>
              <div className="flex flex-col gap-1">
                <a
                  href="#"
                  className="text-sm font-semibold underline-offset-4 hover:underline"
                >
                  {title}
                </a>
                <p className="text-xs text-muted-foreground">{summary}</p>
              </div>
            </FramePanel>
          ))}
        </div>
      </Frame>
    </div>
  )
}

export default Card41Block
