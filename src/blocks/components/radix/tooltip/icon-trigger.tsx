import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/kit/icon-placeholder"

export default function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild><Button variant="ghost" size="icon" aria-label="More information" >
          <IconPlaceholder
            lucide="InfoIcon"
            tabler="IconInfoCircle"
            hugeicons="InformationCircleIcon"
            phosphor="InfoIcon"
            remixicon="RiInformationLine"
          />
        </Button></TooltipTrigger>
        <TooltipContent>
          <p className="text-center text-sm">
            Additional information and help context.
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}