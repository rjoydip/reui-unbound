#!/usr/bin/env node
// Track the application block port: captured catalogue vs implemented folders.
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "src/blocks/application/~manifest.json"), "utf8"),
)

const implemented = new Set()
const appRoot = path.join(root, "src/blocks/application")
for (const category of fs.readdirSync(appRoot, { withFileTypes: true })) {
  if (!category.isDirectory() || category.name.startsWith("~")) continue
  for (const block of fs.readdirSync(path.join(appRoot, category.name), {
    withFileTypes: true,
  })) {
    if (
      block.isDirectory() &&
      fs.existsSync(path.join(appRoot, category.name, block.name, "index.tsx"))
    ) {
      implemented.add(block.name)
    }
  }
}

const deepCapturePath = (category) =>
  path.join(root, `captures/application/${category}/index.json`)
const readCapture = (category) =>
  fs.existsSync(deepCapturePath(category))
    ? JSON.parse(fs.readFileSync(deepCapturePath(category), "utf8"))
    : []

const deepCapture = readCapture("app-shell")
const navbarCapture = readCapture("navbar")
const onboardingCapture = readCapture("onboarding")
const profileCapture = readCapture("profile")
const rteCapture = readCapture("rich-text-editor")
const scheduleCapture = readCapture("schedule")
const settingsCapture = readCapture("settings")
const sheetCapture = readCapture("sheet")
const statsCapture = readCapture("stats")
const timelineCapture = readCapture("timeline")
const whiteboardCapture = readCapture("whiteboard")
const wizardCapture = readCapture("wizard")

const STATUS = {
  supported: "✅",
  pending: "⏳",
  unsupported: "❌",
}
const statusFor = (done, total) =>
  done === total ? STATUS.supported : STATUS.pending

const blockRegistryPath = path.join(root, "src/blocks/registry.json")
const blockRegistry = fs.existsSync(blockRegistryPath)
  ? JSON.parse(fs.readFileSync(blockRegistryPath, "utf8"))
  : { items: [] }
const dataGridBlocks = (blockRegistry.items ?? [])
  .filter(
    (item) =>
      item.type === "registry:block" &&
      (item.meta?.id ?? "").startsWith("data-grid-"),
  )
  .sort((a, b) => {
    const category = (a.meta?.category ?? "").localeCompare(b.meta?.category ?? "")
    if (category !== 0) return category
    return (
      Number((a.meta?.id ?? "").split("-").pop()) -
      Number((b.meta?.id ?? "").split("-").pop())
    )
  })
const dataGridRows = dataGridBlocks.map(
  (item) =>
    `| ${STATUS.supported} | ${item.title} | \`${item.meta?.id}\` | ${item.meta?.category} |`,
)

const componentRegistryPath = path.join(root, "src/blocks/components/registry.json")
const componentRegistry = fs.existsSync(componentRegistryPath)
  ? JSON.parse(fs.readFileSync(componentRegistryPath, "utf8"))
  : { items: [] }
const componentCounts = new Map()
for (const item of componentRegistry.items ?? []) {
  const filePath = item.files?.[0]?.path ?? ""
  const component = filePath.split("/")[1]
  if (!component) continue
  componentCounts.set(component, (componentCounts.get(component) ?? 0) + 1)
}
const componentName = (slug) =>
  slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
const componentRows = [...componentCounts.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(
    ([slug, count]) =>
      `| ${STATUS.supported} | ${componentName(slug)} | ${count} | [docs](./components/${slug}.md) |`,
  )

const categories = [...new Set(manifest.map((item) => item.category))]
const rows = categories.map((category) => {
  const items = manifest.filter((item) => item.category === category)
  const done = items.filter((item) => implemented.has(item.slug)).length
  return `| ${statusFor(done, items.length)} | ${category} | ${items.length} | ${done} |`
})

const appShell = manifest
  .filter((item) => item.category === "App Shell")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
const appShellRows = appShell.map((item) => {
  const shots = deepCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
  return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
})

const navbar = manifest
  .filter((item) => item.category === "Navbar")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
const navbarRows = navbar.map((item) => {
  const shots = navbarCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
  return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
})

const onboardingRows = manifest
  .filter((item) => item.category === "Onboarding")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = onboardingCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
  })

const profileRows = manifest
  .filter((item) => item.category === "Profile")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = profileCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
  })

const rteRows = manifest
  .filter((item) => item.category === "Rich Text Editor")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = rteCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
  })

const scheduleRows = manifest
  .filter((item) => item.category === "Schedule")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = scheduleCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
  })

const settingsRows = manifest
  .filter((item) => item.category === "Settings")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = settingsCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
  })

const sheetRows = manifest
  .filter((item) => item.category === "Sheet")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = sheetCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
  })

const statsRows = manifest
  .filter((item) => item.category === "Stats")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = statsCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
  })

const timelineRows = manifest
  .filter((item) => item.category === "Timeline")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = timelineCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
  })

const whiteboardRows = manifest
  .filter((item) => item.category === "Whiteboard")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = whiteboardCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
  })

const wizardRows = manifest
  .filter((item) => item.category === "Wizard")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = wizardCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| ${implemented.has(item.slug) ? STATUS.supported : STATUS.pending} | ${item.title} | \`${item.slug}\` | ${shots} |`
  })

