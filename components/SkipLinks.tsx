"use client";

import Link from "next/link";

const SkipLinks = () => {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <Link
        href="#main-content"
        className="absolute top-4 left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </Link>
      <Link
        href="#navigation"
        className="absolute top-4 left-32 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to navigation
      </Link>
    </div>
  );
};

export default SkipLinks;
