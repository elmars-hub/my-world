export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  medium: string;
  email: string;
  google: string;
}

export interface PersonalInfo {
  name: string;
  userName: string;
  role: string;
  location: string;
  bio: string;
  socials: SocialLinks;
  phone: string;
}

export interface Project {
  name: string;
  description: string;
  liveLink: string;
  githubLink: string;
  techStack: string[];
  image?: string;
  featured?: boolean;
}

export const personalInfo: PersonalInfo = {
  name: "Martin Ifeanyi",
  userName: "elmars",
  role: "Frontend Developer",
  location: "Lagos, Nigeria",
  phone: "+234 814 749 2547",
  bio: "I'm a passionate Frontend Developer focused on building innovative solutions and contributing to the tech community.",
  socials: {
    github: "https://github.com/elmars-hub",
    linkedin: "https://www.linkedin.com/in/martin-ifeanyi/",
    twitter: "https://x.com/0xx_eth",
    medium: "https://medium.com/@martinsifeanyi247",
    email: "martinsifeanyi247@gmail.com",
    google:
      "https://docs.google.com/document/d/1EaOVw1kGpLLkcavTQyRHm2VfQN9hevSeU2rumifywEs/edit?usp=sharing",
  },
};

export const projects: Project[] = [
  {
    name: "CareerCraft AI",
    description:
      "CareerCraft is a modern web application designed to help users prepare for interviews through AI-powered practice sessions.",
    liveLink: "https://mock-interview-ai-chi.vercel.app/",
    githubLink: "https://github.com/elmars-hub/mock-interview-ai",
    techStack: [
      "NextJs",
      "Firebase",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Shadcn",
    ],
    featured: true,
  },
  {
    name: "ShopDesk",
    description:
      "ShopDesk is a cloud based inventory management software that helps you track stock, process sales, and generate business records so you can focus on growing your business.",
    liveLink: "https://shopdesk.im",
    githubLink: "",
    techStack: ["NextJs", "TypeScript", "Redux", "Tailwind CSS", "Tanstack"],
    featured: true,
  },
  {
    name: "Gradific",
    description:
      "Gradific is a platform that connects students with tutors for personalized learning experiences.",
    liveLink: "https://gradific.com",
    githubLink: "",
    techStack: ["NextJs", "TypeScript", "Shadcn", "Tailwind CSS"],
    featured: true,
  },
  {
    name: "Note Keeper",
    description:
      "A noteapp that keeps you updated with your notes and helps you manage your tasks.",
    liveLink: "https://elmars-notekeeper.netlify.app/",
    githubLink: "https://github.com/elmars-hub/NoteKeeper",
    techStack: ["JavaScript", "HTML", "CSS"],
    featured: true,
  },
  {
    name: "Couch Potatoe",
    description:
      "A movie search app that allows you to search for movies and get information about them.",
    liveLink: "https://couch-potatoe-kysn.vercel.app/",
    githubLink: "https://github.com/elmars-hub/Couch-Potatoe",
    techStack: [
      "NextJs",
      "Supabase",
      "TMDB",
      "Shadcn",
      "TypeScript",
      "Tailwind CSS",
    ],
    featured: true,
  },
  {
    name: "Todo App",
    description:
      "A simple todo app that allows you to manage your tasks and keep track of your progress.",
    liveLink: "https://todo-app-blond-two-64.vercel.app/",
    githubLink: "https://github.com/elmars-hub/TodoApp",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    featured: true,
  },
  {
    name: "OmniFood",
    description:
      "A restaurant website that showcases the menu and allows users to place orders.",
    liveLink: "https://omnifood-elmars.netlify.app/",
    githubLink: "https://github.com/elmars-hub/Restaurant",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    name: "Conference Ticket",
    description:
      "A platform for managing and selling tickets for conferences and events.",
    liveLink: "https://conference-ticket-beta.vercel.app/",
    githubLink: "https://github.com/elmars-hub/hngx-stage2-conference-ticket",
    techStack: ["React", "Cloudinary", "JavaScript", "Tailwind CSS"],
    featured: true,
  },
];
