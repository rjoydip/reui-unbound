import { useState } from "react"
import {
  CopyIcon,
  ExternalLinkIcon,
  HeartIcon,
  InfoIcon,
  MaximizeIcon,
  MonitorIcon,
  PackageIcon,
  PanelLeftIcon,
  RefreshCwIcon,
  Share2Icon,
  SmartphoneIcon,
  TabletIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

import { installCommandFor, registryName } from "@/blocks/~internal/registry"
import { githubSourceUrl } from "@/lib/source-url"
import type { BlockEntry, PackageManager } from "@/blocks/~internal/registry"
import { PackageManagerIcon } from "@/components/~app/pm-icon"
import { InstallCommandPill } from "@/components/~app/install-command-pill"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

export type Device = "desktop" | "tablet" | "mobile"
export type Theme = "light" | "dark"
export type View = "preview" | "code"

function IconButton({
  label,
  onClick,
  children,
  pressed,
  className,
}: {
  label: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  pressed?: boolean
  className?: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={label}
          aria-pressed={pressed}
          onClick={onClick}
          className={cn(
            "text-muted-foreground hover:text-foreground",
            className,
          )}
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

function GitHubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .297C5.37.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function DependenciesDialog({
  block,
  packageManager,
  onPackageManagerChange,
  theme,
}: {
  block: BlockEntry
  packageManager: PackageManager
  onPackageManagerChange: (next: PackageManager) => void
  theme: Theme
}) {
  const { copyToClipboard } = useCopyToClipboard()
  const [open, setOpen] = useState(false)

  function copyText(text: string, label: string) {
    copyToClipboard(text)
    toast(label)
  }

  const install = installCommandFor(
    block.installTarget ?? registryName(block.registryId ?? block.id),
    packageManager,
  )

  const dependencies = [
    ...block.dependencies.registry.map((name) => ({
      name: name.startsWith("@") ? name : `@shadcn/${name}`,
      kind: "Registry" as const,
    })),
    ...block.dependencies.packages.map((name) => ({
      name,
      kind: "NPM" as const,
    })),
  ]

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Dependencies"
            onClick={() => setOpen(true)}
            className="text-muted-foreground hover:text-foreground"
          >
            <PackageIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Dependencies</TooltipContent>
      </Tooltip>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] gap-4 p-6 sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Dependencies
            </DialogTitle>
            <DialogDescription className="flex flex-wrap items-center gap-1.5">
              Packages required by
              <code className="bg-muted text-foreground rounded-md px-2 py-0.5 font-mono text-xs">
                {block.id}
              </code>
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-2">
            <div className="text-xs font-medium">Install command</div>
            <div className="grid gap-2 rounded-lg border p-2">
              <div className="flex items-center gap-1">
                {(["npm", "pnpm", "yarn", "bun"] as PackageManager[]).map(
                  (manager) => (
                    <button
                      key={manager}
                      type="button"
                      aria-pressed={packageManager === manager}
                      onClick={() => onPackageManagerChange(manager)}
                      className={cn(
                        "flex h-7 flex-1 items-center justify-center gap-1.5 rounded-md px-2 text-xs transition-colors",
                        packageManager === manager
                          ? "bg-muted text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <PackageManagerIcon
                        name={manager}
                        dark={theme === "dark"}
                      />
                      {manager}
                    </button>
                  ),
                )}
                <Separator orientation="vertical" className="h-5" />
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Copy install command"
                  onClick={() => copyText(install, "Install command copied")}
                >
                  <CopyIcon />
                </Button>
              </div>
              <code className="bg-muted/40 text-muted-foreground rounded-md px-2.5 py-1.5 font-mono text-[11px] break-all">
                {install}
              </code>
            </div>
          </div>

          <div className="grid max-h-[55vh] gap-2 overflow-y-auto pr-1">
            {dependencies.map((dependency) => (
              <div
                key={`${dependency.kind}-${dependency.name}`}
                className="border-border flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5"
              >
                <span className="truncate font-mono text-sm">
                  {dependency.name}
                </span>
                <Badge
                  variant={
                    dependency.kind === "Registry"
                      ? "success-light"
                      : "warning-light"
                  }
                  size="lg"
                  className="shrink-0 font-medium"
                >
                  {dependency.kind}
                </Badge>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export function PreviewHeader({
  block,
  view,
  onViewChange,
  theme,
  onRefresh,
  onFullscreen,
  onOpenSidebar,
  favorite,
  onToggleFavorite,
  device,
  onDeviceChange,
  packageManager,
  onPackageManagerChange,
  aiPrompt,
}: {
  block: BlockEntry
  view: View
  onViewChange: (view: View) => void
  theme: Theme
  onRefresh: () => void
  onFullscreen: () => void
  onOpenSidebar: () => void
  favorite: boolean
  onToggleFavorite: () => void
  device: Device
  onDeviceChange: (device: Device) => void
  packageManager: PackageManager
  onPackageManagerChange: (next: PackageManager) => void
  aiPrompt: string
}) {
  const { copyToClipboard } = useCopyToClipboard()
  const install = installCommandFor(
    block.installTarget ?? registryName(block.registryId ?? block.id),
    packageManager,
  )

  function copyText(text: string, label: string) {
    copyToClipboard(text)
    toast(label)
  }

  return (
    <div className="bg-background/85 sticky top-16 z-30 flex h-14 items-center justify-between gap-2 border-b px-3 backdrop-blur">
      <div className="flex min-w-0 items-center gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Open blocks"
          className="lg:hidden"
          onClick={onOpenSidebar}
        >
          <PanelLeftIcon />
        </Button>
        <Tabs
          value={view}
          onValueChange={(value) => onViewChange(value as View)}
        >
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex min-w-0 items-center gap-1">
        <div className="hidden items-center gap-0.5 md:flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="About this block"
                className="text-muted-foreground hover:text-foreground"
              >
                <InfoIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {block.name} &middot;{" "}
              {block.kind === "component" ? "Component" : `Data Grid ${block.category}`}
            </TooltipContent>
          </Tooltip>

          <IconButton label="Refresh preview" onClick={onRefresh}>
            <RefreshCwIcon />
          </IconButton>
          <IconButton label="Fullscreen" onClick={onFullscreen}>
            <MaximizeIcon />
          </IconButton>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="ghost"
                size="icon-sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <a
                  href={`${window.location.origin}${window.location.pathname}?preview=${block.id}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open preview in new tab"
                >
                  <ExternalLinkIcon />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Open preview in new tab</TooltipContent>
          </Tooltip>
          <IconButton
            label="Copy AI prompt (docs + install)"
            onClick={() => copyText(aiPrompt, "AI prompt copied")}
          >
            <CopyIcon />
          </IconButton>
          <DependenciesDialog
            block={block}
            packageManager={packageManager}
            onPackageManagerChange={onPackageManagerChange}
            theme={theme}
          />
          <IconButton
            label="Copy link"
            onClick={() => copyText(window.location.href, "Link copied")}
          >
            <Share2Icon />
          </IconButton>
          <IconButton
            label={favorite ? "Remove from favorites" : "Add to favorites"}
            pressed={favorite}
            onClick={onToggleFavorite}
          >
            <HeartIcon
              className={cn(favorite && "fill-current text-rose-500")}
            />
          </IconButton>
          <IconButton
            label="Share on X"
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `${block.name} — ReUI ${block.kind === "component" ? "component" : "Data Grid block"}`,
                )}`,
                "_blank",
                "noopener",
              )
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              className="size-3.5"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
            </svg>
          </IconButton>
        </div>

        <Separator
          orientation="vertical"
          className="mx-1 hidden h-6 md:block"
        />

        <div className="border-border hidden items-center gap-0.5 rounded-lg border p-0.5 sm:flex">
          {(
            [
              ["desktop", MonitorIcon, "Desktop preview"],
              ["tablet", TabletIcon, "Tablet preview"],
              ["mobile", SmartphoneIcon, "Mobile preview"],
            ] as const
          ).map(([value, Icon, label]) => (
            <Tooltip key={value}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={label}
                  aria-pressed={device === value}
                  onClick={() => onDeviceChange(value as Device)}
                  className={cn(
                    "text-muted-foreground",
                    device === value && "bg-muted text-foreground",
                  )}
                >
                  <Icon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="View source on GitHub"
              className="text-muted-foreground hover:text-foreground hidden sm:inline-flex"
              onClick={() =>
                window.open(githubSourceUrl(block), "_blank", "noopener")
              }
            >
              <GitHubIcon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>View source on GitHub</TooltipContent>
        </Tooltip>

        <div className="hidden xl:flex">
          <InstallCommandPill
            install={install}
            registryId={
              block.installTarget ?? registryName(block.registryId ?? block.id)
            }
            packageManager={packageManager}
            onPackageManagerChange={onPackageManagerChange}
            theme={theme}
            onCopy={() => copyText(install, "Install command copied")}
          />
        </div>

      </div>
    </div>
  )
}
