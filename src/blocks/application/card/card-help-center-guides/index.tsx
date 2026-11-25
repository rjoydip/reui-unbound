import {
  ArrowUpRightIcon,
  ReceiptTextIcon,
  TrendingUpIcon,
  WorkflowIcon,
} from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"

const CARDS = [
  {
    title: "Ordering & Billing Guide",
    description:
      "Step-by-step instructions for checkout, invoices, taxes, and returns.",
    icon: ReceiptTextIcon,
    iconBg: "bg-emerald-500",
    guides: [
      { label: "Place an order guide", href: "#place-order" },
      { label: "Request a refund guide", href: "#refund" },
    ],
  },
  {
    title: "Configuration & Integrations",
    description:
      "Setup for accounts, permissions, webhooks, and third-party connections.",
    icon: WorkflowIcon,
    iconBg: "bg-orange-500",
    guides: [
      { label: "Connect Slack and Trello", href: "#slack-trello" },
      { label: "Create API keys securely", href: "#api-keys" },
    ],
  },
  {
    title: "Media Library Introduction",
    description:
      "Basics for uploading images, organizing folders, and optimizing delivery.",
    icon: TrendingUpIcon,
    iconBg: "bg-violet-600",
    guides: [
      { label: "Upload and organize assets", href: "#upload" },
      { label: "Image optimization best practices", href: "#optimization" },
    ],
  },
]

export function CardHelpCenterGuidesBlock() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <div className="grid w-full max-w-[700px] gap-3 md:grid-cols-3">
        {CARDS.map((card) => (
          <Frame key={card.title} stacked>
            <FramePanel className="flex flex-col gap-3">
              <span
                className={`flex size-8 items-center justify-center rounded-lg text-white shadow-sm ring-1 ring-black/10 ${card.iconBg}`}
              >
                <card.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium">{card.title}</span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </FramePanel>
            {card.guides.map((guide) => (
              <FramePanel key={guide.label}>
                <a
                  href={guide.href}
                  className="flex items-center justify-between gap-4 text-[13px] font-medium underline-offset-4 hover:underline"
                >
                  {guide.label}
                  <ArrowUpRightIcon
                    className="text-muted-foreground size-3.5 shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </FramePanel>
            ))}
          </Frame>
        ))}
      </div>
    </div>
  )
}

export default CardHelpCenterGuidesBlock
