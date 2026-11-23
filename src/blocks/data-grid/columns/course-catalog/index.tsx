import { useMemo, useState } from "react"
import {
  BookOpenIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  StarIcon,
} from "lucide-react"
import type { ColumnDef, PaginationState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/kit/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/kit/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/kit/data-grid/~data-grid-column-header"
import { DataGridPagination } from "@/components/kit/data-grid/~data-grid-pagination"
import { DataGridScrollArea } from "@/components/kit/data-grid/~data-grid-scroll-area"
import { DataGridTable } from "@/components/kit/data-grid/~data-grid-table"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/kit/frame"
import { cn } from "cn"

import { COURSE_CATEGORIES, COURSE_TABS, COURSES } from "./data"
import type { Course, CourseStatus } from "./data"
import course1 from "./assets/course-1.png"
import course2 from "./assets/course-2.png"
import course3 from "./assets/course-3.png"
import course4 from "./assets/course-4.png"
import course5 from "./assets/course-5.png"
import course6 from "./assets/course-6.png"
import course7 from "./assets/course-7.png"
import course8 from "./assets/course-8.png"

const COURSE_IMAGES: Record<number, string> = {
  1: course1,
  2: course2,
  3: course3,
  4: course4,
  5: course5,
  6: course6,
  7: course7,
  8: course8,
}

const TAG_VARIANTS: Record<string, "info-light" | "warning-light" | "primary-light" | "success-light"> = {
  Development: "info-light",
  Fundamental: "warning-light",
  Design: "primary-light",
  "UI/UX": "success-light",
}

function CourseCell({ course }: { course: Course }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <img
        src={COURSE_IMAGES[course.image]}
        alt=""
        className="size-9 shrink-0 rounded-md border object-cover grayscale"
      />
      <div className="min-w-0">
        <div className="truncate font-medium">{course.title}</div>
        <div className="text-muted-foreground truncate text-xs">
          by {course.author} · Created {course.created}
        </div>
      </div>
    </div>
  )
}

function Stars({ value }: { value: number }) {
  const filled = Math.round(value)
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            className={cn(
              "size-3.5",
              index < filled
                ? "fill-warning text-warning"
                : "text-muted-foreground/35",
            )}
          />
        ))}
      </div>
      <span className="text-muted-foreground text-xs tabular-nums">
        {value.toFixed(1)}
      </span>
    </div>
  )
}

function Assigned({ course }: { course: Course }) {
  const total = course.assigned + course.assignedMore
  return (
    <div className="flex items-center">
      <div className="flex -space-x-1.5">
        {Array.from({ length: course.assigned }, (_, index) => (
          <Avatar key={index} className="border-background size-6 border-2">
            <AvatarImage
              src={`https://i.pravatar.cc/64?u=${course.id}-${index}`}
              alt=""
            />
            <AvatarFallback className="text-[9px]">
              {String.fromCharCode(65 + index)}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      {total > course.assigned && (
        <span className="text-muted-foreground ml-1.5 text-xs">
          +{total - course.assigned}
        </span>
      )}
      <Button variant="ghost" size="icon-xs" className="ml-1" aria-label="Assign member">
        <PlusIcon />
      </Button>
    </div>
  )
}

function Completion({ value }: { value: number | null }) {
  if (value === null) {
    return <span className="text-muted-foreground text-sm">–</span>
  }
  const radius = 8
  const circumference = 2 * Math.PI * radius
  const tone =
    value >= 100
      ? "text-success"
      : value >= 40
        ? "text-warning"
        : "text-destructive"
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 20 20" className={tone}>
        <circle cx="10" cy="10" r={radius} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2.5" />
        <circle
          cx="10"
          cy="10"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - value / 100)}
          transform="rotate(-90 10 10)"
        />
      </svg>
      <span className="text-sm tabular-nums">{value}%</span>
    </div>
  )
}

