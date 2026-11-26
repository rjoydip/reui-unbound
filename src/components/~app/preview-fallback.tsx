import { cn } from "cn"

/** Calm placeholder while a preview chunk is being fetched. */
export function PreviewFallback({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex h-full min-h-24 w-full items-center justify-center p-4"
      >
        <div className="bg-muted/70 h-2/3 w-2/3 animate-pulse rounded-lg motion-reduce:animate-none" />
        <span className="sr-only">Loading preview</span>
      </div>
    )
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex min-h-[calc(100svh-4rem)] w-full items-center justify-center p-6",
      )}
    >
      <div className="w-full max-w-md space-y-3">
        <div className="bg-muted h-5 w-1/3 animate-pulse rounded-md motion-reduce:animate-none" />
        <div className="bg-muted h-40 w-full animate-pulse rounded-xl motion-reduce:animate-none" />
        <div className="bg-muted h-4 w-2/3 animate-pulse rounded-md motion-reduce:animate-none" />
      </div>
      <span className="sr-only">Loading preview</span>
    </div>
  )
}
