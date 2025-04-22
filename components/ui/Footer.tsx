"use client";

import Link from "next/link";
import AnimationContainer from "../utils/AnimationContainer";
import ExternalLink from "./ExternalLinks";
import Credits from "../content/Credits";
import { personalInfo } from "@/config/personal";
import {
  Home,
  User,
  FolderKanban,
  Github,
  Linkedin,
  Briefcase,
  Mail,
  Twitter,
} from "lucide-react";

const MediumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1043.63 592.71"
    className="w-5 h-5"
    fill="currentColor"
  >
    <path d="M588.67 296.35c0 163.73-131.88 296.36-294.34 296.36S0 460.08 0 296.35 131.88 0 294.34 0s294.33 132.62 294.33 296.35zM1043.63 296.35c0 154.21-65.88 279.18-147.16 279.18s-147.16-125-147.16-279.18S815.19 17.17 896.47 17.17s147.16 125 147.16 279.18zM792.1 296.35c0 145.1-58.1 262.68-129.8 262.68s-129.8-117.58-129.8-262.68 58.1-262.68 129.8-262.68 129.8 117.58 129.8 262.68z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full lg:max-w-screen-md flex flex-col justify-center items-center mx-auto dark:text-white/70 text-black/70">
      <AnimationContainer customClassName="w-full">
        <hr className="w-full border-1 border-black/50 dark:border-white/50 mb-8" />
      </AnimationContainer>
      <AnimationContainer customClassName="w-full grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <User className="w-5 h-5" />
            About
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <FolderKanban className="w-5 h-5" />
            Projects
          </Link>
        </div>

        <div className="flex flex-col space-y-4 ">
          <ExternalLink href={personalInfo.socials.github}>
            <Github className="w-5 h-5" />
            GitHub
          </ExternalLink>

          <ExternalLink href={personalInfo.socials.linkedin}>
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </ExternalLink>
          <ExternalLink href={personalInfo.socials.medium}>
            <MediumIcon />
            Medium
          </ExternalLink>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            href="/projects"
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <Briefcase className="w-5 h-5" />
            Projects
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <Twitter className="w-5 h-5" />
            Twitter
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <Mail className="w-5 h-5" />
            Contact
          </Link>
        </div>
      </AnimationContainer>

      <Credits />
    </footer>
  );
};

export default Footer;
