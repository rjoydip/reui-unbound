import { useRef, useState } from "react"
import { FilterIcon, PlusIcon, SquareIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/kit/kanban"
import { cn } from "cn"

type Stage = "Not started" | "Ready" | "Draft" | "Needs calibration"

interface Candidate {
  id: string
  name: string
  role: string
  score: number
  location: string
  date: string
  pay: string
  stage: Stage
  flag?: string
}

const COLUMNS = [
  { id: "sourced", title: "Sourced", dot: "bg-muted-foreground" },
  { id: "screen", title: "Screen", dot: "bg-info" },
  { id: "hiring", title: "Hiring Manager", dot: "bg-info" },
  { id: "panel", title: "Panel", dot: "bg-violet-500" },
  { id: "scorecard", title: "Scorecard", dot: "bg-teal-500" },
  { id: "offer", title: "Offer", dot: "bg-success" },
] as const

const INITIAL: Record<string, Candidate[]> = {
  sourced: [
    { id: "mina-calder", name: "Mina Calder", role: "Staff Product Designer", score: 46, location: "Toronto, CA ET", date: "May 7, 2026", pay: "$178k–$204k", stage: "Not started" },
    { id: "jon-bell", name: "Jon Bell", role: "Senior Data Engineer", score: 38, location: "Austin, US CT", date: "May 8, 2026", pay: "$164k–$188k", stage: "Draft" },
    { id: "amara-finch", name: "Amara Finch", role: "Senior UX Researcher", score: 31, location: "Portland, US PT", date: "May 10, 2026", pay: "$132k–$150k", stage: "Not started" },
  ],
  screen: [
    { id: "priya-rao", name: "Priya Rao", role: "Principal Frontend Engineer", score: 58, location: "Seattle, US PT", date: "May 6, 2026", pay: "$196k–$224k", stage: "Ready" },
    { id: "luca-marin", name: "Luca Marin", role: "Lifecycle Marketing Lead", score: 34, location: "Madrid, ES CET", date: "May 9, 2026", pay: "EUR120k–EUR138k", stage: "Draft" },
  ],
  hiring: [
    { id: "nadia-ellis", name: "Nadia Ellis", role: "Product Operations Manager", score: 54, location: "Brooklyn, US ET", date: "May 10, 2026", pay: "$142k–$164k", stage: "Ready" },
    { id: "theo-grant", name: "Theo Grant", role: "Security Engineering Manager", score: 41, location: "Dublin, IE GMT", date: "May 11, 2026", pay: "EUR154k–EUR176k", stage: "Ready" },
    { id: "keon-wallace", name: "Keon Wallace", role: "GTM Systems Lead", score: 45, location: "Atlanta, US ET", date: "May 14, 2026", pay: "$138k–$158k", stage: "Draft" },
  ],
  panel: [
    { id: "sara-okafor", name: "Sara Okafor", role: "Design Systems Engineer", score: 48, location: "London, UK GMT", date: "May 12, 2026", pay: "GBP118k–GBP136k", stage: "Ready" },
    { id: "arun-mehta", name: "Arun Mehta", role: "Senior Platform Engineer", score: 26, location: "Vancouver, CA PT", date: "May 13, 2026", pay: "$170k–$192k", stage: "Needs calibration", flag: "Panel reschedule" },
  ],
  scorecard: [
    { id: "elena-torres", name: "Elena Torres", role: "Senior Recruiter", score: 48, location: "Chicago, US CT", date: "May 5, 2026", pay: "$126k–$146k", stage: "Needs calibration", flag: "Feedback" },
    { id: "marco-silva", name: "Marco Silva", role: "Revenue Systems Analyst", score: 45, location: "Lisbon, PT WEST", date: "May 6, 2026", pay: "EUR88k–EUR102k", stage: "Draft", flag: "Late feed" },
    { id: "mei-watanabe", name: "Mei Watanabe", role: "People Analytics Manager", score: 35, location: "Tokyo, JP JST", date: "May 8, 2026", pay: "JPY16m–JPY19m", stage: "Needs calibration", flag: "Late feed" },
  ],
  offer: [
    { id: "iris-novak", name: "Iris Novak", role: "Product Designer", score: 62, location: "Berlin, DE CET", date: "May 4, 2026", pay: "EUR92k–EUR108k", stage: "Ready" },
  ],
}

const STAGE = {
  "Not started": { badge: "outline", className: "text-muted-foreground", dot: "bg-muted-foreground" },
  Ready: { badge: "outline", className: "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  Draft: { badge: "info-light", className: "", dot: "bg-info" },
  "Needs calibration": { badge: "warning-light", className: "", dot: "bg-warning" },
} as const

const STAGES: Stage[] = ["Not started", "Ready", "Draft", "Needs calibration"]

const AVATAR_TONES = [
  "bg-info/15 text-info-foreground",
  "bg-success/15 text-success-foreground",
  "bg-warning/15 text-warning-foreground",
  "bg-destructive/15 text-destructive-foreground",
]

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("")
const toneFor = (name: string) => AVATAR_TONES[name.charCodeAt(0) % AVATAR_TONES.length]

const scoreTone = (score: number) =>
  score >= 55
    ? { text: "text-success", bar: "bg-success" }
    : score >= 45
      ? { text: "text-info-foreground", bar: "bg-info" }
      : score >= 30
        ? { text: "text-violet-600 dark:text-violet-400", bar: "bg-violet-500" }
        : { text: "text-warning-foreground", bar: "bg-warning" }

function ScoreBar({ value, tone }: { value: number; tone: string }) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
      <div className={cn("h-full rounded-full", tone)} style={{ width: `${value}%` }} />
    </div>
  )
}