export function CourseCatalogBlock() {
  const [courses] = useState(COURSES)
  const [tab, setTab] = useState<"All" | CourseStatus>("All")
  const [category, setCategory] = useState("All categories")
  const [search, setSearch] = useState("")
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 8,
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return courses.filter((course) => {
      if (tab !== "All" && course.status !== tab) return false
      if (category !== "All categories" && course.category !== category) return false
      if (!term) return true
      return [course.title, course.author, course.category].some((value) =>
        value.toLowerCase().includes(term),
      )
    })
  }, [courses, tab, category, search])

  const columns = useMemo<ColumnDef<DataGridFeatures, Course>[]>(
    () => [
      {
        id: "course",
        accessorKey: "title",
        header: ({ column }) => <DataGridColumnHeader title="Course" column={column} />,
        cell: ({ row }) => <CourseCell course={row.original} />,
        size: 345,
        enableHiding: false,
      },
      {
        id: "tags",
        accessorFn: (course) => `${course.category} ${course.urgency}`,
        header: ({ column }) => <DataGridColumnHeader title="Tags" column={column} />,
        cell: ({ row }) => (
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant={TAG_VARIANTS[row.original.category]} size="xs">
              {row.original.category}
            </Badge>
            <Badge
              variant={row.original.urgency === "Urgent" ? "destructive-light" : "secondary"}
              size="xs"
            >
              {row.original.urgency}
            </Badge>
          </div>
        ),
        size: 175,
      },
      {
        id: "path",
        accessorKey: "path",
        header: ({ column }) => <DataGridColumnHeader title="Path" column={column} />,
        cell: ({ row }) => (
          <span className="text-muted-foreground inline-flex items-center gap-1.5 tabular-nums">
            <BookOpenIcon className="size-3.5" />
            {row.original.path}
          </span>
        ),
        size: 75,
      },
      {
        id: "score",
        accessorKey: "score",
        header: ({ column }) => <DataGridColumnHeader title="Score" column={column} />,
        cell: ({ row }) => <Stars value={row.original.score} />,
        size: 150,
      },
      {
        id: "assigned",
        accessorKey: "assigned",
        header: ({ column }) => <DataGridColumnHeader title="Assigned" column={column} />,
        cell: ({ row }) => <Assigned course={row.original} />,
        size: 120,
        enableSorting: false,
      },
      {
        id: "completion",
        accessorKey: "completion",
        header: ({ column }) => <DataGridColumnHeader title="Completion" column={column} />,
        cell: ({ row }) => <Completion value={row.original.completion} />,
        size: 120,
      },
      {
        id: "actions",
        header: () => null,
        cell: () => (
          <Button variant="ghost" size="icon-sm" aria-label="Course actions">
            <MoreHorizontalIcon />
          </Button>
        ),
        size: 40,
        enableSorting: false,
      },
    ],
    [],
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filtered,
    pageCount: Math.ceil(filtered.length / pagination.pageSize),
    getRowId: (course) => course.id,
    state: { pagination },
    onPaginationChange: setPagination,
  })

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <h1 className="sr-only">Course catalog</h1>
      <Frame className="w-full max-w-7xl">
        <FramePanel>
          <FrameHeader className="flex-row flex-wrap items-center justify-between gap-3">
            <div>
              <FrameTitle>Course Catalog</FrameTitle>
              <FrameDescription>9 published · 2 draft</FrameDescription>
            </div>
            <Button onClick={() => toast("Add course")}>
              <PlusIcon />
              Add course
            </Button>
          </FrameHeader>

          <DataGrid
            table={table}
            recordCount={filtered.length}
            emptyMessage="No courses match this view."
            tableLayout={{ headerBackground: false, rowBorder: true, headerBorder: true }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1 border-b">
                {COURSE_TABS.map((entry) => (
                  <button
                    key={entry.key}
                    type="button"
                    onClick={() => setTab(entry.key)}
                    className={cn(
                      "-mb-px flex items-center gap-1.5 border-b-2 px-2.5 py-2 text-sm font-medium transition-colors",
                      tab === entry.key
                        ? "border-foreground text-foreground"
                        : "text-muted-foreground hover:text-foreground border-transparent",
                    )}
                  >
                    {entry.key}
                    <Badge size="xs" variant="secondary">
                      {entry.count}
                    </Badge>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger size="sm" className="w-44">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {COURSE_CATEGORIES.map((entry) => (
                        <SelectItem key={entry} value={entry}>
                          {entry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <InputGroup className="w-full sm:max-w-64">
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search courses..."
                      className="text-sm"
                    />
                  </InputGroup>
                </div>
                <Button variant="outline" size="sm" onClick={() => toast("Settings")}>
                  <SlidersHorizontalIcon />
                  Settings
                </Button>
              </div>

              <DataGridContainer>
                <DataGridScrollArea>
                  <DataGridTable />
                </DataGridScrollArea>
              </DataGridContainer>
              <DataGridPagination
                sizes={[8, 12]}
                info="{from} - {to} of {count} courses"
                rowsPerPageLabel="Rows per page"
                className={filtered.length === 0 ? "hidden" : undefined}
              />
            </div>
          </DataGrid>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default CourseCatalogBlock
