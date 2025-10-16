export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  medium: string;
  email: string;
  google: string;
  instagram: string;
}

export interface PersonalInfo {
  name: string;
  userName: string;
  role: string;
  location: string;
  bio: string;
  socials: SocialLinks;
  phone: string;
  knowsAbout: string[];
}

export interface Project {
  name: string;
  description: string;
  liveLink: string;
  githubLink: string;
  techStack: string[];
  image?: string;
  screenshots?: string[];
  category: "web" | "mobile" | "ai" | "ecommerce" | "tool" | "game";
  featured?: boolean;
  status: "completed" | "in-progress" | "archived";
}

export const personalInfo: PersonalInfo = {
  name: "Martin Elmars",
  userName: "elmars",
  role: "Frontend Alchemist",
  location: "Lagos, Nigeria",
  phone: "+234 814 749 2547",
  bio: "I'm a passionate Frontend Developer focused on building innovative solutions and contributing to the tech community.",
  socials: {
    instagram: "https://www.instagram.com/elmarshub/",
    github: "https://github.com/elmars-hub",
    linkedin: "https://www.linkedin.com/in/martin-ifeanyi/",
    twitter: "https://x.com/elmarshub",
    medium: "https://medium.com/@martinsifeanyi247",
    email: "martinsifeanyi247@gmail.com",
    google:
      "https://docs.google.com/document/d/1EaOVw1kGpLLkcavTQyRHm2VfQN9hevSeU2rumifywEs/edit?usp=sharing",
  },
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "React",
    "SEO",
    "Web Development",
    "Redux Toolkit",
  ],
};

