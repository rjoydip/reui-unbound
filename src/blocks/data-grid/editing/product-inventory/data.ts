export type ProductStatus = "Active" | "Draft" | "Archived"

export interface ProductRow {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stock: number
  status: ProductStatus
  visible: boolean
}

export const PRODUCTS: ProductRow[] = [
  { id: "p-1", name: "Everyday Cotton Tee", sku: "APP-1042", category: "Apparel", price: 28, stock: 320, status: "Active", visible: true },
  { id: "p-2", name: "Suede Chelsea Boot", sku: "FTW-3502", category: "Footwear", price: 189, stock: 14, status: "Draft", visible: false },
  { id: "p-3", name: "Aviator Sunglasses", sku: "ACC-5260", category: "Accessories", price: 120, stock: 64, status: "Active", visible: true },
  { id: "p-4", name: "Trail Runner GTX", sku: "FTW-3381", category: "Footwear", price: 145, stock: 7, status: "Active", visible: true },
  { id: "p-5", name: "Linen Camp Shirt", sku: "APP-2380", category: "Apparel", price: 64, stock: 0, status: "Archived", visible: false },
]

export const PRODUCT_STATUSES: ProductStatus[] = ["Active", "Draft", "Archived"]
