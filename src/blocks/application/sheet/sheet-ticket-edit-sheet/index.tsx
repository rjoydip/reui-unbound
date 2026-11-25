import { useState } from "react"
import {
  CalendarIcon,
  ChevronRightIcon,
  FlagIcon,
  FolderIcon,
  HashIcon,
  MailIcon,
  XIcon,
  ZapIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"

const ROWS = [
  { label: "Due Date", value: "Apr 30, 2026", icon: CalendarIcon },
  { label: "Status", value: "Open", badge: "Open" },
  { label: "Priority", value: "Medium", icon: ZapIcon },
  { label: "Form", value: "Workspace Access", icon: FolderIcon },
  { label: "Tags", value: "Feature, Security", tags: true },
  { label: "SLA", value: "SLA Met", sla: true },
  { label: "Source", value: "Customer Portal", icon: MailIcon },
  { label: "Channel", value: "identity-access", icon: HashIcon },
]

export function SheetTicketEditSheetBlock() {
  const [status, setStatus] = useState("Open")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[520px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <span className="text-sm font-semibold">Ticket details</span>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <div className="space-y-3 text-sm">
            {ROWS.map((row) => (
              <div key={row.label} className="grid grid-cols-[150px_1fr] items-center gap-3">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  {row.label}
                  {row.label === "SLA" ? <span className="text-muted-foreground">ⓘ</span> : null}
                </span>
                <span className="flex flex-wrap items-center gap-1.5">
                  {row.label === "Status" ? (
                    <Select value={status} onValueChange={setStatus}>
                      <SelectTrigger size="sm" className="w-auto gap-1.5 border-0 bg-transparent px-0 shadow-none"><span className="bg-violet-100 text-violet-700 rounded px-1.5 py-0.5 text-xs">◉ {status}</span></SelectTrigger>
                      <SelectContent>{["Open", "In progress", "Closed"].map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
                    </Select>
                  ) : row.label === "Priority" ? (
                    <span className="flex items-center gap-1.5">{row.icon ? <row.icon className="size-4" /> : null}{row.value}</span>
                  ) : row.tags ? (
                    <>
                      <Badge variant="secondary" size="sm">Feature</Badge>
                      <Badge variant="success-light" size="sm">Security</Badge>
                    </>
                  ) : row.sla ? (
                    <Badge variant="success-light" size="sm">✓ {row.value}</Badge>
                  ) : (
                    <span className="flex items-center gap-1.5">{row.icon ? <row.icon className="size-4" /> : null}{row.value}</span>
                  )}
                </span>
              </div>
            ))}
            <button type="button" className="text-muted-foreground flex items-center gap-1 text-sm">Show all values <ChevronRightIcon className="size-3.5" /></button>
          </div>

          <div className="mt-5 border-t pt-4">
            <div className="flex items-center gap-2">
              <FlagIcon className="text-muted-foreground size-4" />
              <span className="text-sm font-medium">Quick Tips</span>
              <Button variant="outline" size="sm" className="ml-auto">View Guide</Button>
            </div>
            <ul className="text-muted-foreground mt-3 list-disc space-y-1.5 pl-4 text-sm">
              <li>Press Enter while editing a text value to save the row.</li>
              <li>Use row actions for quick updates without leaving the queue.</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t p-3">
          <Button>Save changes</Button>
          <Button variant="outline">Close</Button>
        </div>
      </aside>
    </div>
  )
}

export default SheetTicketEditSheetBlock
