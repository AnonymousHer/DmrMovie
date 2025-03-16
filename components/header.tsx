"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Film, User, Users, Newspaper, MessageSquare, Search, Menu, X, Bell, LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMobile } from "@/hooks/use-mobile"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { href: "/", label: "Home", icon: <Film className="h-4 w-4 mr-2" /> },
    { href: "/films", label: "Films", icon: <Film className="h-4 w-4 mr-2" /> },
    { href: "/actors", label: "Actors", icon: <Users className="h-4 w-4 mr-2" /> },
    { href: "/news", label: "News", icon: <Newspaper className="h-4 w-4 mr-2" /> },
    { href: "/forum", label: "Forum", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false
    return pathname?.startsWith(path)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-background/0 border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center gap-2 mb-8">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="font-bold text-xl">FilmPortal</span>
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-lg rounded-lg hover:bg-accent ${
                      isActive(item.href) ? "bg-accent font-medium text-primary" : ""
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl hidden md:inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              FilmPortal
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent ${
                  isActive(item.href) ? "text-primary bg-accent/50" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {showSearch ? (
            <div className="relative w-full max-w-[200px] md:max-w-[300px]">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search films..."
                className="pl-9 pr-8 rounded-full"
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => setShowSearch(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(true)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <ModeToggle />

          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="text-muted-foreground relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                <span className="sr-only">Notifications</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Film className="h-4 w-4 mr-2" />
                    My Watchlist
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    My Comments
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="hidden md:flex rounded-full" asChild>
                <Link href="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Log in
                </Link>
              </Button>
              <Button size="sm" className="rounded-full" asChild>
                <Link href="/register">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign up
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

