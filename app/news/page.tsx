import Image from "next/image"
import Link from "next/link"
import { CalendarDays, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample news data
const featuredNews = {
  id: 1,
  title: "Upcoming Blockbuster Film Breaks Pre-Sale Records",
  excerpt:
    "The highly anticipated sequel has already broken records for advance ticket sales, surpassing all previous films in the franchise.",
  image: "/placeholder.svg?height=600&width=1200",
  category: "Industry News",
  date: "2025-03-15",
}

const recentNews = [
  {
    id: 2,
    title: "Award-Winning Director Announces New Project",
    excerpt:
      "The acclaimed filmmaker has revealed details about their next feature film, set to begin production later this year.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Industry News",
    date: "2025-03-12",
  },
  {
    id: 3,
    title: "Behind the Scenes: The Making of 'Epic Adventure'",
    excerpt:
      "Get an exclusive look at the special effects and stunts that went into creating this year's biggest action film.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Behind the Scenes",
    date: "2025-03-10",
  },
  {
    id: 4,
    title: "Rising Star Cast in Major Film Adaptation",
    excerpt: "The breakout actor has landed the lead role in the upcoming adaptation of the bestselling novel series.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Casting News",
    date: "2025-03-08",
  },
]

const categories = [
  { id: 1, name: "Industry News", count: 42 },
  { id: 2, name: "Reviews", count: 38 },
  { id: 3, name: "Interviews", count: 25 },
  { id: 4, name: "Behind the Scenes", count: 19 },
  { id: 5, name: "Casting News", count: 31 },
  { id: 6, name: "Box Office", count: 16 },
  { id: 7, name: "Awards", count: 22 },
]

export default function NewsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Film News</h1>
          <p className="text-muted-foreground">Stay updated with the latest news from the world of cinema</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Featured news */}
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <div className="relative aspect-[16/9]">
              <Image
                src={featuredNews.image || "/placeholder.svg"}
                alt={featuredNews.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <Badge className="mb-3">{featuredNews.category}</Badge>
              <Link href={`/news/${featuredNews.id}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {featuredNews.title}
                </h2>
              </Link>
              <p className="text-white/80 mb-3 line-clamp-2">{featuredNews.excerpt}</p>
              <div className="flex items-center text-white/70">
                <CalendarDays className="h-4 w-4 mr-2" />
                {new Date(featuredNews.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>

          {/* Recent news */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Recent News</h2>
            <div className="grid grid-cols-1 gap-6">
              {recentNews.map((news) => (
                <div key={news.id} className="bg-card rounded-lg shadow overflow-hidden group">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/3 aspect-video md:aspect-square">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{news.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          {new Date(news.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <Link href={`/news/${news.id}`}>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {news.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                      <Button variant="link" className="p-0" asChild>
                        <Link href={`/news/${news.id}`}>
                          Read More
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline">Load More News</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div className="bg-card rounded-lg shadow overflow-hidden">
            <div className="p-4 bg-muted font-medium">News Categories</div>
            <div className="divide-y">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/news/category/${category.id}`}
                  className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-medium">{category.name}</h3>
                  <Badge variant="outline">{category.count}</Badge>
                </Link>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div className="bg-card rounded-lg shadow overflow-hidden">
            <div className="p-4 bg-muted font-medium">Newsletter</div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter to receive the latest film news and updates directly to your inbox.
              </p>
              <form className="space-y-4">
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

