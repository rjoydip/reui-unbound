import { useEffect, useMemo, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { tokenize } from "kirari"
import { renderDecorated } from "kirari/decorations"
import { tsx, typescript } from "kirari/languages"
import "kirari/themes/github-light.css"
import { toast } from "sonner"

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  CatalogSidebar,
  type Section,
  type SidebarView,
} from "@/components/~app/catalog-sidebar"
import {
  PreviewHeader,
  type Device,
  type Theme,
  type View,
} from "@/components/~app/preview-header"
import { CustomizePanel } from "@/components/~app/customize-panel"
import { SiteHeader } from "@/components/~app/site-header"
import { DocsViewer } from "@/components/~app/docs-viewer"
import { ComponentOverview } from "@/components/~app/component-overview"
import { BlocksOverview } from "@/components/~app/blocks-overview"
import {
  DEFAULT_OPTIONS,
  type CustomizeOptions,
} from "@/components/~app/customize-options"
import { CATALOG, COMPONENT_ENTRIES } from "@/blocks/components/~catalog/catalog"
import { GITHUB_REPOSITORY, githubSourceUrl } from "@/lib/source-url"
import { installCommandFor, registryName } from "@/blocks/~internal/registry"
import { BLOCKS, blocksInCategory } from "@/blocks/~internal/registry"
import type { BlockFile, PackageManager } from "@/blocks/~internal/registry"
import { cn } from "cn"

const FAVORITES_KEY = "reui-demo-favorites"
const THEME_KEY = "reui-demo-theme"

type CatalogOverview =
  | { kind: "component"; name: string }
  | { kind: "block"; name: string | null }

const BASE_COLORS = ["Neutral", "Gray", "Slate", "Stone", "Zinc"]
const THEME_COLORS = ["Neutral", "Blue", "Green", "Orange", "Rose"]
const RADII = ["Default", "Small", "Large"]
const ACCENTS = ["Subtle", "Bold"]

const PRIMARY_TONES: Record<string, { light: string; dark: string }> = {
  Neutral: { light: "oklch(0.205 0 0)", dark: "oklch(0.922 0 0)" },
  Gray: {
    light: "oklch(0.21 0.034 264.665)",
    dark: "oklch(0.928 0.006 264.531)",
  },
  Slate: {
    light: "oklch(0.208 0.042 265.755)",
    dark: "oklch(0.929 0.013 255.508)",
  },
  Stone: {
    light: "oklch(0.216 0.006 56.043)",
    dark: "oklch(0.923 0.003 48.717)",
  },
  Zinc: {
    light: "oklch(0.21 0.006 285.885)",
    dark: "oklch(0.92 0.004 286.32)",
  },
}

function readFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

function readTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function readBlockId() {
  const hash = window.location.hash.replace("#", "")
  return CATALOG.find((block) => block.id === hash)?.id ?? CATALOG[0].id
}

