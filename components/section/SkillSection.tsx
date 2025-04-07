"use client";

import React from "react";
import AnimationContainer from "../utils/AnimationContainer";
import SectionHeader from "../utils/SectionHeader";

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills"
          content="I’ve been programming for over years, gaining experience with a variety of programming languages, frameworks, and tools. I’ve worked on both Frontend and Backend technologies, allowing me to understand and contribute to the entire development process."
        />

        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center items-center"></div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
