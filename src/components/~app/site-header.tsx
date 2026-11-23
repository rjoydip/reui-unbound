import { useEffect, useMemo, useState } from "react"
import {
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react"

import { CATALOG } from "@/blocks/components/~catalog/catalog"
import type { Section } from "@/components/~app/catalog-sidebar"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/~app/logo"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.7 5.39-5.27 5.67.41.36.78 1.06.78 2.14v3.18c0 .31.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export function SiteHeader({
  section,
  onSectionChange,
  onSelect,
  githubUrl,
  theme,
  onToggleTheme,
  onCustomize,
}: {
  section: Section
  onSectionChange: (section: Section) => void
  onSelect: (id: string) => void
  githubUrl: string
  theme: "light" | "dark"
  onToggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void
  onCustomize: () => void
}) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setSearchOpen((open) => !open)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) {
      return [
        ...CATALOG.filter((entry) => entry.kind !== "component").slice(0, 8),
        ...CATALOG.filter((entry) => entry.kind === "component").slice(0, 8),
      ]
    }
    return CATALOG.filter((entry) =>
      [entry.name, entry.category, entry.stage].some((value) =>
        value.toLowerCase().includes(term),
      ),
    ).slice(0, 40)
  }, [query])

  function choose(id: string) {
    onSelect(id)
    setSearchOpen(false)
    setQuery("")
  }

  return (
    <header className="bg-background sticky top-0 z-40 border-b">
      <div className="flex h-16 items-center gap-2 px-3 sm:gap-3 sm:px-4 lg:gap-5 lg:px-6">
        <button
          type="button"
          onClick={() => onSectionChange("blocks")}
          aria-label="ReUI Unbound home"
          className="text-foreground flex shrink-0 items-center gap-2"
        >
          <Logo width={26} className="text-foreground" />
          <span className="flex items-baseline gap-1">
            <span className="text-foreground text-sm font-semibold tracking-tight">
              ReUI
            </span>
            <span className="text-muted-foreground text-xs font-medium whitespace-nowrap sm:text-sm">
              Unbound
            </span>
          </span>
        </button>

        <nav className="flex items-center gap-0.5" aria-label="Sections">
          {(
            [
              ["blocks", "Blocks"],
              ["components", "Components"],
              ["docs", "Docs"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => onSectionChange(value)}
              className={cn(
                "rounded-md px-2 py-1.5 text-xs transition-colors sm:px-2.5 sm:text-sm",
                section === value
                  ? "bg-muted text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-0.5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Search blocks and components"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setSearchOpen(true)}
              >
                <SearchIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Search (⌘K)</TooltipContent>
          </Tooltip>

          <span className="bg-border mx-1 hidden h-5 w-px sm:block" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Toggle color scheme"
                className="text-muted-foreground hover:text-foreground"
                onClick={onToggleTheme}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle color scheme</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="View source on GitHub"
                className="text-muted-foreground hover:text-foreground hidden size-7 items-center justify-center rounded-md transition-colors sm:flex"
              >
                <GithubMark className="size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>View source on GitHub</TooltipContent>
          </Tooltip>

          <Button size="sm" className="ml-1 hidden sm:inline-flex" onClick={onCustomize}>
            Customize
          </Button>
        </div>
      </div>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-xl">
          <DialogHeader className="border-b px-4 py-3">
            <DialogTitle>Search</DialogTitle>
            <DialogDescription className="sr-only">
              Search blocks and components
            </DialogDescription>
          </DialogHeader>
          <div className="border-b p-3">
            <Input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search blocks and components..."
            />
          </div>
          <div className="max-h-[55vh] overflow-y-auto p-2">
            {results.length === 0 ? (
              <div className="text-muted-foreground px-3 py-8 text-center text-sm">
                No results for “{query}”.
              </div>
            ) : (
              results.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => choose(entry.id)}
                  className="hover:bg-muted flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors"
                >
                  <span className="truncate">{entry.name}</span>
                  <span className="text-muted-foreground ml-auto shrink-0 text-xs">
                    {entry.kind === "component"
                      ? entry.flavor === "base"
                        ? "Component · Base"
                        : "Component · Radix"
                      : `Block · ${entry.category}`}
                  </span>
                </button>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}
