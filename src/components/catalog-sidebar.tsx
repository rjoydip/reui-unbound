import { useMemo, useState } from "react"
import {
  BoxesIcon,
  ChevronRightIcon,
  FilterIcon,
  LayoutGridIcon,
  LayoutListIcon,
  ListTreeIcon,
  MinusIcon,
  Rows3Icon,
  StarIcon,
} from "lucide-react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { cn } from "cn"

import {
  BLOCKS,
  CATEGORIES,
  DATA_GRID_TOTAL,
  blocksInCategory,
} from "@/blocks/registry"
import type { BlockEntry } from "@/blocks/registry"
import { COMPONENT_ENTRIES } from "@/blocks/components/catalog"

export type SidebarView = "all" | "favorites"
export type Section = "blocks" | "components" | "docs"

const COMPONENT_NOTES: Record<string, string> = {
  Alert: "Inline status messages with title, description and actions.",
  Autocomplete: "Searchable input with async suggestions and keyboard navigation.",
  Badge: "Compact status labels with light, outline and solid variants.",
  Cascader: "Hierarchical multi-level selection with search and virtualization.",
  "Code Block": "Syntax-highlighted code with copy and collapsible sections.",
  "Color Picker": "Color selection with formats, presets and a picker area.",
  "Data Grid": "Composable table with sorting, selection, pagination and virtualization.",
  "Date Selector": "Date and range selection built on a calendar popover.",
  "Emoji Picker": "Searchable emoji picker with categories and recent items.",
  "Event Calendar": "Month, week and agenda views with drag-and-drop events.",
  "File Type": "File icons and labels resolved from a file name or MIME type.",
  Filters: "Filter builder with fields, operators, chips and query serialization.",
  Frame: "Layered surface primitives for cards and panels.",
  Gantt: "Timeline scheduling with resources, drag interactions and progress.",
  "Icon Stack": "Overlapping icon or avatar stacks with overflow counts.",
  "Icon Tile": "Tinted icon container for compact visual anchors.",
  Kanban: "Drag-and-drop board with columns, cards and overlays.",
  "Number Field": "Numeric input with increment, decrement and scrub interactions.",
  "Phone Input": "International phone input with country selector and flags.",
  Rating: "Star rating input with keyboard and pointer support.",
  Scrollspy: "Section navigation that tracks the active scroll position.",
  "Signature Pad": "Draw, preview, clear and save handwritten signatures.",
  Sortable: "Drag-and-drop sortable lists with keyboard support.",
  Stepper: "Multi-step navigation with indicators and panels.",
  "Time Picker": "Time selection with scrollable columns and formatting.",
  Timeline: "Vertical event timeline with dates, indicators and content.",
  Tree: "Accessible expandable tree with keyboard navigation.",
}

