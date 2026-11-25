import { useState } from "react"
import {
  BugIcon,
  CompassIcon,
  MailIcon,
  MapPinIcon,
  SearchIcon,
  Share2Icon,
  UserRoundIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const ROWS = [
  { key: "search", title: "Show up in search results", description: "Control your visibility by choosing if you appear in search results.", badge: "Pro", icon: SearchIcon, control: "switch" },
  { key: "receipts", title: "Manage Read Receipts for Messages", description: "Enable or disable read receipts for private messages.", badge: "Pro", icon: MailIcon, control: "switch" },
  { key: "location", title: "Enable Location-Based Services", description: "Allow the app to access and use your location for personalized content.", icon: MapPinIcon, control: "switch", defaultOn: true },
  { key: "ads", title: "Ad Personalization Settings", description: "Customize how ads are targeted to your interests.", badge: "Beta", icon: Share2Icon, control: "button" },
  { key: "profile", title: "Allow public profile", description: "Enable users to create and display a profile publicly.", icon: UserRoundIcon, control: "switch", defaultOn: true },
  { key: "useLocation", title: "Allow use location", description: "Enable feature to use and share the user's location.", icon: CompassIcon, control: "switch" },
  { key: "vuln", title: "Private vulnerability reporting", description: "Confidential channel for reporting system vulnerabilities.", badge: "Beta", icon: BugIcon, control: "pair" },
]

export function Settings2Block() {
  const [on, setOn] = useState<Record<string, boolean>>({
    location: true,
    profile: true,
  })
  const [vulnAll, setVulnAll] = useState(true)

  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-full max-w-[672px] overflow-hidden rounded-xl border shadow-sm">
        <div className="border-b p-4">
          <h1 className="text-sm font-semibold">Privacy &amp; Preferences</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage your account privacy settings and preferences to control how your data is used.</p>
        </div>

        <div>
          {ROWS.map((row, index) => (
            <div key={row.key} className={index < ROWS.length - 1 ? "flex items-center gap-3 border-b px-4 py-3.5" : "flex items-center gap-3 px-4 py-3.5"}>
              <span className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md">
                <row.icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex flex-wrap items-center gap-1.5 text-sm font-medium">
                  {row.title}
                  {row.badge ? <Badge variant="outline" size="sm">{row.badge}</Badge> : null}
                </p>
                <p className="text-muted-foreground text-sm">{row.description}</p>
              </div>
              {row.control === "switch" ? (
                <Switch
                  checked={on[row.key] ?? row.defaultOn ?? false}
                  onCheckedChange={(value) => setOn((current) => ({ ...current, [row.key]: value }))}
                  aria-label={row.title}
                />
              ) : null}
              {row.control === "button" ? <Button variant="outline" size="sm">Setup</Button> : null}
              {row.control === "pair" ? (
                <div className="flex items-center gap-1.5">
                  <Button variant="destructive" size="sm" onClick={() => setVulnAll(false)}>Disable all</Button>
                  <Button variant="outline" size="sm" onClick={() => setVulnAll(true)}>Enable all</Button>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t p-4">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm" className="ml-auto">Save changes</Button>
          <span className="sr-only">{vulnAll ? "Vulnerability reporting enabled" : "Vulnerability reporting disabled"}</span>
        </div>
      </div>
    </div>
  )
}

export default Settings2Block
