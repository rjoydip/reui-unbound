import {
  ActivityIcon,
  AlignLeftIcon,
  BookOpenIcon,
  ShieldIcon,
} from "lucide-react"

import { IconTile } from "@/components/kit/icon-tile"
import { cn } from "cn"

const FEATURES = [
  {
    title: "Performance",
    description: "Optimize speed and efficiency",
    icon: ActivityIcon,
  },
  {
    title: "Design System",
    description: "Build with consistent UI blocks",
    icon: AlignLeftIcon,
  },
  {
    title: "User Secutiry",
    description: "Simplify user and roles setup",
    icon: ShieldIcon,
  },
  {
    title: "Documentation",
    description: "Guides and best practices",
    icon: BookOpenIcon,
  },
]

function DotField({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:7px_7px] opacity-70 dark:opacity-40",
        className
      )}
      style={{
        maskImage: "linear-gradient(to bottom, black 10%, transparent 90%)",
      }}
    />
  )
}

export function CardFeatureHighlightsBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => {
          const Icon = feature.icon
          return (
            <a
              key={feature.title}
              href="#"
              className="group relative flex min-h-44 flex-col justify-between overflow-hidden bg-card p-5 outline-none transition-colors hover:bg-muted/20 focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <DotField />
              <IconTile
                variant="outline"
                size="default"
                className="bg-background shadow-sm"
              >
                <Icon />
              </IconTile>
              <span className="relative mt-8">
                <span className="block text-[15px] font-medium group-hover:underline">
                  {feature.title}
                </span>
                <span className="mt-1 block text-[13px] text-muted-foreground">
                  {feature.description}
                </span>
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default CardFeatureHighlightsBlock
