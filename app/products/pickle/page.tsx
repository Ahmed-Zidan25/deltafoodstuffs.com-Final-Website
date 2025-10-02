import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Truck, Calendar } from "lucide-react"

export default function PicklePage() {
  const Pickle = [
    {
      name: "Pickled Onion",
      description: "A Tangy Twist, Elevating Every Plate. Introduce a burst of sharp, zesty flavor with Delta Foodstuffs' premium pickled onions",
      image: "/pickled-onion.png",
      season: "Year-round",
      packaging: "1.2kg Jars",
      specifications: ["Whole peeled", "Total acidity 4.00% ± 0.25%", "Vinegar blend", "Shelf life: 24 months"],
    },
    {
      name: "Pickled Cucumber",
      description: "Classic Crunch, Unmistakable Freshness. Deliver the quintessential pickled flavor and satisfying crunch with Delta Foodstuffs' expertly crafted pickled cucumbers",
      image: "/pickled-cucumber.png",
      season: "Year-round",
      packaging: "1.2kg Jars",
      specifications: ["Size: 6-9 cm", "Whole gherkins", "0.35-0.55% acetic acid", "Vinegar blend", "Shelf life: 24 months"],
    },
    {
      name: "Pickled Olives",
      description: "Mediterranean Essence, Rich in Flavor. Bring the sun-drenched flavors of the Mediterranean to your offerings with Delta Foodstuffs' premium pickled olives",
      image: "/pickled-olive.png",
      season: "Year-round",
      packaging: "1.2kg Jars",
      specifications: ["Size: 80–100 per kg", "Brilliant color", "High antioxidants", "Shelf life: 24 months"],
    },
    {
      name: "Pickled Mixed Vegetables",
      description: "A Harmonious Blend of Tang and Crunch. Add a vibrant, flavorful dimension to your culinary creations with Delta Foodstuffs' exceptional pickled mixed vegetables",
      image: "/mixed-pickle.png",
      season: "Year-round",
      packaging: "1.2kg Jars",
      specifications: ["Medley of flavors and textures", "Tangy condiment", "carrots, onions, turnips, olives and other pickled veggies", "Shelf life: 24 months"],
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
            Premium Pickle
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Premium Egyptian Pickle</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Pickling is an art, a science, and a beloved culinary tradition that spans millennia and cultures. Far more than just a condiment, pickles represent a vibrant history of flavor preservation, delivering a sensory experience that tantalizes the palate and enhances every meal. At Delta Foodstuffs, we honor this rich legacy, bringing you a distinctive range of pickled products that are as vital to contemporary cuisine as they were to ancient civilizations.
          </p>
        </div>

        {/* Pickle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Pickle.map((fruit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={fruit.image || "/placeholder.svg"}
                  alt={fruit.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-card-foreground">{fruit.name}</CardTitle>
                <CardDescription className="leading-relaxed">{fruit.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{fruit.season}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{fruit.packaging}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Specifications:</h4>
                  <ul className="space-y-1">
                    {fruit.specifications.map((spec, idx) => (
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

        {/* Nutritional Benefits */}
        {/* <div className="bg-muted rounded-2xl p-8 mb-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Nutritional Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Choose Delta Foodstuffs' pickled selections to elevate your offerings. Provide your customers with an authentic taste experience that is both deeply rooted in history and perfectly attuned to the demands of modern gastronomy. With Delta Foodstuffs, you're not just serving a side dish; you're serving a story of flavor, health, and culinary heritage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">High</div>
                <div className="text-sm text-muted-foreground">Vitamin C Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Rich</div>
                <div className="text-sm text-muted-foreground">Antioxidants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Natural</div>
                <div className="text-sm text-muted-foreground">Sweetness</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Premium</div>
                <div className="text-sm text-muted-foreground">Fiber Content</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA */}
        <div className="text-center bg-primary rounded-2xl p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground text-balance">Import Premium Egyptian Pickle</h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Delta Foodstuffs Pickles: A Timeless Tradition, Reimagined for Modern Palates.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request Pickle Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
