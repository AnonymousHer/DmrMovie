import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Star, Film, MessageSquare, ThumbsUp, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would come from a database in a real application
const film = {
  id: 1,
  title: "Inception",
  image: "/placeholder.svg?height=500&width=350",
  backdrop: "/placeholder.svg?height=500&width=1000",
  year: 2010,
  rating: 8.8,
  duration: "2h 28m",
  genre: ["Action", "Sci-Fi", "Thriller"],
  director: "Christopher Nolan",
  description:
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  longDescription:
    "Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
  cast: [
    { id: 1, name: "Leonardo DiCaprio", character: "Dom Cobb", image: "/placeholder.svg?height=150&width=150" },
    { id: 2, name: "Joseph Gordon-Levitt", character: "Arthur", image: "/placeholder.svg?height=150&width=150" },
    { id: 3, name: "Ellen Page", character: "Ariadne", image: "/placeholder.svg?height=150&width=150" },
    { id: 4, name: "Tom Hardy", character: "Eames", image: "/placeholder.svg?height=150&width=150" },
    { id: 5, name: "Ken Watanabe", character: "Saito", image: "/placeholder.svg?height=150&width=150" },
  ],
  trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  reviews: [
    {
      id: 1,
      user: "MovieFan123",
      rating: 9,
      text: "One of the best sci-fi films ever made. The concept is mind-blowing and the execution is flawless.",
      date: "2023-01-15",
    },
    {
      id: 2,
      user: "FilmCritic",
      rating: 8,
      text: "Nolan at his best. The visuals are stunning and the story keeps you engaged throughout.",
      date: "2022-11-20",
    },
    {
      id: 3,
      user: "CinemaLover",
      rating: 10,
      text: "A masterpiece that stands the test of time. I've watched it multiple times and still discover new details.",
      date: "2022-08-05",
    },
  ],
}

export default function FilmPage({ params }: { params: { id: string } }) {
  return (
    <main>
      {/* Hero section with backdrop */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image src={film.backdrop || "/placeholder.svg"} alt={film.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{film.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90 mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {film.year}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {film.duration}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-400" />
                <span>
                  {film.rating} <span className="text-white/70">/ 10</span>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {film.genre.map((g) => (
                <Badge key={g} variant="secondary" className="bg-primary/20 hover:bg-primary/30">
                  {g}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>
                <Film className="mr-2 h-4 w-4" /> Watch Trailer
              </Button>
              <Button variant="secondary">
                <ThumbsUp className="mr-2 h-4 w-4" /> Add to Watchlist
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-8">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
                <Image src={film.image || "/placeholder.svg"} alt={film.title} fill className="object-cover" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Film Info</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Director:</span>
                    <span className="font-medium">{film.director}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Release Year:</span>
                    <span className="font-medium">{film.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{film.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">IMDb Rating:</span>
                    <span className="font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      {film.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="cast">Cast</TabsTrigger>
                <TabsTrigger value="trailer">Trailer</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Synopsis</h2>
                  <p className="text-muted-foreground leading-relaxed">{film.longDescription}</p>
                </div>
              </TabsContent>

              <TabsContent value="cast" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Cast</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {film.cast.map((actor) => (
                    <Link key={actor.id} href={`/actors/${actor.id}`} className="group">
                      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-40 w-full">
                          <Image
                            src={actor.image || "/placeholder.svg"}
                            alt={actor.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium group-hover:text-primary transition-colors">{actor.name}</h3>
                          <p className="text-sm text-muted-foreground">{actor.character}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="trailer" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={film.trailer}
                    title={`${film.title} Trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">User Reviews</h2>
                  <Button>
                    <MessageSquare className="mr-2 h-4 w-4" /> Write a Review
                  </Button>
                </div>

                <div className="space-y-6">
                  {film.reviews.map((review) => (
                    <div key={review.id} className="bg-card rounded-lg p-4 shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="bg-primary/10 rounded-full p-2 mr-3">
                            <span className="font-bold">{review.user.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-medium">{review.user}</h4>
                            <p className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center bg-primary/10 px-2 py-1 rounded">
                          <Star className="h-4 w-4 mr-1 text-yellow-400" />
                          <span className="font-medium">{review.rating}/10</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.text}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}

