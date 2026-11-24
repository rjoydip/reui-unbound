import { useState } from "react"
import { Building2Icon, CheckIcon } from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const TEAM_SIZES = ["1-10 people", "11-50 people", "51-200 people", "201+ people"]
const LAUNCH_WINDOWS = ["This week", "Next 2 weeks", "Next month", "This quarter"]
const TEMPLATES = ["Revenue operations", "Customer support", "Product analytics", "Blank workspace"]
const SOURCES = ["CRM", "Billing", "Support desk", "CSV import"]
const STAKEHOLDERS = ["Maya Chen", "Kai Morgan", "Priya Nair", "Theo Alvarez"]

const GOALS = [
  { value: "pipeline", label: "Pipeline", hint: "Accounts and follow-up work." },
  { value: "support", label: "Support", hint: "Tickets and customer signals." },
  { value: "reporting", label: "Reporting", hint: "Dashboards from trusted data." },
]

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

function LabeledSelect({
  value,
  onChange,
  options,
  label,
}: {
  value: string
  onChange: (value: string) => void
  options: string[]
  label: string
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full" aria-label={label}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export function Form10Block() {
  const anchor = useComboboxAnchor()
  const [company, setCompany] = useState("Northstar Labs")
  const [slug, setSlug] = useState("northstar")
  const [goal, setGoal] = useState("pipeline")
  const [teamSize, setTeamSize] = useState(TEAM_SIZES[1])
  const [launchWindow, setLaunchWindow] = useState(LAUNCH_WINDOWS[1])
  const [template, setTemplate] = useState(TEMPLATES[0])
  const [source, setSource] = useState(SOURCES[0])
  const [owners, setOwners] = useState<string[]>(["Maya Chen", "Kai Morgan"])
  const [sampleData, setSampleData] = useState(true)
  const [notes, setNotes] = useState("")
  const [creating, setCreating] = useState(false)

  const createPlan = () => {
    if (!company.trim()) {
      toast.error("Company name is required")
      return
    }
    const cleanSlug = slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, "-")
    if (!cleanSlug) {
      toast.error("Workspace URL is required")
      return
    }
    if (owners.length === 0) {
      toast.error("Add at least one workspace owner")
      return
    }
    setCreating(true)
    window.setTimeout(() => {
      setCreating(false)
      toast.success(`${company} plan created · ${cleanSlug}`)
    }, 1200)
  }

  return (
    <div className="flex min-h-svh justify-center bg-background px-4 py-10 sm:px-6">
      <div className="w-full max-w-3xl">
        <section className="overflow-hidden rounded-xl border bg-card">
          <div className="flex items-start justify-between gap-3 border-b px-6 py-5">
            <div className="space-y-0.5">
              <h2 className="text-base font-semibold">Customer Onboarding</h2>
              <p className="text-sm text-muted-foreground">
                Create a focused setup plan for a new workspace.
              </p>
            </div>
            <Badge variant="outline" aria-label="Saved as draft">
              Draft
            </Badge>
          </div>

          <div className="divide-y divide-dashed">
            <Row label="Company Name" description="Customer account display name.">
              <InputGroup>
                <InputGroupAddon>
                  <Building2Icon />
                </InputGroupAddon>
                <InputGroupInput
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="Northstar Labs"
                  aria-label="Company name"
                />
              </InputGroup>
            </Row>

            <Row label="Workspace URL" description="Short route for the new workspace.">
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText className="text-muted-foreground">app.reui.dev/</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput
                  value={slug}
                  onChange={(event) => setSlug(event.target.value)}
                  placeholder="northstar"
                  aria-label="Workspace URL"
                />
              </InputGroup>
            </Row>

            <Row label="Intent" description="Pick the first success path.">
              <RadioGroup value={goal} onValueChange={setGoal} className="gap-3">
                {GOALS.map((item) => (
                  <label key={item.value} className="flex cursor-pointer items-start gap-3">
                    <RadioGroupItem value={item.value} className="mt-0.5" />
                    <span>
                      <span className="block text-sm font-medium">{item.label}</span>
                      <span className="block text-sm text-muted-foreground">{item.hint}</span>
                    </span>
                  </label>
                ))}
              </RadioGroup>
            </Row>

            <Row label="Team Size" description="Expected workspace users.">
              <LabeledSelect
                label="Team size"
                value={teamSize}
                onChange={setTeamSize}
                options={TEAM_SIZES}
              />
            </Row>

            <Row label="Launch Window" description="Target first usable workspace.">
              <LabeledSelect
                label="Launch window"
                value={launchWindow}
                onChange={setLaunchWindow}
                options={LAUNCH_WINDOWS}
              />
            </Row>

            <Row label="Starter Template" description="Initial workspace structure.">
              <LabeledSelect
                label="Starter template"
                value={template}
                onChange={setTemplate}
                options={TEMPLATES}
              />
            </Row>

            <Row label="First Source" description="Primary data source to connect.">
              <LabeledSelect
                label="First source"
                value={source}
                onChange={setSource}
                options={SOURCES}
              />
            </Row>

            <Row label="Owners" description="People responsible for setup.">
              <Combobox
                multiple
                autoHighlight
                items={STAKEHOLDERS}
                value={owners}
                onValueChange={setOwners}
              >
                <ComboboxChips ref={anchor} className="min-h-9">
                  <ComboboxValue>
                    {(values: string[]) => (
                      <>
                        {values.map((value) => (
                          <ComboboxChip key={value}>{value}</ComboboxChip>
                        ))}
                        <ComboboxChipsInput placeholder="Add owner" />
                      </>
                    )}
                  </ComboboxValue>
                </ComboboxChips>
                <ComboboxContent anchor={anchor}>
                  <ComboboxEmpty>No teammates found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item: string) => (
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Row>

            <Row label="Include Sample Data" description="Seed demo records before import.">
              <Switch checked={sampleData} onCheckedChange={setSampleData} aria-label="Include sample data" />
            </Row>

            <Row label="Setup Notes" description="Context for the implementation team.">
              <Textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Start with CRM accounts and renewal workflow defaults."
                className="min-h-20"
                aria-label="Setup notes"
              />
            </Row>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t bg-muted/40 px-6 py-3">
            <p className="text-sm text-muted-foreground">
              {teamSize} team · {launchWindow} launch · {owners.length} owners
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => toast.success("Draft saved")}>
                Save Draft
              </Button>
              <Button onClick={createPlan} disabled={creating}>
                {creating ? <Spinner className="size-3.5" /> : <CheckIcon />}
                Create Plan
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Form10Block
