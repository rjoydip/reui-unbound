import { useState } from "react"
import { CopyIcon, LockIcon, RefreshCwIcon, RowsIcon, TableIcon, XIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ROWS = [
  ["ch_Ekbd9MUMk", "635.92", "EUR", "eur", "succeeded", "l•••••@example.org", "2026-…"],
  ["ch_dnfxiEKXkQ", "7,726.39", "GBP", "gbp", "pending", "h•••••@example.org", "2026-…"],
  ["ch_yenN4DnMcC", "19,371.04", "EUR", "eur", "succeeded", "l•••••@example.org", "2026-…"],
  ["ch_kDe5FJTF6X", "17,572.91", "USD", "usd", "succeeded", "j•••••@example.com", "2026-…"],
  ["ch_Wtkg3HNrAi", "4,144.14", "USD", "usd", "failed", "j•••••@example.com", "2026-…"],
  ["ch_nGfXSy6Hru", "16,189.68", "EUR", "eur", "succeeded", "l•••••@example.org", "2026-…"],
  ["ch_w628ykePVJ", "16,850.16", "EUR", "eur", "succeeded", "r•••••@example.net", "2026-…"],
  ["ch_bJAN7bUA3u", "13,499.09", "GBP", "gbp", "succeeded", "a•••••@example.com", "2026-…"],
]

export function Sheet24Block() {
  const [tab, setTab] = useState("Rows")
  const [mask, setMask] = useState(true)

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[620px] flex-col overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center gap-2 px-3 pt-2">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">CON-102 <CopyIcon className="size-3" /></span>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>
        <div className="px-4 pb-2">
          <p className="flex items-center gap-2 text-lg font-semibold">
            <span className="bg-violet-500 flex size-8 items-center justify-center rounded-md text-xs font-bold text-white">S</span>
            stripe-live <Badge variant="success-light" size="sm">Healthy</Badge>
          </p>
          <p className="text-muted-foreground mt-0.5 text-xs">Stripe REST API · Production · 4 of 6 datasets linked</p>
        </div>

        <div className="px-4 pb-2">
          <Select defaultValue="charges">
            <SelectTrigger className="w-full"><TableIcon /><SelectValue /></SelectTrigger>
            <SelectContent>{["charges", "customers", "invoices", "subscriptions"].map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2 px-4">
          <Tabs value={tab} onValueChange={setTab} className="flex-1">
            <TabsList variant="line" className="h-8 gap-3">
              {["Rows", "Schema"].map((item) => <TabsTrigger key={item} value={item} className="gap-1.5 px-0">{item === "Rows" ? <RowsIcon className="size-3.5" /> : <TableIcon className="size-3.5" />}{item}</TabsTrigger>)}
            </TabsList>
          </Tabs>
          <label className="flex items-center gap-1.5 text-xs">Mask PII <Switch checked={mask} onCheckedChange={setMask} aria-label="Mask PII" /></label>
          <Button variant="ghost" size="icon-xs" aria-label="Toggle code"><span className="text-xs">&lt;&gt;</span></Button>
          <Button variant="ghost" size="icon-xs" aria-label="Refresh"><RefreshCwIcon /></Button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto p-4">
          <div className="overflow-hidden rounded-lg border">
            <div className="text-muted-foreground grid grid-cols-[1.6fr_1fr_0.8fr_1fr_1.8fr_1fr] gap-2 border-b bg-muted/30 px-3 py-1.5 text-xs">
              {["id", "amount", "currency", "status", "receipt_email", "created"].map((column) => (
                <span key={column} className="flex items-center gap-1 truncate">{column}{column === "id" ? " 🔑" : null}{column === "receipt_email" ? <LockIcon className="size-3" /> : null}</span>
              ))}
            </div>
            {ROWS.map((row) => (
              <div key={row[0]} className="grid grid-cols-[1.6fr_1fr_0.8fr_1fr_1.8fr_1fr] gap-2 border-b px-3 py-1.5 text-xs last:border-0">
                {row.map((cell, cellIndex) => (
                  <span key={cellIndex} className={cellIndex === 5 ? "text-muted-foreground" : undefined}>{cellIndex === 5 && mask ? "••••" : cell}</span>
                ))}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-2 text-xs">8 of 7,120,554 rows, sampled 14:20 UTC</p>
        </div>
      </aside>
    </div>
  )
}

export default Sheet24Block
