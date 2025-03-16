"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  Film,
  Users,
  FileText,
  MessageSquare,
  Settings,
  PlusCircle,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample films data for admin
const films = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    status: "published",
    added: "2025-01-15",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    status: "published",
    added: "2025-01-20",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    status: "published",
    added: "2025-01-25",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    status: "published",
    added: "2025-02-01",
  },
  {
    id: 5,
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    status: "published",
    added: "2025-02-05",
  },
  {
    id: 6,
    title: "Upcoming Blockbuster",
    year: 2025,
    director: "Famous Director",
    status: "draft",
    added: "2025-03-10",
  },
]

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFilms = films.filter(
    (film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      film.director.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-card border-r">
        <div className="p-6">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <Link
            href="/admin"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md bg-primary/10 text-primary"
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/admin/films"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Film className="mr-3 h-5 w-5" />
            Films
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Users className="mr-3 h-5 w-5" />
            Users
          </Link>
          <Link
            href="/admin/news"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <FileText className="mr-3 h-5 w-5" />
            News
          </Link>
          <Link
            href="/admin/forum"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <MessageSquare className="mr-3 h-5 w-5" />
            Forum
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="bg-background border-b">
          <div className="px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                View Site
              </Button>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-card rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <Film className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Films</p>
                  <h3 className="text-2xl font-bold">256</h3>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Registered Users</p>
                  <h3 className="text-2xl font-bold">1,245</h3>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">News Articles</p>
                  <h3 className="text-2xl font-bold">78</h3>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Forum Topics</p>
                  <h3 className="text-2xl font-bold">699</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Films management */}
          <div className="bg-card rounded-lg shadow mb-8">
            <div className="p-6 border-b">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-xl font-bold">Films Management</h2>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search films..."
                      className="pl-9 w-full sm:w-[250px]"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Film
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Director</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Added</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFilms.map((film) => (
                    <TableRow key={film.id}>
                      <TableCell className="font-medium">{film.title}</TableCell>
                      <TableCell>{film.year}</TableCell>
                      <TableCell>{film.director}</TableCell>
                      <TableCell>
                        <Badge variant={film.status === "published" ? "default" : "secondary"}>{film.status}</Badge>
                      </TableCell>
                      <TableCell>{new Date(film.added).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="p-4 border-t text-center">
              <Button variant="outline" size="sm">
                View All Films
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

