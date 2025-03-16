"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, Play, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Gerçek film verileri ve görselleri
const popularFilms = [
  {
    id: 1,
    title: "Inception",
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    backdrop: "https://wallpapercave.com/wp/wp1816326.jpg",
    year: 2010,
    rating: 8.8,
    genre: ["Sci-Fi", "Action", "Thriller"],
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    backdrop: "https://wallpapercave.com/wp/wp2007628.jpg",
    year: 1994,
    rating: 9.3,
    genre: ["Drama", "Crime"],
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    backdrop: "https://wallpapercave.com/wp/wp2162756.jpg",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdrop: "https://wallpapercave.com/wp/wp1816382.jpg",
    year: 1994,
    rating: 8.9,
    genre: ["Crime", "Drama"],
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: 5,
    title: "Fight Club",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdrop: "https://wallpapercave.com/wp/wp2561172.jpg",
    year: 1999,
    rating: 8.8,
    genre: ["Drama", "Thriller"],
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
  },
  {
    id: 6,
    title: "Interstellar",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    backdrop: "https://wallpapercave.com/wp/wp1814913.jpg",
    year: 2014,
    rating: 8.6,
    genre: ["Sci-Fi", "Adventure", "Drama"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 7,
    title: "The Matrix",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    backdrop: "https://wallpapercave.com/wp/wp2160915.jpg",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    id: 8,
    title: "Parasite",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    backdrop: "https://wallpapercave.com/wp/wp5294642.jpg",
    year: 2019,
    rating: 8.5,
    genre: ["Thriller", "Drama", "Comedy"],
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
  },
  {
    id: 9,
    title: "Joker",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    backdrop: "https://wallpapercave.com/wp/wp4636858.jpg",
    year: 2019,
    rating: 8.4,
    genre: ["Crime", "Drama", "Thriller"],
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
  },
]

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [direction, setDirection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-slide functionality with reset on interaction
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()

    if (!isHovering) {
      timeoutRef.current = setTimeout(() => {
        setDirection(1)
        changeSlide((currentIndex + 1) % popularFilms.length)
      }, 6000)
    }

    return () => {
      resetTimeout()
    }
  }, [currentIndex, isHovering])

  const changeSlide = (index: number) => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const goToPrevious = () => {
    resetTimeout()
    setDirection(-1)
    changeSlide(currentIndex === 0 ? popularFilms.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    resetTimeout()
    setDirection(1)
    changeSlide((currentIndex + 1) % popularFilms.length)
  }

  const goToSlide = (index: number) => {
    resetTimeout()
    setDirection(index > currentIndex ? 1 : -1)
    changeSlide(index)
  }

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        {popularFilms.map((film, index) => (
          <div
            key={film.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            } ${direction > 0 ? "translate-x-0" : "translate-x-0"}`}
            style={{
              transitionDelay: index === currentIndex ? "0ms" : "0ms",
            }}
          >
            <Image
              src={film.backdrop || "/placeholder.svg"}
              alt={film.title}
              fill
              className="object-cover transform scale-[1.01] filter brightness-[0.85]"
              priority={index === currentIndex}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div
                className="max-w-3xl transform transition-all duration-700 ease-out"
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  transform: index === currentIndex ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="flex items-center gap-2 mb-3 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  {film.genre.map((genre, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-primary/20 text-primary hover:bg-primary/30 backdrop-blur-md"
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>

                <Link href={`/films/${film.id}`}>
                  <h3
                    className="text-3xl md:text-5xl font-bold text-white mb-3 hover:text-primary transition-colors animate-fade-in"
                    style={{ animationDelay: "400ms" }}
                  >
                    {film.title}
                  </h3>
                </Link>

                <div
                  className="flex items-center gap-4 text-white/90 mb-4 animate-fade-in"
                  style={{ animationDelay: "500ms" }}
                >
                  <div className="flex items-center">
                    <span>{film.year}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" />
                    <span>{film.rating}</span>
                  </div>
                </div>

                <p
                  className="text-white/80 mb-6 max-w-2xl line-clamp-2 md:line-clamp-3 animate-fade-in"
                  style={{ animationDelay: "600ms" }}
                >
                  {film.description}
                </p>

                <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "700ms" }}>
                  <Button
                    size="lg"
                    className="rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/40"
                  >
                    <Play className="mr-2 h-4 w-4 fill-white" /> Watch Trailer
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <Info className="mr-2 h-4 w-4" /> View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full h-12 w-12 backdrop-blur-sm transition-all duration-300 hover:scale-110"
        onClick={goToPrevious}
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full h-12 w-12 backdrop-blur-sm transition-all duration-300 hover:scale-110"
        onClick={goToNext}
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {popularFilms.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Film poster preview */}
      <div className="absolute right-8 bottom-24 md:bottom-32 hidden md:block">
        <div className="relative h-48 w-32 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 opacity-90 hover:opacity-100">
          <Image
            src={popularFilms[currentIndex].image || "/placeholder.svg"}
            alt={`${popularFilms[currentIndex].title} poster`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  )
}

