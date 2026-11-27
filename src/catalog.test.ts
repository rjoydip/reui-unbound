import { describe, expect, test } from "bun:test"
import { readdirSync, readFileSync } from "node:fs"
import path from "node:path"

import { CATALOG } from "@/blocks/components/~catalog/catalog"
import { COMPONENT_INDEX } from "@/blocks/components/~catalog/index"
import { BLOCKS } from "@/blocks/~internal/registry"

const root = path.join(import.meta.dir, "blocks", "components")

function previewFiles(dir: string): string[] {
  return readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap(
    (entry) => {
      const relative = `${dir}/${entry.name}`
      if (entry.isDirectory()) return previewFiles(relative)
      if (!entry.name.endsWith(".tsx") || entry.name.startsWith("~")) return []
      return [relative]
    },
  )
}

function previewImports(): Set<string> {
  const source =
    readFileSync(path.join(root, "~catalog", "catalog.tsx"), "utf8") +
    readFileSync(path.join(root, "~catalog", "ui-catalog.tsx"), "utf8")
  return new Set(
    [...source.matchAll(/import\("\.\.\/((?:radix|base)\/[^"?]+\.tsx)/g)].map(
      (match) => match[1],
    ),
  )
}

const files = new Set([...previewFiles("radix"), ...previewFiles("base")])
const imported = previewImports()
const componentEntries = CATALOG.filter((entry) => entry.kind === "component")

describe("catalog", () => {
  test("has unique ids", () => {
    expect(new Set(CATALOG.map((entry) => entry.id)).size).toBe(CATALOG.length)
  })

  test("index mirrors the component catalog", () => {
    expect(COMPONENT_INDEX).toHaveLength(componentEntries.length)

    for (const entry of COMPONENT_INDEX) {
      const full = componentEntries.find((item) => item.id === entry.id)
      expect(full).toBeDefined()
      expect(full?.name).toBe(entry.name)
      expect(full?.flavor).toBe(entry.flavor)
      expect(full?.variant).toBe(entry.variant)
      expect(full?.stage).toBe(entry.stage)
    }
  })

  test("every entry exposes a component", () => {
    expect(CATALOG.every((entry) => entry.Component)).toBe(true)
    expect(BLOCKS.every((block) => block.files.length > 0)).toBe(true)
  })

  test("registers every preview file", () => {
    expect([...files].filter((file) => !imported.has(file))).toEqual([])
    expect([...imported].filter((file) => !files.has(file))).toEqual([])
  })
})
