import React from "react";
import AnimationContainer from "../utils/AnimationContainer";
import { Badge } from "../ui/badge";
import {
  FileCode,
  FileCode2,
  Atom,
  Hexagon,
  Bolt,
  Database,
  Github,
  Frame,
  Wind,
  Command,
} from "lucide-react";

const Skills = () => {
  return (
    <AnimationContainer>
      <div className="w-full flex flex-col gap-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* HTML */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <FileCode className="w-6 h-6" />
            HTML
          </Badge>

          {/* CSS */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <FileCode className="w-6 h-6" />
            CSS
          </Badge>

          {/* JavaScript */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <FileCode2 className="w-6 h-6" />
            JavaScript
          </Badge>

          {/* TypeScript */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <FileCode2 className="w-6 h-6" />
            TypeScript
          </Badge>

          {/* ReactJS */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <Atom className="w-6 h-6" />
            ReactJs
          </Badge>

          {/* NextJS */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <Hexagon className="w-6 h-6" />
            Next.Js
          </Badge>

          {/* Supabase */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <Bolt className="w-6 h-6" />
            Supabase
          </Badge>

          {/* Sanity */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <Database className="w-6 h-6" />
            Sanity
          </Badge>

          {/* Git & GitHub */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <Github className="w-6 h-6" />
            Git & Github
          </Badge>

          {/* Framer Motion */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <Frame className="w-6 h-6" />
            Framer Motion
          </Badge>

          {/* TailwindCSS */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <Wind className="w-6 h-6" />
            TailwindCss
          </Badge>

          {/* Redux Toolkit */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
          >
            <Command className="w-6 h-6" />
            Redux Toolkit
          </Badge>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default Skills;
