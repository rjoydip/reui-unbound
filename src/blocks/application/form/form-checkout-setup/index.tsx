import { useState } from "react"
import {
  BoxIcon,
  CheckIcon,
  CheckCircle2Icon,
  InfoIcon,
  Link2Icon,
  PlusIcon,
  SaveIcon,
} from "lucide-react"
import { cn } from "cn"

import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { FieldError } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const OFFER_TYPES = [
  "Product bundle",
  "One-time purchase",
  "Subscription",
  "Pre-order",
]
const BUTTON_COPY = [
  "Reserve access",
  "Buy now",
  "Get started",
  "Complete purchase",
]
const HANDOFFS = ["Show confirmation", "Redirect to URL", "Close checkout"]

const CUSTOMER_DETAILS = [
  { id: "name", label: "Collect customer name" },
  { id: "company", label: "Ask for company name" },
  { id: "address", label: "Collect delivery address" },
]

const CHECKOUT_RULES = [
  {
    id: "authorization",
    label: "Run managed authorization",
    live: true,
    info: "Reserve the payment method before handing off to your app.",
  },
  { id: "limit", label: "Limit completed purchases" },
  { id: "phone", label: "Require phone verification" },
]

const RECEIPT_DETAILS = [
  { id: "receipt", label: "Send branded receipt", checked: true, disabled: true },
  { id: "follow-up", label: "Allow follow-up offers" },
  {
    id: "terms",
    label: "Require terms acceptance",
    disabled: true,
    info: "Available after your legal team connects the terms document.",
  },
]

function InfoTip({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground inline-flex transition-colors"
          aria-label="More information"
        >
          <InfoIcon className="size-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-60">{children}</TooltipContent>
    </Tooltip>
  )
}

function Row({
  label,
  htmlFor,
  info,
  children,
  error,
}: {
  label: string
  htmlFor?: string
  info?: string
  children: React.ReactNode
  error?: string
}) {
  return (
    <div
      data-invalid={Boolean(error)}
      className="grid grid-cols-1 items-start gap-2 sm:grid-cols-[240px_1fr] sm:gap-6"
    >
      <div className="flex items-center gap-1.5 pt-1.5">
        <label htmlFor={htmlFor} className="text-sm font-medium">
          {label}
        </label>
        {info && <InfoTip>{info}</InfoTip>}
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        {children}
        {error && <FieldError>{error}</FieldError>}
      </div>
    </div>
  )
}

function CheckRow({
  id,
  label,
  description,
  checked,
  disabled,
  onCheckedChange,
  trailing,
}: {
  id: string
  label: string
  description?: string
  checked?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
  trailing?: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <Checkbox
        id={id}
        checked={checked}
        disabled={disabled}
        onCheckedChange={(value) => onCheckedChange?.(value === true)}
        className="mt-0.5"
      />
      <div className="flex flex-col gap-0.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <label
            htmlFor={id}
            className={cn(
              "text-sm leading-tight",
              disabled && "text-muted-foreground",
            )}
          >
            {label}
          </label>
          {trailing}
        </div>
        {description && (
          <p className="text-muted-foreground text-xs">{description}</p>
        )}
      </div>
    </div>
  )
}

