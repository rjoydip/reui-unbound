import { DownloadIcon, FileTextIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"

const EVENTS = [
  { name: "Nadia Flores", action: "approved payout batch", title: "ACH-4182", description: "$142,800 routed to 38 merchant accounts", time: "5 minutes ago", tags: ["Payout", "Same Day"], avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { name: "Theo Ramsey", action: "flagged review on Transfer", title: "TX-9041", description: "Velocity threshold exceeded for new payee", time: "18 minutes ago", tags: ["Risk", "High"], actions: true, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Iris Chen", action: "reconciled ledger entry", title: "LDG-7749", description: "Subscription invoice matched to bank settlement", time: "42 minutes ago", tags: ["Ledger"], file: "settlement-match.csv (48kb)", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
  { name: "Marcus Bell", action: "raised limit for Northstar Workspace", title: "", description: "Monthly card volume increased to $850K", time: "1 hour ago", tags: ["Limit Raised"], extra: 2, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
  { name: "Amara Okafor", action: "sent invoice reminder", title: "INV-2098", description: "Net 7 renewal balance due tomorrow", time: "2 hours ago", tags: ["Invoice", "Due Tomorrow"], file: "invoice-2098.pdf (76kb)", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80" },
]

export function TimelineFinanceActivityBlock() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[460px]">
        <h1 className="text-xl font-semibold">Finance Activity</h1>
        <p className="text-muted-foreground mt-1 text-sm">Payouts, risk, invoices, and ledger updates.</p>

        <div className="mt-6">
          {EVENTS.map((event, index) => (
            <div key={event.title || event.name} className="flex gap-3">
              <div className="flex flex-col items-center">
                <Avatar size="sm" className="size-8"><AvatarImage src={event.avatar} alt="" /><AvatarFallback>{event.name.slice(0, 2)}</AvatarFallback></Avatar>
                {index < EVENTS.length - 1 ? <span className="bg-border mt-1 w-px flex-1" /> : null}
              </div>
              <div className="min-w-0 flex-1 pb-5 text-sm">
                <p><span className="font-medium">{event.name}</span> <span className="text-muted-foreground">{event.action}</span> {event.title ? <span className="font-medium underline underline-offset-2">{event.title}</span> : null}</p>
                <p className="text-muted-foreground mt-1">{event.description}</p>
                {event.actions ? (
                  <div className="mt-2 flex items-center gap-1.5">
                    <Button size="sm">Review</Button>
                    <Button variant="outline" size="sm">Clear</Button>
                  </div>
                ) : null}
                {event.file ? (
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs"><FileTextIcon className="size-3.5" />{event.file}</span>
                    <span className="rounded-md border p-1"><DownloadIcon className="size-3.5" /></span>
                  </div>
                ) : null}
                {event.extra ? (
                  <div className="mt-2 flex -space-x-1.5">
                    {["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"].map((src) => (
                      <Avatar key={src} size="sm" className="size-5 ring-2 ring-card"><AvatarImage src={src} alt="" /><AvatarFallback>FN</AvatarFallback></Avatar>
                    ))}
                    <span className="text-muted-foreground ml-2 text-xs">+{event.extra}</span>
                  </div>
                ) : null}
                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-muted-foreground">{event.time}</span>
                  {event.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tag}
                      variant={tag === "High" || tag === "Due Tomorrow" ? "destructive-light" : tagIndex === 0 ? "success-light" : "secondary"}
                      size="sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimelineFinanceActivityBlock
