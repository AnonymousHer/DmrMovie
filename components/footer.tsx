import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4">
              FilmPortal
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your ultimate destination for film information, reviews, and discussions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/films" className="text-muted-foreground hover:text-primary transition-colors">
                  Films
                </Link>
              </li>
              <li>
                <Link href="/actors" className="text-muted-foreground hover:text-primary transition-colors">
                  Actors
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-muted-foreground hover:text-primary transition-colors">
                  Forum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/copyright" className="text-muted-foreground hover:text-primary transition-colors">
                  Copyright Information
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Email: contact@filmportal.com</li>
              <li className="text-muted-foreground">Phone: +1 (555) 123-4567</li>
              <li className="text-muted-foreground">Address: 123 Movie Lane, Hollywood, CA 90210</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center">
            © {new Date().getFullYear()} FilmPortal. Made with
            <Heart className="h-3 w-3 mx-1 text-red-500 fill-red-500" />
            for film enthusiasts worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}

