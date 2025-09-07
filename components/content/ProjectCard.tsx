"use client";

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
import { Github, ExternalLink } from "lucide-react";
import AnimationContainer from "../utils/AnimationContainer";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <AnimationContainer>
      <Card className="w-full max-w-xl min-h-64 flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105">
        <CardHeader className="flex-shrink-0">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="uppercase text-xs font-medium text-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 flex-shrink-0">
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </AnimationContainer>
  );
}
