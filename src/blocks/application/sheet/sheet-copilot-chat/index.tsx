import { useState } from "react"
import {
  ArrowUpIcon,
  ChevronDownIcon,
  GlobeIcon,
  ImageIcon,
  MicIcon,
  PencilIcon,
  PlusIcon,
  RefreshCwIcon,
  XIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const CHIPS = ["Find ReUI issues related to sheets", "What should I work on?", "Show overdue review tasks", "What block areas are active?"]

export function SheetCopilotChatBlock() {
  const [thoughtOpen, setThoughtOpen] = useState(false)
  const [input, setInput] = useState("")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[460px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-1 border-b px-3 py-2">
          <span className="text-sm font-medium">Ask ReUI</span>
          <div className="ml-auto flex items-center gap-0.5">
            <Button variant="ghost" size="icon-xs" aria-label="New chat"><PencilIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="History"><RefreshCwIcon /></Button>
            <Button variant="ghost" size="icon-xs" aria-label="More"><span className="text-lg leading-none">···</span></Button>
            <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          <h2 className="text-lg font-semibold">What can Ask ReUI help with?</h2>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {CHIPS.map((chip) => <Button key={chip} variant="outline" size="sm">{chip}</Button>)}
          </div>

          <div className="mt-5 flex justify-end">
            <div className="bg-foreground text-background max-w-[85%] rounded-xl px-3 py-2 text-sm">Can you review sheet-10 before handoff?</div>
          </div>

          <div className="mt-4 flex items-start gap-1.5">
            <span className="bg-muted flex size-5 items-center justify-center rounded">▤</span>
            <div>
              <p className="text-sm font-medium">Ask ReUI <span className="text-muted-foreground text-xs font-normal">4 hours ago</span></p>
              <p className="mt-1 text-sm">Yes. I would check the sheet shell first: header density, body scroll ownership, and whether the composer stays pinned without adding a footer divider.</p>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <div className="bg-foreground text-background max-w-[85%] rounded-xl px-3 py-2 text-sm">What should be fixed first?</div>
          </div>

          <div className="mt-4 flex items-start gap-1.5">
            <span className="bg-muted flex size-5 items-center justify-center rounded">▤</span>
            <div>
              <p className="text-sm font-medium">Ask ReUI <span className="text-muted-foreground text-xs font-normal">4 hours ago</span></p>
              <p className="mt-1 text-sm">Start with the footer. Keep the question entry form compact, remove extra footer actions, then confirm the chat still has enough context to feel useful.</p>
            </div>
          </div>

          <Collapsible open={thoughtOpen} onOpenChange={setThoughtOpen} className="mt-4">
            <CollapsibleTrigger className="text-muted-foreground flex items-center gap-1.5 text-xs">
              ◐ Thought for a few seconds <ChevronDownIcon className="size-3" />
            </CollapsibleTrigger>
            <CollapsibleContent><p className="text-muted-foreground mt-1 text-xs">Checked recent handoffs and open review notes.</p></CollapsibleContent>
          </Collapsible>
        </div>

        <div className="border-t p-3">
          <div className="rounded-xl border p-2">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              rows={2}
              placeholder="Ask ReUI…"
              aria-label="Ask ReUI"
              className="w-full resize-none bg-transparent px-1 text-sm outline-none placeholder:text-muted-foreground"
            />
            <div className="mt-1 flex items-center gap-1">
              <Button variant="ghost" size="icon-xs" aria-label="Attach"><PlusIcon /></Button>
              <Button variant="ghost" size="icon-xs" aria-label="Image"><ImageIcon /></Button>
              <Button variant="ghost" size="icon-xs" aria-label="Web"><GlobeIcon /></Button>
              <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Voice"><MicIcon /></Button>
              <Button size="icon-sm" aria-label="Send" disabled={!input}><ArrowUpIcon /></Button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default SheetCopilotChatBlock
