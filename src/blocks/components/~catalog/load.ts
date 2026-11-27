import type { BlockEntry } from "@/blocks/~internal/registry"

let catalog: Promise<BlockEntry[]> | null = null

/** Full component catalog: previews, files and dependencies load on demand. */
export function loadComponentCatalog() {
  catalog ??= import("./catalog").then((module) => module.COMPONENT_ENTRIES)
  return catalog
}
