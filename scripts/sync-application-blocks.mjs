#!/usr/bin/env node
// Regenerate src/blocks/application/<category>/~blocks.tsx from implemented folders.
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const manifest = JSON.parse(
  fs.readFileSync("src/blocks/application/~manifest.json", "utf8"),
)

const CATEGORIES = [
  { folder: "app-shell", name: "App Shell", constName: "APP_SHELL_BLOCKS" },
  { folder: "auth", name: "Auth", constName: "AUTH_BLOCKS" },
  { folder: "card", name: "Card", constName: "CARD_BLOCKS" },
  { folder: "dashboard", name: "Dashboard", constName: "DASHBOARD_BLOCKS" },
  { folder: "dialog", name: "Dialog", constName: "DIALOG_BLOCKS" },
  { folder: "empty-state", name: "Empty State", constName: "EMPTY_STATE_BLOCKS" },
  { folder: "event-calendar", name: "Event Calendar", constName: "EVENT_CALENDAR_BLOCKS" },
  { folder: "flow", name: "Flow", constName: "FLOW_BLOCKS" },
  { folder: "form", name: "Form", constName: "FORM_BLOCKS" },
  { folder: "gantt", name: "Gantt", constName: "GANTT_BLOCKS" },
  { folder: "kanban-board", name: "Kanban Board", constName: "KANBAN_BOARD_BLOCKS" },
  { folder: "list", name: "List", constName: "LIST_BLOCKS" },
  { folder: "navbar", name: "Navbar", constName: "NAVBAR_BLOCKS" },
  { folder: "onboarding", name: "Onboarding", constName: "ONBOARDING_BLOCKS" },
  { folder: "profile", name: "Profile", constName: "PROFILE_BLOCKS" },
  { folder: "rich-text-editor", name: "Rich Text Editor", constName: "RICH_TEXT_EDITOR_BLOCKS" },
  { folder: "schedule", name: "Schedule", constName: "SCHEDULE_BLOCKS" },
  { folder: "settings", name: "Settings", constName: "SETTINGS_BLOCKS" },
  { folder: "sheet", name: "Sheet", constName: "SHEET_BLOCKS" },
  { folder: "stats", name: "Stats", constName: "STATS_BLOCKS" },
  { folder: "timeline", name: "Timeline", constName: "TIMELINE_BLOCKS" },
  { folder: "whiteboard", name: "Whiteboard", constName: "WHITEBOARD_BLOCKS" },
  { folder: "wizard", name: "Wizard", constName: "WIZARD_BLOCKS" },
]

function packageName(specifier) {
  if (
    specifier.startsWith(".") ||
    specifier.startsWith("@/") ||
    specifier.startsWith("node:")
  )
    return null
  if (["react", "react-dom", "react/jsx-runtime"].includes(specifier)) return null
  return specifier.startsWith("@")
    ? specifier.split("/").slice(0, 2).join("/")
    : specifier.split("/")[0]
}

function registryDep(specifier) {
  if (specifier.startsWith("@/components/ui/"))
    return specifier.slice("@/components/ui/".length).split("/")[0]
  if (specifier.startsWith("@/components/kit/base/ui/"))
    return (
      "@reui-unbound/base-ui-" +
      specifier.slice("@/components/kit/base/ui/".length).split("/")[0]
    )
  if (specifier.startsWith("@/components/kit/base/"))
    return (
      "@reui-unbound/base-" +
      specifier
        .slice("@/components/kit/base/".length)
        .split("/")[0]
        .replace(/\.tsx?$/, "")
    )
  if (specifier.startsWith("@/components/kit/"))
    return (
      "@reui-unbound/" +
      specifier
        .slice("@/components/kit/".length)
        .split("/")[0]
        .replace(/\.tsx?$/, "")
    )
  if (specifier.startsWith("@/hooks/"))
    return (
      "@reui-unbound/" +
      specifier.slice("@/hooks/".length).split("/")[0].replace(/\.tsx?$/, "")
    )
  return null
}

let total = 0
for (const category of CATEGORIES) {
  const dir = `src/blocks/application/${category.folder}`
  if (!fs.existsSync(path.join(root, dir))) continue
  const prefix = category.folder
  const slugs = fs
    .readdirSync(path.join(root, dir), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.startsWith(`${prefix}-`))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))

  const entries = []
  for (const slug of slugs) {
    const meta = manifest.find((item) => item.slug === slug)
    if (!meta) {
      console.warn(`sync: no manifest entry for ${slug}`)
      continue
    }
    const file = `${dir}/${slug}/index.tsx`
    const source = fs.readFileSync(path.join(root, file), "utf8")
    const registry = new Set()
    const packages = new Set()
    for (const match of source.matchAll(/from\s+["']([^"']+)["']/g)) {
      const pkg = packageName(match[1])
      if (pkg) packages.add(pkg)
      const dep = registryDep(match[1])
      if (dep) registry.add(dep)
    }
    const exportName =
      slug
        .split("-")
        .map((part) => part[0].toUpperCase() + part.slice(1))
        .join("") + "Block"
    const registryName = slug
    entries.push({
      slug,
      meta,
      registry: [...registry].sort(),
      packages: [...packages].sort(),
      exportName,
      registryName,
    })
  }

  const imports = entries
    .map(
      (entry) =>
        `const ${entry.exportName} = lazyComponent(() => import("@/blocks/application/${category.folder}/${entry.slug}"))`,
    )
    .join("\n")
  const rawImports = entries
    .map(
      (entry) =>
        `const ${entry.exportName}Source = sourceLoader(() => import("@/blocks/application/${category.folder}/${entry.slug}/index.tsx?raw"))`,
    )
    .join("\n")

  const items = entries
    .map(
      (entry) => `  {
    id: "${entry.slug}",
    name: ${JSON.stringify(entry.meta.title)},
    category: ${JSON.stringify(category.name)},
    stage: "Application",
    group: "application",
    href: ${JSON.stringify(entry.meta.url)},
    installTarget: "@reui-unbound/${entry.registryName}",
    dependencies: {
      registry: ${JSON.stringify(entry.registry)},
      packages: ${JSON.stringify(entry.packages)},
    },
    Component: ${entry.exportName},
    files: [file("index.tsx", ${entry.exportName}Source, "tsx")],
  },`,
    )
    .join("\n")

  const output = `// Generated by scripts/sync-application-blocks.mjs. Do not edit.
import { blockFile as file, lazyComponent, sourceLoader } from "@/blocks/~internal/lazy"
import type { BlockEntry } from "@/blocks/~internal/registry"

${imports}

${rawImports}

export const ${category.constName}: BlockEntry[] = [
${items}
]
`
  fs.writeFileSync(path.join(root, `${dir}/~blocks.tsx`), output)
  total += entries.length
  console.log(`sync: ${entries.length} ${category.name} blocks -> ${dir}/~blocks.tsx`)
}
console.log(`sync: ${total} application blocks`)
