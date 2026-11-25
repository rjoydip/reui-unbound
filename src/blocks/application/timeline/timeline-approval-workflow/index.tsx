import { ArrowUpRightIcon, CheckIcon, DownloadIcon, FileTextIcon, PlayIcon, StarIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"

const STEPS = [
  { time: "09:00", stage: "Intake", title: "Trigger Captured", file: "intake.json", rating: 4.8, action: "Open", description: "Customer, urgency, and routing fields arrived cleanly.", owner: "Sam Lee", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { time: "09:14", stage: "Enrichment", title: "Records Matched", file: "crm-match.csv", rating: 4.9, action: "Review", description: "CRM and billing records attached before risk review.", owner: "Ira Wells", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { time: "09:31", stage: "Review", title: "Policy Cleared", file: "policy.pdf", rating: 4.7, action: "View", description: "Terms, region rules, and account flags passed review.", owner: "Owen Fox", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
  { time: "09:48", stage: "Approval", title: "Lead Signoff Running", file: "signoff.docx", rating: 4.4, action: "Approve", description: "The recommended decision is with the account lead.", owner: "Maya Chen", active: true, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80" },
]

export function TimelineApprovalWorkflowBlock() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[1016px]">
        <h1 className="text-xl font-semibold">Approval Workflow Timeline</h1>
        <p className="text-muted-foreground mt-1 text-sm">Process state from intake to customer notice.</p>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="grid min-w-[960px] grid-cols-4 gap-6">
            {STEPS.map((step, index) => (
              <div key={step.stage} className="relative">
                <div className="flex items-center">
                  {step.active ? (
                    <span className="bg-foreground text-background flex size-6 items-center justify-center rounded-full"><PlayIcon className="size-3 fill-current" /></span>
                  ) : (
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500 text-white"><CheckIcon className="size-3.5" /></span>
                  )}
                  {index < STEPS.length - 1 ? <span className="bg-border ml-2 h-px flex-1" /> : null}
                </div>
                <p className="text-muted-foreground mt-3 text-xs">{step.time}</p>
                <Badge variant={step.active ? "secondary" : "success-light"} size="sm" className="mt-1">{step.stage}</Badge>
                <p className="mt-2 text-sm font-medium">{step.title}</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs"><FileTextIcon className="size-3.5" />{step.file}</span>
                  <span className="rounded-md border p-1"><DownloadIcon className="size-3.5" /></span>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className={i < Math.round(step.rating) ? "size-3.5 fill-amber-400 text-amber-400" : "size-3.5 text-muted-foreground"} />)}
                  <span className="text-muted-foreground text-xs">{step.rating.toFixed(1)}</span>
                  <Button variant="outline" size="sm" className="ml-2 gap-1"><ArrowUpRightIcon />{step.action}</Button>
                </div>
                <p className="text-muted-foreground mt-3 text-sm">{step.description}</p>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <Avatar size="sm" className="size-5"><AvatarImage src={step.avatar} alt="" /><AvatarFallback>{step.owner.slice(0, 2)}</AvatarFallback></Avatar>
                  {step.owner}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 h-1 w-[516px] rounded-full bg-muted" />
        </div>
      </div>
    </div>
  )
}

export default TimelineApprovalWorkflowBlock
