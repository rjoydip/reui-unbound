import { useState } from "react"
import { format } from "date-fns"
import {
  Building2Icon,
  CalendarIcon,
  FileTextIcon,
  HashIcon,
  InfoIcon,
  MegaphoneIcon,
  PlusIcon,
  SendIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const CUSTOMERS = [
  { name: "Orchid Ledger Group", taxId: "US-88-2947135", address: "14 Warren Street, Suite 620, New York, NY" },
  { name: "Northstar Studio", taxId: "US-41-1180272", address: "88 Alder Way, Portland, OR 97205" },
  { name: "Harborline Systems", taxId: "US-33-9014488", address: "700 Pier Avenue, Seattle, WA 98104" },
]

const PRODUCTS = [
  { id: "brand", name: "Brand strategy sprint", rate: 3200, tax: 8 },
  { id: "audit", name: "Design system audit", rate: 800, tax: 8 },
  { id: "landing", name: "Landing page build", rate: 2400, tax: 0 },
  { id: "retainer", name: "Retainer — May", rate: 1800, tax: 8 },
]

const PAYMENT_TERMS = ["Net 14", "Net 30", "Due on receipt", "Net 60"]
const COLLECTIONS = ["ACH transfer", "Card payment", "Wire transfer", "Manual collection"]
const CURRENCIES = ["USD", "EUR", "GBP"]

type Line = { id: number; productId: string; qty: number }

const INITIAL_LINES: Line[] = [
  { id: 1, productId: "brand", qty: 1 },
  { id: 2, productId: "audit", qty: 2 },
]

const money = (value: number, currency: string) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value)

function InfoTip({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground inline-flex transition-colors"
          aria-label="More information"
        >
          <InfoIcon className="size-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-60">{children}</TooltipContent>
    </Tooltip>
  )
}

function FormField({
  label,
  htmlFor,
  info,
  error,
  children,
  className,
}: {
  label: string
  htmlFor?: string
  info?: string
  error?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Field className={className} data-invalid={Boolean(error)}>
      <div className="flex items-center gap-1.5">
        <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
        {info && <InfoTip>{info}</InfoTip>}
      </div>
      {children}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  )
}

