"use client"

import Image from "next/image"
import Link from "next/link"

const actors = [
  {
    id: 1,
    name: "Leonardo DiCaprio",
    image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_.jpg",
    knownFor: "Inception",
  },
  {
    id: 2,
    name: "Meryl Streep",
    image: "https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_.jpg",
    knownFor: "The Devil Wears Prada",
  },
  {
    id: 3,
    name: "Denzel Washington",
    image: "https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_.jpg",
    knownFor: "Training Day",
  },
  {
    id: 4,
    name: "Viola Davis",
    image: "https://m.media-amazon.com/images/M/MV5BNzUxNjM4ODI1OV5BMl5BanBnXkFtZTgwNTEwNDE2OTE@._V1_.jpg",
    knownFor: "Fences",
  },
  {
    id: 5,
    name: "Tom Hanks",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg",
    knownFor: "Forrest Gump",
  },
  {
    id: 6,
    name: "Cate Blanchett",
    image: "https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_.jpg",
    knownFor: "Blue Jasmine",
  },
]

export function TrendingActors() {
  return (
    <div className="space-y-4">
      {actors.map((actor, index) => (
        <Link
          key={actor.id}
          href={`/actors/${actor.id}`}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
            <Image
              src={actor.image || "/placeholder.svg"}
              alt={actor.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="48px"
            />
          </div>
          <div>
            <h4 className="font-medium group-hover:text-primary transition-colors">{actor.name}</h4>
            <p className="text-xs text-muted-foreground">{actor.knownFor}</p>
          </div>
        </Link>
      ))}
      <div className="pt-2 text-center">
        <Link
          href="/actors"
          className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center group"
        >
          View All Actors
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

