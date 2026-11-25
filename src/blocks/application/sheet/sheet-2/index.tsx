import { useState } from "react"
import {
  BookOpenIcon,
  BoxIcon,
  DatabaseIcon,
  HelpCircleIcon,
  KeyboardIcon,
  LifeBuoyIcon,
  SearchIcon,
  ShieldIcon,
  SparklesIcon,
  UploadIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const GROUPS = [
  {
    title: "Suggested",
    items: [
      { label: "Workspace basics", description: "Set up members, roles, and invite rules.", icon: BoxIcon, badge: "New" },
      { label: "Data model", description: "Understand records, fields, and views.", icon: DatabaseIcon },
      { label: "Permissions", description: "Review access levels before inviting people.", icon: ShieldIcon },
    ],
  },
  {
    title: "Getting started",
    items: [
      { label: "Launch checklist", description: "Finish the first workspace setup steps.", icon: BookOpenIcon, badge: "6 steps" },
      { label: "Import data", description: "Bring contacts and tasks from CSV.", icon: UploadIcon },
      { label: "Automation guide", description: "Connect routine work to triggers.", icon: SparklesIcon, badge: "Updated" },
    ],
  },
]

export function Sheet2Block() {
  const [query, setQuery] = useState("")
  const groups = GROUPS.map((group) => ({
    ...group,
    items: group.items.filter((item) => `${item.label} ${item.description}`.toLowerCase().includes(query.toLowerCase())),
  })).filter((group) => group.items.length > 0)

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[440px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <span className="text-sm font-semibold">Help</span>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>
        <div className="border-b p-3">
          <div className="flex items-center gap-2 rounded-lg border px-2.5">
            <SearchIcon className="text-muted-foreground size-4" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides" aria-label="Search guides" className="h-8 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0" />
            <HelpCircleIcon className="text-muted-foreground size-4" />
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-3">
          {groups.map((group) => (
            <div key={group.title} className="mb-4">
              <p className="mb-2 text-sm font-medium">{group.title}</p>
              <div className="space-y-2">
                {group.items.map((item) => (
                  <button key={item.label} type="button" className="hover:bg-muted/50 flex w-full items-start gap-3 rounded-lg border p-3 text-left">
                    <span className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-md"><item.icon className="size-4" /></span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5 text-sm font-medium">
                        {item.label}
                        {item.badge ? <Badge variant={item.badge === "Updated" ? "warning-light" : "focus-light"} size="sm">{item.badge}</Badge> : null}
                      </span>
                      <span className="text-muted-foreground block text-sm">{item.description}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-1 border-t p-3 text-sm">
          {[
            { label: "Help center", icon: LifeBuoyIcon },
            { label: "Contact support", icon: HelpCircleIcon },
            { label: "Shortcuts", icon: KeyboardIcon },
            { label: "Terms and privacy", icon: ShieldIcon },
          ].map((item) => (
            <button key={item.label} type="button" className="hover:bg-muted/50 flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left">
              <item.icon className="text-muted-foreground size-4" />
              {item.label}
            </button>
          ))}
        </div>
      </aside>
    </div>
  )
}

export default Sheet2Block
