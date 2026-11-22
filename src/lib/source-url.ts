import type { BlockEntry } from "@/blocks/~internal/registry"

const REPOSITORY = "https://github.com/rjoydip/reui-unbound/blob/main"

export function githubSourceUrl(block: BlockEntry) {
  if (block.kind === "component") {
    const name = block.id.replace(/-(radix|base)$/, "")
    const flavor = block.flavor ?? "radix"
    return `${REPOSITORY}/src/blocks/components/${flavor}/${name}.tsx`
  }

  const file = block.files[0]?.name ?? "index.tsx"
  return `${REPOSITORY}/src/blocks/${block.id}/${file}`
}

export const GITHUB_REPOSITORY = "https://github.com/rjoydip/reui-unbound"
