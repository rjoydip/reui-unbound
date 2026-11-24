import { ClockIcon, EyeIcon, GlobeIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Frame } from "@/components/kit/frame"

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

function Cell({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 px-4 py-3.5 md:border-l md:first:border-l-0">
      <span className="text-muted-foreground text-sm">{label}</span>
      <div className="flex items-center gap-1.5 text-sm font-medium">
        {children}
      </div>
    </div>
  )
}

export function Card27Block() {
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

        <div className="relative grid grid-cols-2 gap-y-4 md:grid-cols-[1.1fr_0.8fr_1fr_1fr_1.15fr_1.3fr] md:gap-y-0">
          <Cell label="Created">
            <span className="flex size-4 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white">
              C
            </span>
            <span>Coinbase</span>
            <span className="text-muted-foreground font-normal">24m ago</span>
          </Cell>

          <Cell label="Status">
            <span className="size-2 rounded-full bg-green-600" />
            <span>Ready</span>
          </Cell>

          <Cell label="Mobile">
            <ClockIcon
              className="text-muted-foreground size-4"
              aria-hidden="true"
            />
            <span>49s</span>
            <span className="text-muted-foreground font-normal">24m ago</span>
          </Cell>

          <Cell label="Email">
            <EyeIcon
              className="text-muted-foreground size-4"
              aria-hidden="true"
            />
            <span>Preview</span>
          </Cell>

          <Cell label="Domain">
            <GlobeIcon
              className="text-muted-foreground size-4"
              aria-hidden="true"
            />
            <span>reui.io</span>
            <Badge variant="focus-light" size="xs" radius="full">
              Main
            </Badge>
          </Cell>

          <Cell label="Team">
            <AvatarGroup>
              {TEAM.map((member) => (
                <Avatar key={member.fallback} size="sm">
                  <AvatarImage src={member.src} alt="" />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
              ))}
              <AvatarGroupCount className="text-xs">+1</AvatarGroupCount>
            </AvatarGroup>
          </Cell>
        </div>
      </Frame>
    </div>
  )
}

export default Card27Block
