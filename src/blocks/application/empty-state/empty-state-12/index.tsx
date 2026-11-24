import { useState } from "react"
import {
  ArchiveIcon,
  CalendarClockIcon,
  ChevronDownIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  PlayIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Separator } from "@/components/ui/separator"
import { IconStack } from "@/components/kit/icon-stack"

const EXPORT_AUDIENCE_OPTIONS = [
  "Everyone",
  "Ops leads",
  "Finance reviewers",
  "Client owners",
]

const EXPORT_SCOPE_OPTIONS = [
  "All workspaces",
  "Harbor field",
  "Market lab",
  "Support desk",
]

const EXPORT_RANGE_OPTIONS = [
  "Last 30 days",
  "This quarter",
  "Previous cycle",
  "Custom window",
]

function FilterMenu({
  value,
  options,
  onChange,
}: {
  value: string
  options: string[]
  onChange: (value: string) => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5">
          {value}
          <ChevronDownIcon className="text-muted-foreground size-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-44">
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option} value={option}>
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function EmptyState12Block() {
  const [audience, setAudience] = useState(EXPORT_AUDIENCE_OPTIONS[0])
  const [scope, setScope] = useState(EXPORT_SCOPE_OPTIONS[0])
  const [range, setRange] = useState(EXPORT_RANGE_OPTIONS[0])

  return (
    <div className="bg-background min-h-svh px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Activity Exports
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Download scoped activity packets for billing review, staffing audits,
          and client handoffs.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <FilterMenu
              value={audience}
              options={EXPORT_AUDIENCE_OPTIONS}
              onChange={setAudience}
            />
            <FilterMenu
              value={scope}
              options={EXPORT_SCOPE_OPTIONS}
              onChange={setScope}
            />
            <FilterMenu
              value={range}
              options={EXPORT_RANGE_OPTIONS}
              onChange={setRange}
            />
          </div>

          <ButtonGroup>
            <Button size="sm" className="gap-1.5">
              <PlayIcon className="fill-current" />
              Execute
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon-sm"
                  aria-label="Download options"
                  className="border-l border-primary-foreground/20"
                >
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <FileSpreadsheetIcon />
                  CSV bundle
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileTextIcon />
                  PDF brief
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CalendarClockIcon />
                  Schedule delivery
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </div>

        <Separator className="mt-4" />

        <Empty className="min-h-[420px] border-0">
          <EmptyMedia>
            <IconStack aria-hidden="true">
              <ArchiveIcon className="size-6" />
            </IconStack>
          </EmptyMedia>
          <EmptyHeader className="max-w-[300px]">
            <EmptyTitle className="text-base font-semibold">
              No exportable activity yet
            </EmptyTitle>
            <EmptyDescription>
              Capture approved activity and this view will assemble your next
              review packet.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    </div>
  )
}

export default EmptyState12Block
