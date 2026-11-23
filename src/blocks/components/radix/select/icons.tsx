"use client"

import { type ReactElement } from "react"

import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IconPlaceholder } from "@/components/kit/icon-placeholder"

interface IconPlaceholderProps {
  lucide: string
  tabler: string
  hugeicons: string
  phosphor: string
  remixicon: string
  className?: string
}

interface Item {
  label: string
  value: string | null
  icon: ReactElement<IconPlaceholderProps>
}

const items: Item[] = [
  {
    label: "Select an option",
    value: null,
    icon: (
      <IconPlaceholder
        lucide="ScanIcon"
        tabler="IconLineScan"
        hugeicons="ScanIcon"
        phosphor="ScanIcon"
        remixicon="RiQrScan2Line"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    label: "Dashboard",
    value: "dashboard",
    icon: (
      <IconPlaceholder
        lucide="LayoutDashboardIcon"
        tabler="IconLayoutDashboard"
        hugeicons="DashboardSquare02Icon"
        phosphor="LayoutIcon"
        remixicon="RiDashboardLine"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    label: "Activity",
    value: "activity",
    icon: (
      <IconPlaceholder
        lucide="ActivityIcon"
        tabler="IconActivity"
        hugeicons="ActivityIcon"
        phosphor="ActivityIcon"
        remixicon="RiPulseLine"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    label: "Security",
    value: "security",
    icon: (
      <IconPlaceholder
        lucide="ShieldIcon"
        tabler="IconShield"
        hugeicons="Shield01Icon"
        phosphor="ShieldIcon"
        remixicon="RiShieldLine"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    label: "Settings",
    value: "settings",
    icon: (
      <IconPlaceholder
        lucide="SettingsIcon"
        tabler="IconSettings"
        hugeicons="SettingsIcon"
        phosphor="GearIcon"
        remixicon="RiSettings3Line"
        className="text-muted-foreground size-4"
      />
    ),
  },
]

export default function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={items[0].value ?? undefined}>
        <SelectTrigger className="w-[200px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.slice(1).filter((i) => i.value !== null).map((item) => (
              <SelectItem key={item.value} value={item.value!}>
                {item.icon}
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}