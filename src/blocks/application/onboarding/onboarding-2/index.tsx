import { useState } from "react"
import {
  ArrowLeftIcon,
  CameraIcon,
  CheckIcon,
  CircleCheckIcon,
  EllipsisIcon,
  BriefcaseIcon,
  MailIcon,
  MessageCircleIcon,
  PodcastIcon,
  PresentationIcon,
  RocketIcon,
  SearchIcon,
  StarIcon,
  UserIcon,
  UsersIcon,
  XIcon,
  PlayIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/kit/stepper"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const STEPS = [
  { title: "Profile", description: "Basic profile details." },
  { title: "Role", description: "Tune starter views." },
  { title: "Source", description: "Optional discovery signal." },
  { title: "Workspace", description: "Name the workspace." },
  { title: "Goals", description: "Pick first workflows." },
  { title: "Invite", description: "Add teammates." },
]

const ROLES = [
  "Product Manager",
  "Engineering Manager",
  "Designer",
  "Developer",
  "Founder or Executive",
  "Operations Manager",
]

const SOURCES = [
  "Google",
  "LinkedIn",
  "Facebook",
  "Instagram",
  "Reddit",
  "X.com",
  "YouTube",
  "Podcast",
  "Newsletter",
  "Friend / coworker",
  "AI assistant",
  "Billboard / outside",
  "Other",
]

const TEAM_SIZES = [
  "Just myself",
  "2-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1,000",
  "1,001-5,000",
  "5,000+",
]

const GOALS = [
  "Product roadmaps",
  "Engineering sprints",
  "Cross-functional projects",
  "Replace our current tool",
  "Just exploring",
]

const TIMEZONES = [
  "UTC-08:00 Pacific Time",
  "UTC-05:00 Eastern Time",
  "UTC+00:00 London",
  "UTC+01:00 Central European Time",
  "UTC+05:30 India Standard Time",
  "UTC+09:00 Japan Standard Time",
]

const SOURCE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Google: SearchIcon,
  LinkedIn: BriefcaseIcon,
  Facebook: UsersIcon,
  Instagram: CameraIcon,
  Reddit: MessageCircleIcon,
  "X.com": XIcon,
  YouTube: PlayIcon,
  Podcast: PodcastIcon,
  Newsletter: MailIcon,
  "Friend / coworker": UsersIcon,
  "AI assistant": StarIcon,
  "Billboard / outside": PresentationIcon,
  Other: EllipsisIcon,
}

function ReuiMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("fill-foreground", className)}>
      <rect width="32" height="32" rx="9" />
      <path d="M11 8.5v8a5 5 0 0 0 10 0v-8" className="fill-none stroke-background" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  )
}

function SuccessMark() {
  return (
    <div className="relative mb-6 flex size-20 items-center justify-center">
      <span className="bg-card absolute inset-0 translate-x-3 -rotate-6 rounded-xl border shadow-sm" />
      <span className="bg-card absolute inset-0 translate-x-1.5 -rotate-3 rounded-xl border shadow-sm" />
      <span className="bg-card relative flex size-16 items-center justify-center rounded-xl border shadow-sm">
        <CircleCheckIcon className="size-6" />
      </span>
    </div>
  )
}

