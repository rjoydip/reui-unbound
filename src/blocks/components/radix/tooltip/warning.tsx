import { Badge } from "@/components/kit/badge"

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
        <TooltipTrigger asChild><Button variant="outline" size="icon" aria-label="Warning" >
          <IconPlaceholder
            lucide="AlertTriangleIcon"
            tabler="IconAlertTriangle"
            hugeicons="Alert01Icon"
            phosphor="WarningIcon"
            remixicon="RiAlertLine"
          />
        </Button></TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2 text-sm">
            <IconPlaceholder
              lucide="AlertTriangleIcon"
              tabler="IconAlertTriangle"
              hugeicons="Alert02Icon"
              phosphor="WarningIcon"
              remixicon="RiAlertLine"
              className="size-4 shrink-0"
            />
            This action cannot be undone
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}