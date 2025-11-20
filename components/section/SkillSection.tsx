"use client";

import React from "react";
import AnimationContainer from "../utils/AnimationContainer";
import SectionHeader from "../utils/SectionHeader";
import Skills from "../content/Skills";

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5 mb-6">
        <SectionHeader
          title="My Tech Stack"
          content="I've been programming for over years, gaining experience with a variety of programming languages, frameworks, and tools. I've worked on both Frontend and Backend technologies, allowing me to understand and contribute to the entire development process."
        />

        <Skills />
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
