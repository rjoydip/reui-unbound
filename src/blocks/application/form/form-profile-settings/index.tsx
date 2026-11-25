import { Fragment, useState } from "react"
import { format } from "date-fns"
import {
  CalendarIcon,
  ClockIcon,
  InfoIcon,
  RotateCcwIcon,
  SaveIcon,
  SparklesIcon,
  UploadIcon,
  XIcon,
} from "lucide-react"
import { cn } from "cn"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SPECIALTIES = [
  "Product strategy",
  "Team workshops",
  "Design systems",
  "Growth experiments",
  "Research ops",
  "Brand positioning",
]

const formatSlot = (slot: string) => {
  const [hour, minute] = slot.split(":").map(Number)
  const suffix = hour < 12 ? "AM" : "PM"
  return `${String(hour % 12 === 0 ? 12 : hour % 12).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${suffix}`
}

const TIME_SLOTS = Array.from({ length: 18 }, (_, index) => {
  const hour = 9 + Math.floor(index / 2)
  return `${String(hour).padStart(2, "0")}:${index % 2 === 0 ? "00" : "30"}`
})

const COMPLETION_WEIGHTS = [5, 9, 8, 8, 10, 12, 8, 11, 7, 6]

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

function Row({
  label,
  info,
  htmlFor,
  error,
  children,
}: {
  label: string
  info?: string
  htmlFor?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <Field
      orientation="horizontal"
      data-invalid={Boolean(error)}
      className="items-start gap-6 py-2.5"
    >
      <div className="flex w-2/5 shrink-0 items-center gap-1.5 pt-1.5">
        {htmlFor ? (
          <FieldLabel htmlFor={htmlFor} className="text-sm font-medium">
            {label}
          </FieldLabel>
        ) : (
          <span className="text-sm font-medium">{label}</span>
        )}
        {info && <InfoTip>{info}</InfoTip>}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {children}
        {error && <FieldError>{error}</FieldError>}
      </div>
    </Field>
  )
}

