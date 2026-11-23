import * as React from "react"
import { cn } from "cn"
import { Progress as ProgressPrimitive } from "radix-ui"

const ProgressValueContext = React.createContext<number | null | undefined>(null)

function Progress({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressValueContext.Provider value={value}>
      <ProgressPrimitive.Root
        data-slot="progress"
        value={value}
        className={cn("flex w-full flex-col gap-2", className)}
        {...props}
      >
        {children ? (
          <div className="flex items-center justify-between gap-2">
            {children}
          </div>
        ) : null}
        <div className="relative h-1 w-full items-center overflow-x-hidden rounded-full bg-muted">
          <ProgressPrimitive.Indicator
            data-slot="progress-indicator"
            className="size-full flex-1 bg-primary transition-all"
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
          />
        </div>
      </ProgressPrimitive.Root>
    </ProgressValueContext.Provider>
  )
}

function ProgressLabel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="progress-label"
      className={cn("text-xs font-medium", className)}
      {...props}
    />
  )
}

function ProgressValue({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const value = React.useContext(ProgressValueContext)
  return (
    <div
      data-slot="progress-value"
      className={cn("text-muted-foreground text-xs tabular-nums", className)}
      {...props}
    >
      {Math.round(value ?? 0)}%
    </div>
  )
}

export { Progress, ProgressLabel, ProgressValue }
