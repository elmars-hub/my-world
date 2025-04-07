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
      "Currently seeking job opportunities in **Software Engineering**, **AI**, **Data Science**, and **Full Stack** development. Open to full-time roles, internships, or freelance work. Let's connect!",
    startDate: "Present",
    endDate: "Present",
    isActive: true,
    companyUrl: "",
  },
  {
    title: "Fiaz Technologies | Nov. 2023 - Present",
    description:
      "Building developer-first tools at Fiaz Technologies to enhance productivity. Focused on creating innovative Tools that empower developers.",
    startDate: "Nov 2023",
    endDate: "Present",
    isActive: true,
    companyUrl: "",
  },
];
