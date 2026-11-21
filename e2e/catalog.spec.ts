import { expect, test } from "@playwright/test"

import { readCatalog } from "../src/test/catalog"

for (const item of readCatalog()) {
  test(`${item.kind} ${item.id} renders standalone`, async ({ page }) => {
    const errors: string[] = []
    page.on("pageerror", (error) => errors.push(error.message))

    await page.goto(`/?preview=${item.id}`)

    // Standalone previews skip the demo shell entirely.
    await expect(
      page.getByRole("navigation", { name: "Sections" }),
    ).toHaveCount(0)
    await expect(page.getByRole("tab", { name: "Preview" })).toHaveCount(0)

    await expect
      .poll(() => page.locator("#root").evaluate((el) => el.childElementCount))
      .toBeGreaterThan(0)

    if (item.kind === "block") {
      await expect.poll(() => page.locator("#root").innerText()).not.toBe("")
    }

    expect(errors).toEqual([])
  })
}