function CodePanel({ file }: { file: BlockFile }) {
  const html = useMemo(
    () =>
      renderDecorated(
        tokenize(file.code, file.lang === "tsx" ? tsx : typescript),
        { lines: true },
      ),
    [file],
  )

  return (
    <pre
      className="kirari kirari-lines max-h-[calc(100svh-9rem)] overflow-auto p-4 text-xs leading-5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default function App() {
  const [blockId, setBlockId] = useState(readBlockId)
  const [view, setView] = useState<View>("preview")
  const [theme, setTheme] = useState<Theme>(readTheme)
  const [device, setDevice] = useState<Device>("desktop")
  const [favorites, setFavorites] = useState<string[]>(readFavorites)
  const [refreshKey, setRefreshKey] = useState(0)
  const [section, setSection] = useState<Section>(() =>
    CATALOG.find((entry) => entry.id === readBlockId())?.kind === "component"
      ? "components"
      : "blocks",
  )
  const [sidebarView, setSidebarView] = useState<SidebarView>("all")
  const [expanded, setExpanded] = useState<string[]>(() => {
    const category = CATALOG.find(
      (entry) => entry.id === readBlockId(),
    )?.category
    return category ? [category] : ["Base"]
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [customizeOpen, setCustomizeOpen] = useState(false)
  const [overview, setOverview] = useState<CatalogOverview | null>(() =>
    window.location.pathname.replace(/\/+$/, "") === "/blocks"
      ? { kind: "block", name: null }
      : null,
  )
  const [blockGroup, setBlockGroup] = useState<string | null>(null)
  const [overviewCategory, setOverviewCategory] = useState<string | null>(
    null,
  )
  const [sidebarResetKey, setSidebarResetKey] = useState(0)
  const [options, setOptions] = useState<CustomizeOptions>(DEFAULT_OPTIONS)
  const [packageManager, setPackageManager] = useState<PackageManager>("bun")
  const [activeFile, setActiveFile] = useState<string | null>(null)

  const previewRef = useRef<HTMLDivElement>(null)

  const block = CATALOG.find((entry) => entry.id === blockId) ?? CATALOG[0]
  const overviewEntries =
    overview?.kind === "component"
      ? COMPONENT_ENTRIES.filter((entry) => entry.name === overview.name)
      : null
  const githubUrl =
    section === "docs"
      ? `${GITHUB_REPOSITORY}/blob/main/docs/README.md`
      : githubSourceUrl(block)
  const activeFileEntry =
    block.files.find((entry) => entry.name === activeFile) ?? block.files[0]
  const favorite = favorites.includes(block.id)

  const registryTarget =
    block.installTarget ?? registryName(block.registryId ?? block.id)
  const install = installCommandFor(registryTarget, packageManager)
  const aiPrompt = [
    `Build the "${block.name}" (${block.kind === "component" ? "component" : "block"}) from reui-unbound in my app.`,
    "",
    `Registry: ${registryTarget}`,
    `Docs:`,
    `Install (${packageManager}): ${install}`,
    "",
    "Registry dependencies:",
    ...block.dependencies.registry.map((entry) => {
      if (entry.startsWith("@reui-unbound/")) {
        const name = entry.slice("@reui-unbound/".length)
        if (name.startsWith("base-ui-")) {
          return `- @/components/kit/base/ui/${name.slice("base-ui-".length)}`
        }
        if (name.startsWith("base-")) {
          return `- @/components/kit/base/${name.slice("base-".length)}`
        }
        if (name.startsWith("use-")) {
          return `- @/hooks/${name}`
        }
        return `- @/components/kit/${name}`
      }
      if (entry.startsWith("@reui/")) {
        return `- @/components/kit/${entry.slice("@reui/".length)}`
      }
      if (entry.startsWith("@")) return `- ${entry}`
      return `- @/components/ui/${entry}`
    }),
    "",
    "npm packages:",
    ...block.dependencies.packages.map((entry) => `- ${entry}`),
    "",
    "Keep the layout, design tokens and component variants from the docs, and adapt only the demo data.",
  ].join("\n")

  function setThemeAnimated(next: Theme, event?: React.MouseEvent) {
    if (next === theme) return

    const apply = () => flushSync(() => setTheme(next))
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const transitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => {
        ready: Promise<void>
        finished: Promise<void>
      }
    }

    if (!transitionDocument.startViewTransition || reduceMotion) {
      apply()
      return
    }

    const x = event?.clientX ?? window.innerWidth / 2
    const y = event?.clientY ?? window.innerHeight / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )
    const disableTransitions = document.createElement("style")
    disableTransitions.textContent =
      "*,*::before,*::after{transition:none!important}"
    document.head.append(disableTransitions)

    const transition = transitionDocument.startViewTransition(() => apply())
    transition.finished.finally(() => disableTransitions.remove())

    transition.ready.then(() => {
      const frames = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${radius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        { clipPath: next === "dark" ? [...frames].reverse() : frames },
        {
          duration: 400,
          easing: "ease-out",
          fill: "forwards",
          pseudoElement:
            next === "dark"
              ? "::view-transition-old(root)"
              : "::view-transition-new(root)",
        },
      )
    })
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.style.colorScheme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    if (!customizeOpen) return

    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return
      if (event.key.toLowerCase() === "r") {
        event.preventDefault()
        shuffleOptions()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customizeOpen])

  useEffect(() => {
    const root = document.documentElement
    const radius =
      options.radius === "Small"
        ? "0.375rem"
        : options.radius === "Large"
          ? "0.875rem"
          : "0.625rem"
    const tone = PRIMARY_TONES[options.baseColor] ?? PRIMARY_TONES.Neutral
    root.style.setProperty("--radius", radius)
    root.style.setProperty(
      "--primary",
      theme === "dark" ? tone.dark : tone.light,
    )
  }, [options.radius, options.baseColor, theme])

  function selectBlock(id: string) {
    const next = CATALOG.find((entry) => entry.id === id)
    setOverview(null)
    if (next) setSection(next.kind === "component" ? "components" : "blocks")
    setBlockId(id)
    setActiveFile(null)
    if (next) {
      setExpanded((current) =>
        current.includes(next.category) ? current : [...current, next.category],
      )
    }
    window.history.replaceState(null, "", `#${id}`)
    setSidebarOpen(false)
    previewRef.current?.scrollIntoView({ block: "start" })
  }

  function selectGroup(name: string) {
    const entries = COMPONENT_ENTRIES.filter((entry) => entry.name === name)
    const first = entries[0]
    if (!first) return
    setSection("components")
    setBlockId(first.id)
    setActiveFile(null)
    setOverview({ kind: "component", name })
    window.history.replaceState(null, "", `#${first.id}`)
    setSidebarOpen(false)
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0 })
      document.querySelector("main")?.scrollTo({ top: 0 })
    })
  }

  function selectBlockCategory(name: string | null) {
    setOverviewCategory(name)
    const first = name ? blocksInCategory(name)[0] : BLOCKS[0]
    if (first) {
      setSection("blocks")
      setBlockId(first.id)
      setActiveFile(null)
      window.history.replaceState(null, "", `#${first.id}`)
    }
    setOverview({ kind: "block", name: blockGroup })
    setSidebarOpen(false)
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0 })
      document.querySelector("main")?.scrollTo({ top: 0 })
    })
  }

  function changeBlockGroup(group: string | null) {
    setBlockGroup(group)
    setOverviewCategory(null)
    setSection("blocks")
    setOverview({ kind: "block", name: group })
    setSidebarOpen(false)
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0 })
      document.querySelector("main")?.scrollTo({ top: 0 })
    })
  }

  function changeSection(next: Section) {
    setOverview(null)
    setSection(next)
    setExpanded([])
    setSidebarResetKey((key) => key + 1)
    if (next === "components") {
      const names = [...new Set(COMPONENT_ENTRIES.map((entry) => entry.name))]
        .sort((a, b) => a.localeCompare(b))
      if (names[0]) selectGroup(names[0])
    } else if (next === "blocks") {
      selectBlockCategory(null)
    }
  }

  function toggleCategory(name: string) {
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((entry) => entry !== name)
        : [...current, name],
    )
  }

  function toggleFavorite() {
    setFavorites((current) =>
      current.includes(block.id)
        ? current.filter((id) => id !== block.id)
        : [...current, block.id],
    )
  }

  function shuffleOptions() {
    const pick = <T,>(list: T[]) =>
      list[Math.floor(Math.random() * list.length)]
    setOptions((current) => ({
      ...current,
      baseColor: pick(BASE_COLORS),
      themeName: pick(THEME_COLORS),
      chartColor: pick(THEME_COLORS),
      radius: pick(RADII),
      menuAccent: pick(ACCENTS),
      preset: Math.random().toString(36).slice(2, 4),
    }))
    toast("Preset shuffled")
  }

  function resetOptions() {
    setOptions(DEFAULT_OPTIONS)
    toast("Customize reset")
  }

  const deviceWidth =
    device === "mobile" ? 420 : device === "tablet" ? 900 : undefined

  // Standalone block preview: /?preview=<id> renders the block without the demo shell.
  const standaloneId = new URLSearchParams(window.location.search).get("preview")
  const standaloneBlock = standaloneId
    ? CATALOG.find((entry) => entry.id === standaloneId)
    : undefined

  if (standaloneBlock) {
    return (
      <TooltipProvider delayDuration={200}>
        <div className="bg-background text-foreground min-h-svh">
          {standaloneBlock.kind === "component" ? (
            <div className="flex min-h-svh items-center justify-center p-6 sm:p-10">
              <div className="flex w-full max-w-5xl justify-center">
                <standaloneBlock.Component />
              </div>
            </div>
          ) : (
            <standaloneBlock.Component />
          )}
          <Toaster position="bottom-right" theme={theme} />
        </div>
      </TooltipProvider>
    )
  }

  const sidebar = (
    <CatalogSidebar
      current={block}
      section={section}
      view={sidebarView}
      onViewChange={setSidebarView}
      favorites={favorites}
      onSelect={(entry) => selectBlock(entry.id)}
      onSelectGroup={selectGroup}
      onSelectBlockCategory={selectBlockCategory}
      blockGroup={blockGroup}
      onBlockGroupChange={changeBlockGroup}
      expanded={expanded}
      onToggleCategory={toggleCategory}
      resetKey={sidebarResetKey}
    />
  )

  const siteHeader = (
    <SiteHeader
      section={section}
      onSectionChange={changeSection}
      onSelect={selectBlock}
      githubUrl={githubUrl}
      theme={theme}
      onToggleTheme={(event) =>
        setThemeAnimated(theme === "dark" ? "light" : "dark", event)
      }
      onCustomize={() => setCustomizeOpen(true)}
    />
  )

  if (section === "docs") {
    return (
      <TooltipProvider delayDuration={200}>
        <div className="bg-background text-foreground flex h-svh flex-col overflow-hidden">
          {siteHeader}
          <DocsViewer />
          <Toaster position="bottom-right" theme={theme} />
        </div>
      </TooltipProvider>
    )
  }

  return (
    <TooltipProvider delayDuration={200}>
      <div className="bg-background text-foreground flex min-h-svh flex-col">
        {siteHeader}
        <div className="flex min-h-0 flex-1">
          <aside className="bg-sidebar text-sidebar-foreground sticky top-16 hidden h-[calc(100svh-4rem)] w-72 shrink-0 border-r lg:block">
            {sidebar}
          </aside>

          <div className="flex min-w-0 flex-1 flex-col">
            {!overview && (
              <PreviewHeader
                block={block}
                view={view}
                onViewChange={(next) => {
                  setOverview(null)
                  setView(next)
                }}
                theme={theme}
                onRefresh={() => setRefreshKey((key) => key + 1)}
                onFullscreen={() => previewRef.current?.requestFullscreen()}
                onOpenSidebar={() => setSidebarOpen(true)}
                favorite={favorite}
                onToggleFavorite={toggleFavorite}
                device={device}
                onDeviceChange={setDevice}
                packageManager={packageManager}
                onPackageManagerChange={setPackageManager}
                aiPrompt={aiPrompt}
              />
            )}

          {overview?.kind === "block" ? (
            <main className="flex-1 overflow-y-auto">
              <BlocksOverview
                group={overview.name}
                category={overviewCategory}
                onGroupChange={changeBlockGroup}
                packageManager={packageManager}
                onPackageManagerChange={setPackageManager}
                theme={theme}
                onOpen={(entry) => {
                  selectBlock(entry.id)
                  setView("preview")
                }}
                onViewCode={(entry) => {
                  selectBlock(entry.id)
                  setView("code")
                }}
              />
            </main>
          ) : overview?.kind === "component" && overviewEntries ? (
            <main className="flex-1 overflow-y-auto">
              <ComponentOverview
                name={overview.name}
                entries={overviewEntries}
                packageManager={packageManager}
                onPackageManagerChange={setPackageManager}
                theme={theme}
                onOpen={(entry) => {
                  selectBlock(entry.id)
                  setView("preview")
                }}
                onViewCode={(entry) => {
                  selectBlock(entry.id)
                  setView("code")
                }}
              />
            </main>
          ) : view === "preview" ? (
            <main
              ref={previewRef}
              className="bg-muted/30 flex flex-1 justify-center overflow-x-hidden"
            >
              <div
                className={cn(
                  // contain: paint makes the block's fixed Sidebar position
                  // itself inside this preview instead of over the app shell.
                  "bg-background relative w-full [contain:paint]",
                  device !== "desktop" && "overflow-x-auto border-x shadow-sm",
                )}
                style={{ maxWidth: deviceWidth }}
              >
                {block.kind === "component" ? (
                  <div
                    key={refreshKey}
                    className="flex min-h-[calc(100svh-3.5rem)] items-center justify-center p-6 sm:p-10"
                  >
                    <div className="flex w-full max-w-5xl justify-center">
                      <block.Component />
                    </div>
                  </div>
                ) : (
                  <div
                    key={refreshKey}
                    className="[&>div]:min-h-[calc(100svh-3.5rem)]"
                  >
                    <block.Component />
                  </div>
                )}
              </div>
            </main>
          ) : (
            <main className="flex-1">
              <div className="mx-auto w-full max-w-6xl p-4 sm:p-6">
                <div className="overflow-hidden rounded-xl border">
                  <div className="bg-muted/40 flex flex-wrap items-center gap-1 border-b px-2 py-1.5">
                    {block.files.map((entry) => (
                      <button
                        key={entry.name}
                        type="button"
                        onClick={() => setActiveFile(entry.name)}
                        className={cn(
                          "rounded-md px-2.5 py-1 font-mono text-xs transition-colors",
                          entry.name === activeFileEntry.name
                            ? "bg-background text-foreground border border-border"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {entry.name}
                      </button>
                    ))}
                    <span className="text-muted-foreground ml-auto pr-1 text-xs tabular-nums">
                      {activeFileEntry.code.split("\n").length} lines
                    </span>
                  </div>

                  <CodePanel file={activeFileEntry} />
                </div>
              </div>
            </main>
          )}
          </div>
        </div>
      </div>

      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-72 p-0 pt-8">
          {sidebar}
        </SheetContent>
      </Sheet>

      <CustomizePanel
        block={block}
        open={customizeOpen}
        onOpenChange={setCustomizeOpen}
        options={options}
        onChange={setOptions}
        theme={theme}
        onThemeChange={(next) => setThemeAnimated(next)}
        packageManager={packageManager}
        onPackageManagerChange={setPackageManager}
        onShuffle={shuffleOptions}
        onReset={resetOptions}
      />

      <Toaster position="bottom-right" theme={theme} />
    </TooltipProvider>
  )
}
