import {
  BadgeCheckIcon,
  BoxIcon,
  CircleCheckIcon,
  MailIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Frame, FramePanel } from "@/components/kit/frame"

const PROFILE = {
  name: "Jenny Klabber",
  company: "KeenThemes",
  email: "jenny@kteam.com",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&dpr=2&q=80",
}

const TEAM = [
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
    fallback: "JB",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
    fallback: "AL",
  },
  { src: "", fallback: "K" },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80",
    fallback: "MR",
  },
]

const STATS = [
  { value: "92", label: "Orders" },
  { value: "$69", label: "Avg. Price" },
  { value: "$6,240", label: "Total Spent" },
]

export function Card42Block() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[21rem]">
        <FramePanel className="flex flex-col items-center p-5">
          <Avatar size="lg" className="size-18">
            <AvatarImage src={PROFILE.avatar} alt={PROFILE.name} />
            <AvatarFallback>JK</AvatarFallback>
            <AvatarBadge className="size-3.5 bg-green-500" />
          </Avatar>

          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-lg font-semibold tracking-tight">
              {PROFILE.name}
            </span>
            <BadgeCheckIcon className="size-4 text-sky-500" />
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BoxIcon className="size-4" />
              {PROFILE.company}
            </span>
            <span className="flex items-center gap-1.5">
              <MailIcon className="size-4" />
              {PROFILE.email}
            </span>
          </div>

          <div className="mt-4 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Team
          </div>
          <AvatarGroup className="mt-2">
            {TEAM.map((member, index) => (
              <Avatar key={index} size="sm">
                {member.src ? (
                  <AvatarImage src={member.src} alt="" />
                ) : null}
                <AvatarFallback>{member.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
        </FramePanel>

        <FramePanel className="grid grid-cols-3 divide-x bg-muted/40 p-0">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-2.5"
            >
              <div className="text-sm font-semibold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </FramePanel>

        <FramePanel className="flex justify-center bg-muted/40 py-3">
          <Button variant="outline" size="sm">
            <CircleCheckIcon />
            Connected
          </Button>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default Card42Block
