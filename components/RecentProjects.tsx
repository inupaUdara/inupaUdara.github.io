"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { projects } from "@/data/index"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import {
  ExternalLink,
  Github,
  Star,
  Code,
  Smartphone,
  Server,
  Layers,
  Globe,
  Search,
  X,
  Zap,
  Eye,
  Heart,
  Sparkles,
} from "lucide-react"
import { Input } from "@/components/ui/Input"
import Image from "next/image"

const RecentProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedTechnology, setSelectedTechnology] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for interactive effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Get unique categories and technologies
  const categories = useMemo(() => {
    const cats = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]
    return cats
  }, [])

  const technologies = useMemo(() => {
    const techs = ["All", ...Array.from(new Set(projects.flatMap((project) => project.technologies)))]
    return techs.sort()
  }, [])

  // Filter projects based on selected filters and search
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
      const technologyMatch = selectedTechnology === "All" || project.technologies.includes(selectedTechnology)
      const searchMatch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.des.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

      return categoryMatch && technologyMatch && searchMatch
    })
  }, [selectedCategory, selectedTechnology, searchQuery])

  // Get category icon and color
  const getCategoryData = (category: string) => {
    switch (category) {
      case "Full Stack":
        return { icon: <Globe className="w-4 h-4" />, color: "from-emerald-500 to-teal-500", bg: "bg-emerald-500/10" }
      case "Mobile":
        return { icon: <Smartphone className="w-4 h-4" />, color: "from-blue-500 to-indigo-500", bg: "bg-blue-500/10" }
      case "Backend":
        return { icon: <Server className="w-4 h-4" />, color: "from-orange-500 to-red-500", bg: "bg-orange-500/10" }
      case "Microservices":
        return { icon: <Layers className="w-4 h-4" />, color: "from-purple-500 to-pink-500", bg: "bg-purple-500/10" }
      default:
        return { icon: <Code className="w-4 h-4" />, color: "from-gray-500 to-gray-600", bg: "bg-gray-500/10" }
    }
  }

  const clearAllFilters = () => {
    setSelectedCategory("All")
    setSelectedTechnology("All")
    setSearchQuery("")
  }

  const toggleLike = (projectId: number) => {
    setLikedProjects((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  const hasActiveFilters = selectedCategory !== "All" || selectedTechnology !== "All" || searchQuery !== ""

  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden" id="projects" ref={containerRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? "#8b5cf6" : "#06b6d4"}, transparent)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}

        {/* Interactive Mouse Trail */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Creative Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
            
          </div>

          <h2 className="heading">
            <span className="inline-block ">
              Small Collection of
            </span>{" "}
            <span
              className="inline-block  text-purple animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              My Projects
            </span>
          </h2>
        </div>

        {/* Creative Search & Controls */}
        <div className="mb-12 space-y-8">
          {/* Futuristic Search */}
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search the projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-4 bg-black/80 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 rounded-2xl backdrop-blur-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Creative Filters */}
          <div className="space-y-6">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const { icon, color, bg } = getCategoryData(category)
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`group relative px-6 py-3 rounded-full transition-all duration-500 ${
                      selectedCategory === category
                        ? `bg-gradient-to-r ${color} text-white shadow-2xl scale-110`
                        : `${bg} text-gray-300 hover:text-white border border-gray-700/50 hover:border-gray-600`
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {category !== "All" && icon}
                      <span className="font-medium">{category}</span>
                    </div>
                    {/* {selectedCategory === category && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-full blur animate-pulse" />
                    )} */}
                  </button>
                )
              })}
            </div>

            {/* Technology Cloud */}
            <div className="flex flex-wrap gap-2 justify-center max-h-32 overflow-y-auto scrollbar-hide">
              {technologies.slice(0, 25).map((tech, index) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTechnology(tech)}
                  className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                    selectedTechnology === tech
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-110"
                      : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/30"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    fontSize: `${0.7 + Math.random() * 0.3}rem`,
                  }}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="text-white font-bold text-lg">{filteredProjects.length}</div>
              <div className="text-gray-400">projects found</div>
              {hasActiveFilters && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm">Filtered</span>
                </div>
              )}
            </div>
            {hasActiveFilters && (
              <Button
                onClick={clearAllFilters}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                <X className="w-4 h-4 mr-2" />
                Reset
              </Button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const { color } = getCategoryData(project.category)
            const isLiked = likedProjects.has(project.id)

            return (
              <div
                key={project.id}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card
                  className={`
                  relative overflow-hidden transition-all duration-700 hover:scale-105
                  bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-gray-900/90
                  border-gray-700/50 hover:border-purple-500/50
                  backdrop-blur-sm h-full
                  ${hoveredProject === project.id ? "shadow-2xl shadow-purple-500/25 z-10" : ""}
                `}
                >
                  {/* Magical Glow Effect */}
                  <div
                    className={`
                    absolute -inset-1 bg-gradient-to-r ${color} rounded-2xl blur opacity-0 
                    group-hover:opacity-30 transition-opacity duration-700
                  `}
                  />

                  <CardContent className="relative p-0 h-full flex flex-col">
                    {/* Project Image with Creative Overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.img || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />

                      {/* Creative Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      {/* Floating Elements */}
                     

                      <div className="absolute top-4 right-4">
                        <Badge className={`bg-gradient-to-r ${color} text-white border-0 shadow-lg`}>
                          {getCategoryData(project.category).icon}
                          <span className="ml-1">{project.category}</span>
                        </Badge>
                      </div>
                     
                      {/* Hover Info */}
                      {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="text-center text-white">
                          <Eye className="w-8 h-8 mx-auto mb-2" />
                          <div className="text-sm font-medium">View Project</div>
                        </div>
                      </div> */}
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500 line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 flex-1">
                        {project.des}
                      </p>

                      {/* Tech Stack Visualization */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className="text-xs bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-gray-300 border border-gray-600/50 hover:border-gray-500 transition-all duration-300 backdrop-blur-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge className="text-xs bg-gradient-to-r from-purple-800/50 to-pink-800/50 text-purple-300 border border-purple-600/30">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Floating Tech Icons */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex -space-x-2">
                          {project.iconLists.slice(0, 4).map((icon, iconIndex) => (
                            <div
                              key={iconIndex}
                              className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:z-10 relative"
                              style={{ zIndex: 4 - iconIndex }}
                            >
                              <Image
                                src={icon || "/placeholder.svg"}
                                alt="tech"
                                width={20}
                                height={20}
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className={`bg-gradient-to-r ${color} hover:shadow-lg transition-all duration-300 text-white border-0`}
                            onClick={() => window.open(project.link, "_blank")}
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                          {/* <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent backdrop-blur-sm"
                            onClick={() => window.open(project.link, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button> */}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Creative No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                <Search className="w-12 h-12 text-purple-400" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
            <p className="text-gray-400 mb-8">Try exploring different categories or clearing your filters</p>
            <Button
              onClick={clearAllFilters}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-3"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default RecentProjects
