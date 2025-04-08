import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimationContainer from "../utils/AnimationContainer";
import SectionHeader from "../utils/SectionHeader";
import { Link } from "lucide-react";

const FAQ = () => {
  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeader
        title="Frequently Asked Questions"
        content="Here are some common questions I receive. If you have any more questions, feel free to reach out!"
      />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black dark:text-white text-base">
            Who are you?
          </AccordionTrigger>
          <AccordionContent className="text-black dark:text-white text-base">
            Hey there! 👋 I&apos;m Martin, a Full Stack developer passionate
            about coding since childhood. I build innovative solutions using a
            variety of technologies like Next.js, Node.js, Python, TypeScript,
            Go, Rust, Flutter, and GenAI. I&apos;m also diving into MLOps and
            always eager to learn new tools and techniques.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-black dark:text-white text-base">
            What technologies do you use?
          </AccordionTrigger>
          <AccordionContent className="text-black dark:text-white text-base">
            I am a full-stack developer with a focus on both frontend and
            backend technologies. I mostly use tools like Next.js, TypeScript,
            Node.js, Python (Django, Flask, FastAPI), MongoDB, and SQL for my
            regular basis projects. I am also diving into Generative AI, Machine
            Learning, and Data Science to build smarter, data-driven full-stack
            applications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-black dark:text-white text-base">
            Can we hire you?
          </AccordionTrigger>
          <AccordionContent className="text-black dark:text-white text-base">
            Yes, I am currently looking for job opportunities! Feel free to
            reach out to me via email or Linkedin if you&apos;re interested in
            hiring me or collaborating on exciting projects.
            <br className="mb-2" />
            You can contact me through:
            <ul className="list-disc pl-6 text-black dark:text-white text-sm">
              Email:{" "}
              <Link href="/" className="text-blue-500 hover:underline">
                martinsifeanyi234@gmail.com
              </Link>{" "}
              Linkedin:
              <Link href="/" className="text-blue-500 hover:underline">
                Martins Ifeanyi
              </Link>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </AnimationContainer>
  );
};

export default FAQ;
