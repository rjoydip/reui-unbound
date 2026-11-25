import { useState } from "react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ImageIcon,
  InfoIcon,
  PencilIcon,
  PlusIcon,
  Trash2Icon,
  UploadIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/kit/stepper"

const STEPS = [
  { title: "Product", description: "Basics" },
  { title: "Images", description: "Gallery" },
  { title: "Options", description: "Variant system" },
  { title: "Pricing", description: "Price mapping" },
  { title: "Variants", description: "SKU matrix" },
]

const IMAGES = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=240&h=240&fit=crop",
  "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=240&h=240&fit=crop",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=240&h=240&fit=crop",
]

const VARIANTS = [
  { image: IMAGES[0], color: "Clay", size: "8", width: "Standard", sku: "AKR-CLY-08-STD", barcode: "0088 4120 1182" },
  { image: IMAGES[0], color: "Clay", size: "9", width: "Standard", sku: "AKR-CLY-09-STD", barcode: "0088 4120 1199" },
  { image: IMAGES[1], color: "Sand", size: "8", width: "Standard", sku: "AKR-SND-08-STD", barcode: "0088 4120 1243" },
  { image: IMAGES[2], color: "Graphite", size: "10", width: "Wide", sku: "AKR-GPH-10-WDE", barcode: "0088 4120 1281" },
]

const OPTION_GROUPS = [
  { name: "Color Options", count: 3, rows: [["Clay", "clay", "Warm terracotta"], ["Sand", "sand", "Natural beige"], ["Graphite", "graphite", "Deep neutral"]], swatches: ["#a0522d", "#d6c3a1", "#2f2f2f"], open: true },
  { name: "Size Options", count: 4, rows: [], open: false },
  { name: "Width Options", count: 2, rows: [], open: false },
]

function Hint() {
  return <InfoIcon className="text-muted-foreground inline size-3 align-[-1px]" />
}

function FieldRow({ label, hint, children }: { label: string; hint?: boolean; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[140px_1fr] items-center gap-4">
      <Label className="text-xs font-medium">{label}{hint ? <> <Hint /></> : null}</Label>
      {children}
    </div>
  )
}

