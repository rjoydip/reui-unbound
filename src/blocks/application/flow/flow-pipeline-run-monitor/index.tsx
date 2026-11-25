import { useState } from "react"
import {
  ApertureIcon,
  BookOpenIcon,
  BoxesIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleXIcon,
  ClockIcon,
  CreditCardIcon,
  FileTextIcon,
  HandIcon,
  HashIcon,
  InfoIcon,
  LifeBuoyIcon,
  MinusIcon,
  MousePointer2Icon,
  PlayIcon,
  PlusIcon,
  SendIcon,
  TriangleAlertIcon,
  WalletIcon,
  ZapIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { IconTile } from "@/components/kit/icon-tile"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

type NodeStatus = "success" | "failed" | "waiting" | "blocked" | "idle"
type Node = {
  id: string
  name: string
  sub: string
  icon: LucideIcon
  tone: string
  status: NodeStatus
  shape: "square" | "circle" | "wide"
  x: number
  y: number
}

const NODES: Node[] = [
  { id: "nightly", name: "Nightly", sub: "02:00 UTC", icon: ZapIcon, tone: "text-foreground", status: "success", shape: "square", x: 78, y: 265 },
  { id: "extract_stripe", name: "extract_stripe", sub: "2m 10s", icon: CreditCardIcon, tone: "text-violet-600", status: "success", shape: "square", x: 209, y: 115 },
  { id: "stripe_prod", name: "stripe_prod", sub: "Connection", icon: ZapIcon, tone: "text-foreground", status: "idle", shape: "circle", x: 209, y: 300 },
  { id: "extract_paypal", name: "extract_paypal", sub: "1m 48s", icon: WalletIcon, tone: "text-blue-600", status: "success", shape: "square", x: 209, y: 420 },
  { id: "paypal_eu", name: "paypal_eu", sub: "Connection", icon: SendIcon, tone: "text-foreground", status: "idle", shape: "circle", x: 209, y: 545 },
  { id: "dedupe_payments", name: "dedupe_payments", sub: "3m 12s", icon: BoxesIcon, tone: "text-red-500", status: "success", shape: "square", x: 339, y: 285 },
  { id: "unique_charge", name: "unique_charge", sub: "Test", icon: LifeBuoyIcon, tone: "text-foreground", status: "idle", shape: "circle", x: 339, y: 425 },
  { id: "reconcile_ledger", name: "reconcile_ledger", sub: "Duplicate charge id", icon: BookOpenIcon, tone: "text-foreground", status: "failed", shape: "square", x: 469, y: 115 },
  { id: "ledger_v3", name: "ledger_v3", sub: "Model", icon: ApertureIcon, tone: "text-foreground", status: "idle", shape: "circle", x: 469, y: 300 },
  { id: "build_invoices", name: "build_invoices", sub: "Blocked upstream", icon: FileTextIcon, tone: "text-foreground", status: "blocked", shape: "square", x: 724, y: 115 },
  { id: "publish_mrr", name: "publish_mrr", sub: "Awaiting Approval", icon: SendIcon, tone: "text-amber-500", status: "waiting", shape: "wide", x: 405, y: 430 },
  { id: "notify_finance", name: "notify_finance", sub: "Holds for Approval", icon: HashIcon, tone: "text-emerald-500", status: "blocked", shape: "square", x: 724, y: 430 },
]

const STATUS_RING: Record<NodeStatus, string> = {
  success: "border-success/60",
  failed: "border-destructive",
  waiting: "border-warning",
  blocked: "border-border",
  idle: "border-border border-dashed",
}

const STATUS_BUBBLE: Record<NodeStatus, { icon: LucideIcon; className: string } | null> = {
  success: { icon: CheckCircle2Icon, className: "bg-success text-white" },
  failed: { icon: CircleXIcon, className: "bg-destructive text-white" },
  waiting: { icon: ClockIcon, className: "bg-warning text-white" },
  blocked: { icon: ClockIcon, className: "bg-muted text-muted-foreground" },
  idle: null,
}

const RUN_CHIPS = [
  { key: "failed", label: "Failed", icon: CircleXIcon, className: "bg-destructive/10 text-destructive" },
  { key: "running", label: "2", icon: ClockIcon, className: "bg-warning/10 text-warning" },
  { key: "queued", label: "1", icon: InfoIcon, className: "bg-info/10 text-info" },
  { key: "success", label: "4", icon: CircleCheckIcon, className: "bg-success/10 text-success" },
]

export function FlowPipelineRunMonitorBlock() {
  const [selectedId, setSelectedId] = useState("publish_mrr")
  const [panelOpen, setPanelOpen] = useState(true)
  const [repair, setRepair] = useState(false)
  const [approved, setApproved] = useState(false)
  const [running, setRunning] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [tab, setTab] = useState("settings")
  const selected = NODES.find((node) => node.id === selectedId) ?? NODES[10]
  const selectedWait = selected.id === "publish_mrr" && !approved

  const openNode = (id: string) => { setSelectedId(id); setPanelOpen(true) }

  return (
    <div className="flex h-svh min-h-[560px] flex-col bg-background text-foreground">
      <header className="flex h-13 shrink-0 items-center gap-2 border-b px-4">
        <nav className="flex min-w-0 items-center gap-1.5 text-sm">
          <span className="text-muted-foreground">Pipelines</span>
          <span className="text-muted-foreground/60">/</span>
          <span className="font-medium">Nightly Ledger Sync</span>
        </nav>
        <span className="hidden items-center gap-1.5 text-xs text-muted-foreground md:flex">
          <span className="font-mono text-[11px]">run_3f9a1c</span>
          <span className="text-muted-foreground/50">•</span>
          <Avatar className="size-5"><AvatarFallback className="bg-primary/15 text-[9px] text-primary">IM</AvatarFallback></Avatar>
          02:00 UTC
        </span>
        <div className="mx-auto hidden items-center gap-1.5 lg:flex">
          {RUN_CHIPS.map((chip) => (
            <span key={chip.key} className={cn("flex h-6 items-center gap-1.5 rounded-md px-1.5 text-xs font-medium", chip.className)}>
              <chip.icon className="size-3.5" />
              {chip.label === "Failed" ? <>Failed <b className="tabular-nums">1</b></> : <b className="tabular-nums">{chip.label}</b>}
            </span>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon-sm" aria-label="Help"><CircleHelpIcon /></Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="outline" size="sm"><PlusIcon data-icon="inline-start" /> Add task</Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem><PlusIcon /> Add task</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRunning(false)}><MinusIcon /> Stop run</DropdownMenuItem>
              <DropdownMenuItem onClick={() => { setRepair(true); setRunning(false) }}><ClockIcon /> Retry failed task</DropdownMenuItem>
              <DropdownMenuItem onClick={() => { setRepair(false); setApproved(false) }}><CircleXIcon /> Clear results</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex">
            <Button size="sm" className="rounded-r-none" onClick={() => setRunning((value) => !value)}><PlayIcon data-icon="inline-start" /> {running ? "Pause" : "Run"}</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild><Button size="icon-sm" className="rounded-l-none border-l border-primary-foreground/20" aria-label="Run options"><ChevronDownIcon /></Button></DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem><PlusIcon /> Add task</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setRunning(false)}><MinusIcon /> Stop run</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => { setRepair(true); setRunning(false) }}><ClockIcon /> Retry failed task</DropdownMenuItem>
                <DropdownMenuItem onClick={() => { setRepair(false); setApproved(false) }}><CircleXIcon /> Clear results</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="relative flex-1 overflow-hidden bg-muted/20">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className={cn("absolute inset-y-0 left-0 transition-[right] duration-200", panelOpen ? "right-0 lg:right-[348px]" : "right-0")}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative shrink-0" style={{ width: 900, height: 620, transform: `scale(${zoom / 100})` }}>
              <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 900 620" fill="none" aria-hidden>
                <defs><marker id="f3-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 1 L6 4 L0 7" fill="var(--color-muted-foreground)" /></marker></defs>
                <g stroke="var(--color-border)" strokeWidth="1.5">
                  <path d="M130 291 H175 V141 H209" />
                  <path d="M130 291 H175 V446 H209" />
                  <path d="M261 141 H290 V311 H339" />
                  <path d="M261 446 H290 V311 H339" />
                  <path d="M391 311 H430 V141 H469" />
                  <path d="M391 311 H400 V461 H405" markerEnd="url(#f3-arrow)" />
                  <path d="M521 141 H724" markerEnd="url(#f3-arrow)" />
                  <path d="M655 461 H724" markerEnd="url(#f3-arrow)" />
                </g>
                <g stroke="var(--color-muted-foreground)" strokeWidth="1" strokeDasharray="2 4" opacity="0.6">
                  <path d="M235 167 V300" markerEnd="url(#f3-arrow)" />
                  <path d="M365 425 V337" markerEnd="url(#f3-arrow)" />
                  <path d="M495 300 V167" markerEnd="url(#f3-arrow)" />
                  <path d="M235 472 V545" markerEnd="url(#f3-arrow)" />
                </g>
                {[{ x: 235, y: 141 }, { x: 235, y: 446 }, { x: 261, y: 311 }, { x: 391, y: 311 }, { x: 521, y: 141 }].map((dot) => <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r="2" fill="var(--color-muted-foreground)" />)}
              </svg>
              {[
                { label: "1.2M rows", x: 300, y: 243 },
                { label: "1.5M rows", x: 428, y: 247 },
                { label: "384k rows", x: 300, y: 392 },
              ].map((edge) => (
                <span key={`${edge.label}-${edge.x}`} style={{ left: edge.x, top: edge.y }} className="absolute -translate-x-1/2 rounded-md border bg-card/90 px-1.5 py-0.5 text-[10px] whitespace-nowrap text-muted-foreground">{edge.label}</span>
              ))}
              {NODES.map((node) => {
                const status = node.id === "reconcile_ledger" && repair ? "success" : node.id === "publish_mrr" && approved ? "success" : node.status
                const badge = STATUS_BUBBLE[status]
                const isSelected = selectedId === node.id
                if (node.shape === "wide") {
                  return (
                    <div
                      key={node.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => openNode(node.id)}
                      onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openNode(node.id) } }}
                      style={{ left: node.x, top: node.y }}
                      className={cn("absolute flex h-[62px] w-[250px] cursor-pointer items-center gap-2 rounded-xl border-2 bg-card p-2.5 text-left shadow-xs outline-none", isSelected ? "border-warning ring-2 ring-warning/20" : "border-warning/70")}
                    >
                      <IconTile variant="outline" size="sm" className={cn("size-8", node.tone)}><node.icon /></IconTile>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-xs font-medium">{node.name}</span>
                        <span className="block truncate text-[11px] text-muted-foreground">{approved ? "Approved" : node.sub}</span>
                      </span>
                      {!approved ? <Button size="xs" className="bg-foreground text-background hover:bg-foreground/90" onClick={(event) => { event.stopPropagation(); setApproved(true) }}>Approve</Button> : <Badge variant="success-light" size="sm" radius="full">Approved</Badge>}
                    </div>
                  )
                }
                return (
                  <button key={node.id} type="button" onClick={() => openNode(node.id)} style={{ left: node.x, top: node.y }} className="absolute flex w-[110px] -translate-x-1/2 flex-col items-center gap-1.5 text-center outline-none">
                    <span className={cn("relative flex size-[52px] items-center justify-center border-2 bg-card transition-shadow", node.shape === "circle" ? "rounded-full" : "rounded-xl", STATUS_RING[status], isSelected && "ring-2 ring-foreground/20")}>
                      <node.icon className={cn("size-5", node.tone)} />
                      {badge && <span className={cn("absolute -right-1 -bottom-1 flex size-4 items-center justify-center rounded-full border-2 border-card", badge.className)}><badge.icon className="size-2.5" /></span>}
                    </span>
                    <span className="max-w-[120px]">
                      <span className={cn("block truncate text-xs font-medium", node.status === "blocked" && "text-muted-foreground")}>{node.name}</span>
                      <span className={cn("block truncate text-[11px] text-muted-foreground", node.id === "reconcile_ledger" && !repair && "text-destructive")}>{node.id === "reconcile_ledger" && repair ? "Retried" : node.sub}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-0.5 rounded-lg border bg-card/90 p-0.5 shadow-xs backdrop-blur">
            <Button variant="ghost" size="icon-sm" aria-label="Select" className="bg-muted"><MousePointer2Icon /></Button>
            <Button variant="ghost" size="icon-sm" aria-label="Pan"><HandIcon /></Button>
            <Separator orientation="vertical" className="mx-0.5 h-4" />
            <Button variant="ghost" size="icon-sm" aria-label="Zoom out" onClick={() => setZoom((value) => Math.max(50, value - 10))}><MinusIcon /></Button>
            <Button variant="ghost" size="sm" className="w-14 font-normal tabular-nums" onClick={() => setZoom(100)}>{zoom}%</Button>
            <Button variant="ghost" size="icon-sm" aria-label="Zoom in" onClick={() => setZoom((value) => Math.min(200, value + 10))}><PlusIcon /></Button>
            <Separator orientation="vertical" className="mx-0.5 h-4" />
            <Button variant="ghost" size="icon-sm" aria-label="Warnings"><TriangleAlertIcon /></Button>
          </div>
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60">React Flow</span>
        </div>

        {panelOpen && (
          <aside className="absolute inset-y-3 right-3 hidden w-[330px] flex-col overflow-hidden rounded-xl border bg-card shadow-lg lg:flex">
            <div className="flex items-center gap-2 border-b px-3 py-2.5">
              <IconTile variant="outline" size="xs" className={selected.tone}><selected.icon /></IconTile>
              <span className="truncate text-sm font-medium">{selected.id === "publish_mrr" && approved ? "publish_mrr" : selected.name}</span>
              <Badge variant={selectedWait ? "warning-light" : "success-light"} size="sm" radius="full" className="gap-1">
                {selectedWait ? <ClockIcon /> : <CheckCircle2Icon />}{selectedWait ? "Waiting" : "Ready"}
              </Badge>
              <Button variant="ghost" size="icon-xs" className="ml-auto" onClick={() => setPanelOpen(false)} aria-label="Close inspector"><XIcon /></Button>
            </div>
            <Tabs value={tab} onValueChange={setTab} className="flex min-h-0 flex-1 flex-col gap-0">
              <TabsList variant="line" className="mx-3 mt-2.5 w-fit gap-4">
                <TabsTrigger value="settings" className="px-0 pb-2">Settings</TabsTrigger>
                <TabsTrigger value="wiring" className="px-0 pb-2">Wiring</TabsTrigger>
              </TabsList>
              <TabsContent value="settings" className="min-h-0 flex-1 overflow-y-auto p-3.5">
                <div className="space-y-3.5">
                  <label className="block space-y-1 text-xs text-muted-foreground">Title<Input className="mt-1 h-8 text-sm text-foreground" defaultValue={selected.name} /></label>
                  <div className="space-y-1 text-xs text-muted-foreground">Service
                    <Select defaultValue="Google Cloud"><SelectTrigger className="mt-1 h-8 w-full text-sm text-foreground"><SelectValue /></SelectTrigger>
                      <SelectContent>{["Google Cloud", "Snowflake", "Postgres", "Stripe", "Slack"].map((service) => <SelectItem key={service} value={service}>{service}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <label className="block space-y-1 text-xs text-muted-foreground">currency<Input className="mt-1 h-8 text-sm text-foreground" defaultValue="USD" /></label>
                  <label className="block space-y-1 text-xs text-muted-foreground">approver<Input className="mt-1 h-8 text-sm text-foreground" defaultValue="finance-lead" /></label>
                  <div className={cn("flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs", selectedWait ? "border-warning/30 bg-warning/10 text-warning-foreground" : "border-success/30 bg-success/10 text-success-foreground")}>
                    {selectedWait ? <ClockIcon className="size-3.5" /> : <CheckCircle2Icon className="size-3.5" />}
                    {selectedWait ? "Awaiting Approval" : `${selected.name} is ready`}
                  </div>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">Edits stay on this task only. The next scheduled run starts from the saved definition.</p>
                </div>
              </TabsContent>
              <TabsContent value="wiring" className="min-h-0 flex-1 overflow-y-auto p-3.5">
                <div className="space-y-4 text-xs">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-[11px] tracking-wide text-muted-foreground uppercase">Inputs <CircleHelpIcon className="size-3" /></div>
                    <div className="ml-1 space-y-1.5 border-l pl-3">
                      <Badge variant="success-light" size="sm" radius="full">3m 12s</Badge>
                      <div className="flex items-center gap-2 rounded-lg border p-1.5"><BoxesIcon className="size-4 text-red-500" /><span className="flex-1">dedupe_payments</span><ChevronDownIcon className="size-3.5 text-muted-foreground" /></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-[11px] tracking-wide text-muted-foreground uppercase">Outputs <CircleHelpIcon className="size-3" /></div>
                    <div className="ml-1 space-y-1.5 border-l pl-3">
                      <Badge variant="warning-light" size="sm" radius="full">Holds for Approval</Badge>
                      <div className="flex items-center gap-2 rounded-lg border p-1.5 ring-1 ring-ring/30"><HashIcon className="size-4" /><span className="flex-1">notify_finance</span><ChevronDownIcon className="size-3.5 text-muted-foreground" /></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] tracking-wide text-muted-foreground uppercase">Attachments <Badge variant="outline" size="sm">Nothing wired</Badge></div>
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex gap-2 border-t p-3">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => setPanelOpen(false)}>Cancel</Button>
              <Button size="sm" className="flex-1 bg-foreground text-background hover:bg-foreground/90" onClick={() => setPanelOpen(false)}>Save task</Button>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}

export default FlowPipelineRunMonitorBlock