function componentGroups() {
  const map = new Map<string, BlockEntry[]>()
  for (const entry of COMPONENT_ENTRIES) {
    const list = map.get(entry.name) ?? []
    list.push(entry)
    map.set(entry.name, list)
  }
  return [...map.entries()]
    .map(([name, entries]) => ({ name, entries }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

const COMPONENT_GROUPS = componentGroups()

export function CatalogSidebar({
  current,
  section,
  view,
  onViewChange,
  favorites,
  onSelect,
  expanded,
  onToggleCategory,
}: {
  current: BlockEntry
  section: Section
  view: SidebarView
  onViewChange: (view: SidebarView) => void
  favorites: string[]
  onSelect: (block: BlockEntry) => void
  expanded: string[]
  onToggleCategory: (name: string) => void
}) {
  const [query, setQuery] = useState("")
  const [mode, setMode] = useState<"list" | "grid">("list")
  const [expandedComponents, setExpandedComponents] = useState<string[]>(
    () => (current.kind === "component" ? [current.name] : []),
  )

  const favoriteBlocks = [...BLOCKS, ...COMPONENT_ENTRIES].filter((block) =>
    favorites.includes(block.id),
  )
  const filteredGroups = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return COMPONENT_GROUPS
    return COMPONENT_GROUPS.filter((group) =>
      group.name.toLowerCase().includes(term),
    )
  }, [query])

  const allBlocksExpanded = CATEGORIES.every((category) =>
    expanded.includes(category.name),
  )
  const allComponentsExpanded =
    filteredGroups.length > 0 &&
    filteredGroups.every((group) => expandedComponents.includes(group.name))

  function toggleAllCategories() {
    if (section === "blocks") {
      for (const category of CATEGORIES) {
        const open = expanded.includes(category.name)
        if (allBlocksExpanded ? open : !open) {
          onToggleCategory(category.name)
        }
      }
      return
    }
    setExpandedComponents(
      allComponentsExpanded ? [] : filteredGroups.map((group) => group.name),
    )
  }

  return (
    <div className="flex h-full flex-col">
      {section === "blocks" ? (
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
      ) : (
        <div className="space-y-2 p-3">
          <div className="flex items-center gap-1.5">
            <div className="relative min-w-0 flex-1">
              <FilterIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter categories..."
                className="h-9 pl-9 text-sm"
              />
            </div>
            <div className="flex shrink-0 items-center gap-0.5">
              <button
                type="button"
                aria-label="List view"
                onClick={() => setMode("list")}
                className={cn(
                  "flex size-7 items-center justify-center rounded-md transition-colors",
                  mode === "list"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Rows3Icon className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Grid view"
                onClick={() => setMode("grid")}
                className={cn(
                  "flex size-7 items-center justify-center rounded-md transition-colors",
                  mode === "grid"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <LayoutGridIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="px-3">
        <button
          type="button"
          className="border-border bg-background flex h-10 w-full items-center gap-2 rounded-lg border px-3 text-sm font-medium"
        >
          {section === "components" ? (
            <BoxesIcon className="size-4" />
          ) : (
            <LayoutGridIcon className="size-4" />
          )}
          {section === "components" ? "All Components" : "All blocks"}
          <span className="text-muted-foreground ml-auto text-xs tabular-nums">
            {section === "components"
              ? COMPONENT_ENTRIES.length
              : DATA_GRID_TOTAL}
          </span>
          {section === "blocks" && (
            <ChevronRightIcon className="text-muted-foreground size-4 rotate-90" />
          )}
        </button>
      </div>

      <div className="text-muted-foreground mt-4 flex items-center justify-between px-4 text-xs">
        <span>Categories</span>
        <button
          type="button"
          onClick={toggleAllCategories}
          aria-label={
            (section === "blocks" ? allBlocksExpanded : allComponentsExpanded)
              ? "Collapse all categories"
              : "Expand all categories"
          }
          title={
            (section === "blocks" ? allBlocksExpanded : allComponentsExpanded)
              ? "Collapse all categories"
              : "Expand all categories"
          }
          className="hover:text-foreground flex size-5 items-center justify-center rounded-sm transition-colors"
        >
          {section === "blocks" ? (
            <LayoutListIcon className="size-3.5" />
          ) : (
            <ListTreeIcon className="size-3.5" />
          )}
        </button>
      </div>

      <nav
        aria-label={section === "components" ? "Components" : "Blocks"}
        className="mt-1 flex-1 overflow-y-auto px-2 pb-4"
      >
        {section === "blocks" ? (
          view === "all" ? (
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
                        "text-muted-foreground size-3.5 shrink-0 transition-transform",
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
                  {block.kind === "component" ? (
                    <BoxesIcon className="size-3.5 shrink-0" />
                  ) : (
                    <StarIcon className="size-3.5 shrink-0" />
                  )}
                  <span className="truncate">{block.name}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-muted-foreground px-3 py-6 text-sm">
              <StarIcon className="mx-auto mb-2 size-5" />
              <p className="text-center">
                No favorites yet. Use the heart in the toolbar to pin a block or
                component here.
              </p>
            </div>
          )
        ) : filteredGroups.length > 0 ? (
          mode === "grid" ? (
            <div className="grid grid-cols-2 gap-1.5 px-1">
              {filteredGroups.map((group) => {
                const target = group.entries[0]
                const active =
                  current.kind === "component" && current.name === group.name
                return (
                  <HoverCard key={group.name} openDelay={250} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <button
                        type="button"
                        onClick={() => onSelect(target)}
                        className={cn(
                          "flex items-center justify-between gap-2 rounded-md border px-2.5 py-1.5 text-left text-xs transition-colors",
                          active
                            ? "bg-muted text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                        )}
                      >
                        <span className="truncate">{group.name}</span>
                        <span className="tabular-nums">{group.entries.length}</span>
                      </button>
                    </HoverCardTrigger>
                    <ComponentHover group={group} />
                  </HoverCard>
                )
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-0.5">
              {filteredGroups.map((group) => {
                const target = group.entries[0]
                const active =
                  current.kind === "component" && current.name === group.name
                const open = expandedComponents.includes(group.name)
                return (
                  <div key={group.name}>
                    <div
                      className={cn(
                        "rounded-md transition-colors",
                        active ? "bg-muted" : "hover:bg-muted/60",
                      )}
                    >
                      <HoverCard openDelay={250} closeDelay={100}>
                        <HoverCardTrigger asChild>
                          <button
                            type="button"
                            aria-expanded={open}
                            aria-label={
                              open ? "Collapse category" : "Expand category"
                            }
                            onClick={() => {
                              onSelect(target)
                              setExpandedComponents((current) =>
                                current.includes(group.name)
                                  ? current.filter(
                                      (name) => name !== group.name,
                                    )
                                  : [...current, group.name],
                              )
                            }}
                            className={cn(
                              "flex w-full min-w-0 items-center justify-between gap-2 px-2 py-2 text-left text-sm transition-colors",
                              active
                                ? "text-foreground font-medium"
                                : "text-muted-foreground hover:text-foreground",
                            )}
                          >
                            <span className="flex min-w-0 items-center gap-2">
                              {open && (
                                <MinusIcon className="text-muted-foreground size-3.5 shrink-0" />
                              )}
                              <span className="truncate">{group.name}</span>
                            </span>
                            <span className="text-muted-foreground text-xs tabular-nums">
                              {group.entries.length}
                            </span>
                          </button>
                        </HoverCardTrigger>
                        <ComponentHover group={group} />
                      </HoverCard>
                    </div>
                    {open && (
                      <div className="border-border/70 ml-3 flex flex-col gap-0.5 border-l py-1 pl-3">
                        {group.entries.map((entry) => (
                          <button
                            key={entry.id}
                            type="button"
                            onClick={() => onSelect(entry)}
                            className={cn(
                              "rounded-md px-2 py-1 text-left text-sm transition-colors",
                              entry.id === current.id
                                ? "bg-accent text-accent-foreground font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                            )}
                          >
                            {entry.flavor === "base" ? "Base" : "Radix"}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )
        ) : (
          <div className="text-muted-foreground px-3 py-6 text-sm">
            No categories match “{query}”.
          </div>
        )}
      </nav>

    </div>
  )
}

function ComponentHover({ group }: { group: { name: string; entries: BlockEntry[] } }) {
  const base = group.entries.some((entry) => entry.flavor === "base")
  return (
    <HoverCardContent
      side="right"
      align="start"
      sideOffset={12}
      className="w-80 p-3"
    >
      <div className="text-sm font-medium">{group.name}</div>
      <div className="text-muted-foreground mt-0.5 text-xs">
        {group.entries.length} {group.entries.length === 1 ? "preview" : "previews"}
        {base ? " · Radix + Base" : " · Radix"}
      </div>
      <p className="text-muted-foreground mt-2 text-sm">
        {COMPONENT_NOTES[group.name] ??
          `${group.name} component with live previews.`}
      </p>
    </HoverCardContent>
  )
}
