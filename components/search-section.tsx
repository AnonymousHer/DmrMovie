"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"

export function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [year, setYear] = useState("")
  const [rating, setRating] = useState([5])
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching with:", { searchTerm, category, year, rating })
    // In a real app, this would trigger a search request
  }

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search films..."
          className="pl-10 pr-10 rounded-full border-primary/20 focus-visible:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1 h-8 w-8 text-muted-foreground hover:text-primary"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4" />
          <span className="sr-only">Toggle filters</span>
        </Button>
      </div>

      <div
        className={`space-y-4 transition-all duration-300 ${showFilters ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger className="text-sm font-medium py-2">Categories</AccordionTrigger>
            <AccordionContent>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full rounded-lg">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="action">Action</SelectItem>
                  <SelectItem value="comedy">Comedy</SelectItem>
                  <SelectItem value="drama">Drama</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                  <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                  <SelectItem value="thriller">Thriller</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="documentary">Documentary</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="year">
            <AccordionTrigger className="text-sm font-medium py-2">Year</AccordionTrigger>
            <AccordionContent>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="w-full rounded-lg">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2017">2017</SelectItem>
                  <SelectItem value="2016">2016</SelectItem>
                  <SelectItem value="2015">2015</SelectItem>
                  <SelectItem value="2014">2014</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rating">
            <AccordionTrigger className="text-sm font-medium py-2">IMDb Rating</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Min Rating: {rating[0]}</span>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{rating[0]}+</span>
                  </div>
                </div>
                <Slider
                  defaultValue={[5]}
                  max={10}
                  min={1}
                  step={0.5}
                  value={rating}
                  onValueChange={setRating}
                  className="py-2"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Button type="submit" className="w-full rounded-full">
        <Search className="mr-2 h-4 w-4" /> Search
      </Button>
    </form>
  )
}

function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

