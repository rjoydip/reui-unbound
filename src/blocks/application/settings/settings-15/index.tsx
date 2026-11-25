import { useState } from "react"
import {
  BellIcon,
  GlobeIcon,
  LinkIcon,
  MailIcon,
  SearchIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-card overflow-hidden rounded-xl border shadow-sm">
      <div className="border-b px-4 py-2.5"><p className="text-sm font-semibold">{title}</p></div>
      {children}
    </section>
  )
}

function Row({ icon: Icon, label, description, badge, children, last = false }: { icon: React.ComponentType<{ className?: string }>; label: string; description: string; badge?: string; children?: React.ReactNode; last?: boolean }) {
  return (
    <div className={"flex items-center gap-3 px-4 py-3 " + (last ? "" : "border-b")}>
      <span className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md"><Icon className="size-4" /></span>
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1.5 text-sm font-medium">
          {label}
          {badge ? <Badge variant="secondary" size="sm">{badge}</Badge> : null}
        </p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      {children}
    </div>
  )
}

export function Settings15Block() {
  const [semantic, setSemantic] = useState(true)
  const [insight, setInsight] = useState(true)
  const [digest, setDigest] = useState(true)
  const [alerts, setAlerts] = useState(true)

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[672px] space-y-4">
        <Card title="AI features">
          <Row icon={SearchIcon} label="Enable AI semantic search" badge="Smart" description="Find content by meaning, not exact wording.">
            <Switch checked={semantic} onCheckedChange={setSemantic} aria-label="AI semantic search" />
          </Row>
          <Row icon={SparklesIcon} label="Enable AI insight" badge="Beta" description="Surface patterns and highlights from your workspace." last>
            <Switch checked={insight} onCheckedChange={setInsight} aria-label="AI insight" />
          </Row>
        </Card>

        <Card title="Publishing">
          <Row icon={GlobeIcon} label="Subdomain" badge="Fallback" description="Short hostname visitors use before your custom domain.">
            <Button variant="outline" size="sm">Edit subdomain</Button>
          </Row>
          <Row icon={LinkIcon} label="Custom domain" badge="HTTPS" description="Bring your brand URL and serve it over HTTPS.">
            <Button variant="outline" size="sm">Connect domain</Button>
          </Row>
          <Row icon={GlobeIcon} label="Default content" badge="Homepage" description="What new visitors see when they land on your site." last>
            <Button variant="outline" size="sm">Change default</Button>
          </Row>
        </Card>

        <Card title="Collaboration">
          <div className="flex items-center gap-3 px-4 py-3">
            <span className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md"><UsersIcon className="size-4" /></span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 text-sm font-medium">Workspace team <Badge variant="secondary" size="sm">12 members</Badge></p>
              <div className="mt-1 flex -space-x-1.5">
                {["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80"].map((src) => (
                  <Avatar key={src} size="sm" className="size-5 ring-2 ring-card">
                    <AvatarImage src={src} alt="" />
                    <AvatarFallback>WT</AvatarFallback>
                  </Avatar>
                ))}
                <span className="bg-muted text-muted-foreground flex size-5 items-center justify-center rounded-full text-[10px] ring-2 ring-card">+9</span>
              </div>
            </div>
            <Button variant="outline" size="sm">Manage members</Button>
          </div>
        </Card>

        <Card title="Notifications">
          <Row icon={MailIcon} label="Email digest" badge="Weekly" description="Weekly summary of activity and mentions in this workspace.">
            <Switch checked={digest} onCheckedChange={setDigest} aria-label="Email digest" />
          </Row>
          <Row icon={BellIcon} label="In-app alerts" badge="Instant" description="Show activity notifications as they happen." last>
            <Switch checked={alerts} onCheckedChange={setAlerts} aria-label="In-app alerts" />
          </Row>
        </Card>
      </div>
    </div>
  )
}

export default Settings15Block
