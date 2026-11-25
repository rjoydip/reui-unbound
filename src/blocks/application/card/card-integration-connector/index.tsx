import {
  FileTextIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  ZapIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"

function ResendMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M5.5 19V5h6.1c3.2 0 5.3 1.9 5.3 4.7 0 2.1-1.1 3.6-3 4.2L18 19h-3.4l-3.7-4.6H8.4V19H5.5Zm2.9-7h3c1.6 0 2.5-.8 2.5-2.1s-.9-2.1-2.5-2.1h-3V12Z" />
    </svg>
  )
}

function PayPalMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#009cde"
        d="M8.5 3.5h5.2c3.1 0 5 1.6 4.6 4.4-.4 3.1-2.7 4.8-5.9 4.8h-2.3l-.8 4.6H5.8L8.5 3.5Z"
      />
      <path
        fill="#012169"
        d="M11.2 7.6h4.2c2.7 0 4.3 1.4 4 3.8-.4 2.8-2.5 4.5-5.4 4.5h-2l-.8 4.1H7.9l3.3-12.4Z"
      />
    </svg>
  )
}

function SupabaseMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 109 113" fill="none" className={className} aria-hidden="true">
      <path
        d="M63.7 110.3c-2.9 3.6-8.7 1.6-8.7-3V40h45.2c8.2 0 12.8 9.5 7.7 15.9L63.7 110.3Z"
        fill="#3ECF8E"
      />
      <path
        d="M45.3 2.1C48.2-1.5 54 .4 54 5v67.3H9.8c-8.2 0-12.8-9.5-7.7-15.9L45.3 2.1Z"
        fill="#249361"
      />
    </svg>
  )
}

const CARDS = [
  {
    title: "Resend Email Flow",
    tier: "Premium",
    tierClassName:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/15 dark:text-violet-300",
    description:
      "Transactional email delivery tuned for speed, observability, and reliable event handling.",
    logo: <ResendMark className="size-7" />,
    leftIcon: ShoppingCartIcon,
    rightIcon: FileTextIcon,
  },
  {
    title: "PayPal Checkout Flow",
    tier: "Regular",
    tierClassName:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-300",
    description:
      "Optimized payment processing for speed, reliability, and global reach.",
    logo: <PayPalMark className="size-9" />,
    leftIcon: ZapIcon,
    rightIcon: ShieldCheckIcon,
  },
  {
    title: "Supabase Auth Integration",
    tier: "Enterprise",
    tierClassName:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300",
    description:
      "Authentication and data access wired together for secure product onboarding and account management.",
    logo: <SupabaseMark className="size-8" />,
    leftIcon: ShoppingCartIcon,
    rightIcon: FileTextIcon,
  },
]

export function CardIntegrationConnectorBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => {
          const LeftIcon = card.leftIcon
          const RightIcon = card.rightIcon
          return (
            <div
              key={card.title}
              className="flex flex-col rounded-xl border bg-card p-1.5"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-lg border bg-muted/30">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] opacity-70 [background-size:7px_7px] dark:opacity-40"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-12 top-1/2 border-t border-dashed border-border"
                />
                <div className="relative flex items-center gap-8">
                  <span className="flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground shadow-xs dark:bg-input/40">
                    <LeftIcon className="size-4" />
                  </span>
                  <span className="flex size-14 items-center justify-center rounded-xl border bg-background text-foreground shadow-sm dark:bg-input/40">
                    {card.logo}
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground shadow-xs dark:bg-input/40">
                    <RightIcon className="size-4" />
                  </span>
                </div>
              </div>

              <div className="px-3 pb-3 pt-3">
                <div className="flex items-start justify-between gap-2">
                  <a
                    href="#"
                    className="text-[15px] font-medium leading-snug outline-none hover:underline focus-visible:underline"
                  >
                    {card.title}
                  </a>
                  <Badge
                    variant="outline"
                    size="sm"
                    className={card.tierClassName}
                  >
                    {card.tier}
                  </Badge>
                </div>
                <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardIntegrationConnectorBlock
