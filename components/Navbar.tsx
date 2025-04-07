import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
];

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="flex flex-col items-center gap-y-6">
      {links.map((link, index) => {
        return (
          <Link
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
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