export function Onboarding2Block() {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [name, setName] = useState("Sam Rivera")
  const [jobTitle, setJobTitle] = useState("Product Lead")
  const [timezone, setTimezone] = useState("")
  const [updates, setUpdates] = useState(true)
  const [role, setRole] = useState("Developer")
  const [source, setSource] = useState("LinkedIn")
  const [workspaceName, setWorkspaceName] = useState("ReUI Labs")
  const [workspaceUrl, setWorkspaceUrl] = useState("northstar")
  const [teamSize, setTeamSize] = useState("11-50")
  const [goals, setGoals] = useState<string[]>(["Product roadmaps", "Engineering sprints"])
  const [invites, setInvites] = useState([
    { email: "maya@northstar.dev", role: "Admin" },
    { email: "kai@northstar.dev", role: "Member" },
  ])
  const [summary, setSummary] = useState(true)

  const total = STEPS.length
  const next = () => setStep((value) => Math.min(total, value + 1))
  const back = () => setStep((value) => Math.max(1, value - 1))

  const complete = () => setDone(true)

  return (
    <div className="bg-background text-foreground relative min-h-svh overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 size-[420px] opacity-70 [background-image:radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(circle_at_bottom_left,black,transparent_75%)]"
      />
      <header className="relative flex h-16 items-center gap-3 px-8">
        <ReuiMark className="size-8" />
        <span className="text-sm font-semibold">ReUI</span>
        {step > 1 && !done ? (
          <Button variant="ghost" size="sm" className="ml-32" onClick={back}>
            <ArrowLeftIcon />
            Back
          </Button>
        ) : null}
      </header>

      <div className="relative grid gap-10 px-8 pb-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div className="pt-16">
          <Stepper
            value={step}
            onValueChange={(value) => {
              if (done || value <= step) setStep(value)
            }}
            orientation="vertical"
            className="w-auto"
          >
            <StepperNav>
              {STEPS.map((item, index) => {
                const completed = done || step > index + 1
                return (
                  <StepperItem
                    key={item.title}
                    step={index + 1}
                    completed={completed}
                    disabled={!done && index + 1 > step}
                    className="block flex-none"
                  >
                    <StepperTrigger className="items-start gap-3 rounded-md p-0 text-left">
                      <div className="flex flex-col items-center">
                        <StepperIndicator
                          className={cn(
                            "size-6 border-0 bg-muted text-muted-foreground",
                            "data-[state=active]:bg-foreground data-[state=active]:text-background",
                            "data-[state=completed]:bg-emerald-500 data-[state=completed]:text-white"
                          )}
                        >
                          {completed ? <CheckIcon className="size-3.5" /> : index + 1}
                        </StepperIndicator>
                        {index < STEPS.length - 1 ? (
                          <StepperSeparator className="h-9 w-0.5 bg-border data-[state=completed]:bg-emerald-500" />
                        ) : null}
                      </div>
                      <div className="pt-0.5 pb-6">
                        <StepperTitle className={cn("text-sm", !completed && step === index + 1 && "font-semibold")}>
                          {item.title}
                        </StepperTitle>
                        <StepperDescription className="mt-0.5 text-xs">{item.description}</StepperDescription>
                      </div>
                    </StepperTrigger>
                  </StepperItem>
                )
              })}
            </StepperNav>
          </Stepper>
        </div>

        <div className="bg-card min-h-[660px] rounded-xl border shadow-sm">
          <div className="mx-auto flex h-full min-h-[660px] w-full max-w-[444px] flex-col px-6 py-14">
            {done ? (
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <SuccessMark />
                <h2 className="text-2xl font-semibold">{workspaceName} is ready</h2>
                <p className="text-muted-foreground mt-2 text-sm">Your workspace is set up and ready for the first project.</p>
                <div className="mt-auto w-full space-y-2">
                  <Button className="w-full" onClick={() => setStep(1)}>Open {workspaceName}</Button>
                  <Button variant="secondary" className="w-full" onClick={() => { setDone(false); setStep(1) }}>Review setup</Button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold">
                  {step === 1 && "Set up your profile"}
                  {step === 2 && "Choose your role"}
                  {step === 3 && "How did you hear about us?"}
                  {step === 4 && "Create your workspace"}
                  {step === 5 && "Choose your first goals"}
                  {step === 6 && "Invite teammates"}
                </h2>
                <p className="text-muted-foreground mt-1.5 text-sm">
                  {step === 1 && "Add the details teammates will see across the workspace."}
                  {step === 2 && "Starter views will match your daily work."}
                  {step === 3 && "Tell us where ReUI first showed up for you. This step is optional."}
                  {step === 4 && "Name the shared space your team will use first."}
                  {step === 5 && "Pick the workflows this workspace should support."}
                  {step === 6 && "Add the people who should join this workspace."}
                </p>

                <div className="mt-7 min-h-0 flex-1 space-y-4">
                  {step === 1 ? (
                    <>
                      <div className="flex items-center gap-3">
                        <Avatar size="lg" className="size-11">
                          <AvatarFallback><UserIcon className="size-5" /></AvatarFallback>
                        </Avatar>
                        <div>
                          <Button variant="outline" size="sm">Upload photo</Button>
                          <p className="text-muted-foreground mt-1.5 text-xs">PNG or JPG, at least 400 × 400 px, up to 10 MB.</p>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="ob2-name" className="text-sm font-medium">Full name <span className="text-destructive">*</span></label>
                        <Input id="ob2-name" value={name} onChange={(event) => setName(event.target.value)} />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="ob2-job" className="text-sm font-medium">Job title</label>
                        <Input id="ob2-job" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Timezone</label>
                        <Select value={timezone} onValueChange={setTimezone}>
                          <SelectTrigger className="w-full"><SelectValue placeholder="Select a timezone" /></SelectTrigger>
                          <SelectContent>
                            {TIMEZONES.map((zone) => <SelectItem key={zone} value={zone}>{zone}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <label className="flex items-center gap-2.5 text-sm">
                        <Checkbox checked={updates} onCheckedChange={(value) => setUpdates(Boolean(value))} />
                        Send me product updates and workspace tips.
                      </label>
                    </>
                  ) : null}

                  {step === 2 ? (
                    <div className="space-y-1.5">
                      <p className="text-sm font-medium">Select one</p>
                      <RadioGroup value={role} onValueChange={setRole} className="gap-2">
                        {ROLES.map((item) => (
                          <label key={item} className="flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm">
                            <RadioGroupItem value={item} />
                            {item}
                          </label>
                        ))}
                      </RadioGroup>
                    </div>
                  ) : null}

                  {step === 3 ? (
                    <div className="flex flex-wrap gap-2">
                      {SOURCES.map((item) => {
                        const Icon = SOURCE_ICONS[item] ?? EllipsisIcon
                        const selected = source === item
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setSource(selected ? "" : item)}
                            className={cn(
                              "flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-sm transition-colors",
                              selected ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                            )}
                          >
                            <span className="text-muted-foreground flex size-5 items-center justify-center rounded-full border">
                              <Icon className="size-3" />
                            </span>
                            {item}
                            {selected ? <CheckIcon className="size-3.5" /> : null}
                          </button>
                        )
                      })}
                    </div>
                  ) : null}

                  {step === 4 ? (
                    <>
                      <div className="space-y-1.5">
                        <label htmlFor="ob2-ws" className="text-sm font-medium">Workspace name <span className="text-destructive">*</span></label>
                        <Input id="ob2-ws" value={workspaceName} onChange={(event) => setWorkspaceName(event.target.value)} />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="ob2-url" className="text-sm font-medium">Workspace URL <span className="text-destructive">*</span></label>
                        <Input id="ob2-url" value={workspaceUrl} onChange={(event) => setWorkspaceUrl(event.target.value)} />
                        <p className="text-muted-foreground text-xs">Your workspace will open at app.reui.dev/{workspaceUrl}.</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">How many people will use this workspace?</p>
                        <div className="flex flex-wrap gap-2">
                          {TEAM_SIZES.map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => setTeamSize(size)}
                              className={cn(
                                "relative rounded-lg border px-3 py-1.5 text-sm transition-colors",
                                teamSize === size ? "bg-accent" : "hover:bg-muted"
                              )}
                            >
                              {size}
                              {teamSize === size ? (
                                <span className="bg-foreground text-background absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full">
                                  <CheckIcon className="size-3" />
                                </span>
                              ) : null}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : null}

                  {step === 5 ? (
                    <div className="space-y-1.5">
                      <p className="text-sm font-medium">Select one or more</p>
                      <div className="space-y-2">
                        {GOALS.map((item) => (
                          <label key={item} className="flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm">
                            <Checkbox
                              checked={goals.includes(item)}
                              onCheckedChange={(value) =>
                                setGoals((current) =>
                                  value ? [...current, item] : current.filter((goal) => goal !== item)
                                )
                              }
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {step === 6 ? (
                    <>
                      <div className="grid grid-cols-[1fr_140px] gap-2 text-xs">
                        <span className="text-muted-foreground">Email</span>
                        <span className="text-muted-foreground">Role</span>
                      </div>
                      <div className="space-y-2">
                        {invites.map((invite, index) => (
                          <div key={index} className="grid grid-cols-[1fr_140px] gap-2">
                            <Input
                              value={invite.email}
                              aria-label={`Invite email ${index + 1}`}
                              onChange={(event) =>
                                setInvites((current) =>
                                  current.map((item, itemIndex) =>
                                    itemIndex === index ? { ...item, email: event.target.value } : item
                                  )
                                )
                              }
                            />
                            <Select
                              value={invite.role}
                              onValueChange={(value) =>
                                setInvites((current) =>
                                  current.map((item, itemIndex) =>
                                    itemIndex === index ? { ...item, role: value } : item
                                  )
                                )
                              }
                            >
                              <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Admin">Admin</SelectItem>
                                <SelectItem value="Member">Member</SelectItem>
                                <SelectItem value="Viewer">Viewer</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setInvites((current) => [...current, { email: "", role: "Member" }])}
                        >
                          + Add another
                        </Button>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <p className="text-sm font-medium">Send invitation summary</p>
                          <p className="text-muted-foreground text-xs">Include workspace details.</p>
                        </div>
                        <Switch checked={summary} onCheckedChange={setSummary} aria-label="Send invitation summary" />
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="mt-8 space-y-2">
                  {step === total ? (
                    <Button className="w-full gap-2" onClick={complete}>
                      <RocketIcon />
                      Create workspace
                    </Button>
                  ) : (
                    <Button className="w-full" onClick={next}>Continue</Button>
                  )}
                  {step > 1 ? (
                    <Button variant="secondary" className="w-full" onClick={next}>Skip</Button>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding2Block
