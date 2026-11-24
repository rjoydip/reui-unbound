import {
  ArrowLeftRightIcon,
  ChartColumnIcon,
  CircleAlertIcon,
  CopyIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  ShieldCheckIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Frame } from "@/components/kit/frame"

const COUNTERS = [
  { icon: ArrowLeftRightIcon, title: "New Order", count: "143/pkg" },
  { icon: CircleAlertIcon, title: "Low Stock Alerts", count: "27/items" },
  { icon: ChartColumnIcon, title: "Restocked", count: "320/items" },
  { icon: ShieldCheckIcon, title: "Avg. Order Size", count: "3.2/items" },
]

function ActionsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Open counter actions"
        >
          <EllipsisVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem>
          <PencilIcon />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CopyIcon />
          Copy link
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2Icon />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Card33Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <div className="grid w-full max-w-[960px] gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {COUNTERS.map((counter) => {
          const Icon = counter.icon
          return (
            <Frame key={counter.title} className="relative h-full overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-2/3 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:5px_5px] opacity-70 [mask-image:linear-gradient(to_bottom_left,black,transparent_80%)]"
              />

              <div className="relative flex items-start justify-between">
                <span className="text-primary-foreground flex size-9 items-center justify-center rounded-md bg-[linear-gradient(180deg,#3f3f46,#09090b)] shadow-[inset_0_1px_0_rgb(255_255_255/0.25)] ring-1 ring-black/10">
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
                <ActionsMenu />
              </div>

              <div className="relative mt-6 flex flex-col gap-0.5">
                <a
                  href="#"
                  className="w-fit text-sm font-medium tracking-tight outline-none hover:underline focus-visible:underline"
                >
                  {counter.title}
                </a>
                <p className="text-muted-foreground text-sm">{counter.count}</p>
              </div>
            </Frame>
          )
        })}
      </div>
    </div>
  )
}

export default Card33Block
