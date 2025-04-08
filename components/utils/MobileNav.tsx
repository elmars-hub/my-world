"use client";

import { AlignJustify } from "lucide-react";
import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet";
import Link from "next/link";
import Navbar from "../Navbar";
import { personalInfo } from "@/config/personal";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <AlignJustify className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="bg-background/80 backdrop-blur-md dark:bg-black/50 dark:text-white">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="flex flex-col items-center justify-between h-full py-8">
            <div className="flex flex-col items-center gap-y-32">
              <Link
                href="/"
                className="hover:text-foreground dark:hover:text-white"
              >
                <strong className="text-foreground dark:text-white">
                  {personalInfo.name}
                </strong>
              </Link>

              <Navbar />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
