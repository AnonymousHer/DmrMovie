import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would come from a database in a real application
const actor = {
  id: 1,
  name: "Leonardo DiCaprio",
  image: "/placeholder.svg?height=400&width=300",
  banner: "/placeholder.svg?height=500&width=1000",
  birthdate: "November 11, 1974",
  birthplace: "Los Angeles, California, USA",
  bio: "Leonardo Wilhelm DiCaprio is an American actor, film producer, and environmentalist. He has often played unconventional roles, particularly in biopics and period films. As of 2019, his films have grossed $7.2 billion worldwide, and he has placed eight times in annual rankings of the world's highest-paid actors.",
  awards: [
    "Academy Award for Best Actor - The Revenant (2015)",
    "Golden Globe Award for Best Actor - The Revenant (2015)",
    "Golden Globe Award for Best Actor - The Wolf of Wall Street (2013)",
    "Golden Globe Award for Best Actor - The Aviator (2004)",
  ],
  films: [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      role: "Dom Cobb",
      image: "/placeholder.svg?height=300&width=200",
      rating: 8.8,
    },
    {
      id: 2,
      title: "The Revenant",
      year: 2015,
      role: "Hugh Glass",
      image: "/placeholder.svg?height=300&width=200",
      rating: 8.0,
    },
    {
      id: 3,
      title: "The Wolf of Wall Street",
      year: 2013,
      role: "Jordan Belfort",
      image: "/placeholder.svg?height=300&width=200",
      rating: 8.2,
    },
    {
      id: 4,
      title: "Shutter Island",
      year: 2010,
      role: "Teddy Daniels",
      image: "/placeholder.svg?height=300&width=200",
      rating: 8.2,
    },
    {
      id: 5,
      title: "The Departed",
      year: 2006,
      role: "Billy Costigan",
      image: "/placeholder.svg?height=300&width=200",
      rating: 8.5,
    },
    {
      id: 6,
      title: "Django Unchained",
      year: 2012,
      role: "Calvin Candie",
      image: "/placeholder.svg?height=300&width=200",
      rating: 8.4,
    },
  ],
}

export default function ActorPage({ params }: { params: { id: string } }) {
  return (
    <main>
      {/* Hero section with banner */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <Image src={actor.banner || "/placeholder.svg"} alt={actor.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{actor.name}</h1>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-8">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <Image src={actor.image || "/placeholder.svg"} alt={actor.name} fill className="object-cover" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Personal Info</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Born:</span>
                    <span className="font-medium">{actor.birthdate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Birthplace:</span>
                    <span className="font-medium">{actor.birthplace}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-2">
            <Tabs defaultValue="biography" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="biography">Biography</TabsTrigger>
                <TabsTrigger value="filmography">Filmography</TabsTrigger>
                <TabsTrigger value="awards">Awards</TabsTrigger>
              </TabsList>

              <TabsContent value="biography" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">{actor.bio}</p>
                </div>
              </TabsContent>

              <TabsContent value="filmography" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Filmography</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {actor.films.map((film) => (
                    <Link key={film.id} href={`/films/${film.id}`} className="group">
                      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-[250px] w-full">
                          <Image
                            src={film.image || "/placeholder.svg"}
                            alt={film.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                            {film.rating} ★
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {film.title} ({film.year})
                          </h3>
                          <p className="text-sm text-muted-foreground">as {film.role}</p>
                          <div className="flex items-center mt-2 text-sm text-muted-foreground">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            {film.year}
                            <span className="mx-2">•</span>
                            <Star className="h-3 w-3 mr-1 text-yellow-400" />
                            {film.rating}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="awards" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Awards & Nominations</h2>
                <ul className="space-y-3">
                  {actor.awards.map((award, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}

