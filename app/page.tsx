import { Slider } from "@/components/slider"
import { FilmList } from "@/components/film-list"
import { SearchSection } from "@/components/search-section"
import { CategorySection } from "@/components/category-section"
import { NewsPreview } from "@/components/news-preview"
import { TrendingActors } from "@/components/trending-actors"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="sr-only">Interactive Film Website</h1>

        {/* Hero Section with Popular Films Slider */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Trend Filmler
            </h2>
            <ModeToggle />
          </div>
          <Slider />
        </section>

        {/* Main Content Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Left */}
            <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
              {/* Search and Categories */}
              <div className="bg-card rounded-xl p-5 shadow-lg border border-border/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-lg mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </span>
                  Film Ara
                </h3>
                <SearchSection />
              </div>

              <div className="bg-card rounded-xl p-5 shadow-lg border border-border/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-lg mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                      <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                      <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                      <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                    </svg>
                  </span>
                  Kategoriler
                </h3>
                <CategorySection />
              </div>

              {/* News Preview */}
              <div className="bg-card rounded-xl p-5 shadow-lg border border-border/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-lg mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                      <path d="M18 14h-8"></path>
                      <path d="M15 18h-5"></path>
                      <path d="M10 6h8v4h-8V6Z"></path>
                    </svg>
                  </span>
                  Son Haberler
                </h3>
                <NewsPreview />
              </div>
            </div>

            {/* Main Content - Center */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-card rounded-xl p-5 shadow-lg border border-border/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-lg mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M19.5 14c-1.23 0-2.23 1-2.23 2.23v.04c0 1.23 1 2.23 2.23 2.23s2.23-1 2.23-2.23v-.04c0-1.23-1-2.23-2.23-2.23Z"></path>
                      <path d="M2.23 14c1.23 0 2.23 1 2.23 2.23v.04c0 1.23-1 2.23-2.23 2.23S0 17.5 0 16.27v-.04C0 15 1 14 2.23 14Z"></path>
                      <path d="M10.85 14c-1.22 0-2.22 1-2.22 2.23v.04c0 1.23 1 2.23 2.23 2.23 1.22 0 2.22-1 2.22-2.23v-.04c0-1.23-1-2.23-2.23-2.23Z"></path>
                      <path d="M19.5 5.5c-1.23 0-2.23 1-2.23 2.23v.04c0 1.23 1 2.23 2.23 2.23s2.23-1 2.23-2.23v-.04c0-1.23-1-2.23-2.23-2.23Z"></path>
                      <path d="M2.23 5.5c1.23 0 2.23 1 2.23 2.23v.04c0 1.23-1 2.23-2.23 2.23S0 9 0 7.77v-.04c0-1.23 1-2.23 2.23-2.23Z"></path>
                      <path d="M10.85 5.5c-1.22 0-2.22 1-2.22 2.23v.04c0 1.23 1 2.23 2.23 2.23 1.22 0 2.22-1 2.22-2.23v-.04c0-1.23-1-2.23-2.23-2.23Z"></path>
                      <path d="M21.4 16.2v-8.4c0-4.6-3.6-8.2-8-8.2h-2.8c-4.4 0-8 3.6-8 8v.4"></path>
                      <path d="M12 10.2v4"></path>
                      <path d="M12 19.2v-4"></path>
                      <path d="M15.6 10.2c0 1.8-1.4 3.2-3.2 3.2-1.8 0-3.2-1.4-3.2-3.2"></path>
                    </svg>
                  </span>
                  Tüm Filmler
                </h2>
                <FilmList />
              </div>
            </div>

            {/* Sidebar - Right */}
            <div className="lg:col-span-1 space-y-6 order-3">
              {/* Trending Actors */}
              <div className="bg-card rounded-xl p-5 shadow-lg border border-border/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-lg mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </span>
                  Popüler Oyuncular
                </h3>
                <TrendingActors />
              </div>

              {/* Coming Soon */}
              <div className="bg-card rounded-xl p-5 shadow-lg border border-border/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-lg mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <line x1="3" x2="21" y1="9" y2="9"></line>
                      <line x1="9" x2="9" y1="21" y2="9"></line>
                      <line x1="15" x2="15" y1="21" y2="9"></line>
                    </svg>
                  </span>
                  Yakında Vizyonda
                </h3>
                <div className="space-y-4">
                  <div className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-[2/3] bg-muted relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BYTdiZGY4MzItZTAzMi00YmI0LTk3MzYtZTQ0YzUzZDE2NjcyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
                        alt="Coming Soon Film"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                        <h4 className="font-medium text-white">Gladyatör 2</h4>
                        <p className="text-xs text-white/80">Mayıs 2025'te Vizyonda</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <a
                      href="/coming-soon"
                      className="text-sm font-medium text-primary hover:underline group inline-flex items-center"
                    >
                      Tüm Yaklaşan Filmleri Görüntüle
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

