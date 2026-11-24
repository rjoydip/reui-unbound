import { useState } from "react"
import {
  ChevronDownIcon,
  CircleCheckIcon,
  CircleXIcon,
  Code2Icon,
  CopyIcon,
  CreditCardIcon,
  DatabaseIcon,
  GitBranchIcon,
  HandIcon,
  HashIcon,
  HelpCircleIcon,
  LayersIcon,
  LocateFixedIcon,
  MailIcon,
  MinusIcon,
  MoreHorizontalIcon,
  MousePointer2Icon,
  PencilIcon,
  PlayIcon,
  PlusIcon,
  RotateCcwIcon,
  SparklesIcon,
  Trash2Icon,
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { cn } from "cn"

type RunState = "success" | "skipped" | "failed"
type Step = {
  id: string
  name: string
  description: string
  icon: LucideIcon
  tone: string
  run: RunState
  meta: string
  branch: string
  x: number
  y: number
}

const STEPS: Step[] = [
  { id: "stripe", name: "Stripe", description: "Invoice 3 days overdue", icon: CreditCardIcon, tone: "text-violet-500", run: "success", meta: "inv_9412 • EUR 4,180", branch: "Entry", x: 515, y: 18 },
  { id: "neon", name: "Neon", description: "Runs query_db on invoices", icon: DatabaseIcon, tone: "text-emerald-500", run: "success", meta: "1 row • 42ms", branch: "Entry", x: 515, y: 138 },
  { id: "claude", name: "Claude Sonnet 5", description: "Triages the account", icon: SparklesIcon, tone: "text-orange-500", run: "success", meta: "1,842 tokens • USD 0.031", branch: "Entry", x: 515, y: 266 },
  { id: "guardrail", name: "PII Guardrail", description: "Scans outbound text", icon: Code2Icon, tone: "text-foreground", run: "skipped", meta: "Branch not taken", branch: "No reply", x: 255, y: 390 },
  { id: "promise", name: "Stripe", description: "Offers a payment plan", icon: CreditCardIcon, tone: "text-violet-500", run: "success", meta: "3 installments • EUR 1,393", branch: "Promised", x: 515, y: 390 },
  { id: "dispute", name: "Stripe", description: "Pulls the dispute evidence", icon: CreditCardIcon, tone: "text-violet-500", run: "skipped", meta: "Branch not taken", branch: "Disputed", x: 790, y: 390 },
  { id: "slack", name: "Slack", description: "Posts to #collections", icon: HashIcon, tone: "text-sky-500", run: "skipped", meta: "Upstream skipped", branch: "No reply", x: 255, y: 524 },
  { id: "resend", name: "Resend", description: "Emails the terms to Maren", icon: MailIcon, tone: "text-foreground", run: "failed", meta: "Bounced • Retry queued", branch: "Promised", x: 515, y: 524 },
  { id: "clickup", name: "ClickUp", description: "Assigns Hanna Berg", icon: LayersIcon, tone: "text-rose-500", run: "skipped", meta: "Upstream skipped", branch: "Disputed", x: 790, y: 524 },
]

const MODELS = ["Opus 5", "Sonnet 5", "Haiku 4.5"]
const RUN_ICON: Record<RunState, LucideIcon> = { success: CircleCheckIcon, skipped: MinusIcon, failed: CircleXIcon }
const RUN_TONE: Record<RunState, string> = {
  success: "text-success",
  skipped: "text-muted-foreground",
  failed: "text-destructive",
}

function RunStatus({ step }: { step: Step }) {
  const Icon = RUN_ICON[step.run]
  return <span className="flex items-center gap-1.5"><Icon className={cn("size-3.5", RUN_TONE[step.run])} />{step.meta}</span>
}

function StepCard({ step, selected, onSelect, onDetails }: { step: Step; selected: boolean; onSelect: () => void; onDetails: () => void }) {
  const RunIcon = RUN_ICON[step.run]
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onSelect() } }}
      style={{ left: step.x, top: step.y }}
      className={cn(
        "absolute w-[250px] cursor-pointer rounded-xl border bg-card text-left shadow-xs transition-shadow outline-none hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring",
        selected && "ring-2 ring-foreground/25"
      )}
    >
      <div className="flex items-start gap-2.5 p-3">
        <IconTile variant="outline" size="sm" className={cn("mt-0.5 size-8 rounded-lg", step.tone)}>
          <step.icon />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-medium">{step.name}</div>
          <div className="truncate text-xs text-muted-foreground">{step.description}</div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-xs" className="text-muted-foreground" aria-label={`Actions for ${step.name}`} onClick={(event) => event.stopPropagation()}>
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44" onClick={(event) => event.stopPropagation()}>
            <DropdownMenuItem onClick={onDetails}><PlayIcon /> View details</DropdownMenuItem>
            <DropdownMenuItem onClick={onDetails}><PencilIcon /> Edit step</DropdownMenuItem>
            <DropdownMenuItem><GitBranchIcon /> Add branch</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-1.5 border-t px-3 py-1.5 text-xs text-muted-foreground">
        <RunIcon className={cn("size-3.5", RUN_TONE[step.run])} />
        <span className="truncate">{step.meta}</span>
      </div>
    </div>
  )
}

