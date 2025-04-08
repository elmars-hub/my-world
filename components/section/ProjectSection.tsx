import React from "react";
import SectionContainer from "../utils/SectionContainer";
import TitlePageContainer from "../utils/TitlePageContainer";
import { Link } from "lucide-react";
import AnimationContainer from "../utils/AnimationContainer";
// import { CardProjectProps } from "@/types/route";

const ProjectSection = () => {
  //   const [allProjectsInfo, setAllProjectsInfo] = useState<CardProjectProps[]>(
  //     []
  //   );

  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitlePageContainer title="Projects" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-black dark:text-white">
            These are most of the projects I&apos;ve done since I started
            programming, some of them are personal projects, freelance, work,
            practice, or for other situations. If you want to see absolutely all
            my projects, go to my
            <Link
              href="/"
              target="_blank"
              className="underline transition-all ease"
            >
              github page
            </Link>
            .
          </p>
        </AnimationContainer>

        <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto"></article>
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
