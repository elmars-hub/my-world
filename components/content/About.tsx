"use client";

import AnimationContainer from "../utils/AnimationContainer";
import SectionHeader from "../utils/SectionHeader";

const About = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here is a little bit about me and my journey as a developer.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I&apos;m{" "}
        <strong className="text-foreground dark:text-white">Martin</strong>, and
        I&apos;ve been passionate about coding since I was a child. I fell in
        love with programming at a young age, spending countless hours learning,
        experimenting, and creating small projects. Over the years, this passion
        has grown into a career as a Full Stack developer, where I continue to
        build innovative solutions that solve real-world problems.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        If you’re interested in collaborating on something exciting or need help
        with a project, feel free to reach out. Let’s create something amazing
        together!
      </p>
    </AnimationContainer>
  );
};

export default About;
