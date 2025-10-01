import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Snowflake, Thermometer } from "lucide-react"

export default function FrozenPage() {
  const frozenProducts = [
    {
      name: "IQF Vegetables Mix",
      description: "Individually Quick Frozen vegetable blend maintaining peak nutrition",
      image: "/iqf-vegetables-mix-frozen-egyptian.jpg",
      temperature: "-18°C",
      packaging: "10kg, 20kg bags",
      specifications: ["Mixed vegetables", "IQF technology", "No additives", "Shelf life: 24 months"],
    },
    {
      name: "Frozen Strawberries",
      description: "Flash-frozen strawberries preserving natural flavor and nutrients",
      image: "/frozen-strawberries-iqf-egyptian.jpg",
      temperature: "-18°C",
      packaging: "10kg cartons",
      specifications: ["Whole/sliced options", "Grade A quality", "No sugar added", "Bright red color"],
    },
    {
      name: "Frozen Green Beans",
      description: "Tender green beans frozen at peak freshness",
      image: "/frozen-green-beans-iqf-quality.jpg",
      temperature: "-18°C",
      packaging: "10kg, 20kg bags",
      specifications: ["Cut/whole options", "Blanched", "Bright green color", "Crisp texture"],
    },
    {
      name: "Frozen Mango Chunks",
      description: "Sweet mango pieces perfect for smoothies and desserts",
      image: "/frozen-mango-chunks-iqf-tropical.jpg",
      temperature: "-18°C",
      packaging: "10kg cartons",
      specifications: ["10x10mm chunks", "Natural sweetness", "No preservatives", "Golden color"],
    },
    {
      name: "Frozen Spinach",
      description: "Nutritious spinach leaves flash-frozen for maximum vitamin retention",
      image: "/frozen-spinach-leaves-iqf-nutritious.jpg",
      temperature: "-18°C",
      packaging: "10kg blocks",
      specifications: ["Chopped/whole leaf", "High iron content", "Blanched", "Deep green color"],
    },
    {
      name: "Mixed Berry Blend",
      description: "Premium berry mix including strawberries and other seasonal berries",
      image: "/mixed-berry-blend-frozen-premium.jpg",
      temperature: "-18°C",
      packaging: "5kg, 10kg bags",
      specifications: ["Berry variety mix", "Antioxidant rich", "No artificial colors", "Uniform sizing"],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Frozen Products
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Premium Frozen Produce</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Advanced freezing technology preserves the natural taste, texture, and nutritional value of our fresh
            produce, delivering convenience without compromising quality.
          </p>
        </div>

        {/* Frozen Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {frozenProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
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
                    <Thermometer className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{product.temperature}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Snowflake className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{product.packaging}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Specifications:</h4>
                  <ul className="space-y-1">
                    {product.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Freezing Technology */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Advanced Freezing Technology</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our state-of-the-art IQF (Individually Quick Frozen) technology ensures optimal preservation of taste,
              texture, and nutritional value while extending shelf life significantly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Snowflake className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">IQF Technology</h3>
                <p className="text-sm text-muted-foreground">Individual quick freezing prevents clumping</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Thermometer className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Temperature Control</h3>
                <p className="text-sm text-muted-foreground">Consistent -18°C throughout supply chain</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Retention</h3>
                <p className="text-sm text-muted-foreground">Preserves nutrients and natural flavors</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary rounded-2xl p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground text-balance">
              Reliable Frozen Supply Solutions
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Ensure consistent supply with our premium frozen products. Perfect for food service and retail
              applications.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request Frozen Products Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
