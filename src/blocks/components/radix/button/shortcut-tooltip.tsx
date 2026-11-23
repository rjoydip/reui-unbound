import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/kit/icon-placeholder"

export default function Pattern() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Search">
          <IconPlaceholder
            lucide="SearchIcon"
            tabler="IconSearch"
            hugeicons="Search01Icon"
            phosphor="MagnifyingGlassIcon"
            remixicon="RiSearchLine"
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="flex items-center gap-3">
        Search
        <Kbd className="-mr-1">⌘K</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}