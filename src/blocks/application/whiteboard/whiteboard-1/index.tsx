import { useState } from "react"
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  DownloadIcon,
  EraserIcon,
  FrameIcon,
  HandIcon,
  ImageIcon,
  KeyboardIcon,
  MenuIcon,
  MinusIcon,
  MoreHorizontalIcon,
  MousePointer2Icon,
  PanelRightIcon,
  PencilIcon,
  PlusIcon,
  Redo2Icon,
  SaveIcon,
  SearchIcon,
  Share2Icon,
  SquareIcon,
  StickyNoteIcon,
  TypeIcon,
  Undo2Icon,
  UploadIcon,
  CopyIcon,
  DiamondIcon,
  SplineIcon,
  TrashIcon,
  LayoutGridIcon,
  MapPinIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "cn"

const TOOLS = [
  { icon: HandIcon, label: "Hand" },
  { icon: MousePointer2Icon, label: "Select" },
  { icon: SquareIcon, label: "Rectangle" },
  { icon: DiamondIcon, label: "Diamond" },
  { icon: CircleIcon, label: "Ellipse" },
  { icon: ArrowRightIcon, label: "Arrow" },
  { icon: MinusIcon, label: "Line" },
  { icon: PencilIcon, label: "Draw" },
  { icon: TypeIcon, label: "Text" },
  { icon: ImageIcon, label: "Image" },
  { icon: EraserIcon, label: "Eraser" },
]

const NOTES = {
  goal1: "Mobile: 38% quit at the payment step",
  goal2: "Goal: 30% payment drop off by Q4",
  goal3: "No new PCI scope. Metric owner: Priya",
  exit: "Most exits happen on the card form",
  question1: "Express wallets on web in scope? Kenji",
  question2: "Keep guest checkout? Priya",
  question3: "Card scan on Android only? Omar",
  question4: "Which saved card is the default? Emma",
  decision1: "Wallet buttons ship first. Kenji, Oct 8",
  decision2: "exp_express_pay stays at 10%. Priya",
  decision3: "One page review stays. Sofia, Oct 2",
  v2a: "Wallet buttons above the card form",
  v2b: "Billing copies shipping",
  v2c: "Card errors are easy to miss",
} as const

const FRAMES = [
  { icon: FrameIcon, name: "Whole Board", meta: "5 frames · 29 items", selected: true },
  { icon: MapPinIcon, name: "Goals", meta: "3 items" },
  { icon: SplineIcon, name: "User Flow", meta: "14 items" },
  { icon: PanelRightIcon, name: "Checkout v2", meta: "5 items" },
  { icon: StickyNoteIcon, name: "Open Questions", meta: "4 items" },
  { icon: StickyNoteIcon, name: "Decisions", meta: "3 items" },
]

const PEOPLE = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
]

function Note({
  children,
  tone = "bg-amber-100",
  className,
}: {
  children: React.ReactNode
  tone?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-[3px] px-2.5 py-2 text-center text-[11px] leading-snug font-medium text-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.06)]",
        tone,
        className
      )}
    >
      {children}
    </div>
  )
}

function FlowNode({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("bg-card rounded-md border px-3 py-2 text-center text-[11px] whitespace-nowrap shadow-xs", className)}>
      {children}
    </div>
  )
}

