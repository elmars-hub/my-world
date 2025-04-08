import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/Provider";
import Footer from "@/components/ui/Footer";
import BackToTopButton from "@/components/ui/BackToTop";
import ProgressBar from "@/components/ui/ProgressBar";

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
