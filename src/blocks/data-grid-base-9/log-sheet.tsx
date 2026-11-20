import { PlayIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Badge } from "@/components/reui-unbound/badge"
import { cn } from "cn"

import { LOGS, STATUS_TONE, groupOf, routeHealth } from "./data"
import type { RequestLog } from "./data"

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="grid gap-2">
      <h3 className="text-sm font-medium">{title}</h3>
      {children}
    </section>
  )
}

export function LogSheet({
  log,
  open,
  onOpenChange,
  onReplay,
}: {
  log: RequestLog | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onReplay: (log: RequestLog) => void
}) {
  const route = log ? log.path.split("?")[0] : ""
  const related = log
    ? LOGS.filter(
        (entry) =>
          entry.host === log.host && entry.path.split("?")[0] === route,
      )
    : []
  const health = routeHealth(related)
  const group = log ? groupOf(log) : "2xx"

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        {log && (
          <>
            <SheetHeader className="gap-2 border-b pb-4">
              <div className="flex items-center gap-2">
                <Badge
                  variant={log.method === "GET" ? "info-light" : "invert-light"}
                >
                  {log.method}
                </Badge>
                <Badge
                  variant={
                    group === "5xx"
                      ? "destructive-light"
                      : group === "4xx"
                        ? "warning-light"
                        : "success-light"
                  }
                  className="gap-1.5"
                >
                  <span
                    className={cn(
                      "size-1.5 rounded-full",
                      STATUS_TONE[group].dot,
                    )}
                  />
                  {log.status}
                </Badge>
                <span className="text-muted-foreground text-xs">
                  {log.latency} ms
                </span>
              </div>
              <SheetTitle className="font-mono text-sm break-all">
                {log.host}
                {log.path}
              </SheetTitle>
              <SheetDescription>
                {log.time} &middot; {log.region.city} ({log.region.code})
                &middot; {related.length} requests on this route
              </SheetDescription>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4">
              <Section title="Route health">
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg border p-2.5">
                    <div className="text-muted-foreground text-xs">p50</div>
                    <div className="text-sm font-medium tabular-nums">
                      {health.p50} ms
                    </div>
                  </div>
                  <div className="rounded-lg border p-2.5">
                    <div className="text-muted-foreground text-xs">p95</div>
                    <div className="text-sm font-medium tabular-nums">
                      {health.p95} ms
                    </div>
                  </div>
                  <div className="rounded-lg border p-2.5">
                    <div className="text-muted-foreground text-xs">Errors</div>
                    <div
                      className={cn(
                        "text-sm font-medium tabular-nums",
                        health.errorRate > 5 && "text-destructive",
                      )}
                    >
                      {health.errorRate.toFixed(1)}%
                    </div>
                  </div>
                </div>
              </Section>

              <Section title="Headers">
                <dl className="grid gap-1.5 rounded-lg border p-3 font-mono text-xs">
                  {Object.entries(log.headers).map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">{key}</dt>
                      <dd className="truncate text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </Section>

              {log.requestBody && (
                <Section title="Request body">
                  <pre className="bg-muted/40 max-h-48 overflow-auto rounded-lg border p-3 font-mono text-xs">
                    {log.requestBody}
                  </pre>
                </Section>
              )}

              <Section title="Response body">
                <pre className="bg-muted/40 max-h-48 overflow-auto rounded-lg border p-3 font-mono text-xs">
                  {log.responseBody}
                </pre>
              </Section>
            </div>

            <SheetFooter className="border-t">
              <Button onClick={() => onReplay(log)}>
                <PlayIcon />
                Replay request
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
