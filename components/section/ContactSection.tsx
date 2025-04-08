import Contact from "../content/Contact";
import AnimationContainer from "../utils/AnimationContainer";
import SectionContainer from "../utils/SectionContainer";
import TitlePageContainer from "../utils/TitlePageContainer";

const ContactSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitlePageContainer title="Contact Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-black dark:text-white">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out
            through any of the contact methods below. I&apos;ll get back to you
            as soon as possible.
          </p>
        </AnimationContainer>
      </div>

      <Contact />
    </SectionContainer>
  );
};

export default ContactSection;
