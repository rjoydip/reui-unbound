import { CheckIcon, EllipsisVerticalIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function BinanceMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <g fill="currentColor">
        <path d="M12 2.6 15 5.6 12 8.6 9 5.6 12 2.6Z" />
        <path d="M6.1 7.9 9.1 10.9 6.1 13.9 3.1 10.9 6.1 7.9Z" />
        <path d="M17.9 7.9 20.9 10.9 17.9 13.9 14.9 10.9 17.9 7.9Z" />
        <path d="M12 9.9 15 12.9 12 15.9 9 12.9 12 9.9Z" />
        <path d="M12 17.2 15 20.2 12 23.2 9 20.2 12 17.2Z" />
      </g>
    </svg>
  )
}

export function Card16Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <div className="w-full max-w-[265px] rounded-xl bg-zinc-950 p-[3px] ring-1 ring-black/60 dark:ring-white/15">
        <div className="relative flex h-28 flex-col justify-between overflow-hidden rounded-t-lg px-3 pt-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 text-white/25 [background-image:radial-gradient(circle,currentColor_1px,transparent_1px)] [background-size:5px_5px] [mask-image:radial-gradient(120%_100%_at_100%_0%,black,transparent_75%)]"
          />
          <div className="relative flex items-center justify-between">
            <span className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-zinc-100">
              <CheckIcon className="size-3" aria-hidden="true" />
              Live
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-6 text-zinc-400 hover:bg-white/10 hover:text-zinc-100"
                  aria-label="Integration actions"
                >
                  <EllipsisVerticalIcon className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Copy link</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <span className="relative flex size-7 items-center justify-center rounded-full bg-black text-amber-400 ring-1 ring-white/10">
            <BinanceMark className="size-4" />
          </span>
        </div>

        <div className="rounded-lg border bg-card p-3 shadow-xs">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-semibold">LeadForge CRM</span>
            <Badge variant="secondary" size="xs" radius="full">
              Installed
            </Badge>
          </div>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Sync contacts, track opportunities, and forecast deals in one
            unified workspace.
          </p>
          <AvatarGroup className="mt-3">
            {["AR", "JM", "KL"].map((initials) => (
              <Avatar key={initials} size="sm">
                <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount className="size-6 text-xs">+3</AvatarGroupCount>
          </AvatarGroup>
          <Button variant="outline" className="mt-3 h-8 w-full text-sm font-medium">
            Integration Guide
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card16Block
