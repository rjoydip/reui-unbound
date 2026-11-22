import type { PackageManager } from "@/blocks/~internal/registry"

export interface CustomizeOptions {
  library: string
  style: string
  baseColor: string
  themeName: string
  chartColor: string
  iconLibrary: string
  heading: string
  font: string
  radius: string
  menu: string
  menuAccent: string
  preset: string
}

export const DEFAULT_OPTIONS: CustomizeOptions = {
  library: "Base UI",
  style: "Nova",
  baseColor: "Neutral",
  themeName: "Neutral",
  chartColor: "Neutral",
  iconLibrary: "Lucide",
  heading: "Inter",
  font: "Inter",
  radius: "Default",
  menu: "Default / Solid",
  menuAccent: "Subtle",
  preset: "b0",
}

export const PACKAGE_MANAGERS: PackageManager[] = ["npm", "pnpm", "yarn", "bun"]
