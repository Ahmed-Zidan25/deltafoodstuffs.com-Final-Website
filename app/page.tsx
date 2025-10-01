import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Truck, Shield, Star, Play } from "lucide-react"
import SocialMedia from "@/components/social-media"
import Image from "next/image";

export default function HomePage() {
  const products = [
    {
      title: "Fresh Products",
      description: "Premium Citrus, onions, garlic, Mangoes and more",
      image: "/fresh-vegetables-carrots-onions-garlic.jpg",
      href: "/products/fresh",
    },
    {
      title: "Premium Pickle",
      description: "A Timeless Tradition, Reimagined for Modern Palates ... year-round",
      image: "/tropical-fruits-mango-guava-pomegranate.jpg",
      href: "/products/pickle",
    },
    {
      title: "Frozen Produce",
      description: "Peas, Strawberries, Mango, Cauliflower ... year-round",
      image: "/citrus-fruits-oranges-lemons-mandarines.jpg",
      href: "/products/frozen",
    },
  ]

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Exporting to over 30 countries worldwide with reliable logistics",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assured",
      description: "International certifications and rigorous quality control standards",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fresh Delivery",
      description: "Cold chain logistics ensuring freshness from farm to destination",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Grade",
      description: "Hand-selected produce meeting the highest international standards",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted via-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Premium Egyptian Produce
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Fresh From Egypt to the World
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  We offer a wide range of premium-quality fresh fruits and vegetables sourced directly from trusted local farms.
Our products are carefully selected, handled, and packed to meet international export standards — ensuring freshness, taste, and shelf life
. Delivering Egyptian agricultural excellence to international markets with uncompromising quality and reliability.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/products">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
  <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative group">
    <div className="relative w-full h-full">
      <Image
        src="/egyptian-farm-fresh-vegetables-fruits.jpg"
        alt="Fresh Egyptian produce ready for export"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 50vw"
        priority
      />
    </div>

    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <div className="bg-primary/90 rounded-full p-3">
        <svg className="h-6 w-6 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 6a4 4 0 110 8 4 4 0 010-8z" />
        </svg>
      </div>
    </div>

    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white">
      <p className="text-sm font-medium">From Farm to Export</p>
      <p className="text-xs opacity-90">Our premium Egyptian produce journey</p>
    </div>
  </div>
</div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold text-card-foreground">Quality Certified</div>
                    <div className="text-sm text-muted-foreground">International Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Products
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Premium Egyptian Produce</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From the fertile lands of Egypt, we bring you the finest selection of vegetables, fruits, and citrus.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-card-foreground">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    asChild
                  >
                    <Link href={product.href}>
                      View Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Excellence in Every Export</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Trusted by international buyers for our commitment to quality, reliability, and service excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-foreground">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-card-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Follow Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Stay Connected</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Follow us on social media for daily updates, behind-the-scenes content, and the latest from our farms and
              facilities.
            </p>
          </div>
          <SocialMedia variant="large" className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Ready to Import Premium Egyptian Produce?
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Join hundreds of satisfied international buyers. Get a custom quote for your requirements today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
