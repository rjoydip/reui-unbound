import { describe, expect, test } from "bun:test"

import type { BlockEntry } from "../blocks/~internal/registry"
import { GITHUB_REPOSITORY, githubSourceUrl } from "./source-url"

function entry(overrides: Partial<BlockEntry>): BlockEntry {
  return {
    id: "data-grid-base-1",
    name: "Customers",
    category: "Base",
    stage: "Base",
    href: "https://reui.io/blocks/data-grid/base/data-grid-base-1",
    dependencies: { registry: [], packages: [] },
    Component: () => null,
    files: [{ name: "index.tsx", code: "", lang: "tsx" }],
    ...overrides,
  } as BlockEntry
}

describe("githubSourceUrl", () => {
  test("points blocks at their first file", () => {
    expect(githubSourceUrl(entry({}))).toBe(
      `${GITHUB_REPOSITORY}/blob/main/src/blocks/data-grid-base-1/index.tsx`,
    )
  })

  test("falls back to index.tsx when a block has no files", () => {
    expect(githubSourceUrl(entry({ files: [] }))).toBe(
      `${GITHUB_REPOSITORY}/blob/main/src/blocks/data-grid-base-1/index.tsx`,
    )
  })

  test("strips the flavor suffix from component ids", () => {
    expect(
      githubSourceUrl(
        entry({ id: "badge-radix", kind: "component", flavor: "radix" }),
      ),
    ).toBe(`${GITHUB_REPOSITORY}/blob/main/src/blocks/components/radix/badge.tsx`)
  })

  test("keeps the base flavor for base components", () => {
    expect(
      githubSourceUrl(
        entry({ id: "badge-base", kind: "component", flavor: "base" }),
      ),
    ).toBe(`${GITHUB_REPOSITORY}/blob/main/src/blocks/components/base/badge.tsx`)
  })

  test("defaults components without a flavor to radix", () => {
    expect(githubSourceUrl(entry({ id: "alert-radix", kind: "component" }))).toBe(
      `${GITHUB_REPOSITORY}/blob/main/src/blocks/components/radix/alert.tsx`,
    )
  })

  test("exposes the repository root", () => {
    expect(GITHUB_REPOSITORY).toBe("https://github.com/rjoydip/reui-unbound")
  })
})
