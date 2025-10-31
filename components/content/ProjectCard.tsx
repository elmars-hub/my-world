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
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <AnimationContainer customDelay={index * 0.1} animationType="scale">
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="w-full max-w-xl min-h-64 flex flex-col transition-all duration-300 hover:shadow-xl border-border/50 hover:border-border">
          <CardHeader className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
              <CardDescription className="line-clamp-3">{description}</CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {tags.map((tag, tagIndex) => (
                <motion.div
                  key={tagIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 + tagIndex * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge
                    variant="secondary"
                    className="uppercase text-xs font-medium text-foreground cursor-default"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
          <CardFooter className="flex gap-2 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </AnimationContainer>
  );
}
