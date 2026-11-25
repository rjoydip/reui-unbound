import { useState } from "react"
import {
  CheckIcon,
  CodeXmlIcon,
  GitBranchIcon,
  PlayIcon,
  Share2Icon,
  TriangleIcon,
  ZapIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const BRANCHES = [
  { name: "main", isDefault: true },
  { name: "feat/stripe-v2" },
  { name: "fix/webhook-sig" },
  { name: "chore/deps" },
]

export function NavbarRepoBranchPickerBlock() {
  const [branch, setBranch] = useState("main")

  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-2 border-b px-3">
      <div className="flex items-center gap-2">
        <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg">
          <CodeXmlIcon className="size-4" />
        </span>
        <span className="text-sm font-semibold">CodeLive</span>
      </div>

      <span className="bg-border mx-1 h-5 w-px" />

      <nav aria-label="Repository path" className="flex items-center gap-2 text-sm">
        <span className="bg-violet-500 size-2.5 shrink-0 rounded-sm" />
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">acme-org</a>
        <span className="text-muted-foreground/60">/</span>
        <span className="font-medium">payments-api</span>
      </nav>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="sm"><Share2Icon />Share</Button>
        <Button size="sm"><PlayIcon className="fill-current" />Run</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm"><GitBranchIcon />{branch}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {BRANCHES.map((item) => (
              <DropdownMenuItem key={item.name} onSelect={() => setBranch(item.name)}>
                <GitBranchIcon />
                {item.name}
                {item.isDefault ? <span className="text-muted-foreground ml-auto text-xs">default</span> : null}
                {branch === item.name && !item.isDefault ? <CheckIcon className="ml-auto" /> : null}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem><TriangleIcon />Deploy with Remix</DropdownMenuItem>
            <DropdownMenuItem>
              <ZapIcon className="fill-violet-500 text-violet-500" />
              Vite project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default NavbarRepoBranchPickerBlock
