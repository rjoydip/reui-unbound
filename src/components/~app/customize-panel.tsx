import {
  AsteriskIcon,
  BrushIcon,
  CopyIcon,
  LayersIcon,
  LayoutListIcon,
  MoonIcon,
  SunIcon,
  TypeIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Kbd } from "@/components/ui/kbd"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

import type { PackageManager } from "@/blocks/~internal/registry"
import { PackageManagerIcon } from "@/components/~app/pm-icon"
import {
  PACKAGE_MANAGERS,
  type CustomizeOptions,
} from "@/components/~app/customize-options"
import type { BlockEntry } from "@/blocks/~internal/registry"

const BASE_COLORS = ["Neutral", "Gray", "Slate", "Stone", "Zinc"]
const THEMES = ["Neutral", "Blue", "Green", "Orange", "Rose"]
const STYLES = ["Nova", "Vega", "Maia", "Lyra", "Mira"]
const LIBRARIES = ["Base UI", "Radix UI"]
const ICON_LIBRARIES = ["Lucide", "Radix Icons", "Tabler"]
const FONTS = ["Inter", "Geist", "DM Sans", "Manrope"]
const RADII = ["Default", "Small", "Large"]
const MENUS = ["Default / Solid", "Default / Transparent", "Inverted"]
const ACCENTS = ["Subtle", "Bold"]

const SWATCH: Record<string, string> = {
  Neutral: "bg-neutral-400",
  Gray: "bg-gray-400",
  Slate: "bg-slate-400",
  Stone: "bg-stone-400",
  Zinc: "bg-zinc-400",
  Blue: "bg-blue-500",
  Green: "bg-emerald-500",
  Orange: "bg-orange-500",
  Rose: "bg-rose-500",
}

type OptionKey = Exclude<keyof CustomizeOptions, "preset">

const OPTION_ROWS: {
  key: OptionKey
  label: string
  values: string[]
  icon: typeof LayersIcon
  swatch?: boolean
  text?: boolean
}[] = [
  {
    key: "library",
    label: "Component Library",
    values: LIBRARIES,
    icon: LayersIcon,
  },
  { key: "style", label: "Style", values: STYLES, icon: AsteriskIcon },
  {
    key: "baseColor",
    label: "Base Color",
    values: BASE_COLORS,
    icon: AsteriskIcon,
    swatch: true,
  },
  {
    key: "themeName",
    label: "Theme",
    values: THEMES,
    icon: AsteriskIcon,
    swatch: true,
  },
  {
    key: "chartColor",
    label: "Chart Color",
    values: THEMES,
    icon: AsteriskIcon,
    swatch: true,
  },
  {
    key: "iconLibrary",
    label: "Icon Library",
    values: ICON_LIBRARIES,
    icon: AsteriskIcon,
  },
  {
    key: "heading",
    label: "Heading",
    values: FONTS,
    icon: TypeIcon,
    text: true,
  },
  { key: "font", label: "Font", values: FONTS, icon: TypeIcon, text: true },
  { key: "radius", label: "Radius", values: RADII, icon: AsteriskIcon },
  { key: "menu", label: "Menu", values: MENUS, icon: LayoutListIcon },
  { key: "menuAccent", label: "Menu Accent", values: ACCENTS, icon: BrushIcon },
]

