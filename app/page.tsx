import AskMeSection from "@/components/AskMe";
import Education from "@/components/Education";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-stone-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Experience />
        <Education />
        <Skills />
        <RecentProjects />
        <AskMeSection />
        <Footer />
      </div>
    </main>
  );
}
