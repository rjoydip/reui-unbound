import { useState } from "react"
import { SaveIcon, SparklesIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const OUTPUTS = [
  { label: "Summary", description: "Concise recap for the meeting record." },
  { label: "Action Items", description: "Owners, dates, and promised follow-ups." },
  { label: "CRM Note", description: "Clean writeback draft for the account timeline." },
]

export function ProfileMeetingCaptureBlock() {
  const [outputs, setOutputs] = useState(OUTPUTS.map((output) => output.label))
  const [autoShare, setAutoShare] = useState(true)
  const [transcript, setTranscript] = useState(false)
  const [saved, setSaved] = useState(false)

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[766px]">
        <div className="bg-card overflow-hidden rounded-xl border">
          <div className="flex items-start justify-between gap-3 border-b p-5">
            <div>
              <h1 className="text-sm font-semibold">Meeting Capture</h1>
              <p className="text-muted-foreground text-sm">Set recording defaults and the note template for customer calls.</p>
            </div>
            <Badge variant="success-light" size="lg">Review Ready</Badge>
          </div>

          <div className="divide-y">
            <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_448px]">
              <div>
                <p className="text-sm font-medium">Capture Mode</p>
                <p className="text-muted-foreground text-sm">Choose when recording starts.</p>
              </div>
              <Select defaultValue="External Meetings">
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="External Meetings">External Meetings</SelectItem>
                  <SelectItem value="All Meetings">All Meetings</SelectItem>
                  <SelectItem value="Manual">Manual</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_448px]">
              <div>
                <p className="text-sm font-medium">Consent Notice</p>
                <p className="text-muted-foreground text-sm">Set the attendee notice behavior.</p>
              </div>
              <Select defaultValue="Host Prompt">
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Host Prompt">Host Prompt</SelectItem>
                  <SelectItem value="Automatic">Automatic</SelectItem>
                  <SelectItem value="None">None</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_448px]">
              <div>
                <p className="text-sm font-medium">Notes Template</p>
                <p className="text-muted-foreground text-sm">Pick the default analysis format.</p>
              </div>
              <Select defaultValue="Customer Summary">
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Customer Summary">Customer Summary</SelectItem>
                  <SelectItem value="Discovery Notes">Discovery Notes</SelectItem>
                  <SelectItem value="QBR Recap">QBR Recap</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_448px]">
              <div>
                <p className="text-sm font-medium">Output Fields</p>
                <p className="text-muted-foreground text-sm">Include only the fields teams review.</p>
              </div>
              <div className="space-y-2.5">
                {OUTPUTS.map((output) => (
                  <label key={output.label} className="flex items-start gap-2">
                    <Checkbox
                      className="mt-0.5"
                      checked={outputs.includes(output.label)}
                      onCheckedChange={(value) =>
                        setOutputs((current) =>
                          value ? [...current, output.label] : current.filter((entry) => entry !== output.label)
                        )
                      }
                    />
                    <span>
                      <span className="block text-sm font-medium">{output.label}</span>
                      <span className="text-muted-foreground block text-xs">{output.description}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_448px]">
              <div>
                <p className="text-sm font-medium">Prompt</p>
                <p className="text-muted-foreground text-sm">Guide the generated meeting note.</p>
              </div>
              <Textarea
                rows={4}
                defaultValue="Capture the customer goal, open risks, clear next steps, and any commitments made by the team."
                aria-label="Capture prompt"
              />
            </div>

            <div className="flex items-center gap-3 px-5 py-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Auto Share</p>
                <p className="text-muted-foreground text-sm">Send the note draft to call owners.</p>
              </div>
              <Switch checked={autoShare} onCheckedChange={setAutoShare} aria-label="Auto share" />
            </div>

            <div className="flex items-center gap-3 px-5 py-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Transcript</p>
                <p className="text-muted-foreground text-sm">Attach the full transcript by default.</p>
              </div>
              <Switch checked={transcript} onCheckedChange={setTranscript} aria-label="Transcript" />
            </div>
          </div>

          <div className="bg-muted/30 flex flex-wrap items-center gap-2 border-t px-5 py-3">
            <span className="text-muted-foreground text-xs">
              External Meetings / Customer Summary / {outputs.length} outputs
            </span>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => { setAutoShare(true); setTranscript(false); setOutputs(OUTPUTS.map((output) => output.label)) }}>Reset</Button>
              <Button size="sm" onClick={() => setSaved(true)}>
                <SaveIcon />
                {saved ? "Saved" : "Save Settings"}
              </Button>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mt-4 flex items-center justify-center gap-1.5 text-xs">
          <SparklesIcon className="size-3.5" />
          Notes are generated after the call and stay editable before sharing.
        </p>
      </div>
    </div>
  )
}

export default ProfileMeetingCaptureBlock
