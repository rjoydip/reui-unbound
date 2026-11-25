import { useState } from "react"
import {
  BoldIcon,
  CheckIcon,
  ChevronDownIcon,
  CodeIcon,
  EllipsisIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
  MessageSquareIcon,
  Redo2Icon,
  Undo2Icon,
  UnderlineIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const DOC = `
<p>Loomwell 4.3 lets two support agents write one customer reply together before it goes out. This spec covers the first release, planned for general availability on November 18. <span class="relative rounded-sm bg-violet-100"><span class="absolute -top-5 left-0 rounded-t bg-violet-600 px-1 text-[10px] text-white">Maya Chen</span>A private</span> draft is visible only to invited teammates.</p>
<h2>Problem</h2>
<p>Hard tickets pull in a second agent on 22% of escalations. Today the helper pastes a draft into an internal note, waits for a thumbs up, and the owner copies the final text back into the reply. Across 1,840 escalations in August, that loop added a <mark>median of 14 minutes</mark> to first response.</p>
<h2>Goals</h2>
<ul><li>Two agents edit the same reply draft at once, with named cursors, and see each other’s changes as they type.</li><li>Cut the median handoff on escalations from 14 minutes to under 5.</li><li>Every draft keeps one owner, and only the owner sends it.</li><li>Nothing typed is lost when an agent drops offline.</li></ul>
<h2>Non-Goals</h2>
<ul><li>Co-editing internal notes, macros or help center articles.</li><li>Suggesting mode or tracked changes inside a reply.</li></ul>
<h2>How It Works</h2>
<p>Any agent on a ticket can invite a teammate from the reply box. The teammate joins the draft in place, and a presence row above the composer shows everyone in it. Only the owner can press <mark>Send</mark>; a teammate can ask for ownership and the owner approves it in one click.</p>
<p>Drafts sync through the existing realtime gateway. If an agent drops offline, edits queue locally and merge on reconnect, so no one loses text.</p>
<p>Access follows the ticket: anyone who can reply can join, light agents can watch but not type, and every join and ownership change lands in the ticket’s audit log.</p>
<h2>Success Metrics</h2>
<ul><li>Median escalation handoff under 5 minutes by the end of the beta.</li><li>At least 30% of escalations on beta accounts use a shared draft within four weeks.</li><li>No rise in replies sent by the wrong owner, checked weekly by support operations.</li><li>Satisfaction on shared replies at or above the team average of 91%.</li></ul>
<h2>Rollout</h2>
<ol><li>October 28: private beta for 40 accounts, English only.</li><li>November 4: every Growth and Scale workspace, behind a workspace setting.</li><li>November 18: general availability, on by default for new workspaces.</li></ol>
<h2>Risks</h2>
<p>Two agents can still promise different things in different paragraphs. The composer shows who changed each paragraph last, and the owner reads the whole draft before sending.</p>
<p>Offline merges never conflict at the text level, but edits that land in a burst on reconnect can surprise the owner. Merged paragraphs stay marked for ten seconds after a sync.</p>
<h2>Open Questions</h2>
<ul><li>Does a shared reply count toward both agents’ response time targets?</li><li>Should the draft lock once the owner opens the send confirmation?</li><li>Do we show live cursors to agents on the free plan?</li></ul>
<h2>Launch Checklist</h2>
<ul class="task-list"><li>Presence row design review</li><li>Load test the gateway at 3,000 concurrent drafts</li><li>Macro audit with support operations</li><li>Help center article and in-app tour</li></ul>
<p>Owner: Arjun Mehta. Engineering: Lena Hoffmann. Launch: Maya Chen.</p>
`

const COMMENTS = [
  { author: "Daniel Okafor", time: "Sep 25", quote: "“a median of 14 minutes”", body: "These numbers come from the August export. Is queue time included?", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { author: "Maya Chen", time: "9:12 AM", quote: "“Only the owner can press…”", body: "What does the teammate see if the owner goes offline mid-draft?", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80", replies: 1 },
  { author: "Daniel Okafor", time: "11:30 AM", quote: "“agents on the free plan”", body: "Pricing needs this settled before the beta invite list goes out.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
]

export function RichTextEditor4Block() {
  const [online, setOnline] = useState(true)
  const [following, setFollowing] = useState<string | null>(null)
  const [resolved, setResolved] = useState<number[]>([])
  const [commentsOpen, setCommentsOpen] = useState(true)

  return (
    <div className="bg-background text-foreground min-h-svh">
      <header className="bg-card sticky top-0 z-20 border-b">
        <div className="flex items-start gap-3 px-4 py-2">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-sm font-semibold">
              Shared Drafts
              <Badge variant="success-light" size="sm">Live</Badge>
            </p>
            <p className="text-muted-foreground text-xs">Loomwell 4.3 · Product spec · Edited {online ? "just now" : "offline"}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-muted-foreground text-xs">{following ? `Following ${following}` : "1 editing"}</span>
            <div className="flex -space-x-1.5">
              {[
                ["Maya Chen", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80"],
                ["Daniel Okafor", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"],
                ["Lena Hoffmann", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80"],
              ].map(([name, src]) => (
                <button
                  key={name}
                  type="button"
                  aria-label={`Follow ${name}`}
                  onClick={() => setFollowing(following === name ? null : name)}
                  className={cn("rounded-full ring-2 ring-card", following === name && "ring-violet-500")}
                >
                  <Avatar size="sm">
                    <AvatarImage src={src} alt="" />
                    <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </button>
              ))}
            </div>
            <Switch checked={online} onCheckedChange={setOnline} aria-label="Online" />
            <span className="text-muted-foreground text-xs">{online ? "Online" : "Offline"}</span>
            <Button variant="ghost" size="icon-sm" aria-label="Comment panel" onClick={() => setCommentsOpen((value) => !value)}><MessageSquareIcon /></Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Document actions"><EllipsisIcon /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Share</DropdownMenuLabel>
                <DropdownMenuItem><LinkIcon />Copy Link</DropdownMenuItem>
                <DropdownMenuItem><CodeIcon />Copy HTML</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Demo</DropdownMenuLabel>
                <DropdownMenuItem>Replay Session</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex items-center gap-1 px-3 py-1.5">
          <Button variant="ghost" size="icon-sm" aria-label="Undo"><Undo2Icon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Redo"><Redo2Icon /></Button>
          <Button variant="ghost" size="sm" className="gap-1.5">Text<ChevronDownIcon /></Button>
          {[BoldIcon, ItalicIcon, UnderlineIcon, LinkIcon, ListIcon, ListOrderedIcon, ListTodoIcon, MessageSquareIcon].map((Icon, index) => (
            <Button key={index} variant="ghost" size="icon-sm" aria-label={`Format ${index + 1}`}><Icon /></Button>
          ))}
        </div>
      </header>

      <div className={cn("mx-auto grid max-w-[1280px] gap-10 px-8 py-8", commentsOpen && "lg:grid-cols-[minmax(0,1fr)_324px]")}>
        <article
          contentEditable={online}
          suppressContentEditableWarning
          dangerouslySetInnerHTML={{ __html: DOC }}
          className="text-[15px] leading-7 outline-none [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_mark]:bg-yellow-200 [&_mark]:px-0.5 [&_p]:my-4 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_.task-list]:list-none [&_.task-list]:pl-0 [&_.task-list_li]:relative [&_.task-list_li]:pl-7 [&_.task-list_li:before]:absolute [&_.task-list_li:before]:left-0 [&_.task-list_li:before]:top-1 [&_.task-list_li:before]:size-4 [&_.task-list_li:before]:rounded [&_.task-list_li:before]:border [&_.task-list_li:before]:content-[''] [&_.task-list_li:first-child:before]:bg-foreground"
        />

        {commentsOpen ? (
          <aside className="h-fit">
            <div className="bg-card overflow-hidden rounded-lg border">
              <div className="flex items-center gap-2 border-b px-4 py-2.5">
                <span className="text-sm font-medium">Comments</span>
                <Badge variant="secondary" size="sm">{COMMENTS.length}</Badge>
              </div>
              <div className="divide-y">
                {COMMENTS.map((comment, index) => {
                  const isResolved = resolved.includes(index)
                  return (
                    <div key={comment.author + comment.time} className={cn("px-4 py-3", isResolved && "opacity-40")}>
                      <div className="flex items-center gap-2">
                        <Avatar size="sm">
                          <AvatarImage src={comment.avatar} alt="" />
                          <AvatarFallback>{comment.author.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{comment.author}</span>
                        <span className="text-muted-foreground text-xs">{comment.time}</span>
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          className="ml-auto"
                          aria-label="Resolve comment"
                          onClick={() => setResolved((current) => [...current, index])}
                        >
                          <CheckIcon />
                        </Button>
                      </div>
                      <p className="text-muted-foreground mt-2 text-xs">{comment.quote}</p>
                      <p className="mt-1 text-sm">{comment.body}</p>
                      {comment.replies ? <p className="text-muted-foreground mt-1 text-xs">{comment.replies} reply</p> : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  )
}

export default RichTextEditor4Block
