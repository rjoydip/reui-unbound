import {
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
  LayoutGridIcon,
  ListFilterIcon,
  StarIcon,
} from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

import {
  BLOCKS,
  CATEGORIES,
  DATA_GRID_TOTAL,
  blocksInCategory,
} from "@/blocks/registry"
import type { BlockEntry } from "@/blocks/registry"

export type SidebarView = "all" | "favorites"

export function DemoSidebar({
  current,
  view,
  onViewChange,
  favorites,
  onSelect,
  expanded,
  onToggleCategory,
  theme,
  onToggleTheme,
}: {
  current: BlockEntry
  view: SidebarView
  onViewChange: (view: SidebarView) => void
  favorites: string[]
  onSelect: (block: BlockEntry) => void
  expanded: string[]
  onToggleCategory: (name: string) => void
  theme: "light" | "dark"
  onToggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void
}) {
  const favoriteBlocks = BLOCKS.filter((block) => favorites.includes(block.id))

  return (
    <div className="flex h-full flex-col">
      <div className="p-3">
        <div className="bg-muted grid grid-cols-2 gap-1 rounded-lg p-1">
          {(
            [
              ["all", "All Blocks"],
              ["favorites", "Favorites"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => onViewChange(value)}
              className={cn(
                "rounded-md px-2 py-1.5 text-sm transition-colors",
                view === value
                  ? "bg-background text-foreground border border-border shadow-xs"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-3">
        <button
          type="button"
          className="border-border bg-background flex h-10 w-full items-center gap-2 rounded-lg border px-3 text-sm font-medium"
        >
          <LayoutGridIcon className="size-4" />
          Data Grid
          <span className="text-muted-foreground ml-auto text-xs tabular-nums">
            {DATA_GRID_TOTAL}
          </span>
          <ChevronRightIcon className="text-muted-foreground size-4 rotate-90" />
        </button>
      </div>

      <div className="text-muted-foreground mt-4 flex items-center justify-between px-4 text-xs">
        <span>Categories</span>
        <ListFilterIcon className="size-3.5" />
      </div>

      <nav
        aria-label="Data grid blocks"
        className="mt-1 flex-1 overflow-y-auto px-2 pb-4"
      >
        {view === "all" ? (
          CATEGORIES.map((category) => {
            const blocks = blocksInCategory(category.name)
            const isOpen = expanded.includes(category.name)
            const isActive = category.name === current.category

            return (
              <div key={category.name}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => onToggleCategory(category.name)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors",
                    isActive && "bg-muted font-medium",
                    !isActive && "hover:bg-muted/60",
                  )}
                >
                  <ChevronRightIcon
                    className={cn(
                      "text-muted-foreground size-3.5 shrink-0",
                      isOpen && "rotate-90",
                    )}
                  />
                  <span className="truncate">{category.name}</span>
                  {blocks.length > 0 && (
                    <span className="bg-info size-1.5 shrink-0 rounded-full" />
                  )}
                  <span className="text-muted-foreground ml-auto text-xs tabular-nums">
                    {category.count}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-border/70 ml-4 flex flex-col gap-0.5 border-l py-1 pl-2">
                    {blocks.map((block) => (
                      <button
                        key={block.id}
                        type="button"
                        onClick={() => onSelect(block)}
                        className={cn(
                          "truncate rounded-md px-2 py-1.5 text-left text-sm transition-colors",
                          block.id === current.id
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                        )}
                      >
                        {block.name}
                      </button>
                    ))}
                    {blocks.length === 0 && (
                      <span className="text-muted-foreground px-2 py-1.5 text-xs">
                        No local examples yet
                      </span>
                    )}
                    {category.count > blocks.length && (
                      <span className="text-muted-foreground/70 px-2 py-1 text-[11px]">
                        +{category.count - blocks.length} more in ReUI
                      </span>
                    )}
                  </div>
                )}
              </div>
            )
          })
        ) : favoriteBlocks.length > 0 ? (
          <div className="flex flex-col gap-0.5">
            {favoriteBlocks.map((block) => (
              <button
                key={block.id}
                type="button"
                onClick={() => onSelect(block)}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors",
                  block.id === current.id
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                )}
              >
                <StarIcon className="size-3.5 fill-current" />
                <span className="truncate">{block.name}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-muted-foreground px-3 py-6 text-sm">
            <StarIcon className="mx-auto mb-2 size-5" />
            <p className="text-center">
              No favorites yet. Use the heart in the toolbar to pin a block
              here.
            </p>
          </div>
        )}
      </nav>

      <div className="border-t p-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-muted-foreground text-xs">Appearance</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label="Toggle color scheme"
                className="text-muted-foreground hover:text-foreground flex size-7 items-center justify-center rounded-md transition-colors"
              >
                {theme === "dark" ? (
                  <MoonIcon className="size-4" />
                ) : (
                  <SunIcon className="size-4" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>Toggle color scheme</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
