import fs from "node:fs"
import path from "node:path"

import { componentCatalog, quotedFields } from "./lib/component-catalog.mjs"

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), "utf8")
const exists = (file) => fs.existsSync(path.join(root, file))

const blocksRegistry = JSON.parse(read("src/blocks/registry.json")).items
const radixRegistry = JSON.parse(
  read("src/components/kit/registry.json"),
).items
const baseRegistry = JSON.parse(
  read("src/components/kit/base/registry.json"),
).items

const catalogSource = read("src/blocks/components/~catalog/catalog.tsx").replace(/\r\n/g, "\n")
const uiCatalogSource = read("src/blocks/components/~catalog/ui-catalog.tsx").replace(/\r\n/g, "\n")
const sidebarSource = read("src/components/~app/catalog-sidebar.tsx")

const catalogEntries = componentCatalog(root)
const reuiEntries = catalogEntries.filter((entry) => entry.kind === "reui")
const uiEntries = catalogEntries.filter((entry) => entry.kind === "ui")

function previewSources(catalogSource) {
  const raw = new Map()
  for (const match of catalogSource.matchAll(
    /const\s+(\w+)\s+=\s+sourceLoader\(\(\)\s+=>\s+import\("\.\.?\/(radix|base)\/([^"?]+)\?raw"\)\)/g,
  )) {
    raw.set(
      match[1],
      `src/blocks/components/${match[2]}/${match[3]}`,
    )
  }
  const sources = new Map()
  for (const match of catalogSource.matchAll(
    /(?:componentEntry|uiEntry)\(\{\n    (?:flavor|name): [\s\S]*?\n  \}\),/g,
  )) {
    const fields = quotedFields(match[0])
    const id = fields.id ?? (fields.name ? `${fields.name}-radix` : undefined)
    const source = match[0].match(/source:\s*(\w+)/)?.[1]
    if (id && source && raw.has(source)) sources.set(id, raw.get(source))
  }
  return sources
}

const previewSourceById = new Map([
  ...previewSources(catalogSource),
  ...previewSources(uiCatalogSource),
])

const notesSource = sidebarSource.slice(
  sidebarSource.indexOf("const COMPONENT_NOTES"),
  sidebarSource.indexOf("function componentGroups"),
)
const notes = Object.fromEntries(
  [
    ...notesSource.matchAll(
      /^\s*(?:"([^"]+)"|([A-Za-z0-9 ]+)):\s*"([^"]+)",?\s*$/gm,
    ),
  ].map((match) => [match[1] ?? match[2], match[3]]),
)

const registryByFlavor = {
  radix: new Map(radixRegistry.map((item) => [item.name, item])),
  base: new Map(baseRegistry.map((item) => [item.name, item])),
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function cleanDir(dir) {
  fs.rmSync(path.join(root, dir), { recursive: true, force: true })
  fs.mkdirSync(path.join(root, dir), { recursive: true })
}

function write(file, content) {
  fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true })
  fs.writeFileSync(path.join(root, file), content.trim() + "\n")
}

function command(target) {
  return `bunx --bun shadcn@latest add ${target}`
}

/* -------------------------------------------------------------------------- */
/* Block docs                                                                 */
/* -------------------------------------------------------------------------- */

cleanDir("docs/blocks")

const sortedBlocks = [...blocksRegistry].sort((a, b) =>
  a.title.localeCompare(b.title),
)
const blocksByCategory = new Map()

for (const block of sortedBlocks) {
  const category = block.meta?.category ?? "General"
  blocksByCategory.set(category, [
    ...(blocksByCategory.get(category) ?? []),
    block,
  ])
}

const categoryNames = [...blocksByCategory.keys()].sort((a, b) =>
  a.localeCompare(b),
)

