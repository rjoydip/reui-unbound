import { useState } from "react"
import { CheckIcon, InfoIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const TOGGLES = [
  { label: "Auto Save", description: "Save view changes automatically.", on: true },
  { label: "Smart Filters", description: "Surface useful filter suggestions.", on: true },
  { label: "Group Totals", description: "Show counts inside grouped sections." },
  { label: "Pinned Columns", description: "Keep priority columns visible while scrolling.", on: true },
]

const LAYOUTS = [
  { name: "Command Deck", kind: "left" },
  { name: "Insight Rail", kind: "right" },
]

export function SheetViewCustomizerBlock() {
  const [layout, setLayout] = useState("Command Deck")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[400px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 border-b p-3">
          <span className="text-sm font-semibold">Customize View</span>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {TOGGLES.map((toggle) => (
            <div key={toggle.label} className="flex items-center gap-3 border-b px-3 py-2.5">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{toggle.label}</p>
                <p className="text-muted-foreground text-sm">{toggle.description}</p>
              </div>
              <Switch defaultChecked={toggle.on} aria-label={toggle.label} />
            </div>
          ))}

          <div className="p-3">
            <p className="flex items-center gap-1 text-sm font-medium">Layout Mode <InfoIcon className="text-muted-foreground size-3.5" /></p>
            <p className="text-muted-foreground text-sm">Choose how the review workspace is framed.</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {LAYOUTS.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => setLayout(option.name)}
                  className={cn(
                    "rounded-lg border p-2 text-center transition-colors",
                    layout === option.name ? "border-foreground/50" : "hover:bg-muted/40"
                  )}
                >
                  <div className="bg-muted/40 flex h-20 items-center justify-center rounded-md border">
                    <div className="flex h-12 w-24 gap-1 rounded border bg-card p-1">
                      {option.kind === "left" ? (
                        <>
                          <span className="bg-muted w-5 rounded-sm" />
                          <span className="flex flex-1 flex-col gap-1"><span className="bg-muted h-1.5 rounded-full" /><span className="bg-muted h-1.5 w-3/4 rounded-full" /></span>
                        </>
                      ) : (
                        <>
                          <span className="flex flex-1 flex-col gap-1"><span className="bg-muted h-1.5 rounded-full" /><span className="bg-muted h-1.5 w-3/4 rounded-full" /></span>
                          <span className="bg-muted w-5 rounded-sm" />
                        </>
                      )}
                    </div>
                  </div>
                  <p className="mt-1.5 text-sm font-medium">{option.name}</p>
                  {layout === option.name ? <CheckIcon className="mx-auto mt-0.5 size-3.5" /> : null}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t p-3">
          <Button variant="outline">Reset</Button>
          <Button>Save</Button>
        </div>
      </aside>
    </div>
  )
}

export default SheetViewCustomizerBlock
