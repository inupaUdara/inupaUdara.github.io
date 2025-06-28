import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton  from "./ui/MagicButton"
import { SparklesCore } from "./ui/Sparkles"
import { ArrowDown, MapPin, Code, Briefcase } from "lucide-react"

const Hero = () => {
  const roles = ["Software Engineer", "Full Stack Developer", "Problem Solver"]

  return (
    <div className="pb-20 pt-20 sm:h-screen w-full relative flex items-center justify-center">
      {/* Spotlight Effects */}
      <div className="absolute inset-0">
        <Spotlight className="-top-40 -left-10 md:-top-32 md:-left-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 md:-top-32 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 h-full w-full bg-grid-white/[0.02] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center " />
      </div>

      {/* Floating Code Tags */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-20 text-purple-400 text-sm font-mono animate-pulse">
          {"<developer/>"}
        </div>
        <div className="absolute top-40 right-20 opacity-15 text-blue-400 text-sm font-mono animate-pulse delay-1000">
          {"<creative/>"}
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 text-cyan-400 text-sm font-mono animate-pulse delay-2000">
          {"<innovative/>"}
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 text-green-400 text-sm font-mono animate-pulse delay-3000">
          {"<passionate/>"}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Name with Sparkles */}
          <div className="relative">
            <div className="h-[8rem] w-full flex flex-col items-center justify-center overflow-hidden">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white relative z-20 mb-4">Inupa Udara</h1>

              {/* Enhanced Gradient Lines */}
              <div className="w-full max-w-md h-8 relative">
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-full" />
                <div className="absolute inset-x-10 top-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[3px] w-4/5 blur-sm" />
                <div className="absolute inset-x-10 top-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-4/5" />

                {/* Sparkles */}
                <SparklesCore
                  background="transparent"
                  minSize={0.3}
                  maxSize={1.2}
                  particleDensity={300}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(300px_150px_at_center,transparent_20%,white)]" />
              </div>
            </div>
          </div>

          {/* Role Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {roles.map((role, index) => (
              <span
                key={role}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm text-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect
              className="text-center text-lg md:text-lg lg:text-xl text-gray-300 leading-relaxed"
              words="Currently Software Engineering Intern at SparQ Corporate, passionate about creating innovative solutions and building exceptional digital experiences."
            />
          </div>

          {/* Stats/Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-white/80">Sri Lanka</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/80">SparQ Corporate</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <Code className="w-4 h-4 text-green-400" />
              <span className="text-sm text-white/80">SLIIT Student</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <a href="#about" className="inline-block">
              <MagicButton
                title="Explore My Work"
                icon={<ArrowDown className="w-4 h-4" />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default Hero
