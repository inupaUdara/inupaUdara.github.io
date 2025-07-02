import React from 'react'
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestmonials";

const Grid = () => {
  const testimonials = [
    {
      quote:
        "I am currently following Bachelor of Science (Hons) in Informaton Technology Specializing in Software Engineering. My journey in technology started in university, and since then, I've developed a strong interest in creating impactful software applications.",
      name: "Inupa Udara",
      designation: "Undergraduate @ SLIIT | Intern Software Engineer @ SparQ Corporate",
      src: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/my.jpg?alt=media&token=327b7d10-900d-40a0-8490-9710de0cbd2a",
    },
    {
      quote:
        "Tech enthusiast with a passion for development.",
      name: "",
      designation: "",
      src: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/DALL%C2%B7E%202024-11-20%2019.41.01%20-%20A%20symbolic%20representation%20of%20a%20young%20software%20engineer%20who%20is%20also%20a%20creative%20UX%20designer%2C%20sitting%20at%20a%20sleek%20desk%20in%20a%20modern%20workspace.%20The%20workspac.webp?alt=media&token=31b24dd4-60fc-459a-b233-12defb1450e7",
    },
  ];
  return (
    <section id='about'>
       <AnimatedTestimonials testimonials={testimonials} />
    </section>

  )
}

export default Grid