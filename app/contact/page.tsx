"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
import { useState } from "react"
import SocialMedia from "@/components/social-media"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    productInterest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this to your backend
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Head Office",
      details: ["100 Merghany st., Masr El Gedida, Cairo, Egypt"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+20 100 353 9052", "+20 10 989 5951"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: ["Export@deltafoodstuffs.com", "Marketing@deltafoodstuffs.com", "shipping@deltafoodstuffs.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Sunday - Thursday: 8:00 AM - 6:00 PM", "Friday: 8:00 AM - 2:00 PM", "Saturday: Closed"],
    },
  ]

  /* const offices = [
    {
      city: "Cairo",
      address: "123 Export Street, New Cairo",
      phone: "+20 2 1234 5678",
      type: "Head Office",
    },
    {
      city: "Alexandria",
      address: "456 Port Road, Alexandria",
      phone: "+20 3 9876 5432",
      type: "Port Office",
    },
    {
      city: "Ismailia",
      address: "789 Agricultural Zone, Ismailia",
      phone: "+20 64 1111 2222",
      type: "Processing Facility",
    },
  ] */

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Contact Us
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Let's Start a Conversation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to import premium Egyptian produce? Get in touch with our team for personalized quotes, product
            information, and partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Send us a Message</span>
              </CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      placeholder="Your country"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product-interest">Product Interest</Label>
                  <Select onValueChange={(value) => handleInputChange("productInterest", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select products you're interested in" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetables">Fresh Vegetables</SelectItem>
                      <SelectItem value="fruits">Tropical Fruits</SelectItem>
                      <SelectItem value="frozen">Frozen Products</SelectItem>
                      <SelectItem value="citrus">Citrus Fruits</SelectItem>
                      <SelectItem value="mixed">Mixed Products</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your requirements, quantities, delivery preferences, or any questions you have..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-card-foreground flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <div className="text-primary-foreground">{info.icon}</div>
                        </div>
                        <span>{info.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Follow Us</CardTitle>
                <CardDescription>Stay connected through our social media channels</CardDescription>
              </CardHeader>
              <CardContent>
                <SocialMedia showLabels />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
       {/*  <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Locations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We have strategically located offices and facilities across Egypt to serve you better.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-card-foreground">{office.city}</CardTitle>
                    <Badge variant="outline">{office.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{office.phone}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Map Placeholder */}
      <div className="mb-20">
          <Card className="border-border">
            <CardHeader>
             <CardTitle className="text-gray-800 flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-red-600" />
              <span>Find Us</span>
            </CardTitle>
  
              <CardDescription>Our head office location in Cairo, Egypt</CardDescription>
            </CardHeader>
            <CardContent>
            {/* The interactive map is embedded here using an iframe. */}
            <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-xl">
              <iframe
                // The source uses the specified address for accurate pinning
                src="https://goo.gl/maps/hjQGqYXW1rB87cvT9"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Delta Foodstuffs Office Location"
              ></iframe>
            </div>
            
            {/* Displaying the physical address for clarity */}
            <p className="text-sm text-gray-600 mt-4 flex items-center justify-center sm:justify-start">
                <MapPin className="h-4 w-4 text-teal-600 mr-2" />
                100 Merghany st., Masr El Gedida, Cairo, Egypt
            </p>
          </CardContent>
          </Card>
        </div> 

        {/* FAQ Section */}
        <div className="bg-muted rounded-2xl p-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-foreground mb-2">What are your minimum order quantities?</h3>
                <p className="text-muted-foreground text-sm">
                  MOQs vary by product. Typically 1 container (20-25 tons) for most items.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Do you provide samples?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we provide samples for quality evaluation. Shipping costs apply.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What certifications do you have?</h3>
                <p className="text-muted-foreground text-sm">
                  HACCP, GlobalGAP, ISO 22000, and other international certifications.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What are your payment terms?</h3>
                <p className="text-muted-foreground text-sm">
                  We accept LC, TT, and other secure payment methods as per agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
