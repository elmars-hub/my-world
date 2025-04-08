"use client";

import { ExternalLinkProps } from "@/types/route";
import Link from "next/link";

const ExternalLink = ({
  href,
  customClassName = "flex items-center gap-2 hover:text-gray-600 transition ease",
  children,
}: ExternalLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    className={customClassName}
  >
    {children}
  </Link>
);

export default ExternalLink;
