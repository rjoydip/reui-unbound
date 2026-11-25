import { useState } from "react"
import {
  ArrowLeftIcon,
  CopyIcon,
  DownloadIcon,
  EllipsisIcon,
  HistoryIcon,
  PlayIcon,
  Share2Icon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"

export function NavbarWorkflowEditorBlock() {
  const [active, setActive] = useState(true)

  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-2 border-b px-3">
      <Button variant="ghost" size="icon-sm" aria-label="Back to workflows">
        <ArrowLeftIcon />
      </Button>
      <span className="text-muted-foreground text-sm font-medium">Workflows</span>

      <div className="ml-auto flex items-center gap-2">
        <label htmlFor="workflow-active" className="text-muted-foreground text-sm">
          {active ? "Active" : "Inactive"}
        </label>
        <Switch
          id="workflow-active"
          checked={active}
          onCheckedChange={setActive}
          aria-label="Workflow active"
        />
        <span className="bg-border mx-1 h-5 w-px" />
        <Button variant="ghost" size="icon-sm" aria-label="Run history">
          <HistoryIcon />
        </Button>
        <Button size="sm" className="gap-1.5">
          <PlayIcon className="fill-current" />
          Test Run
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="More options">
              <EllipsisIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuItem><DownloadIcon />Export JSON</DropdownMenuItem>
            <DropdownMenuItem><CopyIcon />Duplicate</DropdownMenuItem>
            <DropdownMenuItem><Share2Icon />Share</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2Icon />
              Delete workflow
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default NavbarWorkflowEditorBlock
