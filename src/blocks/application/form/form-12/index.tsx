import { useRef, useState } from "react"
import {
  CheckIcon, FootprintsIcon, ImagePlusIcon, InfoIcon, SaveIcon, ShirtIcon, TagIcon, XIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty,
  ComboboxItem, ComboboxList, ComboboxValue, useComboboxAnchor,
} from "@/components/ui/combobox"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "cn"

const CATEGORIES = [
  { value: "outerwear", label: "Outerwear", hint: "Jackets, shells, vests, and seasonal layers." },
  { value: "footwear", label: "Footwear", hint: "Shoes, boots, trainers, and product bundles." },
  { value: "accessories", label: "Accessories", hint: "Bags, caps, socks, watches, and add-ons." },
  { value: "home", label: "Home", hint: "Lifestyle, desk, and home goods." },
  { value: "digital", label: "Digital", hint: "Downloads, templates, licenses, and services." },
]
const FULFILLMENT = [
  { value: "warehouse", label: "Warehouse", hint: "Reserve stock and create warehouse fulfillment tasks." },
  { value: "dropship", label: "Dropship", hint: "Route orders to a supplier after payment capture." },
  { value: "digital", label: "Digital Delivery", hint: "Send download access after checkout completes." },
]
const PRODUCT_TYPES = [
  { value: "physical", label: "Physical Product", hint: "Ships from inventory and needs fulfillment rules." },
  { value: "digital", label: "Digital Download", hint: "Delivers files, licenses, or access after purchase." },
  { value: "service", label: "Service", hint: "Creates a bookable or managed service offer." },
]
const COLLECTIONS = ["New Arrivals", "Running", "Weather Ready", "Trail", "Recovery", "Limited Drop"]
const STATUS_OPTIONS = [
  { value: "draft", label: "Draft", hint: "Hidden until product details are approved.", dot: "bg-warning" },
  { value: "active", label: "Active", hint: "Available in selected sales channels.", dot: "bg-success" },
  { value: "scheduled", label: "Scheduled", hint: "Publishes when the launch window opens.", dot: "bg-info" },
]
const MAX_IMAGES = 5

