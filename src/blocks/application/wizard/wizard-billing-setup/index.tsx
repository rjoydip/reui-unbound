import { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, InfoIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Switch } from "@/components/ui/switch"

const STEPS = ["Information", "Payment", "Completed"]

function Required() {
  return <span className="text-destructive ml-1">*</span>
}

export function WizardBillingSetupBlock() {
  const [step, setStep] = useState(1)

  return (
    <div className="bg-background text-foreground flex min-h-svh items-center justify-center p-8">
      <div className="bg-card w-full max-w-[580px] overflow-hidden rounded-xl border shadow-sm">
        <div className="border-b px-6 py-4">
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

        {step === 1 ? (
          <div className="px-6 py-5">
            <h2 className="text-lg font-semibold">Your Information</h2>
            <p className="text-muted-foreground mt-0.5 text-xs">Billing owner details.</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="first-name" className="text-xs">First Name<Required /></Label>
                <Input id="first-name" defaultValue="Mara" className="h-8" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="last-name" className="text-xs">Last Name<Required /></Label>
                <Input id="last-name" defaultValue="Chen" className="h-8" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company" className="text-xs">Company<Required /></Label>
                <Input id="company" defaultValue="Kepler Works" className="h-8" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="handle" className="text-xs">Public Handle</Label>
                <div className="relative">
                  <span className="text-muted-foreground absolute top-1/2 left-2.5 -translate-y-1/2 text-xs">@</span>
                  <Input id="handle" defaultValue="kepler-works" className="h-8 pl-6" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Role</Label>
                <Select defaultValue="procurement">
                  <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="procurement">Procurement owner</SelectItem>
                    <SelectItem value="finance">Finance admin</SelectItem>
                    <SelectItem value="billing">Billing contact</SelectItem>
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
                <Label htmlFor="email" className="text-xs">Email Address<Required /></Label>
                <Input id="email" type="email" defaultValue="mara@kepler.works" className="h-8" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="mobile" className="text-xs">Mobile</Label>
                <div className="relative">
                  <span className="text-muted-foreground absolute top-1/2 left-2.5 -translate-y-1/2 text-xs">US +1</span>
                  <Input id="mobile" defaultValue="415 5151" className="h-8 pl-12" />
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mt-4 text-xs">Receipts go here.</p>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="px-6 py-5">
            <h2 className="text-lg font-semibold">Payment Details</h2>
            <p className="text-muted-foreground mt-0.5 text-xs">Billing controls.</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="billing-email" className="text-xs">Billing Email<Required /></Label>
                <Input id="billing-email" type="email" defaultValue="billing@kepler.works" className="h-8" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="receipts" className="text-xs">Receipt Copies</Label>
                <Input id="receipts" type="email" defaultValue="receipts@kepler.works" className="h-8" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Billing Cycle<Required /></Label>
                <Select defaultValue="quarterly">
                  <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="annual">Annual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="tax-id" className="text-xs">Tax ID</Label>
                <Input id="tax-id" defaultValue="US-2849-771" className="h-8" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="po" className="text-xs">PO Number</Label>
                <Input id="po" defaultValue="PO-2026-184" className="h-8" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="limit" className="text-xs">Spend Limit</Label>
                <div className="relative">
                  <span className="text-muted-foreground absolute top-1/2 left-2.5 -translate-y-1/2 text-xs">$</span>
                  <Input id="limit" defaultValue="25000" className="h-8 pl-6" />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-2.5">
              <Switch id="alerts" size="sm" defaultChecked className="mt-0.5" />
              <div>
                <Label htmlFor="alerts" className="text-xs">Billing alerts</Label>
                <p className="text-muted-foreground text-xs">Send renewal and receipt reminders</p>
              </div>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="px-6 py-5">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Review & Confirm</h2>
              <Badge variant="success-light" size="sm"><CheckIcon />Ready</Badge>
            </div>
            <p className="text-muted-foreground mt-0.5 text-xs">Confirm the billing profile before activation.</p>

            <div className="mt-4 rounded-lg border">
              {[
                ["Owner", "Mara Chen"],
                ["Company", "Kepler Works"],
                ["Email", "mara@kepler.works"],
                ["Billing email", "billing@kepler.works"],
                ["Billing cycle", "Quarterly"],
                ["PO number", "PO-2026-184"],
                ["Spend limit", "$25,000"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b px-3 py-2 text-xs last:border-b-0">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/40 text-muted-foreground mt-4 flex items-start gap-2 rounded-lg px-3 py-2 text-xs">
              <InfoIcon className="mt-0.5 size-3.5 shrink-0" />
              Billing alerts are enabled. Renewal reminders go to the receipt copy address.
            </div>
          </div>
        ) : null}

        <div className="bg-muted/30 flex items-center justify-end gap-2 border-t px-6 py-3">
          {step > 1 ? (
            <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setStep((value) => value - 1)}>
              <ArrowLeftIcon />Previous Step
            </Button>
          ) : null}
          {step < 3 ? (
            <Button size="sm" className="bg-foreground text-background gap-1.5 hover:bg-foreground/90" onClick={() => setStep((value) => value + 1)}>
              Next Step<ArrowRightIcon />
            </Button>
          ) : (
            <Button size="sm" className="bg-foreground text-background gap-1.5 hover:bg-foreground/90">
              <CheckIcon />Activate Billing
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default WizardBillingSetupBlock
