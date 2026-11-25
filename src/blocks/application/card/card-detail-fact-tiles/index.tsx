import {
  CalendarIcon,
  CopyIcon,
  FlameIcon,
  GlobeIcon,
  UserIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"

const CARDS = [
  {
    label: "Company",
    value: "ReUI Inc.",
    detail: "Amsterdam, NL",
    icon: CopyIcon,
    accent: "logo",
  },
  {
    label: "API Endpoint",
    value: "api.reui.io",
    detail: "Requests: 124k/day",
    icon: GlobeIcon,
    accent: "badge",
  },
  {
    label: "Next Session",
    value: "26 Dec, 2025",
    detail: "RAI Amsterdam",
    icon: CalendarIcon,
    accent: "avatars",
  },
  {
    label: "Social Profile",
    value: "@reui_io",
    detail: "2,468 Members",
    icon: UserIcon,
    accent: null,
  },
]

const AVATARS = [
  { initials: "AV", color: "bg-rose-200 text-rose-900" },
  { initials: "KM", color: "bg-sky-200 text-sky-900" },
  { initials: "JT", color: "bg-amber-200 text-amber-900" },
]

export function CardDetailFactTilesBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.label}
              className="flex min-h-32 flex-col justify-between bg-card p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[13px] text-muted-foreground">
                  {card.label}
                </span>
                <Icon className="size-4 shrink-0 text-muted-foreground" />
              </div>
              <div className="mt-6 flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-semibold leading-tight">
                    {card.value}
                  </p>
                  <p className="mt-0.5 truncate text-[13px] text-muted-foreground">
                    {card.detail}
                  </p>
                </div>
                {card.accent === "logo" ? (
                  <FlameIcon className="size-5 shrink-0 text-[#f25c2a]" />
                ) : null}
                {card.accent === "badge" ? (
                  <Badge
                    variant="outline"
                    size="sm"
                    radius="full"
                    className="border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/15 dark:text-violet-300"
                  >
                    Running
                  </Badge>
                ) : null}
                {card.accent === "avatars" ? (
                  <AvatarGroup className="shrink-0">
                    {AVATARS.map((avatar) => (
                      <Avatar key={avatar.initials} size="sm">
                        <AvatarFallback
                          className={`text-[9px] font-medium ${avatar.color}`}
                        >
                          {avatar.initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    <AvatarGroupCount className="size-6 text-[10px]">
                      +1
                    </AvatarGroupCount>
                  </AvatarGroup>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardDetailFactTilesBlock
