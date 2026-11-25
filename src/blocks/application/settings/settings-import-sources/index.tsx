import { useState } from "react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  DatabaseIcon,
  HexagonIcon,
  MessageSquareIcon,
  PaletteIcon,
  SparklesIcon,
  TriangleIcon,
  ZapIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

const SERVICES = [
  { name: "Stripe", description: "Payment processing platform for online transactions.", badge: "Easy Import", tone: "bg-violet-500", icon: ZapIcon },
  { name: "Supabase", description: "Open-source Firebase alternative with database and authentication.", badge: "Easy Import", tone: "bg-emerald-500", icon: DatabaseIcon },
  { name: "OpenAI", description: "AI models and APIs for building intelligent applications.", badge: "Easy Import", tone: "bg-foreground", icon: SparklesIcon },
  { name: "Discord", description: "Communication platform for communities with chat and voice.", badge: "Easy Import", tone: "bg-indigo-500", icon: MessageSquareIcon },
  { name: "Anthropic", description: "AI safety company building reliable and interpretable AI systems.", badge: "2-Step Import", tone: "bg-foreground", icon: HexagonIcon },
  { name: "Resend", description: "Modern email API built for developers with great deliverability.", badge: "Easy Import", tone: "bg-foreground", icon: ArrowRightIcon },
  { name: "Neon", description: "Serverless Postgres database with branching and auto-scaling.", badge: "2-Step Import", tone: "bg-emerald-600", icon: DatabaseIcon },
  { name: "PlanetScale", description: "MySQL-compatible serverless database with branching workflows.", badge: "2-Step Import", tone: "bg-foreground", icon: TriangleIcon },
  { name: "Redis", description: "In-memory data store for caching, messaging, and real-time apps.", badge: "Easy Import", tone: "bg-red-600", icon: PaletteIcon },
]

export function SettingsImportSourcesBlock() {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (name: string) => {
    setSelected((current) => {
      if (current.includes(name)) return current.filter((item) => item !== name)
      if (current.length >= 2) return current
      return [...current, name]
    })
  }

  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-full max-w-[896px] overflow-hidden rounded-xl border shadow-sm">
        <div className="border-b p-5">
          <h1 className="text-sm font-semibold">Import from other services</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Select maximum 2 services to copy tasks from and authentication details to access their API.
          </p>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-3">
          {SERVICES.map((service) => {
            const checked = selected.includes(service.name)
            return (
              <button
                key={service.name}
                type="button"
                onClick={() => toggle(service.name)}
                aria-pressed={checked}
                className={cn(
                  "relative rounded-lg border p-3 text-left transition-colors",
                  checked ? "border-foreground/40 bg-muted/40" : "hover:bg-muted/30"
                )}
              >
                <span className="absolute top-3 right-3">
                  <span className={cn("flex size-4 items-center justify-center rounded border", checked && "bg-foreground text-background border-transparent")}>
                    {checked ? <CheckIcon className="size-3" /> : null}
                  </span>
                </span>
                <span className={cn("flex size-9 items-center justify-center rounded-md text-white", service.tone)}>
                  <service.icon className="size-4" />
                </span>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-sm font-medium">{service.name}</span>
                  <Badge variant={service.badge === "Easy Import" ? "focus-light" : "warning-light"} size="sm">
                    {service.badge}
                  </Badge>
                </div>
                <p className="text-muted-foreground mt-1.5 text-sm">{service.description}</p>
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-2 border-t p-3">
          <Button variant="outline" size="sm"><ArrowLeftIcon />Go back</Button>
          <span className="text-muted-foreground text-xs">{selected.length}/2 selected</span>
          <Button size="sm" className="ml-auto" disabled={selected.length === 0}>
            Next step
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SettingsImportSourcesBlock
