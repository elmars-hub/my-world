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
    default: "Martin Elmars | Home",
  },
  description:
    "Hey there! I'm Martin Elmars, a developer on a mission to craft engaging experiences through code. Welcome to my corner of the web!",
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
    "Portfolio Website",
  ],
  authors: [{ name: "Martin Elmars", url: "https://elmarshub.vercel.app/" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/opengraph-image.webp",
    title: "Martin Elmars | Developer Extraordinaire",
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
    description: "Frontend Developer crafting engaging web experiences",
    creator: "@elmarshub",
    images: "/opengraph-image.webp",
  },
  other: {
    "schema:Person": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      ...personalInfo,
      sameAs: Object.values(personalInfo.socials),
      url: "https://elmarshub.vercel.app/",
      image: "https://elmarshub.vercel.app/opengraph-image.webp",
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
