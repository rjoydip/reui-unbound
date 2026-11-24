import { ExternalLinkIcon, FolderOpenIcon } from "lucide-react"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Separator } from "@/components/ui/separator"
import { Dropbox } from "@/components/ui/svgs/dropbox"
import { GoogleDrive } from "@/components/ui/svgs/googleDrive"
import { IconStack } from "@/components/kit/icon-stack"
import { cn } from "cn"

function CloudflareLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#F6821F"
        d="M17.5 12.6c.1-.4.1-.8 0-1.2-.3-1.3-1.4-2.2-2.7-2.2-.3 0-.6 0-.9.1a4 4 0 0 0-7.6 1.2 2.9 2.9 0 0 0-2.7 2.9c0 .2 0 .4.1.6h13.1c.7 0 1.2-.5 1.2-1.2 0-.1 0-.2-.1-.3Z"
      />
      <path
        fill="#FBAD41"
        d="M20.6 12.1h-1.5c-.3 0-.5.2-.5.5l-.2 1.3c-.1.5-.5.9-1 1h-2.3c-.2 0-.4.2-.4.4v.2c0 .2.2.4.4.4h4.5c.5 0 .9-.3 1-.8l.5-2.2c.1-.4-.1-.8-.5-.8Z"
      />
    </svg>
  )
}

function OneDriveLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#0364B8"
        d="M14.7 7.8a5 5 0 0 0-9.3 1.4A4 4 0 0 0 1.6 13a4 4 0 0 0 3.9 4h12.8a4.3 4.3 0 0 0 1.7-8.2 5 5 0 0 0-5.3-1Z"
      />
      <path
        fill="#28A8EA"
        d="M14.7 7.8c1.5 0 2.8.6 3.7 1.7a4.3 4.3 0 0 1 1.6 8.3 4.3 4.3 0 0 0-1.7-8.2 5 5 0 0 0-3.6-1.8Z"
      />
    </svg>
  )
}

const STORAGE_CONNECTORS = [
  {
    name: "Dropbox",
    href: "#",
    Logo: Dropbox,
    logoClassName: "size-4 rounded-[3px]",
  },
  {
    name: "Cloudflare R2",
    href: "#",
    Logo: CloudflareLogo,
    logoClassName: "size-5",
  },
  { name: "Google Drive", href: "#", Logo: GoogleDrive, logoClassName: "size-4" },
  {
    name: "Microsoft OneDrive",
    href: "#",
    Logo: OneDriveLogo,
    logoClassName: "size-4.5",
  },
]

export function EmptyState13Block() {
  return (
    <div className="bg-background min-h-svh px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              File Sources
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Connect governed folders for contracts, exports, and client
              delivery packets.
            </p>
          </div>
          <a
            href="#"
            className="text-muted-foreground inline-flex items-center gap-1.5 text-sm transition-colors hover:text-foreground"
          >
            Connector guide
            <ExternalLinkIcon className="size-3.5" />
          </a>
        </div>

        <Separator className="mt-4" />

        <Empty className="min-h-[350px] border-0">
          <EmptyMedia>
            <IconStack aria-hidden="true">
              <FolderOpenIcon className="size-6" />
            </IconStack>
          </EmptyMedia>
          <EmptyHeader className="max-w-[340px]">
            <EmptyTitle className="text-base font-semibold">
              No file sources are linked
            </EmptyTitle>
            <EmptyDescription>
              Attach a storage workspace before review files, billing exports,
              or signed packets can land in this queue.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>

        <div
          aria-label="Storage connectors"
          className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-4"
        >
          {STORAGE_CONNECTORS.map((connector) => (
            <a
              key={connector.name}
              href={connector.href}
              className="bg-card hover:bg-muted/60 flex h-11 min-w-0 items-center justify-center gap-2 rounded-lg border text-sm font-medium shadow-xs transition-colors"
            >
              <connector.Logo className={cn("shrink-0", connector.logoClassName)} />
              <span className="truncate">{connector.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmptyState13Block
