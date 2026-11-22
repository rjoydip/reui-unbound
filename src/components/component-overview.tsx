import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { InstallCommandPill } from "@/components/install-command-pill"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { installCommandFor, registryName } from "@/blocks/registry"
import type { BlockEntry, PackageManager } from "@/blocks/registry"

export function ComponentOverview({
  name,
  entries,
  packageManager,
  onPackageManagerChange,
  theme,
  onOpen,
  onViewCode,
}: {
  name: string
  entries: BlockEntry[]
  packageManager: PackageManager
  onPackageManagerChange: (next: PackageManager) => void
  theme: "light" | "dark"
  onOpen: (entry: BlockEntry) => void
  onViewCode: (entry: BlockEntry) => void
}) {
  const { copyToClipboard } = useCopyToClipboard()

  return (
    <div className="mx-auto w-full max-w-7xl p-4 sm:p-6">
      <div className="mb-4 flex items-baseline gap-2">
        <h2 className="text-lg font-semibold tracking-tight">{name}</h2>
        <span className="text-muted-foreground text-sm tabular-nums">
          {entries.length} {entries.length === 1 ? "preview" : "previews"}
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {entries.map((entry) => {
          const target =
            entry.installTarget ?? registryName(entry.registryId ?? entry.id)
          const install = installCommandFor(target, packageManager)
          const title =
            entry.variant ??
            (entry.flavor === "base" ? `${entry.name} · Base` : "Default")

          return (
            <article
              key={entry.id}
              className="bg-background overflow-hidden rounded-xl border"
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => onOpen(entry)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    onOpen(entry)
                  }
                }}
                aria-label={`Open ${name} — ${title}`}
                className="hover:bg-muted/30 focus-visible:ring-ring/50 flex h-56 w-full cursor-pointer items-center-safe justify-center overflow-hidden p-6 transition-colors outline-none focus-visible:ring-3"
              >
                <div
                  aria-hidden
                  className="pointer-events-none flex w-full max-w-md items-center justify-center"
                >
                  <entry.Component />
                </div>
              </div>

              <div className="flex items-center gap-2 border-t px-3 py-2">
                <span className="max-w-[45%] min-w-0 shrink-0 truncate text-sm font-medium">
                  {title}
                </span>
                <div className="min-w-0 flex-1">
                  <InstallCommandPill
                    install={install}
                    registryId={target}
                    packageManager={packageManager}
                    onPackageManagerChange={onPackageManagerChange}
                    theme={theme}
                    fluid
                    onCopy={() => {
                      copyToClipboard(install)
                      toast("Install command copied")
                    }}
                  />
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="shrink-0"
                  onClick={() => onViewCode(entry)}
                >
                  View code
                </Button>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
