import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Leaf, Salad, Snowflake } from "lucide-react"

export default function ProductsPage() {
  const categories = [
    {
      title: "Fresh",
      description: "Premium quality fresh vegetables,fruits including carrots, onions, garlic, and seasonal produce",
      icon: <Leaf className="h-8 w-8" />,
      image: "/grapes-carton.png",
      href: "/products/fresh",
      products: ["Mangoes", "Onions", "Garlic", "Pomegranates", "Mangoes", "Citrus Fruits"],
    },
    {
      title: "Pickle",
      description: "A Timeless Tradition, Reimagined for Modern Palates.",
      icon: <Salad className="h-8 w-8" />,
      image: "/mixed-pickle.png",
      href: "/products/pickle",
      products: ["Pickled Onion", "Pickled Cucumber", "Pickled Olives", "Pickled Mixed Vegetables"],
    },
    {
      title: "Frozen Products",
      description: "Flash-frozen vegetables and fruits maintaining peak freshness and nutritional value",
      icon: <Snowflake className="h-8 w-8" />,
      image: "/WhatsApp Image 2025-10-03 at 16.22.12_63b9c210.jpg",
      href: "/products/frozen",
      products: ["Frozen Mixed Vegetables", "Mango", "Peas", "Strawberries", "Cauliflower", "Broccoli"],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Our Products
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Premium Egyptian Produce</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our comprehensive range of fresh vegetables, fresh fruits, premium pickle, and frozen products. Each category
            represents the finest quality Egyptian agriculture has to offer.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <div className="text-primary-foreground">{category.icon}</div>
                </div>
                <div>
                  <CardTitle className="text-xl text-card-foreground mb-2">{category.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{category.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {category.products.map((product, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {product}
                    </Badge>
                  ))}
                </div>
                <Button
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <Link href={category.href}>
                    Explore {category.title} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-muted rounded-2xl p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-balance">Need Custom Product Requirements?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We can source and supply specific varieties, quantities, and packaging requirements to meet your exact
              business needs.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">
                Get Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
