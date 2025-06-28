"use client"

import { useState, useCallback, useMemo } from "react"
import { skillsData } from "@/data"
import { ChevronDown, Star } from "lucide-react"
import Image from "next/image"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const toggleCategory = useCallback((categoryTitle: string) => {
    setActiveCategory((prev) => (prev === categoryTitle ? null : categoryTitle))
  }, [])

  const getProficiencyColor = useCallback((proficiency: number) => {
    if (proficiency >= 85) return "green-400"
    if (proficiency >= 75) return "yellow-400"
    return "orange-400"
  }, [])

  const getProficiencyLabel = useCallback((proficiency: number) => {
    if (proficiency >= 85) return "Expert"
    if (proficiency >= 75) return "Advanced"
    return "Intermediate"
  }, [])

  const skillsStats = useMemo(() => {
    const totalSkills = skillsData.reduce((total, category) => total + category.skills.length, 0)
    const expertSkills = skillsData.reduce(
      (total, category) => total + category.skills.filter((skill) => (skill.proficiency || 0) >= 85).length,
      0,
    )
    const advancedSkills = skillsData.reduce(
      (total, category) =>
        total +
        category.skills.filter((skill) => (skill.proficiency || 0) >= 75 && (skill.proficiency || 0) < 85).length,
      0,
    )
    return { totalSkills, expertSkills, advancedSkills }
  }, [])

  return (
    <section className="py-20 px-4 bg-black" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-6">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl transition-transform duration-200 hover:scale-105`}
                  >
                    {category.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.skills.length} skills</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    activeCategory === category.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Skills Grid */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeCategory === category.title ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.id}
                        className="group relative bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10 skill-card"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                            <Image
                              src={skill.img || "/placeholder.svg"}
                              alt={skill.name}
                              width={24}
                              height={24}
                              className="w-6 h-6 object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium">{skill.name}</h4>
                            <div className="flex items-center gap-1">
                              <Star className={`w-3 h-3 text-${getProficiencyColor(skill.proficiency || 0)}`} />
                              <span className={`text-xs text-${getProficiencyColor(skill.proficiency || 0)}`}>
                                {getProficiencyLabel(skill.proficiency || 0)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Proficiency Bar */}
                        <div className="relative">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-green-400 proficiency-bar transition-all duration-1000 ease-out`}
                              style={{
                                width: activeCategory === category.title ? `${skill.proficiency || 0}%` : "0%",
                                transitionDelay: `${skillIndex * 100}ms`,
                              }}
                            />
                          </div>
                          <span className="absolute -top-6 right-0 text-xs text-gray-400">{skill.proficiency}%</span>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl pointer-events-none transition-all duration-200" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors duration-200">
              <div className="text-2xl font-bold text-white mb-1">{skillsStats.totalSkills}</div>
              <div className="text-gray-400 text-sm">Total Skills</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors duration-200">
              <div className="text-2xl font-bold text-green-400 mb-1">{skillsStats.expertSkills}</div>
              <div className="text-gray-400 text-sm">Expert Level</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors duration-200">
              <div className="text-2xl font-bold text-yellow-400 mb-1">{skillsStats.advancedSkills}</div>
              <div className="text-gray-400 text-sm">Advanced</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors duration-200">
              <div className="text-2xl font-bold text-purple-400 mb-1">5</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
