"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, Settings } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
<Link href="/" className="flex items-center">
<div className="relative">
  <Image
        src="/logo-2.png"
        alt="Delta Food Stuffs Logo"
        fill
        className="object-contain rounded-lg"
        sizes="230px"
        priority
      />
</div>
  </Link>
          {/* Desktop Navigation - flexible and responsive */}
<div className="hidden md:flex items-center gap-6">
  {/* nav items container: allows wrap or horizontal scroll */}
  <nav className="flex flex-wrap gap-4 items-center max-w-[60%] min-w-0 overflow-x-auto">
    {navItems.map((item) => (
      <div key={item.name} className="min-w-0">
        {item.submenu ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-1 whitespace-nowrap"
              >
                <span>{item.name}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.submenu.map((subItem) => (
                <DropdownMenuItem key={subItem.name} asChild>
                  <Link href={subItem.href} className="block w-full">
                    {subItem.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            href={item.href}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
          >
            {item.name}
          </Link>
        )}
      </div>
    ))}
  </nav>

  {/* spacer to push actions to the right on wide screens */}
  <div className="flex-1" />

  {/* actions container: will stay visible and not force nav overflow */}
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

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <div>
                          <span className="font-medium text-foreground block py-2">{item.name}</span>
                          <div className="ml-4 space-y-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
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
                  <Button className="bg-primary hover:bg-primary/90 mt-4">Get Quote</Button>
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
