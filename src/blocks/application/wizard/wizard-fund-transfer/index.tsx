import { useState } from "react"
import { ArrowRightIcon, CheckIcon, ChevronRightIcon, SearchIcon, XIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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

const STEPS = ["Payee", "Amount", "Details", "Authorize"]

const RECENT = [
  { name: "Emma Clarke", bank: "Mercury Bank", flag: "🇺🇸", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { name: "Mason Reed", bank: "Aster Bank", flag: "🇺🇸", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Oliver Bennett", bank: "Barclays", flag: "🇬🇧", initials: "OB" },
  { name: "Helio Parts Co.", bank: "Commerzbank", flag: "🇩🇪", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
  { name: "Keystone Systems", bank: "Chase Bank", flag: "🇺🇸", initials: "KS" },
  { name: "Lauren Diaz", bank: "Monzo Bank", flag: "🇬🇧", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
]

const ACCOUNTS = [
  { name: "Emma Clarke", detail: "Mercury Bank · Consulting ending 3508", paid: "Paid Apr 18", flag: "🇺🇸", avatar: RECENT[0].avatar },
  { name: "Mason Reed", detail: "Aster Bank · Contractor ending 1184", paid: "Paid May 03", flag: "🇺🇸", avatar: RECENT[1].avatar },
  { name: "Oliver Bennett", detail: "Barclays Business · Supplier ending 7420", paid: "", flag: "🇬🇧", initials: "OB" },
  { name: "Helio Parts Co.", detail: "Commerzbank · Parts invoice ending 4318", paid: "", flag: "🇩🇪", avatar: RECENT[3].avatar },
  { name: "Keystone Systems", detail: "Chase Business · Retainer ending 9910", paid: "New details", flag: "🇺🇸", initials: "KS" },
]

export function WizardFundTransferBlock() {
  const [step, setStep] = useState(1)
  const [filter, setFilter] = useState("all")
  const [query, setQuery] = useState("")
  const [sent, setSent] = useState(false)

  const visible = ACCOUNTS.filter((account) => {
    const matchesFilter = filter === "all" || account.name.toLowerCase().includes(query.toLowerCase()) || account.detail.toLowerCase().includes(query.toLowerCase())
    const matchesQuery = !query || account.name.toLowerCase().includes(query.toLowerCase()) || account.detail.toLowerCase().includes(query.toLowerCase())
    return matchesFilter && matchesQuery
  })

  return (
    <div className="bg-background text-foreground flex min-h-svh flex-col">
      <header className="relative flex h-12 shrink-0 items-center border-b px-4">
        <p className="text-sm font-semibold">Fund Transfer</p>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Stepper value={step} onValueChange={setStep}>
            <StepperNav>
              {STEPS.map((label, index) => (
                <StepperItem key={label} step={index + 1} className="gap-1.5">
                  <StepperTrigger className="gap-1.5" disabled={index + 1 > step}>
                    <StepperIndicator className="size-5 border-2 border-dashed border-muted-foreground/50 bg-background text-[10px] text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=completed]:border-0 data-[state=completed]:bg-foreground data-[state=completed]:text-background">
                      {index + 1}
                    </StepperIndicator>
                    <StepperTitle className={cn("text-xs whitespace-nowrap", index + 1 > step && "text-muted-foreground")}>{label}</StepperTitle>
                  </StepperTrigger>
                  {index < STEPS.length - 1 ? <StepperSeparator className="w-6" /> : null}
                </StepperItem>
              ))}
            </StepperNav>
          </Stepper>
        </div>
        <Button variant="ghost" size="icon-sm" className="ml-auto" aria-label="Close"><XIcon /></Button>
      </header>

      <div className="flex-1 overflow-auto px-6 py-8">
        <div className="mx-auto w-full max-w-[560px]">
          {step === 1 ? (
            <>
              <p className="text-sm font-medium">Recent payees</p>
              <div className="mt-3 flex items-start gap-5">
                {RECENT.slice(0, 6).map((payee) => (
                  <button key={payee.name} type="button" className="group flex w-14 flex-col items-center gap-1 text-center">
                    <span className="relative">
                      {payee.avatar ? (
                        <Avatar className="size-11"><AvatarImage src={payee.avatar} alt="" /><AvatarFallback>{payee.initials ?? "PN"}</AvatarFallback></Avatar>
                      ) : (
                        <span className="bg-background flex size-11 items-center justify-center rounded-full border text-[11px] font-medium">{payee.initials}</span>
                      )}
                      <span className="absolute -right-0.5 -bottom-0.5 text-[11px] leading-none">{payee.flag}</span>
                    </span>
                    <span className="w-full truncate text-[11px] font-medium">{payee.name}</span>
                    <span className="text-muted-foreground w-full truncate text-[10px]">{payee.bank} ···</span>
                  </button>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium">Saved accounts</p>
              <div className="relative mt-2">
                <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Name, bank, ending, or country"
                  className="h-9 pl-9"
                />
              </div>
              <div className="mt-2 flex items-center gap-2">
                {["all", "wallets"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    className={cn(
                      "rounded-md border px-2.5 py-1 text-xs transition-colors",
                      filter === item ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/50"
                    )}
                  >
                    {item === "all" ? "All" : "My wallets"}
                  </button>
                ))}
              </div>

              <div className="mt-3 max-h-[320px] space-y-1 overflow-y-auto pr-2">
                {visible.length ? visible.map((account) => (
                  <button key={account.name} type="button" className="hover:bg-muted/50 flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors">
                    <span className="relative shrink-0">
                      {account.avatar ? (
                        <Avatar className="size-9"><AvatarImage src={account.avatar} alt="" /><AvatarFallback>{account.initials ?? "PN"}</AvatarFallback></Avatar>
                      ) : (
                        <span className="bg-background flex size-9 items-center justify-center rounded-full border text-[11px] font-medium">{account.initials}</span>
                      )}
                      <span className="absolute -right-0.5 -bottom-0.5 text-[11px] leading-none">{account.flag}</span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{account.name}</span>
                      <span className="text-muted-foreground block truncate text-xs">{account.detail}</span>
                    </span>
                    {account.paid ? <span className="text-muted-foreground text-[11px] whitespace-nowrap">{account.paid}</span> : null}
                    <ChevronRightIcon className="text-muted-foreground size-4 shrink-0" />
                  </button>
                )) : (
                  <div className="flex flex-col items-center py-8 text-center">
                    <span className="border-muted-foreground/30 flex size-12 items-center justify-center rounded-xl border border-dashed"><SearchIcon className="text-muted-foreground size-4" /></span>
                    <p className="mt-3 text-sm font-medium">No accounts found</p>
                    <p className="text-muted-foreground mt-1 text-xs">Try another name, bank,<br />country, or account ending.</p>
                  </div>
                )}
              </div>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <h2 className="text-lg font-semibold">Transfer amount</h2>
              <p className="text-muted-foreground mt-0.5 text-xs">Sending to Emma Clarke · Mercury Bank ending 3508.</p>

              <div className="mt-5 space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs">From account</Label>
                  <Select defaultValue="operating">
                    <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="operating">Kepler Operating · $184,320.55</SelectItem>
                      <SelectItem value="payroll">Kepler Payroll · $62,140.00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs">Amount</Label>
                  <div className="flex gap-2">
                    <Select defaultValue="usd">
                      <SelectTrigger size="sm" className="w-24"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                        <SelectItem value="gbp">GBP</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input defaultValue="4,800.00" className="h-8 flex-1 text-right text-base font-semibold" />
                  </div>
                  <p className="text-muted-foreground text-[11px]">Available balance $184,320.55 · Daily limit $50,000</p>
                </div>

                <div className="rounded-lg border p-3 text-xs">
                  <div className="flex justify-between"><span className="text-muted-foreground">Transfer fee</span><span>$0.00</span></div>
                  <div className="mt-1.5 flex justify-between"><span className="text-muted-foreground">Arrival</span><span>Within 1 business day</span></div>
                  <div className="mt-1.5 flex justify-between font-medium"><span>Total debit</span><span>$4,800.00</span></div>
                </div>
              </div>
            </>
          ) : null}

          {step === 3 ? (
            <>
              <h2 className="text-lg font-semibold">Transfer details</h2>
              <p className="text-muted-foreground mt-0.5 text-xs">Reference and timing for the payment.</p>

              <div className="mt-5 space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="reference" className="text-xs">Reference</Label>
                  <Input id="reference" defaultValue="INV-2048 consulting" className="h-8" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="note" className="text-xs">Note to recipient</Label>
                  <Textarea id="note" defaultValue="April consulting retainer per statement of work." className="min-h-20 text-xs" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Send on</Label>
                  <Select defaultValue="today">
                    <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today, Apr 24</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow, Apr 25</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          ) : null}

          {step === 4 ? (
            sent ? (
              <div className="flex flex-col items-center py-14 text-center">
                <span className="bg-foreground text-background flex size-12 items-center justify-center rounded-full"><CheckIcon className="size-6" /></span>
                <h2 className="mt-4 text-lg font-semibold">Transfer scheduled</h2>
                <p className="text-muted-foreground mt-1 max-w-[320px] text-xs">$4,800.00 is on its way to Emma Clarke. The debit appears in Kepler Operating.</p>
                <Button variant="outline" size="sm" className="mt-5" onClick={() => { setSent(false); setStep(1) }}>New transfer</Button>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-semibold">Authorize transfer</h2>
                <p className="text-muted-foreground mt-0.5 text-xs">Confirm the payee and amount before sending.</p>

                <div className="mt-5 divide-y rounded-lg border text-xs">
                  {[["To", "Emma Clarke · Mercury Bank ending 3508"], ["From", "Kepler Operating"], ["Amount", "$4,800.00 USD"], ["Reference", "INV-2048 consulting"], ["Send on", "Today, Apr 24"], ["Fee", "$0.00"]].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between px-3 py-2.5">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/40 mt-4 rounded-lg border p-3">
                  <p className="text-muted-foreground text-xs">Total debit</p>
                  <p className="mt-1 text-2xl font-semibold">$4,800.00</p>
                </div>
              </>
            )
          ) : null}

          <div className="mt-8 flex items-center justify-between">
            {step > 1 && !sent ? (
              <Button variant="outline" size="sm" onClick={() => setStep((value) => value - 1)}>Back</Button>
            ) : (
              <span />
            )}
            {step < 4 ? (
              <Button size="sm" className="bg-foreground text-background gap-1.5 px-4 hover:bg-foreground/90" onClick={() => setStep((value) => value + 1)}>Continue<ArrowRightIcon /></Button>
            ) : !sent ? (
              <Button size="sm" className="bg-foreground text-background gap-1.5 px-4 hover:bg-foreground/90" onClick={() => setSent(true)}>Hold to authorize<ArrowRightIcon /></Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WizardFundTransferBlock
