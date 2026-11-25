import { CalendarIcon, DownloadIcon, EllipsisIcon, FileTextIcon, MessageSquareIcon, StarIcon, XIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"

export function TimelineTeamActivitySheetBlock() {
  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[516px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <p className="text-sm font-semibold">Team Activity</p>
          <span className="bg-foreground text-background flex size-5 items-center justify-center rounded-full text-[10px]">12</span>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
          <div className="flex gap-3">
            <Avatar size="sm" className="size-8"><AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" alt="" /><AvatarFallback>DK</AvatarFallback></Avatar>
            <div className="min-w-0 flex-1 text-sm">
              <p><span className="font-medium">Dara Kim</span> <span className="text-muted-foreground">shared</span> <span className="font-medium">Launch Timeline</span></p>
              <p className="text-muted-foreground mt-1">Uploaded the launch packet with milestone dates and planning files.</p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                {["timeline.pdf (2 MB)", "scope-notes.csv (9 KB)"].map((file) => <span key={file} className="flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs"><FileTextIcon className="size-3.5" />{file}</span>)}
                <span className="rounded-md border p-1"><DownloadIcon className="size-3.5" /></span>
              </div>
              <div className="mt-2 flex items-center gap-1"><span className="text-muted-foreground text-xs">2 min ago</span><Badge variant="secondary" size="sm">Files 2</Badge></div>
              <div className="mt-1 flex items-center gap-0.5">{Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className={i < 4 ? "size-3 fill-amber-400 text-amber-400" : "size-3 text-muted-foreground"} />)}</div>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="bg-card border-muted-foreground/30 mt-1 size-4 rounded-full border-2" />
            <div className="min-w-0 flex-1 text-sm">
              <p><span className="font-medium">Product Operations</span> <span className="text-muted-foreground">scheduled</span> <span className="font-medium">Roadmap Review</span></p>
              <p className="text-muted-foreground mt-1">Confirmed the roadmap review agenda with product, design, and engineering leads.</p>
              <div className="mt-2 flex items-center gap-1.5">
                <div className="flex -space-x-1.5">
                  {["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"].map((src) => <Avatar key={src} size="sm" className="size-5 ring-2 ring-card"><AvatarImage src={src} alt="" /><AvatarFallback>AT</AvatarFallback></Avatar>)}
                </div>
                <span className="text-muted-foreground text-xs">+2</span>
                <span className="bg-muted flex items-center gap-1 rounded px-1.5 py-0.5 text-xs"><CalendarIcon className="size-3" />Today 10:00 - 11:00 AM</span>
              </div>
              <div className="mt-2 flex items-center gap-1"><span className="text-muted-foreground text-xs">23 min ago</span><Badge variant="secondary" size="sm">Room</Badge><Badge variant="secondary" size="sm">Huddle</Badge></div>
            </div>
          </div>

          <div className="flex gap-3">
            <Avatar size="sm" className="size-8"><AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" alt="" /><AvatarFallback>NP</AvatarFallback></Avatar>
            <div className="min-w-0 flex-1 text-sm">
              <p><span className="font-medium">Nora Patel</span> <span className="text-muted-foreground">mentioned you in</span> <span className="font-medium">Partner Campaign</span></p>
              <div className="bg-muted/40 mt-2 flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs"><MessageSquareIcon className="size-3.5" />Partner guideline update <span className="font-medium underline underline-offset-2">Open</span></div>
              <div className="mt-2 flex items-center gap-1"><span className="text-muted-foreground text-xs">1 hour ago</span><Badge variant="secondary" size="sm">Thread</Badge><Badge variant="secondary" size="sm">Open</Badge></div>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="bg-card border-muted-foreground/30 mt-1 size-4 rounded-full border-2" />
            <div className="min-w-0 flex-1 text-sm">
              <p><span className="font-medium">Task Management</span> <span className="text-muted-foreground">assigned you</span> <span className="font-medium">Update Project Specs</span></p>
              <p className="text-muted-foreground mt-1">Added a task to revise project specs, acceptance criteria, and delivery notes.</p>
              <div className="mt-2 flex items-center gap-1"><span className="text-muted-foreground text-xs">1 day ago</span><Badge variant="destructive-light" size="sm">Due Tomorrow</Badge></div>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="bg-card border-muted-foreground/30 mt-1 size-4 rounded-full border-2" />
            <div className="min-w-0 flex-1 text-sm">
              <p><span className="font-medium">Engineering Team</span> <span className="text-muted-foreground">started sprint</span> <span className="font-medium">Backend Optimization</span></p>
              <p className="text-muted-foreground mt-1">Opened API latency sprint work with schema cleanup and queue tuning.</p>
              <div className="mt-2 flex items-center gap-1.5">
                <Badge variant="warning-light" size="sm">☑ 3 Tasks In Progress</Badge>
                <Badge variant="secondary" size="sm">✳ Sprint 18</Badge>
              </div>
              <Button variant="ghost" size="icon-xs" className="absolute right-3" aria-label="More"><EllipsisIcon /></Button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default TimelineTeamActivitySheetBlock
