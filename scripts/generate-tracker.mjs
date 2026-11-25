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

const categories = [...new Set(manifest.map((item) => item.category))]
const rows = categories.map((category) => {
  const items = manifest.filter((item) => item.category === category)
  const done = items.filter((item) => implemented.has(item.slug)).length
  const status = done === 0 ? "Pending" : done === items.length ? "Done" : "In progress"
  return `| ${category} | ${items.length} | ${done} | ${status} |`
})

const appShell = manifest
  .filter((item) => item.category === "App Shell")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
const appShellRows = appShell.map((item) => {
  const shots = deepCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
  return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
})

const navbar = manifest
  .filter((item) => item.category === "Navbar")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
const navbarRows = navbar.map((item) => {
  const shots = navbarCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
  return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
})

const onboardingRows = manifest
  .filter((item) => item.category === "Onboarding")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = onboardingCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
  })

const profileRows = manifest
  .filter((item) => item.category === "Profile")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = profileCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
  })

const rteRows = manifest
  .filter((item) => item.category === "Rich Text Editor")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = rteCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
  })

const scheduleRows = manifest
  .filter((item) => item.category === "Schedule")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = scheduleCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
  })

const settingsRows = manifest
  .filter((item) => item.category === "Settings")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = settingsCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
  })

const sheetRows = manifest
  .filter((item) => item.category === "Sheet")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = sheetCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
  })

const statsRows = manifest
  .filter((item) => item.category === "Stats")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = statsCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
  })

const timelineRows = manifest
  .filter((item) => item.category === "Timeline")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = timelineCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
  })

const whiteboardRows = manifest
  .filter((item) => item.category === "Whiteboard")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = whiteboardCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
  })

const wizardRows = manifest
  .filter((item) => item.category === "Wizard")
  .sort((a, b) => Number(a.slug.split("-").pop()) - Number(b.slug.split("-").pop()))
  .map((item) => {
    const shots = wizardCapture.find((capture) => capture.slug === item.slug)?.shots?.length ?? 0
    return `| \`${item.slug}\` | ${item.title} | ${shots} | ${implemented.has(item.slug) ? "Done" : "Pending"} |`
  })

const total = manifest.length
const doneTotal = [...implemented].length

const content = `# Application blocks tracker

Port status for the 305 blocks at <https://reui.io/blocks/application>.
Generated by \`bun run tracker:generate\`; update block folders, then rerun it.

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

- Captured: ${total} / ${total}
- Implemented: ${doneTotal} / ${total}

| Category | Blocks | Implemented | Status |
| --- | ---: | ---: | --- |
${rows.join("\n")}

## App Shell (36)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${appShellRows.join("\n")}

## Navbar (13)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${navbarRows.join("\n")}

## Onboarding (9)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${onboardingRows.join("\n")}

## Profile (10)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${profileRows.join("\n")}

## Rich Text Editor (5)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${rteRows.join("\n")}

## Schedule (10)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${scheduleRows.join("\n")}

## Settings (16)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${settingsRows.join("\n")}

## Sheet (24)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${sheetRows.join("\n")}

## Stats (17)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${statsRows.join("\n")}

## Timeline (9)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${timelineRows.join("\n")}

## Whiteboard (2)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${whiteboardRows.join("\n")}

## Wizard (7)

| Block | Name | Interaction captures | Status |
| --- | --- | ---: | --- |
${wizardRows.join("\n")}

## Workflow

1. Capture: \`node scripts/capture-preview.mjs\` (all application blocks) and
   \`node scripts/capture-category.mjs <category>\` (deep interaction states).
2. Implement in \`src/blocks/application/<category>/<slug>/index.tsx\`.
3. Regenerate the block entries: \`node scripts/sync-app-shell.mjs\`.
4. Regenerate the tracker: \`bun run tracker:generate\`.
5. Validate: \`bun run typecheck && bun run lint && bun run build\`.
`

fs.mkdirSync(path.join(root, "docs"), { recursive: true })
fs.writeFileSync(path.join(root, "docs/application-blocks.md"), content)
console.log(`tracker: ${doneTotal}/${total} implemented, ${categories.length} categories`)
