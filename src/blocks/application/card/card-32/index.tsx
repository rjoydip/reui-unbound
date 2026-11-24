import {
  AppWindowIcon,
  CircleSlashIcon,
  ClipboardCheckIcon,
  RefreshCwIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Frame } from "@/components/kit/frame"
import { cn } from "cn"

const METRICS = [
  {
    label: "Passing Controls",
    icon: RefreshCwIcon,
    color: "text-green-600",
    percent: "92%",
    count: "42 /73 controls",
    note: "-",
  },
  {
    label: "Open Tickets",
    icon: AppWindowIcon,
    color: "text-blue-600",
    percent: "22%",
    count: "16 /74 tickets",
    note: "-",
  },
  {
    label: "Critical Issues",
    icon: CircleSlashIcon,
    color: "text-red-600",
    percent: "5%",
    count: "6 /107 issues",
    note: "-",
  },
  {
    label: "Verified Findings",
    icon: ClipboardCheckIcon,
    color: "text-violet-600",
    percent: "64%",
    count: "68 /107",
    note: "-",
  },
]

const TEAM = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&dpr=2&q=80",
    fallback: "AR",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&dpr=2&q=80",
    fallback: "MK",
  },
  {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=48&h=48&dpr=2&q=80",
    fallback: "JD",
  },
]

export function Card32Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame
        spacing="xs"
        className="relative w-full max-w-[970px] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-56 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:6px_6px] opacity-70 [mask-image:linear-gradient(to_left,black,transparent)]"
        />

        <div className="relative grid grid-cols-2 gap-y-4 md:grid-cols-[1fr_1fr_1fr_1fr_1.4fr] md:gap-y-0">
          {METRICS.map((metric) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.label}
                className="flex flex-col gap-2 px-4 py-3.5 md:border-l md:first:border-l-0"
              >
                <span className="text-muted-foreground text-sm">
                  {metric.label}
                </span>
                <div className="flex items-center gap-1.5 text-sm whitespace-nowrap">
                  <Icon
                    className={cn("size-4", metric.color)}
                    aria-hidden="true"
                  />
                  <span className="font-medium">{metric.percent}</span>
                  <span className="text-muted-foreground">
                    {metric.note} {metric.count}
                  </span>
                </div>
              </div>
            )
          })}

          <div className="flex flex-col gap-2 px-4 py-3.5 md:border-l">
            <span className="text-muted-foreground text-sm">Team</span>
            <AvatarGroup>
              {TEAM.map((member) => (
                <Avatar key={member.fallback} size="sm">
                  <AvatarImage src={member.src} alt="" />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
              ))}
              <AvatarGroupCount className="text-xs">+1</AvatarGroupCount>
            </AvatarGroup>
          </div>
        </div>
      </Frame>
    </div>
  )
}

export default Card32Block
