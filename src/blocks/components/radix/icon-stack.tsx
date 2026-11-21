import { IconStack } from "@/components/reui-unbound/icon-stack"

import { IconPlaceholder } from "@/components/reui-unbound/icon-placeholder"

export default function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <IconStack aria-hidden="true">
        <IconPlaceholder
          lucide="LayersIcon"
          tabler="IconStack2"
          hugeicons="Layers01Icon"
          phosphor="StackIcon"
          remixicon="RiStackLine"
          className="size-4"
        />
      </IconStack>
    </div>
  )
}
