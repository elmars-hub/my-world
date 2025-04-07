"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        size="icon"
        color="primary"
        variant="ghost"
        className="bg-transparent text-black dark:text-white"
      >
        <div className="w-10 h-10" />
      </Button>
    );
  }

  return (
    <Button
      size="icon"
      color="primary"
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-transparent text-black dark:text-white"
    >
      {theme === "light" ? (
        <MoonIcon className="w-10 h-10" />
      ) : (
        <SunIcon className="w-10 h-10" />
      )}
    </Button>
  );
};

export default ThemeToggle;
