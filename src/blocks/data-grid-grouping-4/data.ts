export type SupplyState = "Stocked" | "Single source" | "Long lead" | "Shortage"

export interface BomRow {
  id: string
  parentId: string | null
  name: string
  number: string
  qty: number
  unitCost: number | null
  extendedCost: number
  share: number
  leadTime: number
  supply: SupplyState
  icon: string
}

export const BOM_ROWS: BomRow[] = [
  { id: "sys-100", parentId: null, name: "Drive System", number: "SYS-100", qty: 1, unitCost: null, extendedCost: 267.38, share: 23, leadTime: 62, supply: "Shortage", icon: "gear" },
  { id: "asm-110", parentId: "sys-100", name: "Mid-Drive Motor", number: "ASM-110", qty: 1, unitCost: null, extendedCost: 189.43, share: 16, leadTime: 62, supply: "Shortage", icon: "motor" },
  { id: "sub-111", parentId: "asm-110", name: "Stator Assembly", number: "SUB-111", qty: 1, unitCost: null, extendedCost: 68.38, share: 5.8, leadTime: 45, supply: "Single source", icon: "stator" },
  { id: "prt-1111", parentId: "sub-111", name: "Stator Lamination", number: "PRT-1111", qty: 52, unitCost: 0.74, extendedCost: 38.48, share: 3.2, leadTime: 45, supply: "Single source", icon: "layers" },
  { id: "prt-1112", parentId: "sub-111", name: "Copper Winding", number: "PRT-1112", qty: 3, unitCost: 7.4, extendedCost: 22.2, share: 1.9, leadTime: 28, supply: "Stocked", icon: "winding" },
  { id: "prt-1113", parentId: "sub-111", name: "Thermal Sensor", number: "PRT-1113", qty: 2, unitCost: 3.85, extendedCost: 7.7, share: 0.7, leadTime: 21, supply: "Stocked", icon: "sensor" },
  { id: "sub-112", parentId: "asm-110", name: "Rotor Assembly", number: "SUB-112", qty: 1, unitCost: null, extendedCost: 58.5, share: 5, leadTime: 62, supply: "Shortage", icon: "rotor" },
  { id: "prt-113", parentId: "asm-110", name: "Motor Housing", number: "PRT-113", qty: 2, unitCost: 13.9, extendedCost: 27.8, share: 2.4, leadTime: 30, supply: "Stocked", icon: "housing" },
  { id: "prt-114", parentId: "asm-110", name: "Torque Sensor Ring", number: "PRT-114", qty: 1, unitCost: 34.75, extendedCost: 34.75, share: 3, leadTime: 40, supply: "Single source", icon: "sensor" },
  { id: "asm-120", parentId: "sys-100", name: "Drivetrain", number: "ASM-120", qty: 1, unitCost: null, extendedCost: 77.95, share: 6.6, leadTime: 54, supply: "Long lead", icon: "drivetrain" },
  { id: "sys-200", parentId: null, name: "Energy Pack", number: "SYS-200", qty: 1, unitCost: null, extendedCost: 325.97, share: 28, leadTime: 56, supply: "Long lead", icon: "battery" },
  { id: "sys-300", parentId: null, name: "Frame Set", number: "SYS-300", qty: 1, unitCost: null, extendedCost: 233.8, share: 20, leadTime: 42, supply: "Shortage", icon: "frame" },
  { id: "sys-400", parentId: null, name: "Cockpit", number: "SYS-400", qty: 1, unitCost: null, extendedCost: 105, share: 8.9, leadTime: 38, supply: "Single source", icon: "cockpit" },
  { id: "sys-500", parentId: null, name: "Rolling Gear", number: "SYS-500", qty: 1, unitCost: null, extendedCost: 247.16, share: 21, leadTime: 51, supply: "Long lead", icon: "wheel" },
]

export const SUPPLY_OPTIONS: SupplyState[] = [
  "Stocked",
  "Single source",
  "Long lead",
  "Shortage",
]

export const SUPPLY_VARIANT: Record<SupplyState, "secondary" | "primary-light" | "warning-light" | "destructive-light"> = {
  Stocked: "secondary",
  "Single source": "primary-light",
  "Long lead": "warning-light",
  Shortage: "destructive-light",
}

export const BOM_TREE: Record<string, string> = {
  "sys-100": "asm-110,asm-120",
}
