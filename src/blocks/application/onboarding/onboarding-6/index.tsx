import { useState } from "react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BotIcon,
  CameraIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleCheckIcon,
  CircleHelpIcon,
  CopyIcon,
  EllipsisIcon,
  ExternalLinkIcon,

  BriefcaseIcon,
  MailIcon,
  MessageCircleIcon,
  PodcastIcon,
  PresentationIcon,
  SearchIcon,
  SparklesIcon,
  StarIcon,
  TerminalIcon,
  UserIcon,
  UsersIcon,
  XIcon,
  PlayIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const TOTAL = 8

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

const AGENTS = [
  { name: "Claude Code", icon: SparklesIcon, className: "text-orange-500" },
  { name: "OpenCode", icon: TerminalIcon, className: "text-foreground" },
  { name: "OpenClaw", icon: BotIcon, className: "text-red-500" },
  { name: "Gemini", icon: SparklesIcon, className: "text-blue-500" },
  { name: "Cursor", icon: TerminalIcon, className: "text-foreground" },
  { name: "OpenAI Codex", icon: CircleHelpIcon, className: "text-muted-foreground" },
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

export function Onboarding6Block() {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [name, setName] = useState("Sam Rivera")
  const [jobTitle, setJobTitle] = useState("Product Engineer")
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
  const [agent, setAgent] = useState("OpenAI Codex")
  const [installOpen, setInstallOpen] = useState(true)

  const next = () => setStep((value) => Math.min(TOTAL, value + 1))
  const back = () => setStep((value) => Math.max(1, value - 1))

  return (
    <div className="bg-background text-foreground flex min-h-svh flex-col">
      <header className="flex h-14 items-center gap-2 px-4">
        <ReuiMark className="size-7" />
        <span className="text-sm font-semibold">ReUI</span>
        <div className="mx-auto hidden h-1.5 w-72 overflow-hidden rounded-full bg-muted sm:block">
          <div
            className="bg-foreground h-full rounded-full transition-all"
            style={{ width: `${(step / TOTAL) * 100}%` }}
          />
        </div>
        <span className="text-muted-foreground ml-auto flex items-center gap-1.5 text-sm">
          {done ? <><CircleCheckIcon className="size-4" />Workspace ready</> : `${step} / ${TOTAL}`}
        </span>
      </header>

      <main className="flex flex-1 justify-center px-4 pt-14 pb-10">
        <div className="w-full max-w-[512px]">
          {done ? (
            <div className="flex flex-col items-center pt-24 text-center">
              <SuccessMark />
              <h2 className="text-2xl font-semibold">{workspaceName} is ready</h2>
              <p className="text-muted-foreground mt-2 text-sm">Your workspace is set up and ready for the first project.</p>
              <div className="mt-20 w-full space-y-2">
                <Button className="w-full" onClick={() => setStep(1)}>Open {workspaceName}</Button>
                <Button variant="ghost" className="w-full" onClick={() => { setDone(false); setStep(1) }}>Review setup</Button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold">
                {step === 1 && "Set Up Your Profile"}
                {step === 2 && "Choose Your Role"}
                {step === 3 && "How Did You Hear About Us?"}
                {step === 4 && "Create Your Workspace"}
                {step === 5 && "Choose Your First Goals"}
                {step === 6 && "Invite Teammates"}
                {step === 7 && "Choose Your Agent"}
                {step === 8 && "Set Up OpenAI Codex"}
              </h2>
              <p className="text-muted-foreground mt-1.5 text-sm">
                {step === 1 && "Add the details teammates will see across the workspace."}
                {step === 2 && "Starter views will match your daily work."}
                {step === 3 && "Tell us where ReUI first showed up for you. This step is optional."}
                {step === 4 && "Name the shared space your team will use first."}
                {step === 5 && "Pick the workflows this workspace should support."}
                {step === 6 && "Add the people who should join this workspace."}
                {step === 7 && "Select the agent you'd like to set up first."}
                {step === 8 && "Follow the docs to connect your plugin."}
              </p>

              <div className="mt-8 space-y-4">
                {step === 1 ? (
                  <>
                    <div className="flex items-center gap-3">
                      <Avatar size="lg" className="size-12">
                        <AvatarFallback><UserIcon className="size-5" /></AvatarFallback>
                      </Avatar>
                      <div>
                        <Button variant="outline" size="sm">Upload photo</Button>
                        <p className="text-muted-foreground mt-1.5 text-xs">PNG or JPG, at least 400 × 400 px, up to 10 MB.</p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="ob6-name" className="text-sm font-medium">Full name <span className="text-destructive">*</span></label>
                      <Input id="ob6-name" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="ob6-job" className="text-sm font-medium">Job title</label>
                      <Input id="ob6-job" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} />
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
                  <RadioGroup value={role} onValueChange={setRole} className="gap-2">
                    {ROLES.map((item) => (
                      <label key={item} className="flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm">
                        <RadioGroupItem value={item} />
                        {item}
                      </label>
                    ))}
                  </RadioGroup>
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
                      <label htmlFor="ob6-ws" className="text-sm font-medium">Workspace name <span className="text-destructive">*</span></label>
                      <Input id="ob6-ws" value={workspaceName} onChange={(event) => setWorkspaceName(event.target.value)} />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="ob6-url" className="text-sm font-medium">Workspace URL <span className="text-destructive">*</span></label>
                      <Input id="ob6-url" value={workspaceUrl} onChange={(event) => setWorkspaceUrl(event.target.value)} />
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
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Select one or more</p>
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

                {step === 7 ? (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Select one</p>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {AGENTS.map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => setAgent(item.name)}
                          className={cn(
                            "relative flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-colors",
                            agent === item.name ? "bg-accent" : "hover:bg-muted"
                          )}
                        >
                          <item.icon className={cn("size-4", item.className)} />
                          <span className="truncate">{item.name}</span>
                          {agent === item.name ? (
                            <span className="bg-foreground text-background absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full">
                              <CheckIcon className="size-3" />
                            </span>
                          ) : null}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {step === 8 ? (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md">
                          <TerminalIcon className="size-3.5" />
                        </span>
                        <span className="text-sm font-semibold">OpenAI Codex</span>
                        <CircleHelpIcon className="text-muted-foreground size-3.5" />
                      </div>
                      <div className="text-muted-foreground flex items-center gap-3 text-sm">
                        <a href="#" className="hover:text-foreground flex items-center gap-1">Docs <ExternalLinkIcon className="size-3.5" /></a>
                        <a href="#" className="hover:text-foreground flex items-center gap-1">GitHub <ExternalLinkIcon className="size-3.5" /></a>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">Persistent memory for Codex CLI across sessions.</p>

                    {[
                      "Get Your API Key",
                      "Set Your API Key as an Environment Variable",
                    ].map((label) => (
                      <button
                        key={label}
                        type="button"
                        className="hover:bg-muted/60 flex w-full items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors"
                      >
                        <CircleCheckIcon className="size-4 text-emerald-500" />
                        {label}
                        <CircleHelpIcon className="text-muted-foreground size-3.5" />
                        <ChevronRightIcon className="text-muted-foreground ml-auto size-4" />
                      </button>
                    ))}

                    <Collapsible open={installOpen} onOpenChange={setInstallOpen}>
                      <div className="rounded-lg border">
                        <CollapsibleTrigger className="hover:bg-muted/60 flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm">
                          <span className="flex size-4 items-center justify-center rounded-full bg-muted text-[10px] font-semibold">3</span>
                          Install the Plugin
                          <CircleHelpIcon className="text-muted-foreground size-3.5" />
                          <ChevronDownIcon className={cn("text-muted-foreground ml-auto size-4 transition-transform", installOpen && "rotate-180")} />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="border-t p-2">
                            <div className="bg-foreground text-background flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs">
                              <span className="truncate">npx codex-supermemory@latest install</span>
                              <Button
                                variant="ghost"
                                size="icon-xs"
                                aria-label="Copy install command"
                                className="ml-auto text-background/70 hover:bg-background/10 hover:text-background"
                              >
                                <CopyIcon />
                              </Button>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>

                    <div className="text-muted-foreground space-y-1.5 text-sm">
                      <p>What you get</p>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>Recalls context before prompts</li>
                        <li>Turns decisions into lasting memory</li>
                        <li>Carries your profile across projects</li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            </>
          )}
        </div>
      </main>

      <footer className="bg-background sticky bottom-0 z-10 border-t">
        <div className="mx-auto flex max-w-[512px] items-center gap-3 px-4 py-3">
          {done ? <span /> : (
            <>
              {step > 1 ? (
                <Button variant="ghost" size="sm" onClick={back}>
                  <ArrowLeftIcon />
                  Previous
                </Button>
              ) : <span />}
              <Button variant="ghost" size="sm" className="ml-auto" onClick={next}>Skip</Button>
              {step === TOTAL ? (
                <Button size="sm" className="gap-1.5" onClick={() => setDone(true)}>
                  Get started
                  <ArrowRightIcon />
                </Button>
              ) : (
                <Button size="sm" className="gap-1.5" onClick={next}>
                  Next step
                  <ArrowRightIcon />
                </Button>
              )}
            </>
          )}
        </div>
      </footer>
    </div>
  )
}

export default Onboarding6Block
