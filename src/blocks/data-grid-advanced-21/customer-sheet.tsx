import { Badge } from "@/components/reui-unbound/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import {
  GROUPS,
  customerInvoices,
  formatInvoiceAmount,
  formatUsd,
  sumUsd,
  toUsd,
} from "./data"
import type { Invoice } from "./data"
import { CompanyMark, InvoiceStatusBadge } from "./parts"

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

function InvoiceLine({ invoice }: { invoice: Invoice }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-lg border p-3">
      <div className="min-w-0">
        <div className="text-sm font-medium">{invoice.number}</div>
        <div className="text-muted-foreground text-xs">{invoice.dueDate}</div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-sm font-medium tabular-nums">
          {formatInvoiceAmount(invoice)}
        </span>
        <InvoiceStatusBadge invoice={invoice} />
      </div>
    </div>
  )
}

export function CustomerSheet({
  customer,
  open,
  onOpenChange,
}: {
  customer: string | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const invoices = customer ? customerInvoices(customer) : []
  const first = invoices[0]
  const group = first ? GROUPS.find((entry) => entry.key === first.group) : null

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        {first && group && (
          <>
            <SheetHeader className="gap-3 border-b pb-4">
              <div className="flex items-center gap-3">
                <CompanyMark company={first.customer} />
                <div className="min-w-0">
                  <SheetTitle className="truncate">{first.customer}</SheetTitle>
                  <SheetDescription className="truncate">
                    {first.contact}
                    {first.openCount ? ` · ${first.openCount} open` : ""}
                  </SheetDescription>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-1.5">
                  <span className={cn("size-1.5 rounded-full", group.dot)} />
                  {group.label}
                </Badge>
                <Badge variant="secondary">
                  {invoices.length} invoice{invoices.length === 1 ? "" : "s"}
                </Badge>
              </div>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4">
              <dl className="grid gap-3">
                <Detail label="Open balance">
                  {formatUsd(sumUsd(invoices))}
                </Detail>
                <Detail label="Next step">{first.nextStep.label}</Detail>
                <Detail label="Expected">
                  {first.expected.label ?? "No date"}
                </Detail>
                <Detail label="Owner">
                  {first.owner.name}
                  <div className="text-muted-foreground text-xs font-normal">
                    {first.owner.role}
                  </div>
                </Detail>
              </dl>

              <div className="grid gap-2">
                <div className="text-muted-foreground text-xs font-medium">
                  Invoices
                </div>
                {invoices.map((invoice) => (
                  <InvoiceLine key={invoice.id} invoice={invoice} />
                ))}
              </div>

              <p className="text-muted-foreground text-xs">
                {formatUsd(
                  invoices.reduce(
                    (total, invoice) => total + toUsd(invoice),
                    0,
                  ),
                )}{" "}
                across {invoices.length} open invoice
                {invoices.length === 1 ? "" : "s"}.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
