import { Toggle } from "@/components/ui/toggle"
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
        <TooltipTrigger
           asChild><Toggle variant="outline" aria-label="Pin to sidebar">
          <IconPlaceholder
            lucide="PinIcon"
            tabler="IconPin"
            hugeicons="Pin02Icon"
            phosphor="PushPinIcon"
            remixicon="RiPushpinLine"
          />
        </Toggle></TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">Pin to sidebar</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}