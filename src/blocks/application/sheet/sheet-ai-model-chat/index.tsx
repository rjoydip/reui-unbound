import { useState } from "react"
import {
  ArrowUpIcon,
  ChevronDownIcon,
  CopyIcon,
  GlobeIcon,
  ImageIcon,
  MicIcon,
  PencilIcon,
  PlusIcon,
  RefreshCwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  XIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const CHIPS = ["Overdue items", "Today's changes", "My active work"]

export function SheetAiModelChatBlock() {
  const [thoughtOpen, setThoughtOpen] = useState(false)
  const [input, setInput] = useState("")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[440px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-1 border-b px-3 py-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 font-medium">ReUI AI (GPT-5.4)<ChevronDownIcon /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {["GPT-5.4", "Claude Sonnet", "Gemini Pro"].map((model) => <DropdownMenuItem key={model}>{model}</DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="ml-auto flex items-center gap-0.5">
            <Button variant="ghost" size="icon-xs" aria-label="New chat"><PencilIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="History"><RefreshCwIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="More"><span className="text-lg leading-none">···</span></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          <h2 className="text-lg font-semibold">What can ReUI do for you?</h2>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {CHIPS.map((chip) => <Button key={chip} variant="outline" size="sm">{chip}</Button>)}
          </div>

          <div className="mt-5 flex justify-end">
            <div className="bg-foreground text-background max-w-[85%] rounded-xl px-3 py-2 text-sm">Show my open ReUI sheet tasks.</div>
          </div>

          <Collapsible open={thoughtOpen} onOpenChange={setThoughtOpen} className="mt-3">
            <CollapsibleTrigger className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <span>◐</span>
              Thought for a few seconds
              <ChevronDownIcon className="size-3" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-muted-foreground mt-1 text-xs">Checked sheet reviews, open comments, and the latest copy approvals.</p>
            </CollapsibleContent>
          </Collapsible>
          <p className="mt-1.5 text-sm">
            You have three sheet tasks in review. Sheet 4 needs a spacing polish, Sheet 8 is ready for visual QA, and Sheet 9 is waiting on copy approval.
          </p>
          <div className="text-muted-foreground mt-2 flex items-center gap-2">
            <Button variant="ghost" size="icon-xs" aria-label="Copy"><CopyIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Good response"><ThumbsUpIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Bad response"><ThumbsDownIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Retry"><RefreshCwIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Save"><span className="text-xs">▤</span></Button>
          </div>

          <div className="mt-4 flex justify-end">
            <div className="bg-foreground text-background max-w-[85%] rounded-xl px-3 py-2 text-sm">Keep the chat composer ready for the next prompt.</div>
          </div>
        </div>

        <div className="border-t p-3">
          <div className="rounded-xl border p-2">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              rows={2}
              placeholder="How can I help you today?"
              aria-label="Message"
              className="w-full resize-none bg-transparent px-1 text-sm outline-none placeholder:text-muted-foreground"
            />
            <div className="mt-1 flex items-center gap-1">
              <Button variant="ghost" size="icon-xs" aria-label="Attach"><PlusIcon /></Button>
              <Button variant="ghost" size="icon-xs" aria-label="Add image"><ImageIcon /></Button>
              <Button variant="ghost" size="icon-xs" aria-label="Search web"><GlobeIcon /></Button>
              <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Voice"><MicIcon /></Button>
              <Button size="icon-sm" aria-label="Send" disabled={!input}><ArrowUpIcon /></Button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default SheetAiModelChatBlock
