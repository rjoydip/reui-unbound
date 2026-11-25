import { useState } from "react"
import {
  Building2Icon,
  CheckCircle2Icon,
  CircleDashedIcon,
  CircleXIcon,
  CopyIcon,
  GitBranchIcon,
  HandIcon,
  HelpCircleIcon,
  LockIcon,
  MailIcon,
  MinusIcon,
  MousePointer2Icon,
  MoreHorizontalIcon,
  PlusIcon,
  Redo2Icon,
  RotateCcwIcon,
  Undo2Icon,
  WebhookIcon,
  ZapIcon,
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
import { Kbd } from "@/components/ui/kbd"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { cn } from "cn"

type Status = "success" | "failed" | "skipped" | "idle"

type Step = {
  id: string
  title: string
  subtitle: string
  icon: LucideIcon
  owner: string
  initials: string
  duration: string
  status: Status
  kind: "Trigger" | "Condition" | "Action"
  x: number
  y: number
}

const STEPS: Step[] = [
  { id: "form", title: "Form submitted", subtitle: "Webhook: demo.request", icon: WebhookIcon, owner: "Tomás Rivera", initials: "TR", duration: "0.2s", status: "success", kind: "Trigger", x: 80, y: 262 },
  { id: "enterprise", title: "Plan is Enterprise", subtitle: "company.size > 200", icon: GitBranchIcon, owner: "Ines Marchetti", initials: "IM", duration: "0.1s", status: "success", kind: "Condition", x: 330, y: 262 },
  { id: "enrich", title: "Enrich company", subtitle: "Clearbit lookup", icon: Building2Icon, owner: "Tomás Rivera", initials: "TR", duration: "8.0s", status: "failed", kind: "Action", x: 610, y: 140 },
  { id: "deal", title: "Create deal", subtitle: "HubSpot pipeline: Inbound", icon: ZapIcon, owner: "Maren Holt", initials: "MH", duration: "Not run", status: "idle", kind: "Action", x: 890, y: 140 },
  { id: "sales", title: "Notify sales", subtitle: "Slack #inbound-leads", icon: MailIcon, owner: "Priya Nandakumar", initials: "PN", duration: "Not run", status: "skipped", kind: "Action", x: 610, y: 392 },
]

const OWNERS = ["Tomás Rivera", "Ines Marchetti", "Maren Holt", "Priya Nandakumar"]

const STATUS: Record<Status, { label: string; icon: LucideIcon; className: string }> = {
  success: { label: "Success", icon: CheckCircle2Icon, className: "success-light" },
  failed: { label: "Failed", icon: CircleXIcon, className: "destructive-light" },
  skipped: { label: "Skipped", icon: MinusIcon, className: "secondary" },
  idle: { label: "Idle", icon: CircleDashedIcon, className: "outline" },
}

const SHORTCUTS = [
  ["Select", "V"], ["Pan", "H"], ["Zoom in", "+"], ["Zoom out", "-"], ["Zoom to fit", "⇧1"],
  ["Actual size", "⇧0"], ["Undo", "Ctrl Z"], ["Redo", "Ctrl ⇧ Z"], ["Delete step", "Backspace"],
]

function StepCard({ step, selected, onSelect }: { step: Step; selected: boolean; onSelect: () => void }) {
  const status = STATUS[step.status]
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{ left: step.x, top: step.y }}
      className={cn(
        "absolute w-[220px] rounded-xl border bg-card text-left shadow-xs transition-shadow outline-none hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring",
        selected && "ring-2 ring-foreground/25"
      )}
    >
      <div className="flex items-center gap-2.5 p-3">
        <IconTile variant="solid" size="sm" className="size-8 rounded-lg">
          <step.icon />
        </IconTile>
        <div className="min-w-0">
          <div className="truncate text-sm font-medium">{step.title}</div>
          <div className="truncate text-xs text-muted-foreground">{step.subtitle}</div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 border-t px-3 py-1.5">
        <span className="flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
          <Avatar className="size-4"><AvatarFallback className="text-[8px]">{step.initials}</AvatarFallback></Avatar>
          <span className="truncate">{step.duration}</span>
        </span>
        <Badge variant={status.className as "success-light"} size="sm" radius="full">
          <status.icon /> {status.label}
        </Badge>
      </div>
    </button>
  )
}

export function FlowAutomationBuilderBlock() {
  const [steps, setSteps] = useState(STEPS)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [zoom, setZoom] = useState(100)
  const [snap, setSnap] = useState(true)
  const [locked, setLocked] = useState(false)
  const selected = steps.find((step) => step.id === selectedId) ?? null

  const addStep = () => {
    if (steps.some((step) => step.id === "new-step")) return
    const step: Step = { id: "new-step", title: "New step", subtitle: "Choose what happens next", icon: ZapIcon, owner: "Ines Marchetti", initials: "IM", duration: "Not run", status: "idle", kind: "Action", x: 890, y: 392 }
    setSteps((prev) => [...prev, step])
    setSelectedId(step.id)
  }

  return (
    <div className="flex h-svh min-h-[560px] flex-col bg-background text-foreground">
      <header className="flex h-13 shrink-0 items-center gap-2 border-b px-4">
        <nav className="flex min-w-0 items-center gap-1.5 text-sm">
          <span className="text-muted-foreground">Workflows</span>
          <span className="text-muted-foreground/60">/</span>
          <span className="font-medium">Lead Routing</span>
        </nav>
        <span className="hidden items-center gap-1.5 text-xs text-muted-foreground sm:flex">
          {steps.length} steps, 4 connections
          <span className="text-muted-foreground/50">•</span>
          <Avatar className="size-5"><AvatarFallback className="bg-primary/15 text-[9px] text-primary">IM</AvatarFallback></Avatar>
          2h ago
        </span>
        <div className="ml-auto flex items-center gap-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Keyboard shortcuts"><HelpCircleIcon /></Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-72 p-0">
              <ScrollArea className="h-[330px]">
                <div className="px-3 py-2.5 text-sm font-medium">Shortcuts</div>
                <div className="space-y-0.5 px-2 pb-2">
                  {SHORTCUTS.map(([label, keys]) => (
                    <div key={label} className="flex items-center justify-between rounded-sm px-1.5 py-1 text-xs text-muted-foreground">
                      {label}<Kbd>{keys}</Kbd>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="sm" onClick={addStep}><PlusIcon data-icon="inline-start" /> Add step</Button>
          <Button variant="ghost" size="sm"><CheckCircle2Icon data-icon="inline-start" /> Update</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon-sm" aria-label="Workflow actions"><MoreHorizontalIcon /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Canvas</DropdownMenuLabel>
              <DropdownMenuItem onSelect={(event) => { event.preventDefault(); setSnap((value) => !value) }}>
                <MousePointer2Icon /> Snap to grid {snap && <CheckCircle2Icon className="ml-auto" />}
              </DropdownMenuItem>
              <DropdownMenuItem><RotateCcwIcon /> Reset layout</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="font-mono text-[11px] font-normal">wf_8k2m4p</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setSelectedId(steps[0]?.id ?? null)}><MousePointer2Icon /> Select all steps</DropdownMenuItem>
              <DropdownMenuItem><CopyIcon /> Copy as JSON</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="relative flex-1 overflow-hidden bg-muted/20">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative shrink-0" style={{ width: 1120, height: 640, transform: `scale(${zoom / 100})` }}>
            <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 1120 640" fill="none" aria-hidden>
              <path d="M300 305 H330" stroke="var(--color-border)" strokeWidth="1.5" />
              <path d="M550 305 H580 V183 H610" stroke="var(--color-border)" strokeWidth="1.5" />
              <path d="M550 305 H580 V435 H610" stroke="var(--color-border)" strokeWidth="1.5" />
              <path d="M830 183 H890" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="300" cy="305" r="2" fill="var(--color-muted-foreground)" />
              <circle cx="550" cy="305" r="2" fill="var(--color-muted-foreground)" />
              <circle cx="610" cy="183" r="2" fill="var(--color-muted-foreground)" />
              <circle cx="830" cy="183" r="2" fill="var(--color-muted-foreground)" />
              <circle cx="890" cy="183" r="2" fill="var(--color-muted-foreground)" />
              <circle cx="610" cy="435" r="2" fill="var(--color-muted-foreground)" />
            </svg>
            <span className="absolute left-[580px] top-[231px] -translate-x-1/2 rounded-md border bg-card px-1.5 py-0.5 text-[11px] text-muted-foreground">Yes</span>
            <span className="absolute left-[580px] top-[381px] -translate-x-1/2 rounded-md border bg-card px-1.5 py-0.5 text-[11px] text-muted-foreground">No</span>
            {steps.map((step) => (
              <StepCard key={step.id} step={step} selected={selectedId === step.id} onSelect={() => setSelectedId(step.id)} />
            ))}
          </div>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-0.5 rounded-lg border bg-card/90 p-0.5 shadow-xs backdrop-blur">
          <Button variant="ghost" size="icon-sm" aria-label="Select tool" className="bg-muted"><MousePointer2Icon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Pan tool"><HandIcon /></Button>
          <Separator orientation="vertical" className="mx-0.5 h-4" />
          <Button variant="ghost" size="icon-sm" aria-label="Zoom out" onClick={() => setZoom((value) => Math.max(50, value - 10))}><MinusIcon /></Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="w-14 font-normal tabular-nums">{zoom}%</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start" className="w-44">
              <DropdownMenuItem onClick={() => setZoom(75)}>Zoom to fit <span className="ml-auto text-xs text-muted-foreground">⇧1</span></DropdownMenuItem>
              <DropdownMenuItem onClick={() => setZoom(50)}>Zoom to 50%</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setZoom(100)}>Zoom to 100% <span className="ml-auto text-xs text-muted-foreground">⇧0</span></DropdownMenuItem>
              <DropdownMenuItem onClick={() => setZoom(200)}>Zoom to 200%</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon-sm" aria-label="Zoom in" onClick={() => setZoom((value) => Math.min(200, value + 10))}><PlusIcon /></Button>
          <Separator orientation="vertical" className="mx-0.5 h-4" />
          <Button variant="ghost" size="icon-sm" aria-label="Undo" disabled><Undo2Icon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Redo" disabled><Redo2Icon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Lock canvas" aria-pressed={locked} onClick={() => setLocked((value) => !value)} className={cn(locked && "bg-muted")}><LockIcon /></Button>
        </div>

        <div className="absolute right-3 bottom-3 h-[104px] w-[172px] overflow-hidden rounded-lg border bg-card/70 p-2 shadow-xs backdrop-blur">
          <div className="relative size-full rounded-sm bg-muted/50">
            {[[10, 54, 26, 9], [44, 54, 26, 9], [78, 32, 26, 9], [108, 32, 26, 9], [78, 66, 26, 9]].map(([x, y, w, h]) => (
              <span key={`${x}-${y}`} className="absolute rounded-[2px] bg-muted-foreground/40" style={{ left: x, top: y, width: w, height: h }} />
            ))}
          </div>
        </div>
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60">React Flow</span>
      </div>

      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelectedId(null)}>
        <SheetContent className="w-full gap-0 p-0 sm:max-w-[360px]">
          {selected && (
            <>
              <SheetHeader className="border-b px-4 py-3.5">
                <SheetTitle className="flex items-center gap-2 text-sm">
                  <IconTile variant="solid" size="xs"><selected.icon /></IconTile>
                  {selected.title}
                </SheetTitle>
                <SheetDescription className="text-xs">Step inspector · {selected.kind}</SheetDescription>
              </SheetHeader>
              <ScrollArea className="flex-1">
                <div className="space-y-4 p-4">
                  <label className="block space-y-1.5">
                    <span className="text-xs text-muted-foreground">Title</span>
                    <Input defaultValue={selected.title} />
                  </label>
                  <label className="block space-y-1.5">
                    <span className="text-xs text-muted-foreground">Description</span>
                    <Input defaultValue={selected.subtitle} />
                  </label>
                  <div className="space-y-1.5">
                    <span className="text-xs text-muted-foreground">Step type</span>
                    <Select defaultValue={selected.kind.toLowerCase()}>
                      <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trigger">Trigger</SelectItem>
                        <SelectItem value="condition">Condition</SelectItem>
                        <SelectItem value="action">Action</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs text-muted-foreground">Owner</span>
                    <Select defaultValue={selected.owner}>
                      <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                      <SelectContent>{OWNERS.map((owner) => <SelectItem key={owner} value={owner}>{owner}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs text-muted-foreground">Last run status</span>
                    <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-2 text-xs">
                      <Badge variant={STATUS[selected.status].className as "success-light"} size="sm" radius="full">
                        {STATUS[selected.status].label}
                      </Badge>
                      <span className="tabular-nums text-muted-foreground">{selected.duration}</span>
                    </div>
                  </div>
                </div>
              </ScrollArea>
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

export default FlowAutomationBuilderBlock
