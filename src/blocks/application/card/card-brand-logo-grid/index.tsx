import { Stripe } from "@/components/ui/svgs/stripe"
import { Supabase } from "@/components/ui/svgs/supabase"

function ResendMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M5.5 19V5h6.1c3.2 0 5.3 1.9 5.3 4.7 0 2.1-1.1 3.6-3 4.2L18 19h-3.4l-3.7-4.6H8.4V19H5.5Zm2.9-7h3c1.6 0 2.5-.8 2.5-2.1s-.9-2.1-2.5-2.1h-3V12Z" />
    </svg>
  )
}

function OpenAIMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.5-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07Zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5Zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.83 2.79a4.5 4.5 0 0 1-6.15-1.64ZM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97v5.68a.77.77 0 0 0 .39.67l5.81 3.36-2.02 1.17a.08.08 0 0 1-.07 0L3.99 14a4.5 4.5 0 0 1-1.65-6.1Zm16.6 3.85-5.84-3.39 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.67Zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06L14.27 3.9a4.5 4.5 0 0 1 6.68 4.83ZM8.3 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08L8.7 5.46a.79.79 0 0 0-.39.68Zm1.1-2.36 2.6-1.5 2.61 1.5v3l-2.6 1.5-2.6-1.5Z" />
    </svg>
  )
}

function AnthropicMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.79 3h2.84L23 21h-3.77l-1.34-4.5h-6.4L10.15 21H6.38L13.79 3Zm.2 5.75L11.8 13.4h4.38l-2.19-4.65Z" />
      <path d="M2 3h2.7l5.03 11.33-1.35 3.04L2 3Z" />
    </svg>
  )
}

const BRANDS = [
  { name: "Resend", logo: <ResendMark className="size-6" /> },
  { name: "Stripe", logo: <Stripe className="size-6" /> },
  { name: "Supabase", logo: <Supabase className="size-6" /> },
  { name: "OpenAI", logo: <OpenAIMark className="size-6" /> },
  { name: "Anthropic", logo: <AnthropicMark className="size-6" /> },
]

export function CardBrandLogoGridBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {BRANDS.map((brand) => (
          <a
            key={brand.name}
            href="#"
            className="group flex flex-col rounded-xl border bg-card p-1.5 outline-none transition-colors hover:bg-muted/20 focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <span className="flex h-24 items-center justify-center rounded-lg border bg-muted/40">
              <span className="flex size-11 items-center justify-center rounded-lg border bg-background text-foreground shadow-xs transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 dark:bg-input/40">
                {brand.logo}
              </span>
            </span>
            <span className="py-2.5 text-center text-[13px] font-medium">
              {brand.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default CardBrandLogoGridBlock
