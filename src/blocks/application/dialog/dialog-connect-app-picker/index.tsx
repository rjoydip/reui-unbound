import { useState, type ReactNode } from "react"
import {
  RiCalendar2Fill,
  RiClaudeFill,
  RiCursorFill,
  RiInstagramFill,
  RiOpenaiFill,
  RiPaypalFill,
  RiVideoChatFill,
} from "@remixicon/react"
import { PlusIcon, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Discord } from "@/components/ui/svgs/discord"
import { Loom } from "@/components/ui/svgs/loom"
import { Slack } from "@/components/ui/svgs/slack"
import { Stripe } from "@/components/ui/svgs/stripe"
import { Zoom } from "@/components/ui/svgs/zoom"
import { cn } from "cn"

type ConnectApp = { id: string; name: string; description: string; logo: ReactNode }

const CONNECT_APPS: ConnectApp[] = [
  { id: "claude", name: "Claude", description: "Track model usage", logo: <RiClaudeFill className="size-5 text-[#D97757]" /> },
  { id: "openai", name: "OpenAI", description: "Research and model runs", logo: <RiOpenaiFill className="size-5" /> },
  { id: "cursor", name: "Cursor", description: "Sync coding activity", logo: <RiCursorFill className="size-5" /> },
  { id: "google-calendar", name: "Google Calendar", description: "Mirror planning holds", logo: <RiCalendar2Fill className="size-5 text-[#4285F4]" /> },
  { id: "slack", name: "Slack", description: "Monitor team activity", logo: <Slack className="size-5" /> },
  { id: "stripe", name: "Stripe", description: "Track revenue signals", logo: <Stripe className="size-5" /> },
  { id: "zoom", name: "Zoom", description: "Log meeting sessions", logo: <Zoom className="size-5" /> },
  { id: "loom", name: "Loom", description: "Store async walkthroughs", logo: <Loom className="size-5" /> },
  { id: "instagram", name: "Instagram", description: "Track campaign engagement", logo: <RiInstagramFill className="size-5 text-[#E4405F]" /> },
  { id: "discord", name: "Discord", description: "Watch community activity", logo: <Discord className="size-5" /> },
  { id: "google-meet", name: "Google Meet", description: "Capture call activity", logo: <RiVideoChatFill className="size-5 text-[#00832D]" /> },
  { id: "paypal", name: "PayPal", description: "Monitor payout events", logo: <RiPaypalFill className="size-5 text-[#003087]" /> },
]

export function DialogConnectAppPickerBlock() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filteredApps = CONNECT_APPS.filter((app) =>
    `${app.name} ${app.description}`.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <h1 className="sr-only">Connect app picker dialog</h1>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Add a workspace app
      </Button>

      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogContent className="flex max-h-[85svh] flex-col gap-0 overflow-hidden p-0 sm:max-w-[560px]">
          <DialogHeader className="shrink-0 gap-1 p-5 pb-3">
            <DialogTitle>Add a workspace app</DialogTitle>
            <DialogDescription>Choose one source to connect.</DialogDescription>
          </DialogHeader>

          <div className="shrink-0 px-5 pb-3">
            <InputGroup className="h-9">
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput
                autoFocus
                aria-label="Search integrations"
                placeholder="Search integrations"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <InputGroupAddon align="inline-end">
                <Kbd>⌘K</Kbd>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-4">
            {filteredApps.length === 0 ? (
              <Empty className="h-full border-0">
                <EmptyHeader>
                  <EmptyTitle>No apps match</EmptyTitle>
                  <EmptyDescription>Try a broader search to keep exploring integrations.</EmptyDescription>
                </EmptyHeader>
              </Empty>
            ) : (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {filteredApps.map((app) => (
                  <label
                    key={app.id}
                    className={cn(
                      "hover:bg-muted/40 flex cursor-pointer flex-col gap-2 rounded-lg border p-2.5 text-left transition-colors has-[:focus-visible]:border-ring has-[:focus-visible]:ring-ring/50 has-[:focus-visible]:ring-3",
                      selectedId === app.id ? "border-ring/50 bg-muted/30" : "border-border",
                    )}
                  >
                    <span className="flex w-full items-start justify-between gap-2">
                      <span className="flex size-6 items-center justify-center">{app.logo}</span>
                      <Checkbox
                        checked={selectedId === app.id}
                        aria-label={`Select ${app.name}`}
                        className="rounded-full"
                        onCheckedChange={(checked) => setSelectedId(checked === true ? app.id : null)}
                      />
                    </span>
                    <span className="grid gap-0.5">
                      <span className="text-sm font-medium">{app.name}</span>
                      <span className="text-muted-foreground line-clamp-1 text-xs">
                        {app.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <DialogFooter className="mx-0 mb-0 rounded-b-xl border-t bg-muted/50 p-4">
            <Button
              className="w-full"
              disabled={!selectedId}
              onClick={() => setOpen(false)}
            >
              <PlusIcon />
              Add app
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </main>
  )
}

export default DialogConnectAppPickerBlock
