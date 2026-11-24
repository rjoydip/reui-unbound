import { useState } from "react"
import {
  CheckCircle2Icon,
  CircleHelpIcon,
  ExternalLinkIcon,
  EyeIcon,
  InfoIcon,
  PencilIcon,
  PlusIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Profile = Record<string, string>

const INITIAL_PROFILE: Profile = {
  legalName: "Cedar & Volt Studio LLC",
  url: "cedarvolt.studio",
  address: "418 Market Street, Floor 6\nPortland, OR 97205\nUnited States",
  businessType: "Limited liability company",
  other: "US EIN ending 2146, Digital services, Product description",
  businessName: "Cedar & Volt Studio",
  phone: "+1 503 555 0184",
  email: "support@cedarvolt.studio",
  supportUrl: "https://cedarvolt.studio/support",
  descriptor: "CEDARVOLT.STUDIO",
  owner: "Iris Kwon",
  role: "Managing member",
  ownership: "100%",
  ownerEmail: "iris@cedarvolt.studio",
}

const BUSINESS_TYPES = [
  "Limited liability company",
  "Corporation",
  "Sole proprietorship",
  "Partnership",
]

const OWNER_ROLES = ["Managing member", "Director", "Authorized representative", "Owner"]

type FieldConfig = {
  key: string
  label: string
  textarea?: boolean
  options?: string[]
  required?: boolean
}

type Section = { title: string; description: string; fields: FieldConfig[] }

const SECTIONS: Record<"business" | "public" | "management", Section> = {
  business: {
    title: "Business Details",
    description: "Legal identity and address.",
    fields: [
      { key: "legalName", label: "Legal business name", required: true },
      { key: "url", label: "Website URL" },
      { key: "address", label: "Registered address", textarea: true },
      { key: "businessType", label: "Business type", options: BUSINESS_TYPES },
      { key: "other", label: "Other information provided", textarea: true },
    ],
  },
  public: {
    title: "Public Details",
    description: "Customer-facing profile.",
    fields: [
      { key: "businessName", label: "Business name", required: true },
      { key: "phone", label: "Support phone" },
      { key: "email", label: "Support email", required: true },
      { key: "supportUrl", label: "Support URL" },
      { key: "descriptor", label: "Statement descriptor" },
    ],
  },
  management: {
    title: "Management & Ownership",
    description: "Owners and representatives on file.",
    fields: [
      { key: "owner", label: "Owner name", required: true },
      { key: "role", label: "Role", options: OWNER_ROLES },
      { key: "ownership", label: "Ownership" },
      { key: "ownerEmail", label: "Owner email", required: true },
    ],
  },
}

type SectionKey = keyof typeof SECTIONS

function InfoTip({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground inline-flex transition-colors"
          aria-label="More information"
        >
          <InfoIcon className="size-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-60">{children}</TooltipContent>
    </Tooltip>
  )
}

function SectionHeader({
  title,
  description,
  onEdit,
}: {
  title: string
  description: string
  onEdit: () => void
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <Button variant="outline" size="sm" onClick={onEdit}>
        <PencilIcon />
        Edit
      </Button>
    </div>
  )
}

function ValueRow({
  label,
  info,
  children,
}: {
  label: string
  info?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 gap-1 px-4 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] sm:gap-6">
      <div className="flex items-center gap-1.5">
        <span className="text-muted-foreground text-sm">{label}</span>
        {info && <InfoTip>{info}</InfoTip>}
      </div>
      <div className="text-sm font-medium">{children}</div>
    </div>
  )
}

