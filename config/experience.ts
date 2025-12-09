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
    title: "Anli Solutions | Dec. 2025 - Present",
    description:
      "Anli Solutions is focused on rendering hospitality management across africa. A robust and scalable hotel and property management system (PMS) designed for the africa hospitality industry.",
    startDate: "Dec 2025",
    endDate: "Present",
    isActive: true,
    companyUrl: "https://www.weareanli.com/",
  },
  {
    title: "HNG Tech | Jan. 2025 - Present",
    description:
      "HNG is a company with a mission — we work with the very best techies to help them enhance their skills through our HNG internship program and build their network. We also work with clients to find them the best technical talent across the globe.",
    startDate: "Jan 2025",
    endDate: "Present",
    isActive: true,
    companyUrl: "https://hng.tech",
  },
  // {
  //   title: "Gradific | Feb. 2025 - May. 2025",
  //   description:
  //     "Building a platform that is designed to help academic institutes, bootcamps, and training organizations streamline their workflow, making it easy to create, track, and grade assignments—all in one place.",
  //   startDate: "Feb 2025",
  //   endDate: "Oct 2025",
  //   isActive: false,
  //   companyUrl: "https://gradific.com",
  // },
  // {
  //   title: "ShopDesk | Feb. 2025 - April 2025",
  //   description:
  //     "ShopDesk is a cloud based inventory management software that helps you track stock, process sales, and generate business records so you can focus on growing your business.",
  //   startDate: "Feb 2025",
  //   endDate: "April 2025",
  //   isActive: false,
  //   companyUrl: "https://shopdesk.im",
  // },
  {
    title: "Servida | Aug. 2024 - Jan. 2025",
    description:
      "Servida is a platform that connects service providers with customers, making it easy to find and book services in your area.",
    startDate: "Aug 2024",
    endDate: "Jan 2025",
    isActive: false,
    companyUrl: "",
  },
];
