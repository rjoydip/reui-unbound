import { useState } from "react"
import { RotateCcwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

import { TRAFFIC } from "./data"

export interface ZoomRange {
  from: number
  to: number
}

export function TrafficChart({
  buckets = TRAFFIC,
  zoom,
  onZoomChange,
}: {
  buckets?: typeof TRAFFIC
  zoom: ZoomRange | null
  onZoomChange: (zoom: ZoomRange | null) => void
}) {
  const [dragStart, setDragStart] = useState<number | null>(null)
  const [dragEnd, setDragEnd] = useState<number | null>(null)

  const max = Math.max(
    1,
    ...buckets.map((bucket) => bucket.ok + bucket.warn + bucket.error),
  )

  const release = buckets.find((bucket) => bucket.release)
  const xTicks = buckets.filter((_, index) => index % 6 === 0)

  function commit() {
    if (dragStart === null || dragEnd === null) {
      setDragStart(null)
      setDragEnd(null)
      return
    }

    const start = buckets[Math.min(dragStart, dragEnd)]
    const end = buckets[Math.max(dragStart, dragEnd)]
    onZoomChange({
      from: Math.min(start.minutesAgo, end.minutesAgo),
      to: Math.max(start.minutesAgo, end.minutesAgo) + 40,
    })
    setDragStart(null)
    setDragEnd(null)
  }

  return (
    <div className="rounded-lg border p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
          <span
            className={cn(
              "size-1.5 rounded-full",
              zoom ? "bg-info" : "bg-muted-foreground/40",
            )}
          />
          {zoom ? "Zoomed window" : "Traffic by 40 minutes"}
        </div>
        {zoom && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onZoomChange(null)}
            className="h-6 gap-1 px-2 text-xs"
          >
            <RotateCcwIcon className="size-3" />
            Reset zoom
          </Button>
        )}
      </div>

      <div className="mt-2 flex gap-2">
        <div className="text-muted-foreground flex h-24 flex-col justify-between pb-4 text-right text-[10px] tabular-nums">
          <span>60</span>
          <span>30</span>
          <span>0</span>
        </div>

        <div className="relative min-w-0 flex-1">
          {release && (
            <div
              className="pointer-events-none absolute inset-y-0 border-l border-dashed border-border"
              style={{
                left: `${(release.index / buckets.length) * 100}%`,
              }}
            >
              <span className="bg-background text-muted-foreground absolute -top-1 left-1 whitespace-nowrap rounded px-1 text-[10px]">
                {release.release}
              </span>
            </div>
          )}

          <div
            className="flex h-24 items-end gap-[2px] select-none"
            onMouseLeave={() => {
              if (dragStart !== null) commit()
            }}
          >
            {buckets.map((bucket) => {
              const total = bucket.ok + bucket.warn + bucket.error
              const inZoom =
                zoom === null ||
                (bucket.minutesAgo >= zoom.from && bucket.minutesAgo < zoom.to)
              const dragging =
                dragStart !== null &&
                dragEnd !== null &&
                bucket.index >= Math.min(dragStart, dragEnd) &&
                bucket.index <= Math.max(dragStart, dragEnd)

              return (
                <Tooltip key={bucket.index}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      aria-label={`${bucket.label}: ${bucket.ok} 2xx, ${bucket.warn} 4xx, ${bucket.error} 5xx`}
                      className={cn(
                        "group relative flex h-full flex-1 cursor-pointer flex-col justify-end rounded-sm outline-none",
                        "focus-visible:ring-2 focus-visible:ring-ring/50",
                        !inZoom && "opacity-35",
                        dragging && "bg-accent/40",
                      )}
                      onMouseDown={() => {
                        setDragStart(bucket.index)
                        setDragEnd(bucket.index)
                      }}
                      onMouseEnter={() => {
                        if (dragStart !== null) setDragEnd(bucket.index)
                      }}
                      onMouseUp={commit}
                    >
                      <span
                        className="bg-destructive/80 w-full rounded-t-[2px]"
                        style={{ height: `${(bucket.error / max) * 100}%` }}
                      />
                      <span
                        className="bg-warning/80 w-full"
                        style={{ height: `${(bucket.warn / max) * 100}%` }}
                      />
                      <span
                        className="w-full rounded-b-[2px]"
                        style={{
                          height: `${(bucket.ok / max) * 100}%`,
                          backgroundImage:
                            "repeating-linear-gradient(45deg, rgba(16,185,129,0.55) 0 2px, rgba(16,185,129,0.12) 2px 4px)",
                        }}
                      />
                      <span className="sr-only">{total} requests</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-xs">
                    {bucket.label} &middot; {bucket.ok} ok &middot;{" "}
                    {bucket.warn} client &middot; {bucket.error} server
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </div>

          <div className="text-muted-foreground mt-1 flex justify-between text-[10px] tabular-nums">
            {xTicks.map((bucket) => (
              <span key={bucket.index}>{bucket.label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
