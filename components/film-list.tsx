"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Film, Clock, Star, Heart, BarChart4, Play, Calendar, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Gerçek film verileri
const films = [
  {
    id: 1,
    title: "Inception",
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    year: 2010,
    rating: 8.8,
    duration: "2h 28m",
    genre: ["Action", "Sci-Fi", "Thriller"],
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    year: 1994,
    rating: 9.3,
    duration: "2h 22m",
    genre: ["Drama"],
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    year: 2008,
    rating: 9.0,
    duration: "2h 32m",
    genre: ["Action", "Crime", "Drama"],
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    year: 1994,
    rating: 8.9,
    duration: "2h 34m",
    genre: ["Crime", "Drama"],
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
  },
  {
    id: 5,
    title: "Fight Club",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    year: 1999,
    rating: 8.8,
    duration: "2h 19m",
    genre: ["Drama"],
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    director: "David Fincher",
  },
  {
    id: 6,
    title: "Interstellar",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    year: 2014,
    rating: 8.6,
    duration: "2h 49m",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
  },
  {
    id: 7,
    title: "The Matrix",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    year: 1999,
    rating: 8.7,
    duration: "2h 16m",
    genre: ["Action", "Sci-Fi"],
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "Lana and Lilly Wachowski",
  },
  {
    id: 8,
    title: "Parasite",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    year: 2019,
    rating: 8.5,
    duration: "2h 12m",
    genre: ["Drama", "Thriller"],
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    director: "Bong Joon Ho",
  },
  {
    id: 9,
    title: "Joker",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    year: 2019,
    rating: 8.4,
    duration: "2h 2m",
    genre: ["Crime", "Drama", "Thriller"],
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
    director: "Todd Phillips",
  },
  {
    id: 10,
    title: "The Godfather",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    year: 1972,
    rating: 9.2,
    duration: "2h 55m",
    genre: ["Crime", "Drama"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
  },
  {
    id: 11,
    title: "Avengers: Endgame",
    image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    year: 2019,
    rating: 8.4,
    duration: "3h 1m",
    genre: ["Action", "Adventure", "Drama"],
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    director: "Anthony and Joe Russo",
  },
  {
    id: 12,
    title: "The Lord of the Rings: The Return of the King",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    year: 2003,
    rating: 9.0,
    duration: "3h 21m",
    genre: ["Action", "Adventure", "Drama"],
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    director: "Peter Jackson",
  },
]

export function FilmList() {
  const [sortBy, setSortBy] = useState<"latest" | "rating">("latest")
  const [visibleFilms, setVisibleFilms] = useState(6)
  const [isLoading, setIsLoading] = useState(false)
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null)
  const [likedFilms, setLikedFilms] = useState<number[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  // Sort films based on selected criteria
  const sortedFilms = [...films].sort((a, b) => {
    if (sortBy === "latest") {
      return b.year - a.year
    } else {
      return b.rating - a.rating
    }
  })

  // Toggle film like status
  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setLikedFilms((prev) => (prev.includes(id) ? prev.filter((filmId) => filmId !== id) : [...prev, id]))
  }

  // Simulate loading more films
  const loadMoreFilms = () => {
    if (visibleFilms >= sortedFilms.length) return

    setIsLoading(true)
    setTimeout(() => {
      setVisibleFilms((prev) => Math.min(prev + 6, sortedFilms.length))
      setIsLoading(false)
    }, 1000)
  }

  // Setup intersection observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !isLoading && visibleFilms < sortedFilms.length) {
          loadMoreFilms()
        }
      },
      { threshold: 0.5 },
    )

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [isLoading, visibleFilms, sortedFilms.length])

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Showing {Math.min(visibleFilms, sortedFilms.length)} of {sortedFilms.length} films
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by:</span>
            <Button
              variant={sortBy === "latest" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("latest")}
              className="rounded-full"
            >
              <Calendar className="h-3 w-3 mr-1" /> Latest
            </Button>
            <Button
              variant={sortBy === "rating" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("rating")}
              className="rounded-full"
            >
              <Star className="h-3 w-3 mr-1" /> Rating
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {sortedFilms.slice(0, visibleFilms).map((film, index) => (
            <div
              key={film.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredFilm(film.id)}
              onMouseLeave={() => setHoveredFilm(null)}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/40 h-full flex flex-col group-hover:scale-[1.02] transform-gpu">
                <div className="relative">
                  <div className="aspect-[2/3] relative overflow-hidden">
                    <Image
                      src={film.image || "/placeholder.svg"}
                      alt={film.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm flex items-center z-10">
                      <Star className="h-3 w-3 mr-1 text-yellow-400 fill-yellow-400" />
                      {film.rating}
                    </div>

                    {/* Hover overlay with actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                      <div className="p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex justify-between items-center mb-3">
                          <Button
                            size="sm"
                            variant="ghost"
                            className={`text-white hover:text-white hover:bg-white/20 rounded-full ${likedFilms.includes(film.id) ? "text-red-500" : ""}`}
                            onClick={(e) => toggleLike(film.id, e)}
                          >
                            <Heart className={`h-4 w-4 mr-1 ${likedFilms.includes(film.id) ? "fill-red-500" : ""}`} />
                            Watchlist
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-white hover:text-white hover:bg-white/20 rounded-full"
                          >
                            <BarChart4 className="h-4 w-4 mr-1" /> Rate
                          </Button>
                        </div>
                        <Button className="w-full bg-primary/90 hover:bg-primary" asChild>
                          <Link href={`/films/${film.id}`}>
                            <Play className="mr-2 h-4 w-4 fill-white" /> Watch Trailer
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <Link href={`/films/${film.id}`}>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                      {film.title} ({film.year})
                    </h3>
                  </Link>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center cursor-help">
                          <Clock className="h-3 w-3 mr-1" />
                          {film.duration}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Runtime: {film.duration}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center cursor-help">
                          <Star className="h-3 w-3 mr-1 text-yellow-400" />
                          {film.rating}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>IMDb Rating: {film.rating}/10</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center cursor-help">
                          <Film className="h-3 w-3 mr-1" />
                          {film.director.split(" ")[0]}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Director: {film.director}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {film.genre.map((g) => (
                      <Badge key={g} variant="outline" className="text-xs">
                        {g}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{film.description}</p>

                  <Button className="w-full mt-auto" variant="outline" asChild>
                    <Link href={`/films/${film.id}`}>
                      <Info className="mr-2 h-4 w-4" /> View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleFilms < sortedFilms.length && (
          <div ref={loadMoreRef} className="flex justify-center mt-8">
            <Button
              onClick={loadMoreFilms}
              disabled={isLoading}
              className="rounded-full px-8 bg-primary/90 hover:bg-primary"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Yükleniyor...
                </>
              ) : (
                "Daha Fazla Film Göster"
              )}
            </Button>
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}

