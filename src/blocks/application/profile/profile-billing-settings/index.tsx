import {
  ArrowLeftIcon,
  DownloadIcon,
  FileTextIcon,
  PencilIcon,
  ShieldAlertIcon,
  UsersIcon,
  WalletIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const INVOICES = [
  { id: "INV-4208", period: "Apr 2026", date: "Apr 2, 2026", total: "$0.00", status: "Credited" },
  { id: "INV-4079", period: "Mar 2026", date: "Mar 2, 2026", total: "$96.00", status: "Paid" },
  { id: "INV-3912", period: "Feb 2026", date: "Feb 2, 2026", total: "$72.00", status: "Paid" },
  { id: "INV-3784", period: "Jan 2026", date: "Jan 2, 2026", total: "$72.00", status: "Paid" },
]

export function ProfileBillingSettingsBlock() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[768px]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Billing</h1>
            <p className="text-muted-foreground mt-1 text-sm">Review the current plan, billing contact, and recent invoices.</p>
          </div>
          <Button variant="outline" size="sm"><ArrowLeftIcon />Back to profile</Button>
        </div>

        <div className="border-destructive/30 bg-destructive/5 mt-6 flex flex-wrap items-center gap-3 rounded-lg border px-4 py-3">
          <ShieldAlertIcon className="text-destructive size-4" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">Renewal is blocked.</p>
            <p className="text-muted-foreground text-sm">No company card is saved. Add one before May 3, 2026 so renewal, seat changes, and receipt delivery can continue normally.</p>
          </div>
          <Button size="sm">Add company card</Button>
        </div>

        <section className="mt-8 space-y-3">
          <div>
            <h2 className="text-sm font-semibold">Plan</h2>
            <p className="text-muted-foreground text-sm">Current subscription and core usage.</p>
          </div>
          <div className="bg-card overflow-hidden rounded-lg border">
            <div className="grid gap-4 p-4 sm:grid-cols-[1fr_240px]">
              <div className="flex items-start gap-3">
                <span className="bg-muted flex size-10 items-center justify-center rounded-md"><WalletIcon className="size-4" /></span>
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold">Growth <Badge variant="warning-light" size="sm">Trial</Badge></p>
                  <p className="text-sm font-medium">$24.00 <span className="text-muted-foreground text-xs font-normal">per editor / month</span></p>
                  <p className="text-muted-foreground mt-2 max-w-sm text-sm">Growth keeps audit history, automations, and workspace permissions on one monthly plan.</p>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                {[["Renewal date", "May 3, 2026"], ["Renewal status", "Card required"], ["Billing owner", "Mina Ortega"]].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-muted-foreground uppercase">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted/30 flex flex-wrap items-center gap-2 border-t px-4 py-2.5">
              <p className="text-muted-foreground text-sm">Renewal stays paused until a company card is added.</p>
              <Button variant="outline" size="sm" className="ml-auto">Manage plan</Button>
            </div>
          </div>

          <div className="bg-card overflow-hidden rounded-lg border">
            <div className="grid sm:grid-cols-3">
              {[
                { label: "Seats", note: "Active editors", value: "3 of 5", icon: UsersIcon },
                { label: "Tracked records", note: "Used this month", value: "218,430", icon: FileTextIcon },
                { label: "Automation credits", note: "Used this month", value: "1,280", icon: WalletIcon },
              ].map((metric, index) => (
                <div key={metric.label} className={index < 2 ? "border-b p-4 sm:border-r sm:border-b-0" : "p-4"}>
                  <div className="flex items-center gap-2">
                    <span className="bg-muted flex size-8 items-center justify-center rounded-md"><metric.icon className="size-4" /></span>
                    <div>
                      <p className="text-sm font-medium">{metric.label}</p>
                      <p className="text-muted-foreground text-xs">{metric.note}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xl font-semibold">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-muted/30 flex flex-wrap items-center gap-2 border-t px-4 py-2.5">
              <p className="text-muted-foreground text-sm">Usage counters reset on May 3, 2026 with the next billing cycle.</p>
              <Button variant="outline" size="sm" className="ml-auto">View usage</Button>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold">Billing Details</h2>
              <p className="text-muted-foreground text-sm">Invoice contact and payment readiness.</p>
            </div>
            <Button variant="outline" size="sm"><PencilIcon />Edit details</Button>
          </div>
          <div className="bg-card overflow-hidden rounded-lg border">
            {[
              ["Billing contact", "Receives invoices and renewal notices.", "billing@northstarstudio.co"],
              ["Legal entity", "Shown on invoices and receipts.", "Northstar Studio GmbH"],
              ["Region", "Used for tax and invoice formatting.", "Berlin, Germany"],
              ["Payment method", "Required before the trial renews.", "No company card added"],
            ].map(([label, description, value], index) => (
              <div key={label} className={`flex flex-wrap items-start gap-3 px-4 py-3 ${index < 3 ? "border-b" : ""}`}>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-2 text-sm font-medium">
                    {label}
                    {label === "Payment method" ? <Badge variant="warning-light" size="sm">Action required</Badge> : null}
                  </p>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </div>
                <span className="text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold">Invoice History</h2>
              <p className="text-muted-foreground text-sm">Recent invoices.</p>
            </div>
            <Button variant="outline" size="sm"><DownloadIcon />Download all</Button>
          </div>
          <div className="bg-card overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {INVOICES.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell className="text-muted-foreground">{invoice.period}</TableCell>
                    <TableCell className="text-muted-foreground">{invoice.date}</TableCell>
                    <TableCell>{invoice.total}</TableCell>
                    <TableCell>
                      <Badge variant={invoice.status === "Paid" ? "success-light" : "warning-light"} size="sm">{invoice.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon-xs" aria-label={`Download ${invoice.id}`}><DownloadIcon /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProfileBillingSettingsBlock
