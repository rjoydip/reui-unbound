import { lazy } from "react"
import type { ComponentType } from "react"

import type { BlockFile, Lang } from "./registry"

/** Lazily read a `?raw` module when the code tab is opened. */
export type SourceLoader = () => Promise<string>

export function lazyComponent(
  load: () => Promise<{ default: ComponentType }>,
): ComponentType {
  return lazy(load)
}

export function lazyNamed(
  load: () => Promise<Record<string, unknown>>,
  name: string,
): ComponentType {
  return lazy(() =>
    load().then((module) => ({ default: module[name] as ComponentType })),
  )
}

export function sourceLoader(
  load: () => Promise<{ default: string }>,
): SourceLoader {
  return () => load().then((module) => module.default)
}

export function blockFile(
  name: string,
  source: string | SourceLoader,
  lang: Lang = "tsx",
): BlockFile {
  return typeof source === "string"
    ? { name, code: source, lang }
    : { name, load: source, lang }
}
