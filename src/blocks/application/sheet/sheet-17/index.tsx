import { useState } from "react"
import { CopyIcon, FilterIcon, FolderPlusIcon, PlusIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "cn"

const ACTIONS = [
  { value: "Block", description: "Refuse the request with a 403" },
  { value: "Challenge", description: "Ask the client to prove it is human" },
  { value: "Allow", description: "Skip every later rule and protection" },
  { value: "Log", description: "Record the match and keep evaluating" },
]

export function Sheet17Block() {
  const [action, setAction] = useState("Block")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-start gap-2 border-b p-2">
          <div>
            <p className="text-sm font-semibold">New Rule</p>
            <p className="text-muted-foreground text-xs">Judged in priority order, before managed protections.</p>
          </div>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
          <div className="space-y-1"><p className="text-sm font-medium">Name</p><Input defaultValue="Block card testing bursts" aria-label="Rule name" /></div>
          <div className="space-y-1"><p className="text-sm font-medium">Description</p><Input placeholder="What this rule protects" aria-label="Rule description" /></div>

          <div className="space-y-2">
            <p className="text-sm font-medium">When</p>
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-10 text-center">
              <span className="bg-muted flex size-9 items-center justify-center rounded-full"><FilterIcon className="size-4" /></span>
              <p className="mt-2 text-sm font-medium">No conditions yet</p>
              <p className="text-muted-foreground text-sm">Add a condition to choose the requests this rule meets.</p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Button variant="outline" size="sm"><PlusIcon />Add condition</Button>
              <Button variant="outline" size="sm"><FolderPlusIcon />Add group</Button>
            </div>
            <div className="overflow-hidden rounded-lg border text-sm">
              <div className="text-muted-foreground flex items-center justify-between border-b px-3 py-1.5 text-xs">Expression <CopyIcon className="size-3.5" /></div>
              <div className="px-3 py-2 text-sm">No conditions yet</div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Then</p>
            <RadioGroup value={action} onValueChange={setAction} className="grid grid-cols-2 gap-2">
              {ACTIONS.map((item) => (
                <label key={item.value} className={cn("flex cursor-pointer items-start gap-2 rounded-lg border p-3", action === item.value && "bg-muted/50")}>
                  <RadioGroupItem value={item.value} className="mt-0.5" />
                  <span>
                    <span className="block text-sm font-medium">{item.value}</span>
                    <span className="text-muted-foreground block text-sm">{item.description}</span>
                  </span>
                </label>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t p-3">
          <p className="text-muted-foreground text-xs">No conditions yet</p>
          <Button variant="ghost" size="sm" className="ml-auto">Cancel</Button>
          <Button size="sm">Create Rule</Button>
        </div>
      </aside>
    </div>
  )
}

export default Sheet17Block
