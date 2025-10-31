"use client";

import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/config/personal";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer text-foreground"
        aria-label="Open navigation menu"
      >
        <AlignJustify className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 dark:bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: -400, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  mass: 0.8,
                },
              }}
              exit={{
                y: -400,
                opacity: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              className="fixed left-0 right-0 top-[72px] z-50 md:hidden"
            >
              <div className="mx-4 mt-2 rounded-2xl bg-white/95 dark:bg-gradient-to-br dark:from-[#1a1a1a]/95 dark:via-[#141414]/95 dark:to-[#0a0a0a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-100/30 dark:via-white/5 to-transparent pointer-events-none" />

                <div className="relative px-4 py-6 space-y-6">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: 0.1,
                        duration: 0.3,
                      },
                    }}
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-50"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-4 w-4 text-foreground" />
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.1,
                        duration: 0.3,
                      },
                    }}
                    className="flex items-center justify-center pt-2"
                  >
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="hover:text-foreground transition-colors"
                    >
                      <strong className="text-foreground text-lg">
                        {personalInfo.name}
                      </strong>
                    </Link>
                  </motion.div>

                  <nav>
                    <ul className="space-y-2">
                      {[
                        { path: "/", name: "home" },
                        { path: "/about", name: "about" },
                        { path: "/projects", name: "projects" },
                        { path: "/contact", name: "contact" },
                      ].map((link, index) => (
                        <motion.li
                          key={link.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              delay: 0.2 + index * 0.1,
                              duration: 0.3,
                              ease: "easeOut",
                            },
                          }}
                          exit={{
                            opacity: 0,
                            x: -20,
                            transition: {
                              duration: 0.2,
                            },
                          }}
                        >
                          <Link
                            href={link.path}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200",
                              pathname === link.path
                                ? "bg-black text-white dark:bg-white/20 dark:text-white shadow-lg shadow-primary/20 dark:shadow-white/20"
                                : "text-foreground/70 dark:text-gray-300 hover:bg-accent/50 dark:hover:bg-white/5 hover:text-foreground dark:hover:text-white"
                            )}
                          >
                            <motion.span
                              animate={
                                pathname === link.path
                                  ? {
                                      scale: [1, 1.2, 1],
                                      transition: {
                                        duration: 0.3,
                                      },
                                    }
                                  : {}
                              }
                            >
                              {link.name}
                            </motion.span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: 1,
                      transition: {
                        delay: 0.6,
                        duration: 0.4,
                      },
                    }}
                    className="h-px bg-gradient-to-r from-transparent via-border to-transparent origin-left"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
