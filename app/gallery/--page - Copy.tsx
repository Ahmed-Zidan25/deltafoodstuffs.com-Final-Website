"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ZoomIn, Download, Share2 } from "lucide-react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryImages = [
    {
      id: 1,
      src: "/gallery-fresh-carrots-harvest-field.jpg",
      alt: "Fresh carrots being harvested in Egyptian fields",
      category: "fresh",
      title: "Premium Carrot Harvest",
      description: "Fresh carrots harvested from our partner farms in the Nile Delta region.",
    },
    {
      id: 2,
      src: "/IMG-20250914-WA0034.jpg",
      alt: "High-quality carrots",
      category: "fresh",
      title: "Egyptian Premium Carrots",
      description: "Premium Egyptian carrots known for their exceptional texture and quality.",
    },
    {
      id: 3,
      src: "/gallery-fresh-garlic-bulbs-quality.jpg",
      alt: "High-quality fresh garlic bulbs",
      category: "fresh",
      title: "Egyptian White Garlic",
      description: "Premium white garlic bulbs known for their exceptional flavor and quality.",
    },
    {
      id: 4,
      src: "/IMG-20250904-WA0041.jpg",
      alt: "Red Apple being sorted in modern facility",
      category: "fruits",
      title: "Apple Packaging Facility",
      description: "Sorting and packing facility for premium red Apples.",
    },
    {
      id: 5,
      src: "/gallery-red-onions-sorting-facility.jpg",
      alt: "Red onions being sorted in modern facility",
      category: "facilities",
      title: "Onion Processing Facility",
      description: "State-of-the-art sorting and packing facility for premium red onions.",
    },
    {
      id: 6,
      src: "/gallery-mango-trees-orchard-egypt.jpg",
      alt: "Mango trees in Egyptian orchard",
      category: "fruits",
      title: "Mango Orchards",
      description: "Lush mango orchards producing the finest tropical mangoes in Egypt.",
    },
    {
      id: 7,
      src: "/gallery-pomegranate-harvest-workers.jpg",
      alt: "Workers harvesting pomegranates",
      category: "fresh",
      title: "Pomegranate Harvest",
      description: "Careful hand-picking of premium pomegranates at peak ripeness.",
    },
    {
      id: 8,
      src: "/gallery-guava-fruit-tree-fresh.jpg",
      alt: "Fresh guava fruits on tree",
      category: "fresh",
      title: "Fresh Guava Production",
      description: "Sweet and aromatic guava fruits grown in optimal Egyptian climate.",
    },
    {
      id: 9,
      src: "/gallery-orange-groves-citrus-farm.jpg",
      alt: "Orange groves in Egyptian citrus farm",
      category: "citrus",
      title: "Orange Groves",
      description: "Extensive orange groves producing juicy, sweet oranges year-round.",
    },
    {
      id: 10,
      src: "/gallery-lemon-harvest-fresh-citrus.jpg",
      alt: "Fresh lemon harvest",
      category: "citrus",
      title: "Lemon Harvest",
      description: "Fresh lemons harvested at perfect ripeness for export quality.",
    },
    {
      id: 11,
      src: "/gallery-mandarine-citrus-packing.jpg",
      alt: "Mandarine citrus being packed",
      category: "citrus",
      title: "Mandarine Packing",
      description: "Careful packing of premium mandarines for international shipping.",
    },
    {
      id: 12,
      src: "/gallery-frozen-vegetables-facility.jpg",
      alt: "Frozen vegetables processing facility",
      category: "frozen",
      title: "Frozen Processing",
      description: "Modern freezing facility maintaining optimal quality for frozen products.",
    },
    {
      id: 13,
      src: "/gallery-cold-storage-warehouse.jpg",
      alt: "Cold storage warehouse facility",
      category: "facilities",
      title: "Cold Storage Facility",
      description: "Temperature-controlled storage ensuring product freshness during export.",
    },
    {
      id: 14,
      src: "/gallery-packing-line-workers.jpg",
      alt: "Workers on packing line",
      category: "facilities",
      title: "Packing Operations",
      description: "Skilled workers ensuring proper packaging standards for international markets.",
    },
    {
      id: 15,
      src: "/gallery-quality-control-lab.jpg",
      alt: "Quality control laboratory",
      category: "facilities",
      title: "Quality Control Lab",
      description: "Advanced laboratory testing ensuring all products meet international standards.",
    },
    {
      id: 16,
      src: "/gallery-shipping-containers-port.jpg",
      alt: "Shipping containers at port",
      category: "facilities",
      title: "Export Operations",
      description: "Containers ready for shipment to international destinations.",
    },
    {
      id: 17,
      src: "/gallery-farm-workers-harvest.jpg",
      alt: "Farm workers during harvest",
      category: "facilities",
      title: "Harvest Team",
      description: "Experienced farm workers ensuring careful harvesting of premium produce.",
    },
    {
      id: 18,
      src: "/IMG-20250914-WA0048.jpg",
      alt: "Pomegranates",
      category: "facilities",
      title: "Pomegranates packaging",
      description: "Thermoformed plastic trays with molded cavities hold individual pomegranates, protecting them from mechanical damage and ensuring proper spacing to prevent moisture buildup.",
    },
    {
      id: 19,
      src: "/IMG-20250914-WA0094.jpg",
      alt: "banana",
      category: "facilities",
      title: "Banana packaging",
      description: "Reduce water loss, protect the fruit from abrasion, and manage humidity within the package.",
    },
    {
      id: 20,
      src: "/IMG-20250915-WA0058.jpg",
      alt: "Orange",
      category: "facilities",
      title: "Oragne packaging",
      description: "Packaging includes ventilation holes to allow airflow and maintain freshness.",
    },
    {
      id: 21,
      src: "/IMG-20250914-WA0064.jpg",
      alt: "onions",
      category: "facilities",
      title: "onion packaging",
      description: "Mesh bags and woven polypropylene bags, which allow for breathability and durability, and innovative, eco-friendly alternatives made from onion skins.",
    },
    {
      id: 22,
      src: "/close-up-hand-holding-jar.jpg",
      alt: "Pickle collection",
      category: "pickle",
      title: "Pickle collection",
      description: "Gourmet assortment of sweet, spicy, and classic dill pickles.",
    },
    {
      id: 23,
      src: "/delicious-preserved-vegetables-assortment.jpg",
      alt: "pickle",
      category: "pickle",
      title: "Mixed Vegetables Pickle",
      description: "Delicious preserved vegetables assortment",
    },
    {
      id: 24,
      src: "/composition-with-box-full-oranges.jpg",
      alt: "Orange collection",
      category: "citrus",
      title: "Orange collection",
      description: "Premium quality Egyptian orange harvesting ",
    },
    
  ]

  const categories = [
    { id: "all", label: "All Images", count: galleryImages.length },
    {
      id: "fresh",
      label: "Fresh",
      count: galleryImages.filter((img) => img.category === "fresh").length,
    },
    { id: "pickle", label: "Pickle", count: galleryImages.filter((img) => img.category === "pickle").length },
    { id: "citrus", label: "Citrus", count: galleryImages.filter((img) => img.category === "citrus").length },
    { id: "frozen", label: "Frozen", count: galleryImages.filter((img) => img.category === "frozen").length },
    {
      id: "facilities",
      label: "Facilities",
      count: galleryImages.filter((img) => img.category === "facilities").length,
    },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Gallery
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Showcasing Egyptian Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Take a visual journey through our farms, facilities, and premium produce. See the quality and care that goes
            into every product we export.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center space-y-1 py-3 px-4"
                >
                  <span className="font-medium">{category.label}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <Dialog key={image.id}>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                <ZoomIn className="h-6 w-6 text-gray-800" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-3 right-3">
                            <Badge variant="secondary" className="capitalize">
                              {image.category}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-card-foreground mb-2 line-clamp-1">{image.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0">
                      <div className="relative">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-auto max-h-[80vh] object-contain"
                        />
                        <div className="absolute top-4 right-4 flex space-x-2">
                          <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-2xl font-bold text-foreground">{image.title}</h2>
                          <Badge variant="outline" className="capitalize">
                            {image.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{image.description}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Stats Section */}
        <div className="bg-primary rounded-2xl p-12 mb-20">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-primary-foreground text-balance">Our Visual Story</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">500+</div>
                <div className="text-primary-foreground/90">Farm Photos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">200+</div>
                <div className="text-primary-foreground/90">Product Images</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">50+</div>
                <div className="text-primary-foreground/90">Facility Tours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">100+</div>
                <div className="text-primary-foreground/90">Process Videos</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted rounded-2xl p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-balance">Want to See More?</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Request a virtual facility tour or visit us in person to see our operations firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Virtual Tour
              </Button>
              <Button size="lg" variant="outline">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