for (const block of sortedBlocks) {
  const category = block.meta?.category ?? "General"
  const description = block.description ?? `${block.title} block.`
  const previewId = block.meta?.id ?? block.name
  const target = `@reui-unbound/${block.name}`
  const preview = `/?preview=${previewId}`
  const sourceFile = block.files[0]?.path.replace(/\/[^/]+$/, "")
  const exportName = sourceFile
    ? read(`src/blocks/${block.files[0].path}`).match(
        /export function (\w+)\(/,
      )?.[1]
    : undefined
  const related = (blocksByCategory.get(category) ?? [])
    .filter((sibling) => sibling.name !== block.name)
    .slice(0, 6)

  const deps = (block.dependencies ?? []).filter(Boolean)
  const registryDeps = (block.registryDependencies ?? []).filter(Boolean)
  const files = (block.files ?? []).map((file) => `src/blocks/${file.path}`)

  const content = `---
title: ${block.title}
description: ${description}
category: ${category}
---

# ${block.title}

${description}

**Block:** \`${block.name}\` · **Category:** ${category}

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev${preview})

## Install

\`\`\`bash
${command(target)}
\`\`\`

## Usage

\`\`\`tsx
${exportName ? `import { ${exportName} } from "@/blocks/${block.name}"` : `import Block from "@/blocks/${block.name}"`}

export default function Page() {
  return ${exportName ? `<${exportName} />` : "<Block />"}
}
\`\`\`
${
  related.length > 0
    ? `
## More in ${category}

${related
  .map((sibling) => `- [${sibling.title}](./${sibling.name}.md)`)
  .join("\n")}
`
    : ""
}
## Files

${files.map((file) => `- \`${file}\``).join("\n")}
${
  deps.length > 0
    ? `\n## Dependencies\n\n${deps.map((dependency) => `- \`${dependency}\``).join("\n")}`
    : ""
}
${
  registryDeps.length > 0
    ? `\n## Registry dependencies\n\n${registryDeps
        .map((dependency) => `- \`${dependency}\``)
        .join("\n")}`
    : ""
}
`

  write(`docs/blocks/${block.name}.md`, content)
}

const blockSections = categoryNames
  .map((category) => {
    const rows = blocksByCategory.get(category).map((block) => {
      const previewId = block.meta?.id ?? block.name
      return `| [${block.title}](./${block.name}.md) | \`${previewId}\` | [Preview](https://reui-unbound.pages.dev/?preview=${previewId}) |`
    })
    return `## ${category} (${rows.length})

| Block | ID | Preview |
| --- | --- | --- |
${rows.join("\n")}`
  })
  .join("\n\n")

const categoryRows = categoryNames.map(
  (category) => `| ${category} | ${blocksByCategory.get(category).length} |`,
)

write(
  "docs/blocks/README.md",
  `# Blocks

${blocksRegistry.length} application and data-grid demo blocks across ${categoryNames.length} categories.

Each block page has a live preview, install command, usage snippet, source files and dependencies.

| Category | Blocks |
| --- | ---: |
${categoryRows.join("\n")}

${blockSections}
`,
)

/* -------------------------------------------------------------------------- */
/* Component docs                                                             */
/* -------------------------------------------------------------------------- */

cleanDir("docs/components")

const groups = new Map()

for (const entry of reuiEntries) {
  const label = entry.name
  if (!label) continue
  const slug = slugify(label)
  const group = groups.get(slug) ?? { label, slug, entries: [] }
  group.entries.push({ ...entry, kind: "reui" })
  groups.set(slug, group)
}

for (const entry of uiEntries) {
  const label = entry.label
  if (!label) continue
  const slug = slugify(label)
  const group = groups.get(slug) ?? { label, slug, entries: [] }
  group.entries.push({ ...entry, kind: "ui" })
  groups.set(slug, group)
}

const componentRows = []

