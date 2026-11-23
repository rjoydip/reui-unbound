import { IconStack } from "@/components/kit/icon-stack"

import { IconPlaceholder } from "@/components/kit/icon-placeholder"

export default function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <IconStack aria-hidden="true" className="text-primary h-24 w-22">
        <span className="bg-background text-primary flex size-8 items-center justify-center rounded-full border shadow-xs">
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            className="size-4"
          />
        </span>
      </IconStack>
    </div>
  )
}