export function CustomizePanel({
  block,
  open,
  onOpenChange,
  options,
  onChange,
  theme,
  onThemeChange,
  packageManager,
  onPackageManagerChange,
  onShuffle,
  onReset,
}: {
  block: BlockEntry
  open: boolean
  onOpenChange: (open: boolean) => void
  options: CustomizeOptions
  onChange: (next: CustomizeOptions) => void
  theme: "light" | "dark"
  onThemeChange: (theme: "light" | "dark") => void
  packageManager: PackageManager
  onPackageManagerChange: (next: PackageManager) => void
  onShuffle: () => void
  onReset: () => void
}) {

  const { copyToClipboard } = useCopyToClipboard()

  function copyText(text: string, label: string) {
    copyToClipboard(text)
    toast(label)
  }
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full gap-0 p-0 sm:max-w-sm">
        <SheetHeader className="border-b px-4 py-3">
          <SheetTitle>Customize</SheetTitle>
          <SheetDescription className="sr-only">
            Theme and preset options for {block.name}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          <div className="px-4">
            {OPTION_ROWS.map((row) => {
              const value = options[row.key]
              const Icon = row.icon

              return (
                <DropdownMenu key={row.key}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="hover:bg-muted/50 -mx-2 flex w-full items-center justify-between gap-3 rounded-md px-2 py-2.5 text-left transition-colors"
                    >
                      <span className="min-w-0">
                        <span className="text-muted-foreground block text-xs">
                          {row.label}
                        </span>
                        <span className="block truncate text-sm font-medium">
                          {value}
                        </span>
                      </span>
                      {row.swatch ? (
                        <span className="flex size-5 items-center justify-center">
                          <span
                            className={cn(
                              "border-border/60 size-3.5 rounded-full border",
                              SWATCH[value] ?? "bg-muted",
                            )}
                          />
                        </span>
                      ) : row.text ? (
                        <span className="text-muted-foreground text-sm font-medium">
                          Aa
                        </span>
                      ) : (
                        <Icon className="text-muted-foreground size-4" />
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuLabel className="font-medium">
                      {row.label}
                    </DropdownMenuLabel>
                    <DropdownMenuRadioGroup
                      value={value}
                      onValueChange={(next) =>
                        onChange({ ...options, [row.key]: next })
                      }
                    >
                      {row.values.map((option) => (
                        <DropdownMenuRadioItem key={option} value={option}>
                          {option}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            })}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="hover:bg-muted/50 -mx-2 flex w-full items-center justify-between gap-3 rounded-md px-2 py-2.5 text-left transition-colors"
                >
                  <span>
                    <span className="text-muted-foreground block text-xs">
                      Mode
                    </span>
                    <span className="block text-sm font-medium">
                      {theme === "dark" ? "Dark" : "Light"}
                    </span>
                  </span>
                  {theme === "dark" ? (
                    <MoonIcon className="text-muted-foreground size-4" />
                  ) : (
                    <SunIcon className="text-muted-foreground size-4" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuRadioGroup
                  value={theme}
                  onValueChange={(next) =>
                    onThemeChange(next as "light" | "dark")
                  }
                >
                  <DropdownMenuRadioItem value="light">
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    Dark
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="hover:bg-muted/50 -mx-2 flex w-full items-center justify-between gap-3 rounded-md px-2 py-2.5 text-left transition-colors"
                >
                  <span>
                    <span className="text-muted-foreground block text-xs">
                      Package Manager
                    </span>
                    <span className="block text-sm font-medium">
                      {packageManager}
                    </span>
                  </span>
                  <PackageManagerIcon
                    name={packageManager}
                    dark={theme === "dark"}
                    className="size-4"
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuRadioGroup
                  value={packageManager}
                  onValueChange={(next) =>
                    onPackageManagerChange(next as PackageManager)
                  }
                >
                  {PACKAGE_MANAGERS.map((manager) => (
                    <DropdownMenuRadioItem key={manager} value={manager}>
                      <PackageManagerIcon
                        name={manager}
                        dark={theme === "dark"}
                      />
                      {manager}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-3 grid gap-2 px-4">
            <Button
              variant="outline"
              size="sm"
              className="justify-center font-mono"
              onClick={() =>
                copyText(`--preset ${options.preset}`, "Preset copied")
              }
            >
              --preset {options.preset}
              <CopyIcon />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toast("Preset opened", {
                  description: `--preset ${options.preset}`,
                })
              }
            >
              Open Preset
            </Button>
            <Button variant="outline" size="sm" onClick={onShuffle}>
              Shuffle
              <Kbd>R</Kbd>
            </Button>
            <Button variant="outline" size="sm" onClick={onReset}>
              Reset
            </Button>
          </div>

          <div className="pb-6" />
        </div>
      </SheetContent>
    </Sheet>
  )
}
