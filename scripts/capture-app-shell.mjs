#!/usr/bin/env node
// Deep capture for the App Shell category: preview + interaction states per block.
import { chromium } from "@playwright/test"
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const outRoot = path.join(root, "captures/application/app-shell")
fs.mkdirSync(outRoot, { recursive: true })

const catalog = JSON.parse(
  fs.readFileSync(path.join(root, "captures/application/_catalog.json"), "utf8"),
).filter((block) => block.category === "App Shell")

const browser = await chromium.launch()
const concurrency = Number(process.env.CONCURRENCY ?? 3)
let cursor = 0
const results = []

async function capture(block) {
  const slug = block.slug
  const dir = path.join(outRoot, slug)
  fs.mkdirSync(dir, { recursive: true })
  const context = await browser.newContext({
    viewport: { width: 1536, height: 816 },
    colorScheme: "light",
  })
  const page = await context.newPage()
  const shots = []
  try {
    await page.goto(`https://reui.io/preview/base/${slug}?embed=1`, {
      waitUntil: "networkidle",
      timeout: 45000,
    })
    await page.waitForTimeout(400)
    await page.screenshot({ path: path.join(dir, "00-preview.png") })
    shots.push("00-preview")

    const triggers = page
      .locator(
        'button[aria-expanded="false"], button[aria-haspopup], [role="tab"]',
      )
      .filter({ hasNotText: /toggle sidebar|collapse|theme/i })
    const count = Math.min(await triggers.count(), 5)
    for (let i = 0; i < count; i++) {
      const trigger = triggers.nth(i)
      try {
        const label = (
          (await trigger.getAttribute("aria-label")) ||
          (await trigger.innerText()) ||
          `control-${i}`
        )
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 40)
        await trigger.click({ timeout: 2500 })
        await page.waitForTimeout(450)
        const name = `${String(i + 1).padStart(2, "0")}-${label.replace(/[^\w-]+/g, "-").toLowerCase()}`
        await page.screenshot({ path: path.join(dir, `${name}.png`) })
        shots.push(name)
        await page.keyboard.press("Escape")
        await page.waitForTimeout(200)
      } catch {
        // Trigger disappeared or is covered; continue with the next one.
      }
    }
    results.push({ ...block, ok: true, shots })
  } catch (error) {
    results.push({ ...block, ok: false, error: String(error.message).slice(0, 200), shots })
  } finally {
    await context.close()
  }
  console.error(`[${results.length}/${catalog.length}] ${slug}`)
}

async function worker() {
  while (cursor < catalog.length) {
    const i = cursor++
    await capture(catalog[i])
  }
}

await Promise.all(Array.from({ length: concurrency }, worker))
results.sort((a, b) => a.slug.localeCompare(b.slug))
fs.writeFileSync(
  path.join(outRoot, "index.json"),
  JSON.stringify(results, null, 2) + "\n",
)
await browser.close()
console.error("app-shell capture complete")
