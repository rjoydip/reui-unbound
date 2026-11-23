import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/kit/icon-placeholder"

export default function Pattern() {
  return (
    <Button>
      <IconPlaceholder
        lucide="MailIcon"
        tabler="IconMail"
        hugeicons="MailIcon"
        phosphor="EnvelopeIcon"
        remixicon="RiMailLine"
        aria-hidden="true"
      />
      Login with Email
    </Button>
  )
}