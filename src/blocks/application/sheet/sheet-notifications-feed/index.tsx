import { useState } from "react"
import {
  BellIcon,
  CheckCheckIcon,
  DownloadIcon,
  FileTextIcon,
  SmilePlusIcon,
  UsersIcon,
  XIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"

const NOTIFICATIONS = [
  { kind: "mention", author: "@sarah_smith mentioned you in #PR-1024", body: "\"Can you review the changes?\"", time: "2m ago", unread: true, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { kind: "approval", title: "Pending approval", body: "Design System v2.0 release requires your approval before deployment.", time: "5m ago", unread: true, actions: true },
  { kind: "file", author: "@maverick shared", title: "Project Timeline", time: "15m ago", unread: true, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80", file: "project-plan.pdf (2mb)" },
  { kind: "task", title: "Task assigned to you", body: "Implement user authentication flow for the mobile app.", time: "30m ago", unread: true, due: "Tomorrow" },
  { kind: "team", title: "4 people joined your workspace", body: "Sarah, Mike, Emma and James just joined ReUI Pro.", time: "45m ago" },
  { kind: "reaction", title: "Reactions on your comment", body: "Sarah and 2 others reacted to your comment in #design-system.", time: "1h ago", extra: "+5" },
]

export function SheetNotificationsFeedBlock() {
  const [read, setRead] = useState(false)

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[440px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <span className="text-sm font-semibold">Notifications</span>
          <span className="bg-foreground text-background flex size-5 items-center justify-center rounded-full text-[10px] font-semibold">{read ? 0 : 3}</span>
          <div className="ml-auto flex items-center gap-0.5">
            <Button variant="ghost" size="icon-xs" aria-label="Mark all as read" onClick={() => setRead(true)}><CheckCheckIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {NOTIFICATIONS.map((item, index) => (
            <div key={index} className="flex gap-2.5 border-b p-3 last:border-0">
              {item.avatar ? (
                <Avatar size="sm">
                  <AvatarImage src={item.avatar} alt="" />
                  <AvatarFallback>NT</AvatarFallback>
                </Avatar>
              ) : (
                <span className="bg-muted flex size-6 shrink-0 items-center justify-center rounded-full">
                  {item.kind === "approval" ? <CheckCheckIcon className="size-3.5 text-amber-500" /> : item.kind === "task" ? <BellIcon className="size-3.5 text-violet-500" /> : item.kind === "team" ? <UsersIcon className="size-3.5 text-emerald-500" /> : <SmilePlusIcon className="size-3.5 text-violet-500" />}
                </span>
              )}
              <div className="min-w-0 flex-1 space-y-1 text-sm">
                <p className="font-medium">
                  {item.author ? <span className="font-normal">{item.author} </span> : null}
                  {item.title ?? ""}
                  {item.extra ? <Badge variant="secondary" size="sm" className="ml-2">{item.extra}</Badge> : null}
                </p>
                {item.body ? <p className="text-muted-foreground">{item.body}</p> : null}
                {item.actions ? (
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <Button size="sm">Approve</Button>
                    <Button variant="outline" size="sm">Review</Button>
                  </div>
                ) : null}
                {item.file ? (
                  <div className="border-border flex w-fit items-center gap-2 rounded-md border px-2 py-1 text-xs">
                    <FileTextIcon className="size-3.5" />
                    {item.file}
                    <DownloadIcon className="size-3.5" />
                  </div>
                ) : null}
                {item.due ? <Badge variant="destructive-light" size="sm">Due {item.due}</Badge> : null}
                <p className="text-muted-foreground text-xs">{item.time}</p>
              </div>
              {item.unread && !read ? <span className="bg-foreground mt-1.5 size-1.5 shrink-0 rounded-full" /> : null}
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}

export default SheetNotificationsFeedBlock
