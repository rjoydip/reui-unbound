import {
  ArrowRightIcon,
  BanknoteIcon,
  BarChart3Icon,
  BitcoinIcon,
  Building2Icon,
  CoinsIcon,
  GlobeIcon,
  InfoIcon,
  LandmarkIcon,
  MailIcon,
  MegaphoneIcon,
  NewspaperIcon,
  StoreIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const NAVBAR_PRODUCTS = [
  { title: "Individuals", description: "Keep your finances organized.", icon: UserIcon },
  { title: "Freelancers", description: "For independent workers.", icon: CoinsIcon },
  { title: "Small businesses", description: "We take care of your taxes.", icon: StoreIcon },
  { title: "Enterprise", description: "Run your finances at scale.", icon: Building2Icon },
  { title: "LLCs", description: "Benefit from tax write-offs.", icon: LandmarkIcon },
  { title: "Investors", description: "Make and grow your money.", icon: BarChart3Icon },
  { title: "Crypto", description: "For tech enthusiasts.", icon: BitcoinIcon },
  { title: "Investments", description: "Launch your ideas worldwide.", icon: BanknoteIcon },
]

const NAVBAR_COMPANIES = [
  { title: "About", description: "Our mission and story.", icon: InfoIcon },
  { title: "Blog", description: "News and product updates.", icon: NewspaperIcon },
  { title: "Partners", description: "Programs and integrations.", icon: GlobeIcon },
  { title: "Careers", description: "Join the team.", icon: UsersIcon },
  { title: "Press", description: "Media kit and coverage.", icon: MegaphoneIcon },
  { title: "Contact", description: "We are here to help.", icon: MailIcon },
]

function MegaMenuList({ items }: { items: typeof NAVBAR_PRODUCTS }) {
  return (
    <ul className="grid w-[34rem] grid-cols-2 gap-x-6 gap-y-1 p-2">
      {items.map((item) => (
        <li key={item.title}>
          <NavigationMenuLink href="#" className="items-start gap-2.5 p-1.5">
            <item.icon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
            <span className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{item.title}</span>
              <span className="text-muted-foreground text-xs">{item.description}</span>
            </span>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  )
}

export function NavbarMarketingMegaMenuBlock() {
  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-2 border-b px-4">
      <div className="flex items-center gap-2">
        <span className="bg-foreground text-background flex size-8 items-center justify-center rounded-lg">
          <GlobeIcon className="size-4" />
        </span>
        <span className="text-sm font-semibold">ReUI</span>
      </div>

      <span className="bg-border mx-2 h-5 w-px" />

      <NavigationMenu viewport={false}>
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
            <NavigationMenuContent>
              <MegaMenuList items={NAVBAR_PRODUCTS} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
            <NavigationMenuContent>
              <MegaMenuList items={NAVBAR_COMPANIES} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="px-2.5 py-1.5 font-medium">
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="ml-auto">
        <Button className="group gap-1.5">
          Get Started
          <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </div>
    </header>
  )
}

export default NavbarMarketingMegaMenuBlock
