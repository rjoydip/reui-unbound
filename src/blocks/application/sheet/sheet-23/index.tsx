import { useState } from "react"
import { SearchIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "cn"

const INTEGRATIONS = [
  { name: "Neon", kind: "Postgres", tone: "bg-emerald-100 text-emerald-700" },
  { name: "PlanetScale", kind: "MySQL", tone: "bg-foreground text-background" },
  { name: "Supabase", kind: "Postgres", tone: "bg-emerald-500 text-white" },
  { name: "Redis", kind: "Redis 7", tone: "bg-red-600 text-white" },
  { name: "BigQuery", kind: "Google Cloud", tone: "bg-sky-500 text-white" },
  { name: "Stripe", kind: "REST API", tone: "bg-violet-500 text-white" },
  { name: "GitHub", kind: "REST API", tone: "bg-foreground text-background" },
  { name: "Linear", kind: "GraphQL API", tone: "bg-indigo-500 text-white" },
  { name: "Slack", kind: "Web API", tone: "bg-emerald-500 text-white" },
  { name: "Google Drive", kind: "Sheets API", tone: "bg-emerald-500 text-white" },
  { name: "Dropbox", kind: "Files API", tone: "bg-blue-600 text-white" },
]

const STEPS = ["Source", "Configure", "Datasets"]

export function Sheet23Block() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState("")
  const integrations = INTEGRATIONS.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[640px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-start gap-2 p-3">
          <div>
            <p className="text-sm font-semibold">New Connection</p>
            <p className="text-muted-foreground text-xs">Pick what to connect.</p>
          </div>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>

        <div className="flex items-center gap-2 px-4 pb-3 text-xs">
          {STEPS.map((step, index) => (
            <div key={step} className="flex flex-1 items-center gap-2">
              <span className={cn("flex size-5 items-center justify-center rounded-full border text-[10px]", index === 0 ? "bg-foreground text-background border-transparent" : "text-muted-foreground")}>{index + 1}</span>
              <span className={index === 0 ? "font-medium" : "text-muted-foreground"}>{step}</span>
              {index < STEPS.length - 1 ? <span className="bg-border h-px flex-1" /> : null}
            </div>
          ))}
        </div>

        <div className="px-4">
          <div className="flex items-center gap-2 rounded-lg border px-2.5">
            <SearchIcon className="text-muted-foreground size-4" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search integrations…" aria-label="Search integrations" className="h-8 min-w-0 flex-1 bg-transparent text-sm outline-none" />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-3 gap-2">
            {integrations.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelected(item.name)}
                className={cn("flex items-center gap-2.5 rounded-lg border p-2.5 text-left transition-colors", selected === item.name ? "bg-muted/60 border-foreground/40" : "hover:bg-muted/40")}
              >
                <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-md text-xs font-bold", item.tone)}>{item.name.slice(0, 1)}</span>
                <span>
                  <span className="block text-sm font-medium">{item.name}</span>
                  <span className="text-muted-foreground block text-xs">{item.kind}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 border-t p-3">
          <p className="text-muted-foreground text-xs">{selected ? `${selected} selected` : "Pick an integration to continue"}</p>
          <Button variant="ghost" size="sm" className="ml-auto">Cancel</Button>
          <Button size="sm" disabled={!selected}>Continue <span aria-hidden="true">›</span></Button>
        </div>
      </aside>
    </div>
  )
}

export default Sheet23Block
