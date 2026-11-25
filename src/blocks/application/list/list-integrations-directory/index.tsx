import { useState, type ReactNode } from "react"
import { Check, ExternalLink } from "lucide-react"
import { RiRedditFill } from "@remixicon/react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Frame, FramePanel } from "@/components/kit/frame"
import { Zoom } from "@/components/ui/svgs/zoom"
import { Slack } from "@/components/ui/svgs/slack"
import { Supabase } from "@/components/ui/svgs/supabase"

function ClerkMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="url(#clerk-mark-bg)" />
      <path
        d="M12 6.6a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2Zm-5.2 11.1a5.6 5.6 0 0 1 10.4 0A10.9 10.9 0 0 1 12 19.6a10.9 10.9 0 0 1-5.2-1.9Z"
        fill="#fff"
      />
      <defs>
        <linearGradient id="clerk-mark-bg" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8B7CF6" />
          <stop offset="1" stopColor="#5B45D6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

type Integration = {
  id: string
  name: string
  description: string
  logo: ReactNode
}

const INTEGRATION_ITEMS: Integration[] = [
  {
    id: "zoom",
    name: "Zoom",
    description: "Schedule and host video meetings",
    logo: <Zoom className="size-7" />,
  },
  {
    id: "slack",
    name: "Slack",
    description: "Alerts and slash commands",
    logo: <Slack className="size-6" />,
  },
  {
    id: "reddit",
    name: "Reddit",
    description: "Publish posts and track engagement",
    logo: <RiRedditFill className="size-7 text-foreground" aria-hidden="true" />,
  },
  {
    id: "supabase",
    name: "Supabase",
    description: "Manage backend database and auth",
    logo: <Supabase className="size-6.5" />,
  },
  {
    id: "clerk",
    name: "Clerk",
    description: "Enable user authentication and SSO",
    logo: <ClerkMark className="size-6.5" />,
  },
]

export function ListIntegrationsDirectoryBlock() {
  const [connected, setConnected] = useState<string[]>([])

  function toggle(id: string) {
    setConnected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-[440px]">
        <Frame spacing="xs">
          <FramePanel className="px-4 py-3.5">
            <span className="text-[15px] font-semibold">Integrations</span>
          </FramePanel>

          <FramePanel className="p-0 py-1">
            <ItemGroup className="gap-0">
              {INTEGRATION_ITEMS.map((integration, index) => {
                const isConnected = connected.includes(integration.id)
                return (
                  <div
                    key={integration.id}
                    className={cn(
                      "px-4",
                      index < INTEGRATION_ITEMS.length - 1 &&
                        "border-b border-dashed border-border",
                    )}
                  >
                    <Item className="gap-3 px-0 py-3">
                      <ItemMedia variant="icon" className="size-7">
                        {integration.logo}
                      </ItemMedia>
                      <ItemContent className="min-w-0 gap-0">
                        <ItemTitle className="text-sm font-medium">
                          {integration.name}
                        </ItemTitle>
                        <div className="truncate text-xs text-muted-foreground">
                          {integration.description}
                        </div>
                      </ItemContent>
                      <ItemActions>
                        <Button
                          type="button"
                          variant={isConnected ? "secondary" : "outline"}
                          className="h-8 gap-1 px-2.5 text-[13px]"
                          aria-pressed={isConnected}
                          onClick={() => toggle(integration.id)}
                        >
                          {isConnected ? <Check /> : null}
                          {isConnected ? "Connected" : "Connect"}
                        </Button>
                      </ItemActions>
                    </Item>
                  </div>
                )
              })}
            </ItemGroup>
          </FramePanel>

          <FramePanel className="p-4">
            <Button
              type="button"
              variant="outline"
              className="h-9 w-full gap-1.5"
            >
              <ExternalLink />
              See All Integrations
            </Button>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}

export default ListIntegrationsDirectoryBlock