export function Form3Block() {
  const [customer, setCustomer] = useState(CUSTOMERS[0].name)
  const [invoiceNumber, setInvoiceNumber] = useState("INV-2048")
  const [poReference, setPoReference] = useState("PO-7418")
  const [issueDate, setIssueDate] = useState<Date>(new Date(2026, 3, 24))
  const [dueDate, setDueDate] = useState<Date>(new Date(2026, 4, 8))
  const [currency, setCurrency] = useState("USD")
  const [terms, setTerms] = useState("Net 14")
  const [collection, setCollection] = useState("ACH transfer")
  const [lines, setLines] = useState<Line[]>(INITIAL_LINES)
  const [discount, setDiscount] = useState(5)
  const [sent, setSent] = useState(false)

  const picked = CUSTOMERS.find((item) => item.name === customer) ?? CUSTOMERS[0]
  const subtotal = lines.reduce((sum, line) => {
    const product = PRODUCTS.find((item) => item.id === line.productId)
    return sum + (product?.rate ?? 0) * line.qty
  }, 0)
  const taxAmount = lines.reduce((sum, line) => {
    const product = PRODUCTS.find((item) => item.id === line.productId)
    return sum + (product?.rate ?? 0) * line.qty * ((product?.tax ?? 0) / 100)
  }, 0)
  const discountAmount = (subtotal * discount) / 100
  const total = subtotal - discountAmount + taxAmount
  const dueDateError =
    dueDate < issueDate ? "Due date cannot be before the issue date." : undefined

  return (
    <TooltipProvider>
      <div className="bg-background min-h-svh">
        <header className="bg-background sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b px-4">
          <div className="flex min-w-0 items-center gap-2">
            <Button variant="ghost" size="icon-sm" aria-label="Close invoice editor">
              <XIcon />
            </Button>
            <Separator orientation="vertical" className="h-5" />
            <h1 className="truncate text-base font-medium">Create invoice</h1>
            <Badge variant={sent ? "success" : "warning-light"} size="lg">
              <FileTextIcon />
              {sent ? "Sent" : "Draft"}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost">
              <MegaphoneIcon />
              <span className="hidden sm:inline">Feedback</span>
            </Button>
            <Button variant="outline">
              <FileTextIcon />
              <span className="hidden sm:inline">Save draft</span>
            </Button>
            <Button
              className="dark:bg-foreground dark:text-background"
              disabled={sent || Boolean(dueDateError)}
              onClick={() => setSent(true)}
            >
              <SendIcon />
              <span className="hidden sm:inline">{sent ? "Invoice sent" : "Send invoice"}</span>
            </Button>
          </div>
        </header>

        <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-0">
          <Card className="gap-0 py-0">
            <div className="flex items-start justify-between gap-4 px-6 py-4">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-base font-semibold">Invoice Details</h2>
                <p className="text-muted-foreground text-sm">
                  Customer, terms, items, and payment notes.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="warning-light" size="lg">
                  <FileTextIcon />
                  {sent ? "Sent" : "Draft"}
                </Badge>
                <span className="text-sm font-medium">{currency}</span>
              </div>
            </div>

            <div className="flex flex-col gap-6 border-t px-6 py-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    Customer
                    <Badge variant="success-light" size="sm">
                      Required
                    </Badge>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Billable account and invoice reference.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Customer"
                    info="Billing contact shown on the invoice."
                  >
                    <Combobox
                      items={CUSTOMERS.map((item) => item.name)}
                      value={customer}
                      onValueChange={(value) => {
                        if (typeof value === "string" && value) {
                          setCustomer(value)
                          setSent(false)
                        }
                      }}
                    >
                      <ComboboxInput placeholder="Select customer" showTrigger={false} showClear />
                      <ComboboxContent>
                        <ComboboxEmpty>No customers found.</ComboboxEmpty>
                        <ComboboxList>
                          {(item) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                  </FormField>
                  <FormField label="Tax ID" info="Loaded from the selected customer.">
                    <InputGroup>
                      <InputGroupAddon>
                        <Building2Icon />
                      </InputGroupAddon>
                      <InputGroupInput value={picked.taxId} readOnly />
                    </InputGroup>
                  </FormField>
                  <FormField
                    label="Invoice Number"
                    htmlFor="invoice-number"
                    info="Must be unique within your workspace."
                  >
                    <InputGroup>
                      <InputGroupAddon>
                        <HashIcon />
                      </InputGroupAddon>
                      <InputGroupInput
                        id="invoice-number"
                        value={invoiceNumber}
                        onChange={(event) => {
                          setInvoiceNumber(event.target.value)
                          setSent(false)
                        }}
                      />
                    </InputGroup>
                  </FormField>
                  <FormField label="PO Reference" htmlFor="po-reference">
                    <Input
                      id="po-reference"
                      value={poReference}
                      onChange={(event) => setPoReference(event.target.value)}
                    />
                  </FormField>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    Terms
                    <Badge variant="info-light" size="sm">
                      {terms}
                    </Badge>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Dates, currency, and collection method.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <FormField label="Issue Date">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-between font-normal">
                          {format(issueDate, "MMM dd, yyyy")}
                          <CalendarIcon className="text-muted-foreground" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={issueDate}
                          defaultMonth={issueDate}
                          onSelect={(date) => date && setIssueDate(date)}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormField>
                  <FormField label="Due Date" error={dueDateError}>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          aria-invalid={Boolean(dueDateError)}
                          className="w-full justify-between font-normal"
                        >
                          {format(dueDate, "MMM dd, yyyy")}
                          <CalendarIcon className="text-muted-foreground" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={dueDate}
                          defaultMonth={dueDate}
                          onSelect={(date) => date && setDueDate(date)}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormField>
                  <FormField label="Currency">
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CURRENCIES.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField label="Payment Terms">
                    <Select value={terms} onValueChange={setTerms}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {PAYMENT_TERMS.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField label="Collection">
                    <Select value={collection} onValueChange={setCollection}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {COLLECTIONS.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField label="Billing Address">
                    <Input value={picked.address} readOnly />
                  </FormField>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="flex items-center gap-2 text-sm font-semibold">
                      Line Items
                      <Badge variant="secondary" size="sm">
                        {lines.length} items
                      </Badge>
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Products, services, quantity, tax, and amount.
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      setLines((current) => [
                        ...current,
                        {
                          id: Math.max(0, ...current.map((line) => line.id)) + 1,
                          productId: "landing",
                          qty: 1,
                        },
                      ])
                    }
                  >
                    <PlusIcon />
                    Add item
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="h-9">Item</TableHead>
                      <TableHead className="h-9 w-20">Qty</TableHead>
                      <TableHead className="h-9 w-24">Rate</TableHead>
                      <TableHead className="h-9 w-20">Tax</TableHead>
                      <TableHead className="h-9 w-28 text-right">Amount</TableHead>
                      <TableHead className="h-9 w-10" />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {lines.map((line) => {
                      const product = PRODUCTS.find((item) => item.id === line.productId) ?? PRODUCTS[0]
                      return (
                        <TableRow key={line.id}>
                          <TableCell>
                            <Select
                              value={line.productId}
                              onValueChange={(value) => {
                                setLines((current) =>
                                  current.map((item) =>
                                    item.id === line.id ? { ...item, productId: value } : item,
                                  ),
                                )
                                setSent(false)
                              }}
                            >
                              <SelectTrigger className="w-full border-0 bg-transparent shadow-none dark:bg-transparent">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {PRODUCTS.map((item) => (
                                  <SelectItem key={item.id} value={item.id}>
                                    {item.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              min={1}
                              value={line.qty}
                              aria-label={`Quantity for ${product.name}`}
                              onChange={(event) => {
                                const qty = Math.max(1, Number(event.target.value) || 1)
                                setLines((current) =>
                                  current.map((item) =>
                                    item.id === line.id ? { ...item, qty } : item,
                                  ),
                                )
                                setSent(false)
                              }}
                            />
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {money(product.rate, currency)}
                          </TableCell>
                          <TableCell className="text-muted-foreground">{product.tax}%</TableCell>
                          <TableCell className="text-right font-medium">
                            {money(product.rate * line.qty, currency)}
                          </TableCell>
                          <TableCell>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                              aria-label={`Remove ${product.name}`}
                              onClick={() =>
                                setLines((current) =>
                                  current.filter((item) => item.id !== line.id),
                                )
                              }
                            >
                              <Trash2Icon />
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>

                <div className="ml-auto flex w-full max-w-xs flex-col gap-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{money(subtotal, currency)}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">
                      Discount
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={discount}
                        aria-label="Discount percent"
                        onChange={(event) => {
                          setDiscount(Math.min(100, Math.max(0, Number(event.target.value) || 0)))
                          setSent(false)
                        }}
                        className="bg-muted mx-1.5 w-10 rounded px-1 py-0.5 text-center text-foreground"
                      />
                      %
                    </span>
                    <span>-{money(discountAmount, currency)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>{money(taxAmount, currency)}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-base font-semibold">
                    <span>Total</span>
                    <span>{money(total, currency)}</span>
                  </div>
                  <p className="text-muted-foreground text-right text-xs">
                    Tax applies to full line amounts, before discount.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </TooltipProvider>
  )
}

export default Form3Block
