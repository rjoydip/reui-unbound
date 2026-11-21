import { readdirSync } from "node:fs"
import path from "node:path"

export type CatalogItem = {
  id: string
  kind: "block" | "component"
  name: string
  module: string
  flavor?: "radix" | "base"
  sourceFile: string
}

const src = path.resolve(process.cwd(), "src")
const componentsDir = path.join(src, "blocks", "components")

function moduleNames(dir: string) {
  return readdirSync(dir)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.slice(0, -".tsx".length))
    .sort()
}

/** Every preview the demo app can open at `/?preview=<id>`. */
export function readCatalog(): CatalogItem[] {
  const blocks = readdirSync(path.join(src, "blocks"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("data-grid-"))
    .map((entry) => entry.name)
    .sort()
    .map((id) => ({
      id,
      kind: "block" as const,
      name: id,
      module: id,
      sourceFile: path.join(src, "blocks", id, "index.tsx"),
    }))

  const radix = moduleNames(path.join(componentsDir, "radix")).map((name) => ({
    id: `${name}-radix`,
    kind: "component" as const,
    name,
    module: name,
    flavor: "radix" as const,
    sourceFile: path.join(componentsDir, "radix", `${name}.tsx`),
  }))

  const base = moduleNames(path.join(componentsDir, "base")).map((module) => {
    const name = module.replace(/^base-/, "")
    return {
      id: `${name}-base`,
      kind: "component" as const,
      name,
      module,
      flavor: "base" as const,
      sourceFile: path.join(componentsDir, "base", `${module}.tsx`),
    }
  })

  return [...blocks, ...radix, ...base]
}