export function WizardProductSetupWizardBlock() {
  const [step, setStep] = useState(1)

  return (
    <div className="bg-background text-foreground flex min-h-svh flex-col">
      <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
        <Button variant="ghost" size="icon-sm" aria-label="Close"><XIcon /></Button>
        <Separator orientation="vertical" className="h-5" />
        <p className="text-sm font-medium">Add Product</p>
        <div className="ml-auto flex items-center gap-2 text-xs">
          <button type="button" className="hover:text-foreground text-muted-foreground px-2">Preview</button>
          <button type="button" className="hover:text-foreground text-muted-foreground px-2">Save draft</button>
          <Separator orientation="vertical" className="h-5" />
          {step > 1 ? <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setStep((value) => value - 1)}><ArrowLeftIcon />Previous</Button> : null}
          {step < 5 ? (
            <Button size="sm" className="bg-foreground text-background gap-1.5 hover:bg-foreground/90" onClick={() => setStep((value) => value + 1)}>Next<ArrowRightIcon /></Button>
          ) : (
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">Create</Button>
          )}
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto grid w-full max-w-[980px] gap-5 md:grid-cols-[260px_1fr]">
          <div className="bg-card h-fit rounded-xl border p-4 shadow-sm">
            <Stepper value={step} onValueChange={setStep} orientation="vertical">
              <StepperNav className="items-start">
                {STEPS.map((item, index) => (
                  <StepperItem key={item.title} step={index + 1} className="w-full flex-col items-start">
                    <StepperTrigger className="w-full flex-row items-start justify-start gap-2.5 text-left" disabled={index + 1 > step}>
                      <StepperIndicator className="mt-0.5 size-5 border-2 border-dashed border-muted-foreground/50 bg-background text-[10px] text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=completed]:border-0 data-[state=completed]:bg-foreground data-[state=completed]:text-background">
                        {index + 1}
                      </StepperIndicator>
                      <span>
                        <StepperTitle className="block text-xs font-medium">{item.title}</StepperTitle>
                        <StepperDescription className="text-muted-foreground block text-[11px]">{item.description}</StepperDescription>
                      </span>
                    </StepperTrigger>
                    {index < STEPS.length - 1 ? <StepperSeparator className="ml-2.5" /> : null}
                  </StepperItem>
                ))}
              </StepperNav>
            </Stepper>
          </div>

          <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
            <div className="px-5 py-4">
              <h2 className="text-base font-semibold">{step === 1 ? "Product" : step === 2 ? "Images" : step === 3 ? "Options" : step === 4 ? "Pricing" : "Variants"}</h2>
              <p className="text-muted-foreground mt-0.5 text-xs">
                {step === 1 ? "Name, taxonomy, fulfillment, and storefront copy." : step === 2 ? "Upload product images and choose the primary storefront photo." : step === 3 ? "Create reusable option groups and values for any product type." : step === 4 ? "Set base price, rules, and variant price mappings." : "Confirm each variant with image, SKU, barcode, stock, and price."}
              </p>
            </div>

            <Separator />

            <div className="px-5 py-4">
              {step === 1 ? (
                <>
                  <h3 className="text-sm font-semibold">Product Identity</h3>
                  <div className="mt-4 space-y-3">
                    <FieldRow label="Product name" hint><Input defaultValue="Aster Knit Runner" className="h-8" /></FieldRow>
                    <FieldRow label="Handle" hint><Input defaultValue="aster-knit-runner" className="h-8" /></FieldRow>
                    <FieldRow label="Status" hint>
                      <Select defaultValue="draft"><SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="draft">Draft</SelectItem><SelectItem value="active">Active</SelectItem></SelectContent></Select>
                    </FieldRow>
                    <FieldRow label="Vendor" hint><Input defaultValue="Northstar Goods" className="h-8" /></FieldRow>
                    <FieldRow label="Product type" hint>
                      <Select defaultValue="footwear"><SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="footwear">Footwear</SelectItem><SelectItem value="apparel">Apparel</SelectItem></SelectContent></Select>
                    </FieldRow>
                    <FieldRow label="Collection" hint>
                      <Select defaultValue="spring"><SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="spring">Spring Essentials</SelectItem><SelectItem value="core">Core Line</SelectItem></SelectContent></Select>
                    </FieldRow>
                    <FieldRow label="Description" hint>
                      <Textarea defaultValue="A breathable everyday runner with a sculpted sole, recycled knit upper, and soft interior support for all-day retail wear." className="min-h-16 text-xs" />
                    </FieldRow>
                  </div>

                  <Separator className="my-4" />

                  <h3 className="text-sm font-semibold">Fulfillment</h3>
                  <div className="mt-3">
                    <FieldRow label="Fulfillment mode" hint>
                      <RadioGroup defaultValue="warehouse" className="space-y-2">
                        <label className="border-foreground/40 bg-muted/30 flex cursor-pointer items-start gap-2.5 rounded-lg border px-3 py-2">
                          <RadioGroupItem value="warehouse" className="mt-0.5" />
                          <span><span className="block text-xs font-medium">Warehouse stock</span><span className="text-muted-foreground block text-[11px]">Ship from owned inventory.</span></span>
                        </label>
                        <label className="flex cursor-pointer items-start gap-2.5 rounded-lg border px-3 py-2">
                          <RadioGroupItem value="order" className="mt-0.5" />
                          <span><span className="block text-xs font-medium">Made to order</span><span className="text-muted-foreground block text-[11px]">Production begins after checkout.</span></span>
                        </label>
                      </RadioGroup>
                    </FieldRow>
                  </div>
                </>
              ) : null}

              {step === 2 ? (
                <>
                  <h3 className="text-sm font-semibold">Product Images</h3>
                  <p className="text-xs font-medium">Gallery</p>
                  <p className="text-muted-foreground text-[11px]">Upload the hero image, alternate angles, and detail shots.</p>
                  <div className="mt-3 flex items-center gap-4 rounded-lg border border-dashed p-4">
                    <span className="bg-muted flex size-10 items-center justify-center rounded-md"><ImageIcon className="size-4" /></span>
                    <div className="flex-1">
                      <p className="text-xs font-medium">Drop product images</p>
                      <p className="text-muted-foreground text-[11px]">Drag product photos here or browse from your device.</p>
                      <p className="text-muted-foreground text-[11px]">JPG, PNG, or WebP up to 5MB each.</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1.5"><UploadIcon />Select images</Button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs font-medium">Gallery (3/10) <span className="text-muted-foreground font-normal">1.37MB</span></p>
                    <Button variant="outline" size="sm">Clear all</Button>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-3">
                    {IMAGES.map((src, index) => (
                      <div key={src} className="group relative aspect-square overflow-hidden rounded-lg border">
                        <img src={src} alt={`Product shot ${index + 1}`} className="h-full w-full object-cover" />
                        {index === 0 ? <Badge variant="success-light" size="sm" className="absolute top-1.5 left-1.5">Primary</Badge> : null}
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <h3 className="text-sm font-semibold">Image Mapping</h3>
                  <div className="mt-3 space-y-3">
                    <FieldRow label="Primary image" hint>
                      <div className="flex items-center gap-2.5 rounded-lg border p-2">
                        <img src={IMAGES[0]} alt="" className="size-9 rounded-md object-cover" />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-xs font-medium">aster-knit-runner-hero.jpg</span>
                          <span className="text-muted-foreground block text-[11px]">From uploaded product media</span>
                        </span>
                        <Button variant="ghost" size="icon-sm" aria-label="Edit image mapping"><PencilIcon /></Button>
                      </div>
                    </FieldRow>
                    <FieldRow label="Variant image rule" hint>
                      <Select defaultValue="first"><SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="first">Match images by first option</SelectItem><SelectItem value="manual">Map manually</SelectItem></SelectContent></Select>
                    </FieldRow>
                  </div>
                </>
              ) : null}

              {step === 3 ? (
                <>
                  <h3 className="text-sm font-semibold">Variant Foundation</h3>
                  <div className="mt-4 space-y-3">
                    <FieldRow label="Variant policy" hint>
                      <Select defaultValue="all"><SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">Require all options</SelectItem><SelectItem value="any">Allow partial options</SelectItem></SelectContent></Select>
                    </FieldRow>
                    <FieldRow label="SKU prefix" hint><Input defaultValue="AKR-2026" className="h-8" /></FieldRow>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">Option Builder</h3>
                    <Button variant="outline" size="sm" className="gap-1.5"><PlusIcon />Add Option</Button>
                  </div>

                  <div className="mt-3 space-y-3">
                    {OPTION_GROUPS.map((group) => (
                      <Collapsible key={group.name} defaultOpen={group.open}>
                        <div className="overflow-hidden rounded-lg border">
                          <div className="flex items-center gap-2 px-3 py-2">
                            <span className="text-xs font-medium">{group.name}</span>
                            <Badge variant="secondary" size="sm">{group.count}</Badge>
                            <div className="ml-auto flex items-center gap-0.5">
                              <Button variant="ghost" size="icon-xs" aria-label={`Edit ${group.name}`}><PencilIcon /></Button>
                              <Button variant="ghost" size="icon-xs" aria-label={`Delete ${group.name}`}><Trash2Icon /></Button>
                              <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="icon-xs" aria-label={`Toggle ${group.name}`}><ChevronDownIcon /></Button>
                              </CollapsibleTrigger>
                            </div>
                          </div>
                          <CollapsibleContent>
                            {group.rows.length ? (
                              <div className="bg-muted/20 border-t p-3">
                                <div className="text-muted-foreground grid grid-cols-[24px_1fr_1fr_1fr_28px] gap-2 px-1 pb-1.5 text-[11px]">
                                  <span>Swatch</span><span>Label</span><span>Handle</span><span>Note</span><span />
                                </div>
                                <div className="space-y-1.5">
                                  {group.rows.map(([label, handle, note], rowIndex) => (
                                    <div key={label} className="grid grid-cols-[24px_1fr_1fr_1fr_28px] items-center gap-2">
                                      <span className="size-4 rounded border" style={{ backgroundColor: group.swatches?.[rowIndex] }} />
                                      <Input defaultValue={label} className="h-7" />
                                      <Input defaultValue={handle} className="h-7" />
                                      <Input defaultValue={note} className="h-7" />
                                      <Button variant="ghost" size="icon-xs" aria-label="Delete value"><Trash2Icon /></Button>
                                    </div>
                                  ))}
                                </div>
                                <div className="mt-2 flex justify-end"><Button variant="outline" size="sm" className="gap-1.5"><PlusIcon />Add Value</Button></div>
                              </div>
                            ) : null}
                          </CollapsibleContent>
                        </div>
                      </Collapsible>
                    ))}
                  </div>
                </>
              ) : null}

              {step === 4 ? (
                <>
                  <h3 className="text-sm font-semibold">Base Pricing</h3>
                  <div className="mt-4 space-y-3">
                    <FieldRow label="Price" hint><Input defaultValue="128" className="h-8" /></FieldRow>
                    <FieldRow label="Compare at" hint><Input defaultValue="148" className="h-8" /></FieldRow>
                    <FieldRow label="Cost" hint><Input defaultValue="54" className="h-8" /></FieldRow>
                    <FieldRow label="Currency" hint>
                      <Select defaultValue="usd"><SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="usd">USD</SelectItem><SelectItem value="eur">EUR</SelectItem></SelectContent></Select>
                    </FieldRow>
                  </div>

                  <Separator className="my-4" />

                  <h3 className="text-sm font-semibold">Rules</h3>
                  <div className="mt-4 space-y-3">
                    <FieldRow label="Tax category" hint>
                      <Select defaultValue="footwear"><SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="footwear">Footwear</SelectItem><SelectItem value="apparel">Apparel</SelectItem></SelectContent></Select>
                    </FieldRow>
                    <FieldRow label="Shipping profile" hint>
                      <Select defaultValue="standard"><SelectTrigger size="sm" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="standard">Standard footwear</SelectItem><SelectItem value="oversize">Oversize</SelectItem></SelectContent></Select>
                    </FieldRow>
                    <FieldRow label="Track inventory" hint><Switch defaultChecked aria-label="Track inventory" /></FieldRow>
                    <FieldRow label="Continue selling" hint><Switch aria-label="Continue selling" /></FieldRow>
                    <FieldRow label="Publish online" hint><Switch defaultChecked aria-label="Publish online" /></FieldRow>
                  </div>
                </>
              ) : null}

              {step === 5 ? (
                <>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">Variant Matrix</h3>
                    <Button variant="outline" size="sm" className="gap-1.5"><PlusIcon />Add Variant</Button>
                  </div>
                  <div className="mt-3 overflow-x-auto rounded-lg border">
                    <table className="w-full min-w-[720px] text-xs">
                      <thead className="bg-muted/50 text-muted-foreground">
                        <tr>
                          <th className="w-14 px-2 py-2 text-left font-medium">Image</th>
                          <th className="px-2 py-2 text-left font-medium">Color</th>
                          <th className="px-2 py-2 text-left font-medium">Size</th>
                          <th className="px-2 py-2 text-left font-medium">Width</th>
                          <th className="px-2 py-2 text-left font-medium">SKU</th>
                          <th className="px-2 py-2 text-left font-medium">Barcode</th>
                          <th className="px-2 py-2 text-right font-medium">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {VARIANTS.map((variant) => (
                          <tr key={variant.sku} className="border-t">
                            <td className="px-2 py-1.5"><img src={variant.image} alt="" className="size-7 rounded object-cover" /></td>
                            <td className="px-2 py-1.5"><span className="flex h-7 items-center rounded-md border px-2">{variant.color}<ChevronDownIcon className="text-muted-foreground ml-auto size-3" /></span></td>
                            <td className="px-2 py-1.5"><span className="flex h-7 items-center rounded-md border px-2">{variant.size}<ChevronDownIcon className="text-muted-foreground ml-auto size-3" /></span></td>
                            <td className="px-2 py-1.5"><span className="flex h-7 items-center rounded-md border px-2">{variant.width}<ChevronDownIcon className="text-muted-foreground ml-auto size-3" /></span></td>
                            <td className="px-2 py-1.5"><span className="flex h-7 items-center rounded-md border px-2 font-mono text-[11px]">{variant.sku}</span></td>
                            <td className="text-muted-foreground px-2 py-1.5 font-mono text-[11px]">{variant.barcode}</td>
                            <td className="px-2 py-1.5 text-right font-medium">$128</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3 className="mt-5 text-sm font-semibold">Catalog Packet</h3>
                  <div className="mt-2 overflow-hidden rounded-lg border">
                    {[["Product", "Aster Knit Runner"], ["Media", "3 images"], ["Options", "3 groups, 9 values"], ["Variants", "4 mapped rows"], ["Pricing", "4 mappings"]].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between border-b px-3 py-2.5 text-xs last:border-b-0">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WizardProductSetupWizardBlock
