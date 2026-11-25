import { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon, InfoIcon, PlusIcon, Trash2Icon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/kit/stepper"
import { cn } from "cn"

const STEPS = ["Company Details", "Compliance", "Submit"]

const DOCS = [
  { id: "incorporation", title: "Certificate of incorporation", note: "Legal entity proof." },
  { id: "tax", title: "Tax residency letter", note: "Needed for payment release." },
  { id: "ownership", title: "Ownership chart", note: "Confirms ownership threshold." },
  { id: "bank", title: "Bank verification letter", note: "Verifies payee details." },
]

function Required() {
  return <span className="text-destructive ml-1">*</span>
}

export function Wizard2Block() {
  const [step, setStep] = useState(1)
  const [owners, setOwners] = useState([
    { name: "Maya Chen", address: "214 Mission Street, San Francisco, CA", percent: "52" },
    { name: "Kai Morgan", address: "18 King Street, Seattle, WA", percent: "28" },
  ])
  const [docs, setDocs] = useState<string[]>(["incorporation", "bank"])

  const updateOwner = (index: number, key: "name" | "address" | "percent", value: string) => {
    setOwners((list) => list.map((owner, i) => (i === index ? { ...owner, [key]: value } : owner)))
  }

  return (
    <div className="bg-background text-foreground flex min-h-svh items-center justify-center p-8">
      <div className="bg-card w-full max-w-[660px] overflow-hidden rounded-xl border shadow-sm">
        <div className="flex items-start justify-between border-b px-5 py-3">
          <div>
            <h1 className="text-sm font-semibold">Procurement Vendor Setup</h1>
            <p className="text-muted-foreground mt-0.5 text-xs">VEN-2048 · Software subscription</p>
          </div>
          <Badge variant="warning-light" size="sm">Review file</Badge>
        </div>

        <div className="border-b px-5 py-4">
          <Stepper value={step} onValueChange={setStep}>
            <StepperNav className="w-full">
              {STEPS.map((label, index) => (
                <StepperItem key={label} step={index + 1} className="gap-2">
                  <StepperTrigger className="gap-2" disabled={index + 1 > step}>
                    <StepperIndicator className="size-5 border-2 border-dashed border-muted-foreground/50 bg-background text-[10px] text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=completed]:border-0 data-[state=completed]:bg-foreground data-[state=completed]:text-background">
                      {index + 1}
                    </StepperIndicator>
                    <StepperTitle className="text-xs font-medium whitespace-nowrap data-[state=inactive]:text-muted-foreground">{label}</StepperTitle>
                  </StepperTrigger>
                  {index < STEPS.length - 1 ? <StepperSeparator className="mx-3" /> : null}
                </StepperItem>
              ))}
            </StepperNav>
          </Stepper>
        </div>

        <div className="px-5 py-5">
          {step === 1 ? (
            <>
              <h2 className="text-lg font-semibold">Company Details</h2>
              <p className="text-muted-foreground mt-0.5 text-xs">Identify the vendor record before compliance review.</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="legal-name" className="text-xs">Legal Company Name<Required /><InfoIcon className="text-muted-foreground ml-1 inline size-3" /></Label>
                  <Input id="legal-name" defaultValue="ReUI Labs" className="h-8" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Portal Registration<InfoIcon className="text-muted-foreground ml-1 inline size-3" /></Label>
                  <Select defaultValue="yes">
                    <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-muted-foreground text-[11px]">Yes</p>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Category</Label>
                  <Select defaultValue="software">
                    <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software">Software subscription</SelectItem>
                      <SelectItem value="services">Professional services</SelectItem>
                      <SelectItem value="hardware">Hardware</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Country</Label>
                  <Select defaultValue="us">
                    <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="vendor-email" className="text-xs">Vendor Email<Required /></Label>
                  <Input id="vendor-email" type="email" defaultValue="procurement@reui.dev" className="h-8" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="website" className="text-xs">Website</Label>
                  <Input id="website" defaultValue="https://reui.dev" className="h-8" />
                </div>
              </div>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <h2 className="text-lg font-semibold">Compliance</h2>
              <p className="text-muted-foreground mt-0.5 text-xs">Confirm ownership and tax records.</p>

              <div className="mt-5 space-y-2">
                {owners.map((owner, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input value={owner.name} onChange={(event) => updateOwner(index, "name", event.target.value)} aria-label="Owner name" className="h-8 flex-1" />
                    <Input value={owner.address} onChange={(event) => updateOwner(index, "address", event.target.value)} aria-label="Owner address" className="h-8 flex-[1.7]" />
                    <div className="relative w-20 shrink-0">
                      <Input value={owner.percent} onChange={(event) => updateOwner(index, "percent", event.target.value)} aria-label="Ownership percent" className="h-8 pr-6" />
                      <span className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 text-xs">%</span>
                    </div>
                    <Button variant="ghost" size="icon-sm" aria-label="Remove owner" onClick={() => setOwners((list) => list.filter((_, i) => i !== index))}>
                      <Trash2Icon />
                    </Button>
                  </div>
                ))}
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setOwners((list) => [...list, { name: "", address: "", percent: "" }])}>
                    <PlusIcon />Add owner
                  </Button>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="tax-vat" className="text-xs">Tax/VAT ID<Required /><InfoIcon className="text-muted-foreground ml-1 inline size-3" /></Label>
                  <Input id="tax-vat" defaultValue="US-82-4917721" className="h-8" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="incorporated" className="text-xs">Date Incorporated<Required /><InfoIcon className="text-muted-foreground ml-1 inline size-3" /></Label>
                  <Input id="incorporated" defaultValue="08/08/2025" className="h-8" />
                </div>
              </div>

              <div className="mt-5 flex items-start gap-2.5">
                <Checkbox id="ownership" defaultChecked className="mt-0.5" />
                <div>
                  <Label htmlFor="ownership" className="text-xs font-medium">Ownership reviewed</Label>
                  <p className="text-muted-foreground text-xs">Records match company documents.</p>
                </div>
              </div>
            </>
          ) : null}

          {step === 3 ? (
            <>
              <h2 className="text-lg font-semibold">Submit</h2>
              <p className="text-muted-foreground mt-0.5 text-xs">Review files and confirm.</p>

              <p className="mt-4 text-xs font-medium">Required Documents<InfoIcon className="text-muted-foreground ml-1 inline size-3" /></p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {DOCS.map((doc) => {
                  const checked = docs.includes(doc.id)
                  return (
                    <label
                      key={doc.id}
                      className={cn("flex cursor-pointer items-start gap-2.5 rounded-lg border p-3 transition-colors", checked ? "bg-muted/60" : "hover:bg-muted/30")}
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(value) => setDocs((list) => (value ? [...list, doc.id] : list.filter((id) => id !== doc.id)))}
                        className="mt-0.5"
                      />
                      <span>
                        <span className="block text-xs font-medium">{doc.title}</span>
                        <span className="text-muted-foreground block text-xs">{doc.note}</span>
                      </span>
                    </label>
                  )
                })}
              </div>

              <div className="mt-4 space-y-1.5">
                <Label htmlFor="notes" className="text-xs">Reviewer Notes</Label>
                <Textarea id="notes" defaultValue="Route final review to finance once tax residency is uploaded." className="min-h-20 text-xs" />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border p-3">
                  <p className="text-xs font-semibold">Vendor</p>
                  <div className="mt-2 space-y-1.5">
                    {[["Company", "ReUI Labs"], ["Category", "Software subscription"], ["Country", "United States"]].map(([label, value]) => (
                      <div key={label} className="flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-medium">{value}</span></div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-xs font-semibold">Compliance</p>
                  <div className="mt-2 space-y-1.5">
                    {[["Tax/VAT", "US-82-4917721"], ["Owners", String(owners.length)], ["Status", "Reviewed"]].map(([label, value]) => (
                      <div key={label} className="flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-medium">{value}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div className="bg-muted/30 flex items-center justify-between border-t px-5 py-3">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
            {step === 1 ? <><InfoIcon className="size-3.5" />Vendor identity and procurement profile.</> : null}
            {step === 2 ? <><InfoIcon className="size-3.5" />Owners and tax IDs.</> : null}
            {step === 3 ? <><InfoIcon className="size-3.5" />Review and submit.</> : null}
          </span>
          <div className="flex items-center gap-2">
            {step > 1 ? (
              <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setStep((value) => value - 1)}><ArrowLeftIcon />Previous</Button>
            ) : null}
            {step < 3 ? (
              <Button size="sm" className="bg-foreground text-background gap-1.5 hover:bg-foreground/90" onClick={() => setStep((value) => value + 1)}>Next Step<ArrowRightIcon /></Button>
            ) : (
              <Button size="sm" className="gap-1.5">
                <span className="size-3 animate-spin rounded-full border-2 border-background/40 border-t-background" />
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wizard2Block
