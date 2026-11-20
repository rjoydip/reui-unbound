import { useState } from "react"
import { CircleSlash2Icon, PencilIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/components/reui-unbound/number-field"
import { cn } from "cn"

import {
  PLAN_OPTIONS,
  STATUS_OPTIONS,
  TODAY,
  formatCurrency,
  formatPercent,
  getStatements,
} from "./data"
import type { Customer, CustomerPlan, CustomerStatus } from "./data"
import {
  BalanceCell,
  CompanyLogo,
  CustomerAvatar,
  PlanBadge,
  StatusBadge,
} from "./parts"

function Detail({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-muted-foreground text-sm">{label}</dt>
      <dd className="text-right text-sm font-medium">{children}</dd>
    </div>
  )
}

export function CustomerViewSheet({
  customer,
  open,
  onOpenChange,
  onEdit,
}: {
  customer: Customer | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onEdit: (customer: Customer) => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        {customer && (
          <>
            <SheetHeader className="gap-3 border-b pb-4">
              <div className="flex items-center gap-3">
                <CustomerAvatar customer={customer} className="size-10" />
                <div className="min-w-0">
                  <SheetTitle className="truncate">{customer.name}</SheetTitle>
                  <SheetDescription className="truncate">
                    {customer.email}
                  </SheetDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge status={customer.status} />
                <PlanBadge plan={customer.plan} />
              </div>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-4 px-4">
              <Tabs defaultValue="overview" className="flex flex-col gap-3">
                <TabsList className="w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="statements">Statements</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <dl className="grid gap-3">
                    <Detail label="Balance">
                      <BalanceCell customer={customer} />
                    </Detail>
                    <Detail label="Company">
                      <span className="flex items-center gap-1.5">
                        <CompanyLogo company={customer.company} />
                        {customer.company}
                      </span>
                    </Detail>
                    <Detail label="Location">
                      {customer.country}
                      <div className="text-muted-foreground text-xs font-normal">
                        {customer.timezone}
                      </div>
                    </Detail>
                    <Detail label="Account ID">
                      <span className="text-muted-foreground font-mono text-xs">
                        {customer.id}
                      </span>
                    </Detail>
                  </dl>

                  {customer.reversalNote && (
                    <div className="border-destructive/20 bg-destructive/5 text-destructive mt-4 flex gap-2 rounded-lg border p-3 text-xs">
                      <CircleSlash2Icon className="mt-px size-3.5 shrink-0" />
                      <p className="text-pretty">{customer.reversalNote}</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="statements">
                  <div className="grid gap-2">
                    {getStatements(customer).map((statement) => (
                      <div
                        key={statement.id}
                        className="flex items-start justify-between gap-3 rounded-lg border p-3"
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-medium">
                            {statement.label}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            {statement.date}
                          </div>
                          {statement.note && (
                            <p className="text-destructive mt-2 text-xs text-pretty">
                              Balance reversed &middot;{" "}
                              {formatPercent(customer.change ?? 0)} vs. prior
                            </p>
                          )}
                        </div>
                        <div
                          className={cn(
                            "shrink-0 text-sm font-medium tabular-nums",
                            statement.amount < 0 && "text-destructive",
                          )}
                        >
                          {formatCurrency(statement.amount)}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <SheetFooter className="border-t">
              <Button onClick={() => onEdit(customer)}>
                <PencilIcon />
                Edit customer
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

function emptyCustomer(): Customer {
  return {
    id: `cus_${Math.random().toString(36).slice(2, 8)}`,
    name: "",
    email: "",
    balance: 0,
    change: null,
    status: "pending",
    plan: "Starter",
    company: "",
    country: "United States",
    countryCode: "us",
    timezone: "PST (UTC-8)",
  }
}

export function CustomerFormSheet({
  open,
  customer,
  onOpenChange,
  onSave,
}: {
  open: boolean
  /** Omit to create a new customer. */
  customer?: Customer
  onOpenChange: (open: boolean) => void
  onSave: (customer: Customer) => void
}) {
  const [form, setForm] = useState<Customer>(customer ?? emptyCustomer)

  function set<K extends keyof Customer>(key: K, value: Customer[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const canSave = form.name.trim() !== "" && form.email.trim() !== ""

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="border-b pb-4">
          <SheetTitle>{customer ? "Edit customer" : "Add customer"}</SheetTitle>
          <SheetDescription>
            {customer
              ? "Update the account details. Changes apply immediately."
              : `Statements start from ${TODAY.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}.`}
          </SheetDescription>
        </SheetHeader>

        <form
          className="flex min-h-0 flex-1 flex-col"
          onSubmit={(event) => {
            event.preventDefault()
            if (!canSave) return
            onSave({
              ...form,
              name: form.name.trim(),
              email: form.email.trim(),
              company: form.company.trim(),
            })
            onOpenChange(false)
          }}
        >
          <div className="flex-1 overflow-y-auto px-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="customer-name">Name</FieldLabel>
                <Input
                  id="customer-name"
                  value={form.name}
                  onChange={(event) => set("name", event.target.value)}
                  placeholder="Jane Cooper"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="customer-email">Email</FieldLabel>
                <Input
                  id="customer-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => set("email", event.target.value)}
                  placeholder="jane@company.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="customer-company">Company</FieldLabel>
                <Input
                  id="customer-company"
                  value={form.company}
                  onChange={(event) => set("company", event.target.value)}
                  placeholder="Acme"
                />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field>
                  <FieldLabel htmlFor="customer-status">Status</FieldLabel>
                  <Select
                    value={form.status}
                    onValueChange={(value) =>
                      set("status", value as CustomerStatus)
                    }
                  >
                    <SelectTrigger id="customer-status" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="customer-plan">Plan</FieldLabel>
                  <Select
                    value={form.plan}
                    onValueChange={(value) =>
                      set("plan", value as CustomerPlan)
                    }
                  >
                    <SelectTrigger id="customer-plan" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PLAN_OPTIONS.map((plan) => (
                        <SelectItem key={plan} value={plan}>
                          {plan}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <Field>
                <NumberField
                  value={form.balance}
                  onValueChange={(value) => set("balance", value ?? 0)}
                  step={0.01}
                >
                  <NumberFieldScrubArea label="Balance (USD)" />
                  <NumberFieldGroup>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberFieldGroup>
                </NumberField>
              </Field>
            </FieldGroup>
          </div>

          <SheetFooter className="border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!canSave}>
              {customer ? "Save changes" : "Add customer"}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
