"use client";

import React from "react";
import Link from "next/link";
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
import { projects } from "@/config/personal";
import { Project } from "@/config/personal";

interface ProjectPreviewCardProps {
  project: Project;
}

const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({ project }) => {
  return (
    <AnimationContainer>
      <Card className="w-full max-w-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group">
        <CardHeader>
          <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
            {project.name}
          </CardTitle>
          <CardDescription className="overflow-hidden" style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical'
          }}>
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1 mb-4">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="uppercase text-xs font-medium text-foreground"
              >
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.techStack.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          {project.githubLink && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          <Button variant="outline" size="sm" asChild>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live
            </a>
          </Button>
        </CardFooter>
      </Card>
    </AnimationContainer>
  );
};

const ProjectsPreview: React.FC = () => {
 
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5 mb-8">
        <SectionHeader
          title="Featured Projects"
          content="Here are some of my recent projects that showcase my skills and experience. Each project represents a unique challenge and learning opportunity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <ProjectPreviewCard key={index} project={project} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default ProjectsPreview;
