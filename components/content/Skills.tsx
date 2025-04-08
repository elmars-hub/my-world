import React from "react";
import AnimationContainer from "../utils/AnimationContainer";
import { Badge } from "../ui/badge";

const Skills = () => {
  return (
    <AnimationContainer>
      <div className="w-full flex flex-col gap-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* HTML */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-code"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="m10 13-2 2 2 2" />
              <path d="m14 17 2-2-2-2" />
            </svg>
            HTML
          </Badge>

          {/* CSS */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-code"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="m10 13-2 2 2 2" />
              <path d="m14 17 2-2-2-2" />
            </svg>
            CSS
          </Badge>

          {/* JavaScript */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-code-2"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M10 13v-1h1v1" />
              <path d="M10 16v1h1v-1" />
              <path d="M13 13h1" />
              <path d="M13 16h1" />
            </svg>
            JavaScript
          </Badge>

          {/* TypeScript */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-code-2"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M10 13v-1h1v1" />
              <path d="M10 16v1h1v-1" />
              <path d="M13 13h1" />
              <path d="M13 16h1" />
            </svg>
            TypeScript
          </Badge>

          {/* ReactJS */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-atom"
            >
              <circle cx="12" cy="12" r="1" />
              <path d="M20.2 20.2c2.04-2.03 2.65-4.94 1.36-7.46 1.29-2.52.68-5.43-1.36-7.47-2.03-2.04-4.94-2.65-7.46-1.36-2.52-1.29-5.43-.68-7.47 1.36-2.04 2.03-2.65 4.94-1.36 7.46-1.29 2.52-.68 5.43 1.36 7.47 2.03 2.04 4.94 2.65 7.46 1.36 2.52 1.29 5.43.68 7.47-1.36Z" />
              <path
                d="M12 12c-5.47-3.16-5.47 3.16 0 0Z"
                transform="rotate(45 12 12)"
              />
              <path
                d="M12 12c0-5.47-3.16-5.47 0 0Z"
                transform="rotate(45 12 12)"
              />
            </svg>
            ReactJs
          </Badge>

          {/* NextJS */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-hexagon"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <path d="m12 6.5 5 3-5 3-5-3Z" />
            </svg>
            Next.Js
          </Badge>

          {/* Supabase */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bolt"
            >
              <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
              <path d="m13 12-3 5h4l-3 5" />
            </svg>
            Supabase
          </Badge>

          {/* Sanity */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-database"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
            Sanity
          </Badge>

          {/* Git & GitHub */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Git & Github
          </Badge>

          {/* Framer Motion */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-frame"
            >
              <line x1="22" x2="2" y1="6" y2="6" />
              <line x1="22" x2="2" y1="18" y2="18" />
              <line x1="6" x2="6" y1="2" y2="22" />
              <line x1="18" x2="18" y1="2" y2="22" />
            </svg>
            Framer Motion
          </Badge>

          {/* TailwindCSS */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-wind"
            >
              <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
              <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
              <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
            </svg>
            TailwindCss
          </Badge>

          {/* Redux Toolkit */}
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-2 py-6 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-command"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Redux Toolkit
          </Badge>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default Skills;
