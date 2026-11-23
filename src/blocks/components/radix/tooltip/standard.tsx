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
        <TooltipTrigger asChild><Button variant="outline" className="w-fit" >
          Show Tooltip
        </Button></TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">Add to library</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}