export function Flow2Block() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [model, setModel] = useState("Sonnet 5")
  const [zoom, setZoom] = useState(100)
  const [ran, setRan] = useState(false)
  const steps = STEPS.map((step) => step.id === "claude" ? { ...step, name: `Claude ${model}` } : step)
  const selected = steps.find((step) => step.id === selectedId) ?? null

  return (
    <div className="flex h-svh min-h-[560px] flex-col bg-background text-foreground">
      <header className="flex h-13 shrink-0 items-center gap-2 border-b px-4">
        <nav className="flex items-center gap-1.5 text-sm">
          <span className="text-muted-foreground">Agents</span>
          <span className="text-muted-foreground/60">/</span>
          <span className="font-medium">Collections Agent</span>
        </nav>
        <span className="hidden items-center gap-1.5 text-xs text-muted-foreground sm:flex">
          9 steps, 3 paths
          <span className="text-muted-foreground/50">•</span>
          <Avatar className="size-5"><AvatarFallback className="bg-primary/15 text-[9px] text-primary">IM</AvatarFallback></Avatar>
          Draft 4
        </span>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon-sm" aria-label="Help"><HelpCircleIcon /></Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5"><SparklesIcon className="text-orange-500" /> {model} <ChevronDownIcon className="text-muted-foreground" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              {MODELS.map((option) => (
                <DropdownMenuItem key={option} onClick={() => setModel(option)}>
                  {option}{model === option && <CircleCheckIcon className="ml-auto" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm"><PlusIcon data-icon="inline-start" /> Add step</Button>
          <Button variant="outline" size="sm" onClick={() => setRan(true)}><PlayIcon data-icon="inline-start" /> Run test</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon-sm" aria-label="Agent actions"><MoreHorizontalIcon /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Last run</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setRan(false)}><RotateCcwIcon /> Clear results</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRan(false)}><Trash2Icon /> Restore sample</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Agent</DropdownMenuLabel>
              <DropdownMenuItem><CopyIcon /> Copy as JSON</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="relative flex-1 overflow-hidden bg-muted/20">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative shrink-0" style={{ width: 1120, height: 660, transform: `scale(${zoom / 100})` }}>
            <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 1120 660" fill="none" aria-hidden>
              <path d="M640 96 V138 M640 216 V266 M640 344 V368 H380 V390 M640 368 V390 M640 368 H915 V390" stroke="var(--color-border)" strokeWidth="1.5" />
              <path d="M380 468 V524 M640 468 V524 M915 468 V524" stroke="var(--color-border)" strokeWidth="1.5" />
              <path d="M380 602 V612 M640 602 V612 M915 602 V612" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="3 4" />
              {[96, 138, 216, 266, 344, 390, 468, 524, 602].map((y) => <g key={y}><circle cx="640" cy={y} r="2" fill="var(--color-muted-foreground)" /></g>)}
              {[380, 915].map((x) => <g key={x}><circle cx={x} cy="390" r="2" fill="var(--color-muted-foreground)" /><circle cx={x} cy="524" r="2" fill="var(--color-muted-foreground)" /></g>)}
            </svg>
            {[{ label: "No reply", x: 380 }, { label: "Promised", x: 640 }, { label: "Disputed", x: 915 }].map((branch) => (
              <span key={branch.label} style={{ left: branch.x }} className="absolute top-[362px] -translate-x-1/2 rounded-md border bg-card px-1.5 py-0.5 text-[11px] text-muted-foreground">{branch.label}</span>
            ))}
            {steps.map((step) => (
              <StepCard key={step.id} step={step} selected={selectedId === step.id} onSelect={() => setSelectedId(step.id)} onDetails={() => setSelectedId(step.id)} />
            ))}
            {[255, 515, 790].map((x) => (
              <button key={x} type="button" style={{ left: x }} className="absolute top-[610px] flex size-7 -translate-x-1/2 items-center justify-center rounded-full border bg-card text-muted-foreground shadow-xs transition-colors hover:bg-muted hover:text-foreground" aria-label="Add step">
                <PlusIcon className="size-3.5" />
              </button>
            ))}
          </div>        </div>

        {ran && (
          <div className="absolute top-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs shadow-sm">
            <CircleCheckIcon className="size-3.5 text-success" /> 4 passed
            <CircleXIcon className="size-3.5 text-destructive" /> 1 failed
            <MinusIcon className="size-3.5 text-muted-foreground" /> 4 skipped
            <Badge variant="outline" size="sm" className="ml-1">Test run</Badge>
          </div>
        )}

        <div className="absolute bottom-3 left-3 flex items-center gap-0.5 rounded-lg border bg-card/90 p-0.5 shadow-xs backdrop-blur">
          <Button variant="ghost" size="icon-sm" aria-label="Select tool" className="bg-muted"><MousePointer2Icon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Pan tool"><HandIcon /></Button>
          <Separator orientation="vertical" className="mx-0.5 h-4" />
          <Button variant="ghost" size="icon-sm" aria-label="Zoom out" onClick={() => setZoom((value) => Math.max(50, value - 10))}><MinusIcon /></Button>
          <Button variant="ghost" size="sm" className="w-14 font-normal tabular-nums" onClick={() => setZoom(100)}>{zoom}%</Button>
          <Button variant="ghost" size="icon-sm" aria-label="Zoom in" onClick={() => setZoom((value) => Math.min(200, value + 10))}><PlusIcon /></Button>
          <Separator orientation="vertical" className="mx-0.5 h-4" />
          <Button variant="ghost" size="icon-sm" aria-label="Fit view" onClick={() => setZoom(75)}><LocateFixedIcon /></Button>
        </div>
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60">React Flow</span>
      </div>

      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelectedId(null)}>
        <SheetContent className="w-full gap-0 p-0 sm:max-w-[360px]">
          {selected && (
            <>
              <SheetHeader className="border-b px-4 py-3.5">
                <SheetTitle className="flex items-center gap-2 text-sm">
                  <IconTile variant="outline" size="xs" className={selected.tone}><selected.icon /></IconTile>
                  {selected.name}
                </SheetTitle>
                <SheetDescription className="text-xs">Agent step · {selected.branch}</SheetDescription>
              </SheetHeader>
              <div className="flex-1 space-y-4 overflow-y-auto p-4">
                <label className="block space-y-1.5">
                  <span className="text-xs text-muted-foreground">Instructions</span>
                  <Input defaultValue={selected.description} />
                </label>
                <div className="space-y-1.5">
                  <span className="text-xs text-muted-foreground">App</span>
                  <Select defaultValue={selected.name}>
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>{["Stripe", "Neon", "Claude", "Slack", "Resend", "ClickUp", "PII Guardrail"].map((app) => <SelectItem key={app} value={app}>{app}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs text-muted-foreground">Branch</span>
                  <Select defaultValue={selected.branch}>
                    <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>{["Entry", "No reply", "Promised", "Disputed"].map((branch) => <SelectItem key={branch} value={branch}>{branch}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="rounded-lg border bg-muted/30 p-3">
                  <div className="mb-1 text-xs font-medium">Last test run</div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <RunStatus step={selected} />
                    <span>{selected.run === "skipped" ? "Not taken" : "Passed"}</span>
                  </div>
                </div>
              </div>
              <SheetFooter className="flex-row gap-2 border-t p-3 sm:justify-end">
                <Button variant="outline" size="sm" onClick={() => setSelectedId(null)}>Cancel</Button>
                <Button size="sm" onClick={() => setSelectedId(null)}>Save step</Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Flow2Block
