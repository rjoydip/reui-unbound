import {
  BookOpenIcon,
  CircleDotIcon,
  CopyIcon,
  TrendingUpIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"

const APPLICATION = {
  role: "Business Analyst",
  location: "Amsterdam, NL",
  mobile: "+31 6 9876 54 32",
  email: "jeroen.doe@reui.io",
  skills: [
    { name: "Analysis", icon: TrendingUpIcon },
    { name: "Scrum", icon: CircleDotIcon },
    { name: "UX Research", icon: BookOpenIcon },
  ],
}

async function copyToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value)
  } catch {
    // Clipboard access can be blocked by the host page.
  }
}

export function Card9Block() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-5xl overflow-hidden rounded-xl border bg-card">
        <div className="grid grid-cols-1 divide-y sm:grid-cols-[1.1fr_1fr_1.4fr_1.25fr_2fr] sm:divide-x sm:divide-y-0">
          <div className="p-4">
            <p className="text-[13px] text-muted-foreground">Applied for</p>
            <p className="mt-4 text-[14px] font-medium">
              {APPLICATION.role}
            </p>
          </div>

          <div className="p-4">
            <p className="text-[13px] text-muted-foreground">Location</p>
            <p className="mt-4 text-[14px] font-medium">
              {APPLICATION.location}
            </p>
          </div>

          <div className="p-4">
            <p className="text-[13px] text-muted-foreground">Mobile</p>
            <div className="mt-3 flex items-center gap-1">
              <p className="text-[14px] font-medium tabular-nums">
                {APPLICATION.mobile}
              </p>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Copy mobile number"
                onClick={() => copyToClipboard(APPLICATION.mobile)}
              >
                <CopyIcon />
              </Button>
            </div>
          </div>

          <div className="p-4">
            <p className="text-[13px] text-muted-foreground">Email</p>
            <div className="mt-3 flex items-center gap-1">
              <p className="truncate text-[14px] font-medium">
                {APPLICATION.email}
              </p>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Copy email address"
                onClick={() => copyToClipboard(APPLICATION.email)}
              >
                <CopyIcon />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden p-4">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] opacity-70 [background-size:7px_7px] dark:opacity-40"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 65%)",
              }}
            />
            <p className="relative text-[13px] text-muted-foreground">Skills</p>
            <div className="relative mt-3 flex flex-wrap items-center gap-1.5">
              {APPLICATION.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    size="sm"
                    radius="full"
                    className="bg-background/70"
                  >
                    <Icon />
                    {skill.name}
                  </Badge>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card9Block