export function Form6Block() {
  const [profile, setProfile] = useState(INITIAL_PROFILE)
  const [editing, setEditing] = useState<SectionKey | null>(null)
  const [draft, setDraft] = useState<Profile>(INITIAL_PROFILE)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [notice, setNotice] = useState<string | null>(null)

  function openEditor(section: SectionKey) {
    setDraft(profile)
    setErrors({})
    setEditing(section)
  }

  function saveSection() {
    if (!editing) return
    const nextErrors: Record<string, string> = {}
    for (const field of SECTIONS[editing].fields) {
      const value = draft[field.key]?.trim()
      if (field.required && !value) nextErrors[field.key] = `${field.label} is required.`
      if (field.key.toLowerCase().includes("email") && value && !value.includes("@")) {
        nextErrors[field.key] = "Enter a valid email address."
      }
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setProfile(draft)
    setEditing(null)
    setNotice(`${SECTIONS[editing].title} updated`)
  }

  const currentSection = editing ? SECTIONS[editing] : null

  return (
    <TooltipProvider>
      <main className="min-h-svh px-6 py-8">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex flex-col gap-0.5">
              <h1 className="font-heading text-xl font-semibold">Business Verification</h1>
              <p className="text-muted-foreground text-sm">
                Review submitted profile details before approval.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setNotice("Support request started")}
            >
              <CircleHelpIcon />
              Contact support
            </Button>
          </div>

          <Frame dense stacked>
            <FramePanel className="bg-muted/50">
              <SectionHeader {...SECTIONS.business} onEdit={() => openEditor("business")} />
            </FramePanel>
            <FramePanel className="[--frame-panel-px:0px] [--frame-panel-py:0px]">
              <div className="flex items-start justify-between gap-4 px-4 py-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm font-semibold">{profile.legalName}</h3>
                  <p className="text-muted-foreground text-sm">Domain confirmed for review.</p>
                </div>
                <Badge variant="success-light" size="lg">
                  <CheckCircle2Icon />
                  Verified domain
                </Badge>
              </div>
              <div className="divide-y border-t">
                <ValueRow label="URL" info="The domain matched to this business record.">
                  <a href="#" className="inline-flex items-center gap-1.5 hover:underline">
                    {profile.url}
                    <ExternalLinkIcon className="size-3.5" />
                  </a>
                </ValueRow>
                <ValueRow label="Address" info="Registered address on the legal filing.">
                  <span className="whitespace-pre-line font-normal">{profile.address}</span>
                </ValueRow>
                <ValueRow label="Business type">
                  <span className="font-normal">{profile.businessType}</span>
                </ValueRow>
                <ValueRow label="Other information provided" info="Additional context supplied during onboarding.">
                  <span className="inline-flex items-center gap-1.5 font-normal">
                    {profile.other}
                    <InfoTip>Provided by the applicant at intake.</InfoTip>
                  </span>
                </ValueRow>
              </div>
            </FramePanel>
          </Frame>

          <Frame dense stacked>
            <FramePanel className="bg-muted/50">
              <SectionHeader {...SECTIONS.public} onEdit={() => openEditor("public")} />
            </FramePanel>
            <FramePanel className="[--frame-panel-px:0px] [--frame-panel-py:0px]">
              <div className="flex items-start justify-between gap-4 px-4 py-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm font-semibold">Customer Support Information</h3>
                  <p className="text-muted-foreground text-sm">Receipt and invoice profile.</p>
                </div>
                <Badge variant="info-light" size="lg">
                  <EyeIcon />
                  Customer visible
                </Badge>
              </div>
              <div className="divide-y border-t">
                <ValueRow label="Business name" info="Shown on customer receipts.">
                  <span className="inline-flex items-center gap-2">
                    {profile.businessName}
                    <span className="text-[#635bff] text-sm font-bold italic">stripe</span>
                  </span>
                </ValueRow>
                <ValueRow label="Support phone">
                  <span className="font-normal">{profile.phone}</span>
                </ValueRow>
                <ValueRow label="Support email" info="Replies route to the support inbox.">
                  <span className="inline-flex items-center gap-1.5 font-normal">
                    {profile.email}
                    <InfoTip>Verified at intake.</InfoTip>
                  </span>
                </ValueRow>
                <ValueRow label="Support URL">
                  <a href="#" className="inline-flex items-center gap-1.5 font-normal hover:underline">
                    {profile.supportUrl}
                    <ExternalLinkIcon className="size-3.5" />
                  </a>
                </ValueRow>
                <ValueRow label="Statement descriptor" info="Appears on customer bank statements.">
                  <span className="inline-flex items-center gap-2">
                    {profile.descriptor}
                    <span className="text-[#003087] text-sm font-bold italic dark:text-[#6aa6ff]">
                      Pay<span className="text-[#009cde] dark:text-[#4cc3ff]">Pal</span>
                    </span>
                  </span>
                </ValueRow>
              </div>
            </FramePanel>
          </Frame>

          <Frame dense stacked>
            <FramePanel className="flex items-start justify-between gap-4 bg-muted/50">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-sm font-semibold">Management &amp; Ownership</h2>
                <p className="text-muted-foreground text-sm">Owners and representatives on file.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openEditor("management")}
                >
                  <PlusIcon />
                  Add owner
                </Button>
                <Button variant="outline" size="sm" onClick={() => openEditor("management")}>
                  <PencilIcon />
                  Edit
                </Button>
              </div>
            </FramePanel>
            <FramePanel className="[--frame-panel-px:0px] [--frame-panel-py:0px]">
              <div className="flex items-start justify-between gap-4 px-4 py-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm font-semibold">{profile.owner}</h3>
                  <p className="text-muted-foreground text-sm">
                    {profile.role} · {profile.ownership} ownership
                  </p>
                </div>
                <Badge variant="success-light" size="lg">
                  <CheckCircle2Icon />
                  Verified owner
                </Badge>
              </div>
              <div className="divide-y border-t">
                <ValueRow label="Legal name">
                  <span className="font-normal">{profile.owner}</span>
                </ValueRow>
                <ValueRow label="Role">
                  <span className="font-normal">{profile.role}</span>
                </ValueRow>
                <ValueRow label="Ownership">
                  <span className="font-normal">{profile.ownership}</span>
                </ValueRow>
                <ValueRow label="Contact email">
                  <span className="font-normal">{profile.ownerEmail}</span>
                </ValueRow>
              </div>
            </FramePanel>
          </Frame>
        </div>

        <Dialog open={editing !== null} onOpenChange={(open) => !open && setEditing(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Edit {currentSection?.title.toLowerCase()}</DialogTitle>
              <DialogDescription>
                Changes appear in the review immediately and are shared with the applicant.
              </DialogDescription>
            </DialogHeader>
            <div className="flex max-h-[60svh] flex-col gap-4 overflow-y-auto py-1">
              {currentSection?.fields.map((field) => {
                const error = errors[field.key]
                const value = draft[field.key] ?? ""
                return (
                  <Field key={field.key} data-invalid={Boolean(error)}>
                    <FieldLabel htmlFor={`verify-${field.key}`}>{field.label}</FieldLabel>
                    {field.options ? (
                      <Select
                        value={value}
                        onValueChange={(next) =>
                          setDraft((current) => ({ ...current, [field.key]: next }))
                        }
                      >
                        <SelectTrigger id={`verify-${field.key}`} className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : field.textarea ? (
                      <Textarea
                        id={`verify-${field.key}`}
                        rows={3}
                        value={value}
                        aria-invalid={Boolean(error)}
                        onChange={(event) =>
                          setDraft((current) => ({ ...current, [field.key]: event.target.value }))
                        }
                      />
                    ) : (
                      <Input
                        id={`verify-${field.key}`}
                        value={value}
                        aria-invalid={Boolean(error)}
                        onChange={(event) =>
                          setDraft((current) => ({ ...current, [field.key]: event.target.value }))
                        }
                      />
                    )}
                    {error && <FieldError>{error}</FieldError>}
                  </Field>
                )
              })}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setEditing(null)}>
                Cancel
              </Button>
              <Button onClick={saveSection}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {notice && (
          <div
            role="status"
            className="bg-popover fixed top-4 left-1/2 z-50 flex w-full max-w-sm -translate-x-1/2 items-start gap-3 rounded-xl border px-4 py-3 shadow-lg"
          >
            <CheckCircle2Icon className="text-success mt-0.5 size-4 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium">{notice}</p>
              <p className="text-muted-foreground text-sm">
                Business verification is up to date.
              </p>
            </div>
            <button
              type="button"
              aria-label="Dismiss"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setNotice(null)}
            >
              <XIcon className="size-4" />
            </button>
          </div>
        )}
      </main>
    </TooltipProvider>
  )
}

export default Form6Block
