import { chromium } from "playwright"
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1536, height: 816 } })
await page.goto("http://localhost:5200/#dialog-10", { waitUntil: "load" })
await page.locator("main button").first().click()
await page.waitForTimeout(600)
const info = await page.evaluate(() => {
  const dialog = document.querySelector('[role="dialog"]')
  const tabs = dialog?.querySelector('[data-slot="tabs"]')
  const footer = dialog?.querySelector('[data-slot="dialog-footer"]')
  const scroller = dialog?.querySelector(".overflow-y-auto")
  const cs = dialog ? getComputedStyle(dialog) : null
  return {
    dialogClass: dialog?.className,
    dialogBox: dialog?.getBoundingClientRect().toJSON(),
    height: cs?.height,
    maxHeight: cs?.maxHeight,
    display: cs?.display,
    overflow: cs?.overflow,
    tabsBox: tabs?.getBoundingClientRect().toJSON(),
    footerBox: footer?.getBoundingClientRect().toJSON(),
    scrollerBox: scroller?.getBoundingClientRect().toJSON(),
  }
})
console.log(JSON.stringify(info, null, 2))
await browser.close()
