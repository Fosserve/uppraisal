"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, Home, Compass, PlusSquare, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/discover", label: "Careers", icon: Compass },
    { href: "/create", label: "Our Services", icon: PlusSquare },
    { href: "/about", label: "About Us", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center gap-8 justify-between">
        <div className="flex items-center justify-between w-[100%] gap-8">
          <Link href="/" className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </Link>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/95">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:translate-x-1",
                      pathname === item.href
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden md:flex  gap-6">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105",
                  pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary",
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="w-48 rounded-full border bg-background px-4 py-2 pl-8 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div> */}
          <Button
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
}

