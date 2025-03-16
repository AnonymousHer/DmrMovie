import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "action", name: "Action", count: 142, color: "bg-red-500/10 text-red-500 hover:bg-red-500/20" },
  { id: "comedy", name: "Comedy", count: 118, color: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20" },
  { id: "drama", name: "Drama", count: 327, color: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20" },
  { id: "horror", name: "Horror", count: 89, color: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20" },
  { id: "sci-fi", name: "Sci-Fi", count: 76, color: "bg-green-500/10 text-green-500 hover:bg-green-500/20" },
  { id: "thriller", name: "Thriller", count: 112, color: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20" },
  { id: "romance", name: "Romance", count: 85, color: "bg-pink-500/10 text-pink-500 hover:bg-pink-500/20" },
  { id: "documentary", name: "Documentary", count: 64, color: "bg-teal-500/10 text-teal-500 hover:bg-teal-500/20" },
  { id: "animation", name: "Animation", count: 53, color: "bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20" },
]

const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]

export function CategorySection() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-3">Türler</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <Badge
                variant="outline"
                className={`${category.color} border-0 transition-all duration-300 hover:scale-105`}
              >
                {category.name} <span className="ml-1 opacity-70">({category.count})</span>
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">Yıllar</h4>
        <div className="grid grid-cols-3 gap-2">
          {years.map((year) => (
            <Link
              key={year}
              href={`/year/${year}`}
              className="bg-muted/50 hover:bg-muted rounded-md px-3 py-1.5 text-center text-sm transition-colors hover:text-primary"
            >
              {year}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">IMDb Puanı</h4>
        <div className="space-y-2">
          <Link
            href="/rating/9+"
            className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors group"
          >
            <div className="flex items-center">
              <div className="text-yellow-400 mr-2">★★★★★</div>
              <span className="group-hover:text-primary transition-colors">9+ Puan</span>
            </div>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">42</span>
          </Link>
          <Link
            href="/rating/8+"
            className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors group"
          >
            <div className="flex items-center">
              <div className="text-yellow-400 mr-2">★★★★☆</div>
              <span className="group-hover:text-primary transition-colors">8+ Puan</span>
            </div>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">128</span>
          </Link>
          <Link
            href="/rating/7+"
            className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors group"
          >
            <div className="flex items-center">
              <div className="text-yellow-400 mr-2">★★★☆☆</div>
              <span className="group-hover:text-primary transition-colors">7+ Puan</span>
            </div>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">215</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

