"use client";

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "Looking for Job Opportunities | Present",
    description:
      "Currently seeking job opportunities in FrontEnd development. Open to full-time roles, internships, or freelance work. Let's connect!",
    startDate: "Present",
    endDate: "Present",
    isActive: true,
    companyUrl: "https://github.com/elmars-hub",
  },
  {
    title: "Gradific | Feb. 2025 - Present",
    description:
      "Building a platform that is designed to help academic institutes, bootcamps, and training organizations streamline their workflow, making it easy to create, track, and grade assignments—all in one place.",
    startDate: "Feb 2025",
    endDate: "Present",
    isActive: true,
    companyUrl: "gradific.com",
  },
  {
    title: "Servida | Sep. 2024 - Jan. 2025",
    description:
      "Servida is a platform that connects service providers with customers, making it easy to find and book services in your area.",
    startDate: "Sep 2024",
    endDate: "Jan 2025",
    isActive: false,
    companyUrl: "",
  },
];
