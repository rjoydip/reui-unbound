import { useState } from "react"
import { SearchIcon, XIcon } from "lucide-react"

import { Kbd } from "@/components/ui/kbd"

const SECTIONS = [
  {
    title: "Workspace",
    rows: [
      { label: "Open command menu", keys: ["Cmd", "K"] },
      { label: "Quick capture", keys: ["C"] },
      { label: "Switch workspace", keys: ["O", "then", "W"] },
      { label: "Toggle sidebar", keys: ["S"] },
      { label: "Open profile menu", keys: ["Shift", "P"] },
    ],
  },
  {
    title: "Navigation",
    rows: [
      { label: "Go to dashboard", keys: ["G", "then", "D"] },
      { label: "Go to projects", keys: ["G", "then", "P"] },
      { label: "Go to calendar", keys: ["G", "then", "C"] },
      { label: "Open selected project", keys: ["Enter"] },
      { label: "Open in new window", keys: ["Ctrl", "Enter"] },
    ],
  },
  {
    title: "Triage",
    rows: [
      { label: "Assign owner", keys: ["A"] },
      { label: "Set priority", keys: ["P"] },
      { label: "Set due date", keys: ["D"] },
      { label: "Add label", keys: ["L"] },
      { label: "Mark as blocked", keys: ["B"] },
    ],
  },
  {
    title: "Board",
    rows: [
      { label: "Move card left", keys: ["←"] },
      { label: "Move card right", keys: ["→"] },
      { label: "Open card", keys: ["Enter"] },
      { label: "Filter board", keys: ["F"] },
    ],
  },
]

export function Sheet3Block() {
  const [query, setQuery] = useState("")

  const sections = SECTIONS.map((section) => ({
    ...section,
    rows: section.rows.filter((row) => row.label.toLowerCase().includes(query.toLowerCase())),
  })).filter((section) => section.rows.length > 0)

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[440px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <span className="text-sm font-semibold">Keyboard Shortcuts</span>
          <button type="button" className="text-muted-foreground hover:text-foreground ml-auto" aria-label="Close"><XIcon className="size-4" /></button>
        </div>
        <div className="border-b p-3">
          <div className="flex items-center gap-2 rounded-lg border px-2.5">
            <SearchIcon className="text-muted-foreground size-4" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search shortcuts" aria-label="Search shortcuts" className="h-8 min-w-0 flex-1 bg-transparent text-sm outline-none" />
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-3">
          {sections.map((section) => (
            <div key={section.title} className="mb-5">
              <p className="text-muted-foreground mb-1 text-[11px] font-medium uppercase tracking-wide">{section.title}</p>
              {section.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-3 py-1.5 text-sm">
                  {row.label}
                  <span className="flex items-center gap-1">
                    {row.keys.map((key) => key === "then" ? <span key={key} className="text-muted-foreground text-xs">then</span> : <Kbd key={key}>{key}</Kbd>)}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}

export default Sheet3Block
