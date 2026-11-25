import { DownloadIcon, FileTextIcon, StarIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"

const EVENTS = [
  { date: "MAY 06, 2026", action: "Completed", title: "Renewal Workspace Handoff", description: "Success plan, contract notes, and expansion risks are ready for the account team.", file: "Handoff.pdf (1.8 MB)", rating: 4.8, person: "Maya Brooks", tags: ["Done", "Healthy"], dot: "bg-emerald-500" },
  { date: "MAY 02, 2026", action: "Verified", title: "SSO And SCIM Sync", description: "Directory groups match workspace roles before admin invitations are released.", file: "SSO-map.csv (84 KB)", person: "Nina Patel", tags: ["Auth", "Low Risk"], dot: "bg-blue-500" },
  { date: "APR 28, 2026", action: "Approved", title: "Usage-Based Billing Limits", description: "Finance confirmed seat buffers and usage caps for the renewal workspace.", person: "Theo Grant", tags: ["Limit", "125% Cap"], dot: "bg-violet-500" },
  { date: "APR 22, 2026", action: "Imported", title: "Production Customer Records", description: "Customer contacts, renewal dates, and usage snapshots cleared validation.", file: "Import-log.txt (26 KB)", person: "Leah Stone", tags: ["Data", "18.4k Rows"], dot: "bg-fuchsia-500" },
]

export function Timeline2Block() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[440px]">
        {EVENTS.map((event, index) => (
          <div key={event.title} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className={`mt-1 size-2 rounded-full ${event.dot}`} />
              {index < EVENTS.length - 1 ? <span className="bg-border mt-1 w-px flex-1" /> : null}
            </div>
            <div className="min-w-0 flex-1 pb-6">
              <p className="text-muted-foreground text-[10px] font-medium tracking-wide">{event.date}</p>
              <p className="mt-1 text-sm"><span className="text-muted-foreground">{event.action}</span> <span className="font-medium">{event.title}</span></p>
              <p className="text-muted-foreground mt-1 text-sm">{event.description}</p>
              {event.file ? (
                <div className="mt-2 flex items-center gap-1.5">
                  <button type="button" className="flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs"><FileTextIcon className="size-3.5" />{event.file}</button>
                  <button type="button" className="rounded-md border p-1" aria-label="Download"><DownloadIcon className="size-3.5" /></button>
                  {event.rating ? (
                    <span className="ml-1 flex items-center gap-1">
                      {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className={i < Math.floor(event.rating) ? "size-3.5 fill-amber-400 text-amber-400" : "size-3.5 text-muted-foreground"} />)}
                      <span className="text-muted-foreground text-xs">{event.rating.toFixed(1)}</span>
                    </span>
                  ) : null}
                </div>
              ) : null}
              <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                <span>{event.person}</span>
                {event.tags.map((tag) => <Badge key={tag} variant="secondary" size="sm">{tag}</Badge>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline2Block
