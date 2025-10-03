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
      src: "/IMG-20250904-WA0021.jpg",
      category: "fresh",
     },
    {
      id: 2,
      src: "/IMG-20250904-WA0022.jpg",
      category: "fresh",
     },
	 {
      id: 3,
      src: "/IMG-20250904-WA0034.jpg",
      category: "fresh",
     },
	 {
      id: 4,
      src: "/IMG-20250904-WA0041.jpg",
      category: "fresh",
     },
	 {
      id: 5,
      src: "/IMG-20250904-WA0057.jpg",
      category: "facilities",
     },
	 {
      id: 6,
      src: "/IMG-20250904-WA0065.jpg",
      category: "fresh",
     },
	 {
      id: 7,
      src: "/IMG-20250904-WA0068.jpg",
      category: "facilities",
     },
	 {
      id: 8,
      src: "/IMG-20250914-WA0025.jpg",
      category: "fresh",
     },
	 {
      id: 9,
      src: "/IMG-20250914-WA0027.jpg",
      category: "facilities",
     },
	 {
      id: 10,
      src: "/IMG-20250914-WA0034.jpg",
      category: "fresh",
     },
	 {
      id: 11,
      src: "/IMG-20250914-WA0037.jpg",
      category: "fruit",
     },
	 {
      id: 12,
      src: "/IMG-20250914-WA0038.jpg",
      category: "fresh",
     },
	 {
      id: 13,
      src: "/IMG-20250914-WA0048.jpg",
      category: "fresh",
     },
    {
      id: 14,
      src: "/IMG-20250914-WA0052.jpg",
      category: "fresh",
     },
	 {
      id: 15,
      src: "/IMG-20250914-WA0064.jpg",
      category: "fresh",
     },
	 {
      id: 16,
      src: "/IMG-20250914-WA0083.jpg",
      category: "fresh",
     },
	 {
      id: 17,
      src: "/IMG-20250914-WA0094.jpg",
      category: "fresh",
     },
	 {
      id: 18,
      src: "/IMG-20250914-WA0102.jpg",
      category: "fresh",
     },
    {
      id: 19,
      src: "/IMG-20250914-WA0106.jpg",
      category: "fresh",
     },
	 {
      id: 20,
      src: "/IMG-20250914-WA0121.jpg",
      category: "fresh",
     },
	 {
      id: 21,
      src: "/IMG-20250915-WA0009.jpg",
      category: "fresh",
     },
	 {
      id: 22,
      src: "/IMG-20250915-WA0022.jpg",
      category: "fresh",
     },
	 {
      id: 23,
      src: "/IMG-20250915-WA0024.jpg",
      category: "fresh",
     },
    {
      id: 24,
      src: "/IMG-20250915-WA0025.jpg",
      category: "fresh",
     },
	 {
      id: 25,
      src: "/IMG-20250915-WA0034.jpg",
      category: "fresh",
     },
	 {
      id: 26,
      src: "/IMG-20250915-WA0051.jpg",
      category: "fresh",
     },
	 {
      id: 27,
      src: "/IMG-20250915-WA0058.jpg",
      category: "fresh",
     },
	 {
      id: 28,
      src: "/IMG-20250915-WA0063.jpg",
      category: "citrus",
     },
	 {
      id: 29,
      src: "/IMG-20250915-WA0069.jpg",
      category: "fresh",
     },
	 {
      id: 30,
      src: "/IMG-20250904-WA0049.jpg",
      category: "fresh",
     },
	 {
      id: 31,
      src: "/IMG-20250914-WA0071.jpg",
      category: "facilities",
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
