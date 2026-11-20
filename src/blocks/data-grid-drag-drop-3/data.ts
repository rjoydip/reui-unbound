export type WaveStatus = "At Risk" | "Ready" | "Locked" | "Hold"
export type WaveCarrier = "Ryder" | "Shippo" | "Fleet 12" | "Quickline" | "ArcBest" | "DHL" | "Fleet 18" | "UPS"

export interface DispatchWave {
  id: string
  code: string
  subtitle: string
  status: WaveStatus
  dock: string
  dockNote: string
  carrier: WaveCarrier
  route: string
  orders: number
  units: number
  capacity: number
  exceptions: string
  exceptionsTone: "warning" | "success" | "destructive"
}

export const DISPATCH_WAVES: DispatchWave[] = [
  { id: "w-1", code: "WAV-4821", subtitle: "Priority retail replenishment", status: "At Risk", dock: "Dock 4", dockNote: "Carrier check-in pending", carrier: "Ryder", route: "Same day · LTL", orders: 128, units: 940, capacity: 91, exceptions: "5 open", exceptionsTone: "warning" },
  { id: "w-2", code: "WAV-4822", subtitle: "Marketplace express", status: "Ready", dock: "Dock 2", dockNote: "Ready to release", carrier: "Shippo", route: "2 day · Parcel", orders: 214, units: 512, capacity: 76, exceptions: "Clear", exceptionsTone: "success" },
  { id: "w-3", code: "WAV-4823", subtitle: "Store transfer north", status: "Locked", dock: "Dock 7", dockNote: "Inventory locked", carrier: "Fleet 12", route: "Milk run · Store T…", orders: 56, units: 1_240, capacity: 84, exceptions: "1 open", exceptionsTone: "warning" },
  { id: "w-4", code: "WAV-4824", subtitle: "Regional courier pickup", status: "Ready", dock: "Dock 1", dockNote: "Courier staged", carrier: "Quickline", route: "Courier · Courier", orders: 88, units: 176, capacity: 63, exceptions: "Clear", exceptionsTone: "success" },
  { id: "w-5", code: "WAV-4825", subtitle: "Wholesale pallets", status: "Hold", dock: "Dock 5", dockNote: "Pallet audit open", carrier: "ArcBest", route: "Freight · LTL", orders: 34, units: 2_180, capacity: 98, exceptions: "8 open", exceptionsTone: "destructive" },
  { id: "w-6", code: "WAV-4826", subtitle: "Subscription cartons", status: "Ready", dock: "Dock 3", dockNote: "Labels printed", carrier: "DHL", route: "Ground · Parcel", orders: 302, units: 604, capacity: 70, exceptions: "Clear", exceptionsTone: "success" },
  { id: "w-7", code: "WAV-4827", subtitle: "Store transfer south", status: "At Risk", dock: "Dock 6", dockNote: "Short pick review", carrier: "Fleet 18", route: "Milk run · Store T…", orders: 62, units: 1_348, capacity: 89, exceptions: "3 open", exceptionsTone: "warning" },
  { id: "w-8", code: "WAV-4828", subtitle: "Late parcel recovery", status: "Ready", dock: "Dock 2", dockNote: "Recovery lane clear", carrier: "UPS", route: "Air saver · Parcel", orders: 119, units: 238, capacity: 58, exceptions: "Clear", exceptionsTone: "success" },
]

export const WAVE_STATUS_VARIANT: Record<WaveStatus, "warning-light" | "success-light" | "primary-light" | "destructive-light"> = {
  "At Risk": "warning-light",
  Ready: "success-light",
  Locked: "primary-light",
  Hold: "destructive-light",
}

export const DISPATCH_COLUMNS = [
  { id: "wave", label: "Wave" },
  { id: "status", label: "Status" },
  { id: "dock", label: "Dock" },
  { id: "carrier", label: "Carrier" },
  { id: "orders", label: "Orders" },
  { id: "capacity", label: "Capacity" },
  { id: "exceptions", label: "Exceptions" },
]
