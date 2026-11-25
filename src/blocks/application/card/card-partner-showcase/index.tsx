import {
  RiArchiveStackFill,
  RiFirebaseFill,
  RiSupabaseFill,
  RiDiscordFill,
  RiTableFill,
} from "@remixicon/react"
import { LayersIcon } from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"

const SPONSOR_LOGOS = [
  { label: "Supabase", node: <RiSupabaseFill className="text-emerald-500" /> },
  { label: "Firebase", node: <RiFirebaseFill className="text-orange-500" /> },
  { label: "Discord", node: <RiDiscordFill className="text-indigo-400" /> },
  { label: "Archive", node: <RiArchiveStackFill className="text-purple-500" /> },
]

const AFFILIATE_LOGOS = [
  { label: "Airtable", node: <RiTableFill className="text-red-600" /> },
  { label: "Supabase", node: <RiSupabaseFill className="text-emerald-500" /> },
  {
    label: "Cloud",
    node: (
      <span
        aria-hidden="true"
        className="size-4 rounded-full bg-[conic-gradient(from_210deg,#f59e0b,#ef4444_45%,#a855f7_75%,#f59e0b)]"
      />
    ),
  },
  { label: "Layers", node: <LayersIcon className="size-4 text-fuchsia-600" /> },
]

const CARDS = [
  {
    title: "Sponsors",
    description:
      "Checkout built for speed and consistent transaction high performance.",
    logos: SPONSOR_LOGOS,
  },
  {
    title: "Affiliates",
    description:
      "Authorized partners promoting our services in multiple regions.",
    logos: AFFILIATE_LOGOS,
  },
]

function LogoRow({ logos }: { logos: typeof SPONSOR_LOGOS }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {logos.map((logo) => (
        <span
          key={logo.label}
          aria-hidden="true"
          className="bg-card flex size-9 items-center justify-center rounded-lg border shadow-xs [&_svg]:size-4"
        >
          {logo.node}
        </span>
      ))}
    </div>
  )
}

export function CardPartnerShowcaseBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <div className="grid w-full max-w-[700px] gap-3 md:grid-cols-2">
        {CARDS.map((card) => (
          <Frame key={card.title}>
            <FramePanel className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm font-medium underline-offset-4 hover:underline"
              >
                {card.title}
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
              <LogoRow logos={card.logos} />
            </FramePanel>
          </Frame>
        ))}
      </div>
    </div>
  )
}

export default CardPartnerShowcaseBlock
