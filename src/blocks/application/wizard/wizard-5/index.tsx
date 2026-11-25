import { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, MailIcon, PlusIcon, Trash2Icon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

const STEPS = [
  { title: "Members", description: "Add emails and roles." },
  { title: "Delivery", description: "Set message and expiry." },
  { title: "Review", description: "Send the invite batch." },
]

const INITIAL_MEMBERS = [
  { id: 1, email: "mira@northstar.studio", role: "Editor" },
  { id: 2, email: "jon@northstar.studio", role: "Viewer" },
  { id: 3, email: "ari@northstar.studio", role: "Viewer" },
]

export function Wizard5Block() {
  const [step, setStep] = useState(1)
  const [members, setMembers] = useState(INITIAL_MEMBERS)

  const count = (role: string) => members.filter((member) => member.role === role).length

  return (
    <div className="bg-background text-foreground flex min-h-svh items-center justify-center p-8">
      <div className="bg-card w-full max-w-[900px] overflow-hidden rounded-xl border shadow-sm">
        <div className="border-b px-5 py-3">
          <h1 className="text-sm font-semibold">Team Invitations</h1>
          <p className="text-muted-foreground mt-0.5 text-xs">Prepare workspace access before the invites go out.</p>
        </div>

        <div className="border-b px-6 py-5">
          <Stepper value={step} onValueChange={setStep}>
            <StepperNav className="w-full">
              {STEPS.map((item, index) => (
                <StepperItem key={item.title} step={index + 1} className="gap-2">
                  <StepperTrigger className="flex-col gap-1" disabled={index + 1 > step}>
                    <StepperIndicator className="size-5 border-2 border-dashed border-muted-foreground/50 bg-background text-[10px] text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=completed]:border-0 data-[state=completed]:bg-foreground data-[state=completed]:text-background">
                      {index + 1}
                    </StepperIndicator>
                    <StepperTitle className="text-xs font-medium">{item.title}</StepperTitle>
                    <StepperDescription className="text-muted-foreground text-[11px]">{item.description}</StepperDescription>
                  </StepperTrigger>
                  {index < STEPS.length - 1 ? <StepperSeparator className="mx-4 mb-8" /> : null}
                </StepperItem>
              ))}
            </StepperNav>
          </Stepper>
        </div>

        {step === 1 ? (
          <div className="px-5 py-5">
            <h2 className="text-sm font-semibold">Invite Members</h2>
            <p className="text-muted-foreground mt-0.5 text-xs">Enter each teammate's email and starting role.</p>

            <div className="mt-4 overflow-hidden rounded-lg border">
              <div className="bg-muted/50 text-muted-foreground grid grid-cols-[1fr_170px_80px_32px] gap-3 px-3 py-2 text-xs">
                <span>Email</span>
                <span>Role</span>
                <span>Status</span>
                <span />
              </div>
              {members.map((member) => (
                <div key={member.id} className="grid grid-cols-[1fr_170px_80px_32px] items-center gap-3 border-t px-3 py-2.5">
                  <Input value={member.email} onChange={(event) => setMembers((list) => list.map((item) => item.id === member.id ? { ...item, email: event.target.value } : item))} className="h-8" aria-label="Member email" />
                  <Select value={member.role} onValueChange={(value) => setMembers((list) => list.map((item) => item.id === member.id ? { ...item, role: value } : item))}>
                    <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Viewer">Viewer</SelectItem>
                      <SelectItem value="Editor">Editor</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  <Badge variant={member.email ? "success-light" : "secondary"} size="sm">{member.email ? "Ready" : "Missing"}</Badge>
                  <Button variant="ghost" size="icon-sm" aria-label="Remove member" onClick={() => setMembers((list) => list.filter((item) => item.id !== member.id))}><Trash2Icon /></Button>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-end">
              <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setMembers((list) => [...list, { id: Date.now(), email: "", role: "Viewer" }])}><PlusIcon />Add member</Button>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid md:grid-cols-[1.55fr_1fr]">
            <div className="px-5 py-5">
              <h2 className="text-sm font-semibold">Set Invite Delivery</h2>
              <p className="text-muted-foreground mt-0.5 text-xs">Confirm the sender, expiration, and email note.</p>

              <div className="mt-4 divide-y rounded-lg border">
                <div className="grid grid-cols-[1fr_1.3fr] items-center gap-3 p-3">
                  <div><p className="text-xs font-medium">Sender</p><p className="text-muted-foreground text-[11px]">Shown in the invitation email.</p></div>
                  <Input defaultValue="Workspace Admin" className="h-8" />
                </div>
                <div className="grid grid-cols-[1fr_1.3fr] items-center gap-3 p-3">
                  <div><p className="text-xs font-medium">Expiration</p><p className="text-muted-foreground text-[11px]">Unused links stop working after this window.</p></div>
                  <Select defaultValue="14">
                    <SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-[1fr_1.3fr] items-start gap-3 p-3">
                  <div><p className="text-xs font-medium">Invite Note</p><p className="text-muted-foreground text-[11px]">Keep it short. This appears below the access summary.</p></div>
                  <Textarea placeholder="Optional note for the team" className="min-h-20 text-xs" />
                </div>
              </div>
            </div>

            <aside className="border-t px-5 py-5 md:border-t-0 md:border-l">
              <p className="text-xs font-semibold">Delivery Summary</p>
              <p className="text-muted-foreground mt-0.5 text-xs">Used for every invitation in this batch.</p>

              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-muted-foreground">Recipients</span><span className="font-medium">{members.filter((member) => member.email).length}/{members.length}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Expires</span><span className="font-medium">14 days</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Sender</span><span className="font-medium">Workspace Admin</span></div>
              </div>

              <p className="mt-5 text-xs font-semibold">Role Mix</p>
              <div className="mt-2 space-y-2 text-xs">
                <div className="flex items-center justify-between"><span className="flex items-center gap-2">Viewer <Badge variant="secondary" size="sm">Read only</Badge></span><span className="font-medium">{count("Viewer")}</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2">Editor <Badge variant="focus-light" size="sm">Default</Badge></span><span className="font-medium">{count("Editor")}</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2">Admin <Badge variant="warning-light" size="sm">Privileged</Badge></span><span className="font-medium">{count("Admin")}</span></div>
              </div>
            </aside>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="px-5 py-5">
            <h2 className="text-sm font-semibold">Review Invitations</h2>
            <p className="text-muted-foreground mt-0.5 text-xs">Confirm recipients and roles before the batch is sent.</p>

            <div className="mt-4 overflow-hidden rounded-lg border">
              {members.map((member) => (
                <div key={member.id} className="flex items-center gap-3 border-b px-3 py-2.5 last:border-b-0">
                  <span className="bg-muted flex size-7 items-center justify-center rounded-full"><MailIcon className="size-3.5" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-medium">{member.email || "No email"}</span>
                    <span className="text-muted-foreground block text-[11px]">Invite expires in 14 days</span>
                  </span>
                  <Badge variant={member.role === "Admin" ? "warning-light" : member.role === "Editor" ? "focus-light" : "secondary"} size="sm">{member.role}</Badge>
                </div>
              ))}
            </div>

            <div className="bg-muted/40 mt-4 flex items-center gap-2 rounded-lg px-3 py-2 text-xs">
              <CheckIcon className="size-3.5" />
              {members.length} invitations will be sent by Workspace Admin.
            </div>
          </div>
        ) : null}

        <div className="bg-muted/30 flex items-center justify-between border-t px-5 py-3">
          <p className="text-muted-foreground text-xs">Step {step} of 3: {step === 1 ? "Add emails and roles." : step === 2 ? "Set message and expiry." : "Send the invite batch."}</p>
          <div className="flex items-center gap-2">
            {step > 1 ? <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setStep((value) => value - 1)}><ArrowLeftIcon />Previous</Button> : null}
            {step < 3 ? (
              <Button size="sm" className="bg-foreground text-background gap-1.5 hover:bg-foreground/90" onClick={() => setStep((value) => value + 1)}>Continue<ArrowRightIcon /></Button>
            ) : (
              <Button size="sm" className="bg-foreground text-background gap-1.5 hover:bg-foreground/90"><MailIcon />Send invitations</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wizard5Block
