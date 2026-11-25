import { useState } from "react"
import { GlobeIcon, PlusIcon, UploadIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const ACCENTS = ["bg-slate-500", "bg-rose-500", "bg-orange-500", "bg-violet-500", "bg-emerald-500", "bg-sky-500"]
const DATES = ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY/MM/DD"]

function Row({ label, description, children, last = false }: { label: string; description?: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={cn("grid gap-3 px-4 py-3.5 sm:grid-cols-[1fr_360px] sm:items-start", !last && "border-b")}>
      <div>
        <p className="flex flex-wrap items-center gap-1.5 text-sm font-medium">
          {label}
          {label === "API endpoint" ? <Badge variant="destructive-light" size="sm">Required</Badge> : null}
          {label === "Accent color" ? <Badge variant="outline" size="sm">Upgrade to Pro</Badge> : null}
        </p>
        {description ? <p className="text-muted-foreground text-sm">{description}</p> : null}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

export function SettingsGeneralSettingsBlock() {
  const [accent, setAccent] = useState(0)
  const [dateFormat, setDateFormat] = useState("MM/DD/YYYY")
  const [shortcuts, setShortcuts] = useState(true)
  const [spellcheck, setSpellcheck] = useState(true)

  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-full max-w-[768px] overflow-hidden rounded-xl border shadow-sm">
        <div className="border-b p-4">
          <h1 className="text-sm font-semibold">General Settings</h1>
          <p className="text-muted-foreground mt-1 text-sm">Core app preferences.</p>
        </div>

        <Row label="Project name" description="The display name for your project across the platform.">
          <Input defaultValue="Acme Dashboard" aria-label="Project name" />
        </Row>
        <Row label="API endpoint" description="Set the base URL for your project API.">
          <div className="flex items-center rounded-lg border px-3">
            <span className="text-muted-foreground text-sm">https://</span>
            <input defaultValue="api.acme.io" aria-label="API endpoint" className="h-8 min-w-0 flex-1 bg-transparent px-1 text-sm outline-none" />
          </div>
        </Row>
        <Row label="Start of week" description="Choose which day marks the start of your week.">
          <Select defaultValue="Monday">
            <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
            <SelectContent>{["Monday", "Sunday", "Saturday"].map((day) => <SelectItem key={day} value={day}>{day}</SelectItem>)}</SelectContent>
          </Select>
        </Row>
        <Row label="Allowed origins" description="Define the trusted domains for CORS requests.">
          <div className="flex flex-wrap items-center justify-end gap-2">
            <Button variant="outline" size="sm"><PlusIcon />Add origin</Button>
            <Button variant="outline" size="sm"><UploadIcon />Import from file</Button>
          </div>
        </Row>
        <Row label="Accent color" description="Select a color to represent your brand.">
          <div className="flex items-center justify-end gap-2">
            {ACCENTS.map((color, index) => (
              <button
                key={color}
                type="button"
                aria-label={`Accent ${index + 1}`}
                onClick={() => setAccent(index)}
                className={cn("flex size-6 items-center justify-center rounded-full", accent === index && "ring-2 ring-foreground/40 ring-offset-2 ring-offset-card")}
              >
                <span className={cn("size-5 rounded-full", color)} />
              </button>
            ))}
          </div>
        </Row>
        <Row label="Region & currency" description="Adjust your regional preferences and currency.">
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-xs font-medium">Region</p>
              <Select defaultValue="United States">
                <SelectTrigger className="w-full"><GlobeIcon /><SelectValue /></SelectTrigger>
                <SelectContent>{["United States", "Germany", "India", "Japan"].map((region) => <SelectItem key={region} value={region}>{region}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium">Currency</p>
              <Select defaultValue="USD · US Dollar">
                <SelectTrigger className="w-full"><GlobeIcon /><SelectValue /></SelectTrigger>
                <SelectContent>{["USD · US Dollar", "EUR · Euro", "INR · Indian Rupee"].map((currency) => <SelectItem key={currency} value={currency}>{currency}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>
        </Row>
        <Row label="Date display format" description="Choose your preferred format for dates.">
          <div className="flex flex-wrap justify-end gap-1.5">
            {DATES.map((format) => (
              <button
                key={format}
                type="button"
                onClick={() => setDateFormat(format)}
                className={cn("rounded-md border px-2.5 py-1 text-xs", dateFormat === format ? "bg-muted font-medium" : "hover:bg-muted/50")}
              >
                {format}
              </button>
            ))}
          </div>
        </Row>
        <Row label="Editor preferences" description="Adjust your editing environment and display options." last>
          <div className="space-y-3">
            <label className="flex items-start gap-2 text-sm">
              <Switch checked={shortcuts} onCheckedChange={setShortcuts} aria-label="Enable keyboard shortcuts" />
              <span>
                <span className="block font-medium">Enable keyboard shortcuts.</span>
                <span className="text-muted-foreground text-xs">Use shortcuts to speed up your workflow.</span>
              </span>
            </label>
            <label className="flex items-start gap-2 text-sm">
              <Switch checked={spellcheck} onCheckedChange={setSpellcheck} aria-label="Auto spell-check" />
              <span>
                <span className="block font-medium">Auto spell-check.</span>
                <span className="text-muted-foreground text-xs">Highlight spelling errors in text fields.</span>
              </span>
            </label>
          </div>
        </Row>

        <div className="flex justify-end gap-2 border-t p-4">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Save changes</Button>
        </div>
      </div>
    </div>
  )
}

export default SettingsGeneralSettingsBlock
