import { useState } from "react"
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  EraserIcon,
  FrameIcon,
  HandIcon,
  ImageIcon,
  KeyboardIcon,
  LayoutGridIcon,
  MenuIcon,
  MinusIcon,
  MoreHorizontalIcon,
  MousePointer2Icon,
  PanelRightIcon,
  PencilIcon,
  PlusIcon,
  SaveIcon,
  SearchIcon,
  SquareIcon,
  TypeIcon,
  UploadIcon,
  DiamondIcon,
  TrashIcon,
  FlaskConicalIcon,
  ReceiptIcon,
  PresentationIcon,
  ArchiveIcon,
  ListIcon,
  CopyIcon,
  Share2Icon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

const AVA = {
  omar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80",
  sofia: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
  emma: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80",
}

const LANES = [
  { name: "Express Pay", meta: "Omar Farouk · 13 of 13 pts", icon: ReceiptIcon },
  { name: "Receipts", meta: "Sofia Marino · 8 of 10 pts", icon: ListIcon },
  { name: "Offline Research", meta: "Emma Lindgren · 5 of 8 pts", icon: FlaskConicalIcon },
  { name: "Parked", meta: "2 cards · 11 pts", icon: ArchiveIcon },
]

const NOTES = {
  goal1: "Express Pay live for 10% of web merchants",
  goal2: "Demo on Oct 9",
  risk1: "Apple Pay domain not verified",
  risk2: "Legal review on receipt copy",
  risk3: "Emma away Oct 5 and 6",
  pay1: "Apple Pay sheet",
  pay2: "Card fallback",
  pay3: "Rollout flag 10%",
  pay4: "Refund path",
  rec1: "Email receipt",
  rec2: "Reprint receipt",
  rec3: "Receipt QR code",
  res1: "Merchant calls",
  res2: "Sync conflicts",
  park1: "Split tender",
  park2: "Tip presets",
}

function Card({
  label,
  points,
  tone,
  avatar,
  className,
}: {
  label: string
  points: string
  tone: string
  avatar?: string
  className?: string
}) {
  return (
    <div className={cn("relative rounded-md border px-2.5 py-2 text-center text-[11px] leading-tight shadow-[0_1px_2px_rgba(0,0,0,0.05)]", tone, className)}>
      <p className="font-medium text-neutral-800">{label}</p>
      <p className="text-neutral-600 mt-1">{points}</p>
      {avatar ? (
        <Avatar className="absolute top-1/2 -right-2.5 size-5 -translate-y-1/2 ring-2 ring-background">
          <AvatarImage src={avatar} alt="" />
          <AvatarFallback>SP</AvatarFallback>
        </Avatar>
      ) : null}
    </div>
  )
}

