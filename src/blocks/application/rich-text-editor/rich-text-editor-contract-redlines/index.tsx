import { useState } from "react"
import {
  AlignLeftIcon,
  BoldIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  MessageSquareIcon,
  Redo2Icon,
  UnderlineIcon,
  Undo2Icon,
  XIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

const DOC = `
<p>This Master Services Agreement (the “Agreement”) is made as of October 1, 2026 (the “Effective Date”) between Kestrel Works Inc., the provider of Loomwell (“Kestrel”), and Halden Freight LLC (“Customer”). It governs Customer’s use of the Services under every Order Form the parties sign.</p>
<h2>1. Definitions</h2>
<p>1.1 “Services” means the Loomwell shared inbox, its mobile apps and the APIs described in the Documentation, <del>including any beta or preview features</del>. Beta features are offered as is and are excluded from the service levels in Section 2.</p>
<p>1.2 “Customer Data” means all messages, attachments, contact records and other content that Customer or its Authorized Users submit to the Services. “Authorized Users” means Customer’s employees and contractors who hold a seat under an active Order Form.</p>
<h2>2. Services and Support</h2>
<p>2.1 Kestrel will make the Services available 99.9% of the time in each calendar month, <ins>excluding scheduled maintenance announced at least 48 hours in advance</ins>. If availability falls below that level, Customer may claim the service credits set out in the Support Policy.</p>
<p>2.2 Kestrel will respond to Priority 1 tickets within <del>one (1) business day</del> <ins>four (4) business hours</ins> and to all other tickets within two (2) business days. Support is provided in English by email and inside the product.</p>
<h2>3. Fees and Payment</h2>
<p>3.1 Customer will pay the Fees listed in each Order Form. Kestrel invoices annually in advance, and each invoice is due within <del>thirty (30)</del> <ins>forty-five (45)</ins> days of the invoice date.</p>
<p>3.2 Late amounts accrue interest at 1% per month or the highest rate the law allows, whichever is lower. Fees exclude taxes, which Customer pays except for taxes on Kestrel’s income.</p>
<h2>4. Term and Renewal</h2>
<p>4.1 This Agreement starts on the Effective Date and continues until every Order Form has expired or been terminated. Each Order Form has an initial Subscription Term of twelve (12) months.</p>
<p>4.2 <del>Each Subscription Term renews automatically for successive twelve (12) month periods unless either party gives notice of non-renewal at least sixty (60) days before it ends.</del> Kestrel will notify Customer of any price change at least ninety (90) days before a new Subscription Term begins.</p>
<h2>5. Data Protection</h2>
<p>5.1 Kestrel will process Customer Data only to provide the Services and as Customer instructs in writing, under the Data Processing Addendum attached as Exhibit B. Kestrel keeps Customer Data encrypted in transit and at rest.</p>
<p>5.2 Kestrel will notify Customer of any confirmed Security Incident affecting Customer Data within <del>seventy-two (72) hours</del> <ins>forty-eight (48) hours</ins> of confirming it, and will share the facts Customer needs to meet its own notice duties.</p>
<h2>6. Limitation of Liability</h2>
<p>6.1 Except for breaches of Section 5 and a party’s indemnity obligations, each party’s total liability under this Agreement is capped at the Fees paid or payable in the <del>twelve (12)</del> <ins>twenty-four (24)</ins> months before the event giving rise to the claim.</p>
<p>6.2 Neither party is liable for lost profits, lost revenue or indirect, special or consequential damages, even if it was told such damages were possible.</p>
<h2>7. Termination</h2>
<p>7.1 Either party may terminate this Agreement if the other materially breaches it and fails to cure the breach within thirty (30) days of written notice. <ins>Customer may also terminate for convenience on ninety (90) days’ written notice, with a pro rata refund of any prepaid Fees for the remaining Subscription Term.</ins></p>
<p>7.2 On termination, Kestrel will make Customer Data available for export for thirty (30) days and then delete it from production systems within a further sixty (60) days.</p>
<h2>8. General</h2>
<p>8.1 This Agreement is governed by the laws of the Province of Ontario and the federal laws of Canada that apply there. The courts of Toronto have exclusive jurisdiction over any dispute.</p>
<p>8.2 Neither party may assign this Agreement without the other’s written consent, except to a successor in a merger or a sale of substantially all of its assets.</p>
`

const SUGGESTIONS = [
  { id: 1, author: "Sofia Marques", time: "9:12 AM", action: "Deleted", before: "including any beta or preview features", after: "", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { id: 2, author: "Sofia Marques", time: "9:30 AM", action: "Added", before: "", after: "excluding scheduled maintenance announced at least 48…", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { id: 3, author: "Daniel Okafor", time: "Sep 25", action: "Replaced", before: "one (1) business day", after: "four (4) business hours", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { id: 4, author: "Priya Raman", time: "Sep 25", action: "Replaced", before: "thirty (30)", after: "forty-five (45)", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
  { id: 5, author: "Priya Raman", time: "Sep 25", action: "Deleted", before: "Each Subscription Term renews automatically for…", after: "", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
  { id: 6, author: "Daniel Okafor", time: "Sep 24", action: "Replaced", before: "seventy-two (72) hours", after: "forty-eight (48) hours", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
]

export function RichTextEditorContractRedlinesBlock() {
  const [view, setView] = useState("all")
  const [suggesting, setSuggesting] = useState(true)
  const [panelOpen, setPanelOpen] = useState(true)
  const [resolved, setResolved] = useState<number[]>([])

  const resolve = (id: number) => setResolved((current) => [...current, id])
  const resolveAll = () => setResolved(SUGGESTIONS.map((suggestion) => suggestion.id))

  return (
    <div className="bg-background text-foreground min-h-svh">
      <header className="bg-card sticky top-0 z-20 border-b">
        <div className="flex items-start gap-3 px-4 py-2">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-sm font-semibold">
              Master Services Agreement
              <Badge variant="secondary" size="sm">In Review</Badge>
            </p>
            <p className="text-muted-foreground text-xs">Halden Freight · Round 3 · Edited 9:30 AM</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              {[
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80",
              ].map((src) => (
                <Avatar key={src} size="sm" className="ring-2 ring-card">
                  <AvatarImage src={src} alt="" />
                  <AvatarFallback>RH</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Button
              variant={suggesting ? "secondary" : "outline"}
              size="sm"
              className="gap-2"
              onClick={() => setSuggesting((value) => !value)}
              aria-pressed={suggesting}
            >
              <MessageSquareIcon />
              {suggesting ? "Suggesting" : "Editing"}
              <ChevronDownIcon />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Document actions"><EllipsisIcon /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem>Export PDF</DropdownMenuItem>
                <DropdownMenuItem>Copy link</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5">
          <Button variant="ghost" size="icon-sm" aria-label="Undo"><Undo2Icon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Redo"><Redo2Icon /></Button>
          <Button variant="ghost" size="sm" className="gap-1.5">Text<ChevronDownIcon /></Button>
          {[BoldIcon, ItalicIcon, UnderlineIcon, LinkIcon, ListIcon, ListOrderedIcon].map((Icon, index) => (
            <Button key={index} variant="ghost" size="icon-sm" aria-label={`Format ${index + 1}`}><Icon /></Button>
          ))}
          <Button variant="ghost" size="icon-sm" aria-label="Align"><AlignLeftIcon /></Button>
          <div className="ml-auto flex items-center gap-2 text-xs">
            <button type="button" onClick={() => setPanelOpen((value) => !value)} className="text-muted-foreground flex items-center gap-1">
              <ChevronDownIcon className={cn("size-4 transition-transform", !panelOpen && "-rotate-90")} />
              {SUGGESTIONS.length - resolved.length} open
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1280px] gap-10 px-8 py-8 lg:grid-cols-[minmax(0,1fr)_324px]">
        <article
          className={cn(
            "text-[15px] leading-7",
            "[&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_p]:my-4",
            view === "final" && "[&_del]:hidden [&_ins]:no-underline",
            view === "original" && "[&_ins]:hidden [&_del]:no-underline",
            "[&_ins]:rounded-sm [&_ins]:bg-emerald-100 [&_ins]:text-emerald-800 [&_ins]:no-underline [&_del]:bg-rose-100 [&_del]:text-rose-700"
          )}
          dangerouslySetInnerHTML={{ __html: DOC }}
        />

        {panelOpen ? (
          <aside className="h-fit">
            <div className="bg-card overflow-hidden rounded-lg border">
              <div className="flex items-center gap-2 border-b px-4 py-2.5">
                <span className="text-sm font-medium">Suggestions</span>
                <Badge variant="secondary" size="sm">{SUGGESTIONS.length}</Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon-xs" className="ml-auto" aria-label="Suggestion actions"><EllipsisIcon /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuItem>All Suggestions</DropdownMenuItem>
                    <DropdownMenuItem onSelect={resolveAll}><CheckIcon />Accept All</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive" onSelect={resolveAll}><XIcon />Reject All</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="p-2">
                <Tabs value={view} onValueChange={setView}>
                  <TabsList className="w-full">
                    <TabsTrigger value="all" className="flex-1">All markup</TabsTrigger>
                    <TabsTrigger value="final" className="flex-1">Final</TabsTrigger>
                    <TabsTrigger value="original" className="flex-1">Original</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="max-h-[600px] overflow-y-auto px-3 pb-2">
                {SUGGESTIONS.map((suggestion) => {
                  const isResolved = resolved.includes(suggestion.id)
                  return (
                    <div key={suggestion.id} className={cn("border-b py-3 last:border-0", isResolved && "opacity-40")}>
                      <div className="flex items-center gap-2">
                        <Avatar size="sm">
                          <AvatarImage src={suggestion.avatar} alt="" />
                          <AvatarFallback>{suggestion.author.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{suggestion.author}</span>
                        <span className="text-muted-foreground text-xs">{suggestion.time}</span>
                        <div className="ml-auto flex items-center gap-0.5">
                          <Button variant="ghost" size="icon-xs" aria-label="Accept suggestion" onClick={() => resolve(suggestion.id)} disabled={isResolved}><CheckIcon /></Button>
                          <Button variant="ghost" size="icon-xs" aria-label="Reject suggestion" onClick={() => resolve(suggestion.id)} disabled={isResolved}><XIcon /></Button>
                        </div>
                      </div>
                      <p className="mt-1.5 text-xs">
                        {suggestion.action}{" "}
                        {suggestion.before ? <span className="rounded-sm bg-rose-100 text-rose-700 line-through">{suggestion.before}</span> : null}
                        {suggestion.before && suggestion.after ? " " : null}
                        {suggestion.after ? <span className="rounded-sm bg-emerald-100 text-emerald-800 underline decoration-emerald-500">{suggestion.after}</span> : null}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="bg-muted/30 flex items-center justify-between border-t px-3 py-2 text-xs">
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon-xs" aria-label="Previous suggestion"><ChevronLeftIcon /></Button>
                  <span className="text-muted-foreground">1 of {SUGGESTIONS.length}</span>
                  <Button variant="ghost" size="icon-xs" aria-label="Next suggestion"><ChevronRightIcon /></Button>
                </div>
                <Button variant="ghost" size="icon-xs" aria-label="Resolve all" onClick={resolveAll}><CheckIcon /></Button>
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  )
}

export default RichTextEditorContractRedlinesBlock
