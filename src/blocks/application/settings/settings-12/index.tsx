import { useState } from "react"
import {
  BellIcon,
  ChevronDownIcon,
  MailIcon,
  MessageSquareIcon,
  MonitorIcon,
  SmartphoneIcon,
  VideoIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const CHANNELS = [
  { label: "Inbox", description: "Approvals, handoffs, and follow-ups.", icon: MailIcon, control: "select", value: "Default" },
  { label: "Email", description: "Digests and direct alerts.", icon: MailIcon, control: "select", value: "Default", badge: "Send sample" },
  { label: "Browser", description: "Desktop banners stay off until enabled.", icon: MonitorIcon, control: "button" },
  { label: "Mobile", description: "Away-from-desk delivery.", icon: SmartphoneIcon, control: "select", value: "Default", badge: "Show example" },
]

const INTEGRATIONS = [
  { name: "Slack", description: "Send priority updates to a team channel.", action: "Connect Slack", icon: MessageSquareIcon },
  { name: "Zoom", description: "Post meeting alerts and call follow-ups.", action: "Connect Zoom", icon: VideoIcon },
  { name: "Google Meet", description: "Route calendar and live session updates.", action: "Connect Meet", icon: VideoIcon },
]

export function Settings12Block() {
  const [smart, setSmart] = useState(true)
  const [open, setOpen] = useState(true)
  const [autoFollow, setAutoFollow] = useState(true)
  const [autoMute, setAutoMute] = useState(false)

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[768px]">
        <h1 className="text-2xl font-semibold">Notification settings</h1>
        <p className="text-muted-foreground mt-1 text-sm">Choose how workspace updates reach you.</p>

        <div className="bg-card mt-6 overflow-hidden rounded-xl border shadow-sm">
          {CHANNELS.map((channel, index) => (
            <div key={channel.label} className={cn("flex items-center gap-3 px-4 py-3.5", index < CHANNELS.length - 1 && "border-b")}>
              <span className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md"><channel.icon className="size-4" /></span>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1.5 text-sm font-medium">
                  {channel.label}
                  {channel.badge ? <Badge variant="secondary" size="sm">{channel.badge}</Badge> : null}
                </p>
                <p className="text-muted-foreground text-sm">{channel.description}</p>
              </div>
              {channel.control === "select" ? (
                <Select defaultValue={channel.value}>
                  <SelectTrigger size="sm" className="w-32"><SelectValue /></SelectTrigger>
                  <SelectContent>{["Default", "All activity", "Mentions only", "Off"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
                </Select>
              ) : (
                <Button variant="outline" size="sm">Enable notifications</Button>
              )}
            </div>
          ))}
          <div className="flex items-center gap-3 border-t px-4 py-3.5">
            <BellIcon className="text-muted-foreground size-4" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">Smart notifications</p>
              <p className="text-muted-foreground text-sm">Pause phone alerts while desktop stays active.</p>
            </div>
            <Switch checked={smart} onCheckedChange={setSmart} aria-label="Smart notifications" />
          </div>
        </div>

        <h2 className="mt-6 text-sm font-semibold">Integrations</h2>
        <div className="bg-card mt-2 overflow-hidden rounded-xl border shadow-sm">
          {INTEGRATIONS.map((integration, index) => (
            <div key={integration.name} className={cn("flex items-center gap-3 px-4 py-3.5", index < INTEGRATIONS.length - 1 && "border-b")}>
              <span className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md"><integration.icon className="size-4" /></span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{integration.name}</p>
                <p className="text-muted-foreground text-sm">{integration.description}</p>
              </div>
              <Button variant="outline" size="sm">{integration.action}</Button>
            </div>
          ))}
        </div>

        <Collapsible open={open} onOpenChange={setOpen} className="mt-6">
          <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
            <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3">
              <span className="text-sm font-semibold">General settings</span>
              <ChevronDownIcon className={cn("text-muted-foreground size-4 transition-transform", open && "rotate-180")} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex items-center gap-3 border-t px-4 py-3.5">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">Auto-follow threads</p>
                  <p className="text-muted-foreground text-sm">Follow conversations you reply to.</p>
                </div>
                <Switch checked={autoFollow} onCheckedChange={setAutoFollow} aria-label="Auto-follow threads" />
              </div>
              <div className="flex items-center gap-3 border-t px-4 py-3.5">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">Auto-mute low priority</p>
                  <p className="text-muted-foreground text-sm">Quiet updates that do not need action.</p>
                </div>
                <Switch checked={autoMute} onCheckedChange={setAutoMute} aria-label="Auto-mute low priority" />
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </div>
  )
}

export default Settings12Block
