"use client";

import { personalInfo } from "@/config/personal";
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
        Hey there! 👋 I&apos;m {personalInfo.userName}, a {personalInfo.role}{" "}
        who’s passionate about building clean, responsive, and user-focused web
        applications. My journey into tech began with a simple curiosity: how do
        the apps and websites we use every day actually work? That question
        sparked a deep interest that quickly turned into a passion for creating
        things on the web from small passion projects to real-world
        applications.
        <br />
        <br />
        Over the years, I’ve developed a strong foundation in modern frontend
        technologies like <strong>React</strong>, <strong>Next.js</strong>,{" "}
        <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. I love
        turning designs into functional, pixel-perfect interfaces that feel
        smooth and intuitive to use. Whether it&apos;s a landing page, a
        dashboard, or a full-blown web app, I enjoy the challenge of translating
        ideas into interactive digital experiences.
        <br />
        <br />
        My approach to development is centered around clean code, accessibility,
        performance, and a deep attention to detail. I’m constantly learning
        keeping up with frontend trends, improving my UI/UX skills, and
        experimenting with new tools and frameworks. I also enjoy collaborating
        with other developers, learning from open-source projects, and
        contributing to team-based work that pushes me to grow.
        <br />
        <br />
        Outside of coding, I’m someone who finds a lot of joy and inspiration in
        music and anime. Music is my daily companion whether I’m listening to
        lo-fi while coding, vibing to R&B, or losing myself in emotional
        soundtracks from shows like Vampire Diaries, Attack on Titan, or Naruto.
        Anime, for me, isn’t just entertainment it’s a huge creative influence
        that’s shaped the way I see storytelling, emotion, and even design.
        <br />
        <br />
        I believe in building in public, sharing what I learn, and being part of
        a supportive developer community. Whether it’s a hackathon, a side
        project, or just helping others out, I love any chance to connect and
        create. I’m still growing, still learning, and still building one
        component, one project, and one lesson at a time.
        <br />
        <br />
        If you’re into frontend development, anime, music, or just love creating
        cool things on the web I’d love to connect. Let’s build something
        amazing together!
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
