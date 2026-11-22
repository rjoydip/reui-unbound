import { useEffect, useRef, useState } from "react"
import { LayoutGridIcon, SearchIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InstallCommandPill } from "@/components/install-command-pill"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import {
  BLOCKS,
  CATEGORIES,
  blocksInCategory,
  installCommandFor,
  registryName,
} from "@/blocks/registry"
import type { BlockEntry, PackageManager } from "@/blocks/registry"
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
  category,
  onCategoryChange,
  packageManager,
  onPackageManagerChange,
  theme,
  onOpen,
  onViewCode,
}: {
  category: string | null
  onCategoryChange: (category: string | null) => void
  packageManager: PackageManager
  onPackageManagerChange: (next: PackageManager) => void
  theme: "light" | "dark"
  onOpen: (block: BlockEntry) => void
  onViewCode: (block: BlockEntry) => void
}) {
  const { copyToClipboard } = useCopyToClipboard()
  const [query, setQuery] = useState("")

  const source = category ? blocksInCategory(category) : BLOCKS
  const term = query.trim().toLowerCase()
  const blocks = term
    ? source.filter((block) => block.name.toLowerCase().includes(term))
    : source

  return (
    <div className="mx-auto w-full max-w-7xl p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
          <LayoutGridIcon className="size-4" />
          Blocks
        </div>
        <div className="relative w-full max-w-64">
          <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search blocks..."
            className="h-8 pl-9 text-sm"
          />
        </div>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Data Grid Blocks
        </h1>
        <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs font-medium tabular-nums">
          {BLOCKS.length}
        </span>
      </div>
      <p className="text-muted-foreground mt-1 max-w-3xl text-sm">
        Production-ready data grid blocks for dashboards and internal tools.
        Pick a category, then open a block to preview or copy its code.
      </p>

      <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button
          type="button"
          onClick={() => onCategoryChange(null)}
          className={cn(
            "h-8 shrink-0 rounded-full px-3 text-sm font-medium transition-[background-color]",
            category === null
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground hover:bg-muted",
          )}
        >
          All <span className="tabular-nums">{BLOCKS.length}</span>
        </button>
        {CATEGORIES.map((entry) => (
          <button
            key={entry.name}
            type="button"
            onClick={() => onCategoryChange(entry.name)}
            className={cn(
              "h-8 shrink-0 rounded-full px-3 text-sm font-medium transition-[background-color]",
              category === entry.name
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            {entry.name} <span className="tabular-nums">{entry.count}</span>
          </button>
        ))}
      </div>

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

      {blocks.length === 0 ? (
        <p className="text-muted-foreground py-12 text-center text-sm">
          No blocks match “{query}”.
        </p>
      ) : null}
    </div>
  )
}
