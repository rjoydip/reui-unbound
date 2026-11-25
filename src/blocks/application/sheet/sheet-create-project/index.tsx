import { useState } from "react"
import { CalendarIcon, ChevronDownIcon, FlagIcon, FolderPlusIcon, TagIcon, UsersIcon, UserRoundIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "cn"

function MetaPill({ icon: Icon, label, options }: { icon: React.ComponentType<{ className?: string }>; label: string; options: string[] }) {
  const [value, setValue] = useState("")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5 font-normal">
          <Icon />
          {value || label}
          <ChevronDownIcon className="text-muted-foreground size-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-44">
        {options.map((option) => <DropdownMenuItem key={option} onSelect={() => setValue(option)}>{option}</DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function SheetCreateProjectBlock() {
  const [name, setName] = useState("")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[556px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex justify-end p-2">
          <Button variant="ghost" size="icon-xs" aria-label="Close"><XIcon /></Button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-9 pb-6">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Project name"
            aria-label="Project name"
            className="w-full bg-transparent text-2xl font-semibold outline-none placeholder:text-muted-foreground/70"
          />
          <textarea
            placeholder="Write a description, project brief, or collect ideas…"
            aria-label="Description"
            rows={3}
            className="text-muted-foreground mt-3 w-full resize-none bg-transparent text-sm outline-none"
          />
          <div className="mt-6 space-y-2">
            <div className="flex flex-wrap gap-1.5">
              <MetaPill icon={FolderPlusIcon} label="Planned" options={["Planned", "In progress", "Done"]} />
              <MetaPill icon={FlagIcon} label="No priority" options={["No priority", "Urgent", "High", "Medium", "Low"]} />
              <MetaPill icon={UserRoundIcon} label="No lead" options={["No lead", "Alex Morgan", "Maya Chen"]} />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <MetaPill icon={UsersIcon} label="Members" options={["Alex Morgan", "Maya Chen", "Daniel Okafor"]} />
              <MetaPill icon={FlagIcon} label="No milestone" options={["No milestone", "M1", "M2"]} />
              <MetaPill icon={CalendarIcon} label="Set target date" options={["Today", "Next week", "Jun 30, 2026"]} />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <MetaPill icon={TagIcon} label="Add labels" options={["Design", "Engineering", "Growth"]} />
            </div>
          </div>
          <div className="mt-8 border-t pt-4">
            <div className="flex items-center gap-2">
              <FlagIcon className="text-muted-foreground size-4" />
              <span className="text-sm font-medium">Quick Tips</span>
              <Button variant="outline" size="sm" className="ml-auto">View Guide</Button>
            </div>
            <ul className="text-muted-foreground mt-3 space-y-1.5 text-sm">
              <li>✨ Start with the outcome, not every task.</li>
              <li>💡 Choose one lead before adding members.</li>
              <li>💡 Set timing when it affects launch or review.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 border-t p-3">
          <Button className={cn("w-full", !name && "opacity-70")} disabled={!name}>Create project</Button>
          <Button variant="outline" className="w-full">Close</Button>
        </div>
      </aside>
    </div>
  )
}

export default SheetCreateProjectBlock