for (const group of [...groups.values()].sort((a, b) =>
  a.label.localeCompare(b.label),
)) {
  const previews = []
  const installs = []
  const files = []
  const dependencies = new Set()
  const registryDependencies = new Set()

  for (const entry of group.entries) {
    const flavor = entry.flavor ?? "radix"
    const previewId = entry.id ?? `${entry.name}-radix`
    const previewName = entry.id
      ? entry.id.replace(/-(radix|base)$/, "")
      : entry.name
    const previewFile =
      previewSourceById.get(previewId) ??
      `src/blocks/components/${flavor}/${previewName}.tsx`
    if (exists(previewFile)) files.push(previewFile)

    if (entry.kind === "ui") {
      const uiFile = `src/components/ui/${entry.name}.tsx`
      if (exists(uiFile)) files.push(uiFile)
      const target = entry.installTarget ?? entry.name
      installs.push({ label: "shadcn/ui", target })
      const source = exists(uiFile) ? read(uiFile) : ""
      for (const match of source.matchAll(/from\s+["']([^"']+)["']/g)) {
        const specifier = match[1]
        if (specifier.startsWith("@/") || specifier.startsWith(".")) continue
        if (specifier.startsWith("react")) continue
        dependencies.add(
          specifier.startsWith("@")
            ? specifier.split("/").slice(0, 2).join("/")
            : specifier.split("/")[0],
        )
      }
    } else {
      const item =
        flavor === "base"
          ? registryByFlavor.base.get(entry.item)
          : registryByFlavor.radix.get(entry.item)
      const target = entry.installTarget ?? `@reui-unbound/${entry.item}`
      installs.push({ label: flavor === "base" ? "Base" : "Radix", target })
      if (item) {
        for (const file of item.files ?? []) {
          files.push(
            `src/components/kit/${flavor === "base" ? "base/" : ""}${file.path}`,
          )
        }
        for (const dependency of item.dependencies ?? []) {
          dependencies.add(dependency)
        }
        for (const dependency of item.registryDependencies ?? []) {
          registryDependencies.add(dependency)
        }
      }
    }

    previews.push({ id: previewId, flavor })
  }

  const uniqueInstalls = installs.filter(
    (install, index) =>
      installs.findIndex((entry) => entry.target === install.target) === index,
  )
  const uniqueFiles = [...new Set(files)]
  const description =
    notes[group.label] ?? `${group.label} component with live previews.`
  const previewGroups = ["radix", "base"]
    .map((flavor) => {
      const items = previews.filter((preview) => preview.flavor === flavor)
      if (items.length === 0) return ""
      return `### ${flavor === "base" ? "Base" : "Radix"} (${items.length})

${items
  .map(
    (preview) =>
      `- [\`${preview.id}\`](https://reui-unbound.pages.dev/?preview=${preview.id})`,
  )
  .join("\n")}`
    })
    .join("\n\n")

  const content = `---
title: ${group.label}
description: ${description}
---

# ${group.label}

${description}

[← All components](./README.md)

## Preview

${previewGroups}

## Install

${uniqueInstalls
  .map(
    (install) => `\`\`\`bash
# ${install.label}
${command(install.target)}
\`\`\``,
  )
  .join("\n\n")}

## Files

${uniqueFiles.map((file) => `- \`${file}\``).join("\n")}
${
  dependencies.size > 0
    ? `\n## Dependencies\n\n${[...dependencies]
        .sort()
        .map((dependency) => `- \`${dependency}\``)
        .join("\n")}`
    : ""
}
${
  registryDependencies.size > 0
    ? `\n## Registry dependencies\n\n${[...registryDependencies]
        .sort()
        .map((dependency) => `- \`${dependency}\``)
        .join("\n")}`
    : ""
}
`

  write(`docs/components/${group.slug}.md`, content)
  componentRows.push(
    `| [${group.label}](./${group.slug}.md) | ${group.entries.length} | ${uniqueInstalls
      .map((install) => `\`${install.target}\``)
      .join(" · ")} | [Preview](https://reui-unbound.pages.dev/?preview=${previews[0].id}) |`,
  )
}

write(
  "docs/components/README.md",
  `# Components

${groups.size} component categories with ${reuiEntries.length + uiEntries.length} live previews, in Radix and Base UI flavors.

| Component | Previews | Install | Live |
| --- | --- | --- | --- |
${componentRows.join("\n")}
`,
)

write(
  "docs/README.md",
  `# Documentation

Reference for every ReUI Unbound block, component and coverage report. All pages are generated from the registry and component catalogs.

| Section | Contents |
| --- | --- |
| [Blocks](./blocks/README.md) | ${blocksRegistry.length} demo blocks in ${categoryNames.length} categories, grouped by category. |
| [Components](./components/README.md) | ${groups.size} component categories and ${reuiEntries.length + uiEntries.length} previews. |
| [Block coverage](./block-coverage.md) | Port and capture status for the reui.io application blocks and data-grid demos. |
| [Component coverage](./component-coverage.md) | Docs and preview coverage per component category. |

## Install

\`\`\`bash
bunx --bun shadcn@latest add @reui-unbound/<item>
\`\`\`

Browse [blocks](./blocks/README.md) or [components](./components/README.md) for the exact item name and install command.

## Regenerate

Docs are generated — update the registry or component catalog, then run:

\`\`\`bash
bun run docs:generate
\`\`\`
`,
)

/* Sidebar metadata only: page bodies load on demand in the docs viewer. */
function docFiles(dir) {
  const result = []
  for (const entry of fs.readdirSync(path.join(root, dir), {
    withFileTypes: true,
  })) {
    const child = path.posix.join(dir, entry.name)
    if (entry.isDirectory()) result.push(...docFiles(child))
    else if (entry.name.endsWith(".md")) result.push(child)
  }
  return result
}

const docIndex = docFiles("docs")
  .map((key) => {
    const content = read(key)
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
    return { key, title, group, ...(category ? { category } : {}) }
  })
  .sort((a, b) => a.title.localeCompare(b.title))

fs.writeFileSync(
  path.join(root, "docs/~index.json"),
  JSON.stringify(docIndex, null, 2) + "\n",
)

console.log(
  `docs: ${blocksRegistry.length} blocks, ${groups.size} components, ${reuiEntries.length + uiEntries.length} previews`,
)
