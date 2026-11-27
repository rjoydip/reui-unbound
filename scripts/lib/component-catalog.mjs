import fs from "node:fs"
import path from "node:path"

export function quotedFields(block) {
  return Object.fromEntries(
    [...block.matchAll(/(\w+):\s*"([^"]*)"/g)].map((match) => [
      match[1],
      match[2],
    ]),
  )
}

/**
 * Every component preview entry from the radix/base and shadcn/ui catalogs.
 * `kind` is "reui" or "ui"; the rest are the raw catalog fields.
 */
export function componentCatalog(root) {
  const read = (file) =>
    fs.readFileSync(path.join(root, file), "utf8").replace(/\r\n/g, "\n")

  const entries = (source, pattern, kind) =>
    [...source.matchAll(pattern)].map((match) => ({
      ...quotedFields(match[0]),
      kind,
    }))

  return [
    ...entries(
      read("src/blocks/components/~catalog/catalog.tsx"),
      /componentEntry\(\{\n\s+flavor: "[\s\S]*?\n\s+\}\),/g,
      "reui",
    ),
    ...entries(
      read("src/blocks/components/~catalog/ui-catalog.tsx"),
      /uiEntry\(\{\n\s+name: "[\s\S]*?\n\s+\}\),/g,
      "ui",
    ),
  ]
}
