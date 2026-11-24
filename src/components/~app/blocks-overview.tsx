import { useEffect, useRef, useState } from "react"
import { LayoutGridIcon, SearchIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InstallCommandPill } from "@/components/~app/install-command-pill"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import {
  BLOCK_GROUPS,
  BLOCK_TOTAL,
  blocksInCategory,
  blocksInGroup,
  installCommandFor,
  registryName,
} from "@/blocks/~internal/registry"
import type { BlockEntry, PackageManager } from "@/blocks/~internal/registry"
import { cn } from "cn"

function LazyPreview({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || visible) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "300px" },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div ref={ref} className="bg-muted/30 relative h-52 w-full overflow-hidden">
      {visible ? (
        <div className="pointer-events-none absolute top-0 left-0 w-[250%] origin-top-left scale-[0.4] p-2">
          {children}
        </div>
      ) : null}
    </div>
  )
}

export function BlocksOverview({
  group,
  category,
  onGroupChange,
  packageManager,
  onPackageManagerChange,
  theme,
  onOpen,
  onViewCode,
}: {
  group: string | null
  category: string | null
  onGroupChange: (group: string | null) => void
  packageManager: PackageManager
  onPackageManagerChange: (next: PackageManager) => void
  theme: "light" | "dark"
  onOpen: (block: BlockEntry) => void
  onViewCode: (block: BlockEntry) => void
}) {
  const { copyToClipboard } = useCopyToClipboard()
  const [query, setQuery] = useState("")

  const source = category ? blocksInCategory(category) : blocksInGroup(group)
  const term = query.trim().toLowerCase()
  const blocks = term
    ? source.filter((block) => block.name.toLowerCase().includes(term))
    : source

  return (
    <div className="mx-auto w-full max-w-7xl p-4 sm:p-6">
      <p className="text-muted-foreground max-w-5xl text-base">
        Browse {BLOCK_TOTAL}+ production-ready shadcn blocks for SaaS,
        marketing, AI products, eCommerce, fintech, dashboards, and developer
        tools. Pick a product surface, then jump into complete layouts built for
        Tailwind CSS and ReUI themes.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            type="button"
            onClick={() => onGroupChange(null)}
            className={cn(
              "h-8 shrink-0 rounded-full border px-2.5 text-sm font-medium transition-colors",
              group === null
                ? "border-border bg-background text-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-muted border-transparent",
            )}
          >
            All <span className="tabular-nums">{BLOCK_TOTAL}</span>
          </button>
          {BLOCK_GROUPS.map((entry) => (
            <button
              key={entry.name}
              type="button"
              onClick={() => onGroupChange(entry.name)}
              className={cn(
                "h-8 shrink-0 rounded-full border px-2.5 text-sm font-medium transition-colors",
                group === entry.name
                  ? "border-border bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted border-transparent",
              )}
            >
              {entry.name} <span className="tabular-nums">{entry.count}</span>
            </button>
          ))}
        </div>
        <div className="relative w-full max-w-56 shrink-0">
          <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            className="h-9 pl-9 text-sm"
          />
        </div>
      </div>

      {blocks.length === 0 ? (
        <div className="border-border bg-muted/20 mt-5 flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center">
          <LayoutGridIcon className="text-muted-foreground mb-2 size-6" />
          <p className="text-sm font-medium">
            No local examples in {category ?? group ?? "this group"} yet
          </p>
          <p className="text-muted-foreground mt-1 max-w-md text-sm">
            The ReUI {group ?? "block"} catalog is captured under
            <code className="mx-1">captures/application</code> and lands in
            batches.
          </p>
        </div>
      ) : (
      <div className="mt-5 grid gap-4 lg:grid-cols-2">

        {blocks.map((block) => {
          const target =
            block.installTarget ?? registryName(block.registryId ?? block.id)
          const install = installCommandFor(target, packageManager)

          return (
            <article
              key={block.id}
              className="bg-background overflow-hidden rounded-xl border"
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => onOpen(block)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    onOpen(block)
                  }
                }}
                aria-label={`Open ${block.name}`}
                className="hover:bg-muted/30 focus-visible:ring-ring/50 cursor-pointer transition-colors outline-none focus-visible:ring-3"
              >
                <LazyPreview>
                  <block.Component />
                </LazyPreview>
              </div>

              <div className="flex items-center gap-2 border-t px-3 py-2">
                <span className="max-w-[45%] min-w-0 shrink-0 truncate text-sm font-medium">
                  {block.name}
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
                  onClick={() => onViewCode(block)}
                >
                  View code
                </Button>
              </div>
            </article>
          )
        })}
      </div>
      )}
    </div>
  )
}