export function FormProfileSettingsBlock() {
  const anchor = useComboboxAnchor()
  const [name, setName] = useState("Noa Brooks")
  const [birthDate, setBirthDate] = useState<Date>(new Date(1991, 8, 18))
  const [availableDate, setAvailableDate] = useState<Date>(
    new Date(2026, 3, 24),
  )
  const [availableTime, setAvailableTime] = useState("10:30")
  const [company, setCompany] = useState("Harborline Systems")
  const [specialties, setSpecialties] = useState<string[]>([
    "Product strategy",
    "Team workshops",
  ])
  const [dismissalTime, setDismissalTime] = useState("17:30")
  const [phone, setPhone] = useState("+1 (312) 847-1928")
  const [visibility, setVisibility] = useState("team")
  const [hire, setHire] = useState(true)
  const [hasPhoto, setHasPhoto] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [saved, setSaved] = useState(false)

  const errors = {
    name: !name.trim() ? "Full name is required." : undefined,
    company: !company.trim() ? "Company is required." : undefined,
    phone:
      phone.replace(/\D/g, "").length < 7
        ? "Enter a reachable phone number."
        : undefined,
  }

  const completed = [
    hasPhoto,
    Boolean(name.trim()),
    Boolean(birthDate),
    Boolean(availableDate),
    Boolean(company.trim()),
    specialties.length > 0,
    Boolean(dismissalTime),
    phone.replace(/\D/g, "").length >= 7,
    Boolean(visibility),
    hire,
  ].reduce((sum, done, index) => sum + (done ? COMPLETION_WEIGHTS[index] : 0), 0)

  function handleSave() {
    setSubmitted(true)
    if (Object.values(errors).some(Boolean)) return
    setSaved(true)
  }

  return (
    <TooltipProvider>
      <main className="flex min-h-svh items-center justify-center p-6">
        <Card className="w-full max-w-2xl gap-0 py-0">
          <header className="flex items-start justify-between gap-4 border-b px-5 py-4">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-base font-semibold">Profile Settings</h1>
              <p className="text-muted-foreground text-sm">
                Identity and availability.
              </p>
            </div>
            <Badge variant="warning-light" size="lg">
              <SparklesIcon />
              {completed}% complete
            </Badge>
          </header>

          <form
            className="flex flex-col px-5 py-2"
            onSubmit={(event) => {
              event.preventDefault()
              handleSave()
            }}
          >
            <Row label="Photo">
              <div className="flex items-center gap-3">
                <Avatar className="size-9">
                  <AvatarFallback className="bg-muted text-xs font-medium">
                    NB
                  </AvatarFallback>
                </Avatar>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setHasPhoto(true)}
                >
                  <UploadIcon />
                  Change
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setHasPhoto(false)}
                >
                  <XIcon />
                  Remove
                </Button>
              </div>
            </Row>

            <Row label="Full Name" htmlFor="profile-name" error={errors.name}>
              <Input
                id="profile-name"
                value={name}
                aria-invalid={Boolean(submitted && errors.name)}
                onChange={(event) => {
                  setName(event.target.value)
                  setSaved(false)
                }}
              />
            </Row>

            <Row
              label="Birth Date"
              info="Used for age-restricted workspace features."
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between font-normal"
                  >
                    {format(birthDate, "MMM d, yyyy")}
                    <CalendarIcon className="text-muted-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={birthDate}
                    defaultMonth={birthDate}
                    onSelect={(date) => date && setBirthDate(date)}
                  />
                </PopoverContent>
              </Popover>
            </Row>

            <Row
              label="Availability Date"
              info="Shown to teammates when they look for a handoff window."
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between font-normal"
                  >
                    {`${format(availableDate, "MMMM do, yyyy")} - ${availableTime}`}
                    <CalendarIcon className="text-muted-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <div className="flex">
                    <Calendar
                      mode="single"
                      selected={availableDate}
                      defaultMonth={availableDate}
                      onSelect={(date) => date && setAvailableDate(date)}
                    />
                    <div className="flex w-32 flex-col gap-2 border-l p-2">
                      <p className="px-1 text-sm font-medium">
                        {format(availableDate, "EEEE, d")}
                      </p>
                      <ScrollArea className="h-56">
                        <div className="flex flex-col gap-1 pr-2">
                          {TIME_SLOTS.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              size="sm"
                              variant={slot === availableTime ? "default" : "outline"}
                              className={cn(
                                "justify-start font-normal",
                                slot === availableTime && "font-medium",
                              )}
                              onClick={() => setAvailableTime(slot)}
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </Row>

            <Row label="Company" htmlFor="profile-company" error={errors.company}>
              <Input
                id="profile-company"
                value={company}
                aria-invalid={Boolean(submitted && errors.company)}
                onChange={(event) => {
                  setCompany(event.target.value)
                  setSaved(false)
                }}
              />
            </Row>

            <Row label="Specialties">
              <Combobox
                multiple
                autoHighlight
                items={SPECIALTIES}
                value={specialties}
                onValueChange={(next) => {
                  setSpecialties(next as string[])
                  setSaved(false)
                }}
              >
                <ComboboxChips ref={anchor} className="min-h-8">
                  <ComboboxValue>
                    {(values: string[]) => (
                      <Fragment>
                        {values.map((value) => (
                          <ComboboxChip key={value}>{value}</ComboboxChip>
                        ))}
                        <ComboboxChipsInput placeholder="Add specialty..." />
                      </Fragment>
                    )}
                  </ComboboxValue>
                </ComboboxChips>
                <ComboboxContent anchor={anchor}>
                  <ComboboxEmpty>No specialties found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Row>

            <Row
              label="Dismissal Time"
              info="The last moment this profile is reachable each day."
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 font-normal"
                  >
                    <ClockIcon className="text-muted-foreground" />
                    {formatSlot(dismissalTime)}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40 p-2" align="start">
                  <div className="grid max-h-56 gap-1 overflow-y-auto">
                    {TIME_SLOTS.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        size="sm"
                        variant={slot === dismissalTime ? "default" : "outline"}
                        className="justify-start font-normal"
                        onClick={() => setDismissalTime(slot)}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </Row>

            <Row label="Phone Number" htmlFor="profile-phone" error={errors.phone}>
              <Input
                id="profile-phone"
                type="tel"
                value={phone}
                aria-invalid={Boolean(submitted && errors.phone)}
                onChange={(event) => {
                  setPhone(event.target.value)
                  setSaved(false)
                }}
              />
            </Row>

            <Row label="Visibility" htmlFor="profile-visibility">
              <Select
                value={visibility}
                onValueChange={(value) => {
                  setVisibility(value)
                  setSaved(false)
                }}
              >
                <SelectTrigger id="profile-visibility" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="team">Team only</SelectItem>
                  <SelectItem value="organization">Organization</SelectItem>
                  <SelectItem value="private">Only me</SelectItem>
                </SelectContent>
              </Select>
            </Row>

            <Row label="Availability">
              <div className="flex h-8 items-center gap-2">
                <Switch
                  id="profile-hire"
                  checked={hire}
                  onCheckedChange={(checked) => {
                    setHire(checked)
                    setSaved(false)
                  }}
                />
                <label htmlFor="profile-hire" className="text-sm font-normal">
                  Available to hire
                </label>
              </div>
            </Row>
          </form>

          <footer className="bg-muted/50 flex items-center justify-between gap-4 border-t px-5 py-3">
            <p className="text-muted-foreground text-sm">
              {saved ? "Profile updated just now." : "Changes stay private until saved."}
            </p>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setName("Noa Brooks")
                  setCompany("Harborline Systems")
                  setPhone("+1 (312) 847-1928")
                  setSpecialties(["Product strategy", "Team workshops"])
                  setVisibility("team")
                  setHire(true)
                  setHasPhoto(true)
                  setSubmitted(false)
                  setSaved(false)
                }}
              >
                <RotateCcwIcon />
                Cancel
              </Button>
              <Button
                type="button"
                className="dark:bg-foreground dark:text-background"
                onClick={handleSave}
              >
                <SaveIcon />
                Save changes
              </Button>
            </div>
          </footer>
        </Card>
      </main>
    </TooltipProvider>
  )
}

export default FormProfileSettingsBlock
