import typescript from "@/public/typescript.png";
import docker from "@/public/docker.png";
import kubernetes from "@/public/icons8-kubernetes-48.png";
import redux from "@/public/redux.png";
import flutter from "@/public/flutter.png";
import next from "@/public/next.png";
import firebase from "@/public/firebase.png";

import microservice from "@/public/microservice.png";
import ecoBin from "@/public/ecobin.png";
import learn from "@/public/learn.png";
import weather from "@/public/weather.jpeg";
import blog from "@/public/blog.png";
import bizzup from "@/public/bizzup.png";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I am currently following Bachelor of Science (Hons) in Informaton Technology Specializing in Software Engineering. My journey in technology started in university, and since then, I've developed a strong interest in creating impactful software applications.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "https://firebasestorage.googleapis.com/v0/b/mern-estate-863d3.appspot.com/o/b1.svg?alt=media&token=568d32a0-70ca-4320-8375-4956cc50ca55",
    spareImg: "",
  },
  // {
  //   id: 2,
  //   title: "I'm from Pannipitiya, Sri Lanka.",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/my.jpg?alt=media&token=327b7d10-900d-40a0-8490-9710de0cbd2a",
  //   spareImg: "",
  // },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-left",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/grid.svg?alt=media&token=2d8ddce6-97bb-43dd-84ae-0dc7064175a9",
    spareImg:
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/b4.svg?alt=media&token=718c1d8f-e549-40b9-b8f8-72938e515a1a",
  },

  {
    id: 5,
    title:
      " I specialize in full-stack web development and have a keen interest in mobile app development.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:max-w-full max-w-60 text-left",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/b5.svg?alt=media&token=e446f57e-fe3d-4cb1-9555-77be3448500b",
    spareImg:
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/grid.svg?alt=media&token=2d8ddce6-97bb-43dd-84ae-0dc7064175a9",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Tap N' Bash - Mobile Game (Kotlin)",
    des: "Tap N' Bash is a digital adaptation of the classic arcadegame 'Whack-a-Mole'.",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/cover%20photo.png?alt=media&token=7de97a41-b286-4938-945b-e0db4953ee37",
    iconLists: [
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/kotlin.svg?alt=media&token=37ec5254-f0ed-48c8-9534-13ea97fbb355",
    ],
    link: "https://github.com/inupaUdara/Kotlin-Tap-N-Bash",
    technologies: ["Kotlin", "Android"],
    category: "Mobile",
    featured: true,
  },
  {
    id: 2,
    title: "Online Gym Management System (MERN)",
    des: "The gym management system for CJ gym offers a comprehensive solution using MERN stack. It manages members, schedules, staff, subscriptions, finances, inventory, supplements, and provides personalized coaching.",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/Screenshot%202024-05-14%20234014.jpg?alt=media&token=8a89bc88-55ae-46cc-8049-5c10f22971fa",
    iconLists: [
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/re.svg?alt=media&token=b1bf2f82-da90-40e9-8c28-259a7dc6b417",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/mongodb.svg?alt=media&token=983593b5-d15d-4672-9a79-d80a32809bcf",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/node-js.svg?alt=media&token=e850d626-f3a5-49f7-a1d8-3638d0eef3fb",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/express.svg?alt=media&token=79ac702e-f829-4365-bf75-a353bcbe0440",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/tail.svg?alt=media&token=232beaed-3e5e-4494-b655-572cd4efe6c4",
    ],
    link: "https://github.com/inupaUdara/gym-management-system",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "TailwindCSS"],
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    title: "Modern Real Estate Marketplace (MERN)",
    des: "Real Estate Marketplace using MERN Stack as my own project with Advanced  Authentication and search functionality.",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/Screenshot%20(1315).png?alt=media&token=2690d43d-085f-4b60-b6e0-09fce4b83b8b",
    iconLists: [
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/re.svg?alt=media&token=b1bf2f82-da90-40e9-8c28-259a7dc6b417",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/mongodb.svg?alt=media&token=983593b5-d15d-4672-9a79-d80a32809bcf",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/node-js.svg?alt=media&token=e850d626-f3a5-49f7-a1d8-3638d0eef3fb",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/express.svg?alt=media&token=79ac702e-f829-4365-bf75-a353bcbe0440",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/tail.svg?alt=media&token=232beaed-3e5e-4494-b655-572cd4efe6c4",
      redux,
    ],
    link: "https://github.com/inupaUdara/mern-real-estate",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Redux", "TailwindCSS"],
    category: "Full Stack",
    featured: true,
  },
  {
    id: 4,
    title: "Online Event Management System (JAVA)",
    des: "Online Event Management System created with JAVA, HTML, CSS, JavaScript, and MySQL. This web application utilizes the MVC architecture and JSP-Servlets for seamless and organized development.",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/Screenshot%20(1225).png?alt=media&token=9b350b3b-65c9-4e3c-b8d0-e92ca14eaa5b",
    iconLists: [
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/java-original.png?alt=media&token=3c7c8325-874e-4df4-97b8-b1042361e8fa",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/html5-plain.png?alt=media&token=9f3df68d-ae4d-4232-ab96-dcfb3562ffa5",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/css3-plain.png?alt=media&token=8ca63499-8471-4448-95a5-b2a672ee7c86",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/mysql-original-wordmark.png?alt=media&token=d1b6339f-ca5f-486c-9b22-2da490644f43",
    ],
    link: "https://github.com/inupaUdara/Event.lk",
    technologies: ["Java", "JavaScript", "HTML", "CSS", "MySQL"],
    category: "Backend",
  },
  {
    id: 5,
    title: "Microservice Food Ordering App (TypeScript)",
    des: "A modern microservice-based food ordering application built with TypeScript, featuring scalable architecture and efficient service communication.",
    img: microservice, // You'll need to add an appropriate image
    iconLists: [
      typescript,
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/re.svg?alt=media&token=b1bf2f82-da90-40e9-8c28-259a7dc6b417",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/mongodb.svg?alt=media&token=983593b5-d15d-4672-9a79-d80a32809bcf",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/express.svg?alt=media&token=79ac702e-f829-4365-bf75-a353bcbe0440",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/node-js.svg?alt=media&token=e850d626-f3a5-49f7-a1d8-3638d0eef3fb",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/tail.svg?alt=media&token=232beaed-3e5e-4494-b655-572cd4efe6c4",
      redux,
      docker,
      kubernetes,
    ],
    link: "https://github.com/inupaUdara/Microservice-Food-Ordering-App",
     technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Express", "Docker", "Kubernetes", "Redux"],
    category: "Full Stack",
    featured: true,
  },
  {
    id: 6,
    title: "Smart Waste Management System (MERN)",
    des: "A comprehensive web application using MERN stack and MaterialUI for efficient waste management and tracking systems.",
    img: ecoBin,
    iconLists: [
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/re.svg?alt=media&token=b1bf2f82-da90-40e9-8c28-259a7dc6b417",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/mongodb.svg?alt=media&token=983593b5-d15d-4672-9a79-d80a32809bcf",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/node-js.svg?alt=media&token=e850d626-f3a5-49f7-a1d8-3638d0eef3fb",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/express.svg?alt=media&token=79ac702e-f829-4365-bf75-a353bcbe0440",
      redux,
    ],
    link: "https://github.com/inupaUdara/Smart-Waste-Management-System",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Redux"],
    category: "Full Stack",
  },
  {
    id: 7,
    title: "Flutter Education App for Visually Impaired (Dart)",
    des: "An inclusive educational application built with Flutter to enhance the learning experience for visually impaired students with accessibility features.",
    img: learn,
    iconLists: [flutter],
    link: "https://github.com/inupaUdara/Flutter-Education-app-SPM",
    technologies: ["Flutter", "Dart"],
    category: "Mobile",
  },
  {
    id: 8,
    // title: "AI SaaS Platform (Next.js)",
    // des: "Comprehensive AI-powered SaaS platform with conversation, image generation, video generation, music generation, and code generation capabilities using Next.js.",
    // img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/ai-saas-placeholder.jpg?alt=media", // You'll need to add an appropriate image
    // iconLists: [
    //   "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/nextjs.svg?alt=media", // You'll need Next.js icon
    //   "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/typescript.svg?alt=media", // You'll need TypeScript icon
    // ],
    // link: "https://github.com/inupaUdara/ai-saas",
    title: "Weather Reports NodeJS App (JavaScript)",
    des: "An automated weather reporting application built with Node.js that provides real-time weather data and forecasts with clean API integration and user-friendly interface.",
    img: weather,
    iconLists: [
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/node-js.svg?alt=media&token=e850d626-f3a5-49f7-a1d8-3638d0eef3fb",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
    ],
    link: "https://github.com/inupaUdara/NodeJS-Weather-Reports-App",
    technologies: ["Node.js", "JavaScript"],
    category: "Backend",
  },
  {
    id: 9,
    title: "MERN Blog Application (JavaScript)",
    des: "A full-featured blog application built with MERN stack and styled with Tailwind CSS, featuring user authentication and content management.",
    img: blog,
    iconLists: [
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/re.svg?alt=media&token=b1bf2f82-da90-40e9-8c28-259a7dc6b417",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/mongodb.svg?alt=media&token=983593b5-d15d-4672-9a79-d80a32809bcf",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/node-js.svg?alt=media&token=e850d626-f3a5-49f7-a1d8-3638d0eef3fb",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/tail.svg?alt=media&token=232beaed-3e5e-4494-b655-572cd4efe6c4",
    ],
    link: "https://github.com/inupaUdara/mern-blog-app",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "TailwindCSS"],
    category: "Full Stack",
  },
  // {
  //   id: 10,
  //   title: "Next.js Prompt Sharing App (JavaScript)",
  //   des: "A prompt sharing application with Google Authentication and CRUD operations built using Next.js React Framework with MongoDB integration.",
  //   img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/prompt-app-placeholder.jpg?alt=media", // You'll need to add an appropriate image
  //   iconLists: [
  //     next,
  //     "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
  //     "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/mongodb.svg?alt=media&token=983593b5-d15d-4672-9a79-d80a32809bcf",
  //   ],
  //   link: "https://github.com/inupaUdara/next.js-prompt-app",
  // },
  // {
  //   id: 11,
  //   title: "React Native Firebase App (JavaScript)",
  //   des: "A cross-platform mobile application built with React Native and integrated with Firebase for real-time data management and authentication.",
  //   img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/react-native-placeholder.jpg?alt=media", // You'll need to add an appropriate image
  //   iconLists: [
  //     "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/re.svg?alt=media&token=b1bf2f82-da90-40e9-8c28-259a7dc6b417",
  //     "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
  //     firebase,
  //   ],
  //   link: "https://github.com/inupaUdara/React-Native-App",
  // },
  {
    id: 12,
    title: "BizzSup - Customer Support System (PHP)",
    des: "A comprehensive online customer support system built with PHP, providing efficient ticket management and customer service solutions.",
    img: bizzup,
    iconLists: [
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/php-plain.png?alt=media&token=0c1b5b59-476f-42c1-b8f5-562da17aa298",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/mysql-original-wordmark.png?alt=media&token=d1b6339f-ca5f-486c-9b22-2da490644f43",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/html5-plain.png?alt=media&token=9f3df68d-ae4d-4232-ab96-dcfb3562ffa5",
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/css3-plain.png?alt=media&token=8ca63499-8471-4448-95a5-b2a672ee7c86",
    ],
    link: "https://github.com/inupaUdara/BizzSup",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    category: "Backend",
  },
];

