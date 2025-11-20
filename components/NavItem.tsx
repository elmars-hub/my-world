"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavItemHeaderAnimation } from "@/types/route";

export const navItemsSelected: { [key: string]: NavItemHeaderAnimation } = {
  "/": {
    name: "home",
  },
  "/projects": {
    name: "projects",
  },
  "/about": {
    name: "about",
  },
  "/contact": {
    name: "contact",
  },
};

const NavItem = () => {
  const pathname = usePathname() as string;

  return (
    <>
      {Object.entries(navItemsSelected).map(([path, { name }]) => {
        const isActive = path === pathname;

        return (
          <Link
            key={path}
            href={path}
            className={clsx(
              "hidden md:inline-block transition ease py-[2px] px-[10px] focus:outline-none focus-jump hover:jump",
              {
                "text-neutral-500 dark:text-neutral-400": !isActive,
                "text-neutral-800 dark:text-white font-bold": isActive,
                "hover:text-neutral-700 dark:hover:text-neutral-300": !isActive,
              }
            )}
          >
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default NavItem;
