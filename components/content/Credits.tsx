"use client";
import Link from "next/link";
import AnimationContainer from "../utils/AnimationContainer";
import { personalInfo } from "@/config/personal";

const Credits = () => {
  return (
    <AnimationContainer customClassName="text-center py-4 dark:text-white/50 text-black/50 text-sm  ">
      <p>
        Built with ❤️ by
        <Link
          href={personalInfo.socials.github}
          className="text-blue-500 hover:underline"
        >
          Martin Ifeanyi
        </Link>
        . All rights reserved © {new Date().getFullYear()}.
      </p>
    </AnimationContainer>
  );
};

export default Credits;
