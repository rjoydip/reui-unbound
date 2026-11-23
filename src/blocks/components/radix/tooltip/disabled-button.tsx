import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger className="cursor-not-allowed"  asChild><span>
          <Button variant="outline" disabled>
            Delete Project
          </Button>
        </span></TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">You need admin access to delete projects</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}