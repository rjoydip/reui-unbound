import {
  BarChart3Icon,
  ChevronRightIcon,
  ReceiptTextIcon,
  TrendingUpIcon,
  WorkflowIcon,
} from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"

const CARDS = [
  {
    title: "Recent Orders Overview",
    description:
      "Track and review all recent purchases, updates, and status changes in one place.",
    link: "View Orders",
    href: "#orders",
    icon: ReceiptTextIcon,
    iconBg: "bg-emerald-600",
  },
  {
    title: "Active Opportunities Pipeline",
    description:
      "Monitor ongoing deals, check potential revenue, and update opportunity stages.",
    link: "Open Pipeline",
    href: "#pipeline",
    icon: TrendingUpIcon,
    iconBg: "bg-violet-600",
  },
  {
    title: "Performance & Sales Reports",
    description:
      "Analyze weekly and monthly reports to gain deeper insights into performance trends.",
    link: "View Reports",
    href: "#reports",
    icon: BarChart3Icon,
    iconBg: "bg-blue-600",
  },
  {
    title: "Integration Settings & Sync",
    description:
      "Manage connections with third-party tools and ensure data stays in sync.",
    link: "Manage Integrations",
    href: "#integrations",
    icon: WorkflowIcon,
    iconBg: "bg-orange-600",
  },
]

export function Card17Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[700px]" spacing="lg">
        <div className="grid gap-1 md:grid-cols-2">
          {CARDS.map((card) => (
            <FramePanel
              key={card.title}
              fit
              className="flex min-h-52 flex-col gap-6"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 text-foreground/15 [background-image:radial-gradient(circle,currentColor_1px,transparent_1px)] [background-size:8px_8px] [mask-image:linear-gradient(to_bottom,transparent,black_55%,black)]"
              />
              <span
                className={`relative flex size-10 items-center justify-center rounded-lg text-white shadow-sm ring-1 ring-black/10 ${card.iconBg}`}
              >
                <card.icon className="size-5" aria-hidden="true" />
              </span>
              <div className="relative mt-auto flex flex-col gap-1.5">
                <span className="text-[15px] font-medium">{card.title}</span>
                <p className="text-muted-foreground max-w-[38ch] text-sm leading-relaxed">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className="mt-1 inline-flex w-fit items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                >
                  {card.link}
                  <ChevronRightIcon className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </FramePanel>
          ))}
        </div>
      </Frame>
    </div>
  )
}

export default Card17Block
