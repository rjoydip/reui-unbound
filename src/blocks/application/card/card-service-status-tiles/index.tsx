import {
  BarChart3Icon,
  DatabaseIcon,
  FolderIcon,
} from "lucide-react"

import { IconTile } from "@/components/kit/icon-tile"
import { cn } from "cn"

const SERVICES = [
  {
    name: "Database Server",
    status: "Online",
    timestamp: "Last backup 10 mins ago",
    icon: DatabaseIcon,
    dotClassName: "bg-emerald-500",
    textClassName: "text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Storage Bucket",
    status: "Synced",
    timestamp: "Last backup 10 mins ago",
    icon: FolderIcon,
    dotClassName: "bg-sky-500",
    textClassName: "text-sky-600 dark:text-sky-400",
  },
  {
    name: "Analytics Engine",
    status: "Idle",
    timestamp: "Last run 1 day ago",
    icon: BarChart3Icon,
    dotClassName: "bg-violet-500",
    textClassName: "text-violet-600 dark:text-violet-400",
  },
]

export function CardServiceStatusTilesBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.name}
              className="relative flex items-center gap-3 overflow-hidden bg-card p-4"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] opacity-70 [background-size:7px_7px] dark:opacity-40"
                style={{
                  maskImage:
                    "linear-gradient(to right, black 20%, transparent 95%)",
                }}
              />
              <IconTile size="default" className="relative">
                <Icon />
              </IconTile>
              <div className="relative min-w-0">
                <a
                  href="#"
                  className="block truncate text-[15px] font-medium outline-none hover:underline focus-visible:underline"
                >
                  {service.name}
                </a>
                <p className="mt-1 flex items-center gap-1.5 text-[12px]">
                  <span
                    aria-hidden="true"
                    className={cn("size-1.5 rounded-full", service.dotClassName)}
                  />
                  <span className={service.textClassName}>{service.status}</span>
                  <span className="truncate text-muted-foreground">
                    {service.timestamp}
                  </span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardServiceStatusTilesBlock
