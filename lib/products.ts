// Product management utilities and types
export interface Product {
  id: string
  name: string
  description: string
  image: string
  season: string
  packaging: string
  specifications: string[]
  category: "vegetables" | "fruits" | "frozen"
  createdAt: string
  updatedAt: string
}

// Mock product data - in a real app, this would come from a database
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Carrots",
    description: "Sweet, crunchy carrots perfect for fresh consumption and processing",
    image: "/premium-carrots-fresh-egyptian.jpg",
    season: "Year-round",
    packaging: "10kg, 20kg cartons",
    specifications: ["Grade A quality", "Size: 15-25cm", "Brix: 8-10%", "Shelf life: 3-4 weeks"],
    category: "vegetables",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "2",
    name: "Red Onions",
    description: "High-quality red onions with excellent storage life and flavor",
    image: "/red-onions-egyptian-export-quality.jpg",
    season: "March - July",
    packaging: "25kg mesh bags",
    specifications: ["Diameter: 5-8cm", "Dry matter: 12-15%", "Storage: 6-8 months", "Pungency: Medium"],
    category: "vegetables",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "3",
    name: "Fresh Mango",
    description: "Sweet, juicy mangoes with excellent flavor and aroma",
    image: "/fresh-mango-egyptian-export.jpg",
    season: "June - September",
    packaging: "4kg cartons",
    specifications: ["Size: 300-500g", "Brix: 18-22%", "Variety: Kent, Keitt", "Shelf life: 2-3 weeks"],
    category: "fruits",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
]

export async function getAllProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.filter((product) => product.category === category)
}

export async function getProductById(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.find((product) => product.id === id) || null
}

export async function createProduct(productData: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const newProduct: Product = {
    ...productData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  mockProducts.push(newProduct)
  return newProduct
}

export async function updateProduct(id: string, productData: Partial<Product>): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const index = mockProducts.findIndex((product) => product.id === id)
  if (index === -1) return null

  mockProducts[index] = {
    ...mockProducts[index],
    ...productData,
    updatedAt: new Date().toISOString(),
  }
  return mockProducts[index]
}

export async function deleteProduct(id: string): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const index = mockProducts.findIndex((product) => product.id === id)
  if (index === -1) return false

  mockProducts.splice(index, 1)
  return true
}
