"use client";
import AnimationContainer from "../utils/AnimationContainer";
import Link from "next/link";
import CurrentEx from "../content/CurrentEx";
import FAQ from "../content/FAQ";
import TitlePageContainer from "../utils/TitlePageContainer";
import Contact from "../content/Contact";
import SectionContainer from "../utils/SectionContainer";
import SkillSection from "../section/SkillSection";

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitlePageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Hey there! 👋 I&apos;m <strong>Martin</strong>, a Full Stack
            developer who loves to create new things. I have uploaded some
            pretty cool stuff, so make sure to check it out on my
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              GitHub profile
            </Link>{" "}
            ✌️.
          </p>

          <ul className="text-base text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2 mt-4">
            <li>
              ✨ I spend my spare time building and developing free Apps and Web
              Applications because I want to continue growing and honing my
              skills 😄.
            </li>
            <li>
              📚 I&apos;m currently focused on learning and exploring the
              exciting fields of Machine Learning (ML) and Artificial
              Intelligence (AI), including neural networks and other related
              topics.
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
          </ul>

          <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
            Feel free to explore my projects and get in touch for
            collaborations!
          </p>
        </AnimationContainer>

        <AnimationContainer customClassName="w-full ">
          <CurrentEx />
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <SkillSection />
        </AnimationContainer>

        {/* Contact Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <Contact />
        </AnimationContainer>

        {/* FAQ Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <FAQ />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
