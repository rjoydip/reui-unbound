import { useState } from "react"
import { PlugZapIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const APPS = [
  { key: "n8n", name: "n8n", description: "Automate your workflows and integrate with thousands of apps.", tone: "bg-rose-500", channels: [] },
  { key: "slack", name: "Slack", description: "Send call and message logs to your Slack workspace.", tone: "bg-emerald-500", channels: [{ label: "Messages", note: "Send incoming messages to my channel", on: true }, { label: "Alerts", note: "Send system alerts to my channel", on: true }] },
  { key: "discord", name: "Discord", description: "Post event notifications to your Discord server channels.", tone: "bg-indigo-500", channels: [{ label: "Deploys", note: "Notify on successful deployments", on: true }, { label: "Errors", note: "Forward error reports to a channel" }] },
  { key: "stripe", name: "Stripe", description: "Sync payment events and subscription lifecycle changes.", tone: "bg-violet-500", channels: [] },
]

export function Settings6Block() {
  const [connected, setConnected] = useState<Record<string, boolean>>({ slack: true, discord: true })
  const [channels, setChannels] = useState<Record<string, boolean>>({
    "slack-Messages": true,
    "slack-Alerts": true,
    "discord-Deploys": true,
  })

  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="w-full max-w-[672px]">
        <h1 className="text-2xl font-semibold">Integrations</h1>
        <p className="text-muted-foreground mt-1 text-sm">Connect your favorite apps to automate workflows and stay updated on events.</p>

        <div className="mt-6 space-y-3">
          {APPS.map((app) => (
            <section key={app.key} className="bg-card overflow-hidden rounded-xl border shadow-sm">
              <div className="flex items-center gap-3 p-4">
                <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white", app.tone)}>
                  {app.name.slice(0, 1)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{app.name}</p>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </div>
                {connected[app.key] ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setConnected((current) => ({ ...current, [app.key]: false }))}
                  >
                    Disconnect
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="gap-1.5"
                    onClick={() => setConnected((current) => ({ ...current, [app.key]: true }))}
                  >
                    <PlugZapIcon />
                    Connect
                  </Button>
                )}
              </div>

              {connected[app.key] && app.channels.length > 0 ? (
                <div className="space-y-2 px-4 pb-4">
                  {app.channels.map((channel) => {
                    const key = `${app.key}-${channel.label}`
                    return (
                      <div key={key} className="bg-muted/40 flex items-center gap-3 rounded-lg px-3 py-2.5">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{channel.label}</p>
                          <p className="text-muted-foreground text-xs">{channel.note}</p>
                        </div>
                        <Switch
                          checked={channels[key] ?? Boolean(channel.on)}
                          onCheckedChange={(value) => setChannels((current) => ({ ...current, [key]: value }))}
                          aria-label={`${app.name} ${channel.label}`}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Settings6Block
