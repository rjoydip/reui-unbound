import { ChevronsUpDownIcon, CopyIcon } from "lucide-react"

import { cn } from "cn"
import type { PackageManager } from "@/blocks/~internal/registry"
import { PackageManagerIcon } from "@/components/~app/pm-icon"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function InstallCommandPill({
  install,
  registryId,
  packageManager,
  onPackageManagerChange,
  theme,
  onCopy,
  compact = false,
  fluid = false,
}: {
  install: string
  registryId: string
  packageManager: PackageManager
  onPackageManagerChange: (next: PackageManager) => void
  theme: "light" | "dark"
  onCopy: () => void
  compact?: boolean
  fluid?: boolean
}) {
  return (
    <div
      className={cn(
        "bg-background flex items-center overflow-hidden rounded-md border",
        fluid ? "w-full min-w-0" : "w-fit",
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label="Select package manager"
            title="Select package manager"
            className="hover:bg-muted flex h-8 items-center gap-1 pr-1.5 pl-2 transition-colors"
          >
            <PackageManagerIcon
              name={packageManager}
              dark={theme === "dark"}
              className="size-4"
            />
            <ChevronsUpDownIcon className="text-muted-foreground size-3" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-44">
          <DropdownMenuLabel>Package manager</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={packageManager}
            onValueChange={(next) =>
              onPackageManagerChange(next as PackageManager)
            }
          >
            {(["npm", "pnpm", "yarn", "bun"] as PackageManager[]).map(
              (manager) => (
                <DropdownMenuRadioItem key={manager} value={manager}>
                  <PackageManagerIcon name={manager} dark={theme === "dark"} />
                  {manager}
                </DropdownMenuRadioItem>
              ),
            )}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <span className="bg-border h-8 w-px" />

      <button
        type="button"
        onClick={onCopy}
        title={install}
        aria-label="Copy install command"
        className="hover:bg-muted flex h-8 items-center gap-2 px-2.5 font-mono text-xs transition-colors"
      >
        <span
          className={cn(
            "truncate",
            fluid
              ? "min-w-0 max-w-none flex-1"
              : compact
                ? "max-w-[260px]"
                : "max-w-[280px]",
          )}
        >
          {registryId}
        </span>
        <CopyIcon className="text-muted-foreground size-3.5 shrink-0" />
      </button>
    </div>
  )
}
