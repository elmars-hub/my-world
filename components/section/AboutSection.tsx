"use client";
import AnimationContainer from "../utils/AnimationContainer";
import Link from "next/link";
import CurrentEx from "../content/CurrentEx";
import FAQ from "../content/FAQ";
import TitlePageContainer from "../utils/TitlePageContainer";
import SectionContainer from "../utils/SectionContainer";
import SkillSection from "../section/SkillSection";
import { personalInfo } from "@/config/personal";

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitlePageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400 leading-6 md:text-lg">
            Hey there! 👋 I&apos;m <strong>Martin</strong>, a passionate
            Frontend Developer who loves bringing ideas to life through clean,
            responsive, and interactive user interfaces. I enjoy crafting web
            experiences that are not only functional but intuitive and
            enjoyable. You can check out some of my favorite projects on my -
            <Link
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              GitHub profile
            </Link>{" "}
            ✌️.
          </p>

          <ul className="text-base text-gray-600 dark:text-gray-400 space-y-2 mt-1 leading-6 md:text-[17px]">
            <li>
              ✨ I spend my spare time building and developing free Apps and Web
              Applications because I want to continue growing and honing my
              skills 😄.
            </li>
            <li>
              ✨ I focus on building modern, responsive web apps using{" "}
              <strong>React</strong>, <strong>Next.js</strong>,{" "}
              <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
              I’m passionate about great UI/UX, clean code, and creating apps
              that just *feel* right.
            </li>
            <li>
              📚 I’m currently deepening my skills in <strong>Next.js</strong>{" "}
              and <strong>TypeScript</strong> while exploring how{" "}
              <strong>AI and Machine Learning</strong> can enhance frontend
              experiences. It&apos;s exciting learning how tech can feel more
              human and intelligent.
            </li>
            <li>
              🎧 Music plays a big role in my creative flow. Whether I’m coding
              to lo-fi beats, vibing to J-pop, or zoning out with anime
              soundtracks, music keeps me inspired and focused.
            </li>
            <li>
              🍥 I’m a huge anime fan — the stories, animation, and emotion
              behind each scene influence the way I think about design, emotion
              in interfaces, and storytelling in tech.
            </li>
            <li>
              🤝 I&apos;m always excited to collaborate with others and
              contribute to different projects. If you have a project that needs
              an extra set of hands or fresh ideas, feel free to reach out to
              me!
            </li>
            <li>
              🔧 I have experience working with various programming languages
              and technologies, ensuring that I can adapt and contribute
              effectively to your project&apos;s tech stack.
            </li>
            <li>
              📬 If you come across anything interesting in my projects or have
              a project you&apos;d like me to collaborate on, please don&apos;t
              hesitate to get in touch. Let&apos;s create something awesome
              together!
            </li>
            <li>
              📬 Got a cool project, anime rec, or idea you’d like to chat
              about? Feel free to reach out — let’s build something awesome
              together!
            </li>
          </ul>

          <p className="text-base text-gray-600 dark:text-gray-400 mt-4 leading-6 md:text-[17px]">
            Feel free to explore my projects and get in touch for
            collaborations!
          </p>
        </AnimationContainer>

        <AnimationContainer customClassName="w-full -mb-10">
          <CurrentEx />
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <SkillSection />
        </AnimationContainer>

        {/* FAQ Section */}
        <AnimationContainer customClassName="w-full mt-10">
          <FAQ />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
