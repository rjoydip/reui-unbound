import { useMemo, useState } from "react"
import {
  CalendarIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  FilterIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
  PaperclipIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  SlidersHorizontalIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

import {
  DESKS,
  GROUP_ORDER,
  GROUP_STYLE,
  PLACEMENTS,
  STORIES,
  groupValue,
} from "./data"
import type { GroupKey, Placement, Story } from "./data"

const GROUPS: { key: GroupKey; label: string }[] = [
  { key: "stage", label: "Stage" },
  { key: "desk", label: "Desk" },
  { key: "issue", label: "Issue" },
]

function HeaderCell({ label, sort }: { label: string; sort?: boolean }) {
  return (
    <span className="flex items-center gap-1">
      {label}
      {sort && <ChevronsUpDownIcon className="size-3 opacity-50" />}
    </span>
  )
}

function PlacementBadge({ placement }: { placement: Placement }) {
  if (placement === "Feature") {
    return (
      <Badge
        variant="outline"
        size="default"
        className="rounded border-violet-500/20 bg-violet-500/10 px-1.5 text-violet-600 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300"
      >
        {placement}
      </Badge>
    )
  }
  if (placement === "Brief") {
    return (
      <Badge variant="outline" size="default" className="rounded px-1.5">
        {placement}
      </Badge>
    )
  }
  return (
    <Badge variant="secondary" size="default" className="rounded px-1.5">
      {placement}
    </Badge>
  )
}

function Byline({ ids }: { ids: number[] }) {
  return (
    <div className="flex items-center -space-x-1.5">
      {ids.map((id) => (
        <Avatar key={id} size="sm" className="ring-2 ring-background">
          <AvatarImage src={`https://i.pravatar.cc/64?img=${id}`} alt="" />
        </Avatar>
      ))}
    </div>
  )
}

export function ProductionDeskBlock() {
  const [search, setSearch] = useState("")
  const [groupBy, setGroupBy] = useState<GroupKey>("stage")
  const [desks, setDesks] = useState<Story["desk"][]>([])
  const [placements, setPlacements] = useState<Placement[]>([])
  const [density, setDensity] = useState("Comfortable")
  const [storySlug, setStorySlug] = useState(true)
  const [shown, setShown] = useState({
    angle: true,
    byline: true,
    filed: true,
    publish: true,
    placement: true,
    assets: true,
    notes: true,
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return STORIES.filter((story) => {
      const text =
        !term ||
        [story.title, story.angle, story.slug, story.desk].some((value) =>
          value.toLowerCase().includes(term),
        )
      const deskOk = desks.length === 0 || desks.includes(story.desk)
      const placementOk =
        placements.length === 0 || placements.includes(story.placement)
      return text && deskOk && placementOk
    })
  }, [search, desks, placements])

  const groups = useMemo(
    () =>
      GROUP_ORDER[groupBy]
        .map((value) => ({
          value,
          style: GROUP_STYLE[value],
          rows: filtered.filter((story) => groupValue(story, groupBy) === value),
        }))
        .filter((group) => group.rows.length > 0),
    [groupBy, filtered],
  )

  const columns = [
    "minmax(0,1.1fr)",
    shown.angle ? "minmax(0,1fr)" : null,
    shown.byline ? "112px" : null,
    shown.filed ? "88px" : null,
    shown.publish ? "92px" : null,
    shown.placement ? "108px" : null,
    shown.assets ? "86px" : null,
    shown.notes ? "86px" : null,
    "44px",
  ]
    .filter(Boolean)
    .join(" ")

  const unchecked = STORIES.filter(
    (story) => story.stage === "Drafting" || story.stage === "In Edit",
  ).length

  function toggleDesk(value: Story["desk"]) {
    setDesks((current) =>
      current.includes(value)
        ? current.filter((entry) => entry !== value)
        : [...current, value],
    )
  }

  function togglePlacement(value: Placement) {
    setPlacements((current) =>
      current.includes(value)
        ? current.filter((entry) => entry !== value)
        : [...current, value],
    )
  }

  function toggleShown(key: keyof typeof shown) {
    setShown((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Production desk</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Production Desk</h2>
              <p className="text-muted-foreground text-sm">
                Northline Review • 24 Jul 2026
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Stories</span>
                <span className="rounded-md border px-2 py-0.5 font-medium tabular-nums">
                  {STORIES.length}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Unchecked</span>
                <span className="rounded-md border px-2 py-0.5 font-medium tabular-nums">
                  {unchecked}
                </span>
              </span>
              <Button size="sm" onClick={() => toast("New story")}>
                <PlusIcon />
                New story
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-xs">Group by</span>
              <div className="flex overflow-hidden rounded-md border">
                {GROUPS.map((entry) => (
                  <button
                    key={entry.key}
                    type="button"
                    onClick={() => setGroupBy(entry.key)}
                    className={cn(
                      "border-r px-2.5 py-1.5 text-xs last:border-r-0",
                      groupBy === entry.key
                        ? "bg-muted font-medium"
                        : "text-muted-foreground",
                    )}
                  >
                    {entry.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <InputGroup className="h-9 w-full sm:w-64">
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupInput
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search stories..."
                  className="text-sm"
                />
              </InputGroup>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FilterIcon />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-52 p-0">
                  <div className="p-2">
                    <div className="text-muted-foreground px-2 py-1 text-xs">
                      Desk
                    </div>
                    {DESKS.map((desk) => (
                      <button
                        key={desk}
                        type="button"
                        onClick={() => toggleDesk(desk)}
                        className={cn(
                          "hover:bg-muted flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm",
                          desks.includes(desk) && "bg-muted",
                        )}
                      >
                        <span
                          className={cn(
                            "size-1.5 rounded-full",
                            GROUP_STYLE[desk].dot,
                          )}
                        />
                        {desk}
                      </button>
                    ))}
                  </div>
                  <div className="border-t p-2">
                    <div className="text-muted-foreground px-2 py-1 text-xs">
                      Placement
                    </div>
                    {PLACEMENTS.map((placement) => (
                      <button
                        key={placement}
                        type="button"
                        onClick={() => togglePlacement(placement)}
                        className={cn(
                          "hover:bg-muted flex w-full items-center rounded px-2 py-1.5 text-left",
                          placements.includes(placement) && "bg-muted",
                        )}
                      >
                        <PlacementBadge placement={placement} />
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <SlidersHorizontalIcon />
                    Display
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-80 p-0">
                  <div className="border-b p-3">
                    <div className="text-muted-foreground mb-2 text-xs">
                      Table
                    </div>
                    <div className="flex items-center justify-between py-1 text-sm">
                      Density
                      <Select value={density} onValueChange={setDensity}>
                        <SelectTrigger size="sm" className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Compact">Compact</SelectItem>
                          <SelectItem value="Comfortable">Comfortable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between py-1 text-sm">
                      Story Slug
                      <Switch
                        checked={storySlug}
                        onCheckedChange={setStorySlug}
                      />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-muted-foreground mb-2 text-xs">
                      Display properties
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        ["angle", "Angle"],
                        ["byline", "Byline"],
                        ["filed", "Filed"],
                        ["publish", "Publish"],
                        ["placement", "Placement"],
                        ["assets", "Assets"],
                        ["notes", "Notes"],
                      ].map(([key, label]) => {
                        const active = shown[key as keyof typeof shown]
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => toggleShown(key as keyof typeof shown)}
                            className={cn(
                              "flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs",
                              active
                                ? "bg-muted font-medium"
                                : "text-muted-foreground",
                            )}
                          >
                            {active && <CheckIcon className="size-3" />}
                            {label}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {groups.length === 0 && (
            <div className="text-muted-foreground px-4 py-10 text-center text-sm">
              No stories match the current filters.
            </div>
          )}

          {groups.map((group) => (
            <div key={group.value}>
              <div
                className={cn(
                  "flex items-center justify-between gap-2 border-b px-3 py-2",
                  group.style.bar,
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn("size-2 rounded-full", group.style.dot)}
                  />
                  <span className="text-xs font-semibold tracking-wide uppercase">
                    {group.value}
                  </span>
                  <span className="rounded-full border bg-background/60 px-1.5 text-xs tabular-nums dark:bg-transparent">
                    {group.rows.length}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="icon-sm"
                  aria-label={`Add story to ${group.value}`}
                  onClick={() => toast(`New story in ${group.value}`)}
                >
                  <PlusIcon />
                </Button>
              </div>

              <div
                className="text-muted-foreground grid items-center gap-x-4 border-b bg-background px-3 py-2 text-xs"
                style={{ gridTemplateColumns: columns }}
              >
                <HeaderCell label="Story" sort />
                {shown.angle && <HeaderCell label="Angle" />}
                {shown.byline && <HeaderCell label="Byline" />}
                {shown.filed && <HeaderCell label="Filed" sort />}
                {shown.publish && <HeaderCell label="Publish" sort />}
                {shown.placement && <HeaderCell label="Placement" />}
                {shown.assets && <HeaderCell label="Assets" sort />}
                {shown.notes && <HeaderCell label="Notes" sort />}
                <span />
              </div>

              {group.rows.map((story) => (
                <div
                  key={story.id}
                  className={cn(
                    "hover:bg-muted/30 grid items-center gap-x-4 border-b px-3 last:border-b-0",
                    density === "Compact" ? "py-1.5" : "py-2.5",
                  )}
                  style={{ gridTemplateColumns: columns }}
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">
                      {story.title}
                    </div>
                    {storySlug && (
                      <div className="text-muted-foreground text-xs">
                        {story.slug}
                      </div>
                    )}
                  </div>

                  {shown.angle && (
                    <span className="text-muted-foreground truncate text-sm">
                      {story.angle}
                    </span>
                  )}

                  {shown.byline && <Byline ids={story.bylines} />}

                  {shown.filed && (
                    <span className="text-muted-foreground text-sm tabular-nums">
                      {story.filed}
                    </span>
                  )}

                  {shown.publish && (
                    <span className="text-muted-foreground text-sm tabular-nums">
                      {story.publish}
                    </span>
                  )}

                  {shown.placement && (
                    <span>
                      <PlacementBadge placement={story.placement} />
                    </span>
                  )}

                  {shown.assets && (
                    <Badge
                      variant="outline"
                      size="default"
                      className="w-fit gap-1 rounded-md px-1.5 tabular-nums"
                    >
                      <PaperclipIcon />
                      {story.assets}
                    </Badge>
                  )}

                  {shown.notes && (
                    <Badge
                      variant="outline"
                      size="default"
                      className="w-fit gap-1 rounded-md px-1.5 tabular-nums"
                    >
                      <MessageSquareIcon />
                      {story.notes}
                    </Badge>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        aria-label={`Actions for ${story.title}`}
                      >
                        <MoreHorizontalIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem>
                        <PencilIcon />
                        Open draft
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <PaperclipIcon />
                        View assets
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onSelect={() => toast(`Moving ${story.slug}`)}
                      >
                        <CalendarIcon />
                        Move publish date
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductionDeskBlock
