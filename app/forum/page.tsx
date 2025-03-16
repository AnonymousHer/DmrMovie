"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageSquare, Users, Clock, PlusCircle, Search, ChevronRight, Pin, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample forum data
const forumCategories = [
  { id: 1, name: "General Discussion", topics: 156, posts: 1243 },
  { id: 2, name: "Film Reviews", topics: 324, posts: 2891 },
  { id: 3, name: "Actor Discussions", topics: 98, posts: 876 },
  { id: 4, name: "Industry News", topics: 76, posts: 542 },
  { id: 5, name: "Technical Discussions", topics: 45, posts: 321 },
]

const recentTopics = [
  {
    id: 1,
    title: "What's your favorite Christopher Nolan film?",
    category: "General Discussion",
    author: { name: "MovieBuff", avatar: "/placeholder.svg" },
    replies: 28,
    views: 342,
    lastReply: { time: "2 hours ago", user: "FilmFan22" },
    isPinned: true,
  },
  {
    id: 2,
    title: "The Godfather vs. Goodfellas - Which is the better gangster film?",
    category: "Film Reviews",
    author: { name: "CinematicArt", avatar: "/placeholder.svg" },
    replies: 45,
    views: 512,
    lastReply: { time: "5 hours ago", user: "ClassicFilmLover" },
    isPinned: false,
  },
  {
    id: 3,
    title: "Upcoming Marvel releases - What are you most excited for?",
    category: "Industry News",
    author: { name: "SuperheroFan", avatar: "/placeholder.svg" },
    replies: 67,
    views: 890,
    lastReply: { time: "1 day ago", user: "MarvelMaster" },
    isPinned: false,
  },
  {
    id: 4,
    title: "Leonardo DiCaprio's best performances ranked",
    category: "Actor Discussions",
    author: { name: "OscarWatcher", avatar: "/placeholder.svg" },
    replies: 36,
    views: 421,
    lastReply: { time: "2 days ago", user: "ActingCritic" },
    isPinned: false,
  },
  {
    id: 5,
    title: "The rise of streaming platforms - Good or bad for cinema?",
    category: "Industry News",
    author: { name: "FilmIndustryPro", avatar: "/placeholder.svg" },
    replies: 52,
    views: 678,
    lastReply: { time: "3 days ago", user: "StreamingFan" },
    isPinned: false,
  },
]

export default function ForumPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Forum</h1>
          <p className="text-muted-foreground">Join discussions about your favorite films, actors, and cinema topics</p>
        </div>
        <Button asChild>
          <Link href="/forum/new-topic">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Topic
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Search and sort */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search topics..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="replies">Most Replies</SelectItem>
                <SelectItem value="views">Most Views</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Topics list */}
          <div className="bg-card rounded-lg shadow overflow-hidden">
            <div className="p-4 bg-muted font-medium flex items-center">
              <div className="flex-1">Topic</div>
              <div className="hidden md:block w-24 text-center">Replies</div>
              <div className="hidden md:block w-24 text-center">Views</div>
              <div className="w-32 text-right">Last Reply</div>
            </div>
            <div className="divide-y">
              {recentTopics.map((topic) => (
                <div key={topic.id} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <Avatar className="hidden sm:flex h-10 w-10">
                      <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
                      <AvatarFallback>{topic.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {topic.isPinned && (
                          <Badge variant="outline" className="text-xs py-0 px-1">
                            <Pin className="h-3 w-3 mr-1" />
                            Pinned
                          </Badge>
                        )}
                        <Badge variant="secondary" className="text-xs">
                          {topic.category}
                        </Badge>
                      </div>
                      <Link
                        href={`/forum/topic/${topic.id}`}
                        className="font-medium hover:text-primary transition-colors line-clamp-1"
                      >
                        {topic.title}
                      </Link>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <span>By {topic.author.name}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          Started {topic.lastReply.time}
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col items-center justify-center w-24">
                      <span className="font-medium">{topic.replies}</span>
                      <span className="text-xs text-muted-foreground">Replies</span>
                    </div>
                    <div className="hidden md:flex flex-col items-center justify-center w-24">
                      <span className="font-medium">{topic.views}</span>
                      <span className="text-xs text-muted-foreground">Views</span>
                    </div>
                    <div className="flex flex-col items-end justify-center w-32 text-right">
                      <span className="text-xs text-muted-foreground">{topic.lastReply.time}</span>
                      <span className="text-xs">by {topic.lastReply.user}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div className="bg-card rounded-lg shadow overflow-hidden">
            <div className="p-4 bg-muted font-medium">Forum Categories</div>
            <div className="divide-y">
              {forumCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/forum/category/${category.id}`}
                  className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <h3 className="font-medium">{category.name}</h3>
                    <div className="text-xs text-muted-foreground mt-1">
                      {category.topics} topics • {category.posts} posts
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* Forum stats */}
          <div className="bg-card rounded-lg shadow overflow-hidden">
            <div className="p-4 bg-muted font-medium">Forum Statistics</div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Total Topics
                </div>
                <span className="font-medium">699</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Total Posts
                </div>
                <span className="font-medium">5,873</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  Members
                </div>
                <span className="font-medium">1,245</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground">
                  <Eye className="h-4 w-4 mr-2" />
                  Online Now
                </div>
                <span className="font-medium">42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

