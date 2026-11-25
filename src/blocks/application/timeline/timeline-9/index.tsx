import { DownloadIcon, FileTextIcon, XIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"

const EVENTS = [
  { name: "Nadia Flores", action: "approved payout batch", title: "ACH-4182", description: "$142,800 routed to 38 merchant accounts", time: "5 minutes ago", tags: ["Payout", "Same Day"], avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { name: "Theo Ramsey", action: "flagged review on Transfer", title: "TX-9041", description: "Velocity threshold exceeded for new payee", time: "18 minutes ago", tags: ["Risk", "High"], actions: true, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Iris Chen", action: "reconciled ledger entry", title: "LDG-7749", description: "Subscription invoice matched to bank settlement", time: "42 minutes ago", tags: ["Ledger"], file: "settlement-match.csv (48kb)", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
  { name: "Marcus Bell", action: "raised limit for Northstar Workspace", title: "", description: "Monthly card volume increased to $850K", time: "1 hour ago", tags: ["Limit Raised"], extra: 2, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
  { name: "Amara Okafor", action: "sent invoice reminder", title: "INV-2098", description: "Net 7 renewal balance due tomorrow", time: "2 hours ago", tags: ["Invoice", "Due Tomorrow"], file: "invoice-2098.pdf (76kb)", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80" },
  { name: "Priya Shah", action: "verified onboarding documents for", title: "KYC-1872", description: "Business ownership file cleared after manual review", time: "3 hours ago", tags: ["KYC", "Cleared"], extra: 3, avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=64&h=64&dpr=2&q=80" },
]

export function Timeline9Block() {
  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[500px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <p className="text-sm font-semibold">Finance Activity</p>
          <span className="bg-foreground text-background flex size-5 items-center justify-center rounded-full text-[10px]">7</span>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          {EVENTS.map((event, index) => (
            <div key={event.title || event.name} className="flex gap-3">
              <div className="flex flex-col items-center">
                <Avatar size="sm" className="size-8"><AvatarImage src={event.avatar} alt="" /><AvatarFallback>{event.name.slice(0, 2)}</AvatarFallback></Avatar>
                {index < EVENTS.length - 1 ? <span className="bg-border mt-1 w-px flex-1" /> : null}
              </div>
              <div className="min-w-0 flex-1 pb-4 text-sm">
                <p className="truncate"><span className="font-medium">{event.name}</span> <span className="text-muted-foreground">{event.action}</span> {event.title ? <span className="font-medium underline underline-offset-2">{event.title}</span> : null}</p>
                <p className="text-muted-foreground mt-1 truncate">{event.description}</p>
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
                    <Badge key={tag} variant={tag === "High" || tag === "Due Tomorrow" ? "destructive-light" : tagIndex === 0 ? "success-light" : "secondary"} size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}

export default Timeline9Block
