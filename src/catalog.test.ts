import { describe, expect, test } from "bun:test"
import { readFileSync } from "node:fs"

import { readCatalog } from "./test/catalog"

const catalog = readCatalog()

function source(file: string) {
  return readFileSync(file, "utf8")
}

const blockRegistry = source("src/blocks/registry.tsx")
const componentCatalog = source("src/blocks/components/catalog.tsx")
const uiCatalog = source("src/blocks/components/ui-catalog.tsx")

describe("catalog", () => {
  test("has unique ids", () => {
    expect(new Set(catalog.map((item) => item.id)).size).toBe(catalog.length)
  })

  test("covers every block folder and component preview", () => {
    expect(catalog.filter((item) => item.kind === "block")).toHaveLength(61)
    expect(catalog.filter((item) => item.kind === "component")).toHaveLength(110)
  })

  for (const item of catalog) {
    test(`${item.kind} ${item.id} is registered and exports a component`, () => {
      const file = source(item.sourceFile)
      expect(file).toMatch(/export (default )?(function|const|class)/)

      if (item.kind === "block") {
        expect(blockRegistry).toContain(`@/blocks/${item.id}"`)
        return
      }

      if (item.flavor === "base") {
        expect(componentCatalog).toContain(`"./base/${item.module}"`)
        expect(componentCatalog).toContain(`id: "${item.id}"`)
        return
      }

      expect(`${componentCatalog}${uiCatalog}`).toContain(
        `"./radix/${item.module}"`,
      )
      const registeredById = componentCatalog.includes(`id: "${item.id}"`)
      const registeredByName = uiCatalog.includes(`name: "${item.module}"`)
      expect(registeredById || registeredByName).toBe(true)
    })
  }
})