function Toolbar() {
  return (
    <div className="bg-card flex items-center gap-0.5 rounded-lg border p-1 shadow-sm">
      {TOOLS.map((tool, index) => (
        <button
          key={tool.label}
          type="button"
          aria-label={tool.label}
          className={cn("hover:bg-muted flex size-7 items-center justify-center rounded-md transition-colors", index === 1 && "bg-muted")}
        >
          <tool.icon className="size-3.5" />
        </button>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" aria-label="More tools" className="hover:bg-muted flex size-7 items-center justify-center rounded-md">
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

function ZoomControls() {
  const [zoom, setZoom] = useState(60)

  return (
    <div className="bg-card flex items-center gap-0.5 rounded-lg border p-1 shadow-sm">
      <button type="button" aria-label="Zoom out" onClick={() => setZoom((value) => Math.max(10, value - 10))} className="hover:bg-muted flex size-7 items-center justify-center rounded-md"><MinusIcon className="size-3.5" /></button>
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
      <button type="button" aria-label="Zoom in" onClick={() => setZoom((value) => Math.min(400, value + 10))} className="hover:bg-muted flex size-7 items-center justify-center rounded-md"><PlusIcon className="size-3.5" /></button>
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
          6 Frames
          <ChevronRightIcon className="size-3.5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {["Sprint Goal", "Risks", "Express Pay", "Receipts", "Offline Research", "Parked"].map((name) => (
          <DropdownMenuItem key={name}><FrameIcon />{name}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Whiteboard2Block() {
  const [tab, setTab] = useState("plan")

  return (
    <div className="bg-background text-foreground flex h-svh flex-col overflow-hidden">
      <header className="bg-background flex h-12 shrink-0 items-center gap-2 border-b px-3">
        <h1 className="text-sm font-semibold">Sprint 42 Planning</h1>
        <span className="text-muted-foreground text-xs">· Sep 28 to Oct 9</span>
        <span className="text-muted-foreground flex items-center gap-1 text-xs"><CheckIcon className="size-3.5" />Saved</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {[AVA.sofia, AVA.omar, AVA.emma].map((src) => (
              <Avatar key={src} className="size-7 ring-2 ring-background">
                <AvatarImage src={src} alt="" />
                <AvatarFallback>SP</AvatarFallback>
              </Avatar>
            ))}
            <span className="bg-muted text-muted-foreground z-10 flex size-7 items-center justify-center rounded-full text-[10px] ring-2 ring-background">+1</span>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5"><PresentationIcon className="size-3.5" />Present</Button>
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

          <div className="absolute top-3 left-3 z-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button type="button" aria-label="Board menu" className="bg-card hover:bg-muted flex size-9 items-center justify-center rounded-lg border shadow-sm"><MenuIcon className="size-4" /></button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-60">
                <DropdownMenuItem><UploadIcon />Open file</DropdownMenuItem>
                <DropdownMenuItem><SaveIcon />Save to file</DropdownMenuItem>
                <DropdownMenuItem><TrashIcon />Clear board</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><SearchIcon />Find on canvas<DropdownMenuShortcut>Ctrl+F</DropdownMenuShortcut></DropdownMenuItem>
                <DropdownMenuItem><KeyboardIcon />Keyboard shortcuts<DropdownMenuShortcut>?</DropdownMenuShortcut></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="absolute top-3 left-1/2 z-10 -translate-x-1/2"><Toolbar /></div>
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
            <button type="button" aria-label="Follow presenter" className="bg-card hover:bg-muted flex size-9 items-center justify-center rounded-lg border shadow-sm"><PresentationIcon className="size-4" /></button>
            <button type="button" aria-label="Toggle frames panel" className="bg-card hover:bg-muted flex size-9 items-center justify-center rounded-lg border shadow-sm"><PanelRightIcon className="size-4" /></button>
          </div>

          <div className="absolute inset-0 overflow-auto pt-20 pb-16">
            <div className="relative mx-auto h-[540px] w-[980px]">
              {/* Sprint Goal */}
              <section className="absolute top-0 left-2 w-[440px]">
                <p className="text-muted-foreground mb-1.5 text-xs">Sprint Goal</p>
                <div className="flex gap-3 rounded-md border p-4">
                  <Card label={NOTES.goal1} points="10 pts" tone="bg-amber-50" className="flex-1" />
                  <Card label={NOTES.goal2} points="3 pts" tone="bg-amber-50" className="w-[130px]" />
                </div>
              </section>

              {/* Risks */}
              <section className="absolute top-0 left-[490px] w-[438px]">
                <p className="text-muted-foreground mb-1.5 text-xs">Risks</p>
                <div className="flex gap-2 rounded-md border p-4">
                  <Card label={NOTES.risk1} points="High" tone="bg-red-50" className="flex-1" />
                  <Card label={NOTES.risk2} points="Medium" tone="bg-red-50" className="flex-1" />
                  <Card label={NOTES.risk3} points="Low" tone="bg-red-50" className="flex-1" />
                </div>
              </section>

              {/* Express Pay */}
              <section className="absolute top-[266px] left-2 w-[194px]">
                <p className="text-muted-foreground mb-1.5 text-xs">Express Pay</p>
                <div className="relative rounded-md border border-dashed border-fuchsia-400 p-3">
                  <span className="text-muted-foreground absolute -top-2.5 left-2 bg-background px-1 text-[10px]">Omar</span>
                  <div className="space-y-2.5">
                    <Card label={NOTES.pay1} points="5 pts" tone="bg-blue-100" avatar={AVA.omar} />
                    <Card label={NOTES.pay2} points="3 pts" tone="bg-blue-100" avatar={AVA.omar} />
                    <Card label={NOTES.pay3} points="2 pts" tone="bg-blue-100" avatar={AVA.omar} />
                    <Card label={NOTES.pay4} points="3 pts" tone="bg-blue-100" avatar={AVA.sofia} />
                  </div>
                </div>
              </section>

              {/* Receipts */}
              <section className="absolute top-[266px] left-[246px] w-[194px]">
                <p className="text-muted-foreground mb-1.5 text-xs">Receipts</p>
                <div className="relative rounded-md border border-dashed border-fuchsia-400 p-3">
                  <span className="text-muted-foreground absolute -top-2.5 left-2 bg-background px-1 text-[10px]">Sofia</span>
                  <div className="space-y-2.5">
                    <Card label={NOTES.rec1} points="3 pts" tone="bg-green-100" avatar={AVA.sofia} />
                    <Card label={NOTES.rec2} points="2 pts" tone="bg-green-100" avatar={AVA.omar} />
                    <Card label={NOTES.rec3} points="3 pts" tone="bg-green-100" avatar={AVA.emma} />
                  </div>
                </div>
              </section>

              {/* Offline Research */}
              <section className="absolute top-[266px] left-[490px] w-[194px]">
                <p className="text-muted-foreground mb-1.5 text-xs">Offline Research</p>
                <div className="space-y-3 rounded-md border p-3">
                  <Card label={NOTES.res1} points="3 pts" tone="bg-violet-100" avatar={AVA.emma} />
                  <Card label={NOTES.res2} points="2 pts" tone="bg-violet-100" avatar={AVA.omar} />
                </div>
              </section>

              {/* Parked */}
              <section className="absolute top-[266px] left-[734px] w-[194px]">
                <p className="text-muted-foreground mb-1.5 text-xs">Parked</p>
                <div className="space-y-3 rounded-md border p-3">
                  <Card label={NOTES.park1} points="8 pts" tone="bg-background" />
                  <Card label={NOTES.park2} points="3 pts" tone="bg-background" />
                </div>
              </section>
            </div>
          </div>

          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5">
            <ZoomControls />
            <div className="bg-card flex items-center gap-0.5 rounded-lg border p-1 shadow-sm">
              <button type="button" aria-label="Fit to screen" className="hover:bg-muted flex size-7 items-center justify-center rounded-md"><FrameIcon className="size-3.5" /></button>
              <button type="button" aria-label="Grid" className="hover:bg-muted flex size-7 items-center justify-center rounded-md"><LayoutGridIcon className="size-3.5" /></button>
            </div>
          </div>
          <div className="absolute right-3 bottom-3 z-10"><FramesMenu /></div>
        </div>

        <aside className="bg-background hidden w-[290px] shrink-0 flex-col border-l md:flex">
          <div className="p-2">
            <div className="bg-muted text-muted-foreground flex w-full items-center rounded-lg p-[3px] text-xs">
              {["Plan", "Log"].map((item) => (
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
              <Input placeholder="Find a card" className="h-8 pl-8 text-xs" />
            </div>
          </div>

          {tab === "plan" ? (
            <div className="mt-4 min-h-0 flex-1 overflow-y-auto px-3 pb-3">
              <div className="flex items-baseline justify-between">
                <p className="text-muted-foreground text-xs">Committed</p>
                <p className="text-xs font-semibold">26 of 31 pts</p>
              </div>
              <div className="bg-muted mt-1.5 h-1.5 overflow-hidden rounded-full">
                <div className="bg-foreground h-full w-[84%] rounded-full" />
              </div>
              <p className="text-muted-foreground mt-2 text-xs">11 pts parked</p>

              <p className="text-muted-foreground mt-5 text-xs">Lanes</p>
              <div className="mt-1.5 space-y-1">
                {LANES.map((lane) => (
                  <button key={lane.name} type="button" className="hover:bg-muted flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left transition-colors">
                    <span className="bg-background flex size-8 shrink-0 items-center justify-center rounded-md border"><lane.icon className="size-4" /></span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium">{lane.name}</span>
                      <span className="text-muted-foreground block truncate text-xs">{lane.meta}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto px-3 pb-3">
              {["Sofia moved Receipt QR code to Done", "Omar parked Split tender", "Emma joined Offline Research"].map((entry) => (
                <div key={entry} className="bg-muted/40 rounded-lg px-3 py-2 text-xs">{entry}</div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-1.5 border-t p-3">
            <Button variant="outline" size="sm" className="flex-1 gap-1.5"><CopyIcon className="size-3.5" />Duplicate</Button>
            <Button size="sm" className="flex-1 gap-1.5"><Share2Icon className="size-3.5" />Share</Button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Whiteboard2Block
