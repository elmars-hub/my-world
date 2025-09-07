import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/Provider";
import Footer from "@/components/ui/Footer";
import BackToTopButton from "@/components/ui/BackToTop";
import ProgressBar from "@/components/ui/ProgressBar";
import { personalInfo } from "@/config/personal";
import { Toaster } from "sonner";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://elmarshub.vercel.app/"),
  title: {
    template: "Martin Elmars | %s",
    default: "Martin Elmars | Frontend Alchemist",
  },
  description:
    "Martin Elmars is a passionate Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Building modern, responsive web applications with a focus on user experience and clean code.",
  verification: {
    google: "hpoqyUGK3eGTIaj7vksntBZe-vxTAhI073Bvl6DAWPg",
  },
  keywords: [
    "Martin Elmars",
    "elmars-hub",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "UI/UX Developer",
    "Portfolio Website",
    "Web Development",
    "JavaScript Developer",
    "Tailwind CSS",
    "Framer Motion",
  ],
  authors: [{ name: "Martin Elmars", url: "https://elmarshub.vercel.app/" }],
  creator: "Martin Elmars",
  publisher: "Martin Elmars",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Martin Elmars - Frontend Engineer",
      },
    ],
    title: "Martin Elmars | Frontend Engineer",
    description:
      "Welcome to my digital hub! Explore my projects, journey, and passion for turning ideas into reality with code.",
    url: "https://elmarshub.vercel.app/",
    siteName: "Martin Elmars Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Elmars | Developer Extraordinaire",
    description: "Passionate Frontend Developer crafting modern web experiences with React, Next.js, TypeScript, and Tailwind CSS.",
    creator: "@elmarshub",
    images: ["/opengraph-image.webp"],
  },
  other: {
    "schema:Person": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: personalInfo.name,
      jobTitle: personalInfo.role,
      description: personalInfo.bio,
      url: "https://elmarshub.vercel.app/",
      image: "https://elmarshub.vercel.app/opengraph-image.webp",
      sameAs: Object.values(personalInfo.socials),
      address: {
        "@type": "PostalAddress",
        addressLocality: personalInfo.location,
      },
      knowsAbout: personalInfo.knowsAbout,
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
      <Head>
        <meta
          name="google-site-verification"
          content="hpoqyUGK3eGTIaj7vksntBZe-vxTAhI073Bvl6DAWPg"
        />
      </Head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ProgressBar />
          <Header />

          <main className="flex flex-col justify-center items-center mx-auto">
            {children}
          </main>

          <Toaster position="top-center" richColors />
          <BackToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
