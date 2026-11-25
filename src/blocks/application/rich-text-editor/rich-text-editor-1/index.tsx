import { useRef, useState } from "react"
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  CheckIcon,
  ChevronDownIcon,
  CodeIcon,
  CopyIcon,
  EllipsisIcon,
  EraserIcon,
  HighlighterIcon,
  ItalicIcon,
  KeyboardIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
  MinusIcon,
  PencilIcon,
  QuoteIcon,
  Redo2Icon,
  StrikethroughIcon,
  Trash2Icon,
  UnderlineIcon,
  Undo2Icon,
  EyeIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Kbd } from "@/components/ui/kbd"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { cn } from "cn"

const INITIAL_HTML = `
<h1>Loomwell 4.2 Launch Brief</h1>
<p>Loomwell 4.2 brings <strong>scheduled replies</strong> and a rebuilt <strong>inbox search</strong> to every workspace on October 14. This brief is the source of truth for positioning, rollout and support readiness. Live numbers sit on the <a href="#">rollout dashboard</a>.</p>
<h2>Goals</h2>
<ul>
<li>Cut median first reply time for teams over 50 seats by 20%.</li>
<li>Move inbox search from the Scale plan to every plan, <em>including Free</em>.</li>
<li>Keep launch week tickets under 1,200, down from 1,640 at the 4.0 launch.</li>
<li>Publish both help center articles before general availability.</li>
</ul>
<h2>Rollout</h2>
<ol>
<li>Dogfood with the support team from October 1.</li>
<li>Open to 10% of workspaces on October 7 while search latency is watched.</li>
<li>General availability on October 14, with the changelog and the customer email.</li>
</ol>
<blockquote><p>Half my team works overnight. Scheduling replies means nobody sends a 3 a.m. apology again.</p><p><em>Priya Raman, support lead at Fieldnote</em></p></blockquote>
`

const BLOCKS = [
  { label: "Text", tag: "p", shortcut: "Ctrl+Alt+0" },
  { label: "Heading 1", tag: "h1", shortcut: "Ctrl+Alt+1" },
  { label: "Heading 2", tag: "h2", shortcut: "Ctrl+Alt+2" },
  { label: "Heading 3", tag: "h3", shortcut: "Ctrl+Alt+3" },
]

const HIGHLIGHTS = ["bg-yellow-200", "bg-emerald-200", "bg-sky-200", "bg-rose-200", "bg-violet-200"]

const SHORTCUTS = [
  ["Bold", "Ctrl B"], ["Italic", "Ctrl I"], ["Underline", "Ctrl U"], ["Strikethrough", "Ctrl Shift S"],
  ["Inline code", "Ctrl E"], ["Highlight", "Ctrl Shift H"], ["Link", "Ctrl K"], ["Heading 1 to 3", "Ctrl Alt 1"],
  ["Task list", "Ctrl Shift 9"], ["Indent a task", "Tab"],
]

