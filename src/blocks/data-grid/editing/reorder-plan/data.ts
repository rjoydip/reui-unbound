export type ReorderStatus = "Covered" | "Hold" | "Ordered"

export interface ReorderLine {
  id: string
  sku: string
  item: string
  buyer: string
  warehouse: string
  status: ReorderStatus
  onHand: number
  orderValue: number
}

export const REORDER_LINES: ReorderLine[] = [
  { id: "rl-1", sku: "LUB-CL-AE", item: "Chain lube aerosol, 11 oz", buyer: "Leo Grant", warehouse: "Columbus", status: "Covered", onHand: 52, orderValue: 0 },
  { id: "rl-2", sku: "ELC-FCC-10", item: "Fuse class CC, 10 A", buyer: "Nora Vale", warehouse: "Joliet", status: "Covered", onHand: 156, orderValue: 0 },
  { id: "rl-3", sku: "CHN-SP40-18", item: "Sprocket 40B, 18 teeth", buyer: "Mira Stone", warehouse: "Columbus", status: "Covered", onHand: 53, orderValue: 0 },
  { id: "rl-4", sku: "FST-HB-M8X40-ZN", item: "Hex bolt M8 × 40, zinc plated", buyer: "Leo Grant", warehouse: "Columbus", status: "Covered", onHand: 2469, orderValue: 0 },
  { id: "rl-5", sku: "FST-SC-M6X20", item: "Socket cap screw M6 × 20, b...", buyer: "Leo Grant", warehouse: "Dallas", status: "Covered", onHand: 2559, orderValue: 0 },
  { id: "rl-6", sku: "BRG-6206-2RS", item: "Ball bearing 6206, sealed", buyer: "Mira Stone", warehouse: "Joliet", status: "Covered", onHand: 84, orderValue: 0 },
  { id: "rl-7", sku: "BRG-6206-2RS", item: "Ball bearing 6206, sealed", buyer: "Mira Stone", warehouse: "Dallas", status: "Covered", onHand: 120, orderValue: 0 },
  { id: "rl-8", sku: "BLT-TB8M-800", item: "Timing belt 8M-800, 20 mm", buyer: "Mira Stone", warehouse: "Joliet", status: "Hold", onHand: 95, orderValue: 0 },
  { id: "rl-9", sku: "ELC-MCB3P-32", item: "Miniature breaker 3P, 32 A", buyer: "Nora Vale", warehouse: "Savannah", status: "Covered", onHand: 57, orderValue: 0 },
  { id: "rl-10", sku: "FLT-AP-2020-M13", item: "Panel air filter 20×20 in, MER...", buyer: "Sana Qureshi", warehouse: "Reno", status: "Covered", onHand: 76, orderValue: 0 },
  { id: "rl-11", sku: "LUB-HG46-5G", item: "Hydraulic oil ISO 46, 5 gal pail", buyer: "Sana Qureshi", warehouse: "Reno", status: "Ordered", onHand: 22, orderValue: 757.68 },
]

export const REORDER_STATUSES: ReorderStatus[] = ["Covered", "Hold", "Ordered"]

const BUYERS = ["Leo Grant", "Nora Vale", "Mira Stone", "Sana Qureshi"]
const WAREHOUSES = ["Columbus", "Joliet", "Dallas", "Savannah", "Reno"]
for (let index = 12; index <= 41; index += 1) {
  REORDER_LINES.push({
    id: `rl-${index}`,
    sku: `PRT-${1200 + index}`,
    item: `Replacement part ${index - 11}`,
    buyer: BUYERS[index % BUYERS.length]!,
    warehouse: WAREHOUSES[index % WAREHOUSES.length]!,
    status: index % 7 === 0 ? "Hold" : index % 5 === 0 ? "Ordered" : "Covered",
    onHand: 40 + ((index * 37) % 900),
    orderValue: index % 5 === 0 ? 120 + index * 13.5 : 0,
  })
}

