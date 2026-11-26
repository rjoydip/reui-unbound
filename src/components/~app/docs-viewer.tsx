import { useMemo, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  ChevronRightIcon,
  FilterIcon,
  FolderIcon,
  FolderTreeIcon,
  ListTreeIcon,
  PackageIcon,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { cn } from "cn"

const source = import.meta.glob("../../../docs/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>

const PROD_PREVIEW_ORIGIN = "https://reui-unbound.pages.dev"

type HastNode = {
  type: string
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

function rawText(node: HastNode): string {
  if (node.type === "text") return node.value ?? ""
  return (node.children ?? []).map(rawText).join("")
}

function firstHref(node: HastNode): string | undefined {
  if (node.tagName === "a" && typeof node.properties?.href === "string") {
    return node.properties.href
  }
  for (const child of node.children ?? []) {
    const href = firstHref(child)
    if (href) return href
  }
  return undefined
}

type DocEntry = {
  key: string
  title: string
  group: "Overview" | "Blocks" | "Components"
  category?: string
  content: string
  files: string[]
  dependencies: string[]
  registryDependencies: string[]
}

function normalizePath(value: string) {
  const parts: string[] = []
  for (const part of value.split("/")) {
    if (!part || part === ".") continue
    if (part === "..") parts.pop()
    else parts.push(part)
  }
  return parts.join("/")
}

function buildDocs() {
  return Object.entries(source)
    .map(([path, content]) => {
      const key = path.replace(/^.*docs\//, "docs/")
      const title =
        content.match(/^---[\s\S]*?\ntitle:\s*(.+)$/m)?.[1]?.trim() ??
        content.match(/^#\s+(.+)$/m)?.[1]?.trim() ??
        key.split("/").pop() ??
        key
      const category = content
        .match(/^---[\s\S]*?\ncategory:\s*(.+)$/m)?.[1]
        ?.trim()
      const group = key.startsWith("docs/blocks/")
        ? "Blocks"
        : key.startsWith("docs/components/")
          ? "Components"
          : "Overview"
      const body = content
        .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "")
        .trim()
      const anatomy = splitAnatomy(body)
      return {
        key,
        title,
        group,
        category,
        content: anatomy.content,
        files: anatomy.files,
        dependencies: anatomy.dependencies,
        registryDependencies: anatomy.registryDependencies,
      } satisfies DocEntry
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

/**
 * The generator emits Files / Dependencies / Registry dependencies as plain
 * lists. Pull them out of the markdown so the viewer can render them as
 * cards instead of three more bullet lists.
 */
function splitAnatomy(content: string) {
  const anatomy = {
    content,
    files: [] as string[],
    dependencies: [] as string[],
    registryDependencies: [] as string[],
  }
  const kept: string[] = []

  for (const chunk of content.split(/^(?=## )/m)) {
    const heading = chunk.match(/^## (.+)$/m)?.[1]?.trim()
    const items = [...chunk.matchAll(/^- `?([^`\n]+?)`?\s*$/gm)].map((match) =>
      match[1].trim(),
    )
    if (heading === "Files") anatomy.files = items
    else if (heading === "Dependencies") anatomy.dependencies = items
    else if (heading === "Registry dependencies")
      anatomy.registryDependencies = items
    else kept.push(chunk)
  }

  anatomy.content = kept.join("").trim()
  return anatomy
}

const FILE_TONES: Record<string, string> = {
  tsx: "bg-sky-500",
  ts: "bg-blue-500",
  jsx: "bg-sky-500",
  js: "bg-amber-500",
  css: "bg-rose-500",
  json: "bg-amber-500",
  svg: "bg-violet-500",
  md: "bg-zinc-400",
}

function fileTone(name: string) {
  const extension = name.split(".").pop()?.toLowerCase() ?? ""
  return FILE_TONES[extension] ?? "bg-muted-foreground"
}

function groupFiles(files: string[]) {
  const groups = new Map<string, string[]>()
  for (const file of files) {
    const slash = file.lastIndexOf("/")
    const dir = slash > 0 ? file.slice(0, slash) : "."
    const name = slash > 0 ? file.slice(slash + 1) : file
    groups.set(dir, [...(groups.get(dir) ?? []), name])
  }
  return [...groups.entries()]
}

function AnatomyHeading({
  icon,
  label,
  count,
}: {
  icon: React.ReactNode
  label: string
  count: number
}) {
  return (
    <div className="text-muted-foreground mb-3 flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase">
      {icon}
      {label}
      <span className="border-border bg-background ml-auto rounded-full border px-1.5 py-0.5 font-mono text-[10px] leading-none tabular-nums">
        {count}
      </span>
    </div>
  )
}

/** Files, npm dependencies and registry dependencies as compact reference cards. */
function DocAnatomy({
  files,
  dependencies,
  registryDependencies,
}: Pick<DocEntry, "files" | "dependencies" | "registryDependencies">) {
  if (!files.length && !dependencies.length && !registryDependencies.length) {
    return null
  }

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {files.length > 0 && (
        <section className="bg-muted/30 rounded-xl border p-4">
          <AnatomyHeading
            icon={<FolderTreeIcon className="size-3.5" />}
            label="Files"
            count={files.length}
          />
          <div className="space-y-3 font-mono text-xs leading-5">
            {groupFiles(files).map(([dir, names]) => (
              <div key={dir}>
                <div className="text-muted-foreground flex items-center gap-1.5">
                  <FolderIcon className="size-3.5 shrink-0" />
                  <span className="truncate" title={dir}>
                    {dir}/
                  </span>
                </div>
                <ul className="border-border mt-1 ml-1.5 space-y-0.5 border-l pl-3">
                  {names.map((name) => (
                    <li key={name} className="flex items-center gap-2">
                      <span
                        className={cn(
                          "size-1.5 shrink-0 rounded-full",
                          fileTone(name),
                        )}
                      />
                      <span className="truncate" title={name}>
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {dependencies.length > 0 && (
        <section className="bg-muted/30 rounded-xl border p-4">
          <AnatomyHeading
            icon={<PackageIcon className="size-3.5" />}
            label="Dependencies"
            count={dependencies.length}
          />
          <div className="flex flex-wrap gap-1.5">
            {dependencies.map((dependency) => (
              <a
                key={dependency}
                href={`https://www.npmjs.com/package/${dependency}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-muted group inline-flex items-center gap-1 rounded-md border px-2 py-1 font-mono text-xs transition-colors"
              >
                {dependency}
                <ArrowUpRightIcon className="size-3 opacity-0 transition-opacity group-hover:opacity-60" />
              </a>
            ))}
          </div>
        </section>
      )}

      {registryDependencies.length > 0 && (
        <section className="bg-muted/30 rounded-xl border p-4">
          <AnatomyHeading
            icon={<ListTreeIcon className="size-3.5" />}
            label="Registry dependencies"
            count={registryDependencies.length}
          />
          <div className="flex flex-wrap gap-1.5">
            {registryDependencies.map((dependency) => {
              const slash = dependency.indexOf("/")
              const scope = slash > 0 ? dependency.slice(0, slash + 1) : ""
              return (
                <span
                  key={dependency}
                  className="border-primary/25 bg-primary/5 inline-flex items-center rounded-md border px-2 py-1 font-mono text-xs"
                  title={dependency}
                >
                  {scope && (
                    <span className="text-muted-foreground">{scope}</span>
                  )}
                  {dependency.slice(scope.length)}
                </span>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}

const DOCS = buildDocs()
const GROUPS: DocEntry["group"][] = ["Overview", "Blocks", "Components"]

// Local dev and every deployment preview themselves; override only when the
// docs are hosted somewhere other than the app.
function resolvePreviewHref(href: string) {
  if (!href.startsWith(PROD_PREVIEW_ORIGIN)) return href
  const base = import.meta.env.DEV
    ? window.location.origin
    : import.meta.env.VITE_PREVIEW_BASE_URL || window.location.origin
  return `${base}${href.slice(PROD_PREVIEW_ORIGIN.length)}`
}

function DocLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const resolved = href ? resolvePreviewHref(href) : href
  const external = !!resolved && /^https?:\/\//.test(resolved)
  return (
    <a
      href={resolved}
      {...props}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
    >
      {children}
    </a>
  )
}

type TableCell = { text: string; href?: string }

function tableRows(node?: HastNode) {
  const rows: HastNode[] = []
  const walk = (current: HastNode) => {
    if (current.tagName === "tr") {
      rows.push(current)
      return
    }
    for (const child of current.children ?? []) walk(child)
  }
  if (node) walk(node)
  return rows
}

function tableCells(row: HastNode): { cells: TableCell[]; heading: boolean } {
  const children = row.children ?? []
  const cells = children
    .filter((child) => child.tagName === "th" || child.tagName === "td")
    .map((child) => ({
      text: rawText(child).replace(/\s+/g, " ").trim(),
      href: firstHref(child),
    }))
  return { cells, heading: children.some((child) => child.tagName === "th") }
}

/** Markdown tables as a card per row, so wide index tables stay scannable. */
function DocsTable({ node }: { node?: HastNode }) {
  const rows = tableRows(node).map(tableCells)
  if (rows.length === 0) return null

  const [head, ...body] =
    rows[0]?.heading === true ? rows : [{ cells: [], heading: false }, ...rows]
  const headers = head.cells.map((cell) => cell.text)

  return (
    <div className="my-6 grid gap-2 sm:grid-cols-2">
      {body.map((row, rowIndex) => {
        const [lead, ...rest] = row.cells
        if (!lead) return null
        return (
          <div
            key={rowIndex}
            className="bg-card hover:border-primary/40 rounded-lg border p-3 transition-colors"
          >
            <div className="text-sm leading-5 font-medium">
              {lead.href ? (
                <DocLink href={lead.href}>{lead.text}</DocLink>
              ) : (
                lead.text
              )}
            </div>
            {rest.length > 0 && (
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                {rest.map((cell, cellIndex) => {
                  const header = headers[cellIndex + 1]
                  if (!cell.text) return null
                  return (
                    <span
                      key={cellIndex}
                      className="inline-flex min-w-0 items-center gap-1"
                    >
                      {header && (
                        <span className="text-muted-foreground">{header}</span>
                      )}
                      {cell.href ? (
                        <DocLink
                          href={cell.href}
                          className="bg-muted hover:bg-muted/70 inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 font-medium transition-colors"
                        >
                          {cell.text}
                          <ArrowUpRightIcon className="size-3" />
                        </DocLink>
                      ) : (
                        <span
                          className={cn(
                            /[\d@/_-]/.test(cell.text) &&
                              !/\s/.test(cell.text) &&
                              "truncate font-mono text-[11px]",
                          )}
                          title={cell.text}
                        >
                          {cell.text}
                        </span>
                      )}
                    </span>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function blockCategories(docs: DocEntry[]) {
  const groups = new Map<string, DocEntry[]>()
  for (const doc of docs) {
    const category = doc.category ?? "General"
    groups.set(category, [...(groups.get(category) ?? []), doc])
  }
  return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b))
}

/** Keep the documentation index first in the Overview group. */
function overviewFirst(docs: DocEntry[]) {
  return [...docs].sort(
    (a, b) =>
      Number(b.key === "docs/README.md") - Number(a.key === "docs/README.md"),
  )
}

function DocNavItem({
  doc,
  active,
  onOpen,
}: {
  doc: DocEntry
  active: boolean
  onOpen: (key: string) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(doc.key)}
      className={cn(
        "truncate rounded-md px-2 py-1.5 text-left text-sm transition-colors",
        active
          ? "bg-accent text-accent-foreground font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
      )}
    >
      {doc.title}
    </button>
  )
}

export function DocsViewer() {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState("docs/README.md")
  const [expanded, setExpanded] = useState<string[]>(["Overview"])
  const contentRef = useRef<HTMLDivElement>(null)

  const term = query.trim().toLowerCase()
  const filtered = useMemo(() => {
    if (!term) return DOCS
    return DOCS.filter(
      (doc) =>
        doc.title.toLowerCase().includes(term) ||
        doc.key.toLowerCase().includes(term),
    )
  }, [term])

  const current = DOCS.find((doc) => doc.key === active) ?? DOCS[0]
  const allExpanded =
    filtered.length > 0 &&
    GROUPS.every(
      (group) =>
        !filtered.some((doc) => doc.group === group) ||
        expanded.includes(group),
    )

  function openDoc(key: string) {
    const doc = DOCS.find((entry) => entry.key === key)
    setActive(key)
    if (doc) {
      setExpanded((groups) => [
        ...new Set([
          ...groups,
          doc.group,
          ...(doc.category ? [`${doc.group}/${doc.category}`] : []),
        ]),
      ])
    }
    contentRef.current?.scrollTo({ top: 0 })
  }

  function toggleGroup(group: string) {
    setExpanded((groups) =>
      groups.includes(group)
        ? groups.filter((name) => name !== group)
        : [...groups, group],
    )
  }

  function toggleAll() {
    setExpanded(allExpanded ? [] : [...GROUPS])
  }

  function handleContentClick(event: React.MouseEvent<HTMLDivElement>) {
    const anchor = (event.target as HTMLElement).closest("a")
    if (!anchor) return
    const href = anchor.getAttribute("href")
    if (!href || !href.endsWith(".md")) return
    event.preventDefault()
    const base = active.split("/").slice(0, -1).join("/")
    const target = normalizePath(`${base}/${href}`)
    if (DOCS.some((doc) => doc.key === target)) openDoc(target)
  }

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <aside className="bg-sidebar text-sidebar-foreground hidden w-72 shrink-0 flex-col border-r md:flex">
        <div className="space-y-2 p-3">
          <div className="flex items-center gap-1.5">
            <div className="relative min-w-0 flex-1">
              <FilterIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter docs..."
                className="h-9 pl-9 text-sm"
              />
            </div>
            <button
              type="button"
              onClick={toggleAll}
              aria-label={allExpanded ? "Collapse all categories" : "Expand all categories"}
              title={allExpanded ? "Collapse all categories" : "Expand all categories"}
              className="text-muted-foreground hover:text-foreground flex size-7 shrink-0 items-center justify-center rounded-md transition-colors"
            >
              <ListTreeIcon className="size-4" />
            </button>
          </div>
        </div>

        <div className="px-3">
          <div className="border-border bg-background flex h-10 w-full items-center gap-2 rounded-lg border px-3 text-sm font-medium">
            <BookOpenIcon className="size-4" />
            All docs
            <span className="text-muted-foreground ml-auto text-xs tabular-nums">
              {DOCS.length}
            </span>
          </div>
        </div>

        <div className="text-muted-foreground mt-4 flex items-center justify-between px-4 text-xs">
          <span>Categories</span>
          <button
            type="button"
            onClick={toggleAll}
            aria-label={allExpanded ? "Collapse all categories" : "Expand all categories"}
            title={allExpanded ? "Collapse all categories" : "Expand all categories"}
            className="hover:text-foreground flex size-5 items-center justify-center rounded-sm transition-colors"
          >
            <ListTreeIcon className="size-3.5" />
          </button>
        </div>

        <nav
          aria-label="Documentation"
          className="mt-1 flex-1 overflow-y-auto px-2 pb-4"
        >
          {GROUPS.map((group) => {
            const docs = filtered.filter((doc) => doc.group === group)
            if (docs.length === 0) return null
            const ordered = group === "Overview" ? overviewFirst(docs) : docs
            const isOpen = term ? true : expanded.includes(group)
            const isActive = docs.some((doc) => doc.key === active)
            return (
              <div key={group}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleGroup(group)}
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
                  <span className="truncate">{group}</span>
                  <span className="text-muted-foreground ml-auto text-xs tabular-nums">
                    {docs.length}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-border/70 ml-4 flex flex-col gap-0.5 border-l py-1 pl-2">
                    {group === "Blocks"
                      ? blockCategories(ordered).map(([category, items]) => {
                          const categoryKey = `${group}/${category}`
                          const categoryOpen = term
                            ? true
                            : expanded.includes(categoryKey)
                          return (
                            <div key={category}>
                              <button
                                type="button"
                                aria-expanded={categoryOpen}
                                onClick={() => toggleGroup(categoryKey)}
                                className="hover:bg-muted/60 flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-sm transition-colors"
                              >
                                <ChevronRightIcon
                                  className={cn(
                                    "text-muted-foreground size-3 shrink-0 transition-transform",
                                    categoryOpen && "rotate-90",
                                  )}
                                />
                                <span className="truncate">{category}</span>
                                <span className="text-muted-foreground ml-auto text-xs tabular-nums">
                                  {items.length}
                                </span>
                              </button>
                              {categoryOpen && (
                                <div className="border-border/70 ml-3 flex flex-col gap-0.5 border-l py-1 pl-2">
                                  {items.map((doc) => (
                                    <DocNavItem
                                      key={doc.key}
                                      doc={doc}
                                      active={doc.key === active}
                                      onOpen={openDoc}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        })
                      : ordered.map((doc) => (
                          <DocNavItem
                            key={doc.key}
                            doc={doc}
                            active={doc.key === active}
                            onOpen={openDoc}
                          />
                        ))}
                  </div>
                )}
              </div>
            )
          })}
          {filtered.length === 0 && (
            <div className="text-muted-foreground px-3 py-6 text-sm">
              No docs match “{query}”.
            </div>
          )}
        </nav>
      </aside>

      <main ref={contentRef} className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-8">
          <div className="mb-4 md:hidden">
            <label htmlFor="docs-select" className="sr-only">
              Select documentation page
            </label>
            <select
              id="docs-select"
              value={active}
              onChange={(event) => openDoc(event.target.value)}
              className="bg-background h-9 w-full rounded-md border px-2 text-sm"
            >
              {GROUPS.map((group) => {
                const docs = DOCS.filter((doc) => doc.group === group)
                const ordered =
                  group === "Overview" ? overviewFirst(docs) : docs
                return (
                  <optgroup key={group} label={group}>
                    {ordered.map((doc) => (
                      <option key={doc.key} value={doc.key}>
                        {doc.title}
                      </option>
                    ))}
                  </optgroup>
                )
              })}
            </select>
          </div>

          <div
            className="docs-prose"
            data-group={current.group}
            onClick={handleContentClick}
            key={current.key}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                a: ({ href, children, ...props }) => (
                  <DocLink href={href} {...props}>
                    {children}
                  </DocLink>
                ),
                table: ({ node }) => <DocsTable node={node as HastNode} />,
              }}
            >
              {current.content}
            </ReactMarkdown>
          </div>

          <DocAnatomy
            files={current.files}
            dependencies={current.dependencies}
            registryDependencies={current.registryDependencies}
          />
        </div>
      </main>
    </div>
  )
}
