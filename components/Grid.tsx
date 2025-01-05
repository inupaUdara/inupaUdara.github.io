import React from 'react'
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestmonials";
import { gridItems } from '@/data'

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
    // {
    //   quote:
    //     "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    //   name: "Emily Watson",
    //   designation: "Operations Director at CloudScale",
    //   src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return (
    <section id='about'>
       <AnimatedTestimonials testimonials={testimonials} />
    </section>

  )
}

export default Grid