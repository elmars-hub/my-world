import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiRedux,
  SiReact,
  SiSupabase,
  SiStripe,
  SiFramer,
  SiJavascript,
  SiPostgresql,
  SiOpenai,
  SiCloudinary,
  SiGit,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { Database, Zap, Mic, Code2, Palette } from "lucide-react";

export interface TechIcon {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export const techStackIcons: Record<string, TechIcon> = {
  // Frameworks & Libraries
  NextJs: {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  "Next.js": {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  React: {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  ReactJs: {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },

  // Languages
  TypeScript: {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  JavaScript: {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  // Styling
  "Tailwind CSS": {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  TailwindCss: {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  Tailwind: {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  // Databases & ORMs
  Prisma: {
    name: "Prisma",
    icon: SiPrisma,
    color: "#2D3748",
  },
  Supabase: {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
  },
  Neon: {
    name: "Neon",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  "Neon DB": {
    name: "Neon DB",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  MongoDB: {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },

  // Backend & Tools
  Express: {
    name: "Express",
    icon: SiExpress,
    color: "#000000",
  },
  Git: {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },

  // State Management
  "Redux Toolkit": {
    name: "Redux Toolkit",
    icon: SiRedux,
    color: "#764ABC",
  },
  Redux: {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
  },
  "Context API": {
    name: "Context API",
    icon: SiReact,
    color: "#61DAFB",
  },

  // UI Libraries
  Shadcn: {
    name: "shadcn/ui",
    icon: Palette,
    color: "#000000",
  },
  "Framer Motion": {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#0055FF",
  },

  // APIs & Services
  "OpenAI API": {
    name: "OpenAI",
    icon: SiOpenai,
    color: "#412991",
  },
  Stripe: {
    name: "Stripe",
    icon: SiStripe,
    color: "#635BFF",
  },
  "TMDB API": {
    name: "TMDB",
    icon: Code2,
    color: "#01D277",
  },

  WebRTC: {
    name: "WebRTC",
    icon: Zap,
    color: "#333333",
  },
  Cloudinary: {
    name: "Cloudinary",
    icon: SiCloudinary,
    color: "#3448C5",
  },

  // Data Fetching
  "TanStack Query": {
    name: "TanStack Query",
    icon: Code2,
    color: "#FF4154",
  },

  // Auth
  NeonAuth: {
    name: "NeonAuth",
    icon: Database,
    color: "#4169E1",
  },
};

export const getTechIcon = (techName: string): TechIcon | null => {
  return techStackIcons[techName] || null;
};
