import { CalendarIcon, DownloadIcon, EllipsisIcon, FileTextIcon, StarIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"

const EVENTS = [
  { author: "Dara Kim", action: "shared", target: "Launch Timeline", description: "Uploaded the launch packet with milestone dates and planning files.", files: ["timeline.pdf (2 MB)", "scope-notes.csv (9 KB)"], time: "2 min ago", tags: ["Files 2"], rating: 4, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { author: "Product Operations", action: "scheduled", target: "Roadmap Review", description: "Confirmed the roadmap review agenda with product, design, and engineering leads.", time: "23 min ago", tags: ["Room", "Huddle"], meeting: "Today 10:00 - 11:00 AM", people: true, system: true },
  { author: "Nora Patel", action: "mentioned you in", target: "Partner Campaign", description: "@Alex, can you update the partner guidelines?", time: "1 hour ago", tags: ["Thread", "Open"], quote: true, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
  { author: "Task Management", action: "assigned you", target: "Update Project Specs", description: "Added a task to revise project specs, acceptance criteria, and delivery notes.", time: "1 day ago", tags: ["Due Tomorrow"], system: true },
  { author: "Engineering Team", action: "started sprint", target: "Backend Optimization", description: "Opened API latency sprint work with schema cleanup and queue tuning.", time: "2 days ago", tags: ["3 Tasks In Progress", "Sprint 18"], progress: true, system: true },
]

export function TimelineTeamActivityFeedBlock() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[560px]">
        {EVENTS.map((event, index) => (
          <div key={event.target} className="flex gap-3">
            <div className="flex flex-col items-center">
              {event.avatar ? (
                <Avatar size="sm" className="size-8"><AvatarImage src={event.avatar} alt="" /><AvatarFallback>{event.author.slice(0, 2)}</AvatarFallback></Avatar>
              ) : (
                <span className="bg-card border-muted-foreground/30 mt-1 size-4 rounded-full border-2" />
              )}
              {index < EVENTS.length - 1 ? <span className="bg-border mt-1 w-px flex-1" /> : null}
            </div>
            <div className="min-w-0 flex-1 pb-6 text-sm">
              <div className="flex items-start gap-2">
                <p className="min-w-0"><span className="font-medium">{event.author}</span> <span className="text-muted-foreground">{event.action}</span> <span className="font-medium">{event.target}</span></p>
                <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Event actions"><EllipsisIcon /></Button>
              </div>
              <p className="text-muted-foreground mt-1">{event.description}</p>

              {event.files ? (
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  {event.files.map((file) => (
                    <span key={file} className="flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs"><FileTextIcon className="size-3.5" />{file}</span>
                  ))}
                  <span className="rounded-md border p-1"><DownloadIcon className="size-3.5" /></span>
                </div>
              ) : null}
              {event.rating ? (
                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className={i < event.rating! ? "size-3.5 fill-amber-400 text-amber-400" : "size-3.5 text-muted-foreground"} />)}
                </div>
              ) : null}
              {event.quote ? <div className="bg-muted/40 mt-2 rounded-md border px-2.5 py-1.5 text-xs">@Alex, can you update the partner guidelines? <span className="font-medium underline underline-offset-2">View</span></div> : null}
              {event.people ? (
                <div className="mt-2 flex -space-x-1.5">
                  {["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"].map((src) => (
                    <Avatar key={src} size="sm" className="size-5 ring-2 ring-card"><AvatarImage src={src} alt="" /><AvatarFallback>AT</AvatarFallback></Avatar>
                  ))}
                  <span className="text-muted-foreground ml-2 text-xs">+2</span>
                  <span className="bg-muted ml-2 flex items-center gap-1 rounded px-1.5 py-0.5 text-xs"><CalendarIcon className="size-3" />{event.meeting}</span>
                </div>
              ) : null}
              {event.progress ? (
                <div className="mt-2 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <Badge variant="warning-light" size="sm">☑ 3 Tasks In Progress</Badge>
                    <Badge variant="secondary" size="sm">✳ Sprint 18</Badge>
                  </div>
                  <div className="bg-muted h-1 w-full overflow-hidden rounded-full"><div className="bg-emerald-500 h-full w-2/3 rounded-full" /></div>
                </div>
              ) : null}

              <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-muted-foreground">{event.time}</span>
                {event.tags.map((tag) => <Badge key={tag} variant="secondary" size="sm">{tag}</Badge>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimelineTeamActivityFeedBlock
