import fs from "node:fs"
import path from "node:path"

import { CATALOG } from "../src/blocks/components/~catalog/catalog.tsx"

const root = process.cwd()

const items = CATALOG.filter((entry) => entry.kind === "component").map(
  ({ id, name, category, stage, flavor, variant, kind }) => ({
    id,
    name,
    category,
    stage,
    flavor,
    variant,
    kind,
  }),
)

fs.writeFileSync(
  path.join(root, "src/blocks/components/~catalog/index.json"),
  JSON.stringify(items, null, 2) + "\n",
)

console.log(`catalog index: ${items.length} component entries`)
