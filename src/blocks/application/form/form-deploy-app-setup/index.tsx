import { useState } from "react"
import { RocketIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "cn"

const STARTERS = [
  {
    value: "response-hub",
    label: "Response Hub",
    hint: "Incident queues, escalation notes, and executive readouts.",
  },
  {
    value: "partner-room",
    label: "Partner Room",
    hint: "Access requests, resource sharing, and approval lanes.",
  },
  {
    value: "signal-board",
    label: "Signal Board",
    hint: "Live signals, deployment health, and operator annotations.",
  },
]

const REPOSITORIES = [
  {
    value: "meadow-relay",
    label: "meadow-relay",
    hint: "atlaslane / main · Customer routing and SLA webhooks.",
  },
  {
    value: "dispatch-room",
    label: "dispatch-room",
    hint: "atlaslane / release · Shift handoff tools for launch teams.",
  },
  {
    value: "signal-ledger",
    label: "signal-ledger",
    hint: "platform-labs / stable · Event audit views and status streams.",
  },
  {
    value: "northline-web",
    label: "northline-web",
    hint: "field-systems / preview · Authenticated portal and asset vault.",
  },
]

const RUNTIMES = [
  { value: "next", label: "Next.js App", hint: "Pages, actions, and authenticated routes." },
  { value: "edge", label: "Edge Worker", hint: "Fast event handlers and request transforms." },
  { value: "hybrid", label: "Hybrid Runtime", hint: "Application UI with background processors." },
]

const REGIONS = [
  { value: "us-east", label: "US East", hint: "Low latency for North America." },
  { value: "frankfurt", label: "Frankfurt", hint: "EU processing and residency." },
  { value: "singapore", label: "Singapore", hint: "Asia-Pacific edge entry." },
]

const hintOption = (items: { value: string; label: string; hint: string }[]) =>
  items.map((item) => (
    <SelectItem key={item.value} value={item.value}>
      <span className="flex flex-col">
        <span>{item.label}</span>
        <span className="text-xs text-muted-foreground">{item.hint}</span>
      </span>
    </SelectItem>
  ))

function Row({
  label,
  description,
  children,
}: {
  label: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-3 px-6 py-4 md:grid-cols-[240px_1fr] md:gap-8">
      <div className="space-y-0.5">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

export function FormDeployAppSetupBlock() {
  const [brief, setBrief] = useState(
    "Create a service desk app with priority queues, SLA badges, and owner handoff notes."
  )
  const [starter, setStarter] = useState("response-hub")
  const [repository, setRepository] = useState("meadow-relay")
  const [appName, setAppName] = useState("Meadow Relay")
  const [runtime, setRuntime] = useState("next")
  const [region, setRegion] = useState("us-east")
  const [creating, setCreating] = useState(false)

  const activeStarter = STARTERS.find((item) => item.value === starter) ?? STARTERS[0]
  const activeRuntime = RUNTIMES.find((item) => item.value === runtime) ?? RUNTIMES[0]
  const activeRegion = REGIONS.find((item) => item.value === region) ?? REGIONS[0]
  const activeRepository = REPOSITORIES.find((item) => item.value === repository) ?? REPOSITORIES[0]
  const appSlug = appName.trim().toLowerCase().replace(/\s+/g, "-") || "app"

  const createApp = () => {
    if (!appName.trim()) {
      toast.error("App name is required")
      return
    }
    if (!brief.trim()) {
      toast.error("Add a launch brief")
      return
    }
    setCreating(true)
    window.setTimeout(() => {
      setCreating(false)
      toast.success(`${appName.trim()} created on ${activeRuntime.label}`)
    }, 1100)
  }

  return (
    <div className="flex min-h-svh justify-center bg-background px-4 py-10 sm:px-6">
      <div className="w-full max-w-3xl">
        <section className="overflow-hidden rounded-xl border bg-card">
          <div className="space-y-0.5 border-b px-6 py-5">
            <h2 className="text-base font-semibold">New App</h2>
            <p className="text-sm text-muted-foreground">
              Create a launch-ready app from a brief, source, and starter.
            </p>
          </div>

          <div className="px-6 pt-6 pb-5">
            <div
              className={cn(
                "relative flex flex-col justify-between gap-5 overflow-hidden rounded-lg p-6 text-white sm:flex-row sm:items-center",
                "bg-[linear-gradient(105deg,oklch(0.33_0.19_285),oklch(0.56_0.24_300)_45%,oklch(0.8_0.15_345))]"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
                  <RocketIcon className="size-5" />
                </span>
                <div className="min-w-0 space-y-0.5">
                  <p className="text-xs font-medium text-white/80">Launch setup</p>
                  <p className="truncate text-lg font-semibold">{activeStarter.label}</p>
                  <p className="max-w-[335px] truncate text-sm text-white/85">{activeStarter.hint}</p>
                </div>
              </div>
              <dl className="w-full shrink-0 space-y-1.5 rounded-lg bg-card px-4 py-3 text-sm text-foreground shadow-sm sm:w-60">
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-muted-foreground">Source</dt>
                  <dd className="truncate font-medium">{repository}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-muted-foreground">Runtime</dt>
                  <dd className="truncate font-medium">{activeRuntime.label}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-muted-foreground">Region</dt>
                  <dd className="truncate font-medium">{activeRegion.label}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="divide-y divide-dashed border-t">
            <Row label="Launch Brief" description="Describe the first version.">
              <Textarea
                value={brief}
                onChange={(event) => setBrief(event.target.value)}
                placeholder="What should the first version do?"
                className="min-h-24"
                aria-label="Launch brief"
              />
            </Row>

            <Row label="Starter" description="Base app surface.">
              <Select value={starter} onValueChange={setStarter}>
                <SelectTrigger className="w-full" aria-label="Starter">
                  <SelectValue>{activeStarter.label}</SelectValue>
                </SelectTrigger>
                <SelectContent>{hintOption(STARTERS)}</SelectContent>
              </Select>
            </Row>

            <Row label="Source" description="Repository to connect.">
              <Select value={repository} onValueChange={setRepository}>
                <SelectTrigger className="w-full" aria-label="Source repository">
                  <SelectValue>{activeRepository.label}</SelectValue>
                </SelectTrigger>
                <SelectContent>{hintOption(REPOSITORIES)}</SelectContent>
              </Select>
            </Row>

            <Row label="App Name" description="Display name for the app.">
              <Input
                value={appName}
                onChange={(event) => setAppName(event.target.value)}
                placeholder="Meadow Relay"
                aria-label="App name"
              />
            </Row>

            <Row label="App URL" description="Public route for previews.">
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText className="text-muted-foreground">studio.reui.dev/</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput value={appSlug} readOnly aria-label="App URL" />
              </InputGroup>
            </Row>

            <Row label="Runtime" description="Where the app executes.">
              <Select value={runtime} onValueChange={setRuntime}>
                <SelectTrigger className="w-full" aria-label="Runtime">
                  <SelectValue>{activeRuntime.label}</SelectValue>
                </SelectTrigger>
                <SelectContent>{hintOption(RUNTIMES)}</SelectContent>
              </Select>
            </Row>

            <Row label="Region" description="Deployment location.">
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger className="w-full" aria-label="Region">
                  <SelectValue>{activeRegion.label}</SelectValue>
                </SelectTrigger>
                <SelectContent>{hintOption(REGIONS)}</SelectContent>
              </Select>
            </Row>
          </div>

          <div className="flex items-center justify-end gap-2 border-t bg-muted/40 px-6 py-3">
            <Button
              variant="outline"
              onClick={() => toast.message("Launch cancelled")}
              disabled={creating}
            >
              Cancel
            </Button>
            <Button onClick={createApp} disabled={creating}>
              {creating ? <Spinner className="size-3.5" /> : <RocketIcon />}
              Create App
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FormDeployAppSetupBlock
