import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/kit/icon-placeholder"

export default function Pattern() {
  return (
    <Button variant="link">
      <IconPlaceholder
        lucide="HelpCircleIcon"
        tabler="IconHelpCircle"
        hugeicons="HelpCircleIcon"
        phosphor="QuestionIcon"
        remixicon="RiQuestionLine"
        aria-hidden="true"
      />
      Help Center
    </Button>
  )
}