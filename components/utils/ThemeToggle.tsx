"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      color="primary"
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-transparent text-black dark:text-white"
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
