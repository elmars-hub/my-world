"use client";

import React from "react";
import HeaderAnimation from "../utils/HeaderAnimation";
import Link from "next/link";
import ThemeToggle from "../utils/ThemeToggle";
import MobileNav from "../utils/MobileNav";
import NavItem from "../NavItem";
import { personalInfo } from "@/config/personal";

const Header = () => {
  return (
    <HeaderAnimation>
      <nav className="w-10/12 lg:max-w-screen-md flex items-center justify-between flex-row relative py-8 sm:pb-8 bg-primary text-foreground dark:text-white gap-5 lg:gap-0">
        <div className="">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
            <Link
              href="/"
              className="hover:text-foreground dark:hover:text-white"
            >
              <strong className="text-foreground dark:text-white">
                {personalInfo.name}
              </strong>
            </Link>
          </h1>
        </div>

        {/*  */}
        <div className="ml-[-0.80rem] flex items-center gap-4">
          <NavItem />
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </HeaderAnimation>
  );
};

export default Header;
