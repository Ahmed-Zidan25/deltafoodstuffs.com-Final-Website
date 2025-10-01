import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Globe, CheckCircle, Target, Eye, Heart } from "lucide-react"
import SocialMedia from "@/components/social-media"

export default function AboutPage() {
  const values = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Excellence",
      description:
        "Uncompromising commitment to delivering the highest quality produce that meets international standards.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description:
        "Building lasting partnerships with buyers across continents, bringing Egyptian agriculture to the world.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Sustainable Practices",
      description:
        "Supporting local farmers while implementing environmentally responsible farming and export practices.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Focus",
      description:
        "Dedicated to understanding and exceeding our international partners' expectations and requirements.",
    },
  ]

  /* const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started as a small family business with a vision to export Egyptian produce globally.",
    },
    {
      year: "2012",
      title: "International Expansion",
      description: "Expanded operations to serve European and Middle Eastern markets.",
    },
    {
      year: "2016",
      title: "Quality Certifications",
      description: "Achieved international quality certifications including HACCP and GlobalGAP.",
    },
    {
      year: "2020",
      title: "Modern Facilities",
      description: "Invested in state-of-the-art packing and cold storage facilities.",
    },
    {
      year: "2024",
      title: "30+ Countries",
      description: "Now serving customers in over 30 countries across 4 continents.",
    },
  ] */

  /* const team = [
    {
      name: "Ahmed Hassan",
      role: "Founder & CEO",
      description: "20+ years experience in agricultural exports and international trade.",
      image: "/team-ahmed-hassan-ceo-founder.jpg",
    },
    {
      name: "Fatima El-Sayed",
      role: "Quality Director",
      description: "Expert in food safety standards and international quality compliance.",
      image: "/team-fatima-quality-director.jpg",
    },
    {
      name: "Omar Mahmoud",
      role: "Export Manager",
      description: "Specialist in logistics and international shipping operations.",
      image: "/team-omar-export-manager.jpg",
    },
  ] */

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            About Delta Food Stuffs
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Connecting Egypt's Finest to the World
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty text-justify">We are a company specialized in exporting fresh and frozen fruits and vegetables to global markets.</p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty text-justify">We operate through a strong network of trusted local suppliers who provide us with top-quality products at competitive prices.</p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty text-justify">We carefully manage every step of the supply chain — from selecting the products, to packaging and logistics — ensuring that every shipment arrives on time and in excellent condition.</p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty text-justify">Our real strength lies in trust and reliability. We work only with suppliers who meet our quality standards and share our commitment to excellence.</p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty text-justify">Our goal is to build long-term partnerships with our clients based on transparency, consistency, and results they can count on.</p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty text-justify">
          For over 15 years, we've been dedicated to bringing the exceptional quality of Egyptian agriculture to international markets, building lasting partnerships based on trust and excellence.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-20">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-muted">
            <img
              src="/about-egyptian-farm-workers-harvest-quality.jpg"
              alt="Egyptian farm workers harvesting premium produce"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <Card className="text-center border-border">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                To deliver premium Egyptian produce to global markets while supporting local farmers and maintaining the
                highest standards of quality and sustainability.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-border">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                To be the leading Egyptian agricultural export company, recognized globally for quality excellence,
                reliability, and sustainable business practices.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-border">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Quality, integrity, sustainability, and customer satisfaction guide every decision we make in our
                journey to connect Egypt's finest produce with the world.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">What Drives Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our core values shape everything we do, from farm partnerships to international deliveries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-foreground">{value.icon}</div>
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-sm">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
       {/*  <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From humble beginnings to international success, here are the key milestones in our growth.
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <Card className="flex-1 border-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{milestone.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div> */}

        {/* Leadership Team */}
      {/*   <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Meet the experienced professionals leading our mission to deliver Egyptian excellence worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-card-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
 */}
        {/* Stats */}
        <div className="bg-primary rounded-2xl p-12 mb-20">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-primary-foreground text-balance">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">30+</div>
                <div className="text-primary-foreground/90">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">1000+</div>
                <div className="text-primary-foreground/90">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">15+</div>
                <div className="text-primary-foreground/90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">500+</div>
                <div className="text-primary-foreground/90">Partner Farms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Follow Section */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Follow Our Story</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stay connected with us on social media to see our daily operations, meet our team, and discover the
              journey from farm to export.
            </p>
          </div>
          <SocialMedia variant="large" className="max-w-4xl mx-auto" />
        </div>

        {/* CTA */}
        <div className="text-center bg-muted rounded-2xl p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-balance">Ready to Partner With Us?</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Join our growing network of international partners and experience the quality of Egyptian agriculture.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">Start Partnership</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
