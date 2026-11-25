import { useRef, useState } from "react"
import {
  AtSignIcon,
  CheckIcon,
  ChevronRightIcon,
  CodeIcon,
  EllipsisIcon,
  ListIcon,
  LockIcon,
  MaximizeIcon,
  MinusIcon,
  QuoteIcon,
  Redo2Icon,
  TableIcon,
  Trash2Icon,
  TypeIcon,
  Undo2Icon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "cn"

const INITIAL_HTML = `
<h1>Escalation Playbook</h1>
<p>How Loomwell support hands a customer problem to engineering without losing context. <span class="rounded bg-muted px-1 text-foreground">@Daniel Okafor</span> owns this page; propose edits in <span class="rounded bg-muted px-1 text-foreground">#support-ops</span>.</p>
<p class="text-muted-foreground text-sm">Contents</p>
<ul class="contents-list text-muted-foreground text-sm">
<li>Escalation Playbook
<ul><li>When to Escalate</li><li>Escalation Tiers<ul><li>Paging Engineering</li></ul></li><li>Handoff Checklist</li><li>Handoff Note<ul><li>Search Diagnostics</li><li>Customer Updates</li></ul></li><li>Review Cadence</li></ul>
</li></ul>
<h2>When to Escalate</h2>
<p>Escalate as soon as one of these is true. When in doubt, escalate and let the next tier downgrade it.</p>
<ul><li>Email stops syncing for a workspace for more than 15 minutes.</li><li>Inbox search misses conversations that exist, for more than one agent.</li><li>Scheduled replies send at the wrong time, or not at all.</li><li>Anything that looks like another workspace's data is <strong>always Tier 3</strong>.</li></ul>
<h2>Escalation Tiers</h2>
<p>Targets run from the moment the ticket is tagged, around the clock for Tier 3.</p>
<table><thead><tr><th>Tier</th><th>Owner</th><th>Response target</th><th>Channel</th></tr></thead><tbody><tr><td>Tier 1</td><td>Daniel Okafor</td><td>4 business hours</td><td>#support-desk</td></tr><tr><td>Tier 2</td><td>Lena Hoffmann</td><td>1 hour</td><td>#search-oncall</td></tr><tr><td>Tier 3</td><td>Lena Hoffmann</td><td>15 minutes</td><td>#incident-room</td></tr></tbody></table>
<h3>Paging Engineering</h3>
<p>Tier 2 and Tier 3 page the search on-call from the incident channel. Never message an engineer directly: <mark>the page is what starts the clock</mark>.</p>
<h2>Handoff Checklist</h2>
<ul class="task-list"><li>Tag the ticket with its tier and the affected workspace ID</li><li>Reproduce it on a staging workspace, or note why you could not</li><li>Paste the search diagnostics from the next section</li><li>Agree the customer update with @Maya Chen before it goes out</li><li>Book the incident review with @Lena Hoffmann once Tier 3 closes</li></ul>
<h2>Handoff Note</h2>
<h3>Search Diagnostics</h3>
<p>Run this from the admin console and paste the output in the ticket:</p>
<pre>loomwell diag search --workspace ws_4821 --since 2h</pre>
<h3>Customer Updates</h3>
<p>Send the first update inside the response target, even with nothing new to say. The tone we aim for:</p>
<blockquote>We can see the problem on our side and an engineer is on it now. You will hear from us again by 3:00 p.m. UTC, sooner if it is fixed.</blockquote>
<h2>Review Cadence</h2>
<p>Every Tier 3 gets a written review within five business days. @Arjun Mehta collects the notes, and past reviews live in the incident archive.</p>
`

const OUTLINE = [
  { label: "Escalation Playbook", depth: 0 },
  { label: "When to Escalate", depth: 1 },
  { label: "Escalation Tiers", depth: 1 },
  { label: "Paging Engineering", depth: 2 },
  { label: "Handoff Checklist", depth: 1 },
  { label: "Handoff Note", depth: 1 },
  { label: "Search Diagnostics", depth: 2 },
  { label: "Customer Updates", depth: 2 },
  { label: "Review Cadence", depth: 1 },
]

const SLASH_COMMANDS = [
  { label: "Heading 1", icon: TypeIcon, tag: "h1" },
  { label: "Heading 2", icon: TypeIcon, tag: "h2" },
  { label: "Bulleted list", icon: ListIcon, tag: "ul" },
  { label: "Task list", icon: CheckIcon, tag: "ul" },
  { label: "Table", icon: TableIcon, tag: "table" },
  { label: "Quote", icon: QuoteIcon, tag: "blockquote" },
  { label: "Divider", icon: MinusIcon, tag: "hr" },
  { label: "Code block", icon: CodeIcon, tag: "pre" },
]

const PEOPLE = ["Daniel Okafor", "Maya Chen", "Lena Hoffmann", "Arjun Mehta"]

export function RichTextEditorWikiPageEditorBlock() {
  const editorRef = useRef<HTMLDivElement>(null)
  const [menu, setMenu] = useState<"slash" | "mention" | null>(null)
  const [outlineOpen, setOutlineOpen] = useState(false)
  const [locked, setLocked] = useState(false)
  const [fullWidth, setFullWidth] = useState(false)

  const apply = (tag: string) => {
    editorRef.current?.focus()
    if (tag === "hr") document.execCommand("insertHorizontalRule")
    else document.execCommand("formatBlock", false, tag)
    setMenu(null)
  }

  const insertMention = (name: string) => {
    editorRef.current?.focus()
    document.execCommand("insertText", false, `@${name}`)
    setMenu(null)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (locked) return
    if (event.key === "/") {
      event.preventDefault()
      setMenu("slash")
    }
    if (event.key === "@") {
      event.preventDefault()
      setMenu("mention")
    }
  }

  const copy = async (kind: "html" | "text") => {
    const value = kind === "html" ? editorRef.current?.innerHTML ?? "" : editorRef.current?.innerText ?? ""
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // Clipboard permissions can be unavailable in preview iframes.
    }
  }

  return (
    <div className="bg-background text-foreground relative min-h-svh">
      <header className="bg-card flex items-start gap-3 border-b px-4 py-2">
        <div className="min-w-0">
          <p className="text-sm font-semibold">Escalation Playbook</p>
          <p className="text-muted-foreground text-xs">Support wiki · Edited Sep 26 · Saved</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="flex -space-x-1.5">
            {[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
            ].map((src) => (
              <Avatar key={src} size="sm" className="ring-2 ring-card">
                <AvatarImage src={src} alt="" />
                <AvatarFallback>LW</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <Button variant="ghost" size="icon-sm" aria-label="Undo" onClick={() => document.execCommand("undo")}><Undo2Icon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Redo" onClick={() => document.execCommand("redo")}><Redo2Icon /></Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Page actions"><EllipsisIcon /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <p className="text-muted-foreground px-2 py-1 text-xs">Page</p>
              <DropdownMenuItem onSelect={() => setFullWidth((value) => !value)}><MaximizeIcon />Full Width{fullWidth ? <CheckIcon className="ml-auto" /> : null}</DropdownMenuItem>
              <DropdownMenuItem><TypeIcon />Small Text</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setLocked((value) => !value)}><LockIcon />Lock Page{locked ? <CheckIcon className="ml-auto" /> : null}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <p className="text-muted-foreground px-2 py-1 text-xs">Export</p>
              <DropdownMenuItem onSelect={() => copy("html")}><CodeIcon />Copy HTML</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => copy("text")}><CodeIcon />Copy Text</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onSelect={() => { if (editorRef.current) editorRef.current.innerHTML = "" }}><Trash2Icon />Clear Page</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="relative">
        <div
          ref={editorRef}
          contentEditable={!locked}
          suppressContentEditableWarning
          onKeyDown={onKeyDown}
          dangerouslySetInnerHTML={{ __html: INITIAL_HTML }}
          className={cn(
            "mx-auto px-6 py-10 text-[15px] leading-7 outline-none",
            fullWidth ? "max-w-none" : "max-w-[760px]",
            "[&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold",
            "[&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_.contents-list]:list-none [&_.contents-list]:pl-0 [&_.contents-list_ul]:my-1 [&_.contents-list_ul]:list-none [&_.contents-list_ul]:pl-5 [&_.task-list]:list-none [&_.task-list]:pl-0 [&_.task-list_li]:relative [&_.task-list_li]:pl-7 [&_.task-list_li:before]:absolute [&_.task-list_li:before]:left-0 [&_.task-list_li:before]:top-1 [&_.task-list_li:before]:size-4 [&_.task-list_li:before]:rounded [&_.task-list_li:before]:border [&_.task-list_li:before]:content-[''] [&_.task-list_li:first-child:before]:bg-foreground",
            "[&_table]:my-4 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_th]:border [&_th]:bg-muted/40 [&_th]:px-2.5 [&_th]:py-1.5 [&_th]:text-left [&_th]:font-medium [&_td]:border [&_td]:px-2.5 [&_td]:py-1.5",
            "[&_pre]:bg-muted [&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:px-3 [&_pre]:py-2 [&_pre]:font-mono [&_pre]:text-xs",
            "[&_blockquote]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground",
            locked && "cursor-default"
          )}
        />

        {menu ? (
          <div className="bg-popover text-popover-foreground ring-foreground/10 absolute top-24 left-1/2 z-20 w-64 -translate-x-1/2 rounded-lg p-1 shadow-md ring-1">
            <p className="text-muted-foreground px-2 py-1.5 text-xs">{menu === "slash" ? "Blocks" : "Mention someone"}</p>
            {menu === "slash"
              ? SLASH_COMMANDS.map((item) => (
                  <button key={item.label} type="button" onClick={() => apply(item.tag)} className="hover:bg-accent flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm">
                    <item.icon className="text-muted-foreground size-4" />
                    {item.label}
                  </button>
                ))
              : PEOPLE.map((person) => (
                  <button key={person} type="button" onClick={() => insertMention(person)} className="hover:bg-accent flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm">
                    <AtSignIcon className="text-muted-foreground size-4" />
                    {person}
                  </button>
                ))}
          </div>
        ) : null}

        <div
          className="group absolute top-56 right-2 flex flex-col items-end"
          onMouseEnter={() => setOutlineOpen(true)}
          onMouseLeave={() => setOutlineOpen(false)}
        >
          <div className="flex flex-col items-end gap-1.5 py-2">
            {OUTLINE.map((item, index) => (
              <span
                key={item.label}
                className={cn("bg-muted-foreground/50 h-px", index === 0 ? "w-5 bg-foreground" : item.depth === 0 ? "w-4" : item.depth === 1 ? "w-3" : "w-2")}
              />
            ))}
          </div>
          {outlineOpen ? (
            <div className="bg-popover ring-foreground/10 absolute top-0 right-6 w-56 rounded-lg p-1 shadow-md ring-1">
              <p className="text-muted-foreground px-2 py-1.5 text-xs">On this page</p>
              {OUTLINE.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="hover:bg-accent flex w-full items-center gap-1 rounded-md px-2 py-1 text-left text-xs"
                  style={{ paddingLeft: 8 + item.depth * 10 }}
                >
                  <ChevronRightIcon className="size-3 opacity-40" />
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </main>
    </div>
  )
}

export default RichTextEditorWikiPageEditorBlock
