import AnimationContainer from "../utils/AnimationContainer";
import SectionHeader from "../utils/SectionHeader";
import { usePathname } from "next/navigation";

const ContactHeader = () => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeader
        id="contactme"
        title="Contact Me"
        content="Fill out the form below to contact me. Please, no spam. I strive to respond to all legitimate inquiries, but please be clear and concise in your message. Whether you have a question about my work, a project collaboration, or just want to connect, feel free to reach out. I look forward to hearing from you!"
      />
    </AnimationContainer>
  );
};

export default ContactHeader;