function InfoHint({ text }: { text: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild><InfoIcon className="size-3.5 text-muted-foreground/70" /></TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function Row({ label, description, info, children }: {
  label: string; description: string; info?: string; children: React.ReactNode
}) {
  return (
    <div className="grid gap-3 px-6 py-4 md:grid-cols-[240px_1fr] md:gap-8">
      <div className="space-y-0.5">
        <div className="flex items-center gap-1.5 text-sm font-medium">{label}{info && <InfoHint text={info} />}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

function Labeled({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="space-y-1.5"><p className="text-sm font-medium">{label}</p>{children}</div>
}

function HintSelect({ value, onChange, items, label }: {
  value: string; onChange: (value: string) => void; label: string
  items: { value: string; label: string; hint: string }[]
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full" aria-label={label}>
        <SelectValue>{items.find((item) => item.value === value)?.label ?? value}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            <span className="flex flex-col">
              <span>{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.hint}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

const MoneyField = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
  <Labeled label={label}>
    <InputGroup>
      <InputGroupAddon><InputGroupText>$</InputGroupText></InputGroupAddon>
      <InputGroupInput value={value} onChange={(event) => onChange(event.target.value)} inputMode="decimal" aria-label={label} />
    </InputGroup>
  </Labeled>
)

export function Form12Block() {
  const anchor = useComboboxAnchor()
  const fileInput = useRef<HTMLInputElement>(null)
  const [images, setImages] = useState<{ id: string; src?: string; gradient?: string }[]>([
    { id: "one", gradient: "bg-gradient-to-br from-rose-500 to-red-700 text-white" },
    { id: "two", gradient: "bg-gradient-to-br from-amber-200 to-yellow-400 text-amber-800" },
  ])
  const [name, setName] = useState("AeroFlex Runner Shoe")
  const [description, setDescription] = useState(
    "Responsive knit running shoe with a cushioned midsole, grippy road outsole, and reflective details for early training sessions."
  )
  const [category, setCategory] = useState("footwear")
  const [productType, setProductType] = useState("physical")
  const [price, setPrice] = useState("148.00")
  const [compareAt, setCompareAt] = useState("188.00")
  const [sku, setSku] = useState("ARS-2048-ST")
  const [quantity, setQuantity] = useState("126")
  const [trackInventory, setTrackInventory] = useState(true)
  const [chargeTax, setChargeTax] = useState(true)
  const [fulfillment, setFulfillment] = useState("warehouse")
  const [collections, setCollections] = useState(["New Arrivals", "Running", "Weather Ready"])
  const [status, setStatus] = useState("draft")
  const [saving, setSaving] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const categoryLabel = CATEGORIES.find((item) => item.value === category)?.label ?? ""
  const statusOption = STATUS_OPTIONS.find((item) => item.value === status) ?? STATUS_OPTIONS[0]

  const addFiles = (files: FileList | null) => {
    if (!files?.length) return
    const room = MAX_IMAGES - images.length
    const next = Array.from(files).slice(0, room).map((file, index) => ({
      id: `${Date.now()}-${index}`,
      src: URL.createObjectURL(file),
    }))
    setImages((current) => [...current, ...next])
    if (files.length > room) toast.message(`Limit is ${MAX_IMAGES} images`)
  }

  const saveDraft = () => {
    setSaving(true)
    window.setTimeout(() => {
      setSaving(false)
      toast.success("Product draft saved")
    }, 600)
  }

  const createProduct = () => {
    if (!name.trim()) { toast.error("Product name is required"); return }
    if (!Number.isFinite(Number.parseFloat(price)) || Number.parseFloat(price) <= 0) {
      toast.error("Enter a valid price"); return
    }
    if (!sku.trim()) { toast.error("SKU is required"); return }
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      toast.success(`${name.trim()} created as ${statusOption.label.toLowerCase()}`)
    }, 1100)
  }

  return (
    <div className="flex min-h-svh justify-center bg-background px-4 py-10 sm:px-6">
      <div className="w-full max-w-3xl">
        <section className="overflow-hidden rounded-xl border bg-card">
          <div className="flex items-start justify-between gap-3 border-b px-6 py-5">
            <div className="space-y-0.5">
              <h2 className="text-base font-semibold">Create Product</h2>
              <p className="text-sm text-muted-foreground">Add catalog details, media, pricing, and fulfillment.</p>
            </div>
            <Badge variant="warning-light" radius="full" className="gap-1"><TagIcon />{statusOption.label}</Badge>
          </div>

          <div className="divide-y divide-dashed">
            <Row label="Product Media" info="First image becomes the listing cover." description="Thumbnail gallery for listings.">
              <div className="flex flex-wrap items-center gap-2 rounded-lg border border-dashed p-3">
                <input
                  ref={fileInput} type="file" accept="image/*" multiple className="sr-only"
                  onChange={(event) => { addFiles(event.target.files); event.target.value = "" }}
                />
                <Button size="sm" onClick={() => fileInput.current?.click()} disabled={images.length >= MAX_IMAGES}>
                  <ImagePlusIcon />Add Files
                </Button>
                {images.map((image, index) => (
                  <div key={image.id} className="group/thumb relative">
                    <div className={cn("flex size-12 items-center justify-center overflow-hidden rounded-md border", image.gradient)}>
                      {image.src ? (
                        <img src={image.src} alt="Product thumbnail" className="size-full object-cover" />
                      ) : index === 0 ? (
                        <FootprintsIcon className="size-6" />
                      ) : (
                        <ShirtIcon className="size-6" />
                      )}
                    </div>
                    <button
                      type="button" aria-label="Remove image"
                      onClick={() => setImages((current) => current.filter((item) => item.id !== image.id))}
                      className="absolute -top-1.5 -right-1.5 hidden size-5 items-center justify-center rounded-full bg-foreground text-background shadow group-hover/thumb:flex"
                    >
                      <XIcon className="size-3" />
                    </button>
                  </div>
                ))}
                <span className="ml-auto text-xs text-muted-foreground">{images.length}/{MAX_IMAGES}</span>
              </div>
            </Row>

            <Row label="Product Name" description="Storefront display name.">
              <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="AeroFlex Runner Shoe" aria-label="Product name" />
            </Row>

            <Row label="Description" description="Short sales copy for the product page.">
              <Textarea value={description} onChange={(event) => setDescription(event.target.value)} className="min-h-20" aria-label="Description" />
            </Row>

            <Row label="Category" description="Primary merchandising group.">
              <HintSelect label="Category" value={category} onChange={setCategory} items={CATEGORIES} />
            </Row>

            <Row label="Product Type" description="How checkout and delivery should work.">
              <RadioGroup value={productType} onValueChange={setProductType} className="gap-3">
                {PRODUCT_TYPES.map((item) => (
                  <label key={item.value} className="flex cursor-pointer items-start gap-3">
                    <RadioGroupItem value={item.value} className="mt-0.5" />
                    <span>
                      <span className="block text-sm font-medium">{item.label}</span>
                      <span className="block text-sm text-muted-foreground">{item.hint}</span>
                    </span>
                  </label>
                ))}
              </RadioGroup>
            </Row>

            <Row label="Pricing" description="Base and comparison price.">
              <div className="grid gap-3 sm:grid-cols-2">
                <MoneyField label="Price" value={price} onChange={setPrice} />
                <MoneyField label="Compare At" value={compareAt} onChange={setCompareAt} />
              </div>
            </Row>

            <Row label="Inventory" description="Stock keeping unit and quantity.">
              <div className="grid gap-3 sm:grid-cols-2">
                <Labeled label="SKU">
                  <Input value={sku} onChange={(event) => setSku(event.target.value)} aria-label="SKU" />
                </Labeled>
                <Labeled label="Quantity">
                  <Input value={quantity} onChange={(event) => setQuantity(event.target.value)} inputMode="numeric" aria-label="Quantity" />
                </Labeled>
              </div>
            </Row>

            <Row label="Commerce Rules" description="Tax and stock behavior.">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-2.5">
                  <Switch checked={trackInventory} onCheckedChange={setTrackInventory} aria-label="Track inventory" />
                  <div>
                    <p className="text-sm font-medium">Track Inventory</p>
                    <p className="text-sm text-muted-foreground">Reserve stock after purchase.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Switch checked={chargeTax} onCheckedChange={setChargeTax} aria-label="Charge tax" />
                  <div>
                    <p className="text-sm font-medium">Charge Tax</p>
                    <p className="text-sm text-muted-foreground">Apply regional tax rules.</p>
                  </div>
                </div>
              </div>
            </Row>

            <Row label="Fulfillment" description="How orders are completed.">
              <HintSelect label="Fulfillment" value={fulfillment} onChange={setFulfillment} items={FULFILLMENT} />
            </Row>

            <Row label="Collections" info="Group products for storefront shelves and campaigns." description="Storefront groups and campaigns.">
              <Combobox multiple autoHighlight items={COLLECTIONS} value={collections} onValueChange={setCollections}>
                <ComboboxChips ref={anchor} className="min-h-9">
                  <ComboboxValue>
                    {(values: string[]) => (
                      <>
                        {values.map((value) => <ComboboxChip key={value}>{value}</ComboboxChip>)}
                        <ComboboxChipsInput placeholder="Add collection" />
                      </>
                    )}
                  </ComboboxValue>
                </ComboboxChips>
                <ComboboxContent anchor={anchor}>
                  <ComboboxEmpty>No collections found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Row>

            <Row label="Status" description="Controls storefront visibility.">
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full" aria-label="Status">
                  <span className="flex items-center gap-2">
                    <span className={cn("size-1.5 rounded-full", statusOption.dot)} />
                    <SelectValue>{statusOption.label}</SelectValue>
                  </span>
                </SelectTrigger>
                <SelectContent>
                  {STATUS_OPTIONS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      <span className="flex items-start gap-2">
                        <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", item.dot)} />
                        <span className="flex flex-col">
                          <span>{item.label}</span>
                          <span className="text-xs text-muted-foreground">{item.hint}</span>
                        </span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Row>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t bg-muted/40 px-6 py-3">
            <p className="text-sm text-muted-foreground">
              {images.length} media · {categoryLabel} · {collections.length} collections
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={saveDraft} disabled={saving}>
                {saving ? <Spinner className="size-3.5" /> : <SaveIcon />}Save Draft
              </Button>
              <Button onClick={createProduct} disabled={submitting}>
                {submitting ? <Spinner className="size-3.5" /> : <CheckIcon />}Create Product
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Form12Block
