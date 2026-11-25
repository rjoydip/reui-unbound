import { useState } from "react"
import { CopyIcon, EllipsisIcon, FolderPlusIcon, PlusIcon, Trash2Icon, XIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const CONDITIONS = [
  { field: "Path", op: "starts with", value: "/." },
  { field: "Path", op: "contains", value: "wp-" },
  { field: "User agent", op: "contains", value: "sqlmap" },
  { field: "User agent", op: "contains", value: "Nikto" },
]

export function Sheet18Block() {
  const [tab, setTab] = useState("Rule")

  return (
    <div className="bg-muted/40 text-foreground relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="bg-muted h-6 w-36 rounded-full blur-sm" />
      </div>
      <aside className="bg-card absolute top-3 right-3 bottom-3 flex w-[580px] flex-col overflow-hidden rounded-xl shadow-xl border">
        <div className="flex items-center gap-2 px-3 pt-2">
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">FW-1084 <CopyIcon className="size-3" /></span>
          <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Close"><XIcon /></Button>
        </div>
        <div className="px-4 pb-2">
          <h1 className="flex items-center gap-2 text-lg font-semibold">Block scanner probes <Badge variant="destructive-light" size="sm">Block</Badge></h1>
          <p className="text-muted-foreground text-xs">Priority 4 of 12 · Updated by Sarah 6d ago</p>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="gap-0">
          <TabsList variant="line" className="h-9 gap-4 border-b px-4">
            {["Rule", "Matches"].map((item) => <TabsTrigger key={item} value={item} className="px-0">{item}</TabsTrigger>)}
          </TabsList>
          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
            <div className="space-y-1"><p className="text-sm font-medium">Name</p><Input defaultValue="Block scanner probes" aria-label="Rule name" /></div>
            <div className="space-y-1"><p className="text-sm font-medium">Description</p><Input defaultValue="Dotfiles, CMS paths and attack tooling" aria-label="Rule description" /></div>

            <p className="text-sm font-medium">When</p>
            <div className="space-y-2">
              {CONDITIONS.map((condition, index) => (
                <div key={`${condition.field}-${condition.value}`} className="flex items-center gap-1.5">
                  <span className="text-muted-foreground w-6 text-xs">{index === 0 ? "Where" : "Or"}</span>
                  <Select defaultValue={condition.field}><SelectTrigger size="sm" className="w-32"><SelectValue /></SelectTrigger><SelectContent>{["Path", "User agent", "IP address", "Method"].map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}</SelectContent></Select>
                  <Select defaultValue={condition.op}><SelectTrigger size="sm" className="w-28"><SelectValue /></SelectTrigger><SelectContent>{["starts with", "contains", "equals", "matches"].map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
                  <Input defaultValue={condition.value} aria-label={`Condition ${index + 1}`} className="h-7 flex-1 font-mono text-xs" />
                  <Button variant="ghost" size="icon-xs" aria-label="Condition actions"><EllipsisIcon /></Button>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm"><PlusIcon />Add condition</Button>
              <Button variant="outline" size="sm"><FolderPlusIcon />Add group</Button>
              <button type="button" className="text-muted-foreground ml-auto text-xs">Clear all</button>
            </div>
            <div className="overflow-hidden rounded-lg border text-sm">
              <div className="text-muted-foreground flex items-center justify-between border-b px-3 py-1.5 text-xs">Expression <CopyIcon className="size-3.5" /></div>
              <p className="px-3 py-2 font-mono text-xs">http.path starts_with "/." or http.path contains "wp-" or http.user_agent contains "sqlmap" or http.user_agent contains "Nikto"</p>
            </div>

            <p className="text-sm font-medium">Then</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-muted/50 flex items-center gap-2 rounded-lg border p-2"><span>⊘ Block</span><span className="ml-auto size-2.5 rounded-full bg-foreground" /></div>
              <div className="flex items-center gap-2 rounded-lg border p-2"><span>Challenge</span><span className="ml-auto size-2.5 rounded-full border" /></div>
            </div>
          </div>
        </Tabs>

        <div className="flex items-center gap-2 border-t p-3">
          <Button variant="destructive" size="sm"><Trash2Icon />Delete</Button>
          <Button variant="ghost" size="sm" className="ml-auto">Cancel</Button>
          <Button size="sm">Save Rule</Button>
        </div>
      </aside>
    </div>
  )
}

export default Sheet18Block
