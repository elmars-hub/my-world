import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimationContainer from "../utils/AnimationContainer";
import SectionHeader from "../utils/SectionHeader";
import { personalInfo } from "@/config/personal";

const FAQ = () => {
  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeader
        title="Frequently Asked Questions"
        content="Here are some common questions I receive. If you have any more questions, feel free to ask!"
      />

      <div className="bg-gray-100 dark:bg-black rounded-xl p-6 my-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-gray-800 dark:text-white text-base hover:no-underline">
              Who are you?
            </AccordionTrigger>
            <AccordionContent className="text-gray-800 dark:text-white text-base">
              Hey there! 👋 I&apos;m Martin, a passionate Frontend Developer who
              loves bringing ideas to life through clean, responsive, and
              interactive user interfaces. I focus on crafting seamless digital
              experiences using tools like React, Next.js, TypeScript, and
              Tailwind CSS. I enjoy coding as much as I enjoy lo-fi beats and
              anime soundtracks that help keep me in the zone. I&apos;m
              constantly learning, improving, and building one component at a
              time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-gray-800 dark:text-white text-base hover:no-underline">
              What technologies do you use?
            </AccordionTrigger>
            <AccordionContent className="text-gray-800 dark:text-white text-base">
              I specialize in frontend technologies, particularly: React,
              Next.js, TypeScript, JavaScript, Tailwind CSS, CSS Modules, Git,
              Vite, Figma, REST APIs. I&apos;m also exploring how to enhance
              frontend experiences with tools like Framer Motion for animations
              and Headless UI for accessibility.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-gray-800 dark:text-white text-base hover:no-underline">
              Can we hire you?
            </AccordionTrigger>
            <AccordionContent className="text-gray-800 dark:text-white text-base">
              Yes, I&apos;m currently open to job opportunities, internships, or
              collaboration on exciting frontend projects. If you&apos;re
              looking for someone who&apos;s detail-oriented, creative, and
              always eager to learn I&apos;d love to hear from you!
              <br />
              <br />
              You can reach out via:
              <ul className="list-disc pl-6 mt-2 text-sm">
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    martinsifeanyi247@gmail.com
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Martins Ifeanyi
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </AnimationContainer>
  );
};

export default FAQ;