export function RichTextEditor1Block() {
  const editorRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<"editing" | "viewing">("editing")
  const [block, setBlock] = useState("Heading 1")
  const [counts, setCounts] = useState({ words: 220, characters: 1346 })
  const [linkOpen, setLinkOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState("https://")
  const [blockOpen, setBlockOpen] = useState(false)
  const [highlightOpen, setHighlightOpen] = useState(false)

  const refreshCounts = () => {
    const text = editorRef.current?.innerText ?? ""
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    setCounts({ words, characters: text.replace(/\n/g, "").length })
  }

  const exec = (command: string, value?: string) => {
    editorRef.current?.focus()
    document.execCommand(command, false, value)
    refreshCounts()
  }

  const setBlockType = (tag: string, label: string) => {
    exec("formatBlock", tag)
    setBlock(label)
    setBlockOpen(false)
  }

  const clearDocument = () => {
    if (editorRef.current) editorRef.current.innerHTML = ""
    refreshCounts()
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
    <div className="bg-background text-foreground min-h-svh p-4">
      <div className="bg-card mx-auto flex min-h-[calc(100svh-2rem)] max-w-[1504px] flex-col overflow-hidden rounded-xl border">
        <header className="flex items-start gap-3 border-b px-4 py-2">
          <div className="min-w-0">
            <p className="text-sm font-semibold">Loomwell 4.2</p>
            <p className="text-muted-foreground text-xs">Launch brief · Edited Sep 26 · Saved</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
              ].map((src) => (
                <Avatar key={src} size="sm" className="ring-2 ring-card">
                  <AvatarImage src={src} alt="" />
                  <AvatarFallback>LW</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Document actions"><EllipsisIcon /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel>Mode</DropdownMenuLabel>
                <DropdownMenuItem onSelect={() => setMode("editing")}>
                  <PencilIcon />Editing{mode === "editing" ? <CheckIcon className="ml-auto" /> : null}
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setMode("viewing")}>
                  <EyeIcon />Viewing{mode === "viewing" ? <CheckIcon className="ml-auto" /> : null}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Export</DropdownMenuLabel>
                <DropdownMenuItem onSelect={() => copy("html")}><CodeIcon />Copy HTML</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => copy("text")}><CopyIcon />Copy Text</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onSelect={clearDocument}><Trash2Icon />Clear Document</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex flex-wrap items-center gap-1 border-b px-3 py-1.5">
          <Button variant="ghost" size="icon-sm" aria-label="Undo" onClick={() => exec("undo")}><Undo2Icon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Redo" onClick={() => exec("redo")}><Redo2Icon /></Button>
          <Popover open={blockOpen} onOpenChange={setBlockOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 font-medium">{block}<ChevronDownIcon /></Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-56 gap-0 p-1">
              <p className="text-muted-foreground px-2 py-1.5 text-xs">Turn into</p>
              {BLOCKS.map((item) => (
                <button
                  key={item.tag}
                  type="button"
                  onClick={() => setBlockType(item.tag, item.label)}
                  className="hover:bg-accent flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm"
                >
                  <span className="text-muted-foreground w-5 text-xs">{item.tag === "p" ? "T" : `H${item.tag.slice(1)}`}</span>
                  {item.label}
                  <span className="text-muted-foreground ml-auto text-xs">{item.shortcut}</span>
                  {block === item.label ? <CheckIcon className="size-3.5" /> : null}
                </button>
              ))}
            </PopoverContent>
          </Popover>
          <Separator orientation="vertical" className="mx-1 h-5" />
          {[
            { icon: BoldIcon, label: "Bold", command: "bold" },
            { icon: ItalicIcon, label: "Italic", command: "italic" },
            { icon: UnderlineIcon, label: "Underline", command: "underline" },
            { icon: StrikethroughIcon, label: "Strikethrough", command: "strikeThrough" },
          ].map((item) => (
            <Button key={item.label} variant="ghost" size="icon-sm" aria-label={item.label} onClick={() => exec(item.command)}>
              <item.icon />
            </Button>
          ))}
          <Button variant="ghost" size="icon-sm" aria-label="Inline code" onClick={() => exec("formatBlock", "pre")}><CodeIcon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Blockquote" onClick={() => exec("formatBlock", "blockquote")}><QuoteIcon /></Button>
          <Popover open={linkOpen} onOpenChange={setLinkOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Link"><LinkIcon /></Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-72 gap-2">
              <p className="text-sm font-medium">Add link</p>
              <input
                value={linkUrl}
                onChange={(event) => setLinkUrl(event.target.value)}
                aria-label="Link URL"
                className="border-input h-8 w-full rounded-lg border bg-transparent px-2.5 text-sm outline-none"
              />
              <Button
                size="sm"
                onClick={() => {
                  exec("createLink", linkUrl)
                  setLinkOpen(false)
                }}
              >
                Apply link
              </Button>
            </PopoverContent>
          </Popover>
          <Popover open={highlightOpen} onOpenChange={setHighlightOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Highlight"><HighlighterIcon /></Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto flex-row gap-1.5 p-2">
              {HIGHLIGHTS.map((color) => (
                <button
                  key={color}
                  type="button"
                  aria-label={`Highlight ${color}`}
                  onClick={() => {
                    exec("hiliteColor", color === "bg-yellow-200" ? "#fef08a" : color === "bg-emerald-200" ? "#a7f3d0" : color === "bg-sky-200" ? "#bae6fd" : color === "bg-rose-200" ? "#fecdd3" : "#ddd6fe")
                    setHighlightOpen(false)
                  }}
                  className={cn("size-6 rounded-full border", color)}
                />
              ))}
              <button
                type="button"
                aria-label="Remove highlight"
                onClick={() => { exec("hiliteColor", "transparent"); setHighlightOpen(false) }}
                className="border-muted-foreground/30 flex size-6 items-center justify-center rounded-full border"
              >
                <EraserIcon className="size-3.5" />
              </button>
            </PopoverContent>
          </Popover>
          <Separator orientation="vertical" className="mx-1 h-5" />
          <Button variant="ghost" size="icon-sm" aria-label="Bulleted list" onClick={() => exec("insertUnorderedList")}><ListIcon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Numbered list" onClick={() => exec("insertOrderedList")}><ListOrderedIcon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Task list" onClick={() => exec("insertUnorderedList")}><ListTodoIcon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Horizontal rule" onClick={() => exec("insertHorizontalRule")}><MinusIcon /></Button>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1.5"><AlignLeftIcon /><ChevronDownIcon /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                <DropdownMenuItem onSelect={() => exec("justifyLeft")}><AlignLeftIcon />Align left</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => exec("justifyCenter")}><AlignCenterIcon />Align center</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => exec("justifyRight")}><AlignRightIcon />Align right</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => exec("justifyFull")}><AlignJustifyIcon />Justify</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto">
          <div
            ref={editorRef}
            contentEditable={mode === "editing"}
            suppressContentEditableWarning
            onInput={refreshCounts}
            dangerouslySetInnerHTML={{ __html: INITIAL_HTML }}
            className={cn(
              "mx-auto max-w-[760px] px-8 py-12 text-[15px] leading-7 outline-none",
              "[&_h1]:mt-0 [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-semibold",
              "[&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold",
              "[&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6",
              "[&_li]:my-1.5 [&_a]:underline [&_blockquote]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground",
              mode === "viewing" && "cursor-default"
            )}
          />
        </div>

        <footer className="text-muted-foreground flex items-center gap-2 border-t px-4 py-2 text-xs">
          <span>{counts.words} words</span>
          <span>•</span>
          <span>{counts.characters.toLocaleString()} characters</span>
          <span>•</span>
          <span>{Math.max(1, Math.ceil(counts.words / 220))} min read</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="ml-auto gap-1.5"><KeyboardIcon />Shortcuts</Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-80 gap-0 p-2">
              <p className="px-1 pb-1 text-sm font-medium">Keyboard Shortcuts</p>
              <p className="text-muted-foreground px-1 pb-1 text-xs">Formatting</p>
              {SHORTCUTS.map(([label, keys]) => (
                <div key={label} className="flex items-center justify-between px-1 py-1 text-sm">
                  {label}
                  <span className="flex items-center gap-1">
                    {keys.split(" ").map((key) => <Kbd key={key}>{key}</Kbd>)}
                  </span>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </footer>
      </div>
    </div>
  )
}

export default RichTextEditor1Block