function CandidateCardBody({ candidate }: { candidate: Candidate }) {
  const meta = STAGE[candidate.stage]
  const tone = scoreTone(candidate.score)
  return (
    <div className="flex flex-col gap-2 rounded-lg border bg-card p-3 shadow-xs">
      <div className="flex items-center gap-2">
        <Avatar size="sm" className="size-8">
          <AvatarFallback className={cn("text-[10px] font-medium", toneFor(candidate.name))}>{initials(candidate.name)}</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm leading-tight font-medium">{candidate.name}</span>
          <span className="text-muted-foreground truncate text-xs leading-tight">{candidate.role}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Match score</span>
          <span className={cn("font-semibold tabular-nums", tone.text)}>{candidate.score}%</span>
        </div>
        <ScoreBar value={candidate.score} tone={tone.bar} />
      </div>

      <div className="flex flex-col gap-1.5 pt-0.5">
        <div className="flex items-center gap-1.5 text-xs">
          <SquareIcon className="text-muted-foreground size-3.5" />
          <span>{candidate.location}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <SquareIcon className="text-muted-foreground size-3.5" />
          <span>{candidate.date}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <SquareIcon className="text-muted-foreground size-3.5" />
          <span>{candidate.pay}</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-0.5">
        <Badge variant={meta.badge} size="xs" className={cn("gap-1 text-[10px]", meta.className)}>
          <span className={cn("size-1.5 rounded-full", meta.dot)} />
          {candidate.stage}
        </Badge>
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="text-muted-foreground truncate text-[10px] whitespace-nowrap">Scorecard tracked</span>
          {candidate.flag && <Badge variant="warning-light" size="xs" className="shrink-0 font-normal">{candidate.flag}</Badge>}
        </div>
      </div>
    </div>
  )
}

