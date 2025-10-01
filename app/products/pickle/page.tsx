import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Truck, Calendar } from "lucide-react"

export default function PicklePage() {
  const Pickle = [
    {
      name: "Pickled Onion",
      description: "A Tangy Twist, Elevating Every Plate. Introduce a burst of sharp, zesty flavor with Delta Foodstuffs' premium pickled onions. Sourced from the finest Egyptian harvests, our onions are expertly prepared and pickled to achieve a crisp texture and a delightful balance of tanginess and subtle sweetness. Perfect for garnishing, enhancing salads, sandwiches, or as a vibrant accompaniment to main courses, our pickled onions offer a distinctive taste profile and consistent quality that will set your dishes apart. Experience the difference of artisanal pickling, perfected.",
      image: "/pickled-onion.png",
      season: "Year-round",
      packaging: "4kg, 6kg cartons",
      specifications: ["Varieties: Keitt, Kent, Tommy", "Brix: 14-18%", "Size: 300-600g", "Shelf life: 2-3 weeks"],
    },
    {
      name: "Fresh Guavas",
      description: "Aromatic guavas with high vitamin C content and tropical flavor",
      image: "/fresh-guavas-egyptian-tropical-fruit.jpg",
      season: "Year-round",
      packaging: "3kg, 5kg cartons",
      specifications: ["Size: 80-150g", "Brix: 10-12%", "Pink/white flesh", "Rich in vitamin C"],
    },
    {
      name: "Pomegranates",
      description: "Ruby-red pomegranates packed with antioxidants and flavor",
      image: "/pomegranates-red-egyptian-export.jpg",
      season: "Year-round",
      packaging: "4kg, 5kg cartons",
      specifications: ["Size: 250-450g", "Deep red color", "High antioxidants", "Storage: 2-3 months"],
    },
    {
      name: "Medjool Dates",
      description: "Premium soft dates known as the 'King of Dates'",
      image: "/medjool-dates-premium-egyptian.jpg",
      season: "Year-round",
      packaging: "1kg, 5kg boxes",
      specifications: ["Size: Large (20-25g)", "Soft texture", "Natural sweetness", "Storage: 12 months"],
    },
    {
      name: "Red Grapes",
      description: "Sweet, seedless red grapes perfect for fresh consumption",
      image: "/red-grapes-seedless-egyptian.jpg",
      season: "Year-round",
      packaging: "4.5kg cartons",
      specifications: ["Seedless variety", "Brix: 16-18%", "Firm texture", "Uniform clusters"],
    },
    {
      name: "Fresh Figs",
      description: "Delicate fresh figs with honey-like sweetness",
      image: "/fresh-figs-egyptian-export-quality.jpg",
      season: "Year-round",
      packaging: "1kg, 2kg trays",
      specifications: ["Purple/green varieties", "Size: 40-60g", "Soft texture", "High fiber content"],
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
