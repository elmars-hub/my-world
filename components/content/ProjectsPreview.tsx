"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import AnimationContainer from "../utils/AnimationContainer";
import SectionHeader from "../utils/SectionHeader";
import LazyLoad from "../LazyLoad";
import { projects } from "@/config/personal";
import { Project } from "@/config/personal";
import { getTechIcon } from "@/config/tech-icons";

interface ProjectPreviewCardProps {
  project: Project;
  index?: number;
}

const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({
  project,
  index = 0,
}) => {
  const techStack = useMemo(
    () => project.techStack.slice(0, 3),
    [project.techStack]
  );
  const remainingCount = useMemo(
    () => project.techStack.length - 3,
    [project.techStack.length]
  );

  return (
    <LazyLoad
      fallback={
        <div className="w-full max-w-sm h-52 bg-muted animate-pulse rounded-xl" />
      }
    >
      <AnimationContainer customDelay={index * 0.15} animationType="scale">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="group h-full"
        >
          <div className="relative h-full">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/40 to-secondary/40 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-70" />

            <Card className="relative h-full w-full max-w-sm flex flex-col border-border/50 bg-card/95 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/5">
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-90" />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </CardTitle>
                <CardDescription
                  className="overflow-hidden line-clamp-3 text-[10px] font-light"
                  aria-label={`Project description: ${project.description}`}
                >
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                <div
                  className="flex flex-wrap gap-2 "
                  role="list"
                  aria-label="Technologies used"
                >
                  {techStack.map((tech, index) => {
                    const techIcon = getTechIcon(tech);
                    const IconComponent = techIcon?.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary/30 hover:bg-secondary hover:scale-110 transition-all duration-300 cursor-default ring-1 ring-transparent hover:ring-border"
                        role="listitem"
                        title={techIcon?.name || tech}
                      >
                        {IconComponent && (
                          <span
                            style={{
                              color: techIcon.color,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <IconComponent className="w-5 h-5" />
                          </span>
                        )}
                      </div>
                    );
                  })}
                  {remainingCount > 0 && (
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary/30 text-xs font-medium text-muted-foreground"
                      role="listitem"
                      title={`${remainingCount} more technologies`}
                    >
                      +{remainingCount}
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 mt-auto pt-2 pb-6">
                {project.githubLink && (
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="flex-1 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} source code on GitHub`}
                    >
                      <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                      Code
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} live demo`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                    Live
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      </AnimationContainer>
    </LazyLoad>
  );
};

const ProjectsPreview: React.FC = () => {
  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured).slice(0, 3),
    []
  );

  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5 mb-8">
        <SectionHeader
          title="Featured Projects"
          content="Here are some of my recent projects that showcase my skills and experience. Each project represents a unique challenge and learning opportunity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <ProjectPreviewCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </AnimationContainer>
  );
};

export default ProjectsPreview;
