export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  medium: string;
  email: string;
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
  },
};

export const projects: Project[] = [
  {
    name: "Project Name",
    description: "A brief description of your project and what problems it solves.",
    liveLink: "https://project-demo.com",
    githubLink: "https://github.com/yourusername/project",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    featured: true
  }
];
