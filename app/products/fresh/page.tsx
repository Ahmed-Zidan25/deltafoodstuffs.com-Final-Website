import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Truck, Calendar } from "lucide-react"
import SocialShare from "@/components/social-share"

export default function VegetablesPage() {
  const vegetables = [
    {
      name: "Premium Carrots",
      description: "Sweet, crunchy carrots perfect for fresh consumption and processing",
      image: "/premium-carrots-fresh-egyptian.jpg",
      season: "Year-round",
      packaging: "10kg, 20kg cartons",
      specifications: ["Grade A quality", "Size: 15-25cm", "Brix: 8-10%", "Shelf life: 3-4 weeks"],
    },
    {
      name: "Red Onions",
      description: "High-quality red onions with excellent storage life and flavor",
      image: "/red-onions-egyptian-export-quality.jpg",
      season: "March - July",
      packaging: "25kg mesh bags",
      specifications: ["Diameter: 5-8cm", "Dry matter: 12-15%", "Storage: 6-8 months", "Pungency: Medium"],
    },
    {
      name: "Fresh Garlic",
      description: "Aromatic white garlic with strong flavor and long shelf life",
      image: "/fresh-garlic-white-egyptian-export.jpg",
      season: "May - August",
      packaging: "10kg, 20kg cartons",
      specifications: ["Size: 4.5-6.5cm", "White skin", "Storage: 8-10 months", "Moisture: <65%"],
    },
    {
      name: "Cherry Tomatoes",
      description: "Sweet cherry tomatoes perfect for fresh market and gourmet applications",
      image: "/cherry-tomatoes-fresh-egyptian.jpg",
      season: "October - May",
      packaging: "5kg plastic crates",
      specifications: ["Size: 15-25mm", "Brix: 6-8%", "Firm texture", "Vine-ripened"],
    },
    {
      name: "Sweet Potatoes",
      description: "Orange-fleshed sweet potatoes with excellent nutritional value",
      image: "/sweet-potatoes-orange-egyptian.jpg",
      season: "September - February",
      packaging: "15kg cartons",
      specifications: ["Size: 200-400g", "Orange flesh", "High beta-carotene", "Storage: 4-6 months"],
    },
    {
      name: "Green Beans",
      description: "Tender green beans ideal for fresh consumption and processing",
      image: "/green-beans-fresh-egyptian-export.jpg",
      season: "November - April",
      packaging: "5kg cartons",
      specifications: ["Length: 12-15cm", "Tender pods", "Bright green color", "Snap quality"],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
          <SocialShare
            title="Premium Egyptian Vegetables - EgyptExport"
            description="Discover our finest selection of fresh vegetables from Egypt's fertile Nile Delta, perfect for international export."
          />
        </div>

        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Fresh Vegetables
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Premium Egyptian Vegetables</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From the fertile Nile Delta, we bring you the finest selection of fresh vegetables. Each variety is
            carefully cultivated and harvested at peak quality for international export.
          </p>
        </div>

        {/* Vegetables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {vegetables.map((vegetable, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={vegetable.image || "/placeholder.svg"}
                  alt={vegetable.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-card-foreground">{vegetable.name}</CardTitle>
                <CardDescription className="leading-relaxed">{vegetable.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{vegetable.season}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{vegetable.packaging}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Specifications:</h4>
                  <ul className="space-y-1">
                    {vegetable.specifications.map((spec, idx) => (
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

        {/* Quality Assurance */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Quality Assurance</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              All our vegetables undergo rigorous quality control processes, from field inspection to post-harvest
              handling, ensuring only the finest produce reaches international markets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Field Inspection</h3>
                <p className="text-sm text-muted-foreground">Regular monitoring during cultivation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Cold Chain</h3>
                <p className="text-sm text-muted-foreground">Temperature-controlled logistics</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Traceability</h3>
                <p className="text-sm text-muted-foreground">Complete supply chain tracking</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary rounded-2xl p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground text-balance">
              Ready to Import Our Premium Vegetables?
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Contact us for detailed specifications, pricing, and availability for your market requirements.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request Vegetable Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
