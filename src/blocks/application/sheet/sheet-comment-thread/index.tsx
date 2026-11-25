import { useState } from "react"
import { AtSignIcon, FilterIcon, ImageIcon, MessageCircleIcon, PaperclipIcon, SmileIcon, XIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const COMMENTS = [
  { name: "Emily Parker", time: "4 minutes ago", body: "Can we name the SSO owner before the client review?", replies: 2, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { name: "James Miller", time: "8 minutes ago", body: "Moved the procurement note above the renewal risk summary.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Daniel Brooks", time: "14 minutes ago", body: "Call out SCIM separately from SAML in the diagram.", replies: 1, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
  { name: "Olivia Carter", time: "22 minutes ago", body: "Keep the executive summary to two sharp sentences.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
  { name: "James Miller", time: "31 minutes ago", body: "I'll move the budget note into the renewal section.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Hannah Stone", time: "44 minutes ago", body: "Retention copy is approved with the exception note attached.", replies: 3, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80" },
]

export function SheetCommentThreadBlock() {
  const [reply, setReply] = useState("")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[444px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <span className="bg-violet-600 flex size-5 items-center justify-center rounded text-[10px] font-bold text-white">S</span>
          <span className="text-sm font-medium">All comments for Stripe</span>
          <span className="bg-muted rounded px-1.5 py-0.5 text-xs">6</span>
          <div className="ml-auto flex items-center gap-0.5">
            <Button variant="ghost" size="icon-xs" aria-label="Filter comments"><FilterIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="More options"><span className="text-lg leading-none">···</span></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>

        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-3">
          {COMMENTS.map((comment) => (
            <div key={`${comment.name}-${comment.time}`} className="rounded-lg border p-3">
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarImage src={comment.avatar} alt="" />
                  <AvatarFallback>{comment.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{comment.name}</span>
                <span className="text-muted-foreground text-xs">{comment.time}</span>
              </div>
              <p className="mt-2 text-sm">{comment.body}</p>
              {comment.replies ? (
                <button type="button" className="text-muted-foreground mt-2 flex items-center gap-1 text-xs">
                  <MessageCircleIcon className="size-3.5" />
                  {comment.replies}
                </button>
              ) : null}
            </div>
          ))}
        </div>

        <div className="border-t p-3">
          <div className="rounded-xl border p-2">
            <textarea
              value={reply}
              onChange={(event) => setReply(event.target.value)}
              rows={3}
              placeholder="Add a comment…"
              aria-label="Add a comment"
              className="w-full resize-none bg-transparent px-1 text-sm outline-none placeholder:text-muted-foreground"
            />
            <div className="mt-1 flex items-center gap-1">
              <Button variant="ghost" size="icon-xs" aria-label="Emoji"><SmileIcon /></Button>
              <Button variant="ghost" size="icon-xs" aria-label="Mention"><AtSignIcon /></Button>
              <Button variant="ghost" size="icon-xs" aria-label="Attach"><PaperclipIcon /></Button>
              <Button variant="ghost" size="icon-xs" aria-label="Image"><ImageIcon /></Button>
              <Button variant="ghost" size="sm" className="ml-auto">Cancel</Button>
              <Button size="sm" disabled={!reply}>Post Comment</Button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default SheetCommentThreadBlock
