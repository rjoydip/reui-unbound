import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui-unbound/alert"

import { IconPlaceholder } from "@/components/reui-unbound/icon-placeholder"

export default function Pattern() {
  return (
    <Alert variant="invert">
      <IconPlaceholder
        lucide="CircleAlertIcon"
        tabler="IconAlertCircle"
        hugeicons="AlertCircleIcon"
        phosphor="WarningCircleIcon"
        remixicon="RiErrorWarningLine"
        className="text-success"
      />
      <AlertTitle>Notification! All good</AlertTitle>
      <AlertDescription>
        This is a notification alert with a title and description.
      </AlertDescription>
    </Alert>
  )
}