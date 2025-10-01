import Link from "next/link"
import SocialMedia from "./social-media"
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
<div className="space-y-6">
  <div className="flex items-center space-x-4">
    <div className="relative w-16 h-16 md:w-20 md:h-20">
      <Image
        src="/logo-2.png"
        alt="Delta Food Stuffs Logo"
        fill
        className="object-contain rounded-lg"
        sizes="125px"
        priority
      />
    </div>
  </div>

  <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
    Premium Egyptian produce exported worldwide. Fresh vegetables, fruits, pickle, and citrus delivered with quality and reliability.
  </p>
</div>
          {/* <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl text-foreground">Delta Food Stuffs</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium Egyptian produce exported worldwide. Fresh vegetables, fruits, and citrus delivered with quality
              and reliability.
            </p>
          </div> */}

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/vegetables"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Vegetables
                </Link>
              </li>
              <li>
                <Link
                  href="/products/fruits"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Fruits
                </Link>
              </li>
              <li>
                <Link
                  href="/products/frozen"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Frozen Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect With Us</h3>
            <SocialMedia variant="minimal" />
            <p className="text-muted-foreground text-sm">
              Cairo, Egypt
              <br />
              +20 100 353 9052
              <br />
              contact@deltafoodstuffs.com
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            ©2024 Delta Food Stuffs | All rights reserved | Premium Egyptian Produce Worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
