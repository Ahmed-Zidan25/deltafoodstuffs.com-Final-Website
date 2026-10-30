"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [
  {
    src: "/egyptian-farm-fresh-vegetables-fruits.jpg",
    alt: "Fresh Egyptian fruits and vegetables",
  },
  {
    src: "/egyptian-mangoes-premium-export-quality.jpg",
    alt: "Premium Egyptian mangoes",
  },
  {
    src: "/citrus-fruits-oranges-lemons-mandarines.jpg",
    alt: "Egyptian oranges, lemons, and mandarins",
  },
  {
    src: "/frozen-products-vegetables-fruits.jpg",
    alt: "Frozen Egyptian fruits and vegetables",
  },
]

const whatsappUrl = "https://wa.me/201003539052"

export default function HeroPromoCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!api) return

    const updateActiveIndex = () => setActiveIndex(api.selectedScrollSnap())
    updateActiveIndex()
    api.on("select", updateActiveIndex)

    return () => {
      api.off("select", updateActiveIndex)
    }
  }, [api])

  useEffect(() => {
    if (!api || isHovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const intervalId = window.setInterval(() => api.scrollNext(), 5000)
    return () => window.clearInterval(intervalId)
  }, [api, isHovered])

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CarouselContent className="ml-0">
        {slides.map((slide) => (
          <CarouselItem key={slide.src} className="pl-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat with us on WhatsApp about ${slide.alt}`}
              className="relative block aspect-square overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={slide.src === slides[0].src}
              />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Button
        asChild
        size="sm"
        className="absolute left-3 top-3 z-10 rounded-full shadow-md"
      >
        <a href="/Delta%20Foodstuffs_CompanyProfile.pdf" download="Delta-Foodstuffs-Company-Profile.pdf">
          <Download aria-hidden="true" />
          Download Profile
        </a>
      </Button>
      <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 border-0 bg-background/90 text-foreground shadow hover:bg-background" />
      <CarouselNext className="right-3 top-1/2 -translate-y-1/2 border-0 bg-background/90 text-foreground shadow hover:bg-background" />
      <div className="mt-4 flex items-center justify-center gap-2" aria-label="Choose a promotional image">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show image ${index + 1} of ${slides.length}`}
            aria-current={activeIndex === index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index ? "w-7 bg-primary" : "w-2.5 bg-primary/30 hover:bg-primary/60"
            }`}
          />
        ))}
      </div>
    </Carousel>
  )
}
