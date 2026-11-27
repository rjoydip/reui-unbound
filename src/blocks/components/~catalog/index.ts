import type { BlockEntry } from "@/blocks/~internal/registry"

import entries from "./index.json"

/** Navigation fields only; the full catalog (previews, files, deps) loads on demand. */
export type CatalogIndexEntry = Pick<
  BlockEntry,
  "id" | "name" | "category" | "stage" | "flavor" | "variant" | "kind"
>

export const COMPONENT_INDEX = entries as CatalogIndexEntry[]

export function componentGroups() {
  const map = new Map<string, CatalogIndexEntry[]>()
  for (const entry of COMPONENT_INDEX) {
    const list = map.get(entry.name) ?? []
    list.push(entry)
    map.set(entry.name, list)
  }
  return [...map.entries()]
    .map(([name, items]) => ({ name, entries: items }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