function BoardToolbar() {
  return (
    <div className="bg-card flex items-center gap-0.5 rounded-lg border p-1 shadow-sm">
      {TOOLS.map((tool, index) => (
        <button
          key={tool.label}
          type="button"
          aria-label={tool.label}
          className={cn(
            "hover:bg-muted flex size-7 items-center justify-center rounded-md transition-colors",
            index === 1 && "bg-muted"
          )}
        >
          <tool.icon className="size-3.5" />
        </button>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" aria-label="More tools" className="hover:bg-muted flex size-7 items-center justify-center rounded-md transition-colors">
            <MoreHorizontalIcon className="size-3.5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem>Laser pointer</DropdownMenuItem>
          <DropdownMenuItem>Eyedropper</DropdownMenuItem>
          <DropdownMenuItem>Embed element</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function BoardMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" aria-label="Board menu" className="bg-card hover:bg-muted flex size-9 items-center justify-center rounded-lg border shadow-sm transition-colors">
          <MenuIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-60">
        <DropdownMenuItem><UploadIcon />Open file</DropdownMenuItem>
        <DropdownMenuItem><SaveIcon />Save to file</DropdownMenuItem>
        <DropdownMenuItem><TrashIcon />Clear board</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SearchIcon />Find on canvas
          <DropdownMenuShortcut>Ctrl+F</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <KeyboardIcon />Keyboard shortcuts
          <DropdownMenuShortcut>?</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ZoomControls() {
  const [zoom, setZoom] = useState(60)

  return (
    <div className="bg-card flex items-center gap-0.5 rounded-lg border p-1 shadow-sm">
      <button type="button" aria-label="Zoom out" onClick={() => setZoom((value) => Math.max(10, value - 10))} className="hover:bg-muted flex size-7 items-center justify-center rounded-md">
        <MinusIcon className="size-3.5" />
      </button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className="hover:bg-muted flex h-7 items-center gap-1 rounded-md px-2 text-xs font-medium">
            {zoom}%
            <ChevronDownIcon className="size-3" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-40">
          {[50, 60, 100, 200].map((value) => (
            <DropdownMenuItem key={value} onSelect={() => setZoom(value)}>
              {value}%
              {zoom === value ? <CheckIcon className="ml-auto size-3.5" /> : null}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => setZoom(60)}>Zoom to fit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <button type="button" aria-label="Zoom in" onClick={() => setZoom((value) => Math.min(400, value + 10))} className="hover:bg-muted flex size-7 items-center justify-center rounded-md">
        <PlusIcon className="size-3.5" />
      </button>
    </div>
  )
}

function FramesMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className="bg-card hover:bg-muted flex h-8 items-center gap-2 rounded-lg border px-3 text-xs font-medium shadow-sm">
          <ChevronLeftIcon className="size-3.5" />
          <FrameIcon className="size-3.5" />
          5 Frames
          <ChevronRightIcon className="size-3.5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        {FRAMES.slice(1).map((frame) => (
          <DropdownMenuItem key={frame.name}>
            <frame.icon />
            {frame.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Whiteboard1Block() {
  const [tab, setTab] = useState("frames")

  return (
    <div className="bg-background text-foreground flex h-svh flex-col overflow-hidden">
      <header className="bg-background flex h-12 shrink-0 items-center gap-2 border-b px-3">
        <h1 className="text-sm font-semibold">Checkout Review</h1>
        <span className="text-muted-foreground flex items-center gap-1 text-xs">
          <CheckIcon className="size-3.5" />Saved
        </span>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {PEOPLE.map((src) => (
              <Avatar key={src} className="size-7 ring-2 ring-background">
                <AvatarImage src={src} alt="" />
                <AvatarFallback>CR</AvatarFallback>
              </Avatar>
            ))}
            <span className="bg-muted text-muted-foreground z-10 flex size-7 items-center justify-center rounded-full text-[10px] ring-2 ring-background">+1</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button size="sm" className="gap-1.5 bg-neutral-900 text-white hover:bg-neutral-800">
                <Share2Icon className="size-3.5" />Share
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-72 gap-0 p-0">
              <div className="space-y-1 p-3">
                <p className="text-sm font-semibold">Share board</p>
                <p className="text-muted-foreground text-xs">Anyone at Tillpoint Payments with the link.</p>
              </div>
              <div className="space-y-1.5 px-3 pb-3">
                <p className="text-xs font-medium">Board link</p>
                <div className="flex items-center gap-1">
                  <Input readOnly value="https://boards.tillpoint.example/b/brd_9f2a" className="h-7 text-xs" />
                  <Button variant="outline" size="icon-sm" aria-label="Copy link"><CopyIcon /></Button>
                </div>
              </div>
              <div className="space-y-1.5 px-3 pb-3">
                <p className="text-xs font-medium">Link access</p>
                <Select defaultValue="edit">
                  <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="edit">Can edit</SelectItem>
                    <SelectItem value="comment">Can comment</SelectItem>
                    <SelectItem value="view">Can view</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-start justify-between border-t px-3 py-2.5">
                <div>
                  <p className="text-xs font-medium">View only</p>
                  <p className="text-muted-foreground text-xs">See the board as viewers do.</p>
                </div>
                <Switch size="sm" aria-label="View only" />
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5">
                <DownloadIcon className="size-3.5" />Export
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-52 p-1">
              <p className="text-muted-foreground px-2 py-1.5 text-[11px] font-medium">Export board</p>
              {["PNG image", "SVG vector", "Excalidraw file"].map((item) => (
                <button key={item} type="button" className="hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm">
                  <DownloadIcon className="size-3.5" />{item}
                </button>
              ))}
            </PopoverContent>
          </Popover>
          <div className="bg-border h-5 w-px" />
          <Button variant="ghost" size="icon-sm" aria-label="Toggle sidebar"><PanelRightIcon /></Button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, color-mix(in oklab, var(--muted-foreground) 22%, transparent) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="absolute top-3 left-3 z-10"><BoardMenu /></div>
          <div className="absolute top-3 left-1/2 z-10 -translate-x-1/2"><BoardToolbar /></div>
          <div className="absolute top-3 right-3 z-10">
            <button type="button" aria-label="Toggle frames panel" className="bg-card hover:bg-muted flex size-9 items-center justify-center rounded-lg border shadow-sm">
              <PanelRightIcon className="size-4" />
            </button>
          </div>

          <div className="absolute inset-0 overflow-auto pt-20 pb-16">
            <div className="relative mx-auto h-[560px] w-[1180px]">
              {/* Goals */}
              <section className="absolute top-0 left-6 w-[194px]">
                <p className="text-muted-foreground mb-1.5 text-xs">Goals</p>
                <div className="rounded-md border p-4">
                  <div className="space-y-3">
                    <Note>{NOTES.goal1}</Note>
                    <Note tone="bg-green-200">{NOTES.goal2}</Note>
                    <Note tone="bg-blue-200">{NOTES.goal3}</Note>
                  </div>
                </div>
              </section>

              {/* User Flow */}
              <section className="absolute top-0 left-[270px] w-[654px]">
                <p className="text-muted-foreground mb-1.5 text-xs">User Flow</p>
                <div className="relative min-h-[248px] rounded-md border p-4 pb-16">
                  <div className="flex items-center gap-2">
                    <FlowNode>Cart</FlowNode>
                    <ArrowRightIcon className="text-muted-foreground size-3.5 shrink-0" />
                    <FlowNode>Shipping</FlowNode>
                    <ArrowRightIcon className="text-muted-foreground size-3.5 shrink-0" />
                    <div className="relative flex size-16 shrink-0 items-center justify-center">
                      <span className="bg-card absolute inset-2 rotate-45 rounded-[3px] border" />
                      <span className="relative text-center text-[10px] leading-tight">Saved card?</span>
                    </div>
                    <span className="text-muted-foreground -ml-1 text-[10px]">Yes</span>
                    <ArrowRightIcon className="text-muted-foreground size-3.5 shrink-0" />
                    <FlowNode>Review</FlowNode>
                    <span className="text-muted-foreground -ml-1 text-[10px]">Pay</span>
                    <ArrowRightIcon className="text-muted-foreground size-3.5 shrink-0" />
                    <FlowNode>Done</FlowNode>
                  </div>

                  <div className="absolute top-[68px] left-[180px] flex flex-col items-center">
                    <span className="bg-foreground/50 h-3 w-px" />
                    <span className="text-muted-foreground text-[10px]">No</span>
                    <span className="bg-foreground/50 h-3 w-px" />
                    <FlowNode>Add Card</FlowNode>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-end gap-3">
                    <Note tone="bg-red-200" className="w-[130px]">{NOTES.exit}</Note>
                    <p className="text-muted-foreground text-[11px]">Mobile web, signed in shoppers</p>
                  </div>
                </div>
              </section>

              {/* Checkout v2 */}
              <section className="absolute top-[320px] left-6 w-[300px]">
                <p className="text-muted-foreground mb-1.5 text-xs">Checkout v2</p>
                <div className="rounded-md border p-3">
                  <div className="flex gap-3">
                    <div className="bg-card flex h-[150px] w-[80px] shrink-0 flex-col rounded-md border p-1.5">
                      <p className="text-center text-[6px] font-medium">Checkout</p>
                      <div className="bg-muted mt-1 h-2 rounded-sm" />
                      <div className="bg-muted mt-1 h-3 rounded-sm" />
                      <div className="bg-muted mt-1 h-3 rounded-sm" />
                      <div className="border-destructive/40 mt-1 h-4 rounded-sm border" />
                      <div className="bg-muted mt-1 h-2 rounded-sm" />
                      <div className="bg-foreground mt-auto h-3.5 rounded-sm" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-2">
                      <Note>{NOTES.v2a}</Note>
                      <Note tone="bg-blue-200">{NOTES.v2b}</Note>
                      <Note tone="bg-red-200">{NOTES.v2c}</Note>
                      <span className="bg-muted w-fit rounded px-1.5 py-0.5 text-[10px]">+3</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Open Questions */}
              <section className="absolute top-[320px] left-[372px] w-[300px]">
                <p className="text-muted-foreground mb-1.5 text-xs">Open Questions</p>
                <div className="grid h-[170px] grid-cols-2 gap-2 rounded-md border p-3">
                  <Note tone="bg-lime-200" className="self-start">{NOTES.question1}</Note>
                  <Note tone="bg-lime-200" className="self-start">{NOTES.question2}</Note>
                  <Note tone="bg-blue-200" className="self-end">{NOTES.question3}</Note>
                  <Note tone="bg-purple-200" className="self-end">{NOTES.question4}</Note>
                </div>
              </section>

              {/* Decisions */}
              <section className="absolute top-[320px] left-[728px] w-[194px]">
                <p className="text-muted-foreground mb-1.5 text-xs">Decisions</p>
                <div className="space-y-3 rounded-md border p-3">
                  <Note tone="bg-green-200">{NOTES.decision1}</Note>
                  <Note tone="bg-green-200">{NOTES.decision2}</Note>
                  <Note tone="bg-green-200">{NOTES.decision3}</Note>
                </div>
              </section>
            </div>
          </div>

          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5">
            <ZoomControls />
            <div className="bg-card flex items-center gap-0.5 rounded-lg border p-1 shadow-sm">
              <button type="button" aria-label="Fit to screen" className="hover:bg-muted flex size-7 items-center justify-center rounded-md"><FrameIcon className="size-3.5" /></button>
              <button type="button" aria-label="Grid" className="hover:bg-muted flex size-7 items-center justify-center rounded-md"><LayoutGridIcon className="size-3.5" /></button>
              <button type="button" aria-label="Save" className="hover:bg-muted flex size-7 items-center justify-center rounded-md"><SaveIcon className="size-3.5" /></button>
            </div>
            <div className="bg-card flex items-center gap-0.5 rounded-lg border p-1 shadow-sm">
              <button type="button" aria-label="Undo" className="hover:bg-muted flex size-7 items-center justify-center rounded-md"><Undo2Icon className="size-3.5" /></button>
              <button type="button" aria-label="Redo" className="hover:bg-muted flex size-7 items-center justify-center rounded-md"><Redo2Icon className="size-3.5" /></button>
            </div>
          </div>
          <div className="absolute right-3 bottom-3 z-10"><FramesMenu /></div>
        </div>

        <aside className="bg-background hidden w-[290px] shrink-0 flex-col border-l md:flex">
          <div className="p-2">
            <div className="bg-muted text-muted-foreground flex w-full items-center rounded-lg p-[3px] text-xs">
              {["Frames", "Library", "History"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTab(item.toLowerCase())}
                  className={cn(
                    "flex-1 rounded-md px-2 py-1.5 font-medium transition-colors",
                    tab === item.toLowerCase() && "bg-background text-foreground shadow-sm"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="px-3">
            <div className="relative">
              <SearchIcon className="text-muted-foreground absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" />
              <Input placeholder="Search board" className="h-8 pl-8 text-xs" />
            </div>
          </div>

          <div className="mt-3 min-h-0 flex-1 space-y-1 overflow-y-auto px-2 pb-3">
            {tab === "frames" ? (
              FRAMES.map((frame) => (
                <button
                  key={frame.name}
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left transition-colors",
                    frame.selected ? "bg-muted" : "hover:bg-muted/60"
                  )}
                >
                  <span className="bg-background flex size-8 shrink-0 items-center justify-center rounded-md border">
                    <frame.icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{frame.name}</span>
                    <span className="text-muted-foreground block text-xs">{frame.meta}</span>
                  </span>
                </button>
              ))
            ) : (
              <div className="space-y-1">
                {[NOTES.goal1, NOTES.v2a, NOTES.decision1].map((text) => (
                  <div key={text} className="bg-muted/40 rounded-lg px-3 py-2 text-xs">{text}</div>
                ))}
                <p className="text-muted-foreground px-2 pt-2 text-xs">{tab === "library" ? "Library items live here." : "No earlier versions yet."}</p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Whiteboard1Block
