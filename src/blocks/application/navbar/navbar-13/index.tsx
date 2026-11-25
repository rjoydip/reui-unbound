import { useState } from "react"
import {
  CheckIcon,
  ChevronDownIcon,
  MessageSquareIcon,
  XIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Navbar13Block() {
  const [previewCollapsed, setPreviewCollapsed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-2 border-b px-3">
      <Button variant="ghost" size="icon-sm" aria-label="Close editor">
        <XIcon />
      </Button>
      <Separator orientation="vertical" className="mx-1 h-5" />
      <h1 className="min-w-0 truncate text-sm font-medium">Invoice draft</h1>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="sm"><MessageSquareIcon />Send feedback</Button>
        <Button
          variant="outline"
          size="sm"
          aria-pressed={previewCollapsed}
          onClick={() => setPreviewCollapsed((value) => !value)}
        >
          {previewCollapsed ? "Show preview" : "Collapse preview"}
          <ChevronDownIcon
            className={previewCollapsed ? "rotate-180 transition-transform" : "transition-transform"}
          />
        </Button>
        <Button
          size="sm"
          onClick={() => setSubmitted(true)}
          className={submitted ? "gap-1.5" : undefined}
        >
          {submitted ? <><CheckIcon />Sent for review</> : "Submit invoice"}
        </Button>
      </div>
    </header>
  )
}

export default Navbar13Block
