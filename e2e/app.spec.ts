import { expect, test } from "@playwright/test"

test("loads the blocks catalog with the preview shell", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle("Reui Unbound")
  await expect(
    page.getByRole("navigation", { name: "Sections" }),
  ).toBeVisible()
  await expect(
    page.getByRole("navigation", { name: "Blocks" }),
  ).toBeVisible()
  await expect(page.getByRole("tab", { name: "Preview" })).toHaveAttribute(
    "aria-selected",
    "true",
  )
  await expect(page.getByText("Customers").first()).toBeVisible()
})

test("switches sections and jumps through search", async ({ page }) => {
  await page.goto("/")

  await page
    .getByRole("navigation", { name: "Sections" })
    .getByRole("button", { name: "Components" })
    .click()

  await expect(page).toHaveURL(/#accordion.*-radix$/)
  await expect(
    page.getByRole("navigation", { name: "Components" }),
  ).toBeVisible()

  await page
    .getByRole("button", { name: "Search blocks and components" })
    .click()
  await page
    .getByPlaceholder("Search blocks and components...")
    .fill("badge")
  await page
    .getByRole("dialog")
    .getByRole("button", { name: /^Badge/ })
    .first()
    .click()

  await expect(page).toHaveURL(/#badge.*-radix$/)
  await expect(page.getByRole("dialog")).toHaveCount(0)
})

test("shows source files in the code tab", async ({ page }) => {
  await page.goto("/")

  await page.getByRole("tab", { name: "Code" }).click()

  await expect(page.getByRole("button", { name: "index.tsx" })).toBeVisible()
  await expect(page.getByText(/\d+ lines/)).toBeVisible()
  await expect(page.locator("pre.kirari")).toBeVisible()
})

test("switches the install command package manager", async ({ page }) => {
  await page.goto("/")

  await page.getByRole("button", { name: "Dependencies" }).click()
  const dialog = page.getByRole("dialog")

  await expect(
    dialog.getByText(
      /bunx --bun shadcn@latest add @reui-unbound\/data-grid-base-[\w-]+/,
    ),
  ).toBeVisible()

  await dialog.getByRole("button", { name: "npm", exact: true }).click()

  await expect(
    dialog.getByText(/npx shadcn@latest add @reui-unbound\/data-grid-base-[\w-]+/),
  ).toBeVisible()
})

test("keeps the chosen theme after a reload", async ({ page }) => {
  await page.goto("/")
  const html = page.locator("html")

  await page.getByRole("button", { name: "Toggle color scheme" }).click()
  await expect(html).toHaveClass(/dark/)

  await page.reload()
  await expect(html).toHaveClass(/dark/)

  await page.getByRole("button", { name: "Toggle color scheme" }).click()
  await expect(html).not.toHaveClass(/dark/)
})

test("persists favorites across reloads", async ({ page }) => {
  await page.goto("/")

  await page.getByRole("button", { name: "Add to favorites" }).click()
  await expect(
    page.getByRole("button", { name: "Remove from favorites" }),
  ).toBeVisible()

  await page.reload()
  await expect(
    page.getByRole("button", { name: "Remove from favorites" }),
  ).toBeVisible()

  await page.getByRole("button", { name: "Favorites", exact: true }).click()
  await expect(
    page
      .getByRole("navigation", { name: "Blocks" })
      .getByRole("button", { name: "Customers" }),
  ).toBeVisible()
})

test("opens the generated documentation", async ({ page }) => {
  await page.goto("/")

  await page
    .getByRole("navigation", { name: "Sections" })
    .getByRole("button", { name: "Docs" })
    .click()

  await expect(page.getByRole("heading", { name: "Documentation" })).toBeVisible()
  await expect(
    page.getByRole("navigation", { name: "Documentation" }),
  ).toBeVisible()
  await expect(page.getByPlaceholder("Filter docs...")).toBeVisible()
})

test("renders a standalone preview without the demo shell", async ({ page }) => {
  await page.goto("/?preview=data-grid-base-1")

  await expect(
    page.getByRole("navigation", { name: "Sections" }),
  ).toHaveCount(0)
  await expect(page.getByRole("tab", { name: "Preview" })).toHaveCount(0)
  await expect(page.getByText("Customers").first()).toBeVisible()
})
