"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Settings } from "lucide-react"
import { isAuthenticated, getUser } from "@/lib/auth"
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const authenticated = isAuthenticated()
  const user = getUser()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products"},
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ]
return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      
          {/* Logo (left) */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center h-auto md:h-20"> {/* remove fixed small h-16 if you want bigger logo */}
      <Link href="/" className="flex items-center flex-shrink-0">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden">
          <Image
            src="/logo-2.png"
            alt="Logo"
            fill
            className="object-contain"
            sizes="(max-width:640px) 150px, (max-width:1024px) 180px, 178px"
            priority
          />
        </div>
        {/* <span className="ml-3 font-bold text-xl text-foreground whitespace-nowrap">EgyptExport</span> */}
      </Link>
    </div>
  </div>




          {/* <Link href="/" className="flex items-center flex-shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden">
              <Image
                src="/logo-2.png"
                alt="Logo"
                fill
                className="object-contain"
                sizes="390px"
                priority
              />
            </div>
          
          </Link> */}

          {/* Large flexible gap */}
          <div className="flex-grow" />

          {/* Menu + actions (inline on desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 min-w-0 overflow-x-auto">
              {navItems.map((item) => (
                <div key={item.name} className="min-w-0">
                  <Link
                    href={item.href ?? "#"}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>

            {/* action buttons */}
            <div className="flex items-center gap-3 shrink-0">
              {authenticated && user?.role === "admin" && (
                <Link
                  href="/admin"
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center space-x-1 whitespace-nowrap"
                >
                  <Settings className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
              )}

              {!authenticated ? (
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              ) : null}

              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">Get Quote</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href ?? "#"}
                      className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {authenticated && user?.role === "admin" && (
                    <Link
                      href="/admin"
                      className="flex items-center space-x-2 py-2 text-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      <Settings className="h-4 w-4" />
                      <span>Admin</span>
                    </Link>
                  )}

                  {!authenticated && (
                    <Button variant="outline" asChild>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        Login
                      </Link>
                    </Button>
                  )}
                <Button variant="outline" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
                 </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
)
 
}

export default Navigation
