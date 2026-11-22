import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), "utf8")
const exists = (file) => fs.existsSync(path.join(root, file))

const blocksRegistry = JSON.parse(read("src/blocks/registry.json")).items
const radixRegistry = JSON.parse(
  read("src/components/reui-unbound/registry.json"),
).items
const baseRegistry = JSON.parse(
  read("src/components/reui-unbound/base/registry.json"),
).items

const catalogSource = read("src/blocks/components/catalog.tsx")
const uiCatalogSource = read("src/blocks/components/ui-catalog.tsx")
const sidebarSource = read("src/components/catalog-sidebar.tsx")

function quotedFields(block) {
  return Object.fromEntries(
    [...block.matchAll(/(\w+):\s*"([^"]*)"/g)].map((match) => [
      match[1],
      match[2],
    ]),
  )
}

const reuiEntries = [
  ...catalogSource.matchAll(/componentEntry\(\{([\s\S]*?)\n  \}\),/g),
].map((match) => quotedFields(match[1]))

const uiEntries = [
  ...uiCatalogSource.matchAll(/uiEntry\(\{([\s\S]*?)\n  \}\),/g),
].map((match) => quotedFields(match[1]))

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

const blockRows = []

for (const block of [...blocksRegistry].sort((a, b) =>
  a.title.localeCompare(b.title),
)) {
  const category = block.meta?.category ?? "General"
  const previewId = block.meta?.id ?? block.name
  const target = `@reui-unbound/${block.name}`
  const preview = `/?preview=${previewId}`
  const sourceFile = block.files[0]?.path.replace(/\/[^/]+$/, "")
  const exportName = sourceFile
    ? read(`src/blocks/${block.files[0].path}`).match(
        /export function (\w+)\(/,
      )?.[1]
    : undefined

  const deps = (block.dependencies ?? []).filter(Boolean)
  const registryDeps = (block.registryDependencies ?? []).filter(Boolean)
  const files = (block.files ?? []).map((file) => `src/blocks/${file.path}`)

  const content = `---
title: ${block.title}
description: ${block.description ?? `${block.title} block.`}
category: ${category}
---

# ${block.title}

**Block:** \`${block.name}\` · **Category:** ${category}

[Open live preview](https://reui-unbound.pages.dev${preview})

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
  blockRows.push(
    `| [${block.title}](./${block.name}.md) | \`${previewId}\` | ${category} | [Preview](https://reui-unbound.pages.dev${preview}) |`,
  )
}

write(
  "docs/blocks/README.md",
  `# Blocks

${blockRows.length} demo blocks, grouped by category.

| Block | ID | Category | Preview |
| --- | --- | --- | --- |
${blockRows.join("\n")}
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
    const previewName = entry.id
      ? entry.id.replace(/-(radix|base)$/, "")
      : entry.name
    const previewFile = `src/blocks/components/${flavor}/${previewName}.tsx`
    const previewId = entry.id ?? `${entry.name}-radix`
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
            `src/components/reui-unbound/${flavor === "base" ? "base/" : ""}${file.path}`,
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

  const content = `---
title: ${group.label}
description: ${description}
---

# ${group.label}

${description}

## Preview

${previews
  .map(
    (preview) =>
      `- **${preview.flavor === "base" ? "Base" : "Radix"}** — [\`${preview.id}\`](https://reui-unbound.pages.dev/?preview=${preview.id})`,
  )
  .join("\n")}

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

${groups.size} component categories with ${reuiEntries.length + uiEntries.length} live previews.

| Component | Previews | Install | Live |
| --- | --- | --- | --- |
${componentRows.join("\n")}
`,
)

write(
  "docs/README.md",
  `# Documentation

- [Blocks](./blocks/README.md) — ${blocksRegistry.length} data-grid demo blocks.
- [Components](./components/README.md) — ${groups.size} component categories and ${reuiEntries.length + uiEntries.length} previews.

Each page includes the preview link, install command, source files, and dependencies.

Regenerate these files with:

\`\`\`bash
bun run docs:generate
\`\`\`
`,
)

console.log(
  `docs: ${blocksRegistry.length} blocks, ${groups.size} components, ${reuiEntries.length + uiEntries.length} previews`,
)
