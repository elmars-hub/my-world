import ContactSection from "@/components/section/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Martin Elmars for job opportunities, collaborations, or project inquiries. Available for frontend development roles and freelance work.",
};

const Contact = () => <ContactSection />;

export default Contact;