export const projects: Project[] = [
  {
    name: "HNG Tech",
    description:
      "HNG is a company with a mission — we work with the very best techies to help them enhance their skills through our HNG internship program and build their network. We also work with clients to find them the best technical talent across the globe.",
    liveLink: "https://hng.tech/",
    githubLink: "",
    techStack: ["NextJs", "TypeScript", "Tailwind CSS", "Prisma"],
    category: "web",
    status: "completed",
    featured: true,
  },
  {
    name: "ShopDesk",
    description:
      "A comprehensive cloud-based inventory management platform designed for modern businesses. Features real-time stock tracking, automated sales processing, detailed analytics dashboard, and comprehensive business reporting. Includes advanced features like barcode scanning, multi-location inventory management, supplier tracking, and automated reorder notifications to streamline business operations.",
    liveLink: "https://shopdesk.im",
    githubLink: "",
    techStack: [
      "NextJs",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "TanStack Query",
      "Prisma",
    ],
    category: "ecommerce",
    status: "completed",
    featured: true,
  },
  {
    name: "Couch Potato",
    description:
      "A comprehensive movie discovery and management platform that helps users explore, track, and organize their favorite films and TV shows. Features include advanced search and filtering, personalized recommendations, and detailed movie information including cast, crew, reviews, and trailers.",
    liveLink: "couchpotato.vercel.app",
    githubLink: "https://github.com/elmars-hub/couch-potato",
    techStack: [
      "NextJs",
      "Supabase",
      "TMDB API",
      "Prisma",
      "TypeScript",
      "Neon",
    ],
    category: "web",
    status: "completed",
    featured: true,
  },

  {
    name: "GreenStock",
    description:
      "A comprehensive plant management platform for gardening enthusiasts and plant collectors. Features include plant cataloging with detailed care instructions, watering schedules, growth tracking, and photo galleries. Users can create custom plant collections, set care reminders, and access a community-driven plant database with expert tips and troubleshooting guides.",
    liveLink: "https://greenstock-fei3.vercel.app/",
    githubLink: "https://github.com/elmars-hub/greenstock",
    techStack: [
      "NextJs",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Neon DB",
      "Shadcn",
      "NeonAuth",
    ],
    category: "web",
    status: "completed",
    featured: true,
  },

  {
    name: "Gradific",
    description:
      "An innovative educational platform that bridges the gap between students and qualified tutors through advanced matching algorithms. Features include real-time video lessons, interactive whiteboards, progress tracking, assignment management, and secure payment processing. The platform supports multiple subjects and learning styles with comprehensive tutor profiles and student feedback systems.",
    liveLink: "https://gradific.com",
    githubLink: "",
    techStack: [
      "NextJs",
      "TypeScript",
      "Shadcn",
      "Tailwind CSS",
      "WebRTC",
      "Stripe",
      "Prisma",
    ],
    category: "web",
    status: "completed",
    featured: true,
  },
  {
    name: "CareerCraft AI",
    description:
      "An intelligent interview preparation platform powered by advanced AI technology. Features realistic mock interviews with industry-specific questions, real-time speech analysis, personalized feedback on communication skills, and performance tracking. The AI evaluates responses for clarity, confidence, and technical accuracy, providing detailed insights to help users improve their interview performance across various job roles and industries.",
    liveLink: "https://mock-interview-ai-chi.vercel.app/",
    githubLink: "https://github.com/elmars-hub/mock-interview-ai",
    techStack: [
      "NextJs",
      "Firebase",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Shadcn",
      "Web Speech API",
      "Framer Motion",
    ],
    category: "ai",
    status: "completed",
    featured: true,
  },
  {
    name: "Github Says",
    description:
      "A playful web app that fetches GitHub user data, generates humorous “roasts,” and provides motivational messages based on your coding activity. Built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.",
    liveLink: "github-says.vercel.app",
    githubLink: "https://github.com/elmars-hub/github-says",
    techStack: ["NextJs", "Tailwind", "Shadcn", "Framer Motion"],
    category: "tool",
    status: "completed",
    featured: true,
  },
  {
    name: "Note Keeper",
    description:
      "A comprehensive note-taking and task management application designed for productivity and organization. Features include rich text editing, task categorization, priority levels, due date tracking, and search functionality. Users can create, edit, and organize notes with tags, set reminders, and track progress on various projects and personal tasks.",
    liveLink: "https://elmars-notekeeper.netlify.app/",
    githubLink: "https://github.com/elmars-hub/NoteKeeper",
    techStack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Local Storage API",
      "DOM Manipulation",
    ],
    category: "tool",
    status: "completed",
    featured: true,
  },

  {
    name: "Pizza Hut",
    description:
      "A comprehensive pizza ordering and delivery management platform that streamlines the entire customer experience. Features include customizable pizza builder, real-time order tracking, payment processing, delivery scheduling. Users can browse menu items, track their orders from kitchen to doorstep, and manage their delivery preferences and order history.",
    liveLink: "https://pizza-hut-sigma.vercel.app",
    githubLink: "https://github.com/elmars-hub/Pizza-Hut",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Context API",
      "Local Storage",
    ],
    category: "ecommerce",
    status: "completed",
    featured: true,
  },
  {
    name: "Todo App",
    description:
      "A feature-rich task management application designed to boost productivity and organization. Features include task creation with priority levels, category organization. Users can filter tasks by status, search through their task list, and enjoy a clean, intuitive interface that makes task management both efficient and enjoyable.",
    liveLink: "https://todo-app-blond-two-64.vercel.app/",
    githubLink: "https://github.com/elmars-hub/TodoApp",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Local Storage",
      "Context API",
    ],
    category: "tool",
    status: "completed",
    featured: true,
  },
  {
    name: "OmniFood",
    description:
      "A modern, responsive restaurant website featuring an elegant design and comprehensive dining experience. The platform showcases an extensive menu with detailed descriptions, high-quality food photography, online reservation system, and seamless ordering functionality. Features include customer reviews, chef profiles, location information, and integration with delivery services for a complete restaurant digital presence.",
    liveLink: "https://omnifood-elmars.netlify.app/",
    githubLink: "https://github.com/elmars-hub/Restaurant",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "CSS Grid",
      "Flexbox",
    ],
    category: "ecommerce",
    status: "completed",
    featured: true,
  },

  {
    name: "Conference Ticket",
    description:
      "A comprehensive event management and ticketing platform designed for conferences, workshops, and professional gatherings. Features include event creation and management, secure ticket purchasing with multiple payment options, attendee registration, QR code generation for check-ins, and real-time event analytics.",
    liveLink: "https://conference-ticket-beta.vercel.app/",
    githubLink: "https://github.com/elmars-hub/hngx-stage2-conference-ticket",
    techStack: [
      "React",
      "Cloudinary",
      "JavaScript",
      "Tailwind CSS",
      "QR Code API",
      "Payment Integration",
    ],
    category: "web",
    status: "completed",
    featured: true,
  },
];
