import Link from "next/link"
import { CalendarDays, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const newsItems = [
  {
    id: 1,
    title: "Yeni Süper Kahraman Filmi Gişe Rekorları Kırıyor",
    date: "2025-03-15",
    category: "Gişe",
    color: "bg-green-500/10 text-green-500",
  },
  {
    id: 2,
    title: "Ödüllü Yönetmen Yeni Projesi Hakkında Bilgi Verdi",
    date: "2025-03-12",
    category: "Endüstri",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: 3,
    title: "Kamera Arkası: 'Epik Macera' Filminin Yapımı",
    date: "2025-03-10",
    category: "Yapım",
    color: "bg-purple-500/10 text-purple-500",
  },
]

export function NewsPreview() {
  return (
    <div className="space-y-4">
      {newsItems.map((item, index) => (
        <article key={item.id} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <Link href={`/news/${item.id}`} className="block">
            <Badge variant="outline" className={`mb-2 ${item.color} border-0`}>
              {item.category}
            </Badge>
            <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">{item.title}</h4>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <CalendarDays className="h-3 w-3 mr-1" />
              {new Date(item.date).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          </Link>
        </article>
      ))}
      <div className="pt-2">
        <Link
          href="/news"
          className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center group"
        >
          Tüm Haberleri Görüntüle
          <ArrowRight className="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

