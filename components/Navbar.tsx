import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SheetClose } from "./ui/sheet";

const links = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
];

interface NavbarProps {
  isMobile?: boolean;
}

const Navbar = ({ isMobile }: NavbarProps) => {
  const path = usePathname();

  const LinkComponent = ({
    children,
    ...props
  }: React.ComponentProps<typeof Link>) => {
    if (isMobile) {
      return (
        <SheetClose asChild>
          <Link {...props}>{children}</Link>
        </SheetClose>
      );
    }
    return <Link {...props}>{children}</Link>;
  };

  return (
    <nav className="flex flex-col items-center gap-y-6">
      {links.map((link, index) => {
        return (
          <LinkComponent
            href={link.path}
            key={index}
            className={`text-2xl hover:text-primary transition-all group duration-300 transition`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className=""
              />
            )}
            {link.name}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary" />
          </LinkComponent>
        );
      })}
    </nav>
  );
};

export default Navbar;
