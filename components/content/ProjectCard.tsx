"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import AnimationContainer from "../utils/AnimationContainer";
import { motion } from "framer-motion";
import Image from "next/image";
import { getTechIcon } from "@/config/tech-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <AnimationContainer customDelay={index * 0.1} animationType="scale">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="group h-full relative"
      >
        <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/50 to-secondary/50 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50" />

        <Card className="relative h-full w-full max-w-xl flex flex-col overflow-hidden border-border/50 bg-card/90 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
          {image && (
            <div className="relative w-full h-52 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={image}
                  alt={`${title} project screenshot`}
                  fill
                  className="object-cover transition-transform object-top duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
              </motion.div>
            </div>
          )}

          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                {title}
              </CardTitle>
            </div>
            <CardDescription className="line-clamp-3 mt-2 text-muted-foreground/90">
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1 py-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => {
                const techIcon = getTechIcon(tag);
                const IconComponent = techIcon?.icon;

                return (
                  <div
                    key={tagIndex}
                    className="flex items-center gap-1.5 rounded-md bg-secondary/40 px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-all duration-300 hover:bg-secondary hover:scale-105 cursor-default ring-1 ring-transparent hover:ring-border"
                    title={techIcon?.name || tag}
                  >
                    {IconComponent && (
                      <span
                        className="flex items-center"
                        style={{ color: techIcon?.color }}
                      >
                        <IconComponent className="h-3.5 w-3.5" />
                      </span>
                    )}
                    <span className="capitalize">{tag}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>

          <CardFooter className="flex gap-3 pt-2 pb-6 mt-auto">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1 gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span>Code</span>
                </a>
              </Button>
            )}
            <Button
              size="sm"
              asChild
              className="flex-1 gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </AnimationContainer>
  );
}
