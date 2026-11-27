import fs from "node:fs"
import path from "node:path"

import { CATALOG } from "../src/blocks/components/~catalog/catalog.tsx"

const root = process.cwd()

// [id, name, flavor, variant?] — category/kind/stage are constant or derived.
const items = CATALOG.filter((entry) => entry.kind === "component").map(
  ({ id, name, flavor, variant }) => [id, name, flavor, variant],
)

fs.writeFileSync(
  path.join(root, "src/blocks/components/~catalog/index.json"),
  JSON.stringify(items) + "\n",
)

console.log(`catalog index: ${items.length} component entries`)
