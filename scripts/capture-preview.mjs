#!/usr/bin/env node
// Bulk capture of reui.io application block previews with Playwright.
// Screenshots: light, dark and one interaction state per block + metadata markdown.
import { chromium } from "@playwright/test"
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const outDir = path.join(root, "captures/application")
const shots = path.join(outDir, "screenshots")
const sources = path.join(outDir, "sources")
fs.mkdirSync(shots, { recursive: true })
fs.mkdirSync(sources, { recursive: true })

const catalog = JSON.parse(fs.readFileSync(path.join(outDir, "_catalog.json"), "utf8"))
const indexFile = path.join(outDir, "index.json")
const index = fs.existsSync(indexFile)
  ? JSON.parse(fs.readFileSync(indexFile, "utf8"))
  : []

const browser = await chromium.launch()
const concurrency = Number(process.env.CONCURRENCY ?? 4)
let cursor = 0

async function capture(block, i) {
  const { slug, url } = block
  const light = path.join(shots, `${slug}-light.png`)
  const dark = path.join(shots, `${slug}-dark.png`)
  const inter = path.join(shots, `${slug}-interaction.png`)
  const meta = path.join(sources, `${slug}.md`)
  const entry = { n: i + 1, ...block }
  const context = await browser.newContext({
    viewport: { width: 1536, height: 816 },
    colorScheme: "light",
  })
  const page = await context.newPage()
  try {
    if (!fs.existsSync(meta)) {
      fs.writeFileSync(meta, await fetch(`${url}.md`).then((r) => r.text()))
    }
    await page.goto(`https://reui.io/preview/base/${slug}?embed=1`, {
      waitUntil: "networkidle",
      timeout: 45000,
    })
    await page.waitForTimeout(300)
    if (!fs.existsSync(light)) await page.screenshot({ path: light })
    if (!fs.existsSync(dark)) {
      await page.emulateMedia({ colorScheme: "dark" })
      await page.waitForTimeout(300)
      await page.screenshot({ path: dark })
      await page.emulateMedia({ colorScheme: "light" })
    }
    if (!fs.existsSync(inter)) {
      const trigger = page
        .locator('button[aria-expanded="false"], button[aria-haspopup]')
        .filter({ hasNotText: /toggle sidebar|collapse|theme/i })
        .first()
      try {
        if (await trigger.count()) {
          entry.interaction = (await trigger.getAttribute("aria-label")) ?? (await trigger.innerText()).slice(0, 60)
          await trigger.click({ timeout: 3000 })
          await page.waitForTimeout(600)
        }
      } catch {
        entry.interaction = "none"
      }
      await page.screenshot({ path: inter })
    }
    entry.ok = true
  } catch (error) {
    entry.ok = false
    entry.error = String(error.message || error).slice(0, 300)
  } finally {
    await context.close()
  }
  const at = index.findIndex((e) => e.slug === slug)
  if (at >= 0) index[at] = entry
  else index.push(entry)
  index.sort((a, b) => a.n - b.n)
  fs.writeFileSync(indexFile, JSON.stringify(index, null, 2) + "\n")
  console.error(`[${i + 1}/${catalog.length}] ${slug} ${entry.ok ? "ok" : "FAIL"}`)
}

async function worker() {
  while (cursor < catalog.length) {
    const i = cursor++
    const block = catalog[i]
    const existing = index.find((e) => e.slug === block.slug)
    if (existing?.ok) continue
    await capture(block, i)
  }
}

await Promise.all(Array.from({ length: concurrency }, worker))
await browser.close()
console.error("capture complete")
