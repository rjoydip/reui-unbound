import { useState } from "react"
import { AlertTriangleIcon, ArrowLeftIcon, ArrowRightIcon, CalendarIcon, InfoIcon, PenLineIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/kit/stepper"
import { cn } from "cn"

const STEPS = [
  { title: "Plan", description: "Select tier" },
  { title: "Seats", description: "Set seats" },
  { title: "Payment", description: "Choose terms" },
  { title: "Review", description: "Approve" },
]

const PLANS = [
  { id: "team", name: "Team", price: 49, description: "Workspace controls for growing product teams." },
  { id: "business", name: "Business", price: 72, description: "SAML, audit exports, and priority support.", recommended: true },
  { id: "enterprise", name: "Enterprise", price: 96, description: "Procurement review and account governance." },
]

export function Wizard4Block() {
  const [step, setStep] = useState(1)
  const [plan, setPlan] = useState("business")
  const [seats, setSeats] = useState([42])
  const [cycle, setCycle] = useState("annual")

  const seatPrice = PLANS.find((item) => item.id === plan)?.price ?? 72
  const annual = cycle === "annual"
  const seatTotal = seats[0] * seatPrice * (annual ? 12 : 1)
  const discount = annual ? Math.round(seatTotal * 0.15) : 0
  const support = 390
  const due = seatTotal - discount + support

  return (
    <div className="bg-background text-foreground flex min-h-svh items-center justify-center p-8">
      <div className="bg-card w-full max-w-[900px] overflow-hidden rounded-xl border shadow-sm">
        <div className="flex items-start justify-between border-b px-5 py-3">
          <div>
            <h1 className="text-sm font-semibold">Billing upgrade</h1>
            <p className="text-muted-foreground mt-0.5 text-xs">Change plan, seats, and payment terms before renewal.</p>
          </div>
          <Badge variant="warning-light" size="sm">● Draft</Badge>
        </div>

        <div className="border-b px-6 py-6">
          <Stepper value={step} onValueChange={setStep}>
            <StepperNav className="w-full">
              {STEPS.map((item, index) => (
                <StepperItem key={item.title} step={index + 1} className="gap-2">
                  <StepperTrigger className="flex-col gap-1 pb-2" disabled={index + 1 > step}>
                    <StepperIndicator className="size-5 border-2 border-dashed border-muted-foreground/50 bg-background text-[10px] text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=completed]:border-0 data-[state=completed]:bg-foreground data-[state=completed]:text-background">
                      {index + 1}
                    </StepperIndicator>
                    <StepperTitle className="text-xs font-medium">{item.title}</StepperTitle>
                    <StepperDescription className="text-muted-foreground text-[11px]">{item.description}</StepperDescription>
                  </StepperTrigger>
                  {index < STEPS.length - 1 ? <StepperSeparator className="mx-4 mb-8" /> : null}
                </StepperItem>
              ))}
            </StepperNav>
          </Stepper>
        </div>

        <div className="grid md:grid-cols-[1.65fr_1fr]">
          <div className="px-6 py-5">
            {step === 1 ? (
              <>
                <h2 className="text-sm font-semibold">Plan</h2>
                <p className="text-muted-foreground mt-0.5 text-xs">Choose the tier for the seat increase.</p>
                <RadioGroup value={plan} onValueChange={setPlan} className="mt-4 gap-2">
                  {PLANS.map((item) => (
                    <label
                      key={item.id}
                      htmlFor={`plan-${item.id}`}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 transition-colors",
                        plan === item.id && "border-foreground/60 bg-muted/30"
                      )}
                    >
                      <RadioGroupItem id={`plan-${item.id}`} value={item.id} className="mt-1" />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-medium">{item.name}</span>
                          {item.recommended ? <Badge variant="success-light" size="sm">Recommended</Badge> : null}
                        </span>
                        <span className="text-muted-foreground mt-0.5 block text-xs">{item.description}</span>
                      </span>
                      <span className="text-xs font-medium whitespace-nowrap">${item.price}<span className="text-muted-foreground font-normal">/seat/mo</span></span>
                    </label>
                  ))}
                </RadioGroup>
              </>
            ) : null}

            {step === 2 ? (
              <>
                <h2 className="text-sm font-semibold">Seats</h2>
                <p className="text-muted-foreground mt-0.5 text-xs">Set capacity before finance review.</p>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium">Seat count</p>
                    <p className="text-muted-foreground text-xs">30 current, {Math.max(0, seats[0] - 30)} added.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-[11px]">{seats[0]} / 120</p>
                    <p className="text-xs font-medium">{seats[0]} seats</p>
                  </div>
                </div>
                <Slider value={seats} onValueChange={setSeats} min={30} max={120} step={1} className="mt-3" />

                <div className="mt-5">
                  <p className="text-xs font-medium">Billing cycle</p>
                  <RadioGroup value={cycle} onValueChange={setCycle} className="mt-2 flex items-center gap-6">
                    <label className="flex items-center gap-2 text-xs"><RadioGroupItem value="monthly" />Monthly <InfoIcon className="text-muted-foreground size-3" /></label>
                    <label className="flex items-center gap-2 text-xs"><RadioGroupItem value="annual" />Annual <InfoIcon className="text-muted-foreground size-3" /></label>
                  </RadioGroup>
                  <p className="text-muted-foreground mt-1 text-[11px]">Annual keeps one approval window.</p>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium">Request details</p>
                    <Badge variant="outline" size="sm">Seat change</Badge>
                  </div>
                  <div className="grid grid-cols-[1fr_1.2fr] items-center gap-3">
                    <div>
                      <p className="text-xs font-medium">Request owner</p>
                      <p className="text-muted-foreground text-[11px]">Receives finance follow-up.</p>
                    </div>
                    <Input defaultValue="maya@kepler.works" className="h-8" />
                  </div>
                  <div className="grid grid-cols-[1fr_1.2fr] items-center gap-3">
                    <div>
                      <p className="text-xs font-medium">Upgrade reason</p>
                      <p className="text-muted-foreground text-[11px]">Adds context for approval.</p>
                    </div>
                    <Select defaultValue="growth">
                      <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="growth">Team growth</SelectItem>
                        <SelectItem value="features">New features</SelectItem>
                        <SelectItem value="compliance">Compliance requirement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            ) : null}

            {step === 3 ? (
              <>
                <h2 className="text-sm font-semibold">Payment</h2>
                <p className="text-muted-foreground mt-0.5 text-xs">Route the invoice to finance.</p>

                <div className="mt-5 space-y-4">
                  {[
                    { label: "Payment method", note: "Sets the approval path.", control: (
                      <Select defaultValue="net30">
                        <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="net30">Net 30 invoice</SelectItem>
                          <SelectItem value="card">Corporate card</SelectItem>
                          <SelectItem value="ach">ACH transfer</SelectItem>
                        </SelectContent>
                      </Select>
                    ) },
                    { label: "Renewal date", note: "Used for contract and invoice terms.", control: (
                      <div className="relative">
                        <Input defaultValue="May 31, 2026" className="h-8 pr-8" />
                        <CalendarIcon className="text-muted-foreground absolute top-1/2 right-2.5 size-3.5 -translate-y-1/2" />
                      </div>
                    ) },
                    { label: "Invoice email", note: "Receives the draft invoice.", control: <Input defaultValue="billing@kepler.works" className="h-8" /> },
                    { label: "Purchase order", note: "Shown on the invoice.", control: <Input defaultValue="PO-2026-184" className="h-8" /> },
                  ].map((field) => (
                    <div key={field.label} className="grid grid-cols-[1fr_1.2fr] items-center gap-3">
                      <div>
                        <p className="text-xs font-medium">{field.label}</p>
                        <p className="text-muted-foreground text-[11px]">{field.note}</p>
                      </div>
                      {field.control}
                    </div>
                  ))}
                </div>

                <Alert className="mt-5 border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200">
                  <AlertTriangleIcon className="size-4" />
                  <AlertTitle className="text-xs">Draft invoice</AlertTitle>
                  <AlertDescription className="text-xs">One draft invoice includes the seat delta, renewal date, and PO.</AlertDescription>
                </Alert>
              </>
            ) : null}

            {step === 4 ? (
              <>
                <h2 className="text-sm font-semibold">Review</h2>
                <p className="text-muted-foreground mt-0.5 text-xs">Check contract and finance routing.</p>

                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
                  {[
                    ["Plan", PLANS.find((item) => item.id === plan)?.name ?? "Business", "Approval", "Net 30 invoice"],
                    ["Seats", `${seats[0]} total`, "Reason", "Team growth"],
                    ["Cycle", annual ? "Annual" : "Monthly", "Owner", "maya@kepler.works"],
                    ["Renewal", "May 31, 2026", "Invoice", "billing@kepler.works"],
                    ["", "", "PO", "PO-2026-184"],
                  ].map((row, index) => (
                    <div key={index} className="col-span-2 grid grid-cols-[80px_1fr_70px_1fr] gap-2">
                      <span className="text-muted-foreground">{row[0]}</span>
                      <span className="font-medium underline-offset-2">{row[1]}</span>
                      <span className="text-muted-foreground">{row[2]}</span>
                      <span className="font-medium underline-offset-2">{row[3]}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          <aside className="border-t px-5 py-5 md:border-t-0 md:border-l">
            <div className="flex items-center gap-2">
              <p className="text-xs font-semibold">Invoice preview</p>
              <Badge variant="outline" size="sm">{annual ? "Annual" : "Monthly"}</Badge>
            </div>
            <p className="text-muted-foreground mt-0.5 text-xs">Draft before approval.</p>

            <div className="bg-muted/30 mt-4 flex items-center justify-between rounded-lg border border-dashed px-3 py-2.5">
              <div>
                <p className="text-xs font-medium">Due today</p>
                <p className="text-muted-foreground text-[11px]">{PLANS.find((item) => item.id === plan)?.name}, {seats[0]} seats, {annual ? "annual" : "monthly"}</p>
              </div>
              <p className="text-lg font-semibold">${due.toLocaleString()}</p>
            </div>

            <p className="mt-4 flex items-center gap-1 text-xs font-medium">Cost breakdown <InfoIcon className="text-muted-foreground size-3" /></p>
            <div className="mt-2 space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between"><span>Seats</span><span className="font-medium">${seatTotal.toLocaleString()}</span></div>
                <p className="text-muted-foreground text-[11px]">{seats[0]} seats, {annual ? "annual" : "monthly"}</p>
              </div>
              <div>
                <div className="flex justify-between"><span>Discount</span><span className="font-medium">-${discount.toLocaleString()}</span></div>
                <p className="text-muted-foreground text-[11px]">15% term credit</p>
              </div>
              <div className="flex justify-between"><span>Support</span><span className="font-medium">${support}</span></div>
            </div>

            <p className="mt-4 flex items-center gap-1 text-xs font-medium">Invoice routing <InfoIcon className="text-muted-foreground size-3" /></p>
            <div className="mt-2 space-y-1.5 text-xs">
              <div className="flex justify-between"><span className="text-muted-foreground">Renewal</span><span className="font-medium">May 31, 2026</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">PO</span><span className="font-medium">PO-2026-184</span></div>
            </div>
          </aside>
        </div>

        <div className="bg-muted/30 flex items-center justify-between border-t px-5 py-3">
          <div>{step > 1 ? <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setStep((value) => value - 1)}><ArrowLeftIcon />Previous</Button> : null}</div>
          {step < 4 ? (
            <Button size="sm" className="bg-foreground text-background gap-1.5 hover:bg-foreground/90" onClick={() => setStep((value) => value + 1)}>Next<ArrowRightIcon /></Button>
          ) : (
            <Button size="sm" className="bg-foreground text-background gap-1.5 hover:bg-foreground/90"><PenLineIcon />Issue draft</Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Wizard4Block
