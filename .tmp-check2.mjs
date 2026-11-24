import { chromium } from "playwright"

const slugs = ["dialog-10", "dialog-11", "dialog-12", "dialog-13", "dialog-14", "dialog-16"]
const browser = await chromium.launch()
for (const slug of slugs) {
  const page = await browser.newPage({ viewport: { width: 1536, height: 816 } })
  const errors = []
  page.on("pageerror", (err) => errors.push(String(err)))
  try {
    await page.goto(`http://localhost:5200/#${slug}`, { waitUntil: "load", timeout: 45000 })
    const trigger = page.locator("main button").first()
    await trigger.waitFor({ timeout: 15000 })
    const label = await trigger.textContent()
    await trigger.click()
    await page.waitForTimeout(800)
    const dialog = page.locator('[role="dialog"]')
    console.log(`${slug}: trigger="${label?.trim()}" dialog=${await dialog.isVisible()}`)
    await page.screenshot({ path: `C:/Users/rjoydip/AppData/Local/Temp/opencode/${slug}.png` })
  } catch (error) {
    console.log(`${slug}: FAILED ${String(error).slice(0, 160)}`)
  }
  console.log(`${slug}: errors=${errors.slice(0, 3).join(" | ")}`)
  await page.close()
}
await browser.close()
