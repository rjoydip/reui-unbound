import { useState } from "react"
import {
  Check,
  CodeXml,
  MessageSquare,
  Plus,
  ScanSearch,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Frame, FramePanel } from "@/components/kit/frame"

type ManualIntegration = {
  id: string
  name: string
  description: string
  icon: LucideIcon
}

const MANUAL_INTEGRATION_ITEMS: ManualIntegration[] = [
  {
    id: "data-cleaning",
    name: "Data Cleaning",
    description: "Automated pipeline to clean and format..",
    icon: CodeXml,
  },
  {
    id: "anomaly-detection",
    name: "Anomaly Detection",
    description: "Identify irregular patterns in financial or..",
    icon: ScanSearch,
  },
  {
    id: "recommendation-engine",
    name: "Recommendation Engine",
    description: "AI-driven product or content recomme..",
    icon: Sparkles,
  },
  {
    id: "chatbot-support",
    name: "Chatbot Support",
    description: "Conversational assistant for customer..",
    icon: MessageSquare,
  },
  {
    id: "fraud-monitoring",
    name: "Fraud Monitoring",
    description: "Real-time alerts for suspicious transac..",
    icon: ShoppingCart,
  },
]

export function ListCapabilityModulesBlock() {
  const [added, setAdded] = useState<string[]>([])

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-[440px]">
        <Frame spacing="xs">
          <FramePanel className="px-4 py-3.5">
            <span className="text-[15px] font-semibold">
              Manual Integrations
            </span>
          </FramePanel>

          <FramePanel className="p-0 py-1">
            <ItemGroup className="gap-0">
              {MANUAL_INTEGRATION_ITEMS.map((integration, index) => {
                const Icon = integration.icon
                const isAdded = added.includes(integration.id)
                return (
                  <div
                    key={integration.id}
                    className={cn(
                      "px-4",
                      index < MANUAL_INTEGRATION_ITEMS.length - 1 &&
                        "border-b border-dashed border-border",
                    )}
                  >
                    <Item className="gap-3 px-0 py-3">
                      <ItemMedia
                        variant="icon"
                        className="size-8 rounded-lg border border-border bg-muted/60 text-muted-foreground"
                      >
                        <Icon />
                      </ItemMedia>
                      <ItemContent className="min-w-0 gap-0">
                        <ItemTitle className="text-sm font-medium">
                          {integration.name}
                        </ItemTitle>
                        <div className="truncate text-xs text-muted-foreground">
                          {integration.description}
                        </div>
                      </ItemContent>
                      <ItemActions>
                        <Button
                          type="button"
                          variant={isAdded ? "secondary" : "outline"}
                          size="icon-sm"
                          className="rounded-md"
                          aria-label={
                            isAdded
                              ? `Remove ${integration.name}`
                              : `Add ${integration.name}`
                          }
                          aria-pressed={isAdded}
                          onClick={() =>
                            setAdded((current) =>
                              current.includes(integration.id)
                                ? current.filter(
                                    (item) => item !== integration.id,
                                  )
                                : [...current, integration.id],
                            )
                          }
                        >
                          {isAdded ? <Check /> : <Plus />}
                        </Button>
                      </ItemActions>
                    </Item>
                  </div>
                )
              })}
            </ItemGroup>
          </FramePanel>

          <FramePanel className="p-4">
            <Button type="button" variant="outline" className="h-9 w-full">
              Browse More
            </Button>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}

export default ListCapabilityModulesBlock
