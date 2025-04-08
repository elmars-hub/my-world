import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/Provider";
import Footer from "@/components/ui/Footer";
import BackToTopButton from "@/components/ui/BackToTop";
import ProgressBar from "@/components/ui/ProgressBar";
import { personalInfo } from "@/config/personal";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://martinifeanyi.vercel.app/"),

  title: {
    template: "Martin Ifeanyi | %s",
    default: "Martin Ifeanyi | Home",
  },
  description:
    "Hey there! I'm Martin Ifeanyi, a developer on a mission to craft engaging experiences through code. Welcome to my corner of the web!",
  verification: {
    google: "-", // for vercel
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "Martin",
    "Ifeanyi",
    "Uchola",
    "elmars",
    "Martin Ifeanyi",
    "Martin Uchola",
    "Martin Ifeanyi Uchola",
    "elmars",
    "Portfolio",
    "Projects",
    "Contact",
    "Website",
    "Portfolio Website",
    "Martin Ifeanyi Portfolio",
    "Martin Uchola Portfolio",
    "elmars Portfolio",
    "Martin Ifeanyi Portfolio Website",
    "elmars Portfolio Website",
    "Martin Ifeanyi Uchola Portfolio Website",
  ],
  authors: [
    { name: "Ifeanyi" },
    { name: "elmars" },
    { name: "Martin", url: "https://martinifeanyi.vercel.app/" },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/opengraph-image.webp",
    title: "Martin Ifeanyi | Developer Extraordinaire",
    description:
      "Welcome to my digital hub! Explore my projects, journey, and passion for turning ideas into reality with code.",
    url: "https://martinifeanyi.vercel.app/",
    siteName: "Martin Ifeanyi",
    locale: "en_US",
    type: "profile",
    firstName: "Martin",
    lastName: "Ifeanyi",
    username: personalInfo.userName,
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Ifeanyi | Developer Extraordinaire",
    description: "Frontend Developer crafting engaging web experiences",
    creator: "@0xx_eth",
    images: "/opengraph-image.webp",
  },
  other: {
    "schema:Person": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: personalInfo.name,
      givenName: "Martin",
      familyName: "Ifeanyi",
      alternateName: personalInfo.userName,
      description: personalInfo.bio,
      jobTitle: personalInfo.role,
      url: "https://martinifeanyi.vercel.app/",
      sameAs: [
        personalInfo.socials.github,
        personalInfo.socials.linkedin,
        personalInfo.socials.twitter,
        personalInfo.socials.medium,
      ],
      email: personalInfo.socials.email,
      location: personalInfo.location,
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ProgressBar />

          <Header />
          <main className="flex flex-col justify-center items-center mx-auto">
            {children}
          </main>

          <BackToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
