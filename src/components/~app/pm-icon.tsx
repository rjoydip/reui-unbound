import type { PackageManager } from "@/blocks/~internal/registry"
import { cn } from "cn"

/** Official marks, served as brand SVGs from Simple Icons. */
const MARKS: Record<
  PackageManager,
  { slug: string; light: string; dark: string }
> = {
  npm: { slug: "npm", light: "CB3837", dark: "CB3837" },
  pnpm: { slug: "pnpm", light: "F69220", dark: "F69220" },
  yarn: { slug: "yarn", light: "2C8EBB", dark: "2C8EBB" },
  bun: { slug: "bun", light: "000000", dark: "FBF0DF" },
}

export function PackageManagerIcon({
  name,
  dark = false,
  className,
}: {
  name: PackageManager
  dark?: boolean
  className?: string
}) {
  const mark = MARKS[name]
  const color = dark ? mark.dark : mark.light

  return (
    <img
      src={`https://cdn.simpleicons.org/${mark.slug}/${color}`}
      alt=""
      aria-hidden
      loading="lazy"
      className={cn("size-3.5 shrink-0", className)}
    />
  )
}
