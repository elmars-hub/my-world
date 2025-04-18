import React from "react";
import SectionContainer from "../utils/SectionContainer";
import TitlePageContainer from "../utils/TitlePageContainer";
import Link from "next/link";
import AnimationContainer from "../utils/AnimationContainer";
import { ProjectCard } from "../content/ProjectCard";
import { personalInfo, projects } from "@/config/personal";
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
            my projects, go to my{" "}
            <Link
              href={personalInfo.socials.github}
              target="_blank"
              className="underline transition-all ease"
            >
              github page
            </Link>
            .
          </p>
        </AnimationContainer>

        <article className="w-full flex flex-col justify-center items-center content-center gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.name}
              description={project.description}
              tags={project.techStack}
              githubUrl={project.githubLink}
              liveUrl={project.liveLink}
            />
          ))}
        </article>
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
