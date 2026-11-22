import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/kit/alert"
import { Frame, FramePanel } from "@/components/kit/frame"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/kit/icon-placeholder"

export default function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert className="border-0 shadow-none">
            <IconPlaceholder
              lucide="ShieldCheckIcon"
              tabler="IconShieldCheck"
              hugeicons="ShieldEnergyIcon"
              phosphor="ShieldCheckIcon"
              remixicon="RiShieldCheckLine"
              className="text-emerald-500"
            />
            <AlertTitle>Security Update</AlertTitle>
            <AlertAction>
              <Button variant="outline" size="xs">
                Dismiss
              </Button>
              <Button size="xs">Update</Button>
            </AlertAction>
            <AlertDescription>
              Update your password and enable 2FA to improve your account
              security.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}