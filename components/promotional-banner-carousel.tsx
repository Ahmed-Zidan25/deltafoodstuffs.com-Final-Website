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
    src: "/Banner_slider_1.jpeg",
    alt: "Delta Foodstuffs HoReCa supply promotional banner",
  },
  {
    src: "/banner-dried-fruits.png",
    alt: "Dried fruits promotional banner",
  },
  {
    src: "/banner-fresh-fruits.png",
    alt: "Fresh fruits from Egypt promotional banner",
  },
  {
    src: "/banner-frozen-fruits-vegetables.png",
    alt: "Frozen fruits and vegetables promotional banner",
  },
  {
    src: "/banner-pickles-preserved-products.png",
    alt: "Pickles and preserved products promotional banner",
  },
]

const whatsappUrl = "https://wa.me/201003539052"

export default function PromotionalBannerCarousel() {
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
    if (
      !api ||
      slides.length < 2 ||
      isHovered ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const intervalId = window.setInterval(() => api.scrollNext(), 5000)
    return () => window.clearInterval(intervalId)
  }, [api, isHovered])

  return (
    <section aria-label="Promotions" className="w-full">
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
                className="relative block aspect-[1280/289] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={slide.src === slides[0].src}
                  className="object-fill"
                />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <Button
          asChild
          size="sm"
          className="absolute left-3 top-3 z-20 rounded-full shadow-md sm:left-5 sm:top-5"
        >
          <a
            href="/Delta%20Foodstuffs_CompanyProfile.pdf"
            download="Delta-Foodstuffs-Company-Profile.pdf"
          >
            <Download aria-hidden="true" />
            Download Company Profile
          </a>
        </Button>
        {slides.length > 1 && (
          <>
            <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 border-0 bg-background/90 text-foreground shadow hover:bg-background" />
            <CarouselNext className="right-3 top-1/2 -translate-y-1/2 border-0 bg-background/90 text-foreground shadow hover:bg-background" />
            <div
              className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2 sm:bottom-5"
              aria-label="Choose a promotional banner"
            >
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show banner ${index + 1} of ${slides.length}`}
                  aria-current={activeIndex === index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index ? "w-7 bg-white" : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </Carousel>
    </section>
  )
}