export interface Skill {
  id: number;
  name: string;
  img: any;
  proficiency?: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
  color: string;
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    skills: [
      {
        id: 1,
        name: "Java",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/java-original.png?alt=media&token=3c7c8325-874e-4df4-97b8-b1042361e8fa",
        proficiency: 85,
      },
      {
        id: 2,
        name: "JavaScript",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/javascript.png?alt=media&token=97c65889-e784-4134-beb3-abfa344809b3",
        proficiency: 90,
      },

      {
        id: 16,
        name: "TypeScript",
        img: typescript,
        proficiency: 80,
      },

      {
        id: 3,
        name: "Python",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/python-original.png?alt=media&token=58427116-9267-464a-94b1-a18ef37a05cc",
        proficiency: 80,
      },
      {
        id: 4,
        name: "Kotlin",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/kotlin.svg?alt=media&token=37ec5254-f0ed-48c8-9534-13ea97fbb355",
        proficiency: 75,
      },
      {
        id: 13,
        name: "PHP",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/php-plain.png?alt=media&token=0c1b5b59-476f-42c1-b8f5-562da17aa298",
        proficiency: 70,
      },
    ],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        id: 5,
        name: "HTML",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/html5-plain.png?alt=media&token=9f3df68d-ae4d-4232-ab96-dcfb3562ffa5",
        proficiency: 95,
      },
      {
        id: 6,
        name: "CSS",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/css3-plain.png?alt=media&token=8ca63499-8471-4448-95a5-b2a672ee7c86",
        proficiency: 90,
      },
      {
        id: 9,
        name: "React",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/re.svg?alt=media&token=b1bf2f82-da90-40e9-8c28-259a7dc6b417",
        proficiency: 85,
      },
      {
        id: 8,
        name: "TailwindCSS",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/tail.svg?alt=media&token=232beaed-3e5e-4494-b655-572cd4efe6c4",
        proficiency: 88,
      },
      {
        id: 20,
        name: "Next.js",
        img: next,
        proficiency: 80,
      },
      {
        id: 21,
        name: "React Native",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/re.svg?alt=media&token=b1bf2f82-da90-40e9-8c28-259a7dc6b417",
        proficiency: 75,
      },
      {
        id: 22,
        name: "Flutter",
        img: flutter,
        proficiency: 70,
      },
      {
        id: 23,
        name: "Redux",
        img: redux,
        proficiency: 75,
      },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    skills: [
      {
        id: 12,
        name: "Node.js",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/node-js.svg?alt=media&token=e850d626-f3a5-49f7-a1d8-3638d0eef3fb",
        proficiency: 82,
      },
      {
        id: 11,
        name: "Express",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/express.svg?alt=media&token=79ac702e-f829-4365-bf75-a353bcbe0440",
        proficiency: 80,
      },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "from-orange-500 to-red-500",
    skills: [
      {
        id: 7,
        name: "MySQL",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/mysql-original-wordmark.png?alt=media&token=d1b6339f-ca5f-486c-9b22-2da490644f43",
        proficiency: 85,
      },
      {
        id: 10,
        name: "MongoDB",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/mongodb.svg?alt=media&token=983593b5-d15d-4672-9a79-d80a32809bcf",
        proficiency: 78,
      },
      {
        id: 24,
        name: "Firebase",
        img: firebase,
        proficiency: 75,
      },
    ],
  },
  {
    title: "Tools & Design",
    icon: "🛠️",
    color: "from-indigo-500 to-purple-500",
    skills: [
      {
        id: 14,
        name: "Git",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/git-plain.png?alt=media&token=c97a31fd-1cb3-4b1c-8a24-67b6d751a2fb",
        proficiency: 88,
      },
      {
        id: 15,
        name: "Figma",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/figma-original.png?alt=media&token=922da01d-2225-42d0-880e-b8f183ce377a",
        proficiency: 82,
      },
      {
        id: 16,
        name: "Photoshop",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/photoshop-plain.png?alt=media&token=0714f9ca-fdb6-4ffa-9521-e6255714cbae",
        proficiency: 75,
      },
      {
        id: 17,
        name: "Illustrator",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/illustrator-plain.png?alt=media&token=9810befc-f3ab-4d72-a6e4-a9c34b5f485f",
        proficiency: 70,
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    color: "from-cyan-500 to-blue-500",
    skills: [
      {
        id: 18,
        name: "Docker",
        img: docker,
        proficiency: 75,
      },
      {
        id: 19,
        name: "Kubernetes",
        img: kubernetes,
        proficiency: 70,
      },
    ],
  },
];

export const education = [
  {
    id: 1,
    title: "Sri Lanka Institute of Information Technology (SLIIT)",
    desc: "BSc (Hons) in Information Technology Specializing in Software Engineering | Current GPA - 3.52 | Year 4",
    className: "md:col-span-2",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/SLIIT_Logo_Crest.png?alt=media&token=c9e59f49-361e-4421-93a9-b435735d9b22",
  },
  {
    id: 2,
    title: "Mahinda Rajapaksha College, Homagama, Sri Lanka",
    desc: "Primary and Secondary Education",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/Background1.png?alt=media&token=917f0b74-04f5-42e5-808d-b26728d001f1",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/git.svg?alt=media&token=9fb83111-7708-4e6b-8324-015583f63cc9",
    link: "https://github.com/inupaUdara",
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/instagram-logo%20(1).png?alt=media&token=d18878a9-5d38-4861-9764-fd9f295960d9",
    link: "https://www.instagram.com/_.inupa._",
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/portfolie-a0b41.appspot.com/o/link.svg?alt=media&token=62208b2c-f843-4de0-9089-3fee10d38f3b",
    link: "https://www.linkedin.com/in/inupaudara",
  },
];
