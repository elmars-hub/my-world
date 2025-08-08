import React from "react";
import SectionContainer from "../utils/SectionAnimation";
import AnimationContainer from "../utils/AnimationContainer";
import Hero from "../content/Hero";
import About from "../content/About";
import CurrentTimeLineExp from "../content/CurrentEx";
import SkillSection from "../section/SkillSection";
import ContactMe from "../content/Contact";
import FAQ from "../content/FAQ";

const HomeSection = () => {
  return (
    <SectionContainer>
      <div className="w-full h-[calc(100vh-11rem)] flex items-center justify-center">
        <AnimationContainer>
          <div className="absolute mb-7 top-32 md:top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-md">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-blink-circle"></span>
              Available for new opportunities 😁
            </span>
          </div>
        </AnimationContainer>
        <Hero />
      </div>

      <AnimationContainer customClassName="w-full mt-5 md:mt-5">
        <About />
      </AnimationContainer>

      <AnimationContainer customClassName="w-full mt-5 md:mt-10">
        <CurrentTimeLineExp />
      </AnimationContainer>

      <AnimationContainer customClassName="w-full">
        <SkillSection />
      </AnimationContainer>

      <AnimationContainer customClassName="w-full mt-5 md:mt-10">
        <ContactMe />
      </AnimationContainer>

      <AnimationContainer customClassName="w-full mt-5 md:mt-10">
        <FAQ />
      </AnimationContainer>
    </SectionContainer>
  );
};

export default HomeSection;
