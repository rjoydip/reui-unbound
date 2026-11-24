#!/usr/bin/env node
// Deep capture for one application block category: preview + interaction states.
// Usage: node scripts/capture-category.mjs auth [--concurrency=3]
import { chromium } from "@playwright/test"
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const categorySlug = process.argv[2]
if (!categorySlug) {
  console.error("usage: node scripts/capture-category.mjs <category-slug>")
  process.exit(1)
}

const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "captures/application/_catalog.json"), "utf8"),
)
const categoryNames = {
  auth: "Auth",
  card: "Card",
  dashboard: "Dashboard",
  dialog: "Dialog",
  "empty-state": "Empty State",
  "event-calendar": "Event Calendar",
  flow: "Flow",
  form: "Form",
  "app-shell": "App Shell",
  "data-grid": "Data Grid",
  charts: "Charts",
  solutions: "Solutions",
  "ai-agents": "AI & Agents",
  ecommerce: "eCommerce",
  marketing: "Marketing",
}
const categoryName = categoryNames[categorySlug] ?? categorySlug
const outRoot = path.join(root, "captures/application", categorySlug)
fs.mkdirSync(outRoot, { recursive: true })

const catalog = manifest.filter((block) => block.category === categoryName)
if (catalog.length === 0) {
  console.error(`no blocks found for category ${categoryName}`)
  process.exit(1)
}

const browser = await chromium.launch()
const concurrency = Number(
  (process.argv.find((arg) => arg.startsWith("--concurrency=")) ?? "").split("=")[1] ?? 3,
)
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
      .locator('button[aria-expanded="false"], button[aria-haspopup], [role="tab"]')
      .filter({ hasNotText: /toggle sidebar|collapse|theme/i })
    const count = Math.min(await triggers.count(), 6)
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
    // Form interactions: fill fields, reveal password, submit.
    const inputs = page.locator('input:visible')
    const inputCount = Math.min(await inputs.count(), 6)
    if (inputCount > 0) {
      for (let i = 0; i < inputCount; i++) {
        const input = inputs.nth(i)
        let type = 'text'
        try { type = (await input.getAttribute('type', { timeout: 1500 })) ?? 'text' } catch { continue }
        const value =
          type === 'password'
            ? 'Password123!'
            : type === 'email'
              ? 'nick@reui.io'
              : type === 'tel'
                ? '+1 555 0100'
                : 'nick@reui.io'
        await input.fill(value).catch(() => {})
      }
      await page.waitForTimeout(300)
      await page.screenshot({ path: path.join(dir, '01-filled.png') })
      shots.push('01-filled')

      const reveal = page.locator('button[aria-label*="password" i], button[aria-label*="show" i]').first()
      if (await reveal.count()) {
        await reveal.click({ timeout: 2000 }).catch(() => {})
        await page.waitForTimeout(300)
        await page.screenshot({ path: path.join(dir, '02-password-visible.png') })
        shots.push('02-password-visible')
      }

      const submit = page
        .locator('form button[type="submit"], button:has-text("Sign in"), button:has-text("Sign up"), button:has-text("Continue"), button:has-text("Reset")')
        .first()
      if (await submit.count()) {
        await submit.click({ timeout: 2000 }).catch(() => {})
        await page.waitForTimeout(700)
        await page.screenshot({ path: path.join(dir, '03-submitted.png') })
        shots.push('03-submitted')
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
console.error(`${categoryName} capture complete`)