const total = manifest.length
const doneTotal = [...implemented].length

const content = `# Block coverage

Coverage status for every block in the catalogue: 305 application blocks from
<https://reui.io/blocks/application> and 61 data grid blocks, plus a summary of
the component examples.

Generated by \`bun run tracker:generate\`; update block folders, then rerun it.

**Legend:** ${STATUS.supported} Supported · ${STATUS.pending} Pending · ${STATUS.unsupported} Not supported

Captured previews live in \`captures/application\`:

- \`screenshots/<slug>-light.png\`, \`<slug>-dark.png\`, \`<slug>-interaction.png\` — 305 blocks.
- \`app-shell/<slug>/*.png\` — deep interaction captures for the App Shell category.
- \`navbar/<slug>/*.png\` — deep interaction captures for the Navbar category.
- \`onboarding/<slug>/*.png\` — deep interaction and per-step captures for the Onboarding category.
- \`profile/<slug>/*.png\` — deep interaction captures for the Profile category.
- \`rich-text-editor/<slug>/*.png\` — deep interaction captures for the Rich Text Editor category.
- \`schedule/<slug>/*.png\` — deep interaction captures for the Schedule category.
- \`settings/<slug>/*.png\` — deep interaction captures for the Settings category.
- \`sheet/<slug>/*.png\` — deep interaction captures for the Sheet category.
- \`stats/<slug>/*.png\` — deep interaction captures for the Stats category.
- \`timeline/<slug>/*.png\` — deep interaction captures for the Timeline category.
- \`whiteboard/<slug>/*.png\` — deep interaction captures for the Whiteboard category.
- \`wizard/<slug>/*.png\` — deep interaction captures for the Wizard category.
- \`sources/<slug>.md\` — agent metadata from reui.io.

> Pro block source is license-gated on reui.io ("Unlock the source"), so the
> implementations are clean-room ports built from the captured previews.

## Progress

- Captured: ${STATUS.supported} ${total} / ${total}
- Implemented: ${statusFor(doneTotal, total)} ${doneTotal} / ${total}
- Data grid blocks: ${STATUS.supported} ${dataGridBlocks.length} / ${dataGridBlocks.length}
- Component categories: ${STATUS.supported} ${componentCounts.size} / ${componentCounts.size} (${[...componentCounts.values()].reduce((sum, count) => sum + count, 0)} previews)

| Status | Category | Blocks | Implemented |
| :---: | --- | ---: | ---: |
${rows.join("\n")}

## App Shell (36)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${appShellRows.join("\n")}

## Navbar (13)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${navbarRows.join("\n")}

## Onboarding (9)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${onboardingRows.join("\n")}

## Profile (10)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${profileRows.join("\n")}

## Rich Text Editor (5)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${rteRows.join("\n")}

## Schedule (10)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${scheduleRows.join("\n")}

## Settings (16)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${settingsRows.join("\n")}

## Sheet (24)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${sheetRows.join("\n")}

## Stats (17)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${statsRows.join("\n")}

## Timeline (9)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${timelineRows.join("\n")}

## Whiteboard (2)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${whiteboardRows.join("\n")}

## Wizard (7)

| Status | Block name | Slug | Interaction captures |
| :---: | --- | --- | ---: |
${wizardRows.join("\n")}

## Data Grid (${dataGridBlocks.length})

| Status | Block name | Id | Category |
| :---: | --- | --- | --- |
${dataGridRows.join("\n")}

## Components

${STATUS.supported} ${componentCounts.size} categories · ${[...componentCounts.values()].reduce((sum, count) => sum + count, 0)} previews. Full breakdown: [component coverage](./component-coverage.md).

## Workflow

1. Capture: \`node scripts/capture-preview.mjs\` (all application blocks) and
   \`node scripts/capture-category.mjs <category>\` (deep interaction states).
2. Implement in \`src/blocks/application/<category>/<slug>/index.tsx\`.
3. Regenerate the block entries: \`node scripts/sync-app-shell.mjs\`.
4. Regenerate the tracker: \`bun run tracker:generate\`.
5. Validate: \`bun run typecheck && bun run lint && bun run build\`.
`

const componentContent = `# Component coverage

Coverage status for the component examples in the registry. Every category has
a generated docs page and installable previews.

Generated by \`bun run tracker:generate\`; update component catalogs, then rerun it.

**Legend:** ${STATUS.supported} Supported · ${STATUS.pending} Pending · ${STATUS.unsupported} Not supported

- Categories: ${STATUS.supported} ${componentCounts.size} / ${componentCounts.size}
- Previews: ${STATUS.supported} ${[...componentCounts.values()].reduce((sum, count) => sum + count, 0)}

| Status | Component | Previews | Docs |
| :---: | --- | ---: | --- |
${componentRows.join("\n")}
`

fs.mkdirSync(path.join(root, "docs"), { recursive: true })
fs.writeFileSync(path.join(root, "docs/block-coverage.md"), content)
fs.writeFileSync(path.join(root, "docs/component-coverage.md"), componentContent)
const legacyTracker = path.join(root, "docs/application-blocks.md")
if (fs.existsSync(legacyTracker)) fs.rmSync(legacyTracker)
console.log(`tracker: ${doneTotal}/${total} implemented, ${categories.length} categories`)
