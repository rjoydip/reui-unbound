import { useState } from "react"
import { AlignLeftIcon, CheckCheckIcon, DownloadIcon, FileTextIcon, StarIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"

const EVENTS = [
  { date: "MAY 06, 2026", title: "Completed Renewal Workspace Handoff", description: "Success plan, contract notes, and expansion risks are ready for a…", file: "Handoff.pdf (1.8 MB)", rating: 4.8, person: "Maya Brooks", tags: ["Done", "Healthy"] },
  { date: "MAY 02, 2026", title: "Verified SSO And SCIM Sync", description: "Directory groups match workspace roles before admin invitations are …", file: "SSO-map.csv (84 KB)", person: "Nina Patel", tags: ["Auth", "Low"] },
  { date: "APR 28, 2026", title: "Approved Usage-Based Billing Limits", description: "Finance confirmed seat buffers and usage caps for the renewal work…", person: "Theo Grant", tags: ["Limit", "125%"] },
  { date: "APR 22, 2026", title: "Imported Production Customer Records", description: "Customer contacts, renewal dates, and usage snapshots cleared vali…", file: "Import-log.txt (26 KB)", person: "Leah Stone", tags: ["Data", "18.4k"] },
]

export function TimelineActivityDropdownBlock() {
  const [open, setOpen] = useState(true)

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto w-fit">
        <Button variant="outline" className="gap-1.5" onClick={() => setOpen((value) => !value)}>
          <AlignLeftIcon />
          {open ? "Close timeline" : "Open timeline"}
        </Button>

        {open ? (
          <div className="bg-card mt-3 w-[556px] overflow-hidden rounded-xl border shadow-sm">
            <div className="flex items-center gap-2 border-b p-3">
              <p className="text-sm font-semibold">Account Rollout</p>
              <span className="bg-foreground text-background flex size-5 items-center justify-center rounded-full text-[10px]">10</span>
              <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Mark all read"><CheckCheckIcon /></Button>
            </div>

            <div className="max-h-[500px] overflow-y-auto p-4">
              {EVENTS.map((event, index) => (
                <div key={event.title} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className="bg-muted-foreground/30 mt-1 size-2 rounded-full" />
                    {index < EVENTS.length - 1 ? <span className="bg-border mt-1 w-px flex-1" /> : null}
                  </div>
                  <div className="min-w-0 flex-1 pb-5 text-sm">
                    <p className="text-muted-foreground text-[10px] font-medium tracking-wide">{event.date}</p>
                    <p className="mt-1 truncate font-medium">{event.title}</p>
                    <p className="text-muted-foreground mt-1 truncate">{event.description}</p>
                    {event.file ? (
                      <div className="mt-2 flex items-center gap-1.5">
                        <span className="flex max-w-[200px] items-center gap-1.5 truncate rounded-md border px-2 py-1 text-xs"><FileTextIcon className="size-3.5" />{event.file}</span>
                        <span className="rounded-md border p-1"><DownloadIcon className="size-3.5" /></span>
                        {event.rating ? (
                          <span className="ml-1 flex items-center gap-0.5">
                            {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className={i < Math.floor(event.rating) ? "size-3 fill-amber-400 text-amber-400" : "size-3 text-muted-foreground"} />)}
                            <span className="text-muted-foreground text-xs">{event.rating}</span>
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                    <div className="mt-2 flex flex-wrap items-center gap-1 text-xs">
                      <span>{event.person}</span>
                      {event.tags.map((tag, tagIndex) => <Badge key={tag} variant={tagIndex === 0 ? "success-light" : "secondary"} size="sm">{tag}</Badge>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default TimelineActivityDropdownBlock
