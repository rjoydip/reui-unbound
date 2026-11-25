import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const SECTIONS = [
  {
    title: "General",
    rows: [
      { label: "Default view", description: "Choose which layout opens on launch.", type: "select", options: ["Board", "List", "Calendar"], value: "Board" },
      { label: "Date format", description: "Set how dates appear across the app.", type: "select", options: ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY/MM/DD"], value: "MM/DD/YYYY" },
      { label: "First day of week", description: "Used for calendars and date pickers.", type: "select", options: ["Monday", "Sunday"], value: "Monday" },
      { label: "Auto-save drafts", description: "Automatically save unsaved changes.", type: "switch", badge: "Recommended", on: true },
      { label: "Rich text editing", description: "Enable formatting toolbar in text fields.", type: "switch", badge: "Editor", on: true },
    ],
  },
  {
    title: "Display",
    rows: [
      { label: "Color theme", description: "Choose your preferred color scheme.", type: "select", options: ["System", "Light", "Dark"], value: "System", badge: "Shared" },
      { label: "Sidebar position", description: "Set the navigation sidebar placement.", type: "select", options: ["Left", "Right"], value: "Left" },
      { label: "Reduce animations", description: "Minimize motion for accessibility.", type: "switch", badge: "Accessibility" },
      { label: "Show tooltips", description: "Display helpful hints on hover.", type: "switch", on: true },
    ],
  },
]

export function SettingsGeneralDisplayBlock() {
  const [open, setOpen] = useState({ General: true, Display: true })

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[672px]">
        <h1 className="text-2xl font-semibold">Workspace Preferences</h1>
        <p className="text-muted-foreground mt-1 text-sm">Adjust defaults that apply across your entire workspace.</p>

        <div className="mt-6 space-y-4">
          {SECTIONS.map((section) => (
            <Collapsible
              key={section.title}
              open={open[section.title as keyof typeof open]}
              onOpenChange={(value) => setOpen((current) => ({ ...current, [section.title]: value }))}
            >
              <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
                <CollapsibleTrigger className="hover:bg-muted/30 flex w-full items-center justify-between border-b px-4 py-3">
                  <span className="text-sm font-semibold">{section.title}</span>
                  <ChevronDownIcon className={cn("text-muted-foreground size-4 transition-transform", open[section.title as keyof typeof open] && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {section.rows.map((row, index) => (
                    <div key={row.label} className={cn("flex items-center gap-3 px-4 py-3.5", index < section.rows.length - 1 && "border-b")}>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1.5 text-sm font-medium">
                          {row.label}
                          {"badge" in row && row.badge ? <Badge variant="secondary" size="sm">{row.badge}</Badge> : null}
                        </p>
                        <p className="text-muted-foreground text-sm">{row.description}</p>
                      </div>
                      {row.type === "select" ? (
                        <Select defaultValue={row.value}>
                          <SelectTrigger size="sm" className="w-32"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {row.options?.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Switch defaultChecked={"on" in row && Boolean(row.on)} aria-label={row.label} />
                      )}
                    </div>
                  ))}
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SettingsGeneralDisplayBlock