export function FormCheckoutSetupBlock() {
  const [offerType, setOfferType] = useState("Product bundle")
  const [offer, setOffer] = useState("Growth seat bundle")
  const [buttonCopy, setButtonCopy] = useState("Reserve access")
  const [handoff, setHandoff] = useState("Show confirmation")
  const [returnUrl, setReturnUrl] = useState("https://northstar.studio/welcome")
  const [customer, setCustomer] = useState<Record<string, boolean>>({
    name: true,
    company: false,
    address: false,
  })
  const [rules, setRules] = useState<Record<string, boolean>>({
    authorization: true,
    limit: false,
    phone: false,
  })
  const [receipts, setReceipts] = useState<Record<string, boolean>>({
    receipt: true,
    "follow-up": false,
    terms: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [published, setPublished] = useState(false)

  const errors = {
    offer: !offer.trim() ? "Describe the offer customers will see." : undefined,
    returnUrl: !returnUrl.trim() ? "Enter a return URL." : undefined,
  }

  function handlePublish() {
    setSubmitted(true)
    if (Object.values(errors).some(Boolean)) return
    setPublished(true)
  }

  return (
    <TooltipProvider>
      <main className="flex min-h-svh items-center justify-center p-6">
        <Frame dense stacked className="w-full max-w-2xl">
          <FramePanel className="flex items-start justify-between gap-4 bg-muted/50">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-sm font-semibold">Checkout Setup</h1>
              <p className="text-muted-foreground text-sm">
                Hosted checkout settings.
              </p>
            </div>
            <Badge variant="success" size="lg">
              <CheckCircle2Icon />
              Ready to publish
            </Badge>
          </FramePanel>

          <FramePanel className="flex flex-col gap-6 [--frame-panel-py:--spacing(6)]">
            <Row
              label="Offer Type"
              info="Controls how the hosted checkout charges the customer."
            >
              <Select value={offerType} onValueChange={setOfferType}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {OFFER_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Row>

            <Row label="Offer" htmlFor="checkout-offer" error={errors.offer}>
              <InputGroup>
                <InputGroupAddon>
                  <BoxIcon />
                </InputGroupAddon>
                <InputGroupInput
                  id="checkout-offer"
                  value={offer}
                  aria-invalid={Boolean(submitted && errors.offer)}
                  onChange={(event) => {
                    setOffer(event.target.value)
                    setPublished(false)
                  }}
                />
              </InputGroup>
              <Button type="button" variant="outline" className="w-fit">
                <PlusIcon />
                Add add-ons
              </Button>
            </Row>

            <Row label="Customer Details">
              <div className="flex flex-col gap-2">
                {CUSTOMER_DETAILS.map((item) => (
                  <CheckRow
                    key={item.id}
                    id={`customer-${item.id}`}
                    label={item.label}
                    checked={customer[item.id]}
                    onCheckedChange={(value) =>
                      setCustomer((current) => ({
                        ...current,
                        [item.id]: value,
                      }))
                    }
                  />
                ))}
              </div>
            </Row>

            <Row label="Checkout Rules">
              <div className="flex flex-col gap-2">
                {CHECKOUT_RULES.map((item) => (
                  <CheckRow
                    key={item.id}
                    id={`rule-${item.id}`}
                    label={item.label}
                    checked={rules[item.id]}
                    trailing={
                      <>
                        {item.info && <InfoTip>{item.info}</InfoTip>}
                        {item.live && (
                          <Badge variant="success-light" size="sm">
                            Live
                          </Badge>
                        )}
                      </>
                    }
                    onCheckedChange={(value) =>
                      setRules((current) => ({ ...current, [item.id]: value }))
                    }
                  />
                ))}
              </div>
            </Row>

            <Row label="Button Copy">
              <Select value={buttonCopy} onValueChange={setButtonCopy}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BUTTON_COPY.map((copy) => (
                    <SelectItem key={copy} value={copy}>
                      {copy}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Row>

            <Row label="Handoff">
              <Select value={handoff} onValueChange={setHandoff}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {HANDOFFS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Row>

            <Row
              label="Return URL"
              htmlFor="checkout-return"
              info="Where customers land after the checkout completes."
              error={errors.returnUrl}
            >
              <InputGroup>
                <InputGroupAddon>
                  <Link2Icon />
                </InputGroupAddon>
                <InputGroupInput
                  id="checkout-return"
                  value={returnUrl}
                  aria-invalid={Boolean(submitted && errors.returnUrl)}
                  onChange={(event) => {
                    setReturnUrl(event.target.value)
                    setPublished(false)
                  }}
                />
              </InputGroup>
            </Row>

            <Row label="Receipt Details">
              <div className="flex flex-col gap-2">
                {RECEIPT_DETAILS.map((item) => (
                  <CheckRow
                    key={item.id}
                    id={`receipt-${item.id}`}
                    label={item.label}
                    checked={receipts[item.id]}
                    disabled={item.disabled}
                    trailing={item.info && <InfoTip>{item.info}</InfoTip>}
                    onCheckedChange={(value) =>
                      setReceipts((current) => ({ ...current, [item.id]: value }))
                    }
                  />
                ))}
              </div>
            </Row>
          </FramePanel>

          <FramePanel className="flex items-center justify-between gap-4 bg-muted/50">
            <p className="text-muted-foreground text-sm">
              {published ? "Checkout published." : "Draft stays private."}
            </p>
            <div className="flex items-center gap-2">
              <Button type="button" variant="outline">
                <SaveIcon />
                Save draft
              </Button>
              <Button
                type="button"
                className="dark:bg-foreground dark:text-background"
                onClick={handlePublish}
              >
                {published && <CheckIcon />}
                {published ? "Published" : "Publish checkout"}
              </Button>
            </div>
          </FramePanel>
        </Frame>
      </main>
    </TooltipProvider>
  )
}

export default FormCheckoutSetupBlock
