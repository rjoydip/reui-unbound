import { useState } from "react"
import {
  BoldIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CodeIcon,
  EllipsisIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  MinusIcon,
  QuoteIcon,
  Redo2Icon,
  Share2Icon,
  SparklesIcon,
  UnderlineIcon,
  Undo2Icon,
  XIcon,
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
import { cn } from "cn"

const DOC = `
<h1>Inbox Search Rollout</h1>
<p><del>At this point in time, the plan is to roll-out the new inbox search to every workspace in a number of stages, in order to make sure that we are able to catch regressions well before they have a chance to reach our largest customers.</del> <ins>We will release inbox search in four stages, so regressions surface before they reach our largest customers.</ins></p>
<p>Search ships with Loomwell 4.2 on October 14. This plan covers each stage, the metrics that gate it and who signs off.</p>
<h2>Stages</h2>
<ol><li><strong>Internal</strong>: the Kestrel Works support team, from September 29.</li><li><strong>Beta</strong>: 40 opt-in workspaces, from October 6. Beta admins will <del>recieve</del> <ins>receive</ins> a short survey after their first week.</li><li><strong>General availability</strong>: every workspace on October 14.</li><li><strong>Enterprise</strong>: workspaces over 500 seats, one week after GA.</li></ol>
<h2>Success Metrics</h2>
<p><del>It is important that we hold steady on these numbers until every workspace is on the new search.</del> <ins>Every stage must hold steady on these numbers before the next stage begins.</ins></p>
<ul><li>Median search latency below 250 ms on the ten most common queries.</li><li>Zero result rate below 8 percent on the top 200 queries.</li><li>No rise in tickets tagged search against the prior week.</li></ul>
<p>Any stage pauses on its own if a rollback has occurred in the last 24 hours.</p>
<h2>Risks</h2>
<p>Index rebuilds for the largest workspaces take up to 6 hours, so enterprise accounts move last. The rebuild runbook still needs an owner (TBD).</p>
<p>Support needs a seperate macro for search feedback before beta starts. Who writes the macro copy, Daniel or Maya?</p>
<h2>Sign-off</h2>
<ul class="task-list"><li>Search quality review, Lena Hoffmann</li><li>Support readiness, Daniel Okafor</li><li>Launch messaging, Maya Chen</li><li>Result card design QA, Arjun Mehta</li></ul>
`

const SUGGESTIONS = [
  {
    title: "Plan polished",
    was: "At this point in time, the plan is to roll-out the new inbox search to every…",
    now: "We will release inbox search in four stages, so regressions surface before they reach our largest customers.",
  },
  {
    title: "Hold steady",
    was: "It is important that we hold steady on these numbers until every workspace is…",
    now: "Every stage must hold steady on these numbers before the next stage begins.",
  },
  {
    title: "Typo fixed",
    was: "Beta admins will recieve a short survey",
    now: "Beta admins will receive a short survey",
  },
]

const MARKUP = [
  { value: "all", label: "All Markup", note: "Every edit, marked in place" },
  { value: "final", label: "Final", note: "As if every edit is accepted" },
  { value: "original", label: "Original", note: "The text before any edit" },
]

export function RichTextEditor5Block() {
  const [markup, setMarkup] = useState("all")
  const [index, setIndex] = useState(0)
  const [resolved, setResolved] = useState<number[]>([])
  const [dismissed, setDismissed] = useState(false)
  const [shared, setShared] = useState(false)

  const current = SUGGESTIONS[index]
  const open = !dismissed && !resolved.includes(index)
  const remaining = SUGGESTIONS.length - resolved.length

  const resolve = () => {
    setResolved((currentResolved) => [...currentResolved, index])
    const next = SUGGESTIONS.findIndex((_, suggestionIndex) => suggestionIndex !== index && !resolved.includes(suggestionIndex))
    if (next !== -1) setIndex(next)
    else setDismissed(true)
  }

  return (
    <div className="bg-background text-foreground relative min-h-svh">
      <header className="bg-card sticky top-0 z-20 border-b">
        <div className="flex items-start gap-3 px-4 py-2">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-sm font-semibold">
              Inbox Search Rollout
              <Badge variant="secondary" size="sm">{remaining} suggestions</Badge>
            </p>
            <p className="text-muted-foreground text-xs">Rollout plan · Lena Hoffmann · Edited Sep 26</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
              ].map((src) => (
                <Avatar key={src} size="sm" className="ring-2 ring-card">
                  <AvatarImage src={src} alt="" />
                  <AvatarFallback>LW</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <SparklesIcon />
                  {MARKUP.find((item) => item.value === markup)?.label}
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {MARKUP.map((item) => (
                  <DropdownMenuItem key={item.value} onSelect={() => setMarkup(item.value)}>
                    <span className="flex flex-col">
                      <span>{item.label}</span>
                      <span className="text-muted-foreground text-xs">{item.note}</span>
                    </span>
                    {markup === item.value ? <CheckIcon className="ml-auto" /> : null}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="gap-1.5" onClick={() => setShared(true)}><Share2Icon />Share</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuLabel>{shared ? "Link copied" : "Share"}</DropdownMenuLabel>
                <DropdownMenuItem><LinkIcon />Copy link</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Share2Icon />Invite teammate</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon-sm" aria-label="Document actions"><EllipsisIcon /></Button>
          </div>
        </div>

        <div className="flex items-center gap-1 px-3 py-1.5">
          <Button variant="ghost" size="icon-sm" aria-label="Undo"><Undo2Icon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Redo"><Redo2Icon /></Button>
          <Button variant="ghost" size="sm" className="gap-1.5">Heading 1<ChevronDownIcon /></Button>
          {[BoldIcon, ItalicIcon, UnderlineIcon, CodeIcon, LinkIcon, ListIcon, ListOrderedIcon, MinusIcon, QuoteIcon].map((Icon, iconIndex) => (
            <Button key={iconIndex} variant="ghost" size="icon-sm" aria-label={`Format ${iconIndex + 1}`}><Icon /></Button>
          ))}
          <Button variant="ghost" size="sm" className="gap-1.5"><ChevronDownIcon />Align</Button>
          <Button variant="ghost" size="icon-sm" aria-label="AI assistant" onClick={() => setDismissed(false)}><SparklesIcon /></Button>
        </div>
      </header>

      <article
        className={cn(
          "mx-auto max-w-[760px] px-6 py-10 pb-40 text-[15px] leading-7",
          "[&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold",
          "[&_p]:my-4 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1",
          "[&_.task-list]:list-none [&_.task-list]:pl-0 [&_.task-list_li]:relative [&_.task-list_li]:pl-7 [&_.task-list_li:before]:absolute [&_.task-list_li:before]:left-0 [&_.task-list_li:before]:top-1 [&_.task-list_li:before]:size-4 [&_.task-list_li:before]:rounded [&_.task-list_li:before]:border [&_.task-list_li:before]:content-[''] [&_.task-list_li:first-child:before]:bg-foreground",
          "[&_ins]:rounded-sm [&_ins]:bg-emerald-100 [&_ins]:text-emerald-800 [&_ins]:no-underline [&_del]:rounded-sm [&_del]:bg-rose-100 [&_del]:text-rose-700",
          markup === "final" && "[&_del]:hidden [&_ins]:bg-transparent [&_ins]:text-inherit",
          markup === "original" && "[&_ins]:hidden [&_del]:bg-transparent [&_del]:text-inherit"
        )}
        dangerouslySetInnerHTML={{ __html: DOC }}
      />

      {open && current ? (
        <div className="border-focus/40 bg-card shadow-foreground/10 absolute top-[420px] left-1/2 z-30 w-[560px] max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-xl border shadow-lg">
          <div className="flex items-center gap-2 border-b px-3 py-2">
            <span className="bg-muted flex size-6 items-center justify-center rounded-md"><SparklesIcon className="size-3.5" /></span>
            <span className="text-sm font-medium">{current.title}</span>
            <span className="text-muted-foreground text-xs">· {SUGGESTIONS.length} edits</span>
            <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Dismiss assistant" onClick={() => setDismissed(true)}><XIcon /></Button>
          </div>
          <div className="grid grid-cols-[44px_1fr] gap-2 px-3 py-3 text-xs">
            <span className="text-muted-foreground">Was</span>
            <span className="rounded-sm bg-rose-100 px-1 text-rose-700 line-through">{current.was}</span>
            <span className="text-muted-foreground">Now</span>
            <span className="rounded-sm bg-emerald-100 px-1 text-emerald-800">{current.now}</span>
          </div>
          <div className="flex items-center gap-1 border-t px-3 py-2">
            <Button variant="ghost" size="icon-xs" aria-label="Previous suggestion" onClick={() => setIndex((value) => Math.max(0, value - 1))}><ChevronLeftIcon /></Button>
            <span className="text-muted-foreground text-xs">{index + 1} of {SUGGESTIONS.length}</span>
            <Button variant="ghost" size="icon-xs" aria-label="Next suggestion" onClick={() => setIndex((value) => Math.min(SUGGESTIONS.length - 1, value + 1))}><ChevronRightIcon /></Button>
            <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="More options"><EllipsisIcon /></Button>
            <Button variant="ghost" size="sm" className="gap-1.5" onClick={resolve}><XIcon />Reject</Button>
            <Button size="sm" className="gap-1.5" onClick={resolve}><CheckIcon />Accept</Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default RichTextEditor5Block
