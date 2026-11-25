import { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, InfoIcon, PlusIcon, Trash2Icon, XIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
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
import { Separator } from "@/components/ui/separator"


const INITIAL_ITEMS = [
  { id: 1, description: "Advisory retainer", qty: 1, rate: 2400 },
  { id: 2, description: "Implementation sprint", qty: 2, rate: 1800 },
  { id: 3, description: "Support hours", qty: 6, rate: 145 },
]

function Hint() {
  return <InfoIcon className="text-muted-foreground inline size-3 align-[-1px]" />
}

export function WizardSendInvoiceBlock() {
  const [step, setStep] = useState(1)
  const [items, setItems] = useState(INITIAL_ITEMS)

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.rate, 0)
  const tax = Math.round(subtotal * 0.0825)
  const discount = 250
  const total = subtotal + tax - discount

  return (
    <div className="bg-background text-foreground flex min-h-svh flex-col">
      <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
        <Button variant="ghost" size="icon-sm" aria-label="Close"><XIcon /></Button>
        <Separator orientation="vertical" className="h-5" />
        <p className="text-sm font-medium">Send invoice</p>
        <div className="mx-auto w-[300px]">
          <div className="bg-muted h-1.5 overflow-hidden rounded-full">
            <div className="bg-foreground h-full rounded-full transition-all" style={{ width: `${(step / 4) * 100}%` }} />
          </div>
        </div>
        <p className="text-muted-foreground text-xs">{step} / 4</p>
      </header>

      <div className="flex-1 overflow-auto px-6 py-8">
        <div className="bg-card mx-auto w-full max-w-[770px] overflow-hidden rounded-xl border shadow-sm">
          <div className="px-6 py-5">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold">
                {step === 1 ? "Customer Details" : step === 2 ? "Line Items" : step === 3 ? "Notes & Terms" : "Review Invoice"}
              </h2>
              <span className="text-muted-foreground flex items-center gap-1 text-xs">◎ USD</span>
            </div>
            <p className="text-muted-foreground mt-0.5 text-xs">
              {step === 1 ? "Customer, invoice references, and billing terms." : step === 2 ? "Adjust quantities, rates, and live totals." : step === 3 ? "Add a message and invoice footer." : "Check references and totals before sending."}
            </p>
          </div>

          <Separator />

          <div className="px-6 py-5">
            {step === 1 ? (
              <>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">Customer</p>
                  <Badge variant="success-light" size="sm">Required</Badge>
                </div>
                <p className="text-muted-foreground mt-0.5 text-xs">Billable account and invoice reference.</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Customer <Hint /></Label>
                    <div className="relative">
                      <Input defaultValue="Orchid Ledger Group" className="h-8 pr-8" />
                      <button type="button" aria-label="Clear customer" className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2"><XIcon className="size-3.5" /></button>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Tax ID <Hint /></Label>
                    <div className="relative">
                      <span className="text-muted-foreground absolute top-1/2 left-2.5 -translate-y-1/2 text-xs">US</span>
                      <Input defaultValue="88-2947135" className="h-8 pl-9" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Invoice Number <Hint /></Label>
                    <div className="relative">
                      <span className="text-muted-foreground absolute top-1/2 left-2.5 -translate-y-1/2 text-xs">#</span>
                      <Input defaultValue="INV-2048" className="h-8 pl-6" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">PO Reference</Label>
                    <Input defaultValue="PO-7418" className="h-8" />
                  </div>
                </div>

                <Separator className="my-5" />

                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">Terms</p>
                  <Badge variant="focus-light" size="sm">Net 14</Badge>
                </div>
                <p className="text-muted-foreground mt-0.5 text-xs">Dates, currency, and collection method.</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Issue Date</Label>
                    <div className="relative">
                      <Input defaultValue="Apr 24, 2026" className="h-8 pr-8" />
                      <CalendarIcon className="text-muted-foreground absolute top-1/2 right-2.5 size-3.5 -translate-y-1/2" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Due Date</Label>
                    <div className="relative">
                      <Input defaultValue="May 08, 2026" className="h-8 pr-8" />
                      <CalendarIcon className="text-muted-foreground absolute top-1/2 right-2.5 size-3.5 -translate-y-1/2" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                        <SelectItem value="gbp">GBP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Payment Terms</Label>
                    <Select defaultValue="net14">
                      <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="net14">Net 14</SelectItem>
                        <SelectItem value="net30">Net 30</SelectItem>
                        <SelectItem value="due">Due on receipt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Collection</Label>
                    <Select defaultValue="ach">
                      <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ach">ACH transfer</SelectItem>
                        <SelectItem value="card">Card</SelectItem>
                        <SelectItem value="wire">Wire</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Billing Address</Label>
                    <Input defaultValue="14 Warren Street, Suite 620, New York, NY" className="h-8" />
                  </div>
                </div>
              </>
            ) : null}

            {step === 2 ? (
              <>
                <div className="overflow-hidden rounded-lg border">
                  <table className="w-full text-xs">
                    <thead className="bg-muted/50 text-muted-foreground">
                      <tr>
                        <th className="px-3 py-2 text-left font-medium">Description</th>
                        <th className="w-20 px-2 py-2 text-left font-medium">Qty</th>
                        <th className="w-28 px-2 py-2 text-left font-medium">Rate</th>
                        <th className="w-28 px-2 py-2 text-right font-medium">Amount</th>
                        <th className="w-10 px-2 py-2" />
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id} className="border-t">
                          <td className="px-3 py-2"><Input value={item.description} onChange={(event) => setItems((list) => list.map((entry) => entry.id === item.id ? { ...entry, description: event.target.value } : entry))} className="h-7 border-0 px-0 shadow-none focus-visible:ring-0" /></td>
                          <td className="px-2 py-2"><Input type="number" value={item.qty} onChange={(event) => setItems((list) => list.map((entry) => entry.id === item.id ? { ...entry, qty: Number(event.target.value) } : entry))} className="h-7" /></td>
                          <td className="px-2 py-2"><Input type="number" value={item.rate} onChange={(event) => setItems((list) => list.map((entry) => entry.id === item.id ? { ...entry, rate: Number(event.target.value) } : entry))} className="h-7" /></td>
                          <td className="px-3 py-2 text-right font-medium">${(item.qty * item.rate).toLocaleString()}</td>
                          <td className="px-2 py-2">
                            <Button variant="ghost" size="icon-xs" aria-label="Remove line" onClick={() => setItems((list) => list.filter((entry) => entry.id !== item.id))}><Trash2Icon /></Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Button variant="outline" size="sm" className="mt-3 gap-1.5" onClick={() => setItems((list) => [...list, { id: Date.now(), description: "New line item", qty: 1, rate: 0 }])}>
                  <PlusIcon />Add line item
                </Button>

                <div className="mt-6 ml-auto w-full max-w-[280px] space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-medium">${subtotal.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Tax (8.25%)</span><span className="font-medium">${tax.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Discount</span><span className="font-medium">-${discount.toLocaleString()}</span></div>
                  <Separator />
                  <div className="flex justify-between text-sm"><span className="font-medium">Total</span><span className="font-semibold">${total.toLocaleString()}</span></div>
                </div>
              </>
            ) : null}

            {step === 3 ? (
              <>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs">Customer Message</Label>
                  <Textarea id="message" defaultValue="Thanks for your partnership this quarter. Payment is due within 14 days of the issue date." className="min-h-24 text-xs" />
                </div>
                <div className="mt-4 space-y-1.5">
                  <Label htmlFor="footer" className="text-xs">Invoice Footer</Label>
                  <Textarea id="footer" defaultValue="Orchid Ledger Group · billing@orchidledger.example · ACH details on file." className="min-h-16 text-xs" />
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Reminder</Label>
                    <Select defaultValue="3">
                      <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 days before due</SelectItem>
                        <SelectItem value="7">7 days before due</SelectItem>
                        <SelectItem value="none">No reminder</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Attachments</Label>
                    <Input defaultValue="SOW-2048.pdf" className="h-8" />
                  </div>
                </div>
              </>
            ) : null}

            {step === 4 ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-3">
                    <p className="text-xs font-medium">Bill to</p>
                    <p className="mt-1 text-xs font-semibold">Orchid Ledger Group</p>
                    <p className="text-muted-foreground text-xs">14 Warren Street, Suite 620</p>
                    <p className="text-muted-foreground text-xs">New York, NY</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <p className="text-xs font-medium">Invoice</p>
                    <div className="mt-1 space-y-1 text-xs">
                      <div className="flex justify-between"><span className="text-muted-foreground">Number</span><span>INV-2048</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Issue</span><span>Apr 24, 2026</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Due</span><span>May 08, 2026</span></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-lg border">
                  <table className="w-full text-xs">
                    <thead className="bg-muted/50 text-muted-foreground">
                      <tr><th className="px-3 py-2 text-left font-medium">Description</th><th className="px-3 py-2 text-right font-medium">Qty</th><th className="px-3 py-2 text-right font-medium">Amount</th></tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id} className="border-t"><td className="px-3 py-2">{item.description}</td><td className="px-3 py-2 text-right">{item.qty}</td><td className="px-3 py-2 text-right">${(item.qty * item.rate).toLocaleString()}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 ml-auto w-full max-w-[280px] space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>${tax.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Discount</span><span>-${discount.toLocaleString()}</span></div>
                  <Separator />
                  <div className="flex justify-between text-sm font-semibold"><span>Total due</span><span>${total.toLocaleString()}</span></div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-end gap-2 px-6 py-4">
        {step > 1 ? (
          <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setStep((value) => value - 1)}><ArrowLeftIcon />Previous</Button>
        ) : null}
        <Button variant="outline" size="sm">Save draft</Button>
        {step < 4 ? (
          <Button size="sm" className="bg-foreground text-background gap-1.5 hover:bg-foreground/90" onClick={() => setStep((value) => value + 1)}>Next step<ArrowRightIcon /></Button>
        ) : (
          <Button size="sm" className="bg-foreground text-background gap-1.5 hover:bg-foreground/90">Send invoice<ArrowRightIcon /></Button>
        )}
      </footer>
    </div>
  )
}

export default WizardSendInvoiceBlock