export function KanbanBoardRecruitingPipelineBlock() {
  const [columns, setColumns] = useState<Record<string, Candidate[]>>(INITIAL)
  const [query, setQuery] = useState("")
  const [stages, setStages] = useState<Stage[]>([])
  const nextId = useRef(0)

  const q = query.trim().toLowerCase()
  const matches = (candidate: Candidate) =>
    (stages.length === 0 || stages.includes(candidate.stage)) &&
    (!q || `${candidate.name} ${candidate.role} ${candidate.location}`.toLowerCase().includes(q))

  const addCandidate = (column: string) => {
    const id = `candidate-${nextId.current++}`
    setColumns((prev) => ({
      ...prev,
      [column]: [
        { id, name: "New candidate", role: "Open role", score: 0, location: "Remote, US", date: "May 15, 2026", pay: "$120k–$140k", stage: "Not started" },
        ...prev[column],
      ],
    }))
  }

  const toggleStage = (stage: Stage) =>
    setStages((prev) => (prev.includes(stage) ? prev.filter((item) => item !== stage) : [...prev, stage]))

  return (
    <div className="flex min-h-svh flex-col gap-5 bg-background p-4 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold tracking-tight">Recruiting Pipeline</h1>
          <p className="text-muted-foreground text-sm">Track candidate fit, interviews, scorecards, and offer readiness.</p>
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <FilterIcon />
                Filters
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-64 gap-3 p-3">
              <Input placeholder="Search candidates or roles" value={query} onChange={(event) => setQuery(event.target.value)} className="h-8" />
              <div className="flex flex-wrap gap-1.5">
                {STAGES.map((stage) => (
                  <Button key={stage} size="xs" variant={stages.includes(stage) ? "secondary" : "outline"} onClick={() => toggleStage(stage)}>
                    {stage}
                  </Button>
                ))}
              </div>
              {(query || stages.length > 0) && (
                <Button variant="ghost" size="xs" className="justify-start text-muted-foreground" onClick={() => { setQuery(""); setStages([]) }}>
                  Clear filters
                </Button>
              )}
            </PopoverContent>
          </Popover>
          <Button size="sm" onClick={() => addCandidate("sourced")}>
            <PlusIcon />
            Add candidate
          </Button>
        </div>
      </div>

      <Kanban value={columns} onValueChange={setColumns} getItemValue={(candidate) => candidate.id}>
        <KanbanBoard className="flex items-start gap-4 overflow-x-auto pb-3">
          {COLUMNS.map((column) => {
            const visible = columns[column.id].filter(matches)
            return (
              <KanbanColumn key={column.id} value={column.id} className="w-[300px] shrink-0">
                <div className="flex flex-col gap-2 rounded-xl border bg-muted/25 p-2">
                  <div className="flex items-center gap-2 px-1.5 pt-1 pb-0.5">
                    <span className={cn("size-2 rounded-full", column.dot)} />
                    <span className="text-sm font-medium">{column.title}</span>
                    <span className="text-muted-foreground text-xs tabular-nums">{visible.length}</span>
                  </div>
                  <KanbanColumnContent value={column.id} className="gap-2">
                    {visible.map((candidate) => (
                      <KanbanItem key={candidate.id} value={candidate.id}>
                        <KanbanItemHandle className="block rounded-lg">
                          <CandidateCardBody candidate={candidate} />
                        </KanbanItemHandle>
                      </KanbanItem>
                    ))}
                  </KanbanColumnContent>
                  <Button variant="ghost" size="sm" className="text-muted-foreground justify-start font-normal" onClick={() => addCandidate(column.id)}>
                    <PlusIcon />
                    Add candidate
                  </Button>
                </div>
              </KanbanColumn>
            )
          })}
        </KanbanBoard>
        <KanbanOverlay>
          {({ value }) => {
            const candidate = Object.values(columns).flat().find((item) => item.id === value)
            return candidate ? <div className="w-[284px] rotate-2"><CandidateCardBody candidate={candidate} /></div> : null
          }}
        </KanbanOverlay>
      </Kanban>
    </div>
  )
}

export default KanbanBoardRecruitingPipelineBlock
