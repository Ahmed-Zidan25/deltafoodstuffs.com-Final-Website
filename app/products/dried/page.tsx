import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Package, Snowflake } from "lucide-react"

const driedProducts = [
  {
    name: "Dried Figs",
    process: "Dried",
    description: "Naturally sweet dried figs with a rich flavor, suitable for snacking and food applications.",
    image: "/dried-figs.jpeg",
    specifications: ["Whole dried figs", "Naturally sweet flavor", "Packaging options available on request"],
  },
  {
    name: "Dried Carrots",
    process: "Dried",
    description: "Convenient dried carrot slices for soups, meal mixes, and other food applications.",
    image: "/dried-carrots.jpeg",
    specifications: ["Sliced dried carrots", "Convenient ingredient format", "Packaging options available on request"],
  },
  {
    name: "Freeze-Dried Strawberries",
    process: "Freeze-dried",
    description: "Bright, fruit-forward strawberries in a light freeze-dried format for snacks and recipes.",
    image: "/freeze-dried-strawberries.jpeg",
    specifications: ["Freeze-dried strawberries", "Light, crisp texture", "Packaging options available on request"],
  },
  {
    name: "Freeze-Dried Bananas",
    process: "Freeze-dried",
    description: "Sweet banana slices in a crisp freeze-dried format, ideal for snacks and food applications.",
    image: "/freeze-dried-bananas.jpeg",
    specifications: ["Freeze-dried banana slices", "Naturally sweet flavor", "Packaging options available on request"],
  },
  {
    name: "Freeze-Dried Mango",
    process: "Freeze-dried",
    description: "Tropical mango pieces with concentrated fruit flavor in a convenient freeze-dried format.",
    image: "/freeze-dried-mango.jpeg",
    specifications: ["Freeze-dried mango", "Tropical fruit flavor", "Packaging options available on request"],
  },
  {
    name: "Freeze-Dried Oranges",
    process: "Freeze-dried",
    description: "Citrus slices with a refreshing orange flavor, prepared in a crisp freeze-dried format.",
    image: "/freeze-dried-oranges.jpeg",
    specifications: ["Freeze-dried orange slices", "Bright citrus flavor", "Packaging options available on request"],
  },
  {
    name: "Freeze-Dried Apples",
    process: "Freeze-dried",
    description: "Crisp apple slices with a naturally sweet taste for snacking and ingredient use.",
    image: "/freeze-dried-apples.jpeg",
    specifications: ["Freeze-dried apple slices", "Naturally sweet flavor", "Packaging options available on request"],
  },
]

export default function DriedProductsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Dried &amp; Freeze-Dried Fruits
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Dried &amp; Freeze-Dried Produce
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our selection of dried and freeze-dried fruits and vegetables, including figs, carrots, strawberries,
            bananas, mango, oranges, and apples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {driedProducts.map((product) => (
            <Card key={product.name} className="group hover:shadow-lg transition-all duration-300 border-border">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-card-foreground">{product.name}</CardTitle>
                <CardDescription className="leading-relaxed">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Snowflake className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{product.process}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Packaging on request</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Specifications:</h4>
                  <ul className="space-y-1">
                    {product.specifications.map((specification) => (
                      <li key={specification} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{specification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-primary rounded-2xl p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground text-balance">
              Interested in Our Dried Products?
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Contact our team to discuss product availability and packaging for your requirements.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
